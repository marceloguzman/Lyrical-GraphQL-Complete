import React, { Component } from "react";
import { graphql } from "react-apollo";

import likeLyric from "../queries/likeLyric";

class LyricDetails extends Component {
	likeLyric(LyricId, likes) {
		console.log("like to: ", LyricId);
		this.props.mutate({
			variables: {
				id: LyricId
			},

			optimisticResponse: {
				typename: "Mutation",
				likeLyric: {
					id: LyricId,
					_typename: "LyricType",
					likes: likes + 1
				}
			}
		});
	}

	renderLyrics() {
		if (!this.props.lyricsList) return <div> Loading Lyrics....</div>;

		return this.props.lyricsList.map(item => {
			return (
				<li key={item.id} className="collection-item">
					{item.content}
					<div className="flex">
						<div className="likes">
							{item.likes}
							<i
								onClick={() => this.likeLyric(item.id, item.likes)}
								className="material-icons"
							>
								thumb_up
							</i>
						</div>
					</div>
				</li>
			);
		});
	}

	render() {
		//console.log(this.props.lyricsList);

		return (
			<div>
				<ul className="collection">{this.renderLyrics()}</ul>
			</div>
		);
	}
}

export default graphql(likeLyric)(LyricDetails);
