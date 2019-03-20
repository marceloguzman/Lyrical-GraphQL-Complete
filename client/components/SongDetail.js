import React, { Component } from "react";
import gql from "graphql-tag";
import LyricCreate from "./LyricCreate";
import LyricDetails from "./LyricDetails";
import { graphql } from "react-apollo";
import { Link } from "react-router";

import querySong from "../queries/querySong";


class SongDetail extends Component {
	render() {
		console.log("this.props", this.props);

		const { song } = this.props.data;

		if (!song) {
			return <div className="loading"> Loading song details ...</div>;
		}

		return (
			<div className="songDetail">
				<Link to="/" className="btn btn-small blue light">
					Back
				</Link>
				<div className="card">
				<h3>{song.title}</h3>
				<small>song ID: {this.props.params.id}</small>
				
				<LyricDetails lyricsList={song.lyrics} />
				</div>
				<LyricCreate id={this.props.params.id} />
			</div>
		);
	}
}

export default graphql(querySong, {
	options: props => {
		return { variables: { id: props.params.id } };
	}
})(SongDetail);
