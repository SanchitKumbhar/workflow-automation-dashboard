import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import Layout from "./Layout";

const WorkflowBuilder = lazy(() => import("./pages/WorkflowBuilder"));
const WorkflowList = lazy(() => import("./pages/WorkflowList"));
const ApiKeys = lazy(() => import("./pages/ApiKeys"));

const PageLoader = () => (
  <div className="flex-1 flex items-center justify-center min-h-[400px]">
    <div className="w-6 h-6 rounded-full border-2 border-primary border-t-transparent animate-spin" />
  </div>
);

const rootRoute = createRootRoute({
  component: Layout,
});

const builderRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <WorkflowBuilder />
    </Suspense>
  ),
});

const workflowsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/workflows",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <WorkflowList />
    </Suspense>
  ),
});

const apiKeysRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/api-keys",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <ApiKeys />
    </Suspense>
  ),
});

const routeTree = rootRoute.addChildren([
  builderRoute,
  workflowsRoute,
  apiKeysRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
