import { gql } from "@apollo/client";

const READCHATMESSAGE = gql`
  mutation ($channelId: ID!) {
    readBusinessChatMessages(channelId: $channelId)
  }
`;

export default READCHATMESSAGE;
