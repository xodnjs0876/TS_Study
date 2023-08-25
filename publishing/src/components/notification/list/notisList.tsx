import React, { useEffect } from 'react';
import styled from 'styled-components';
import Attach from '../../../assets/img/copy-one.svg'
import Viewer from '../../../assets/img/preview-open.svg'
import Liker from "../../../assets/img/like.svg"
import { DateTime } from "luxon"
import { Notice } from '../../../screen/notis/notification';
import { Link } from 'react-router-dom';
import highLightText from '../../highLight-Text';

interface PropsType {
    edges: Notice[];
    totalCnt: number;
    page: number;
    search:string;
}

export default function NotisList({
    edges,
    totalCnt,
    page,
    search
    }:PropsType) {
    const currentPage = parseInt(page as unknown as string, 10) || 1;

    const formatNum = (num: number) => { 
        return new Intl.NumberFormat('en-US', {
            notation: 'compact',
            maximumFractionDigits: 1,
        }).format(num)
    }

    return (
    <div>
        {edges.map((item: Notice, i: number) => {
            const number = totalCnt - i - 10 * (currentPage - 1);
            return (
                <div>
                    <Link to={`/post/${item.id}`} style={{textDecoration : "none"}} >
                        <Layout key={item.id}>
                            <span className='id'>{number}</span>
                            <Content>
                                <Title>
                                    [{item.category}]
                                    <p>{item.title && highLightText(item.title,search)}</p>
                                    {item.file ? (
                                        <img src={Attach} alt='attachImg'/> ) : null}
                                        <Comment>
                                            [{item.commentCnt !==0 ?
                                                item.commentCnt >= 99 ? ("99+" ): ([item.commentCnt]) : null}]
                                        </Comment>                          
                                </Title>
                                <PostInfo>
                                    <InfoText flexBasis="44px">{item.writer.name}</InfoText>
                                    <span>|</span>
                                    <InfoText flexBasis="92px">{DateTime.fromMillis(item.createdAt).toFormat("yyyy-MM-dd")}</InfoText>
                                    <span>|</span>
                                    <InfoText flexBasis="57px">
                                        <img src={Viewer} alt='viewCnt'/>
                                        {formatNum(item.viewCnt)}
                                    </InfoText>
                                    <span>|</span>

                                    <InfoText flexBasis="57px">
                                        <img src={Liker} alt="likeCnt"/>
                                        {formatNum(item.likeCnt)}
                                    </InfoText>
                                </PostInfo>
                            </Content>
                        </Layout>
                    </Link>
                </div>
            )
        }
    )
}
</div>
)}


const Layout = styled.div`
    max-height: 120px;
    display:flex;
    overflow:hidden;
    align-items:center;
    text-align:center;
    border-bottom: 1px solid #D8DDE5;
    .id {
        overflow: hidden;
        display: flex;
        justify-content: center;
        flex-basis: 46px;
        color: #888;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 18px;
        padding-left: 34px;
    }
`
const Content = styled.div`
    display: flex;  
    flex-direction: column;
    padding: 18px 0;
    margin-left: 40px;
`

const Title = styled.div`
    display:flex;
    align-items: center;
    cursor: pointer;
    max-width: 1280px;
    color: #333;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    img {
        padding-left: 10px;
    }
`

const Comment = styled.span`
    color: #193DD0;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    padding-left: 10px;
`

const PostInfo = styled.div`
    display:flex;
    align-items: center;
    padding-bottom:8px;

    span {
        color: #D8DDE5;;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 14px;
        padding-top: 1px;
    }
    img {
        padding-right: 4px;
        padding-bottom: 3px;
    }
`

const InfoText = styled.text< { flexBasis: string }>`
    display:flex;
    justify-content: center;
    align-items:center;
    color: #666;
    font-size: 14px;
    line-height: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
    padding-top:2px;
    flex-basis: ${props => props.flexBasis};
`




