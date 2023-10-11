import { gql } from "@apollo/client";

const BUSINESSCHATCHANNELS = gql`
  query ($businessChatChannelId: ID!) {
    businessChatChannel(id: $businessChatChannelId) {
      id
      secondhand {
        title
        images {
          url
        }
        author {
          id
          name
        }
        category {
          id
          name
        }
        content
        price
        state
      }
      state
    }
  }
`;

export default BUSINESSCHATCHANNELS;
