import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App.tsx";

Deno.serve(() => {
  const html = `<!DOCTYPE html>
  <head>
     <link rel="stylesheet" href="/style.css">
</head>
  
<body>
  ${renderToString(<App />)}
  </body>
  
  `;
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
});
