import { gql } from "@apollo/client";

const SENDCHATMESSAGE = gql`
  mutation ($data: BusinessChatMessageCreateInput!) {
    sendBusinessChatMessage(data: $data) {
      id
    }
  }
`;

export default SENDCHATMESSAGE;
