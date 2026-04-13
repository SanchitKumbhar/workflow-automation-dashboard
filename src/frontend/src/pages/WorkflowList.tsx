import { cn } from "@/lib/utils";
import { useNavigate } from "@tanstack/react-router";
import { Check, Edit2, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { useWorkflowStore } from "../store/workflowStore";
import type { Workflow } from "../types";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function StatusBadge({ status }: { status: Workflow["status"] }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium",
        status === "active"
          ? "bg-emerald-500/15 text-emerald-400"
          : "bg-muted text-muted-foreground",
      )}
    >
      <span
        className={cn(
          "w-1.5 h-1.5 rounded-full",
          status === "active" ? "bg-emerald-400" : "bg-muted-foreground",
        )}
      />
      {status === "active" ? "Active" : "Inactive"}
    </span>
  );
}

export default function WorkflowList() {
  const {
    workflows,
    addWorkflow,
    deleteWorkflow,
    toggleWorkflowStatus,
    renameWorkflow,
    setActiveWorkflow,
  } = useWorkflowStore();
  const navigate = useNavigate();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");

  const startEdit = (w: Workflow) => {
    setEditingId(w.id);
    setEditName(w.name);
  };

  const commitEdit = () => {
    if (editingId && editName.trim()) {
      renameWorkflow(editingId, editName.trim());
    }
    setEditingId(null);
    setEditName("");
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-foreground">Workflows</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            {workflows.length} workflow{workflows.length !== 1 ? "s" : ""} total
          </p>
        </div>
        <button
          type="button"
          onClick={addWorkflow}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-smooth"
          data-ocid="new-workflow-btn"
        >
          <Plus className="w-4 h-4" />
          New Workflow
        </button>
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Name
              </th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Status
              </th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Last Updated
              </th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Nodes
              </th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {workflows.map((wf) => (
              <tr
                key={wf.id}
                className="hover:bg-muted/20 transition-smooth group"
                data-ocid={`workflow-row-${wf.id}`}
              >
                {/* Name */}
                <td className="px-4 py-3">
                  {editingId === wf.id ? (
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        onBlur={commitEdit}
                        onKeyDown={(e) => e.key === "Enter" && commitEdit()}
                        ref={(el) => el?.focus()}
                        className="flex-1 px-2 py-1 rounded bg-background border border-input text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        data-ocid="workflow-name-edit-input"
                      />
                      <button
                        type="button"
                        onClick={commitEdit}
                        className="p-1 rounded text-emerald-400 hover:bg-emerald-400/10 transition-smooth"
                        aria-label="Save name"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setActiveWorkflow(wf.id);
                        navigate({ to: "/" });
                      }}
                      className="font-medium text-foreground hover:text-primary transition-smooth text-left"
                      data-ocid={`workflow-name-${wf.id}`}
                    >
                      {wf.name}
                    </button>
                  )}
                </td>

                {/* Status */}
                <td className="px-4 py-3">
                  <StatusBadge status={wf.status} />
                </td>

                {/* Last updated */}
                <td className="px-4 py-3 text-muted-foreground tabular-nums">
                  {formatDate(wf.lastUpdated)}
                </td>

                {/* Nodes count */}
                <td className="px-4 py-3 text-muted-foreground tabular-nums">
                  {wf.nodes.length}
                </td>

                {/* Actions */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1 justify-end opacity-0 group-hover:opacity-100 transition-smooth">
                    {/* Toggle active */}
                    <button
                      type="button"
                      onClick={() => toggleWorkflowStatus(wf.id)}
                      className={cn(
                        "relative inline-flex h-5 w-9 items-center rounded-full transition-smooth",
                        wf.status === "active" ? "bg-emerald-500" : "bg-muted",
                      )}
                      aria-label={
                        wf.status === "active"
                          ? "Deactivate workflow"
                          : "Activate workflow"
                      }
                      data-ocid={`toggle-status-${wf.id}`}
                    >
                      <span
                        className={cn(
                          "inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-smooth",
                          wf.status === "active"
                            ? "translate-x-[18px]"
                            : "translate-x-[3px]",
                        )}
                      />
                    </button>

                    {/* Edit */}
                    <button
                      type="button"
                      onClick={() => startEdit(wf)}
                      className="p-1.5 rounded text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
                      aria-label="Edit workflow name"
                      data-ocid={`edit-workflow-${wf.id}`}
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>

                    {/* Delete */}
                    <button
                      type="button"
                      onClick={() => deleteWorkflow(wf.id)}
                      className="p-1.5 rounded text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-smooth"
                      aria-label="Delete workflow"
                      data-ocid={`delete-workflow-${wf.id}`}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Empty state */}
        {workflows.length === 0 && (
          <div
            className="flex flex-col items-center justify-center py-16 gap-3"
            data-ocid="workflows-empty-state"
          >
            <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
              <Plus className="w-5 h-5 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">
              No workflows yet. Create your first one.
            </p>
            <button
              type="button"
              onClick={addWorkflow}
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-smooth"
              data-ocid="empty-new-workflow-btn"
            >
              New Workflow
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
