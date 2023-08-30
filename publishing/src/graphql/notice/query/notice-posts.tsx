import { gql } from "@apollo/client"

const GET_NOTICE_DATA = gql`
query NoticePosts($filter: [NoticePostFilterInput!], $first: Int, $offset: Int) {
    noticePosts(filter: $filter,first: $first, offset: $offset) {
        totalCount
        edges {
            node {
                id
                likeCnt
                author {
                    email
                    name
                    nickname
                }
                createdAt
                category {
                    name
                    id
                }
                title
                viewCnt
                replyCount
            }
        }
    }
}
`

export default GET_NOTICE_DATA;