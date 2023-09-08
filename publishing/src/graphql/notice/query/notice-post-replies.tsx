import { gql } from "@apollo/client";

const GET_POSTREPLIES_DATE = gql`
  query NoticePostReplies($filter: [NoticeReplyFilterInput!]) {
    noticePostReplies(filter: $filter) {
      edges {
        node {
          id
          author {
            name
          }
          content
          createdAt
          isMine
        }
      }
    }
  }
`;

export default GET_POSTREPLIES_DATE;
