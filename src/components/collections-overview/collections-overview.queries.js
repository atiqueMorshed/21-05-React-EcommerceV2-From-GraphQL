import {gql} from '@apollo/client';

const GET_COLLECTIONS = gql`
    query {
        collections{
            id
            title
            items{
                id
                name
                price
                imageUrl
            }
        }
    }
`

export default GET_COLLECTIONS