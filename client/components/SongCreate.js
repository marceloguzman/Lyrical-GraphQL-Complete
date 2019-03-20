import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link, hashHistory } from "react-router";

import allSongs from "../queries/allSongs";
import addNewSong from "../queries/addSong";

class SongCreate extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: ""
		};
	}

	onChangeEvent(value) {

		this.setState({
			title: value
		});
	}

	onSubmitfunc(event) {
		event.preventDefault();

		this.props
			.mutate({
				refetchQueries: [{ query: allSongs }],
				variables: {
					title: this.state.title
				}
			})
			.then(() => {
				return hashHistory.push("/");
			});
	}
	render() {
		return (
			<div className="card">
				<Link to="/" className="btn btn-small blue light">
					Back
				</Link>
				<h3>New Song</h3>

				<form onSubmit={this.onSubmitfunc.bind(this)}>
				<label>Add a new song name (Press ENTER to save it)</label>
					<input
						onChange={e => this.onChangeEvent(e.target.value)}
						value={this.state.title}
					/>
				</form>
			</div>
		);
	}
}

export default graphql(addNewSong)(SongCreate);
