import { gql } from "@apollo/client";

const GET_POST_DATA = gql`
  query NoticePost($noticePostId: ID!) {
    noticePost(id: $noticePostId) {
      viewCnt
      title
      replyCount
      likeCnt
      isLike
      isFavorite
      id
      content
      files {
        id
        url
        filename
      }
      createdAt
      category {
        name
        id
      }
      author {
        name
        nickname
        id
      }
    }
  }
`;

export default GET_POST_DATA;
