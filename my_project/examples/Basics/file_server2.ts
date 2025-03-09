import { serveDir } from "@std/http/file-server";

Deno.serve((req) => {
  const pathname = new URL(req.url).pathname;
  if (pathname.startsWith("/demo")) {
    return serveDir(req, {
      fsRoot: "./files",
      urlRoot: "demo",
      showDirListing: true,
      showIndex: false,
    });
  }

  return new Response("Your are not allowed to see the directory.");
});
