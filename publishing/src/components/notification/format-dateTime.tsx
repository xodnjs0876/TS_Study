import {DateTime} from "luxon";

const formatDateTime = ( createdAt: string ) => {
    return DateTime.fromISO(createdAt).toFormat("yyyy-MM-dd");
}

export default formatDateTime;