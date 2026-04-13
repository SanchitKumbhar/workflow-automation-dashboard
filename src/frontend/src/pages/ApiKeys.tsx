import { cn } from "@/lib/utils";
import { Check, Copy, Eye, EyeOff, RefreshCw } from "lucide-react";
import { useState } from "react";
import type { ApiEndpoint } from "../types";

function generateKey(): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const rand = Array.from(
    { length: 32 },
    () => chars[Math.floor(Math.random() * chars.length)],
  ).join("");
  return `wf_live_${rand}`;
}

const ENDPOINTS: ApiEndpoint[] = [
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
          lastUpdated: "2026-04-13T10:00:00Z",
        },
        {
          id: "wf-2",
          name: "Slack Alert on Error",
          status: "active",
          lastUpdated: "2026-04-12T08:30:00Z",
        },
      ],
      null,
      2,
    ),
  },
  {
    method: "POST",
    path: "/api/workflows",
    description: "Create a new workflow",
    requestBody: JSON.stringify(
      { name: "My New Workflow", status: "inactive" },
      null,
      2,
    ),
    responseBody: JSON.stringify(
      {
        id: "wf-new-abc",
        name: "My New Workflow",
        status: "inactive",
        nodes: [],
        connections: [],
      },
      null,
      2,
    ),
  },
  {
    method: "PATCH",
    path: "/api/workflows/:id",
    description: "Update a workflow by ID",
    requestBody: JSON.stringify(
      { name: "Updated Name", status: "active" },
      null,
      2,
    ),
    responseBody: JSON.stringify(
      { id: "wf-1", name: "Updated Name", status: "active" },
      null,
      2,
    ),
  },
  {
    method: "DELETE",
    path: "/api/workflows/:id",
    description: "Delete a workflow by ID",
    responseBody: JSON.stringify({ success: true, deleted: "wf-1" }, null, 2),
  },
];

const METHOD_COLORS: Record<string, string> = {
  GET: "bg-blue-500/15 text-blue-400",
  POST: "bg-emerald-500/15 text-emerald-400",
  PATCH: "bg-amber-500/15 text-amber-400",
  DELETE: "bg-red-500/15 text-red-400",
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };
  return (
    <button
      type="button"
      onClick={copy}
      className="p-1.5 rounded text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
      aria-label="Copy to clipboard"
      data-ocid="copy-btn"
    >
      {copied ? (
        <Check className="w-3.5 h-3.5 text-emerald-400" />
      ) : (
        <Copy className="w-3.5 h-3.5" />
      )}
    </button>
  );
}

function CodeBlock({ code, label }: { code: string; label: string }) {
  return (
    <div className="mt-2">
      <div className="flex items-center justify-between px-3 py-1.5 bg-muted/50 rounded-t-lg border border-border border-b-0">
        <span className="text-xs text-muted-foreground">{label}</span>
        <CopyButton text={code} />
      </div>
      <pre className="px-4 py-3 bg-background border border-border rounded-b-lg text-xs text-foreground font-mono overflow-x-auto scrollbar-thin leading-relaxed">
        {code}
      </pre>
    </div>
  );
}

export default function ApiKeys() {
  const [apiKey, setApiKey] = useState(() => generateKey());
  const [showKey, setShowKey] = useState(false);
  const [keyCopied, setKeyCopied] = useState(false);

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

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-foreground">API & Keys</h1>
        <p className="text-sm text-muted-foreground mt-0.5">
          Manage your API key and explore the REST API reference
        </p>
      </div>

      {/* API Key section */}
      <section
        className="bg-card border border-border rounded-lg p-5 space-y-4"
        data-ocid="api-key-section"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-foreground">
            Your API Key
          </h2>
          <span className="text-xs text-muted-foreground px-2 py-0.5 rounded-full bg-muted">
            Live
          </span>
        </div>

        <p className="text-xs text-muted-foreground">
          Use this key to authenticate all API requests. Keep it secret — treat
          it like a password.
        </p>

        {/* Key display */}
        <div className="flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2 px-3 py-2.5 rounded-lg bg-background border border-input font-mono text-sm text-foreground overflow-hidden">
            <span className="truncate">{showKey ? apiKey : maskedKey}</span>
          </div>

          <button
            type="button"
            onClick={() => setShowKey((v) => !v)}
            className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
            aria-label={showKey ? "Hide key" : "Reveal key"}
            data-ocid="toggle-key-visibility"
          >
            {showKey ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>

          <button
            type="button"
            onClick={copyKey}
            className={cn(
              "flex items-center gap-1.5 px-3 py-2.5 rounded-lg border text-sm font-medium transition-smooth",
              keyCopied
                ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                : "border-border text-muted-foreground hover:text-foreground hover:bg-muted",
            )}
            data-ocid="copy-api-key-btn"
          >
            {keyCopied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
            {keyCopied ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className="flex items-center justify-between pt-1">
          <p className="text-xs text-muted-foreground">
            Rotate your key if it has been compromised.
          </p>
          <button
            type="button"
            onClick={regenerate}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-sm font-medium hover:bg-destructive/15 transition-smooth"
            data-ocid="regenerate-key-btn"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Generate New Key
          </button>
        </div>
      </section>

      {/* REST API Reference */}
      <section data-ocid="api-reference-section">
        <h2 className="text-sm font-semibold text-foreground mb-4">
          REST API Reference
        </h2>

        <div className="space-y-4">
          {ENDPOINTS.map((ep) => (
            <div
              key={`${ep.method}-${ep.path}`}
              className="bg-card border border-border rounded-lg overflow-hidden"
              data-ocid={`endpoint-${ep.method.toLowerCase()}-${ep.path.replace(/\//g, "-").replace(/:/g, "")}`}
            >
              {/* Endpoint row */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
                <span
                  className={cn(
                    "px-2 py-0.5 rounded text-xs font-bold font-mono",
                    METHOD_COLORS[ep.method],
                  )}
                >
                  {ep.method}
                </span>
                <code className="text-sm font-mono text-foreground">
                  {ep.path}
                </code>
                <span className="text-xs text-muted-foreground ml-auto">
                  {ep.description}
                </span>
              </div>

              {/* Code blocks */}
              <div className="px-4 py-3 space-y-0">
                {ep.requestBody && (
                  <CodeBlock code={ep.requestBody} label="Request Body" />
                )}
                <CodeBlock code={ep.responseBody} label="Response" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer branding */}
      <p className="text-center text-xs text-muted-foreground pb-4">
        © {new Date().getFullYear()}. Built with love using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
            typeof window !== "undefined" ? window.location.hostname : "",
          )}`}
          target="_blank"
          rel="noreferrer"
          className="text-primary hover:underline"
        >
          caffeine.ai
        </a>
      </p>
    </div>
  );
}
