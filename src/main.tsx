import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <App />,
		},
	],
	// {
	//   basename: "/24_PR_avant_Noel",
	// }
	{
		future: {
			v7_relativeSplatPath: true,
			v7_fetcherPersist: true,
			v7_normalizeFormMethod: true,
			v7_partialHydration: true,
			v7_skipActionErrorRevalidation: true,
		},
	},
);

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Your HTML Document should contain a <div id='root'></div>");
}

createRoot(rootElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
