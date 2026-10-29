import { StrictMode } from "react";
import { renderToPipeableStream } from "react-dom/server";
import { Writable } from "node:stream";
import App from "./App.jsx";
export { getHeadTags, getPageMetadata, getPublishedPages, siteUrl } from "./data/seo";

export function render(pathname) {
  return new Promise((resolve, reject) => {
    let html = "";
    let failure;
    const destination = new Writable({
      write(chunk, encoding, callback) { html += chunk.toString(); callback(); },
    });
    destination.on("finish", () => failure ? reject(failure) : resolve(html));
    destination.on("error", reject);
    const stream = renderToPipeableStream(<StrictMode><App pathname={pathname} /></StrictMode>, {
      onAllReady() { stream.pipe(destination); },
      onShellError: reject,
      onError(error) { failure = error; },
    });
  });
}
