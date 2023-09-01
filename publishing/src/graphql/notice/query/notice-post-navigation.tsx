import { gql } from "@apollo/client";

const GET_POST_NAVIGATION = gql`
    query NoticePostNavigation($noticePostNavigationId: ID!, $params: NoticePostNavigationParamsInput) {
        noticePostNavigation(id: $noticePostNavigationId, params: $params) {
            prePostId
            nextPostId
            params {
                search
            }
        }
    } 
`

export default GET_POST_NAVIGATION;