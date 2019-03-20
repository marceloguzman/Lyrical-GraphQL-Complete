import gql from "graphql-tag";

export default gql`
	mutation AddLyricsToASong($id: ID, $content: String) {
		addLyricToSong(songId: $id, content: $content) {
			id
			title
			lyrics {
				content
				id
				likes
			}
		}
	}
`;
