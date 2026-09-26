import type { PluginClientContext } from "@getpaseo/plugin/client";
import { PreviewAgentPanel } from "./client/agent.client";
import { PreviewLibrary } from "./client/library.client";
import { PreviewPanel } from "./client/panel.client";

export default function contribute(client: PluginClientContext) {
  client.addSurface("library", PreviewLibrary);
  client.addSidebarItem({
    id: "library",
    title: "Diagrams",
    icon: "Shapes",
    surface: "library",
  });

  client.addWorkspacePanel({
    id: "diagrams",
    title: "Diagrams",
    icon: "Shapes",
    context: "workspace",
    Component: PreviewPanel,
  });

  // Agent context as well, because that is the only place we know whose chat to
  // post a rendered chart into.
  client.addWorkspacePanel({
    id: "diagrams-agent",
    title: "Diagrams",
    icon: "Shapes",
    context: "agent",
    Component: PreviewAgentPanel,
  });

  client.addCommandCenterItem({
    id: "send-diagram-to-chat",
    title: "Send a diagram to this chat",
    icon: "Shapes",
    keywords: ["diagram", "chart", "n8n", "workflow", "image"],
    context: "agent",
    onSelect({ openPanel }) {
      openPanel("diagrams-agent");
    },
  });

  client.addCommandCenterItem({
    id: "open-diagrams",
    title: "Open diagrams and workflows",
    icon: "Shapes",
    keywords: ["diagram", "chart", "svg", "n8n", "workflow"],
    context: "workspace",
    onSelect({ openPanel }) {
      openPanel("diagrams");
    },
  });

  return () => {};
}
