import type { NodeConnection, WorkflowNode } from "../types";

interface Props {
  nodes: WorkflowNode[];
  connections: NodeConnection[];
  nodeWidth: number;
  nodeHeight: number;
}

export function CanvasConnections({
  nodes,
  connections,
  nodeWidth,
  nodeHeight,
}: Props) {
  const nodeMap = new Map(nodes.map((n) => [n.id, n]));

  const maxX = Math.max(...nodes.map((n) => n.x + nodeWidth + 40), 800);
  const maxY = Math.max(...nodes.map((n) => n.y + nodeHeight + 40), 600);

  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      width={maxX}
      height={maxY}
      aria-hidden="true"
      style={{ overflow: "visible" }}
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L0,6 L8,3 z" fill="oklch(0.62 0 0 / 0.5)" />
        </marker>
      </defs>
      {connections.map((conn) => {
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

        return (
          <path
            key={conn.id}
            d={d}
            fill="none"
            stroke="oklch(0.62 0 0 / 0.45)"
            strokeWidth={2}
            markerEnd="url(#arrowhead)"
          />
        );
      })}
    </svg>
  );
}
