import { gql } from "@apollo/client";

const RECEIVECHATMESSAGE = gql`
  subscription ($channelId: ID!) {
    receiveBusinessChatMessage(channelId: $channelId) {
      id
      message
      author {
        name
      }
    }
  }
`;
export default RECEIVECHATMESSAGE;
