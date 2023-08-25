/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../../../components/notification/detail/title";
import { useGetNotice } from "../../../api/api";
import Attach from "../../../assets/img/copy-one.svg";
import Download from '../../../assets/img/download.svg';
import Like from "../../../assets/img/filled-like.svg";
import UnLike from "../../../assets/img/empty-like.svg";
import Share from "../../../assets/img/connect-share-one.svg";
import UnScrap from "../../../assets/img/vector.svg";
import Scrap from "../../../assets/img/filled-vector.svg";
import LeftArrow from "../../../assets/img/leftArrow.svg";
import RightArrow from "../../../assets/img/rightArrow.svg";
import ListView from "../../../assets/img/listView.svg";
import { Link, useLocation } from "react-router-dom";

// 타입
export interface Notice {
    id: string;
    title: string;
    content: string;
    category: string;
    writer: {
        id: string;
        name: string;
    },
    createdAt: number,//Milliseconds
    viewCnt: number,
    likeCnt: number,
    commentCnt: number,
    file: [string] | null,
    isLike: boolean;
    isScrap: boolean;
}

interface UseNotices {
    loading: Boolean;
    data: Notice | null;
    error: null;
    refetch : () => void;
}

export default function NotisDetail() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { loading, data, error, refetch} = useGetNotice('id') as unknown as UseNotices;
    const [ isLike, setIsLike ] = useState(false);
    const [ isScrap, setIsScrap ] = useState(false);
    const [commentText, setCommentText] = useState("");
    const location = useLocation().search;

    useEffect(()=>{
        if(data){
            setIsLike(data.isLike)
            setIsScrap(data.isScrap)
        }
    },[data])

    const formatNum = (num: number) => { 
        return new Intl.NumberFormat('en-US', {
            notation: 'compact',
            maximumFractionDigits: 1,
        }).format(num)
    }

    const clickLike = () => {
        setIsLike(!isLike);
        {!isLike ? data!.likeCnt += 1 : data!.likeCnt -=1}
    }
    const clickScrap = () => {
        setIsScrap(!isScrap);
    }
    const sharePage = () => {
        const shareObject = {
        title: '테스트',
        text: '로컬',
        url: window.location.href,
    };
    if (navigator.share) { //  지원하는 경우만 실행
        navigator
            .share(shareObject)
            .then(() => {
              // 정상 동작할 경우 실행
                alert('공유하기 성공')
            })
            .catch((error) => {
                alert('에러가 발생했습니다.')
            })
        } else if(navigator.clipboard) {
            navigator.clipboard
            .writeText(`${shareObject.url}`)
            .then(() => alert("링크가 클립보드에 복사되었습니다."));
        }
        }
    const commentTextChange = (e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setCommentText(e.target.value);
    } 
    const commentBtn = () => {
        setCommentText("");
        alert(commentText);
        refetch();
    } 
    const downloadBtn = () => {
        alert("다운로드 완료");
    }
    return (
            <Layout>
                {!loading ? (
                    <Content>
                        <Title data={data!} />
                            <p className="content" dangerouslySetInnerHTML={{__html: `${data?.content}`}}/>
                            <AttachBox>
                                    <Text>첨부파일</Text>
                                        {data?.file && data.file.length > 0 ? (
                                            <div>
                                                {data?.file.map((item:string,idx:number) =>
                                                    // eslint-disable-next-line eqeqeq
                                                    <DownloadText key={idx} className={idx == 0 ? "first" : ""}>
                                                        <img src={Attach} alt="attach" />
                                                            <p onClick={downloadBtn}>2022_외식경영스타_아이디어_공모전_참가신청서_2022외식경영스타_팀명_주제명.PDF</p>
                                                        <DownloadBtn onClick={downloadBtn}>
                                                            <span>다운로드</span>
                                                            <img src={Download} alt="download" />
                                                        </DownloadBtn>
                                                    </DownloadText>
                                                )}
                                            </div>
                                        ) : <span className="noAttach">첨부된 파일이 없습니다.</span> }
                            </AttachBox>
                                <ButtonBox>
                                        <button className="like" onClick={clickLike}>
                                            {!isLike ?
                                                (<img src={UnLike} alt="unlike" />) :
                                                (<img src={Like} alt="like"/>)}
                                            <span>{formatNum(data?.likeCnt!)}</span>
                                        </button>
                                        <button className="share" onClick={sharePage}>
                                            <img src={Share} alt="share"/>
                                            <span>공유하기</span>
                                        </button>
                                        <button className="scrap" onClick={clickScrap}>
                                            {!isScrap ?
                                                (<img src={UnScrap} alt="unscrap" />) :
                                                (<img src={Scrap} alt="scrap"/>)}
                                            <span>스크랩</span>
                                        </button>
                                </ButtonBox>
                    </Content>
                ) : <span> loading </span> }
                <CommentBox>
                    <CommentText>
                        <span className="commentText">댓글</span>
                        <span className="commentCnt">{data?.commentCnt}</span>
                    </CommentText> 
                    <span className="noComment">등록된 댓글이 없습니다.</span>
                    <CommentTextArea>
                        <textarea
                            value={commentText}
                            onChange={commentTextChange}
                            placeholder="댓글을 작성하세요."/>
                            <button onClick={commentBtn}>등록</button>
                    </CommentTextArea>
                </CommentBox>
                <PageMoveBtn>
                    <Button>
                        <img src={LeftArrow} alt="leftArrow" />
                        <span className="left">이전글</span>
                    </Button>
                    <Button className="rightBtn">
                        <span className="right">다음글</span>
                        <img src={RightArrow} alt="rightArrow"/>
                    </Button>
                    <Link to={`/${location}`}>
                    <Button>
                        <img className="listImg" src={ListView} alt="listView" />
                        <span className="left">목록</span>
                    </Button>
                    </Link>
                </PageMoveBtn>                           
            </Layout>
    )
}
const Layout = styled.div`
    width:1440px;
    margin: 0 auto;
    span {
        display:flex;
        justify-content:center;
        font-size: 30px;
    }
`

