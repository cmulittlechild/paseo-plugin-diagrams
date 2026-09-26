import type { PluginServerContext } from "@getpaseo/plugin/server";
import { handleOpen, handleRender, handleShare } from "./handlers.server";
import {
  listItems,
  openItem,
  renderItem,
  shareItem,
  shareStatus,
  stopShare,
} from "./items.shared";
import { status, stop } from "./share.server";
import { listAll } from "./sources.server";

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
