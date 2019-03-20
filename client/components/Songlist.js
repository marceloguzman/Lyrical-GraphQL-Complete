import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";

import allSongs from "../queries/allSongs";
import songDelete from "../queries/deleteSong";

class Songlist extends Component {
	deleteSong(id) {
			this.props
			.mutate({
				variables: { id }
			})
			.then(() => {
				return this.props.data.refetch();
			});
	}

	renderSongs() {
		return this.props.data.songs.map(item => {
			return (
				<li key={item.id} className="collection-item">
					<Link to={`/songs/${item.id}`}>{item.title}</Link>
					<i
						onClick={() => this.deleteSong(item.id)}
						className="material-icons"
					>
						delete
					</i>
				</li>
			);
		});
	}

	render() {
		if (this.props.data.loading) return <div className="loading"> Loading....</div>;

		return (
			<div className="card">
				<h3>Songlist</h3>
				<ul className="collection">{this.renderSongs()}</ul>
				<Link
					to="songs/new"
					className="btn-floating btn-large red light"
				>
					+
				</Link>
			</div>
		);
	}
}

export default graphql(songDelete)(graphql(allSongs)(Songlist));
