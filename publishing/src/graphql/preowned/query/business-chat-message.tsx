import { gql } from "@apollo/client";

const BUSINESSCHATMESSAGE = gql`
  query ($channelId: ID!, $after: String, $first: Int) {
    businessChatMessages(channelId: $channelId, after: $after, first: $first) {
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
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
    }
  }
`;

export default BUSINESSCHATMESSAGE;
