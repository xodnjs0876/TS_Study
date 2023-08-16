import React from "react";
import styled from "styled-components";
import { Notice } from "../../../screen/notis/detail/notisDetail";
import { DateTime } from "luxon";
import  Viewer from "../../../assets/img/preview-open.svg";
import Liker from "../../../assets/img/like.svg";

interface StyleType {
    color: string;
    fontSize: string;
    fontWeight: string;
    paddingTop: string;
}

interface PropsType {
    data: Notice;
}

export default function Title(e: PropsType) {
    const formatNum = (num: number) => {
        return new Intl.NumberFormat('en-US', {
            notation: 'compact',
            maximumFractionDigits: 1,
        }).format(num)
    }
    return (
        <Layout>
            <Text   
                color='#5A33BE' 
                fontSize='16px' 
                fontWeight="700"
                paddingTop="30px">
                공지사항
            </Text>
            <Text
            color='#333' 
            fontSize='24px' 
            fontWeight="500" 
            paddingTop="18px">
            [{e.data.category}] {e.data.title}
        </Text>
        <InfoText>
            <FlexText>{e.data.writer.name}</FlexText>
            <p>|</p>
            <FlexText>{DateTime.fromMillis(e.data.createdAt).toFormat("yyyy-MM-dd")}</FlexText>
            <p>|</p>
            <FlexText>
            <img src={Viewer} alt="viewer" />
                {formatNum(e.data.viewCnt)}
            </FlexText>
            <p>|</p>
            <FlexText>
            <img src={Liker} alt="likes" />
                {formatNum(e.data.likeCnt)}
            </FlexText>
        </InfoText>
        </Layout>
    )
}

const Layout = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    flex-shrink: 0;
    border-top: 2px solid #555;
    border-bottom: 0.998px solid #D8DDE5;
    padding-left:24px;
    margin-bottom: 50px;
`
const Text = styled.text<StyleType>`
        color: ${props => props.color};
        font-size: ${props => props.fontSize};
        font-weight: ${props => props.fontWeight};
        padding-top: ${props => props.paddingTop};
        max-width:1280px;
`
const InfoText = styled.text`
    display: flex;
    align-items: center;
    color: #666;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    padding: 10px 0;
    p {
        color: #D8DDE5;;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 14px;
        padding:0 12px;
    }
`

const FlexText = styled.text`
    overflow:hidden;
    padding-top:1px;
    display:flex;
    align-items: center;
    padding-bottom:0.5px;

    img {
        padding-right: 4px;
        padding-bottom:2.5px;
    }
`
