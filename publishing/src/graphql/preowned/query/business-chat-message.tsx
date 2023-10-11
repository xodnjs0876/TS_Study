import { gql } from "@apollo/client";

const BUSINESSCHATMESSAGE = gql`
  query (
    $channelId: ID!
    $after: String
    $first: Int
    $sort: [BusinessChatMessageSortInput!]
  ) {
    businessChatMessages(
      channelId: $channelId
      sort: $sort
      after: $after
      first: $first
    ) {
      totalCount
      edges {
        node {
          id
          message
          type
          unreadUserCount
          createdAt
          author {
            name
            id
          }
          payload {
            ... on ChatMessageFileTypePayload {
              id
              filename
              id
              size
              url
            }
            ... on ChatMessageLinkTypePayload {
              link
            }
          }
          channel {
            secondhand {
              author {
                id
                name
              }
            }
            participants {
              isMine
              user {
                id
                name
              }
            }
          }
        }
      }
      pageInfo {
        startCursor
      }
    }
  }
`;

export default BUSINESSCHATMESSAGE;
