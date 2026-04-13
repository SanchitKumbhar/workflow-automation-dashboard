import { c as createLucideIcon, u as useNavigate, r as reactExports, j as jsxRuntimeExports, a as cn } from "./index-C3LwjDPP.js";
import { u as useWorkflowStore, P as Plus, T as Trash2 } from "./workflowStore-MWDlzgvN.js";
import { C as Check } from "./check-DaNmV4tD.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
];
const Pen = createLucideIcon("pen", __iconNode);
function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}
function StatusBadge({ status }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium",
        status === "active" ? "bg-emerald-500/15 text-emerald-400" : "bg-muted text-muted-foreground"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: cn(
              "w-1.5 h-1.5 rounded-full",
              status === "active" ? "bg-emerald-400" : "bg-muted-foreground"
            )
          }
        ),
        status === "active" ? "Active" : "Inactive"
      ]
    }
  );
}
function WorkflowList() {
  const {
    workflows,
    addWorkflow,
    deleteWorkflow,
    toggleWorkflowStatus,
    renameWorkflow,
    setActiveWorkflow
  } = useWorkflowStore();
  const navigate = useNavigate();
  const [editingId, setEditingId] = reactExports.useState(null);
  const [editName, setEditName] = reactExports.useState("");
  const startEdit = (w) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold text-foreground", children: "Workflows" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-0.5", children: [
          workflows.length,
          " workflow",
          workflows.length !== 1 ? "s" : "",
          " total"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: addWorkflow,
          className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-smooth",
          "data-ocid": "new-workflow-btn",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
            "New Workflow"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-lg overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wide", children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wide", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wide", children: "Last Updated" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wide", children: "Nodes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: workflows.map((wf) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: "hover:bg-muted/20 transition-smooth group",
            "data-ocid": `workflow-row-${wf.id}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: editingId === wf.id ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    value: editName,
                    onChange: (e) => setEditName(e.target.value),
                    onBlur: commitEdit,
                    onKeyDown: (e) => e.key === "Enter" && commitEdit(),
                    ref: (el) => el == null ? void 0 : el.focus(),
                    className: "flex-1 px-2 py-1 rounded bg-background border border-input text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                    "data-ocid": "workflow-name-edit-input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: commitEdit,
                    className: "p-1 rounded text-emerald-400 hover:bg-emerald-400/10 transition-smooth",
                    "aria-label": "Save name",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4" })
                  }
                )
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setActiveWorkflow(wf.id);
                    navigate({ to: "/" });
                  },
                  className: "font-medium text-foreground hover:text-primary transition-smooth text-left",
                  "data-ocid": `workflow-name-${wf.id}`,
                  children: wf.name
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: wf.status }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground tabular-nums", children: formatDate(wf.lastUpdated) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground tabular-nums", children: wf.nodes.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 justify-end opacity-0 group-hover:opacity-100 transition-smooth", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => toggleWorkflowStatus(wf.id),
                    className: cn(
                      "relative inline-flex h-5 w-9 items-center rounded-full transition-smooth",
                      wf.status === "active" ? "bg-emerald-500" : "bg-muted"
                    ),
                    "aria-label": wf.status === "active" ? "Deactivate workflow" : "Activate workflow",
                    "data-ocid": `toggle-status-${wf.id}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: cn(
                          "inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-smooth",
                          wf.status === "active" ? "translate-x-[18px]" : "translate-x-[3px]"
                        )
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => startEdit(wf),
                    className: "p-1.5 rounded text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth",
                    "aria-label": "Edit workflow name",
                    "data-ocid": `edit-workflow-${wf.id}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-3.5 h-3.5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => deleteWorkflow(wf.id),
                    className: "p-1.5 rounded text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-smooth",
                    "aria-label": "Delete workflow",
                    "data-ocid": `delete-workflow-${wf.id}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                  }
                )
              ] }) })
            ]
          },
          wf.id
        )) })
      ] }),
      workflows.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex flex-col items-center justify-center py-16 gap-3",
          "data-ocid": "workflows-empty-state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-5 h-5 text-muted-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No workflows yet. Create your first one." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: addWorkflow,
                className: "px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-smooth",
                "data-ocid": "empty-new-workflow-btn",
                children: "New Workflow"
              }
            )
          ]
        }
      )
    ] })
  ] });
}
export {
  WorkflowList as default
};
