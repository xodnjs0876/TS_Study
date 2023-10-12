import { gql } from "@apollo/client";

const MYBUSINESSCHATCHANNELS = gql`
  query ($sort: [ChatChannelOrderByInput!]) {
    myBusinessChatChannels(sort: $sort) {
      edges {
        node {
          id
          state
          unreadMessageCount
          secondhand {
            content
            images {
              url
            }
            state
            title
            price
            author {
              id
              name
            }
            category {
              name
              id
            }
          }
          lastMessage {
            message
          }
          updatedAt
        }
      }
      totalCount
    }
  }
`;

export default MYBUSINESSCHATCHANNELS;
