import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

export type TestQueryVariables = Exact<{ [key: string]: never; }>;


export type TestQuery = { __typename?: 'Query', query: { __typename?: 'Query', blocks?: { __typename?: 'BlocksConnection', totalCount: number, nodes: Array<{ __typename?: 'Block', id: string } | null | undefined> } | null | undefined } };


export const TestDocument = gql`
    query Test {
  query {
    blocks(first: 5) {
      totalCount
      nodes {
        id
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Test(variables?: TestQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TestQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TestQuery>(TestDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Test');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;