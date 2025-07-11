import React from "react";
import { renderToString } from "react-dom/server";
import App from "./app/layout.tsx";
import { Application } from "jsr:@oak/oak/application";
import { Router } from "jsr:@oak/oak/router";
import HomePage from "./app/page.tsx";
import PostPage from "./app/posts/[post]/page.tsx";
import { blogPosts } from "./lib/data.ts";

const router = new Router();

// Return home page
router.get("/", (ctx) => {
  const html = `<!DOCTYPE html>
  <html>
  <head>
    <link rel="icon" type="image/png" href="/static/favicon.svg">
     <link rel="stylesheet" href="/static/style.css">
  </head>
  
  <body>
    ${renderToString(
      <App>
        <HomePage />
      </App>
    )}
  </body>
  </html>
  `;
  ctx.response.body = html;
  ctx.response.type = "text/html";
});

// Return Page for Single Post
router.get("/posts/:slug", (ctx) => {
  const slug = ctx.params.slug;
  const postData = Object.values(blogPosts).find((p) => p.slug === slug);

  if (!postData) {
    ctx.response.body = "404";
    ctx.response.status = 404;
    return;
  }

  const html = `<!DOCTYPE html>
  <html>
  <head>
    <link rel="icon" type="image/png" href="/static/favicon.svg">
     <link rel="stylesheet" href="/static/style.css">
  </head>
  
  <body>
    ${renderToString(
      <App>
        <PostPage post={postData} />
      </App>
    )}
  </body>
  </html>
  `;
  ctx.response.body = html;
  ctx.response.type = "text/html";
});

// Return CSS
router.get("/static/:path+", async (ctx) => {
  const filePath = ctx.params.path;
  try {
    const fullPath = `./static/${filePath}`;
    const file = await Deno.readFile(fullPath);
    // Basic content type detection
    const ext = fullPath.split(".").pop();
    let type = "application/octet-stream";
    if (ext === "css") type = "text/css";
    else if (ext === "js") type = "application/javascript";
    else if (ext === "png") type = "image/png";
    else if (ext === "jpg" || ext === "jpeg") type = "image/jpeg";
    else if (ext === "svg") type = "image/svg+xml";
    ctx.response.body = file;
    ctx.response.type = type;
  } catch {
    ctx.response.status = 404;
    ctx.response.body = "Not found";
  }
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
app.listen({ port: 8080 });
