import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App.tsx";
import { Application } from "jsr:@oak/oak/application";
import { Router } from "jsr:@oak/oak/router";

const router = new Router();

// Return home page
router.get("/", (ctx) => {
  const html = `<!DOCTYPE html>
  <html>
  <head>
     <link rel="stylesheet" href="/style.css">
  </head>
  
  <body>
    ${renderToString(<App />)}
  </body>
  </html>
  `;
  ctx.response.body = html;
  ctx.response.type = "text/html";
});

// Return CSS
router.get("/style.css", async (ctx) => {
  const css = await Deno.readTextFile("./style.css");
  ctx.response.body = css;
  ctx.response.type = "text/css";
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
app.listen({ port: 8080 });
