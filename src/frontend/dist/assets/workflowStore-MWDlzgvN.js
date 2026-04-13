import { c as createLucideIcon, R as React } from "./index-C3LwjDPP.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const getInitialState = () => initialState;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const api = { setState, getState, getInitialState, subscribe };
  const initialState = state = createState(setState, getState, api);
  return api;
};
const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
const identity = (arg) => arg;
function useStore(api, selector = identity) {
  const slice = React.useSyncExternalStore(
    api.subscribe,
    React.useCallback(() => selector(api.getState()), [api, selector]),
    React.useCallback(() => selector(api.getInitialState()), [api, selector])
  );
  React.useDebugValue(slice);
  return slice;
}
const createImpl = (createState) => {
  const api = createStore(createState);
  const useBoundStore = (selector) => useStore(api, selector);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
const create = (createState) => createState ? createImpl(createState) : createImpl;
function generateId() {
  return Math.random().toString(36).slice(2, 10);
}
const now = (/* @__PURE__ */ new Date()).toISOString();
const daysAgo = (n) => new Date(Date.now() - n * 864e5).toISOString();
const sampleWorkflows = [
  {
    id: "wf-1",
    name: "Customer Onboarding",
    status: "active",
    lastUpdated: daysAgo(0),
    nodes: [
      { id: "n1", type: "trigger", label: "New Form Submission", x: 80, y: 80 },
      {
        id: "n2",
        type: "api",
        label: "Fetch Customer Data",
        x: 320,
        y: 180,
        url: "https://api.example.com/customers",
        method: "GET"
      },
      {
        id: "n3",
        type: "condition",
        label: "Is Plan 'Pro'?",
        x: 240,
        y: 320,
        condition: "customer.plan === 'pro'"
      },
      {
        id: "n4",
        type: "action",
        label: "Send Welcome Email",
        x: 480,
        y: 240,
        actionType: "send_email"
      },
      {
        id: "n5",
        type: "action",
        label: "Update CRM Record",
        x: 480,
        y: 400,
        actionType: "update_crm"
      }
    ],
    connections: [
      { id: "c1", sourceId: "n1", targetId: "n2" },
      { id: "c2", sourceId: "n2", targetId: "n3" },
      { id: "c3", sourceId: "n3", targetId: "n4" },
      { id: "c4", sourceId: "n3", targetId: "n5" }
    ]
  },
  {
    id: "wf-2",
    name: "Slack Alert on Error",
    status: "active",
    lastUpdated: daysAgo(1),
    nodes: [
      { id: "n1", type: "trigger", label: "Error Event", x: 80, y: 120 },
      {
        id: "n2",
        type: "api",
        label: "Post to Slack",
        x: 320,
        y: 120,
        url: "https://hooks.slack.com/...",
        method: "POST"
      }
    ],
    connections: [{ id: "c1", sourceId: "n1", targetId: "n2" }]
  },
  {
    id: "wf-3",
    name: "Daily Report Generator",
    status: "inactive",
    lastUpdated: daysAgo(3),
    nodes: [
      { id: "n1", type: "trigger", label: "Cron: 8am Daily", x: 80, y: 120 },
      {
        id: "n2",
        type: "api",
        label: "Fetch Analytics",
        x: 300,
        y: 120,
        url: "https://api.analytics.io/report",
        method: "GET"
      },
      {
        id: "n3",
        type: "action",
        label: "Email Report",
        x: 520,
        y: 120,
        actionType: "send_email"
      }
    ],
    connections: [
      { id: "c1", sourceId: "n1", targetId: "n2" },
      { id: "c2", sourceId: "n2", targetId: "n3" }
    ]
  },
  {
    id: "wf-4",
    name: "Lead Scoring Pipeline",
    status: "active",
    lastUpdated: daysAgo(5),
    nodes: [
      { id: "n1", type: "trigger", label: "New Lead", x: 80, y: 120 },
      {
        id: "n2",
        type: "condition",
        label: "Score > 80?",
        x: 300,
        y: 120,
        condition: "lead.score > 80"
      },
      {
        id: "n3",
        type: "action",
        label: "Assign to Sales",
        x: 520,
        y: 80,
        actionType: "assign_user"
      },
      {
        id: "n4",
        type: "action",
        label: "Add to Nurture",
        x: 520,
        y: 200,
        actionType: "add_to_list"
      }
    ],
    connections: [
      { id: "c1", sourceId: "n1", targetId: "n2" },
      { id: "c2", sourceId: "n2", targetId: "n3" },
      { id: "c3", sourceId: "n2", targetId: "n4" }
    ]
  },
  {
    id: "wf-5",
    name: "Invoice Auto-Approval",
    status: "inactive",
    lastUpdated: daysAgo(8),
    nodes: [
      { id: "n1", type: "trigger", label: "Invoice Submitted", x: 80, y: 120 },
      {
        id: "n2",
        type: "condition",
        label: "Amount < $1000?",
        x: 300,
        y: 120,
        condition: "invoice.amount < 1000"
      },
      {
        id: "n3",
        type: "action",
        label: "Auto Approve",
        x: 520,
        y: 80,
        actionType: "approve"
      },
      {
        id: "n4",
        type: "action",
        label: "Request Review",
        x: 520,
        y: 200,
        actionType: "notify_manager"
      }
    ],
    connections: [
      { id: "c1", sourceId: "n1", targetId: "n2" },
      { id: "c2", sourceId: "n2", targetId: "n3" },
      { id: "c3", sourceId: "n2", targetId: "n4" }
    ]
  }
];
const useWorkflowStore = create((set, get) => ({
  workflows: sampleWorkflows,
  activeWorkflowId: "wf-1",
  selectedNodeId: null,
  connectingFromId: null,
  addWorkflow: () => {
    const id = `wf-${generateId()}`;
    set((s) => ({
      workflows: [
        ...s.workflows,
        {
          id,
          name: `New Workflow ${s.workflows.length + 1}`,
          status: "inactive",
          lastUpdated: now,
          nodes: [],
          connections: []
        }
      ],
      activeWorkflowId: id
    }));
  },
  deleteWorkflow: (id) => set((s) => {
    var _a;
    const remaining = s.workflows.filter((w) => w.id !== id);
    return {
      workflows: remaining,
      activeWorkflowId: s.activeWorkflowId === id ? ((_a = remaining[0]) == null ? void 0 : _a.id) ?? "" : s.activeWorkflowId
    };
  }),
  toggleWorkflowStatus: (id) => set((s) => ({
    workflows: s.workflows.map(
      (w) => w.id === id ? {
        ...w,
        status: w.status === "active" ? "inactive" : "active",
        lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
      } : w
    )
  })),
  renameWorkflow: (id, name) => set((s) => ({
    workflows: s.workflows.map((w) => w.id === id ? { ...w, name } : w)
  })),
  setActiveWorkflow: (id) => set({ activeWorkflowId: id, selectedNodeId: null }),
  addNode: (type) => {
    const id = `n-${generateId()}`;
    const positions = {
      trigger: { x: 80, y: 120 },
      api: { x: 260, y: 120 },
      condition: { x: 260, y: 260 },
      action: { x: 440, y: 200 }
    };
    const labels = {
      trigger: "New Trigger",
      api: "API Call",
      condition: "Condition",
      action: "Action"
    };
    const node = {
      id,
      type,
      label: labels[type],
      ...positions[type]
    };
    set((s) => ({
      workflows: s.workflows.map(
        (w) => w.id === s.activeWorkflowId ? {
          ...w,
          nodes: [...w.nodes, node],
          lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
        } : w
      ),
      selectedNodeId: id
    }));
  },
  updateNode: (id, updates) => set((s) => ({
    workflows: s.workflows.map(
      (w) => w.id === s.activeWorkflowId ? {
        ...w,
        nodes: w.nodes.map(
          (n) => n.id === id ? { ...n, ...updates } : n
        ),
        lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
      } : w
    )
  })),
  deleteNode: (id) => set((s) => ({
    workflows: s.workflows.map(
      (w) => w.id === s.activeWorkflowId ? {
        ...w,
        nodes: w.nodes.filter((n) => n.id !== id),
        connections: w.connections.filter(
          (c) => c.sourceId !== id && c.targetId !== id
        )
      } : w
    ),
    selectedNodeId: s.selectedNodeId === id ? null : s.selectedNodeId
  })),
  moveNode: (id, x, y) => set((s) => ({
    workflows: s.workflows.map(
      (w) => w.id === s.activeWorkflowId ? {
        ...w,
        nodes: w.nodes.map((n) => n.id === id ? { ...n, x, y } : n)
      } : w
    )
  })),
  selectNode: (id) => set({ selectedNodeId: id }),
  clearCanvas: () => set((s) => ({
    workflows: s.workflows.map(
      (w) => w.id === s.activeWorkflowId ? {
        ...w,
        nodes: [],
        connections: [],
        lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
      } : w
    ),
    selectedNodeId: null,
    connectingFromId: null
  })),
  setConnectingFrom: (id) => set({ connectingFromId: id }),
  addConnection: (targetId) => {
    const { connectingFromId } = get();
    if (!connectingFromId || connectingFromId === targetId) {
      set({ connectingFromId: null });
      return;
    }
    const id = `c-${generateId()}`;
    set((s) => ({
      workflows: s.workflows.map((w) => {
        if (w.id !== s.activeWorkflowId) return w;
        const alreadyExists = w.connections.some(
          (c) => c.sourceId === connectingFromId && c.targetId === targetId
        );
        if (alreadyExists) return w;
        return {
          ...w,
          connections: [
            ...w.connections,
            { id, sourceId: connectingFromId, targetId }
          ]
        };
      }),
      connectingFromId: null
    }));
  },
  deleteConnection: (id) => set((s) => ({
    workflows: s.workflows.map(
      (w) => w.id === s.activeWorkflowId ? { ...w, connections: w.connections.filter((c) => c.id !== id) } : w
    )
  }))
}));
export {
  Plus as P,
  Trash2 as T,
  useWorkflowStore as u
};
