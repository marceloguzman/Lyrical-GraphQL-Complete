import ApolloClient from "apollo-client";
import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { Router, Route, hashHistory, IndexRoute } from "react-router";

import App from "./components/App";
import Songlist from "./components/Songlist";
import SongCreate from "./components/SongCreate";
import SongDetail from "./components/SongDetail";

import "./style/style.css";

const client = new ApolloClient({
	dataIdFromObject: obj => obj.id || null
});

const Root = () => {
	return (
		<ApolloProvider client={client}>
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Songlist} />
					<Route path="songs/new" component={SongCreate} />
					<Route path="songs/:id" component={SongDetail} />
				</Route>
			</Router>
		</ApolloProvider>
	);
};

ReactDOM.render(<Root />, document.querySelector("#root"));
