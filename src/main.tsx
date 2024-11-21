import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <App />,
			children: [
				
			],
		},
	],
	{
		basename: "/24_PR_avant_Noel",
	},
);


const rootElement = document.getElementById("root");

if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);