import { cn } from "@/lib/utils";
import { Save, X } from "lucide-react";
import { useState } from "react";
import { useWorkflowStore } from "../store/workflowStore";
import type { WorkflowNode } from "../types";

interface NodePanelProps {
  node: WorkflowNode;
}

export function NodePanel({ node }: NodePanelProps) {
  const { updateNode, selectNode } = useWorkflowStore();
  const [form, setForm] = useState<Partial<WorkflowNode>>(node);

  if (form.id !== node.id) {
    setForm(node);
  }

  const set = (key: keyof WorkflowNode, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const save = () => updateNode(node.id, form);

  return (
    <div
      className={cn(
        "w-[280px] flex-shrink-0 border-l border-border bg-card flex flex-col",
        "transition-smooth overflow-hidden",
      )}
      data-ocid="node-panel"
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <h3 className="text-sm font-semibold text-foreground">
          Node Properties
        </h3>
        <button
          type="button"
          onClick={() => selectNode(null)}
          className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
          aria-label="Close panel"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin px-4 py-4 space-y-4">
        <div className="space-y-1.5">
          <label
            htmlFor="node-label"
            className="text-xs font-medium text-muted-foreground uppercase tracking-wide"
          >
            Label
          </label>
          <input
            id="node-label"
            type="text"
            value={form.label ?? ""}
            onChange={(e) => set("label", e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-background border border-input text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
            data-ocid="node-label-input"
          />
        </div>

        {node.type === "api" && (
          <>
            <div className="space-y-1.5">
              <label
                htmlFor="node-url"
                className="text-xs font-medium text-muted-foreground uppercase tracking-wide"
              >
                URL
              </label>
              <input
                id="node-url"
                type="text"
                value={form.url ?? ""}
                onChange={(e) => set("url", e.target.value)}
                placeholder="https://api.example.com/endpoint"
                className="w-full px-3 py-2 rounded-lg bg-background border border-input text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                data-ocid="node-url-input"
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="node-method"
                className="text-xs font-medium text-muted-foreground uppercase tracking-wide"
              >
                Method
              </label>
              <select
                id="node-method"
                value={form.method ?? "GET"}
                onChange={(e) => set("method", e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-background border border-input text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                data-ocid="node-method-select"
              >
                {["GET", "POST", "PUT", "PATCH", "DELETE"].map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}

        {node.type === "condition" && (
          <div className="space-y-1.5">
            <label
              htmlFor="node-condition"
              className="text-xs font-medium text-muted-foreground uppercase tracking-wide"
            >
              Condition Expression
            </label>
            <textarea
              id="node-condition"
              value={form.condition ?? ""}
              onChange={(e) => set("condition", e.target.value)}
              placeholder="e.g. user.plan === 'pro'"
              rows={3}
              className="w-full px-3 py-2 rounded-lg bg-background border border-input text-sm text-foreground placeholder:text-muted-foreground font-mono focus:outline-none focus:ring-2 focus:ring-ring transition-smooth resize-none"
              data-ocid="node-condition-input"
            />
          </div>
        )}

        {node.type === "action" && (
          <div className="space-y-1.5">
            <label
              htmlFor="node-action-type"
              className="text-xs font-medium text-muted-foreground uppercase tracking-wide"
            >
              Action Type
            </label>
            <select
              id="node-action-type"
              value={form.actionType ?? "send_email"}
              onChange={(e) => set("actionType", e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-background border border-input text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
              data-ocid="node-action-type-select"
            >
              {[
                { value: "send_email", label: "Send Email" },
                { value: "update_crm", label: "Update CRM" },
                { value: "post_slack", label: "Post to Slack" },
                { value: "webhook", label: "Fire Webhook" },
                { value: "assign_user", label: "Assign User" },
                { value: "add_to_list", label: "Add to List" },
                { value: "approve", label: "Auto Approve" },
                { value: "notify_manager", label: "Notify Manager" },
              ].map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="space-y-1.5">
          <label
            htmlFor="node-description"
            className="text-xs font-medium text-muted-foreground uppercase tracking-wide"
          >
            Description
          </label>
          <textarea
            id="node-description"
            value={form.description ?? ""}
            onChange={(e) => set("description", e.target.value)}
            placeholder="Optional notes..."
            rows={2}
            className="w-full px-3 py-2 rounded-lg bg-background border border-input text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth resize-none"
            data-ocid="node-description-input"
          />
        </div>
      </div>

      <div className="px-4 py-4 border-t border-border">
        <button
          type="button"
          onClick={save}
          className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-smooth"
          data-ocid="node-save-btn"
        >
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>
    </div>
  );
}
