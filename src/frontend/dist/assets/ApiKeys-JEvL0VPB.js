import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, a as cn } from "./index-C3LwjDPP.js";
import { C as Check } from "./check-DaNmV4tD.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
];
const Copy = createLucideIcon("copy", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
];
const EyeOff = createLucideIcon("eye-off", __iconNode$2);
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
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = createLucideIcon("eye", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
];
const RefreshCw = createLucideIcon("refresh-cw", __iconNode);
function generateKey() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const rand = Array.from(
    { length: 32 },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join("");
  return `wf_live_${rand}`;
}
const ENDPOINTS = [
  {
    method: "GET",
    path: "/api/workflows",
    description: "List all workflows",
    responseBody: JSON.stringify(
      [
        {
          id: "wf-1",
          name: "Customer Onboarding",
          status: "active",
          lastUpdated: "2026-04-13T10:00:00Z"
        },
        {
          id: "wf-2",
          name: "Slack Alert on Error",
          status: "active",
          lastUpdated: "2026-04-12T08:30:00Z"
        }
      ],
      null,
      2
    )
  },
  {
    method: "POST",
    path: "/api/workflows",
    description: "Create a new workflow",
    requestBody: JSON.stringify(
      { name: "My New Workflow", status: "inactive" },
      null,
      2
    ),
    responseBody: JSON.stringify(
      {
        id: "wf-new-abc",
        name: "My New Workflow",
        status: "inactive",
        nodes: [],
        connections: []
      },
      null,
      2
    )
  },
  {
    method: "PATCH",
    path: "/api/workflows/:id",
    description: "Update a workflow by ID",
    requestBody: JSON.stringify(
      { name: "Updated Name", status: "active" },
      null,
      2
    ),
    responseBody: JSON.stringify(
      { id: "wf-1", name: "Updated Name", status: "active" },
      null,
      2
    )
  },
  {
    method: "DELETE",
    path: "/api/workflows/:id",
    description: "Delete a workflow by ID",
    responseBody: JSON.stringify({ success: true, deleted: "wf-1" }, null, 2)
  }
];
const METHOD_COLORS = {
  GET: "bg-blue-500/15 text-blue-400",
  POST: "bg-emerald-500/15 text-emerald-400",
  PATCH: "bg-amber-500/15 text-amber-400",
  DELETE: "bg-red-500/15 text-red-400"
};
function CopyButton({ text }) {
  const [copied, setCopied] = reactExports.useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick: copy,
      className: "p-1.5 rounded text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth",
      "aria-label": "Copy to clipboard",
      "data-ocid": "copy-btn",
      children: copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5 text-emerald-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3.5 h-3.5" })
    }
  );
}
function CodeBlock({ code, label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-3 py-1.5 bg-muted/50 rounded-t-lg border border-border border-b-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CopyButton, { text: code })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "px-4 py-3 bg-background border border-border rounded-b-lg text-xs text-foreground font-mono overflow-x-auto scrollbar-thin leading-relaxed", children: code })
  ] });
}
function ApiKeys() {
  const [apiKey, setApiKey] = reactExports.useState(() => generateKey());
  const [showKey, setShowKey] = reactExports.useState(false);
  const [keyCopied, setKeyCopied] = reactExports.useState(false);
  const regenerate = () => {
    setApiKey(generateKey());
    setShowKey(false);
    setKeyCopied(false);
  };
  const copyKey = () => {
    navigator.clipboard.writeText(apiKey).then(() => {
      setKeyCopied(true);
      setTimeout(() => setKeyCopied(false), 1800);
    });
  };
  const maskedKey = `${apiKey.slice(0, 8)}••••••••••••••••••••••••••••••••${apiKey.slice(-4)}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 max-w-3xl mx-auto space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold text-foreground", children: "API & Keys" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "Manage your API key and explore the REST API reference" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "bg-card border border-border rounded-lg p-5 space-y-4",
        "data-ocid": "api-key-section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground", children: "Your API Key" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground px-2 py-0.5 rounded-full bg-muted", children: "Live" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Use this key to authenticate all API requests. Keep it secret — treat it like a password." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center gap-2 px-3 py-2.5 rounded-lg bg-background border border-input font-mono text-sm text-foreground overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: showKey ? apiKey : maskedKey }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setShowKey((v) => !v),
                className: "p-2.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth",
                "aria-label": showKey ? "Hide key" : "Reveal key",
                "data-ocid": "toggle-key-visibility",
                children: showKey ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: copyKey,
                className: cn(
                  "flex items-center gap-1.5 px-3 py-2.5 rounded-lg border text-sm font-medium transition-smooth",
                  keyCopied ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400" : "border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                ),
                "data-ocid": "copy-api-key-btn",
                children: [
                  keyCopied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-4 h-4" }),
                  keyCopied ? "Copied!" : "Copy"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Rotate your key if it has been compromised." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: regenerate,
                className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-sm font-medium hover:bg-destructive/15 transition-smooth",
                "data-ocid": "regenerate-key-btn",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3.5 h-3.5" }),
                  "Generate New Key"
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "api-reference-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground mb-4", children: "REST API Reference" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: ENDPOINTS.map((ep) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-lg overflow-hidden",
          "data-ocid": `endpoint-${ep.method.toLowerCase()}-${ep.path.replace(/\//g, "-").replace(/:/g, "")}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-3 border-b border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: cn(
                    "px-2 py-0.5 rounded text-xs font-bold font-mono",
                    METHOD_COLORS[ep.method]
                  ),
                  children: ep.method
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-sm font-mono text-foreground", children: ep.path }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground ml-auto", children: ep.description })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 space-y-0", children: [
              ep.requestBody && /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { code: ep.requestBody, label: "Request Body" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CodeBlock, { code: ep.responseBody, label: "Response" })
            ] })
          ]
        },
        `${ep.method}-${ep.path}`
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-xs text-muted-foreground pb-4", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      ". Built with love using",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
            typeof window !== "undefined" ? window.location.hostname : ""
          )}`,
          target: "_blank",
          rel: "noreferrer",
          className: "text-primary hover:underline",
          children: "caffeine.ai"
        }
      )
    ] })
  ] });
}
export {
  ApiKeys as default
};
