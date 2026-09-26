import type { PluginSurfaceProps } from "@getpaseo/plugin/client";
import React from "react";
import { PreviewBrowser } from "./browser.client";

export function PreviewLibrary({ theme, layout }: PluginSurfaceProps) {
  return <PreviewBrowser theme={theme} layout={layout} heading="Diagrams" />;
}
