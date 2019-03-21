import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import addLyric from "../queries/addLyric";
import querySong from "../queries/querySong";

class LyricCreate extends Component {
	constructor(props) {
		super(props);

		this.state = {
			lyric: ""
		};
	}

	onChangeEvent(value) {
		this.setState({
			lyric: value
		});
	}

	onSubmitfunc(event) {
		event.preventDefault();
		console.log("sending to server", this.state.lyric, this.props.id);
		this.props.mutate({
			variables: {
				content: this.state.lyric,
				id: this.props.id
			}
		}).then(() => {
				this.setState({
			lyric: ""
		});
			});
	}

	render() {
		return (
			<div className="card">	
			<form onSubmit={this.onSubmitfunc.bind(this)}>
				<label>Add a lyric (Press ENTER to save it)</label>
				<input
					onChange={e => this.onChangeEvent(e.target.value)}
					value={this.state.lyric}
				/>
			</form>
			</div>
		);
	}
}

export default graphql(addLyric)(graphql(querySong)(LyricCreate));
