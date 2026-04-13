import { c as createLucideIcon, j as jsxRuntimeExports, r as reactExports, X, a as cn } from "./index-C3LwjDPP.js";
import { u as useWorkflowStore, P as Plus, T as Trash2 } from "./workflowStore-MWDlzgvN.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",
      key: "182aya"
    }
  ],
  ["path", { d: "M22 21H7", key: "t4ddhn" }],
  ["path", { d: "m5 11 9 9", key: "1mo9qw" }]
];
const Eraser = createLucideIcon("eraser", __iconNode$1);
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
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
];
const Save = createLucideIcon("save", __iconNode);
function CanvasConnections({
  nodes,
  connections,
  nodeWidth,
  nodeHeight
}) {
  const nodeMap = new Map(nodes.map((n) => [n.id, n]));
  const maxX = Math.max(...nodes.map((n) => n.x + nodeWidth + 40), 800);
  const maxY = Math.max(...nodes.map((n) => n.y + nodeHeight + 40), 600);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      className: "absolute inset-0 pointer-events-none",
      width: maxX,
      height: maxY,
      "aria-hidden": "true",
      style: { overflow: "visible" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "marker",
          {
            id: "arrowhead",
            markerWidth: "8",
            markerHeight: "8",
            refX: "6",
            refY: "3",
            orient: "auto",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0,0 L0,6 L8,3 z", fill: "oklch(0.62 0 0 / 0.5)" })
          }
        ) }),
        connections.map((conn) => {
          const src = nodeMap.get(conn.sourceId);
          const tgt = nodeMap.get(conn.targetId);
          if (!src || !tgt) return null;
          const x1 = src.x + nodeWidth;
          const y1 = src.y + nodeHeight / 2;
          const x2 = tgt.x;
          const y2 = tgt.y + nodeHeight / 2;
          const cx1 = x1 + Math.abs(x2 - x1) * 0.5;
          const cy1 = y1;
          const cx2 = x2 - Math.abs(x2 - x1) * 0.5;
          const cy2 = y2;
          const d = `M${x1},${y1} C${cx1},${cy1} ${cx2},${cy2} ${x2},${y2}`;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d,
              fill: "none",
              stroke: "oklch(0.62 0 0 / 0.45)",
              strokeWidth: 2,
              markerEnd: "url(#arrowhead)"
            },
            conn.id
          );
        })
      ]
    }
  );
}
function NodePanel({ node }) {
  const { updateNode, selectNode } = useWorkflowStore();
  const [form, setForm] = reactExports.useState(node);
  if (form.id !== node.id) {
    setForm(node);
  }
  const set = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));
  const save = () => updateNode(node.id, form);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "w-[280px] flex-shrink-0 border-l border-border bg-card flex flex-col",
        "transition-smooth overflow-hidden"
      ),
      "data-ocid": "node-panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground", children: "Node Properties" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => selectNode(null),
              className: "p-1 rounded text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth",
              "aria-label": "Close panel",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto scrollbar-thin px-4 py-4 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "node-label",
                className: "text-xs font-medium text-muted-foreground uppercase tracking-wide",
                children: "Label"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "node-label",
                type: "text",
                value: form.label ?? "",
                onChange: (e) => set("label", e.target.value),
                className: "w-full px-3 py-2 rounded-lg bg-background border border-input text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth",
                "data-ocid": "node-label-input"
              }
            )
          ] }),
          node.type === "api" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "node-url",
                  className: "text-xs font-medium text-muted-foreground uppercase tracking-wide",
                  children: "URL"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "node-url",
                  type: "text",
                  value: form.url ?? "",
                  onChange: (e) => set("url", e.target.value),
                  placeholder: "https://api.example.com/endpoint",
                  className: "w-full px-3 py-2 rounded-lg bg-background border border-input text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth",
                  "data-ocid": "node-url-input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "node-method",
                  className: "text-xs font-medium text-muted-foreground uppercase tracking-wide",
                  children: "Method"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "select",
                {
                  id: "node-method",
                  value: form.method ?? "GET",
                  onChange: (e) => set("method", e.target.value),
                  className: "w-full px-3 py-2 rounded-lg bg-background border border-input text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth",
                  "data-ocid": "node-method-select",
                  children: ["GET", "POST", "PUT", "PATCH", "DELETE"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: m, children: m }, m))
                }
              )
            ] })
          ] }),
          node.type === "condition" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "node-condition",
                className: "text-xs font-medium text-muted-foreground uppercase tracking-wide",
                children: "Condition Expression"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                id: "node-condition",
                value: form.condition ?? "",
                onChange: (e) => set("condition", e.target.value),
                placeholder: "e.g. user.plan === 'pro'",
                rows: 3,
                className: "w-full px-3 py-2 rounded-lg bg-background border border-input text-sm text-foreground placeholder:text-muted-foreground font-mono focus:outline-none focus:ring-2 focus:ring-ring transition-smooth resize-none",
                "data-ocid": "node-condition-input"
              }
            )
          ] }),
          node.type === "action" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "node-action-type",
                className: "text-xs font-medium text-muted-foreground uppercase tracking-wide",
                children: "Action Type"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "select",
              {
                id: "node-action-type",
                value: form.actionType ?? "send_email",
                onChange: (e) => set("actionType", e.target.value),
                className: "w-full px-3 py-2 rounded-lg bg-background border border-input text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth",
                "data-ocid": "node-action-type-select",
                children: [
                  { value: "send_email", label: "Send Email" },
                  { value: "update_crm", label: "Update CRM" },
                  { value: "post_slack", label: "Post to Slack" },
                  { value: "webhook", label: "Fire Webhook" },
                  { value: "assign_user", label: "Assign User" },
                  { value: "add_to_list", label: "Add to List" },
                  { value: "approve", label: "Auto Approve" },
                  { value: "notify_manager", label: "Notify Manager" }
                ].map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt.value, children: opt.label }, opt.value))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "node-description",
                className: "text-xs font-medium text-muted-foreground uppercase tracking-wide",
                children: "Description"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                id: "node-description",
                value: form.description ?? "",
                onChange: (e) => set("description", e.target.value),
                placeholder: "Optional notes...",
                rows: 2,
                className: "w-full px-3 py-2 rounded-lg bg-background border border-input text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth resize-none",
                "data-ocid": "node-description-input"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-4 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: save,
            className: "flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-smooth",
            "data-ocid": "node-save-btn",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
              "Save Changes"
            ]
          }
        ) })
      ]
    }
  );
}
const NODE_COLORS = {
  trigger: {
    bg: "bg-violet-500/10 hover:bg-violet-500/15",
    border: "border-violet-500/40",
    badge: "bg-violet-500/20 text-violet-300",
    dot: "bg-violet-400"
  },
  api: {
    bg: "bg-blue-500/10 hover:bg-blue-500/15",
    border: "border-blue-500/40",
    badge: "bg-blue-500/20 text-blue-300",
    dot: "bg-blue-400"
  },
  condition: {
    bg: "bg-amber-500/10 hover:bg-amber-500/15",
    border: "border-amber-500/40",
    badge: "bg-amber-500/20 text-amber-300",
    dot: "bg-amber-400"
  },
  action: {
    bg: "bg-emerald-500/10 hover:bg-emerald-500/15",
    border: "border-emerald-500/40",
    badge: "bg-emerald-500/20 text-emerald-300",
    dot: "bg-emerald-400"
  }
};
const NODE_LABELS = {
  trigger: "Trigger",
  api: "API",
  condition: "Condition",
  action: "Action"
};
const NODE_WIDTH = 200;
const NODE_HEIGHT = 70;
function WorkflowBuilder() {
  const {
    workflows,
    activeWorkflowId,
    selectedNodeId,
    connectingFromId,
    addNode,
    deleteNode,
    moveNode,
    selectNode,
    clearCanvas,
    setConnectingFrom,
    addConnection
  } = useWorkflowStore();
  const workflow = workflows.find((w) => w.id === activeWorkflowId);
  const nodes = (workflow == null ? void 0 : workflow.nodes) ?? [];
  const connections = (workflow == null ? void 0 : workflow.connections) ?? [];
  const selectedNode = nodes.find((n) => n.id === selectedNodeId) ?? null;
  const canvasRef = reactExports.useRef(null);
  const dragRef = reactExports.useRef(null);
  const [addMenuOpen, setAddMenuOpen] = reactExports.useState(false);
  const [hoveredNodeId, setHoveredNodeId] = reactExports.useState(null);
  const onNodeMouseDown = reactExports.useCallback(
    (e, node) => {
      if (e.target.closest("[data-no-drag]")) return;
      e.preventDefault();
      e.stopPropagation();
      selectNode(node.id);
      dragRef.current = {
        nodeId: node.id,
        startX: e.clientX,
        startY: e.clientY,
        origX: node.x,
        origY: node.y
      };
    },
    [selectNode]
  );
  reactExports.useEffect(() => {
    const onMouseMove = (e) => {
      if (!dragRef.current) return;
      const { nodeId, startX, startY, origX, origY } = dragRef.current;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      moveNode(nodeId, Math.max(0, origX + dx), Math.max(0, origY + dy));
    };
    const onMouseUp = () => {
      dragRef.current = null;
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [moveNode]);
  const onOutputHandle = (e, nodeId) => {
    e.stopPropagation();
    if (connectingFromId) {
      addConnection(nodeId);
    } else {
      setConnectingFrom(nodeId);
    }
  };
  const onInputHandle = (e, nodeId) => {
    e.stopPropagation();
    if (connectingFromId && connectingFromId !== nodeId) {
      addConnection(nodeId);
    }
  };
  const onCanvasClick = () => {
    if (connectingFromId) {
      setConnectingFrom(null);
    } else {
      selectNode(null);
    }
    setAddMenuOpen(false);
  };
  const NODE_TYPES = ["trigger", "api", "condition", "action"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-3 border-b border-border bg-card flex-shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setAddMenuOpen((v) => !v),
              className: cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-smooth",
                "bg-primary text-primary-foreground hover:bg-primary/90"
              ),
              "data-ocid": "add-node-btn",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
                "Add Node",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3 h-3 opacity-70" })
              ]
            }
          ),
          addMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-full left-0 mt-1 z-20 bg-popover border border-border rounded-lg shadow-lg overflow-hidden min-w-[160px]", children: NODE_TYPES.map((type) => {
            const colors = NODE_COLORS[type];
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  addNode(type);
                  setAddMenuOpen(false);
                },
                className: "flex items-center gap-2 w-full px-3 py-2 text-sm text-left hover:bg-muted transition-smooth",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: cn("w-2 h-2 rounded-full", colors.dot)
                    }
                  ),
                  NODE_LABELS[type]
                ]
              },
              type
            );
          }) })
        ] }),
        selectedNodeId && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => deleteNode(selectedNodeId),
            className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-smooth border border-border text-muted-foreground hover:text-destructive hover:border-destructive/50",
            "data-ocid": "delete-node-btn",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }),
              "Delete"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: clearCanvas,
            className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-smooth border border-border text-muted-foreground hover:text-foreground",
            "data-ocid": "clear-canvas-btn",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Eraser, { className: "w-4 h-4" }),
              "Clear"
            ]
          }
        ),
        connectingFromId && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/30 text-primary text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-primary animate-pulse" }),
          "Click a node to connect — or press Esc to cancel",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setConnectingFrom(null),
              className: "ml-1 hover:text-foreground",
              "aria-label": "Cancel connection",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          ref: canvasRef,
          className: "flex-1 relative overflow-auto canvas-grid cursor-default",
          onClick: onCanvasClick,
          onKeyUp: (e) => e.key === "Escape" && onCanvasClick(),
          role: "presentation",
          "data-ocid": "workflow-canvas",
          style: { minWidth: 800, minHeight: 600 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CanvasConnections,
              {
                nodes,
                connections,
                nodeWidth: NODE_WIDTH,
                nodeHeight: NODE_HEIGHT
              }
            ),
            nodes.map((node) => {
              const colors = NODE_COLORS[node.type];
              const isSelected = selectedNodeId === node.id;
              const isConnectingFrom = connectingFromId === node.id;
              const isHovered = hoveredNodeId === node.id;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  style: {
                    position: "absolute",
                    left: node.x,
                    top: node.y,
                    width: NODE_WIDTH
                  },
                  onMouseDown: (e) => onNodeMouseDown(e, node),
                  onClick: (e) => e.stopPropagation(),
                  onKeyUp: (e) => e.stopPropagation(),
                  onMouseEnter: () => setHoveredNodeId(node.id),
                  onMouseLeave: () => setHoveredNodeId(null),
                  className: cn(
                    "rounded-lg border transition-smooth select-none",
                    colors.bg,
                    colors.border,
                    isSelected && "ring-2 ring-primary ring-offset-1 ring-offset-background",
                    isConnectingFrom && "ring-2 ring-amber-400 ring-offset-1 ring-offset-background",
                    "cursor-grab active:cursor-grabbing"
                  ),
                  "data-ocid": `node-${node.id}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-3 py-2.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: cn(
                            "text-xs px-1.5 py-0.5 rounded font-medium flex-shrink-0",
                            colors.badge
                          ),
                          children: NODE_LABELS[node.type]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground truncate min-w-0", children: node.label }),
                      (isHovered || isSelected) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          "data-no-drag": "true",
                          onClick: (e) => {
                            e.stopPropagation();
                            deleteNode(node.id);
                          },
                          className: "ml-auto p-0.5 rounded hover:bg-destructive/20 text-muted-foreground hover:text-destructive transition-smooth flex-shrink-0",
                          "aria-label": "Delete node",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        "data-no-drag": "true",
                        onClick: (e) => onOutputHandle(e, node.id),
                        className: cn(
                          "absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2",
                          "w-3 h-3 rounded-full border-2 border-background transition-smooth",
                          isConnectingFrom ? "bg-amber-400 scale-125" : "bg-muted-foreground hover:bg-primary hover:scale-125"
                        ),
                        "aria-label": "Draw connection from this node"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        "data-no-drag": "true",
                        onClick: (e) => onInputHandle(e, node.id),
                        className: cn(
                          "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2",
                          "w-3 h-3 rounded-full border-2 border-background transition-smooth",
                          connectingFromId && connectingFromId !== node.id ? "bg-primary hover:scale-125 cursor-pointer" : "bg-muted-foreground/50"
                        ),
                        "aria-label": "Connect to this node"
                      }
                    )
                  ]
                },
                node.id
              );
            }),
            nodes.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "absolute inset-0 flex flex-col items-center justify-center gap-3",
                onClick: (e) => e.stopPropagation(),
                onKeyUp: (e) => e.stopPropagation(),
                role: "presentation",
                "data-ocid": "canvas-empty-state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-6 h-6 text-muted-foreground" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground text-center", children: [
                    "Click ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Add Node" }),
                    " to start building your workflow"
                  ] })
                ]
              }
            )
          ]
        }
      )
    ] }),
    selectedNode && /* @__PURE__ */ jsxRuntimeExports.jsx(NodePanel, { node: selectedNode })
  ] });
}
export {
  WorkflowBuilder as default
};
