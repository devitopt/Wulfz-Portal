import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { DAppProvider } from "@usedapp/core"

import "./index.css"
import App from "./App"

const config = {
	readOnlyChainId: 4,
	readOnlyUrls: {
		[4]: "https://rinkeby.infura.io/v3/40eada49769e4321921fe03716697343",
	},
}

ReactDOM.render(
	<React.StrictMode>
		<DAppProvider config={config}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</DAppProvider>
	</React.StrictMode>,
	document.getElementById("root")
)
