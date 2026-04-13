// Workflow node types
export type NodeType = "trigger" | "api" | "condition" | "action";

export interface WorkflowNode {
  id: string;
  type: NodeType;
  label: string;
  x: number;
  y: number;
  // Type-specific fields
  url?: string;
  method?: string;
  condition?: string;
  actionType?: string;
  description?: string;
}

export interface NodeConnection {
  id: string;
  sourceId: string;
  targetId: string;
}

export type WorkflowStatus = "active" | "inactive";

export interface Workflow {
  id: string;
  name: string;
  status: WorkflowStatus;
  lastUpdated: string;
  nodes: WorkflowNode[];
  connections: NodeConnection[];
}

export interface ApiEndpoint {
  method: "GET" | "POST" | "PATCH" | "DELETE";
  path: string;
  description: string;
  requestBody?: string;
  responseBody: string;
}
