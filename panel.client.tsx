import type { PluginWorkspacePanelProps } from "@getpaseo/plugin/client";
import { useWorkspace } from "@getpaseo/plugin/client";
import React from "react";
import { PreviewBrowser } from "./browser.client";

export function PreviewPanel({ theme, layout, workspaceId }: PluginWorkspacePanelProps) {
  const directory = useWorkspace(workspaceId, (workspace) => workspace.directory);
  return (
    <PreviewBrowser
      theme={theme}
      layout={layout}
      directory={directory ?? undefined}
      heading="Diagrams"
    />
  );
}
