// deno bundle .\app\search\bundle.tsx > .\static\searchbundle.js

import { hydrateRoot } from "react-dom/client";
import App from "./../layout.tsx";
import SearchPage from "./page.tsx";
import { blogPosts } from "../../lib/data.ts";

const rootElement = document.getElementById("root");
if (rootElement) {
  hydrateRoot(
    rootElement,
    <App>
      <SearchPage blogPosts={blogPosts} />
    </App>
  );

  console.log("hydration complete");
}
