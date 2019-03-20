import gql from "graphql-tag";

export default gql`
	mutation deleteASong($id: ID) {
		deleteSong(id: $id) {
			id
		}
	}
`;
