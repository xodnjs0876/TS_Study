import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Birthday: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Email: { input: any; output: any; }
  JSON: { input: any; output: any; }
  PhoneNumber: { input: any; output: any; }
};

/** 관리자 */
export type Admin = User & {
  __typename?: 'Admin';
  /** 관리자용 유저 메모 */
  adminMemo?: Maybe<Scalars['String']['output']>;
  /** 생년월일 YYYYMMDD(ex 20231231) */
  birthday?: Maybe<Scalars['String']['output']>;
  /** 이메일 */
  email?: Maybe<Scalars['String']['output']>;
  /** UUID */
  id: Scalars['ID']['output'];
  /** 고유번호 */
  idx: Scalars['Int']['output'];
  /** 가입 날짜/시간 */
  joinedAt: Scalars['DateTime']['output'];
  /** 탈퇴 날짜/시간 */
  leavedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 고유 이름(아이디) */
  name?: Maybe<Scalars['String']['output']>;
  /** 닉네임 */
  nickname?: Maybe<Scalars['String']['output']>;
  /** 전화번호 */
  phoneNumber?: Maybe<Scalars['String']['output']>;
  /** 실명 */
  realname?: Maybe<Scalars['String']['output']>;
  /** 권한 타입 */
  role: UserRole;
  /** 상태 */
  state: UserState;
  /** 정지 처리된 시간 */
  suspendedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** 관리자가 올린 게시물 */
export type AdminPost = {
  __typename?: 'AdminPost';
  /** 카테고리 */
  category?: Maybe<AdminPostCategory>;
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 타입별 변환모델 */
  node: AdminPostModel;
  /** 보이는 장소 */
  showPlace: AdminPostShowPlace;
  /** 상태 */
  state: AdminPostState;
  /** 타입 */
  type: AdminPostType;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 관리자 게시글 클릭 액션 */
export enum AdminPostAction {
  /** URL 이동 */
  MoveUrl = 'MOVE_URL',
  /** 액션 없음 */
  None = 'NONE',
  /** 텍스트 표시 */
  Text = 'TEXT'
}

/** 관리자가 올린 게시물의 카테고리 */
export type AdminPostCategory = {
  __typename?: 'AdminPostCategory';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 카테고리 이름 */
  name: Scalars['String']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 관리자 게시물 카테고리 생성 데이터 */
export type AdminPostCategoryCreateInput = {
  /** 공개 여부 */
  isVisible: Scalars['Boolean']['input'];
  /** 이름 */
  name: Scalars['String']['input'];
  /** 우선 순위 */
  priority?: InputMaybe<Scalars['Int']['input']>;
  /** 타입 */
  type: AdminPostType;
};

/** 관리자 게시물 카테고리 수정 데이터 */
export type AdminPostCategoryUpdateInput = {
  /** 공개 여부 */
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  /** 이름 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 우선 순위 */
  priority?: InputMaybe<Scalars['Int']['input']>;
  /** 타입 */
  type?: InputMaybe<AdminPostType>;
};

/** 관리자가 올린 게시물 필터 데이터 */
export type AdminPostFilterInput = {
  /** 카테고리 ID */
  category__id?: InputMaybe<Array<IdFilterInput>>;
  /** 카테고리 ID */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 보이는 장소 */
  showPlace?: InputMaybe<Array<AdminPostShowPlaceFilterInput>>;
  /** 상태 */
  state?: InputMaybe<Array<AdminPostStateFilterInput>>;
  /** 카테고리 ID */
  title?: InputMaybe<Array<StringFilterInput>>;
  /** 타입 */
  type?: InputMaybe<Array<AdminPostTypeFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 관리자가 올린 게시물 목록 */
export type AdminPostList = {
  __typename?: 'AdminPostList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<UndefinedEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 관리자 게시물 */
export type AdminPostModel = Banner | Faq | Popup;

/** 관리자가 올린 게시글 네비게이션(이전글/다음글) */
export type AdminPostNavigation = {
  __typename?: 'AdminPostNavigation';
  /** 이전글 ID */
  nextPostId?: Maybe<Scalars['ID']['output']>;
  /** input params */
  params?: Maybe<AdminPostNavigationParams>;
  /** 이전글 ID */
  prePostId?: Maybe<Scalars['ID']['output']>;
};

/** 관리자가 올린 게시글 네비게이션 params */
export type AdminPostNavigationParams = {
  __typename?: 'AdminPostNavigationParams';
  /** 검색 베이스 */
  base?: Maybe<PostNaviBase>;
  /** 카테고리명 */
  category?: Maybe<Scalars['String']['output']>;
  /** 검색어 */
  search?: Maybe<Scalars['String']['output']>;
};

/** 관리자가 올린 게시글 네비게이션 input params */
export type AdminPostNavigationParamsInput = {
  /** 검색 베이스 */
  base?: InputMaybe<PostNaviBase>;
  /** 카테고리명 */
  category?: InputMaybe<Scalars['String']['input']>;
  /** 검색어 */
  search?: InputMaybe<Scalars['String']['input']>;
};

/** 관리자 게시글 보이는 곳 */
export enum AdminPostShowPlace {
  /** 외식컨설팅 * 인증 배너 */
  Consultant = 'CONSULTANT',
  /** 평생 교육원 배너 */
  EduCenter = 'EDU_CENTER',
  /** 구인정보/구인구직 배너 */
  JobSearch = 'JOB_SEARCH',
  /** 메인페이지 배너 */
  Main = 'MAIN',
  /** 중고거래 배너 */
  Secondhand = 'SECONDHAND'
}

export type AdminPostShowPlaceFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<AdminPostShowPlace>;
  values?: InputMaybe<Array<AdminPostShowPlace>>;
};

/** 관리자가 올린 게시물 정렬 데이터 */
export type AdminPostSortInput = {
  /** 카테고리 ID */
  category__id?: InputMaybe<SortInput>;
  /** 카테고리 이름 */
  category__name?: InputMaybe<StringSortInput>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 우선순위 */
  priority?: InputMaybe<IntSortInput>;
  /** 게시 종료일 */
  publishingPeriodEndAt?: InputMaybe<SortInput>;
  /** 게시 시작일 */
  publishingPeriodStartAt?: InputMaybe<SortInput>;
  /** 타입 */
  type?: InputMaybe<AdminPostTypeSortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 관리자가 올린 게시물 상태 */
export enum AdminPostState {
  /** 활성화 */
  Active = 'ACTIVE',
  /** 비활성화 */
  Inactive = 'INACTIVE'
}

export type AdminPostStateFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<AdminPostState>;
  values?: InputMaybe<Array<AdminPostState>>;
};

/** 관리자가 올린 게시물 타입 */
export enum AdminPostType {
  /** 메인 배너 */
  Banner = 'BANNER',
  /** 자주 묻는 질문 */
  Faq = 'FAQ',
  /** 메인 팝업 */
  Popup = 'POPUP'
}

export type AdminPostTypeFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<AdminPostType>;
  values?: InputMaybe<Array<AdminPostType>>;
};

export type AdminPostTypeSortInput = {
  case?: InputMaybe<Array<AdminPostType>>;
  nulls?: InputMaybe<Nulls>;
  order: Order;
};

/** 토큰 요청의 대한 응답 */
export type AuthTokenResponse = {
  __typename?: 'AuthTokenResponse';
  /** 접근 토큰 */
  accessToken: Scalars['String']['output'];
  /** 접근 토큰 만료 시간(초) */
  expiresIn: Scalars['Int']['output'];
  /** 갱신 토큰 */
  refreshToken: Scalars['String']['output'];
  /** 토큰 타입 */
  tokenType: Scalars['String']['output'];
};

/** 비즈니스 채팅 채널 */
export type BChatChannel = {
  __typename?: 'BChatChannel';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 생성자 */
  creator?: Maybe<Member>;
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 파일 */
  files?: Maybe<Array<File>>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 사진 */
  images?: Maybe<Array<File>>;
  /** 공개 여부 */
  isVisible: Scalars['Boolean']['output'];
  /** 최근 메시지 */
  lastMessage?: Maybe<BChatMessage>;
  /** 참여자 */
  participants: Array<BChatChannelParticipant>;
  /** 관련 중고거래 정보 */
  secondhand?: Maybe<Secondhand>;
  /** 상태 */
  state: ChatChannelState;
  /** 안읽은 메세지 수 */
  unreadMessageCount: Scalars['Int']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
  /** 동영상 */
  videos?: Maybe<Array<File>>;
};

export type BChatChannelEdge = {
  __typename?: 'BChatChannelEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: BChatChannel;
};

/** 비즈니스 채팅 채널 목록 */
export type BChatChannelList = {
  __typename?: 'BChatChannelList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<BChatChannelEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 채팅 참여자 */
export type BChatChannelParticipant = {
  __typename?: 'BChatChannelParticipant';
  /** 채팅 채널 */
  channel: BChatChannel;
  /** 참여 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 내 참가 정보 여부 */
  isMine: Scalars['Boolean']['output'];
  /** 사용자 */
  user: Member;
};

/** 비즈니스 채팅 메시지 */
export type BChatMessage = {
  __typename?: 'BChatMessage';
  /** 작성자 */
  author?: Maybe<Member>;
  /** 채팅방 */
  channel: BChatChannel;
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 메시지 */
  message?: Maybe<Scalars['String']['output']>;
  /** 추가 데이터 */
  payload?: Maybe<ChatMessagePayload>;
  /** 종류 */
  type: ChatMessageType;
  /** 본인 제외 읽지않은 사람 수 */
  unreadUserCount: Scalars['Float']['output'];
};

export type BChatMessageEdge = {
  __typename?: 'BChatMessageEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: BChatMessage;
};

/** 비즈니스 채팅 메시지 파일 목록 */
export type BChatMessageFileList = {
  __typename?: 'BChatMessageFileList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<GraphQljsonEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 비즈니스 채팅 메시지 목록 */
export type BChatMessageList = {
  __typename?: 'BChatMessageList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<BChatMessageEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 배너 */
export type Banner = {
  __typename?: 'Banner';
  /** 클릭 액션 */
  action: AdminPostAction;
  /** 카테고리 */
  category?: Maybe<AdminPostCategory>;
  /** 내용 */
  content: Scalars['String']['output'];
  /** 커버 이미지 */
  coverUrl: Scalars['String']['output'];
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 링크 URL */
  linkUrl?: Maybe<Scalars['String']['output']>;
  /** 타입별 변환모델 */
  node: AdminPostModel;
  /** 우선순위 */
  priority?: Maybe<Scalars['Int']['output']>;
  /**
   * 게시 종료일
   * 없을시 2999-12-31 23:59:59.000 +0900 으로 생성
   */
  publishingPeriodEndAt: Scalars['DateTime']['output'];
  /**
   * 게시 시작일
   * 없을시 1990-01-01 00:00:00.000 +0900 으로 생성
   */
  publishingPeriodStartAt: Scalars['DateTime']['output'];
  /** 보이는 장소 */
  showPlace: AdminPostShowPlace;
  /** 상태 */
  state: AdminPostState;
  /** 제목 */
  title: Scalars['String']['output'];
  /** 타입 */
  type: AdminPostType;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 배너 생성 데이터 */
export type BannerCreateInput = {
  /** 클릭 액션 */
  action: AdminPostAction;
  /** 카테고리 ID */
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  /** 내용 */
  content: Scalars['String']['input'];
  /** 커버 이미지 */
  coverUrl: Scalars['String']['input'];
  /** 이동 URL */
  linkUrl?: InputMaybe<Scalars['String']['input']>;
  /** 우선순위 */
  priority?: InputMaybe<Scalars['Int']['input']>;
  /**
   * 게시 종료일
   * 없을시 2999-12-31 23:59:59.000 +0900 으로 생성
   */
  publishingPeriodEndAt: Scalars['DateTime']['input'];
  /**
   * 게시 시작일
   * 없을시 1990-01-01 00:00:00.000 +0900 으로 생성
   */
  publishingPeriodStartAt: Scalars['DateTime']['input'];
  /** 보이는 장소 */
  showPlace: AdminPostShowPlace;
  /** 상태 */
  state?: InputMaybe<AdminPostState>;
  /** 제목 */
  title: Scalars['String']['input'];
};

/** 배너 수정 데이터 */
export type BannerUpdateInput = {
  /** 클릭 액션 */
  action?: InputMaybe<AdminPostAction>;
  /** 카테고리 ID */
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  /** 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 커버 이미지 */
  coverUrl?: InputMaybe<Scalars['String']['input']>;
  /** 이동 URL */
  linkUrl?: InputMaybe<Scalars['String']['input']>;
  /** 우선순위 */
  priority?: InputMaybe<Scalars['Int']['input']>;
  /**
   * 게시 종료일
   * 없을시 2999-12-31 23:59:59.000 +0900 으로 생성
   */
  publishingPeriodEndAt?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * 게시 시작일
   * 없을시 1990-01-01 00:00:00.000 +0900 으로 생성
   */
  publishingPeriodStartAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** 보이는 장소 */
  showPlace?: InputMaybe<AdminPostShowPlace>;
  /** 상태 */
  state?: InputMaybe<AdminPostState>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** 게시판 권한 리스트 */
export type BoardAuthModel = {
  __typename?: 'BoardAuthModel';
  /** 게시판 명 */
  boardName: Scalars['String']['output'];
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 교육관리자 허용 여부 */
  pac1: Scalars['Boolean']['output'];
  /** 지부관리자 허용 여부 */
  pac2: Scalars['Boolean']['output'];
  /** 게시판 타입 */
  type: Scalars['String']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 게시판 권한 업데이트 Input */
export type BoardAuthUpdateInput = {
  /** 고유 아이디 */
  id: Scalars['ID']['input'];
  /** 교육관리자 허용 여부 */
  pac1?: InputMaybe<Scalars['Boolean']['input']>;
  /** 지부관리자 허용 여부 */
  pac2?: InputMaybe<Scalars['Boolean']['input']>;
};

/** 외식정보 카테고리 */
export type BoardCategory = {
  __typename?: 'BoardCategory';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 커뮤니티 카테고리 즐켜찾기 여부 */
  isFavorite: Scalars['Boolean']['output'];
  /** 커뮤니티 카테고리 이름 */
  name: Scalars['String']['output'];
  /** 커뮤니티 카테고리 배치 순서 */
  priority: Scalars['Int']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 외식정보 카테고리 생성 Input */
export type BoardCategoryCreateInput = {
  /** 커뮤니티 카테고리 이름 */
  name: Scalars['String']['input'];
  /** 커뮤니티 카테고리 배치 순서 */
  priority?: InputMaybe<Scalars['Int']['input']>;
};

export type BoardCategoryEdge = {
  __typename?: 'BoardCategoryEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: BoardCategory;
};

/** 외식정보 카테고리 필터 */
export type BoardCategoryFilterInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 이름 */
  name?: InputMaybe<Array<StringFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 외식정보 카테고리 리스트 */
export type BoardCategoryList = {
  __typename?: 'BoardCategoryList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<BoardCategoryEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 외식정보 카테고리 정렬 */
export type BoardCategorySortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 이름 */
  name?: InputMaybe<SortInput>;
  /** 순서 */
  priority?: InputMaybe<IntSortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 외식정보 카테고리 수정 Input */
export type BoardCategoryUpdateInput = {
  /** 커뮤니티 카테고리 이름 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 커뮤니티 카테고리 배치 순서 */
  priority?: InputMaybe<Scalars['Int']['input']>;
};

/** 외식정보 게시글 */
export type BoardPost = {
  __typename?: 'BoardPost';
  /** 작성자 */
  author: Member;
  /** 게시물 카테고리 */
  category?: Maybe<BoardCategory>;
  /** 내용 */
  content: Scalars['String']['output'];
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 해당 게시물 스크랩수 */
  favoriteCnt: Scalars['Float']['output'];
  /** 이미지, 영상 목록 */
  files?: Maybe<Array<File>>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 해당 게시물 즐겨찾기(스크랩) 여부 */
  isFavorite: Scalars['Boolean']['output'];
  /** 나의 좋아요 여부 */
  isLike: Scalars['Boolean']['output'];
  isPinned?: Maybe<Scalars['Boolean']['output']>;
  /** 보이기 여부 */
  isVisible: Scalars['Boolean']['output'];
  /** 해당 게시물 좋아요 개수 */
  likeCnt: Scalars['Float']['output'];
  pinnedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 댓글 수 */
  replyCount: Scalars['Int']['output'];
  /** 썸네일 이미지 파일 */
  thumbnailFile?: Maybe<File>;
  /** 제목 */
  title?: Maybe<Scalars['String']['output']>;
  /** 게시판 구분 */
  type: BoardPostTypeEnum;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
  /** 해당 게시물 조회수 */
  viewCnt: Scalars['Float']['output'];
};

/** 외식정보 게시글 생성 */
export type BoardPostCreateInput = {
  /** 커뮤니티 카테고리 ID */
  category__id?: InputMaybe<Scalars['ID']['input']>;
  /** 내용 */
  content: Scalars['String']['input'];
  /** 게시물 파일들 */
  file__ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** 썸네일 파일 ID */
  thumbnailFile__id?: InputMaybe<Scalars['ID']['input']>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
  /** 게시판 구분 */
  type: BoardPostTypeEnum;
};

export type BoardPostEdge = {
  __typename?: 'BoardPostEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: BoardPost;
};

/** 외식정보 게시글 필터 */
export type BoardPostFilterInput = {
  /** 작성자 이메일 */
  author__email?: InputMaybe<Array<StringFilterInput>>;
  /** 작성자 고유 id */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 작성자 이름 */
  author__name?: InputMaybe<Array<StringFilterInput>>;
  /** 카테고리 고유 id */
  category__id?: InputMaybe<Array<StringFilterInput>>;
  /** 카테고리 이름 */
  category__name?: InputMaybe<Array<StringFilterInput>>;
  /** 게시물 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 숨기기한 사용자 고유 id */
  hide__id?: InputMaybe<Array<IdFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 상단 고정 여부 */
  isPinned?: InputMaybe<Array<BooleanFilterInput>>;
  /** 숨김여부 */
  isVisible?: InputMaybe<Array<BooleanFilterInput>>;
  /** 좋아요 사용자 고유 id */
  likes__id?: InputMaybe<Array<IdFilterInput>>;
  /** 게시물 제목 */
  title?: InputMaybe<Array<StringFilterInput>>;
  /** 게시판 구분 필터 */
  type?: InputMaybe<Array<BoardPostTypeFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 외식정보 게시물 목록 */
export type BoardPostList = {
  __typename?: 'BoardPostList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<BoardPostEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 외식정보 게시글 네비게이션(이전글/다음글) */
export type BoardPostNavigation = {
  __typename?: 'BoardPostNavigation';
  /** 이전글 ID */
  nextPostId?: Maybe<Scalars['ID']['output']>;
  /** input params */
  params?: Maybe<BoardPostNavigationParams>;
  /** 이전글 ID */
  prePostId?: Maybe<Scalars['ID']['output']>;
};

/** 외식정보 게시글 네비게이션 params */
export type BoardPostNavigationParams = {
  __typename?: 'BoardPostNavigationParams';
  /** 검색 베이스 */
  base?: Maybe<PostNaviBase>;
  /** 카테고리명 */
  category?: Maybe<Scalars['String']['output']>;
  /** 검색어 */
  search?: Maybe<Scalars['String']['output']>;
};

/** 외식정보 게시글 네비게이션 params */
export type BoardPostNavigationParamsInput = {
  /** 검색 베이스 */
  base?: InputMaybe<PostNaviBase>;
  /** 카테고리명 */
  category?: InputMaybe<Scalars['String']['input']>;
  /** 검색어 */
  search?: InputMaybe<Scalars['String']['input']>;
  /** 게시판 구분 */
  type?: InputMaybe<Scalars['String']['input']>;
};

/** 외식정보 게시글 정렬 */
export type BoardPostSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** 스크랩 수 */
  favoriteCount?: InputMaybe<IntSortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 좋아요수 */
  likeCount?: InputMaybe<IntSortInput>;
  /** 상단 고정된 날짜 */
  pinnedAt?: InputMaybe<SortInput>;
  /** 댓글수 */
  replyCount?: InputMaybe<IntSortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
  /** 조회수 정렬 */
  viewCount?: InputMaybe<IntSortInput>;
};

/** 외식정보 게시판 구분 */
export enum BoardPostTypeEnum {
  /** 외부기관 */
  ExternalOrg = 'EXTERNAL_ORG',
  /** K-FIRI 게시판 */
  Kfiri = 'KFIRI'
}

/** 외식정보 게시판 구분 필터 */
export type BoardPostTypeFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<BoardPostTypeEnum>;
  values?: InputMaybe<Array<BoardPostTypeEnum>>;
};

/** 외식정보 게시글 수정 */
export type BoardPostUpdateInput = {
  /** 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 보이기 여부 */
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** 외식정보 게시글 댓글 */
export type BoardReply = {
  __typename?: 'BoardReply';
  /** 작성자 */
  author: Member;
  /** 댓글 내용 */
  content: Scalars['String']['output'];
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 내 댓글 여부 */
  isMine: Scalars['Boolean']['output'];
  /** 좋아요 수 */
  likeCount: Scalars['Int']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 외식정보 게시글 댓글 생성 Input  */
export type BoardReplyCreateInput = {
  /** 댓글 내용 */
  content: Scalars['String']['input'];
  /** 게시물 uuid (댓글일 경우만) */
  post__id?: InputMaybe<Scalars['ID']['input']>;
};

export type BoardReplyEdge = {
  __typename?: 'BoardReplyEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: BoardReply;
};

/** 외식정보 게시글 필터 Input */
export type BoardReplyFilterInput = {
  /** 작성자 uuid */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 댓글 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 관련 게시물 uuid */
  post__id?: InputMaybe<Array<IdFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 외신산업 게시글 댓글 리스트 */
export type BoardReplyList = {
  __typename?: 'BoardReplyList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<BoardReplyEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 외식정보 댓글 신고정보 */
export type BoardReplyReport = {
  __typename?: 'BoardReplyReport';
  /** 관리자 메모 */
  adminMemo: Scalars['String']['output'];
  /** 작성자 */
  author: Member;
  /** 신고 카테고리 */
  category?: Maybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: Maybe<Scalars['String']['output']>;
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기타 예비용 필드 */
  etc?: Maybe<Scalars['String']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 신고 상태 */
  state: CommunityReportStateEnumType;
  /** 신고 커뮤니티 타겟 */
  targetId?: Maybe<Scalars['String']['output']>;
  /** 신고 타겟 타입 */
  type: CommunityReportTypeEnumType;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 외식정보 댓글 신고 생성 Input */
export type BoardReplyReportCreateInput = {
  /** 신고 카테고리 */
  category?: InputMaybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 기타 예비용 필드 */
  etc?: InputMaybe<Scalars['String']['input']>;
  /** 신고 커뮤니티 타겟 */
  targetId?: InputMaybe<Scalars['String']['input']>;
  /** 신고 타겟 타입 */
  type?: InputMaybe<CommunityReportTypeEnumType>;
};

export type BoardReplyReportEdge = {
  __typename?: 'BoardReplyReportEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: BoardReplyReport;
};

/** 외식정보 댓글 신고 리스트 필터 Input */
export type BoardReplyReportFilterInput = {
  /** 작성자 이메일 */
  author__email?: InputMaybe<Array<StringFilterInput>>;
  /** 작성자 고유 id */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 작성자 이름 */
  author__name?: InputMaybe<Array<StringFilterInput>>;
  /** 신고 카테고리 */
  category?: InputMaybe<Array<CommunityReportCategoryFilterInput>>;
  /** 신고 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 기타 */
  etc?: InputMaybe<Array<StringFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 신고 상태 */
  state?: InputMaybe<Array<CommunityReportStateFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 외식정보 댓글 신고 리스트 */
export type BoardReplyReportList = {
  __typename?: 'BoardReplyReportList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<BoardReplyReportEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 외식정보 댓글 신고 리스트 정렬 Input */
export type BoardReplyReportSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 외식정보 댓글 신고 수정 Input */
export type BoardReplyReportUpdateInput = {
  /** 신고 카테고리 */
  category?: InputMaybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 기타 예비용 필드 */
  etc?: InputMaybe<Scalars['String']['input']>;
};

/** 외식정보 게시글 정렬 Input */
export type BoardReplySortInput = {
  /** 댓글 내용 정렬 */
  content?: InputMaybe<StringSortInput>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 외식정보 게시글 댓글 수정 Input  */
export type BoardReplyUpdateInput = {
  /** 댓글 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
};

/** 논리(Boolean) 필터 */
export type BooleanFilterInput = {
  operator: BooleanFilterOperators;
  value?: InputMaybe<Scalars['Boolean']['input']>;
};

/** 논리 필터 연산자 */
export enum BooleanFilterOperators {
  Equal = 'EQUAL',
  IsNotNull = 'IS_NOT_NULL',
  IsNull = 'IS_NULL',
  NotEqual = 'NOT_EQUAL'
}

/** 비즈니스 채팅 메시지 생성 데이터 */
export type BusinessChatMessageCreateInput = {
  /** 채팅방 ID */
  channelId: Scalars['ID']['input'];
  /** 메시지 */
  message?: InputMaybe<Scalars['String']['input']>;
  /** 추가 데이터 */
  payload?: InputMaybe<Scalars['JSON']['input']>;
  /** 종류 */
  type: ChatMessageType;
};

/** 채팅 메시지 필터 데이터 */
export type BusinessChatMessageFilterInput = {
  /** 작성자 ID */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 채팅방 ID */
  channel__id?: InputMaybe<Array<IdFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 메시지 */
  message?: InputMaybe<Array<StringFilterInput>>;
  /** 종류 */
  type?: InputMaybe<Array<ChatMessageTypeFilterInput>>;
};

/** 채팅 메시지 정렬 데이터 */
export type BusinessChatMessageSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 메시지 */
  message?: InputMaybe<StringSortInput>;
};

/** 비즈니스 채팅 신고 모델 */
export type BusinessChatReport = {
  __typename?: 'BusinessChatReport';
  /** 관리자 메모 */
  adminMemo: Scalars['String']['output'];
  /** 작성자 */
  author: Member;
  /** 신고 카테고리 */
  category?: Maybe<ChatReportCategory>;
  /** 신고 내용 */
  content?: Maybe<Scalars['String']['output']>;
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기타 예비용 필드 */
  etc?: Maybe<Scalars['String']['output']>;
  /** 신고 파일 */
  files?: Maybe<Array<File>>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 신고 상태 */
  state?: Maybe<ChatReportState>;
  /** 신고 타겟 */
  targetId?: Maybe<Scalars['String']['output']>;
  /** 신고 타겟 데이터 */
  targetInfo?: Maybe<ChatReportTarget>;
  /** 신고 종류 */
  type?: Maybe<ChatReportType>;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 비즈니스 채팅 신고 생성 */
export type BusinessChatReportCreateInput = {
  /** 신고 카테고리 */
  category?: InputMaybe<ChatReportCategory>;
  /** 신고 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 기타 예비용 필드 */
  etc?: InputMaybe<Scalars['String']['input']>;
  /** 게시물 파일들 */
  file__ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** 신고 채팅 타겟 */
  targetId?: InputMaybe<Scalars['String']['input']>;
  /** 신고 종류 */
  type?: InputMaybe<ChatReportType>;
};

export type BusinessChatReportEdge = {
  __typename?: 'BusinessChatReportEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: BusinessChatReport;
};

/** 비즈니스 채팅 신고 목록 */
export type BusinessChatReportList = {
  __typename?: 'BusinessChatReportList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<BusinessChatReportEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 채팅 신고 수정 */
export type BusinessChatReportUpdateInput = {
  /** 신고 카테고리 */
  category?: InputMaybe<ChatReportCategory>;
  /** 신고 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 기타 예비용 필드 */
  etc?: InputMaybe<Scalars['String']['input']>;
  /** 신고 채팅 타겟 */
  targetId?: InputMaybe<Scalars['String']['input']>;
  /** 신고 종류 */
  type?: InputMaybe<ChatReportType>;
};

/** 채팅 채널 */
export type ChatChannel = {
  __typename?: 'ChatChannel';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 공개 여부 */
  isVisible: Scalars['Boolean']['output'];
  /** 상태 */
  state: ChatChannelState;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

export type ChatChannelEdge = {
  __typename?: 'ChatChannelEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: ChatChannel;
};

/** 채팅방 필터 */
export type ChatChannelFilterInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 생성자 ID */
  creator__id?: InputMaybe<Array<IdFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 참여자 이름 */
  participant_users__name?: InputMaybe<Array<StringFilterInput>>;
  /** 참여자 ID */
  participants__userId?: InputMaybe<Array<IdFilterInput>>;
  /** 상태 */
  state?: InputMaybe<Array<ChatChannelStateEnumFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 채팅방 정렬 */
export type ChatChannelOrderByInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 채팅방 상태 */
export enum ChatChannelState {
  /** 활성화 */
  Active = 'ACTIVE',
  /** 비활성화 */
  Inactive = 'INACTIVE'
}

/** 채팅방 상태 필터 */
export type ChatChannelStateEnumFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<ChatChannelState>;
  values?: InputMaybe<Array<ChatChannelState>>;
};

/** 채팅 메시지 */
export type ChatMessage = {
  __typename?: 'ChatMessage';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 메시지 */
  message?: Maybe<Scalars['String']['output']>;
  /** 추가 데이터 */
  payload?: Maybe<ChatMessagePayload>;
  /** 종류 */
  type: ChatMessageType;
};

/** 채팅 메시지 카드 액션 */
export type ChatMessageCardAction = {
  __typename?: 'ChatMessageCardAction';
  /** 타겟 ID */
  targetId: Scalars['ID']['output'];
  /** 타입 */
  type: Scalars['String']['output'];
};

/** 채팅 메시지 카드 타입 데이터 */
export type ChatMessageCardTypePayload = {
  __typename?: 'ChatMessageCardTypePayload';
  /** 카드 액션 */
  actions: Array<ChatMessageCardAction>;
  /** 카드 이미지 */
  image: File;
};

export type ChatMessageEdge = {
  __typename?: 'ChatMessageEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: ChatMessage;
};

/** 채팅 메시지 파일 필터 데이터 */
export type ChatMessageFileFilterInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 종류 */
  type?: InputMaybe<Array<ChatMessageFileTypeFilterInput>>;
};

/** 채팅 Payload file types */
export enum ChatMessageFileType {
  /** 기타 파일 */
  File = 'FILE',
  /** 이미지 */
  Image = 'IMAGE',
  /** 비디오 */
  Video = 'VIDEO'
}

/** 채팅 메시지 파일 타입 필터 */
export type ChatMessageFileTypeFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<ChatMessageFileType>;
  values?: InputMaybe<Array<ChatMessageFileType>>;
};

/** 채팅 메시지 파일 타입 데이터 */
export type ChatMessageFileTypePayload = {
  __typename?: 'ChatMessageFileTypePayload';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 원본 이름 */
  filename: Scalars['String']['output'];
  /** 고화질 URL (1080px) */
  highQualityURL?: Maybe<Scalars['String']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 저화질 URL (480px) */
  lowQualityURL?: Maybe<Scalars['String']['output']>;
  /** MD5 체크섬 */
  md5: Scalars['String']['output'];
  /** MIME 타입 */
  mimetype: Scalars['String']['output'];
  /** 우선 순위 (정렬용) */
  priority: Scalars['Int']['output'];
  /** 파일 크기 (바이트) */
  size: Scalars['Int']['output'];
  /** 썸네일용 URL (240px) */
  thumbnailURL?: Maybe<Scalars['String']['output']>;
  /** 원본 URL */
  url: Scalars['String']['output'];
};

/** 채팅 메시지 링크 타입 데이터 */
export type ChatMessageLinkTypePayload = {
  __typename?: 'ChatMessageLinkTypePayload';
  /** 링크(url) */
  link: Scalars['String']['output'];
};

export type ChatMessagePayload = ChatMessageCardTypePayload | ChatMessageFileTypePayload | ChatMessageLinkTypePayload;

/** 채팅 메시지 종류 */
export enum ChatMessageType {
  /** 카드형 */
  Card = 'CARD',
  /** 기타 파일 */
  File = 'FILE',
  /** 이미지 */
  Image = 'IMAGE',
  /** 링크 */
  Link = 'LINK',
  /** 시스템 */
  System = 'SYSTEM',
  /** 텍스트 */
  Text = 'TEXT',
  /** 비디오 */
  Video = 'VIDEO'
}

/** 채팅 메시지 종류 필터 */
export type ChatMessageTypeFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<ChatMessageType>;
  values?: InputMaybe<Array<ChatMessageType>>;
};

/** 채팅 신고 모델 */
export type ChatReport = {
  __typename?: 'ChatReport';
  /** 신고 카테고리 */
  category?: Maybe<ChatReportCategory>;
  /** 신고 내용 */
  content?: Maybe<Scalars['String']['output']>;
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기타 예비용 필드 */
  etc?: Maybe<Scalars['String']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 신고 상태 */
  state?: Maybe<ChatReportState>;
  /** 신고 타겟 */
  targetId?: Maybe<Scalars['String']['output']>;
  /** 신고 종류 */
  type?: Maybe<ChatReportType>;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

export enum ChatReportCategory {
  /** 욕설/인신공격 */
  Abusive = 'ABUSIVE',
  /** 기타 */
  Etc = 'ETC',
  /** 아이디/DB거래 */
  IdDbDeal = 'ID_DB_DEAL',
  /** 불법 정보 */
  IllegalInfo = 'ILLEGAL_INFO',
  /** 개인 정보 노출 */
  PersonalInfoDisclosure = 'PERSONAL_INFO_DISCLOSURE',
  /** 영리 목적/홍보성 게시물 */
  Publicity = 'PUBLICITY',
  /** 게시물 도배 */
  RepeatedInfo = 'REPEATED_INFO',
  /** 이용규칙 위반 */
  RulViolation = 'RUL_VIOLATION',
  /** 음란성/선정성 게시물 */
  Sensuality = 'SENSUALITY'
}

export type ChatReportCategoryFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<ChatReportCategory>;
  values?: InputMaybe<Array<ChatReportCategory>>;
};

export type ChatReportEdge = {
  __typename?: 'ChatReportEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: ChatReport;
};

/** 채팅 신고 필터 */
export type ChatReportFilterInput = {
  /** 작성자 이메일 */
  author__email?: InputMaybe<Array<StringFilterInput>>;
  /** 작성자 고유 id */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 작성자 이름 */
  author__name?: InputMaybe<Array<StringFilterInput>>;
  /** 신고 카테고리 */
  category?: InputMaybe<Array<ChatReportCategoryFilterInput>>;
  /** 신고 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 기타 */
  etc?: InputMaybe<Array<StringFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 신고 상태 */
  state?: InputMaybe<Array<ChatReportStateFilterInput>>;
  /** 신고 타입 */
  type?: InputMaybe<Array<ChatReportTypeFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 채팅 신고 정렬 */
export type ChatReportOrderByInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

export enum ChatReportState {
  /** 완료 */
  Complete = 'COMPLETE',
  /** 대기중 */
  Pending = 'PENDING',
  /** 처리중 */
  Processing = 'PROCESSING'
}

export type ChatReportStateFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<ChatReportState>;
  values?: InputMaybe<Array<ChatReportState>>;
};

export type ChatReportTarget = ChatChannel | ChatMessage | Member;

export enum ChatReportType {
  /** 채팅방 */
  Channel = 'CHANNEL',
  /** 메시지 */
  Message = 'MESSAGE',
  /** 비즈니스 타겟 */
  Target = 'TARGET',
  /** 유저 */
  User = 'USER'
}

export type ChatReportTypeFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<ChatReportType>;
  values?: InputMaybe<Array<ChatReportType>>;
};

export enum CommunityReportCategoryEnumType {
  /** 욕설/인신공격 */
  Abusive = 'ABUSIVE',
  /** 기타 */
  Etc = 'ETC',
  /** 아이디/DB거래 */
  IdDbDeal = 'ID_DB_DEAL',
  /** 불법 정보 */
  IllegalInfo = 'ILLEGAL_INFO',
  /** 개인 정보 노출 */
  PersonalInfoDisclosure = 'PERSONAL_INFO_DISCLOSURE',
  /** 영리 목적/홍보성 게시물 */
  Publicity = 'PUBLICITY',
  /** 게시물 도배 */
  RepeatedInfo = 'REPEATED_INFO',
  /** 이용규칙 위반 */
  RulViolation = 'RUL_VIOLATION',
  /** 음란성/선정성 게시물 */
  Sensuality = 'SENSUALITY'
}

export type CommunityReportCategoryFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<CommunityReportCategoryEnumType>;
  values?: InputMaybe<Array<CommunityReportCategoryEnumType>>;
};

export enum CommunityReportStateEnumType {
  /** 완료 */
  Complete = 'COMPLETE',
  /** 대기중 */
  Pending = 'PENDING',
  /** 처리중 */
  Processing = 'PROCESSING'
}

export type CommunityReportStateFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<CommunityReportStateEnumType>;
  values?: InputMaybe<Array<CommunityReportStateEnumType>>;
};

/** 신고 타겟 타입 */
export enum CommunityReportTypeEnumType {
  /** 게시글 신고 */
  Post = 'POST',
  /** 댓글 신고 */
  Reply = 'REPLY'
}

/** 외식컨설팅·인증 */
export type Consultant = {
  __typename?: 'Consultant';
  /** 신청된 횟수 */
  appliedCnt: Scalars['Float']['output'];
  /** 작성자 */
  author: Member;
  /** 카테고리 */
  category: ConsultantCategory;
  /** 내용 */
  content: Scalars['String']['output'];
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 진행중인 신청건이 있는지 여부 */
  isApply: Scalars['Boolean']['output'];
  /** 컨설턴트 명 */
  name: Scalars['String']['output'];
  /** 프로필 이미지 파일 */
  profile: File;
  /** 상태 */
  state: ConsultantStateEnum;
  /** 컨설턴트 부가 텍스트 ex) 이름 ({부가텍스트}) */
  subText: Scalars['String']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 외식 컨설턴트 신청 */
export type ConsultantApply = {
  __typename?: 'ConsultantApply';
  /** 관리자 메모 */
  adminMemo?: Maybe<Scalars['String']['output']>;
  /** 신청자 정보 */
  author: Member;
  /** 컨설턴트 정보 */
  consultant?: Maybe<Consultant>;
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 상태 */
  state: ConsultantApplyStateEnum;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

export type ConsultantApplyEdge = {
  __typename?: 'ConsultantApplyEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: ConsultantApply;
};

/** 외식 컨설턴트 신청 필터 */
export type ConsultantApplyFilterInput = {
  /** 신청자ID */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 신청자 이름 */
  author__name?: InputMaybe<Array<StringFilterInput>>;
  /** 컨설턴트 */
  consultant__id?: InputMaybe<Array<IdFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 상태 */
  state?: InputMaybe<Array<ConsultantApplyStateEnumFilter>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 외식 컨설턴트 신청 리스트 */
export type ConsultantApplyList = {
  __typename?: 'ConsultantApplyList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<ConsultantApplyEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 외식 컨설턴트 신청 정렬 */
export type ConsultantApplySortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 컨설팅 신청 상태 */
export enum ConsultantApplyStateEnum {
  /** 신청함 */
  Apply = 'APPLY',
  /** 종료 */
  End = 'END'
}

/** 외식 컨설팅 신청 상태 필터 */
export type ConsultantApplyStateEnumFilter = {
  operator: EnumFilterOperators;
  value?: InputMaybe<ConsultantApplyStateEnum>;
  values?: InputMaybe<Array<ConsultantApplyStateEnum>>;
};

/** 외식 컨설턴트 신청 수정 */
export type ConsultantApplyUpdateInput = {
  adminMemo?: InputMaybe<Scalars['String']['input']>;
  /** 상태 */
  state?: InputMaybe<ConsultantApplyStateEnum>;
};

/** 외식 컨설턴트 카테고리 */
export type ConsultantCategory = {
  __typename?: 'ConsultantCategory';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 카테고리명 */
  name: Scalars['String']['output'];
  /** 순서 */
  priority: Scalars['Float']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 외식 컨설턴트 생성 Input */
export type ConsultantCategoryCreateInput = {
  /** 카테고리명 */
  name: Scalars['String']['input'];
  /** 순서 */
  priority: Scalars['Float']['input'];
};

/** 외식 컨설턴트 생성 Input */
export type ConsultantCategoryUpdateInput = {
  /** 카테고리명 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 순서 */
  priority?: InputMaybe<Scalars['Float']['input']>;
};

/** 외식컨설팅·인증 생성 */
export type ConsultantCreateInput = {
  /** 카테고리 */
  categoryId: Scalars['ID']['input'];
  /** 내용 */
  content: Scalars['String']['input'];
  /** 컨설턴트 명 */
  name: Scalars['String']['input'];
  /** 프로필 */
  profileId: Scalars['ID']['input'];
  /** 컨설턴트 부가 텍스트 ex) 이름 ({부가텍스트}) */
  subText?: InputMaybe<Scalars['String']['input']>;
};

export type ConsultantEdge = {
  __typename?: 'ConsultantEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: Consultant;
};

/** 외식컨설팅·인증 필터 */
export type ConsultantFilterInput = {
  /** 카테고리 */
  category__id?: InputMaybe<Array<IdFilterInput>>;
  /** 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 컨설턴트 명 */
  name?: InputMaybe<Array<StringFilterInput>>;
  state?: InputMaybe<Array<ConsultantStateFilterInput>>;
  /** 컨설턴트 부가 텍스트 ex) 이름 ({부가텍스트}) */
  subText?: InputMaybe<Array<StringFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 외식컨설팅·인증 리스트 */
export type ConsultantList = {
  __typename?: 'ConsultantList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<ConsultantEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 컨설턴트 게시글 네비게이션(이전글/다음글) */
export type ConsultantNavigation = {
  __typename?: 'ConsultantNavigation';
  /** 이전글 ID */
  nextPostId?: Maybe<Scalars['ID']['output']>;
  /** input params */
  params?: Maybe<ConsultantNavigationParams>;
  /** 이전글 ID */
  prePostId?: Maybe<Scalars['ID']['output']>;
};

/** 컨설턴트 게시글 네비게이션 params */
export type ConsultantNavigationParams = {
  __typename?: 'ConsultantNavigationParams';
  /** 검색 베이스 */
  base?: Maybe<PostNaviBase>;
  /** 카테고리명 */
  category?: Maybe<Scalars['String']['output']>;
  /** 검색어 */
  search?: Maybe<Scalars['String']['output']>;
};

/** 컨설턴트 게시글 네비게이션 input params */
export type ConsultantNavigationParamsInput = {
  /** 검색 베이스 */
  base?: InputMaybe<PostNaviBase>;
  /** 카테고리명 */
  category?: InputMaybe<Scalars['String']['input']>;
  /** 검색어 */
  search?: InputMaybe<Scalars['String']['input']>;
};

/** 컨설턴트 신고정보 */
export type ConsultantReport = {
  __typename?: 'ConsultantReport';
  /** 관리자 메모 */
  adminMemo: Scalars['String']['output'];
  /** 작성자 */
  author: Member;
  /** 신고 카테고리 */
  category?: Maybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: Maybe<Scalars['String']['output']>;
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기타 예비용 필드 */
  etc?: Maybe<Scalars['String']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 신고 상태 */
  state: CommunityReportStateEnumType;
  /** 신고 커뮤니티 타겟 */
  targetId?: Maybe<Scalars['String']['output']>;
  /** 신고 타겟 타입 */
  type: CommunityReportTypeEnumType;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 컨설턴트 신고 생성 Input */
export type ConsultantReportCreateInput = {
  /** 신고 카테고리 */
  category?: InputMaybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 기타 예비용 필드 */
  etc?: InputMaybe<Scalars['String']['input']>;
  /** 신고 커뮤니티 타겟 */
  targetId?: InputMaybe<Scalars['String']['input']>;
  /** 신고 타겟 타입 */
  type?: InputMaybe<CommunityReportTypeEnumType>;
};

export type ConsultantReportEdge = {
  __typename?: 'ConsultantReportEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: ConsultantReport;
};

/** 컨설턴트 신고 리스트 필터 Input */
export type ConsultantReportFilterInput = {
  /** 작성자 이메일 */
  author__email?: InputMaybe<Array<StringFilterInput>>;
  /** 작성자 고유 id */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 작성자 이름 */
  author__name?: InputMaybe<Array<StringFilterInput>>;
  /** 신고 카테고리 */
  category?: InputMaybe<Array<CommunityReportCategoryFilterInput>>;
  /** 신고 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 기타 */
  etc?: InputMaybe<Array<StringFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 신고 상태 */
  state?: InputMaybe<Array<CommunityReportStateFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 컨설턴트 신고 리스트 */
export type ConsultantReportList = {
  __typename?: 'ConsultantReportList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<ConsultantReportEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 컨설턴트 신고 리스트 정렬 Input */
export type ConsultantReportSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 컨설턴트 신고 수정 Input */
export type ConsultantReportUpdateInput = {
  /** 신고 카테고리 */
  category?: InputMaybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 기타 예비용 필드 */
  etc?: InputMaybe<Scalars['String']['input']>;
};

/** 외식컨설팅·인증 정렬 */
export type ConsultantSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 컨설턴트 게시글 상태 */
export enum ConsultantStateEnum {
  /** 검토중 */
  OnReview = 'ON_REVIEW',
  /** 게시중 */
  Publishing = 'PUBLISHING',
  /** 심사거절 */
  Reject = 'REJECT',
  /** 게시중지 */
  ViewStop = 'VIEW_STOP'
}

/** 외식컨설팅·인증 상태 필터 */
export type ConsultantStateFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<ConsultantStateEnum>;
  values?: InputMaybe<Array<ConsultantStateEnum>>;
};

/** 외식컨설팅·인증 수정 */
export type ConsultantUpdateInput = {
  /** 카테고리 */
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  /** 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 컨설턴트 명 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 프로필 */
  profileId?: InputMaybe<Scalars['ID']['input']>;
  /** 컨설턴트 부가 텍스트 ex) 이름 ({부가텍스트}) */
  subText?: InputMaybe<Scalars['String']['input']>;
};

/** 대시보드 필터 조건 */
export enum DashBoardFilterEnum {
  /** 일 기준 */
  Day = 'DAY',
  /** 월 기준 */
  Month = 'MONTH',
  /** 년 기준 */
  Year = 'YEAR'
}

/** 날짜(DateTime) 필터 */
export type DateTimeFilterInput = {
  operator: NumberFilterOperators;
  value?: InputMaybe<Scalars['DateTime']['input']>;
  value2?: InputMaybe<Scalars['DateTime']['input']>;
  values?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** 외식컨설팅 카테고리 */
export type EatOutCstCategory = {
  __typename?: 'EatOutCstCategory';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 커뮤니티 카테고리 즐켜찾기 여부 */
  isFavorite: Scalars['Boolean']['output'];
  /** 커뮤니티 카테고리 이름 */
  name: Scalars['String']['output'];
  /** 커뮤니티 카테고리 배치 순서 */
  priority: Scalars['Int']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 외식컨설팅 카테고리 생성 Input */
export type EatOutCstCategoryCreateInput = {
  /** 커뮤니티 카테고리 이름 */
  name: Scalars['String']['input'];
  /** 커뮤니티 카테고리 배치 순서 */
  priority?: InputMaybe<Scalars['Int']['input']>;
};

export type EatOutCstCategoryEdge = {
  __typename?: 'EatOutCstCategoryEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: EatOutCstCategory;
};

/** 외식컨설팅 카테고리 필터 */
export type EatOutCstCategoryFilterInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 이름 */
  name?: InputMaybe<Array<StringFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 외식컨설팅 카테고리 리스트 */
export type EatOutCstCategoryList = {
  __typename?: 'EatOutCstCategoryList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<EatOutCstCategoryEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 외식컨설팅 카테고리 정렬 */
export type EatOutCstCategorySortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 이름 */
  name?: InputMaybe<SortInput>;
  /** 순서 */
  priority?: InputMaybe<IntSortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 외식컨설팅 카테고리 수정 Input */
export type EatOutCstCategoryUpdateInput = {
  /** 커뮤니티 카테고리 이름 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 커뮤니티 카테고리 배치 순서 */
  priority?: InputMaybe<Scalars['Int']['input']>;
};

/** 외식컨설팅 게시글 */
export type EatOutCstPost = {
  __typename?: 'EatOutCstPost';
  /** 작성자 */
  author: Member;
  /** 게시물 카테고리 */
  category?: Maybe<EatOutCstCategory>;
  /** 내용 */
  content: Scalars['String']['output'];
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 이미지, 영상 목록 */
  files?: Maybe<Array<File>>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 나의 좋아요 여부 */
  isLike: Scalars['Boolean']['output'];
  isPinned?: Maybe<Scalars['Boolean']['output']>;
  /** 보이기 여부 */
  isVisible: Scalars['Boolean']['output'];
  /** 해당 게시물 좋아요 개수 */
  likeCnt: Scalars['Float']['output'];
  pinnedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 댓글 수 */
  replyCount: Scalars['Int']['output'];
  /** 상태 */
  state: EatOutCstPostStateEnum;
  /** 썸네일 이미지 파일 */
  thumbnailFile?: Maybe<File>;
  /** 제목 */
  title?: Maybe<Scalars['String']['output']>;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
  /** 해당 게시물 조회수 */
  viewCnt: Scalars['Float']['output'];
};

/** 외식컨설팅 게시글 생성 */
export type EatOutCstPostCreateInput = {
  /** 커뮤니티 카테고리 ID */
  category__id?: InputMaybe<Scalars['ID']['input']>;
  /** 내용 */
  content: Scalars['String']['input'];
  /** 게시물 파일들 */
  file__ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** 썸네일 파일 ID */
  thumbnailFile__id?: InputMaybe<Scalars['ID']['input']>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type EatOutCstPostEdge = {
  __typename?: 'EatOutCstPostEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: EatOutCstPost;
};

/** 외식컨설팅 게시글 필터 */
export type EatOutCstPostFilterInput = {
  /** 작성자 이메일 */
  author__email?: InputMaybe<Array<StringFilterInput>>;
  /** 작성자 고유 id */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 작성자 이름 */
  author__name?: InputMaybe<Array<StringFilterInput>>;
  /** 카테고리 고유 id */
  category__id?: InputMaybe<Array<StringFilterInput>>;
  /** 카테고리 이름 */
  category__name?: InputMaybe<Array<StringFilterInput>>;
  /** 게시물 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 숨기기한 사용자 고유 id */
  hide__id?: InputMaybe<Array<IdFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 상단 고정 여부 */
  isPinned?: InputMaybe<Array<BooleanFilterInput>>;
  /** 숨김여부 */
  isVisible?: InputMaybe<Array<BooleanFilterInput>>;
  /** 좋아요 사용자 고유 id */
  likes__id?: InputMaybe<Array<IdFilterInput>>;
  state?: InputMaybe<Array<EatOutCstPostStateFilterInput>>;
  /** 게시물 제목 */
  title?: InputMaybe<Array<StringFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 외식컨설팅 게시물 목록 */
export type EatOutCstPostList = {
  __typename?: 'EatOutCstPostList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<EatOutCstPostEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 외식컨설팅 게시글 네비게이션(이전글/다음글) */
export type EatOutCstPostNavigation = {
  __typename?: 'EatOutCstPostNavigation';
  /** 이전글 ID */
  nextPostId?: Maybe<Scalars['ID']['output']>;
  /** input params */
  params?: Maybe<EatOutCstPostNavigationParams>;
  /** 이전글 ID */
  prePostId?: Maybe<Scalars['ID']['output']>;
};

/** 외식컨설팅 게시글 네비게이션 params */
export type EatOutCstPostNavigationParams = {
  __typename?: 'EatOutCstPostNavigationParams';
  /** 검색 베이스 */
  base?: Maybe<PostNaviBase>;
  /** 카테고리명 */
  category?: Maybe<Scalars['String']['output']>;
  /** 검색어 */
  search?: Maybe<Scalars['String']['output']>;
};

/** 외식컨설팅 게시글 네비게이션 input params */
export type EatOutCstPostNavigationParamsInput = {
  /** 검색 베이스 */
  base?: InputMaybe<PostNaviBase>;
  /** 카테고리명 */
  category?: InputMaybe<Scalars['String']['input']>;
  /** 검색어 */
  search?: InputMaybe<Scalars['String']['input']>;
};

/** 외식컨설팅 게시글 정렬 */
export type EatOutCstPostSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** 스크랩 수 */
  favoriteCount?: InputMaybe<IntSortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 좋아요수 */
  likeCount?: InputMaybe<IntSortInput>;
  /** 상단 고정된 날짜 */
  pinnedAt?: InputMaybe<SortInput>;
  /** 댓글수 */
  replyCount?: InputMaybe<IntSortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
  /** 조회수 정렬 */
  viewCount?: InputMaybe<IntSortInput>;
};

/** 외식 컨설팅 게시글 상태 */
export enum EatOutCstPostStateEnum {
  /** 검토중 */
  OnReview = 'ON_REVIEW',
  /** 게시중 */
  Publishing = 'PUBLISHING',
  /** 심사거절 */
  Reject = 'REJECT',
  /** 게시중지 */
  ViewStop = 'VIEW_STOP'
}

/** 외식컨설팅 게시글 상태 필터 */
export type EatOutCstPostStateFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<EatOutCstPostStateEnum>;
  values?: InputMaybe<Array<EatOutCstPostStateEnum>>;
};

/** 외식컨설팅 게시글 수정 */
export type EatOutCstPostUpdateInput = {
  /** 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 보이기 여부 */
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** 외식컨설팅 신고정보 */
export type EatOutCstReport = {
  __typename?: 'EatOutCstReport';
  /** 관리자 메모 */
  adminMemo: Scalars['String']['output'];
  /** 작성자 */
  author: Member;
  /** 신고 카테고리 */
  category?: Maybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: Maybe<Scalars['String']['output']>;
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기타 예비용 필드 */
  etc?: Maybe<Scalars['String']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 신고 상태 */
  state: CommunityReportStateEnumType;
  /** 신고 커뮤니티 타겟 */
  targetId?: Maybe<Scalars['String']['output']>;
  /** 신고 타겟 타입 */
  type: CommunityReportTypeEnumType;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 외식컨설팅 신고 생성 Input */
export type EatOutCstReportCreateInput = {
  /** 신고 카테고리 */
  category?: InputMaybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 기타 예비용 필드 */
  etc?: InputMaybe<Scalars['String']['input']>;
  /** 신고 커뮤니티 타겟 */
  targetId?: InputMaybe<Scalars['String']['input']>;
  /** 신고 타겟 타입 */
  type?: InputMaybe<CommunityReportTypeEnumType>;
};

export type EatOutCstReportEdge = {
  __typename?: 'EatOutCstReportEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: EatOutCstReport;
};

/** 외식컨설팅 신고 리스트 필터 Input */
export type EatOutCstReportFilterInput = {
  /** 작성자 이메일 */
  author__email?: InputMaybe<Array<StringFilterInput>>;
  /** 작성자 고유 id */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 작성자 이름 */
  author__name?: InputMaybe<Array<StringFilterInput>>;
  /** 신고 카테고리 */
  category?: InputMaybe<Array<CommunityReportCategoryFilterInput>>;
  /** 신고 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 기타 */
  etc?: InputMaybe<Array<StringFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 신고 상태 */
  state?: InputMaybe<Array<CommunityReportStateFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 외식컨설팅 신고 리스트 */
export type EatOutCstReportList = {
  __typename?: 'EatOutCstReportList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<EatOutCstReportEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 외식컨설팅 신고 리스트 정렬 Input */
export type EatOutCstReportSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 외식컨설팅 신고 수정 Input */
export type EatOutCstReportUpdateInput = {
  /** 신고 카테고리 */
  category?: InputMaybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 기타 예비용 필드 */
  etc?: InputMaybe<Scalars['String']['input']>;
};

/** 평생교육원-게시글 카테고리 */
export type EduCenterCategory = {
  __typename?: 'EduCenterCategory';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 커뮤니티 카테고리 즐켜찾기 여부 */
  isFavorite: Scalars['Boolean']['output'];
  /** 커뮤니티 카테고리 이름 */
  name: Scalars['String']['output'];
  /** 커뮤니티 카테고리 배치 순서 */
  priority: Scalars['Int']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 평생교육원-게시글 카테고리 생성 Input */
export type EduCenterCategoryCreateInput = {
  /** 커뮤니티 카테고리 이름 */
  name: Scalars['String']['input'];
  /** 커뮤니티 카테고리 배치 순서 */
  priority?: InputMaybe<Scalars['Int']['input']>;
};

export type EduCenterCategoryEdge = {
  __typename?: 'EduCenterCategoryEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: EduCenterCategory;
};

/** 평생교육원-게시글 카테고리 필터 */
export type EduCenterCategoryFilterInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 이름 */
  name?: InputMaybe<Array<StringFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 평생교육원-게시글 카테고리 리스트 */
export type EduCenterCategoryList = {
  __typename?: 'EduCenterCategoryList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<EduCenterCategoryEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 평생교육원-게시글 카테고리 정렬 */
export type EduCenterCategorySortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 이름 */
  name?: InputMaybe<SortInput>;
  /** 순서 */
  priority?: InputMaybe<IntSortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 평생교육원-게시글 카테고리 수정 Input */
export type EduCenterCategoryUpdateInput = {
  /** 커뮤니티 카테고리 이름 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 커뮤니티 카테고리 배치 순서 */
  priority?: InputMaybe<Scalars['Int']['input']>;
};

/** 평생교육원-게시글 게시글 */
export type EduCenterPost = {
  __typename?: 'EduCenterPost';
  /** 작성자 */
  author: Member;
  /** 게시물 카테고리 */
  category?: Maybe<EduCenterCategory>;
  /** 내용 */
  content: Scalars['String']['output'];
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 해당 게시물 스크랩수 */
  favoriteCnt: Scalars['Float']['output'];
  /** 이미지, 영상 목록 */
  files?: Maybe<Array<File>>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 해당 게시물 즐겨찾기(스크랩) 여부 */
  isFavorite: Scalars['Boolean']['output'];
  /** 나의 좋아요 여부 */
  isLike: Scalars['Boolean']['output'];
  isPinned?: Maybe<Scalars['Boolean']['output']>;
  /** 보이기 여부 */
  isVisible: Scalars['Boolean']['output'];
  /** 해당 게시물 좋아요 개수 */
  likeCnt: Scalars['Float']['output'];
  pinnedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 댓글 수 */
  replyCount: Scalars['Int']['output'];
  /** 상태 */
  state: EduCenterPostStateEnum;
  /** 제목 */
  title?: Maybe<Scalars['String']['output']>;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
  /** 해당 게시물 조회수 */
  viewCnt: Scalars['Float']['output'];
};

/** 평생교육원-게시글 게시글 생성 */
export type EduCenterPostCreateInput = {
  /** 커뮤니티 카테고리 ID */
  category__id?: InputMaybe<Scalars['ID']['input']>;
  /** 내용 */
  content: Scalars['String']['input'];
  /** 게시물 파일들 */
  file__ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** 썸네일 파일 ID */
  thumbnailFile__id?: InputMaybe<Scalars['ID']['input']>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type EduCenterPostEdge = {
  __typename?: 'EduCenterPostEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: EduCenterPost;
};

/** 평생교육원-게시글 게시글 필터 */
export type EduCenterPostFilterInput = {
  /** 작성자 이메일 */
  author__email?: InputMaybe<Array<StringFilterInput>>;
  /** 작성자 고유 id */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 작성자 이름 */
  author__name?: InputMaybe<Array<StringFilterInput>>;
  /** 카테고리 고유 id */
  category__id?: InputMaybe<Array<StringFilterInput>>;
  /** 카테고리 이름 */
  category__name?: InputMaybe<Array<StringFilterInput>>;
  /** 게시물 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 숨기기한 사용자 고유 id */
  hide__id?: InputMaybe<Array<IdFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 상단 고정 여부 */
  isPinned?: InputMaybe<Array<BooleanFilterInput>>;
  /** 숨김여부 */
  isVisible?: InputMaybe<Array<BooleanFilterInput>>;
  /** 좋아요 사용자 고유 id */
  likes__id?: InputMaybe<Array<IdFilterInput>>;
  state?: InputMaybe<Array<EduCenterPostStateFilterInput>>;
  /** 게시물 제목 */
  title?: InputMaybe<Array<StringFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 평생교육원-게시글 게시물 목록 */
export type EduCenterPostList = {
  __typename?: 'EduCenterPostList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<EduCenterPostEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 평생교육원 게시글 네비게이션(이전글/다음글) */
export type EduCenterPostNavigation = {
  __typename?: 'EduCenterPostNavigation';
  /** 이전글 ID */
  nextPostId?: Maybe<Scalars['ID']['output']>;
  /** input params */
  params?: Maybe<EduCenterPostNavigationParams>;
  /** 이전글 ID */
  prePostId?: Maybe<Scalars['ID']['output']>;
};

/** 평생교육원 게시글 네비게이션 params */
export type EduCenterPostNavigationParams = {
  __typename?: 'EduCenterPostNavigationParams';
  /** 검색 베이스 */
  base?: Maybe<PostNaviBase>;
  /** 카테고리명 */
  category?: Maybe<Scalars['String']['output']>;
  /** 검색어 */
  search?: Maybe<Scalars['String']['output']>;
};

/** 평생교육원 게시글 네비게이션 input params */
export type EduCenterPostNavigationParamsInput = {
  /** 검색 베이스 */
  base?: InputMaybe<PostNaviBase>;
  /** 카테고리명 */
  category?: InputMaybe<Scalars['String']['input']>;
  /** 검색어 */
  search?: InputMaybe<Scalars['String']['input']>;
};

/** 평생교육원-게시글 게시글 정렬 */
export type EduCenterPostSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** 스크랩 수 */
  favoriteCount?: InputMaybe<IntSortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 좋아요수 */
  likeCount?: InputMaybe<IntSortInput>;
  /** 상단 고정된 날짜 */
  pinnedAt?: InputMaybe<SortInput>;
  /** 댓글수 */
  replyCount?: InputMaybe<IntSortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
  /** 조회수 정렬 */
  viewCount?: InputMaybe<IntSortInput>;
};

/** 평생교육원 게시글 상태 */
export enum EduCenterPostStateEnum {
  /** 검토중 */
  OnReview = 'ON_REVIEW',
  /** 게시중 */
  Publishing = 'PUBLISHING',
  /** 심사거절 */
  Reject = 'REJECT',
  /** 게시중지 */
  ViewStop = 'VIEW_STOP'
}

/** 평생교육원-게시글 상태 필터 */
export type EduCenterPostStateFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<EduCenterPostStateEnum>;
  values?: InputMaybe<Array<EduCenterPostStateEnum>>;
};

/** 평생교육원-게시글 게시글 수정 */
export type EduCenterPostUpdateInput = {
  /** 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 보이기 여부 */
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** 평생교육원 게시글 댓글 */
export type EduCenterReply = {
  __typename?: 'EduCenterReply';
  /** 작성자 */
  author: Member;
  /** 댓글 내용 */
  content: Scalars['String']['output'];
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 내 댓글 여부 */
  isMine: Scalars['Boolean']['output'];
  /** 좋아요 수 */
  likeCount: Scalars['Int']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 평생교육원 게시글 댓글 생성 Input  */
export type EduCenterReplyCreateInput = {
  /** 댓글 내용 */
  content: Scalars['String']['input'];
  /** 게시물 uuid (댓글일 경우만) */
  post__id?: InputMaybe<Scalars['ID']['input']>;
};

export type EduCenterReplyEdge = {
  __typename?: 'EduCenterReplyEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: EduCenterReply;
};

/** 평생교육원 게시글 필터 Input */
export type EduCenterReplyFilterInput = {
  /** 작성자 uuid */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 댓글 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 관련 게시물 uuid */
  post__id?: InputMaybe<Array<IdFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 평생교육원 게시글 댓글 리스트 */
export type EduCenterReplyList = {
  __typename?: 'EduCenterReplyList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<EduCenterReplyEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 평생교육원-게시글 댓글 신고정보 */
export type EduCenterReplyReport = {
  __typename?: 'EduCenterReplyReport';
  /** 관리자 메모 */
  adminMemo?: Maybe<Scalars['String']['output']>;
  /** 작성자 */
  author: Member;
  /** 신고 카테고리 */
  category?: Maybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: Maybe<Scalars['String']['output']>;
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기타 예비용 필드 */
  etc?: Maybe<Scalars['String']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 신고 상태 */
  state: CommunityReportStateEnumType;
  /** 신고 커뮤니티 타겟 */
  targetId?: Maybe<Scalars['String']['output']>;
  /** 신고 타겟 타입 */
  type: CommunityReportTypeEnumType;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 평생교육원-게시글 댓글 신고 생성 Input */
export type EduCenterReplyReportCreateInput = {
  /** 신고 카테고리 */
  category?: InputMaybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 기타 예비용 필드 */
  etc?: InputMaybe<Scalars['String']['input']>;
  /** 신고 커뮤니티 타겟 */
  targetId?: InputMaybe<Scalars['String']['input']>;
  /** 신고 타겟 타입 */
  type?: InputMaybe<CommunityReportTypeEnumType>;
};

export type EduCenterReplyReportEdge = {
  __typename?: 'EduCenterReplyReportEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: EduCenterReplyReport;
};

/** 평생교육원-게시글 댓글 신고 리스트 필터 Input */
export type EduCenterReplyReportFilterInput = {
  /** 작성자 이메일 */
  author__email?: InputMaybe<Array<StringFilterInput>>;
  /** 작성자 고유 id */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 작성자 이름 */
  author__name?: InputMaybe<Array<StringFilterInput>>;
  /** 신고 카테고리 */
  category?: InputMaybe<Array<CommunityReportCategoryFilterInput>>;
  /** 신고 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 기타 */
  etc?: InputMaybe<Array<StringFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 신고 상태 */
  state?: InputMaybe<Array<CommunityReportStateFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 평생교육원-게시글 댓글 신고 리스트 */
export type EduCenterReplyReportList = {
  __typename?: 'EduCenterReplyReportList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<EduCenterReplyReportEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 평생교육원-게시글 댓글 신고 리스트 정렬 Input */
export type EduCenterReplyReportSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 평생교육원-게시글 댓글 신고 수정 Input */
export type EduCenterReplyReportUpdateInput = {
  /** 신고 카테고리 */
  category?: InputMaybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 기타 예비용 필드 */
  etc?: InputMaybe<Scalars['String']['input']>;
};

/** 평생교육원 게시글 정렬 Input */
export type EduCenterReplySortInput = {
  /** 댓글 내용 정렬 */
  content?: InputMaybe<StringSortInput>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 평생교육원 게시글 댓글 수정 Input  */
export type EduCenterReplyUpdateInput = {
  /** 댓글 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
};

/** 평생교육원 영상 모델 */
export type EduCenterVideo = {
  __typename?: 'EduCenterVideo';
  /** 구매가격 */
  amount: Scalars['Float']['output'];
  /** 게시물 작성자 */
  author: Member;
  /** 평생교육원 영상 카테고리 */
  category?: Maybe<EduCenterVideoCategory>;
  /** 내용 */
  content: Scalars['String']['output'];
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 해당 영상 스크랩된 수 */
  favoriteCnt: Scalars['Float']['output'];
  /** 해당 영상 수료된 수 */
  finishedCnt: Scalars['Float']['output'];
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 해당 게시물 즐겨찾기(스크랩) 여부 */
  isFavorite: Scalars['Boolean']['output'];
  /** 평생교육원 영상 시청완료 여부 */
  isFinished: Scalars['Boolean']['output'];
  /** 수료증 발급여부 */
  isIssuanceCompleted: Scalars['Boolean']['output'];
  /** 해당 게시물 좋아요 여부 */
  isLike: Scalars['Boolean']['output'];
  /** 상단 고정 여부 */
  isPinned: Scalars['Boolean']['output'];
  /** 평생교육원 영상 구매 여부 */
  isPurchaseCompleted: Scalars['Boolean']['output'];
  /** 노출 여부 */
  isVisible: Scalars['Boolean']['output'];
  /** 해당 게시물 좋아요 개수 */
  likeCnt: Scalars['Float']['output'];
  /** 마지막 시청 기록 */
  myLastRecord?: Maybe<EduCenterVideoLog>;
  /** 상단 고정된 날짜 */
  pinnedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 해당 영상 구매된 수 */
  purchasedCnt: Scalars['Float']['output'];
  /** 상태 */
  state: VideoStateEnum;
  /** 영상 썸네일 */
  thumbnail?: Maybe<VimeoThumbnail>;
  /** 제목 */
  title: Scalars['String']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
  /** 영상 길이(1000=1초) */
  videoDuration: Scalars['Float']['output'];
  /** 비메오 영상 코드 */
  videoNumber: Scalars['Float']['output'];
};

/** 평생교육원 영상 카테고리 */
export type EduCenterVideoCategory = {
  __typename?: 'EduCenterVideoCategory';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  priority: Scalars['Float']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 평생교육원 영상 카테고리 생성 */
export type EduCenterVideoCategoryCreateInput = {
  name: Scalars['String']['input'];
  priority: Scalars['Float']['input'];
};

/** 평생교육원 영상 카테고리 수정 */
export type EduCenterVideoCategoryUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Float']['input']>;
};

/** 평생교육원 영상 수료증 */
export type EduCenterVideoCertificate = {
  __typename?: 'EduCenterVideoCertificate';
  /** 수료증 번호 */
  certificateNumber: Scalars['String']['output'];
  /** 생년월일 */
  dateOfBirth: Scalars['String']['output'];
  /** 교육 명 */
  educationName: Scalars['String']['output'];
  /** 수료증 파일명 */
  fileName: Scalars['String']['output'];
  /** 수료증 발급일 */
  issuedDate: Scalars['DateTime']['output'];
  /** 수료증 파일 URL */
  url: Scalars['String']['output'];
  /** 수료자 */
  userName: Scalars['String']['output'];
};

/** 평생교육원 영상 생성 */
export type EduCenterVideoCreateInput = {
  /** 구매가격 */
  amount: Scalars['Float']['input'];
  /** 카테고리 ID */
  category__id?: InputMaybe<Scalars['ID']['input']>;
  /** 내용 */
  content: Scalars['String']['input'];
  /** 노출 여부 */
  isVisible?: Scalars['Boolean']['input'];
  /** 제목(128자 이내) */
  title: Scalars['String']['input'];
  /** 비메오 영상 코드 */
  videoNumber: Scalars['Float']['input'];
};

export type EduCenterVideoEdge = {
  __typename?: 'EduCenterVideoEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: EduCenterVideo;
};

/** 평생교육원 영상 필터 */
export type EduCenterVideoFilterInput = {
  /** 카테고리 ID */
  category__id?: InputMaybe<Array<StringFilterInput>>;
  /** 카테고리명 */
  category__name?: InputMaybe<Array<StringFilterInput>>;
  /** 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 노출 여부 */
  isVisible?: InputMaybe<Array<BooleanFilterInput>>;
  /** 상태 */
  state?: InputMaybe<Array<VideoStateFilterInput>>;
  /** 제목 */
  title?: InputMaybe<Array<StringFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 평생교육원 영상 리스트 */
export type EduCenterVideoList = {
  __typename?: 'EduCenterVideoList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<EduCenterVideoEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 평생교육원 영상 시청 기록 */
export type EduCenterVideoLog = {
  __typename?: 'EduCenterVideoLog';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 시청한 시간(초단위  1초 = 1000 */
  nowVideoDuration: Scalars['Float']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 평생교육원 영상 네비게이션(이전글/다음글) */
export type EduCenterVideoNavigation = {
  __typename?: 'EduCenterVideoNavigation';
  /** 이전글 ID */
  nextPostId?: Maybe<Scalars['ID']['output']>;
  /** input params */
  params?: Maybe<EduCenterVideoNavigationParams>;
  /** 이전글 ID */
  prePostId?: Maybe<Scalars['ID']['output']>;
};

/** 평생교육원 네비게이션 params */
export type EduCenterVideoNavigationParams = {
  __typename?: 'EduCenterVideoNavigationParams';
  /** 검색 베이스 */
  base?: Maybe<PostNaviBase>;
  /** 카테고리명 */
  category?: Maybe<Scalars['String']['output']>;
  /** 검색어 */
  search?: Maybe<Scalars['String']['output']>;
};

/** 평생교육원 영상 네비게이션 input params */
export type EduCenterVideoNavigationParamsInput = {
  /** 검색 베이스 */
  base?: InputMaybe<PostNaviBase>;
  /** 카테고리명 */
  category?: InputMaybe<Scalars['String']['input']>;
  /** 검색어 */
  search?: InputMaybe<Scalars['String']['input']>;
};

/** 평생교육원 영상 구매 신청 내역 */
export type EduCenterVideoPurchase = {
  __typename?: 'EduCenterVideoPurchase';
  /** 결제금액 */
  amount: Scalars['Float']['output'];
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 결제 주문 아이디 */
  merchant_uid: Scalars['String']['output'];
  /** 신청자 */
  owner: Member;
  /** 결제여부 */
  payment_complated: EduCenterVideoPurchasePaymentComplated;
  /** 결제일 */
  payment_complatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 결제수단 */
  payment_model: EduCenterVideoPurchasePaymentModel;
  /** 상태 */
  state: EduCenterVideoPurchaseState;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
  /** 관련 영상 */
  video: EduCenterVideo;
};

export type EduCenterVideoPurchaseEdge = {
  __typename?: 'EduCenterVideoPurchaseEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: EduCenterVideoPurchase;
};

/** 평생교육원 영상 구매 신청 리스트 필터 */
export type EduCenterVideoPurchaseFilterInput = {
  /** 금액 */
  amount?: InputMaybe<Array<IntFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 주문 고유 아이디 */
  merchant_uid?: InputMaybe<Array<StringFilterInput>>;
  /** 신청자 이메일 */
  owner__email?: InputMaybe<Array<StringFilterInput>>;
  /** 신청자 ID */
  owner__id?: InputMaybe<Array<IdFilterInput>>;
  /** 신청자 이름 */
  owner__name?: InputMaybe<Array<StringFilterInput>>;
  /** 금액 */
  payment_complated?: InputMaybe<Array<EduCenterVideoPurchasePaymentComplatedFilterEnum>>;
  /** 결제일 */
  payment_complatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 금액 */
  payment_model?: InputMaybe<Array<EduCenterVideoPurchasePaymentModelFilterEnum>>;
  /** 금액 */
  state?: InputMaybe<Array<EduCenterVideoPurchaseStateFilterEnum>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 관련 영상 */
  video__id?: InputMaybe<Array<IdFilterInput>>;
};

/** 평생교육원 영상 구매 신청 리스트 */
export type EduCenterVideoPurchaseList = {
  __typename?: 'EduCenterVideoPurchaseList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<EduCenterVideoPurchaseEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 구매신청 결제 완료 여부 */
export enum EduCenterVideoPurchasePaymentComplated {
  /** 미결제 */
  No = 'NO',
  /** 결제완료 */
  Yes = 'YES'
}

/** 평생교육원 영상 구매 신청 결제완료 필터 */
export type EduCenterVideoPurchasePaymentComplatedFilterEnum = {
  operator: EnumFilterOperators;
  value?: InputMaybe<EduCenterVideoPurchasePaymentComplated>;
  values?: InputMaybe<Array<EduCenterVideoPurchasePaymentComplated>>;
};

/** 구매 신청 지불 방법 */
export enum EduCenterVideoPurchasePaymentModel {
  /** 수기/수동 */
  Hand = 'HAND',
  /** PG */
  Pg = 'PG'
}

/** 평생교육원 영상 구매 신청 결제방법 필터 */
export type EduCenterVideoPurchasePaymentModelFilterEnum = {
  operator: EnumFilterOperators;
  value?: InputMaybe<EduCenterVideoPurchasePaymentModel>;
  values?: InputMaybe<Array<EduCenterVideoPurchasePaymentModel>>;
};

/** 평생교육원 영상 구매 신청 input */
export type EduCenterVideoPurchaseRequestInput = {
  /** 결제금액 */
  amount: Scalars['Float']['input'];
  /** 구매 고유 ID */
  merchant_uid: Scalars['String']['input'];
  /** 구매자 메시지 */
  message?: InputMaybe<Scalars['String']['input']>;
  /** 영상 ID */
  video_id: Scalars['ID']['input'];
};

/** 평생교육원 영상 구매 신청 리스트 정렬 */
export type EduCenterVideoPurchaseSortInput = {
  /** 금액 */
  amount?: InputMaybe<SortInput>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 결제일 */
  payment_complatedAt?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 결제 신청 상태 */
export enum EduCenterVideoPurchaseState {
  /** 취소 */
  Cancel = 'CANCEL',
  /** 구매 결제 완료 */
  End = 'END',
  /** 에러 상태 */
  Error = 'ERROR',
  /** 준비 */
  Ready = 'READY',
  /** 구매 대기 시간 초과 */
  Timeout = 'TIMEOUT',
  /** 가상계좌 입금 대기중 */
  Vaccount = 'VACCOUNT'
}

/** 평생교육원 영상 구매 신청 상태 필터 */
export type EduCenterVideoPurchaseStateFilterEnum = {
  operator: EnumFilterOperators;
  value?: InputMaybe<EduCenterVideoPurchaseState>;
  values?: InputMaybe<Array<EduCenterVideoPurchaseState>>;
};

/** 평생교육원 영상 신고정보 */
export type EduCenterVideoReport = {
  __typename?: 'EduCenterVideoReport';
  /** 관리자 메모 */
  adminMemo: Scalars['String']['output'];
  /** 작성자 */
  author: Member;
  /** 신고 카테고리 */
  category?: Maybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: Maybe<Scalars['String']['output']>;
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기타 예비용 필드 */
  etc?: Maybe<Scalars['String']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 신고 상태 */
  state: CommunityReportStateEnumType;
  /** 타겟 정보 */
  target: EduCenterVideo;
  /** 신고 커뮤니티 타겟 */
  targetId?: Maybe<Scalars['String']['output']>;
  /** 신고 타겟 타입 */
  type: CommunityReportTypeEnumType;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 평생교육원 영상 신고 생성 Input */
export type EduCenterVideoReportCreateInput = {
  /** 신고 카테고리 */
  category?: InputMaybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 기타 예비용 필드 */
  etc?: InputMaybe<Scalars['String']['input']>;
  /** 신고 커뮤니티 타겟 */
  targetId?: InputMaybe<Scalars['String']['input']>;
  /** 신고 타겟 타입 */
  type?: InputMaybe<CommunityReportTypeEnumType>;
};

export type EduCenterVideoReportEdge = {
  __typename?: 'EduCenterVideoReportEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: EduCenterVideoReport;
};

/** 평생교육원 영상 신고 리스트 필터 Input */
export type EduCenterVideoReportFilterInput = {
  /** 작성자 이메일 */
  author__email?: InputMaybe<Array<StringFilterInput>>;
  /** 작성자 고유 id */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 작성자 이름 */
  author__name?: InputMaybe<Array<StringFilterInput>>;
  /** 신고 카테고리 */
  category?: InputMaybe<Array<CommunityReportCategoryFilterInput>>;
  /** 신고 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 기타 */
  etc?: InputMaybe<Array<StringFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 신고 상태 */
  state?: InputMaybe<Array<CommunityReportStateFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 평생교육원 영상 신고 리스트 */
export type EduCenterVideoReportList = {
  __typename?: 'EduCenterVideoReportList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<EduCenterVideoReportEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 평생교육원 영상 신고 리스트 정렬 Input */
export type EduCenterVideoReportSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 평생교육원 영상 신고 수정 Input */
export type EduCenterVideoReportUpdateInput = {
  /** 신고 카테고리 */
  category?: InputMaybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 기타 예비용 필드 */
  etc?: InputMaybe<Scalars['String']['input']>;
};

/** 평생교육원 영상 정렬 */
export type EduCenterVideoSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** 스크랩 수 */
  favoriteCount?: InputMaybe<IntSortInput>;
  /** 수료증 획득수 */
  finishedCount?: InputMaybe<IntSortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 좋아요 수 */
  likeCount?: InputMaybe<IntSortInput>;
  /** 상단 고정된 날짜 */
  pinnedAt?: InputMaybe<SortInput>;
  /** 구매수 */
  purchasedCount?: InputMaybe<IntSortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 평생교육원 영상 수정 */
export type EduCenterVideoUpdateInput = {
  /** 구매가격 */
  amount?: InputMaybe<Scalars['Float']['input']>;
  /** 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 노출 여부 */
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  /** 제목(128자 이내) */
  title?: InputMaybe<Scalars['String']['input']>;
  /** 비메오 영상 코드 */
  videoNumber?: InputMaybe<Scalars['Float']['input']>;
};

/** 영상 교육 카테고리 */
export type EducationCategory = {
  __typename?: 'EducationCategory';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  priority: Scalars['Float']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 영상 교육 카테고리 생성 */
export type EducationCategoryCreateInput = {
  name: Scalars['String']['input'];
  priority: Scalars['Float']['input'];
};

/** 영상 교육 카테고리 수정 */
export type EducationCategoryUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Float']['input']>;
};

/** 영상 시청 기록 */
export type EducationLog = {
  __typename?: 'EducationLog';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 시청한 시간(초단위  1초 = 1000 */
  nowVideoDuration: Scalars['Float']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 교육 영상 신고정보 */
export type EducationReport = {
  __typename?: 'EducationReport';
  /** 관리자 메모 */
  adminMemo: Scalars['String']['output'];
  /** 작성자 */
  author: Member;
  /** 신고 카테고리 */
  category?: Maybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: Maybe<Scalars['String']['output']>;
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기타 예비용 필드 */
  etc?: Maybe<Scalars['String']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 신고 상태 */
  state: CommunityReportStateEnumType;
  /** 타겟 정보 */
  target: EducationVideo;
  /** 신고 커뮤니티 타겟 */
  targetId?: Maybe<Scalars['String']['output']>;
  /** 신고 타겟 타입 */
  type: CommunityReportTypeEnumType;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 교육 영상 신고 생성 Input */
export type EducationReportCreateInput = {
  /** 신고 카테고리 */
  category?: InputMaybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 기타 예비용 필드 */
  etc?: InputMaybe<Scalars['String']['input']>;
  /** 신고 커뮤니티 타겟 */
  targetId?: InputMaybe<Scalars['String']['input']>;
  /** 신고 타겟 타입 */
  type?: InputMaybe<CommunityReportTypeEnumType>;
};

export type EducationReportEdge = {
  __typename?: 'EducationReportEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: EducationReport;
};

/** 교육 영상 신고 리스트 필터 Input */
export type EducationReportFilterInput = {
  /** 작성자 이메일 */
  author__email?: InputMaybe<Array<StringFilterInput>>;
  /** 작성자 고유 id */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 작성자 이름 */
  author__name?: InputMaybe<Array<StringFilterInput>>;
  /** 신고 카테고리 */
  category?: InputMaybe<Array<CommunityReportCategoryFilterInput>>;
  /** 신고 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 기타 */
  etc?: InputMaybe<Array<StringFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 신고 상태 */
  state?: InputMaybe<Array<CommunityReportStateFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 교육 영상 신고 리스트 */
export type EducationReportList = {
  __typename?: 'EducationReportList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<EducationReportEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 교육 영상 신고 리스트 정렬 Input */
export type EducationReportSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 교육 영상 신고 수정 Input */
export type EducationReportUpdateInput = {
  /** 신고 카테고리 */
  category?: InputMaybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 기타 예비용 필드 */
  etc?: InputMaybe<Scalars['String']['input']>;
};

/** 영상 교육 모듈 */
export type EducationVideo = {
  __typename?: 'EducationVideo';
  /** 게시물 작성자 */
  author: Member;
  /** 영상 교육 카테고리 */
  category?: Maybe<EducationCategory>;
  /** 내용 */
  content: Scalars['String']['output'];
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 해당 게시물 스크랩수 */
  favoriteCnt: Scalars['Float']['output'];
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 해당 게시물 즐겨찾기(스크랩) 여부 */
  isFavorite: Scalars['Boolean']['output'];
  /** 영상 교육 시청완료 여부 */
  isFinished: Scalars['Boolean']['output'];
  /** 해당 게시물 좋아요 여부 */
  isLike: Scalars['Boolean']['output'];
  /** 상단 고정 여부 */
  isPinned: Scalars['Boolean']['output'];
  /** 노출 여부 */
  isVisible: Scalars['Boolean']['output'];
  /** 해당 게시물 좋아요 개수 */
  likeCnt: Scalars['Float']['output'];
  /** 마지막 시청 기록 */
  myLastRecord?: Maybe<EducationLog>;
  /** 상단 고정된 날짜 */
  pinnedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 상태 */
  state: VideoStateEnum;
  /** 영상 썸네일 */
  thumbnail?: Maybe<VimeoThumbnail>;
  /** 제목 */
  title: Scalars['String']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
  /** 영상 길이(1000=1초) */
  videoDuration: Scalars['Float']['output'];
  /** 비메오 영상 코드 */
  videoNumber: Scalars['Float']['output'];
};

/** 영상 교육 생성 */
export type EducationVideoCreateInput = {
  /** 카테고리 ID */
  category__id?: InputMaybe<Scalars['ID']['input']>;
  /** 내용 */
  content: Scalars['String']['input'];
  /** 노출 여부 */
  isVisible?: Scalars['Boolean']['input'];
  /** 제목(128자 이내) */
  title: Scalars['String']['input'];
  /** 비메오 영상 코드 */
  videoNumber: Scalars['Float']['input'];
};

export type EducationVideoEdge = {
  __typename?: 'EducationVideoEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: EducationVideo;
};

/** 영상 교육 필터 */
export type EducationVideoFilterInput = {
  /** 카테고리 ID */
  category__id?: InputMaybe<Array<StringFilterInput>>;
  /** 카테고리명 */
  category__name?: InputMaybe<Array<StringFilterInput>>;
  /** 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 노출 여부 */
  isVisible?: InputMaybe<Array<BooleanFilterInput>>;
  /** 상태 */
  state?: InputMaybe<Array<VideoStateFilterInput>>;
  /** 제목 */
  title?: InputMaybe<Array<StringFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 영상 교육 리스트 */
export type EducationVideoList = {
  __typename?: 'EducationVideoList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<EducationVideoEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 교육 영상 네비게이션(이전글/다음글) */
export type EducationVideoNavigation = {
  __typename?: 'EducationVideoNavigation';
  /** 이전글 ID */
  nextPostId?: Maybe<Scalars['ID']['output']>;
  /** input params */
  params?: Maybe<EducationVideoNavigationParams>;
  /** 이전글 ID */
  prePostId?: Maybe<Scalars['ID']['output']>;
};

/** 교육영상 네비게이션 params */
export type EducationVideoNavigationParams = {
  __typename?: 'EducationVideoNavigationParams';
  /** 검색 베이스 */
  base?: Maybe<PostNaviBase>;
  /** 카테고리명 */
  category?: Maybe<Scalars['String']['output']>;
  /** 검색어 */
  search?: Maybe<Scalars['String']['output']>;
};

/** 교육 영상 네비게이션 input params */
export type EducationVideoNavigationParamsInput = {
  /** 검색 베이스 */
  base?: InputMaybe<PostNaviBase>;
  /** 카테고리명 */
  category?: InputMaybe<Scalars['String']['input']>;
  /** 검색어 */
  search?: InputMaybe<Scalars['String']['input']>;
};

/** 영상 교육 정렬 */
export type EducationVideoSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** 스크랩 수 */
  favoriteCount?: InputMaybe<IntSortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 좋아요 수 */
  likeCount?: InputMaybe<IntSortInput>;
  /** 상단 고정된 날짜 */
  pinnedAt?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 영상 교육 수정 */
export type EducationVideoUpdateInput = {
  /** 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 노출 여부 */
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  /** 제목(128자 이내) */
  title?: InputMaybe<Scalars['String']['input']>;
  /** 비메오 영상 코드 */
  videoNumber?: InputMaybe<Scalars['Float']['input']>;
};

/** Enum 필터 연산자 */
export enum EnumFilterOperators {
  Equal = 'EQUAL',
  In = 'IN',
  IsNotNull = 'IS_NOT_NULL',
  IsNull = 'IS_NULL',
  NotEqual = 'NOT_EQUAL',
  NotIn = 'NOT_IN'
}

export type EssentialSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
};

/** 자주 묻는 질문 */
export type Faq = {
  __typename?: 'Faq';
  /** 답변 */
  answer: Scalars['String']['output'];
  /** 카테고리 */
  category?: Maybe<AdminPostCategory>;
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 타입별 변환모델 */
  node: AdminPostModel;
  /** 우선순위 */
  priority: Scalars['Int']['output'];
  /** 질문 */
  question: Scalars['String']['output'];
  /** 보이는 장소 */
  showPlace: AdminPostShowPlace;
  /** 상태 */
  state: AdminPostState;
  /** 타입 */
  type: AdminPostType;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 자주 묻는 질문 생성 데이터 */
export type FaqCreateInput = {
  /** 답변 */
  answer: Scalars['String']['input'];
  /** 카테고리 ID */
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  /** 우선순위 */
  priority?: InputMaybe<Scalars['Int']['input']>;
  /** 질문 */
  question: Scalars['String']['input'];
  /** 상태 */
  state?: InputMaybe<AdminPostState>;
};

/** 자주 묻는 질문 수정 데이터 */
export type FaqUpdateInput = {
  /** 답변 */
  answer?: InputMaybe<Scalars['String']['input']>;
  /** 카테고리 ID */
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  /** 우선순위 */
  priority?: InputMaybe<Scalars['Int']['input']>;
  /** 질문 */
  question?: InputMaybe<Scalars['String']['input']>;
  /** 상태 */
  state?: InputMaybe<AdminPostState>;
};

/** Fcm토큰 OS */
export enum FcmTokenOsEnum {
  /** AOS */
  Android = 'ANDROID',
  /** iOS */
  Ios = 'IOS',
  /** web */
  Web = 'WEB'
}

/** 파일 */
export type File = {
  __typename?: 'File';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 원본 이름 */
  filename: Scalars['String']['output'];
  /** 고화질 URL (1080px) */
  highQualityURL?: Maybe<Scalars['String']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 저화질 URL (480px) */
  lowQualityURL?: Maybe<Scalars['String']['output']>;
  /** MD5 체크섬 */
  md5: Scalars['String']['output'];
  /** MIME 타입 */
  mimetype: Scalars['String']['output'];
  /** 우선 순위 (정렬용) */
  priority: Scalars['Int']['output'];
  /** 파일 크기 (바이트) */
  size: Scalars['Int']['output'];
  /** 썸네일용 URL (240px) */
  thumbnailURL?: Maybe<Scalars['String']['output']>;
  /** 원본 URL */
  url: Scalars['String']['output'];
};

/** 아이디 찾기를 통해 찾은 정보 */
export type FinedAccount = {
  __typename?: 'FinedAccount';
  /** 로그인 ID */
  loginId: Scalars['String']['output'];
  /** 연동된 소셜 계정 리스트, 없을시 undefined */
  socialTypes?: Maybe<Array<UserSocialType>>;
};

export type GraphQljsonEdge = {
  __typename?: 'GraphQLJSONEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: Scalars['JSON']['output'];
};

/** ID 필터 */
export type IdFilterInput = {
  operator: IdFilterOperators;
  value?: InputMaybe<Scalars['ID']['input']>;
  values?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** ID 필터 연산자 */
export enum IdFilterOperators {
  Equal = 'EQUAL',
  In = 'IN',
  IsNotNull = 'IS_NOT_NULL',
  IsNull = 'IS_NULL',
  NotEqual = 'NOT_EQUAL',
  NotIn = 'NOT_IN'
}

/** 알림마당-질문과답변 데이터 */
export type Inquire = {
  __typename?: 'Inquire';
  /** 답변내용, 본인과 관리자만 반환 */
  answerContent?: Maybe<Scalars['String']['output']>;
  /** 답변자 */
  answerUser?: Maybe<Admin>;
  /** 답변일 */
  answereddAt?: Maybe<Scalars['DateTime']['output']>;
  /** 작성자 ID, 관리자에게만 반환 */
  authorId?: Maybe<Scalars['ID']['output']>;
  /** 작성자 이름, 본인 및 관리자가 아니면 *처리 */
  authorName?: Maybe<Scalars['ID']['output']>;
  /** 질문내용, 본인과 관리자만 반환 */
  content?: Maybe<Scalars['String']['output']>;
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 첨부 이미지 */
  images?: Maybe<Array<File>>;
  /** 내 질문 여부 */
  isMine: Scalars['Boolean']['output'];
  /** 비밀여부(본인 작성이 아닌 경우) */
  isSecret: Scalars['Boolean']['output'];
  /** 문의 상태 */
  state: InquireState;
  /** 제목 */
  title?: Maybe<Scalars['String']['output']>;
  /** 문의 종류 */
  type: InquireType;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 알림마당-질문과답변 생성 */
export type InquireCreateInput = {
  /** 내용 */
  content: Scalars['String']['input'];
  /** 이미지 */
  images__ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
  /** 문의 종류 */
  type?: InputMaybe<InquireType>;
};

export type InquireEdge = {
  __typename?: 'InquireEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: Inquire;
};

/** 알림마당-질문과답변 필터링 */
export type InquireFilterInput = {
  /** 답변 */
  answerContent?: InputMaybe<Array<StringFilterInput>>;
  /** 답변일 */
  answereddAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 작성자 ID 필터 */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 연락처 */
  phone?: InputMaybe<Array<StringFilterInput>>;
  /** 문의 상태 */
  state?: InputMaybe<Array<InquireStateFilterInput>>;
  /** 제목 */
  title?: InputMaybe<Array<StringFilterInput>>;
  /** 문의 종류 */
  type?: InputMaybe<Array<InquireTypeFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

export type InquireList = {
  __typename?: 'InquireList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<InquireEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 알림마당-질문과답변 정렬 */
export type InquireOrderByInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 문의 상태 */
export enum InquireState {
  /** 문의중 */
  Active = 'ACTIVE',
  /** 답변완료 */
  Answered = 'ANSWERED'
}

export type InquireStateFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<InquireState>;
  values?: InputMaybe<Array<InquireState>>;
};

/** 문의 유형 */
export enum InquireType {
  /** 일반 유형 */
  Common = 'COMMON'
}

export type InquireTypeFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<InquireType>;
  values?: InputMaybe<Array<InquireType>>;
};

/** 알림마당-질문과답변 수정 */
export type InquireUpdateInput = {
  /** 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 이미지 */
  images__ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
  /** 문의 종류 */
  type?: InputMaybe<InquireType>;
};

/** 정수(Int) 필터 */
export type IntFilterInput = {
  operator: NumberFilterOperators;
  value?: InputMaybe<Scalars['Int']['input']>;
  value2?: InputMaybe<Scalars['Int']['input']>;
  values?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** 정수 정렬 */
export type IntSortInput = {
  case?: InputMaybe<Array<Scalars['Int']['input']>>;
  nulls?: InputMaybe<Nulls>;
  order: Order;
};

/** 구인 구직 정보 */
export type JobSearch = {
  __typename?: 'JobSearch';
  /** 주소 */
  address: Scalars['String']['output'];
  /** 주소 */
  addressDetail?: Maybe<Scalars['String']['output']>;
  /** 작성자 */
  author: Member;
  /** 카테고리 1뎁스 */
  category1Deps?: Maybe<JobSearchCategory>;
  /** 카테고리 2뎁스 */
  category2Deps?: Maybe<JobSearchCategory>;
  /** 내용 */
  content: Scalars['String']['output'];
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 첨부파일 */
  files?: Maybe<Array<File>>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 스크랩 여부 */
  isFavorite: Scalars['Boolean']['output'];
  /** 좋아요 여부 */
  isLike: Scalars['Boolean']['output'];
  /** 내 구인구직 게시글 여부 */
  isMine: Scalars['Boolean']['output'];
  /** 근무 요일협의인지 여부 */
  isWorkingDayConsultation: Scalars['Boolean']['output'];
  /** 좋아요 수 */
  likeCnt: Scalars['Int']['output'];
  /** 급여 */
  pay: Scalars['Float']['output'];
  /** 구인구직 급여 지급 종류 */
  payType: JobSearchPayTypeEnum;
  /** 업체 번호 */
  phone: Scalars['String']['output'];
  /** 직무 1뎁스 */
  position1Deps: JobSearchPosition;
  /** 직무 2뎁스 */
  position2Deps: JobSearchPosition;
  /** 상태 */
  state: JobSearchStateEnum;
  /** 업체명 */
  storeName: Scalars['String']['output'];
  /** 제목 */
  title: Scalars['String']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
  /** 조회수 */
  viewCnt: Scalars['Int']['output'];
  /** 근무 요일 */
  workingDay?: Maybe<JobWorkingDay>;
};

/** 구인 구직 카테고리 */
export type JobSearchCategory = {
  __typename?: 'JobSearchCategory';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  priority: Scalars['Float']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 구인 구직 카테고리 생성 */
export type JobSearchCategoryCreateInput = {
  name: Scalars['String']['input'];
  /** 2뎁스 카테일 경우 부모 뎁스 ID */
  parentId?: InputMaybe<Scalars['String']['input']>;
  priority: Scalars['Float']['input'];
};

/** 구인 구직 카테고리 트리 */
export type JobSearchCategoryTree = {
  __typename?: 'JobSearchCategoryTree';
  /** 하위 카테고리 */
  children: Array<JobSearchCategory>;
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  priority: Scalars['Float']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 구인 구직 카테고리 수정 */
export type JobSearchCategoryUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Float']['input']>;
};

/** 구인 구직 생성 */
export type JobSearchCreateInput = {
  /** 주소 */
  address: Scalars['String']['input'];
  /** 주소 */
  addressDetail?: InputMaybe<Scalars['String']['input']>;
  /** 내용 */
  content: Scalars['String']['input'];
  /** 근무요일 협의인지 여부 */
  isWorkingDayConsultation?: InputMaybe<Scalars['Boolean']['input']>;
  /** 급여 */
  pay: Scalars['Float']['input'];
  /** 구인구직 급여 지급 종류 */
  payType: JobSearchPayTypeEnum;
  /** 업체 번호 */
  phone: Scalars['String']['input'];
  /** 직무 ID(2 deps만 허용) */
  position__id: Scalars['ID']['input'];
  /** 업체명 */
  storeName: Scalars['String']['input'];
  /** 제목 */
  title: Scalars['String']['input'];
  /** 근무 요일 */
  workingDay?: InputMaybe<JobWorkingDayInput>;
};

export type JobSearchEdge = {
  __typename?: 'JobSearchEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: JobSearch;
};

/** 구인 구직 리스트 필터 */
export type JobSearchFilterInput = {
  /** 주소 */
  address?: InputMaybe<Array<StringFilterInput>>;
  /** 주소 */
  addressDetail?: InputMaybe<Array<StringFilterInput>>;
  /** 작성자 이메일 */
  author__email?: InputMaybe<Array<StringFilterInput>>;
  /** 작성자 ID */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 작성자 이름 */
  author__name?: InputMaybe<Array<StringFilterInput>>;
  /** 카테고리1뎁스 ID */
  category1__id?: InputMaybe<Array<IdFilterInput>>;
  /** 카테고리1뎁스 명칭 */
  category1__name?: InputMaybe<Array<IdFilterInput>>;
  /** 카테고리2뎁스 ID */
  category2__id?: InputMaybe<Array<IdFilterInput>>;
  /** 카테고리2뎁스 명칭 */
  category2__name?: InputMaybe<Array<IdFilterInput>>;
  /** 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 좋아요 수 */
  likeCount?: InputMaybe<Array<IntFilterInput>>;
  /** 급여 */
  pay?: InputMaybe<Array<IntFilterInput>>;
  /** 구인구직 급여 지급 종류 */
  payType?: InputMaybe<Array<JobSearchPayTypeEnumFilterInput>>;
  /** 업체번호 */
  phone?: InputMaybe<Array<StringFilterInput>>;
  /** 직무 1뎁스 ID */
  position1__id?: InputMaybe<Array<IdFilterInput>>;
  /** 직무 1뎁스 명칭 */
  position1__name?: InputMaybe<Array<IdFilterInput>>;
  /** 직무 2뎁스 ID */
  position2__id?: InputMaybe<Array<IdFilterInput>>;
  /** 직무 2뎁스 명칭 */
  position2__name?: InputMaybe<Array<IdFilterInput>>;
  state?: InputMaybe<Array<JobSearchStateFilterInput>>;
  /** 업체명 */
  storeName?: InputMaybe<Array<StringFilterInput>>;
  /** 제목 */
  title?: InputMaybe<Array<StringFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 조회수 */
  viewCount?: InputMaybe<Array<IntFilterInput>>;
};

/** 구인구직 리스트 */
export type JobSearchList = {
  __typename?: 'JobSearchList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<JobSearchEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 구인구직 게시글 네비게이션(이전글/다음글) */
export type JobSearchNavigation = {
  __typename?: 'JobSearchNavigation';
  /** 이전글 ID */
  nextPostId?: Maybe<Scalars['ID']['output']>;
  /** input params */
  params?: Maybe<JobSearchNavigationParams>;
  /** 이전글 ID */
  prePostId?: Maybe<Scalars['ID']['output']>;
};

/** 구인구직 게시글 네비게이션 params */
export type JobSearchNavigationParams = {
  __typename?: 'JobSearchNavigationParams';
  /** 주소 */
  address?: Maybe<Scalars['String']['output']>;
  /** 상세주소 */
  addressDetail?: Maybe<Scalars['String']['output']>;
  /** 검색 베이스 */
  base?: Maybe<PostNaviBase>;
  /** 카테고리명 1뎁스 */
  category1?: Maybe<Scalars['String']['output']>;
  /** 카테고리명 2뎁스 */
  category2?: Maybe<Scalars['String']['output']>;
  /** 직무 1뎁스 */
  position1?: Maybe<Scalars['String']['output']>;
  /** 직무 2뎁스 */
  position2?: Maybe<Scalars['String']['output']>;
  /** 검색어 */
  search?: Maybe<Scalars['String']['output']>;
};

/** 구인구직 게시글 네비게이션 input params */
export type JobSearchNavigationParamsInput = {
  /** 주소 */
  address?: InputMaybe<Scalars['String']['input']>;
  /** 상세주소 */
  addressDetail?: InputMaybe<Scalars['String']['input']>;
  /** 검색 베이스 */
  base?: InputMaybe<PostNaviBase>;
  /** 카테고리명 1뎁스 */
  category1?: InputMaybe<Scalars['String']['input']>;
  /** 카테고리명 2뎁스 */
  category2?: InputMaybe<Scalars['String']['input']>;
  /** 직무 1뎁스 */
  position1?: InputMaybe<Scalars['String']['input']>;
  /** 직무 2뎁스 */
  position2?: InputMaybe<Scalars['String']['input']>;
  /** 검색어 */
  search?: InputMaybe<Scalars['String']['input']>;
};

/** 구인구직 급여 지급 종류 */
export enum JobSearchPayTypeEnum {
  /** 연봉 */
  AnnualSalary = 'ANNUAL_SALARY',
  /** 회사 내규 */
  CompanyRegul = 'COMPANY_REGUL',
  /** 협의 */
  Consultation = 'CONSULTATION',
  /** 일급 */
  DailyWage = 'DAILY_WAGE',
  /** 시급 */
  HourlyWage = 'HOURLY_WAGE',
  /** 월급 */
  MonthlyWage = 'MONTHLY_WAGE',
  /** 주급 */
  WeeklyWage = 'WEEKLY_WAGE'
}

/** 구인 구직 급여지급 형태 필터 */
export type JobSearchPayTypeEnumFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<JobSearchPayTypeEnum>;
  values?: InputMaybe<Array<JobSearchPayTypeEnum>>;
};

/** 구인 구직 직무 */
export type JobSearchPosition = {
  __typename?: 'JobSearchPosition';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  priority: Scalars['Float']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 구인 구직 직무 생성 */
export type JobSearchPositionCreateInput = {
  name: Scalars['String']['input'];
  /** 2뎁스 카테일 경우 부모 뎁스 ID */
  parentId?: InputMaybe<Scalars['String']['input']>;
  priority: Scalars['Float']['input'];
};

/** 구인 구직 직무 트리 */
export type JobSearchPositionTree = {
  __typename?: 'JobSearchPositionTree';
  /** 하위 직무 */
  children: Array<JobSearchPosition>;
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  priority: Scalars['Float']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 구인 구직 직무 수정 */
export type JobSearchPositionUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Float']['input']>;
};

/** 구인구직 신고정보 */
export type JobSearchReport = {
  __typename?: 'JobSearchReport';
  /** 관리자 메모 */
  adminMemo: Scalars['String']['output'];
  /** 작성자 */
  author: Member;
  /** 신고 카테고리 */
  category?: Maybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: Maybe<Scalars['String']['output']>;
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기타 예비용 필드 */
  etc?: Maybe<Scalars['String']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 신고 상태 */
  state: CommunityReportStateEnumType;
  /** 신고 커뮤니티 타겟 */
  targetId?: Maybe<Scalars['String']['output']>;
  /** 신고 타겟 타입 */
  type: CommunityReportTypeEnumType;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 구인구직 신고 생성 Input */
export type JobSearchReportCreateInput = {
  /** 신고 카테고리 */
  category?: InputMaybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 기타 예비용 필드 */
  etc?: InputMaybe<Scalars['String']['input']>;
  /** 신고 커뮤니티 타겟 */
  targetId?: InputMaybe<Scalars['String']['input']>;
  /** 신고 타겟 타입 */
  type?: InputMaybe<CommunityReportTypeEnumType>;
};

export type JobSearchReportEdge = {
  __typename?: 'JobSearchReportEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: JobSearchReport;
};

/** 구인구직 신고 리스트 필터 Input */
export type JobSearchReportFilterInput = {
  /** 작성자 이메일 */
  author__email?: InputMaybe<Array<StringFilterInput>>;
  /** 작성자 고유 id */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 작성자 이름 */
  author__name?: InputMaybe<Array<StringFilterInput>>;
  /** 신고 카테고리 */
  category?: InputMaybe<Array<CommunityReportCategoryFilterInput>>;
  /** 신고 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 기타 */
  etc?: InputMaybe<Array<StringFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 신고 상태 */
  state?: InputMaybe<Array<CommunityReportStateFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 구인구직 신고 리스트 */
export type JobSearchReportList = {
  __typename?: 'JobSearchReportList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<JobSearchReportEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 구인구직 신고 리스트 정렬 Input */
export type JobSearchReportSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 구인구직 신고 수정 Input */
export type JobSearchReportUpdateInput = {
  /** 신고 카테고리 */
  category?: InputMaybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 기타 예비용 필드 */
  etc?: InputMaybe<Scalars['String']['input']>;
};

/** 구인구직 리스트 정렬 */
export type JobSearchSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 좋아요 수 */
  likeCount?: InputMaybe<IntSortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
  /** 조회수 */
  viewCount?: InputMaybe<IntSortInput>;
};

/** 구인구직 게시글 상태 */
export enum JobSearchStateEnum {
  /** 검토중 */
  OnReview = 'ON_REVIEW',
  /** 게시중 */
  Publishing = 'PUBLISHING',
  /** 심사거절 */
  Reject = 'REJECT',
  /** 게시중지 */
  ViewStop = 'VIEW_STOP'
}

/** 구인 구직 상태 필터 */
export type JobSearchStateFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<JobSearchStateEnum>;
  values?: InputMaybe<Array<JobSearchStateEnum>>;
};

/** 구인구직 수정 */
export type JobSearchUpdateInput = {
  /** 주소 */
  address?: InputMaybe<Scalars['String']['input']>;
  /** 주소 */
  addressDetail?: InputMaybe<Scalars['String']['input']>;
  /** 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 근무요일 협의인지 여부 */
  isWorkingDayConsultation?: InputMaybe<Scalars['Boolean']['input']>;
  /** 급여 */
  pay?: InputMaybe<Scalars['Float']['input']>;
  /** 구인구직 급여 지급 종류 */
  payType?: InputMaybe<JobSearchPayTypeEnum>;
  /** 업체 번호 */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** 직무 ID(2 deps만 허용) */
  position__id?: InputMaybe<Scalars['ID']['input']>;
  /** 업체명 */
  storeName?: InputMaybe<Scalars['String']['input']>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
  /** 근무 요일 */
  workingDay?: InputMaybe<JobWorkingDayInput>;
};

/** 근무 요일, 0-> 해당되지않음, 1->근무 요일에 해당됨 */
export type JobWorkingDay = {
  __typename?: 'JobWorkingDay';
  /** 금요일 */
  FRI?: Maybe<WorkingDayEnum>;
  /** 월요일 */
  MON?: Maybe<WorkingDayEnum>;
  /** 토요일 */
  SAT?: Maybe<WorkingDayEnum>;
  /** 일요일 */
  SUN?: Maybe<WorkingDayEnum>;
  /** 목요일 */
  THU?: Maybe<WorkingDayEnum>;
  /** 화요일 */
  TUE?: Maybe<WorkingDayEnum>;
  /** 수요일 */
  WED?: Maybe<WorkingDayEnum>;
};

/** 근무 요일 */
export type JobWorkingDayInput = {
  /** 금요일 */
  FRI?: InputMaybe<WorkingDayEnum>;
  /** 월요일 */
  MON?: InputMaybe<WorkingDayEnum>;
  /** 토요일 */
  SAT?: InputMaybe<WorkingDayEnum>;
  /** 일요일 */
  SUN?: InputMaybe<WorkingDayEnum>;
  /** 목요일 */
  THU?: InputMaybe<WorkingDayEnum>;
  /** 화요일 */
  TUE?: InputMaybe<WorkingDayEnum>;
  /** 수요일 */
  WED?: InputMaybe<WorkingDayEnum>;
};

/** 카카오 Access Token */
export type KakaoAccessData = {
  __typename?: 'KakaoAccessData';
  /** 가입된 계정인지? */
  isJoin: Scalars['Boolean']['output'];
  /** 발급 JWT 토큰 */
  jwtData: KakaoJwtData;
};

/** 카카오 JWT Data */
export type KakaoJwtData = {
  __typename?: 'KakaoJWTData';
  access_token: Scalars['String']['output'];
  expires_in: Scalars['Float']['output'];
  refresh_token: Scalars['String']['output'];
  refresh_token_expires_in: Scalars['Float']['output'];
  scope: Scalars['String']['output'];
  token_type: Scalars['String']['output'];
};

/** 부가혜택몰 신청 정보 */
export type MallBoardApply = {
  __typename?: 'MallBoardApply';
  /** 관리자 메모 */
  adminMemo?: Maybe<Scalars['String']['output']>;
  /** 신청자 정보 */
  author: Member;
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 신청자 정보 */
  mallBoard: MallBoardPost;
  /** 부가혜택몰 신청 상태 */
  state: MallBoardApplyStateEnum;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

export type MallBoardApplyEdge = {
  __typename?: 'MallBoardApplyEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: MallBoardApply;
};

/** 부가혜택몰 신청 리스트 필터 */
export type MallBoardApplyFilterInput = {
  /** 신청자ID */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 신청자 이름 */
  author__name?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 부가혜택몰 */
  mallBoard__id?: InputMaybe<Array<IdFilterInput>>;
  /** 상태 */
  state?: InputMaybe<Array<MallBoardApplyStateEnumFilter>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 부가혜택몰 신청 리스트 */
export type MallBoardApplyList = {
  __typename?: 'MallBoardApplyList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<MallBoardApplyEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 부가혜택몰 나의 신청 리스트 필터 */
export type MallBoardApplyMeFilterInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 부가혜택몰 */
  mallBoard__id?: InputMaybe<Array<IdFilterInput>>;
  /** 상태 */
  state?: InputMaybe<Array<MallBoardApplyStateEnumFilter>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 부가혜택몰 신청 리스트 정렬 */
export type MallBoardApplySortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 부가혜택몰 신청 상태 */
export enum MallBoardApplyStateEnum {
  /** 신청함 */
  Apply = 'APPLY',
  /** 종료 */
  End = 'END'
}

/** 부가혜택몰 신청 상태 필터 */
export type MallBoardApplyStateEnumFilter = {
  operator: EnumFilterOperators;
  value?: InputMaybe<MallBoardApplyStateEnum>;
  values?: InputMaybe<Array<MallBoardApplyStateEnum>>;
};

/** 부가혜택몰 신청 수정 */
export type MallBoardApplyUpdateInput = {
  adminMemo?: InputMaybe<Scalars['String']['input']>;
  /** 상태 */
  state?: InputMaybe<MallBoardApplyStateEnum>;
};

/** 부가혜택몰 카테고리 */
export type MallBoardCategory = {
  __typename?: 'MallBoardCategory';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 커뮤니티 카테고리 즐켜찾기 여부 */
  isFavorite: Scalars['Boolean']['output'];
  /** 커뮤니티 카테고리 이름 */
  name: Scalars['String']['output'];
  /** 커뮤니티 카테고리 배치 순서 */
  priority: Scalars['Int']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 부가혜택몰 카테고리 생성 Input */
export type MallBoardCategoryCreateInput = {
  /** 커뮤니티 카테고리 이름 */
  name: Scalars['String']['input'];
  /** 커뮤니티 카테고리 배치 순서 */
  priority?: InputMaybe<Scalars['Int']['input']>;
};

export type MallBoardCategoryEdge = {
  __typename?: 'MallBoardCategoryEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: MallBoardCategory;
};

/** 부가혜택몰 카테고리 필터 */
export type MallBoardCategoryFilterInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 이름 */
  name?: InputMaybe<Array<StringFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 부가혜택몰 카테고리 리스트 */
export type MallBoardCategoryList = {
  __typename?: 'MallBoardCategoryList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<MallBoardCategoryEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 부가혜택몰 카테고리 정렬 */
export type MallBoardCategorySortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 이름 */
  name?: InputMaybe<SortInput>;
  /** 순서 */
  priority?: InputMaybe<IntSortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 부가혜택몰 카테고리 수정 Input */
export type MallBoardCategoryUpdateInput = {
  /** 커뮤니티 카테고리 이름 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 커뮤니티 카테고리 배치 순서 */
  priority?: InputMaybe<Scalars['Int']['input']>;
};

/** 부가혜택몰 게시글 */
export type MallBoardPost = {
  __typename?: 'MallBoardPost';
  /** 해당 부가혜택몰의 신청한 수 */
  appliedCnt: Scalars['Float']['output'];
  /** 작성자 */
  author: Member;
  /** 게시물 카테고리 */
  category?: Maybe<MallBoardCategory>;
  /** 내용 */
  content: Scalars['String']['output'];
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 해당 게시물 스크랩수 */
  favoriteCnt: Scalars['Float']['output'];
  /** 이미지, 영상 목록 */
  files?: Maybe<Array<File>>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 신청 여부 */
  isApply: Scalars['Boolean']['output'];
  /** 해당 게시물 즐겨찾기(스크랩) 여부 */
  isFavorite: Scalars['Boolean']['output'];
  /** 나의 좋아요 여부 */
  isLike: Scalars['Boolean']['output'];
  isPinned?: Maybe<Scalars['Boolean']['output']>;
  /** 보이기 여부 */
  isVisible: Scalars['Boolean']['output'];
  /** 해당 게시물 좋아요 개수 */
  likeCnt: Scalars['Float']['output'];
  pinnedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 댓글 수 */
  replyCount: Scalars['Int']['output'];
  /** 상태 */
  state: MallBoardPostStateEnum;
  /** 썸네일 이미지 파일 */
  thumbnailFile?: Maybe<File>;
  /** 제목 */
  title?: Maybe<Scalars['String']['output']>;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
  /** 해당 게시물 조회수 */
  viewCnt: Scalars['Float']['output'];
};

/** 부가혜택몰 게시글 생성 */
export type MallBoardPostCreateInput = {
  /** 커뮤니티 카테고리 ID */
  category__id?: InputMaybe<Scalars['ID']['input']>;
  /** 내용 */
  content: Scalars['String']['input'];
  /** 게시물 파일들 */
  file__ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** 썸네일 파일 ID */
  thumbnailFile__id?: InputMaybe<Scalars['ID']['input']>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MallBoardPostEdge = {
  __typename?: 'MallBoardPostEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: MallBoardPost;
};

/** 부가혜택몰 게시글 필터 */
export type MallBoardPostFilterInput = {
  /** 작성자 이메일 */
  author__email?: InputMaybe<Array<StringFilterInput>>;
  /** 작성자 고유 id */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 작성자 이름 */
  author__name?: InputMaybe<Array<StringFilterInput>>;
  /** 카테고리 고유 id */
  category__id?: InputMaybe<Array<StringFilterInput>>;
  /** 카테고리 이름 */
  category__name?: InputMaybe<Array<StringFilterInput>>;
  /** 게시물 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 숨기기한 사용자 고유 id */
  hide__id?: InputMaybe<Array<IdFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 상단 고정 여부 */
  isPinned?: InputMaybe<Array<BooleanFilterInput>>;
  /** 숨김여부 */
  isVisible?: InputMaybe<Array<BooleanFilterInput>>;
  /** 좋아요 사용자 고유 id */
  likes__id?: InputMaybe<Array<IdFilterInput>>;
  /** 게시물 제목 */
  title?: InputMaybe<Array<StringFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 부가혜택몰 게시글 필터 관리자용 */
export type MallBoardPostFilterInputForAdmin = {
  /** 작성자 이메일 */
  author__email?: InputMaybe<Array<StringFilterInput>>;
  /** 작성자 고유 id */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 작성자 이름 */
  author__name?: InputMaybe<Array<StringFilterInput>>;
  /** 카테고리 고유 id */
  category__id?: InputMaybe<Array<StringFilterInput>>;
  /** 카테고리 이름 */
  category__name?: InputMaybe<Array<StringFilterInput>>;
  /** 게시물 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 숨기기한 사용자 고유 id */
  hide__id?: InputMaybe<Array<IdFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 상단 고정 여부 */
  isPinned?: InputMaybe<Array<BooleanFilterInput>>;
  /** 숨김여부 */
  isVisible?: InputMaybe<Array<BooleanFilterInput>>;
  /** 좋아요 사용자 고유 id */
  likes__id?: InputMaybe<Array<IdFilterInput>>;
  state?: InputMaybe<Array<MallBoardPostStateFilterInput>>;
  /** 게시물 제목 */
  title?: InputMaybe<Array<StringFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 부가혜택몰 게시물 목록 */
export type MallBoardPostList = {
  __typename?: 'MallBoardPostList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<MallBoardPostEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 부가혜택몰 게시글 네비게이션(이전글/다음글) */
export type MallBoardPostNavigation = {
  __typename?: 'MallBoardPostNavigation';
  /** 이전글 ID */
  nextPostId?: Maybe<Scalars['ID']['output']>;
  /** input params */
  params?: Maybe<MallBoardPostNavigationParams>;
  /** 이전글 ID */
  prePostId?: Maybe<Scalars['ID']['output']>;
};

/** 부가혜택몰 게시글 네비게이션 params */
export type MallBoardPostNavigationParams = {
  __typename?: 'MallBoardPostNavigationParams';
  /** 검색 베이스 */
  base?: Maybe<PostNaviBase>;
  /** 카테고리명 */
  category?: Maybe<Scalars['String']['output']>;
  /** 검색어 */
  search?: Maybe<Scalars['String']['output']>;
};

/** 부가혜택몰 게시글 네비게이션 input params */
export type MallBoardPostNavigationParamsInput = {
  /** 검색 베이스 */
  base?: InputMaybe<PostNaviBase>;
  /** 카테고리명 */
  category?: InputMaybe<Scalars['String']['input']>;
  /** 검색어 */
  search?: InputMaybe<Scalars['String']['input']>;
};

/** 부가혜택몰 게시글 정렬 */
export type MallBoardPostSortInput = {
  /** 신청된 수 */
  appliedCount?: InputMaybe<IntSortInput>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** 스크랩 수 */
  favoriteCount?: InputMaybe<IntSortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 좋아요수 */
  likeCount?: InputMaybe<IntSortInput>;
  /** 상단 고정된 날짜 */
  pinnedAt?: InputMaybe<SortInput>;
  /** 댓글수 */
  replyCount?: InputMaybe<IntSortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
  /** 조회수 정렬 */
  viewCount?: InputMaybe<IntSortInput>;
};

/** 부가혜택몰 게시글 상태 */
export enum MallBoardPostStateEnum {
  /** 검토중 */
  OnReview = 'ON_REVIEW',
  /** 게시중 */
  Publishing = 'PUBLISHING',
  /** 심사거절 */
  Reject = 'REJECT',
  /** 게시중지 */
  ViewStop = 'VIEW_STOP'
}

/** 부가혜택몰 상태 필터 */
export type MallBoardPostStateFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<MallBoardPostStateEnum>;
  values?: InputMaybe<Array<MallBoardPostStateEnum>>;
};

/** 부가혜택몰 게시글 수정 */
export type MallBoardPostUpdateInput = {
  /** 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 보이기 여부 */
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** 부가혜택몰 신고정보 */
export type MallBoardReport = {
  __typename?: 'MallBoardReport';
  /** 관리자 메모 */
  adminMemo: Scalars['String']['output'];
  /** 작성자 */
  author: Member;
  /** 신고 카테고리 */
  category?: Maybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: Maybe<Scalars['String']['output']>;
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기타 예비용 필드 */
  etc?: Maybe<Scalars['String']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 신고 상태 */
  state: CommunityReportStateEnumType;
  /** 신고 커뮤니티 타겟 */
  targetId?: Maybe<Scalars['String']['output']>;
  /** 신고 타겟 타입 */
  type: CommunityReportTypeEnumType;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 부가혜택몰 신고 생성 Input */
export type MallBoardReportCreateInput = {
  /** 신고 카테고리 */
  category?: InputMaybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 기타 예비용 필드 */
  etc?: InputMaybe<Scalars['String']['input']>;
  /** 신고 커뮤니티 타겟 */
  targetId?: InputMaybe<Scalars['String']['input']>;
  /** 신고 타겟 타입 */
  type?: InputMaybe<CommunityReportTypeEnumType>;
};

export type MallBoardReportEdge = {
  __typename?: 'MallBoardReportEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: MallBoardReport;
};

/** 부가혜택몰 신고 리스트 필터 Input */
export type MallBoardReportFilterInput = {
  /** 작성자 이메일 */
  author__email?: InputMaybe<Array<StringFilterInput>>;
  /** 작성자 고유 id */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 작성자 이름 */
  author__name?: InputMaybe<Array<StringFilterInput>>;
  /** 신고 카테고리 */
  category?: InputMaybe<Array<CommunityReportCategoryFilterInput>>;
  /** 신고 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 기타 */
  etc?: InputMaybe<Array<StringFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 신고 상태 */
  state?: InputMaybe<Array<CommunityReportStateFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 부가혜택몰 신고 리스트 */
export type MallBoardReportList = {
  __typename?: 'MallBoardReportList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<MallBoardReportEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 부가혜택몰 신고 리스트 정렬 Input */
export type MallBoardReportSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 부가혜택몰 신고 수정 Input */
export type MallBoardReportUpdateInput = {
  /** 신고 카테고리 */
  category?: InputMaybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 기타 예비용 필드 */
  etc?: InputMaybe<Scalars['String']['input']>;
};

/** 일반 사용자 */
export type Member = User & {
  __typename?: 'Member';
  /** 관리자용 유저 메모 */
  adminMemo?: Maybe<Scalars['String']['output']>;
  /** 신청한 컨설턴트 수 */
  applyConsultantCnt: Scalars['Float']['output'];
  /** 신청한 부가혜택몰 수 */
  applyMallBoardCnt: Scalars['Float']['output'];
  /** 생년월일 YYYYMMDD(ex 20231231) */
  birthday?: Maybe<Scalars['String']['output']>;
  /** 이메일 */
  email?: Maybe<Scalars['String']['output']>;
  /** 수료한 평생교육원 영상 수 */
  finishedEduCenterVideoCnt: Scalars['Float']['output'];
  /** 해당 사용자가 팔로우하는 사람 기록 */
  followees: Array<Maybe<User>>;
  /** UUID */
  id: Scalars['ID']['output'];
  /** 고유번호 */
  idx: Scalars['Int']['output'];
  /** 내가 해당 사용자를 팔로잉한 여부 */
  isFollowing?: Maybe<Scalars['Boolean']['output']>;
  /** 가입 날짜/시간 */
  joinedAt: Scalars['DateTime']['output'];
  /** 탈퇴 날짜/시간 */
  leavedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 고유 이름(아이디) */
  name?: Maybe<Scalars['String']['output']>;
  /** 닉네임 */
  nickname?: Maybe<Scalars['String']['output']>;
  /** 알림 설정 */
  notificationSetting: UserNotificationSetting;
  /** 결제한 평생교육원 영상 수 */
  paidEduCenterVideoCnt: Scalars['Float']['output'];
  /** 전화번호 */
  phoneNumber?: Maybe<Scalars['String']['output']>;
  /** 프로필 */
  profile: UserProfile;
  /** 실명 */
  realname?: Maybe<Scalars['String']['output']>;
  /** 등록한 댓글 수 */
  registReplyCnt: Scalars['Float']['output'];
  /** 등록한 상품 개수 */
  registSecondhandCnt: Scalars['Float']['output'];
  /** 신고당한 횟수 */
  reportedCnt: Scalars['Float']['output'];
  /** 권한 타입 */
  role: UserRole;
  /** 소셜 서비스 연결 리스트 */
  socials: Array<Maybe<UserSocialLink>>;
  /** 상태 */
  state: UserState;
  /** 정지 처리된 시간 */
  suspendedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 제재당한 횟수 */
  suspendedCnt: Scalars['Float']['output'];
};


/** 일반 사용자 */
export type MemberFolloweesArgs = {
  limit?: Scalars['Int']['input'];
};

/** 가입자 수 */
export type MemberOfNumber = {
  __typename?: 'MemberOfNumber';
  /** 조건 */
  filter: DashBoardFilterEnum;
  /** 데이터 */
  list: Array<MemberOfNumberRow>;
};

/** 가입자수 row */
export type MemberOfNumberRow = {
  __typename?: 'MemberOfNumberRow';
  /** 라벨 */
  label: Scalars['String']['output'];
  /** 수 */
  num: Scalars['Float']['output'];
  /** 순서 */
  order: Scalars['Float']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** 외식정보 게시물 즐겨찾기(스크랩) */
  addBoardPostFavorite: BoardPost;
  /** 외식정보 게시물 좋아요 */
  addBoardPostLike: BoardPost;
  /** 외식컨설팅 게시물 좋아요 */
  addEatOutCstPostLike: EatOutCstPost;
  /** 평생교육원 게시물 즐겨찾기(스크랩) */
  addEduCenterPostFavorite: EduCenterPost;
  /** 평생교육원 게시물 좋아요 */
  addEduCenterPostLike: EduCenterPost;
  /** 평생교육원 영상 즐겨찾기(스크랩) */
  addEduCenterVideoFavorite: EduCenterVideo;
  /** 평생교육원 영상 좋아요 */
  addEduCenterVideoLike: EduCenterVideo;
  /** 교육 영상 즐겨찾기(스크랩) */
  addEducationVideoFavorite: EducationVideo;
  /** 영상 교육 좋아요 */
  addEducationVideoLike: EducationVideo;
  /** 구인구직 즐겨찾기(스크랩) */
  addJobSearchFavorite: JobSearch;
  /** 구인 구직 게시물 좋아요 */
  addJobSearchsLike: JobSearch;
  /** 부가혜택몰 게시물 즐겨찾기(스크랩) */
  addMallBoardPostFavorite: MallBoardPost;
  /** 부가혜택몰 게시물 좋아요 */
  addMallBoardPostLike: MallBoardPost;
  /** 알림마당 게시물 즐겨찾기(스크랩) */
  addNoticePostFavorite: NoticePost;
  /** 알림마당 게시물 좋아요 */
  addNoticePostLike: NoticePost;
  /** 민간자격증 게시물 좋아요 */
  addPrivateCertificatePostLike: PrivateCertificatePost;
  /** 중고거래 즐겨찾기(스크랩) */
  addSecondhandFavorite: Secondhand;
  /** 중고거래 좋아요 */
  addSecondhandLike: Secondhand;
  /** 정부지원사업 게시물 즐겨찾기(스크랩) */
  addSupportInfoPostFavorite: SupportInfoPost;
  /** 정부지원사업 게시물 좋아요 */
  addSupportInfoPostLike: SupportInfoPost;
  /**
   * 부관리자 사용자를 생성합니다. email 또는 name이 반드시 있어야합니다. 슈퍼 관리자 권한
   *
   * **에러 목록**
   * - `BAD_USER_INPUT` (EMAIL_OR_NAME_REQUIRED): email 또는 name이 반드시 있어야합니다.
   * - `BAD_USER_INPUT`: 데이터 유효성 검증 에러
   * - `BAD_USER_INPUT`: 부관리자 권한 계정만 생성 할 수 있습니다.
   */
  adminSignUpForAdmin: SignUpResult;
  /** 질문 답변하기(관리자권한) */
  answerInquireForAdmin: Inquire;
  /** 외식기업 신청, 승인전 혹은 리젝상태면 덮어씌우기 */
  applyCompany: UserCompany;
  /** 외식 컨설턴트 신청 */
  applyConsultant: ConsultantApply;
  /** 부가혜택몰 신청 */
  applyMallBoard: MallBoardApply;
  /** 민간자격증 신청 */
  applyPrivateCertificate: PrivateCertificateApply;
  /** 중고거래 신청 채팅방 생성 */
  applySecondhandChat: BChatChannel;
  /** 외식기업 신청 승인 - 관리자 권한 */
  approvalUserCompanyByAdmin: UserCompany;
  /** 사용자를 차단하거나 해제합니다. */
  blockUser: Member;
  /**
   * 사용자들을 차단하거나 해제합니다.
   * 이미 차단 혹은 해제된 상태이면 무시합니다.
   *
   * 반환값은 처리된 userIds의 정보입니다.
   */
  blockUsers: Array<Member>;
  /** 매칭 게시글 끌올 */
  bumpSecondhand: Secondhand;
  /**
   * 휴대폰 번호로 유저 비밀번호 변경
   * 휴대폰 인증처리가된 휴대폰 번호와 고유 코드가 필요
   *
   * **에러 코드**
   * - `NOT_FOUND`: 해당 사용자를 찾을 수 없습니다.
   * - `BAD_REQUEST`: 잘못된 요청 혹은 인증 시간이 초과되었습니다.
   * - `BAD_REQUEST`: 소셜로 가입된 계정입니다
   * - `BAD_REQUEST`: 비밀번호 변경이 불가한 계정입니다.
   */
  changePasswordFromPhoneAuth: Scalars['Boolean']['output'];
  /**
   * 매칭 신청중 예약 선택하기
   *
   * [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   * - `NOT_FOUND`: 없습니다.
   * - `NOT_FOUND`: 없는 채팅입니다.
   * - `BAD_REQUEST`: 매칭 게시글과 일치하지 않는 채팅방입니다.
   */
  choiceSecondhandTrader: BChatChannel;
  createAdminPostCategory: AdminPostCategory;
  /**
   * 배너를 생성합니다. 관리자만 허용합니다.
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  createBannerForAdmin: Notice;
  /** 외식정보 게시글 카테고리 생성 - 관리자 권한 */
  createBoardCategoryForAdmin: BoardCategory;
  /** 외식정보 게시물 생성 */
  createBoardPostForAdmin: BoardPost;
  /** 외식정보 게시물 댓글 생성 */
  createBoardPostReply: BoardReply;
  /** 외식정보 댓글/게시글 신고 생성 */
  createBoardReplyReport: BoardReplyReport;
  /** 비즈니스 채팅 신고 생성 */
  createBusinessChatReport: BusinessChatReport;
  /** 컨설턴트 카테고리 생성 - 관리자 */
  createConsultantCategoryForAdmin: ConsultantCategory;
  /** 외식컨설팅·인증 생성 - 관리자용 */
  createConsultantForAdmin: Consultant;
  /** 컨설턴트 신고 생성 */
  createConsultantReport: ConsultantReport;
  /** 외식컨설팅 게시글 카테고리 생성 - 관리자 권한 */
  createEatOutCstCategoryForAdmin: EatOutCstCategory;
  /** 외식컨설팅 게시물 생성 - 관리자용 */
  createEatOutCstPostForAdmin: EatOutCstPost;
  /** 외식컨설팅 신고 생성 */
  createEatOutCstReport: EatOutCstReport;
  /** 평생교육원 게시글 카테고리 생성 - 관리자 권한 */
  createEduCenterCategoryForAdmin: EduCenterCategory;
  /** 평생교육원 게시물 생성 - 관리자 권한 */
  createEduCenterPostForAdmin: EduCenterPost;
  /** 평생교육원 게시물 댓글 생성 */
  createEduCenterPostReply: EduCenterReply;
  /** 외식평생교육원-게시글 댓글/게시글 신고 생성 */
  createEduCenterReplyReport: EduCenterReplyReport;
  /** 평생교육원 영상 카테고리 생성 - 관리자 권한 */
  createEduCenterVideoCategoryForAdmin: EduCenterVideoCategory;
  /** 평생교육원 영상 생성 - 관리자 권한 */
  createEduCenterVideoForAdmin: EduCenterVideo;
  /** 평생교육원 영상 시청 기록 생성 */
  createEduCenterVideoLog: EduCenterVideoLog;
  /** 평생교육원 영상 신고 생성 */
  createEduCenterVideoReport: EduCenterVideoReport;
  /** 영상 교육 카테고리 생성 - 관리자 권한 */
  createEducationCategoryForAdmin: EducationCategory;
  /** 교육 영상 신고 생성 */
  createEducationReport: EducationReport;
  /** 영상 교육 생성 - 관리자 권한 */
  createEducationVideoForAdmin: EducationVideo;
  /** 교육 영상 시청 기록 생성 */
  createEducationVideoLog: EducationLog;
  /**
   * 자주 묻는 질문을 생성합니다. 관리자만 허용합니다.
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  createFaqForAdmin: Faq;
  /** 알림마당-질문과답변 생성 */
  createInquire: Inquire;
  /** 구인 구직 생성 - 자영업자 권한 */
  createJobSearch: JobSearch;
  /** 구인구직 카테고리 생성 - 관리자 권한 */
  createJobSearchCategoryForAdmin: JobSearchCategory;
  /** 구인 구직 생성 - 관리자 권한 */
  createJobSearchForAdmin: JobSearch;
  /** 구인구직 직무 생성 - 관리자 권한 */
  createJobSearchPositionForAdmin: JobSearchPosition;
  /** 구인구직 신고 생성 */
  createJobSearchReport: JobSearchReport;
  /** 부가혜택몰 게시글 카테고리 생성 - 관리자 권한 */
  createMallBoardCategoryForAdmin: MallBoardCategory;
  /** 부가혜택몰 게시물 생성 - 관리자용 */
  createMallBoardPostForAdmin: MallBoardPost;
  /** 부가혜택몰 게시물 생성 - 외식업체용 */
  createMallBoardPostForEmployed: MallBoardPost;
  /** 부가혜택몰 신고 생성 */
  createMallBoardReport: MallBoardReport;
  /** 알림마당 게시글 카테고리 생성 - 관리자 권한 */
  createNoticeCategoryForAdmin: NoticeCategory;
  /** 알림마당 게시물 생성 */
  createNoticePostForAdmin: NoticePost;
  /** 알림마당 게시물 댓글 생성 */
  createNoticePostReply: NoticeReply;
  /** 알림마당 댓글 신고 생성 */
  createNoticeReplyReport: NoticeReplyReport;
  /**
   * 알림 저장소를 생성합니다 - 관리자 권한
   *
   * **에러 코드**
   * - `BAD_REQUEWST`: SPECIFIC은 recipient_ids가 필수 입니다.
   */
  createNotificationStoreForAdmin: NotificationStorageModel;
  /**
   * 팝업을 생성합니다. 관리자만 허용합니다.
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  createPopupForAdmin: Notice;
  /** 민간자격증 게시물 생성 - 관리자용 */
  createPrivateCertificatePostForAdmin: PrivateCertificatePost;
  /** 평생교육원-민간자격증 신고 생성 */
  createPrivateCertificateReport: PrivateCertificateReport;
  /** 중고거래 생성 */
  createSecondhand: Secondhand;
  /** 중고거래 카테고리 생성 - 관리자권한 */
  createSecondhandCategoryForAdmin: SecondhandCategory;
  /** 중고거래 생성 - 관리자권한 */
  createSecondhandForAdmin: Secondhand;
  /** 정부지원산업 게시글 카테고리 생성 - 관리자 권한 */
  createSupportInfoCategoryForAdmin: SupportInfoCategory;
  /** 정부지원사업 게시물 생성 */
  createSupportInfoPostForAdmin: SupportInfoPost;
  /** 정부지원산업 게시물 댓글 생성 */
  createSupportInfoPostReply: SupportInfoReply;
  /** 정부지원사업 댓글 신고 생성 */
  createSupportInfoReplyReport: SupportInfoReplyReport;
  /** 패널 설문 조사 생성 - 관리자 */
  createSurveyPostForAdmin: SurveyPost;
  deleteAdminPostCategory: AdminPostCategory;
  /**
   * 배너를 삭제합니다. 관리자만 허용합니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 해당 게시물을 찾을 수 없습니다.
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  deleteBannerForAdmin: Notice;
  /** 외식정보 게시글 카테고리 복수 삭제 */
  deleteBoardCategoriesForAdmin: Array<BoardCategory>;
  /** 외식정보 게시글 카테고리 단일 삭제 */
  deleteBoardCategoryForAdmin: BoardCategory;
  /** 외식정보 게시물 즐겨찾기(스크랩) 취소(제거) */
  deleteBoardPostFavorite: BoardPost;
  /** 외식정보 게시물 단일 삭제 */
  deleteBoardPostForAdmin: BoardPost;
  /** 외식정보 게시물 좋아요 취소(제거) */
  deleteBoardPostLike: BoardPost;
  /** 외식정보 게시물 댓글 단일 삭제 */
  deleteBoardPostReply: BoardReply;
  /** 외식정보 댓글/게시글 신고 단일 삭제 */
  deleteBoardReplyReport: BoardReplyReport;
  /**
   * 특정 비즈니스 메시지를 삭제합니다. 내가 생성한 메시지이거나 관리자만 가능합니다.
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   * - `NOT_FOUND`: 존재하지 않은 메시지입니다.
   */
  deleteBusinessChatMessage: BChatMessage;
  /**
   * 특정 여러 개의 메시지를 삭제합니다. 내가 생성한 메시지이거나 관리자만 가능합니다.
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   * - `NOT_FOUND`: 존재하지 않은 메시지입니다.
   */
  deleteBusinessChatMessages: Array<BChatMessage>;
  /** 비즈니스 채팅 신고 단일 삭제 */
  deleteBusinessChatReport: BusinessChatReport;
  /** 컨설턴트 신고 단일 삭제 */
  deleteConsultantReport: ConsultantReport;
  /** 외식컨설팅·인증 복수 삭제 - 관리자용 */
  deleteConsultantsForAdmin: Array<Consultant>;
  /** 외식컨설팅 게시글 카테고리 복수 삭제 */
  deleteEatOutCstCategoriesForAdmin: Array<EatOutCstCategory>;
  /** 외식컨설팅 게시글 카테고리 단일 삭제 */
  deleteEatOutCstCategoryForAdmin: EatOutCstCategory;
  /** 외식컨설팅 게시물 복수 삭제 관리자 전용 */
  deleteEatOutCstPostForAdmin: Array<EatOutCstPost>;
  /** 외식컨설팅 게시물 좋아요 취소(제거) */
  deleteEatOutCstPostLike: EatOutCstPost;
  /** 외식컨설팅 신고 단일 삭제 */
  deleteEatOutCstReport: EatOutCstReport;
  /** 평생교육원 게시글 카테고리 복수 삭제 */
  deleteEduCenterCategoriesForAdmin: Array<EduCenterCategory>;
  /** 평생교육원 게시글 카테고리 단일 삭제 */
  deleteEduCenterCategoryForAdmin: EduCenterCategory;
  /** 평생교육원 게시물 즐겨찾기(스크랩) 취소(제거) */
  deleteEduCenterPostFavorite: EduCenterPost;
  /** 평생교육원 게시물 복수 삭제 관리자 전용 */
  deleteEduCenterPostForAdmin: Array<EduCenterPost>;
  /** 평생교육원 게시물 좋아요 취소(제거) */
  deleteEduCenterPostLike: EduCenterPost;
  /** 평생교육원 게시물 댓글 단일 삭제 */
  deleteEduCenterPostReply: EduCenterReply;
  /** 외식평생교육원-게시글 댓글/게시글 신고 단일 삭제 */
  deleteEduCenterReplyReport: EduCenterReplyReport;
  /** 평생교육원 영상 카테고리 복수 삭제 */
  deleteEduCenterVideoCategoriesForAdmin: Array<EduCenterVideoCategory>;
  /** 평생교육원 영상 카테고리 단일 삭제 */
  deleteEduCenterVideoCategoryForAdmin: EduCenterVideoCategory;
  /** 평생교육원 영상 즐겨찾기(스크랩) 취소(제거) */
  deleteEduCenterVideoFavorite: EduCenterVideo;
  /** 평생교육원 영상 좋아요 취소(제거) */
  deleteEduCenterVideoLike: EduCenterVideo;
  /** 평생교육원 영상 신고 단일 삭제 */
  deleteEduCenterVideoReport: EduCenterVideoReport;
  /** 평생교육원 영상 복수 삭제 - 관리자 권한 */
  deleteEduCenterVideosForAdmin: Array<EduCenterVideo>;
  /** 영상 교육 카테고리 복수 삭제 */
  deleteEducationCategoriesForAdmin: Array<EducationCategory>;
  /** 영상 교육 카테고리 단일 삭제 */
  deleteEducationCategoryForAdmin: EducationCategory;
  /** 교육 영상 신고 단일 삭제 */
  deleteEducationReport: EducationReport;
  /** 외식정보 게시물 즐겨찾기(스크랩) 취소(제거) */
  deleteEducationVideoFavorite: EducationVideo;
  /** 영상 교육 좋아요 취소(제거) */
  deleteEducationVideoLike: EducationVideo;
  /** 영상 교육 복수 삭제 - 관리자 권한 */
  deleteEducationVideosForAdmin: Array<EducationVideo>;
  /**
   * 자주 묻는 질문을 삭제합니다. 관리자만 허용합니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 해당 게시물을 찾을 수 없습니다.
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  deleteFaqForAdmin: Faq;
  /**
   * 자주 묻는 질문을 여러 개 삭제합니다. 관리자만 허용합니다.
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  deleteFaqsForAdmin: Array<Faq>;
  /** 알림마당-질문과답변 삭제 */
  deleteInquire: Inquire;
  /** 구인구직 카테고리 복수 삭제 - 관리자 권한 */
  deleteJobSearchCategoriesForAdmin: Array<JobSearchCategory>;
  /** 구인구직 즐겨찾기(스크랩) 취소(제거) */
  deleteJobSearchFavorite: JobSearch;
  /** 구인구직 직무 복수 삭제 - 관리자 권한 */
  deleteJobSearchPositionsForAdmin: Array<JobSearchPosition>;
  /** 구인구직 신고 단일 삭제 */
  deleteJobSearchReport: JobSearchReport;
  /** 구인 구직 복수 삭제 - 관리자 권한 */
  deleteJobSearchsForAdmin: Array<JobSearch>;
  /** 구인 구직 복수 삭제 - 자영업자 권한 */
  deleteJobSearchsForSE: Array<JobSearch>;
  /** 구인 구직 게시물 좋아요 취소(제거) */
  deleteJobSearchsLike: JobSearch;
  /** 부가혜택몰 게시글 카테고리 복수 삭제 */
  deleteMallBoardCategoriesForAdmin: Array<MallBoardCategory>;
  /** 부가혜택몰 게시글 카테고리 단일 삭제 */
  deleteMallBoardCategoryForAdmin: MallBoardCategory;
  /** 부가혜택몰 게시물 즐겨찾기(스크랩) 취소(제거) */
  deleteMallBoardPostFavorite: MallBoardPost;
  /** 부가혜택몰 게시물 복수 삭제 관리자 전용 */
  deleteMallBoardPostForAdmin: Array<MallBoardPost>;
  /** 부가혜택몰 게시물 복수 삭제 외식업체용 전용 */
  deleteMallBoardPostForEmployed: Array<MallBoardPost>;
  /** 부가혜택몰 게시물 좋아요 취소(제거) */
  deleteMallBoardPostLike: MallBoardPost;
  /** 부가혜택몰 신고 단일 삭제 */
  deleteMallBoardReport: MallBoardReport;
  /** 외식정보 게시물 댓글 복수 삭제 - 관리자용 */
  deleteManyBoardPostRepliesForAdmin: Array<BoardReply>;
  /** 평생교육원 게시물 댓글 복수 삭제 - 관리자용 */
  deleteManyEduCenterRepliesForAdmin: Array<EduCenterReply>;
  /** 알림마당-질문과문의 복수 삭제 - 관리자용 */
  deleteManyInquireForAdmin: Array<Inquire>;
  /** 알림마당 게시물 댓글 복수 삭제 - 관리자용 */
  deleteManyNoticePostRepliesForAdmin: Array<NoticeReply>;
  /** 정부지원산업 게시물 댓글 복수 삭제 - 관리자용 */
  deleteManySupportInfoRepliesForAdmin: Array<SupportInfoReply>;
  /** 알림마당 게시글 카테고리 복수 삭제 */
  deleteNoticeCategoriesForAdmin: Array<NoticeCategory>;
  /** 알림마당 게시글 카테고리 단일 삭제 */
  deleteNoticeCategoryForAdmin: NoticeCategory;
  /** 알림마당 게시물 즐겨찾기(스크랩) 취소(제거) */
  deleteNoticePostFavorite: NoticePost;
  /** 알림마당 게시물 복수 삭제 관리자 전용 */
  deleteNoticePostForAdmin: Array<NoticePost>;
  /** 알림마당 게시물 좋아요 취소(제거) */
  deleteNoticePostLike: NoticePost;
  /** 알림마당 게시물 댓글 단일 삭제 */
  deleteNoticePostReply: NoticeReply;
  /** 알림마당 댓글 신고 단일 삭제 */
  deleteNoticeReplyReport: NoticeReplyReport;
  /**
   * 알림 저장소를 삭제합니다 - 관리자 권한
   *
   * **에러 코드**
   * - `BAD_REQUEWST`: 이미 전송된 알림입니다.
   * - `NOT_FOUND`: 없는 데이터
   */
  deleteNotificationStoreForAdmin: NotificationStorageModel;
  /**
   * 팝업을 삭제합니다. 관리자만 허용합니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 해당 게시물을 찾을 수 없습니다.
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  deletePopupForAdmin: Notice;
  /** 민간자격증 게시물 복수 삭제 관리자 전용 */
  deletePrivateCertificatePostForAdmin: Array<PrivateCertificatePost>;
  /** 민간자격증 게시물 좋아요 취소(제거) */
  deletePrivateCertificatePostLike: PrivateCertificatePost;
  /** 평생교육원-민간자격증 신고 단일 삭제 */
  deletePrivateCertificateReport: PrivateCertificateReport;
  /** 중고거래 삭제 */
  deleteSecondhand: Secondhand;
  /** 중고거래 카테고리 복수 삭제 - 관리자 권한 */
  deleteSecondhandCategoriesForAdmin: Array<SecondhandCategory>;
  /** 중고거래 즐겨찾기(스크랩) 취소(제거) */
  deleteSecondhandFavorite: Secondhand;
  /** 중고거래 좋아요 취소(제거) */
  deleteSecondhandLike: Secondhand;
  /** 중고거래 복수 삭제 - 관리자 권한, END 상태는 삭제 불가 */
  deleteSecondhandsForAdmin: Array<Secondhand>;
  /** 정부지원산업 게시글 카테고리 복수 삭제 */
  deleteSupportInfoCategoriesForAdmin: Array<SupportInfoCategory>;
  /** 정부지원산업 게시글 카테고리 단일 삭제 */
  deleteSupportInfoCategoryForAdmin: SupportInfoCategory;
  /** 정부지원사업 게시물 즐겨찾기(스크랩) 취소(제거) */
  deleteSupportInfoPostFavorite: SupportInfoPost;
  /** 정부지원사업 게시물 복수 삭제 관리자 전용 */
  deleteSupportInfoPostForAdmin: Array<SupportInfoPost>;
  /** 정부지원사업 게시물 좋아요 취소(제거) */
  deleteSupportInfoPostLike: SupportInfoPost;
  /** 정부지원산업 게시물 댓글 단일 삭제 */
  deleteSupportInfoPostReply: SupportInfoReply;
  /** 정부지원사업 댓글 신고 단일 삭제 */
  deleteSupportInfoReplyReport: SupportInfoReplyReport;
  /** 패널 설문 조사 문항(복수) 삭제 - 관리자 */
  deleteSurveyQuestionsForAdmin: Array<SurveyQuestion>;
  /**
   * 휴대폰 번호로 유저가 존재하는지 체크
   * 휴대폰 인증처리가된 휴대폰 번호와 고유 코드가 필요
   *
   * **에러 코드**
   * - `NOT_FOUND`: 해당 사용자를 찾을 수 없습니다.
   * - `BAD_REQUEST`: 잘못된 요청 혹은 인증 시간이 초과되었습니다.
   */
  findUserByPhone: Scalars['String']['output'];
  /** 평생교육원 영상 시청 완료 요청 */
  finishedEduCenterVideo: EduCenterVideo;
  /** 평생교육원 영상 시청 완료 요청 - 관리자용 */
  finishedEduCenterVideoForAdmin: EduCenterVideo;
  /** 교육 영상 시청 완료 요청 */
  finishedEducationVideo: EducationVideo;
  /** 교육 영상 시청 완료 요청 - 관리자용 */
  finishedEducationVideoForAdmin: EducationVideo;
  /** 카카오 access token 요청 */
  getKakaoAccessToken: KakaoAccessData;
  /** 평생교육원 영상 수기/수동 결제 처리 - 슈퍼 관리자용 */
  handPaymentEduCenterVideoForAdmin: EduCenterVideo;
  /** 외식정보 게시물 조회수 +1 */
  incrementBoardPostViewCount: BoardPost;
  /** 외식컨설팅 게시물 조회수 +1 */
  incrementEatOutCstPostViewCount: EatOutCstPost;
  /** 평생교육원 게시물 조회수 +1 */
  incrementEduCenterPostViewCount: EduCenterPost;
  /** 구인 구직 게시물 조회수 +1 */
  incrementJobSearchsViewCount: JobSearch;
  /** 부가혜택몰 게시물 조회수 +1 */
  incrementMallBoardPostViewCount: MallBoardPost;
  /** 알림마당 게시물 조회수 +1 */
  incrementNoticePostViewCount: NoticePost;
  /** 민간자격증 게시물 조회수 +1 */
  incrementPrivateCertificatePostViewCount: PrivateCertificatePost;
  /** 정부지원사업 게시물 조회수 +1 */
  incrementSupportInfoPostViewCount: SupportInfoPost;
  /** 탈퇴 가능 여부 확인 */
  isLeavePossible: NonWithdrawalReasonEnum;
  /**
   * 내가 참여중인 비즈니스 채널 중에 특정 채널을 나갑니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 존재하지 않은 채널입니다.
   * - `BAD_USER_INPUT`: 참여하지 않은 채널입니다.
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  leaveBusinessChatChannel: BChatChannel;
  /**
   * 내가 참여중인 비즈니스 채널 중에 여러 개의 원하는 채널을 나갑니다. 존재하지 않거나 미참여중인 비즈니스 채널은 무시됩니다.
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  leaveChatChannels: Array<BChatChannel>;
  /**
   * 탈퇴 처리
   *
   * **에러 코드**
   * - NOT_FOUND: 권한이 없습니다.
   * - BAD_REQUEST: 탈퇴 가능한 상태가 아닙니다.
   */
  leavingUser: Member;
  /**
   * 특정 유저를 탈퇴처리합니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 없는 유저.
   */
  leavingUserForAdmin: Member;
  /**
   * 이미 가입된 계정에 애플 소셜 계정을 연결합니다.
   *
   * **에러 코드**
   * - `UNAUTHENTICATED`: 잘못된 애플 계정입니다.
   */
  linkApple: Member;
  /**
   * 이미 가입된 계정에 구글 소셜 계정을 연결합니다.
   *
   * **에러 코드**
   * - `UNAUTHENTICATED`: 잘못된 구글 계정입니다.
   */
  linkGoogle: Member;
  /**
   * 이미 가입된 계정에 카카오 소셜 계정을 연결합니다.
   *
   * **에러 코드**
   * - `UNAUTHENTICATED`: 잘못된 카카오 계정입니다.
   */
  linkKakao: Member;
  /**
   * 이미 가입된 계정에 네이버 소셜 계정을 연결합니다.
   *
   * **에러 코드**
   * - `UNAUTHENTICATED`: 잘못된 네이버 계정입니다.
   */
  linkNaver: Member;
  /** 결제 승인 요청 */
  paymentApproval: PaymentApprovalResponse;
  /** 외식정보 게시물 상단 고정 관리자 전용 */
  pinBoardPostsForAdmin: Array<BoardPost>;
  /** 외식컨설팅 게시물 상단 고정 슈퍼 관리자 전용 */
  pinEatOutCstPostsForAdmin: Array<EatOutCstPost>;
  /** 평생교육원 게시물 상단 고정 관리자 전용 */
  pinEduCenterPostsForAdmin: Array<EduCenterPost>;
  /** 평생교육원 영상 상단 고정 슈퍼 관리자 전용 */
  pinEduCenterVideosForAdmin: Array<EduCenterVideo>;
  /** 영상 교육 상단 고정 관리자 전용 */
  pinEducationVideosForAdmin: Array<EducationVideo>;
  /** 부가혜택몰 게시물 상단 고정 슈퍼관리자 전용 */
  pinMallBoardPostsForAdmin: Array<MallBoardPost>;
  /** 알림마당 게시물 상단 고정 관리자 전용 */
  pinNoticePostsForAdmin: Array<NoticePost>;
  /** 민간자격증 게시물 상단 고정 관리자 전용 */
  pinPrivateCertificatePostsForAdmin: Array<PrivateCertificatePost>;
  /** 정부지원사업 게시물 상단 고정 관리자 전용 */
  pinSupportInfoPostsForAdmin: Array<SupportInfoPost>;
  /** 결제 완료 체크 */
  purchaseCheck: Scalars['Boolean']['output'];
  /** 결제 처리 요청 - (개발용) */
  purchaseEndReq: Scalars['Boolean']['output'];
  /** 평생교육원 영상 구매 신청 */
  purchaseReqEduCenterVideo: EduCenterVideo;
  /** 중고거래 재오픈하기 */
  reOpenSecondhand: Secondhand;
  /**
   * 모든 알림을 읽음 처리합니다.
   *
   * 읽음처리한 개수를 반환
   */
  readAllNotification: Scalars['Float']['output'];
  /**
   * 특정 채널의 메시지들을 모두 읽음 처리합니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 존재하지 않은 채널입니다.
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  readBusinessChatMessages: Scalars['Boolean']['output'];
  /**
   * 특정 알림을 읽음 처리합니다.
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   * - `NOT_FOUND`: 해당 사용자를 찾을 수 없습니다.
   */
  readNotification: Notification;
  /**
   * 갱신 토큰으로 토큰을 새로 발급받습니다. 갱신 토큰도 일정 기간이 지난 경우에는 새로 발급됩니다.
   *
   * **에러 코드**
   * - `UNAUTHENTICATED`: 만료된 갱신 토큰입니다.
   */
  refreshToken: AuthTokenResponse;
  /** 외식기업 신청 거절 - 관리자 권한 */
  rejectUserCompanyByAdmin: UserCompany;
  /**
   * 추가되있는 FCM 토큰을 삭제합니다. 내가 추가한 FCM 토큰만 가능합니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 찾을 수 없습니다.
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  removeFCMToken: UserFcmToken;
  /** 통합 신고 처리 - 관리자전용 */
  reportViewResult: ReportView;
  /** 수료증 발급, 이미 발급시 이전 수료증 반환 */
  reqEduCentverVideoCertificate: EduCenterVideoCertificate;
  /** 비메오 영상 썸네일 활성화 */
  reqVimeoThumbnailActive: Scalars['Boolean']['output'];
  /** 비메오 영상 썸네일 업로드 링크 요청 */
  reqVimeoThumbnailUploadLink: Scalars['String']['output'];
  /** 비메오 영상 업로드 링크 요청 */
  reqVimeoVideoUploadLink: VimeoUploadInfo;
  /** 전화번호 인증 요청 */
  requestAuthNumber?: Maybe<Scalars['String']['output']>;
  /** 이메일 인증 요청 */
  requestEmailAuthNumber?: Maybe<Scalars['String']['output']>;
  /**
   * 매칭 종료하기
   *
   * [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   * - `NOT_FOUND`: 없습니다.
   * - `NOT_FOUND`: 없는 채팅입니다.
   */
  secondhandEnd: BChatChannel;
  /**
   * 비즈니스 채팅 메시지를 생성하여 전송합니다.
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   * - `NOT_FOUND`: 채널을 찾을 수 없습니다.
   * - `BAD_USER_INPUT`: 종료된 채팅방입니다.
   */
  sendBusinessChatMessage: BChatMessage;
  /** 임의 알림을 생성합니다. 관리자만 허용됩니다. */
  sendNotificationForAdmin: Notification;
  /**
   * 알림 저장소에 해당하는 알림을 전송합니다 - 관리자 권한
   *
   * **에러 코드**
   * - `BAD_REQUEWST`: 이미 전송된 알림입니다.
   * - `NOT_FOUND`: 없는 데이터
   */
  sendNotificationStoreForAdmin: NotificationStorageModel;
  /**
   * 나 자신의 사용자에게 FCM 토큰을 추가합니다. 이미 추가된 적이 있는 토큰인 경우, 시간 갱신만 이루어집니다.
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  setFCMToken: UserFcmToken;
  /** 특정 채널을 내 채널 목록(myBusinessChatChannels)에서 최상단 고정시킵니다. */
  setPinBusinessChatChannel: BChatChannel;
  /**
   * 비즈니스 채널의 상태를 변경합니다. 관리자 외에는 사용할 수 없습니다.
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   * - `NOT_FOUND`: 존재하지 않은 채널입니다.
   */
  setStateBusinessChatChannel: BChatChannel;
  /**
   * 사용자 이름(아이디)으로 로그인합니다.
   *
   * **에러 목록**
   * - `UNAUTHENTICATED`: 아이디 또는 비밀번호가 틀렸습니다.
   */
  signIn: AuthTokenResponse;
  /**
   * 애플 소셜 계정을 이용하여 로그인합니다.
   *
   * **에러 코드**
   * - `UNAUTHENTICATED`: 잘못된 애플 계정입니다.
   * - `NOT_FOUND`: 가입하지 않은 계정입니다.
   */
  signInApple: AuthTokenResponse;
  /**
   * 구글 소셜 계정을 이용하여 로그인합니다.
   *
   * **에러 코드**
   * - `UNAUTHENTICATED`: 잘못된 구글 계정입니다.
   * - `NOT_FOUND`: 가입하지 않은 계정입니다.
   */
  signInGoogle: AuthTokenResponse;
  /**
   * 카카오 소셜 계정을 이용하여 로그인합니다.
   *
   * **에러 코드**
   * - `UNAUTHENTICATED`: 잘못된 카카오 계정입니다.
   * - `NOT_FOUND`: 가입하지 않은 계정입니다.
   */
  signInKakao: AuthTokenResponse;
  /**
   * 네이버 소셜 계정을 이용하여 로그인합니다.
   *
   * **에러 코드**
   * - `UNAUTHENTICATED`: 잘못된 네이버 계정입니다.
   * - `NOT_FOUND`: 가입하지 않은 계정입니다.
   */
  signInNaver: AuthTokenResponse;
  /**
   * 회원가입하여 사용자를 생성합니다. email 또는 name이 반드시 있어야합니다.
   *
   * **에러 목록**
   * - `BAD_USER_INPUT` (EMAIL_OR_NAME_REQUIRED): email 또는 name이 반드시 있어야합니다.
   * - `BAD_USER_INPUT`: 데이터 유효성 검증 에러
   */
  signUp: SignUpResult;
  /**
   * 애플 소셜 계정을 이용하여 회원가입합니다.
   *
   * **에러 코드**
   * - `UNAUTHENTICATED`: 잘못된 애플 계정입니다.
   * - `NOT_FOUND`: 가입하지 않은 계정입니다.
   */
  signUpApple: SignUpResult;
  /**
   * 구글 소셜 계정을 이용하여 회원가입합니다.
   *
   * **에러 코드**
   * - `UNAUTHENTICATED`: 잘못된 구글 계정입니다.
   */
  signUpGoogle: SignUpResult;
  /**
   * 카카오 소셜 계정을 이용하여 회원가입합니다.
   *
   * **에러 코드**
   * - `UNAUTHENTICATED`: 잘못된 카카오 계정입니다.
   */
  signUpKakao: SignUpResult;
  /**
   * 네이버 소셜 계정을 이용하여 회원가입합니다.
   *
   * **에러 코드**
   * - `UNAUTHENTICATED`: 잘못된 네이버 계정입니다.
   */
  signUpNaver: SignUpResult;
  /** 외식기업 중지 - 관리자 권한 */
  stopUserCompanyByAdmin: UserCompany;
  /** 설문조사패널에 응답 제출 */
  submitSurveyResponse: SurveyResponse;
  /**
   * 특정 유저를 정지처리합니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 없는 유저.
   */
  suspendUser: Member;
  updateAdminPostCategory: AdminPostCategory;
  /**
   * 배너를 수정합니다. 관리자만 허용합니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 해당 게시물을 찾을 수 없습니다.
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  updateBannerForAdmin: Notice;
  /** 게시판 권한 수정 - 슈퍼관리자 용 */
  updateBoardAuthForAdmin: Array<BoardAuthModel>;
  /** 외식정보 게시글 카테고리 단일 수정 */
  updateBoardCategoryForAdmin: BoardCategory;
  /** 외식정보 게시물 파일 변경 */
  updateBoardPostFilesForAdmin: BoardPost;
  /** 외식정보 게시물 수정 */
  updateBoardPostForAdmin: BoardPost;
  /** 외식정보 게시물 댓글 수정 */
  updateBoardPostReply: BoardReply;
  /** 외식정보 댓글/게시글 게시물 수정 */
  updateBoardReplyReport: BoardReplyReport;
  /** 외식정보 댓글/게시글 신고 변경 - 관리자용 */
  updateBoardReplyReportForAdmin: BoardReplyReport;
  /** 비즈니스 채팅 게시물 수정 */
  updateBusinessChatReport: BusinessChatReport;
  /** 비즈니스 채팅 신고물 파일 변경 */
  updateBusinessChatReportFiles: BusinessChatReport;
  /** 비즈니스 채팅 신고 변경 - 관리자용 */
  updateBusinessChatReportForAdmin: BusinessChatReport;
  /** 외식 컨설턴트 신청 정보 수정 - 관리자용 */
  updateConsultantApply: ConsultantApply;
  /** 컨설턴트 카테고리 수정 - 관리자 */
  updateConsultantCategoryForAdmin: ConsultantCategory;
  /** 외식컨설팅·인증 수정 - 관리자용 */
  updateConsultantForAdmin: Consultant;
  /** 컨설턴트 게시물 수정 */
  updateConsultantReport: ConsultantReport;
  /** 컨설턴트 신고 변경 - 관리자용 */
  updateConsultantReportForAdmin: ConsultantReport;
  /** 외식컨설팅·인증 상태 수정 - 슈퍼 관리자용 */
  updateConsultantStateForAdmin: Consultant;
  /** 외식컨설팅 게시글 카테고리 단일 수정 */
  updateEatOutCstCategoryForAdmin: EatOutCstCategory;
  /** 외식컨설팅 게시물 파일 변경 - 관리자용 */
  updateEatOutCstPostFilesForAdmin: EatOutCstPost;
  /** 외식컨설팅 게시물 수정 - 관리자용 */
  updateEatOutCstPostForAdmin: EatOutCstPost;
  /** 외식컨설팅 게시물 상태 변경 - 슈퍼 관리자용 */
  updateEatOutCstPostStateForAdmin: EatOutCstPost;
  /** 외식컨설팅 게시물 수정 */
  updateEatOutCstReport: EatOutCstReport;
  /** 외식컨설팅 신고 변경 - 관리자용 */
  updateEatOutCstReportForAdmin: EatOutCstReport;
  /** 평생교육원 게시글 카테고리 단일 수정 */
  updateEduCenterCategoryForAdmin: EduCenterCategory;
  /** 평생교육원 게시물 파일 변경 */
  updateEduCenterPostFilesForAdmin: EduCenterPost;
  /** 평생교육원 게시물 수정 */
  updateEduCenterPostForAdmin: EduCenterPost;
  /** 평생교육원 게시물 댓글 수정 */
  updateEduCenterPostReply: EduCenterReply;
  /** 외식평생교육원-게시글 댓글/게시글 게시물 수정 */
  updateEduCenterReplyReport: EduCenterReplyReport;
  /** 외식평생교육원-게시글 댓글/게시글 신고 변경 - 관리자용 */
  updateEduCenterReplyReportForAdmin: EduCenterReplyReport;
  /** 평생교육원 영상 카테고리 단일 수정 */
  updateEduCenterVideoCategoryForAdmin: EduCenterVideoCategory;
  /** 평생교육원 영상 수정 - 관리자 권한 */
  updateEduCenterVideoForAdmin: EduCenterVideo;
  /** 평생교육원 영상 게시물 수정 */
  updateEduCenterVideoReport: EduCenterVideoReport;
  /** 평생교육원 영상 신고 변경 - 관리자용 */
  updateEduCenterVideoReportForAdmin: EduCenterVideoReport;
  /** 평교육원 영상 교육 상태 수정 - 슈퍼 관리자 권한 */
  updateEduCenterVideoStateForAdmin: EduCenterVideo;
  /** 영상 교육 카테고리 단일 수정 */
  updateEducationCategoryForAdmin: EducationCategory;
  /** 교육 영상 게시물 수정 */
  updateEducationReport: EducationReport;
  /** 교육 영상 신고 변경 - 관리자용 */
  updateEducationReportForAdmin: EducationReport;
  /** 영상 교육 수정 - 관리자 권한 */
  updateEducationVideoForAdmin: EducationVideo;
  /** 영상 교육 상태 수정 - 슈퍼 관리자 권한 */
  updateEducationVideoStateForAdmin: EducationVideo;
  /**
   * 자주 묻는 질문을 수정합니다. 관리자만 허용합니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 해당 게시물을 찾을 수 없습니다.
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  updateFaqForAdmin: Faq;
  /** 알림마당-질문과답변 수정 */
  updateInquire: Inquire;
  /** 구인구직 카테고리 수정 - 관리자 권한 */
  updateJobSearchCategoryForAdmin: JobSearchCategory;
  /** 구인 구직 수정 - 관리자 권한 */
  updateJobSearchForAdmin: JobSearch;
  /** 구인 구직 수정 - 자영업자 권한 */
  updateJobSearchForSE: JobSearch;
  /** 구인구직 직무 수정 - 관리자 권한 */
  updateJobSearchPositionForAdmin: JobSearchPosition;
  /** 구인구직 게시물 수정 */
  updateJobSearchReport: JobSearchReport;
  /** 구인구직 신고 변경 - 관리자용 */
  updateJobSearchReportForAdmin: JobSearchReport;
  /** 구인 구직 상태 변경 - 슈퍼 관리자 권한 */
  updateJobSearchsStateForAdmin: Array<JobSearch>;
  /** 부가혜택몰 신청 정보 수정 - 관리자용 */
  updateMallBoardApply: MallBoardApply;
  /** 부가혜택몰 게시글 카테고리 단일 수정 */
  updateMallBoardCategoryForAdmin: MallBoardCategory;
  /** 부가혜택몰 게시물 파일 변경 - 관리자용 */
  updateMallBoardPostFilesForAdmin: MallBoardPost;
  /** 부가혜택몰 게시물 파일 변경 - 외식업체용 */
  updateMallBoardPostFilesForEmployed: MallBoardPost;
  /** 부가혜택몰 게시물 수정 - 관리자용 */
  updateMallBoardPostForAdmin: MallBoardPost;
  /** 부가혜택몰 게시물 수정 - 외식업체용 */
  updateMallBoardPostForEmployed: MallBoardPost;
  /** 부가혜택몰 게시물 수정 */
  updateMallBoardReport: MallBoardReport;
  /** 부가혜택몰 신고 변경 - 관리자용 */
  updateMallBoardReportForAdmin: MallBoardReport;
  /** 부가혜택몰 상태 수정 - 슈퍼 관리자용 */
  updateMallBoardStateForAdmin: MallBoardPost;
  /** 게시판 권한 수정(복수) - 슈퍼관리자 용 */
  updateManyBoardAuthForAdmin: Array<BoardAuthModel>;
  /**
   * 나 자신의 사용자 정보를 수정합니다.
   *
   * **에러 코드**
   * - FORBIDDEN: 권한이 없습니다.
   */
  updateMe: Member;
  /**
   * 내 마이페이지 정보를 수정합니다.
   *
   * **에러 코드**
   * - FORBIDDEN: 권한이 없습니다.
   * - BAD_REQUEST: 비밀번호 변경시 기존 비밀번호와 새로운 비밀번호가 모두 입력되어야합니다.
   * - BAD_REQUEST: 비밀번호 변경이 불가한 계정입니다.
   * - BAD_REQUEST: 소셜로 가입된 계정입니다.
   * - BAD_REQUEST: 비밀번호가 일치하지않습니다.
   */
  updateMyPageInfo: Member;
  /**
   * 내 휴대폰 번호를 수정합니다.
   *
   * **에러 코드**
   * - FORBIDDEN: 권한이 없습니다.
   * - BAD_REQUEST: 잘못된 요청 혹은 인증 시간이 초과되었습니다.
   */
  updateMyPhone: Member;
  /** 알림마당 게시글 카테고리 단일 수정 */
  updateNoticeCategoryForAdmin: NoticeCategory;
  /** 알림마당 게시물 파일 변경 */
  updateNoticePostFilesForAdmin: NoticePost;
  /** 알림마당 게시물 수정 */
  updateNoticePostForAdmin: NoticePost;
  /** 알림마당 게시물 댓글 수정 */
  updateNoticePostReply: NoticeReply;
  /** 알림마당 댓글 게시물 수정 */
  updateNoticeReplyReport: NoticeReplyReport;
  /** 알림마당 댓글 신고 변경 - 관리자용 */
  updateNoticeReplyReportForAdmin: NoticeReplyReport;
  /**
   * 알림 저장소를 수정합니다 - 관리자 권한
   *
   * **에러 코드**
   * - `BAD_REQUEWST`: SPECIFIC은 recipient_ids가 필수 입니다.
   * - `BAD_REQUEWST`: 이미 전송된 알림입니다.
   * - `NOT_FOUND`: 없는 데이터
   */
  updateNotificationStoreForAdmin: NotificationStorageModel;
  /**
   * 팝업을 수정합니다. 관리자만 허용합니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 해당 게시물을 찾을 수 없습니다.
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  updatePopupForAdmin: Notice;
  /** 민간자격증 신청 정보 수정 - 관리자용 */
  updatePrivateCertificateApply: PrivateCertificateApply;
  /** 민간자격증 게시물 파일 변경 - 관리자용 */
  updatePrivateCertificatePostFilesForAdmin: PrivateCertificatePost;
  /** 민간자격증 게시물 수정 - 관리자용 */
  updatePrivateCertificatePostForAdmin: PrivateCertificatePost;
  /** 민간자격증 게시물 상태 변경 - 슈퍼 관리자용 */
  updatePrivateCertificatePostStateForAdmin: PrivateCertificatePost;
  /** 평생교육원-민간자격증 게시물 수정 */
  updatePrivateCertificateReport: PrivateCertificateReport;
  /** 평생교육원-민간자격증 신고 변경 - 관리자용 */
  updatePrivateCertificateReportForAdmin: PrivateCertificateReport;
  /** 중고거래 수정 */
  updateSecondhand: Secondhand;
  /** 중고거래 카테고리 수정 - 관리자 권한 */
  updateSecondhandCategoryForAdmin: SecondhandCategory;
  /** 중고거래 수정 - 관리자용 */
  updateSecondhandForAdmin: Secondhand;
  /** 서비스 운영 정보 수정 - 관리자용 */
  updateServiceManage: ServiceManage;
  /** 정부지원산업 게시글 카테고리 단일 수정 */
  updateSupportInfoCategoryForAdmin: SupportInfoCategory;
  /** 정부지원사업 게시물 파일 변경 */
  updateSupportInfoPostFilesForAdmin: SupportInfoPost;
  /** 정부지원사업 게시물 수정 */
  updateSupportInfoPostForAdmin: SupportInfoPost;
  /** 정부지원산업 게시물 댓글 수정 */
  updateSupportInfoPostReply: SupportInfoReply;
  /** 정부지원사업 댓글 게시물 수정 */
  updateSupportInfoReplyReport: SupportInfoReplyReport;
  /** 정부지원사업 댓글 신고 변경 - 관리자용 */
  updateSupportInfoReplyReportForAdmin: SupportInfoReplyReport;
  /** 패널 설문 조사 수정 - 관리자 */
  updateSurveyPostForAdmin: SurveyPost;
  /** 패널 설문 조사 상태 수정 - 관리자 */
  updateSurveyPostStateForAdmin: SurveyPost;
  /** 패널 설문 조사 문항(복수) 수정 - 관리자 */
  updateSurveyQuestionsForAdmin: SurveyPost;
  /**
   * 특정 유저의 관리자 메모를 변경합니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 없는 유저.
   */
  updateUserAdminMemo: Scalars['String']['output'];
  /** 외식기업 업체 정보 수정 - 관리자 권한 */
  updateUserCompanyByAdmin: UserCompany;
  /**
   * 유저 정보 변경 - 관리자 권한
   *
   *   **에러 코드**
   * - `NOT_FOUND`: 없는 유저.
   */
  updateUserForAdmin: Member;
  /** 외부 링크 설문조사의 결과지 URL를 등록 - 관리자 용 */
  uploadLinkSurveyResponseForAdmin: SurveyPost;
  /** 전화번호 인증 확인 */
  validateAuthNumber: Scalars['String']['output'];
  /** 이메일 인증 확인 */
  validateEmailAuthNumber: Scalars['String']['output'];
  /**
   * 휴대폰 인증으로 휴대폰 번호로 가입된 유저의 loginId 반환
   * 휴대폰 인증처리가된 휴대폰 번호와 고유 코드가 필요
   *
   * **에러 코드**
   * - `NOT_FOUND`: 해당 사용자를 찾을 수 없습니다.
   * - `BAD_REQUEST`: 잘못된 요청 혹은 인증 시간이 초과되었습니다.
   */
  validateFindEmailPhoneAuth: FinedAccount;
  /**
   * 휴면 상태를 해제합니다.
   *
   * **에러 코드**
   * - NOT_FOUND: 권한이 없습니다.
   */
  wakeUpSleeper: Member;
};


export type MutationAddBoardPostFavoriteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAddBoardPostLikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAddEatOutCstPostLikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAddEduCenterPostFavoriteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAddEduCenterPostLikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAddEduCenterVideoFavoriteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAddEduCenterVideoLikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAddEducationVideoFavoriteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAddEducationVideoLikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAddJobSearchFavoriteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAddJobSearchsLikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAddMallBoardPostFavoriteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAddMallBoardPostLikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAddNoticePostFavoriteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAddNoticePostLikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAddPrivateCertificatePostLikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAddSecondhandFavoriteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAddSecondhandLikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAddSupportInfoPostFavoriteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAddSupportInfoPostLikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAdminSignUpForAdminArgs = {
  data: SignUpInput;
  role: UserRole;
};


export type MutationAnswerInquireForAdminArgs = {
  content: Scalars['String']['input'];
  id: Scalars['String']['input'];
};


export type MutationApplyCompanyArgs = {
  companyLicenseFileId: Scalars['ID']['input'];
  data: UserCompanyApplyInput;
};


export type MutationApplyConsultantArgs = {
  consultantId: Scalars['ID']['input'];
};


export type MutationApplyMallBoardArgs = {
  mallBoardId: Scalars['ID']['input'];
};


export type MutationApplyPrivateCertificateArgs = {
  privateCertificateId: Scalars['ID']['input'];
};


export type MutationApplySecondhandChatArgs = {
  id: Scalars['ID']['input'];
};


export type MutationApprovalUserCompanyByAdminArgs = {
  userId: Scalars['ID']['input'];
};


export type MutationBlockUserArgs = {
  isBlocking: Scalars['Boolean']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationBlockUsersArgs = {
  isBlocking: Scalars['Boolean']['input'];
  userIds: Array<Scalars['ID']['input']>;
};


export type MutationBumpSecondhandArgs = {
  matchId: Scalars['ID']['input'];
};


export type MutationChangePasswordFromPhoneAuthArgs = {
  email: Scalars['Email']['input'];
  newPassword: Scalars['String']['input'];
  phoneNumber: Scalars['PhoneNumber']['input'];
  requestId: Scalars['ID']['input'];
};


export type MutationChoiceSecondhandTraderArgs = {
  channelId: Scalars['ID']['input'];
  secondhandId: Scalars['ID']['input'];
};


export type MutationCreateAdminPostCategoryArgs = {
  data: AdminPostCategoryCreateInput;
};


export type MutationCreateBannerForAdminArgs = {
  data: BannerCreateInput;
};


export type MutationCreateBoardCategoryForAdminArgs = {
  data: BoardCategoryCreateInput;
};


export type MutationCreateBoardPostForAdminArgs = {
  data: BoardPostCreateInput;
};


export type MutationCreateBoardPostReplyArgs = {
  data: BoardReplyCreateInput;
};


export type MutationCreateBoardReplyReportArgs = {
  data: BoardReplyReportCreateInput;
};


export type MutationCreateBusinessChatReportArgs = {
  data: BusinessChatReportCreateInput;
};


export type MutationCreateConsultantCategoryForAdminArgs = {
  data: ConsultantCategoryCreateInput;
};


export type MutationCreateConsultantForAdminArgs = {
  data: ConsultantCreateInput;
};


export type MutationCreateConsultantReportArgs = {
  data: ConsultantReportCreateInput;
};


export type MutationCreateEatOutCstCategoryForAdminArgs = {
  data: EatOutCstCategoryCreateInput;
};


export type MutationCreateEatOutCstPostForAdminArgs = {
  data: EatOutCstPostCreateInput;
};


export type MutationCreateEatOutCstReportArgs = {
  data: EatOutCstReportCreateInput;
};


export type MutationCreateEduCenterCategoryForAdminArgs = {
  data: EduCenterCategoryCreateInput;
};


export type MutationCreateEduCenterPostForAdminArgs = {
  data: EduCenterPostCreateInput;
};


export type MutationCreateEduCenterPostReplyArgs = {
  data: EduCenterReplyCreateInput;
};


export type MutationCreateEduCenterReplyReportArgs = {
  data: EduCenterReplyReportCreateInput;
};


export type MutationCreateEduCenterVideoCategoryForAdminArgs = {
  data: EduCenterVideoCategoryCreateInput;
};


export type MutationCreateEduCenterVideoForAdminArgs = {
  data: EduCenterVideoCreateInput;
};


export type MutationCreateEduCenterVideoLogArgs = {
  nowVideoDuration: Scalars['Float']['input'];
  videoId: Scalars['ID']['input'];
};


export type MutationCreateEduCenterVideoReportArgs = {
  data: EduCenterVideoReportCreateInput;
};


export type MutationCreateEducationCategoryForAdminArgs = {
  data: EducationCategoryCreateInput;
};


export type MutationCreateEducationReportArgs = {
  data: EducationReportCreateInput;
};


export type MutationCreateEducationVideoForAdminArgs = {
  data: EducationVideoCreateInput;
};


export type MutationCreateEducationVideoLogArgs = {
  nowVideoDuration: Scalars['Float']['input'];
  videoId: Scalars['ID']['input'];
};


export type MutationCreateFaqForAdminArgs = {
  data: FaqCreateInput;
};


export type MutationCreateInquireArgs = {
  data: InquireCreateInput;
};


export type MutationCreateJobSearchArgs = {
  data: JobSearchCreateInput;
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type MutationCreateJobSearchCategoryForAdminArgs = {
  data: JobSearchCategoryCreateInput;
};


export type MutationCreateJobSearchForAdminArgs = {
  data: JobSearchCreateInput;
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  phoneNumber: Scalars['PhoneNumber']['input'];
  storeName: Scalars['String']['input'];
};


export type MutationCreateJobSearchPositionForAdminArgs = {
  data: JobSearchPositionCreateInput;
};


export type MutationCreateJobSearchReportArgs = {
  data: JobSearchReportCreateInput;
};


export type MutationCreateMallBoardCategoryForAdminArgs = {
  data: MallBoardCategoryCreateInput;
};


export type MutationCreateMallBoardPostForAdminArgs = {
  data: MallBoardPostCreateInput;
};


export type MutationCreateMallBoardPostForEmployedArgs = {
  data: MallBoardPostCreateInput;
};


export type MutationCreateMallBoardReportArgs = {
  data: MallBoardReportCreateInput;
};


export type MutationCreateNoticeCategoryForAdminArgs = {
  data: NoticeCategoryCreateInput;
};


export type MutationCreateNoticePostForAdminArgs = {
  data: NoticePostCreateInput;
};


export type MutationCreateNoticePostReplyArgs = {
  data: NoticeReplyCreateInput;
};


export type MutationCreateNoticeReplyReportArgs = {
  data: NoticeReplyReportCreateInput;
};


export type MutationCreateNotificationStoreForAdminArgs = {
  data: NotificationStorageCreateInput;
  isSend?: Scalars['Boolean']['input'];
  recipient_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type MutationCreatePopupForAdminArgs = {
  data: PopupCreateInput;
};


export type MutationCreatePrivateCertificatePostForAdminArgs = {
  data: PrivateCertificatePostCreateInput;
};


export type MutationCreatePrivateCertificateReportArgs = {
  data: PrivateCertificateReportCreateInput;
};


export type MutationCreateSecondhandArgs = {
  data: SecondhandCreateInput;
};


export type MutationCreateSecondhandCategoryForAdminArgs = {
  data: SecondhandCategoryCreateInput;
};


export type MutationCreateSecondhandForAdminArgs = {
  data: SecondhandCreateInput;
  userId: Scalars['ID']['input'];
};


export type MutationCreateSupportInfoCategoryForAdminArgs = {
  data: SupportInfoCategoryCreateInput;
};


export type MutationCreateSupportInfoPostForAdminArgs = {
  data: SupportInfoPostCreateInput;
};


export type MutationCreateSupportInfoPostReplyArgs = {
  data: SupportInfoReplyCreateInput;
};


export type MutationCreateSupportInfoReplyReportArgs = {
  data: SupportInfoReplyReportCreateInput;
};


export type MutationCreateSurveyPostForAdminArgs = {
  data: SurveyPostCreateInput;
  options?: InputMaybe<Array<SurveyQuestionCreateInput>>;
};


export type MutationDeleteAdminPostCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteBannerForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteBoardCategoriesForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteBoardCategoryForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteBoardPostFavoriteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteBoardPostForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteBoardPostLikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteBoardPostReplyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteBoardReplyReportArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteBusinessChatMessageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteBusinessChatMessagesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteBusinessChatReportArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteConsultantReportArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteConsultantsForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteEatOutCstCategoriesForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteEatOutCstCategoryForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEatOutCstPostForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteEatOutCstPostLikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEatOutCstReportArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEduCenterCategoriesForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteEduCenterCategoryForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEduCenterPostFavoriteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEduCenterPostForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteEduCenterPostLikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEduCenterPostReplyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEduCenterReplyReportArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEduCenterVideoCategoriesForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteEduCenterVideoCategoryForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEduCenterVideoFavoriteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEduCenterVideoLikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEduCenterVideoReportArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEduCenterVideosForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteEducationCategoriesForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteEducationCategoryForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEducationReportArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEducationVideoFavoriteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEducationVideoLikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEducationVideosForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteFaqForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFaqsForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteInquireArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteJobSearchCategoriesForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteJobSearchFavoriteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteJobSearchPositionsForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteJobSearchReportArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteJobSearchsForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteJobSearchsForSeArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteJobSearchsLikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMallBoardCategoriesForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteMallBoardCategoryForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMallBoardPostFavoriteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMallBoardPostForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteMallBoardPostForEmployedArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteMallBoardPostLikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMallBoardReportArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteManyBoardPostRepliesForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteManyEduCenterRepliesForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteManyInquireForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteManyNoticePostRepliesForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteManySupportInfoRepliesForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteNoticeCategoriesForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteNoticeCategoryForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteNoticePostFavoriteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteNoticePostForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteNoticePostLikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteNoticePostReplyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteNoticeReplyReportArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteNotificationStoreForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePopupForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePrivateCertificatePostForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeletePrivateCertificatePostLikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePrivateCertificateReportArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSecondhandArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSecondhandCategoriesForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteSecondhandFavoriteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSecondhandLikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSecondhandsForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteSupportInfoCategoriesForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteSupportInfoCategoryForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSupportInfoPostFavoriteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSupportInfoPostForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteSupportInfoPostLikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSupportInfoPostReplyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSupportInfoReplyReportArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSurveyQuestionsForAdminArgs = {
  deleteIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  id: Scalars['ID']['input'];
};


export type MutationFindUserByPhoneArgs = {
  phoneNumber: Scalars['PhoneNumber']['input'];
  requestId: Scalars['ID']['input'];
};


export type MutationFinishedEduCenterVideoArgs = {
  videoId: Scalars['ID']['input'];
};


export type MutationFinishedEduCenterVideoForAdminArgs = {
  userId: Scalars['ID']['input'];
  videoId: Scalars['ID']['input'];
};


export type MutationFinishedEducationVideoArgs = {
  videoId: Scalars['ID']['input'];
};


export type MutationFinishedEducationVideoForAdminArgs = {
  userId: Scalars['ID']['input'];
  videoId: Scalars['ID']['input'];
};


export type MutationGetKakaoAccessTokenArgs = {
  code: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
};


export type MutationHandPaymentEduCenterVideoForAdminArgs = {
  data: EduCenterVideoPurchaseRequestInput;
  userId: Scalars['ID']['input'];
};


export type MutationIncrementBoardPostViewCountArgs = {
  id: Scalars['ID']['input'];
};


export type MutationIncrementEatOutCstPostViewCountArgs = {
  id: Scalars['ID']['input'];
};


export type MutationIncrementEduCenterPostViewCountArgs = {
  id: Scalars['ID']['input'];
};


export type MutationIncrementJobSearchsViewCountArgs = {
  id: Scalars['ID']['input'];
};


export type MutationIncrementMallBoardPostViewCountArgs = {
  id: Scalars['ID']['input'];
};


export type MutationIncrementNoticePostViewCountArgs = {
  id: Scalars['ID']['input'];
};


export type MutationIncrementPrivateCertificatePostViewCountArgs = {
  id: Scalars['ID']['input'];
};


export type MutationIncrementSupportInfoPostViewCountArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLeaveBusinessChatChannelArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLeaveChatChannelsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationLeavingUserArgs = {
  comment?: InputMaybe<Scalars['String']['input']>;
  reason: Scalars['String']['input'];
};


export type MutationLeavingUserForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLinkAppleArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  identityToken: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationLinkGoogleArgs = {
  accessToken: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};


export type MutationLinkKakaoArgs = {
  accessToken: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationLinkNaverArgs = {
  accessToken: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};


export type MutationPaymentApprovalArgs = {
  tid: Scalars['String']['input'];
};


export type MutationPinBoardPostsForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
  isPinned: Scalars['Boolean']['input'];
};


export type MutationPinEatOutCstPostsForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
  isPinned: Scalars['Boolean']['input'];
};


export type MutationPinEduCenterPostsForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
  isPinned: Scalars['Boolean']['input'];
};


export type MutationPinEduCenterVideosForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
  isPinned: Scalars['Boolean']['input'];
};


export type MutationPinEducationVideosForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
  isPinned: Scalars['Boolean']['input'];
};


export type MutationPinMallBoardPostsForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
  isPinned: Scalars['Boolean']['input'];
};


export type MutationPinNoticePostsForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
  isPinned: Scalars['Boolean']['input'];
};


export type MutationPinPrivateCertificatePostsForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
  isPinned: Scalars['Boolean']['input'];
};


export type MutationPinSupportInfoPostsForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
  isPinned: Scalars['Boolean']['input'];
};


export type MutationPurchaseCheckArgs = {
  merchant_uid: Scalars['String']['input'];
};


export type MutationPurchaseEndReqArgs = {
  merchant_uid: Scalars['String']['input'];
};


export type MutationPurchaseReqEduCenterVideoArgs = {
  data: EduCenterVideoPurchaseRequestInput;
};


export type MutationReOpenSecondhandArgs = {
  matchId: Scalars['ID']['input'];
};


export type MutationReadBusinessChatMessagesArgs = {
  channelId: Scalars['ID']['input'];
};


export type MutationReadNotificationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationRejectUserCompanyByAdminArgs = {
  userId: Scalars['ID']['input'];
};


export type MutationRemoveFcmTokenArgs = {
  fcmRegistrationToken: Scalars['String']['input'];
};


export type MutationReportViewResultArgs = {
  id: Scalars['ID']['input'];
  result: ReportViewResultEnum;
};


export type MutationReqEduCentverVideoCertificateArgs = {
  videoId: Scalars['ID']['input'];
};


export type MutationReqVimeoThumbnailActiveArgs = {
  pictureNumber: Scalars['Float']['input'];
  videoNumber: Scalars['Float']['input'];
};


export type MutationReqVimeoThumbnailUploadLinkArgs = {
  videoNumber: Scalars['Float']['input'];
};


export type MutationReqVimeoVideoUploadLinkArgs = {
  size: Scalars['Float']['input'];
};


export type MutationRequestAuthNumberArgs = {
  phoneNumber: Scalars['PhoneNumber']['input'];
};


export type MutationRequestEmailAuthNumberArgs = {
  email: Scalars['Email']['input'];
};


export type MutationSecondhandEndArgs = {
  channelId: Scalars['ID']['input'];
  secondhandId: Scalars['ID']['input'];
};


export type MutationSendBusinessChatMessageArgs = {
  data: BusinessChatMessageCreateInput;
};


export type MutationSendNotificationForAdminArgs = {
  data: NotificationCreateInput;
  isMarketing: Scalars['Boolean']['input'];
};


export type MutationSendNotificationStoreForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSetFcmTokenArgs = {
  data: UserFcmTokenAddInput;
};


export type MutationSetPinBusinessChatChannelArgs = {
  id: Scalars['ID']['input'];
  isPinned: Scalars['Boolean']['input'];
};


export type MutationSetStateBusinessChatChannelArgs = {
  id: Scalars['ID']['input'];
  state: ChatChannelState;
};


export type MutationSignInArgs = {
  loginId: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationSignInAppleArgs = {
  identityToken: Scalars['String']['input'];
};


export type MutationSignInGoogleArgs = {
  accessToken: Scalars['String']['input'];
};


export type MutationSignInKakaoArgs = {
  accessToken: Scalars['String']['input'];
};


export type MutationSignInNaverArgs = {
  accessToken: Scalars['String']['input'];
};


export type MutationSignUpArgs = {
  data: SignUpInput;
  emailRequestId: Scalars['ID']['input'];
  isMarketingNoti?: InputMaybe<Scalars['Boolean']['input']>;
  requestId: Scalars['ID']['input'];
};


export type MutationSignUpAppleArgs = {
  data: SocialSignUpInput;
  identityToken: Scalars['String']['input'];
};


export type MutationSignUpGoogleArgs = {
  accessToken: Scalars['String']['input'];
};


export type MutationSignUpKakaoArgs = {
  accessToken: Scalars['String']['input'];
};


export type MutationSignUpNaverArgs = {
  accessToken: Scalars['String']['input'];
};


export type MutationStopUserCompanyByAdminArgs = {
  userId: Scalars['ID']['input'];
};


export type MutationSubmitSurveyResponseArgs = {
  response: Array<SurveyResponseBaseInput>;
  surveyPostId: Scalars['ID']['input'];
};


export type MutationSuspendUserArgs = {
  id: Scalars['ID']['input'];
  suspendedEndAt: Scalars['DateTime']['input'];
  suspendedReason?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateAdminPostCategoryArgs = {
  data: AdminPostCategoryUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateBannerForAdminArgs = {
  data: BannerUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateBoardAuthForAdminArgs = {
  data: BoardAuthUpdateInput;
};


export type MutationUpdateBoardCategoryForAdminArgs = {
  data: BoardCategoryUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateBoardPostFilesForAdminArgs = {
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  id: Scalars['ID']['input'];
  thumbnailFileId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateBoardPostForAdminArgs = {
  data: BoardPostUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateBoardPostReplyArgs = {
  data: BoardReplyUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateBoardReplyReportArgs = {
  data: BoardReplyReportUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateBoardReplyReportForAdminArgs = {
  adminMemo?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  state?: InputMaybe<CommunityReportStateEnumType>;
};


export type MutationUpdateBusinessChatReportArgs = {
  data: BusinessChatReportUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateBusinessChatReportFilesArgs = {
  fileIds: Array<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationUpdateBusinessChatReportForAdminArgs = {
  adminMemo?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  state?: InputMaybe<ChatReportState>;
};


export type MutationUpdateConsultantApplyArgs = {
  data: ConsultantApplyUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateConsultantCategoryForAdminArgs = {
  data: ConsultantCategoryUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateConsultantForAdminArgs = {
  data: ConsultantUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateConsultantReportArgs = {
  data: ConsultantReportUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateConsultantReportForAdminArgs = {
  adminMemo?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  state?: InputMaybe<CommunityReportStateEnumType>;
};


export type MutationUpdateConsultantStateForAdminArgs = {
  id: Scalars['ID']['input'];
  state: ConsultantStateEnum;
};


export type MutationUpdateEatOutCstCategoryForAdminArgs = {
  data: EatOutCstCategoryUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateEatOutCstPostFilesForAdminArgs = {
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  id: Scalars['ID']['input'];
  thumbnailFileId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateEatOutCstPostForAdminArgs = {
  data: EatOutCstPostUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateEatOutCstPostStateForAdminArgs = {
  id: Scalars['ID']['input'];
  state: EatOutCstPostStateEnum;
};


export type MutationUpdateEatOutCstReportArgs = {
  data: EatOutCstReportUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateEatOutCstReportForAdminArgs = {
  adminMemo?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  state?: InputMaybe<CommunityReportStateEnumType>;
};


export type MutationUpdateEduCenterCategoryForAdminArgs = {
  data: EduCenterCategoryUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateEduCenterPostFilesForAdminArgs = {
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  id: Scalars['ID']['input'];
};


export type MutationUpdateEduCenterPostForAdminArgs = {
  data: EduCenterPostUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateEduCenterPostReplyArgs = {
  data: EduCenterReplyUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateEduCenterReplyReportArgs = {
  data: EduCenterReplyReportUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateEduCenterReplyReportForAdminArgs = {
  adminMemo?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  state?: InputMaybe<CommunityReportStateEnumType>;
};


export type MutationUpdateEduCenterVideoCategoryForAdminArgs = {
  data: EduCenterVideoCategoryUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateEduCenterVideoForAdminArgs = {
  data: EduCenterVideoUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateEduCenterVideoReportArgs = {
  data: EduCenterVideoReportUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateEduCenterVideoReportForAdminArgs = {
  adminMemo?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  state?: InputMaybe<CommunityReportStateEnumType>;
};


export type MutationUpdateEduCenterVideoStateForAdminArgs = {
  id: Scalars['ID']['input'];
  state: VideoStateEnum;
};


export type MutationUpdateEducationCategoryForAdminArgs = {
  data: EducationCategoryUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateEducationReportArgs = {
  data: EducationReportUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateEducationReportForAdminArgs = {
  adminMemo?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  state?: InputMaybe<CommunityReportStateEnumType>;
};


export type MutationUpdateEducationVideoForAdminArgs = {
  data: EducationVideoUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateEducationVideoStateForAdminArgs = {
  id: Scalars['ID']['input'];
  state: VideoStateEnum;
};


export type MutationUpdateFaqForAdminArgs = {
  data: FaqUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateInquireArgs = {
  data: InquireUpdateInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateJobSearchCategoryForAdminArgs = {
  data: JobSearchCategoryUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateJobSearchForAdminArgs = {
  data: JobSearchUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateJobSearchForSeArgs = {
  data: JobSearchUpdateInput;
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  id: Scalars['ID']['input'];
};


export type MutationUpdateJobSearchPositionForAdminArgs = {
  data: JobSearchPositionUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateJobSearchReportArgs = {
  data: JobSearchReportUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateJobSearchReportForAdminArgs = {
  adminMemo?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  state?: InputMaybe<CommunityReportStateEnumType>;
};


export type MutationUpdateJobSearchsStateForAdminArgs = {
  id: Scalars['ID']['input'];
  state: JobSearchStateEnum;
};


export type MutationUpdateMallBoardApplyArgs = {
  data: MallBoardApplyUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateMallBoardCategoryForAdminArgs = {
  data: MallBoardCategoryUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateMallBoardPostFilesForAdminArgs = {
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  id: Scalars['ID']['input'];
  thumbnailFileId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateMallBoardPostFilesForEmployedArgs = {
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  id: Scalars['ID']['input'];
  thumbnailFileId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateMallBoardPostForAdminArgs = {
  data: MallBoardPostUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateMallBoardPostForEmployedArgs = {
  data: MallBoardPostUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateMallBoardReportArgs = {
  data: MallBoardReportUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateMallBoardReportForAdminArgs = {
  adminMemo?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  state?: InputMaybe<CommunityReportStateEnumType>;
};


export type MutationUpdateMallBoardStateForAdminArgs = {
  id: Scalars['ID']['input'];
  state: MallBoardPostStateEnum;
};


export type MutationUpdateManyBoardAuthForAdminArgs = {
  data: Array<BoardAuthUpdateInput>;
};


export type MutationUpdateMeArgs = {
  data: UserUpdateInput;
};


export type MutationUpdateMyPageInfoArgs = {
  birthday?: InputMaybe<Scalars['Birthday']['input']>;
  newPassword?: InputMaybe<Scalars['String']['input']>;
  prePassword?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateMyPhoneArgs = {
  phoneNumber: Scalars['PhoneNumber']['input'];
  requestId: Scalars['ID']['input'];
};


export type MutationUpdateNoticeCategoryForAdminArgs = {
  data: NoticeCategoryUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateNoticePostFilesForAdminArgs = {
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  id: Scalars['ID']['input'];
  thumbnailFileId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateNoticePostForAdminArgs = {
  data: NoticePostUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateNoticePostReplyArgs = {
  data: NoticeReplyUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateNoticeReplyReportArgs = {
  data: NoticeReplyReportUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateNoticeReplyReportForAdminArgs = {
  adminMemo?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  state?: InputMaybe<CommunityReportStateEnumType>;
};


export type MutationUpdateNotificationStoreForAdminArgs = {
  data: NotificationStorageUpdateInput;
  id: Scalars['ID']['input'];
  recipient_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type MutationUpdatePopupForAdminArgs = {
  data: PopupUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePrivateCertificateApplyArgs = {
  data: PrivateCertificateApplyUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePrivateCertificatePostFilesForAdminArgs = {
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  id: Scalars['ID']['input'];
  thumbnailFileId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdatePrivateCertificatePostForAdminArgs = {
  data: PrivateCertificatePostUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePrivateCertificatePostStateForAdminArgs = {
  id: Scalars['ID']['input'];
  state: PrivateCertificatePostStateEnum;
};


export type MutationUpdatePrivateCertificateReportArgs = {
  data: PrivateCertificateReportUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePrivateCertificateReportForAdminArgs = {
  adminMemo?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  state?: InputMaybe<CommunityReportStateEnumType>;
};


export type MutationUpdateSecondhandArgs = {
  data: SecondhandUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSecondhandCategoryForAdminArgs = {
  data: SecondhandCategoryUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSecondhandForAdminArgs = {
  data: SecondhandUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateServiceManageArgs = {
  data: ServiceManageUpdateInput;
};


export type MutationUpdateSupportInfoCategoryForAdminArgs = {
  data: SupportInfoCategoryUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSupportInfoPostFilesForAdminArgs = {
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  id: Scalars['ID']['input'];
  thumbnailFileId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateSupportInfoPostForAdminArgs = {
  data: SupportInfoPostUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSupportInfoPostReplyArgs = {
  data: SupportInfoReplyUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSupportInfoReplyReportArgs = {
  data: SupportInfoReplyReportUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSupportInfoReplyReportForAdminArgs = {
  adminMemo?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  state?: InputMaybe<CommunityReportStateEnumType>;
};


export type MutationUpdateSurveyPostForAdminArgs = {
  data: SurveyPostUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSurveyPostStateForAdminArgs = {
  id: Scalars['ID']['input'];
  state: SurveyPostStateEnum;
};


export type MutationUpdateSurveyQuestionsForAdminArgs = {
  data: Array<SurveyQuestionUpdateInput>;
  deleteIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUserAdminMemoArgs = {
  id: Scalars['ID']['input'];
  memo: Scalars['String']['input'];
};


export type MutationUpdateUserCompanyByAdminArgs = {
  data: UserCompanyUpdateInput;
  userId: Scalars['ID']['input'];
};


export type MutationUpdateUserForAdminArgs = {
  data: UserUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadLinkSurveyResponseForAdminArgs = {
  id: Scalars['ID']['input'];
  responseLink: Scalars['String']['input'];
};


export type MutationValidateAuthNumberArgs = {
  authNumber: Scalars['String']['input'];
  phoneNumber: Scalars['PhoneNumber']['input'];
};


export type MutationValidateEmailAuthNumberArgs = {
  authNumber: Scalars['String']['input'];
  email: Scalars['Email']['input'];
};


export type MutationValidateFindEmailPhoneAuthArgs = {
  phoneNumber: Scalars['PhoneNumber']['input'];
  requestId: Scalars['ID']['input'];
};

/** 탈퇴 가능여부 */
export enum NonWithdrawalReasonEnum {
  /** 거래중인 상품이 존재 */
  BeingTradedState = 'BEING_TRADED_STATE',
  /** 탈퇴가능 */
  CanWithdraw = 'CAN_WITHDRAW'
}

/** 공지사항 */
export type Notice = {
  __typename?: 'Notice';
  /** 카테고리 */
  category?: Maybe<AdminPostCategory>;
  /** 내용 */
  content: Scalars['String']['output'];
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 타입별 변환모델 */
  node: AdminPostModel;
  /** 보이는 장소 */
  showPlace: AdminPostShowPlace;
  /** 상태 */
  state: AdminPostState;
  /** 제목 */
  title: Scalars['String']['output'];
  /** 타입 */
  type: AdminPostType;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 알림마당 카테고리 */
export type NoticeCategory = {
  __typename?: 'NoticeCategory';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 커뮤니티 카테고리 즐켜찾기 여부 */
  isFavorite: Scalars['Boolean']['output'];
  /** 커뮤니티 카테고리 이름 */
  name: Scalars['String']['output'];
  /** 커뮤니티 카테고리 배치 순서 */
  priority: Scalars['Int']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 알림마당 카테고리 생성 Input */
export type NoticeCategoryCreateInput = {
  /** 커뮤니티 카테고리 이름 */
  name: Scalars['String']['input'];
  /** 커뮤니티 카테고리 배치 순서 */
  priority?: InputMaybe<Scalars['Int']['input']>;
};

export type NoticeCategoryEdge = {
  __typename?: 'NoticeCategoryEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: NoticeCategory;
};

/** 알림마당 카테고리 필터 */
export type NoticeCategoryFilterInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 이름 */
  name?: InputMaybe<Array<StringFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 알림마당 카테고리 리스트 */
export type NoticeCategoryList = {
  __typename?: 'NoticeCategoryList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<NoticeCategoryEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 알림마당 카테고리 정렬 */
export type NoticeCategorySortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 이름 */
  name?: InputMaybe<SortInput>;
  /** 순서 */
  priority?: InputMaybe<IntSortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 알림마당 카테고리 수정 Input */
export type NoticeCategoryUpdateInput = {
  /** 커뮤니티 카테고리 이름 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 커뮤니티 카테고리 배치 순서 */
  priority?: InputMaybe<Scalars['Int']['input']>;
};

/** 알림마당 게시글 */
export type NoticePost = {
  __typename?: 'NoticePost';
  /** 작성자 */
  author: Member;
  /** 게시물 카테고리 */
  category?: Maybe<NoticeCategory>;
  /** 내용 */
  content: Scalars['String']['output'];
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 해당 게시물 스크랩수 */
  favoriteCnt: Scalars['Float']['output'];
  /** 이미지, 영상 목록 */
  files?: Maybe<Array<File>>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 해당 게시물 즐겨찾기(스크랩) 여부 */
  isFavorite: Scalars['Boolean']['output'];
  /** 나의 좋아요 여부 */
  isLike: Scalars['Boolean']['output'];
  isPinned?: Maybe<Scalars['Boolean']['output']>;
  /** 보이기 여부 */
  isVisible: Scalars['Boolean']['output'];
  /** 해당 게시물 좋아요 개수 */
  likeCnt: Scalars['Float']['output'];
  pinnedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 댓글 수 */
  replyCount: Scalars['Int']['output'];
  /** 썸네일 이미지 파일 */
  thumbnailFile?: Maybe<File>;
  /** 제목 */
  title?: Maybe<Scalars['String']['output']>;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
  /** 해당 게시물 조회수 */
  viewCnt: Scalars['Float']['output'];
};

/** 알림마당 게시글 생성 */
export type NoticePostCreateInput = {
  /** 커뮤니티 카테고리 ID */
  category__id?: InputMaybe<Scalars['ID']['input']>;
  /** 내용 */
  content: Scalars['String']['input'];
  /** 게시물 파일들 */
  file__ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** 썸네일 파일 ID */
  thumbnailFile__id?: InputMaybe<Scalars['ID']['input']>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
  /** 게시판 구분 */
  type: NoticePostTypeEnum;
};

export type NoticePostEdge = {
  __typename?: 'NoticePostEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: NoticePost;
};

/** 알림마당 게시글 필터 */
export type NoticePostFilterInput = {
  /** 작성자 이메일 */
  author__email?: InputMaybe<Array<StringFilterInput>>;
  /** 작성자 고유 id */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 작성자 이름 */
  author__name?: InputMaybe<Array<StringFilterInput>>;
  /** 카테고리 고유 id */
  category__id?: InputMaybe<Array<StringFilterInput>>;
  /** 카테고리 이름 */
  category__name?: InputMaybe<Array<StringFilterInput>>;
  /** 게시물 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 숨기기한 사용자 고유 id */
  hide__id?: InputMaybe<Array<IdFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 상단 고정 여부 */
  isPinned?: InputMaybe<Array<BooleanFilterInput>>;
  /** 숨김여부 */
  isVisible?: InputMaybe<Array<BooleanFilterInput>>;
  /** 좋아요 사용자 고유 id */
  likes__id?: InputMaybe<Array<IdFilterInput>>;
  /** 게시물 제목 */
  title?: InputMaybe<Array<StringFilterInput>>;
  /** 게시판 구분 */
  type?: InputMaybe<Array<NoticePostTypeFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 알림마당 게시물 목록 */
export type NoticePostList = {
  __typename?: 'NoticePostList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<NoticePostEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 알림마당 게시글 네비게이션(이전글/다음글) */
export type NoticePostNavigation = {
  __typename?: 'NoticePostNavigation';
  /** 이전글 ID */
  nextPostId?: Maybe<Scalars['ID']['output']>;
  /** input params */
  params?: Maybe<NoticePostNavigationParams>;
  /** 이전글 ID */
  prePostId?: Maybe<Scalars['ID']['output']>;
};

/** 알림마당 게시글 네비게이션 params */
export type NoticePostNavigationParams = {
  __typename?: 'NoticePostNavigationParams';
  /** 검색 베이스 */
  base?: Maybe<PostNaviBase>;
  /** 카테고리명 */
  category?: Maybe<Scalars['String']['output']>;
  /** 검색어 */
  search?: Maybe<Scalars['String']['output']>;
};

/** 알림마당 게시글 네비게이션 params */
export type NoticePostNavigationParamsInput = {
  /** 검색 베이스 */
  base?: InputMaybe<PostNaviBase>;
  /** 카테고리명 */
  category?: InputMaybe<Scalars['String']['input']>;
  /** 검색어 */
  search?: InputMaybe<Scalars['String']['input']>;
  /** 게시판 구분 */
  type?: InputMaybe<Scalars['String']['input']>;
};

/** 알림마당 게시글 정렬 */
export type NoticePostSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** 스크랩 수 */
  favoriteCount?: InputMaybe<IntSortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 좋아요수 */
  likeCount?: InputMaybe<IntSortInput>;
  /** 상단 고정된 날짜 */
  pinnedAt?: InputMaybe<SortInput>;
  /** 댓글수 */
  replyCount?: InputMaybe<IntSortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
  /** 조회수 정렬 */
  viewCount?: InputMaybe<IntSortInput>;
};

/** 알림마당 게시판 구분 */
export enum NoticePostTypeEnum {
  /** 아이디어 공모전 */
  IdeaContest = 'IDEA_CONTEST',
  /** 공지사항 */
  Notice = 'NOTICE',
  /** 보도자료 */
  ReportReferencs = 'REPORT_REFERENCS'
}

/** 알림마당 게시판 구분 필터 */
export type NoticePostTypeFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<NoticePostTypeEnum>;
  values?: InputMaybe<Array<NoticePostTypeEnum>>;
};

/** 알림마당 게시글 수정 */
export type NoticePostUpdateInput = {
  /** 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 보이기 여부 */
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** 알림마당 게시글 댓글 */
export type NoticeReply = {
  __typename?: 'NoticeReply';
  /** 작성자 */
  author: Member;
  /** 댓글 내용 */
  content: Scalars['String']['output'];
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 내 댓글 여부 */
  isMine: Scalars['Boolean']['output'];
  /** 좋아요 수 */
  likeCount: Scalars['Int']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 알림마당 게시글 댓글 생성 Input  */
export type NoticeReplyCreateInput = {
  /** 댓글 내용 */
  content: Scalars['String']['input'];
  /** 게시물 uuid (댓글일 경우만) */
  post__id?: InputMaybe<Scalars['ID']['input']>;
};

export type NoticeReplyEdge = {
  __typename?: 'NoticeReplyEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: NoticeReply;
};

/** 알림마당 게시글 필터 Input */
export type NoticeReplyFilterInput = {
  /** 작성자 uuid */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 댓글 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 관련 게시물 uuid */
  post__id?: InputMaybe<Array<IdFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 알림마당 게시글 댓글 리스트 */
export type NoticeReplyList = {
  __typename?: 'NoticeReplyList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<NoticeReplyEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 알림마당 댓글 신고정보 */
export type NoticeReplyReport = {
  __typename?: 'NoticeReplyReport';
  /** 관리자 메모 */
  adminMemo: Scalars['String']['output'];
  /** 작성자 */
  author: Member;
  /** 신고 카테고리 */
  category?: Maybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: Maybe<Scalars['String']['output']>;
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기타 예비용 필드 */
  etc?: Maybe<Scalars['String']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 신고 상태 */
  state: CommunityReportStateEnumType;
  /** 신고 커뮤니티 타겟 */
  targetId?: Maybe<Scalars['String']['output']>;
  /** 신고 타겟 타입 */
  type: CommunityReportTypeEnumType;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 알림마당 댓글 신고 생성 Input */
export type NoticeReplyReportCreateInput = {
  /** 신고 카테고리 */
  category?: InputMaybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 기타 예비용 필드 */
  etc?: InputMaybe<Scalars['String']['input']>;
  /** 신고 커뮤니티 타겟 */
  targetId?: InputMaybe<Scalars['String']['input']>;
  /** 신고 타겟 타입 */
  type?: InputMaybe<CommunityReportTypeEnumType>;
};

export type NoticeReplyReportEdge = {
  __typename?: 'NoticeReplyReportEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: NoticeReplyReport;
};

/** 알림마당 댓글 신고 리스트 필터 Input */
export type NoticeReplyReportFilterInput = {
  /** 작성자 이메일 */
  author__email?: InputMaybe<Array<StringFilterInput>>;
  /** 작성자 고유 id */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 작성자 이름 */
  author__name?: InputMaybe<Array<StringFilterInput>>;
  /** 신고 카테고리 */
  category?: InputMaybe<Array<CommunityReportCategoryFilterInput>>;
  /** 신고 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 기타 */
  etc?: InputMaybe<Array<StringFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 신고 상태 */
  state?: InputMaybe<Array<CommunityReportStateFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 알림마당 댓글 신고 리스트 */
export type NoticeReplyReportList = {
  __typename?: 'NoticeReplyReportList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<NoticeReplyReportEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 알림마당 댓글 신고 리스트 정렬 Input */
export type NoticeReplyReportSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 알림마당 댓글 신고 수정 Input */
export type NoticeReplyReportUpdateInput = {
  /** 신고 카테고리 */
  category?: InputMaybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 기타 예비용 필드 */
  etc?: InputMaybe<Scalars['String']['input']>;
};

/** 알림마당 게시글 정렬 Input */
export type NoticeReplySortInput = {
  /** 댓글 내용 정렬 */
  content?: InputMaybe<StringSortInput>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 알림마당 게시글 댓글 수정 Input  */
export type NoticeReplyUpdateInput = {
  /** 댓글 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
};

/** 알림 */
export type Notification = {
  __typename?: 'Notification';
  /** 클릭 액션 */
  action: NotificationAction;
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 이미지 URL 주소 */
  imageURL?: Maybe<Scalars['String']['output']>;
  /** 관리자 임의 전송 여부 */
  isCreatedForAdmin: Scalars['Boolean']['output'];
  /** 해당 알림 읽음 여부 */
  isRead: Scalars['Boolean']['output'];
  /** 메시지 */
  message: Scalars['String']['output'];
  /** 연관 데이터의 ID (타입을 참고하여 사용) */
  relationId?: Maybe<Scalars['ID']['output']>;
  /** 제목 */
  title?: Maybe<Scalars['String']['output']>;
  /** 타입 */
  type: NotificationType;
  /** 링크 URL 주소 (타입을 참고하여 사용) */
  url?: Maybe<Scalars['String']['output']>;
};

/** 알림 클릭 액션 */
export enum NotificationAction {
  /** 클릭 액션 없음 */
  None = 'NONE',
  /** 관련 페이지 이동, relationId 값 활용 */
  PageMove = 'PAGE_MOVE'
}

/** 알림 생성 데이터 */
export type NotificationCreateInput = {
  /** 알림 클릭 액션 */
  action: NotificationAction;
  /** 이미지 URL 주소 */
  imageURL?: InputMaybe<Scalars['String']['input']>;
  /** 메시지 */
  message: Scalars['String']['input'];
  /** 수신자 ID 목록 (없으면 해당 알림 타입 허용자에게 전부 발송) */
  recipientIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** 연관 데이터의 ID (타입을 참고하여 사용) */
  relationId?: InputMaybe<Scalars['ID']['input']>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
  /** 타입 */
  type: NotificationType;
  /** 링크 URL 주소 (타입을 참고하여 사용) */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type NotificationEdge = {
  __typename?: 'NotificationEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: Notification;
};

/** 알림 필터 */
export type NotificationFilterInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 이미지 URL 주소 */
  imageURL?: InputMaybe<Array<StringFilterInput>>;
  /** 관리자 임의 전송 여부 */
  isCreatedForAdmin?: InputMaybe<Array<BooleanFilterInput>>;
  /** 메시지 */
  message?: InputMaybe<Array<StringFilterInput>>;
  /** 수신자 ID */
  recipients__id?: InputMaybe<Array<IdFilterInput>>;
  /** 연관 데이터의 ID */
  relationId?: InputMaybe<Array<IdFilterInput>>;
  /** 제목 */
  title?: InputMaybe<Array<StringFilterInput>>;
  /** 타입 */
  type?: InputMaybe<Array<NotificationTypeFilterInput>>;
  /** 링크 URL 주소 */
  url?: InputMaybe<Array<StringFilterInput>>;
};

/** 알림 목록 */
export type NotificationList = {
  __typename?: 'NotificationList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<NotificationEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 알림 정렬 */
export type NotificationSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 이미지 URL 주소 */
  imageURL?: InputMaybe<StringSortInput>;
  /** 관리자 임의 전송 여부 */
  isCreatedForAdmin?: InputMaybe<SortInput>;
  /** 메시지 */
  message?: InputMaybe<StringSortInput>;
  /** 수신자 ID */
  recipients__id?: InputMaybe<SortInput>;
  /** 연관 데이터의 ID */
  relationId?: InputMaybe<SortInput>;
  /** 제목 */
  title?: InputMaybe<StringSortInput>;
  /** 타입 */
  type?: InputMaybe<NotificationTypeSortInput>;
  /** 링크 URL 주소 */
  url?: InputMaybe<StringSortInput>;
};

/** 알림 저장소 생성 데이터 */
export type NotificationStorageCreateInput = {
  /** 클릭 액션 */
  action: NotificationAction;
  /** 이미지  URL주소 */
  imageURL?: InputMaybe<Scalars['String']['input']>;
  /** 내용 */
  message?: InputMaybe<Scalars['String']['input']>;
  /** 연관 데이터의 ID */
  relationId?: InputMaybe<Scalars['ID']['input']>;
  /** 예약 발송 시간, null이면 즉시 */
  scheduledAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** 수신 타겟 */
  target: NotificationStorageTargetType;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
  /** 알림 타입 */
  type?: InputMaybe<NotificationType>;
  /** 링크  URL주소 */
  url?: InputMaybe<Scalars['String']['input']>;
};

/** 알림 필터 */
export type NotificationStorageFilterInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 이미지 URL 주소 */
  imageURL?: InputMaybe<Array<StringFilterInput>>;
  /** 전송 여부 */
  isSend?: InputMaybe<Array<BooleanFilterInput>>;
  /** 메시지 */
  message?: InputMaybe<Array<StringFilterInput>>;
  /** 수신자 ID */
  recipients__id?: InputMaybe<Array<IdFilterInput>>;
  /** 연관 데이터의 ID */
  relationId?: InputMaybe<Array<IdFilterInput>>;
  /** 예약 발송 시간 */
  scheduledAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 수신 타겟 */
  target?: InputMaybe<Array<NotificationStorageTargetType>>;
  /** 제목 */
  title?: InputMaybe<Array<StringFilterInput>>;
  /** 타입 */
  type?: InputMaybe<Array<NotificationTypeFilterInput>>;
  /** 링크 URL 주소 */
  url?: InputMaybe<Array<StringFilterInput>>;
};

/** 알림 저장소 목록 */
export type NotificationStorageList = {
  __typename?: 'NotificationStorageList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<NotificationStorageModelEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 알림 저장소 */
export type NotificationStorageModel = {
  __typename?: 'NotificationStorageModel';
  /** 클릭 액션 */
  action: NotificationAction;
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 이미지  URL주소 */
  imageURL?: Maybe<Scalars['String']['output']>;
  /** 전송 여부 */
  isSend: Scalars['Boolean']['output'];
  /** 내용 */
  message?: Maybe<Scalars['String']['output']>;
  /** 연관 데이터의 ID */
  relationId?: Maybe<Scalars['ID']['output']>;
  /** 예약 발송 시간, null이면 즉시 */
  scheduledAt?: Maybe<Scalars['DateTime']['output']>;
  /** 수신 타겟 */
  target?: Maybe<NotificationStorageTargetType>;
  /** 제목 */
  title?: Maybe<Scalars['String']['output']>;
  /** 알림 타입 */
  type?: Maybe<NotificationType>;
  /** 링크  URL주소 */
  url?: Maybe<Scalars['String']['output']>;
};

export type NotificationStorageModelEdge = {
  __typename?: 'NotificationStorageModelEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: NotificationStorageModel;
};

/** 알림 저장소 정렬 */
export type NotificationStorageSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 이미지 URL 주소 */
  imageURL?: InputMaybe<StringSortInput>;
  /** 메시지 */
  message?: InputMaybe<StringSortInput>;
  /** 수신자 ID */
  recipients__id?: InputMaybe<SortInput>;
  /** 연관 데이터의 ID */
  relationId?: InputMaybe<SortInput>;
  /** 예약 발송 시간 */
  scheduledAt?: InputMaybe<Array<SortInput>>;
  /** 제목 */
  title?: InputMaybe<StringSortInput>;
  /** 타입 */
  type?: InputMaybe<NotificationTypeSortInput>;
  /** 링크 URL 주소 */
  url?: InputMaybe<StringSortInput>;
};

/** 알림 타겟 */
export enum NotificationStorageTargetType {
  /** 전체 */
  All = 'ALL',
  /** 안드 유저만 */
  Android = 'ANDROID',
  /** 특정인원 */
  Specific = 'SPECIFIC',
  /** iOS유저만 */
  IOs = 'iOS'
}

/** 알림 저장소 수정 데이터 */
export type NotificationStorageUpdateInput = {
  /** 클릭 액션 */
  action?: InputMaybe<NotificationAction>;
  /** 이미지  URL주소 */
  imageURL?: InputMaybe<Scalars['String']['input']>;
  /** 내용 */
  message?: InputMaybe<Scalars['String']['input']>;
  /** 연관 데이터의 ID */
  relationId?: InputMaybe<Scalars['ID']['input']>;
  /** 예약 발송 시간, null이면 즉시 */
  scheduledAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** 수신 타겟 */
  target?: InputMaybe<NotificationStorageTargetType>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
  /** 알림 타입 */
  type?: InputMaybe<NotificationType>;
  /** 링크  URL주소 */
  url?: InputMaybe<Scalars['String']['input']>;
};

export enum NotificationType {
  /** 채팅 알림 */
  Chat = 'CHAT',
  /** 외식컨설팅 */
  Consulting = 'CONSULTING',
  /** 평생교육원 */
  EduCenter = 'EDU_CENTER',
  /** 문의 관련 알림 */
  Inquire = 'INQUIRE',
  /** 부가혜택몰 */
  MallBoard = 'MALL_BOARD',
  /** 마케팅 알림 (이벤트, 광고 등) */
  Marketing = 'MARKETING',
  /** 마이페이지 */
  MyPage = 'MY_PAGE',
  /** 공지사항 알림 */
  Notice = 'NOTICE',
  /** 중고거래 */
  Secondhand = 'SECONDHAND',
  /** 패널설문조사 */
  Survey = 'SURVEY'
}

/** 알림 타입 필터 */
export type NotificationTypeFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<NotificationType>;
  values?: InputMaybe<Array<NotificationType>>;
};

/** 알림 타입 정렬 */
export type NotificationTypeSortInput = {
  case?: InputMaybe<Array<NotificationType>>;
  nulls?: InputMaybe<Nulls>;
  order: Order;
};

/** 정렬 시 null 순서 */
export enum Nulls {
  /** null 먼저 */
  First = 'FIRST',
  /** null 마지막에 */
  Last = 'LAST'
}

/** 숫자 필터 연산자 */
export enum NumberFilterOperators {
  Between = 'BETWEEN',
  Equal = 'EQUAL',
  GreaterThan = 'GREATER_THAN',
  GreaterThanEqual = 'GREATER_THAN_EQUAL',
  In = 'IN',
  IsNotNull = 'IS_NOT_NULL',
  IsNull = 'IS_NULL',
  LessThan = 'LESS_THAN',
  LessThanEqual = 'LESS_THAN_EQUAL',
  NotBetween = 'NOT_BETWEEN',
  NotEqual = 'NOT_EQUAL',
  NotIn = 'NOT_IN'
}

export type OmitObjectType = {
  /** 컨설턴트 */
  consultant__id?: InputMaybe<Array<IdFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 상태 */
  state?: InputMaybe<Array<ConsultantApplyStateEnumFilter>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** OpenSource모델 */
export type OpenSourceModel = {
  __typename?: 'OpenSourceModel';
  /** 이메일 */
  email?: Maybe<Scalars['String']['output']>;
  /** 라이센스 URL */
  licenseFileUrl?: Maybe<Scalars['String']['output']>;
  /** 라이센스 종류 */
  licenses?: Maybe<Scalars['String']['output']>;
  /** 소스명 */
  name?: Maybe<Scalars['String']['output']>;
  /** 게시자 */
  publisher?: Maybe<Scalars['String']['output']>;
  /** 저장소 */
  repository?: Maybe<Scalars['String']['output']>;
};

/** 정렬 순서 */
export enum Order {
  /** 오름차순 */
  Ascending = 'ASCENDING',
  /** 내림차순 */
  Descending = 'DESCENDING'
}

/** 페이지 정보 */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** 현재 페이지의 마지막 데이터 커서 */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** 다음 페이지 존재 여부 */
  hasNextPage: Scalars['Boolean']['output'];
  /** 이전 페이지 존재 여부 */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** 현재 페이지의 처음 데이터 커서 */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** 결제 요청 응답 */
export type PaymentApprovalResponse = {
  __typename?: 'PaymentApprovalResponse';
  /** 금액 */
  amount: Scalars['Float']['output'];
  /** 상품명 */
  goodsName: Scalars['String']['output'];
  /** 고유 주문번호 */
  orderId: Scalars['String']['output'];
  /** 결과코드 */
  resultCode: Scalars['String']['output'];
  /** 결과메세지 */
  resultMsg: Scalars['String']['output'];
  /** tid */
  tid: Scalars['String']['output'];
};

/** 팝업 */
export type Popup = {
  __typename?: 'Popup';
  /** 클릭 액션 */
  action: AdminPostAction;
  /** 카테고리 */
  category?: Maybe<AdminPostCategory>;
  /** 내용 */
  content: Scalars['String']['output'];
  /** 커버 이미지 */
  coverUrl: Scalars['String']['output'];
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 링크 URL */
  linkUrl?: Maybe<Scalars['String']['output']>;
  /** 타입별 변환모델 */
  node: AdminPostModel;
  /** 우선순위 */
  priority?: Maybe<Scalars['Int']['output']>;
  /**
   * 게시 종료일
   * 없을시 2999-12-31 23:59:59.000 +0900 으로 생성
   */
  publishingPeriodEndAt: Scalars['DateTime']['output'];
  /**
   * 게시 시작일
   * 없을시 1990-01-01 00:00:00.000 +0900 으로 생성
   */
  publishingPeriodStartAt: Scalars['DateTime']['output'];
  /** 보이는 장소 */
  showPlace: AdminPostShowPlace;
  /** 상태 */
  state: AdminPostState;
  /** 제목 */
  title: Scalars['String']['output'];
  /** 타입 */
  type: AdminPostType;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 팝업 생성 데이터 */
export type PopupCreateInput = {
  /** 클릭 액션 */
  action: AdminPostAction;
  /** 카테고리 ID */
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  /** 내용 */
  content: Scalars['String']['input'];
  /** 커버 이미지 */
  coverUrl: Scalars['String']['input'];
  /** 이동 URL */
  linkUrl?: InputMaybe<Scalars['String']['input']>;
  /** 우선순위 */
  priority?: InputMaybe<Scalars['Int']['input']>;
  /**
   * 게시 종료일
   * 없을시 2999-12-31 23:59:59.000 +0900 으로 생성
   */
  publishingPeriodEndAt: Scalars['DateTime']['input'];
  /**
   * 게시 시작일
   * 없을시 1990-01-01 00:00:00.000 +0900 으로 생성
   */
  publishingPeriodStartAt: Scalars['DateTime']['input'];
  /** 보이는 장소 */
  showPlace: AdminPostShowPlace;
  /** 상태 */
  state?: InputMaybe<AdminPostState>;
  /** 제목 */
  title: Scalars['String']['input'];
};

/** 팝업 수정 데이터 */
export type PopupUpdateInput = {
  /** 클릭 액션 */
  action?: InputMaybe<AdminPostAction>;
  /** 카테고리 ID */
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  /** 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 커버 이미지 */
  coverUrl?: InputMaybe<Scalars['String']['input']>;
  /** 이동 URL */
  linkUrl?: InputMaybe<Scalars['String']['input']>;
  /** 우선순위 */
  priority?: InputMaybe<Scalars['Int']['input']>;
  /**
   * 게시 종료일
   * 없을시 2999-12-31 23:59:59.000 +0900 으로 생성
   */
  publishingPeriodEndAt?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * 게시 시작일
   * 없을시 1990-01-01 00:00:00.000 +0900 으로 생성
   */
  publishingPeriodStartAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** 보이는 장소 */
  showPlace?: InputMaybe<AdminPostShowPlace>;
  /** 상태 */
  state?: InputMaybe<AdminPostState>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** 게시글 네비 베이스 타겟 */
export enum PostNaviBase {
  /** 기본 베이스 */
  Common = 'COMMON',
  /** 스크랩 */
  Favorite = 'FAVORITE',
  /** 좋아요 */
  Like = 'LIKE',
  /** 보기/시청 */
  View = 'VIEW'
}

/** 민간자격증 신청 정보 */
export type PrivateCertificateApply = {
  __typename?: 'PrivateCertificateApply';
  /** 관리자 메모 */
  adminMemo: Scalars['String']['output'];
  /** 신청자 정보 */
  author: Member;
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 신청자 정보 */
  privateCertificate: PrivateCertificatePost;
  /** 민간자격증 신청 상태 */
  state: PrivateCertificateApplyStateEnum;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

export type PrivateCertificateApplyEdge = {
  __typename?: 'PrivateCertificateApplyEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: PrivateCertificateApply;
};

/** 민간자격증 신청 리스트 필터 */
export type PrivateCertificateApplyFilterInput = {
  /** 신청자ID */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 신청자 이름 */
  author__name?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 민간자격증 */
  mallBoard__id?: InputMaybe<Array<IdFilterInput>>;
  /** 상태 */
  state?: InputMaybe<Array<PrivateCertificateApplyStateEnumFilter>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 민간자격증 신청 리스트 */
export type PrivateCertificateApplyList = {
  __typename?: 'PrivateCertificateApplyList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<PrivateCertificateApplyEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 민간자격증 나의 신청 리스트 필터 */
export type PrivateCertificateApplyMeFilterInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 민간자격증 */
  mallBoard__id?: InputMaybe<Array<IdFilterInput>>;
  /** 상태 */
  state?: InputMaybe<Array<PrivateCertificateApplyStateEnumFilter>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 민간자격증 신청 리스트 정렬 */
export type PrivateCertificateApplySortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 민간자격증 신청 상태 */
export enum PrivateCertificateApplyStateEnum {
  /** 신청함 */
  Apply = 'APPLY',
  /** 종료 */
  End = 'END'
}

/** 민간자격증 신청 상태 필터 */
export type PrivateCertificateApplyStateEnumFilter = {
  operator: EnumFilterOperators;
  value?: InputMaybe<PrivateCertificateApplyStateEnum>;
  values?: InputMaybe<Array<PrivateCertificateApplyStateEnum>>;
};

/** 민간자격증 신청 수정 */
export type PrivateCertificateApplyUpdateInput = {
  adminMemo?: InputMaybe<Scalars['String']['input']>;
  /** 상태 */
  state?: InputMaybe<PrivateCertificateApplyStateEnum>;
};

/** 민간자격증 카테고리 */
export type PrivateCertificateCategory = {
  __typename?: 'PrivateCertificateCategory';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 커뮤니티 카테고리 즐켜찾기 여부 */
  isFavorite: Scalars['Boolean']['output'];
  /** 커뮤니티 카테고리 이름 */
  name: Scalars['String']['output'];
  /** 커뮤니티 카테고리 배치 순서 */
  priority: Scalars['Int']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

export type PrivateCertificateCategoryEdge = {
  __typename?: 'PrivateCertificateCategoryEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: PrivateCertificateCategory;
};

/** 민간자격증 게시글 */
export type PrivateCertificatePost = {
  __typename?: 'PrivateCertificatePost';
  /** 민간자격증(EXAM)신청 링크 */
  applyLinkUrl: Scalars['String']['output'];
  /** 작성자 */
  author: Member;
  /** 게시물 카테고리 */
  category?: Maybe<PrivateCertificateCategory>;
  /** 내용 */
  content: Scalars['String']['output'];
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 이미지, 영상 목록 */
  files?: Maybe<Array<File>>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 진행중인 신청건이 있는지 여부 */
  isApply: Scalars['Boolean']['output'];
  /** 나의 좋아요 여부 */
  isLike: Scalars['Boolean']['output'];
  isPinned?: Maybe<Scalars['Boolean']['output']>;
  /** 보이기 여부 */
  isVisible: Scalars['Boolean']['output'];
  /** 해당 게시물 좋아요 개수 */
  likeCnt: Scalars['Float']['output'];
  pinnedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 댓글 수 */
  replyCount: Scalars['Int']['output'];
  /** 썸네일 이미지 파일 */
  thumbnailFile?: Maybe<File>;
  /** 제목 */
  title?: Maybe<Scalars['String']['output']>;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
  /** 해당 게시물 조회수 */
  viewCnt: Scalars['Float']['output'];
};

/** 민간자격증 게시글 생성 */
export type PrivateCertificatePostCreateInput = {
  /** 민간자격증(EXAM)신청 링크 */
  applyLinkUrl: Scalars['String']['input'];
  /** 커뮤니티 카테고리 ID */
  category__id?: InputMaybe<Scalars['ID']['input']>;
  /** 내용 */
  content: Scalars['String']['input'];
  /** 게시물 파일들 */
  file__ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** 썸네일 파일 ID */
  thumbnailFile__id?: InputMaybe<Scalars['ID']['input']>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PrivateCertificatePostEdge = {
  __typename?: 'PrivateCertificatePostEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: PrivateCertificatePost;
};

/** 민간자격증 게시글 필터 */
export type PrivateCertificatePostFilterInput = {
  /** 작성자 이메일 */
  author__email?: InputMaybe<Array<StringFilterInput>>;
  /** 작성자 고유 id */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 작성자 이름 */
  author__name?: InputMaybe<Array<StringFilterInput>>;
  /** 카테고리 고유 id */
  category__id?: InputMaybe<Array<StringFilterInput>>;
  /** 카테고리 이름 */
  category__name?: InputMaybe<Array<StringFilterInput>>;
  /** 게시물 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 숨기기한 사용자 고유 id */
  hide__id?: InputMaybe<Array<IdFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 상단 고정 여부 */
  isPinned?: InputMaybe<Array<BooleanFilterInput>>;
  /** 숨김여부 */
  isVisible?: InputMaybe<Array<BooleanFilterInput>>;
  /** 좋아요 사용자 고유 id */
  likes__id?: InputMaybe<Array<IdFilterInput>>;
  /** 게시물 제목 */
  title?: InputMaybe<Array<StringFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 민간자격증 게시물 목록 */
export type PrivateCertificatePostList = {
  __typename?: 'PrivateCertificatePostList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<PrivateCertificatePostEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 민간자격증 게시글 네비게이션(이전글/다음글) */
export type PrivateCertificatePostNavigation = {
  __typename?: 'PrivateCertificatePostNavigation';
  /** 이전글 ID */
  nextPostId?: Maybe<Scalars['ID']['output']>;
  /** input params */
  params?: Maybe<PrivateCertificatePostNavigationParams>;
  /** 이전글 ID */
  prePostId?: Maybe<Scalars['ID']['output']>;
};

/** 민간자격증 게시글 네비게이션 params */
export type PrivateCertificatePostNavigationParams = {
  __typename?: 'PrivateCertificatePostNavigationParams';
  /** 검색 베이스 */
  base?: Maybe<PostNaviBase>;
  /** 카테고리명 */
  category?: Maybe<Scalars['String']['output']>;
  /** 검색어 */
  search?: Maybe<Scalars['String']['output']>;
};

/** 민간자격증 게시글 네비게이션 input params */
export type PrivateCertificatePostNavigationParamsInput = {
  /** 검색 베이스 */
  base?: InputMaybe<PostNaviBase>;
  /** 카테고리명 */
  category?: InputMaybe<Scalars['String']['input']>;
  /** 검색어 */
  search?: InputMaybe<Scalars['String']['input']>;
};

/** 민간자격증 게시글 정렬 */
export type PrivateCertificatePostSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** 스크랩 수 */
  favoriteCount?: InputMaybe<IntSortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 좋아요수 */
  likeCount?: InputMaybe<IntSortInput>;
  /** 상단 고정된 날짜 */
  pinnedAt?: InputMaybe<SortInput>;
  /** 댓글수 */
  replyCount?: InputMaybe<IntSortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
  /** 조회수 정렬 */
  viewCount?: InputMaybe<IntSortInput>;
};

/** 민간자격증 게시글 상태 */
export enum PrivateCertificatePostStateEnum {
  /** 검토중 */
  OnReview = 'ON_REVIEW',
  /** 게시중 */
  Publishing = 'PUBLISHING',
  /** 심사거절 */
  Reject = 'REJECT',
  /** 게시중지 */
  ViewStop = 'VIEW_STOP'
}

/** 민간자격증 게시글 수정 */
export type PrivateCertificatePostUpdateInput = {
  /** 민간자격증(EXAM)신청 링크 */
  applyLinkUrl?: InputMaybe<Scalars['String']['input']>;
  /** 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 보이기 여부 */
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** 평생교육원-민간자격증 신고정보 */
export type PrivateCertificateReport = {
  __typename?: 'PrivateCertificateReport';
  /** 관리자 메모 */
  adminMemo: Scalars['String']['output'];
  /** 작성자 */
  author: Member;
  /** 신고 카테고리 */
  category?: Maybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: Maybe<Scalars['String']['output']>;
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기타 예비용 필드 */
  etc?: Maybe<Scalars['String']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 신고 상태 */
  state: CommunityReportStateEnumType;
  /** 타겟 정보 */
  target: PrivateCertificatePost;
  /** 신고 커뮤니티 타겟 */
  targetId?: Maybe<Scalars['String']['output']>;
  /** 신고 타겟 타입 */
  type: CommunityReportTypeEnumType;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 평생교육원-민간자격증 신고 생성 Input */
export type PrivateCertificateReportCreateInput = {
  /** 신고 카테고리 */
  category?: InputMaybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 기타 예비용 필드 */
  etc?: InputMaybe<Scalars['String']['input']>;
  /** 신고 커뮤니티 타겟 */
  targetId?: InputMaybe<Scalars['String']['input']>;
  /** 신고 타겟 타입 */
  type?: InputMaybe<CommunityReportTypeEnumType>;
};

export type PrivateCertificateReportEdge = {
  __typename?: 'PrivateCertificateReportEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: PrivateCertificateReport;
};

/** 평생교육원-민간자격증 신고 리스트 필터 Input */
export type PrivateCertificateReportFilterInput = {
  /** 작성자 이메일 */
  author__email?: InputMaybe<Array<StringFilterInput>>;
  /** 작성자 고유 id */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 작성자 이름 */
  author__name?: InputMaybe<Array<StringFilterInput>>;
  /** 신고 카테고리 */
  category?: InputMaybe<Array<CommunityReportCategoryFilterInput>>;
  /** 신고 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 기타 */
  etc?: InputMaybe<Array<StringFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 신고 상태 */
  state?: InputMaybe<Array<CommunityReportStateFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 평생교육원-민간자격증 신고 리스트 */
export type PrivateCertificateReportList = {
  __typename?: 'PrivateCertificateReportList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<PrivateCertificateReportEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 평생교육원-민간자격증 신고 리스트 정렬 Input */
export type PrivateCertificateReportSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 평생교육원-민간자격증 신고 수정 Input */
export type PrivateCertificateReportUpdateInput = {
  /** 신고 카테고리 */
  category?: InputMaybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 기타 예비용 필드 */
  etc?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  /** 내 평생교육원 영상 신고 목록 조회 */
  EduCenterVideoReports: EduCenterVideoReportList;
  /** 내 교육 영상 신고 목록 조회 */
  EducationReports: EducationReportList;
  /** 내 평생교육원-민간자격증 신고 목록 조회 */
  PrivateCertificateReports: PrivateCertificateReportList;
  /**
   * 관리자가 작성한 게시물을 조회합니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 해당 게시물을 찾을 수 없습니다.
   */
  adminPost: AdminPost;
  adminPostCategories: Array<AdminPostCategory>;
  /** 관리자가 올린 게시글 네비게이션(이전글/다음글) */
  adminPostNavigation: AdminPostNavigation;
  /**
   * 관리자가 작성한 게시물 목록을 가져옵니다.
   *
   * [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
   */
  adminPosts: AdminPostList;
  /**
   * 부 관리자 목록을 가져옵니다.
   *
   * [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  admins: UserList;
  /** 게시판 권한 리스트 - 슈퍼관리자 용 */
  boardAuthsForAdmin: Array<BoardAuthModel>;
  /** 외식정보 게시글 카테고리 목록 조회 */
  boardCategories: BoardCategoryList;
  /** 외식정보 게시글 카테고리 단일 조회 */
  boardCategory: BoardCategory;
  /** 외식정보 게시글 모든 카테고리 */
  boardCategoryAll: Array<BoardCategory>;
  /** 외식정보 게시물 단일 조회 */
  boardPost: BoardPost;
  /** 외식정보 게시물 단일 조회 - 관리자 권한 */
  boardPostForAdmin: BoardPost;
  /** 외식정보 게시글 네비게이션(이전글/다음글) */
  boardPostNavigation: BoardPostNavigation;
  /** 외식정보 게시물 댓글 목록 조회 */
  boardPostReplies: BoardReplyList;
  /** 외식정보 게시물 댓글 단일 조회 */
  boardPostReply: BoardReply;
  /** 외식정보 게시물 목록 조회 */
  boardPosts: BoardPostList;
  /** 외식정보 게시물 목록 조회 - 관리자 권한 */
  boardPostsForAdmin: BoardPostList;
  /** 외식정보 댓글/게시글 신고 단일 조회 */
  boardReplyReport: BoardReplyReport;
  /** 외식정보 댓글/게시글 신고 단일 조회 - 관리자용 */
  boardReplyReportForAdmin: BoardReplyReport;
  /** 외식정보 댓글/게시글 신고 목록 조회 - 관리자용 */
  boardReplyReportsForAdmin: BoardReplyReportList;
  /**
   * 비즈니스 채널을 조회합니다. 관리자 외에는 채널의 참여자만 조회할 수 있습니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 존재하지 않는 채널입니다.
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  businessChatChannel: BChatChannel;
  /**
   * 전체 비즈니스 채널 목록을 조회합니다. 관리자 외에는 사용할 수 없습니다.
   *
   * [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  businessChatChannelsForAdmin: BChatChannelList;
  /**
   * 특정 비즈니스 채팅 메시지를 조회합니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 존재하지 않는 메시지입니다.
   * - `FORBIDDEN`: 권한이 없습니다.
   * - `BAD_USER_INPUT`: 차단된 사용자의 메시지입니다.
   */
  businessChatMessage: BChatMessage;
  /**
   * 특정 비즈니스 채널의 메시지 목록을 조회합니다.
   *
   * [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
   *
   * **에러 코드**
   * - `NOT_FOUND`: 존재하지 않는 채널입니다.
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  businessChatMessages: BChatMessageList;
  /**
   * 비즈니스 채팅 메시지 목록을 모두 조회합니다. 관리자 외에 사용할 수 없습니다.
   *
   * [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  businessChatMessagesForAdmin: BChatMessageList;
  /**
   * 특정 비즈니스 채널의 Payload 리스트를 조회합니다.
   *
   * [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
   *
   * **에러 코드**
   * - `NOT_FOUND`: 존재하지 않는 채널입니다.
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  businessChatPayLoads: BChatMessageFileList;
  /** 비즈니스 채팅 신고 단일 조회 */
  businessChatReport: BusinessChatReport;
  /** 비즈니스 채팅 신고 단일 조회 - 관리자용 */
  businessChatReportForAdmin: BusinessChatReport;
  /** 비즈니스 채팅 신고 목록 조회 - 관리자용 */
  businessChatReportsForAdmin: BusinessChatReportList;
  /** 외식기업 신청 정보 리스트 - 관리자권한 */
  companyAppliesByAdmin?: Maybe<UserCompanyApplyList>;
  /** 특정 유저의 외식기업 정보 - 관리자권한 */
  companyByAdmin?: Maybe<UserCompany>;
  /** 외식컨설팅·인증 */
  consultant: Consultant;
  /** 외식 컨설턴트 신청 리스트 - 관리자용 */
  consultantAppliesForAdmin: ConsultantApplyList;
  /** 내가 신청한 외식 컨설턴트 신청 리스트 */
  consultantAppliesMe: ConsultantApplyList;
  /** 외식 컨설턴트 신청 정보 - 관리자용 */
  consultantApplyForAdmin: ConsultantApply;
  /** 컨선턴트 카테고리 전체 */
  consultantCategoryAll: Array<ConsultantCategory>;
  /** 외식컨설팅·인증 - 관리자권한 */
  consultantForAdmin: Consultant;
  /** 컨설턴트 게시글 네비게이션(이전글/다음글) */
  consultantNavigation: ConsultantNavigation;
  /** 컨설턴트 신고 단일 조회 */
  consultantReport: ConsultantReport;
  /** 컨설턴트 신고 단일 조회 - 관리자용 */
  consultantReportForAdmin: ConsultantReport;
  /** 컨설턴트 신고 목록 조회 - 관리자용 */
  consultantReportsForAdmin: ConsultantReportList;
  /** 외식컨설팅·인증 리스트 */
  consultants: ConsultantList;
  /** 외식컨설팅·인증 리스트 - 관리자권한 */
  consultantsForAdmin: ConsultantList;
  /** 외식컨설팅 게시글 카테고리 목록 조회 */
  eatOutCstCategories: EatOutCstCategoryList;
  /** 외식컨설팅 게시글 카테고리 단일 조회 */
  eatOutCstCategory: EatOutCstCategory;
  /** 외식컨설팅 카테고리 목록 */
  eatOutCstCategoryAll: Array<EatOutCstCategory>;
  /** 외식컨설팅 게시물 단일 조회 */
  eatOutCstPost: EatOutCstPost;
  /** 외식컨설팅 게시물 단일 조회 - 관리자권한 */
  eatOutCstPostForAdmin: EatOutCstPost;
  /** 외식컨설팅 게시글 네비게이션(이전글/다음글) */
  eatOutCstPostNavigation: EatOutCstPostNavigation;
  /** 외식컨설팅 게시물 목록 조회 */
  eatOutCstPosts: EatOutCstPostList;
  /** 외식컨설팅 게시물 목록 조회 - 관리자 권한 */
  eatOutCstPostsForAdmin: EatOutCstPostList;
  /** 외식컨설팅 신고 단일 조회 */
  eatOutCstReport: EatOutCstReport;
  /** 외식컨설팅 신고 단일 조회 - 관리자용 */
  eatOutCstReportForAdmin: EatOutCstReport;
  /** 외식컨설팅 신고 목록 조회 - 관리자용 */
  eatOutCstReportsForAdmin: EatOutCstReportList;
  /** 평생교육원 게시글 카테고리 목록 조회 */
  eduCenterCategories: EduCenterCategoryList;
  /** 평생교육원 게시글 카테고리 단일 조회 */
  eduCenterCategory: EduCenterCategory;
  /** 평생교육원 게시글 카테고리(전체반환) */
  eduCenterCategoryAll: Array<EduCenterCategory>;
  /** 평생교육원 게시물 단일 조회 */
  eduCenterPost: EduCenterPost;
  /** 평생교육원 게시물 단일 조회 - 관리자 권한 */
  eduCenterPostForAdmin: EduCenterPost;
  /** 평생교육원 게시글 네비게이션(이전글/다음글) */
  eduCenterPostNavigation: EduCenterPostNavigation;
  /** 평생교육원 게시물 댓글 목록 조회 */
  eduCenterPostReplies: EduCenterReplyList;
  /** 평생교육원 게시물 댓글 단일 조회 */
  eduCenterPostReply: EduCenterReply;
  /** 평생교육원 게시물 목록 조회 */
  eduCenterPosts: EduCenterPostList;
  /** 평생교육원 게시물 목록 조회 - 관리자 권한 */
  eduCenterPostsForAdmin: EduCenterPostList;
  /** 외식평생교육원-게시글 댓글/게시글 신고 단일 조회 */
  eduCenterReplyReport: EduCenterReplyReport;
  /** 외식평생교육원-게시글 댓글/게시글 신고 단일 조회 - 관리자용 */
  eduCenterReplyReportForAdmin: EduCenterReplyReport;
  /** 외식평생교육원-게시글 댓글/게시글 신고 목록 조회 - 관리자용 */
  eduCenterReplyReportsForAdmin: EduCenterReplyReportList;
  /** 평생교육원 영상 정보 */
  eduCenterVideo: EduCenterVideo;
  /** 평생교육원 영상 카테고리 리스트(전체반환) */
  eduCenterVideoCategoryAll: Array<EduCenterVideoCategory>;
  /** 평생교육원 영상 정보 - 관리자권한 */
  eduCenterVideoForAdmin: EduCenterVideo;
  /** 평생교육원 영상 네비게이션(이전글/다음글) */
  eduCenterVideoNavigation: EduCenterVideoNavigation;
  /** 평생교육원 영상 구매 요청 정보 - 관리자 권한 */
  eduCenterVideoPurchase: EduCenterVideoPurchase;
  /** 평생교육원 영상 구매 요청 리스트 - 관리자 권한 */
  eduCenterVideoPurchases: EduCenterVideoPurchaseList;
  /** 평생교육원 영상 신고 단일 조회 */
  eduCenterVideoReport: EduCenterVideoReport;
  /** 평생교육원 영상 신고 단일 조회 - 관리자용 */
  eduCenterVideoReportForAdmin: EduCenterVideoReport;
  /** 평생교육원 영상 신고 목록 조회 - 관리자용 */
  eduCenterVideoReportsForAdmin: EduCenterVideoReportList;
  /** 평생교육원 영상 리스트 */
  eduCenterVideos: EduCenterVideoList;
  /** 평생교육원 영상 리스트 - 관리자권한 */
  eduCenterVideosForAdmin: EduCenterVideoList;
  /** 영상 교육 카테고리 리스트(전체반환) */
  educationCategoryAll: Array<EducationCategory>;
  /** 교육 영상 신고 단일 조회 */
  educationReport: EducationReport;
  /** 교육 영상 신고 단일 조회 - 관리자용 */
  educationReportForAdmin: EducationReport;
  /** 교육 영상 신고 목록 조회 - 관리자용 */
  educationReportsForAdmin: EducationReportList;
  /** 영상 교육 정보 */
  educationVideo: EducationVideo;
  /** 영상 교육 정보 - 관리자 권한 */
  educationVideoForAdmin: EducationVideo;
  /** 교육 영상 네비게이션(이전글/다음글) */
  educationVideoNavigation: EducationVideoNavigation;
  /** 영상 교육 리스트 */
  educationVideos: EducationVideoList;
  /** 영상 교육 리스트 - 관리자 권한 */
  educationVideosForAdmin: EducationVideoList;
  /**
   * 파일의 정보를 조회합니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 파일이 존재하지 않습니다.
   */
  file: File;
  /** 알림마당-질문과답변 정보 */
  inquire: Inquire;
  /** 알림마당-질문과답변 정보 - 관리자 권한 */
  inquireForAdmin: Inquire;
  /** 알림마당-질문과답변 리스트 */
  inquires: InquireList;
  /** 구인 구직 정보 */
  jobSearch: JobSearch;
  /** 구인구직 카테고리 전체 */
  jobSearchCategoryAll: Array<JobSearchCategory>;
  /** 구인구직 카테고리 트리구조 반환 */
  jobSearchCategoryTree: Array<JobSearchCategoryTree>;
  /** 구인 구직 정보 - 관리자 권한 */
  jobSearchForAdmin: JobSearch;
  /** 구인구직 게시글 네비게이션(이전글/다음글) */
  jobSearchNavigation: JobSearchNavigation;
  /** 구인구직 직무 전체 */
  jobSearchPositionAll: Array<JobSearchPosition>;
  /** 구인구직 직무 트리구조 반환 */
  jobSearchPositionTree: Array<JobSearchPositionTree>;
  /** 구인구직 신고 단일 조회 */
  jobSearchReport: JobSearchReport;
  /** 구인구직 신고 단일 조회 - 관리자용 */
  jobSearchReportForAdmin: JobSearchReport;
  /** 구인구직 신고 목록 조회 - 관리자용 */
  jobSearchReportsForAdmin: JobSearchReportList;
  /** 구인 구직 리스트 */
  jobSearchs: JobSearchList;
  /** 구인 구직 리스트 - 관리자권한 */
  jobSearchsForAdmin: JobSearchList;
  /** 부가혜택몰 신청 리스트 - 관리자용 */
  mallBoardAppliesForAdmin: MallBoardApplyList;
  /** 내가 신청한 부가혜택몰 신청 리스트 */
  mallBoardAppliesMe: MallBoardApplyList;
  /** 부가혜택몰 신청 정보 - 관리자용 */
  mallBoardApplyForAdmin: MallBoardApply;
  /** 부가혜택몰 게시글 카테고리 목록 조회 */
  mallBoardCategories: MallBoardCategoryList;
  /** 부가혜택몰 게시글 카테고리 단일 조회 */
  mallBoardCategory: MallBoardCategory;
  /** 부가혜택몰 게시글 카테고리 목록(전체반환) */
  mallBoardCategoryAll: Array<MallBoardCategory>;
  /** 부가혜택몰 게시물 단일 조회 */
  mallBoardPost: MallBoardPost;
  /** 부가혜택몰 게시물 단일 조회 - 관리자용 */
  mallBoardPostForAdmin: MallBoardPost;
  /** 부가혜택몰 게시글 네비게이션(이전글/다음글) */
  mallBoardPostNavigation: MallBoardPostNavigation;
  /** 부가혜택몰 게시물 목록 조회 */
  mallBoardPosts: MallBoardPostList;
  /** 부가혜택몰 게시물 목록 조회 - 관리자용 */
  mallBoardPostsForAdmin: MallBoardPostList;
  /** 부가혜택몰 신고 단일 조회 */
  mallBoardReport: MallBoardReport;
  /** 부가혜택몰 신고 단일 조회 - 관리자용 */
  mallBoardReportForAdmin: MallBoardReport;
  /** 부가혜택몰 신고 목록 조회 - 관리자용 */
  mallBoardReportsForAdmin: MallBoardReportList;
  /**
   * 나 자신의 사용자를 조회합니다.
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   * - `NOT_FOUND`: 해당 사용자를 찾을 수 없습니다.
   */
  me: Member;
  /**
   * 내가 차단한 사용자 목록을 조회합니다.
   *
   * [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  myBlockUsers: UserBlockList;
  /** 내가 스크랩한 외식정보 게시물 목록 조회 */
  myBoardPostFavoriteList: BoardPostList;
  /** 내가 좋아요한 외식정보 게시물 목록 조회 */
  myBoardPostLikeList: BoardPostList;
  /** 내 외식정보 댓글/게시글 신고 목록 조회 */
  myBoardReplyReports: BoardReplyReportList;
  /**
   * 내가 참여중인 비즈니스 채널 목록을 조회합니다.
   *
   * [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  myBusinessChatChannels: BChatChannelList;
  /** 내 비즈니스 채팅 신고 목록 조회 */
  myBusinessChatReports: BusinessChatReportList;
  /** 내 외식기업 정보 */
  myCompany?: Maybe<UserCompany>;
  /** 내 컨설턴트 신고 목록 조회 */
  myConsultantReports: ConsultantReportList;
  /** 내 외식컨설팅 신고 목록 조회 */
  myEatOutCstReports: EatOutCstReportList;
  /** 내가 스크랩한 평생교육원 게시물 목록 조회 */
  myEduCenterBoardFavoriteList: EduCenterPostList;
  /** 내가 좋아요한 평생교육원 게시글 목록 조회 */
  myEduCenterPostLikeList: EduCenterPostList;
  /** 내 외식평생교육원-게시글 댓글/게시글 신고 목록 조회 */
  myEduCenterReplyReports: EduCenterReplyReportList;
  /** 내가 스크랩한 평생교육원 영상 목록 조회 */
  myEduCenterVideoFavoriteList: EduCenterVideoList;
  /** 내가 좋아요한 평생교육원 영상 목록 조회 */
  myEduCenterVideoLikeList: EduCenterVideoList;
  /** 내가 스크랩한 교육영상 목록 조회 */
  myEducationVideoFavoriteList: EducationVideoList;
  /** 내가 좋아요한 교육영상 목록 조회 */
  myEducationVideoLikeList: EducationVideoList;
  /** 내가 즐겨찾기한 구인 구직 리스트 */
  myJobSearchFavoriteList: JobSearchList;
  /** 내가 좋아요한 구인구직 목록 조회 */
  myJobSearchLikeList: JobSearchList;
  /** 내 구인구직 신고 목록 조회 */
  myJobSearchReports: JobSearchReportList;
  /** 내가 스크랩한 부가혜택몰 게시글 목록 조회 */
  myMallBoardPostFavoriteList: MallBoardPostList;
  /** 내가 좋아요한 부가혜택몰 목록 조회 */
  myMallBoardPostLikeList: MallBoardPostList;
  /** 내 부가혜택몰 신고 목록 조회 */
  myMallBoardReports: MallBoardReportList;
  /** 내가 스크랩한 알림마당 게시물 목록 조회 */
  myNoticePostFavoriteList: NoticePostList;
  /** 내가 좋아요한 알림마당 목록 조회 */
  myNoticePostLikeList: NoticePostList;
  /** 내 알림마당 댓글 신고 목록 조회 */
  myNoticeReplyReports: NoticeReplyReportList;
  /**
   * 내 알림 목록을 가져옵니다.
   *
   * [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
   */
  myNotifications: NotificationList;
  /** 내가 즐겨찾기한 중고거래 리스트 */
  mySecondhandFavoriteList: SecondhandList;
  /** 내가 좋아요한 중고거래 목록 조회 */
  mySecondhandLikeList: SecondhandList;
  /** 내가 스크랩한 정보지원 게시물 목록 조회 */
  mySupportInfoPostFavoriteList: SupportInfoPostList;
  /** 내가 좋아요한 정부지원 게시글 목록 조회 */
  mySupportInfoPostLikeList: SupportInfoPostList;
  /** 내 정부지원사업 댓글 신고 목록 조회 */
  mySupportInfoReplyReports: SupportInfoReplyReportList;
  /**
   * 내가 참여중인 비즈니스 채널중 상단 고정 채널을 모두 조회합니다.
   *
   * [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  myTopBusinessChatChannels: Array<BChatChannel>;
  /** 내가 시청한 교육 영상 */
  myWatchEduCationVideo: EducationVideoList;
  /** 내가 시청한 평생교육원 영상 */
  myWatchEduCenterVideo: EduCenterVideoList;
  /** 알림마당 게시글 카테고리 목록 조회 */
  noticeCategories: NoticeCategoryList;
  /** 알림마당 게시글 카테고리 단일 조회 */
  noticeCategory: NoticeCategory;
  /** 알림마당 게시글 카테고리 목록(전체반환) */
  noticeCategoryAll: Array<NoticeCategory>;
  /** 알림마당 게시물 단일 조회 */
  noticePost: NoticePost;
  /** 알림마당 게시물 단일 조회 - 관리자 권한 */
  noticePostForAdmin: NoticePost;
  /** 알림마당 게시글 네비게이션(이전글/다음글) */
  noticePostNavigation: NoticePostNavigation;
  /** 알림마당 게시물 댓글 목록 조회 */
  noticePostReplies: NoticeReplyList;
  /** 알림마당 게시물 댓글 단일 조회 */
  noticePostReply: NoticeReply;
  /** 알림마당 게시물 목록 조회 */
  noticePosts: NoticePostList;
  /** 알림마당 게시물 목록 조회 - 관리자 권한 */
  noticePostsForAdmin: NoticePostList;
  /** 알림마당 댓글 신고 단일 조회 */
  noticeReplyReport: NoticeReplyReport;
  /** 알림마당 댓글 신고 단일 조회 - 관리자용 */
  noticeReplyReportForAdmin: NoticeReplyReport;
  /** 알림마당 댓글 신고 목록 조회 - 관리자용 */
  noticeReplyReportsForAdmin: NoticeReplyReportList;
  /**
   * 알림을 조회합니다. 관리자가 아닌 사용자는 자신의 알림만 조회할 수 있습니다.
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   * - `NOT_FOUND`: 해당 사용자를 찾을 수 없습니다.
   */
  notification: Notification;
  /**
   * 알림 저장소를 조회합니다. - 관리자 권한
   *
   * **에러 코드**
   * - `NOT_FOUND`: 해당 사용자를 찾을 수 없습니다.
   */
  notificationStorage: NotificationStorageModel;
  /**
   * 알림 저장소 목록를 조회합니다. - 관리자 권한
   *
   * [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
   */
  notificationStorages: NotificationStorageList;
  /**
   * 전체 알림 목록을 가져옵니다. 관리자만 허용됩니다.
   *
   * [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
   */
  notificationsForAdmin: NotificationList;
  /** 가입자 수 - 관리자 권한 */
  numberOfMember: MemberOfNumber;
  /** 민간자격증 신청 리스트 - 관리자용 */
  privateCertificateAppliesForAdmin: PrivateCertificateApplyList;
  /** 내가 신청한 민간자격증 신청 리스트 */
  privateCertificateAppliesMe: PrivateCertificateApplyList;
  /** 민간자격증 신청 정보 - 관리자용 */
  privateCertificateApplyForAdmin: PrivateCertificateApply;
  /** 민간자격증 게시물 단일 조회 */
  privateCertificatePost: PrivateCertificatePost;
  /** 민간자격증 게시물 단일 조회 - 관리자전용 */
  privateCertificatePostForAdmin: PrivateCertificatePost;
  /** 민간자격증 게시글 네비게이션(이전글/다음글) */
  privateCertificatePostNavigation: PrivateCertificatePostNavigation;
  /** 민간자격증 게시물 목록 조회 */
  privateCertificatePosts: PrivateCertificatePostList;
  /** 민간자격증 게시물 목록 조회 - 관리자전용 */
  privateCertificatePostsForAdmin: PrivateCertificatePostList;
  /** 평생교육원-민간자격증 신고 단일 조회 */
  privateCertificateReport: PrivateCertificateReport;
  /** 평생교육원-민간자격증 신고 단일 조회 - 관리자용 */
  privateCertificateReportForAdmin: PrivateCertificateReport;
  /** 평생교육원-민간자격증 신고 목록 조회 - 관리자용 */
  privateCertificateReportsForAdmin: PrivateCertificateReportList;
  /** 통합 신고 상세 정보 - 관리자전용 */
  reportViewForAdmin: ReportView;
  /** 통합 신고 리스트 - 관리자전용 */
  reportViewsForAdmin: ReportViewList;
  /** 중고거래 정보 */
  secondhand: Secondhand;
  /** 중고거래 카테고리들(전체반환) */
  secondhandCategoryAll: Array<SecondhandCategory>;
  /** 중고거래 게시글 네비게이션(이전글/다음글) */
  secondhandNavigation: SecondhandNavigation;
  /** 중고거래 리스트 */
  secondhands: SecondhandList;
  /** 서비스 운영 정보 */
  serviceManage: ServiceManage;
  /** 시군구 트리 데이터 */
  sigungus: Array<SigunguFree>;
  /** 정부지원산업 게시글 카테고리 목록 조회 */
  supportInfoCategories: SupportInfoCategoryList;
  /** 정부지원산업 게시글 카테고리 단일 조회 */
  supportInfoCategory: SupportInfoCategory;
  /** 정부지원산업 게시글 카테고리(전체반환) */
  supportInfoCategoryAll: Array<SupportInfoCategory>;
  /** 정부지원사업 게시물 단일 조회 */
  supportInfoPost: SupportInfoPost;
  /** 정부지원사업 게시물 단일 조회 - 관리자권한 */
  supportInfoPostForAdmin: SupportInfoPost;
  /** 정부지원 게시글 네비게이션(이전글/다음글) */
  supportInfoPostNavigation: SupportInfoPostNavigation;
  /** 정부지원산업 게시물 댓글 목록 조회 */
  supportInfoPostReplies: SupportInfoReplyList;
  /** 정부지원산업 게시물 댓글 단일 조회 */
  supportInfoPostReply: SupportInfoReply;
  /** 정부지원사업 게시물 목록 조회 */
  supportInfoPosts: SupportInfoPostList;
  /** 정부지원사업 게시물 목록 조회 - 관리자권한 */
  supportInfoPostsForAdmin: SupportInfoPostList;
  /** 정부지원사업 댓글 신고 단일 조회 */
  supportInfoReplyReport: SupportInfoReplyReport;
  /** 정부지원사업 댓글 신고 단일 조회 - 관리자용 */
  supportInfoReplyReportForAdmin: SupportInfoReplyReport;
  /** 정부지원사업 댓글 신고 목록 조회 - 관리자용 */
  supportInfoReplyReportsForAdmin: SupportInfoReplyReportList;
  /** 패널 설문 조사 단일 정보 */
  surveyPost: SurveyPost;
  /** 패널 설문 조사 리스트 */
  surveyPosts: SurveyPostList;
  /** 특정 설문에 응답들(객관식) */
  surveyResponses: Array<SurveyResponse>;
  /** 특정 설문에 응답들 - 관리자용 */
  surveyResponsesForAdmin: Array<SurveyResponse>;
  /** 특정 설문에 응답 차트 데이터 */
  surveyResponsesForChart: Array<SurveyChart>;
  /** 본인이 읽지않은 알림 수 */
  unReadNotificationCnt: Scalars['Float']['output'];
  /**
   * 특정 사용자를 조회합니다.
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   * - `NOT_FOUND`: 해당 사용자를 찾을 수 없습니다.
   */
  user: Member;
  /** 유저 탈퇴 로그 리스트 */
  userLeaveLogs: UserLeaveLogList;
  /**
   * 사용자 목록을 가져옵니다.
   *
   * [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  users: UserList;
};


export type QueryEduCenterVideoReportsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<EduCenterVideoReportFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EduCenterVideoReportSortInput>>;
};


export type QueryEducationReportsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<EducationReportFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EducationReportSortInput>>;
};


export type QueryPrivateCertificateReportsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<PrivateCertificateReportFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PrivateCertificateReportSortInput>>;
};


export type QueryAdminPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAdminPostNavigationArgs = {
  id: Scalars['ID']['input'];
  params?: InputMaybe<AdminPostNavigationParamsInput>;
};


export type QueryAdminPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<AdminPostFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AdminPostSortInput>>;
};


export type QueryAdminsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<UserFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserOrderInput>>;
};


export type QueryBoardCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<BoardCategoryFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<BoardCategorySortInput>>;
};


export type QueryBoardCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBoardPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBoardPostForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBoardPostNavigationArgs = {
  id: Scalars['ID']['input'];
  params?: InputMaybe<BoardPostNavigationParamsInput>;
};


export type QueryBoardPostRepliesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<BoardReplyFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<BoardReplySortInput>>;
};


export type QueryBoardPostReplyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBoardPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<BoardPostFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<BoardPostSortInput>>;
};


export type QueryBoardPostsForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<BoardPostFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<BoardPostSortInput>>;
};


export type QueryBoardReplyReportArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBoardReplyReportForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBoardReplyReportsForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<BoardReplyReportFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<BoardReplyReportSortInput>>;
};


export type QueryBusinessChatChannelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBusinessChatChannelsForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<ChatChannelFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ChatChannelOrderByInput>>;
};


export type QueryBusinessChatMessageArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBusinessChatMessagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channelId: Scalars['ID']['input'];
  filter?: InputMaybe<Array<BusinessChatMessageFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<BusinessChatMessageSortInput>>;
};


export type QueryBusinessChatMessagesForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<BusinessChatMessageFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<BusinessChatMessageSortInput>>;
};


export type QueryBusinessChatPayLoadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channelId: Scalars['ID']['input'];
  filter?: InputMaybe<Array<ChatMessageFileFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EssentialSortInput>>;
};


export type QueryBusinessChatReportArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBusinessChatReportForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBusinessChatReportsForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<ChatReportFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ChatReportOrderByInput>>;
};


export type QueryCompanyAppliesByAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<UserCompanyFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserCompanySortInput>>;
};


export type QueryCompanyByAdminArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryConsultantArgs = {
  id: Scalars['ID']['input'];
};


export type QueryConsultantAppliesForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<ConsultantApplyFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ConsultantApplySortInput>>;
};


export type QueryConsultantAppliesMeArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<OmitObjectType>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ConsultantApplySortInput>>;
};


export type QueryConsultantApplyForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QueryConsultantForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QueryConsultantNavigationArgs = {
  id: Scalars['ID']['input'];
  params?: InputMaybe<ConsultantNavigationParamsInput>;
};


export type QueryConsultantReportArgs = {
  id: Scalars['ID']['input'];
};


export type QueryConsultantReportForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QueryConsultantReportsForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<ConsultantReportFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ConsultantReportSortInput>>;
};


export type QueryConsultantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<ConsultantFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ConsultantSortInput>>;
};


export type QueryConsultantsForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<ConsultantFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ConsultantSortInput>>;
};


export type QueryEatOutCstCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<EatOutCstCategoryFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EatOutCstCategorySortInput>>;
};


export type QueryEatOutCstCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEatOutCstPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEatOutCstPostForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEatOutCstPostNavigationArgs = {
  id: Scalars['ID']['input'];
  params?: InputMaybe<EatOutCstPostNavigationParamsInput>;
};


export type QueryEatOutCstPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<EatOutCstPostFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EatOutCstPostSortInput>>;
};


export type QueryEatOutCstPostsForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<EatOutCstPostFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EatOutCstPostSortInput>>;
};


export type QueryEatOutCstReportArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEatOutCstReportForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEatOutCstReportsForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<EatOutCstReportFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EatOutCstReportSortInput>>;
};


export type QueryEduCenterCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<EduCenterCategoryFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EduCenterCategorySortInput>>;
};


export type QueryEduCenterCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEduCenterPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEduCenterPostForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEduCenterPostNavigationArgs = {
  id: Scalars['ID']['input'];
  params?: InputMaybe<EduCenterPostNavigationParamsInput>;
};


export type QueryEduCenterPostRepliesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<EduCenterReplyFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EduCenterReplySortInput>>;
};


export type QueryEduCenterPostReplyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEduCenterPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<EduCenterPostFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EduCenterPostSortInput>>;
};


export type QueryEduCenterPostsForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<EduCenterPostFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EduCenterPostSortInput>>;
};


export type QueryEduCenterReplyReportArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEduCenterReplyReportForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEduCenterReplyReportsForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<EduCenterReplyReportFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EduCenterReplyReportSortInput>>;
};


export type QueryEduCenterVideoArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEduCenterVideoForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEduCenterVideoNavigationArgs = {
  id: Scalars['ID']['input'];
  params?: InputMaybe<EduCenterVideoNavigationParamsInput>;
};


export type QueryEduCenterVideoPurchaseArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEduCenterVideoPurchasesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<EduCenterVideoPurchaseFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EduCenterVideoPurchaseSortInput>>;
};


export type QueryEduCenterVideoReportArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEduCenterVideoReportForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEduCenterVideoReportsForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<EduCenterVideoReportFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EduCenterVideoReportSortInput>>;
};


export type QueryEduCenterVideosArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<EduCenterVideoFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EduCenterVideoSortInput>>;
};


export type QueryEduCenterVideosForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<EduCenterVideoFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EduCenterVideoSortInput>>;
};


export type QueryEducationReportArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEducationReportForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEducationReportsForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<EducationReportFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EducationReportSortInput>>;
};


export type QueryEducationVideoArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEducationVideoForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEducationVideoNavigationArgs = {
  id: Scalars['ID']['input'];
  params?: InputMaybe<EducationVideoNavigationParamsInput>;
};


export type QueryEducationVideosArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<EducationVideoFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EducationVideoSortInput>>;
};


export type QueryEducationVideosForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<EducationVideoFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EducationVideoSortInput>>;
};


export type QueryFileArgs = {
  id: Scalars['ID']['input'];
};


export type QueryInquireArgs = {
  id: Scalars['String']['input'];
};


export type QueryInquireForAdminArgs = {
  id: Scalars['String']['input'];
};


export type QueryInquiresArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InquireFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InquireOrderByInput>>;
};


export type QueryJobSearchArgs = {
  id: Scalars['ID']['input'];
};


export type QueryJobSearchForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QueryJobSearchNavigationArgs = {
  id: Scalars['ID']['input'];
  params?: InputMaybe<JobSearchNavigationParamsInput>;
};


export type QueryJobSearchReportArgs = {
  id: Scalars['ID']['input'];
};


export type QueryJobSearchReportForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QueryJobSearchReportsForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<JobSearchReportFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<JobSearchReportSortInput>>;
};


export type QueryJobSearchsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<JobSearchFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<JobSearchSortInput>>;
};


export type QueryJobSearchsForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<JobSearchFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<JobSearchSortInput>>;
};


export type QueryMallBoardAppliesForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<MallBoardApplyFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MallBoardApplySortInput>>;
};


export type QueryMallBoardAppliesMeArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<MallBoardApplyMeFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MallBoardApplySortInput>>;
};


export type QueryMallBoardApplyForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMallBoardCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<MallBoardCategoryFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MallBoardCategorySortInput>>;
};


export type QueryMallBoardCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMallBoardPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMallBoardPostForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMallBoardPostNavigationArgs = {
  id: Scalars['ID']['input'];
  params?: InputMaybe<MallBoardPostNavigationParamsInput>;
};


export type QueryMallBoardPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<MallBoardPostFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MallBoardPostSortInput>>;
};


export type QueryMallBoardPostsForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<MallBoardPostFilterInputForAdmin>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MallBoardPostSortInput>>;
};


export type QueryMallBoardReportArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMallBoardReportForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMallBoardReportsForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<MallBoardReportFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MallBoardReportSortInput>>;
};


export type QueryMyBlockUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMyBoardPostFavoriteListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<BoardPostFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<BoardPostSortInput>>;
};


export type QueryMyBoardPostLikeListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<BoardPostFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<BoardPostSortInput>>;
};


export type QueryMyBoardReplyReportsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<BoardReplyReportFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<BoardReplyReportSortInput>>;
};


export type QueryMyBusinessChatChannelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<ChatChannelFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ChatChannelOrderByInput>>;
};


export type QueryMyBusinessChatReportsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<ChatReportFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ChatReportOrderByInput>>;
};


export type QueryMyConsultantReportsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<ConsultantReportFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ConsultantReportSortInput>>;
};


export type QueryMyEatOutCstReportsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<EatOutCstReportFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EatOutCstReportSortInput>>;
};


export type QueryMyEduCenterBoardFavoriteListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<EduCenterPostFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EduCenterPostSortInput>>;
};


export type QueryMyEduCenterPostLikeListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<EduCenterPostFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EduCenterPostSortInput>>;
};


export type QueryMyEduCenterReplyReportsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<EduCenterReplyReportFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EduCenterReplyReportSortInput>>;
};


export type QueryMyEduCenterVideoFavoriteListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<EduCenterVideoFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EduCenterVideoSortInput>>;
};


export type QueryMyEduCenterVideoLikeListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<EduCenterVideoFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EduCenterVideoSortInput>>;
};


export type QueryMyEducationVideoFavoriteListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<EducationVideoFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EducationVideoSortInput>>;
};


export type QueryMyEducationVideoLikeListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<EducationVideoFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EducationVideoSortInput>>;
};


export type QueryMyJobSearchFavoriteListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<JobSearchFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<JobSearchSortInput>>;
};


export type QueryMyJobSearchLikeListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<JobSearchFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<JobSearchSortInput>>;
};


export type QueryMyJobSearchReportsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<JobSearchReportFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<JobSearchReportSortInput>>;
};


export type QueryMyMallBoardPostFavoriteListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<MallBoardPostFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MallBoardPostSortInput>>;
};


export type QueryMyMallBoardPostLikeListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<MallBoardPostFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MallBoardPostSortInput>>;
};


export type QueryMyMallBoardReportsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<MallBoardReportFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MallBoardReportSortInput>>;
};


export type QueryMyNoticePostFavoriteListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<NoticePostFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<NoticePostSortInput>>;
};


export type QueryMyNoticePostLikeListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<NoticePostFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<NoticePostSortInput>>;
};


export type QueryMyNoticeReplyReportsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<NoticeReplyReportFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<NoticeReplyReportSortInput>>;
};


export type QueryMyNotificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  unreadOnly: Scalars['Boolean']['input'];
};


export type QueryMySecondhandFavoriteListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<SecondhandFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SecondhandSortInput>>;
};


export type QueryMySecondhandLikeListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<SecondhandFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SecondhandSortInput>>;
};


export type QueryMySupportInfoPostFavoriteListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<SupportInfoPostFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SupportInfoPostSortInput>>;
};


export type QueryMySupportInfoPostLikeListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<SupportInfoPostFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SupportInfoPostSortInput>>;
};


export type QueryMySupportInfoReplyReportsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<SupportInfoReplyReportFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SupportInfoReplyReportSortInput>>;
};


export type QueryMyWatchEduCationVideoArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<EducationVideoFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EducationVideoSortInput>>;
};


export type QueryMyWatchEduCenterVideoArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<EduCenterVideoFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EduCenterVideoSortInput>>;
};


export type QueryNoticeCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<NoticeCategoryFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<NoticeCategorySortInput>>;
};


export type QueryNoticeCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNoticePostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNoticePostForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNoticePostNavigationArgs = {
  id: Scalars['ID']['input'];
  params?: InputMaybe<NoticePostNavigationParamsInput>;
};


export type QueryNoticePostRepliesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<NoticeReplyFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<NoticeReplySortInput>>;
};


export type QueryNoticePostReplyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNoticePostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<NoticePostFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<NoticePostSortInput>>;
};


export type QueryNoticePostsForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<NoticePostFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<NoticePostSortInput>>;
};


export type QueryNoticeReplyReportArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNoticeReplyReportForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNoticeReplyReportsForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<NoticeReplyReportFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<NoticeReplyReportSortInput>>;
};


export type QueryNotificationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNotificationStorageArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNotificationStoragesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<NotificationStorageFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<NotificationStorageSortInput>>;
};


export type QueryNotificationsForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<NotificationFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<NotificationSortInput>>;
};


export type QueryNumberOfMemberArgs = {
  filter: DashBoardFilterEnum;
};


export type QueryPrivateCertificateAppliesForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<PrivateCertificateApplyFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PrivateCertificateApplySortInput>>;
};


export type QueryPrivateCertificateAppliesMeArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<PrivateCertificateApplyMeFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PrivateCertificateApplySortInput>>;
};


export type QueryPrivateCertificateApplyForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPrivateCertificatePostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPrivateCertificatePostForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPrivateCertificatePostNavigationArgs = {
  id: Scalars['ID']['input'];
  params?: InputMaybe<PrivateCertificatePostNavigationParamsInput>;
};


export type QueryPrivateCertificatePostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<PrivateCertificatePostFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PrivateCertificatePostSortInput>>;
};


export type QueryPrivateCertificatePostsForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<PrivateCertificatePostFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PrivateCertificatePostSortInput>>;
};


export type QueryPrivateCertificateReportArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPrivateCertificateReportForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPrivateCertificateReportsForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<PrivateCertificateReportFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PrivateCertificateReportSortInput>>;
};


export type QueryReportViewForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QueryReportViewsForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<ReportViewFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ReportViewSortInput>>;
};


export type QuerySecondhandArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySecondhandNavigationArgs = {
  id: Scalars['ID']['input'];
  params?: InputMaybe<SecondhandNavigationParamsInput>;
};


export type QuerySecondhandsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<SecondhandFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SecondhandSortInput>>;
};


export type QuerySupportInfoCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<SupportInfoCategoryFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SupportInfoCategorySortInput>>;
};


export type QuerySupportInfoCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySupportInfoPostArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySupportInfoPostForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySupportInfoPostNavigationArgs = {
  id: Scalars['ID']['input'];
  params?: InputMaybe<SupportInfoPostNavigationParamsInput>;
};


export type QuerySupportInfoPostRepliesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<SupportInfoReplyFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SupportInfoReplySortInput>>;
};


export type QuerySupportInfoPostReplyArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySupportInfoPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<SupportInfoPostFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SupportInfoPostSortInput>>;
};


export type QuerySupportInfoPostsForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<SupportInfoPostFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SupportInfoPostSortInput>>;
};


export type QuerySupportInfoReplyReportArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySupportInfoReplyReportForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySupportInfoReplyReportsForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<SupportInfoReplyReportFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SupportInfoReplyReportSortInput>>;
};


export type QuerySurveyPostArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySurveyPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<SurveyPostFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SurveyPostSortInput>>;
};


export type QuerySurveyResponsesArgs = {
  surveyPostId: Scalars['ID']['input'];
};


export type QuerySurveyResponsesForAdminArgs = {
  surveyPostId: Scalars['ID']['input'];
};


export type QuerySurveyResponsesForChartArgs = {
  surveyPostId: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserLeaveLogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<UserLeaveLogFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserLeaveLogSortInput>>;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<UserFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserOrderInput>>;
};

/** 통합 신고 모델 */
export type ReportView = {
  __typename?: 'ReportView';
  /** 작성자 */
  author: Member;
  /** 신고 카테고리 */
  category?: Maybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: Maybe<Scalars['String']['output']>;
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 신고 상태 */
  state: CommunityReportStateEnumType;
  /** 신고 타겟 정보 */
  target?: Maybe<ReportViewTarget>;
  /** 피신고자 정보, 신고 종류에 따라 없을 수 있음 */
  targetAuthor?: Maybe<Member>;
  /** 신고 커뮤니티 타겟 */
  targetId?: Maybe<Scalars['String']['output']>;
  /** 신고 타겟 타입 */
  type: ReportViewTypeEnum;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

export type ReportViewEdge = {
  __typename?: 'ReportViewEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: ReportView;
};

/** 통합 신고 리스트 필터 Input */
export type ReportViewFilterInput = {
  /** 작성자 이메일 */
  author__email?: InputMaybe<Array<StringFilterInput>>;
  /** 작성자 고유 id */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 작성자 이름 */
  author__name?: InputMaybe<Array<StringFilterInput>>;
  /** 신고 카테고리 */
  category?: InputMaybe<Array<CommunityReportCategoryFilterInput>>;
  /** 신고 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 신고 상태 */
  state?: InputMaybe<Array<CommunityReportStateFilterInput>>;
  /** 타입 */
  type?: InputMaybe<Array<ReportViewTypeEnumFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 통합 신고 리스트 */
export type ReportViewList = {
  __typename?: 'ReportViewList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<ReportViewEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 신고 결과 처리 */
export enum ReportViewResultEnum {
  /** 조치 없음 */
  NoAction = 'NO_ACTION',
  /** 30일 정지 */
  OneMonthSusp = 'ONE_MONTH_SUSP',
  /** 영구 정지 */
  PermanentSusp = 'PERMANENT_SUSP'
}

/** 통합 신고 리스트 정렬 Input */
export type ReportViewSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 신고 타겟 정보 */
export type ReportViewTarget = BChatChannel | BChatMessage | BoardPost | BoardReply | Consultant | EatOutCstPost | EduCenterPost | EduCenterReply | EduCenterVideo | EducationVideo | JobSearch | MallBoardPost | Member | NoticePost | NoticeReply | PrivateCertificatePost | Secondhand | SupportInfoPost | SupportInfoReply;

/** 통합 신고 타입 */
export enum ReportViewTypeEnum {
  /** 채팅방 */
  Channel = 'CHANNEL',
  /** 채팅 메시지 */
  Message = 'MESSAGE',
  /** 게시글 신고 */
  Post = 'POST',
  /** 댓글 신고 */
  Reply = 'REPLY',
  /** 비즈니스 타겟(중고거래) */
  Target = 'TARGET',
  /** 채팅 유저 */
  User = 'USER'
}

/** 통합 신고 타입 필터 */
export type ReportViewTypeEnumFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<ReportViewTypeEnum>;
  values?: InputMaybe<Array<ReportViewTypeEnum>>;
};

/** 중고 거래 정보 */
export type Secondhand = {
  __typename?: 'Secondhand';
  /** 작성자 */
  author: Member;
  /** 카테고리 */
  category: SecondhandCategory;
  /** 내용 */
  content: Scalars['String']['output'];
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 해당 게시물 스크랩수 */
  favoriteCnt: Scalars['Float']['output'];
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 이미지들 */
  images?: Maybe<Array<File>>;
  /** 스크랩 여부 */
  isFavorite: Scalars['Boolean']['output'];
  /** 좋아요 여부 */
  isLike: Scalars['Boolean']['output'];
  /** 내 중고거래 게시글 여부 */
  isMine: Scalars['Boolean']['output'];
  /** 좋아요 수 */
  likeCnt: Scalars['Int']['output'];
  /** 금액 */
  price: Scalars['Float']['output'];
  /** 상태 */
  state: SecondhandStateEnum;
  /** 제목 */
  title: Scalars['String']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 중고거래 카테고리 정보 */
export type SecondhandCategory = {
  __typename?: 'SecondhandCategory';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 카테고리명 */
  name: Scalars['String']['output'];
  /** 우선순위 */
  priority: Scalars['Float']['output'];
  /** 등록된 상품수 */
  secondhandCnt: Scalars['Float']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 중고거래 카테고리 생성 */
export type SecondhandCategoryCreateInput = {
  /** 카테고리명 */
  name: Scalars['String']['input'];
  /** 우선순위 */
  priority: Scalars['Float']['input'];
};

/** 중고거래 카테고리 수정 */
export type SecondhandCategoryUpdateInput = {
  /** 카테고리명 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 우선순위 */
  priority?: InputMaybe<Scalars['Float']['input']>;
};

/** 중고 거래 생성 */
export type SecondhandCreateInput = {
  /** 카테고리 */
  categoryId: Scalars['ID']['input'];
  /** 내용 */
  content: Scalars['String']['input'];
  /** 이미지 IDS */
  image_ids: Array<Scalars['ID']['input']>;
  /** 금액 */
  price: Scalars['Float']['input'];
  /** 제목 */
  title: Scalars['String']['input'];
};

export type SecondhandEdge = {
  __typename?: 'SecondhandEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: Secondhand;
};

/** 중고 거래 리스트 필터 */
export type SecondhandFilterInput = {
  /** 작성자 ID */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 작성자 이름 */
  author__name?: InputMaybe<Array<StringFilterInput>>;
  /** 카테고리 ID */
  category__id?: InputMaybe<Array<IdFilterInput>>;
  /** 카테고리명 */
  category__name?: InputMaybe<Array<StringFilterInput>>;
  /** 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 금액 */
  price?: InputMaybe<Array<IntFilterInput>>;
  /** 상태 */
  state?: InputMaybe<Array<SecondhandStateEnumFilter>>;
  /** 제목 */
  title?: InputMaybe<Array<StringFilterInput>>;
  /** 구매자 ID */
  tradeUser__id?: InputMaybe<Array<IdFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 중고거래 리스트 */
export type SecondhandList = {
  __typename?: 'SecondhandList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<SecondhandEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 중고거래 게시글 네비게이션(이전글/다음글) */
export type SecondhandNavigation = {
  __typename?: 'SecondhandNavigation';
  /** 이전글 ID */
  nextPostId?: Maybe<Scalars['ID']['output']>;
  /** input params */
  params?: Maybe<SecondhandNavigationParams>;
  /** 이전글 ID */
  prePostId?: Maybe<Scalars['ID']['output']>;
};

/** 중고거래 게시글 네비게이션 params */
export type SecondhandNavigationParams = {
  __typename?: 'SecondhandNavigationParams';
  /** 검색 베이스 */
  base?: Maybe<PostNaviBase>;
  /** 카테고리명 */
  category?: Maybe<Scalars['String']['output']>;
  /** 검색어 */
  search?: Maybe<Scalars['String']['output']>;
};

/** 중고거래 게시글 네비게이션 input params */
export type SecondhandNavigationParamsInput = {
  /** 검색 베이스 */
  base?: InputMaybe<PostNaviBase>;
  /** 카테고리명 */
  category?: InputMaybe<Scalars['String']['input']>;
  /** 내 판매내역 */
  my?: InputMaybe<Scalars['Boolean']['input']>;
  /** 검색어 */
  search?: InputMaybe<Scalars['String']['input']>;
};

/** 중고거래 정렬 */
export type SecondhandSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** 스크랩수 */
  favoriteCount?: InputMaybe<IntSortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 좋아요수 */
  likeCount?: InputMaybe<IntSortInput>;
  /** 금액 */
  price?: InputMaybe<IntSortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 중고거래 상태 */
export enum SecondhandStateEnum {
  /** 활성화 상태 */
  Active = 'ACTIVE',
  /** 거래 종료 */
  End = 'END',
  /** 예약중 상태 */
  Reservation = 'RESERVATION'
}

/** 중고 거래 상태 필터 */
export type SecondhandStateEnumFilter = {
  operator: EnumFilterOperators;
  value?: InputMaybe<SecondhandStateEnum>;
  values?: InputMaybe<Array<SecondhandStateEnum>>;
};

/** 중고 거래 수정 */
export type SecondhandUpdateInput = {
  /** 카테고리 */
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  /** 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 이미지 IDS */
  image_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** 금액 */
  price?: InputMaybe<Scalars['Float']['input']>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** 서비스 운영 정보 */
export type ServiceManage = {
  __typename?: 'ServiceManage';
  /** 인사말 배너 이미지 */
  companyGreetingImgUrl?: Maybe<Scalars['String']['output']>;
  /** 인사말 Mobile */
  companyGreetingMobile?: Maybe<Scalars['String']['output']>;
  /** 인사말 PC */
  companyGreetingPC?: Maybe<Scalars['String']['output']>;
  /** 연구원 연혁 Mobile */
  companyHistoryMobile?: Maybe<Scalars['String']['output']>;
  /** 연구원 연혁 PC */
  companyHistoryPC?: Maybe<Scalars['String']['output']>;
  /** 조직도 이미지 URL */
  companyOrgChartUrl?: Maybe<Scalars['String']['output']>;
  /** 연구원 소개 Mobile */
  companyResearchersMobile?: Maybe<Scalars['String']['output']>;
  /** 연구원 소개 PC */
  companyResearchersPC?: Maybe<Scalars['String']['output']>;
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 마켓팅규정 */
  marketingTerms?: Maybe<Scalars['String']['output']>;
  /** 오픈소스 리스트 */
  openSource?: Maybe<Array<OpenSourceModel>>;
  /** 개인정보처리방침 */
  personalProcessingPolicy?: Maybe<Scalars['String']['output']>;
  /** 환불규정 */
  refundTerms?: Maybe<Scalars['String']['output']>;
  /** 서비스이용약관 */
  serviceTerms?: Maybe<Scalars['String']['output']>;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
  /** 탈퇴약관 */
  withdrawalTerms?: Maybe<Scalars['String']['output']>;
};

/** 서비스 운영정보 Update Input */
export type ServiceManageUpdateInput = {
  /** 조직도 이미지 URL */
  companyOrgChartUrl?: InputMaybe<Scalars['String']['input']>;
  /** 마켓팅규정 */
  marketingTerms?: InputMaybe<Scalars['String']['input']>;
  /** 개인정보처리방침 */
  personalProcessingPolicy?: InputMaybe<Scalars['String']['input']>;
  /** 환불규정 */
  refundTerms?: InputMaybe<Scalars['String']['input']>;
  /** 서비스이용약관 */
  serviceTerms?: InputMaybe<Scalars['String']['input']>;
  /** 탈퇴약관 */
  withdrawalTerms?: InputMaybe<Scalars['String']['input']>;
};

/** 회원가입 데이터 */
export type SignUpInput = {
  /** 이메일 */
  email: Scalars['String']['input'];
  /** 고유 이름(아이디) */
  name: Scalars['String']['input'];
  /** 닉네임 */
  nickname: Scalars['String']['input'];
  /** 비밀번호 */
  password: Scalars['String']['input'];
  /** 전화번호 */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** 실명 */
  realname: Scalars['String']['input'];
};

/** 회원가입 결과 */
export type SignUpResult = {
  __typename?: 'SignUpResult';
  /** 토큰 정보 */
  token: AuthTokenResponse;
  /** 사용자 정보 */
  user: Member;
};

/** 시군구 */
export type Sigungu = {
  __typename?: 'Sigungu';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

/** 시군구 트리 */
export type SigunguFree = {
  __typename?: 'SigunguFree';
  children: Array<Sigungu>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

/** 회원가입 데이터 */
export type SocialSignUpInput = {
  /** 이메일 */
  email: Scalars['String']['input'];
  /** 고유 이름(아이디) */
  name: Scalars['String']['input'];
  /** 닉네임 */
  nickname: Scalars['String']['input'];
  /** 전화번호 */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** 실명 */
  realname: Scalars['String']['input'];
};

/** 정렬 */
export type SortInput = {
  nulls?: InputMaybe<Nulls>;
  order: Order;
};

/** 문자열(String) 필터 */
export type StringFilterInput = {
  operator: StringFilterOperators;
  value?: InputMaybe<Scalars['String']['input']>;
  values?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** 문자열 필터 연산자 */
export enum StringFilterOperators {
  Equal = 'EQUAL',
  Ilike = 'ILIKE',
  In = 'IN',
  IsNotNull = 'IS_NOT_NULL',
  IsNull = 'IS_NULL',
  Like = 'LIKE',
  NotEqual = 'NOT_EQUAL',
  NotIlike = 'NOT_ILIKE',
  NotIn = 'NOT_IN',
  NotLike = 'NOT_LIKE'
}

/** 문자열 정렬 */
export type StringSortInput = {
  case?: InputMaybe<Array<Scalars['String']['input']>>;
  nulls?: InputMaybe<Nulls>;
  order: Order;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** 외식정보 게시물 수신 */
  receiveBoardPost: BoardPost;
  /** 외식정보 게시물 댓글 수신 */
  receiveBoardPostReply: BoardReply;
  /**
   * 특정 채널의 채팅 메시지를 실시간으로 수신합니다. 관리자 또는 채널에 참여자만 수신받을 수 있습니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 존재하지 않은 채널입니다.
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  receiveBusinessChatMessage: BChatMessage;
  /** 외식컨설팅 게시물 수신 */
  receiveEatOutCstPost: EatOutCstPost;
  /** 평생교육원 게시물 수신 */
  receiveEduCenterPost: EduCenterPost;
  /** 평생교육원 게시물 댓글 수신 */
  receiveEduCenterPostReply: EduCenterReply;
  /** 부가혜택몰 게시물 수신 */
  receiveMallBoardPost: MallBoardPost;
  /** 알림마당 게시물 수신 */
  receiveNoticePost: NoticePost;
  /** 알림마당 게시물 댓글 수신 */
  receiveNoticePostReply: NoticeReply;
  /** 민간자격증 게시물 수신 */
  receivePrivateCertificatePost: PrivateCertificatePost;
  /** 정부지원사업 게시물 수신 */
  receiveSupportInfoPost: SupportInfoPost;
  /** 정부지원산업 게시물 댓글 수신 */
  receiveSupportInfoPostReply: SupportInfoReply;
};


export type SubscriptionReceiveBoardPostArgs = {
  categoryId: Scalars['ID']['input'];
};


export type SubscriptionReceiveBoardPostReplyArgs = {
  rootId: Scalars['ID']['input'];
};


export type SubscriptionReceiveBusinessChatMessageArgs = {
  channelId: Scalars['ID']['input'];
};


export type SubscriptionReceiveEatOutCstPostArgs = {
  categoryId: Scalars['ID']['input'];
};


export type SubscriptionReceiveEduCenterPostArgs = {
  categoryId: Scalars['ID']['input'];
};


export type SubscriptionReceiveEduCenterPostReplyArgs = {
  rootId: Scalars['ID']['input'];
};


export type SubscriptionReceiveMallBoardPostArgs = {
  categoryId: Scalars['ID']['input'];
};


export type SubscriptionReceiveNoticePostArgs = {
  categoryId: Scalars['ID']['input'];
};


export type SubscriptionReceiveNoticePostReplyArgs = {
  rootId: Scalars['ID']['input'];
};


export type SubscriptionReceivePrivateCertificatePostArgs = {
  categoryId: Scalars['ID']['input'];
};


export type SubscriptionReceiveSupportInfoPostArgs = {
  categoryId: Scalars['ID']['input'];
};


export type SubscriptionReceiveSupportInfoPostReplyArgs = {
  rootId: Scalars['ID']['input'];
};

/** 정부지원산업 카테고리 */
export type SupportInfoCategory = {
  __typename?: 'SupportInfoCategory';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 커뮤니티 카테고리 즐켜찾기 여부 */
  isFavorite: Scalars['Boolean']['output'];
  /** 커뮤니티 카테고리 이름 */
  name: Scalars['String']['output'];
  /** 커뮤니티 카테고리 배치 순서 */
  priority: Scalars['Int']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 정부지원산업 카테고리 생성 Input */
export type SupportInfoCategoryCreateInput = {
  /** 커뮤니티 카테고리 이름 */
  name: Scalars['String']['input'];
  /** 커뮤니티 카테고리 배치 순서 */
  priority?: InputMaybe<Scalars['Int']['input']>;
};

export type SupportInfoCategoryEdge = {
  __typename?: 'SupportInfoCategoryEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: SupportInfoCategory;
};

/** 정부지원산업 카테고리 필터 */
export type SupportInfoCategoryFilterInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 이름 */
  name?: InputMaybe<Array<StringFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 정부지원산업 카테고리 리스트 */
export type SupportInfoCategoryList = {
  __typename?: 'SupportInfoCategoryList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<SupportInfoCategoryEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 정부지원산업 카테고리 정렬 */
export type SupportInfoCategorySortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 이름 */
  name?: InputMaybe<SortInput>;
  /** 순서 */
  priority?: InputMaybe<IntSortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 정부지원산업 카테고리 수정 Input */
export type SupportInfoCategoryUpdateInput = {
  /** 커뮤니티 카테고리 이름 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 커뮤니티 카테고리 배치 순서 */
  priority?: InputMaybe<Scalars['Int']['input']>;
};

/** 정부지원사업 게시글 */
export type SupportInfoPost = {
  __typename?: 'SupportInfoPost';
  /** 작성자 */
  author: Member;
  /** 게시물 카테고리 */
  category?: Maybe<SupportInfoCategory>;
  /** 내용 */
  content: Scalars['String']['output'];
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 해당 게시물 스크랩수 */
  favoriteCnt: Scalars['Float']['output'];
  /** 이미지, 영상 목록 */
  files?: Maybe<Array<File>>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 해당 게시물 즐겨찾기(스크랩) 여부 */
  isFavorite: Scalars['Boolean']['output'];
  /** 나의 좋아요 여부 */
  isLike: Scalars['Boolean']['output'];
  isPinned?: Maybe<Scalars['Boolean']['output']>;
  /** 보이기 여부 */
  isVisible: Scalars['Boolean']['output'];
  /** 해당 게시물 좋아요 개수 */
  likeCnt: Scalars['Float']['output'];
  pinnedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 댓글 수 */
  replyCount: Scalars['Int']['output'];
  /** 썸네일 이미지 파일 */
  thumbnailFile?: Maybe<File>;
  /** 제목 */
  title?: Maybe<Scalars['String']['output']>;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
  /** 해당 게시물 조회수 */
  viewCnt: Scalars['Float']['output'];
};

/** 정부지원사업 게시글 생성 */
export type SupportInfoPostCreateInput = {
  /** 커뮤니티 카테고리 ID */
  category__id?: InputMaybe<Scalars['ID']['input']>;
  /** 내용 */
  content: Scalars['String']['input'];
  /** 게시물 파일들 */
  file__ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** 썸네일 파일 ID */
  thumbnailFile__id?: InputMaybe<Scalars['ID']['input']>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type SupportInfoPostEdge = {
  __typename?: 'SupportInfoPostEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: SupportInfoPost;
};

/** 정부지원사업 게시글 필터 */
export type SupportInfoPostFilterInput = {
  /** 작성자 이메일 */
  author__email?: InputMaybe<Array<StringFilterInput>>;
  /** 작성자 고유 id */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 작성자 이름 */
  author__name?: InputMaybe<Array<StringFilterInput>>;
  /** 카테고리 고유 id */
  category__id?: InputMaybe<Array<StringFilterInput>>;
  /** 카테고리 이름 */
  category__name?: InputMaybe<Array<StringFilterInput>>;
  /** 게시물 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 숨기기한 사용자 고유 id */
  hide__id?: InputMaybe<Array<IdFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 상단 고정 여부 */
  isPinned?: InputMaybe<Array<BooleanFilterInput>>;
  /** 숨김여부 */
  isVisible?: InputMaybe<Array<BooleanFilterInput>>;
  /** 좋아요 사용자 고유 id */
  likes__id?: InputMaybe<Array<IdFilterInput>>;
  /** 게시물 제목 */
  title?: InputMaybe<Array<StringFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 정부지원사업 게시물 목록 */
export type SupportInfoPostList = {
  __typename?: 'SupportInfoPostList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<SupportInfoPostEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 정부지원 게시글 네비게이션(이전글/다음글) */
export type SupportInfoPostNavigation = {
  __typename?: 'SupportInfoPostNavigation';
  /** 이전글 ID */
  nextPostId?: Maybe<Scalars['ID']['output']>;
  /** input params */
  params?: Maybe<SupportInfoPostNavigationParams>;
  /** 이전글 ID */
  prePostId?: Maybe<Scalars['ID']['output']>;
};

/** 정부지원사업 게시글 네비게이션 params */
export type SupportInfoPostNavigationParams = {
  __typename?: 'SupportInfoPostNavigationParams';
  /** 검색 베이스 */
  base?: Maybe<PostNaviBase>;
  /** 카테고리명 */
  category?: Maybe<Scalars['String']['output']>;
  /** 검색어 */
  search?: Maybe<Scalars['String']['output']>;
};

/** 정부지원 게시글 네비게이션 input params */
export type SupportInfoPostNavigationParamsInput = {
  /** 검색 베이스 */
  base?: InputMaybe<PostNaviBase>;
  /** 카테고리명 */
  category?: InputMaybe<Scalars['String']['input']>;
  /** 검색어 */
  search?: InputMaybe<Scalars['String']['input']>;
};

/** 정부지원사업 게시글 정렬 */
export type SupportInfoPostSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** 스크랩 수 */
  favoriteCount?: InputMaybe<IntSortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 좋아요수 */
  likeCount?: InputMaybe<IntSortInput>;
  /** 상단 고정된 날짜 */
  pinnedAt?: InputMaybe<SortInput>;
  /** 댓글수 */
  replyCount?: InputMaybe<IntSortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
  /** 조회수 정렬 */
  viewCount?: InputMaybe<IntSortInput>;
};

/** 정부지원사업 게시글 수정 */
export type SupportInfoPostUpdateInput = {
  /** 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 보이기 여부 */
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** 정부지원산업 게시글 댓글 */
export type SupportInfoReply = {
  __typename?: 'SupportInfoReply';
  /** 작성자 */
  author: Member;
  /** 댓글 내용 */
  content: Scalars['String']['output'];
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 내 댓글 여부 */
  isMine: Scalars['Boolean']['output'];
  /** 좋아요 수 */
  likeCount: Scalars['Int']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 정부지원산업 게시글 댓글 생성 Input  */
export type SupportInfoReplyCreateInput = {
  /** 댓글 내용 */
  content: Scalars['String']['input'];
  /** 게시물 uuid (댓글일 경우만) */
  post__id?: InputMaybe<Scalars['ID']['input']>;
};

export type SupportInfoReplyEdge = {
  __typename?: 'SupportInfoReplyEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: SupportInfoReply;
};

/** 정부지원산업 게시글 필터 Input */
export type SupportInfoReplyFilterInput = {
  /** 작성자 uuid */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 댓글 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 관련 게시물 uuid */
  post__id?: InputMaybe<Array<IdFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 정부지원사업 게시글 댓글 리스트 */
export type SupportInfoReplyList = {
  __typename?: 'SupportInfoReplyList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<SupportInfoReplyEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 정부지원사업 댓글 신고정보 */
export type SupportInfoReplyReport = {
  __typename?: 'SupportInfoReplyReport';
  /** 관리자 메모 */
  adminMemo: Scalars['String']['output'];
  /** 작성자 */
  author: Member;
  /** 신고 카테고리 */
  category?: Maybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: Maybe<Scalars['String']['output']>;
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기타 예비용 필드 */
  etc?: Maybe<Scalars['String']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 신고 상태 */
  state: CommunityReportStateEnumType;
  /** 신고 커뮤니티 타겟 */
  targetId?: Maybe<Scalars['String']['output']>;
  /** 신고 타겟 타입 */
  type: CommunityReportTypeEnumType;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 정부지원사업 댓글 신고 생성 Input */
export type SupportInfoReplyReportCreateInput = {
  /** 신고 카테고리 */
  category?: InputMaybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 기타 예비용 필드 */
  etc?: InputMaybe<Scalars['String']['input']>;
  /** 신고 커뮤니티 타겟 */
  targetId?: InputMaybe<Scalars['String']['input']>;
  /** 신고 타겟 타입 */
  type?: InputMaybe<CommunityReportTypeEnumType>;
};

export type SupportInfoReplyReportEdge = {
  __typename?: 'SupportInfoReplyReportEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: SupportInfoReplyReport;
};

/** 정부지원사업 댓글 신고 리스트 필터 Input */
export type SupportInfoReplyReportFilterInput = {
  /** 작성자 이메일 */
  author__email?: InputMaybe<Array<StringFilterInput>>;
  /** 작성자 고유 id */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 작성자 이름 */
  author__name?: InputMaybe<Array<StringFilterInput>>;
  /** 신고 카테고리 */
  category?: InputMaybe<Array<CommunityReportCategoryFilterInput>>;
  /** 신고 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 기타 */
  etc?: InputMaybe<Array<StringFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 신고 상태 */
  state?: InputMaybe<Array<CommunityReportStateFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 정부지원사업 댓글 신고 리스트 */
export type SupportInfoReplyReportList = {
  __typename?: 'SupportInfoReplyReportList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<SupportInfoReplyReportEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 정부지원사업 댓글 신고 리스트 정렬 Input */
export type SupportInfoReplyReportSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 정부지원사업 댓글 신고 수정 Input */
export type SupportInfoReplyReportUpdateInput = {
  /** 신고 카테고리 */
  category?: InputMaybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 기타 예비용 필드 */
  etc?: InputMaybe<Scalars['String']['input']>;
};

/** 정부지원산업 게시글 정렬 Input */
export type SupportInfoReplySortInput = {
  /** 댓글 내용 정렬 */
  content?: InputMaybe<StringSortInput>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 정부지원산업 게시글 댓글 수정 Input  */
export type SupportInfoReplyUpdateInput = {
  /** 댓글 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
};

/** 설문 응답 - 차트용 */
export type SurveyChart = {
  __typename?: 'SurveyChart';
  id: Scalars['ID']['output'];
  /** 순서 */
  idx: Scalars['Float']['output'];
  /** 옵션(라벨)들 */
  options: Array<SurveyChartOption>;
  /** 필수 여부 */
  required: Scalars['Boolean']['output'];
  /** 질문명 */
  title: Scalars['String']['output'];
  /** 타입 */
  type: SurveyQuestionTypeEnum;
};

/** 설문 응답 옵션 - 차트용 */
export type SurveyChartOption = {
  __typename?: 'SurveyChartOption';
  /** 순번 */
  idx: Scalars['Float']['output'];
  /** 옵션(라벨) 명 */
  name: Scalars['String']['output'];
  /** 옵션(라벨) ID */
  optionId: Scalars['ID']['output'];
  /** 응답한 수 */
  responseCnt: Scalars['Float']['output'];
};

/** 패널 설문 조사 */
export type SurveyPost = {
  __typename?: 'SurveyPost';
  /** 작성자 */
  author: Member;
  /** 내용 */
  content: Scalars['String']['output'];
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 상단 고정 여부 */
  isPinned: Scalars['Boolean']['output'];
  /** 설문 참여 여부 */
  isSubmit: Scalars['Boolean']['output'];
  /** 노출 여부 */
  isVisible: Scalars['Boolean']['output'];
  /** 패널 설문 조사 링크 */
  link?: Maybe<Scalars['String']['output']>;
  /** 설문 목표수 */
  numOfTarget: Scalars['Float']['output'];
  /** 설문 진행기간 종료일 */
  periodEndAt: Scalars['DateTime']['output'];
  /** 설문 진행기간 시작일 */
  periodStartAt: Scalars['DateTime']['output'];
  /** 상단 고정된 날짜 */
  pinnedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 패널 설문 문항들 */
  questions: Array<SurveyQuestion>;
  /** 현재 응답 수 */
  responseCnt: Scalars['Float']['output'];
  /** 외부 링크 패널 설문 조사 결과 URL */
  responseLink?: Maybe<Scalars['String']['output']>;
  /** 상태 */
  state: SurveyPostStateEnum;
  /** 제목 */
  title: Scalars['String']['output'];
  /** 설문조사 종류 */
  type: SurveyPostTypeEnum;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
  /** 조회 수 */
  viewCount: Scalars['Float']['output'];
};

/** 패널 설문 조사 생성 */
export type SurveyPostCreateInput = {
  /** 내용 */
  content: Scalars['String']['input'];
  /** 노출 여부 */
  isVisible: Scalars['Boolean']['input'];
  /** 패널 설문 조사 링크 */
  link?: InputMaybe<Scalars['String']['input']>;
  /** 설문 목표수 */
  numOfTarget: Scalars['Float']['input'];
  /** 설문 진행기간 종료일 */
  periodEndAt: Scalars['DateTime']['input'];
  /** 설문 진행기간 시작일 */
  periodStartAt: Scalars['DateTime']['input'];
  /** 제목 */
  title: Scalars['String']['input'];
  /** 설문조사 종류 */
  type: SurveyPostTypeEnum;
};

export type SurveyPostEdge = {
  __typename?: 'SurveyPostEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: SurveyPost;
};

/** 패널 설문 조사 필터 */
export type SurveyPostFilterInput = {
  /** 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 상단 고정 여부 */
  isPinned?: InputMaybe<Array<BooleanFilterInput>>;
  /** 노출 여부 */
  isVisible?: InputMaybe<Array<BooleanFilterInput>>;
  /** 설문 목표수 */
  numOfTarget?: InputMaybe<Array<IntFilterInput>>;
  /** 설문 진행기간 종료일 */
  periodEndAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 설문 진행기간 시작일 */
  periodStartAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 상태 */
  state?: InputMaybe<Array<SurveyPostStateFilterEnum>>;
  /** 제목 */
  title?: InputMaybe<Array<StringFilterInput>>;
  /** 종류 */
  type?: InputMaybe<Array<SurveyPostTypeFilterEnum>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 조회 수 */
  viewCount?: InputMaybe<Array<IntFilterInput>>;
};

/** 패널 설문 조사 리스트 */
export type SurveyPostList = {
  __typename?: 'SurveyPostList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<SurveyPostEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 패널 설문 조사 정렬 */
export type SurveyPostSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 설문 목표수 */
  numOfTarget?: InputMaybe<IntSortInput>;
  /** 설문 진행기간 종료일 */
  periodEndAt?: InputMaybe<SortInput>;
  /** 설문 진행기간 시작일 */
  periodStartAt?: InputMaybe<SortInput>;
  /** 설문조사 종류 */
  type?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 패널 설문 조사 상태 */
export enum SurveyPostStateEnum {
  /** 일반적인 상태 */
  Common = 'COMMON',
  /** 종료 */
  End = 'END'
}

/** 패널 설문 조사 상태 필터 */
export type SurveyPostStateFilterEnum = {
  operator: EnumFilterOperators;
  value?: InputMaybe<SurveyPostStateEnum>;
  values?: InputMaybe<Array<SurveyPostStateEnum>>;
};

/** 패널 설문 조사 종류 */
export enum SurveyPostTypeEnum {
  /** 내부 설문 */
  Internal = 'INTERNAL',
  /** 링크 설문 */
  Link = 'LINK'
}

/** 패널 설문 조사 종류 필터 */
export type SurveyPostTypeFilterEnum = {
  operator: EnumFilterOperators;
  value?: InputMaybe<SurveyPostTypeEnum>;
  values?: InputMaybe<Array<SurveyPostTypeEnum>>;
};

/** 패널 설문 조사 수정 */
export type SurveyPostUpdateInput = {
  /** 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 노출 여부 */
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  /** 패널 설문 조사 링크 */
  link?: InputMaybe<Scalars['String']['input']>;
  /** 설문 목표수 */
  numOfTarget?: InputMaybe<Scalars['Float']['input']>;
  /** 설문 진행기간 종료일 */
  periodEndAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** 설문 진행기간 시작일 */
  periodStartAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** 체크박스 질문 */
export type SurveyQCheckboxAnswer = {
  __typename?: 'SurveyQCheckboxAnswer';
  id: Scalars['ID']['output'];
  /** 순서 */
  idx: Scalars['Float']['output'];
  /** 옵션 리스트 */
  options: Array<SurveyQoCheckbox>;
  /** 필수 여부 */
  required: Scalars['Boolean']['output'];
  /** 질문명 */
  title: Scalars['String']['output'];
  /** 타입 */
  type: SurveyQuestionTypeEnum;
};

/** 드랍다운 질문 */
export type SurveyQDropdowneAnswer = {
  __typename?: 'SurveyQDropdowneAnswer';
  id: Scalars['ID']['output'];
  /** 순서 */
  idx: Scalars['Float']['output'];
  /** 옵션 리스트 */
  options: Array<SurveyQoDropdown>;
  /** 필수 여부 */
  required: Scalars['Boolean']['output'];
  /** 질문명 */
  title: Scalars['String']['output'];
  /** 타입 */
  type: SurveyQuestionTypeEnum;
};

/** 장문형 질문 */
export type SurveyQLongAsnwer = {
  __typename?: 'SurveyQLongAsnwer';
  id: Scalars['ID']['output'];
  /** 순서 */
  idx: Scalars['Float']['output'];
  /** input placeholder */
  placeholder: Scalars['String']['output'];
  /** 필수 여부 */
  required: Scalars['Boolean']['output'];
  /** 질문명 */
  title: Scalars['String']['output'];
  /** 타입 */
  type: SurveyQuestionTypeEnum;
};

/** 체크박스 질문 */
export type SurveyQMultiChoiceAnswer = {
  __typename?: 'SurveyQMultiChoiceAnswer';
  id: Scalars['ID']['output'];
  /** 순서 */
  idx: Scalars['Float']['output'];
  /** 옵션 리스트 */
  options: Array<SurveyQoMultiChoice>;
  /** 필수 여부 */
  required: Scalars['Boolean']['output'];
  /** 질문명 */
  title: Scalars['String']['output'];
  /** 타입 */
  type: SurveyQuestionTypeEnum;
};

/** 체크박스 질문 옵션 */
export type SurveyQoCheckbox = {
  __typename?: 'SurveyQOCheckbox';
  id: Scalars['ID']['output'];
  /** 순서 */
  idx: Scalars['Float']['output'];
  /** 옵션명 */
  name: Scalars['String']['output'];
};

/** 패널 설문조사 문항 옵션 Input, 문항의 option에 따라 서버에서 validation합니다. */
export type SurveyQoCreateInput = {
  id: Scalars['ID']['input'];
  /** 순서 */
  idx: Scalars['Float']['input'];
  /** 옵션명 */
  name: Scalars['String']['input'];
};

/** 드랍다운 질문 옵션 */
export type SurveyQoDropdown = {
  __typename?: 'SurveyQODropdown';
  id: Scalars['ID']['output'];
  /** 순서 */
  idx: Scalars['Float']['output'];
  /** 옵션명 */
  name: Scalars['String']['output'];
};

/** 객관식 질문 옵션 */
export type SurveyQoMultiChoice = {
  __typename?: 'SurveyQOMultiChoice';
  id: Scalars['ID']['output'];
  /** 순서 */
  idx: Scalars['Float']['output'];
  /** 옵션명 */
  name: Scalars['String']['output'];
};

/** 단답형 질문 */
export type SurveyQShortAsnwer = {
  __typename?: 'SurveyQShortAsnwer';
  id: Scalars['ID']['output'];
  /** 순서 */
  idx: Scalars['Float']['output'];
  /** input placeholder */
  placeholder: Scalars['String']['output'];
  /** 필수 여부 */
  required: Scalars['Boolean']['output'];
  /** 질문명 */
  title: Scalars['String']['output'];
  /** 타입 */
  type: SurveyQuestionTypeEnum;
};

/** 패널설문조사 질문 */
export type SurveyQuestion = SurveyQCheckboxAnswer | SurveyQDropdowneAnswer | SurveyQLongAsnwer | SurveyQMultiChoiceAnswer | SurveyQShortAsnwer;

/** 패널 설문조사 문항 생성 */
export type SurveyQuestionCreateInput = {
  /** 순번 */
  idx: Scalars['Float']['input'];
  /** 객관식/체크박스/드랍다운 옵션들 */
  options: Array<SurveyQoCreateInput>;
  /** 장문/단답형 placeHolder */
  placeholder: Scalars['String']['input'];
  /** 필수 여부 */
  required: Scalars['Boolean']['input'];
  /** 문항명 */
  title: Scalars['String']['input'];
  /** 문항 타입 */
  type: SurveyQuestionTypeEnum;
};

/** 패널설문조사 질문 유형 */
export enum SurveyQuestionTypeEnum {
  /** 체크박스 */
  Checkbox = 'CHECKBOX',
  /** 드롭다운 */
  Dropdown = 'DROPDOWN',
  /** 장문형 */
  LongAnswer = 'LONG_ANSWER',
  /** 객관식 질문 */
  MultiChoice = 'MULTI_CHOICE',
  /** 단답형 */
  ShortAnswer = 'SHORT_ANSWER'
}

/** 패널 설문 조사 문항 수정 */
export type SurveyQuestionUpdateInput = {
  /** 문항 아이디, null일경우 수정이 아닌 생성으로 처리 */
  id: Scalars['ID']['input'];
  /** 순번 */
  idx: Scalars['Float']['input'];
  /** 객관식/체크박스/드랍다운 옵션들 */
  options: Array<SurveyQoCreateInput>;
  /** 장문/단답형 placeHolder */
  placeholder: Scalars['String']['input'];
  /** 필수 여부 */
  required: Scalars['Boolean']['input'];
  /** 문항명 */
  title: Scalars['String']['input'];
};

/** 체크박스 응답 */
export type SurveyRCheckBox = {
  __typename?: 'SurveyRCheckBox';
  /** 질문 아이디 */
  questionId: Scalars['ID']['output'];
  /** 질문 종류 */
  type: SurveyQuestionTypeEnum;
  /** 선택한 값 */
  value: SurveyRCheckBoxValue;
};

/** 체크박스 응답 value */
export type SurveyRCheckBoxValue = {
  __typename?: 'SurveyRCheckBoxValue';
  /** 기타(직접입력) 타입 여부 */
  isEtc: Scalars['Boolean']['output'];
  /** 선택한 옵션 */
  optionId: Scalars['ID']['output'];
  /** 옵션 Name, 기타일 경우 입력 값 */
  value: Scalars['String']['output'];
};

/** 체크박스 응답 value Input */
export type SurveyRCheckBoxValueInput = {
  /** 기타(직접입력) 타입 여부 */
  isEtc: Scalars['Boolean']['input'];
  /** 선택한 옵션 */
  optionId: Scalars['ID']['input'];
  /** 옵션 Name, 기타일 경우 입력 값 */
  value: Scalars['String']['input'];
};

/** 드랍다운 응답 */
export type SurveyRDropdown = {
  __typename?: 'SurveyRDropdown';
  /** 질문 아이디 */
  questionId: Scalars['ID']['output'];
  /** 질문 종류 */
  type: SurveyQuestionTypeEnum;
  /** 선택한 옵션 */
  value: SurveyRDropdownValue;
};

/** 드랍다운 응답 Value */
export type SurveyRDropdownValue = {
  __typename?: 'SurveyRDropdownValue';
  /** 선택한 옵션 */
  optionId: Scalars['ID']['output'];
  /** 옵션 Name */
  value: Scalars['String']['output'];
};

/** 드랍다운 응답 Value Input */
export type SurveyRDropdownValueInput = {
  /** 선택한 옵션 */
  optionId: Scalars['ID']['input'];
  /** 옵션 Name */
  value: Scalars['String']['input'];
};

/** 객관식 응답 */
export type SurveyRMultiChoice = {
  __typename?: 'SurveyRMultiChoice';
  /** 질문 아이디 */
  questionId: Scalars['ID']['output'];
  /** 질문 종류 */
  type: SurveyQuestionTypeEnum;
  /** 선택한 옵션들 */
  value: Array<SurveyRMultiChoiceValue>;
};

/** 객관식 응답 Value */
export type SurveyRMultiChoiceValue = {
  __typename?: 'SurveyRMultiChoiceValue';
  /** 선택한 옵션 */
  optionId: Scalars['ID']['output'];
  /** 옵션 Name */
  value: Scalars['String']['output'];
};

/** 객관식 응답 Value Input */
export type SurveyRMultiChoiceValueInput = {
  /** 선택한 옵션 */
  optionId: Scalars['ID']['input'];
  /** 옵션 Name */
  value: Scalars['String']['input'];
};

/** 장문/단답형 응답 */
export type SurveyRTextAnswer = {
  __typename?: 'SurveyRTextAnswer';
  /** 질문 아이디 */
  questionId: Scalars['ID']['output'];
  /** 질문 종류 */
  type: SurveyQuestionTypeEnum;
  value: Scalars['String']['output'];
};

/** 패널 설문 조사 응답 */
export type SurveyResponse = {
  __typename?: 'SurveyResponse';
  /** 답변자 */
  answer: Member;
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 응답 리스트 */
  responses: Array<SurveyResponseUnion>;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 패널설문조사 응답  Input */
export type SurveyResponseBaseInput = {
  /** 체크박스 응답 */
  checkBoxValue?: InputMaybe<SurveyRCheckBoxValueInput>;
  /** 드랍다운 응답 */
  dropBoxValue?: InputMaybe<SurveyRDropdownValueInput>;
  /** 객관식 응답 */
  multiBoxValue?: InputMaybe<Array<SurveyRMultiChoiceValueInput>>;
  /** 질문 아이디 */
  questionId: Scalars['ID']['input'];
  /** 장문/단답형 응답 */
  textValue?: InputMaybe<Scalars['String']['input']>;
  /** 질문 종류 */
  type: SurveyQuestionTypeEnum;
};

/** 패널 설문 조사 응답 타입 */
export type SurveyResponseUnion = SurveyRCheckBox | SurveyRDropdown | SurveyRMultiChoice | SurveyRTextAnswer;

/** 사용자 */
export type User = {
  /** 관리자용 유저 메모 */
  adminMemo?: Maybe<Scalars['String']['output']>;
  /** 생년월일 YYYYMMDD(ex 20231231) */
  birthday?: Maybe<Scalars['String']['output']>;
  /** 이메일 */
  email?: Maybe<Scalars['String']['output']>;
  /** UUID */
  id: Scalars['ID']['output'];
  /** 고유번호 */
  idx: Scalars['Int']['output'];
  /** 가입 날짜/시간 */
  joinedAt: Scalars['DateTime']['output'];
  /** 탈퇴 날짜/시간 */
  leavedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 고유 이름(아이디) */
  name?: Maybe<Scalars['String']['output']>;
  /** 닉네임 */
  nickname?: Maybe<Scalars['String']['output']>;
  /** 전화번호 */
  phoneNumber?: Maybe<Scalars['String']['output']>;
  /** 실명 */
  realname?: Maybe<Scalars['String']['output']>;
  /** 권한 타입 */
  role: UserRole;
  /** 상태 */
  state: UserState;
  /** 정지 처리된 시간 */
  suspendedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** 차단 기록 */
export type UserBlock = {
  __typename?: 'UserBlock';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  user: Member;
};

export type UserBlockEdge = {
  __typename?: 'UserBlockEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: UserBlock;
};

/** 차단 기록 목록 */
export type UserBlockList = {
  __typename?: 'UserBlockList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<UserBlockEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 외식기업 정보 */
export type UserCompany = {
  __typename?: 'UserCompany';
  /** 기업 주소 */
  companyAddress: Scalars['String']['output'];
  /** 사업자등록증 파일 - 본인과 관리자만 허용 */
  companyLicense?: Maybe<File>;
  /** 기업 명 */
  companyName: Scalars['String']['output'];
  /** 사업자 번호 */
  companyNumber: Scalars['String']['output'];
  /** 기업 대표자 */
  companyOwnerName: Scalars['String']['output'];
  /** 기업 형태 */
  companyType: Scalars['String']['output'];
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 상태 */
  state: UserCompanyState;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 외식기업 신청 정보 */
export type UserCompanyApply = {
  __typename?: 'UserCompanyApply';
  /** 기업 주소 */
  companyAddress: Scalars['String']['output'];
  /** 사업자등록증 파일 - 본인과 관리자만 허용 */
  companyLicense?: Maybe<File>;
  /** 기업 명 */
  companyName: Scalars['String']['output'];
  /** 사업자 번호 */
  companyNumber: Scalars['String']['output'];
  /** 기업 대표자 */
  companyOwnerName: Scalars['String']['output'];
  /** 기업 형태 */
  companyType: Scalars['String']['output'];
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 상태 */
  state: UserCompanyState;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
  user: Member;
};

export type UserCompanyApplyEdge = {
  __typename?: 'UserCompanyApplyEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: UserCompanyApply;
};

/** 외식기업 신청 */
export type UserCompanyApplyInput = {
  /** 기업 주소 */
  companyAddress: Scalars['String']['input'];
  /** 기업 명 */
  companyName: Scalars['String']['input'];
  /** 사업자 번호 */
  companyNumber: Scalars['String']['input'];
  /** 기업 대표자 */
  companyOwnerName: Scalars['String']['input'];
  /** 기업 형태 */
  companyType: Scalars['String']['input'];
};

/** 외식기업 신청 리스트 */
export type UserCompanyApplyList = {
  __typename?: 'UserCompanyApplyList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<UserCompanyApplyEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 외식기업 신청 리스트 필터 */
export type UserCompanyFilterInput = {
  /** 기업 주소 */
  companyAddress?: InputMaybe<Array<StringFilterInput>>;
  /** 기업 명 */
  companyName?: InputMaybe<Array<StringFilterInput>>;
  /** 기업 대표명 */
  companyOwnerName?: InputMaybe<Array<StringFilterInput>>;
  /** 기업 종류 */
  companyType?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 상태 */
  state?: InputMaybe<Array<UserCompanyStateFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 외식기업 신청 리스트 정렬 */
export type UserCompanySortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 외식업체 상태 */
export enum UserCompanyState {
  /** 활성화 상태 */
  Active = 'ACTIVE',
  /** 등록 신청상태 */
  Apply = 'APPLY',
  /** 등록 거절 */
  Reject = 'REJECT',
  /** 정지 */
  Stop = 'STOP'
}

/** 외식기업 상태 */
export type UserCompanyStateFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<UserCompanyState>;
  values?: InputMaybe<Array<UserCompanyState>>;
};

/** 외식기업 정보 수정input */
export type UserCompanyUpdateInput = {
  /** 기업 주소 */
  companyAddress: Scalars['String']['input'];
  /** 기업 명 */
  companyName: Scalars['String']['input'];
  /** 사업자 번호 */
  companyNumber: Scalars['String']['input'];
  /** 기업 대표자 */
  companyOwnerName: Scalars['String']['input'];
  /** 기업 형태 */
  companyType: Scalars['String']['input'];
};

export type UserEdge = {
  __typename?: 'UserEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: User;
};

/** 사용자 FCM 토큰 */
export type UserFcmToken = {
  __typename?: 'UserFCMToken';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** FCM 등록 토큰 */
  fcmRegistrationToken: Scalars['String']['output'];
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** OS */
  os: FcmTokenOsEnum;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
  user: Member;
};

/** 사용자 FCM 토큰 추가 */
export type UserFcmTokenAddInput = {
  /** FCM 등록 토큰 */
  fcmRegistrationToken: Scalars['String']['input'];
  /** OS */
  os: FcmTokenOsEnum;
};

export type UserFcmTokenEdge = {
  __typename?: 'UserFCMTokenEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: UserFcmToken;
};

/** 사용자 필터 */
export type UserFilterInput = {
  avatar__id?: InputMaybe<Array<IdFilterInput>>;
  /** 이메일 */
  email?: InputMaybe<Array<StringFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 고유번호 */
  idx?: InputMaybe<Array<IntFilterInput>>;
  /** 가입 날짜/시간 */
  joinedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 탈퇴 날짜/시간 */
  leavedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 고유 이름(아이디) */
  name?: InputMaybe<Array<StringFilterInput>>;
  /** 전화번호 */
  phoneNumber?: InputMaybe<Array<StringFilterInput>>;
  /** 권한 타입 */
  role?: InputMaybe<Array<UserTypeFilterInput>>;
};

/** 유저 탈퇴 로그 */
export type UserLeaveLog = {
  __typename?: 'UserLeaveLog';
  /** 피드백 */
  comment?: Maybe<Scalars['String']['output']>;
  /** 탈퇴 사유 */
  reason: Scalars['String']['output'];
  /** 탈퇴 유저 */
  user: Member;
};

export type UserLeaveLogEdge = {
  __typename?: 'UserLeaveLogEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: UserLeaveLog;
};

/** 유저 탈퇴 필터 input */
export type UserLeaveLogFilterInput = {
  /** 탈퇴 사유 */
  reason?: InputMaybe<Array<StringFilterInput>>;
};

/** 유저 탈퇴 로그 리스트 */
export type UserLeaveLogList = {
  __typename?: 'UserLeaveLogList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<UserLeaveLogEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 유저 탈퇴 정렬 input */
export type UserLeaveLogSortInput = {
  /** 탈퇴 사유 */
  reason?: InputMaybe<SortInput>;
};

/** 사용자 목록 */
export type UserList = {
  __typename?: 'UserList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<UserEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 사용자 알림 설정 */
export type UserNotificationSetting = {
  __typename?: 'UserNotificationSetting';
  /** 채팅 알림 */
  chat: Scalars['Boolean']['output'];
  /** 커뮤니티 댓글 알림 */
  communityCommend: Scalars['Boolean']['output'];
  /** 커뮤니티 게시글 알림 */
  communityPost: Scalars['Boolean']['output'];
  /** 팔로우 알림 */
  follow: Scalars['Boolean']['output'];
  /** 키워드 알림 */
  keyword: Scalars['Boolean']['output'];
  /** 마케팅 알림 */
  marketing: Scalars['Boolean']['output'];
  /** 공지사항 알림 */
  notice: Scalars['Boolean']['output'];
};

/** 사용자 알림 설정 수정 */
export type UserNotificationSettingUpdateInput = {
  /** 채팅 알림 */
  chat?: InputMaybe<Scalars['Boolean']['input']>;
  /** 커뮤니티 댓글 알림 */
  communityCommend?: InputMaybe<Scalars['Boolean']['input']>;
  /** 커뮤니티 게시글 알림 */
  communityPost?: InputMaybe<Scalars['Boolean']['input']>;
  /** 팔로우 알림 */
  follow?: InputMaybe<Scalars['Boolean']['input']>;
  /** 키워드 알림 */
  keyword?: InputMaybe<Scalars['Boolean']['input']>;
  /** 마케팅 알림 */
  marketing?: InputMaybe<Scalars['Boolean']['input']>;
  /** 공지사항 알림 */
  notice?: InputMaybe<Scalars['Boolean']['input']>;
};

/** 사용자 정렬 */
export type UserOrderInput = {
  /** 이메일 */
  email?: InputMaybe<StringSortInput>;
  /** UUID */
  id?: InputMaybe<StringSortInput>;
  /** 고유번호 */
  idx?: InputMaybe<IntSortInput>;
  /** 가입 날짜/시간 */
  joinedAt?: InputMaybe<SortInput>;
  /** 탈퇴 날짜/시간 */
  leavedAt?: InputMaybe<SortInput>;
  /** 고유 이름(아이디) */
  name?: InputMaybe<StringSortInput>;
  /** 전화번호 */
  phoneNumber?: InputMaybe<StringSortInput>;
  /** 권한 타입 */
  role?: InputMaybe<UserTypeSortInput>;
};

/** 사용자 프로필 */
export type UserProfile = {
  __typename?: 'UserProfile';
  /** 프로필 설명 */
  description?: Maybe<Scalars['String']['output']>;
  /** 홈페이지 등 링크 */
  url?: Maybe<Scalars['String']['output']>;
};

/** 프로필 수정 */
export type UserProfileUpdateInput = {
  /** 프로필 설명 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 홈페이지 등 링크 */
  url?: InputMaybe<Scalars['String']['input']>;
};

/** 사용자 권한 */
export enum UserRole {
  /** 관리자 */
  Admin = 'ADMIN',
  AdminPac1 = 'ADMIN_PAC1',
  AdminPac2 = 'ADMIN_PAC2',
  /** 일반 사용자 */
  Member = 'MEMBER',
  /** 자영업자(외식업체) */
  SelfEmployed = 'SELF_EMPLOYED'
}

/** 사용자 소셜 서비스 연결 */
export type UserSocialLink = {
  __typename?: 'UserSocialLink';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 이메일 */
  email?: Maybe<Scalars['String']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 소셜 서비스 종류 */
  socialType: UserSocialType;
};

/** 사용자 소셜 종류 */
export enum UserSocialType {
  /** 애플 */
  Apple = 'APPLE',
  /** 구글 */
  Google = 'GOOGLE',
  /** 카카오 */
  Kakao = 'KAKAO',
  /** 네이버 */
  Naver = 'NAVER'
}

/** 사용자 상태 */
export enum UserState {
  /** 활성화 상태 */
  Active = 'ACTIVE',
  /** 비활성화 상태 - 휴면계정 */
  Inactive = 'INACTIVE',
  /** 탈퇴상태 */
  Leaved = 'LEAVED',
  /** 가입 대기중 */
  Pending = 'PENDING',
  /** 정지 */
  Suspended = 'SUSPENDED'
}

/** 사용자 타입 필터 */
export type UserTypeFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<UserRole>;
  values?: InputMaybe<Array<UserRole>>;
};

/** 사용자 타입 정렬 */
export type UserTypeSortInput = {
  case?: InputMaybe<Array<UserRole>>;
  nulls?: InputMaybe<Nulls>;
  order: Order;
};

/** 사용자 수정 데이터 */
export type UserUpdateInput = {
  /** 생년월일 YYYYMMDD */
  birthday?: InputMaybe<Scalars['Birthday']['input']>;
  /** 고유 이름(아이디) */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 닉네임 */
  nickname?: InputMaybe<Scalars['String']['input']>;
  notificationSetting?: InputMaybe<UserNotificationSettingUpdateInput>;
  profile?: InputMaybe<UserProfileUpdateInput>;
  /** 실명 */
  realname?: InputMaybe<Scalars['String']['input']>;
};

/** 영상 게시글 상태 */
export enum VideoStateEnum {
  /** 활성화(정상) */
  Active = 'ACTIVE',
  /** 영상 처리간 에러 발생 */
  Error = 'ERROR',
  /** 비활성화 */
  InActive = 'IN_ACTIVE',
  /** 관리자 심사중 */
  OnReview = 'ON_REVIEW',
  /** 영상 처리 대기중 */
  Ready = 'READY',
  /** 심사 거절 */
  Reject = 'REJECT'
}

/** 영상 상태 필터 */
export type VideoStateFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<VideoStateEnum>;
  values?: InputMaybe<Array<VideoStateEnum>>;
};

/** 비메오 영상 썸네일 */
export type VimeoThumbnail = {
  __typename?: 'VimeoThumbnail';
  active: Scalars['Boolean']['output'];
  base_link: Scalars['String']['output'];
  type: Scalars['String']['output'];
  /** url */
  uri?: Maybe<Scalars['String']['output']>;
};

/** 비메오 영상 업로드 링크 정보 */
export type VimeoUploadInfo = {
  __typename?: 'VimeoUploadInfo';
  /** 업로드 링크 */
  upload_link: Scalars['String']['output'];
  /** 영상 번호 */
  videoNumber: Scalars['Float']['output'];
};

/** 근무 요일,모두 비활성화이라면 '요일협의' */
export enum WorkingDayEnum {
  /** 활성화 */
  Active = 'ACTIVE',
  /** 비활성화 */
  Inactive = 'INACTIVE'
}

export type UndefinedEdge = {
  __typename?: 'undefinedEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: AdminPostModel;
};

export type GetKakaoAccessTokenMutationVariables = Exact<{
  code: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
}>;


export type GetKakaoAccessTokenMutation = { __typename?: 'Mutation', getKakaoAccessToken: { __typename?: 'KakaoAccessData', isJoin: boolean, jwtData: { __typename?: 'KakaoJWTData', access_token: string } } };

export type SignUpGoogleMutationVariables = Exact<{
  accessToken: Scalars['String']['input'];
}>;


export type SignUpGoogleMutation = { __typename?: 'Mutation', signUpGoogle: { __typename?: 'SignUpResult', token: { __typename?: 'AuthTokenResponse', accessToken: string }, user: { __typename?: 'Member', id: string } } };

export type SignInKakaoMutationVariables = Exact<{
  accessToken: Scalars['String']['input'];
}>;


export type SignInKakaoMutation = { __typename?: 'Mutation', signInKakao: { __typename?: 'AuthTokenResponse', accessToken: string } };

export type SignUpKakaoMutationVariables = Exact<{
  accessToken: Scalars['String']['input'];
}>;


export type SignUpKakaoMutation = { __typename?: 'Mutation', signUpKakao: { __typename?: 'SignUpResult', token: { __typename?: 'AuthTokenResponse', accessToken: string }, user: { __typename?: 'Member', id: string } } };

export type SignUpNaverMutationVariables = Exact<{
  accessToken: Scalars['String']['input'];
}>;


export type SignUpNaverMutation = { __typename?: 'Mutation', signUpNaver: { __typename?: 'SignUpResult', token: { __typename?: 'AuthTokenResponse', accessToken: string }, user: { __typename?: 'Member', id: string } } };

export type SignInMutationVariables = Exact<{
  loginId: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'AuthTokenResponse', accessToken: string } };

export type NoticePostNavigationQueryVariables = Exact<{
  noticePostNavigationId: Scalars['ID']['input'];
  params?: InputMaybe<NoticePostNavigationParamsInput>;
}>;


export type NoticePostNavigationQuery = { __typename?: 'Query', noticePostNavigation: { __typename?: 'NoticePostNavigation', prePostId?: string | null, nextPostId?: string | null, params?: { __typename?: 'NoticePostNavigationParams', search?: string | null } | null } };

export type NoticePostRepliesQueryVariables = Exact<{
  filter?: InputMaybe<Array<NoticeReplyFilterInput> | NoticeReplyFilterInput>;
}>;


export type NoticePostRepliesQuery = { __typename?: 'Query', noticePostReplies: { __typename?: 'NoticeReplyList', edges: Array<{ __typename?: 'NoticeReplyEdge', node: { __typename?: 'NoticeReply', id: string, content: string, createdAt: any, isMine: boolean, author: { __typename?: 'Member', name?: string | null } } } | null> } };

export type NoticePostQueryVariables = Exact<{
  noticePostId: Scalars['ID']['input'];
}>;


export type NoticePostQuery = { __typename?: 'Query', noticePost: { __typename?: 'NoticePost', viewCnt: number, title?: string | null, replyCount: number, likeCnt: number, isLike: boolean, isFavorite: boolean, id: string, content: string, isPinned?: boolean | null, createdAt: any, files?: Array<{ __typename?: 'File', id: string, url: string, filename: string }> | null, category?: { __typename?: 'NoticeCategory', name: string, id: string } | null, author: { __typename?: 'Member', name?: string | null, nickname?: string | null, id: string } } };

export type NoticePostsQueryVariables = Exact<{
  filter?: InputMaybe<Array<NoticePostFilterInput> | NoticePostFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type NoticePostsQuery = { __typename?: 'Query', noticePosts: { __typename?: 'NoticePostList', totalCount: number, edges: Array<{ __typename?: 'NoticePostEdge', node: { __typename?: 'NoticePost', id: string, likeCnt: number, createdAt: any, title?: string | null, viewCnt: number, replyCount: number, author: { __typename?: 'Member', email?: string | null, name?: string | null, nickname?: string | null }, category?: { __typename?: 'NoticeCategory', name: string, id: string } | null, files?: Array<{ __typename?: 'File', url: string, id: string, filename: string }> | null } } | null> } };

export type ReadBusinessChatMessagesMutationVariables = Exact<{
  channelId: Scalars['ID']['input'];
}>;


export type ReadBusinessChatMessagesMutation = { __typename?: 'Mutation', readBusinessChatMessages: boolean };

export type SendBusinessChatMessageMutationVariables = Exact<{
  data: BusinessChatMessageCreateInput;
}>;


export type SendBusinessChatMessageMutation = { __typename?: 'Mutation', sendBusinessChatMessage: { __typename?: 'BChatMessage', id: string } };

export type BusinessChatChannelQueryVariables = Exact<{
  businessChatChannelId: Scalars['ID']['input'];
}>;


export type BusinessChatChannelQuery = { __typename?: 'Query', businessChatChannel: { __typename?: 'BChatChannel', id: string, state: ChatChannelState, secondhand?: { __typename?: 'Secondhand', title: string, content: string, price: number, state: SecondhandStateEnum, images?: Array<{ __typename?: 'File', url: string }> | null, author: { __typename?: 'Member', id: string, name?: string | null }, category: { __typename?: 'SecondhandCategory', id: string, name: string } } | null } };

export type BusinessChatMessagesQueryVariables = Exact<{
  channelId: Scalars['ID']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
}>;


export type BusinessChatMessagesQuery = { __typename?: 'Query', businessChatMessages: { __typename?: 'BChatMessageList', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, edges: Array<{ __typename?: 'BChatMessageEdge', node: { __typename?: 'BChatMessage', id: string, message?: string | null, type: ChatMessageType, unreadUserCount: number, createdAt: any, author?: { __typename?: 'Member', name?: string | null, id: string } | null, payload?: { __typename?: 'ChatMessageCardTypePayload', image: { __typename?: 'File', url: string, size: number, filename: string } } | { __typename?: 'ChatMessageFileTypePayload', id: string, filename: string, size: number, url: string } | { __typename?: 'ChatMessageLinkTypePayload', link: string } | null, channel: { __typename?: 'BChatChannel', secondhand?: { __typename?: 'Secondhand', author: { __typename?: 'Member', id: string, name?: string | null } } | null, participants: Array<{ __typename?: 'BChatChannelParticipant', isMine: boolean, user: { __typename?: 'Member', id: string, name?: string | null } }> } } } | null> } };

export type MyBusinessChatChannelsQueryVariables = Exact<{
  sort?: InputMaybe<Array<ChatChannelOrderByInput> | ChatChannelOrderByInput>;
}>;


export type MyBusinessChatChannelsQuery = { __typename?: 'Query', myBusinessChatChannels: { __typename?: 'BChatChannelList', totalCount: number, edges: Array<{ __typename?: 'BChatChannelEdge', node: { __typename?: 'BChatChannel', id: string, state: ChatChannelState, unreadMessageCount: number, updatedAt: any, secondhand?: { __typename?: 'Secondhand', content: string, state: SecondhandStateEnum, title: string, price: number, images?: Array<{ __typename?: 'File', url: string }> | null, author: { __typename?: 'Member', id: string, name?: string | null }, category: { __typename?: 'SecondhandCategory', name: string, id: string } } | null, lastMessage?: { __typename?: 'BChatMessage', message?: string | null } | null } } | null> } };

export type ReceiveBusinessChatMessageSubscriptionVariables = Exact<{
  channelId: Scalars['ID']['input'];
}>;


export type ReceiveBusinessChatMessageSubscription = { __typename?: 'Subscription', receiveBusinessChatMessage: { __typename?: 'BChatMessage', id: string, message?: string | null, author?: { __typename?: 'Member', name?: string | null } | null } };


export const GetKakaoAccessTokenDocument = gql`
    mutation GetKakaoAccessToken($code: String!, $redirectUri: String!) {
  getKakaoAccessToken(code: $code, redirectUri: $redirectUri) {
    isJoin
    jwtData {
      access_token
    }
  }
}
    `;
export type GetKakaoAccessTokenMutationFn = Apollo.MutationFunction<GetKakaoAccessTokenMutation, GetKakaoAccessTokenMutationVariables>;

/**
 * __useGetKakaoAccessTokenMutation__
 *
 * To run a mutation, you first call `useGetKakaoAccessTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetKakaoAccessTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getKakaoAccessTokenMutation, { data, loading, error }] = useGetKakaoAccessTokenMutation({
 *   variables: {
 *      code: // value for 'code'
 *      redirectUri: // value for 'redirectUri'
 *   },
 * });
 */
export function useGetKakaoAccessTokenMutation(baseOptions?: Apollo.MutationHookOptions<GetKakaoAccessTokenMutation, GetKakaoAccessTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetKakaoAccessTokenMutation, GetKakaoAccessTokenMutationVariables>(GetKakaoAccessTokenDocument, options);
      }
export type GetKakaoAccessTokenMutationHookResult = ReturnType<typeof useGetKakaoAccessTokenMutation>;
export type GetKakaoAccessTokenMutationResult = Apollo.MutationResult<GetKakaoAccessTokenMutation>;
export type GetKakaoAccessTokenMutationOptions = Apollo.BaseMutationOptions<GetKakaoAccessTokenMutation, GetKakaoAccessTokenMutationVariables>;
export const SignUpGoogleDocument = gql`
    mutation SignUpGoogle($accessToken: String!) {
  signUpGoogle(accessToken: $accessToken) {
    token {
      accessToken
    }
    user {
      id
    }
  }
}
    `;
export type SignUpGoogleMutationFn = Apollo.MutationFunction<SignUpGoogleMutation, SignUpGoogleMutationVariables>;

/**
 * __useSignUpGoogleMutation__
 *
 * To run a mutation, you first call `useSignUpGoogleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpGoogleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpGoogleMutation, { data, loading, error }] = useSignUpGoogleMutation({
 *   variables: {
 *      accessToken: // value for 'accessToken'
 *   },
 * });
 */
export function useSignUpGoogleMutation(baseOptions?: Apollo.MutationHookOptions<SignUpGoogleMutation, SignUpGoogleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpGoogleMutation, SignUpGoogleMutationVariables>(SignUpGoogleDocument, options);
      }
export type SignUpGoogleMutationHookResult = ReturnType<typeof useSignUpGoogleMutation>;
export type SignUpGoogleMutationResult = Apollo.MutationResult<SignUpGoogleMutation>;
export type SignUpGoogleMutationOptions = Apollo.BaseMutationOptions<SignUpGoogleMutation, SignUpGoogleMutationVariables>;
export const SignInKakaoDocument = gql`
    mutation SignInKakao($accessToken: String!) {
  signInKakao(accessToken: $accessToken) {
    accessToken
  }
}
    `;
export type SignInKakaoMutationFn = Apollo.MutationFunction<SignInKakaoMutation, SignInKakaoMutationVariables>;

/**
 * __useSignInKakaoMutation__
 *
 * To run a mutation, you first call `useSignInKakaoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInKakaoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInKakaoMutation, { data, loading, error }] = useSignInKakaoMutation({
 *   variables: {
 *      accessToken: // value for 'accessToken'
 *   },
 * });
 */
export function useSignInKakaoMutation(baseOptions?: Apollo.MutationHookOptions<SignInKakaoMutation, SignInKakaoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInKakaoMutation, SignInKakaoMutationVariables>(SignInKakaoDocument, options);
      }
export type SignInKakaoMutationHookResult = ReturnType<typeof useSignInKakaoMutation>;
export type SignInKakaoMutationResult = Apollo.MutationResult<SignInKakaoMutation>;
export type SignInKakaoMutationOptions = Apollo.BaseMutationOptions<SignInKakaoMutation, SignInKakaoMutationVariables>;
export const SignUpKakaoDocument = gql`
    mutation SignUpKakao($accessToken: String!) {
  signUpKakao(accessToken: $accessToken) {
    token {
      accessToken
    }
    user {
      id
    }
  }
}
    `;
export type SignUpKakaoMutationFn = Apollo.MutationFunction<SignUpKakaoMutation, SignUpKakaoMutationVariables>;

/**
 * __useSignUpKakaoMutation__
 *
 * To run a mutation, you first call `useSignUpKakaoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpKakaoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpKakaoMutation, { data, loading, error }] = useSignUpKakaoMutation({
 *   variables: {
 *      accessToken: // value for 'accessToken'
 *   },
 * });
 */
export function useSignUpKakaoMutation(baseOptions?: Apollo.MutationHookOptions<SignUpKakaoMutation, SignUpKakaoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpKakaoMutation, SignUpKakaoMutationVariables>(SignUpKakaoDocument, options);
      }
export type SignUpKakaoMutationHookResult = ReturnType<typeof useSignUpKakaoMutation>;
export type SignUpKakaoMutationResult = Apollo.MutationResult<SignUpKakaoMutation>;
export type SignUpKakaoMutationOptions = Apollo.BaseMutationOptions<SignUpKakaoMutation, SignUpKakaoMutationVariables>;
export const SignUpNaverDocument = gql`
    mutation SignUpNaver($accessToken: String!) {
  signUpNaver(accessToken: $accessToken) {
    token {
      accessToken
    }
    user {
      id
    }
  }
}
    `;
export type SignUpNaverMutationFn = Apollo.MutationFunction<SignUpNaverMutation, SignUpNaverMutationVariables>;

/**
 * __useSignUpNaverMutation__
 *
 * To run a mutation, you first call `useSignUpNaverMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpNaverMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpNaverMutation, { data, loading, error }] = useSignUpNaverMutation({
 *   variables: {
 *      accessToken: // value for 'accessToken'
 *   },
 * });
 */
export function useSignUpNaverMutation(baseOptions?: Apollo.MutationHookOptions<SignUpNaverMutation, SignUpNaverMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpNaverMutation, SignUpNaverMutationVariables>(SignUpNaverDocument, options);
      }
export type SignUpNaverMutationHookResult = ReturnType<typeof useSignUpNaverMutation>;
export type SignUpNaverMutationResult = Apollo.MutationResult<SignUpNaverMutation>;
export type SignUpNaverMutationOptions = Apollo.BaseMutationOptions<SignUpNaverMutation, SignUpNaverMutationVariables>;
export const SignInDocument = gql`
    mutation SignIn($loginId: String!, $password: String!) {
  signIn(loginId: $loginId, password: $password) {
    accessToken
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      loginId: // value for 'loginId'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const NoticePostNavigationDocument = gql`
    query NoticePostNavigation($noticePostNavigationId: ID!, $params: NoticePostNavigationParamsInput) {
  noticePostNavigation(id: $noticePostNavigationId, params: $params) {
    prePostId
    nextPostId
    params {
      search
    }
  }
}
    `;

/**
 * __useNoticePostNavigationQuery__
 *
 * To run a query within a React component, call `useNoticePostNavigationQuery` and pass it any options that fit your needs.
 * When your component renders, `useNoticePostNavigationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNoticePostNavigationQuery({
 *   variables: {
 *      noticePostNavigationId: // value for 'noticePostNavigationId'
 *      params: // value for 'params'
 *   },
 * });
 */
export function useNoticePostNavigationQuery(baseOptions: Apollo.QueryHookOptions<NoticePostNavigationQuery, NoticePostNavigationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NoticePostNavigationQuery, NoticePostNavigationQueryVariables>(NoticePostNavigationDocument, options);
      }
export function useNoticePostNavigationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NoticePostNavigationQuery, NoticePostNavigationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NoticePostNavigationQuery, NoticePostNavigationQueryVariables>(NoticePostNavigationDocument, options);
        }
export type NoticePostNavigationQueryHookResult = ReturnType<typeof useNoticePostNavigationQuery>;
export type NoticePostNavigationLazyQueryHookResult = ReturnType<typeof useNoticePostNavigationLazyQuery>;
export type NoticePostNavigationQueryResult = Apollo.QueryResult<NoticePostNavigationQuery, NoticePostNavigationQueryVariables>;
export const NoticePostRepliesDocument = gql`
    query NoticePostReplies($filter: [NoticeReplyFilterInput!]) {
  noticePostReplies(filter: $filter) {
    edges {
      node {
        id
        author {
          name
        }
        content
        createdAt
        isMine
      }
    }
  }
}
    `;

/**
 * __useNoticePostRepliesQuery__
 *
 * To run a query within a React component, call `useNoticePostRepliesQuery` and pass it any options that fit your needs.
 * When your component renders, `useNoticePostRepliesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNoticePostRepliesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useNoticePostRepliesQuery(baseOptions?: Apollo.QueryHookOptions<NoticePostRepliesQuery, NoticePostRepliesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NoticePostRepliesQuery, NoticePostRepliesQueryVariables>(NoticePostRepliesDocument, options);
      }
export function useNoticePostRepliesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NoticePostRepliesQuery, NoticePostRepliesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NoticePostRepliesQuery, NoticePostRepliesQueryVariables>(NoticePostRepliesDocument, options);
        }
export type NoticePostRepliesQueryHookResult = ReturnType<typeof useNoticePostRepliesQuery>;
export type NoticePostRepliesLazyQueryHookResult = ReturnType<typeof useNoticePostRepliesLazyQuery>;
export type NoticePostRepliesQueryResult = Apollo.QueryResult<NoticePostRepliesQuery, NoticePostRepliesQueryVariables>;
export const NoticePostDocument = gql`
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
    isPinned
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

/**
 * __useNoticePostQuery__
 *
 * To run a query within a React component, call `useNoticePostQuery` and pass it any options that fit your needs.
 * When your component renders, `useNoticePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNoticePostQuery({
 *   variables: {
 *      noticePostId: // value for 'noticePostId'
 *   },
 * });
 */
export function useNoticePostQuery(baseOptions: Apollo.QueryHookOptions<NoticePostQuery, NoticePostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NoticePostQuery, NoticePostQueryVariables>(NoticePostDocument, options);
      }
export function useNoticePostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NoticePostQuery, NoticePostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NoticePostQuery, NoticePostQueryVariables>(NoticePostDocument, options);
        }
export type NoticePostQueryHookResult = ReturnType<typeof useNoticePostQuery>;
export type NoticePostLazyQueryHookResult = ReturnType<typeof useNoticePostLazyQuery>;
export type NoticePostQueryResult = Apollo.QueryResult<NoticePostQuery, NoticePostQueryVariables>;
export const NoticePostsDocument = gql`
    query NoticePosts($filter: [NoticePostFilterInput!], $first: Int, $offset: Int) {
  noticePosts(filter: $filter, first: $first, offset: $offset) {
    totalCount
    edges {
      node {
        id
        likeCnt
        author {
          email
          name
          nickname
        }
        createdAt
        category {
          name
          id
        }
        title
        viewCnt
        replyCount
        files {
          url
          id
          filename
        }
      }
    }
  }
}
    `;

/**
 * __useNoticePostsQuery__
 *
 * To run a query within a React component, call `useNoticePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNoticePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNoticePostsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      first: // value for 'first'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useNoticePostsQuery(baseOptions?: Apollo.QueryHookOptions<NoticePostsQuery, NoticePostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NoticePostsQuery, NoticePostsQueryVariables>(NoticePostsDocument, options);
      }
export function useNoticePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NoticePostsQuery, NoticePostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NoticePostsQuery, NoticePostsQueryVariables>(NoticePostsDocument, options);
        }
export type NoticePostsQueryHookResult = ReturnType<typeof useNoticePostsQuery>;
export type NoticePostsLazyQueryHookResult = ReturnType<typeof useNoticePostsLazyQuery>;
export type NoticePostsQueryResult = Apollo.QueryResult<NoticePostsQuery, NoticePostsQueryVariables>;
export const ReadBusinessChatMessagesDocument = gql`
    mutation ReadBusinessChatMessages($channelId: ID!) {
  readBusinessChatMessages(channelId: $channelId)
}
    `;
export type ReadBusinessChatMessagesMutationFn = Apollo.MutationFunction<ReadBusinessChatMessagesMutation, ReadBusinessChatMessagesMutationVariables>;

/**
 * __useReadBusinessChatMessagesMutation__
 *
 * To run a mutation, you first call `useReadBusinessChatMessagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReadBusinessChatMessagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [readBusinessChatMessagesMutation, { data, loading, error }] = useReadBusinessChatMessagesMutation({
 *   variables: {
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useReadBusinessChatMessagesMutation(baseOptions?: Apollo.MutationHookOptions<ReadBusinessChatMessagesMutation, ReadBusinessChatMessagesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReadBusinessChatMessagesMutation, ReadBusinessChatMessagesMutationVariables>(ReadBusinessChatMessagesDocument, options);
      }
export type ReadBusinessChatMessagesMutationHookResult = ReturnType<typeof useReadBusinessChatMessagesMutation>;
export type ReadBusinessChatMessagesMutationResult = Apollo.MutationResult<ReadBusinessChatMessagesMutation>;
export type ReadBusinessChatMessagesMutationOptions = Apollo.BaseMutationOptions<ReadBusinessChatMessagesMutation, ReadBusinessChatMessagesMutationVariables>;
export const SendBusinessChatMessageDocument = gql`
    mutation SendBusinessChatMessage($data: BusinessChatMessageCreateInput!) {
  sendBusinessChatMessage(data: $data) {
    id
  }
}
    `;
export type SendBusinessChatMessageMutationFn = Apollo.MutationFunction<SendBusinessChatMessageMutation, SendBusinessChatMessageMutationVariables>;

/**
 * __useSendBusinessChatMessageMutation__
 *
 * To run a mutation, you first call `useSendBusinessChatMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendBusinessChatMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendBusinessChatMessageMutation, { data, loading, error }] = useSendBusinessChatMessageMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSendBusinessChatMessageMutation(baseOptions?: Apollo.MutationHookOptions<SendBusinessChatMessageMutation, SendBusinessChatMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendBusinessChatMessageMutation, SendBusinessChatMessageMutationVariables>(SendBusinessChatMessageDocument, options);
      }
export type SendBusinessChatMessageMutationHookResult = ReturnType<typeof useSendBusinessChatMessageMutation>;
export type SendBusinessChatMessageMutationResult = Apollo.MutationResult<SendBusinessChatMessageMutation>;
export type SendBusinessChatMessageMutationOptions = Apollo.BaseMutationOptions<SendBusinessChatMessageMutation, SendBusinessChatMessageMutationVariables>;
export const BusinessChatChannelDocument = gql`
    query BusinessChatChannel($businessChatChannelId: ID!) {
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

/**
 * __useBusinessChatChannelQuery__
 *
 * To run a query within a React component, call `useBusinessChatChannelQuery` and pass it any options that fit your needs.
 * When your component renders, `useBusinessChatChannelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBusinessChatChannelQuery({
 *   variables: {
 *      businessChatChannelId: // value for 'businessChatChannelId'
 *   },
 * });
 */
export function useBusinessChatChannelQuery(baseOptions: Apollo.QueryHookOptions<BusinessChatChannelQuery, BusinessChatChannelQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BusinessChatChannelQuery, BusinessChatChannelQueryVariables>(BusinessChatChannelDocument, options);
      }
export function useBusinessChatChannelLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BusinessChatChannelQuery, BusinessChatChannelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BusinessChatChannelQuery, BusinessChatChannelQueryVariables>(BusinessChatChannelDocument, options);
        }
export type BusinessChatChannelQueryHookResult = ReturnType<typeof useBusinessChatChannelQuery>;
export type BusinessChatChannelLazyQueryHookResult = ReturnType<typeof useBusinessChatChannelLazyQuery>;
export type BusinessChatChannelQueryResult = Apollo.QueryResult<BusinessChatChannelQuery, BusinessChatChannelQueryVariables>;
export const BusinessChatMessagesDocument = gql`
    query BusinessChatMessages($channelId: ID!, $after: String, $first: Int) {
  businessChatMessages(channelId: $channelId, after: $after, first: $first) {
    totalCount
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        id
        message
        type
        unreadUserCount
        createdAt
        author {
          name
          id
        }
        payload {
          ... on ChatMessageFileTypePayload {
            id
            filename
            id
            size
            url
          }
          ... on ChatMessageCardTypePayload {
            image {
              url
              size
              filename
            }
          }
          ... on ChatMessageLinkTypePayload {
            link
          }
        }
        channel {
          secondhand {
            author {
              id
              name
            }
          }
          participants {
            isMine
            user {
              id
              name
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useBusinessChatMessagesQuery__
 *
 * To run a query within a React component, call `useBusinessChatMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useBusinessChatMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBusinessChatMessagesQuery({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      after: // value for 'after'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useBusinessChatMessagesQuery(baseOptions: Apollo.QueryHookOptions<BusinessChatMessagesQuery, BusinessChatMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BusinessChatMessagesQuery, BusinessChatMessagesQueryVariables>(BusinessChatMessagesDocument, options);
      }
export function useBusinessChatMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BusinessChatMessagesQuery, BusinessChatMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BusinessChatMessagesQuery, BusinessChatMessagesQueryVariables>(BusinessChatMessagesDocument, options);
        }
export type BusinessChatMessagesQueryHookResult = ReturnType<typeof useBusinessChatMessagesQuery>;
export type BusinessChatMessagesLazyQueryHookResult = ReturnType<typeof useBusinessChatMessagesLazyQuery>;
export type BusinessChatMessagesQueryResult = Apollo.QueryResult<BusinessChatMessagesQuery, BusinessChatMessagesQueryVariables>;
export const MyBusinessChatChannelsDocument = gql`
    query MyBusinessChatChannels($sort: [ChatChannelOrderByInput!]) {
  myBusinessChatChannels(sort: $sort) {
    edges {
      node {
        id
        state
        unreadMessageCount
        secondhand {
          content
          images {
            url
          }
          state
          title
          price
          author {
            id
            name
          }
          category {
            name
            id
          }
        }
        lastMessage {
          message
        }
        updatedAt
      }
    }
    totalCount
  }
}
    `;

/**
 * __useMyBusinessChatChannelsQuery__
 *
 * To run a query within a React component, call `useMyBusinessChatChannelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyBusinessChatChannelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyBusinessChatChannelsQuery({
 *   variables: {
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useMyBusinessChatChannelsQuery(baseOptions?: Apollo.QueryHookOptions<MyBusinessChatChannelsQuery, MyBusinessChatChannelsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyBusinessChatChannelsQuery, MyBusinessChatChannelsQueryVariables>(MyBusinessChatChannelsDocument, options);
      }
export function useMyBusinessChatChannelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyBusinessChatChannelsQuery, MyBusinessChatChannelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyBusinessChatChannelsQuery, MyBusinessChatChannelsQueryVariables>(MyBusinessChatChannelsDocument, options);
        }
export type MyBusinessChatChannelsQueryHookResult = ReturnType<typeof useMyBusinessChatChannelsQuery>;
export type MyBusinessChatChannelsLazyQueryHookResult = ReturnType<typeof useMyBusinessChatChannelsLazyQuery>;
export type MyBusinessChatChannelsQueryResult = Apollo.QueryResult<MyBusinessChatChannelsQuery, MyBusinessChatChannelsQueryVariables>;
export const ReceiveBusinessChatMessageDocument = gql`
    subscription ReceiveBusinessChatMessage($channelId: ID!) {
  receiveBusinessChatMessage(channelId: $channelId) {
    id
    message
    author {
      name
    }
  }
}
    `;

/**
 * __useReceiveBusinessChatMessageSubscription__
 *
 * To run a query within a React component, call `useReceiveBusinessChatMessageSubscription` and pass it any options that fit your needs.
 * When your component renders, `useReceiveBusinessChatMessageSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReceiveBusinessChatMessageSubscription({
 *   variables: {
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useReceiveBusinessChatMessageSubscription(baseOptions: Apollo.SubscriptionHookOptions<ReceiveBusinessChatMessageSubscription, ReceiveBusinessChatMessageSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ReceiveBusinessChatMessageSubscription, ReceiveBusinessChatMessageSubscriptionVariables>(ReceiveBusinessChatMessageDocument, options);
      }
export type ReceiveBusinessChatMessageSubscriptionHookResult = ReturnType<typeof useReceiveBusinessChatMessageSubscription>;
export type ReceiveBusinessChatMessageSubscriptionResult = Apollo.SubscriptionResult<ReceiveBusinessChatMessageSubscription>;