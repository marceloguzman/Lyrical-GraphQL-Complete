import React, { Component } from "react";

class LyricDetails extends Component {
	deleteLyric(LyricId) {
		console.log(LyricId);
	}

	renderLyrics() {
		if (!this.props.lyricsList) return <div> Loading Lyrics....</div>;

		return this.props.lyricsList.map(item => {
			return (
				<li key={item.id} className="collection-item">
					{item.content}

					<div>
						{item.likes}

						<i
							onClick={() => this.deleteLyric(item.id)}
							className="material-icons"
						>
							thumb-up
						</i>

						<i
							onClick={() => this.deleteLyric(item.id)}
							className="material-icons"
						>
							delete
						</i>
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

export default LyricDetails;
