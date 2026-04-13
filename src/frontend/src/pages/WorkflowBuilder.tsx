import { cn } from "@/lib/utils";
import { ChevronDown, Eraser, Plus, Save, Trash2, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { CanvasConnections } from "../components/CanvasConnections";
import { NodePanel } from "../components/NodePanel";
import { useWorkflowStore } from "../store/workflowStore";
import type { NodeType, WorkflowNode } from "../types";

const NODE_COLORS: Record<
  NodeType,
  { bg: string; border: string; badge: string; dot: string }
> = {
  trigger: {
    bg: "bg-violet-500/10 hover:bg-violet-500/15",
    border: "border-violet-500/40",
    badge: "bg-violet-500/20 text-violet-300",
    dot: "bg-violet-400",
  },
  api: {
    bg: "bg-blue-500/10 hover:bg-blue-500/15",
    border: "border-blue-500/40",
    badge: "bg-blue-500/20 text-blue-300",
    dot: "bg-blue-400",
  },
  condition: {
    bg: "bg-amber-500/10 hover:bg-amber-500/15",
    border: "border-amber-500/40",
    badge: "bg-amber-500/20 text-amber-300",
    dot: "bg-amber-400",
  },
  action: {
    bg: "bg-emerald-500/10 hover:bg-emerald-500/15",
    border: "border-emerald-500/40",
    badge: "bg-emerald-500/20 text-emerald-300",
    dot: "bg-emerald-400",
  },
};

const NODE_LABELS: Record<NodeType, string> = {
  trigger: "Trigger",
  api: "API",
  condition: "Condition",
  action: "Action",
};

const NODE_WIDTH = 200;
const NODE_HEIGHT = 70;

interface DragState {
  nodeId: string;
  startX: number;
  startY: number;
  origX: number;
  origY: number;
}

export default function WorkflowBuilder() {
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
    addConnection,
  } = useWorkflowStore();

  const workflow = workflows.find((w) => w.id === activeWorkflowId);
  const nodes = workflow?.nodes ?? [];
  const connections = workflow?.connections ?? [];
  const selectedNode = nodes.find((n) => n.id === selectedNodeId) ?? null;

  const canvasRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<DragState | null>(null);
  const [addMenuOpen, setAddMenuOpen] = useState(false);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  // --- Drag logic ---
  const onNodeMouseDown = useCallback(
    (e: React.MouseEvent, node: WorkflowNode) => {
      if ((e.target as HTMLElement).closest("[data-no-drag]")) return;
      e.preventDefault();
      e.stopPropagation();
      selectNode(node.id);
      dragRef.current = {
        nodeId: node.id,
        startX: e.clientX,
        startY: e.clientY,
        origX: node.x,
        origY: node.y,
      };
    },
    [selectNode],
  );

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
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

  // --- Connection logic ---
  const onOutputHandle = (e: React.MouseEvent, nodeId: string) => {
    e.stopPropagation();
    if (connectingFromId) {
      addConnection(nodeId);
    } else {
      setConnectingFrom(nodeId);
    }
  };

  const onInputHandle = (e: React.MouseEvent, nodeId: string) => {
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

  const NODE_TYPES: NodeType[] = ["trigger", "api", "condition", "action"];

  return (
    <div className="flex h-full">
      {/* Canvas area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Toolbar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card flex-shrink-0">
          <div className="relative">
            <button
              type="button"
              onClick={() => setAddMenuOpen((v) => !v)}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-smooth",
                "bg-primary text-primary-foreground hover:bg-primary/90",
              )}
              data-ocid="add-node-btn"
            >
              <Plus className="w-4 h-4" />
              Add Node
              <ChevronDown className="w-3 h-3 opacity-70" />
            </button>
            {addMenuOpen && (
              <div className="absolute top-full left-0 mt-1 z-20 bg-popover border border-border rounded-lg shadow-lg overflow-hidden min-w-[160px]">
                {NODE_TYPES.map((type) => {
                  const colors = NODE_COLORS[type];
                  return (
                    <button
                      type="button"
                      key={type}
                      onClick={() => {
                        addNode(type);
                        setAddMenuOpen(false);
                      }}
                      className="flex items-center gap-2 w-full px-3 py-2 text-sm text-left hover:bg-muted transition-smooth"
                    >
                      <span
                        className={cn("w-2 h-2 rounded-full", colors.dot)}
                      />
                      {NODE_LABELS[type]}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {selectedNodeId && (
            <button
              type="button"
              onClick={() => deleteNode(selectedNodeId)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-smooth border border-border text-muted-foreground hover:text-destructive hover:border-destructive/50"
              data-ocid="delete-node-btn"
            >
              <Trash2 className="w-4 h-4" />
              Delete
            </button>
          )}

          <button
            type="button"
            onClick={clearCanvas}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-smooth border border-border text-muted-foreground hover:text-foreground"
            data-ocid="clear-canvas-btn"
          >
            <Eraser className="w-4 h-4" />
            Clear
          </button>

          {connectingFromId && (
            <div className="ml-auto flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/30 text-primary text-sm">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Click a node to connect — or press Esc to cancel
              <button
                type="button"
                onClick={() => setConnectingFrom(null)}
                className="ml-1 hover:text-foreground"
                aria-label="Cancel connection"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Canvas */}
        <div
          ref={canvasRef}
          className="flex-1 relative overflow-auto canvas-grid cursor-default"
          onClick={onCanvasClick}
          onKeyUp={(e) => e.key === "Escape" && onCanvasClick()}
          role="presentation"
          data-ocid="workflow-canvas"
          style={{ minWidth: 800, minHeight: 600 }}
        >
          {/* SVG connections layer */}
          <CanvasConnections
            nodes={nodes}
            connections={connections}
            nodeWidth={NODE_WIDTH}
            nodeHeight={NODE_HEIGHT}
          />

          {/* Nodes */}
          {nodes.map((node) => {
            const colors = NODE_COLORS[node.type];
            const isSelected = selectedNodeId === node.id;
            const isConnectingFrom = connectingFromId === node.id;
            const isHovered = hoveredNodeId === node.id;

            return (
              <div
                key={node.id}
                style={{
                  position: "absolute",
                  left: node.x,
                  top: node.y,
                  width: NODE_WIDTH,
                }}
                onMouseDown={(e) => onNodeMouseDown(e, node)}
                onClick={(e) => e.stopPropagation()}
                onKeyUp={(e) => e.stopPropagation()}
                onMouseEnter={() => setHoveredNodeId(node.id)}
                onMouseLeave={() => setHoveredNodeId(null)}
                className={cn(
                  "rounded-lg border transition-smooth select-none",
                  colors.bg,
                  colors.border,
                  isSelected &&
                    "ring-2 ring-primary ring-offset-1 ring-offset-background",
                  isConnectingFrom &&
                    "ring-2 ring-amber-400 ring-offset-1 ring-offset-background",
                  "cursor-grab active:cursor-grabbing",
                )}
                data-ocid={`node-${node.id}`}
              >
                <div className="flex items-center gap-2 px-3 py-2.5">
                  <span
                    className={cn(
                      "text-xs px-1.5 py-0.5 rounded font-medium flex-shrink-0",
                      colors.badge,
                    )}
                  >
                    {NODE_LABELS[node.type]}
                  </span>
                  <span className="text-sm font-medium text-foreground truncate min-w-0">
                    {node.label}
                  </span>

                  {/* Delete on hover */}
                  {(isHovered || isSelected) && (
                    <button
                      type="button"
                      data-no-drag="true"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteNode(node.id);
                      }}
                      className="ml-auto p-0.5 rounded hover:bg-destructive/20 text-muted-foreground hover:text-destructive transition-smooth flex-shrink-0"
                      aria-label="Delete node"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>

                {/* Output handle (right) */}
                <button
                  type="button"
                  data-no-drag="true"
                  onClick={(e) => onOutputHandle(e, node.id)}
                  className={cn(
                    "absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2",
                    "w-3 h-3 rounded-full border-2 border-background transition-smooth",
                    isConnectingFrom
                      ? "bg-amber-400 scale-125"
                      : "bg-muted-foreground hover:bg-primary hover:scale-125",
                  )}
                  aria-label="Draw connection from this node"
                />

                {/* Input handle (left) */}
                <button
                  type="button"
                  data-no-drag="true"
                  onClick={(e) => onInputHandle(e, node.id)}
                  className={cn(
                    "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2",
                    "w-3 h-3 rounded-full border-2 border-background transition-smooth",
                    connectingFromId && connectingFromId !== node.id
                      ? "bg-primary hover:scale-125 cursor-pointer"
                      : "bg-muted-foreground/50",
                  )}
                  aria-label="Connect to this node"
                />
              </div>
            );
          })}

          {/* Empty state */}
          {nodes.length === 0 && (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-3"
              onClick={(e) => e.stopPropagation()}
              onKeyUp={(e) => e.stopPropagation()}
              role="presentation"
              data-ocid="canvas-empty-state"
            >
              <div className="w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center">
                <Plus className="w-6 h-6 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Click <strong className="text-foreground">Add Node</strong> to
                start building your workflow
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Right panel */}
      {selectedNode && <NodePanel node={selectedNode} />}
    </div>
  );
}
