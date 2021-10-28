import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigFloat: any;
  Cursor: any;
  Date: any;
  Datetime: any;
  JSON: any;
};

export type Account = Node & {
  __typename?: 'Account';
  accountsByTransferFromIdAndToId: AccountAccountsByTransferFromIdAndToIdManyToManyConnection;
  accountsByTransferToIdAndFromId: AccountAccountsByTransferToIdAndFromIdManyToManyConnection;
  blocksByExtrinsicSignerIdAndBlockId: AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyConnection;
  blocksByOracleFeedRecordAccountIdAndBlockId: AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyConnection;
  calls: CallsConnection;
  callsByCallSignerIdAndParentCallId: AccountCallsByCallSignerIdAndParentCallIdManyToManyConnection;
  callsByTransferFromIdAndCallId: AccountCallsByTransferFromIdAndCallIdManyToManyConnection;
  callsByTransferToIdAndCallId: AccountCallsByTransferToIdAndCallIdManyToManyConnection;
  createAtBlock?: Maybe<Block>;
  createAtBlockId?: Maybe<Scalars['String']>;
  dexActions: DexActionsConnection;
  extrinsics: ExtrinsicsConnection;
  extrinsicsByCallSignerIdAndExtrinsicId: AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyConnection;
  extrinsicsByDexActionAccountIdAndExtrinsicId: AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyConnection;
  extrinsicsByHomaActionAccountIdAndExtrinsicId: AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyConnection;
  extrinsicsByIncentiveActionAccountIdAndExtrinsicId: AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyConnection;
  extrinsicsByLoanActionAccountIdAndExtrinsicId: AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyConnection;
  extrinsicsByNFTActionAccountIdAndExtrinsicId: AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyConnection;
  extrinsicsByTransferFromIdAndExtrinsicId: AccountExtrinsicsByTransferFromIdAndExtrinsicIdManyToManyConnection;
  extrinsicsByTransferToIdAndExtrinsicId: AccountExtrinsicsByTransferToIdAndExtrinsicIdManyToManyConnection;
  homaActions: HomaActionsConnection;
  id: Scalars['String'];
  incentiveActions: IncentiveActionsConnection;
  loanActions: LoanActionsConnection;
  nFTActions: NftActionsConnection;
  nodeId: Scalars['ID'];
  oracleFeedRecords: OracleFeedRecordsConnection;
  poolsByDexActionAccountIdAndPoolId: AccountPoolsByDexActionAccountIdAndPoolIdManyToManyConnection;
  position: LoanPositionsConnection;
  tokensByDexActionAccountIdAndToken0Id: AccountTokensByDexActionAccountIdAndToken0IdManyToManyConnection;
  tokensByDexActionAccountIdAndToken1Id: AccountTokensByDexActionAccountIdAndToken1IdManyToManyConnection;
  tokensByLoanPositionOwnerIdAndCollateralId: AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyConnection;
  tokensByOracleFeedRecordAccountIdAndTokenId: AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyConnection;
  tokensByTransferFromIdAndTokenId: AccountTokensByTransferFromIdAndTokenIdManyToManyConnection;
  tokensByTransferToIdAndTokenId: AccountTokensByTransferToIdAndTokenIdManyToManyConnection;
  transferIn: TransfersConnection;
  transferOut: TransfersConnection;
  txCount?: Maybe<Scalars['BigFloat']>;
};


export type AccountAccountsByTransferFromIdAndToIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<AccountFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AccountsOrderBy>>;
};


export type AccountAccountsByTransferToIdAndFromIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<AccountFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AccountsOrderBy>>;
};


export type AccountBlocksByExtrinsicSignerIdAndBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<BlockFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<BlocksOrderBy>>;
};


export type AccountBlocksByOracleFeedRecordAccountIdAndBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<BlockFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<BlocksOrderBy>>;
};


export type AccountCallsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<CallFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CallsOrderBy>>;
};


export type AccountCallsByCallSignerIdAndParentCallIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<CallFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CallsOrderBy>>;
};


export type AccountCallsByTransferFromIdAndCallIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<CallFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CallsOrderBy>>;
};


export type AccountCallsByTransferToIdAndCallIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<CallFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CallsOrderBy>>;
};


export type AccountDexActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<DexActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DexActionsOrderBy>>;
};


export type AccountExtrinsicsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ExtrinsicFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ExtrinsicsOrderBy>>;
};


export type AccountExtrinsicsByCallSignerIdAndExtrinsicIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ExtrinsicFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ExtrinsicsOrderBy>>;
};


export type AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ExtrinsicFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ExtrinsicsOrderBy>>;
};


export type AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ExtrinsicFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ExtrinsicsOrderBy>>;
};


export type AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ExtrinsicFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ExtrinsicsOrderBy>>;
};


export type AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ExtrinsicFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ExtrinsicsOrderBy>>;
};


export type AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ExtrinsicFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ExtrinsicsOrderBy>>;
};


export type AccountExtrinsicsByTransferFromIdAndExtrinsicIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ExtrinsicFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ExtrinsicsOrderBy>>;
};


export type AccountExtrinsicsByTransferToIdAndExtrinsicIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ExtrinsicFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ExtrinsicsOrderBy>>;
};


export type AccountHomaActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<HomaActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<HomaActionsOrderBy>>;
};


export type AccountIncentiveActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<IncentiveActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<IncentiveActionsOrderBy>>;
};


export type AccountLoanActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<LoanActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<LoanActionsOrderBy>>;
};


export type AccountNFtActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<NftActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<NftActionsOrderBy>>;
};


export type AccountOracleFeedRecordsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<OracleFeedRecordFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<OracleFeedRecordsOrderBy>>;
};


export type AccountPoolsByDexActionAccountIdAndPoolIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolsOrderBy>>;
};


export type AccountPositionArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<LoanPositionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<LoanPositionsOrderBy>>;
};


export type AccountTokensByDexActionAccountIdAndToken0IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type AccountTokensByDexActionAccountIdAndToken1IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type AccountTokensByLoanPositionOwnerIdAndCollateralIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type AccountTokensByOracleFeedRecordAccountIdAndTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type AccountTokensByTransferFromIdAndTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type AccountTokensByTransferToIdAndTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type AccountTransferInArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TransferFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TransfersOrderBy>>;
};


export type AccountTransferOutArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TransferFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TransfersOrderBy>>;
};

export type AccountAccountsByTransferFromIdAndToIdManyToManyConnection = {
  __typename?: 'AccountAccountsByTransferFromIdAndToIdManyToManyConnection';
  edges: Array<AccountAccountsByTransferFromIdAndToIdManyToManyEdge>;
  nodes: Array<Maybe<Account>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountAccountsByTransferFromIdAndToIdManyToManyEdge = {
  __typename?: 'AccountAccountsByTransferFromIdAndToIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Account>;
  transferIn: TransfersConnection;
};


export type AccountAccountsByTransferFromIdAndToIdManyToManyEdgeTransferInArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TransferFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TransfersOrderBy>>;
};

export type AccountAccountsByTransferToIdAndFromIdManyToManyConnection = {
  __typename?: 'AccountAccountsByTransferToIdAndFromIdManyToManyConnection';
  edges: Array<AccountAccountsByTransferToIdAndFromIdManyToManyEdge>;
  nodes: Array<Maybe<Account>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountAccountsByTransferToIdAndFromIdManyToManyEdge = {
  __typename?: 'AccountAccountsByTransferToIdAndFromIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Account>;
  transferOut: TransfersConnection;
};


export type AccountAccountsByTransferToIdAndFromIdManyToManyEdgeTransferOutArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TransferFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TransfersOrderBy>>;
};

export type AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyConnection = {
  __typename?: 'AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyConnection';
  edges: Array<AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyEdge>;
  nodes: Array<Maybe<Block>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyEdge = {
  __typename?: 'AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  extrinsics: ExtrinsicsConnection;
  node?: Maybe<Block>;
};


export type AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyEdgeExtrinsicsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ExtrinsicFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ExtrinsicsOrderBy>>;
};

export type AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyConnection = {
  __typename?: 'AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyConnection';
  edges: Array<AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyEdge>;
  nodes: Array<Maybe<Block>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyEdge = {
  __typename?: 'AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Block>;
  oracleFeedRecords: OracleFeedRecordsConnection;
};


export type AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyEdgeOracleFeedRecordsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<OracleFeedRecordFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<OracleFeedRecordsOrderBy>>;
};

export type AccountCallsByCallSignerIdAndParentCallIdManyToManyConnection = {
  __typename?: 'AccountCallsByCallSignerIdAndParentCallIdManyToManyConnection';
  edges: Array<AccountCallsByCallSignerIdAndParentCallIdManyToManyEdge>;
  nodes: Array<Maybe<Call>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountCallsByCallSignerIdAndParentCallIdManyToManyEdge = {
  __typename?: 'AccountCallsByCallSignerIdAndParentCallIdManyToManyEdge';
  calls: CallsConnection;
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Call>;
};


export type AccountCallsByCallSignerIdAndParentCallIdManyToManyEdgeCallsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<CallFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CallsOrderBy>>;
};

export type AccountCallsByTransferFromIdAndCallIdManyToManyConnection = {
  __typename?: 'AccountCallsByTransferFromIdAndCallIdManyToManyConnection';
  edges: Array<AccountCallsByTransferFromIdAndCallIdManyToManyEdge>;
  nodes: Array<Maybe<Call>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountCallsByTransferFromIdAndCallIdManyToManyEdge = {
  __typename?: 'AccountCallsByTransferFromIdAndCallIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Call>;
  transfers: TransfersConnection;
};


export type AccountCallsByTransferFromIdAndCallIdManyToManyEdgeTransfersArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TransferFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TransfersOrderBy>>;
};

export type AccountCallsByTransferToIdAndCallIdManyToManyConnection = {
  __typename?: 'AccountCallsByTransferToIdAndCallIdManyToManyConnection';
  edges: Array<AccountCallsByTransferToIdAndCallIdManyToManyEdge>;
  nodes: Array<Maybe<Call>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountCallsByTransferToIdAndCallIdManyToManyEdge = {
  __typename?: 'AccountCallsByTransferToIdAndCallIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Call>;
  transfers: TransfersConnection;
};


export type AccountCallsByTransferToIdAndCallIdManyToManyEdgeTransfersArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TransferFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TransfersOrderBy>>;
};

export type AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyConnection = {
  __typename?: 'AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyConnection';
  edges: Array<AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyEdge>;
  nodes: Array<Maybe<Extrinsic>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyEdge = {
  __typename?: 'AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyEdge';
  calls: CallsConnection;
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Extrinsic>;
};


export type AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyEdgeCallsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<CallFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CallsOrderBy>>;
};

export type AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyConnection = {
  __typename?: 'AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyConnection';
  edges: Array<AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyEdge>;
  nodes: Array<Maybe<Extrinsic>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyEdge = {
  __typename?: 'AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  dexActions: DexActionsConnection;
  node?: Maybe<Extrinsic>;
};


export type AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyEdgeDexActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<DexActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DexActionsOrderBy>>;
};

export type AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyConnection = {
  __typename?: 'AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyConnection';
  edges: Array<AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyEdge>;
  nodes: Array<Maybe<Extrinsic>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyEdge = {
  __typename?: 'AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  homaActions: HomaActionsConnection;
  node?: Maybe<Extrinsic>;
};


export type AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyEdgeHomaActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<HomaActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<HomaActionsOrderBy>>;
};

export type AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyConnection = {
  __typename?: 'AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyConnection';
  edges: Array<AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyEdge>;
  nodes: Array<Maybe<Extrinsic>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyEdge = {
  __typename?: 'AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  incentiveActions: IncentiveActionsConnection;
  node?: Maybe<Extrinsic>;
};


export type AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyEdgeIncentiveActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<IncentiveActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<IncentiveActionsOrderBy>>;
};

export type AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyConnection = {
  __typename?: 'AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyConnection';
  edges: Array<AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyEdge>;
  nodes: Array<Maybe<Extrinsic>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyEdge = {
  __typename?: 'AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  loanActions: LoanActionsConnection;
  node?: Maybe<Extrinsic>;
};


export type AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyEdgeLoanActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<LoanActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<LoanActionsOrderBy>>;
};

export type AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyConnection = {
  __typename?: 'AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyConnection';
  edges: Array<AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyEdge>;
  nodes: Array<Maybe<Extrinsic>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyEdge = {
  __typename?: 'AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  nFTActions: NftActionsConnection;
  node?: Maybe<Extrinsic>;
};


export type AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyEdgeNFtActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<NftActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<NftActionsOrderBy>>;
};

export type AccountExtrinsicsByTransferFromIdAndExtrinsicIdManyToManyConnection = {
  __typename?: 'AccountExtrinsicsByTransferFromIdAndExtrinsicIdManyToManyConnection';
  edges: Array<AccountExtrinsicsByTransferFromIdAndExtrinsicIdManyToManyEdge>;
  nodes: Array<Maybe<Extrinsic>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountExtrinsicsByTransferFromIdAndExtrinsicIdManyToManyEdge = {
  __typename?: 'AccountExtrinsicsByTransferFromIdAndExtrinsicIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Extrinsic>;
  transfers: TransfersConnection;
};


export type AccountExtrinsicsByTransferFromIdAndExtrinsicIdManyToManyEdgeTransfersArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TransferFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TransfersOrderBy>>;
};

export type AccountExtrinsicsByTransferToIdAndExtrinsicIdManyToManyConnection = {
  __typename?: 'AccountExtrinsicsByTransferToIdAndExtrinsicIdManyToManyConnection';
  edges: Array<AccountExtrinsicsByTransferToIdAndExtrinsicIdManyToManyEdge>;
  nodes: Array<Maybe<Extrinsic>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountExtrinsicsByTransferToIdAndExtrinsicIdManyToManyEdge = {
  __typename?: 'AccountExtrinsicsByTransferToIdAndExtrinsicIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Extrinsic>;
  transfers: TransfersConnection;
};


export type AccountExtrinsicsByTransferToIdAndExtrinsicIdManyToManyEdgeTransfersArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TransferFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TransfersOrderBy>>;
};

export type AccountFilter = {
  and?: Maybe<Array<AccountFilter>>;
  createAtBlockId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  not?: Maybe<AccountFilter>;
  or?: Maybe<Array<AccountFilter>>;
  txCount?: Maybe<BigFloatFilter>;
};

export type AccountPoolsByDexActionAccountIdAndPoolIdManyToManyConnection = {
  __typename?: 'AccountPoolsByDexActionAccountIdAndPoolIdManyToManyConnection';
  edges: Array<AccountPoolsByDexActionAccountIdAndPoolIdManyToManyEdge>;
  nodes: Array<Maybe<Pool>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountPoolsByDexActionAccountIdAndPoolIdManyToManyEdge = {
  __typename?: 'AccountPoolsByDexActionAccountIdAndPoolIdManyToManyEdge';
  actions: DexActionsConnection;
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Pool>;
};


export type AccountPoolsByDexActionAccountIdAndPoolIdManyToManyEdgeActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<DexActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DexActionsOrderBy>>;
};

export type AccountTokensByDexActionAccountIdAndToken0IdManyToManyConnection = {
  __typename?: 'AccountTokensByDexActionAccountIdAndToken0IdManyToManyConnection';
  edges: Array<AccountTokensByDexActionAccountIdAndToken0IdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountTokensByDexActionAccountIdAndToken0IdManyToManyEdge = {
  __typename?: 'AccountTokensByDexActionAccountIdAndToken0IdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  dexActionsByToken0Id: DexActionsConnection;
  node?: Maybe<Token>;
};


export type AccountTokensByDexActionAccountIdAndToken0IdManyToManyEdgeDexActionsByToken0IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<DexActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DexActionsOrderBy>>;
};

export type AccountTokensByDexActionAccountIdAndToken1IdManyToManyConnection = {
  __typename?: 'AccountTokensByDexActionAccountIdAndToken1IdManyToManyConnection';
  edges: Array<AccountTokensByDexActionAccountIdAndToken1IdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountTokensByDexActionAccountIdAndToken1IdManyToManyEdge = {
  __typename?: 'AccountTokensByDexActionAccountIdAndToken1IdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  dexActionsByToken1Id: DexActionsConnection;
  node?: Maybe<Token>;
};


export type AccountTokensByDexActionAccountIdAndToken1IdManyToManyEdgeDexActionsByToken1IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<DexActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DexActionsOrderBy>>;
};

export type AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyConnection = {
  __typename?: 'AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyConnection';
  edges: Array<AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyEdge = {
  __typename?: 'AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  loanPositionsByCollateralId: LoanPositionsConnection;
  node?: Maybe<Token>;
};


export type AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyEdgeLoanPositionsByCollateralIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<LoanPositionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<LoanPositionsOrderBy>>;
};

export type AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyConnection = {
  __typename?: 'AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyConnection';
  edges: Array<AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyEdge = {
  __typename?: 'AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  oracleFeedRecords: OracleFeedRecordsConnection;
};


export type AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyEdgeOracleFeedRecordsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<OracleFeedRecordFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<OracleFeedRecordsOrderBy>>;
};

export type AccountTokensByTransferFromIdAndTokenIdManyToManyConnection = {
  __typename?: 'AccountTokensByTransferFromIdAndTokenIdManyToManyConnection';
  edges: Array<AccountTokensByTransferFromIdAndTokenIdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountTokensByTransferFromIdAndTokenIdManyToManyEdge = {
  __typename?: 'AccountTokensByTransferFromIdAndTokenIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  transfers: TransfersConnection;
};


export type AccountTokensByTransferFromIdAndTokenIdManyToManyEdgeTransfersArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TransferFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TransfersOrderBy>>;
};

export type AccountTokensByTransferToIdAndTokenIdManyToManyConnection = {
  __typename?: 'AccountTokensByTransferToIdAndTokenIdManyToManyConnection';
  edges: Array<AccountTokensByTransferToIdAndTokenIdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountTokensByTransferToIdAndTokenIdManyToManyEdge = {
  __typename?: 'AccountTokensByTransferToIdAndTokenIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  transfers: TransfersConnection;
};


export type AccountTokensByTransferToIdAndTokenIdManyToManyEdgeTransfersArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TransferFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TransfersOrderBy>>;
};

export type AccountsConnection = {
  __typename?: 'AccountsConnection';
  edges: Array<AccountsEdge>;
  nodes: Array<Maybe<Account>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountsEdge = {
  __typename?: 'AccountsEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Account>;
};

export enum AccountsOrderBy {
  CreateAtBlockIdAsc = 'CREATE_AT_BLOCK_ID_ASC',
  CreateAtBlockIdDesc = 'CREATE_AT_BLOCK_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TxCountAsc = 'TX_COUNT_ASC',
  TxCountDesc = 'TX_COUNT_DESC'
}

export type BigFloatFilter = {
  distinctFrom?: Maybe<Scalars['BigFloat']>;
  equalTo?: Maybe<Scalars['BigFloat']>;
  greaterThan?: Maybe<Scalars['BigFloat']>;
  greaterThanOrEqualTo?: Maybe<Scalars['BigFloat']>;
  in?: Maybe<Array<Scalars['BigFloat']>>;
  isNull?: Maybe<Scalars['Boolean']>;
  lessThan?: Maybe<Scalars['BigFloat']>;
  lessThanOrEqualTo?: Maybe<Scalars['BigFloat']>;
  notDistinctFrom?: Maybe<Scalars['BigFloat']>;
  notEqualTo?: Maybe<Scalars['BigFloat']>;
  notIn?: Maybe<Array<Scalars['BigFloat']>>;
};

export type Block = Node & {
  __typename?: 'Block';
  accountsByCreateAtBlockId: AccountsConnection;
  accountsByExtrinsicBlockIdAndSignerId: BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyConnection;
  accountsByOracleFeedRecordBlockIdAndAccountId: BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyConnection;
  blocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockId: BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyConnection;
  blocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockId: BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyConnection;
  blocksByProvisionPoolEndAtBlockIdAndStartAtBlockId: BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyConnection;
  blocksByProvisionPoolStartAtBlockIdAndEndAtBlockId: BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyConnection;
  events: EventsConnection;
  extrinsicRoot?: Maybe<Scalars['String']>;
  extrinsics: ExtrinsicsConnection;
  extrinsicsByEventBlockIdAndExtrinsicId: BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyConnection;
  id: Scalars['String'];
  loanParamsByStartAtBlockId: LoanParamsConnection;
  loanParamsHistoriesByEndAtBlockId: LoanParamsHistoriesConnection;
  loanParamsHistoriesByStartAtBlockId: LoanParamsHistoriesConnection;
  nodeId: Scalars['ID'];
  number?: Maybe<Scalars['BigFloat']>;
  oracleFeedRecords: OracleFeedRecordsConnection;
  parentHash?: Maybe<Scalars['String']>;
  provisionPoolsByEndAtBlockId: ProvisionPoolsConnection;
  provisionPoolsByStartAtBlockId: ProvisionPoolsConnection;
  specVersion?: Maybe<Scalars['String']>;
  stateRoot?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Datetime']>;
  tokensByLoanParamStartAtBlockIdAndCollateralId: BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyConnection;
  tokensByLoanParamsHistoryEndAtBlockIdAndCollateralId: BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyConnection;
  tokensByLoanParamsHistoryStartAtBlockIdAndCollateralId: BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyConnection;
  tokensByOracleFeedRecordBlockIdAndTokenId: BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyConnection;
  tokensByProvisionPoolEndAtBlockIdAndPoolTokenId: BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyConnection;
  tokensByProvisionPoolEndAtBlockIdAndToken0Id: BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyConnection;
  tokensByProvisionPoolEndAtBlockIdAndToken1Id: BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyConnection;
  tokensByProvisionPoolStartAtBlockIdAndPoolTokenId: BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyConnection;
  tokensByProvisionPoolStartAtBlockIdAndToken0Id: BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyConnection;
  tokensByProvisionPoolStartAtBlockIdAndToken1Id: BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyConnection;
};


export type BlockAccountsByCreateAtBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<AccountFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AccountsOrderBy>>;
};


export type BlockAccountsByExtrinsicBlockIdAndSignerIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<AccountFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AccountsOrderBy>>;
};


export type BlockAccountsByOracleFeedRecordBlockIdAndAccountIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<AccountFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AccountsOrderBy>>;
};


export type BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<BlockFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<BlocksOrderBy>>;
};


export type BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<BlockFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<BlocksOrderBy>>;
};


export type BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<BlockFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<BlocksOrderBy>>;
};


export type BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<BlockFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<BlocksOrderBy>>;
};


export type BlockEventsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<EventFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<EventsOrderBy>>;
};


export type BlockExtrinsicsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ExtrinsicFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ExtrinsicsOrderBy>>;
};


export type BlockExtrinsicsByEventBlockIdAndExtrinsicIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ExtrinsicFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ExtrinsicsOrderBy>>;
};


export type BlockLoanParamsByStartAtBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<LoanParamFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<LoanParamsOrderBy>>;
};


export type BlockLoanParamsHistoriesByEndAtBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<LoanParamsHistoryFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<LoanParamsHistoriesOrderBy>>;
};


export type BlockLoanParamsHistoriesByStartAtBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<LoanParamsHistoryFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<LoanParamsHistoriesOrderBy>>;
};


export type BlockOracleFeedRecordsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<OracleFeedRecordFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<OracleFeedRecordsOrderBy>>;
};


export type BlockProvisionPoolsByEndAtBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ProvisionPoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProvisionPoolsOrderBy>>;
};


export type BlockProvisionPoolsByStartAtBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ProvisionPoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProvisionPoolsOrderBy>>;
};


export type BlockTokensByLoanParamStartAtBlockIdAndCollateralIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type BlockTokensByOracleFeedRecordBlockIdAndTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};

export type BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyConnection = {
  __typename?: 'BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyConnection';
  edges: Array<BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyEdge>;
  nodes: Array<Maybe<Account>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyEdge = {
  __typename?: 'BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  extrinsics: ExtrinsicsConnection;
  node?: Maybe<Account>;
};


export type BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyEdgeExtrinsicsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ExtrinsicFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ExtrinsicsOrderBy>>;
};

export type BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyConnection = {
  __typename?: 'BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyConnection';
  edges: Array<BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyEdge>;
  nodes: Array<Maybe<Account>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyEdge = {
  __typename?: 'BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Account>;
  oracleFeedRecords: OracleFeedRecordsConnection;
};


export type BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyEdgeOracleFeedRecordsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<OracleFeedRecordFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<OracleFeedRecordsOrderBy>>;
};

export type BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyConnection = {
  __typename?: 'BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyConnection';
  edges: Array<BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyEdge>;
  nodes: Array<Maybe<Block>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyEdge = {
  __typename?: 'BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  loanParamsHistoriesByStartAtBlockId: LoanParamsHistoriesConnection;
  node?: Maybe<Block>;
};


export type BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyEdgeLoanParamsHistoriesByStartAtBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<LoanParamsHistoryFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<LoanParamsHistoriesOrderBy>>;
};

export type BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyConnection = {
  __typename?: 'BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyConnection';
  edges: Array<BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyEdge>;
  nodes: Array<Maybe<Block>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyEdge = {
  __typename?: 'BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  loanParamsHistoriesByEndAtBlockId: LoanParamsHistoriesConnection;
  node?: Maybe<Block>;
};


export type BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyEdgeLoanParamsHistoriesByEndAtBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<LoanParamsHistoryFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<LoanParamsHistoriesOrderBy>>;
};

export type BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyConnection = {
  __typename?: 'BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyConnection';
  edges: Array<BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyEdge>;
  nodes: Array<Maybe<Block>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyEdge = {
  __typename?: 'BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Block>;
  provisionPoolsByStartAtBlockId: ProvisionPoolsConnection;
};


export type BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyEdgeProvisionPoolsByStartAtBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ProvisionPoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProvisionPoolsOrderBy>>;
};

export type BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyConnection = {
  __typename?: 'BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyConnection';
  edges: Array<BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyEdge>;
  nodes: Array<Maybe<Block>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyEdge = {
  __typename?: 'BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Block>;
  provisionPoolsByEndAtBlockId: ProvisionPoolsConnection;
};


export type BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyEdgeProvisionPoolsByEndAtBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ProvisionPoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProvisionPoolsOrderBy>>;
};

export type BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyConnection = {
  __typename?: 'BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyConnection';
  edges: Array<BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyEdge>;
  nodes: Array<Maybe<Extrinsic>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyEdge = {
  __typename?: 'BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  events: EventsConnection;
  node?: Maybe<Extrinsic>;
};


export type BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyEdgeEventsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<EventFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<EventsOrderBy>>;
};

export type BlockFilter = {
  and?: Maybe<Array<BlockFilter>>;
  extrinsicRoot?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  not?: Maybe<BlockFilter>;
  number?: Maybe<BigFloatFilter>;
  or?: Maybe<Array<BlockFilter>>;
  parentHash?: Maybe<StringFilter>;
  specVersion?: Maybe<StringFilter>;
  stateRoot?: Maybe<StringFilter>;
  timestamp?: Maybe<DatetimeFilter>;
};

export type BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyConnection = {
  __typename?: 'BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyConnection';
  edges: Array<BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyEdge = {
  __typename?: 'BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  loanParamsByCollateralId: LoanParamsConnection;
  node?: Maybe<Token>;
};


export type BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyEdgeLoanParamsByCollateralIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<LoanParamFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<LoanParamsOrderBy>>;
};

export type BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyConnection = {
  __typename?: 'BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyConnection';
  edges: Array<BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyEdge = {
  __typename?: 'BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  loanParamsHistoriesByCollateralId: LoanParamsHistoriesConnection;
  node?: Maybe<Token>;
};


export type BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyEdgeLoanParamsHistoriesByCollateralIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<LoanParamsHistoryFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<LoanParamsHistoriesOrderBy>>;
};

export type BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyConnection = {
  __typename?: 'BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyConnection';
  edges: Array<BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyEdge = {
  __typename?: 'BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  loanParamsHistoriesByCollateralId: LoanParamsHistoriesConnection;
  node?: Maybe<Token>;
};


export type BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyEdgeLoanParamsHistoriesByCollateralIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<LoanParamsHistoryFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<LoanParamsHistoriesOrderBy>>;
};

export type BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyConnection = {
  __typename?: 'BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyConnection';
  edges: Array<BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyEdge = {
  __typename?: 'BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  oracleFeedRecords: OracleFeedRecordsConnection;
};


export type BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyEdgeOracleFeedRecordsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<OracleFeedRecordFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<OracleFeedRecordsOrderBy>>;
};

export type BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyConnection = {
  __typename?: 'BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyConnection';
  edges: Array<BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyEdge = {
  __typename?: 'BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  provisionPoolsByPoolTokenId: ProvisionPoolsConnection;
};


export type BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyEdgeProvisionPoolsByPoolTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ProvisionPoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProvisionPoolsOrderBy>>;
};

export type BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyConnection = {
  __typename?: 'BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyConnection';
  edges: Array<BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyEdge = {
  __typename?: 'BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  provisionPoolsByToken0Id: ProvisionPoolsConnection;
};


export type BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyEdgeProvisionPoolsByToken0IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ProvisionPoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProvisionPoolsOrderBy>>;
};

export type BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyConnection = {
  __typename?: 'BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyConnection';
  edges: Array<BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyEdge = {
  __typename?: 'BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  provisionPoolsByToken1Id: ProvisionPoolsConnection;
};


export type BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyEdgeProvisionPoolsByToken1IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ProvisionPoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProvisionPoolsOrderBy>>;
};

export type BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyConnection = {
  __typename?: 'BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyConnection';
  edges: Array<BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyEdge = {
  __typename?: 'BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  provisionPoolsByPoolTokenId: ProvisionPoolsConnection;
};


export type BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyEdgeProvisionPoolsByPoolTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ProvisionPoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProvisionPoolsOrderBy>>;
};

export type BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyConnection = {
  __typename?: 'BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyConnection';
  edges: Array<BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyEdge = {
  __typename?: 'BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  provisionPoolsByToken0Id: ProvisionPoolsConnection;
};


export type BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyEdgeProvisionPoolsByToken0IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ProvisionPoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProvisionPoolsOrderBy>>;
};

export type BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyConnection = {
  __typename?: 'BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyConnection';
  edges: Array<BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyEdge = {
  __typename?: 'BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  provisionPoolsByToken1Id: ProvisionPoolsConnection;
};


export type BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyEdgeProvisionPoolsByToken1IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ProvisionPoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProvisionPoolsOrderBy>>;
};

export type BlocksConnection = {
  __typename?: 'BlocksConnection';
  edges: Array<BlocksEdge>;
  nodes: Array<Maybe<Block>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BlocksEdge = {
  __typename?: 'BlocksEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Block>;
};

export enum BlocksOrderBy {
  ExtrinsicRootAsc = 'EXTRINSIC_ROOT_ASC',
  ExtrinsicRootDesc = 'EXTRINSIC_ROOT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  NumberAsc = 'NUMBER_ASC',
  NumberDesc = 'NUMBER_DESC',
  ParentHashAsc = 'PARENT_HASH_ASC',
  ParentHashDesc = 'PARENT_HASH_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SpecVersionAsc = 'SPEC_VERSION_ASC',
  SpecVersionDesc = 'SPEC_VERSION_DESC',
  StateRootAsc = 'STATE_ROOT_ASC',
  StateRootDesc = 'STATE_ROOT_DESC',
  TimestampAsc = 'TIMESTAMP_ASC',
  TimestampDesc = 'TIMESTAMP_DESC'
}

export type BooleanFilter = {
  distinctFrom?: Maybe<Scalars['Boolean']>;
  equalTo?: Maybe<Scalars['Boolean']>;
  greaterThan?: Maybe<Scalars['Boolean']>;
  greaterThanOrEqualTo?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Scalars['Boolean']>>;
  isNull?: Maybe<Scalars['Boolean']>;
  lessThan?: Maybe<Scalars['Boolean']>;
  lessThanOrEqualTo?: Maybe<Scalars['Boolean']>;
  notDistinctFrom?: Maybe<Scalars['Boolean']>;
  notEqualTo?: Maybe<Scalars['Boolean']>;
  notIn?: Maybe<Array<Scalars['Boolean']>>;
};

export type Call = Node & {
  __typename?: 'Call';
  accountsByCallParentCallIdAndSignerId: CallAccountsByCallParentCallIdAndSignerIdManyToManyConnection;
  accountsByTransferCallIdAndFromId: CallAccountsByTransferCallIdAndFromIdManyToManyConnection;
  accountsByTransferCallIdAndToId: CallAccountsByTransferCallIdAndToIdManyToManyConnection;
  args?: Maybe<Scalars['JSON']>;
  calls: CallsConnection;
  extrinsic?: Maybe<Extrinsic>;
  extrinsicId?: Maybe<Scalars['String']>;
  extrinsicsByCallParentCallIdAndExtrinsicId: CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyConnection;
  extrinsicsByTransferCallIdAndExtrinsicId: CallExtrinsicsByTransferCallIdAndExtrinsicIdManyToManyConnection;
  id: Scalars['String'];
  isSuccess?: Maybe<Scalars['Boolean']>;
  method?: Maybe<Scalars['String']>;
  nodeId: Scalars['ID'];
  parentCall?: Maybe<Call>;
  parentCallId?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  signer?: Maybe<Account>;
  signerId?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Datetime']>;
  tokensByTransferCallIdAndTokenId: CallTokensByTransferCallIdAndTokenIdManyToManyConnection;
  transfers: TransfersConnection;
};


export type CallAccountsByCallParentCallIdAndSignerIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<AccountFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AccountsOrderBy>>;
};


export type CallAccountsByTransferCallIdAndFromIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<AccountFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AccountsOrderBy>>;
};


export type CallAccountsByTransferCallIdAndToIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<AccountFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AccountsOrderBy>>;
};


export type CallCallsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<CallFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CallsOrderBy>>;
};


export type CallExtrinsicsByCallParentCallIdAndExtrinsicIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ExtrinsicFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ExtrinsicsOrderBy>>;
};


export type CallExtrinsicsByTransferCallIdAndExtrinsicIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ExtrinsicFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ExtrinsicsOrderBy>>;
};


export type CallTokensByTransferCallIdAndTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type CallTransfersArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TransferFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TransfersOrderBy>>;
};

export type CallAccountsByCallParentCallIdAndSignerIdManyToManyConnection = {
  __typename?: 'CallAccountsByCallParentCallIdAndSignerIdManyToManyConnection';
  edges: Array<CallAccountsByCallParentCallIdAndSignerIdManyToManyEdge>;
  nodes: Array<Maybe<Account>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CallAccountsByCallParentCallIdAndSignerIdManyToManyEdge = {
  __typename?: 'CallAccountsByCallParentCallIdAndSignerIdManyToManyEdge';
  calls: CallsConnection;
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Account>;
};


export type CallAccountsByCallParentCallIdAndSignerIdManyToManyEdgeCallsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<CallFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CallsOrderBy>>;
};

export type CallAccountsByTransferCallIdAndFromIdManyToManyConnection = {
  __typename?: 'CallAccountsByTransferCallIdAndFromIdManyToManyConnection';
  edges: Array<CallAccountsByTransferCallIdAndFromIdManyToManyEdge>;
  nodes: Array<Maybe<Account>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CallAccountsByTransferCallIdAndFromIdManyToManyEdge = {
  __typename?: 'CallAccountsByTransferCallIdAndFromIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Account>;
  transferOut: TransfersConnection;
};


export type CallAccountsByTransferCallIdAndFromIdManyToManyEdgeTransferOutArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TransferFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TransfersOrderBy>>;
};

export type CallAccountsByTransferCallIdAndToIdManyToManyConnection = {
  __typename?: 'CallAccountsByTransferCallIdAndToIdManyToManyConnection';
  edges: Array<CallAccountsByTransferCallIdAndToIdManyToManyEdge>;
  nodes: Array<Maybe<Account>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CallAccountsByTransferCallIdAndToIdManyToManyEdge = {
  __typename?: 'CallAccountsByTransferCallIdAndToIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Account>;
  transferIn: TransfersConnection;
};


export type CallAccountsByTransferCallIdAndToIdManyToManyEdgeTransferInArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TransferFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TransfersOrderBy>>;
};

export type CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyConnection = {
  __typename?: 'CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyConnection';
  edges: Array<CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyEdge>;
  nodes: Array<Maybe<Extrinsic>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyEdge = {
  __typename?: 'CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyEdge';
  calls: CallsConnection;
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Extrinsic>;
};


export type CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyEdgeCallsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<CallFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CallsOrderBy>>;
};

export type CallExtrinsicsByTransferCallIdAndExtrinsicIdManyToManyConnection = {
  __typename?: 'CallExtrinsicsByTransferCallIdAndExtrinsicIdManyToManyConnection';
  edges: Array<CallExtrinsicsByTransferCallIdAndExtrinsicIdManyToManyEdge>;
  nodes: Array<Maybe<Extrinsic>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CallExtrinsicsByTransferCallIdAndExtrinsicIdManyToManyEdge = {
  __typename?: 'CallExtrinsicsByTransferCallIdAndExtrinsicIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Extrinsic>;
  transfers: TransfersConnection;
};


export type CallExtrinsicsByTransferCallIdAndExtrinsicIdManyToManyEdgeTransfersArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TransferFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TransfersOrderBy>>;
};

export type CallFilter = {
  and?: Maybe<Array<CallFilter>>;
  args?: Maybe<JsonFilter>;
  extrinsicId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  isSuccess?: Maybe<BooleanFilter>;
  method?: Maybe<StringFilter>;
  not?: Maybe<CallFilter>;
  or?: Maybe<Array<CallFilter>>;
  parentCallId?: Maybe<StringFilter>;
  section?: Maybe<StringFilter>;
  signerId?: Maybe<StringFilter>;
  timestamp?: Maybe<DatetimeFilter>;
};

export type CallTokensByTransferCallIdAndTokenIdManyToManyConnection = {
  __typename?: 'CallTokensByTransferCallIdAndTokenIdManyToManyConnection';
  edges: Array<CallTokensByTransferCallIdAndTokenIdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CallTokensByTransferCallIdAndTokenIdManyToManyEdge = {
  __typename?: 'CallTokensByTransferCallIdAndTokenIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  transfers: TransfersConnection;
};


export type CallTokensByTransferCallIdAndTokenIdManyToManyEdgeTransfersArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TransferFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TransfersOrderBy>>;
};

export type CallsConnection = {
  __typename?: 'CallsConnection';
  edges: Array<CallsEdge>;
  nodes: Array<Maybe<Call>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CallsEdge = {
  __typename?: 'CallsEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Call>;
};

export enum CallsOrderBy {
  ArgsAsc = 'ARGS_ASC',
  ArgsDesc = 'ARGS_DESC',
  ExtrinsicIdAsc = 'EXTRINSIC_ID_ASC',
  ExtrinsicIdDesc = 'EXTRINSIC_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IsSuccessAsc = 'IS_SUCCESS_ASC',
  IsSuccessDesc = 'IS_SUCCESS_DESC',
  MethodAsc = 'METHOD_ASC',
  MethodDesc = 'METHOD_DESC',
  Natural = 'NATURAL',
  ParentCallIdAsc = 'PARENT_CALL_ID_ASC',
  ParentCallIdDesc = 'PARENT_CALL_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SectionAsc = 'SECTION_ASC',
  SectionDesc = 'SECTION_DESC',
  SignerIdAsc = 'SIGNER_ID_ASC',
  SignerIdDesc = 'SIGNER_ID_DESC',
  TimestampAsc = 'TIMESTAMP_ASC',
  TimestampDesc = 'TIMESTAMP_DESC'
}

export type DatetimeFilter = {
  distinctFrom?: Maybe<Scalars['Datetime']>;
  equalTo?: Maybe<Scalars['Datetime']>;
  greaterThan?: Maybe<Scalars['Datetime']>;
  greaterThanOrEqualTo?: Maybe<Scalars['Datetime']>;
  in?: Maybe<Array<Scalars['Datetime']>>;
  isNull?: Maybe<Scalars['Boolean']>;
  lessThan?: Maybe<Scalars['Datetime']>;
  lessThanOrEqualTo?: Maybe<Scalars['Datetime']>;
  notDistinctFrom?: Maybe<Scalars['Datetime']>;
  notEqualTo?: Maybe<Scalars['Datetime']>;
  notIn?: Maybe<Array<Scalars['Datetime']>>;
};

export type Dex = Node & {
  __typename?: 'Dex';
  id: Scalars['String'];
  nodeId: Scalars['ID'];
  poolCount?: Maybe<Scalars['Int']>;
  totalTVLUSD?: Maybe<Scalars['String']>;
  totalVolumeUSD?: Maybe<Scalars['String']>;
};

export type DexAction = Node & {
  __typename?: 'DexAction';
  account?: Maybe<Account>;
  accountId?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['JSON']>;
  extrinsic?: Maybe<Extrinsic>;
  extrinsicId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  nodeId: Scalars['ID'];
  pool?: Maybe<Pool>;
  poolId?: Maybe<Scalars['String']>;
  subType?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Datetime']>;
  token0?: Maybe<Token>;
  token0Amount?: Maybe<Scalars['String']>;
  token0Id?: Maybe<Scalars['String']>;
  token1?: Maybe<Token>;
  token1Amount?: Maybe<Scalars['String']>;
  token1Id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  volumeUSD?: Maybe<Scalars['String']>;
};

export type DexActionFilter = {
  accountId?: Maybe<StringFilter>;
  and?: Maybe<Array<DexActionFilter>>;
  data?: Maybe<JsonFilter>;
  extrinsicId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  not?: Maybe<DexActionFilter>;
  or?: Maybe<Array<DexActionFilter>>;
  poolId?: Maybe<StringFilter>;
  subType?: Maybe<StringFilter>;
  timestamp?: Maybe<DatetimeFilter>;
  token0Amount?: Maybe<StringFilter>;
  token0Id?: Maybe<StringFilter>;
  token1Amount?: Maybe<StringFilter>;
  token1Id?: Maybe<StringFilter>;
  type?: Maybe<StringFilter>;
  volumeUSD?: Maybe<StringFilter>;
};

export type DexActionsConnection = {
  __typename?: 'DexActionsConnection';
  edges: Array<DexActionsEdge>;
  nodes: Array<Maybe<DexAction>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DexActionsEdge = {
  __typename?: 'DexActionsEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<DexAction>;
};

export enum DexActionsOrderBy {
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  DataAsc = 'DATA_ASC',
  DataDesc = 'DATA_DESC',
  ExtrinsicIdAsc = 'EXTRINSIC_ID_ASC',
  ExtrinsicIdDesc = 'EXTRINSIC_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PoolIdAsc = 'POOL_ID_ASC',
  PoolIdDesc = 'POOL_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SubTypeAsc = 'SUB_TYPE_ASC',
  SubTypeDesc = 'SUB_TYPE_DESC',
  TimestampAsc = 'TIMESTAMP_ASC',
  TimestampDesc = 'TIMESTAMP_DESC',
  Token0AmountAsc = 'TOKEN0_AMOUNT_ASC',
  Token0AmountDesc = 'TOKEN0_AMOUNT_DESC',
  Token0IdAsc = 'TOKEN0_ID_ASC',
  Token0IdDesc = 'TOKEN0_ID_DESC',
  Token1AmountAsc = 'TOKEN1_AMOUNT_ASC',
  Token1AmountDesc = 'TOKEN1_AMOUNT_DESC',
  Token1IdAsc = 'TOKEN1_ID_ASC',
  Token1IdDesc = 'TOKEN1_ID_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  VolumeUSDAsc = 'VOLUME_U_S_D_ASC',
  VolumeUSDDesc = 'VOLUME_U_S_D_DESC'
}

export type DexDayDataConnection = {
  __typename?: 'DexDayDataConnection';
  edges: Array<DexDayDataEdge>;
  nodes: Array<Maybe<DexDayDatum>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DexDayDataEdge = {
  __typename?: 'DexDayDataEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<DexDayDatum>;
};

export enum DexDayDataOrderBy {
  DailyVolumeUSDAsc = 'DAILY_VOLUME_U_S_D_ASC',
  DailyVolumeUSDDesc = 'DAILY_VOLUME_U_S_D_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PoolCountAsc = 'POOL_COUNT_ASC',
  PoolCountDesc = 'POOL_COUNT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TotalTVLUSDAsc = 'TOTAL_T_V_L_U_S_D_ASC',
  TotalTVLUSDDesc = 'TOTAL_T_V_L_U_S_D_DESC',
  TotalVolumeUSDAsc = 'TOTAL_VOLUME_U_S_D_ASC',
  TotalVolumeUSDDesc = 'TOTAL_VOLUME_U_S_D_DESC'
}

export type DexDayDatum = Node & {
  __typename?: 'DexDayDatum';
  dailyVolumeUSD?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Datetime']>;
  id: Scalars['String'];
  nodeId: Scalars['ID'];
  poolCount?: Maybe<Scalars['Int']>;
  totalTVLUSD?: Maybe<Scalars['String']>;
  totalVolumeUSD?: Maybe<Scalars['String']>;
};

export type DexDayDatumFilter = {
  and?: Maybe<Array<DexDayDatumFilter>>;
  dailyVolumeUSD?: Maybe<StringFilter>;
  date?: Maybe<DatetimeFilter>;
  id?: Maybe<StringFilter>;
  not?: Maybe<DexDayDatumFilter>;
  or?: Maybe<Array<DexDayDatumFilter>>;
  poolCount?: Maybe<IntFilter>;
  totalTVLUSD?: Maybe<StringFilter>;
  totalVolumeUSD?: Maybe<StringFilter>;
};

export type DexFilter = {
  and?: Maybe<Array<DexFilter>>;
  id?: Maybe<StringFilter>;
  not?: Maybe<DexFilter>;
  or?: Maybe<Array<DexFilter>>;
  poolCount?: Maybe<IntFilter>;
  totalTVLUSD?: Maybe<StringFilter>;
  totalVolumeUSD?: Maybe<StringFilter>;
};

export type DexesConnection = {
  __typename?: 'DexesConnection';
  edges: Array<DexesEdge>;
  nodes: Array<Maybe<Dex>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DexesEdge = {
  __typename?: 'DexesEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Dex>;
};

export enum DexesOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PoolCountAsc = 'POOL_COUNT_ASC',
  PoolCountDesc = 'POOL_COUNT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TotalTVLUSDAsc = 'TOTAL_T_V_L_U_S_D_ASC',
  TotalTVLUSDDesc = 'TOTAL_T_V_L_U_S_D_DESC',
  TotalVolumeUSDAsc = 'TOTAL_VOLUME_U_S_D_ASC',
  TotalVolumeUSDDesc = 'TOTAL_VOLUME_U_S_D_DESC'
}

export type Event = Node & {
  __typename?: 'Event';
  block?: Maybe<Block>;
  blockId?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['BigFloat']>;
  data?: Maybe<Scalars['JSON']>;
  extrinsic?: Maybe<Extrinsic>;
  extrinsicId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  index?: Maybe<Scalars['Int']>;
  method?: Maybe<Scalars['String']>;
  nodeId: Scalars['ID'];
  section?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Datetime']>;
};

export type EventFilter = {
  and?: Maybe<Array<EventFilter>>;
  blockId?: Maybe<StringFilter>;
  blockNumber?: Maybe<BigFloatFilter>;
  data?: Maybe<JsonFilter>;
  extrinsicId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  index?: Maybe<IntFilter>;
  method?: Maybe<StringFilter>;
  not?: Maybe<EventFilter>;
  or?: Maybe<Array<EventFilter>>;
  section?: Maybe<StringFilter>;
  timestamp?: Maybe<DatetimeFilter>;
};

export type EventsConnection = {
  __typename?: 'EventsConnection';
  edges: Array<EventsEdge>;
  nodes: Array<Maybe<Event>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type EventsEdge = {
  __typename?: 'EventsEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Event>;
};

export enum EventsOrderBy {
  BlockIdAsc = 'BLOCK_ID_ASC',
  BlockIdDesc = 'BLOCK_ID_DESC',
  BlockNumberAsc = 'BLOCK_NUMBER_ASC',
  BlockNumberDesc = 'BLOCK_NUMBER_DESC',
  DataAsc = 'DATA_ASC',
  DataDesc = 'DATA_DESC',
  ExtrinsicIdAsc = 'EXTRINSIC_ID_ASC',
  ExtrinsicIdDesc = 'EXTRINSIC_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  MethodAsc = 'METHOD_ASC',
  MethodDesc = 'METHOD_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SectionAsc = 'SECTION_ASC',
  SectionDesc = 'SECTION_DESC',
  TimestampAsc = 'TIMESTAMP_ASC',
  TimestampDesc = 'TIMESTAMP_DESC'
}

export type Extrinsic = Node & {
  __typename?: 'Extrinsic';
  accountsByCallExtrinsicIdAndSignerId: ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyConnection;
  accountsByDexActionExtrinsicIdAndAccountId: ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyConnection;
  accountsByHomaActionExtrinsicIdAndAccountId: ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyConnection;
  accountsByIncentiveActionExtrinsicIdAndAccountId: ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyConnection;
  accountsByLoanActionExtrinsicIdAndAccountId: ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyConnection;
  accountsByNFTActionExtrinsicIdAndAccountId: ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyConnection;
  accountsByTransferExtrinsicIdAndFromId: ExtrinsicAccountsByTransferExtrinsicIdAndFromIdManyToManyConnection;
  accountsByTransferExtrinsicIdAndToId: ExtrinsicAccountsByTransferExtrinsicIdAndToIdManyToManyConnection;
  args?: Maybe<Scalars['JSON']>;
  block?: Maybe<Block>;
  blockId?: Maybe<Scalars['String']>;
  blocksByEventExtrinsicIdAndBlockId: ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyConnection;
  calls: CallsConnection;
  callsByCallExtrinsicIdAndParentCallId: ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyConnection;
  callsByTransferExtrinsicIdAndCallId: ExtrinsicCallsByTransferExtrinsicIdAndCallIdManyToManyConnection;
  dexActions: DexActionsConnection;
  events: EventsConnection;
  homaActions: HomaActionsConnection;
  id: Scalars['String'];
  incentiveActions: IncentiveActionsConnection;
  isSigned?: Maybe<Scalars['Boolean']>;
  isSuccess?: Maybe<Scalars['Boolean']>;
  loanActions: LoanActionsConnection;
  method?: Maybe<Scalars['String']>;
  nFTActions: NftActionsConnection;
  nodeId: Scalars['ID'];
  nonce?: Maybe<Scalars['BigFloat']>;
  poolsByDexActionExtrinsicIdAndPoolId: ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyConnection;
  section?: Maybe<Scalars['String']>;
  signature?: Maybe<Scalars['String']>;
  signer?: Maybe<Account>;
  signerId?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Datetime']>;
  tip?: Maybe<Scalars['String']>;
  tokensByDexActionExtrinsicIdAndToken0Id: ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyConnection;
  tokensByDexActionExtrinsicIdAndToken1Id: ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyConnection;
  tokensByTransferExtrinsicIdAndTokenId: ExtrinsicTokensByTransferExtrinsicIdAndTokenIdManyToManyConnection;
  transfers: TransfersConnection;
};


export type ExtrinsicAccountsByCallExtrinsicIdAndSignerIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<AccountFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AccountsOrderBy>>;
};


export type ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<AccountFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AccountsOrderBy>>;
};


export type ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<AccountFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AccountsOrderBy>>;
};


export type ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<AccountFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AccountsOrderBy>>;
};


export type ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<AccountFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AccountsOrderBy>>;
};


export type ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<AccountFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AccountsOrderBy>>;
};


export type ExtrinsicAccountsByTransferExtrinsicIdAndFromIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<AccountFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AccountsOrderBy>>;
};


export type ExtrinsicAccountsByTransferExtrinsicIdAndToIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<AccountFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AccountsOrderBy>>;
};


export type ExtrinsicBlocksByEventExtrinsicIdAndBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<BlockFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<BlocksOrderBy>>;
};


export type ExtrinsicCallsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<CallFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CallsOrderBy>>;
};


export type ExtrinsicCallsByCallExtrinsicIdAndParentCallIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<CallFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CallsOrderBy>>;
};


export type ExtrinsicCallsByTransferExtrinsicIdAndCallIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<CallFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CallsOrderBy>>;
};


export type ExtrinsicDexActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<DexActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DexActionsOrderBy>>;
};


export type ExtrinsicEventsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<EventFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<EventsOrderBy>>;
};


export type ExtrinsicHomaActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<HomaActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<HomaActionsOrderBy>>;
};


export type ExtrinsicIncentiveActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<IncentiveActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<IncentiveActionsOrderBy>>;
};


export type ExtrinsicLoanActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<LoanActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<LoanActionsOrderBy>>;
};


export type ExtrinsicNFtActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<NftActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<NftActionsOrderBy>>;
};


export type ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolsOrderBy>>;
};


export type ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type ExtrinsicTokensByTransferExtrinsicIdAndTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type ExtrinsicTransfersArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TransferFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TransfersOrderBy>>;
};

export type ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyConnection = {
  __typename?: 'ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyConnection';
  edges: Array<ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyEdge>;
  nodes: Array<Maybe<Account>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyEdge = {
  __typename?: 'ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyEdge';
  calls: CallsConnection;
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Account>;
};


export type ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyEdgeCallsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<CallFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CallsOrderBy>>;
};

export type ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyConnection = {
  __typename?: 'ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyConnection';
  edges: Array<ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyEdge>;
  nodes: Array<Maybe<Account>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyEdge = {
  __typename?: 'ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  dexActions: DexActionsConnection;
  node?: Maybe<Account>;
};


export type ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyEdgeDexActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<DexActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DexActionsOrderBy>>;
};

export type ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyConnection = {
  __typename?: 'ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyConnection';
  edges: Array<ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyEdge>;
  nodes: Array<Maybe<Account>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyEdge = {
  __typename?: 'ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  homaActions: HomaActionsConnection;
  node?: Maybe<Account>;
};


export type ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyEdgeHomaActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<HomaActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<HomaActionsOrderBy>>;
};

export type ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyConnection = {
  __typename?: 'ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyConnection';
  edges: Array<ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyEdge>;
  nodes: Array<Maybe<Account>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyEdge = {
  __typename?: 'ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  incentiveActions: IncentiveActionsConnection;
  node?: Maybe<Account>;
};


export type ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyEdgeIncentiveActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<IncentiveActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<IncentiveActionsOrderBy>>;
};

export type ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyConnection = {
  __typename?: 'ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyConnection';
  edges: Array<ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyEdge>;
  nodes: Array<Maybe<Account>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyEdge = {
  __typename?: 'ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  loanActions: LoanActionsConnection;
  node?: Maybe<Account>;
};


export type ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyEdgeLoanActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<LoanActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<LoanActionsOrderBy>>;
};

export type ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyConnection = {
  __typename?: 'ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyConnection';
  edges: Array<ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyEdge>;
  nodes: Array<Maybe<Account>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyEdge = {
  __typename?: 'ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  nFTActions: NftActionsConnection;
  node?: Maybe<Account>;
};


export type ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyEdgeNFtActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<NftActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<NftActionsOrderBy>>;
};

export type ExtrinsicAccountsByTransferExtrinsicIdAndFromIdManyToManyConnection = {
  __typename?: 'ExtrinsicAccountsByTransferExtrinsicIdAndFromIdManyToManyConnection';
  edges: Array<ExtrinsicAccountsByTransferExtrinsicIdAndFromIdManyToManyEdge>;
  nodes: Array<Maybe<Account>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ExtrinsicAccountsByTransferExtrinsicIdAndFromIdManyToManyEdge = {
  __typename?: 'ExtrinsicAccountsByTransferExtrinsicIdAndFromIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Account>;
  transferOut: TransfersConnection;
};


export type ExtrinsicAccountsByTransferExtrinsicIdAndFromIdManyToManyEdgeTransferOutArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TransferFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TransfersOrderBy>>;
};

export type ExtrinsicAccountsByTransferExtrinsicIdAndToIdManyToManyConnection = {
  __typename?: 'ExtrinsicAccountsByTransferExtrinsicIdAndToIdManyToManyConnection';
  edges: Array<ExtrinsicAccountsByTransferExtrinsicIdAndToIdManyToManyEdge>;
  nodes: Array<Maybe<Account>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ExtrinsicAccountsByTransferExtrinsicIdAndToIdManyToManyEdge = {
  __typename?: 'ExtrinsicAccountsByTransferExtrinsicIdAndToIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Account>;
  transferIn: TransfersConnection;
};


export type ExtrinsicAccountsByTransferExtrinsicIdAndToIdManyToManyEdgeTransferInArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TransferFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TransfersOrderBy>>;
};

export type ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyConnection = {
  __typename?: 'ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyConnection';
  edges: Array<ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyEdge>;
  nodes: Array<Maybe<Block>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyEdge = {
  __typename?: 'ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  events: EventsConnection;
  node?: Maybe<Block>;
};


export type ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyEdgeEventsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<EventFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<EventsOrderBy>>;
};

export type ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyConnection = {
  __typename?: 'ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyConnection';
  edges: Array<ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyEdge>;
  nodes: Array<Maybe<Call>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyEdge = {
  __typename?: 'ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyEdge';
  calls: CallsConnection;
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Call>;
};


export type ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyEdgeCallsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<CallFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CallsOrderBy>>;
};

export type ExtrinsicCallsByTransferExtrinsicIdAndCallIdManyToManyConnection = {
  __typename?: 'ExtrinsicCallsByTransferExtrinsicIdAndCallIdManyToManyConnection';
  edges: Array<ExtrinsicCallsByTransferExtrinsicIdAndCallIdManyToManyEdge>;
  nodes: Array<Maybe<Call>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ExtrinsicCallsByTransferExtrinsicIdAndCallIdManyToManyEdge = {
  __typename?: 'ExtrinsicCallsByTransferExtrinsicIdAndCallIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Call>;
  transfers: TransfersConnection;
};


export type ExtrinsicCallsByTransferExtrinsicIdAndCallIdManyToManyEdgeTransfersArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TransferFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TransfersOrderBy>>;
};

export type ExtrinsicFilter = {
  and?: Maybe<Array<ExtrinsicFilter>>;
  args?: Maybe<JsonFilter>;
  blockId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  isSigned?: Maybe<BooleanFilter>;
  isSuccess?: Maybe<BooleanFilter>;
  method?: Maybe<StringFilter>;
  nonce?: Maybe<BigFloatFilter>;
  not?: Maybe<ExtrinsicFilter>;
  or?: Maybe<Array<ExtrinsicFilter>>;
  section?: Maybe<StringFilter>;
  signature?: Maybe<StringFilter>;
  signerId?: Maybe<StringFilter>;
  timestamp?: Maybe<DatetimeFilter>;
  tip?: Maybe<StringFilter>;
};

export type ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyConnection = {
  __typename?: 'ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyConnection';
  edges: Array<ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyEdge>;
  nodes: Array<Maybe<Pool>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyEdge = {
  __typename?: 'ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyEdge';
  actions: DexActionsConnection;
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Pool>;
};


export type ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyEdgeActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<DexActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DexActionsOrderBy>>;
};

export type ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyConnection = {
  __typename?: 'ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyConnection';
  edges: Array<ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyEdge = {
  __typename?: 'ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  dexActionsByToken0Id: DexActionsConnection;
  node?: Maybe<Token>;
};


export type ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyEdgeDexActionsByToken0IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<DexActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DexActionsOrderBy>>;
};

export type ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyConnection = {
  __typename?: 'ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyConnection';
  edges: Array<ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyEdge = {
  __typename?: 'ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  dexActionsByToken1Id: DexActionsConnection;
  node?: Maybe<Token>;
};


export type ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyEdgeDexActionsByToken1IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<DexActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DexActionsOrderBy>>;
};

export type ExtrinsicTokensByTransferExtrinsicIdAndTokenIdManyToManyConnection = {
  __typename?: 'ExtrinsicTokensByTransferExtrinsicIdAndTokenIdManyToManyConnection';
  edges: Array<ExtrinsicTokensByTransferExtrinsicIdAndTokenIdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ExtrinsicTokensByTransferExtrinsicIdAndTokenIdManyToManyEdge = {
  __typename?: 'ExtrinsicTokensByTransferExtrinsicIdAndTokenIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  transfers: TransfersConnection;
};


export type ExtrinsicTokensByTransferExtrinsicIdAndTokenIdManyToManyEdgeTransfersArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TransferFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TransfersOrderBy>>;
};

export type ExtrinsicsConnection = {
  __typename?: 'ExtrinsicsConnection';
  edges: Array<ExtrinsicsEdge>;
  nodes: Array<Maybe<Extrinsic>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ExtrinsicsEdge = {
  __typename?: 'ExtrinsicsEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Extrinsic>;
};

export enum ExtrinsicsOrderBy {
  ArgsAsc = 'ARGS_ASC',
  ArgsDesc = 'ARGS_DESC',
  BlockIdAsc = 'BLOCK_ID_ASC',
  BlockIdDesc = 'BLOCK_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IsSignedAsc = 'IS_SIGNED_ASC',
  IsSignedDesc = 'IS_SIGNED_DESC',
  IsSuccessAsc = 'IS_SUCCESS_ASC',
  IsSuccessDesc = 'IS_SUCCESS_DESC',
  MethodAsc = 'METHOD_ASC',
  MethodDesc = 'METHOD_DESC',
  Natural = 'NATURAL',
  NonceAsc = 'NONCE_ASC',
  NonceDesc = 'NONCE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SectionAsc = 'SECTION_ASC',
  SectionDesc = 'SECTION_DESC',
  SignatureAsc = 'SIGNATURE_ASC',
  SignatureDesc = 'SIGNATURE_DESC',
  SignerIdAsc = 'SIGNER_ID_ASC',
  SignerIdDesc = 'SIGNER_ID_DESC',
  TimestampAsc = 'TIMESTAMP_ASC',
  TimestampDesc = 'TIMESTAMP_DESC',
  TipAsc = 'TIP_ASC',
  TipDesc = 'TIP_DESC'
}

export type HomaAction = Node & {
  __typename?: 'HomaAction';
  account?: Maybe<Account>;
  accountId?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['JSON']>;
  extrinsic?: Maybe<Extrinsic>;
  extrinsicId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  nodeId: Scalars['ID'];
  subType?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Datetime']>;
  type?: Maybe<Scalars['String']>;
};

export type HomaActionFilter = {
  accountId?: Maybe<StringFilter>;
  and?: Maybe<Array<HomaActionFilter>>;
  data?: Maybe<JsonFilter>;
  extrinsicId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  not?: Maybe<HomaActionFilter>;
  or?: Maybe<Array<HomaActionFilter>>;
  subType?: Maybe<StringFilter>;
  timestamp?: Maybe<DatetimeFilter>;
  type?: Maybe<StringFilter>;
};

export type HomaActionsConnection = {
  __typename?: 'HomaActionsConnection';
  edges: Array<HomaActionsEdge>;
  nodes: Array<Maybe<HomaAction>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type HomaActionsEdge = {
  __typename?: 'HomaActionsEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<HomaAction>;
};

export enum HomaActionsOrderBy {
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  DataAsc = 'DATA_ASC',
  DataDesc = 'DATA_DESC',
  ExtrinsicIdAsc = 'EXTRINSIC_ID_ASC',
  ExtrinsicIdDesc = 'EXTRINSIC_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SubTypeAsc = 'SUB_TYPE_ASC',
  SubTypeDesc = 'SUB_TYPE_DESC',
  TimestampAsc = 'TIMESTAMP_ASC',
  TimestampDesc = 'TIMESTAMP_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC'
}

export type IncentiveAction = Node & {
  __typename?: 'IncentiveAction';
  account?: Maybe<Account>;
  accountId?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['JSON']>;
  extrinsic?: Maybe<Extrinsic>;
  extrinsicId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  nodeId: Scalars['ID'];
  subType?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Datetime']>;
  type?: Maybe<Scalars['String']>;
};

export type IncentiveActionFilter = {
  accountId?: Maybe<StringFilter>;
  and?: Maybe<Array<IncentiveActionFilter>>;
  data?: Maybe<JsonFilter>;
  extrinsicId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  not?: Maybe<IncentiveActionFilter>;
  or?: Maybe<Array<IncentiveActionFilter>>;
  subType?: Maybe<StringFilter>;
  timestamp?: Maybe<DatetimeFilter>;
  type?: Maybe<StringFilter>;
};

export type IncentiveActionsConnection = {
  __typename?: 'IncentiveActionsConnection';
  edges: Array<IncentiveActionsEdge>;
  nodes: Array<Maybe<IncentiveAction>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type IncentiveActionsEdge = {
  __typename?: 'IncentiveActionsEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<IncentiveAction>;
};

export enum IncentiveActionsOrderBy {
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  DataAsc = 'DATA_ASC',
  DataDesc = 'DATA_DESC',
  ExtrinsicIdAsc = 'EXTRINSIC_ID_ASC',
  ExtrinsicIdDesc = 'EXTRINSIC_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SubTypeAsc = 'SUB_TYPE_ASC',
  SubTypeDesc = 'SUB_TYPE_DESC',
  TimestampAsc = 'TIMESTAMP_ASC',
  TimestampDesc = 'TIMESTAMP_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC'
}

export type IntFilter = {
  distinctFrom?: Maybe<Scalars['Int']>;
  equalTo?: Maybe<Scalars['Int']>;
  greaterThan?: Maybe<Scalars['Int']>;
  greaterThanOrEqualTo?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  isNull?: Maybe<Scalars['Boolean']>;
  lessThan?: Maybe<Scalars['Int']>;
  lessThanOrEqualTo?: Maybe<Scalars['Int']>;
  notDistinctFrom?: Maybe<Scalars['Int']>;
  notEqualTo?: Maybe<Scalars['Int']>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type JsonFilter = {
  containedBy?: Maybe<Scalars['JSON']>;
  contains?: Maybe<Scalars['JSON']>;
  containsAllKeys?: Maybe<Array<Scalars['String']>>;
  containsAnyKeys?: Maybe<Array<Scalars['String']>>;
  containsKey?: Maybe<Scalars['String']>;
  distinctFrom?: Maybe<Scalars['JSON']>;
  equalTo?: Maybe<Scalars['JSON']>;
  greaterThan?: Maybe<Scalars['JSON']>;
  greaterThanOrEqualTo?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Scalars['JSON']>>;
  isNull?: Maybe<Scalars['Boolean']>;
  lessThan?: Maybe<Scalars['JSON']>;
  lessThanOrEqualTo?: Maybe<Scalars['JSON']>;
  notDistinctFrom?: Maybe<Scalars['JSON']>;
  notEqualTo?: Maybe<Scalars['JSON']>;
  notIn?: Maybe<Array<Scalars['JSON']>>;
};

export type LoanAction = Node & {
  __typename?: 'LoanAction';
  account?: Maybe<Account>;
  accountId?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['JSON']>;
  extrinsic?: Maybe<Extrinsic>;
  extrinsicId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  nodeId: Scalars['ID'];
  subType?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Datetime']>;
  type?: Maybe<Scalars['String']>;
};

export type LoanActionFilter = {
  accountId?: Maybe<StringFilter>;
  and?: Maybe<Array<LoanActionFilter>>;
  data?: Maybe<JsonFilter>;
  extrinsicId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  not?: Maybe<LoanActionFilter>;
  or?: Maybe<Array<LoanActionFilter>>;
  subType?: Maybe<StringFilter>;
  timestamp?: Maybe<DatetimeFilter>;
  type?: Maybe<StringFilter>;
};

export type LoanActionsConnection = {
  __typename?: 'LoanActionsConnection';
  edges: Array<LoanActionsEdge>;
  nodes: Array<Maybe<LoanAction>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type LoanActionsEdge = {
  __typename?: 'LoanActionsEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<LoanAction>;
};

export enum LoanActionsOrderBy {
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  DataAsc = 'DATA_ASC',
  DataDesc = 'DATA_DESC',
  ExtrinsicIdAsc = 'EXTRINSIC_ID_ASC',
  ExtrinsicIdDesc = 'EXTRINSIC_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SubTypeAsc = 'SUB_TYPE_ASC',
  SubTypeDesc = 'SUB_TYPE_DESC',
  TimestampAsc = 'TIMESTAMP_ASC',
  TimestampDesc = 'TIMESTAMP_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC'
}

export type LoanParam = Node & {
  __typename?: 'LoanParam';
  collateral?: Maybe<Token>;
  collateralId?: Maybe<Scalars['String']>;
  debitExchangeRate?: Maybe<Scalars['String']>;
  globalInterestRatePerSec?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  interestRatePerSec?: Maybe<Scalars['String']>;
  liquidationPenalty?: Maybe<Scalars['String']>;
  liquidationRatio?: Maybe<Scalars['String']>;
  maximumTotalDebitValue?: Maybe<Scalars['String']>;
  nodeId: Scalars['ID'];
  requiredCollateralRatio?: Maybe<Scalars['String']>;
  startAtBlock?: Maybe<Block>;
  startAtBlockId?: Maybe<Scalars['String']>;
  startAtBlockNumber?: Maybe<Scalars['BigFloat']>;
};

export type LoanParamFilter = {
  and?: Maybe<Array<LoanParamFilter>>;
  collateralId?: Maybe<StringFilter>;
  debitExchangeRate?: Maybe<StringFilter>;
  globalInterestRatePerSec?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  interestRatePerSec?: Maybe<StringFilter>;
  liquidationPenalty?: Maybe<StringFilter>;
  liquidationRatio?: Maybe<StringFilter>;
  maximumTotalDebitValue?: Maybe<StringFilter>;
  not?: Maybe<LoanParamFilter>;
  or?: Maybe<Array<LoanParamFilter>>;
  requiredCollateralRatio?: Maybe<StringFilter>;
  startAtBlockId?: Maybe<StringFilter>;
  startAtBlockNumber?: Maybe<BigFloatFilter>;
};

export type LoanParamsConnection = {
  __typename?: 'LoanParamsConnection';
  edges: Array<LoanParamsEdge>;
  nodes: Array<Maybe<LoanParam>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type LoanParamsEdge = {
  __typename?: 'LoanParamsEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<LoanParam>;
};

export type LoanParamsHistoriesConnection = {
  __typename?: 'LoanParamsHistoriesConnection';
  edges: Array<LoanParamsHistoriesEdge>;
  nodes: Array<Maybe<LoanParamsHistory>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type LoanParamsHistoriesEdge = {
  __typename?: 'LoanParamsHistoriesEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<LoanParamsHistory>;
};

export enum LoanParamsHistoriesOrderBy {
  CollateralIdAsc = 'COLLATERAL_ID_ASC',
  CollateralIdDesc = 'COLLATERAL_ID_DESC',
  EndAtBlockIdAsc = 'END_AT_BLOCK_ID_ASC',
  EndAtBlockIdDesc = 'END_AT_BLOCK_ID_DESC',
  EndAtBlockNumberAsc = 'END_AT_BLOCK_NUMBER_ASC',
  EndAtBlockNumberDesc = 'END_AT_BLOCK_NUMBER_DESC',
  GlobalInterestRatePerSecAsc = 'GLOBAL_INTEREST_RATE_PER_SEC_ASC',
  GlobalInterestRatePerSecDesc = 'GLOBAL_INTEREST_RATE_PER_SEC_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  InterestRatePerSecAsc = 'INTEREST_RATE_PER_SEC_ASC',
  InterestRatePerSecDesc = 'INTEREST_RATE_PER_SEC_DESC',
  LiquidationPenaltyAsc = 'LIQUIDATION_PENALTY_ASC',
  LiquidationPenaltyDesc = 'LIQUIDATION_PENALTY_DESC',
  LiquidationRatioAsc = 'LIQUIDATION_RATIO_ASC',
  LiquidationRatioDesc = 'LIQUIDATION_RATIO_DESC',
  MaximumTotalDebitValueAsc = 'MAXIMUM_TOTAL_DEBIT_VALUE_ASC',
  MaximumTotalDebitValueDesc = 'MAXIMUM_TOTAL_DEBIT_VALUE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RequiredCollateralRatioAsc = 'REQUIRED_COLLATERAL_RATIO_ASC',
  RequiredCollateralRatioDesc = 'REQUIRED_COLLATERAL_RATIO_DESC',
  StartAtBlockIdAsc = 'START_AT_BLOCK_ID_ASC',
  StartAtBlockIdDesc = 'START_AT_BLOCK_ID_DESC',
  StartAtBlockNumberAsc = 'START_AT_BLOCK_NUMBER_ASC',
  StartAtBlockNumberDesc = 'START_AT_BLOCK_NUMBER_DESC'
}

export type LoanParamsHistory = Node & {
  __typename?: 'LoanParamsHistory';
  collateral?: Maybe<Token>;
  collateralId?: Maybe<Scalars['String']>;
  endAtBlock?: Maybe<Block>;
  endAtBlockId?: Maybe<Scalars['String']>;
  endAtBlockNumber?: Maybe<Scalars['BigFloat']>;
  globalInterestRatePerSec?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  interestRatePerSec?: Maybe<Scalars['String']>;
  liquidationPenalty?: Maybe<Scalars['String']>;
  liquidationRatio?: Maybe<Scalars['String']>;
  maximumTotalDebitValue?: Maybe<Scalars['String']>;
  nodeId: Scalars['ID'];
  requiredCollateralRatio?: Maybe<Scalars['String']>;
  startAtBlock?: Maybe<Block>;
  startAtBlockId?: Maybe<Scalars['String']>;
  startAtBlockNumber?: Maybe<Scalars['BigFloat']>;
};

export type LoanParamsHistoryFilter = {
  and?: Maybe<Array<LoanParamsHistoryFilter>>;
  collateralId?: Maybe<StringFilter>;
  endAtBlockId?: Maybe<StringFilter>;
  endAtBlockNumber?: Maybe<BigFloatFilter>;
  globalInterestRatePerSec?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  interestRatePerSec?: Maybe<StringFilter>;
  liquidationPenalty?: Maybe<StringFilter>;
  liquidationRatio?: Maybe<StringFilter>;
  maximumTotalDebitValue?: Maybe<StringFilter>;
  not?: Maybe<LoanParamsHistoryFilter>;
  or?: Maybe<Array<LoanParamsHistoryFilter>>;
  requiredCollateralRatio?: Maybe<StringFilter>;
  startAtBlockId?: Maybe<StringFilter>;
  startAtBlockNumber?: Maybe<BigFloatFilter>;
};

export enum LoanParamsOrderBy {
  CollateralIdAsc = 'COLLATERAL_ID_ASC',
  CollateralIdDesc = 'COLLATERAL_ID_DESC',
  DebitExchangeRateAsc = 'DEBIT_EXCHANGE_RATE_ASC',
  DebitExchangeRateDesc = 'DEBIT_EXCHANGE_RATE_DESC',
  GlobalInterestRatePerSecAsc = 'GLOBAL_INTEREST_RATE_PER_SEC_ASC',
  GlobalInterestRatePerSecDesc = 'GLOBAL_INTEREST_RATE_PER_SEC_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  InterestRatePerSecAsc = 'INTEREST_RATE_PER_SEC_ASC',
  InterestRatePerSecDesc = 'INTEREST_RATE_PER_SEC_DESC',
  LiquidationPenaltyAsc = 'LIQUIDATION_PENALTY_ASC',
  LiquidationPenaltyDesc = 'LIQUIDATION_PENALTY_DESC',
  LiquidationRatioAsc = 'LIQUIDATION_RATIO_ASC',
  LiquidationRatioDesc = 'LIQUIDATION_RATIO_DESC',
  MaximumTotalDebitValueAsc = 'MAXIMUM_TOTAL_DEBIT_VALUE_ASC',
  MaximumTotalDebitValueDesc = 'MAXIMUM_TOTAL_DEBIT_VALUE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RequiredCollateralRatioAsc = 'REQUIRED_COLLATERAL_RATIO_ASC',
  RequiredCollateralRatioDesc = 'REQUIRED_COLLATERAL_RATIO_DESC',
  StartAtBlockIdAsc = 'START_AT_BLOCK_ID_ASC',
  StartAtBlockIdDesc = 'START_AT_BLOCK_ID_DESC',
  StartAtBlockNumberAsc = 'START_AT_BLOCK_NUMBER_ASC',
  StartAtBlockNumberDesc = 'START_AT_BLOCK_NUMBER_DESC'
}

export type LoanPosition = Node & {
  __typename?: 'LoanPosition';
  collateral?: Maybe<Token>;
  collateralAmount?: Maybe<Scalars['String']>;
  collateralId?: Maybe<Scalars['String']>;
  debitAmount?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  nodeId: Scalars['ID'];
  owner?: Maybe<Account>;
  ownerId?: Maybe<Scalars['String']>;
};

export type LoanPositionFilter = {
  and?: Maybe<Array<LoanPositionFilter>>;
  collateralAmount?: Maybe<StringFilter>;
  collateralId?: Maybe<StringFilter>;
  debitAmount?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  not?: Maybe<LoanPositionFilter>;
  or?: Maybe<Array<LoanPositionFilter>>;
  ownerId?: Maybe<StringFilter>;
};

export type LoanPositionsConnection = {
  __typename?: 'LoanPositionsConnection';
  edges: Array<LoanPositionsEdge>;
  nodes: Array<Maybe<LoanPosition>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type LoanPositionsEdge = {
  __typename?: 'LoanPositionsEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<LoanPosition>;
};

export enum LoanPositionsOrderBy {
  CollateralAmountAsc = 'COLLATERAL_AMOUNT_ASC',
  CollateralAmountDesc = 'COLLATERAL_AMOUNT_DESC',
  CollateralIdAsc = 'COLLATERAL_ID_ASC',
  CollateralIdDesc = 'COLLATERAL_ID_DESC',
  DebitAmountAsc = 'DEBIT_AMOUNT_ASC',
  DebitAmountDesc = 'DEBIT_AMOUNT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  OwnerIdAsc = 'OWNER_ID_ASC',
  OwnerIdDesc = 'OWNER_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type NftAction = Node & {
  __typename?: 'NFTAction';
  account?: Maybe<Account>;
  accountId?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['JSON']>;
  extrinsic?: Maybe<Extrinsic>;
  extrinsicId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  nodeId: Scalars['ID'];
  subType?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Datetime']>;
  type?: Maybe<Scalars['String']>;
};

export type NftActionFilter = {
  accountId?: Maybe<StringFilter>;
  and?: Maybe<Array<NftActionFilter>>;
  data?: Maybe<JsonFilter>;
  extrinsicId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  not?: Maybe<NftActionFilter>;
  or?: Maybe<Array<NftActionFilter>>;
  subType?: Maybe<StringFilter>;
  timestamp?: Maybe<DatetimeFilter>;
  type?: Maybe<StringFilter>;
};

export type NftActionsConnection = {
  __typename?: 'NftActionsConnection';
  edges: Array<NftActionsEdge>;
  nodes: Array<Maybe<NftAction>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type NftActionsEdge = {
  __typename?: 'NftActionsEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<NftAction>;
};

export enum NftActionsOrderBy {
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  DataAsc = 'DATA_ASC',
  DataDesc = 'DATA_DESC',
  ExtrinsicIdAsc = 'EXTRINSIC_ID_ASC',
  ExtrinsicIdDesc = 'EXTRINSIC_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SubTypeAsc = 'SUB_TYPE_ASC',
  SubTypeDesc = 'SUB_TYPE_DESC',
  TimestampAsc = 'TIMESTAMP_ASC',
  TimestampDesc = 'TIMESTAMP_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC'
}

export type Node = {
  nodeId: Scalars['ID'];
};

export type OracleFeedRecord = Node & {
  __typename?: 'OracleFeedRecord';
  account?: Maybe<Account>;
  accountId?: Maybe<Scalars['String']>;
  block?: Maybe<Block>;
  blockId?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['BigFloat']>;
  id: Scalars['String'];
  nodeId: Scalars['ID'];
  price?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  token?: Maybe<Token>;
  tokenId?: Maybe<Scalars['String']>;
};

export type OracleFeedRecordFilter = {
  accountId?: Maybe<StringFilter>;
  and?: Maybe<Array<OracleFeedRecordFilter>>;
  blockId?: Maybe<StringFilter>;
  blockNumber?: Maybe<BigFloatFilter>;
  id?: Maybe<StringFilter>;
  not?: Maybe<OracleFeedRecordFilter>;
  or?: Maybe<Array<OracleFeedRecordFilter>>;
  price?: Maybe<StringFilter>;
  provider?: Maybe<StringFilter>;
  tokenId?: Maybe<StringFilter>;
};

export type OracleFeedRecordsConnection = {
  __typename?: 'OracleFeedRecordsConnection';
  edges: Array<OracleFeedRecordsEdge>;
  nodes: Array<Maybe<OracleFeedRecord>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type OracleFeedRecordsEdge = {
  __typename?: 'OracleFeedRecordsEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<OracleFeedRecord>;
};

export enum OracleFeedRecordsOrderBy {
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  BlockIdAsc = 'BLOCK_ID_ASC',
  BlockIdDesc = 'BLOCK_ID_DESC',
  BlockNumberAsc = 'BLOCK_NUMBER_ASC',
  BlockNumberDesc = 'BLOCK_NUMBER_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProviderAsc = 'PROVIDER_ASC',
  ProviderDesc = 'PROVIDER_DESC',
  TokenIdAsc = 'TOKEN_ID_ASC',
  TokenIdDesc = 'TOKEN_ID_DESC'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['Cursor']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['Cursor']>;
};

export type Pool = Node & {
  __typename?: 'Pool';
  accountsByDexActionPoolIdAndAccountId: PoolAccountsByDexActionPoolIdAndAccountIdManyToManyConnection;
  actions: DexActionsConnection;
  dayData: PoolDayDataConnection;
  exchange0?: Maybe<Scalars['String']>;
  exchange1?: Maybe<Scalars['String']>;
  extrinsicsByDexActionPoolIdAndExtrinsicId: PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyConnection;
  fee?: Maybe<Scalars['String']>;
  hourData: PoolHourDataConnection;
  id: Scalars['String'];
  nodeId: Scalars['ID'];
  token0?: Maybe<Token>;
  token0Amount?: Maybe<Scalars['String']>;
  token0Id?: Maybe<Scalars['String']>;
  token0TVL?: Maybe<Scalars['String']>;
  token0Volume?: Maybe<Scalars['String']>;
  token1?: Maybe<Token>;
  token1Amount?: Maybe<Scalars['String']>;
  token1Id?: Maybe<Scalars['String']>;
  token1TVL?: Maybe<Scalars['String']>;
  token1Volume?: Maybe<Scalars['String']>;
  tokensByDexActionPoolIdAndToken0Id: PoolTokensByDexActionPoolIdAndToken0IdManyToManyConnection;
  tokensByDexActionPoolIdAndToken1Id: PoolTokensByDexActionPoolIdAndToken1IdManyToManyConnection;
  tokensByPoolDayDatumPoolIdAndToken0Id: PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyConnection;
  tokensByPoolDayDatumPoolIdAndToken1Id: PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyConnection;
  tokensByPoolHourDatumPoolIdAndToken0Id: PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyConnection;
  tokensByPoolHourDatumPoolIdAndToken1Id: PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyConnection;
  tvlUSD?: Maybe<Scalars['String']>;
  txCount?: Maybe<Scalars['BigFloat']>;
  volumeUSD?: Maybe<Scalars['String']>;
};


export type PoolAccountsByDexActionPoolIdAndAccountIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<AccountFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AccountsOrderBy>>;
};


export type PoolActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<DexActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DexActionsOrderBy>>;
};


export type PoolDayDataArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolDayDatumFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolDayDataOrderBy>>;
};


export type PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ExtrinsicFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ExtrinsicsOrderBy>>;
};


export type PoolHourDataArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolHourDatumFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolHourDataOrderBy>>;
};


export type PoolTokensByDexActionPoolIdAndToken0IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type PoolTokensByDexActionPoolIdAndToken1IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type PoolTokensByPoolDayDatumPoolIdAndToken0IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type PoolTokensByPoolDayDatumPoolIdAndToken1IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type PoolTokensByPoolHourDatumPoolIdAndToken0IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type PoolTokensByPoolHourDatumPoolIdAndToken1IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};

export type PoolAccountsByDexActionPoolIdAndAccountIdManyToManyConnection = {
  __typename?: 'PoolAccountsByDexActionPoolIdAndAccountIdManyToManyConnection';
  edges: Array<PoolAccountsByDexActionPoolIdAndAccountIdManyToManyEdge>;
  nodes: Array<Maybe<Account>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PoolAccountsByDexActionPoolIdAndAccountIdManyToManyEdge = {
  __typename?: 'PoolAccountsByDexActionPoolIdAndAccountIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  dexActions: DexActionsConnection;
  node?: Maybe<Account>;
};


export type PoolAccountsByDexActionPoolIdAndAccountIdManyToManyEdgeDexActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<DexActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DexActionsOrderBy>>;
};

export type PoolDayDataConnection = {
  __typename?: 'PoolDayDataConnection';
  edges: Array<PoolDayDataEdge>;
  nodes: Array<Maybe<PoolDayDatum>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PoolDayDataEdge = {
  __typename?: 'PoolDayDataEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<PoolDayDatum>;
};

export enum PoolDayDataOrderBy {
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  Exchange0Asc = 'EXCHANGE0_ASC',
  Exchange0Desc = 'EXCHANGE0_DESC',
  Exchange1Asc = 'EXCHANGE1_ASC',
  Exchange1Desc = 'EXCHANGE1_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PoolIdAsc = 'POOL_ID_ASC',
  PoolIdDesc = 'POOL_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  Token0AmountAsc = 'TOKEN0_AMOUNT_ASC',
  Token0AmountDesc = 'TOKEN0_AMOUNT_DESC',
  Token0CloseAsc = 'TOKEN0_CLOSE_ASC',
  Token0CloseDesc = 'TOKEN0_CLOSE_DESC',
  Token0HighAsc = 'TOKEN0_HIGH_ASC',
  Token0HighDesc = 'TOKEN0_HIGH_DESC',
  Token0IdAsc = 'TOKEN0_ID_ASC',
  Token0IdDesc = 'TOKEN0_ID_DESC',
  Token0LowAsc = 'TOKEN0_LOW_ASC',
  Token0LowDesc = 'TOKEN0_LOW_DESC',
  Token0OpenAsc = 'TOKEN0_OPEN_ASC',
  Token0OpenDesc = 'TOKEN0_OPEN_DESC',
  Token1AmountAsc = 'TOKEN1_AMOUNT_ASC',
  Token1AmountDesc = 'TOKEN1_AMOUNT_DESC',
  Token1IdAsc = 'TOKEN1_ID_ASC',
  Token1IdDesc = 'TOKEN1_ID_DESC',
  TvlUSDAsc = 'TVL_U_S_D_ASC',
  TvlUSDDesc = 'TVL_U_S_D_DESC',
  TxCountAsc = 'TX_COUNT_ASC',
  TxCountDesc = 'TX_COUNT_DESC',
  VolumeToken0Asc = 'VOLUME_TOKEN0_ASC',
  VolumeToken0Desc = 'VOLUME_TOKEN0_DESC',
  VolumeToken1Asc = 'VOLUME_TOKEN1_ASC',
  VolumeToken1Desc = 'VOLUME_TOKEN1_DESC',
  VolumeUSDAsc = 'VOLUME_U_S_D_ASC',
  VolumeUSDDesc = 'VOLUME_U_S_D_DESC'
}

export type PoolDayDatum = Node & {
  __typename?: 'PoolDayDatum';
  date?: Maybe<Scalars['Datetime']>;
  exchange0?: Maybe<Scalars['String']>;
  exchange1?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  nodeId: Scalars['ID'];
  pool?: Maybe<Pool>;
  poolId?: Maybe<Scalars['String']>;
  token0?: Maybe<Token>;
  token0Amount?: Maybe<Scalars['String']>;
  token0Close?: Maybe<Scalars['String']>;
  token0High?: Maybe<Scalars['String']>;
  token0Id: Scalars['String'];
  token0Low?: Maybe<Scalars['String']>;
  token0Open?: Maybe<Scalars['String']>;
  token1?: Maybe<Token>;
  token1Amount?: Maybe<Scalars['String']>;
  token1Id: Scalars['String'];
  tvlUSD?: Maybe<Scalars['String']>;
  txCount?: Maybe<Scalars['BigFloat']>;
  volumeToken0?: Maybe<Scalars['String']>;
  volumeToken1?: Maybe<Scalars['String']>;
  volumeUSD?: Maybe<Scalars['String']>;
};

export type PoolDayDatumFilter = {
  and?: Maybe<Array<PoolDayDatumFilter>>;
  date?: Maybe<DatetimeFilter>;
  exchange0?: Maybe<StringFilter>;
  exchange1?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  not?: Maybe<PoolDayDatumFilter>;
  or?: Maybe<Array<PoolDayDatumFilter>>;
  poolId?: Maybe<StringFilter>;
  token0Amount?: Maybe<StringFilter>;
  token0Close?: Maybe<StringFilter>;
  token0High?: Maybe<StringFilter>;
  token0Id?: Maybe<StringFilter>;
  token0Low?: Maybe<StringFilter>;
  token0Open?: Maybe<StringFilter>;
  token1Amount?: Maybe<StringFilter>;
  token1Id?: Maybe<StringFilter>;
  tvlUSD?: Maybe<StringFilter>;
  txCount?: Maybe<BigFloatFilter>;
  volumeToken0?: Maybe<StringFilter>;
  volumeToken1?: Maybe<StringFilter>;
  volumeUSD?: Maybe<StringFilter>;
};

export type PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyConnection = {
  __typename?: 'PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyConnection';
  edges: Array<PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyEdge>;
  nodes: Array<Maybe<Extrinsic>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyEdge = {
  __typename?: 'PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  dexActions: DexActionsConnection;
  node?: Maybe<Extrinsic>;
};


export type PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyEdgeDexActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<DexActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DexActionsOrderBy>>;
};

export type PoolFilter = {
  and?: Maybe<Array<PoolFilter>>;
  exchange0?: Maybe<StringFilter>;
  exchange1?: Maybe<StringFilter>;
  fee?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  not?: Maybe<PoolFilter>;
  or?: Maybe<Array<PoolFilter>>;
  token0Amount?: Maybe<StringFilter>;
  token0Id?: Maybe<StringFilter>;
  token0TVL?: Maybe<StringFilter>;
  token0Volume?: Maybe<StringFilter>;
  token1Amount?: Maybe<StringFilter>;
  token1Id?: Maybe<StringFilter>;
  token1TVL?: Maybe<StringFilter>;
  token1Volume?: Maybe<StringFilter>;
  tvlUSD?: Maybe<StringFilter>;
  txCount?: Maybe<BigFloatFilter>;
  volumeUSD?: Maybe<StringFilter>;
};

export type PoolHourDataConnection = {
  __typename?: 'PoolHourDataConnection';
  edges: Array<PoolHourDataEdge>;
  nodes: Array<Maybe<PoolHourDatum>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PoolHourDataEdge = {
  __typename?: 'PoolHourDataEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<PoolHourDatum>;
};

export enum PoolHourDataOrderBy {
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  Exchange0Asc = 'EXCHANGE0_ASC',
  Exchange0Desc = 'EXCHANGE0_DESC',
  Exchange1Asc = 'EXCHANGE1_ASC',
  Exchange1Desc = 'EXCHANGE1_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PoolIdAsc = 'POOL_ID_ASC',
  PoolIdDesc = 'POOL_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  Token0AmountAsc = 'TOKEN0_AMOUNT_ASC',
  Token0AmountDesc = 'TOKEN0_AMOUNT_DESC',
  Token0CloseAsc = 'TOKEN0_CLOSE_ASC',
  Token0CloseDesc = 'TOKEN0_CLOSE_DESC',
  Token0HighAsc = 'TOKEN0_HIGH_ASC',
  Token0HighDesc = 'TOKEN0_HIGH_DESC',
  Token0IdAsc = 'TOKEN0_ID_ASC',
  Token0IdDesc = 'TOKEN0_ID_DESC',
  Token0LowAsc = 'TOKEN0_LOW_ASC',
  Token0LowDesc = 'TOKEN0_LOW_DESC',
  Token0OpenAsc = 'TOKEN0_OPEN_ASC',
  Token0OpenDesc = 'TOKEN0_OPEN_DESC',
  Token1AmountAsc = 'TOKEN1_AMOUNT_ASC',
  Token1AmountDesc = 'TOKEN1_AMOUNT_DESC',
  Token1IdAsc = 'TOKEN1_ID_ASC',
  Token1IdDesc = 'TOKEN1_ID_DESC',
  TvlUSDAsc = 'TVL_U_S_D_ASC',
  TvlUSDDesc = 'TVL_U_S_D_DESC',
  TxCountAsc = 'TX_COUNT_ASC',
  TxCountDesc = 'TX_COUNT_DESC',
  VolumeToken0Asc = 'VOLUME_TOKEN0_ASC',
  VolumeToken0Desc = 'VOLUME_TOKEN0_DESC',
  VolumeToken1Asc = 'VOLUME_TOKEN1_ASC',
  VolumeToken1Desc = 'VOLUME_TOKEN1_DESC',
  VolumeUSDAsc = 'VOLUME_U_S_D_ASC',
  VolumeUSDDesc = 'VOLUME_U_S_D_DESC'
}

export type PoolHourDatum = Node & {
  __typename?: 'PoolHourDatum';
  date?: Maybe<Scalars['Datetime']>;
  exchange0?: Maybe<Scalars['String']>;
  exchange1?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  nodeId: Scalars['ID'];
  pool?: Maybe<Pool>;
  poolId?: Maybe<Scalars['String']>;
  token0?: Maybe<Token>;
  token0Amount?: Maybe<Scalars['String']>;
  token0Close?: Maybe<Scalars['String']>;
  token0High?: Maybe<Scalars['String']>;
  token0Id?: Maybe<Scalars['String']>;
  token0Low?: Maybe<Scalars['String']>;
  token0Open?: Maybe<Scalars['String']>;
  token1?: Maybe<Token>;
  token1Amount?: Maybe<Scalars['String']>;
  token1Id?: Maybe<Scalars['String']>;
  tvlUSD?: Maybe<Scalars['String']>;
  txCount?: Maybe<Scalars['BigFloat']>;
  volumeToken0?: Maybe<Scalars['String']>;
  volumeToken1?: Maybe<Scalars['String']>;
  volumeUSD?: Maybe<Scalars['String']>;
};

export type PoolHourDatumFilter = {
  and?: Maybe<Array<PoolHourDatumFilter>>;
  date?: Maybe<DatetimeFilter>;
  exchange0?: Maybe<StringFilter>;
  exchange1?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  not?: Maybe<PoolHourDatumFilter>;
  or?: Maybe<Array<PoolHourDatumFilter>>;
  poolId?: Maybe<StringFilter>;
  token0Amount?: Maybe<StringFilter>;
  token0Close?: Maybe<StringFilter>;
  token0High?: Maybe<StringFilter>;
  token0Id?: Maybe<StringFilter>;
  token0Low?: Maybe<StringFilter>;
  token0Open?: Maybe<StringFilter>;
  token1Amount?: Maybe<StringFilter>;
  token1Id?: Maybe<StringFilter>;
  tvlUSD?: Maybe<StringFilter>;
  txCount?: Maybe<BigFloatFilter>;
  volumeToken0?: Maybe<StringFilter>;
  volumeToken1?: Maybe<StringFilter>;
  volumeUSD?: Maybe<StringFilter>;
};

export type PoolTokensByDexActionPoolIdAndToken0IdManyToManyConnection = {
  __typename?: 'PoolTokensByDexActionPoolIdAndToken0IdManyToManyConnection';
  edges: Array<PoolTokensByDexActionPoolIdAndToken0IdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PoolTokensByDexActionPoolIdAndToken0IdManyToManyEdge = {
  __typename?: 'PoolTokensByDexActionPoolIdAndToken0IdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  dexActionsByToken0Id: DexActionsConnection;
  node?: Maybe<Token>;
};


export type PoolTokensByDexActionPoolIdAndToken0IdManyToManyEdgeDexActionsByToken0IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<DexActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DexActionsOrderBy>>;
};

export type PoolTokensByDexActionPoolIdAndToken1IdManyToManyConnection = {
  __typename?: 'PoolTokensByDexActionPoolIdAndToken1IdManyToManyConnection';
  edges: Array<PoolTokensByDexActionPoolIdAndToken1IdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PoolTokensByDexActionPoolIdAndToken1IdManyToManyEdge = {
  __typename?: 'PoolTokensByDexActionPoolIdAndToken1IdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  dexActionsByToken1Id: DexActionsConnection;
  node?: Maybe<Token>;
};


export type PoolTokensByDexActionPoolIdAndToken1IdManyToManyEdgeDexActionsByToken1IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<DexActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DexActionsOrderBy>>;
};

export type PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyConnection = {
  __typename?: 'PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyConnection';
  edges: Array<PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyEdge = {
  __typename?: 'PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  poolDayDataBase: PoolDayDataConnection;
};


export type PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyEdgePoolDayDataBaseArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolDayDatumFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolDayDataOrderBy>>;
};

export type PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyConnection = {
  __typename?: 'PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyConnection';
  edges: Array<PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyEdge = {
  __typename?: 'PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  poolDayDataQuote: PoolDayDataConnection;
};


export type PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyEdgePoolDayDataQuoteArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolDayDatumFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolDayDataOrderBy>>;
};

export type PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyConnection = {
  __typename?: 'PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyConnection';
  edges: Array<PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyEdge = {
  __typename?: 'PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  poolHourDataByToken0Id: PoolHourDataConnection;
};


export type PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyEdgePoolHourDataByToken0IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolHourDatumFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolHourDataOrderBy>>;
};

export type PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyConnection = {
  __typename?: 'PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyConnection';
  edges: Array<PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyEdge = {
  __typename?: 'PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  poolHourDataByToken1Id: PoolHourDataConnection;
};


export type PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyEdgePoolHourDataByToken1IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolHourDatumFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolHourDataOrderBy>>;
};

export type PoolsConnection = {
  __typename?: 'PoolsConnection';
  edges: Array<PoolsEdge>;
  nodes: Array<Maybe<Pool>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PoolsEdge = {
  __typename?: 'PoolsEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Pool>;
};

export enum PoolsOrderBy {
  Exchange0Asc = 'EXCHANGE0_ASC',
  Exchange0Desc = 'EXCHANGE0_DESC',
  Exchange1Asc = 'EXCHANGE1_ASC',
  Exchange1Desc = 'EXCHANGE1_DESC',
  FeeAsc = 'FEE_ASC',
  FeeDesc = 'FEE_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  Token0AmountAsc = 'TOKEN0_AMOUNT_ASC',
  Token0AmountDesc = 'TOKEN0_AMOUNT_DESC',
  Token0IdAsc = 'TOKEN0_ID_ASC',
  Token0IdDesc = 'TOKEN0_ID_DESC',
  Token0TVLAsc = 'TOKEN0_T_V_L_ASC',
  Token0TVLDesc = 'TOKEN0_T_V_L_DESC',
  Token0VolumeAsc = 'TOKEN0_VOLUME_ASC',
  Token0VolumeDesc = 'TOKEN0_VOLUME_DESC',
  Token1AmountAsc = 'TOKEN1_AMOUNT_ASC',
  Token1AmountDesc = 'TOKEN1_AMOUNT_DESC',
  Token1IdAsc = 'TOKEN1_ID_ASC',
  Token1IdDesc = 'TOKEN1_ID_DESC',
  Token1TVLAsc = 'TOKEN1_T_V_L_ASC',
  Token1TVLDesc = 'TOKEN1_T_V_L_DESC',
  Token1VolumeAsc = 'TOKEN1_VOLUME_ASC',
  Token1VolumeDesc = 'TOKEN1_VOLUME_DESC',
  TvlUSDAsc = 'TVL_U_S_D_ASC',
  TvlUSDDesc = 'TVL_U_S_D_DESC',
  TxCountAsc = 'TX_COUNT_ASC',
  TxCountDesc = 'TX_COUNT_DESC',
  VolumeUSDAsc = 'VOLUME_U_S_D_ASC',
  VolumeUSDDesc = 'VOLUME_U_S_D_DESC'
}

export type PriceBundle = Node & {
  __typename?: 'PriceBundle';
  id: Scalars['String'];
  ksm?: Maybe<Scalars['String']>;
  nodeId: Scalars['ID'];
};

export type PriceBundleFilter = {
  and?: Maybe<Array<PriceBundleFilter>>;
  id?: Maybe<StringFilter>;
  ksm?: Maybe<StringFilter>;
  not?: Maybe<PriceBundleFilter>;
  or?: Maybe<Array<PriceBundleFilter>>;
};

export type PriceBundlesConnection = {
  __typename?: 'PriceBundlesConnection';
  edges: Array<PriceBundlesEdge>;
  nodes: Array<Maybe<PriceBundle>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PriceBundlesEdge = {
  __typename?: 'PriceBundlesEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<PriceBundle>;
};

export enum PriceBundlesOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  KsmAsc = 'KSM_ASC',
  KsmDesc = 'KSM_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type PriceRecord = Node & {
  __typename?: 'PriceRecord';
  id: Scalars['String'];
  ksm?: Maybe<Scalars['String']>;
  nodeId: Scalars['ID'];
};

export type PriceRecordFilter = {
  and?: Maybe<Array<PriceRecordFilter>>;
  id?: Maybe<StringFilter>;
  ksm?: Maybe<StringFilter>;
  not?: Maybe<PriceRecordFilter>;
  or?: Maybe<Array<PriceRecordFilter>>;
};

export type PriceRecordsConnection = {
  __typename?: 'PriceRecordsConnection';
  edges: Array<PriceRecordsEdge>;
  nodes: Array<Maybe<PriceRecord>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PriceRecordsEdge = {
  __typename?: 'PriceRecordsEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<PriceRecord>;
};

export enum PriceRecordsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  KsmAsc = 'KSM_ASC',
  KsmDesc = 'KSM_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type ProvisionPool = Node & {
  __typename?: 'ProvisionPool';
  endAtBlock?: Maybe<Block>;
  endAtBlockId?: Maybe<Scalars['String']>;
  endAtBlockNumber?: Maybe<Scalars['BigFloat']>;
  id: Scalars['String'];
  initializeShare?: Maybe<Scalars['String']>;
  nodeId: Scalars['ID'];
  poolToken?: Maybe<Token>;
  poolTokenId?: Maybe<Scalars['String']>;
  records: UserProvisionsConnection;
  startAtBlock?: Maybe<Block>;
  startAtBlockId?: Maybe<Scalars['String']>;
  startAtBlockNumber?: Maybe<Scalars['BigFloat']>;
  token0?: Maybe<Token>;
  token0Amount?: Maybe<Scalars['String']>;
  token0Id?: Maybe<Scalars['String']>;
  token1?: Maybe<Token>;
  token1Amount?: Maybe<Scalars['String']>;
  token1Id?: Maybe<Scalars['String']>;
  tokensByUserProvisionPoolIdAndToken0Id: ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyConnection;
  tokensByUserProvisionPoolIdAndToken1Id: ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyConnection;
  txCount?: Maybe<Scalars['BigFloat']>;
};


export type ProvisionPoolRecordsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<UserProvisionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<UserProvisionsOrderBy>>;
};


export type ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};

export type ProvisionPoolFilter = {
  and?: Maybe<Array<ProvisionPoolFilter>>;
  endAtBlockId?: Maybe<StringFilter>;
  endAtBlockNumber?: Maybe<BigFloatFilter>;
  id?: Maybe<StringFilter>;
  initializeShare?: Maybe<StringFilter>;
  not?: Maybe<ProvisionPoolFilter>;
  or?: Maybe<Array<ProvisionPoolFilter>>;
  poolTokenId?: Maybe<StringFilter>;
  startAtBlockId?: Maybe<StringFilter>;
  startAtBlockNumber?: Maybe<BigFloatFilter>;
  token0Amount?: Maybe<StringFilter>;
  token0Id?: Maybe<StringFilter>;
  token1Amount?: Maybe<StringFilter>;
  token1Id?: Maybe<StringFilter>;
  txCount?: Maybe<BigFloatFilter>;
};

export type ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyConnection = {
  __typename?: 'ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyConnection';
  edges: Array<ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyEdge = {
  __typename?: 'ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  userProvisionsByToken0Id: UserProvisionsConnection;
};


export type ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyEdgeUserProvisionsByToken0IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<UserProvisionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<UserProvisionsOrderBy>>;
};

export type ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyConnection = {
  __typename?: 'ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyConnection';
  edges: Array<ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyEdge = {
  __typename?: 'ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  userProvisionsByToken1Id: UserProvisionsConnection;
};


export type ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyEdgeUserProvisionsByToken1IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<UserProvisionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<UserProvisionsOrderBy>>;
};

export type ProvisionPoolsConnection = {
  __typename?: 'ProvisionPoolsConnection';
  edges: Array<ProvisionPoolsEdge>;
  nodes: Array<Maybe<ProvisionPool>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ProvisionPoolsEdge = {
  __typename?: 'ProvisionPoolsEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<ProvisionPool>;
};

export enum ProvisionPoolsOrderBy {
  EndAtBlockIdAsc = 'END_AT_BLOCK_ID_ASC',
  EndAtBlockIdDesc = 'END_AT_BLOCK_ID_DESC',
  EndAtBlockNumberAsc = 'END_AT_BLOCK_NUMBER_ASC',
  EndAtBlockNumberDesc = 'END_AT_BLOCK_NUMBER_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  InitializeShareAsc = 'INITIALIZE_SHARE_ASC',
  InitializeShareDesc = 'INITIALIZE_SHARE_DESC',
  Natural = 'NATURAL',
  PoolTokenIdAsc = 'POOL_TOKEN_ID_ASC',
  PoolTokenIdDesc = 'POOL_TOKEN_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StartAtBlockIdAsc = 'START_AT_BLOCK_ID_ASC',
  StartAtBlockIdDesc = 'START_AT_BLOCK_ID_DESC',
  StartAtBlockNumberAsc = 'START_AT_BLOCK_NUMBER_ASC',
  StartAtBlockNumberDesc = 'START_AT_BLOCK_NUMBER_DESC',
  Token0AmountAsc = 'TOKEN0_AMOUNT_ASC',
  Token0AmountDesc = 'TOKEN0_AMOUNT_DESC',
  Token0IdAsc = 'TOKEN0_ID_ASC',
  Token0IdDesc = 'TOKEN0_ID_DESC',
  Token1AmountAsc = 'TOKEN1_AMOUNT_ASC',
  Token1AmountDesc = 'TOKEN1_AMOUNT_DESC',
  Token1IdAsc = 'TOKEN1_ID_ASC',
  Token1IdDesc = 'TOKEN1_ID_DESC',
  TxCountAsc = 'TX_COUNT_ASC',
  TxCountDesc = 'TX_COUNT_DESC'
}

export type Query = Node & {
  __typename?: 'Query';
  _metadata?: Maybe<_Metadata>;
  account?: Maybe<Account>;
  accountByNodeId?: Maybe<Account>;
  accounts?: Maybe<AccountsConnection>;
  block?: Maybe<Block>;
  blockByNodeId?: Maybe<Block>;
  blocks?: Maybe<BlocksConnection>;
  call?: Maybe<Call>;
  callByNodeId?: Maybe<Call>;
  calls?: Maybe<CallsConnection>;
  dex?: Maybe<Dex>;
  dexAction?: Maybe<DexAction>;
  dexActionByNodeId?: Maybe<DexAction>;
  dexActions?: Maybe<DexActionsConnection>;
  dexByNodeId?: Maybe<Dex>;
  dexDayData?: Maybe<DexDayDataConnection>;
  dexDayDatum?: Maybe<DexDayDatum>;
  dexDayDatumByNodeId?: Maybe<DexDayDatum>;
  dexes?: Maybe<DexesConnection>;
  event?: Maybe<Event>;
  eventByNodeId?: Maybe<Event>;
  events?: Maybe<EventsConnection>;
  extrinsic?: Maybe<Extrinsic>;
  extrinsicByNodeId?: Maybe<Extrinsic>;
  extrinsics?: Maybe<ExtrinsicsConnection>;
  homaAction?: Maybe<HomaAction>;
  homaActionByNodeId?: Maybe<HomaAction>;
  homaActions?: Maybe<HomaActionsConnection>;
  incentiveAction?: Maybe<IncentiveAction>;
  incentiveActionByNodeId?: Maybe<IncentiveAction>;
  incentiveActions?: Maybe<IncentiveActionsConnection>;
  loanAction?: Maybe<LoanAction>;
  loanActionByNodeId?: Maybe<LoanAction>;
  loanActions?: Maybe<LoanActionsConnection>;
  loanParam?: Maybe<LoanParam>;
  loanParamByNodeId?: Maybe<LoanParam>;
  loanParams?: Maybe<LoanParamsConnection>;
  loanParamsHistories?: Maybe<LoanParamsHistoriesConnection>;
  loanParamsHistory?: Maybe<LoanParamsHistory>;
  loanParamsHistoryByNodeId?: Maybe<LoanParamsHistory>;
  loanPosition?: Maybe<LoanPosition>;
  loanPositionByNodeId?: Maybe<LoanPosition>;
  loanPositions?: Maybe<LoanPositionsConnection>;
  nFTAction?: Maybe<NftAction>;
  nFTActionByNodeId?: Maybe<NftAction>;
  nFTActions?: Maybe<NftActionsConnection>;
  node?: Maybe<Node>;
  nodeId: Scalars['ID'];
  oracleFeedRecord?: Maybe<OracleFeedRecord>;
  oracleFeedRecordByNodeId?: Maybe<OracleFeedRecord>;
  oracleFeedRecords?: Maybe<OracleFeedRecordsConnection>;
  pool?: Maybe<Pool>;
  poolByNodeId?: Maybe<Pool>;
  poolDayData?: Maybe<PoolDayDataConnection>;
  poolDayDatum?: Maybe<PoolDayDatum>;
  poolDayDatumByNodeId?: Maybe<PoolDayDatum>;
  poolHourData?: Maybe<PoolHourDataConnection>;
  poolHourDatum?: Maybe<PoolHourDatum>;
  poolHourDatumByNodeId?: Maybe<PoolHourDatum>;
  pools?: Maybe<PoolsConnection>;
  priceBundle?: Maybe<PriceBundle>;
  priceBundleByNodeId?: Maybe<PriceBundle>;
  priceBundles?: Maybe<PriceBundlesConnection>;
  priceRecord?: Maybe<PriceRecord>;
  priceRecordByNodeId?: Maybe<PriceRecord>;
  priceRecords?: Maybe<PriceRecordsConnection>;
  provisionPool?: Maybe<ProvisionPool>;
  provisionPoolByNodeId?: Maybe<ProvisionPool>;
  provisionPools?: Maybe<ProvisionPoolsConnection>;
  query: Query;
  systemConst?: Maybe<SystemConst>;
  systemConstByNodeId?: Maybe<SystemConst>;
  systemConsts?: Maybe<SystemConstsConnection>;
  token?: Maybe<Token>;
  tokenByNodeId?: Maybe<Token>;
  tokenDayData?: Maybe<TokenDayDataConnection>;
  tokenDayDatum?: Maybe<TokenDayDatum>;
  tokenDayDatumByNodeId?: Maybe<TokenDayDatum>;
  tokens?: Maybe<TokensConnection>;
  totalLoanPosition?: Maybe<TotalLoanPosition>;
  totalLoanPositionByNodeId?: Maybe<TotalLoanPosition>;
  totalLoanPositions?: Maybe<TotalLoanPositionsConnection>;
  transfer?: Maybe<Transfer>;
  transferByNodeId?: Maybe<Transfer>;
  transfers?: Maybe<TransfersConnection>;
  userProvision?: Maybe<UserProvision>;
  userProvisionByNodeId?: Maybe<UserProvision>;
  userProvisions?: Maybe<UserProvisionsConnection>;
};


export type QueryAccountArgs = {
  id: Scalars['String'];
};


export type QueryAccountByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


export type QueryAccountsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<AccountFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AccountsOrderBy>>;
};


export type QueryBlockArgs = {
  id: Scalars['String'];
};


export type QueryBlockByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


export type QueryBlocksArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<BlockFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<BlocksOrderBy>>;
};


export type QueryCallArgs = {
  id: Scalars['String'];
};


export type QueryCallByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


export type QueryCallsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<CallFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CallsOrderBy>>;
};


export type QueryDexArgs = {
  id: Scalars['String'];
};


export type QueryDexActionArgs = {
  id: Scalars['String'];
};


export type QueryDexActionByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


export type QueryDexActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<DexActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DexActionsOrderBy>>;
};


export type QueryDexByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


export type QueryDexDayDataArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<DexDayDatumFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DexDayDataOrderBy>>;
};


export type QueryDexDayDatumArgs = {
  id: Scalars['String'];
};


export type QueryDexDayDatumByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


export type QueryDexesArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<DexFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DexesOrderBy>>;
};


export type QueryEventArgs = {
  id: Scalars['String'];
};


export type QueryEventByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


export type QueryEventsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<EventFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<EventsOrderBy>>;
};


export type QueryExtrinsicArgs = {
  id: Scalars['String'];
};


export type QueryExtrinsicByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


export type QueryExtrinsicsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ExtrinsicFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ExtrinsicsOrderBy>>;
};


export type QueryHomaActionArgs = {
  id: Scalars['String'];
};


export type QueryHomaActionByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


export type QueryHomaActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<HomaActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<HomaActionsOrderBy>>;
};


export type QueryIncentiveActionArgs = {
  id: Scalars['String'];
};


export type QueryIncentiveActionByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


export type QueryIncentiveActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<IncentiveActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<IncentiveActionsOrderBy>>;
};


export type QueryLoanActionArgs = {
  id: Scalars['String'];
};


export type QueryLoanActionByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


export type QueryLoanActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<LoanActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<LoanActionsOrderBy>>;
};


export type QueryLoanParamArgs = {
  id: Scalars['String'];
};


export type QueryLoanParamByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


export type QueryLoanParamsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<LoanParamFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<LoanParamsOrderBy>>;
};


export type QueryLoanParamsHistoriesArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<LoanParamsHistoryFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<LoanParamsHistoriesOrderBy>>;
};


export type QueryLoanParamsHistoryArgs = {
  id: Scalars['String'];
};


export type QueryLoanParamsHistoryByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


export type QueryLoanPositionArgs = {
  id: Scalars['String'];
};


export type QueryLoanPositionByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


export type QueryLoanPositionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<LoanPositionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<LoanPositionsOrderBy>>;
};


export type QueryNFtActionArgs = {
  id: Scalars['String'];
};


export type QueryNFtActionByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


export type QueryNFtActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<NftActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<NftActionsOrderBy>>;
};


export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


export type QueryOracleFeedRecordArgs = {
  id: Scalars['String'];
};


export type QueryOracleFeedRecordByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


export type QueryOracleFeedRecordsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<OracleFeedRecordFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<OracleFeedRecordsOrderBy>>;
};


export type QueryPoolArgs = {
  id: Scalars['String'];
};


export type QueryPoolByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


export type QueryPoolDayDataArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolDayDatumFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolDayDataOrderBy>>;
};


export type QueryPoolDayDatumArgs = {
  id: Scalars['String'];
};


export type QueryPoolDayDatumByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


export type QueryPoolHourDataArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolHourDatumFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolHourDataOrderBy>>;
};


export type QueryPoolHourDatumArgs = {
  id: Scalars['String'];
};


export type QueryPoolHourDatumByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


export type QueryPoolsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolsOrderBy>>;
};


export type QueryPriceBundleArgs = {
  id: Scalars['String'];
};


export type QueryPriceBundleByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


export type QueryPriceBundlesArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PriceBundleFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PriceBundlesOrderBy>>;
};


export type QueryPriceRecordArgs = {
  id: Scalars['String'];
};


export type QueryPriceRecordByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


export type QueryPriceRecordsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PriceRecordFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PriceRecordsOrderBy>>;
};


export type QueryProvisionPoolArgs = {
  id: Scalars['String'];
};


export type QueryProvisionPoolByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


export type QueryProvisionPoolsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ProvisionPoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProvisionPoolsOrderBy>>;
};


export type QuerySystemConstArgs = {
  id: Scalars['String'];
};


export type QuerySystemConstByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


export type QuerySystemConstsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<SystemConstFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<SystemConstsOrderBy>>;
};


export type QueryTokenArgs = {
  id: Scalars['String'];
};


export type QueryTokenByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


export type QueryTokenDayDataArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenDayDatumFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokenDayDataOrderBy>>;
};


export type QueryTokenDayDatumArgs = {
  id: Scalars['String'];
};


export type QueryTokenDayDatumByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


export type QueryTokensArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type QueryTotalLoanPositionArgs = {
  id: Scalars['String'];
};


export type QueryTotalLoanPositionByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


export type QueryTotalLoanPositionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TotalLoanPositionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TotalLoanPositionsOrderBy>>;
};


export type QueryTransferArgs = {
  id: Scalars['String'];
};


export type QueryTransferByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


export type QueryTransfersArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TransferFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TransfersOrderBy>>;
};


export type QueryUserProvisionArgs = {
  id: Scalars['String'];
};


export type QueryUserProvisionByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


export type QueryUserProvisionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<UserProvisionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<UserProvisionsOrderBy>>;
};

export type StringFilter = {
  distinctFrom?: Maybe<Scalars['String']>;
  distinctFromInsensitive?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  endsWithInsensitive?: Maybe<Scalars['String']>;
  equalTo?: Maybe<Scalars['String']>;
  equalToInsensitive?: Maybe<Scalars['String']>;
  greaterThan?: Maybe<Scalars['String']>;
  greaterThanInsensitive?: Maybe<Scalars['String']>;
  greaterThanOrEqualTo?: Maybe<Scalars['String']>;
  greaterThanOrEqualToInsensitive?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  inInsensitive?: Maybe<Array<Scalars['String']>>;
  includes?: Maybe<Scalars['String']>;
  includesInsensitive?: Maybe<Scalars['String']>;
  isNull?: Maybe<Scalars['Boolean']>;
  lessThan?: Maybe<Scalars['String']>;
  lessThanInsensitive?: Maybe<Scalars['String']>;
  lessThanOrEqualTo?: Maybe<Scalars['String']>;
  lessThanOrEqualToInsensitive?: Maybe<Scalars['String']>;
  like?: Maybe<Scalars['String']>;
  likeInsensitive?: Maybe<Scalars['String']>;
  notDistinctFrom?: Maybe<Scalars['String']>;
  notDistinctFromInsensitive?: Maybe<Scalars['String']>;
  notEndsWith?: Maybe<Scalars['String']>;
  notEndsWithInsensitive?: Maybe<Scalars['String']>;
  notEqualTo?: Maybe<Scalars['String']>;
  notEqualToInsensitive?: Maybe<Scalars['String']>;
  notIn?: Maybe<Array<Scalars['String']>>;
  notInInsensitive?: Maybe<Array<Scalars['String']>>;
  notIncludes?: Maybe<Scalars['String']>;
  notIncludesInsensitive?: Maybe<Scalars['String']>;
  notLike?: Maybe<Scalars['String']>;
  notLikeInsensitive?: Maybe<Scalars['String']>;
  notStartsWith?: Maybe<Scalars['String']>;
  notStartsWithInsensitive?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  startsWithInsensitive?: Maybe<Scalars['String']>;
};

export type SystemConst = Node & {
  __typename?: 'SystemConst';
  id: Scalars['String'];
  liquidToken?: Maybe<Token>;
  liquidTokenId?: Maybe<Scalars['String']>;
  nativeToken?: Maybe<Token>;
  nativeTokenId?: Maybe<Scalars['String']>;
  nodeId: Scalars['ID'];
  stableToken?: Maybe<Token>;
  stableTokenId?: Maybe<Scalars['String']>;
  stakignToken?: Maybe<Token>;
  stakignTokenId?: Maybe<Scalars['String']>;
};

export type SystemConstFilter = {
  and?: Maybe<Array<SystemConstFilter>>;
  id?: Maybe<StringFilter>;
  liquidTokenId?: Maybe<StringFilter>;
  nativeTokenId?: Maybe<StringFilter>;
  not?: Maybe<SystemConstFilter>;
  or?: Maybe<Array<SystemConstFilter>>;
  stableTokenId?: Maybe<StringFilter>;
  stakignTokenId?: Maybe<StringFilter>;
};

export type SystemConstsConnection = {
  __typename?: 'SystemConstsConnection';
  edges: Array<SystemConstsEdge>;
  nodes: Array<Maybe<SystemConst>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SystemConstsEdge = {
  __typename?: 'SystemConstsEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<SystemConst>;
};

export enum SystemConstsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LiquidTokenIdAsc = 'LIQUID_TOKEN_ID_ASC',
  LiquidTokenIdDesc = 'LIQUID_TOKEN_ID_DESC',
  NativeTokenIdAsc = 'NATIVE_TOKEN_ID_ASC',
  NativeTokenIdDesc = 'NATIVE_TOKEN_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StableTokenIdAsc = 'STABLE_TOKEN_ID_ASC',
  StableTokenIdDesc = 'STABLE_TOKEN_ID_DESC',
  StakignTokenIdAsc = 'STAKIGN_TOKEN_ID_ASC',
  StakignTokenIdDesc = 'STAKIGN_TOKEN_ID_DESC'
}

export type Token = Node & {
  __typename?: 'Token';
  accountsByDexActionToken0IdAndAccountId: TokenAccountsByDexActionToken0IdAndAccountIdManyToManyConnection;
  accountsByDexActionToken1IdAndAccountId: TokenAccountsByDexActionToken1IdAndAccountIdManyToManyConnection;
  accountsByLoanPositionCollateralIdAndOwnerId: TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyConnection;
  accountsByOracleFeedRecordTokenIdAndAccountId: TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyConnection;
  accountsByTransferTokenIdAndFromId: TokenAccountsByTransferTokenIdAndFromIdManyToManyConnection;
  accountsByTransferTokenIdAndToId: TokenAccountsByTransferTokenIdAndToIdManyToManyConnection;
  blocksByLoanParamCollateralIdAndStartAtBlockId: TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyConnection;
  blocksByLoanParamsHistoryCollateralIdAndEndAtBlockId: TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyConnection;
  blocksByLoanParamsHistoryCollateralIdAndStartAtBlockId: TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyConnection;
  blocksByOracleFeedRecordTokenIdAndBlockId: TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyConnection;
  blocksByProvisionPoolPoolTokenIdAndEndAtBlockId: TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyConnection;
  blocksByProvisionPoolPoolTokenIdAndStartAtBlockId: TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyConnection;
  blocksByProvisionPoolToken0IdAndEndAtBlockId: TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyConnection;
  blocksByProvisionPoolToken0IdAndStartAtBlockId: TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyConnection;
  blocksByProvisionPoolToken1IdAndEndAtBlockId: TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyConnection;
  blocksByProvisionPoolToken1IdAndStartAtBlockId: TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyConnection;
  callsByTransferTokenIdAndCallId: TokenCallsByTransferTokenIdAndCallIdManyToManyConnection;
  dayData: TokenDayDataConnection;
  decimal?: Maybe<Scalars['Int']>;
  dexActionsByToken0Id: DexActionsConnection;
  dexActionsByToken1Id: DexActionsConnection;
  extrinsicsByDexActionToken0IdAndExtrinsicId: TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyConnection;
  extrinsicsByDexActionToken1IdAndExtrinsicId: TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyConnection;
  extrinsicsByTransferTokenIdAndExtrinsicId: TokenExtrinsicsByTransferTokenIdAndExtrinsicIdManyToManyConnection;
  id: Scalars['String'];
  issuance?: Maybe<Scalars['String']>;
  loanParamsByCollateralId: LoanParamsConnection;
  loanParamsHistoriesByCollateralId: LoanParamsHistoriesConnection;
  loanPositionsByCollateralId: LoanPositionsConnection;
  lockedInDex?: Maybe<Scalars['String']>;
  lockedInIncentive?: Maybe<Scalars['String']>;
  lockedInLoan?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nodeId: Scalars['ID'];
  oracleFeedRecords: OracleFeedRecordsConnection;
  poolBase: PoolsConnection;
  poolDayDataBase: PoolDayDataConnection;
  poolDayDataQuote: PoolDayDataConnection;
  poolHourDataByToken0Id: PoolHourDataConnection;
  poolHourDataByToken1Id: PoolHourDataConnection;
  poolQuote: PoolsConnection;
  poolsByDexActionToken0IdAndPoolId: TokenPoolsByDexActionToken0IdAndPoolIdManyToManyConnection;
  poolsByDexActionToken1IdAndPoolId: TokenPoolsByDexActionToken1IdAndPoolIdManyToManyConnection;
  poolsByPoolDayDatumToken0IdAndPoolId: TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyConnection;
  poolsByPoolDayDatumToken1IdAndPoolId: TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyConnection;
  poolsByPoolHourDatumToken0IdAndPoolId: TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyConnection;
  poolsByPoolHourDatumToken1IdAndPoolId: TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyConnection;
  price?: Maybe<Scalars['String']>;
  provisionPoolsByPoolTokenId: ProvisionPoolsConnection;
  provisionPoolsByToken0Id: ProvisionPoolsConnection;
  provisionPoolsByToken1Id: ProvisionPoolsConnection;
  provisionPoolsByUserProvisionToken0IdAndPoolId: TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyConnection;
  provisionPoolsByUserProvisionToken1IdAndPoolId: TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyConnection;
  systemConstsByLiquidTokenId: SystemConstsConnection;
  systemConstsByNativeTokenId: SystemConstsConnection;
  systemConstsByStableTokenId: SystemConstsConnection;
  systemConstsByStakignTokenId: SystemConstsConnection;
  tokensByDexActionToken0IdAndToken1Id: TokenTokensByDexActionToken0IdAndToken1IdManyToManyConnection;
  tokensByDexActionToken1IdAndToken0Id: TokenTokensByDexActionToken1IdAndToken0IdManyToManyConnection;
  tokensByPoolDayDatumToken0IdAndToken1Id: TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyConnection;
  tokensByPoolDayDatumToken1IdAndToken0Id: TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyConnection;
  tokensByPoolHourDatumToken0IdAndToken1Id: TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyConnection;
  tokensByPoolHourDatumToken1IdAndToken0Id: TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyConnection;
  tokensByPoolToken0IdAndToken1Id: TokenTokensByPoolToken0IdAndToken1IdManyToManyConnection;
  tokensByPoolToken1IdAndToken0Id: TokenTokensByPoolToken1IdAndToken0IdManyToManyConnection;
  tokensByProvisionPoolPoolTokenIdAndToken0Id: TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyConnection;
  tokensByProvisionPoolPoolTokenIdAndToken1Id: TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyConnection;
  tokensByProvisionPoolToken0IdAndPoolTokenId: TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyConnection;
  tokensByProvisionPoolToken0IdAndToken1Id: TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyConnection;
  tokensByProvisionPoolToken1IdAndPoolTokenId: TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyConnection;
  tokensByProvisionPoolToken1IdAndToken0Id: TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyConnection;
  tokensBySystemConstLiquidTokenIdAndNativeTokenId: TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyConnection;
  tokensBySystemConstLiquidTokenIdAndStableTokenId: TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyConnection;
  tokensBySystemConstLiquidTokenIdAndStakignTokenId: TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyConnection;
  tokensBySystemConstNativeTokenIdAndLiquidTokenId: TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyConnection;
  tokensBySystemConstNativeTokenIdAndStableTokenId: TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyConnection;
  tokensBySystemConstNativeTokenIdAndStakignTokenId: TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyConnection;
  tokensBySystemConstStableTokenIdAndLiquidTokenId: TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyConnection;
  tokensBySystemConstStableTokenIdAndNativeTokenId: TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyConnection;
  tokensBySystemConstStableTokenIdAndStakignTokenId: TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyConnection;
  tokensBySystemConstStakignTokenIdAndLiquidTokenId: TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyConnection;
  tokensBySystemConstStakignTokenIdAndNativeTokenId: TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyConnection;
  tokensBySystemConstStakignTokenIdAndStableTokenId: TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyConnection;
  tokensByUserProvisionToken0IdAndToken1Id: TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyConnection;
  tokensByUserProvisionToken1IdAndToken0Id: TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyConnection;
  totalLoanPositionsByCollateralId: TotalLoanPositionsConnection;
  transfers: TransfersConnection;
  txCount?: Maybe<Scalars['BigFloat']>;
  userProvisionsByToken0Id: UserProvisionsConnection;
  userProvisionsByToken1Id: UserProvisionsConnection;
  volume?: Maybe<Scalars['String']>;
  volumeUSD?: Maybe<Scalars['String']>;
};


export type TokenAccountsByDexActionToken0IdAndAccountIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<AccountFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AccountsOrderBy>>;
};


export type TokenAccountsByDexActionToken1IdAndAccountIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<AccountFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AccountsOrderBy>>;
};


export type TokenAccountsByLoanPositionCollateralIdAndOwnerIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<AccountFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AccountsOrderBy>>;
};


export type TokenAccountsByOracleFeedRecordTokenIdAndAccountIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<AccountFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AccountsOrderBy>>;
};


export type TokenAccountsByTransferTokenIdAndFromIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<AccountFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AccountsOrderBy>>;
};


export type TokenAccountsByTransferTokenIdAndToIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<AccountFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<AccountsOrderBy>>;
};


export type TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<BlockFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<BlocksOrderBy>>;
};


export type TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<BlockFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<BlocksOrderBy>>;
};


export type TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<BlockFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<BlocksOrderBy>>;
};


export type TokenBlocksByOracleFeedRecordTokenIdAndBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<BlockFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<BlocksOrderBy>>;
};


export type TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<BlockFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<BlocksOrderBy>>;
};


export type TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<BlockFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<BlocksOrderBy>>;
};


export type TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<BlockFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<BlocksOrderBy>>;
};


export type TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<BlockFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<BlocksOrderBy>>;
};


export type TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<BlockFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<BlocksOrderBy>>;
};


export type TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<BlockFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<BlocksOrderBy>>;
};


export type TokenCallsByTransferTokenIdAndCallIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<CallFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<CallsOrderBy>>;
};


export type TokenDayDataArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenDayDatumFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokenDayDataOrderBy>>;
};


export type TokenDexActionsByToken0IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<DexActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DexActionsOrderBy>>;
};


export type TokenDexActionsByToken1IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<DexActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DexActionsOrderBy>>;
};


export type TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ExtrinsicFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ExtrinsicsOrderBy>>;
};


export type TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ExtrinsicFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ExtrinsicsOrderBy>>;
};


export type TokenExtrinsicsByTransferTokenIdAndExtrinsicIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ExtrinsicFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ExtrinsicsOrderBy>>;
};


export type TokenLoanParamsByCollateralIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<LoanParamFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<LoanParamsOrderBy>>;
};


export type TokenLoanParamsHistoriesByCollateralIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<LoanParamsHistoryFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<LoanParamsHistoriesOrderBy>>;
};


export type TokenLoanPositionsByCollateralIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<LoanPositionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<LoanPositionsOrderBy>>;
};


export type TokenOracleFeedRecordsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<OracleFeedRecordFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<OracleFeedRecordsOrderBy>>;
};


export type TokenPoolBaseArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolsOrderBy>>;
};


export type TokenPoolDayDataBaseArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolDayDatumFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolDayDataOrderBy>>;
};


export type TokenPoolDayDataQuoteArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolDayDatumFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolDayDataOrderBy>>;
};


export type TokenPoolHourDataByToken0IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolHourDatumFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolHourDataOrderBy>>;
};


export type TokenPoolHourDataByToken1IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolHourDatumFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolHourDataOrderBy>>;
};


export type TokenPoolQuoteArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolsOrderBy>>;
};


export type TokenPoolsByDexActionToken0IdAndPoolIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolsOrderBy>>;
};


export type TokenPoolsByDexActionToken1IdAndPoolIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolsOrderBy>>;
};


export type TokenPoolsByPoolDayDatumToken0IdAndPoolIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolsOrderBy>>;
};


export type TokenPoolsByPoolDayDatumToken1IdAndPoolIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolsOrderBy>>;
};


export type TokenPoolsByPoolHourDatumToken0IdAndPoolIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolsOrderBy>>;
};


export type TokenPoolsByPoolHourDatumToken1IdAndPoolIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolsOrderBy>>;
};


export type TokenProvisionPoolsByPoolTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ProvisionPoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProvisionPoolsOrderBy>>;
};


export type TokenProvisionPoolsByToken0IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ProvisionPoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProvisionPoolsOrderBy>>;
};


export type TokenProvisionPoolsByToken1IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ProvisionPoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProvisionPoolsOrderBy>>;
};


export type TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ProvisionPoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProvisionPoolsOrderBy>>;
};


export type TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ProvisionPoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProvisionPoolsOrderBy>>;
};


export type TokenSystemConstsByLiquidTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<SystemConstFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<SystemConstsOrderBy>>;
};


export type TokenSystemConstsByNativeTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<SystemConstFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<SystemConstsOrderBy>>;
};


export type TokenSystemConstsByStableTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<SystemConstFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<SystemConstsOrderBy>>;
};


export type TokenSystemConstsByStakignTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<SystemConstFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<SystemConstsOrderBy>>;
};


export type TokenTokensByDexActionToken0IdAndToken1IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type TokenTokensByDexActionToken1IdAndToken0IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type TokenTokensByPoolDayDatumToken0IdAndToken1IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type TokenTokensByPoolDayDatumToken1IdAndToken0IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type TokenTokensByPoolHourDatumToken0IdAndToken1IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type TokenTokensByPoolHourDatumToken1IdAndToken0IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type TokenTokensByPoolToken0IdAndToken1IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type TokenTokensByPoolToken1IdAndToken0IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type TokenTokensByProvisionPoolPoolTokenIdAndToken0IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type TokenTokensByProvisionPoolPoolTokenIdAndToken1IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type TokenTokensByProvisionPoolToken0IdAndPoolTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type TokenTokensByProvisionPoolToken0IdAndToken1IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type TokenTokensByProvisionPoolToken1IdAndPoolTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type TokenTokensByProvisionPoolToken1IdAndToken0IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type TokenTokensBySystemConstNativeTokenIdAndStableTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type TokenTokensBySystemConstStableTokenIdAndNativeTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type TokenTokensBySystemConstStableTokenIdAndStakignTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type TokenTokensBySystemConstStakignTokenIdAndStableTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type TokenTokensByUserProvisionToken0IdAndToken1IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type TokenTokensByUserProvisionToken1IdAndToken0IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TokenFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TokensOrderBy>>;
};


export type TokenTotalLoanPositionsByCollateralIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TotalLoanPositionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TotalLoanPositionsOrderBy>>;
};


export type TokenTransfersArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TransferFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TransfersOrderBy>>;
};


export type TokenUserProvisionsByToken0IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<UserProvisionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<UserProvisionsOrderBy>>;
};


export type TokenUserProvisionsByToken1IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<UserProvisionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<UserProvisionsOrderBy>>;
};

export type TokenAccountsByDexActionToken0IdAndAccountIdManyToManyConnection = {
  __typename?: 'TokenAccountsByDexActionToken0IdAndAccountIdManyToManyConnection';
  edges: Array<TokenAccountsByDexActionToken0IdAndAccountIdManyToManyEdge>;
  nodes: Array<Maybe<Account>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenAccountsByDexActionToken0IdAndAccountIdManyToManyEdge = {
  __typename?: 'TokenAccountsByDexActionToken0IdAndAccountIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  dexActions: DexActionsConnection;
  node?: Maybe<Account>;
};


export type TokenAccountsByDexActionToken0IdAndAccountIdManyToManyEdgeDexActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<DexActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DexActionsOrderBy>>;
};

export type TokenAccountsByDexActionToken1IdAndAccountIdManyToManyConnection = {
  __typename?: 'TokenAccountsByDexActionToken1IdAndAccountIdManyToManyConnection';
  edges: Array<TokenAccountsByDexActionToken1IdAndAccountIdManyToManyEdge>;
  nodes: Array<Maybe<Account>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenAccountsByDexActionToken1IdAndAccountIdManyToManyEdge = {
  __typename?: 'TokenAccountsByDexActionToken1IdAndAccountIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  dexActions: DexActionsConnection;
  node?: Maybe<Account>;
};


export type TokenAccountsByDexActionToken1IdAndAccountIdManyToManyEdgeDexActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<DexActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DexActionsOrderBy>>;
};

export type TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyConnection = {
  __typename?: 'TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyConnection';
  edges: Array<TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyEdge>;
  nodes: Array<Maybe<Account>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyEdge = {
  __typename?: 'TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Account>;
  position: LoanPositionsConnection;
};


export type TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyEdgePositionArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<LoanPositionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<LoanPositionsOrderBy>>;
};

export type TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyConnection = {
  __typename?: 'TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyConnection';
  edges: Array<TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyEdge>;
  nodes: Array<Maybe<Account>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyEdge = {
  __typename?: 'TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Account>;
  oracleFeedRecords: OracleFeedRecordsConnection;
};


export type TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyEdgeOracleFeedRecordsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<OracleFeedRecordFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<OracleFeedRecordsOrderBy>>;
};

export type TokenAccountsByTransferTokenIdAndFromIdManyToManyConnection = {
  __typename?: 'TokenAccountsByTransferTokenIdAndFromIdManyToManyConnection';
  edges: Array<TokenAccountsByTransferTokenIdAndFromIdManyToManyEdge>;
  nodes: Array<Maybe<Account>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenAccountsByTransferTokenIdAndFromIdManyToManyEdge = {
  __typename?: 'TokenAccountsByTransferTokenIdAndFromIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Account>;
  transferOut: TransfersConnection;
};


export type TokenAccountsByTransferTokenIdAndFromIdManyToManyEdgeTransferOutArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TransferFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TransfersOrderBy>>;
};

export type TokenAccountsByTransferTokenIdAndToIdManyToManyConnection = {
  __typename?: 'TokenAccountsByTransferTokenIdAndToIdManyToManyConnection';
  edges: Array<TokenAccountsByTransferTokenIdAndToIdManyToManyEdge>;
  nodes: Array<Maybe<Account>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenAccountsByTransferTokenIdAndToIdManyToManyEdge = {
  __typename?: 'TokenAccountsByTransferTokenIdAndToIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Account>;
  transferIn: TransfersConnection;
};


export type TokenAccountsByTransferTokenIdAndToIdManyToManyEdgeTransferInArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TransferFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TransfersOrderBy>>;
};

export type TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyConnection = {
  __typename?: 'TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyConnection';
  edges: Array<TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyEdge>;
  nodes: Array<Maybe<Block>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyEdge = {
  __typename?: 'TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  loanParamsByStartAtBlockId: LoanParamsConnection;
  node?: Maybe<Block>;
};


export type TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyEdgeLoanParamsByStartAtBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<LoanParamFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<LoanParamsOrderBy>>;
};

export type TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyConnection = {
  __typename?: 'TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyConnection';
  edges: Array<TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyEdge>;
  nodes: Array<Maybe<Block>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyEdge = {
  __typename?: 'TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  loanParamsHistoriesByEndAtBlockId: LoanParamsHistoriesConnection;
  node?: Maybe<Block>;
};


export type TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyEdgeLoanParamsHistoriesByEndAtBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<LoanParamsHistoryFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<LoanParamsHistoriesOrderBy>>;
};

export type TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyConnection = {
  __typename?: 'TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyConnection';
  edges: Array<TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyEdge>;
  nodes: Array<Maybe<Block>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyEdge = {
  __typename?: 'TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  loanParamsHistoriesByStartAtBlockId: LoanParamsHistoriesConnection;
  node?: Maybe<Block>;
};


export type TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyEdgeLoanParamsHistoriesByStartAtBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<LoanParamsHistoryFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<LoanParamsHistoriesOrderBy>>;
};

export type TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyConnection = {
  __typename?: 'TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyConnection';
  edges: Array<TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyEdge>;
  nodes: Array<Maybe<Block>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyEdge = {
  __typename?: 'TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Block>;
  oracleFeedRecords: OracleFeedRecordsConnection;
};


export type TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyEdgeOracleFeedRecordsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<OracleFeedRecordFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<OracleFeedRecordsOrderBy>>;
};

export type TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyConnection = {
  __typename?: 'TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyConnection';
  edges: Array<TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyEdge>;
  nodes: Array<Maybe<Block>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyEdge = {
  __typename?: 'TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Block>;
  provisionPoolsByEndAtBlockId: ProvisionPoolsConnection;
};


export type TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyEdgeProvisionPoolsByEndAtBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ProvisionPoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProvisionPoolsOrderBy>>;
};

export type TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyConnection = {
  __typename?: 'TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyConnection';
  edges: Array<TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyEdge>;
  nodes: Array<Maybe<Block>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyEdge = {
  __typename?: 'TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Block>;
  provisionPoolsByStartAtBlockId: ProvisionPoolsConnection;
};


export type TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyEdgeProvisionPoolsByStartAtBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ProvisionPoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProvisionPoolsOrderBy>>;
};

export type TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyConnection = {
  __typename?: 'TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyConnection';
  edges: Array<TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyEdge>;
  nodes: Array<Maybe<Block>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyEdge = {
  __typename?: 'TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Block>;
  provisionPoolsByEndAtBlockId: ProvisionPoolsConnection;
};


export type TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyEdgeProvisionPoolsByEndAtBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ProvisionPoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProvisionPoolsOrderBy>>;
};

export type TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyConnection = {
  __typename?: 'TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyConnection';
  edges: Array<TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyEdge>;
  nodes: Array<Maybe<Block>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyEdge = {
  __typename?: 'TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Block>;
  provisionPoolsByStartAtBlockId: ProvisionPoolsConnection;
};


export type TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyEdgeProvisionPoolsByStartAtBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ProvisionPoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProvisionPoolsOrderBy>>;
};

export type TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyConnection = {
  __typename?: 'TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyConnection';
  edges: Array<TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyEdge>;
  nodes: Array<Maybe<Block>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyEdge = {
  __typename?: 'TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Block>;
  provisionPoolsByEndAtBlockId: ProvisionPoolsConnection;
};


export type TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyEdgeProvisionPoolsByEndAtBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ProvisionPoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProvisionPoolsOrderBy>>;
};

export type TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyConnection = {
  __typename?: 'TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyConnection';
  edges: Array<TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyEdge>;
  nodes: Array<Maybe<Block>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyEdge = {
  __typename?: 'TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Block>;
  provisionPoolsByStartAtBlockId: ProvisionPoolsConnection;
};


export type TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyEdgeProvisionPoolsByStartAtBlockIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ProvisionPoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProvisionPoolsOrderBy>>;
};

export type TokenCallsByTransferTokenIdAndCallIdManyToManyConnection = {
  __typename?: 'TokenCallsByTransferTokenIdAndCallIdManyToManyConnection';
  edges: Array<TokenCallsByTransferTokenIdAndCallIdManyToManyEdge>;
  nodes: Array<Maybe<Call>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenCallsByTransferTokenIdAndCallIdManyToManyEdge = {
  __typename?: 'TokenCallsByTransferTokenIdAndCallIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Call>;
  transfers: TransfersConnection;
};


export type TokenCallsByTransferTokenIdAndCallIdManyToManyEdgeTransfersArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TransferFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TransfersOrderBy>>;
};

export type TokenDayDataConnection = {
  __typename?: 'TokenDayDataConnection';
  edges: Array<TokenDayDataEdge>;
  nodes: Array<Maybe<TokenDayDatum>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenDayDataEdge = {
  __typename?: 'TokenDayDataEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<TokenDayDatum>;
};

export enum TokenDayDataOrderBy {
  DailyTxCountAsc = 'DAILY_TX_COUNT_ASC',
  DailyTxCountDesc = 'DAILY_TX_COUNT_DESC',
  DailyVolumeTokenAsc = 'DAILY_VOLUME_TOKEN_ASC',
  DailyVolumeTokenDesc = 'DAILY_VOLUME_TOKEN_DESC',
  DailyVolumeUSDAsc = 'DAILY_VOLUME_U_S_D_ASC',
  DailyVolumeUSDDesc = 'DAILY_VOLUME_U_S_D_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TokenIdAsc = 'TOKEN_ID_ASC',
  TokenIdDesc = 'TOKEN_ID_DESC'
}

export type TokenDayDatum = Node & {
  __typename?: 'TokenDayDatum';
  dailyTxCount?: Maybe<Scalars['BigFloat']>;
  dailyVolumeToken?: Maybe<Scalars['String']>;
  dailyVolumeUSD?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Datetime']>;
  id: Scalars['String'];
  nodeId: Scalars['ID'];
  price?: Maybe<Scalars['String']>;
  token?: Maybe<Token>;
  tokenId?: Maybe<Scalars['String']>;
};

export type TokenDayDatumFilter = {
  and?: Maybe<Array<TokenDayDatumFilter>>;
  dailyTxCount?: Maybe<BigFloatFilter>;
  dailyVolumeToken?: Maybe<StringFilter>;
  dailyVolumeUSD?: Maybe<StringFilter>;
  date?: Maybe<DatetimeFilter>;
  id?: Maybe<StringFilter>;
  not?: Maybe<TokenDayDatumFilter>;
  or?: Maybe<Array<TokenDayDatumFilter>>;
  price?: Maybe<StringFilter>;
  tokenId?: Maybe<StringFilter>;
};

export type TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyConnection = {
  __typename?: 'TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyConnection';
  edges: Array<TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyEdge>;
  nodes: Array<Maybe<Extrinsic>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyEdge = {
  __typename?: 'TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  dexActions: DexActionsConnection;
  node?: Maybe<Extrinsic>;
};


export type TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyEdgeDexActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<DexActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DexActionsOrderBy>>;
};

export type TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyConnection = {
  __typename?: 'TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyConnection';
  edges: Array<TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyEdge>;
  nodes: Array<Maybe<Extrinsic>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyEdge = {
  __typename?: 'TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  dexActions: DexActionsConnection;
  node?: Maybe<Extrinsic>;
};


export type TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyEdgeDexActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<DexActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DexActionsOrderBy>>;
};

export type TokenExtrinsicsByTransferTokenIdAndExtrinsicIdManyToManyConnection = {
  __typename?: 'TokenExtrinsicsByTransferTokenIdAndExtrinsicIdManyToManyConnection';
  edges: Array<TokenExtrinsicsByTransferTokenIdAndExtrinsicIdManyToManyEdge>;
  nodes: Array<Maybe<Extrinsic>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenExtrinsicsByTransferTokenIdAndExtrinsicIdManyToManyEdge = {
  __typename?: 'TokenExtrinsicsByTransferTokenIdAndExtrinsicIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Extrinsic>;
  transfers: TransfersConnection;
};


export type TokenExtrinsicsByTransferTokenIdAndExtrinsicIdManyToManyEdgeTransfersArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<TransferFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TransfersOrderBy>>;
};

export type TokenFilter = {
  and?: Maybe<Array<TokenFilter>>;
  decimal?: Maybe<IntFilter>;
  id?: Maybe<StringFilter>;
  issuance?: Maybe<StringFilter>;
  lockedInDex?: Maybe<StringFilter>;
  lockedInIncentive?: Maybe<StringFilter>;
  lockedInLoan?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  not?: Maybe<TokenFilter>;
  or?: Maybe<Array<TokenFilter>>;
  price?: Maybe<StringFilter>;
  txCount?: Maybe<BigFloatFilter>;
  volume?: Maybe<StringFilter>;
  volumeUSD?: Maybe<StringFilter>;
};

export type TokenPoolsByDexActionToken0IdAndPoolIdManyToManyConnection = {
  __typename?: 'TokenPoolsByDexActionToken0IdAndPoolIdManyToManyConnection';
  edges: Array<TokenPoolsByDexActionToken0IdAndPoolIdManyToManyEdge>;
  nodes: Array<Maybe<Pool>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenPoolsByDexActionToken0IdAndPoolIdManyToManyEdge = {
  __typename?: 'TokenPoolsByDexActionToken0IdAndPoolIdManyToManyEdge';
  actions: DexActionsConnection;
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Pool>;
};


export type TokenPoolsByDexActionToken0IdAndPoolIdManyToManyEdgeActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<DexActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DexActionsOrderBy>>;
};

export type TokenPoolsByDexActionToken1IdAndPoolIdManyToManyConnection = {
  __typename?: 'TokenPoolsByDexActionToken1IdAndPoolIdManyToManyConnection';
  edges: Array<TokenPoolsByDexActionToken1IdAndPoolIdManyToManyEdge>;
  nodes: Array<Maybe<Pool>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenPoolsByDexActionToken1IdAndPoolIdManyToManyEdge = {
  __typename?: 'TokenPoolsByDexActionToken1IdAndPoolIdManyToManyEdge';
  actions: DexActionsConnection;
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Pool>;
};


export type TokenPoolsByDexActionToken1IdAndPoolIdManyToManyEdgeActionsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<DexActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DexActionsOrderBy>>;
};

export type TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyConnection = {
  __typename?: 'TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyConnection';
  edges: Array<TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyEdge>;
  nodes: Array<Maybe<Pool>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyEdge = {
  __typename?: 'TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  dayData: PoolDayDataConnection;
  node?: Maybe<Pool>;
};


export type TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyEdgeDayDataArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolDayDatumFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolDayDataOrderBy>>;
};

export type TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyConnection = {
  __typename?: 'TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyConnection';
  edges: Array<TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyEdge>;
  nodes: Array<Maybe<Pool>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyEdge = {
  __typename?: 'TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  dayData: PoolDayDataConnection;
  node?: Maybe<Pool>;
};


export type TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyEdgeDayDataArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolDayDatumFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolDayDataOrderBy>>;
};

export type TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyConnection = {
  __typename?: 'TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyConnection';
  edges: Array<TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyEdge>;
  nodes: Array<Maybe<Pool>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyEdge = {
  __typename?: 'TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  hourData: PoolHourDataConnection;
  node?: Maybe<Pool>;
};


export type TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyEdgeHourDataArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolHourDatumFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolHourDataOrderBy>>;
};

export type TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyConnection = {
  __typename?: 'TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyConnection';
  edges: Array<TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyEdge>;
  nodes: Array<Maybe<Pool>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyEdge = {
  __typename?: 'TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  hourData: PoolHourDataConnection;
  node?: Maybe<Pool>;
};


export type TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyEdgeHourDataArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolHourDatumFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolHourDataOrderBy>>;
};

export type TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyConnection = {
  __typename?: 'TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyConnection';
  edges: Array<TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyEdge>;
  nodes: Array<Maybe<ProvisionPool>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyEdge = {
  __typename?: 'TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<ProvisionPool>;
  records: UserProvisionsConnection;
};


export type TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyEdgeRecordsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<UserProvisionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<UserProvisionsOrderBy>>;
};

export type TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyConnection = {
  __typename?: 'TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyConnection';
  edges: Array<TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyEdge>;
  nodes: Array<Maybe<ProvisionPool>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyEdge = {
  __typename?: 'TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<ProvisionPool>;
  records: UserProvisionsConnection;
};


export type TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyEdgeRecordsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<UserProvisionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<UserProvisionsOrderBy>>;
};

export type TokenTokensByDexActionToken0IdAndToken1IdManyToManyConnection = {
  __typename?: 'TokenTokensByDexActionToken0IdAndToken1IdManyToManyConnection';
  edges: Array<TokenTokensByDexActionToken0IdAndToken1IdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenTokensByDexActionToken0IdAndToken1IdManyToManyEdge = {
  __typename?: 'TokenTokensByDexActionToken0IdAndToken1IdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  dexActionsByToken1Id: DexActionsConnection;
  node?: Maybe<Token>;
};


export type TokenTokensByDexActionToken0IdAndToken1IdManyToManyEdgeDexActionsByToken1IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<DexActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DexActionsOrderBy>>;
};

export type TokenTokensByDexActionToken1IdAndToken0IdManyToManyConnection = {
  __typename?: 'TokenTokensByDexActionToken1IdAndToken0IdManyToManyConnection';
  edges: Array<TokenTokensByDexActionToken1IdAndToken0IdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenTokensByDexActionToken1IdAndToken0IdManyToManyEdge = {
  __typename?: 'TokenTokensByDexActionToken1IdAndToken0IdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  dexActionsByToken0Id: DexActionsConnection;
  node?: Maybe<Token>;
};


export type TokenTokensByDexActionToken1IdAndToken0IdManyToManyEdgeDexActionsByToken0IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<DexActionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<DexActionsOrderBy>>;
};

export type TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyConnection = {
  __typename?: 'TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyConnection';
  edges: Array<TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyEdge = {
  __typename?: 'TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  poolDayDataQuote: PoolDayDataConnection;
};


export type TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyEdgePoolDayDataQuoteArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolDayDatumFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolDayDataOrderBy>>;
};

export type TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyConnection = {
  __typename?: 'TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyConnection';
  edges: Array<TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyEdge = {
  __typename?: 'TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  poolDayDataBase: PoolDayDataConnection;
};


export type TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyEdgePoolDayDataBaseArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolDayDatumFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolDayDataOrderBy>>;
};

export type TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyConnection = {
  __typename?: 'TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyConnection';
  edges: Array<TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyEdge = {
  __typename?: 'TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  poolHourDataByToken1Id: PoolHourDataConnection;
};


export type TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyEdgePoolHourDataByToken1IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolHourDatumFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolHourDataOrderBy>>;
};

export type TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyConnection = {
  __typename?: 'TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyConnection';
  edges: Array<TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyEdge = {
  __typename?: 'TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  poolHourDataByToken0Id: PoolHourDataConnection;
};


export type TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyEdgePoolHourDataByToken0IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolHourDatumFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolHourDataOrderBy>>;
};

export type TokenTokensByPoolToken0IdAndToken1IdManyToManyConnection = {
  __typename?: 'TokenTokensByPoolToken0IdAndToken1IdManyToManyConnection';
  edges: Array<TokenTokensByPoolToken0IdAndToken1IdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenTokensByPoolToken0IdAndToken1IdManyToManyEdge = {
  __typename?: 'TokenTokensByPoolToken0IdAndToken1IdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  poolQuote: PoolsConnection;
};


export type TokenTokensByPoolToken0IdAndToken1IdManyToManyEdgePoolQuoteArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolsOrderBy>>;
};

export type TokenTokensByPoolToken1IdAndToken0IdManyToManyConnection = {
  __typename?: 'TokenTokensByPoolToken1IdAndToken0IdManyToManyConnection';
  edges: Array<TokenTokensByPoolToken1IdAndToken0IdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenTokensByPoolToken1IdAndToken0IdManyToManyEdge = {
  __typename?: 'TokenTokensByPoolToken1IdAndToken0IdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  poolBase: PoolsConnection;
};


export type TokenTokensByPoolToken1IdAndToken0IdManyToManyEdgePoolBaseArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<PoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<PoolsOrderBy>>;
};

export type TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyConnection = {
  __typename?: 'TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyConnection';
  edges: Array<TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyEdge = {
  __typename?: 'TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  provisionPoolsByToken0Id: ProvisionPoolsConnection;
};


export type TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyEdgeProvisionPoolsByToken0IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ProvisionPoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProvisionPoolsOrderBy>>;
};

export type TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyConnection = {
  __typename?: 'TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyConnection';
  edges: Array<TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyEdge = {
  __typename?: 'TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  provisionPoolsByToken1Id: ProvisionPoolsConnection;
};


export type TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyEdgeProvisionPoolsByToken1IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ProvisionPoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProvisionPoolsOrderBy>>;
};

export type TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyConnection = {
  __typename?: 'TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyConnection';
  edges: Array<TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyEdge = {
  __typename?: 'TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  provisionPoolsByPoolTokenId: ProvisionPoolsConnection;
};


export type TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyEdgeProvisionPoolsByPoolTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ProvisionPoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProvisionPoolsOrderBy>>;
};

export type TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyConnection = {
  __typename?: 'TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyConnection';
  edges: Array<TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyEdge = {
  __typename?: 'TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  provisionPoolsByToken1Id: ProvisionPoolsConnection;
};


export type TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyEdgeProvisionPoolsByToken1IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ProvisionPoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProvisionPoolsOrderBy>>;
};

export type TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyConnection = {
  __typename?: 'TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyConnection';
  edges: Array<TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyEdge = {
  __typename?: 'TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  provisionPoolsByPoolTokenId: ProvisionPoolsConnection;
};


export type TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyEdgeProvisionPoolsByPoolTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ProvisionPoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProvisionPoolsOrderBy>>;
};

export type TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyConnection = {
  __typename?: 'TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyConnection';
  edges: Array<TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyEdge = {
  __typename?: 'TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  provisionPoolsByToken0Id: ProvisionPoolsConnection;
};


export type TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyEdgeProvisionPoolsByToken0IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<ProvisionPoolFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ProvisionPoolsOrderBy>>;
};

export type TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyConnection = {
  __typename?: 'TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyConnection';
  edges: Array<TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyEdge = {
  __typename?: 'TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  systemConstsByNativeTokenId: SystemConstsConnection;
};


export type TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyEdgeSystemConstsByNativeTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<SystemConstFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<SystemConstsOrderBy>>;
};

export type TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyConnection = {
  __typename?: 'TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyConnection';
  edges: Array<TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyEdge = {
  __typename?: 'TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  systemConstsByStableTokenId: SystemConstsConnection;
};


export type TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyEdgeSystemConstsByStableTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<SystemConstFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<SystemConstsOrderBy>>;
};

export type TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyConnection = {
  __typename?: 'TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyConnection';
  edges: Array<TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyEdge = {
  __typename?: 'TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  systemConstsByStakignTokenId: SystemConstsConnection;
};


export type TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyEdgeSystemConstsByStakignTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<SystemConstFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<SystemConstsOrderBy>>;
};

export type TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyConnection = {
  __typename?: 'TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyConnection';
  edges: Array<TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyEdge = {
  __typename?: 'TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  systemConstsByLiquidTokenId: SystemConstsConnection;
};


export type TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyEdgeSystemConstsByLiquidTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<SystemConstFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<SystemConstsOrderBy>>;
};

export type TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyConnection = {
  __typename?: 'TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyConnection';
  edges: Array<TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyEdge = {
  __typename?: 'TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  systemConstsByStableTokenId: SystemConstsConnection;
};


export type TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyEdgeSystemConstsByStableTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<SystemConstFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<SystemConstsOrderBy>>;
};

export type TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyConnection = {
  __typename?: 'TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyConnection';
  edges: Array<TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyEdge = {
  __typename?: 'TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  systemConstsByStakignTokenId: SystemConstsConnection;
};


export type TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyEdgeSystemConstsByStakignTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<SystemConstFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<SystemConstsOrderBy>>;
};

export type TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyConnection = {
  __typename?: 'TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyConnection';
  edges: Array<TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyEdge = {
  __typename?: 'TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  systemConstsByLiquidTokenId: SystemConstsConnection;
};


export type TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyEdgeSystemConstsByLiquidTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<SystemConstFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<SystemConstsOrderBy>>;
};

export type TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyConnection = {
  __typename?: 'TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyConnection';
  edges: Array<TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyEdge = {
  __typename?: 'TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  systemConstsByNativeTokenId: SystemConstsConnection;
};


export type TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyEdgeSystemConstsByNativeTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<SystemConstFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<SystemConstsOrderBy>>;
};

export type TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyConnection = {
  __typename?: 'TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyConnection';
  edges: Array<TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyEdge = {
  __typename?: 'TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  systemConstsByStakignTokenId: SystemConstsConnection;
};


export type TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyEdgeSystemConstsByStakignTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<SystemConstFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<SystemConstsOrderBy>>;
};

export type TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyConnection = {
  __typename?: 'TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyConnection';
  edges: Array<TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyEdge = {
  __typename?: 'TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  systemConstsByLiquidTokenId: SystemConstsConnection;
};


export type TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyEdgeSystemConstsByLiquidTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<SystemConstFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<SystemConstsOrderBy>>;
};

export type TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyConnection = {
  __typename?: 'TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyConnection';
  edges: Array<TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyEdge = {
  __typename?: 'TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  systemConstsByNativeTokenId: SystemConstsConnection;
};


export type TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyEdgeSystemConstsByNativeTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<SystemConstFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<SystemConstsOrderBy>>;
};

export type TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyConnection = {
  __typename?: 'TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyConnection';
  edges: Array<TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyEdge = {
  __typename?: 'TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  systemConstsByStableTokenId: SystemConstsConnection;
};


export type TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyEdgeSystemConstsByStableTokenIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<SystemConstFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<SystemConstsOrderBy>>;
};

export type TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyConnection = {
  __typename?: 'TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyConnection';
  edges: Array<TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyEdge = {
  __typename?: 'TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  userProvisionsByToken1Id: UserProvisionsConnection;
};


export type TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyEdgeUserProvisionsByToken1IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<UserProvisionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<UserProvisionsOrderBy>>;
};

export type TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyConnection = {
  __typename?: 'TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyConnection';
  edges: Array<TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyEdge = {
  __typename?: 'TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
  userProvisionsByToken0Id: UserProvisionsConnection;
};


export type TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyEdgeUserProvisionsByToken0IdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  filter?: Maybe<UserProvisionFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<UserProvisionsOrderBy>>;
};

export type TokensConnection = {
  __typename?: 'TokensConnection';
  edges: Array<TokensEdge>;
  nodes: Array<Maybe<Token>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TokensEdge = {
  __typename?: 'TokensEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Token>;
};

export enum TokensOrderBy {
  DecimalAsc = 'DECIMAL_ASC',
  DecimalDesc = 'DECIMAL_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IssuanceAsc = 'ISSUANCE_ASC',
  IssuanceDesc = 'ISSUANCE_DESC',
  LockedInDexAsc = 'LOCKED_IN_DEX_ASC',
  LockedInDexDesc = 'LOCKED_IN_DEX_DESC',
  LockedInIncentiveAsc = 'LOCKED_IN_INCENTIVE_ASC',
  LockedInIncentiveDesc = 'LOCKED_IN_INCENTIVE_DESC',
  LockedInLoanAsc = 'LOCKED_IN_LOAN_ASC',
  LockedInLoanDesc = 'LOCKED_IN_LOAN_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TxCountAsc = 'TX_COUNT_ASC',
  TxCountDesc = 'TX_COUNT_DESC',
  VolumeAsc = 'VOLUME_ASC',
  VolumeDesc = 'VOLUME_DESC',
  VolumeUSDAsc = 'VOLUME_U_S_D_ASC',
  VolumeUSDDesc = 'VOLUME_U_S_D_DESC'
}

export type TotalLoanPosition = Node & {
  __typename?: 'TotalLoanPosition';
  collateral?: Maybe<Token>;
  collateralAmount?: Maybe<Scalars['String']>;
  collateralId?: Maybe<Scalars['String']>;
  debitAmount?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  nodeId: Scalars['ID'];
};

export type TotalLoanPositionFilter = {
  and?: Maybe<Array<TotalLoanPositionFilter>>;
  collateralAmount?: Maybe<StringFilter>;
  collateralId?: Maybe<StringFilter>;
  debitAmount?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  not?: Maybe<TotalLoanPositionFilter>;
  or?: Maybe<Array<TotalLoanPositionFilter>>;
};

export type TotalLoanPositionsConnection = {
  __typename?: 'TotalLoanPositionsConnection';
  edges: Array<TotalLoanPositionsEdge>;
  nodes: Array<Maybe<TotalLoanPosition>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TotalLoanPositionsEdge = {
  __typename?: 'TotalLoanPositionsEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<TotalLoanPosition>;
};

export enum TotalLoanPositionsOrderBy {
  CollateralAmountAsc = 'COLLATERAL_AMOUNT_ASC',
  CollateralAmountDesc = 'COLLATERAL_AMOUNT_DESC',
  CollateralIdAsc = 'COLLATERAL_ID_ASC',
  CollateralIdDesc = 'COLLATERAL_ID_DESC',
  DebitAmountAsc = 'DEBIT_AMOUNT_ASC',
  DebitAmountDesc = 'DEBIT_AMOUNT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Transfer = Node & {
  __typename?: 'Transfer';
  amount?: Maybe<Scalars['String']>;
  amountInUSD?: Maybe<Scalars['String']>;
  call?: Maybe<Call>;
  callId?: Maybe<Scalars['String']>;
  extrinsic?: Maybe<Extrinsic>;
  extrinsicId?: Maybe<Scalars['String']>;
  from?: Maybe<Account>;
  fromId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isSuccess?: Maybe<Scalars['Boolean']>;
  nodeId: Scalars['ID'];
  timestamp?: Maybe<Scalars['Datetime']>;
  to?: Maybe<Account>;
  toId?: Maybe<Scalars['String']>;
  token?: Maybe<Token>;
  tokenId?: Maybe<Scalars['String']>;
};

export type TransferFilter = {
  amount?: Maybe<StringFilter>;
  amountInUSD?: Maybe<StringFilter>;
  and?: Maybe<Array<TransferFilter>>;
  callId?: Maybe<StringFilter>;
  extrinsicId?: Maybe<StringFilter>;
  fromId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  isSuccess?: Maybe<BooleanFilter>;
  not?: Maybe<TransferFilter>;
  or?: Maybe<Array<TransferFilter>>;
  timestamp?: Maybe<DatetimeFilter>;
  toId?: Maybe<StringFilter>;
  tokenId?: Maybe<StringFilter>;
};

export type TransfersConnection = {
  __typename?: 'TransfersConnection';
  edges: Array<TransfersEdge>;
  nodes: Array<Maybe<Transfer>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TransfersEdge = {
  __typename?: 'TransfersEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<Transfer>;
};

export enum TransfersOrderBy {
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  AmountInUSDAsc = 'AMOUNT_IN_U_S_D_ASC',
  AmountInUSDDesc = 'AMOUNT_IN_U_S_D_DESC',
  CallIdAsc = 'CALL_ID_ASC',
  CallIdDesc = 'CALL_ID_DESC',
  ExtrinsicIdAsc = 'EXTRINSIC_ID_ASC',
  ExtrinsicIdDesc = 'EXTRINSIC_ID_DESC',
  FromIdAsc = 'FROM_ID_ASC',
  FromIdDesc = 'FROM_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IsSuccessAsc = 'IS_SUCCESS_ASC',
  IsSuccessDesc = 'IS_SUCCESS_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TimestampAsc = 'TIMESTAMP_ASC',
  TimestampDesc = 'TIMESTAMP_DESC',
  TokenIdAsc = 'TOKEN_ID_ASC',
  TokenIdDesc = 'TOKEN_ID_DESC',
  ToIdAsc = 'TO_ID_ASC',
  ToIdDesc = 'TO_ID_DESC'
}

export type UserProvision = Node & {
  __typename?: 'UserProvision';
  id: Scalars['String'];
  nodeId: Scalars['ID'];
  pool?: Maybe<ProvisionPool>;
  poolId?: Maybe<Scalars['String']>;
  token0?: Maybe<Token>;
  token0Amount?: Maybe<Scalars['String']>;
  token0Id?: Maybe<Scalars['String']>;
  token1?: Maybe<Token>;
  token1Amount?: Maybe<Scalars['String']>;
  token1Id?: Maybe<Scalars['String']>;
};

export type UserProvisionFilter = {
  and?: Maybe<Array<UserProvisionFilter>>;
  id?: Maybe<StringFilter>;
  not?: Maybe<UserProvisionFilter>;
  or?: Maybe<Array<UserProvisionFilter>>;
  poolId?: Maybe<StringFilter>;
  token0Amount?: Maybe<StringFilter>;
  token0Id?: Maybe<StringFilter>;
  token1Amount?: Maybe<StringFilter>;
  token1Id?: Maybe<StringFilter>;
};

export type UserProvisionsConnection = {
  __typename?: 'UserProvisionsConnection';
  edges: Array<UserProvisionsEdge>;
  nodes: Array<Maybe<UserProvision>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserProvisionsEdge = {
  __typename?: 'UserProvisionsEdge';
  cursor?: Maybe<Scalars['Cursor']>;
  node?: Maybe<UserProvision>;
};

export enum UserProvisionsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PoolIdAsc = 'POOL_ID_ASC',
  PoolIdDesc = 'POOL_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  Token0AmountAsc = 'TOKEN0_AMOUNT_ASC',
  Token0AmountDesc = 'TOKEN0_AMOUNT_DESC',
  Token0IdAsc = 'TOKEN0_ID_ASC',
  Token0IdDesc = 'TOKEN0_ID_DESC',
  Token1AmountAsc = 'TOKEN1_AMOUNT_ASC',
  Token1AmountDesc = 'TOKEN1_AMOUNT_DESC',
  Token1IdAsc = 'TOKEN1_ID_ASC',
  Token1IdDesc = 'TOKEN1_ID_DESC'
}

export type _Metadata = {
  __typename?: '_Metadata';
  chain?: Maybe<Scalars['String']>;
  genesisHash?: Maybe<Scalars['String']>;
  indexerHealthy?: Maybe<Scalars['Boolean']>;
  indexerNodeVersion?: Maybe<Scalars['String']>;
  lastProcessedHeight?: Maybe<Scalars['Int']>;
  lastProcessedTimestamp?: Maybe<Scalars['Date']>;
  queryNodeVersion?: Maybe<Scalars['String']>;
  specName?: Maybe<Scalars['String']>;
  targetHeight?: Maybe<Scalars['Int']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Account: ResolverTypeWrapper<Account>;
  AccountAccountsByTransferFromIdAndToIdManyToManyConnection: ResolverTypeWrapper<AccountAccountsByTransferFromIdAndToIdManyToManyConnection>;
  AccountAccountsByTransferFromIdAndToIdManyToManyEdge: ResolverTypeWrapper<AccountAccountsByTransferFromIdAndToIdManyToManyEdge>;
  AccountAccountsByTransferToIdAndFromIdManyToManyConnection: ResolverTypeWrapper<AccountAccountsByTransferToIdAndFromIdManyToManyConnection>;
  AccountAccountsByTransferToIdAndFromIdManyToManyEdge: ResolverTypeWrapper<AccountAccountsByTransferToIdAndFromIdManyToManyEdge>;
  AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyConnection: ResolverTypeWrapper<AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyConnection>;
  AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyEdge: ResolverTypeWrapper<AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyEdge>;
  AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyConnection: ResolverTypeWrapper<AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyConnection>;
  AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyEdge: ResolverTypeWrapper<AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyEdge>;
  AccountCallsByCallSignerIdAndParentCallIdManyToManyConnection: ResolverTypeWrapper<AccountCallsByCallSignerIdAndParentCallIdManyToManyConnection>;
  AccountCallsByCallSignerIdAndParentCallIdManyToManyEdge: ResolverTypeWrapper<AccountCallsByCallSignerIdAndParentCallIdManyToManyEdge>;
  AccountCallsByTransferFromIdAndCallIdManyToManyConnection: ResolverTypeWrapper<AccountCallsByTransferFromIdAndCallIdManyToManyConnection>;
  AccountCallsByTransferFromIdAndCallIdManyToManyEdge: ResolverTypeWrapper<AccountCallsByTransferFromIdAndCallIdManyToManyEdge>;
  AccountCallsByTransferToIdAndCallIdManyToManyConnection: ResolverTypeWrapper<AccountCallsByTransferToIdAndCallIdManyToManyConnection>;
  AccountCallsByTransferToIdAndCallIdManyToManyEdge: ResolverTypeWrapper<AccountCallsByTransferToIdAndCallIdManyToManyEdge>;
  AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyConnection: ResolverTypeWrapper<AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyConnection>;
  AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyEdge: ResolverTypeWrapper<AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyEdge>;
  AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyConnection: ResolverTypeWrapper<AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyConnection>;
  AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyEdge: ResolverTypeWrapper<AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyEdge>;
  AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyConnection: ResolverTypeWrapper<AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyConnection>;
  AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyEdge: ResolverTypeWrapper<AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyEdge>;
  AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyConnection: ResolverTypeWrapper<AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyConnection>;
  AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyEdge: ResolverTypeWrapper<AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyEdge>;
  AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyConnection: ResolverTypeWrapper<AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyConnection>;
  AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyEdge: ResolverTypeWrapper<AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyEdge>;
  AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyConnection: ResolverTypeWrapper<AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyConnection>;
  AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyEdge: ResolverTypeWrapper<AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyEdge>;
  AccountExtrinsicsByTransferFromIdAndExtrinsicIdManyToManyConnection: ResolverTypeWrapper<AccountExtrinsicsByTransferFromIdAndExtrinsicIdManyToManyConnection>;
  AccountExtrinsicsByTransferFromIdAndExtrinsicIdManyToManyEdge: ResolverTypeWrapper<AccountExtrinsicsByTransferFromIdAndExtrinsicIdManyToManyEdge>;
  AccountExtrinsicsByTransferToIdAndExtrinsicIdManyToManyConnection: ResolverTypeWrapper<AccountExtrinsicsByTransferToIdAndExtrinsicIdManyToManyConnection>;
  AccountExtrinsicsByTransferToIdAndExtrinsicIdManyToManyEdge: ResolverTypeWrapper<AccountExtrinsicsByTransferToIdAndExtrinsicIdManyToManyEdge>;
  AccountFilter: AccountFilter;
  AccountPoolsByDexActionAccountIdAndPoolIdManyToManyConnection: ResolverTypeWrapper<AccountPoolsByDexActionAccountIdAndPoolIdManyToManyConnection>;
  AccountPoolsByDexActionAccountIdAndPoolIdManyToManyEdge: ResolverTypeWrapper<AccountPoolsByDexActionAccountIdAndPoolIdManyToManyEdge>;
  AccountTokensByDexActionAccountIdAndToken0IdManyToManyConnection: ResolverTypeWrapper<AccountTokensByDexActionAccountIdAndToken0IdManyToManyConnection>;
  AccountTokensByDexActionAccountIdAndToken0IdManyToManyEdge: ResolverTypeWrapper<AccountTokensByDexActionAccountIdAndToken0IdManyToManyEdge>;
  AccountTokensByDexActionAccountIdAndToken1IdManyToManyConnection: ResolverTypeWrapper<AccountTokensByDexActionAccountIdAndToken1IdManyToManyConnection>;
  AccountTokensByDexActionAccountIdAndToken1IdManyToManyEdge: ResolverTypeWrapper<AccountTokensByDexActionAccountIdAndToken1IdManyToManyEdge>;
  AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyConnection: ResolverTypeWrapper<AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyConnection>;
  AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyEdge: ResolverTypeWrapper<AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyEdge>;
  AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyConnection: ResolverTypeWrapper<AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyConnection>;
  AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyEdge: ResolverTypeWrapper<AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyEdge>;
  AccountTokensByTransferFromIdAndTokenIdManyToManyConnection: ResolverTypeWrapper<AccountTokensByTransferFromIdAndTokenIdManyToManyConnection>;
  AccountTokensByTransferFromIdAndTokenIdManyToManyEdge: ResolverTypeWrapper<AccountTokensByTransferFromIdAndTokenIdManyToManyEdge>;
  AccountTokensByTransferToIdAndTokenIdManyToManyConnection: ResolverTypeWrapper<AccountTokensByTransferToIdAndTokenIdManyToManyConnection>;
  AccountTokensByTransferToIdAndTokenIdManyToManyEdge: ResolverTypeWrapper<AccountTokensByTransferToIdAndTokenIdManyToManyEdge>;
  AccountsConnection: ResolverTypeWrapper<AccountsConnection>;
  AccountsEdge: ResolverTypeWrapper<AccountsEdge>;
  AccountsOrderBy: AccountsOrderBy;
  BigFloat: ResolverTypeWrapper<Scalars['BigFloat']>;
  BigFloatFilter: BigFloatFilter;
  Block: ResolverTypeWrapper<Block>;
  BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyConnection: ResolverTypeWrapper<BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyConnection>;
  BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyEdge: ResolverTypeWrapper<BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyEdge>;
  BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyConnection: ResolverTypeWrapper<BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyConnection>;
  BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyEdge: ResolverTypeWrapper<BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyEdge>;
  BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyConnection: ResolverTypeWrapper<BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyConnection>;
  BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyEdge: ResolverTypeWrapper<BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyEdge>;
  BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyConnection: ResolverTypeWrapper<BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyConnection>;
  BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyEdge: ResolverTypeWrapper<BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyEdge>;
  BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyConnection: ResolverTypeWrapper<BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyConnection>;
  BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyEdge: ResolverTypeWrapper<BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyEdge>;
  BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyConnection: ResolverTypeWrapper<BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyConnection>;
  BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyEdge: ResolverTypeWrapper<BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyEdge>;
  BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyConnection: ResolverTypeWrapper<BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyConnection>;
  BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyEdge: ResolverTypeWrapper<BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyEdge>;
  BlockFilter: BlockFilter;
  BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyConnection: ResolverTypeWrapper<BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyConnection>;
  BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyEdge: ResolverTypeWrapper<BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyEdge>;
  BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyConnection: ResolverTypeWrapper<BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyConnection>;
  BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyEdge: ResolverTypeWrapper<BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyEdge>;
  BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyConnection: ResolverTypeWrapper<BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyConnection>;
  BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyEdge: ResolverTypeWrapper<BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyEdge>;
  BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyConnection: ResolverTypeWrapper<BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyConnection>;
  BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyEdge: ResolverTypeWrapper<BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyEdge>;
  BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyConnection: ResolverTypeWrapper<BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyConnection>;
  BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyEdge: ResolverTypeWrapper<BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyEdge>;
  BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyConnection: ResolverTypeWrapper<BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyConnection>;
  BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyEdge: ResolverTypeWrapper<BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyEdge>;
  BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyConnection: ResolverTypeWrapper<BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyConnection>;
  BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyEdge: ResolverTypeWrapper<BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyEdge>;
  BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyConnection: ResolverTypeWrapper<BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyConnection>;
  BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyEdge: ResolverTypeWrapper<BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyEdge>;
  BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyConnection: ResolverTypeWrapper<BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyConnection>;
  BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyEdge: ResolverTypeWrapper<BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyEdge>;
  BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyConnection: ResolverTypeWrapper<BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyConnection>;
  BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyEdge: ResolverTypeWrapper<BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyEdge>;
  BlocksConnection: ResolverTypeWrapper<BlocksConnection>;
  BlocksEdge: ResolverTypeWrapper<BlocksEdge>;
  BlocksOrderBy: BlocksOrderBy;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BooleanFilter: BooleanFilter;
  Call: ResolverTypeWrapper<Call>;
  CallAccountsByCallParentCallIdAndSignerIdManyToManyConnection: ResolverTypeWrapper<CallAccountsByCallParentCallIdAndSignerIdManyToManyConnection>;
  CallAccountsByCallParentCallIdAndSignerIdManyToManyEdge: ResolverTypeWrapper<CallAccountsByCallParentCallIdAndSignerIdManyToManyEdge>;
  CallAccountsByTransferCallIdAndFromIdManyToManyConnection: ResolverTypeWrapper<CallAccountsByTransferCallIdAndFromIdManyToManyConnection>;
  CallAccountsByTransferCallIdAndFromIdManyToManyEdge: ResolverTypeWrapper<CallAccountsByTransferCallIdAndFromIdManyToManyEdge>;
  CallAccountsByTransferCallIdAndToIdManyToManyConnection: ResolverTypeWrapper<CallAccountsByTransferCallIdAndToIdManyToManyConnection>;
  CallAccountsByTransferCallIdAndToIdManyToManyEdge: ResolverTypeWrapper<CallAccountsByTransferCallIdAndToIdManyToManyEdge>;
  CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyConnection: ResolverTypeWrapper<CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyConnection>;
  CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyEdge: ResolverTypeWrapper<CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyEdge>;
  CallExtrinsicsByTransferCallIdAndExtrinsicIdManyToManyConnection: ResolverTypeWrapper<CallExtrinsicsByTransferCallIdAndExtrinsicIdManyToManyConnection>;
  CallExtrinsicsByTransferCallIdAndExtrinsicIdManyToManyEdge: ResolverTypeWrapper<CallExtrinsicsByTransferCallIdAndExtrinsicIdManyToManyEdge>;
  CallFilter: CallFilter;
  CallTokensByTransferCallIdAndTokenIdManyToManyConnection: ResolverTypeWrapper<CallTokensByTransferCallIdAndTokenIdManyToManyConnection>;
  CallTokensByTransferCallIdAndTokenIdManyToManyEdge: ResolverTypeWrapper<CallTokensByTransferCallIdAndTokenIdManyToManyEdge>;
  CallsConnection: ResolverTypeWrapper<CallsConnection>;
  CallsEdge: ResolverTypeWrapper<CallsEdge>;
  CallsOrderBy: CallsOrderBy;
  Cursor: ResolverTypeWrapper<Scalars['Cursor']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Datetime: ResolverTypeWrapper<Scalars['Datetime']>;
  DatetimeFilter: DatetimeFilter;
  Dex: ResolverTypeWrapper<Dex>;
  DexAction: ResolverTypeWrapper<DexAction>;
  DexActionFilter: DexActionFilter;
  DexActionsConnection: ResolverTypeWrapper<DexActionsConnection>;
  DexActionsEdge: ResolverTypeWrapper<DexActionsEdge>;
  DexActionsOrderBy: DexActionsOrderBy;
  DexDayDataConnection: ResolverTypeWrapper<DexDayDataConnection>;
  DexDayDataEdge: ResolverTypeWrapper<DexDayDataEdge>;
  DexDayDataOrderBy: DexDayDataOrderBy;
  DexDayDatum: ResolverTypeWrapper<DexDayDatum>;
  DexDayDatumFilter: DexDayDatumFilter;
  DexFilter: DexFilter;
  DexesConnection: ResolverTypeWrapper<DexesConnection>;
  DexesEdge: ResolverTypeWrapper<DexesEdge>;
  DexesOrderBy: DexesOrderBy;
  Event: ResolverTypeWrapper<Event>;
  EventFilter: EventFilter;
  EventsConnection: ResolverTypeWrapper<EventsConnection>;
  EventsEdge: ResolverTypeWrapper<EventsEdge>;
  EventsOrderBy: EventsOrderBy;
  Extrinsic: ResolverTypeWrapper<Extrinsic>;
  ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyConnection: ResolverTypeWrapper<ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyConnection>;
  ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyEdge: ResolverTypeWrapper<ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyEdge>;
  ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyConnection: ResolverTypeWrapper<ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyConnection>;
  ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyEdge: ResolverTypeWrapper<ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyEdge>;
  ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyConnection: ResolverTypeWrapper<ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyConnection>;
  ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyEdge: ResolverTypeWrapper<ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyEdge>;
  ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyConnection: ResolverTypeWrapper<ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyConnection>;
  ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyEdge: ResolverTypeWrapper<ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyEdge>;
  ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyConnection: ResolverTypeWrapper<ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyConnection>;
  ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyEdge: ResolverTypeWrapper<ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyEdge>;
  ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyConnection: ResolverTypeWrapper<ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyConnection>;
  ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyEdge: ResolverTypeWrapper<ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyEdge>;
  ExtrinsicAccountsByTransferExtrinsicIdAndFromIdManyToManyConnection: ResolverTypeWrapper<ExtrinsicAccountsByTransferExtrinsicIdAndFromIdManyToManyConnection>;
  ExtrinsicAccountsByTransferExtrinsicIdAndFromIdManyToManyEdge: ResolverTypeWrapper<ExtrinsicAccountsByTransferExtrinsicIdAndFromIdManyToManyEdge>;
  ExtrinsicAccountsByTransferExtrinsicIdAndToIdManyToManyConnection: ResolverTypeWrapper<ExtrinsicAccountsByTransferExtrinsicIdAndToIdManyToManyConnection>;
  ExtrinsicAccountsByTransferExtrinsicIdAndToIdManyToManyEdge: ResolverTypeWrapper<ExtrinsicAccountsByTransferExtrinsicIdAndToIdManyToManyEdge>;
  ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyConnection: ResolverTypeWrapper<ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyConnection>;
  ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyEdge: ResolverTypeWrapper<ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyEdge>;
  ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyConnection: ResolverTypeWrapper<ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyConnection>;
  ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyEdge: ResolverTypeWrapper<ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyEdge>;
  ExtrinsicCallsByTransferExtrinsicIdAndCallIdManyToManyConnection: ResolverTypeWrapper<ExtrinsicCallsByTransferExtrinsicIdAndCallIdManyToManyConnection>;
  ExtrinsicCallsByTransferExtrinsicIdAndCallIdManyToManyEdge: ResolverTypeWrapper<ExtrinsicCallsByTransferExtrinsicIdAndCallIdManyToManyEdge>;
  ExtrinsicFilter: ExtrinsicFilter;
  ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyConnection: ResolverTypeWrapper<ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyConnection>;
  ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyEdge: ResolverTypeWrapper<ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyEdge>;
  ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyConnection: ResolverTypeWrapper<ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyConnection>;
  ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyEdge: ResolverTypeWrapper<ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyEdge>;
  ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyConnection: ResolverTypeWrapper<ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyConnection>;
  ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyEdge: ResolverTypeWrapper<ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyEdge>;
  ExtrinsicTokensByTransferExtrinsicIdAndTokenIdManyToManyConnection: ResolverTypeWrapper<ExtrinsicTokensByTransferExtrinsicIdAndTokenIdManyToManyConnection>;
  ExtrinsicTokensByTransferExtrinsicIdAndTokenIdManyToManyEdge: ResolverTypeWrapper<ExtrinsicTokensByTransferExtrinsicIdAndTokenIdManyToManyEdge>;
  ExtrinsicsConnection: ResolverTypeWrapper<ExtrinsicsConnection>;
  ExtrinsicsEdge: ResolverTypeWrapper<ExtrinsicsEdge>;
  ExtrinsicsOrderBy: ExtrinsicsOrderBy;
  HomaAction: ResolverTypeWrapper<HomaAction>;
  HomaActionFilter: HomaActionFilter;
  HomaActionsConnection: ResolverTypeWrapper<HomaActionsConnection>;
  HomaActionsEdge: ResolverTypeWrapper<HomaActionsEdge>;
  HomaActionsOrderBy: HomaActionsOrderBy;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IncentiveAction: ResolverTypeWrapper<IncentiveAction>;
  IncentiveActionFilter: IncentiveActionFilter;
  IncentiveActionsConnection: ResolverTypeWrapper<IncentiveActionsConnection>;
  IncentiveActionsEdge: ResolverTypeWrapper<IncentiveActionsEdge>;
  IncentiveActionsOrderBy: IncentiveActionsOrderBy;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IntFilter: IntFilter;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONFilter: JsonFilter;
  LoanAction: ResolverTypeWrapper<LoanAction>;
  LoanActionFilter: LoanActionFilter;
  LoanActionsConnection: ResolverTypeWrapper<LoanActionsConnection>;
  LoanActionsEdge: ResolverTypeWrapper<LoanActionsEdge>;
  LoanActionsOrderBy: LoanActionsOrderBy;
  LoanParam: ResolverTypeWrapper<LoanParam>;
  LoanParamFilter: LoanParamFilter;
  LoanParamsConnection: ResolverTypeWrapper<LoanParamsConnection>;
  LoanParamsEdge: ResolverTypeWrapper<LoanParamsEdge>;
  LoanParamsHistoriesConnection: ResolverTypeWrapper<LoanParamsHistoriesConnection>;
  LoanParamsHistoriesEdge: ResolverTypeWrapper<LoanParamsHistoriesEdge>;
  LoanParamsHistoriesOrderBy: LoanParamsHistoriesOrderBy;
  LoanParamsHistory: ResolverTypeWrapper<LoanParamsHistory>;
  LoanParamsHistoryFilter: LoanParamsHistoryFilter;
  LoanParamsOrderBy: LoanParamsOrderBy;
  LoanPosition: ResolverTypeWrapper<LoanPosition>;
  LoanPositionFilter: LoanPositionFilter;
  LoanPositionsConnection: ResolverTypeWrapper<LoanPositionsConnection>;
  LoanPositionsEdge: ResolverTypeWrapper<LoanPositionsEdge>;
  LoanPositionsOrderBy: LoanPositionsOrderBy;
  NFTAction: ResolverTypeWrapper<NftAction>;
  NFTActionFilter: NftActionFilter;
  NftActionsConnection: ResolverTypeWrapper<NftActionsConnection>;
  NftActionsEdge: ResolverTypeWrapper<NftActionsEdge>;
  NftActionsOrderBy: NftActionsOrderBy;
  Node: ResolversTypes['Account'] | ResolversTypes['Block'] | ResolversTypes['Call'] | ResolversTypes['Dex'] | ResolversTypes['DexAction'] | ResolversTypes['DexDayDatum'] | ResolversTypes['Event'] | ResolversTypes['Extrinsic'] | ResolversTypes['HomaAction'] | ResolversTypes['IncentiveAction'] | ResolversTypes['LoanAction'] | ResolversTypes['LoanParam'] | ResolversTypes['LoanParamsHistory'] | ResolversTypes['LoanPosition'] | ResolversTypes['NFTAction'] | ResolversTypes['OracleFeedRecord'] | ResolversTypes['Pool'] | ResolversTypes['PoolDayDatum'] | ResolversTypes['PoolHourDatum'] | ResolversTypes['PriceBundle'] | ResolversTypes['PriceRecord'] | ResolversTypes['ProvisionPool'] | ResolversTypes['Query'] | ResolversTypes['SystemConst'] | ResolversTypes['Token'] | ResolversTypes['TokenDayDatum'] | ResolversTypes['TotalLoanPosition'] | ResolversTypes['Transfer'] | ResolversTypes['UserProvision'];
  OracleFeedRecord: ResolverTypeWrapper<OracleFeedRecord>;
  OracleFeedRecordFilter: OracleFeedRecordFilter;
  OracleFeedRecordsConnection: ResolverTypeWrapper<OracleFeedRecordsConnection>;
  OracleFeedRecordsEdge: ResolverTypeWrapper<OracleFeedRecordsEdge>;
  OracleFeedRecordsOrderBy: OracleFeedRecordsOrderBy;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Pool: ResolverTypeWrapper<Pool>;
  PoolAccountsByDexActionPoolIdAndAccountIdManyToManyConnection: ResolverTypeWrapper<PoolAccountsByDexActionPoolIdAndAccountIdManyToManyConnection>;
  PoolAccountsByDexActionPoolIdAndAccountIdManyToManyEdge: ResolverTypeWrapper<PoolAccountsByDexActionPoolIdAndAccountIdManyToManyEdge>;
  PoolDayDataConnection: ResolverTypeWrapper<PoolDayDataConnection>;
  PoolDayDataEdge: ResolverTypeWrapper<PoolDayDataEdge>;
  PoolDayDataOrderBy: PoolDayDataOrderBy;
  PoolDayDatum: ResolverTypeWrapper<PoolDayDatum>;
  PoolDayDatumFilter: PoolDayDatumFilter;
  PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyConnection: ResolverTypeWrapper<PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyConnection>;
  PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyEdge: ResolverTypeWrapper<PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyEdge>;
  PoolFilter: PoolFilter;
  PoolHourDataConnection: ResolverTypeWrapper<PoolHourDataConnection>;
  PoolHourDataEdge: ResolverTypeWrapper<PoolHourDataEdge>;
  PoolHourDataOrderBy: PoolHourDataOrderBy;
  PoolHourDatum: ResolverTypeWrapper<PoolHourDatum>;
  PoolHourDatumFilter: PoolHourDatumFilter;
  PoolTokensByDexActionPoolIdAndToken0IdManyToManyConnection: ResolverTypeWrapper<PoolTokensByDexActionPoolIdAndToken0IdManyToManyConnection>;
  PoolTokensByDexActionPoolIdAndToken0IdManyToManyEdge: ResolverTypeWrapper<PoolTokensByDexActionPoolIdAndToken0IdManyToManyEdge>;
  PoolTokensByDexActionPoolIdAndToken1IdManyToManyConnection: ResolverTypeWrapper<PoolTokensByDexActionPoolIdAndToken1IdManyToManyConnection>;
  PoolTokensByDexActionPoolIdAndToken1IdManyToManyEdge: ResolverTypeWrapper<PoolTokensByDexActionPoolIdAndToken1IdManyToManyEdge>;
  PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyConnection: ResolverTypeWrapper<PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyConnection>;
  PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyEdge: ResolverTypeWrapper<PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyEdge>;
  PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyConnection: ResolverTypeWrapper<PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyConnection>;
  PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyEdge: ResolverTypeWrapper<PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyEdge>;
  PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyConnection: ResolverTypeWrapper<PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyConnection>;
  PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyEdge: ResolverTypeWrapper<PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyEdge>;
  PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyConnection: ResolverTypeWrapper<PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyConnection>;
  PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyEdge: ResolverTypeWrapper<PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyEdge>;
  PoolsConnection: ResolverTypeWrapper<PoolsConnection>;
  PoolsEdge: ResolverTypeWrapper<PoolsEdge>;
  PoolsOrderBy: PoolsOrderBy;
  PriceBundle: ResolverTypeWrapper<PriceBundle>;
  PriceBundleFilter: PriceBundleFilter;
  PriceBundlesConnection: ResolverTypeWrapper<PriceBundlesConnection>;
  PriceBundlesEdge: ResolverTypeWrapper<PriceBundlesEdge>;
  PriceBundlesOrderBy: PriceBundlesOrderBy;
  PriceRecord: ResolverTypeWrapper<PriceRecord>;
  PriceRecordFilter: PriceRecordFilter;
  PriceRecordsConnection: ResolverTypeWrapper<PriceRecordsConnection>;
  PriceRecordsEdge: ResolverTypeWrapper<PriceRecordsEdge>;
  PriceRecordsOrderBy: PriceRecordsOrderBy;
  ProvisionPool: ResolverTypeWrapper<ProvisionPool>;
  ProvisionPoolFilter: ProvisionPoolFilter;
  ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyConnection: ResolverTypeWrapper<ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyConnection>;
  ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyEdge: ResolverTypeWrapper<ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyEdge>;
  ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyConnection: ResolverTypeWrapper<ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyConnection>;
  ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyEdge: ResolverTypeWrapper<ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyEdge>;
  ProvisionPoolsConnection: ResolverTypeWrapper<ProvisionPoolsConnection>;
  ProvisionPoolsEdge: ResolverTypeWrapper<ProvisionPoolsEdge>;
  ProvisionPoolsOrderBy: ProvisionPoolsOrderBy;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  StringFilter: StringFilter;
  SystemConst: ResolverTypeWrapper<SystemConst>;
  SystemConstFilter: SystemConstFilter;
  SystemConstsConnection: ResolverTypeWrapper<SystemConstsConnection>;
  SystemConstsEdge: ResolverTypeWrapper<SystemConstsEdge>;
  SystemConstsOrderBy: SystemConstsOrderBy;
  Token: ResolverTypeWrapper<Token>;
  TokenAccountsByDexActionToken0IdAndAccountIdManyToManyConnection: ResolverTypeWrapper<TokenAccountsByDexActionToken0IdAndAccountIdManyToManyConnection>;
  TokenAccountsByDexActionToken0IdAndAccountIdManyToManyEdge: ResolverTypeWrapper<TokenAccountsByDexActionToken0IdAndAccountIdManyToManyEdge>;
  TokenAccountsByDexActionToken1IdAndAccountIdManyToManyConnection: ResolverTypeWrapper<TokenAccountsByDexActionToken1IdAndAccountIdManyToManyConnection>;
  TokenAccountsByDexActionToken1IdAndAccountIdManyToManyEdge: ResolverTypeWrapper<TokenAccountsByDexActionToken1IdAndAccountIdManyToManyEdge>;
  TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyConnection: ResolverTypeWrapper<TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyConnection>;
  TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyEdge: ResolverTypeWrapper<TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyEdge>;
  TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyConnection: ResolverTypeWrapper<TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyConnection>;
  TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyEdge: ResolverTypeWrapper<TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyEdge>;
  TokenAccountsByTransferTokenIdAndFromIdManyToManyConnection: ResolverTypeWrapper<TokenAccountsByTransferTokenIdAndFromIdManyToManyConnection>;
  TokenAccountsByTransferTokenIdAndFromIdManyToManyEdge: ResolverTypeWrapper<TokenAccountsByTransferTokenIdAndFromIdManyToManyEdge>;
  TokenAccountsByTransferTokenIdAndToIdManyToManyConnection: ResolverTypeWrapper<TokenAccountsByTransferTokenIdAndToIdManyToManyConnection>;
  TokenAccountsByTransferTokenIdAndToIdManyToManyEdge: ResolverTypeWrapper<TokenAccountsByTransferTokenIdAndToIdManyToManyEdge>;
  TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyConnection: ResolverTypeWrapper<TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyConnection>;
  TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyEdge: ResolverTypeWrapper<TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyEdge>;
  TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyConnection: ResolverTypeWrapper<TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyConnection>;
  TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyEdge: ResolverTypeWrapper<TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyEdge>;
  TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyConnection: ResolverTypeWrapper<TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyConnection>;
  TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyEdge: ResolverTypeWrapper<TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyEdge>;
  TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyConnection: ResolverTypeWrapper<TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyConnection>;
  TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyEdge: ResolverTypeWrapper<TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyEdge>;
  TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyConnection: ResolverTypeWrapper<TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyConnection>;
  TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyEdge: ResolverTypeWrapper<TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyEdge>;
  TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyConnection: ResolverTypeWrapper<TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyConnection>;
  TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyEdge: ResolverTypeWrapper<TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyEdge>;
  TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyConnection: ResolverTypeWrapper<TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyConnection>;
  TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyEdge: ResolverTypeWrapper<TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyEdge>;
  TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyConnection: ResolverTypeWrapper<TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyConnection>;
  TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyEdge: ResolverTypeWrapper<TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyEdge>;
  TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyConnection: ResolverTypeWrapper<TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyConnection>;
  TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyEdge: ResolverTypeWrapper<TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyEdge>;
  TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyConnection: ResolverTypeWrapper<TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyConnection>;
  TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyEdge: ResolverTypeWrapper<TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyEdge>;
  TokenCallsByTransferTokenIdAndCallIdManyToManyConnection: ResolverTypeWrapper<TokenCallsByTransferTokenIdAndCallIdManyToManyConnection>;
  TokenCallsByTransferTokenIdAndCallIdManyToManyEdge: ResolverTypeWrapper<TokenCallsByTransferTokenIdAndCallIdManyToManyEdge>;
  TokenDayDataConnection: ResolverTypeWrapper<TokenDayDataConnection>;
  TokenDayDataEdge: ResolverTypeWrapper<TokenDayDataEdge>;
  TokenDayDataOrderBy: TokenDayDataOrderBy;
  TokenDayDatum: ResolverTypeWrapper<TokenDayDatum>;
  TokenDayDatumFilter: TokenDayDatumFilter;
  TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyConnection: ResolverTypeWrapper<TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyConnection>;
  TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyEdge: ResolverTypeWrapper<TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyEdge>;
  TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyConnection: ResolverTypeWrapper<TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyConnection>;
  TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyEdge: ResolverTypeWrapper<TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyEdge>;
  TokenExtrinsicsByTransferTokenIdAndExtrinsicIdManyToManyConnection: ResolverTypeWrapper<TokenExtrinsicsByTransferTokenIdAndExtrinsicIdManyToManyConnection>;
  TokenExtrinsicsByTransferTokenIdAndExtrinsicIdManyToManyEdge: ResolverTypeWrapper<TokenExtrinsicsByTransferTokenIdAndExtrinsicIdManyToManyEdge>;
  TokenFilter: TokenFilter;
  TokenPoolsByDexActionToken0IdAndPoolIdManyToManyConnection: ResolverTypeWrapper<TokenPoolsByDexActionToken0IdAndPoolIdManyToManyConnection>;
  TokenPoolsByDexActionToken0IdAndPoolIdManyToManyEdge: ResolverTypeWrapper<TokenPoolsByDexActionToken0IdAndPoolIdManyToManyEdge>;
  TokenPoolsByDexActionToken1IdAndPoolIdManyToManyConnection: ResolverTypeWrapper<TokenPoolsByDexActionToken1IdAndPoolIdManyToManyConnection>;
  TokenPoolsByDexActionToken1IdAndPoolIdManyToManyEdge: ResolverTypeWrapper<TokenPoolsByDexActionToken1IdAndPoolIdManyToManyEdge>;
  TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyConnection: ResolverTypeWrapper<TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyConnection>;
  TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyEdge: ResolverTypeWrapper<TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyEdge>;
  TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyConnection: ResolverTypeWrapper<TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyConnection>;
  TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyEdge: ResolverTypeWrapper<TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyEdge>;
  TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyConnection: ResolverTypeWrapper<TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyConnection>;
  TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyEdge: ResolverTypeWrapper<TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyEdge>;
  TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyConnection: ResolverTypeWrapper<TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyConnection>;
  TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyEdge: ResolverTypeWrapper<TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyEdge>;
  TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyConnection: ResolverTypeWrapper<TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyConnection>;
  TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyEdge: ResolverTypeWrapper<TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyEdge>;
  TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyConnection: ResolverTypeWrapper<TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyConnection>;
  TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyEdge: ResolverTypeWrapper<TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyEdge>;
  TokenTokensByDexActionToken0IdAndToken1IdManyToManyConnection: ResolverTypeWrapper<TokenTokensByDexActionToken0IdAndToken1IdManyToManyConnection>;
  TokenTokensByDexActionToken0IdAndToken1IdManyToManyEdge: ResolverTypeWrapper<TokenTokensByDexActionToken0IdAndToken1IdManyToManyEdge>;
  TokenTokensByDexActionToken1IdAndToken0IdManyToManyConnection: ResolverTypeWrapper<TokenTokensByDexActionToken1IdAndToken0IdManyToManyConnection>;
  TokenTokensByDexActionToken1IdAndToken0IdManyToManyEdge: ResolverTypeWrapper<TokenTokensByDexActionToken1IdAndToken0IdManyToManyEdge>;
  TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyConnection: ResolverTypeWrapper<TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyConnection>;
  TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyEdge: ResolverTypeWrapper<TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyEdge>;
  TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyConnection: ResolverTypeWrapper<TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyConnection>;
  TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyEdge: ResolverTypeWrapper<TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyEdge>;
  TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyConnection: ResolverTypeWrapper<TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyConnection>;
  TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyEdge: ResolverTypeWrapper<TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyEdge>;
  TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyConnection: ResolverTypeWrapper<TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyConnection>;
  TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyEdge: ResolverTypeWrapper<TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyEdge>;
  TokenTokensByPoolToken0IdAndToken1IdManyToManyConnection: ResolverTypeWrapper<TokenTokensByPoolToken0IdAndToken1IdManyToManyConnection>;
  TokenTokensByPoolToken0IdAndToken1IdManyToManyEdge: ResolverTypeWrapper<TokenTokensByPoolToken0IdAndToken1IdManyToManyEdge>;
  TokenTokensByPoolToken1IdAndToken0IdManyToManyConnection: ResolverTypeWrapper<TokenTokensByPoolToken1IdAndToken0IdManyToManyConnection>;
  TokenTokensByPoolToken1IdAndToken0IdManyToManyEdge: ResolverTypeWrapper<TokenTokensByPoolToken1IdAndToken0IdManyToManyEdge>;
  TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyConnection: ResolverTypeWrapper<TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyConnection>;
  TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyEdge: ResolverTypeWrapper<TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyEdge>;
  TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyConnection: ResolverTypeWrapper<TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyConnection>;
  TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyEdge: ResolverTypeWrapper<TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyEdge>;
  TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyConnection: ResolverTypeWrapper<TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyConnection>;
  TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyEdge: ResolverTypeWrapper<TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyEdge>;
  TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyConnection: ResolverTypeWrapper<TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyConnection>;
  TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyEdge: ResolverTypeWrapper<TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyEdge>;
  TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyConnection: ResolverTypeWrapper<TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyConnection>;
  TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyEdge: ResolverTypeWrapper<TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyEdge>;
  TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyConnection: ResolverTypeWrapper<TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyConnection>;
  TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyEdge: ResolverTypeWrapper<TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyEdge>;
  TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyConnection: ResolverTypeWrapper<TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyConnection>;
  TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyEdge: ResolverTypeWrapper<TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyEdge>;
  TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyConnection: ResolverTypeWrapper<TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyConnection>;
  TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyEdge: ResolverTypeWrapper<TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyEdge>;
  TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyConnection: ResolverTypeWrapper<TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyConnection>;
  TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyEdge: ResolverTypeWrapper<TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyEdge>;
  TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyConnection: ResolverTypeWrapper<TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyConnection>;
  TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyEdge: ResolverTypeWrapper<TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyEdge>;
  TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyConnection: ResolverTypeWrapper<TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyConnection>;
  TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyEdge: ResolverTypeWrapper<TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyEdge>;
  TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyConnection: ResolverTypeWrapper<TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyConnection>;
  TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyEdge: ResolverTypeWrapper<TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyEdge>;
  TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyConnection: ResolverTypeWrapper<TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyConnection>;
  TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyEdge: ResolverTypeWrapper<TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyEdge>;
  TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyConnection: ResolverTypeWrapper<TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyConnection>;
  TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyEdge: ResolverTypeWrapper<TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyEdge>;
  TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyConnection: ResolverTypeWrapper<TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyConnection>;
  TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyEdge: ResolverTypeWrapper<TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyEdge>;
  TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyConnection: ResolverTypeWrapper<TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyConnection>;
  TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyEdge: ResolverTypeWrapper<TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyEdge>;
  TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyConnection: ResolverTypeWrapper<TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyConnection>;
  TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyEdge: ResolverTypeWrapper<TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyEdge>;
  TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyConnection: ResolverTypeWrapper<TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyConnection>;
  TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyEdge: ResolverTypeWrapper<TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyEdge>;
  TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyConnection: ResolverTypeWrapper<TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyConnection>;
  TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyEdge: ResolverTypeWrapper<TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyEdge>;
  TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyConnection: ResolverTypeWrapper<TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyConnection>;
  TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyEdge: ResolverTypeWrapper<TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyEdge>;
  TokensConnection: ResolverTypeWrapper<TokensConnection>;
  TokensEdge: ResolverTypeWrapper<TokensEdge>;
  TokensOrderBy: TokensOrderBy;
  TotalLoanPosition: ResolverTypeWrapper<TotalLoanPosition>;
  TotalLoanPositionFilter: TotalLoanPositionFilter;
  TotalLoanPositionsConnection: ResolverTypeWrapper<TotalLoanPositionsConnection>;
  TotalLoanPositionsEdge: ResolverTypeWrapper<TotalLoanPositionsEdge>;
  TotalLoanPositionsOrderBy: TotalLoanPositionsOrderBy;
  Transfer: ResolverTypeWrapper<Transfer>;
  TransferFilter: TransferFilter;
  TransfersConnection: ResolverTypeWrapper<TransfersConnection>;
  TransfersEdge: ResolverTypeWrapper<TransfersEdge>;
  TransfersOrderBy: TransfersOrderBy;
  UserProvision: ResolverTypeWrapper<UserProvision>;
  UserProvisionFilter: UserProvisionFilter;
  UserProvisionsConnection: ResolverTypeWrapper<UserProvisionsConnection>;
  UserProvisionsEdge: ResolverTypeWrapper<UserProvisionsEdge>;
  UserProvisionsOrderBy: UserProvisionsOrderBy;
  _Metadata: ResolverTypeWrapper<_Metadata>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Account: Account;
  AccountAccountsByTransferFromIdAndToIdManyToManyConnection: AccountAccountsByTransferFromIdAndToIdManyToManyConnection;
  AccountAccountsByTransferFromIdAndToIdManyToManyEdge: AccountAccountsByTransferFromIdAndToIdManyToManyEdge;
  AccountAccountsByTransferToIdAndFromIdManyToManyConnection: AccountAccountsByTransferToIdAndFromIdManyToManyConnection;
  AccountAccountsByTransferToIdAndFromIdManyToManyEdge: AccountAccountsByTransferToIdAndFromIdManyToManyEdge;
  AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyConnection: AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyConnection;
  AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyEdge: AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyEdge;
  AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyConnection: AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyConnection;
  AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyEdge: AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyEdge;
  AccountCallsByCallSignerIdAndParentCallIdManyToManyConnection: AccountCallsByCallSignerIdAndParentCallIdManyToManyConnection;
  AccountCallsByCallSignerIdAndParentCallIdManyToManyEdge: AccountCallsByCallSignerIdAndParentCallIdManyToManyEdge;
  AccountCallsByTransferFromIdAndCallIdManyToManyConnection: AccountCallsByTransferFromIdAndCallIdManyToManyConnection;
  AccountCallsByTransferFromIdAndCallIdManyToManyEdge: AccountCallsByTransferFromIdAndCallIdManyToManyEdge;
  AccountCallsByTransferToIdAndCallIdManyToManyConnection: AccountCallsByTransferToIdAndCallIdManyToManyConnection;
  AccountCallsByTransferToIdAndCallIdManyToManyEdge: AccountCallsByTransferToIdAndCallIdManyToManyEdge;
  AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyConnection: AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyConnection;
  AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyEdge: AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyEdge;
  AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyConnection: AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyConnection;
  AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyEdge: AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyEdge;
  AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyConnection: AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyConnection;
  AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyEdge: AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyEdge;
  AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyConnection: AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyConnection;
  AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyEdge: AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyEdge;
  AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyConnection: AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyConnection;
  AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyEdge: AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyEdge;
  AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyConnection: AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyConnection;
  AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyEdge: AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyEdge;
  AccountExtrinsicsByTransferFromIdAndExtrinsicIdManyToManyConnection: AccountExtrinsicsByTransferFromIdAndExtrinsicIdManyToManyConnection;
  AccountExtrinsicsByTransferFromIdAndExtrinsicIdManyToManyEdge: AccountExtrinsicsByTransferFromIdAndExtrinsicIdManyToManyEdge;
  AccountExtrinsicsByTransferToIdAndExtrinsicIdManyToManyConnection: AccountExtrinsicsByTransferToIdAndExtrinsicIdManyToManyConnection;
  AccountExtrinsicsByTransferToIdAndExtrinsicIdManyToManyEdge: AccountExtrinsicsByTransferToIdAndExtrinsicIdManyToManyEdge;
  AccountFilter: AccountFilter;
  AccountPoolsByDexActionAccountIdAndPoolIdManyToManyConnection: AccountPoolsByDexActionAccountIdAndPoolIdManyToManyConnection;
  AccountPoolsByDexActionAccountIdAndPoolIdManyToManyEdge: AccountPoolsByDexActionAccountIdAndPoolIdManyToManyEdge;
  AccountTokensByDexActionAccountIdAndToken0IdManyToManyConnection: AccountTokensByDexActionAccountIdAndToken0IdManyToManyConnection;
  AccountTokensByDexActionAccountIdAndToken0IdManyToManyEdge: AccountTokensByDexActionAccountIdAndToken0IdManyToManyEdge;
  AccountTokensByDexActionAccountIdAndToken1IdManyToManyConnection: AccountTokensByDexActionAccountIdAndToken1IdManyToManyConnection;
  AccountTokensByDexActionAccountIdAndToken1IdManyToManyEdge: AccountTokensByDexActionAccountIdAndToken1IdManyToManyEdge;
  AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyConnection: AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyConnection;
  AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyEdge: AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyEdge;
  AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyConnection: AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyConnection;
  AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyEdge: AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyEdge;
  AccountTokensByTransferFromIdAndTokenIdManyToManyConnection: AccountTokensByTransferFromIdAndTokenIdManyToManyConnection;
  AccountTokensByTransferFromIdAndTokenIdManyToManyEdge: AccountTokensByTransferFromIdAndTokenIdManyToManyEdge;
  AccountTokensByTransferToIdAndTokenIdManyToManyConnection: AccountTokensByTransferToIdAndTokenIdManyToManyConnection;
  AccountTokensByTransferToIdAndTokenIdManyToManyEdge: AccountTokensByTransferToIdAndTokenIdManyToManyEdge;
  AccountsConnection: AccountsConnection;
  AccountsEdge: AccountsEdge;
  BigFloat: Scalars['BigFloat'];
  BigFloatFilter: BigFloatFilter;
  Block: Block;
  BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyConnection: BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyConnection;
  BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyEdge: BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyEdge;
  BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyConnection: BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyConnection;
  BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyEdge: BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyEdge;
  BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyConnection: BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyConnection;
  BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyEdge: BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyEdge;
  BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyConnection: BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyConnection;
  BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyEdge: BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyEdge;
  BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyConnection: BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyConnection;
  BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyEdge: BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyEdge;
  BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyConnection: BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyConnection;
  BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyEdge: BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyEdge;
  BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyConnection: BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyConnection;
  BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyEdge: BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyEdge;
  BlockFilter: BlockFilter;
  BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyConnection: BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyConnection;
  BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyEdge: BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyEdge;
  BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyConnection: BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyConnection;
  BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyEdge: BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyEdge;
  BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyConnection: BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyConnection;
  BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyEdge: BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyEdge;
  BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyConnection: BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyConnection;
  BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyEdge: BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyEdge;
  BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyConnection: BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyConnection;
  BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyEdge: BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyEdge;
  BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyConnection: BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyConnection;
  BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyEdge: BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyEdge;
  BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyConnection: BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyConnection;
  BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyEdge: BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyEdge;
  BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyConnection: BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyConnection;
  BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyEdge: BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyEdge;
  BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyConnection: BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyConnection;
  BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyEdge: BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyEdge;
  BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyConnection: BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyConnection;
  BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyEdge: BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyEdge;
  BlocksConnection: BlocksConnection;
  BlocksEdge: BlocksEdge;
  Boolean: Scalars['Boolean'];
  BooleanFilter: BooleanFilter;
  Call: Call;
  CallAccountsByCallParentCallIdAndSignerIdManyToManyConnection: CallAccountsByCallParentCallIdAndSignerIdManyToManyConnection;
  CallAccountsByCallParentCallIdAndSignerIdManyToManyEdge: CallAccountsByCallParentCallIdAndSignerIdManyToManyEdge;
  CallAccountsByTransferCallIdAndFromIdManyToManyConnection: CallAccountsByTransferCallIdAndFromIdManyToManyConnection;
  CallAccountsByTransferCallIdAndFromIdManyToManyEdge: CallAccountsByTransferCallIdAndFromIdManyToManyEdge;
  CallAccountsByTransferCallIdAndToIdManyToManyConnection: CallAccountsByTransferCallIdAndToIdManyToManyConnection;
  CallAccountsByTransferCallIdAndToIdManyToManyEdge: CallAccountsByTransferCallIdAndToIdManyToManyEdge;
  CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyConnection: CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyConnection;
  CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyEdge: CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyEdge;
  CallExtrinsicsByTransferCallIdAndExtrinsicIdManyToManyConnection: CallExtrinsicsByTransferCallIdAndExtrinsicIdManyToManyConnection;
  CallExtrinsicsByTransferCallIdAndExtrinsicIdManyToManyEdge: CallExtrinsicsByTransferCallIdAndExtrinsicIdManyToManyEdge;
  CallFilter: CallFilter;
  CallTokensByTransferCallIdAndTokenIdManyToManyConnection: CallTokensByTransferCallIdAndTokenIdManyToManyConnection;
  CallTokensByTransferCallIdAndTokenIdManyToManyEdge: CallTokensByTransferCallIdAndTokenIdManyToManyEdge;
  CallsConnection: CallsConnection;
  CallsEdge: CallsEdge;
  Cursor: Scalars['Cursor'];
  Date: Scalars['Date'];
  Datetime: Scalars['Datetime'];
  DatetimeFilter: DatetimeFilter;
  Dex: Dex;
  DexAction: DexAction;
  DexActionFilter: DexActionFilter;
  DexActionsConnection: DexActionsConnection;
  DexActionsEdge: DexActionsEdge;
  DexDayDataConnection: DexDayDataConnection;
  DexDayDataEdge: DexDayDataEdge;
  DexDayDatum: DexDayDatum;
  DexDayDatumFilter: DexDayDatumFilter;
  DexFilter: DexFilter;
  DexesConnection: DexesConnection;
  DexesEdge: DexesEdge;
  Event: Event;
  EventFilter: EventFilter;
  EventsConnection: EventsConnection;
  EventsEdge: EventsEdge;
  Extrinsic: Extrinsic;
  ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyConnection: ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyConnection;
  ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyEdge: ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyEdge;
  ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyConnection: ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyConnection;
  ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyEdge: ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyEdge;
  ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyConnection: ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyConnection;
  ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyEdge: ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyEdge;
  ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyConnection: ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyConnection;
  ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyEdge: ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyEdge;
  ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyConnection: ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyConnection;
  ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyEdge: ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyEdge;
  ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyConnection: ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyConnection;
  ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyEdge: ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyEdge;
  ExtrinsicAccountsByTransferExtrinsicIdAndFromIdManyToManyConnection: ExtrinsicAccountsByTransferExtrinsicIdAndFromIdManyToManyConnection;
  ExtrinsicAccountsByTransferExtrinsicIdAndFromIdManyToManyEdge: ExtrinsicAccountsByTransferExtrinsicIdAndFromIdManyToManyEdge;
  ExtrinsicAccountsByTransferExtrinsicIdAndToIdManyToManyConnection: ExtrinsicAccountsByTransferExtrinsicIdAndToIdManyToManyConnection;
  ExtrinsicAccountsByTransferExtrinsicIdAndToIdManyToManyEdge: ExtrinsicAccountsByTransferExtrinsicIdAndToIdManyToManyEdge;
  ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyConnection: ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyConnection;
  ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyEdge: ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyEdge;
  ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyConnection: ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyConnection;
  ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyEdge: ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyEdge;
  ExtrinsicCallsByTransferExtrinsicIdAndCallIdManyToManyConnection: ExtrinsicCallsByTransferExtrinsicIdAndCallIdManyToManyConnection;
  ExtrinsicCallsByTransferExtrinsicIdAndCallIdManyToManyEdge: ExtrinsicCallsByTransferExtrinsicIdAndCallIdManyToManyEdge;
  ExtrinsicFilter: ExtrinsicFilter;
  ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyConnection: ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyConnection;
  ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyEdge: ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyEdge;
  ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyConnection: ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyConnection;
  ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyEdge: ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyEdge;
  ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyConnection: ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyConnection;
  ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyEdge: ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyEdge;
  ExtrinsicTokensByTransferExtrinsicIdAndTokenIdManyToManyConnection: ExtrinsicTokensByTransferExtrinsicIdAndTokenIdManyToManyConnection;
  ExtrinsicTokensByTransferExtrinsicIdAndTokenIdManyToManyEdge: ExtrinsicTokensByTransferExtrinsicIdAndTokenIdManyToManyEdge;
  ExtrinsicsConnection: ExtrinsicsConnection;
  ExtrinsicsEdge: ExtrinsicsEdge;
  HomaAction: HomaAction;
  HomaActionFilter: HomaActionFilter;
  HomaActionsConnection: HomaActionsConnection;
  HomaActionsEdge: HomaActionsEdge;
  ID: Scalars['ID'];
  IncentiveAction: IncentiveAction;
  IncentiveActionFilter: IncentiveActionFilter;
  IncentiveActionsConnection: IncentiveActionsConnection;
  IncentiveActionsEdge: IncentiveActionsEdge;
  Int: Scalars['Int'];
  IntFilter: IntFilter;
  JSON: Scalars['JSON'];
  JSONFilter: JsonFilter;
  LoanAction: LoanAction;
  LoanActionFilter: LoanActionFilter;
  LoanActionsConnection: LoanActionsConnection;
  LoanActionsEdge: LoanActionsEdge;
  LoanParam: LoanParam;
  LoanParamFilter: LoanParamFilter;
  LoanParamsConnection: LoanParamsConnection;
  LoanParamsEdge: LoanParamsEdge;
  LoanParamsHistoriesConnection: LoanParamsHistoriesConnection;
  LoanParamsHistoriesEdge: LoanParamsHistoriesEdge;
  LoanParamsHistory: LoanParamsHistory;
  LoanParamsHistoryFilter: LoanParamsHistoryFilter;
  LoanPosition: LoanPosition;
  LoanPositionFilter: LoanPositionFilter;
  LoanPositionsConnection: LoanPositionsConnection;
  LoanPositionsEdge: LoanPositionsEdge;
  NFTAction: NftAction;
  NFTActionFilter: NftActionFilter;
  NftActionsConnection: NftActionsConnection;
  NftActionsEdge: NftActionsEdge;
  Node: ResolversParentTypes['Account'] | ResolversParentTypes['Block'] | ResolversParentTypes['Call'] | ResolversParentTypes['Dex'] | ResolversParentTypes['DexAction'] | ResolversParentTypes['DexDayDatum'] | ResolversParentTypes['Event'] | ResolversParentTypes['Extrinsic'] | ResolversParentTypes['HomaAction'] | ResolversParentTypes['IncentiveAction'] | ResolversParentTypes['LoanAction'] | ResolversParentTypes['LoanParam'] | ResolversParentTypes['LoanParamsHistory'] | ResolversParentTypes['LoanPosition'] | ResolversParentTypes['NFTAction'] | ResolversParentTypes['OracleFeedRecord'] | ResolversParentTypes['Pool'] | ResolversParentTypes['PoolDayDatum'] | ResolversParentTypes['PoolHourDatum'] | ResolversParentTypes['PriceBundle'] | ResolversParentTypes['PriceRecord'] | ResolversParentTypes['ProvisionPool'] | ResolversParentTypes['Query'] | ResolversParentTypes['SystemConst'] | ResolversParentTypes['Token'] | ResolversParentTypes['TokenDayDatum'] | ResolversParentTypes['TotalLoanPosition'] | ResolversParentTypes['Transfer'] | ResolversParentTypes['UserProvision'];
  OracleFeedRecord: OracleFeedRecord;
  OracleFeedRecordFilter: OracleFeedRecordFilter;
  OracleFeedRecordsConnection: OracleFeedRecordsConnection;
  OracleFeedRecordsEdge: OracleFeedRecordsEdge;
  PageInfo: PageInfo;
  Pool: Pool;
  PoolAccountsByDexActionPoolIdAndAccountIdManyToManyConnection: PoolAccountsByDexActionPoolIdAndAccountIdManyToManyConnection;
  PoolAccountsByDexActionPoolIdAndAccountIdManyToManyEdge: PoolAccountsByDexActionPoolIdAndAccountIdManyToManyEdge;
  PoolDayDataConnection: PoolDayDataConnection;
  PoolDayDataEdge: PoolDayDataEdge;
  PoolDayDatum: PoolDayDatum;
  PoolDayDatumFilter: PoolDayDatumFilter;
  PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyConnection: PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyConnection;
  PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyEdge: PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyEdge;
  PoolFilter: PoolFilter;
  PoolHourDataConnection: PoolHourDataConnection;
  PoolHourDataEdge: PoolHourDataEdge;
  PoolHourDatum: PoolHourDatum;
  PoolHourDatumFilter: PoolHourDatumFilter;
  PoolTokensByDexActionPoolIdAndToken0IdManyToManyConnection: PoolTokensByDexActionPoolIdAndToken0IdManyToManyConnection;
  PoolTokensByDexActionPoolIdAndToken0IdManyToManyEdge: PoolTokensByDexActionPoolIdAndToken0IdManyToManyEdge;
  PoolTokensByDexActionPoolIdAndToken1IdManyToManyConnection: PoolTokensByDexActionPoolIdAndToken1IdManyToManyConnection;
  PoolTokensByDexActionPoolIdAndToken1IdManyToManyEdge: PoolTokensByDexActionPoolIdAndToken1IdManyToManyEdge;
  PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyConnection: PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyConnection;
  PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyEdge: PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyEdge;
  PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyConnection: PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyConnection;
  PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyEdge: PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyEdge;
  PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyConnection: PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyConnection;
  PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyEdge: PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyEdge;
  PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyConnection: PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyConnection;
  PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyEdge: PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyEdge;
  PoolsConnection: PoolsConnection;
  PoolsEdge: PoolsEdge;
  PriceBundle: PriceBundle;
  PriceBundleFilter: PriceBundleFilter;
  PriceBundlesConnection: PriceBundlesConnection;
  PriceBundlesEdge: PriceBundlesEdge;
  PriceRecord: PriceRecord;
  PriceRecordFilter: PriceRecordFilter;
  PriceRecordsConnection: PriceRecordsConnection;
  PriceRecordsEdge: PriceRecordsEdge;
  ProvisionPool: ProvisionPool;
  ProvisionPoolFilter: ProvisionPoolFilter;
  ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyConnection: ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyConnection;
  ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyEdge: ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyEdge;
  ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyConnection: ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyConnection;
  ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyEdge: ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyEdge;
  ProvisionPoolsConnection: ProvisionPoolsConnection;
  ProvisionPoolsEdge: ProvisionPoolsEdge;
  Query: {};
  String: Scalars['String'];
  StringFilter: StringFilter;
  SystemConst: SystemConst;
  SystemConstFilter: SystemConstFilter;
  SystemConstsConnection: SystemConstsConnection;
  SystemConstsEdge: SystemConstsEdge;
  Token: Token;
  TokenAccountsByDexActionToken0IdAndAccountIdManyToManyConnection: TokenAccountsByDexActionToken0IdAndAccountIdManyToManyConnection;
  TokenAccountsByDexActionToken0IdAndAccountIdManyToManyEdge: TokenAccountsByDexActionToken0IdAndAccountIdManyToManyEdge;
  TokenAccountsByDexActionToken1IdAndAccountIdManyToManyConnection: TokenAccountsByDexActionToken1IdAndAccountIdManyToManyConnection;
  TokenAccountsByDexActionToken1IdAndAccountIdManyToManyEdge: TokenAccountsByDexActionToken1IdAndAccountIdManyToManyEdge;
  TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyConnection: TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyConnection;
  TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyEdge: TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyEdge;
  TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyConnection: TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyConnection;
  TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyEdge: TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyEdge;
  TokenAccountsByTransferTokenIdAndFromIdManyToManyConnection: TokenAccountsByTransferTokenIdAndFromIdManyToManyConnection;
  TokenAccountsByTransferTokenIdAndFromIdManyToManyEdge: TokenAccountsByTransferTokenIdAndFromIdManyToManyEdge;
  TokenAccountsByTransferTokenIdAndToIdManyToManyConnection: TokenAccountsByTransferTokenIdAndToIdManyToManyConnection;
  TokenAccountsByTransferTokenIdAndToIdManyToManyEdge: TokenAccountsByTransferTokenIdAndToIdManyToManyEdge;
  TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyConnection: TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyConnection;
  TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyEdge: TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyEdge;
  TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyConnection: TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyConnection;
  TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyEdge: TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyEdge;
  TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyConnection: TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyConnection;
  TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyEdge: TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyEdge;
  TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyConnection: TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyConnection;
  TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyEdge: TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyEdge;
  TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyConnection: TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyConnection;
  TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyEdge: TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyEdge;
  TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyConnection: TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyConnection;
  TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyEdge: TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyEdge;
  TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyConnection: TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyConnection;
  TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyEdge: TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyEdge;
  TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyConnection: TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyConnection;
  TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyEdge: TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyEdge;
  TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyConnection: TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyConnection;
  TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyEdge: TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyEdge;
  TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyConnection: TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyConnection;
  TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyEdge: TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyEdge;
  TokenCallsByTransferTokenIdAndCallIdManyToManyConnection: TokenCallsByTransferTokenIdAndCallIdManyToManyConnection;
  TokenCallsByTransferTokenIdAndCallIdManyToManyEdge: TokenCallsByTransferTokenIdAndCallIdManyToManyEdge;
  TokenDayDataConnection: TokenDayDataConnection;
  TokenDayDataEdge: TokenDayDataEdge;
  TokenDayDatum: TokenDayDatum;
  TokenDayDatumFilter: TokenDayDatumFilter;
  TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyConnection: TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyConnection;
  TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyEdge: TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyEdge;
  TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyConnection: TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyConnection;
  TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyEdge: TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyEdge;
  TokenExtrinsicsByTransferTokenIdAndExtrinsicIdManyToManyConnection: TokenExtrinsicsByTransferTokenIdAndExtrinsicIdManyToManyConnection;
  TokenExtrinsicsByTransferTokenIdAndExtrinsicIdManyToManyEdge: TokenExtrinsicsByTransferTokenIdAndExtrinsicIdManyToManyEdge;
  TokenFilter: TokenFilter;
  TokenPoolsByDexActionToken0IdAndPoolIdManyToManyConnection: TokenPoolsByDexActionToken0IdAndPoolIdManyToManyConnection;
  TokenPoolsByDexActionToken0IdAndPoolIdManyToManyEdge: TokenPoolsByDexActionToken0IdAndPoolIdManyToManyEdge;
  TokenPoolsByDexActionToken1IdAndPoolIdManyToManyConnection: TokenPoolsByDexActionToken1IdAndPoolIdManyToManyConnection;
  TokenPoolsByDexActionToken1IdAndPoolIdManyToManyEdge: TokenPoolsByDexActionToken1IdAndPoolIdManyToManyEdge;
  TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyConnection: TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyConnection;
  TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyEdge: TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyEdge;
  TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyConnection: TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyConnection;
  TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyEdge: TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyEdge;
  TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyConnection: TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyConnection;
  TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyEdge: TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyEdge;
  TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyConnection: TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyConnection;
  TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyEdge: TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyEdge;
  TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyConnection: TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyConnection;
  TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyEdge: TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyEdge;
  TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyConnection: TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyConnection;
  TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyEdge: TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyEdge;
  TokenTokensByDexActionToken0IdAndToken1IdManyToManyConnection: TokenTokensByDexActionToken0IdAndToken1IdManyToManyConnection;
  TokenTokensByDexActionToken0IdAndToken1IdManyToManyEdge: TokenTokensByDexActionToken0IdAndToken1IdManyToManyEdge;
  TokenTokensByDexActionToken1IdAndToken0IdManyToManyConnection: TokenTokensByDexActionToken1IdAndToken0IdManyToManyConnection;
  TokenTokensByDexActionToken1IdAndToken0IdManyToManyEdge: TokenTokensByDexActionToken1IdAndToken0IdManyToManyEdge;
  TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyConnection: TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyConnection;
  TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyEdge: TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyEdge;
  TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyConnection: TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyConnection;
  TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyEdge: TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyEdge;
  TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyConnection: TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyConnection;
  TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyEdge: TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyEdge;
  TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyConnection: TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyConnection;
  TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyEdge: TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyEdge;
  TokenTokensByPoolToken0IdAndToken1IdManyToManyConnection: TokenTokensByPoolToken0IdAndToken1IdManyToManyConnection;
  TokenTokensByPoolToken0IdAndToken1IdManyToManyEdge: TokenTokensByPoolToken0IdAndToken1IdManyToManyEdge;
  TokenTokensByPoolToken1IdAndToken0IdManyToManyConnection: TokenTokensByPoolToken1IdAndToken0IdManyToManyConnection;
  TokenTokensByPoolToken1IdAndToken0IdManyToManyEdge: TokenTokensByPoolToken1IdAndToken0IdManyToManyEdge;
  TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyConnection: TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyConnection;
  TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyEdge: TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyEdge;
  TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyConnection: TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyConnection;
  TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyEdge: TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyEdge;
  TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyConnection: TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyConnection;
  TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyEdge: TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyEdge;
  TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyConnection: TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyConnection;
  TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyEdge: TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyEdge;
  TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyConnection: TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyConnection;
  TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyEdge: TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyEdge;
  TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyConnection: TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyConnection;
  TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyEdge: TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyEdge;
  TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyConnection: TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyConnection;
  TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyEdge: TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyEdge;
  TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyConnection: TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyConnection;
  TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyEdge: TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyEdge;
  TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyConnection: TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyConnection;
  TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyEdge: TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyEdge;
  TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyConnection: TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyConnection;
  TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyEdge: TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyEdge;
  TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyConnection: TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyConnection;
  TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyEdge: TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyEdge;
  TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyConnection: TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyConnection;
  TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyEdge: TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyEdge;
  TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyConnection: TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyConnection;
  TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyEdge: TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyEdge;
  TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyConnection: TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyConnection;
  TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyEdge: TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyEdge;
  TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyConnection: TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyConnection;
  TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyEdge: TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyEdge;
  TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyConnection: TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyConnection;
  TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyEdge: TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyEdge;
  TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyConnection: TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyConnection;
  TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyEdge: TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyEdge;
  TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyConnection: TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyConnection;
  TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyEdge: TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyEdge;
  TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyConnection: TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyConnection;
  TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyEdge: TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyEdge;
  TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyConnection: TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyConnection;
  TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyEdge: TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyEdge;
  TokensConnection: TokensConnection;
  TokensEdge: TokensEdge;
  TotalLoanPosition: TotalLoanPosition;
  TotalLoanPositionFilter: TotalLoanPositionFilter;
  TotalLoanPositionsConnection: TotalLoanPositionsConnection;
  TotalLoanPositionsEdge: TotalLoanPositionsEdge;
  Transfer: Transfer;
  TransferFilter: TransferFilter;
  TransfersConnection: TransfersConnection;
  TransfersEdge: TransfersEdge;
  UserProvision: UserProvision;
  UserProvisionFilter: UserProvisionFilter;
  UserProvisionsConnection: UserProvisionsConnection;
  UserProvisionsEdge: UserProvisionsEdge;
  _Metadata: _Metadata;
}>;

export type AccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = ResolversObject<{
  accountsByTransferFromIdAndToId?: Resolver<ResolversTypes['AccountAccountsByTransferFromIdAndToIdManyToManyConnection'], ParentType, ContextType, RequireFields<AccountAccountsByTransferFromIdAndToIdArgs, 'orderBy'>>;
  accountsByTransferToIdAndFromId?: Resolver<ResolversTypes['AccountAccountsByTransferToIdAndFromIdManyToManyConnection'], ParentType, ContextType, RequireFields<AccountAccountsByTransferToIdAndFromIdArgs, 'orderBy'>>;
  blocksByExtrinsicSignerIdAndBlockId?: Resolver<ResolversTypes['AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyConnection'], ParentType, ContextType, RequireFields<AccountBlocksByExtrinsicSignerIdAndBlockIdArgs, 'orderBy'>>;
  blocksByOracleFeedRecordAccountIdAndBlockId?: Resolver<ResolversTypes['AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyConnection'], ParentType, ContextType, RequireFields<AccountBlocksByOracleFeedRecordAccountIdAndBlockIdArgs, 'orderBy'>>;
  calls?: Resolver<ResolversTypes['CallsConnection'], ParentType, ContextType, RequireFields<AccountCallsArgs, 'orderBy'>>;
  callsByCallSignerIdAndParentCallId?: Resolver<ResolversTypes['AccountCallsByCallSignerIdAndParentCallIdManyToManyConnection'], ParentType, ContextType, RequireFields<AccountCallsByCallSignerIdAndParentCallIdArgs, 'orderBy'>>;
  callsByTransferFromIdAndCallId?: Resolver<ResolversTypes['AccountCallsByTransferFromIdAndCallIdManyToManyConnection'], ParentType, ContextType, RequireFields<AccountCallsByTransferFromIdAndCallIdArgs, 'orderBy'>>;
  callsByTransferToIdAndCallId?: Resolver<ResolversTypes['AccountCallsByTransferToIdAndCallIdManyToManyConnection'], ParentType, ContextType, RequireFields<AccountCallsByTransferToIdAndCallIdArgs, 'orderBy'>>;
  createAtBlock?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  createAtBlockId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dexActions?: Resolver<ResolversTypes['DexActionsConnection'], ParentType, ContextType, RequireFields<AccountDexActionsArgs, 'orderBy'>>;
  extrinsics?: Resolver<ResolversTypes['ExtrinsicsConnection'], ParentType, ContextType, RequireFields<AccountExtrinsicsArgs, 'orderBy'>>;
  extrinsicsByCallSignerIdAndExtrinsicId?: Resolver<ResolversTypes['AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyConnection'], ParentType, ContextType, RequireFields<AccountExtrinsicsByCallSignerIdAndExtrinsicIdArgs, 'orderBy'>>;
  extrinsicsByDexActionAccountIdAndExtrinsicId?: Resolver<ResolversTypes['AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyConnection'], ParentType, ContextType, RequireFields<AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdArgs, 'orderBy'>>;
  extrinsicsByHomaActionAccountIdAndExtrinsicId?: Resolver<ResolversTypes['AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyConnection'], ParentType, ContextType, RequireFields<AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdArgs, 'orderBy'>>;
  extrinsicsByIncentiveActionAccountIdAndExtrinsicId?: Resolver<ResolversTypes['AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyConnection'], ParentType, ContextType, RequireFields<AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdArgs, 'orderBy'>>;
  extrinsicsByLoanActionAccountIdAndExtrinsicId?: Resolver<ResolversTypes['AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyConnection'], ParentType, ContextType, RequireFields<AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdArgs, 'orderBy'>>;
  extrinsicsByNFTActionAccountIdAndExtrinsicId?: Resolver<ResolversTypes['AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyConnection'], ParentType, ContextType, RequireFields<AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdArgs, 'orderBy'>>;
  extrinsicsByTransferFromIdAndExtrinsicId?: Resolver<ResolversTypes['AccountExtrinsicsByTransferFromIdAndExtrinsicIdManyToManyConnection'], ParentType, ContextType, RequireFields<AccountExtrinsicsByTransferFromIdAndExtrinsicIdArgs, 'orderBy'>>;
  extrinsicsByTransferToIdAndExtrinsicId?: Resolver<ResolversTypes['AccountExtrinsicsByTransferToIdAndExtrinsicIdManyToManyConnection'], ParentType, ContextType, RequireFields<AccountExtrinsicsByTransferToIdAndExtrinsicIdArgs, 'orderBy'>>;
  homaActions?: Resolver<ResolversTypes['HomaActionsConnection'], ParentType, ContextType, RequireFields<AccountHomaActionsArgs, 'orderBy'>>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  incentiveActions?: Resolver<ResolversTypes['IncentiveActionsConnection'], ParentType, ContextType, RequireFields<AccountIncentiveActionsArgs, 'orderBy'>>;
  loanActions?: Resolver<ResolversTypes['LoanActionsConnection'], ParentType, ContextType, RequireFields<AccountLoanActionsArgs, 'orderBy'>>;
  nFTActions?: Resolver<ResolversTypes['NftActionsConnection'], ParentType, ContextType, RequireFields<AccountNFtActionsArgs, 'orderBy'>>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  oracleFeedRecords?: Resolver<ResolversTypes['OracleFeedRecordsConnection'], ParentType, ContextType, RequireFields<AccountOracleFeedRecordsArgs, 'orderBy'>>;
  poolsByDexActionAccountIdAndPoolId?: Resolver<ResolversTypes['AccountPoolsByDexActionAccountIdAndPoolIdManyToManyConnection'], ParentType, ContextType, RequireFields<AccountPoolsByDexActionAccountIdAndPoolIdArgs, 'orderBy'>>;
  position?: Resolver<ResolversTypes['LoanPositionsConnection'], ParentType, ContextType, RequireFields<AccountPositionArgs, 'orderBy'>>;
  tokensByDexActionAccountIdAndToken0Id?: Resolver<ResolversTypes['AccountTokensByDexActionAccountIdAndToken0IdManyToManyConnection'], ParentType, ContextType, RequireFields<AccountTokensByDexActionAccountIdAndToken0IdArgs, 'orderBy'>>;
  tokensByDexActionAccountIdAndToken1Id?: Resolver<ResolversTypes['AccountTokensByDexActionAccountIdAndToken1IdManyToManyConnection'], ParentType, ContextType, RequireFields<AccountTokensByDexActionAccountIdAndToken1IdArgs, 'orderBy'>>;
  tokensByLoanPositionOwnerIdAndCollateralId?: Resolver<ResolversTypes['AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyConnection'], ParentType, ContextType, RequireFields<AccountTokensByLoanPositionOwnerIdAndCollateralIdArgs, 'orderBy'>>;
  tokensByOracleFeedRecordAccountIdAndTokenId?: Resolver<ResolversTypes['AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyConnection'], ParentType, ContextType, RequireFields<AccountTokensByOracleFeedRecordAccountIdAndTokenIdArgs, 'orderBy'>>;
  tokensByTransferFromIdAndTokenId?: Resolver<ResolversTypes['AccountTokensByTransferFromIdAndTokenIdManyToManyConnection'], ParentType, ContextType, RequireFields<AccountTokensByTransferFromIdAndTokenIdArgs, 'orderBy'>>;
  tokensByTransferToIdAndTokenId?: Resolver<ResolversTypes['AccountTokensByTransferToIdAndTokenIdManyToManyConnection'], ParentType, ContextType, RequireFields<AccountTokensByTransferToIdAndTokenIdArgs, 'orderBy'>>;
  transferIn?: Resolver<ResolversTypes['TransfersConnection'], ParentType, ContextType, RequireFields<AccountTransferInArgs, 'orderBy'>>;
  transferOut?: Resolver<ResolversTypes['TransfersConnection'], ParentType, ContextType, RequireFields<AccountTransferOutArgs, 'orderBy'>>;
  txCount?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountAccountsByTransferFromIdAndToIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountAccountsByTransferFromIdAndToIdManyToManyConnection'] = ResolversParentTypes['AccountAccountsByTransferFromIdAndToIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['AccountAccountsByTransferFromIdAndToIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Account']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountAccountsByTransferFromIdAndToIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountAccountsByTransferFromIdAndToIdManyToManyEdge'] = ResolversParentTypes['AccountAccountsByTransferFromIdAndToIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  transferIn?: Resolver<ResolversTypes['TransfersConnection'], ParentType, ContextType, RequireFields<AccountAccountsByTransferFromIdAndToIdManyToManyEdgeTransferInArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountAccountsByTransferToIdAndFromIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountAccountsByTransferToIdAndFromIdManyToManyConnection'] = ResolversParentTypes['AccountAccountsByTransferToIdAndFromIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['AccountAccountsByTransferToIdAndFromIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Account']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountAccountsByTransferToIdAndFromIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountAccountsByTransferToIdAndFromIdManyToManyEdge'] = ResolversParentTypes['AccountAccountsByTransferToIdAndFromIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  transferOut?: Resolver<ResolversTypes['TransfersConnection'], ParentType, ContextType, RequireFields<AccountAccountsByTransferToIdAndFromIdManyToManyEdgeTransferOutArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyConnection'] = ResolversParentTypes['AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Block']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyEdge'] = ResolversParentTypes['AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  extrinsics?: Resolver<ResolversTypes['ExtrinsicsConnection'], ParentType, ContextType, RequireFields<AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyEdgeExtrinsicsArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyConnection'] = ResolversParentTypes['AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Block']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyEdge'] = ResolversParentTypes['AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  oracleFeedRecords?: Resolver<ResolversTypes['OracleFeedRecordsConnection'], ParentType, ContextType, RequireFields<AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyEdgeOracleFeedRecordsArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountCallsByCallSignerIdAndParentCallIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountCallsByCallSignerIdAndParentCallIdManyToManyConnection'] = ResolversParentTypes['AccountCallsByCallSignerIdAndParentCallIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['AccountCallsByCallSignerIdAndParentCallIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Call']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountCallsByCallSignerIdAndParentCallIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountCallsByCallSignerIdAndParentCallIdManyToManyEdge'] = ResolversParentTypes['AccountCallsByCallSignerIdAndParentCallIdManyToManyEdge']> = ResolversObject<{
  calls?: Resolver<ResolversTypes['CallsConnection'], ParentType, ContextType, RequireFields<AccountCallsByCallSignerIdAndParentCallIdManyToManyEdgeCallsArgs, 'orderBy'>>;
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Call']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountCallsByTransferFromIdAndCallIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountCallsByTransferFromIdAndCallIdManyToManyConnection'] = ResolversParentTypes['AccountCallsByTransferFromIdAndCallIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['AccountCallsByTransferFromIdAndCallIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Call']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountCallsByTransferFromIdAndCallIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountCallsByTransferFromIdAndCallIdManyToManyEdge'] = ResolversParentTypes['AccountCallsByTransferFromIdAndCallIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Call']>, ParentType, ContextType>;
  transfers?: Resolver<ResolversTypes['TransfersConnection'], ParentType, ContextType, RequireFields<AccountCallsByTransferFromIdAndCallIdManyToManyEdgeTransfersArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountCallsByTransferToIdAndCallIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountCallsByTransferToIdAndCallIdManyToManyConnection'] = ResolversParentTypes['AccountCallsByTransferToIdAndCallIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['AccountCallsByTransferToIdAndCallIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Call']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountCallsByTransferToIdAndCallIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountCallsByTransferToIdAndCallIdManyToManyEdge'] = ResolversParentTypes['AccountCallsByTransferToIdAndCallIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Call']>, ParentType, ContextType>;
  transfers?: Resolver<ResolversTypes['TransfersConnection'], ParentType, ContextType, RequireFields<AccountCallsByTransferToIdAndCallIdManyToManyEdgeTransfersArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyConnection'] = ResolversParentTypes['AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Extrinsic']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyEdge'] = ResolversParentTypes['AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyEdge']> = ResolversObject<{
  calls?: Resolver<ResolversTypes['CallsConnection'], ParentType, ContextType, RequireFields<AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyEdgeCallsArgs, 'orderBy'>>;
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Extrinsic']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyConnection'] = ResolversParentTypes['AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Extrinsic']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyEdge'] = ResolversParentTypes['AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  dexActions?: Resolver<ResolversTypes['DexActionsConnection'], ParentType, ContextType, RequireFields<AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyEdgeDexActionsArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Extrinsic']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyConnection'] = ResolversParentTypes['AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Extrinsic']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyEdge'] = ResolversParentTypes['AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  homaActions?: Resolver<ResolversTypes['HomaActionsConnection'], ParentType, ContextType, RequireFields<AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyEdgeHomaActionsArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Extrinsic']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyConnection'] = ResolversParentTypes['AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Extrinsic']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyEdge'] = ResolversParentTypes['AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  incentiveActions?: Resolver<ResolversTypes['IncentiveActionsConnection'], ParentType, ContextType, RequireFields<AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyEdgeIncentiveActionsArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Extrinsic']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyConnection'] = ResolversParentTypes['AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Extrinsic']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyEdge'] = ResolversParentTypes['AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  loanActions?: Resolver<ResolversTypes['LoanActionsConnection'], ParentType, ContextType, RequireFields<AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyEdgeLoanActionsArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Extrinsic']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyConnection'] = ResolversParentTypes['AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Extrinsic']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyEdge'] = ResolversParentTypes['AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  nFTActions?: Resolver<ResolversTypes['NftActionsConnection'], ParentType, ContextType, RequireFields<AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyEdgeNFtActionsArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Extrinsic']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountExtrinsicsByTransferFromIdAndExtrinsicIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountExtrinsicsByTransferFromIdAndExtrinsicIdManyToManyConnection'] = ResolversParentTypes['AccountExtrinsicsByTransferFromIdAndExtrinsicIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['AccountExtrinsicsByTransferFromIdAndExtrinsicIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Extrinsic']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountExtrinsicsByTransferFromIdAndExtrinsicIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountExtrinsicsByTransferFromIdAndExtrinsicIdManyToManyEdge'] = ResolversParentTypes['AccountExtrinsicsByTransferFromIdAndExtrinsicIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Extrinsic']>, ParentType, ContextType>;
  transfers?: Resolver<ResolversTypes['TransfersConnection'], ParentType, ContextType, RequireFields<AccountExtrinsicsByTransferFromIdAndExtrinsicIdManyToManyEdgeTransfersArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountExtrinsicsByTransferToIdAndExtrinsicIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountExtrinsicsByTransferToIdAndExtrinsicIdManyToManyConnection'] = ResolversParentTypes['AccountExtrinsicsByTransferToIdAndExtrinsicIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['AccountExtrinsicsByTransferToIdAndExtrinsicIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Extrinsic']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountExtrinsicsByTransferToIdAndExtrinsicIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountExtrinsicsByTransferToIdAndExtrinsicIdManyToManyEdge'] = ResolversParentTypes['AccountExtrinsicsByTransferToIdAndExtrinsicIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Extrinsic']>, ParentType, ContextType>;
  transfers?: Resolver<ResolversTypes['TransfersConnection'], ParentType, ContextType, RequireFields<AccountExtrinsicsByTransferToIdAndExtrinsicIdManyToManyEdgeTransfersArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountPoolsByDexActionAccountIdAndPoolIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountPoolsByDexActionAccountIdAndPoolIdManyToManyConnection'] = ResolversParentTypes['AccountPoolsByDexActionAccountIdAndPoolIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['AccountPoolsByDexActionAccountIdAndPoolIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Pool']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountPoolsByDexActionAccountIdAndPoolIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountPoolsByDexActionAccountIdAndPoolIdManyToManyEdge'] = ResolversParentTypes['AccountPoolsByDexActionAccountIdAndPoolIdManyToManyEdge']> = ResolversObject<{
  actions?: Resolver<ResolversTypes['DexActionsConnection'], ParentType, ContextType, RequireFields<AccountPoolsByDexActionAccountIdAndPoolIdManyToManyEdgeActionsArgs, 'orderBy'>>;
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Pool']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountTokensByDexActionAccountIdAndToken0IdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountTokensByDexActionAccountIdAndToken0IdManyToManyConnection'] = ResolversParentTypes['AccountTokensByDexActionAccountIdAndToken0IdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['AccountTokensByDexActionAccountIdAndToken0IdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountTokensByDexActionAccountIdAndToken0IdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountTokensByDexActionAccountIdAndToken0IdManyToManyEdge'] = ResolversParentTypes['AccountTokensByDexActionAccountIdAndToken0IdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  dexActionsByToken0Id?: Resolver<ResolversTypes['DexActionsConnection'], ParentType, ContextType, RequireFields<AccountTokensByDexActionAccountIdAndToken0IdManyToManyEdgeDexActionsByToken0IdArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountTokensByDexActionAccountIdAndToken1IdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountTokensByDexActionAccountIdAndToken1IdManyToManyConnection'] = ResolversParentTypes['AccountTokensByDexActionAccountIdAndToken1IdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['AccountTokensByDexActionAccountIdAndToken1IdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountTokensByDexActionAccountIdAndToken1IdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountTokensByDexActionAccountIdAndToken1IdManyToManyEdge'] = ResolversParentTypes['AccountTokensByDexActionAccountIdAndToken1IdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  dexActionsByToken1Id?: Resolver<ResolversTypes['DexActionsConnection'], ParentType, ContextType, RequireFields<AccountTokensByDexActionAccountIdAndToken1IdManyToManyEdgeDexActionsByToken1IdArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyConnection'] = ResolversParentTypes['AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyEdge'] = ResolversParentTypes['AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  loanPositionsByCollateralId?: Resolver<ResolversTypes['LoanPositionsConnection'], ParentType, ContextType, RequireFields<AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyEdgeLoanPositionsByCollateralIdArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyConnection'] = ResolversParentTypes['AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyEdge'] = ResolversParentTypes['AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  oracleFeedRecords?: Resolver<ResolversTypes['OracleFeedRecordsConnection'], ParentType, ContextType, RequireFields<AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyEdgeOracleFeedRecordsArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountTokensByTransferFromIdAndTokenIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountTokensByTransferFromIdAndTokenIdManyToManyConnection'] = ResolversParentTypes['AccountTokensByTransferFromIdAndTokenIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['AccountTokensByTransferFromIdAndTokenIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountTokensByTransferFromIdAndTokenIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountTokensByTransferFromIdAndTokenIdManyToManyEdge'] = ResolversParentTypes['AccountTokensByTransferFromIdAndTokenIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  transfers?: Resolver<ResolversTypes['TransfersConnection'], ParentType, ContextType, RequireFields<AccountTokensByTransferFromIdAndTokenIdManyToManyEdgeTransfersArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountTokensByTransferToIdAndTokenIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountTokensByTransferToIdAndTokenIdManyToManyConnection'] = ResolversParentTypes['AccountTokensByTransferToIdAndTokenIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['AccountTokensByTransferToIdAndTokenIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountTokensByTransferToIdAndTokenIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountTokensByTransferToIdAndTokenIdManyToManyEdge'] = ResolversParentTypes['AccountTokensByTransferToIdAndTokenIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  transfers?: Resolver<ResolversTypes['TransfersConnection'], ParentType, ContextType, RequireFields<AccountTokensByTransferToIdAndTokenIdManyToManyEdgeTransfersArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountsConnection'] = ResolversParentTypes['AccountsConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['AccountsEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Account']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountsEdge'] = ResolversParentTypes['AccountsEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigFloat'], any> {
  name: 'BigFloat';
}

export type BlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['Block'] = ResolversParentTypes['Block']> = ResolversObject<{
  accountsByCreateAtBlockId?: Resolver<ResolversTypes['AccountsConnection'], ParentType, ContextType, RequireFields<BlockAccountsByCreateAtBlockIdArgs, 'orderBy'>>;
  accountsByExtrinsicBlockIdAndSignerId?: Resolver<ResolversTypes['BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyConnection'], ParentType, ContextType, RequireFields<BlockAccountsByExtrinsicBlockIdAndSignerIdArgs, 'orderBy'>>;
  accountsByOracleFeedRecordBlockIdAndAccountId?: Resolver<ResolversTypes['BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyConnection'], ParentType, ContextType, RequireFields<BlockAccountsByOracleFeedRecordBlockIdAndAccountIdArgs, 'orderBy'>>;
  blocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockId?: Resolver<ResolversTypes['BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyConnection'], ParentType, ContextType, RequireFields<BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdArgs, 'orderBy'>>;
  blocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockId?: Resolver<ResolversTypes['BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyConnection'], ParentType, ContextType, RequireFields<BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdArgs, 'orderBy'>>;
  blocksByProvisionPoolEndAtBlockIdAndStartAtBlockId?: Resolver<ResolversTypes['BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyConnection'], ParentType, ContextType, RequireFields<BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdArgs, 'orderBy'>>;
  blocksByProvisionPoolStartAtBlockIdAndEndAtBlockId?: Resolver<ResolversTypes['BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyConnection'], ParentType, ContextType, RequireFields<BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdArgs, 'orderBy'>>;
  events?: Resolver<ResolversTypes['EventsConnection'], ParentType, ContextType, RequireFields<BlockEventsArgs, 'orderBy'>>;
  extrinsicRoot?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extrinsics?: Resolver<ResolversTypes['ExtrinsicsConnection'], ParentType, ContextType, RequireFields<BlockExtrinsicsArgs, 'orderBy'>>;
  extrinsicsByEventBlockIdAndExtrinsicId?: Resolver<ResolversTypes['BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyConnection'], ParentType, ContextType, RequireFields<BlockExtrinsicsByEventBlockIdAndExtrinsicIdArgs, 'orderBy'>>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  loanParamsByStartAtBlockId?: Resolver<ResolversTypes['LoanParamsConnection'], ParentType, ContextType, RequireFields<BlockLoanParamsByStartAtBlockIdArgs, 'orderBy'>>;
  loanParamsHistoriesByEndAtBlockId?: Resolver<ResolversTypes['LoanParamsHistoriesConnection'], ParentType, ContextType, RequireFields<BlockLoanParamsHistoriesByEndAtBlockIdArgs, 'orderBy'>>;
  loanParamsHistoriesByStartAtBlockId?: Resolver<ResolversTypes['LoanParamsHistoriesConnection'], ParentType, ContextType, RequireFields<BlockLoanParamsHistoriesByStartAtBlockIdArgs, 'orderBy'>>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  oracleFeedRecords?: Resolver<ResolversTypes['OracleFeedRecordsConnection'], ParentType, ContextType, RequireFields<BlockOracleFeedRecordsArgs, 'orderBy'>>;
  parentHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provisionPoolsByEndAtBlockId?: Resolver<ResolversTypes['ProvisionPoolsConnection'], ParentType, ContextType, RequireFields<BlockProvisionPoolsByEndAtBlockIdArgs, 'orderBy'>>;
  provisionPoolsByStartAtBlockId?: Resolver<ResolversTypes['ProvisionPoolsConnection'], ParentType, ContextType, RequireFields<BlockProvisionPoolsByStartAtBlockIdArgs, 'orderBy'>>;
  specVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stateRoot?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  tokensByLoanParamStartAtBlockIdAndCollateralId?: Resolver<ResolversTypes['BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyConnection'], ParentType, ContextType, RequireFields<BlockTokensByLoanParamStartAtBlockIdAndCollateralIdArgs, 'orderBy'>>;
  tokensByLoanParamsHistoryEndAtBlockIdAndCollateralId?: Resolver<ResolversTypes['BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyConnection'], ParentType, ContextType, RequireFields<BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdArgs, 'orderBy'>>;
  tokensByLoanParamsHistoryStartAtBlockIdAndCollateralId?: Resolver<ResolversTypes['BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyConnection'], ParentType, ContextType, RequireFields<BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdArgs, 'orderBy'>>;
  tokensByOracleFeedRecordBlockIdAndTokenId?: Resolver<ResolversTypes['BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyConnection'], ParentType, ContextType, RequireFields<BlockTokensByOracleFeedRecordBlockIdAndTokenIdArgs, 'orderBy'>>;
  tokensByProvisionPoolEndAtBlockIdAndPoolTokenId?: Resolver<ResolversTypes['BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyConnection'], ParentType, ContextType, RequireFields<BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdArgs, 'orderBy'>>;
  tokensByProvisionPoolEndAtBlockIdAndToken0Id?: Resolver<ResolversTypes['BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyConnection'], ParentType, ContextType, RequireFields<BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdArgs, 'orderBy'>>;
  tokensByProvisionPoolEndAtBlockIdAndToken1Id?: Resolver<ResolversTypes['BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyConnection'], ParentType, ContextType, RequireFields<BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdArgs, 'orderBy'>>;
  tokensByProvisionPoolStartAtBlockIdAndPoolTokenId?: Resolver<ResolversTypes['BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyConnection'], ParentType, ContextType, RequireFields<BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdArgs, 'orderBy'>>;
  tokensByProvisionPoolStartAtBlockIdAndToken0Id?: Resolver<ResolversTypes['BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyConnection'], ParentType, ContextType, RequireFields<BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdArgs, 'orderBy'>>;
  tokensByProvisionPoolStartAtBlockIdAndToken1Id?: Resolver<ResolversTypes['BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyConnection'], ParentType, ContextType, RequireFields<BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyConnection'] = ResolversParentTypes['BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Account']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyEdge'] = ResolversParentTypes['BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  extrinsics?: Resolver<ResolversTypes['ExtrinsicsConnection'], ParentType, ContextType, RequireFields<BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyEdgeExtrinsicsArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyConnection'] = ResolversParentTypes['BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Account']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyEdge'] = ResolversParentTypes['BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  oracleFeedRecords?: Resolver<ResolversTypes['OracleFeedRecordsConnection'], ParentType, ContextType, RequireFields<BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyEdgeOracleFeedRecordsArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyConnection'] = ResolversParentTypes['BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Block']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyEdge'] = ResolversParentTypes['BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  loanParamsHistoriesByStartAtBlockId?: Resolver<ResolversTypes['LoanParamsHistoriesConnection'], ParentType, ContextType, RequireFields<BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyEdgeLoanParamsHistoriesByStartAtBlockIdArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyConnection'] = ResolversParentTypes['BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Block']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyEdge'] = ResolversParentTypes['BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  loanParamsHistoriesByEndAtBlockId?: Resolver<ResolversTypes['LoanParamsHistoriesConnection'], ParentType, ContextType, RequireFields<BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyEdgeLoanParamsHistoriesByEndAtBlockIdArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyConnection'] = ResolversParentTypes['BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Block']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyEdge'] = ResolversParentTypes['BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  provisionPoolsByStartAtBlockId?: Resolver<ResolversTypes['ProvisionPoolsConnection'], ParentType, ContextType, RequireFields<BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyEdgeProvisionPoolsByStartAtBlockIdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyConnection'] = ResolversParentTypes['BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Block']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyEdge'] = ResolversParentTypes['BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  provisionPoolsByEndAtBlockId?: Resolver<ResolversTypes['ProvisionPoolsConnection'], ParentType, ContextType, RequireFields<BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyEdgeProvisionPoolsByEndAtBlockIdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyConnection'] = ResolversParentTypes['BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Extrinsic']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyEdge'] = ResolversParentTypes['BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  events?: Resolver<ResolversTypes['EventsConnection'], ParentType, ContextType, RequireFields<BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyEdgeEventsArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Extrinsic']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyConnection'] = ResolversParentTypes['BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyEdge'] = ResolversParentTypes['BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  loanParamsByCollateralId?: Resolver<ResolversTypes['LoanParamsConnection'], ParentType, ContextType, RequireFields<BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyEdgeLoanParamsByCollateralIdArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyConnection'] = ResolversParentTypes['BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyEdge'] = ResolversParentTypes['BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  loanParamsHistoriesByCollateralId?: Resolver<ResolversTypes['LoanParamsHistoriesConnection'], ParentType, ContextType, RequireFields<BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyEdgeLoanParamsHistoriesByCollateralIdArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyConnection'] = ResolversParentTypes['BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyEdge'] = ResolversParentTypes['BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  loanParamsHistoriesByCollateralId?: Resolver<ResolversTypes['LoanParamsHistoriesConnection'], ParentType, ContextType, RequireFields<BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyEdgeLoanParamsHistoriesByCollateralIdArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyConnection'] = ResolversParentTypes['BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyEdge'] = ResolversParentTypes['BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  oracleFeedRecords?: Resolver<ResolversTypes['OracleFeedRecordsConnection'], ParentType, ContextType, RequireFields<BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyEdgeOracleFeedRecordsArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyConnection'] = ResolversParentTypes['BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyEdge'] = ResolversParentTypes['BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  provisionPoolsByPoolTokenId?: Resolver<ResolversTypes['ProvisionPoolsConnection'], ParentType, ContextType, RequireFields<BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyEdgeProvisionPoolsByPoolTokenIdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyConnection'] = ResolversParentTypes['BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyEdge'] = ResolversParentTypes['BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  provisionPoolsByToken0Id?: Resolver<ResolversTypes['ProvisionPoolsConnection'], ParentType, ContextType, RequireFields<BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyEdgeProvisionPoolsByToken0IdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyConnection'] = ResolversParentTypes['BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyEdge'] = ResolversParentTypes['BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  provisionPoolsByToken1Id?: Resolver<ResolversTypes['ProvisionPoolsConnection'], ParentType, ContextType, RequireFields<BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyEdgeProvisionPoolsByToken1IdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyConnection'] = ResolversParentTypes['BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyEdge'] = ResolversParentTypes['BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  provisionPoolsByPoolTokenId?: Resolver<ResolversTypes['ProvisionPoolsConnection'], ParentType, ContextType, RequireFields<BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyEdgeProvisionPoolsByPoolTokenIdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyConnection'] = ResolversParentTypes['BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyEdge'] = ResolversParentTypes['BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  provisionPoolsByToken0Id?: Resolver<ResolversTypes['ProvisionPoolsConnection'], ParentType, ContextType, RequireFields<BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyEdgeProvisionPoolsByToken0IdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyConnection'] = ResolversParentTypes['BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyEdge'] = ResolversParentTypes['BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  provisionPoolsByToken1Id?: Resolver<ResolversTypes['ProvisionPoolsConnection'], ParentType, ContextType, RequireFields<BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyEdgeProvisionPoolsByToken1IdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlocksConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlocksConnection'] = ResolversParentTypes['BlocksConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['BlocksEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Block']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlocksEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlocksEdge'] = ResolversParentTypes['BlocksEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CallResolvers<ContextType = any, ParentType extends ResolversParentTypes['Call'] = ResolversParentTypes['Call']> = ResolversObject<{
  accountsByCallParentCallIdAndSignerId?: Resolver<ResolversTypes['CallAccountsByCallParentCallIdAndSignerIdManyToManyConnection'], ParentType, ContextType, RequireFields<CallAccountsByCallParentCallIdAndSignerIdArgs, 'orderBy'>>;
  accountsByTransferCallIdAndFromId?: Resolver<ResolversTypes['CallAccountsByTransferCallIdAndFromIdManyToManyConnection'], ParentType, ContextType, RequireFields<CallAccountsByTransferCallIdAndFromIdArgs, 'orderBy'>>;
  accountsByTransferCallIdAndToId?: Resolver<ResolversTypes['CallAccountsByTransferCallIdAndToIdManyToManyConnection'], ParentType, ContextType, RequireFields<CallAccountsByTransferCallIdAndToIdArgs, 'orderBy'>>;
  args?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  calls?: Resolver<ResolversTypes['CallsConnection'], ParentType, ContextType, RequireFields<CallCallsArgs, 'orderBy'>>;
  extrinsic?: Resolver<Maybe<ResolversTypes['Extrinsic']>, ParentType, ContextType>;
  extrinsicId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extrinsicsByCallParentCallIdAndExtrinsicId?: Resolver<ResolversTypes['CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyConnection'], ParentType, ContextType, RequireFields<CallExtrinsicsByCallParentCallIdAndExtrinsicIdArgs, 'orderBy'>>;
  extrinsicsByTransferCallIdAndExtrinsicId?: Resolver<ResolversTypes['CallExtrinsicsByTransferCallIdAndExtrinsicIdManyToManyConnection'], ParentType, ContextType, RequireFields<CallExtrinsicsByTransferCallIdAndExtrinsicIdArgs, 'orderBy'>>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isSuccess?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  method?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parentCall?: Resolver<Maybe<ResolversTypes['Call']>, ParentType, ContextType>;
  parentCallId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  section?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  signer?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  signerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  tokensByTransferCallIdAndTokenId?: Resolver<ResolversTypes['CallTokensByTransferCallIdAndTokenIdManyToManyConnection'], ParentType, ContextType, RequireFields<CallTokensByTransferCallIdAndTokenIdArgs, 'orderBy'>>;
  transfers?: Resolver<ResolversTypes['TransfersConnection'], ParentType, ContextType, RequireFields<CallTransfersArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CallAccountsByCallParentCallIdAndSignerIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CallAccountsByCallParentCallIdAndSignerIdManyToManyConnection'] = ResolversParentTypes['CallAccountsByCallParentCallIdAndSignerIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['CallAccountsByCallParentCallIdAndSignerIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Account']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CallAccountsByCallParentCallIdAndSignerIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CallAccountsByCallParentCallIdAndSignerIdManyToManyEdge'] = ResolversParentTypes['CallAccountsByCallParentCallIdAndSignerIdManyToManyEdge']> = ResolversObject<{
  calls?: Resolver<ResolversTypes['CallsConnection'], ParentType, ContextType, RequireFields<CallAccountsByCallParentCallIdAndSignerIdManyToManyEdgeCallsArgs, 'orderBy'>>;
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CallAccountsByTransferCallIdAndFromIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CallAccountsByTransferCallIdAndFromIdManyToManyConnection'] = ResolversParentTypes['CallAccountsByTransferCallIdAndFromIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['CallAccountsByTransferCallIdAndFromIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Account']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CallAccountsByTransferCallIdAndFromIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CallAccountsByTransferCallIdAndFromIdManyToManyEdge'] = ResolversParentTypes['CallAccountsByTransferCallIdAndFromIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  transferOut?: Resolver<ResolversTypes['TransfersConnection'], ParentType, ContextType, RequireFields<CallAccountsByTransferCallIdAndFromIdManyToManyEdgeTransferOutArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CallAccountsByTransferCallIdAndToIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CallAccountsByTransferCallIdAndToIdManyToManyConnection'] = ResolversParentTypes['CallAccountsByTransferCallIdAndToIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['CallAccountsByTransferCallIdAndToIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Account']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CallAccountsByTransferCallIdAndToIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CallAccountsByTransferCallIdAndToIdManyToManyEdge'] = ResolversParentTypes['CallAccountsByTransferCallIdAndToIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  transferIn?: Resolver<ResolversTypes['TransfersConnection'], ParentType, ContextType, RequireFields<CallAccountsByTransferCallIdAndToIdManyToManyEdgeTransferInArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyConnection'] = ResolversParentTypes['CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Extrinsic']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyEdge'] = ResolversParentTypes['CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyEdge']> = ResolversObject<{
  calls?: Resolver<ResolversTypes['CallsConnection'], ParentType, ContextType, RequireFields<CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyEdgeCallsArgs, 'orderBy'>>;
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Extrinsic']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CallExtrinsicsByTransferCallIdAndExtrinsicIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CallExtrinsicsByTransferCallIdAndExtrinsicIdManyToManyConnection'] = ResolversParentTypes['CallExtrinsicsByTransferCallIdAndExtrinsicIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['CallExtrinsicsByTransferCallIdAndExtrinsicIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Extrinsic']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CallExtrinsicsByTransferCallIdAndExtrinsicIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CallExtrinsicsByTransferCallIdAndExtrinsicIdManyToManyEdge'] = ResolversParentTypes['CallExtrinsicsByTransferCallIdAndExtrinsicIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Extrinsic']>, ParentType, ContextType>;
  transfers?: Resolver<ResolversTypes['TransfersConnection'], ParentType, ContextType, RequireFields<CallExtrinsicsByTransferCallIdAndExtrinsicIdManyToManyEdgeTransfersArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CallTokensByTransferCallIdAndTokenIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CallTokensByTransferCallIdAndTokenIdManyToManyConnection'] = ResolversParentTypes['CallTokensByTransferCallIdAndTokenIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['CallTokensByTransferCallIdAndTokenIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CallTokensByTransferCallIdAndTokenIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CallTokensByTransferCallIdAndTokenIdManyToManyEdge'] = ResolversParentTypes['CallTokensByTransferCallIdAndTokenIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  transfers?: Resolver<ResolversTypes['TransfersConnection'], ParentType, ContextType, RequireFields<CallTokensByTransferCallIdAndTokenIdManyToManyEdgeTransfersArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CallsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CallsConnection'] = ResolversParentTypes['CallsConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['CallsEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Call']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CallsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CallsEdge'] = ResolversParentTypes['CallsEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Call']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface CursorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cursor'], any> {
  name: 'Cursor';
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DatetimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Datetime'], any> {
  name: 'Datetime';
}

export type DexResolvers<ContextType = any, ParentType extends ResolversParentTypes['Dex'] = ResolversParentTypes['Dex']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  poolCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalTVLUSD?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalVolumeUSD?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DexActionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DexAction'] = ResolversParentTypes['DexAction']> = ResolversObject<{
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  accountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  extrinsic?: Resolver<Maybe<ResolversTypes['Extrinsic']>, ParentType, ContextType>;
  extrinsicId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pool?: Resolver<Maybe<ResolversTypes['Pool']>, ParentType, ContextType>;
  poolId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  token0?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  token0Amount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token0Id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token1?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  token1Amount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token1Id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  volumeUSD?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DexActionsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DexActionsConnection'] = ResolversParentTypes['DexActionsConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['DexActionsEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['DexAction']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DexActionsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['DexActionsEdge'] = ResolversParentTypes['DexActionsEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['DexAction']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DexDayDataConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DexDayDataConnection'] = ResolversParentTypes['DexDayDataConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['DexDayDataEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['DexDayDatum']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DexDayDataEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['DexDayDataEdge'] = ResolversParentTypes['DexDayDataEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['DexDayDatum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DexDayDatumResolvers<ContextType = any, ParentType extends ResolversParentTypes['DexDayDatum'] = ResolversParentTypes['DexDayDatum']> = ResolversObject<{
  dailyVolumeUSD?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  poolCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalTVLUSD?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalVolumeUSD?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DexesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DexesConnection'] = ResolversParentTypes['DexesConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['DexesEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Dex']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DexesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['DexesEdge'] = ResolversParentTypes['DexesEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Dex']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = ResolversObject<{
  block?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  blockId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  blockNumber?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  extrinsic?: Resolver<Maybe<ResolversTypes['Extrinsic']>, ParentType, ContextType>;
  extrinsicId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  index?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  method?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  section?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventsConnection'] = ResolversParentTypes['EventsConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['EventsEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Event']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventsEdge'] = ResolversParentTypes['EventsEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicResolvers<ContextType = any, ParentType extends ResolversParentTypes['Extrinsic'] = ResolversParentTypes['Extrinsic']> = ResolversObject<{
  accountsByCallExtrinsicIdAndSignerId?: Resolver<ResolversTypes['ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyConnection'], ParentType, ContextType, RequireFields<ExtrinsicAccountsByCallExtrinsicIdAndSignerIdArgs, 'orderBy'>>;
  accountsByDexActionExtrinsicIdAndAccountId?: Resolver<ResolversTypes['ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyConnection'], ParentType, ContextType, RequireFields<ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdArgs, 'orderBy'>>;
  accountsByHomaActionExtrinsicIdAndAccountId?: Resolver<ResolversTypes['ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyConnection'], ParentType, ContextType, RequireFields<ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdArgs, 'orderBy'>>;
  accountsByIncentiveActionExtrinsicIdAndAccountId?: Resolver<ResolversTypes['ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyConnection'], ParentType, ContextType, RequireFields<ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdArgs, 'orderBy'>>;
  accountsByLoanActionExtrinsicIdAndAccountId?: Resolver<ResolversTypes['ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyConnection'], ParentType, ContextType, RequireFields<ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdArgs, 'orderBy'>>;
  accountsByNFTActionExtrinsicIdAndAccountId?: Resolver<ResolversTypes['ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyConnection'], ParentType, ContextType, RequireFields<ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdArgs, 'orderBy'>>;
  accountsByTransferExtrinsicIdAndFromId?: Resolver<ResolversTypes['ExtrinsicAccountsByTransferExtrinsicIdAndFromIdManyToManyConnection'], ParentType, ContextType, RequireFields<ExtrinsicAccountsByTransferExtrinsicIdAndFromIdArgs, 'orderBy'>>;
  accountsByTransferExtrinsicIdAndToId?: Resolver<ResolversTypes['ExtrinsicAccountsByTransferExtrinsicIdAndToIdManyToManyConnection'], ParentType, ContextType, RequireFields<ExtrinsicAccountsByTransferExtrinsicIdAndToIdArgs, 'orderBy'>>;
  args?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  block?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  blockId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  blocksByEventExtrinsicIdAndBlockId?: Resolver<ResolversTypes['ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyConnection'], ParentType, ContextType, RequireFields<ExtrinsicBlocksByEventExtrinsicIdAndBlockIdArgs, 'orderBy'>>;
  calls?: Resolver<ResolversTypes['CallsConnection'], ParentType, ContextType, RequireFields<ExtrinsicCallsArgs, 'orderBy'>>;
  callsByCallExtrinsicIdAndParentCallId?: Resolver<ResolversTypes['ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyConnection'], ParentType, ContextType, RequireFields<ExtrinsicCallsByCallExtrinsicIdAndParentCallIdArgs, 'orderBy'>>;
  callsByTransferExtrinsicIdAndCallId?: Resolver<ResolversTypes['ExtrinsicCallsByTransferExtrinsicIdAndCallIdManyToManyConnection'], ParentType, ContextType, RequireFields<ExtrinsicCallsByTransferExtrinsicIdAndCallIdArgs, 'orderBy'>>;
  dexActions?: Resolver<ResolversTypes['DexActionsConnection'], ParentType, ContextType, RequireFields<ExtrinsicDexActionsArgs, 'orderBy'>>;
  events?: Resolver<ResolversTypes['EventsConnection'], ParentType, ContextType, RequireFields<ExtrinsicEventsArgs, 'orderBy'>>;
  homaActions?: Resolver<ResolversTypes['HomaActionsConnection'], ParentType, ContextType, RequireFields<ExtrinsicHomaActionsArgs, 'orderBy'>>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  incentiveActions?: Resolver<ResolversTypes['IncentiveActionsConnection'], ParentType, ContextType, RequireFields<ExtrinsicIncentiveActionsArgs, 'orderBy'>>;
  isSigned?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isSuccess?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  loanActions?: Resolver<ResolversTypes['LoanActionsConnection'], ParentType, ContextType, RequireFields<ExtrinsicLoanActionsArgs, 'orderBy'>>;
  method?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nFTActions?: Resolver<ResolversTypes['NftActionsConnection'], ParentType, ContextType, RequireFields<ExtrinsicNFtActionsArgs, 'orderBy'>>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  poolsByDexActionExtrinsicIdAndPoolId?: Resolver<ResolversTypes['ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyConnection'], ParentType, ContextType, RequireFields<ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdArgs, 'orderBy'>>;
  section?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  signature?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  signer?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  signerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  tip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tokensByDexActionExtrinsicIdAndToken0Id?: Resolver<ResolversTypes['ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyConnection'], ParentType, ContextType, RequireFields<ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdArgs, 'orderBy'>>;
  tokensByDexActionExtrinsicIdAndToken1Id?: Resolver<ResolversTypes['ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyConnection'], ParentType, ContextType, RequireFields<ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdArgs, 'orderBy'>>;
  tokensByTransferExtrinsicIdAndTokenId?: Resolver<ResolversTypes['ExtrinsicTokensByTransferExtrinsicIdAndTokenIdManyToManyConnection'], ParentType, ContextType, RequireFields<ExtrinsicTokensByTransferExtrinsicIdAndTokenIdArgs, 'orderBy'>>;
  transfers?: Resolver<ResolversTypes['TransfersConnection'], ParentType, ContextType, RequireFields<ExtrinsicTransfersArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyConnection'] = ResolversParentTypes['ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Account']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyEdge'] = ResolversParentTypes['ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyEdge']> = ResolversObject<{
  calls?: Resolver<ResolversTypes['CallsConnection'], ParentType, ContextType, RequireFields<ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyEdgeCallsArgs, 'orderBy'>>;
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyConnection'] = ResolversParentTypes['ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Account']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyEdge'] = ResolversParentTypes['ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  dexActions?: Resolver<ResolversTypes['DexActionsConnection'], ParentType, ContextType, RequireFields<ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyEdgeDexActionsArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyConnection'] = ResolversParentTypes['ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Account']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyEdge'] = ResolversParentTypes['ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  homaActions?: Resolver<ResolversTypes['HomaActionsConnection'], ParentType, ContextType, RequireFields<ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyEdgeHomaActionsArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyConnection'] = ResolversParentTypes['ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Account']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyEdge'] = ResolversParentTypes['ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  incentiveActions?: Resolver<ResolversTypes['IncentiveActionsConnection'], ParentType, ContextType, RequireFields<ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyEdgeIncentiveActionsArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyConnection'] = ResolversParentTypes['ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Account']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyEdge'] = ResolversParentTypes['ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  loanActions?: Resolver<ResolversTypes['LoanActionsConnection'], ParentType, ContextType, RequireFields<ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyEdgeLoanActionsArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyConnection'] = ResolversParentTypes['ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Account']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyEdge'] = ResolversParentTypes['ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  nFTActions?: Resolver<ResolversTypes['NftActionsConnection'], ParentType, ContextType, RequireFields<ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyEdgeNFtActionsArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicAccountsByTransferExtrinsicIdAndFromIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtrinsicAccountsByTransferExtrinsicIdAndFromIdManyToManyConnection'] = ResolversParentTypes['ExtrinsicAccountsByTransferExtrinsicIdAndFromIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ExtrinsicAccountsByTransferExtrinsicIdAndFromIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Account']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicAccountsByTransferExtrinsicIdAndFromIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtrinsicAccountsByTransferExtrinsicIdAndFromIdManyToManyEdge'] = ResolversParentTypes['ExtrinsicAccountsByTransferExtrinsicIdAndFromIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  transferOut?: Resolver<ResolversTypes['TransfersConnection'], ParentType, ContextType, RequireFields<ExtrinsicAccountsByTransferExtrinsicIdAndFromIdManyToManyEdgeTransferOutArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicAccountsByTransferExtrinsicIdAndToIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtrinsicAccountsByTransferExtrinsicIdAndToIdManyToManyConnection'] = ResolversParentTypes['ExtrinsicAccountsByTransferExtrinsicIdAndToIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ExtrinsicAccountsByTransferExtrinsicIdAndToIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Account']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicAccountsByTransferExtrinsicIdAndToIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtrinsicAccountsByTransferExtrinsicIdAndToIdManyToManyEdge'] = ResolversParentTypes['ExtrinsicAccountsByTransferExtrinsicIdAndToIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  transferIn?: Resolver<ResolversTypes['TransfersConnection'], ParentType, ContextType, RequireFields<ExtrinsicAccountsByTransferExtrinsicIdAndToIdManyToManyEdgeTransferInArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyConnection'] = ResolversParentTypes['ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Block']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyEdge'] = ResolversParentTypes['ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  events?: Resolver<ResolversTypes['EventsConnection'], ParentType, ContextType, RequireFields<ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyEdgeEventsArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyConnection'] = ResolversParentTypes['ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Call']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyEdge'] = ResolversParentTypes['ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyEdge']> = ResolversObject<{
  calls?: Resolver<ResolversTypes['CallsConnection'], ParentType, ContextType, RequireFields<ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyEdgeCallsArgs, 'orderBy'>>;
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Call']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicCallsByTransferExtrinsicIdAndCallIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtrinsicCallsByTransferExtrinsicIdAndCallIdManyToManyConnection'] = ResolversParentTypes['ExtrinsicCallsByTransferExtrinsicIdAndCallIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ExtrinsicCallsByTransferExtrinsicIdAndCallIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Call']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicCallsByTransferExtrinsicIdAndCallIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtrinsicCallsByTransferExtrinsicIdAndCallIdManyToManyEdge'] = ResolversParentTypes['ExtrinsicCallsByTransferExtrinsicIdAndCallIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Call']>, ParentType, ContextType>;
  transfers?: Resolver<ResolversTypes['TransfersConnection'], ParentType, ContextType, RequireFields<ExtrinsicCallsByTransferExtrinsicIdAndCallIdManyToManyEdgeTransfersArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyConnection'] = ResolversParentTypes['ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Pool']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyEdge'] = ResolversParentTypes['ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyEdge']> = ResolversObject<{
  actions?: Resolver<ResolversTypes['DexActionsConnection'], ParentType, ContextType, RequireFields<ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyEdgeActionsArgs, 'orderBy'>>;
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Pool']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyConnection'] = ResolversParentTypes['ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyEdge'] = ResolversParentTypes['ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  dexActionsByToken0Id?: Resolver<ResolversTypes['DexActionsConnection'], ParentType, ContextType, RequireFields<ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyEdgeDexActionsByToken0IdArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyConnection'] = ResolversParentTypes['ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyEdge'] = ResolversParentTypes['ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  dexActionsByToken1Id?: Resolver<ResolversTypes['DexActionsConnection'], ParentType, ContextType, RequireFields<ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyEdgeDexActionsByToken1IdArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicTokensByTransferExtrinsicIdAndTokenIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtrinsicTokensByTransferExtrinsicIdAndTokenIdManyToManyConnection'] = ResolversParentTypes['ExtrinsicTokensByTransferExtrinsicIdAndTokenIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ExtrinsicTokensByTransferExtrinsicIdAndTokenIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicTokensByTransferExtrinsicIdAndTokenIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtrinsicTokensByTransferExtrinsicIdAndTokenIdManyToManyEdge'] = ResolversParentTypes['ExtrinsicTokensByTransferExtrinsicIdAndTokenIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  transfers?: Resolver<ResolversTypes['TransfersConnection'], ParentType, ContextType, RequireFields<ExtrinsicTokensByTransferExtrinsicIdAndTokenIdManyToManyEdgeTransfersArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtrinsicsConnection'] = ResolversParentTypes['ExtrinsicsConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ExtrinsicsEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Extrinsic']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtrinsicsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExtrinsicsEdge'] = ResolversParentTypes['ExtrinsicsEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Extrinsic']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HomaActionResolvers<ContextType = any, ParentType extends ResolversParentTypes['HomaAction'] = ResolversParentTypes['HomaAction']> = ResolversObject<{
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  accountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  extrinsic?: Resolver<Maybe<ResolversTypes['Extrinsic']>, ParentType, ContextType>;
  extrinsicId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  subType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HomaActionsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['HomaActionsConnection'] = ResolversParentTypes['HomaActionsConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['HomaActionsEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['HomaAction']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HomaActionsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HomaActionsEdge'] = ResolversParentTypes['HomaActionsEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['HomaAction']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IncentiveActionResolvers<ContextType = any, ParentType extends ResolversParentTypes['IncentiveAction'] = ResolversParentTypes['IncentiveAction']> = ResolversObject<{
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  accountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  extrinsic?: Resolver<Maybe<ResolversTypes['Extrinsic']>, ParentType, ContextType>;
  extrinsicId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  subType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IncentiveActionsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['IncentiveActionsConnection'] = ResolversParentTypes['IncentiveActionsConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['IncentiveActionsEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['IncentiveAction']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IncentiveActionsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['IncentiveActionsEdge'] = ResolversParentTypes['IncentiveActionsEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['IncentiveAction']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type LoanActionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoanAction'] = ResolversParentTypes['LoanAction']> = ResolversObject<{
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  accountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  extrinsic?: Resolver<Maybe<ResolversTypes['Extrinsic']>, ParentType, ContextType>;
  extrinsicId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  subType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanActionsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoanActionsConnection'] = ResolversParentTypes['LoanActionsConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['LoanActionsEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['LoanAction']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanActionsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoanActionsEdge'] = ResolversParentTypes['LoanActionsEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['LoanAction']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanParamResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoanParam'] = ResolversParentTypes['LoanParam']> = ResolversObject<{
  collateral?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  collateralId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  debitExchangeRate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  globalInterestRatePerSec?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  interestRatePerSec?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  liquidationPenalty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  liquidationRatio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maximumTotalDebitValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  requiredCollateralRatio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startAtBlock?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  startAtBlockId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startAtBlockNumber?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanParamsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoanParamsConnection'] = ResolversParentTypes['LoanParamsConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['LoanParamsEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['LoanParam']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanParamsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoanParamsEdge'] = ResolversParentTypes['LoanParamsEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['LoanParam']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanParamsHistoriesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoanParamsHistoriesConnection'] = ResolversParentTypes['LoanParamsHistoriesConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['LoanParamsHistoriesEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['LoanParamsHistory']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanParamsHistoriesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoanParamsHistoriesEdge'] = ResolversParentTypes['LoanParamsHistoriesEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['LoanParamsHistory']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanParamsHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoanParamsHistory'] = ResolversParentTypes['LoanParamsHistory']> = ResolversObject<{
  collateral?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  collateralId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endAtBlock?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  endAtBlockId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endAtBlockNumber?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  globalInterestRatePerSec?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  interestRatePerSec?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  liquidationPenalty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  liquidationRatio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maximumTotalDebitValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  requiredCollateralRatio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startAtBlock?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  startAtBlockId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startAtBlockNumber?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanPositionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoanPosition'] = ResolversParentTypes['LoanPosition']> = ResolversObject<{
  collateral?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  collateralAmount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collateralId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  debitAmount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  ownerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanPositionsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoanPositionsConnection'] = ResolversParentTypes['LoanPositionsConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['LoanPositionsEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['LoanPosition']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanPositionsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoanPositionsEdge'] = ResolversParentTypes['LoanPositionsEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['LoanPosition']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NftActionResolvers<ContextType = any, ParentType extends ResolversParentTypes['NFTAction'] = ResolversParentTypes['NFTAction']> = ResolversObject<{
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  accountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  extrinsic?: Resolver<Maybe<ResolversTypes['Extrinsic']>, ParentType, ContextType>;
  extrinsicId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  subType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NftActionsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftActionsConnection'] = ResolversParentTypes['NftActionsConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['NftActionsEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['NFTAction']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NftActionsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftActionsEdge'] = ResolversParentTypes['NftActionsEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['NFTAction']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Account' | 'Block' | 'Call' | 'Dex' | 'DexAction' | 'DexDayDatum' | 'Event' | 'Extrinsic' | 'HomaAction' | 'IncentiveAction' | 'LoanAction' | 'LoanParam' | 'LoanParamsHistory' | 'LoanPosition' | 'NFTAction' | 'OracleFeedRecord' | 'Pool' | 'PoolDayDatum' | 'PoolHourDatum' | 'PriceBundle' | 'PriceRecord' | 'ProvisionPool' | 'Query' | 'SystemConst' | 'Token' | 'TokenDayDatum' | 'TotalLoanPosition' | 'Transfer' | 'UserProvision', ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
}>;

export type OracleFeedRecordResolvers<ContextType = any, ParentType extends ResolversParentTypes['OracleFeedRecord'] = ResolversParentTypes['OracleFeedRecord']> = ResolversObject<{
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  accountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  block?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  blockId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  blockNumber?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  tokenId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OracleFeedRecordsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OracleFeedRecordsConnection'] = ResolversParentTypes['OracleFeedRecordsConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['OracleFeedRecordsEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['OracleFeedRecord']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OracleFeedRecordsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OracleFeedRecordsEdge'] = ResolversParentTypes['OracleFeedRecordsEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['OracleFeedRecord']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = ResolversObject<{
  endCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pool'] = ResolversParentTypes['Pool']> = ResolversObject<{
  accountsByDexActionPoolIdAndAccountId?: Resolver<ResolversTypes['PoolAccountsByDexActionPoolIdAndAccountIdManyToManyConnection'], ParentType, ContextType, RequireFields<PoolAccountsByDexActionPoolIdAndAccountIdArgs, 'orderBy'>>;
  actions?: Resolver<ResolversTypes['DexActionsConnection'], ParentType, ContextType, RequireFields<PoolActionsArgs, 'orderBy'>>;
  dayData?: Resolver<ResolversTypes['PoolDayDataConnection'], ParentType, ContextType, RequireFields<PoolDayDataArgs, 'orderBy'>>;
  exchange0?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exchange1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extrinsicsByDexActionPoolIdAndExtrinsicId?: Resolver<ResolversTypes['PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyConnection'], ParentType, ContextType, RequireFields<PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdArgs, 'orderBy'>>;
  fee?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hourData?: Resolver<ResolversTypes['PoolHourDataConnection'], ParentType, ContextType, RequireFields<PoolHourDataArgs, 'orderBy'>>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  token0?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  token0Amount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token0Id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token0TVL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token0Volume?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token1?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  token1Amount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token1Id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token1TVL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token1Volume?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tokensByDexActionPoolIdAndToken0Id?: Resolver<ResolversTypes['PoolTokensByDexActionPoolIdAndToken0IdManyToManyConnection'], ParentType, ContextType, RequireFields<PoolTokensByDexActionPoolIdAndToken0IdArgs, 'orderBy'>>;
  tokensByDexActionPoolIdAndToken1Id?: Resolver<ResolversTypes['PoolTokensByDexActionPoolIdAndToken1IdManyToManyConnection'], ParentType, ContextType, RequireFields<PoolTokensByDexActionPoolIdAndToken1IdArgs, 'orderBy'>>;
  tokensByPoolDayDatumPoolIdAndToken0Id?: Resolver<ResolversTypes['PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyConnection'], ParentType, ContextType, RequireFields<PoolTokensByPoolDayDatumPoolIdAndToken0IdArgs, 'orderBy'>>;
  tokensByPoolDayDatumPoolIdAndToken1Id?: Resolver<ResolversTypes['PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyConnection'], ParentType, ContextType, RequireFields<PoolTokensByPoolDayDatumPoolIdAndToken1IdArgs, 'orderBy'>>;
  tokensByPoolHourDatumPoolIdAndToken0Id?: Resolver<ResolversTypes['PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyConnection'], ParentType, ContextType, RequireFields<PoolTokensByPoolHourDatumPoolIdAndToken0IdArgs, 'orderBy'>>;
  tokensByPoolHourDatumPoolIdAndToken1Id?: Resolver<ResolversTypes['PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyConnection'], ParentType, ContextType, RequireFields<PoolTokensByPoolHourDatumPoolIdAndToken1IdArgs, 'orderBy'>>;
  tvlUSD?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  txCount?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  volumeUSD?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolAccountsByDexActionPoolIdAndAccountIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoolAccountsByDexActionPoolIdAndAccountIdManyToManyConnection'] = ResolversParentTypes['PoolAccountsByDexActionPoolIdAndAccountIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['PoolAccountsByDexActionPoolIdAndAccountIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Account']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolAccountsByDexActionPoolIdAndAccountIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoolAccountsByDexActionPoolIdAndAccountIdManyToManyEdge'] = ResolversParentTypes['PoolAccountsByDexActionPoolIdAndAccountIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  dexActions?: Resolver<ResolversTypes['DexActionsConnection'], ParentType, ContextType, RequireFields<PoolAccountsByDexActionPoolIdAndAccountIdManyToManyEdgeDexActionsArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolDayDataConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoolDayDataConnection'] = ResolversParentTypes['PoolDayDataConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['PoolDayDataEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['PoolDayDatum']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolDayDataEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoolDayDataEdge'] = ResolversParentTypes['PoolDayDataEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['PoolDayDatum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolDayDatumResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoolDayDatum'] = ResolversParentTypes['PoolDayDatum']> = ResolversObject<{
  date?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  exchange0?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exchange1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pool?: Resolver<Maybe<ResolversTypes['Pool']>, ParentType, ContextType>;
  poolId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token0?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  token0Amount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token0Close?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token0High?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token0Id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token0Low?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token0Open?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token1?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  token1Amount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token1Id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tvlUSD?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  txCount?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  volumeToken0?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  volumeToken1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  volumeUSD?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyConnection'] = ResolversParentTypes['PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Extrinsic']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyEdge'] = ResolversParentTypes['PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  dexActions?: Resolver<ResolversTypes['DexActionsConnection'], ParentType, ContextType, RequireFields<PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyEdgeDexActionsArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Extrinsic']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolHourDataConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoolHourDataConnection'] = ResolversParentTypes['PoolHourDataConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['PoolHourDataEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['PoolHourDatum']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolHourDataEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoolHourDataEdge'] = ResolversParentTypes['PoolHourDataEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['PoolHourDatum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolHourDatumResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoolHourDatum'] = ResolversParentTypes['PoolHourDatum']> = ResolversObject<{
  date?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  exchange0?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exchange1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pool?: Resolver<Maybe<ResolversTypes['Pool']>, ParentType, ContextType>;
  poolId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token0?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  token0Amount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token0Close?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token0High?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token0Id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token0Low?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token0Open?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token1?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  token1Amount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token1Id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tvlUSD?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  txCount?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  volumeToken0?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  volumeToken1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  volumeUSD?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolTokensByDexActionPoolIdAndToken0IdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoolTokensByDexActionPoolIdAndToken0IdManyToManyConnection'] = ResolversParentTypes['PoolTokensByDexActionPoolIdAndToken0IdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['PoolTokensByDexActionPoolIdAndToken0IdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolTokensByDexActionPoolIdAndToken0IdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoolTokensByDexActionPoolIdAndToken0IdManyToManyEdge'] = ResolversParentTypes['PoolTokensByDexActionPoolIdAndToken0IdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  dexActionsByToken0Id?: Resolver<ResolversTypes['DexActionsConnection'], ParentType, ContextType, RequireFields<PoolTokensByDexActionPoolIdAndToken0IdManyToManyEdgeDexActionsByToken0IdArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolTokensByDexActionPoolIdAndToken1IdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoolTokensByDexActionPoolIdAndToken1IdManyToManyConnection'] = ResolversParentTypes['PoolTokensByDexActionPoolIdAndToken1IdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['PoolTokensByDexActionPoolIdAndToken1IdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolTokensByDexActionPoolIdAndToken1IdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoolTokensByDexActionPoolIdAndToken1IdManyToManyEdge'] = ResolversParentTypes['PoolTokensByDexActionPoolIdAndToken1IdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  dexActionsByToken1Id?: Resolver<ResolversTypes['DexActionsConnection'], ParentType, ContextType, RequireFields<PoolTokensByDexActionPoolIdAndToken1IdManyToManyEdgeDexActionsByToken1IdArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyConnection'] = ResolversParentTypes['PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyEdge'] = ResolversParentTypes['PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  poolDayDataBase?: Resolver<ResolversTypes['PoolDayDataConnection'], ParentType, ContextType, RequireFields<PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyEdgePoolDayDataBaseArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyConnection'] = ResolversParentTypes['PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyEdge'] = ResolversParentTypes['PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  poolDayDataQuote?: Resolver<ResolversTypes['PoolDayDataConnection'], ParentType, ContextType, RequireFields<PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyEdgePoolDayDataQuoteArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyConnection'] = ResolversParentTypes['PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyEdge'] = ResolversParentTypes['PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  poolHourDataByToken0Id?: Resolver<ResolversTypes['PoolHourDataConnection'], ParentType, ContextType, RequireFields<PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyEdgePoolHourDataByToken0IdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyConnection'] = ResolversParentTypes['PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyEdge'] = ResolversParentTypes['PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  poolHourDataByToken1Id?: Resolver<ResolversTypes['PoolHourDataConnection'], ParentType, ContextType, RequireFields<PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyEdgePoolHourDataByToken1IdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoolsConnection'] = ResolversParentTypes['PoolsConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['PoolsEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Pool']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoolsEdge'] = ResolversParentTypes['PoolsEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Pool']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PriceBundleResolvers<ContextType = any, ParentType extends ResolversParentTypes['PriceBundle'] = ResolversParentTypes['PriceBundle']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ksm?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PriceBundlesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PriceBundlesConnection'] = ResolversParentTypes['PriceBundlesConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['PriceBundlesEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['PriceBundle']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PriceBundlesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PriceBundlesEdge'] = ResolversParentTypes['PriceBundlesEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['PriceBundle']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PriceRecordResolvers<ContextType = any, ParentType extends ResolversParentTypes['PriceRecord'] = ResolversParentTypes['PriceRecord']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ksm?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PriceRecordsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PriceRecordsConnection'] = ResolversParentTypes['PriceRecordsConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['PriceRecordsEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['PriceRecord']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PriceRecordsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PriceRecordsEdge'] = ResolversParentTypes['PriceRecordsEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['PriceRecord']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProvisionPoolResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProvisionPool'] = ResolversParentTypes['ProvisionPool']> = ResolversObject<{
  endAtBlock?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  endAtBlockId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endAtBlockNumber?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  initializeShare?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  poolToken?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  poolTokenId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  records?: Resolver<ResolversTypes['UserProvisionsConnection'], ParentType, ContextType, RequireFields<ProvisionPoolRecordsArgs, 'orderBy'>>;
  startAtBlock?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  startAtBlockId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startAtBlockNumber?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  token0?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  token0Amount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token0Id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token1?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  token1Amount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token1Id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tokensByUserProvisionPoolIdAndToken0Id?: Resolver<ResolversTypes['ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyConnection'], ParentType, ContextType, RequireFields<ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdArgs, 'orderBy'>>;
  tokensByUserProvisionPoolIdAndToken1Id?: Resolver<ResolversTypes['ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyConnection'], ParentType, ContextType, RequireFields<ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdArgs, 'orderBy'>>;
  txCount?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyConnection'] = ResolversParentTypes['ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyEdge'] = ResolversParentTypes['ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  userProvisionsByToken0Id?: Resolver<ResolversTypes['UserProvisionsConnection'], ParentType, ContextType, RequireFields<ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyEdgeUserProvisionsByToken0IdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyConnection'] = ResolversParentTypes['ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyEdge'] = ResolversParentTypes['ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  userProvisionsByToken1Id?: Resolver<ResolversTypes['UserProvisionsConnection'], ParentType, ContextType, RequireFields<ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyEdgeUserProvisionsByToken1IdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProvisionPoolsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProvisionPoolsConnection'] = ResolversParentTypes['ProvisionPoolsConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['ProvisionPoolsEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['ProvisionPool']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProvisionPoolsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProvisionPoolsEdge'] = ResolversParentTypes['ProvisionPoolsEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['ProvisionPool']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  _metadata?: Resolver<Maybe<ResolversTypes['_Metadata']>, ParentType, ContextType>;
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryAccountArgs, 'id'>>;
  accountByNodeId?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryAccountByNodeIdArgs, 'nodeId'>>;
  accounts?: Resolver<Maybe<ResolversTypes['AccountsConnection']>, ParentType, ContextType, RequireFields<QueryAccountsArgs, 'orderBy'>>;
  block?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType, RequireFields<QueryBlockArgs, 'id'>>;
  blockByNodeId?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType, RequireFields<QueryBlockByNodeIdArgs, 'nodeId'>>;
  blocks?: Resolver<Maybe<ResolversTypes['BlocksConnection']>, ParentType, ContextType, RequireFields<QueryBlocksArgs, 'orderBy'>>;
  call?: Resolver<Maybe<ResolversTypes['Call']>, ParentType, ContextType, RequireFields<QueryCallArgs, 'id'>>;
  callByNodeId?: Resolver<Maybe<ResolversTypes['Call']>, ParentType, ContextType, RequireFields<QueryCallByNodeIdArgs, 'nodeId'>>;
  calls?: Resolver<Maybe<ResolversTypes['CallsConnection']>, ParentType, ContextType, RequireFields<QueryCallsArgs, 'orderBy'>>;
  dex?: Resolver<Maybe<ResolversTypes['Dex']>, ParentType, ContextType, RequireFields<QueryDexArgs, 'id'>>;
  dexAction?: Resolver<Maybe<ResolversTypes['DexAction']>, ParentType, ContextType, RequireFields<QueryDexActionArgs, 'id'>>;
  dexActionByNodeId?: Resolver<Maybe<ResolversTypes['DexAction']>, ParentType, ContextType, RequireFields<QueryDexActionByNodeIdArgs, 'nodeId'>>;
  dexActions?: Resolver<Maybe<ResolversTypes['DexActionsConnection']>, ParentType, ContextType, RequireFields<QueryDexActionsArgs, 'orderBy'>>;
  dexByNodeId?: Resolver<Maybe<ResolversTypes['Dex']>, ParentType, ContextType, RequireFields<QueryDexByNodeIdArgs, 'nodeId'>>;
  dexDayData?: Resolver<Maybe<ResolversTypes['DexDayDataConnection']>, ParentType, ContextType, RequireFields<QueryDexDayDataArgs, 'orderBy'>>;
  dexDayDatum?: Resolver<Maybe<ResolversTypes['DexDayDatum']>, ParentType, ContextType, RequireFields<QueryDexDayDatumArgs, 'id'>>;
  dexDayDatumByNodeId?: Resolver<Maybe<ResolversTypes['DexDayDatum']>, ParentType, ContextType, RequireFields<QueryDexDayDatumByNodeIdArgs, 'nodeId'>>;
  dexes?: Resolver<Maybe<ResolversTypes['DexesConnection']>, ParentType, ContextType, RequireFields<QueryDexesArgs, 'orderBy'>>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryEventArgs, 'id'>>;
  eventByNodeId?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryEventByNodeIdArgs, 'nodeId'>>;
  events?: Resolver<Maybe<ResolversTypes['EventsConnection']>, ParentType, ContextType, RequireFields<QueryEventsArgs, 'orderBy'>>;
  extrinsic?: Resolver<Maybe<ResolversTypes['Extrinsic']>, ParentType, ContextType, RequireFields<QueryExtrinsicArgs, 'id'>>;
  extrinsicByNodeId?: Resolver<Maybe<ResolversTypes['Extrinsic']>, ParentType, ContextType, RequireFields<QueryExtrinsicByNodeIdArgs, 'nodeId'>>;
  extrinsics?: Resolver<Maybe<ResolversTypes['ExtrinsicsConnection']>, ParentType, ContextType, RequireFields<QueryExtrinsicsArgs, 'orderBy'>>;
  homaAction?: Resolver<Maybe<ResolversTypes['HomaAction']>, ParentType, ContextType, RequireFields<QueryHomaActionArgs, 'id'>>;
  homaActionByNodeId?: Resolver<Maybe<ResolversTypes['HomaAction']>, ParentType, ContextType, RequireFields<QueryHomaActionByNodeIdArgs, 'nodeId'>>;
  homaActions?: Resolver<Maybe<ResolversTypes['HomaActionsConnection']>, ParentType, ContextType, RequireFields<QueryHomaActionsArgs, 'orderBy'>>;
  incentiveAction?: Resolver<Maybe<ResolversTypes['IncentiveAction']>, ParentType, ContextType, RequireFields<QueryIncentiveActionArgs, 'id'>>;
  incentiveActionByNodeId?: Resolver<Maybe<ResolversTypes['IncentiveAction']>, ParentType, ContextType, RequireFields<QueryIncentiveActionByNodeIdArgs, 'nodeId'>>;
  incentiveActions?: Resolver<Maybe<ResolversTypes['IncentiveActionsConnection']>, ParentType, ContextType, RequireFields<QueryIncentiveActionsArgs, 'orderBy'>>;
  loanAction?: Resolver<Maybe<ResolversTypes['LoanAction']>, ParentType, ContextType, RequireFields<QueryLoanActionArgs, 'id'>>;
  loanActionByNodeId?: Resolver<Maybe<ResolversTypes['LoanAction']>, ParentType, ContextType, RequireFields<QueryLoanActionByNodeIdArgs, 'nodeId'>>;
  loanActions?: Resolver<Maybe<ResolversTypes['LoanActionsConnection']>, ParentType, ContextType, RequireFields<QueryLoanActionsArgs, 'orderBy'>>;
  loanParam?: Resolver<Maybe<ResolversTypes['LoanParam']>, ParentType, ContextType, RequireFields<QueryLoanParamArgs, 'id'>>;
  loanParamByNodeId?: Resolver<Maybe<ResolversTypes['LoanParam']>, ParentType, ContextType, RequireFields<QueryLoanParamByNodeIdArgs, 'nodeId'>>;
  loanParams?: Resolver<Maybe<ResolversTypes['LoanParamsConnection']>, ParentType, ContextType, RequireFields<QueryLoanParamsArgs, 'orderBy'>>;
  loanParamsHistories?: Resolver<Maybe<ResolversTypes['LoanParamsHistoriesConnection']>, ParentType, ContextType, RequireFields<QueryLoanParamsHistoriesArgs, 'orderBy'>>;
  loanParamsHistory?: Resolver<Maybe<ResolversTypes['LoanParamsHistory']>, ParentType, ContextType, RequireFields<QueryLoanParamsHistoryArgs, 'id'>>;
  loanParamsHistoryByNodeId?: Resolver<Maybe<ResolversTypes['LoanParamsHistory']>, ParentType, ContextType, RequireFields<QueryLoanParamsHistoryByNodeIdArgs, 'nodeId'>>;
  loanPosition?: Resolver<Maybe<ResolversTypes['LoanPosition']>, ParentType, ContextType, RequireFields<QueryLoanPositionArgs, 'id'>>;
  loanPositionByNodeId?: Resolver<Maybe<ResolversTypes['LoanPosition']>, ParentType, ContextType, RequireFields<QueryLoanPositionByNodeIdArgs, 'nodeId'>>;
  loanPositions?: Resolver<Maybe<ResolversTypes['LoanPositionsConnection']>, ParentType, ContextType, RequireFields<QueryLoanPositionsArgs, 'orderBy'>>;
  nFTAction?: Resolver<Maybe<ResolversTypes['NFTAction']>, ParentType, ContextType, RequireFields<QueryNFtActionArgs, 'id'>>;
  nFTActionByNodeId?: Resolver<Maybe<ResolversTypes['NFTAction']>, ParentType, ContextType, RequireFields<QueryNFtActionByNodeIdArgs, 'nodeId'>>;
  nFTActions?: Resolver<Maybe<ResolversTypes['NftActionsConnection']>, ParentType, ContextType, RequireFields<QueryNFtActionsArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'nodeId'>>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  oracleFeedRecord?: Resolver<Maybe<ResolversTypes['OracleFeedRecord']>, ParentType, ContextType, RequireFields<QueryOracleFeedRecordArgs, 'id'>>;
  oracleFeedRecordByNodeId?: Resolver<Maybe<ResolversTypes['OracleFeedRecord']>, ParentType, ContextType, RequireFields<QueryOracleFeedRecordByNodeIdArgs, 'nodeId'>>;
  oracleFeedRecords?: Resolver<Maybe<ResolversTypes['OracleFeedRecordsConnection']>, ParentType, ContextType, RequireFields<QueryOracleFeedRecordsArgs, 'orderBy'>>;
  pool?: Resolver<Maybe<ResolversTypes['Pool']>, ParentType, ContextType, RequireFields<QueryPoolArgs, 'id'>>;
  poolByNodeId?: Resolver<Maybe<ResolversTypes['Pool']>, ParentType, ContextType, RequireFields<QueryPoolByNodeIdArgs, 'nodeId'>>;
  poolDayData?: Resolver<Maybe<ResolversTypes['PoolDayDataConnection']>, ParentType, ContextType, RequireFields<QueryPoolDayDataArgs, 'orderBy'>>;
  poolDayDatum?: Resolver<Maybe<ResolversTypes['PoolDayDatum']>, ParentType, ContextType, RequireFields<QueryPoolDayDatumArgs, 'id'>>;
  poolDayDatumByNodeId?: Resolver<Maybe<ResolversTypes['PoolDayDatum']>, ParentType, ContextType, RequireFields<QueryPoolDayDatumByNodeIdArgs, 'nodeId'>>;
  poolHourData?: Resolver<Maybe<ResolversTypes['PoolHourDataConnection']>, ParentType, ContextType, RequireFields<QueryPoolHourDataArgs, 'orderBy'>>;
  poolHourDatum?: Resolver<Maybe<ResolversTypes['PoolHourDatum']>, ParentType, ContextType, RequireFields<QueryPoolHourDatumArgs, 'id'>>;
  poolHourDatumByNodeId?: Resolver<Maybe<ResolversTypes['PoolHourDatum']>, ParentType, ContextType, RequireFields<QueryPoolHourDatumByNodeIdArgs, 'nodeId'>>;
  pools?: Resolver<Maybe<ResolversTypes['PoolsConnection']>, ParentType, ContextType, RequireFields<QueryPoolsArgs, 'orderBy'>>;
  priceBundle?: Resolver<Maybe<ResolversTypes['PriceBundle']>, ParentType, ContextType, RequireFields<QueryPriceBundleArgs, 'id'>>;
  priceBundleByNodeId?: Resolver<Maybe<ResolversTypes['PriceBundle']>, ParentType, ContextType, RequireFields<QueryPriceBundleByNodeIdArgs, 'nodeId'>>;
  priceBundles?: Resolver<Maybe<ResolversTypes['PriceBundlesConnection']>, ParentType, ContextType, RequireFields<QueryPriceBundlesArgs, 'orderBy'>>;
  priceRecord?: Resolver<Maybe<ResolversTypes['PriceRecord']>, ParentType, ContextType, RequireFields<QueryPriceRecordArgs, 'id'>>;
  priceRecordByNodeId?: Resolver<Maybe<ResolversTypes['PriceRecord']>, ParentType, ContextType, RequireFields<QueryPriceRecordByNodeIdArgs, 'nodeId'>>;
  priceRecords?: Resolver<Maybe<ResolversTypes['PriceRecordsConnection']>, ParentType, ContextType, RequireFields<QueryPriceRecordsArgs, 'orderBy'>>;
  provisionPool?: Resolver<Maybe<ResolversTypes['ProvisionPool']>, ParentType, ContextType, RequireFields<QueryProvisionPoolArgs, 'id'>>;
  provisionPoolByNodeId?: Resolver<Maybe<ResolversTypes['ProvisionPool']>, ParentType, ContextType, RequireFields<QueryProvisionPoolByNodeIdArgs, 'nodeId'>>;
  provisionPools?: Resolver<Maybe<ResolversTypes['ProvisionPoolsConnection']>, ParentType, ContextType, RequireFields<QueryProvisionPoolsArgs, 'orderBy'>>;
  query?: Resolver<ResolversTypes['Query'], ParentType, ContextType>;
  systemConst?: Resolver<Maybe<ResolversTypes['SystemConst']>, ParentType, ContextType, RequireFields<QuerySystemConstArgs, 'id'>>;
  systemConstByNodeId?: Resolver<Maybe<ResolversTypes['SystemConst']>, ParentType, ContextType, RequireFields<QuerySystemConstByNodeIdArgs, 'nodeId'>>;
  systemConsts?: Resolver<Maybe<ResolversTypes['SystemConstsConnection']>, ParentType, ContextType, RequireFields<QuerySystemConstsArgs, 'orderBy'>>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QueryTokenArgs, 'id'>>;
  tokenByNodeId?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QueryTokenByNodeIdArgs, 'nodeId'>>;
  tokenDayData?: Resolver<Maybe<ResolversTypes['TokenDayDataConnection']>, ParentType, ContextType, RequireFields<QueryTokenDayDataArgs, 'orderBy'>>;
  tokenDayDatum?: Resolver<Maybe<ResolversTypes['TokenDayDatum']>, ParentType, ContextType, RequireFields<QueryTokenDayDatumArgs, 'id'>>;
  tokenDayDatumByNodeId?: Resolver<Maybe<ResolversTypes['TokenDayDatum']>, ParentType, ContextType, RequireFields<QueryTokenDayDatumByNodeIdArgs, 'nodeId'>>;
  tokens?: Resolver<Maybe<ResolversTypes['TokensConnection']>, ParentType, ContextType, RequireFields<QueryTokensArgs, 'orderBy'>>;
  totalLoanPosition?: Resolver<Maybe<ResolversTypes['TotalLoanPosition']>, ParentType, ContextType, RequireFields<QueryTotalLoanPositionArgs, 'id'>>;
  totalLoanPositionByNodeId?: Resolver<Maybe<ResolversTypes['TotalLoanPosition']>, ParentType, ContextType, RequireFields<QueryTotalLoanPositionByNodeIdArgs, 'nodeId'>>;
  totalLoanPositions?: Resolver<Maybe<ResolversTypes['TotalLoanPositionsConnection']>, ParentType, ContextType, RequireFields<QueryTotalLoanPositionsArgs, 'orderBy'>>;
  transfer?: Resolver<Maybe<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<QueryTransferArgs, 'id'>>;
  transferByNodeId?: Resolver<Maybe<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<QueryTransferByNodeIdArgs, 'nodeId'>>;
  transfers?: Resolver<Maybe<ResolversTypes['TransfersConnection']>, ParentType, ContextType, RequireFields<QueryTransfersArgs, 'orderBy'>>;
  userProvision?: Resolver<Maybe<ResolversTypes['UserProvision']>, ParentType, ContextType, RequireFields<QueryUserProvisionArgs, 'id'>>;
  userProvisionByNodeId?: Resolver<Maybe<ResolversTypes['UserProvision']>, ParentType, ContextType, RequireFields<QueryUserProvisionByNodeIdArgs, 'nodeId'>>;
  userProvisions?: Resolver<Maybe<ResolversTypes['UserProvisionsConnection']>, ParentType, ContextType, RequireFields<QueryUserProvisionsArgs, 'orderBy'>>;
}>;

export type SystemConstResolvers<ContextType = any, ParentType extends ResolversParentTypes['SystemConst'] = ResolversParentTypes['SystemConst']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  liquidToken?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  liquidTokenId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nativeToken?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  nativeTokenId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  stableToken?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  stableTokenId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stakignToken?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  stakignTokenId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SystemConstsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SystemConstsConnection'] = ResolversParentTypes['SystemConstsConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['SystemConstsEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['SystemConst']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SystemConstsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SystemConstsEdge'] = ResolversParentTypes['SystemConstsEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['SystemConst']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = ResolversObject<{
  accountsByDexActionToken0IdAndAccountId?: Resolver<ResolversTypes['TokenAccountsByDexActionToken0IdAndAccountIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenAccountsByDexActionToken0IdAndAccountIdArgs, 'orderBy'>>;
  accountsByDexActionToken1IdAndAccountId?: Resolver<ResolversTypes['TokenAccountsByDexActionToken1IdAndAccountIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenAccountsByDexActionToken1IdAndAccountIdArgs, 'orderBy'>>;
  accountsByLoanPositionCollateralIdAndOwnerId?: Resolver<ResolversTypes['TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenAccountsByLoanPositionCollateralIdAndOwnerIdArgs, 'orderBy'>>;
  accountsByOracleFeedRecordTokenIdAndAccountId?: Resolver<ResolversTypes['TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenAccountsByOracleFeedRecordTokenIdAndAccountIdArgs, 'orderBy'>>;
  accountsByTransferTokenIdAndFromId?: Resolver<ResolversTypes['TokenAccountsByTransferTokenIdAndFromIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenAccountsByTransferTokenIdAndFromIdArgs, 'orderBy'>>;
  accountsByTransferTokenIdAndToId?: Resolver<ResolversTypes['TokenAccountsByTransferTokenIdAndToIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenAccountsByTransferTokenIdAndToIdArgs, 'orderBy'>>;
  blocksByLoanParamCollateralIdAndStartAtBlockId?: Resolver<ResolversTypes['TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdArgs, 'orderBy'>>;
  blocksByLoanParamsHistoryCollateralIdAndEndAtBlockId?: Resolver<ResolversTypes['TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdArgs, 'orderBy'>>;
  blocksByLoanParamsHistoryCollateralIdAndStartAtBlockId?: Resolver<ResolversTypes['TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdArgs, 'orderBy'>>;
  blocksByOracleFeedRecordTokenIdAndBlockId?: Resolver<ResolversTypes['TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenBlocksByOracleFeedRecordTokenIdAndBlockIdArgs, 'orderBy'>>;
  blocksByProvisionPoolPoolTokenIdAndEndAtBlockId?: Resolver<ResolversTypes['TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdArgs, 'orderBy'>>;
  blocksByProvisionPoolPoolTokenIdAndStartAtBlockId?: Resolver<ResolversTypes['TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdArgs, 'orderBy'>>;
  blocksByProvisionPoolToken0IdAndEndAtBlockId?: Resolver<ResolversTypes['TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdArgs, 'orderBy'>>;
  blocksByProvisionPoolToken0IdAndStartAtBlockId?: Resolver<ResolversTypes['TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdArgs, 'orderBy'>>;
  blocksByProvisionPoolToken1IdAndEndAtBlockId?: Resolver<ResolversTypes['TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdArgs, 'orderBy'>>;
  blocksByProvisionPoolToken1IdAndStartAtBlockId?: Resolver<ResolversTypes['TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdArgs, 'orderBy'>>;
  callsByTransferTokenIdAndCallId?: Resolver<ResolversTypes['TokenCallsByTransferTokenIdAndCallIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenCallsByTransferTokenIdAndCallIdArgs, 'orderBy'>>;
  dayData?: Resolver<ResolversTypes['TokenDayDataConnection'], ParentType, ContextType, RequireFields<TokenDayDataArgs, 'orderBy'>>;
  decimal?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  dexActionsByToken0Id?: Resolver<ResolversTypes['DexActionsConnection'], ParentType, ContextType, RequireFields<TokenDexActionsByToken0IdArgs, 'orderBy'>>;
  dexActionsByToken1Id?: Resolver<ResolversTypes['DexActionsConnection'], ParentType, ContextType, RequireFields<TokenDexActionsByToken1IdArgs, 'orderBy'>>;
  extrinsicsByDexActionToken0IdAndExtrinsicId?: Resolver<ResolversTypes['TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdArgs, 'orderBy'>>;
  extrinsicsByDexActionToken1IdAndExtrinsicId?: Resolver<ResolversTypes['TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdArgs, 'orderBy'>>;
  extrinsicsByTransferTokenIdAndExtrinsicId?: Resolver<ResolversTypes['TokenExtrinsicsByTransferTokenIdAndExtrinsicIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenExtrinsicsByTransferTokenIdAndExtrinsicIdArgs, 'orderBy'>>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  issuance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  loanParamsByCollateralId?: Resolver<ResolversTypes['LoanParamsConnection'], ParentType, ContextType, RequireFields<TokenLoanParamsByCollateralIdArgs, 'orderBy'>>;
  loanParamsHistoriesByCollateralId?: Resolver<ResolversTypes['LoanParamsHistoriesConnection'], ParentType, ContextType, RequireFields<TokenLoanParamsHistoriesByCollateralIdArgs, 'orderBy'>>;
  loanPositionsByCollateralId?: Resolver<ResolversTypes['LoanPositionsConnection'], ParentType, ContextType, RequireFields<TokenLoanPositionsByCollateralIdArgs, 'orderBy'>>;
  lockedInDex?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lockedInIncentive?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lockedInLoan?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  oracleFeedRecords?: Resolver<ResolversTypes['OracleFeedRecordsConnection'], ParentType, ContextType, RequireFields<TokenOracleFeedRecordsArgs, 'orderBy'>>;
  poolBase?: Resolver<ResolversTypes['PoolsConnection'], ParentType, ContextType, RequireFields<TokenPoolBaseArgs, 'orderBy'>>;
  poolDayDataBase?: Resolver<ResolversTypes['PoolDayDataConnection'], ParentType, ContextType, RequireFields<TokenPoolDayDataBaseArgs, 'orderBy'>>;
  poolDayDataQuote?: Resolver<ResolversTypes['PoolDayDataConnection'], ParentType, ContextType, RequireFields<TokenPoolDayDataQuoteArgs, 'orderBy'>>;
  poolHourDataByToken0Id?: Resolver<ResolversTypes['PoolHourDataConnection'], ParentType, ContextType, RequireFields<TokenPoolHourDataByToken0IdArgs, 'orderBy'>>;
  poolHourDataByToken1Id?: Resolver<ResolversTypes['PoolHourDataConnection'], ParentType, ContextType, RequireFields<TokenPoolHourDataByToken1IdArgs, 'orderBy'>>;
  poolQuote?: Resolver<ResolversTypes['PoolsConnection'], ParentType, ContextType, RequireFields<TokenPoolQuoteArgs, 'orderBy'>>;
  poolsByDexActionToken0IdAndPoolId?: Resolver<ResolversTypes['TokenPoolsByDexActionToken0IdAndPoolIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenPoolsByDexActionToken0IdAndPoolIdArgs, 'orderBy'>>;
  poolsByDexActionToken1IdAndPoolId?: Resolver<ResolversTypes['TokenPoolsByDexActionToken1IdAndPoolIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenPoolsByDexActionToken1IdAndPoolIdArgs, 'orderBy'>>;
  poolsByPoolDayDatumToken0IdAndPoolId?: Resolver<ResolversTypes['TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenPoolsByPoolDayDatumToken0IdAndPoolIdArgs, 'orderBy'>>;
  poolsByPoolDayDatumToken1IdAndPoolId?: Resolver<ResolversTypes['TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenPoolsByPoolDayDatumToken1IdAndPoolIdArgs, 'orderBy'>>;
  poolsByPoolHourDatumToken0IdAndPoolId?: Resolver<ResolversTypes['TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenPoolsByPoolHourDatumToken0IdAndPoolIdArgs, 'orderBy'>>;
  poolsByPoolHourDatumToken1IdAndPoolId?: Resolver<ResolversTypes['TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenPoolsByPoolHourDatumToken1IdAndPoolIdArgs, 'orderBy'>>;
  price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provisionPoolsByPoolTokenId?: Resolver<ResolversTypes['ProvisionPoolsConnection'], ParentType, ContextType, RequireFields<TokenProvisionPoolsByPoolTokenIdArgs, 'orderBy'>>;
  provisionPoolsByToken0Id?: Resolver<ResolversTypes['ProvisionPoolsConnection'], ParentType, ContextType, RequireFields<TokenProvisionPoolsByToken0IdArgs, 'orderBy'>>;
  provisionPoolsByToken1Id?: Resolver<ResolversTypes['ProvisionPoolsConnection'], ParentType, ContextType, RequireFields<TokenProvisionPoolsByToken1IdArgs, 'orderBy'>>;
  provisionPoolsByUserProvisionToken0IdAndPoolId?: Resolver<ResolversTypes['TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdArgs, 'orderBy'>>;
  provisionPoolsByUserProvisionToken1IdAndPoolId?: Resolver<ResolversTypes['TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdArgs, 'orderBy'>>;
  systemConstsByLiquidTokenId?: Resolver<ResolversTypes['SystemConstsConnection'], ParentType, ContextType, RequireFields<TokenSystemConstsByLiquidTokenIdArgs, 'orderBy'>>;
  systemConstsByNativeTokenId?: Resolver<ResolversTypes['SystemConstsConnection'], ParentType, ContextType, RequireFields<TokenSystemConstsByNativeTokenIdArgs, 'orderBy'>>;
  systemConstsByStableTokenId?: Resolver<ResolversTypes['SystemConstsConnection'], ParentType, ContextType, RequireFields<TokenSystemConstsByStableTokenIdArgs, 'orderBy'>>;
  systemConstsByStakignTokenId?: Resolver<ResolversTypes['SystemConstsConnection'], ParentType, ContextType, RequireFields<TokenSystemConstsByStakignTokenIdArgs, 'orderBy'>>;
  tokensByDexActionToken0IdAndToken1Id?: Resolver<ResolversTypes['TokenTokensByDexActionToken0IdAndToken1IdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenTokensByDexActionToken0IdAndToken1IdArgs, 'orderBy'>>;
  tokensByDexActionToken1IdAndToken0Id?: Resolver<ResolversTypes['TokenTokensByDexActionToken1IdAndToken0IdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenTokensByDexActionToken1IdAndToken0IdArgs, 'orderBy'>>;
  tokensByPoolDayDatumToken0IdAndToken1Id?: Resolver<ResolversTypes['TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenTokensByPoolDayDatumToken0IdAndToken1IdArgs, 'orderBy'>>;
  tokensByPoolDayDatumToken1IdAndToken0Id?: Resolver<ResolversTypes['TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenTokensByPoolDayDatumToken1IdAndToken0IdArgs, 'orderBy'>>;
  tokensByPoolHourDatumToken0IdAndToken1Id?: Resolver<ResolversTypes['TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenTokensByPoolHourDatumToken0IdAndToken1IdArgs, 'orderBy'>>;
  tokensByPoolHourDatumToken1IdAndToken0Id?: Resolver<ResolversTypes['TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenTokensByPoolHourDatumToken1IdAndToken0IdArgs, 'orderBy'>>;
  tokensByPoolToken0IdAndToken1Id?: Resolver<ResolversTypes['TokenTokensByPoolToken0IdAndToken1IdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenTokensByPoolToken0IdAndToken1IdArgs, 'orderBy'>>;
  tokensByPoolToken1IdAndToken0Id?: Resolver<ResolversTypes['TokenTokensByPoolToken1IdAndToken0IdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenTokensByPoolToken1IdAndToken0IdArgs, 'orderBy'>>;
  tokensByProvisionPoolPoolTokenIdAndToken0Id?: Resolver<ResolversTypes['TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenTokensByProvisionPoolPoolTokenIdAndToken0IdArgs, 'orderBy'>>;
  tokensByProvisionPoolPoolTokenIdAndToken1Id?: Resolver<ResolversTypes['TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenTokensByProvisionPoolPoolTokenIdAndToken1IdArgs, 'orderBy'>>;
  tokensByProvisionPoolToken0IdAndPoolTokenId?: Resolver<ResolversTypes['TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenTokensByProvisionPoolToken0IdAndPoolTokenIdArgs, 'orderBy'>>;
  tokensByProvisionPoolToken0IdAndToken1Id?: Resolver<ResolversTypes['TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenTokensByProvisionPoolToken0IdAndToken1IdArgs, 'orderBy'>>;
  tokensByProvisionPoolToken1IdAndPoolTokenId?: Resolver<ResolversTypes['TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenTokensByProvisionPoolToken1IdAndPoolTokenIdArgs, 'orderBy'>>;
  tokensByProvisionPoolToken1IdAndToken0Id?: Resolver<ResolversTypes['TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenTokensByProvisionPoolToken1IdAndToken0IdArgs, 'orderBy'>>;
  tokensBySystemConstLiquidTokenIdAndNativeTokenId?: Resolver<ResolversTypes['TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdArgs, 'orderBy'>>;
  tokensBySystemConstLiquidTokenIdAndStableTokenId?: Resolver<ResolversTypes['TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdArgs, 'orderBy'>>;
  tokensBySystemConstLiquidTokenIdAndStakignTokenId?: Resolver<ResolversTypes['TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdArgs, 'orderBy'>>;
  tokensBySystemConstNativeTokenIdAndLiquidTokenId?: Resolver<ResolversTypes['TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdArgs, 'orderBy'>>;
  tokensBySystemConstNativeTokenIdAndStableTokenId?: Resolver<ResolversTypes['TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenTokensBySystemConstNativeTokenIdAndStableTokenIdArgs, 'orderBy'>>;
  tokensBySystemConstNativeTokenIdAndStakignTokenId?: Resolver<ResolversTypes['TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdArgs, 'orderBy'>>;
  tokensBySystemConstStableTokenIdAndLiquidTokenId?: Resolver<ResolversTypes['TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdArgs, 'orderBy'>>;
  tokensBySystemConstStableTokenIdAndNativeTokenId?: Resolver<ResolversTypes['TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenTokensBySystemConstStableTokenIdAndNativeTokenIdArgs, 'orderBy'>>;
  tokensBySystemConstStableTokenIdAndStakignTokenId?: Resolver<ResolversTypes['TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenTokensBySystemConstStableTokenIdAndStakignTokenIdArgs, 'orderBy'>>;
  tokensBySystemConstStakignTokenIdAndLiquidTokenId?: Resolver<ResolversTypes['TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdArgs, 'orderBy'>>;
  tokensBySystemConstStakignTokenIdAndNativeTokenId?: Resolver<ResolversTypes['TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdArgs, 'orderBy'>>;
  tokensBySystemConstStakignTokenIdAndStableTokenId?: Resolver<ResolversTypes['TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenTokensBySystemConstStakignTokenIdAndStableTokenIdArgs, 'orderBy'>>;
  tokensByUserProvisionToken0IdAndToken1Id?: Resolver<ResolversTypes['TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenTokensByUserProvisionToken0IdAndToken1IdArgs, 'orderBy'>>;
  tokensByUserProvisionToken1IdAndToken0Id?: Resolver<ResolversTypes['TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyConnection'], ParentType, ContextType, RequireFields<TokenTokensByUserProvisionToken1IdAndToken0IdArgs, 'orderBy'>>;
  totalLoanPositionsByCollateralId?: Resolver<ResolversTypes['TotalLoanPositionsConnection'], ParentType, ContextType, RequireFields<TokenTotalLoanPositionsByCollateralIdArgs, 'orderBy'>>;
  transfers?: Resolver<ResolversTypes['TransfersConnection'], ParentType, ContextType, RequireFields<TokenTransfersArgs, 'orderBy'>>;
  txCount?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  userProvisionsByToken0Id?: Resolver<ResolversTypes['UserProvisionsConnection'], ParentType, ContextType, RequireFields<TokenUserProvisionsByToken0IdArgs, 'orderBy'>>;
  userProvisionsByToken1Id?: Resolver<ResolversTypes['UserProvisionsConnection'], ParentType, ContextType, RequireFields<TokenUserProvisionsByToken1IdArgs, 'orderBy'>>;
  volume?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  volumeUSD?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenAccountsByDexActionToken0IdAndAccountIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenAccountsByDexActionToken0IdAndAccountIdManyToManyConnection'] = ResolversParentTypes['TokenAccountsByDexActionToken0IdAndAccountIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenAccountsByDexActionToken0IdAndAccountIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Account']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenAccountsByDexActionToken0IdAndAccountIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenAccountsByDexActionToken0IdAndAccountIdManyToManyEdge'] = ResolversParentTypes['TokenAccountsByDexActionToken0IdAndAccountIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  dexActions?: Resolver<ResolversTypes['DexActionsConnection'], ParentType, ContextType, RequireFields<TokenAccountsByDexActionToken0IdAndAccountIdManyToManyEdgeDexActionsArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenAccountsByDexActionToken1IdAndAccountIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenAccountsByDexActionToken1IdAndAccountIdManyToManyConnection'] = ResolversParentTypes['TokenAccountsByDexActionToken1IdAndAccountIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenAccountsByDexActionToken1IdAndAccountIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Account']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenAccountsByDexActionToken1IdAndAccountIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenAccountsByDexActionToken1IdAndAccountIdManyToManyEdge'] = ResolversParentTypes['TokenAccountsByDexActionToken1IdAndAccountIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  dexActions?: Resolver<ResolversTypes['DexActionsConnection'], ParentType, ContextType, RequireFields<TokenAccountsByDexActionToken1IdAndAccountIdManyToManyEdgeDexActionsArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyConnection'] = ResolversParentTypes['TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Account']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyEdge'] = ResolversParentTypes['TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  position?: Resolver<ResolversTypes['LoanPositionsConnection'], ParentType, ContextType, RequireFields<TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyEdgePositionArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyConnection'] = ResolversParentTypes['TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Account']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyEdge'] = ResolversParentTypes['TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  oracleFeedRecords?: Resolver<ResolversTypes['OracleFeedRecordsConnection'], ParentType, ContextType, RequireFields<TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyEdgeOracleFeedRecordsArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenAccountsByTransferTokenIdAndFromIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenAccountsByTransferTokenIdAndFromIdManyToManyConnection'] = ResolversParentTypes['TokenAccountsByTransferTokenIdAndFromIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenAccountsByTransferTokenIdAndFromIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Account']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenAccountsByTransferTokenIdAndFromIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenAccountsByTransferTokenIdAndFromIdManyToManyEdge'] = ResolversParentTypes['TokenAccountsByTransferTokenIdAndFromIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  transferOut?: Resolver<ResolversTypes['TransfersConnection'], ParentType, ContextType, RequireFields<TokenAccountsByTransferTokenIdAndFromIdManyToManyEdgeTransferOutArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenAccountsByTransferTokenIdAndToIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenAccountsByTransferTokenIdAndToIdManyToManyConnection'] = ResolversParentTypes['TokenAccountsByTransferTokenIdAndToIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenAccountsByTransferTokenIdAndToIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Account']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenAccountsByTransferTokenIdAndToIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenAccountsByTransferTokenIdAndToIdManyToManyEdge'] = ResolversParentTypes['TokenAccountsByTransferTokenIdAndToIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  transferIn?: Resolver<ResolversTypes['TransfersConnection'], ParentType, ContextType, RequireFields<TokenAccountsByTransferTokenIdAndToIdManyToManyEdgeTransferInArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyConnection'] = ResolversParentTypes['TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Block']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyEdge'] = ResolversParentTypes['TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  loanParamsByStartAtBlockId?: Resolver<ResolversTypes['LoanParamsConnection'], ParentType, ContextType, RequireFields<TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyEdgeLoanParamsByStartAtBlockIdArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyConnection'] = ResolversParentTypes['TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Block']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyEdge'] = ResolversParentTypes['TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  loanParamsHistoriesByEndAtBlockId?: Resolver<ResolversTypes['LoanParamsHistoriesConnection'], ParentType, ContextType, RequireFields<TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyEdgeLoanParamsHistoriesByEndAtBlockIdArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyConnection'] = ResolversParentTypes['TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Block']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyEdge'] = ResolversParentTypes['TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  loanParamsHistoriesByStartAtBlockId?: Resolver<ResolversTypes['LoanParamsHistoriesConnection'], ParentType, ContextType, RequireFields<TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyEdgeLoanParamsHistoriesByStartAtBlockIdArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyConnection'] = ResolversParentTypes['TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Block']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyEdge'] = ResolversParentTypes['TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  oracleFeedRecords?: Resolver<ResolversTypes['OracleFeedRecordsConnection'], ParentType, ContextType, RequireFields<TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyEdgeOracleFeedRecordsArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyConnection'] = ResolversParentTypes['TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Block']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyEdge'] = ResolversParentTypes['TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  provisionPoolsByEndAtBlockId?: Resolver<ResolversTypes['ProvisionPoolsConnection'], ParentType, ContextType, RequireFields<TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyEdgeProvisionPoolsByEndAtBlockIdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyConnection'] = ResolversParentTypes['TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Block']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyEdge'] = ResolversParentTypes['TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  provisionPoolsByStartAtBlockId?: Resolver<ResolversTypes['ProvisionPoolsConnection'], ParentType, ContextType, RequireFields<TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyEdgeProvisionPoolsByStartAtBlockIdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyConnection'] = ResolversParentTypes['TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Block']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyEdge'] = ResolversParentTypes['TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  provisionPoolsByEndAtBlockId?: Resolver<ResolversTypes['ProvisionPoolsConnection'], ParentType, ContextType, RequireFields<TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyEdgeProvisionPoolsByEndAtBlockIdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyConnection'] = ResolversParentTypes['TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Block']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyEdge'] = ResolversParentTypes['TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  provisionPoolsByStartAtBlockId?: Resolver<ResolversTypes['ProvisionPoolsConnection'], ParentType, ContextType, RequireFields<TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyEdgeProvisionPoolsByStartAtBlockIdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyConnection'] = ResolversParentTypes['TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Block']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyEdge'] = ResolversParentTypes['TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  provisionPoolsByEndAtBlockId?: Resolver<ResolversTypes['ProvisionPoolsConnection'], ParentType, ContextType, RequireFields<TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyEdgeProvisionPoolsByEndAtBlockIdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyConnection'] = ResolversParentTypes['TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Block']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyEdge'] = ResolversParentTypes['TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType>;
  provisionPoolsByStartAtBlockId?: Resolver<ResolversTypes['ProvisionPoolsConnection'], ParentType, ContextType, RequireFields<TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyEdgeProvisionPoolsByStartAtBlockIdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenCallsByTransferTokenIdAndCallIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenCallsByTransferTokenIdAndCallIdManyToManyConnection'] = ResolversParentTypes['TokenCallsByTransferTokenIdAndCallIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenCallsByTransferTokenIdAndCallIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Call']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenCallsByTransferTokenIdAndCallIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenCallsByTransferTokenIdAndCallIdManyToManyEdge'] = ResolversParentTypes['TokenCallsByTransferTokenIdAndCallIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Call']>, ParentType, ContextType>;
  transfers?: Resolver<ResolversTypes['TransfersConnection'], ParentType, ContextType, RequireFields<TokenCallsByTransferTokenIdAndCallIdManyToManyEdgeTransfersArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenDayDataConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenDayDataConnection'] = ResolversParentTypes['TokenDayDataConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenDayDataEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['TokenDayDatum']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenDayDataEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenDayDataEdge'] = ResolversParentTypes['TokenDayDataEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['TokenDayDatum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenDayDatumResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenDayDatum'] = ResolversParentTypes['TokenDayDatum']> = ResolversObject<{
  dailyTxCount?: Resolver<Maybe<ResolversTypes['BigFloat']>, ParentType, ContextType>;
  dailyVolumeToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dailyVolumeUSD?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  tokenId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyConnection'] = ResolversParentTypes['TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Extrinsic']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyEdge'] = ResolversParentTypes['TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  dexActions?: Resolver<ResolversTypes['DexActionsConnection'], ParentType, ContextType, RequireFields<TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyEdgeDexActionsArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Extrinsic']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyConnection'] = ResolversParentTypes['TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Extrinsic']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyEdge'] = ResolversParentTypes['TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  dexActions?: Resolver<ResolversTypes['DexActionsConnection'], ParentType, ContextType, RequireFields<TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyEdgeDexActionsArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Extrinsic']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenExtrinsicsByTransferTokenIdAndExtrinsicIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenExtrinsicsByTransferTokenIdAndExtrinsicIdManyToManyConnection'] = ResolversParentTypes['TokenExtrinsicsByTransferTokenIdAndExtrinsicIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenExtrinsicsByTransferTokenIdAndExtrinsicIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Extrinsic']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenExtrinsicsByTransferTokenIdAndExtrinsicIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenExtrinsicsByTransferTokenIdAndExtrinsicIdManyToManyEdge'] = ResolversParentTypes['TokenExtrinsicsByTransferTokenIdAndExtrinsicIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Extrinsic']>, ParentType, ContextType>;
  transfers?: Resolver<ResolversTypes['TransfersConnection'], ParentType, ContextType, RequireFields<TokenExtrinsicsByTransferTokenIdAndExtrinsicIdManyToManyEdgeTransfersArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenPoolsByDexActionToken0IdAndPoolIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenPoolsByDexActionToken0IdAndPoolIdManyToManyConnection'] = ResolversParentTypes['TokenPoolsByDexActionToken0IdAndPoolIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenPoolsByDexActionToken0IdAndPoolIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Pool']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenPoolsByDexActionToken0IdAndPoolIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenPoolsByDexActionToken0IdAndPoolIdManyToManyEdge'] = ResolversParentTypes['TokenPoolsByDexActionToken0IdAndPoolIdManyToManyEdge']> = ResolversObject<{
  actions?: Resolver<ResolversTypes['DexActionsConnection'], ParentType, ContextType, RequireFields<TokenPoolsByDexActionToken0IdAndPoolIdManyToManyEdgeActionsArgs, 'orderBy'>>;
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Pool']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenPoolsByDexActionToken1IdAndPoolIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenPoolsByDexActionToken1IdAndPoolIdManyToManyConnection'] = ResolversParentTypes['TokenPoolsByDexActionToken1IdAndPoolIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenPoolsByDexActionToken1IdAndPoolIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Pool']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenPoolsByDexActionToken1IdAndPoolIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenPoolsByDexActionToken1IdAndPoolIdManyToManyEdge'] = ResolversParentTypes['TokenPoolsByDexActionToken1IdAndPoolIdManyToManyEdge']> = ResolversObject<{
  actions?: Resolver<ResolversTypes['DexActionsConnection'], ParentType, ContextType, RequireFields<TokenPoolsByDexActionToken1IdAndPoolIdManyToManyEdgeActionsArgs, 'orderBy'>>;
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Pool']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyConnection'] = ResolversParentTypes['TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Pool']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyEdge'] = ResolversParentTypes['TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  dayData?: Resolver<ResolversTypes['PoolDayDataConnection'], ParentType, ContextType, RequireFields<TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyEdgeDayDataArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Pool']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyConnection'] = ResolversParentTypes['TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Pool']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyEdge'] = ResolversParentTypes['TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  dayData?: Resolver<ResolversTypes['PoolDayDataConnection'], ParentType, ContextType, RequireFields<TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyEdgeDayDataArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Pool']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyConnection'] = ResolversParentTypes['TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Pool']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyEdge'] = ResolversParentTypes['TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  hourData?: Resolver<ResolversTypes['PoolHourDataConnection'], ParentType, ContextType, RequireFields<TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyEdgeHourDataArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Pool']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyConnection'] = ResolversParentTypes['TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Pool']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyEdge'] = ResolversParentTypes['TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  hourData?: Resolver<ResolversTypes['PoolHourDataConnection'], ParentType, ContextType, RequireFields<TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyEdgeHourDataArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Pool']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyConnection'] = ResolversParentTypes['TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['ProvisionPool']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyEdge'] = ResolversParentTypes['TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['ProvisionPool']>, ParentType, ContextType>;
  records?: Resolver<ResolversTypes['UserProvisionsConnection'], ParentType, ContextType, RequireFields<TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyEdgeRecordsArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyConnection'] = ResolversParentTypes['TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['ProvisionPool']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyEdge'] = ResolversParentTypes['TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['ProvisionPool']>, ParentType, ContextType>;
  records?: Resolver<ResolversTypes['UserProvisionsConnection'], ParentType, ContextType, RequireFields<TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyEdgeRecordsArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensByDexActionToken0IdAndToken1IdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensByDexActionToken0IdAndToken1IdManyToManyConnection'] = ResolversParentTypes['TokenTokensByDexActionToken0IdAndToken1IdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenTokensByDexActionToken0IdAndToken1IdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensByDexActionToken0IdAndToken1IdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensByDexActionToken0IdAndToken1IdManyToManyEdge'] = ResolversParentTypes['TokenTokensByDexActionToken0IdAndToken1IdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  dexActionsByToken1Id?: Resolver<ResolversTypes['DexActionsConnection'], ParentType, ContextType, RequireFields<TokenTokensByDexActionToken0IdAndToken1IdManyToManyEdgeDexActionsByToken1IdArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensByDexActionToken1IdAndToken0IdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensByDexActionToken1IdAndToken0IdManyToManyConnection'] = ResolversParentTypes['TokenTokensByDexActionToken1IdAndToken0IdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenTokensByDexActionToken1IdAndToken0IdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensByDexActionToken1IdAndToken0IdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensByDexActionToken1IdAndToken0IdManyToManyEdge'] = ResolversParentTypes['TokenTokensByDexActionToken1IdAndToken0IdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  dexActionsByToken0Id?: Resolver<ResolversTypes['DexActionsConnection'], ParentType, ContextType, RequireFields<TokenTokensByDexActionToken1IdAndToken0IdManyToManyEdgeDexActionsByToken0IdArgs, 'orderBy'>>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyConnection'] = ResolversParentTypes['TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyEdge'] = ResolversParentTypes['TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  poolDayDataQuote?: Resolver<ResolversTypes['PoolDayDataConnection'], ParentType, ContextType, RequireFields<TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyEdgePoolDayDataQuoteArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyConnection'] = ResolversParentTypes['TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyEdge'] = ResolversParentTypes['TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  poolDayDataBase?: Resolver<ResolversTypes['PoolDayDataConnection'], ParentType, ContextType, RequireFields<TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyEdgePoolDayDataBaseArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyConnection'] = ResolversParentTypes['TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyEdge'] = ResolversParentTypes['TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  poolHourDataByToken1Id?: Resolver<ResolversTypes['PoolHourDataConnection'], ParentType, ContextType, RequireFields<TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyEdgePoolHourDataByToken1IdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyConnection'] = ResolversParentTypes['TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyEdge'] = ResolversParentTypes['TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  poolHourDataByToken0Id?: Resolver<ResolversTypes['PoolHourDataConnection'], ParentType, ContextType, RequireFields<TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyEdgePoolHourDataByToken0IdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensByPoolToken0IdAndToken1IdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensByPoolToken0IdAndToken1IdManyToManyConnection'] = ResolversParentTypes['TokenTokensByPoolToken0IdAndToken1IdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenTokensByPoolToken0IdAndToken1IdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensByPoolToken0IdAndToken1IdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensByPoolToken0IdAndToken1IdManyToManyEdge'] = ResolversParentTypes['TokenTokensByPoolToken0IdAndToken1IdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  poolQuote?: Resolver<ResolversTypes['PoolsConnection'], ParentType, ContextType, RequireFields<TokenTokensByPoolToken0IdAndToken1IdManyToManyEdgePoolQuoteArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensByPoolToken1IdAndToken0IdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensByPoolToken1IdAndToken0IdManyToManyConnection'] = ResolversParentTypes['TokenTokensByPoolToken1IdAndToken0IdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenTokensByPoolToken1IdAndToken0IdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensByPoolToken1IdAndToken0IdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensByPoolToken1IdAndToken0IdManyToManyEdge'] = ResolversParentTypes['TokenTokensByPoolToken1IdAndToken0IdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  poolBase?: Resolver<ResolversTypes['PoolsConnection'], ParentType, ContextType, RequireFields<TokenTokensByPoolToken1IdAndToken0IdManyToManyEdgePoolBaseArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyConnection'] = ResolversParentTypes['TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyEdge'] = ResolversParentTypes['TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  provisionPoolsByToken0Id?: Resolver<ResolversTypes['ProvisionPoolsConnection'], ParentType, ContextType, RequireFields<TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyEdgeProvisionPoolsByToken0IdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyConnection'] = ResolversParentTypes['TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyEdge'] = ResolversParentTypes['TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  provisionPoolsByToken1Id?: Resolver<ResolversTypes['ProvisionPoolsConnection'], ParentType, ContextType, RequireFields<TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyEdgeProvisionPoolsByToken1IdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyConnection'] = ResolversParentTypes['TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyEdge'] = ResolversParentTypes['TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  provisionPoolsByPoolTokenId?: Resolver<ResolversTypes['ProvisionPoolsConnection'], ParentType, ContextType, RequireFields<TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyEdgeProvisionPoolsByPoolTokenIdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyConnection'] = ResolversParentTypes['TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyEdge'] = ResolversParentTypes['TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  provisionPoolsByToken1Id?: Resolver<ResolversTypes['ProvisionPoolsConnection'], ParentType, ContextType, RequireFields<TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyEdgeProvisionPoolsByToken1IdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyConnection'] = ResolversParentTypes['TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyEdge'] = ResolversParentTypes['TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  provisionPoolsByPoolTokenId?: Resolver<ResolversTypes['ProvisionPoolsConnection'], ParentType, ContextType, RequireFields<TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyEdgeProvisionPoolsByPoolTokenIdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyConnection'] = ResolversParentTypes['TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyEdge'] = ResolversParentTypes['TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  provisionPoolsByToken0Id?: Resolver<ResolversTypes['ProvisionPoolsConnection'], ParentType, ContextType, RequireFields<TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyEdgeProvisionPoolsByToken0IdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyConnection'] = ResolversParentTypes['TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyEdge'] = ResolversParentTypes['TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  systemConstsByNativeTokenId?: Resolver<ResolversTypes['SystemConstsConnection'], ParentType, ContextType, RequireFields<TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyEdgeSystemConstsByNativeTokenIdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyConnection'] = ResolversParentTypes['TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyEdge'] = ResolversParentTypes['TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  systemConstsByStableTokenId?: Resolver<ResolversTypes['SystemConstsConnection'], ParentType, ContextType, RequireFields<TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyEdgeSystemConstsByStableTokenIdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyConnection'] = ResolversParentTypes['TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyEdge'] = ResolversParentTypes['TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  systemConstsByStakignTokenId?: Resolver<ResolversTypes['SystemConstsConnection'], ParentType, ContextType, RequireFields<TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyEdgeSystemConstsByStakignTokenIdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyConnection'] = ResolversParentTypes['TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyEdge'] = ResolversParentTypes['TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  systemConstsByLiquidTokenId?: Resolver<ResolversTypes['SystemConstsConnection'], ParentType, ContextType, RequireFields<TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyEdgeSystemConstsByLiquidTokenIdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyConnection'] = ResolversParentTypes['TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyEdge'] = ResolversParentTypes['TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  systemConstsByStableTokenId?: Resolver<ResolversTypes['SystemConstsConnection'], ParentType, ContextType, RequireFields<TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyEdgeSystemConstsByStableTokenIdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyConnection'] = ResolversParentTypes['TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyEdge'] = ResolversParentTypes['TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  systemConstsByStakignTokenId?: Resolver<ResolversTypes['SystemConstsConnection'], ParentType, ContextType, RequireFields<TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyEdgeSystemConstsByStakignTokenIdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyConnection'] = ResolversParentTypes['TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyEdge'] = ResolversParentTypes['TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  systemConstsByLiquidTokenId?: Resolver<ResolversTypes['SystemConstsConnection'], ParentType, ContextType, RequireFields<TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyEdgeSystemConstsByLiquidTokenIdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyConnection'] = ResolversParentTypes['TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyEdge'] = ResolversParentTypes['TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  systemConstsByNativeTokenId?: Resolver<ResolversTypes['SystemConstsConnection'], ParentType, ContextType, RequireFields<TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyEdgeSystemConstsByNativeTokenIdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyConnection'] = ResolversParentTypes['TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyEdge'] = ResolversParentTypes['TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  systemConstsByStakignTokenId?: Resolver<ResolversTypes['SystemConstsConnection'], ParentType, ContextType, RequireFields<TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyEdgeSystemConstsByStakignTokenIdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyConnection'] = ResolversParentTypes['TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyEdge'] = ResolversParentTypes['TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  systemConstsByLiquidTokenId?: Resolver<ResolversTypes['SystemConstsConnection'], ParentType, ContextType, RequireFields<TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyEdgeSystemConstsByLiquidTokenIdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyConnection'] = ResolversParentTypes['TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyEdge'] = ResolversParentTypes['TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  systemConstsByNativeTokenId?: Resolver<ResolversTypes['SystemConstsConnection'], ParentType, ContextType, RequireFields<TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyEdgeSystemConstsByNativeTokenIdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyConnection'] = ResolversParentTypes['TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyEdge'] = ResolversParentTypes['TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  systemConstsByStableTokenId?: Resolver<ResolversTypes['SystemConstsConnection'], ParentType, ContextType, RequireFields<TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyEdgeSystemConstsByStableTokenIdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyConnection'] = ResolversParentTypes['TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyEdge'] = ResolversParentTypes['TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  userProvisionsByToken1Id?: Resolver<ResolversTypes['UserProvisionsConnection'], ParentType, ContextType, RequireFields<TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyEdgeUserProvisionsByToken1IdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyConnection'] = ResolversParentTypes['TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyEdge'] = ResolversParentTypes['TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  userProvisionsByToken0Id?: Resolver<ResolversTypes['UserProvisionsConnection'], ParentType, ContextType, RequireFields<TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyEdgeUserProvisionsByToken0IdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokensConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokensConnection'] = ResolversParentTypes['TokensConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TokensEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Token']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokensEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokensEdge'] = ResolversParentTypes['TokensEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TotalLoanPositionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TotalLoanPosition'] = ResolversParentTypes['TotalLoanPosition']> = ResolversObject<{
  collateral?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  collateralAmount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collateralId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  debitAmount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TotalLoanPositionsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TotalLoanPositionsConnection'] = ResolversParentTypes['TotalLoanPositionsConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TotalLoanPositionsEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['TotalLoanPosition']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TotalLoanPositionsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TotalLoanPositionsEdge'] = ResolversParentTypes['TotalLoanPositionsEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['TotalLoanPosition']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransferResolvers<ContextType = any, ParentType extends ResolversParentTypes['Transfer'] = ResolversParentTypes['Transfer']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  amountInUSD?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  call?: Resolver<Maybe<ResolversTypes['Call']>, ParentType, ContextType>;
  callId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extrinsic?: Resolver<Maybe<ResolversTypes['Extrinsic']>, ParentType, ContextType>;
  extrinsicId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  fromId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isSuccess?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  toId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  tokenId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransfersConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TransfersConnection'] = ResolversParentTypes['TransfersConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TransfersEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Transfer']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransfersEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TransfersEdge'] = ResolversParentTypes['TransfersEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Transfer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserProvisionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserProvision'] = ResolversParentTypes['UserProvision']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pool?: Resolver<Maybe<ResolversTypes['ProvisionPool']>, ParentType, ContextType>;
  poolId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token0?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  token0Amount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token0Id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token1?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  token1Amount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token1Id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserProvisionsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserProvisionsConnection'] = ResolversParentTypes['UserProvisionsConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['UserProvisionsEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['UserProvision']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserProvisionsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserProvisionsEdge'] = ResolversParentTypes['UserProvisionsEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['UserProvision']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _MetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['_Metadata'] = ResolversParentTypes['_Metadata']> = ResolversObject<{
  chain?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  genesisHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  indexerHealthy?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  indexerNodeVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastProcessedHeight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lastProcessedTimestamp?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  queryNodeVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  specName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  targetHeight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Account?: AccountResolvers<ContextType>;
  AccountAccountsByTransferFromIdAndToIdManyToManyConnection?: AccountAccountsByTransferFromIdAndToIdManyToManyConnectionResolvers<ContextType>;
  AccountAccountsByTransferFromIdAndToIdManyToManyEdge?: AccountAccountsByTransferFromIdAndToIdManyToManyEdgeResolvers<ContextType>;
  AccountAccountsByTransferToIdAndFromIdManyToManyConnection?: AccountAccountsByTransferToIdAndFromIdManyToManyConnectionResolvers<ContextType>;
  AccountAccountsByTransferToIdAndFromIdManyToManyEdge?: AccountAccountsByTransferToIdAndFromIdManyToManyEdgeResolvers<ContextType>;
  AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyConnection?: AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyConnectionResolvers<ContextType>;
  AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyEdge?: AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyEdgeResolvers<ContextType>;
  AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyConnection?: AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyConnectionResolvers<ContextType>;
  AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyEdge?: AccountBlocksByOracleFeedRecordAccountIdAndBlockIdManyToManyEdgeResolvers<ContextType>;
  AccountCallsByCallSignerIdAndParentCallIdManyToManyConnection?: AccountCallsByCallSignerIdAndParentCallIdManyToManyConnectionResolvers<ContextType>;
  AccountCallsByCallSignerIdAndParentCallIdManyToManyEdge?: AccountCallsByCallSignerIdAndParentCallIdManyToManyEdgeResolvers<ContextType>;
  AccountCallsByTransferFromIdAndCallIdManyToManyConnection?: AccountCallsByTransferFromIdAndCallIdManyToManyConnectionResolvers<ContextType>;
  AccountCallsByTransferFromIdAndCallIdManyToManyEdge?: AccountCallsByTransferFromIdAndCallIdManyToManyEdgeResolvers<ContextType>;
  AccountCallsByTransferToIdAndCallIdManyToManyConnection?: AccountCallsByTransferToIdAndCallIdManyToManyConnectionResolvers<ContextType>;
  AccountCallsByTransferToIdAndCallIdManyToManyEdge?: AccountCallsByTransferToIdAndCallIdManyToManyEdgeResolvers<ContextType>;
  AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyConnection?: AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyConnectionResolvers<ContextType>;
  AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyEdge?: AccountExtrinsicsByCallSignerIdAndExtrinsicIdManyToManyEdgeResolvers<ContextType>;
  AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyConnection?: AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyConnectionResolvers<ContextType>;
  AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyEdge?: AccountExtrinsicsByDexActionAccountIdAndExtrinsicIdManyToManyEdgeResolvers<ContextType>;
  AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyConnection?: AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyConnectionResolvers<ContextType>;
  AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyEdge?: AccountExtrinsicsByHomaActionAccountIdAndExtrinsicIdManyToManyEdgeResolvers<ContextType>;
  AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyConnection?: AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyConnectionResolvers<ContextType>;
  AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyEdge?: AccountExtrinsicsByIncentiveActionAccountIdAndExtrinsicIdManyToManyEdgeResolvers<ContextType>;
  AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyConnection?: AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyConnectionResolvers<ContextType>;
  AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyEdge?: AccountExtrinsicsByLoanActionAccountIdAndExtrinsicIdManyToManyEdgeResolvers<ContextType>;
  AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyConnection?: AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyConnectionResolvers<ContextType>;
  AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyEdge?: AccountExtrinsicsByNftActionAccountIdAndExtrinsicIdManyToManyEdgeResolvers<ContextType>;
  AccountExtrinsicsByTransferFromIdAndExtrinsicIdManyToManyConnection?: AccountExtrinsicsByTransferFromIdAndExtrinsicIdManyToManyConnectionResolvers<ContextType>;
  AccountExtrinsicsByTransferFromIdAndExtrinsicIdManyToManyEdge?: AccountExtrinsicsByTransferFromIdAndExtrinsicIdManyToManyEdgeResolvers<ContextType>;
  AccountExtrinsicsByTransferToIdAndExtrinsicIdManyToManyConnection?: AccountExtrinsicsByTransferToIdAndExtrinsicIdManyToManyConnectionResolvers<ContextType>;
  AccountExtrinsicsByTransferToIdAndExtrinsicIdManyToManyEdge?: AccountExtrinsicsByTransferToIdAndExtrinsicIdManyToManyEdgeResolvers<ContextType>;
  AccountPoolsByDexActionAccountIdAndPoolIdManyToManyConnection?: AccountPoolsByDexActionAccountIdAndPoolIdManyToManyConnectionResolvers<ContextType>;
  AccountPoolsByDexActionAccountIdAndPoolIdManyToManyEdge?: AccountPoolsByDexActionAccountIdAndPoolIdManyToManyEdgeResolvers<ContextType>;
  AccountTokensByDexActionAccountIdAndToken0IdManyToManyConnection?: AccountTokensByDexActionAccountIdAndToken0IdManyToManyConnectionResolvers<ContextType>;
  AccountTokensByDexActionAccountIdAndToken0IdManyToManyEdge?: AccountTokensByDexActionAccountIdAndToken0IdManyToManyEdgeResolvers<ContextType>;
  AccountTokensByDexActionAccountIdAndToken1IdManyToManyConnection?: AccountTokensByDexActionAccountIdAndToken1IdManyToManyConnectionResolvers<ContextType>;
  AccountTokensByDexActionAccountIdAndToken1IdManyToManyEdge?: AccountTokensByDexActionAccountIdAndToken1IdManyToManyEdgeResolvers<ContextType>;
  AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyConnection?: AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyConnectionResolvers<ContextType>;
  AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyEdge?: AccountTokensByLoanPositionOwnerIdAndCollateralIdManyToManyEdgeResolvers<ContextType>;
  AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyConnection?: AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyConnectionResolvers<ContextType>;
  AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyEdge?: AccountTokensByOracleFeedRecordAccountIdAndTokenIdManyToManyEdgeResolvers<ContextType>;
  AccountTokensByTransferFromIdAndTokenIdManyToManyConnection?: AccountTokensByTransferFromIdAndTokenIdManyToManyConnectionResolvers<ContextType>;
  AccountTokensByTransferFromIdAndTokenIdManyToManyEdge?: AccountTokensByTransferFromIdAndTokenIdManyToManyEdgeResolvers<ContextType>;
  AccountTokensByTransferToIdAndTokenIdManyToManyConnection?: AccountTokensByTransferToIdAndTokenIdManyToManyConnectionResolvers<ContextType>;
  AccountTokensByTransferToIdAndTokenIdManyToManyEdge?: AccountTokensByTransferToIdAndTokenIdManyToManyEdgeResolvers<ContextType>;
  AccountsConnection?: AccountsConnectionResolvers<ContextType>;
  AccountsEdge?: AccountsEdgeResolvers<ContextType>;
  BigFloat?: GraphQLScalarType;
  Block?: BlockResolvers<ContextType>;
  BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyConnection?: BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyConnectionResolvers<ContextType>;
  BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyEdge?: BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyEdgeResolvers<ContextType>;
  BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyConnection?: BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyConnectionResolvers<ContextType>;
  BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyEdge?: BlockAccountsByOracleFeedRecordBlockIdAndAccountIdManyToManyEdgeResolvers<ContextType>;
  BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyConnection?: BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyConnectionResolvers<ContextType>;
  BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyEdge?: BlockBlocksByLoanParamsHistoryEndAtBlockIdAndStartAtBlockIdManyToManyEdgeResolvers<ContextType>;
  BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyConnection?: BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyConnectionResolvers<ContextType>;
  BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyEdge?: BlockBlocksByLoanParamsHistoryStartAtBlockIdAndEndAtBlockIdManyToManyEdgeResolvers<ContextType>;
  BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyConnection?: BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyConnectionResolvers<ContextType>;
  BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyEdge?: BlockBlocksByProvisionPoolEndAtBlockIdAndStartAtBlockIdManyToManyEdgeResolvers<ContextType>;
  BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyConnection?: BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyConnectionResolvers<ContextType>;
  BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyEdge?: BlockBlocksByProvisionPoolStartAtBlockIdAndEndAtBlockIdManyToManyEdgeResolvers<ContextType>;
  BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyConnection?: BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyConnectionResolvers<ContextType>;
  BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyEdge?: BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyEdgeResolvers<ContextType>;
  BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyConnection?: BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyConnectionResolvers<ContextType>;
  BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyEdge?: BlockTokensByLoanParamStartAtBlockIdAndCollateralIdManyToManyEdgeResolvers<ContextType>;
  BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyConnection?: BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyConnectionResolvers<ContextType>;
  BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyEdge?: BlockTokensByLoanParamsHistoryEndAtBlockIdAndCollateralIdManyToManyEdgeResolvers<ContextType>;
  BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyConnection?: BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyConnectionResolvers<ContextType>;
  BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyEdge?: BlockTokensByLoanParamsHistoryStartAtBlockIdAndCollateralIdManyToManyEdgeResolvers<ContextType>;
  BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyConnection?: BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyConnectionResolvers<ContextType>;
  BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyEdge?: BlockTokensByOracleFeedRecordBlockIdAndTokenIdManyToManyEdgeResolvers<ContextType>;
  BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyConnection?: BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyConnectionResolvers<ContextType>;
  BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyEdge?: BlockTokensByProvisionPoolEndAtBlockIdAndPoolTokenIdManyToManyEdgeResolvers<ContextType>;
  BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyConnection?: BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyConnectionResolvers<ContextType>;
  BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyEdge?: BlockTokensByProvisionPoolEndAtBlockIdAndToken0IdManyToManyEdgeResolvers<ContextType>;
  BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyConnection?: BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyConnectionResolvers<ContextType>;
  BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyEdge?: BlockTokensByProvisionPoolEndAtBlockIdAndToken1IdManyToManyEdgeResolvers<ContextType>;
  BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyConnection?: BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyConnectionResolvers<ContextType>;
  BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyEdge?: BlockTokensByProvisionPoolStartAtBlockIdAndPoolTokenIdManyToManyEdgeResolvers<ContextType>;
  BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyConnection?: BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyConnectionResolvers<ContextType>;
  BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyEdge?: BlockTokensByProvisionPoolStartAtBlockIdAndToken0IdManyToManyEdgeResolvers<ContextType>;
  BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyConnection?: BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyConnectionResolvers<ContextType>;
  BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyEdge?: BlockTokensByProvisionPoolStartAtBlockIdAndToken1IdManyToManyEdgeResolvers<ContextType>;
  BlocksConnection?: BlocksConnectionResolvers<ContextType>;
  BlocksEdge?: BlocksEdgeResolvers<ContextType>;
  Call?: CallResolvers<ContextType>;
  CallAccountsByCallParentCallIdAndSignerIdManyToManyConnection?: CallAccountsByCallParentCallIdAndSignerIdManyToManyConnectionResolvers<ContextType>;
  CallAccountsByCallParentCallIdAndSignerIdManyToManyEdge?: CallAccountsByCallParentCallIdAndSignerIdManyToManyEdgeResolvers<ContextType>;
  CallAccountsByTransferCallIdAndFromIdManyToManyConnection?: CallAccountsByTransferCallIdAndFromIdManyToManyConnectionResolvers<ContextType>;
  CallAccountsByTransferCallIdAndFromIdManyToManyEdge?: CallAccountsByTransferCallIdAndFromIdManyToManyEdgeResolvers<ContextType>;
  CallAccountsByTransferCallIdAndToIdManyToManyConnection?: CallAccountsByTransferCallIdAndToIdManyToManyConnectionResolvers<ContextType>;
  CallAccountsByTransferCallIdAndToIdManyToManyEdge?: CallAccountsByTransferCallIdAndToIdManyToManyEdgeResolvers<ContextType>;
  CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyConnection?: CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyConnectionResolvers<ContextType>;
  CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyEdge?: CallExtrinsicsByCallParentCallIdAndExtrinsicIdManyToManyEdgeResolvers<ContextType>;
  CallExtrinsicsByTransferCallIdAndExtrinsicIdManyToManyConnection?: CallExtrinsicsByTransferCallIdAndExtrinsicIdManyToManyConnectionResolvers<ContextType>;
  CallExtrinsicsByTransferCallIdAndExtrinsicIdManyToManyEdge?: CallExtrinsicsByTransferCallIdAndExtrinsicIdManyToManyEdgeResolvers<ContextType>;
  CallTokensByTransferCallIdAndTokenIdManyToManyConnection?: CallTokensByTransferCallIdAndTokenIdManyToManyConnectionResolvers<ContextType>;
  CallTokensByTransferCallIdAndTokenIdManyToManyEdge?: CallTokensByTransferCallIdAndTokenIdManyToManyEdgeResolvers<ContextType>;
  CallsConnection?: CallsConnectionResolvers<ContextType>;
  CallsEdge?: CallsEdgeResolvers<ContextType>;
  Cursor?: GraphQLScalarType;
  Date?: GraphQLScalarType;
  Datetime?: GraphQLScalarType;
  Dex?: DexResolvers<ContextType>;
  DexAction?: DexActionResolvers<ContextType>;
  DexActionsConnection?: DexActionsConnectionResolvers<ContextType>;
  DexActionsEdge?: DexActionsEdgeResolvers<ContextType>;
  DexDayDataConnection?: DexDayDataConnectionResolvers<ContextType>;
  DexDayDataEdge?: DexDayDataEdgeResolvers<ContextType>;
  DexDayDatum?: DexDayDatumResolvers<ContextType>;
  DexesConnection?: DexesConnectionResolvers<ContextType>;
  DexesEdge?: DexesEdgeResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  EventsConnection?: EventsConnectionResolvers<ContextType>;
  EventsEdge?: EventsEdgeResolvers<ContextType>;
  Extrinsic?: ExtrinsicResolvers<ContextType>;
  ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyConnection?: ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyConnectionResolvers<ContextType>;
  ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyEdge?: ExtrinsicAccountsByCallExtrinsicIdAndSignerIdManyToManyEdgeResolvers<ContextType>;
  ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyConnection?: ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyConnectionResolvers<ContextType>;
  ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyEdge?: ExtrinsicAccountsByDexActionExtrinsicIdAndAccountIdManyToManyEdgeResolvers<ContextType>;
  ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyConnection?: ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyConnectionResolvers<ContextType>;
  ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyEdge?: ExtrinsicAccountsByHomaActionExtrinsicIdAndAccountIdManyToManyEdgeResolvers<ContextType>;
  ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyConnection?: ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyConnectionResolvers<ContextType>;
  ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyEdge?: ExtrinsicAccountsByIncentiveActionExtrinsicIdAndAccountIdManyToManyEdgeResolvers<ContextType>;
  ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyConnection?: ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyConnectionResolvers<ContextType>;
  ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyEdge?: ExtrinsicAccountsByLoanActionExtrinsicIdAndAccountIdManyToManyEdgeResolvers<ContextType>;
  ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyConnection?: ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyConnectionResolvers<ContextType>;
  ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyEdge?: ExtrinsicAccountsByNftActionExtrinsicIdAndAccountIdManyToManyEdgeResolvers<ContextType>;
  ExtrinsicAccountsByTransferExtrinsicIdAndFromIdManyToManyConnection?: ExtrinsicAccountsByTransferExtrinsicIdAndFromIdManyToManyConnectionResolvers<ContextType>;
  ExtrinsicAccountsByTransferExtrinsicIdAndFromIdManyToManyEdge?: ExtrinsicAccountsByTransferExtrinsicIdAndFromIdManyToManyEdgeResolvers<ContextType>;
  ExtrinsicAccountsByTransferExtrinsicIdAndToIdManyToManyConnection?: ExtrinsicAccountsByTransferExtrinsicIdAndToIdManyToManyConnectionResolvers<ContextType>;
  ExtrinsicAccountsByTransferExtrinsicIdAndToIdManyToManyEdge?: ExtrinsicAccountsByTransferExtrinsicIdAndToIdManyToManyEdgeResolvers<ContextType>;
  ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyConnection?: ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyConnectionResolvers<ContextType>;
  ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyEdge?: ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyEdgeResolvers<ContextType>;
  ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyConnection?: ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyConnectionResolvers<ContextType>;
  ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyEdge?: ExtrinsicCallsByCallExtrinsicIdAndParentCallIdManyToManyEdgeResolvers<ContextType>;
  ExtrinsicCallsByTransferExtrinsicIdAndCallIdManyToManyConnection?: ExtrinsicCallsByTransferExtrinsicIdAndCallIdManyToManyConnectionResolvers<ContextType>;
  ExtrinsicCallsByTransferExtrinsicIdAndCallIdManyToManyEdge?: ExtrinsicCallsByTransferExtrinsicIdAndCallIdManyToManyEdgeResolvers<ContextType>;
  ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyConnection?: ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyConnectionResolvers<ContextType>;
  ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyEdge?: ExtrinsicPoolsByDexActionExtrinsicIdAndPoolIdManyToManyEdgeResolvers<ContextType>;
  ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyConnection?: ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyConnectionResolvers<ContextType>;
  ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyEdge?: ExtrinsicTokensByDexActionExtrinsicIdAndToken0IdManyToManyEdgeResolvers<ContextType>;
  ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyConnection?: ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyConnectionResolvers<ContextType>;
  ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyEdge?: ExtrinsicTokensByDexActionExtrinsicIdAndToken1IdManyToManyEdgeResolvers<ContextType>;
  ExtrinsicTokensByTransferExtrinsicIdAndTokenIdManyToManyConnection?: ExtrinsicTokensByTransferExtrinsicIdAndTokenIdManyToManyConnectionResolvers<ContextType>;
  ExtrinsicTokensByTransferExtrinsicIdAndTokenIdManyToManyEdge?: ExtrinsicTokensByTransferExtrinsicIdAndTokenIdManyToManyEdgeResolvers<ContextType>;
  ExtrinsicsConnection?: ExtrinsicsConnectionResolvers<ContextType>;
  ExtrinsicsEdge?: ExtrinsicsEdgeResolvers<ContextType>;
  HomaAction?: HomaActionResolvers<ContextType>;
  HomaActionsConnection?: HomaActionsConnectionResolvers<ContextType>;
  HomaActionsEdge?: HomaActionsEdgeResolvers<ContextType>;
  IncentiveAction?: IncentiveActionResolvers<ContextType>;
  IncentiveActionsConnection?: IncentiveActionsConnectionResolvers<ContextType>;
  IncentiveActionsEdge?: IncentiveActionsEdgeResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  LoanAction?: LoanActionResolvers<ContextType>;
  LoanActionsConnection?: LoanActionsConnectionResolvers<ContextType>;
  LoanActionsEdge?: LoanActionsEdgeResolvers<ContextType>;
  LoanParam?: LoanParamResolvers<ContextType>;
  LoanParamsConnection?: LoanParamsConnectionResolvers<ContextType>;
  LoanParamsEdge?: LoanParamsEdgeResolvers<ContextType>;
  LoanParamsHistoriesConnection?: LoanParamsHistoriesConnectionResolvers<ContextType>;
  LoanParamsHistoriesEdge?: LoanParamsHistoriesEdgeResolvers<ContextType>;
  LoanParamsHistory?: LoanParamsHistoryResolvers<ContextType>;
  LoanPosition?: LoanPositionResolvers<ContextType>;
  LoanPositionsConnection?: LoanPositionsConnectionResolvers<ContextType>;
  LoanPositionsEdge?: LoanPositionsEdgeResolvers<ContextType>;
  NFTAction?: NftActionResolvers<ContextType>;
  NftActionsConnection?: NftActionsConnectionResolvers<ContextType>;
  NftActionsEdge?: NftActionsEdgeResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  OracleFeedRecord?: OracleFeedRecordResolvers<ContextType>;
  OracleFeedRecordsConnection?: OracleFeedRecordsConnectionResolvers<ContextType>;
  OracleFeedRecordsEdge?: OracleFeedRecordsEdgeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Pool?: PoolResolvers<ContextType>;
  PoolAccountsByDexActionPoolIdAndAccountIdManyToManyConnection?: PoolAccountsByDexActionPoolIdAndAccountIdManyToManyConnectionResolvers<ContextType>;
  PoolAccountsByDexActionPoolIdAndAccountIdManyToManyEdge?: PoolAccountsByDexActionPoolIdAndAccountIdManyToManyEdgeResolvers<ContextType>;
  PoolDayDataConnection?: PoolDayDataConnectionResolvers<ContextType>;
  PoolDayDataEdge?: PoolDayDataEdgeResolvers<ContextType>;
  PoolDayDatum?: PoolDayDatumResolvers<ContextType>;
  PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyConnection?: PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyConnectionResolvers<ContextType>;
  PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyEdge?: PoolExtrinsicsByDexActionPoolIdAndExtrinsicIdManyToManyEdgeResolvers<ContextType>;
  PoolHourDataConnection?: PoolHourDataConnectionResolvers<ContextType>;
  PoolHourDataEdge?: PoolHourDataEdgeResolvers<ContextType>;
  PoolHourDatum?: PoolHourDatumResolvers<ContextType>;
  PoolTokensByDexActionPoolIdAndToken0IdManyToManyConnection?: PoolTokensByDexActionPoolIdAndToken0IdManyToManyConnectionResolvers<ContextType>;
  PoolTokensByDexActionPoolIdAndToken0IdManyToManyEdge?: PoolTokensByDexActionPoolIdAndToken0IdManyToManyEdgeResolvers<ContextType>;
  PoolTokensByDexActionPoolIdAndToken1IdManyToManyConnection?: PoolTokensByDexActionPoolIdAndToken1IdManyToManyConnectionResolvers<ContextType>;
  PoolTokensByDexActionPoolIdAndToken1IdManyToManyEdge?: PoolTokensByDexActionPoolIdAndToken1IdManyToManyEdgeResolvers<ContextType>;
  PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyConnection?: PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyConnectionResolvers<ContextType>;
  PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyEdge?: PoolTokensByPoolDayDatumPoolIdAndToken0IdManyToManyEdgeResolvers<ContextType>;
  PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyConnection?: PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyConnectionResolvers<ContextType>;
  PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyEdge?: PoolTokensByPoolDayDatumPoolIdAndToken1IdManyToManyEdgeResolvers<ContextType>;
  PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyConnection?: PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyConnectionResolvers<ContextType>;
  PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyEdge?: PoolTokensByPoolHourDatumPoolIdAndToken0IdManyToManyEdgeResolvers<ContextType>;
  PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyConnection?: PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyConnectionResolvers<ContextType>;
  PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyEdge?: PoolTokensByPoolHourDatumPoolIdAndToken1IdManyToManyEdgeResolvers<ContextType>;
  PoolsConnection?: PoolsConnectionResolvers<ContextType>;
  PoolsEdge?: PoolsEdgeResolvers<ContextType>;
  PriceBundle?: PriceBundleResolvers<ContextType>;
  PriceBundlesConnection?: PriceBundlesConnectionResolvers<ContextType>;
  PriceBundlesEdge?: PriceBundlesEdgeResolvers<ContextType>;
  PriceRecord?: PriceRecordResolvers<ContextType>;
  PriceRecordsConnection?: PriceRecordsConnectionResolvers<ContextType>;
  PriceRecordsEdge?: PriceRecordsEdgeResolvers<ContextType>;
  ProvisionPool?: ProvisionPoolResolvers<ContextType>;
  ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyConnection?: ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyConnectionResolvers<ContextType>;
  ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyEdge?: ProvisionPoolTokensByUserProvisionPoolIdAndToken0IdManyToManyEdgeResolvers<ContextType>;
  ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyConnection?: ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyConnectionResolvers<ContextType>;
  ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyEdge?: ProvisionPoolTokensByUserProvisionPoolIdAndToken1IdManyToManyEdgeResolvers<ContextType>;
  ProvisionPoolsConnection?: ProvisionPoolsConnectionResolvers<ContextType>;
  ProvisionPoolsEdge?: ProvisionPoolsEdgeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SystemConst?: SystemConstResolvers<ContextType>;
  SystemConstsConnection?: SystemConstsConnectionResolvers<ContextType>;
  SystemConstsEdge?: SystemConstsEdgeResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  TokenAccountsByDexActionToken0IdAndAccountIdManyToManyConnection?: TokenAccountsByDexActionToken0IdAndAccountIdManyToManyConnectionResolvers<ContextType>;
  TokenAccountsByDexActionToken0IdAndAccountIdManyToManyEdge?: TokenAccountsByDexActionToken0IdAndAccountIdManyToManyEdgeResolvers<ContextType>;
  TokenAccountsByDexActionToken1IdAndAccountIdManyToManyConnection?: TokenAccountsByDexActionToken1IdAndAccountIdManyToManyConnectionResolvers<ContextType>;
  TokenAccountsByDexActionToken1IdAndAccountIdManyToManyEdge?: TokenAccountsByDexActionToken1IdAndAccountIdManyToManyEdgeResolvers<ContextType>;
  TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyConnection?: TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyConnectionResolvers<ContextType>;
  TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyEdge?: TokenAccountsByLoanPositionCollateralIdAndOwnerIdManyToManyEdgeResolvers<ContextType>;
  TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyConnection?: TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyConnectionResolvers<ContextType>;
  TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyEdge?: TokenAccountsByOracleFeedRecordTokenIdAndAccountIdManyToManyEdgeResolvers<ContextType>;
  TokenAccountsByTransferTokenIdAndFromIdManyToManyConnection?: TokenAccountsByTransferTokenIdAndFromIdManyToManyConnectionResolvers<ContextType>;
  TokenAccountsByTransferTokenIdAndFromIdManyToManyEdge?: TokenAccountsByTransferTokenIdAndFromIdManyToManyEdgeResolvers<ContextType>;
  TokenAccountsByTransferTokenIdAndToIdManyToManyConnection?: TokenAccountsByTransferTokenIdAndToIdManyToManyConnectionResolvers<ContextType>;
  TokenAccountsByTransferTokenIdAndToIdManyToManyEdge?: TokenAccountsByTransferTokenIdAndToIdManyToManyEdgeResolvers<ContextType>;
  TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyConnection?: TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyConnectionResolvers<ContextType>;
  TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyEdge?: TokenBlocksByLoanParamCollateralIdAndStartAtBlockIdManyToManyEdgeResolvers<ContextType>;
  TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyConnection?: TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyConnectionResolvers<ContextType>;
  TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyEdge?: TokenBlocksByLoanParamsHistoryCollateralIdAndEndAtBlockIdManyToManyEdgeResolvers<ContextType>;
  TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyConnection?: TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyConnectionResolvers<ContextType>;
  TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyEdge?: TokenBlocksByLoanParamsHistoryCollateralIdAndStartAtBlockIdManyToManyEdgeResolvers<ContextType>;
  TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyConnection?: TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyConnectionResolvers<ContextType>;
  TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyEdge?: TokenBlocksByOracleFeedRecordTokenIdAndBlockIdManyToManyEdgeResolvers<ContextType>;
  TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyConnection?: TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyConnectionResolvers<ContextType>;
  TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyEdge?: TokenBlocksByProvisionPoolPoolTokenIdAndEndAtBlockIdManyToManyEdgeResolvers<ContextType>;
  TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyConnection?: TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyConnectionResolvers<ContextType>;
  TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyEdge?: TokenBlocksByProvisionPoolPoolTokenIdAndStartAtBlockIdManyToManyEdgeResolvers<ContextType>;
  TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyConnection?: TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyConnectionResolvers<ContextType>;
  TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyEdge?: TokenBlocksByProvisionPoolToken0IdAndEndAtBlockIdManyToManyEdgeResolvers<ContextType>;
  TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyConnection?: TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyConnectionResolvers<ContextType>;
  TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyEdge?: TokenBlocksByProvisionPoolToken0IdAndStartAtBlockIdManyToManyEdgeResolvers<ContextType>;
  TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyConnection?: TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyConnectionResolvers<ContextType>;
  TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyEdge?: TokenBlocksByProvisionPoolToken1IdAndEndAtBlockIdManyToManyEdgeResolvers<ContextType>;
  TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyConnection?: TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyConnectionResolvers<ContextType>;
  TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyEdge?: TokenBlocksByProvisionPoolToken1IdAndStartAtBlockIdManyToManyEdgeResolvers<ContextType>;
  TokenCallsByTransferTokenIdAndCallIdManyToManyConnection?: TokenCallsByTransferTokenIdAndCallIdManyToManyConnectionResolvers<ContextType>;
  TokenCallsByTransferTokenIdAndCallIdManyToManyEdge?: TokenCallsByTransferTokenIdAndCallIdManyToManyEdgeResolvers<ContextType>;
  TokenDayDataConnection?: TokenDayDataConnectionResolvers<ContextType>;
  TokenDayDataEdge?: TokenDayDataEdgeResolvers<ContextType>;
  TokenDayDatum?: TokenDayDatumResolvers<ContextType>;
  TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyConnection?: TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyConnectionResolvers<ContextType>;
  TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyEdge?: TokenExtrinsicsByDexActionToken0IdAndExtrinsicIdManyToManyEdgeResolvers<ContextType>;
  TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyConnection?: TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyConnectionResolvers<ContextType>;
  TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyEdge?: TokenExtrinsicsByDexActionToken1IdAndExtrinsicIdManyToManyEdgeResolvers<ContextType>;
  TokenExtrinsicsByTransferTokenIdAndExtrinsicIdManyToManyConnection?: TokenExtrinsicsByTransferTokenIdAndExtrinsicIdManyToManyConnectionResolvers<ContextType>;
  TokenExtrinsicsByTransferTokenIdAndExtrinsicIdManyToManyEdge?: TokenExtrinsicsByTransferTokenIdAndExtrinsicIdManyToManyEdgeResolvers<ContextType>;
  TokenPoolsByDexActionToken0IdAndPoolIdManyToManyConnection?: TokenPoolsByDexActionToken0IdAndPoolIdManyToManyConnectionResolvers<ContextType>;
  TokenPoolsByDexActionToken0IdAndPoolIdManyToManyEdge?: TokenPoolsByDexActionToken0IdAndPoolIdManyToManyEdgeResolvers<ContextType>;
  TokenPoolsByDexActionToken1IdAndPoolIdManyToManyConnection?: TokenPoolsByDexActionToken1IdAndPoolIdManyToManyConnectionResolvers<ContextType>;
  TokenPoolsByDexActionToken1IdAndPoolIdManyToManyEdge?: TokenPoolsByDexActionToken1IdAndPoolIdManyToManyEdgeResolvers<ContextType>;
  TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyConnection?: TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyConnectionResolvers<ContextType>;
  TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyEdge?: TokenPoolsByPoolDayDatumToken0IdAndPoolIdManyToManyEdgeResolvers<ContextType>;
  TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyConnection?: TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyConnectionResolvers<ContextType>;
  TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyEdge?: TokenPoolsByPoolDayDatumToken1IdAndPoolIdManyToManyEdgeResolvers<ContextType>;
  TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyConnection?: TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyConnectionResolvers<ContextType>;
  TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyEdge?: TokenPoolsByPoolHourDatumToken0IdAndPoolIdManyToManyEdgeResolvers<ContextType>;
  TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyConnection?: TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyConnectionResolvers<ContextType>;
  TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyEdge?: TokenPoolsByPoolHourDatumToken1IdAndPoolIdManyToManyEdgeResolvers<ContextType>;
  TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyConnection?: TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyConnectionResolvers<ContextType>;
  TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyEdge?: TokenProvisionPoolsByUserProvisionToken0IdAndPoolIdManyToManyEdgeResolvers<ContextType>;
  TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyConnection?: TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyConnectionResolvers<ContextType>;
  TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyEdge?: TokenProvisionPoolsByUserProvisionToken1IdAndPoolIdManyToManyEdgeResolvers<ContextType>;
  TokenTokensByDexActionToken0IdAndToken1IdManyToManyConnection?: TokenTokensByDexActionToken0IdAndToken1IdManyToManyConnectionResolvers<ContextType>;
  TokenTokensByDexActionToken0IdAndToken1IdManyToManyEdge?: TokenTokensByDexActionToken0IdAndToken1IdManyToManyEdgeResolvers<ContextType>;
  TokenTokensByDexActionToken1IdAndToken0IdManyToManyConnection?: TokenTokensByDexActionToken1IdAndToken0IdManyToManyConnectionResolvers<ContextType>;
  TokenTokensByDexActionToken1IdAndToken0IdManyToManyEdge?: TokenTokensByDexActionToken1IdAndToken0IdManyToManyEdgeResolvers<ContextType>;
  TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyConnection?: TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyConnectionResolvers<ContextType>;
  TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyEdge?: TokenTokensByPoolDayDatumToken0IdAndToken1IdManyToManyEdgeResolvers<ContextType>;
  TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyConnection?: TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyConnectionResolvers<ContextType>;
  TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyEdge?: TokenTokensByPoolDayDatumToken1IdAndToken0IdManyToManyEdgeResolvers<ContextType>;
  TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyConnection?: TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyConnectionResolvers<ContextType>;
  TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyEdge?: TokenTokensByPoolHourDatumToken0IdAndToken1IdManyToManyEdgeResolvers<ContextType>;
  TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyConnection?: TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyConnectionResolvers<ContextType>;
  TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyEdge?: TokenTokensByPoolHourDatumToken1IdAndToken0IdManyToManyEdgeResolvers<ContextType>;
  TokenTokensByPoolToken0IdAndToken1IdManyToManyConnection?: TokenTokensByPoolToken0IdAndToken1IdManyToManyConnectionResolvers<ContextType>;
  TokenTokensByPoolToken0IdAndToken1IdManyToManyEdge?: TokenTokensByPoolToken0IdAndToken1IdManyToManyEdgeResolvers<ContextType>;
  TokenTokensByPoolToken1IdAndToken0IdManyToManyConnection?: TokenTokensByPoolToken1IdAndToken0IdManyToManyConnectionResolvers<ContextType>;
  TokenTokensByPoolToken1IdAndToken0IdManyToManyEdge?: TokenTokensByPoolToken1IdAndToken0IdManyToManyEdgeResolvers<ContextType>;
  TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyConnection?: TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyConnectionResolvers<ContextType>;
  TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyEdge?: TokenTokensByProvisionPoolPoolTokenIdAndToken0IdManyToManyEdgeResolvers<ContextType>;
  TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyConnection?: TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyConnectionResolvers<ContextType>;
  TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyEdge?: TokenTokensByProvisionPoolPoolTokenIdAndToken1IdManyToManyEdgeResolvers<ContextType>;
  TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyConnection?: TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyConnectionResolvers<ContextType>;
  TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyEdge?: TokenTokensByProvisionPoolToken0IdAndPoolTokenIdManyToManyEdgeResolvers<ContextType>;
  TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyConnection?: TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyConnectionResolvers<ContextType>;
  TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyEdge?: TokenTokensByProvisionPoolToken0IdAndToken1IdManyToManyEdgeResolvers<ContextType>;
  TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyConnection?: TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyConnectionResolvers<ContextType>;
  TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyEdge?: TokenTokensByProvisionPoolToken1IdAndPoolTokenIdManyToManyEdgeResolvers<ContextType>;
  TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyConnection?: TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyConnectionResolvers<ContextType>;
  TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyEdge?: TokenTokensByProvisionPoolToken1IdAndToken0IdManyToManyEdgeResolvers<ContextType>;
  TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyConnection?: TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyConnectionResolvers<ContextType>;
  TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyEdge?: TokenTokensBySystemConstLiquidTokenIdAndNativeTokenIdManyToManyEdgeResolvers<ContextType>;
  TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyConnection?: TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyConnectionResolvers<ContextType>;
  TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyEdge?: TokenTokensBySystemConstLiquidTokenIdAndStableTokenIdManyToManyEdgeResolvers<ContextType>;
  TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyConnection?: TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyConnectionResolvers<ContextType>;
  TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyEdge?: TokenTokensBySystemConstLiquidTokenIdAndStakignTokenIdManyToManyEdgeResolvers<ContextType>;
  TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyConnection?: TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyConnectionResolvers<ContextType>;
  TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyEdge?: TokenTokensBySystemConstNativeTokenIdAndLiquidTokenIdManyToManyEdgeResolvers<ContextType>;
  TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyConnection?: TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyConnectionResolvers<ContextType>;
  TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyEdge?: TokenTokensBySystemConstNativeTokenIdAndStableTokenIdManyToManyEdgeResolvers<ContextType>;
  TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyConnection?: TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyConnectionResolvers<ContextType>;
  TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyEdge?: TokenTokensBySystemConstNativeTokenIdAndStakignTokenIdManyToManyEdgeResolvers<ContextType>;
  TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyConnection?: TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyConnectionResolvers<ContextType>;
  TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyEdge?: TokenTokensBySystemConstStableTokenIdAndLiquidTokenIdManyToManyEdgeResolvers<ContextType>;
  TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyConnection?: TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyConnectionResolvers<ContextType>;
  TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyEdge?: TokenTokensBySystemConstStableTokenIdAndNativeTokenIdManyToManyEdgeResolvers<ContextType>;
  TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyConnection?: TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyConnectionResolvers<ContextType>;
  TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyEdge?: TokenTokensBySystemConstStableTokenIdAndStakignTokenIdManyToManyEdgeResolvers<ContextType>;
  TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyConnection?: TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyConnectionResolvers<ContextType>;
  TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyEdge?: TokenTokensBySystemConstStakignTokenIdAndLiquidTokenIdManyToManyEdgeResolvers<ContextType>;
  TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyConnection?: TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyConnectionResolvers<ContextType>;
  TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyEdge?: TokenTokensBySystemConstStakignTokenIdAndNativeTokenIdManyToManyEdgeResolvers<ContextType>;
  TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyConnection?: TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyConnectionResolvers<ContextType>;
  TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyEdge?: TokenTokensBySystemConstStakignTokenIdAndStableTokenIdManyToManyEdgeResolvers<ContextType>;
  TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyConnection?: TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyConnectionResolvers<ContextType>;
  TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyEdge?: TokenTokensByUserProvisionToken0IdAndToken1IdManyToManyEdgeResolvers<ContextType>;
  TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyConnection?: TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyConnectionResolvers<ContextType>;
  TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyEdge?: TokenTokensByUserProvisionToken1IdAndToken0IdManyToManyEdgeResolvers<ContextType>;
  TokensConnection?: TokensConnectionResolvers<ContextType>;
  TokensEdge?: TokensEdgeResolvers<ContextType>;
  TotalLoanPosition?: TotalLoanPositionResolvers<ContextType>;
  TotalLoanPositionsConnection?: TotalLoanPositionsConnectionResolvers<ContextType>;
  TotalLoanPositionsEdge?: TotalLoanPositionsEdgeResolvers<ContextType>;
  Transfer?: TransferResolvers<ContextType>;
  TransfersConnection?: TransfersConnectionResolvers<ContextType>;
  TransfersEdge?: TransfersEdgeResolvers<ContextType>;
  UserProvision?: UserProvisionResolvers<ContextType>;
  UserProvisionsConnection?: UserProvisionsConnectionResolvers<ContextType>;
  UserProvisionsEdge?: UserProvisionsEdgeResolvers<ContextType>;
  _Metadata?: _MetadataResolvers<ContextType>;
}>;