const Content = styled.div`
    p {
        padding-left:30px;
        max-width:1280px;
    }
    .content {
        margin-bottom:60px;
    }
`

const AttachBox = styled.div`
    display:flex;
    flex-direction: column;
    margin:0 auto;
    margin:0 30px 40px 30px;
    border-radius: 3px;
    border: 1px solid #BFC3C8;
    padding-bottom:12px;
    .first {
        border-bottom:1px solid #D8DDE5;
    }
    .noAttach {
        color: #666;
        font-size:22px;
        margin-bottom:40px;
    }
`

const Text = styled.div`
    color: #333;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px; 
    margin:30px 0 0 34px;
` 

const DownloadText = styled.div`
    display:flex;
    align-items:center;
    padding:19px 0 18px 0;
    margin:0 34px;
    img, p, span {
        cursor: pointer;
    }
    p {
        margin: 0;
        padding-left:10px;
        margin-right:auto;
        color: #666;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        text-decoration-line: underline;
        text-underline-position : under;
        overflow:hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`
const DownloadBtn = styled.button`
    display:flex;
    align-items:center;
    border:none;
    background-color: #ffff;
    span {
    color: #193DD0;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 87.5% */
    padding-top:2px;
    }
`
const ButtonBox = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    margin: auto;
    width:418px;
    border:1px solid #D8DDE5;
    border-radius: 5px;
    margin-bottom: 35px;
    button {
        border:none;
        background-color: #fff;
        display:flex;
        align-items:center;
        gap:6px;
        padding:22px 0 22px 0;
        cursor: pointer;
    }
    span {
        color: #2B2B2B;
        text-align: center;
        font-size: 14px;
        line-height: 14px;
        padding-top:1px;
    }

    .like{
        width:140px;
        justify-content:center;
    }
    .share {
        width:138px;
        border-left:1px solid #D8DDE5;
        border-right:1px solid #D8DDE5;
        justify-content:center;
    }
    .scrap {
        width:140px;
        justify-content:center;
    }
`

const CommentBox = styled.div`
    border-top:1px solid #DCDCDC;
    border-bottom: 1px solid #555;
    span {
        color: #626873;
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px; /* 175% */
        margin-top:80px;
    }
    .noComment {
        margin-bottom:80px;
    }
`
const CommentText = styled.div`
    display: flex;
    align-items:center;
    margin:35px 0 0 30px;
    .commentText {
        color: #333;
        font-family: Pretendard;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 18px; /* 90% */
        padding-right:8px;
    }
    .commentCnt {
            color: #193DD0;
            font-family: Pretendard;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: 18px; /* 90% */
        }
`

const CommentTextArea = styled.div`
    margin:auto;
    margin:0 30px;
    border: 1px solid #BFC3C8;
    border-radius: 3px;
    display:flex;
    align-items:flex-start;
    margin-bottom:30px;
    textarea {
    margin-right:auto;
    color: #000000;    
    font-size: 16px;
    font-style: normal;
    font-family: Pretendard;
    font-weight: 400;
    line-height: 16px; /* 100% */
    padding:35px 0 0 35px;
    border:none;
    width:90%;
    height:180px;
    outline:none;
    resize:none;
    ::placeholder {
        color: #666;    
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px; /* 100% */
    }
    }
    button {
        cursor: pointer;
        margin:35px 35px 0 0;
        border:none;
        background-color: #fff;
        color: #193DD0;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 14px; /* 77.778% */
    }
`
const PageMoveBtn = styled.div`
    display:flex;
    align-items:center;
    .rightBtn {
        margin-left: 10px;
        margin-right:auto;
    }
` 

const Button = styled.button`
    display:inline-flex; 
    align-items:center;
    justify-content:center;
    border: 1px solid #DCDCDC;
    border-radius:4px;
    background-color: #fff;
    padding:0;
    margin-top: 30px;
    cursor: pointer;
    img {
        padding: 11px;
    }
    span {
        color: #666;
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 18px; /* 112.5% */
    }
    .left{
        padding: 16px 19px 13px 0;
    }
    .right {
        padding: 16px 0 13px 19px;
    }
    .listImg {
        padding:11px 11px 11px 17px;
    }
`