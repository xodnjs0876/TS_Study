import { gql } from "@apollo/client";

const MYBUSINESSCHATCHANNELS = gql`
  query ($sort: [ChatChannelOrderByInput!]) {
    myBusinessChatChannels(sort: $sort) {
      totalCount
      edges {
        node {
          id
          updatedAt
          unreadMessageCount
          lastMessage {
            id
            message
          }
          secondhand {
            author {
              name
              id
            }
          }
        }
      }
    }
  }
`;

export default MYBUSINESSCHATCHANNELS;
