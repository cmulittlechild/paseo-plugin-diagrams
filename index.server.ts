import type { PluginServerContext } from "@getpaseo/plugin/server";
import { handleOpen, handleRender, handleShare } from "./server/handlers.server";
import {
  listItems,
  openItem,
  renderItem,
  shareItem,
  shareStatus,
  stopShare,
} from "./shared/items.shared";
import { status, stop } from "./server/share.server";
import { listAll } from "./server/sources.server";

export default function contribute(server: PluginServerContext) {
  server.handle(listItems, ({ directory }) => listAll(directory));
  server.handle(renderItem, handleRender);
  server.handle(shareItem, handleShare);
  server.handle(openItem, handleOpen);
  server.handle(shareStatus, () => status());
  server.handle(stopShare, () => stop());

  // Never leave a tunnel or listener behind when the plugin stops.
  return () => stop();
}
