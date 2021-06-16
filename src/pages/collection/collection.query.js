import {gql} from '@apollo/client';

const GET_COLLECTION_BY_TITLE = gql`
query getCollectionsByTitle($title: String!){
    getCollectionsByTitle(title: $title) {
        id
        title
        items {
            id
            name
            price
            imageUrl
        }
    }
}
`;

export default GET_COLLECTION_BY_TITLE;