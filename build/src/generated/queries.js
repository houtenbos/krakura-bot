"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSdk = exports.AccountExtrinsicsDocument = exports.TokenDocument = exports.TokensDocument = exports.UserProvisionsOrderBy = exports.TransfersOrderBy = exports.TotalLoanPositionsOrderBy = exports.TokensOrderBy = exports.TokenDayDataOrderBy = exports.SystemConstsOrderBy = exports.ProvisionPoolsOrderBy = exports.PriceRecordsOrderBy = exports.PriceBundlesOrderBy = exports.PoolsOrderBy = exports.PoolHourDataOrderBy = exports.PoolDayDataOrderBy = exports.OracleFeedRecordsOrderBy = exports.NftActionsOrderBy = exports.LoanPositionsOrderBy = exports.LoanParamsOrderBy = exports.LoanParamsHistoriesOrderBy = exports.LoanActionsOrderBy = exports.IncentiveActionsOrderBy = exports.HomaActionsOrderBy = exports.ExtrinsicsOrderBy = exports.EventsOrderBy = exports.DexesOrderBy = exports.DexDayDataOrderBy = exports.DexActionsOrderBy = exports.CallsOrderBy = exports.BlocksOrderBy = exports.AccountsOrderBy = void 0;
const graphql_tag_1 = require("graphql-tag");
var AccountsOrderBy;
(function (AccountsOrderBy) {
    AccountsOrderBy["CreateAtBlockIdAsc"] = "CREATE_AT_BLOCK_ID_ASC";
    AccountsOrderBy["CreateAtBlockIdDesc"] = "CREATE_AT_BLOCK_ID_DESC";
    AccountsOrderBy["IdAsc"] = "ID_ASC";
    AccountsOrderBy["IdDesc"] = "ID_DESC";
    AccountsOrderBy["Natural"] = "NATURAL";
    AccountsOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    AccountsOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
    AccountsOrderBy["TxCountAsc"] = "TX_COUNT_ASC";
    AccountsOrderBy["TxCountDesc"] = "TX_COUNT_DESC";
})(AccountsOrderBy = exports.AccountsOrderBy || (exports.AccountsOrderBy = {}));
var BlocksOrderBy;
(function (BlocksOrderBy) {
    BlocksOrderBy["ExtrinsicRootAsc"] = "EXTRINSIC_ROOT_ASC";
    BlocksOrderBy["ExtrinsicRootDesc"] = "EXTRINSIC_ROOT_DESC";
    BlocksOrderBy["IdAsc"] = "ID_ASC";
    BlocksOrderBy["IdDesc"] = "ID_DESC";
    BlocksOrderBy["Natural"] = "NATURAL";
    BlocksOrderBy["NumberAsc"] = "NUMBER_ASC";
    BlocksOrderBy["NumberDesc"] = "NUMBER_DESC";
    BlocksOrderBy["ParentHashAsc"] = "PARENT_HASH_ASC";
    BlocksOrderBy["ParentHashDesc"] = "PARENT_HASH_DESC";
    BlocksOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    BlocksOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
    BlocksOrderBy["SpecVersionAsc"] = "SPEC_VERSION_ASC";
    BlocksOrderBy["SpecVersionDesc"] = "SPEC_VERSION_DESC";
    BlocksOrderBy["StateRootAsc"] = "STATE_ROOT_ASC";
    BlocksOrderBy["StateRootDesc"] = "STATE_ROOT_DESC";
    BlocksOrderBy["TimestampAsc"] = "TIMESTAMP_ASC";
    BlocksOrderBy["TimestampDesc"] = "TIMESTAMP_DESC";
})(BlocksOrderBy = exports.BlocksOrderBy || (exports.BlocksOrderBy = {}));
var CallsOrderBy;
(function (CallsOrderBy) {
    CallsOrderBy["ArgsAsc"] = "ARGS_ASC";
    CallsOrderBy["ArgsDesc"] = "ARGS_DESC";
    CallsOrderBy["ExtrinsicIdAsc"] = "EXTRINSIC_ID_ASC";
    CallsOrderBy["ExtrinsicIdDesc"] = "EXTRINSIC_ID_DESC";
    CallsOrderBy["IdAsc"] = "ID_ASC";
    CallsOrderBy["IdDesc"] = "ID_DESC";
    CallsOrderBy["IsSuccessAsc"] = "IS_SUCCESS_ASC";
    CallsOrderBy["IsSuccessDesc"] = "IS_SUCCESS_DESC";
    CallsOrderBy["MethodAsc"] = "METHOD_ASC";
    CallsOrderBy["MethodDesc"] = "METHOD_DESC";
    CallsOrderBy["Natural"] = "NATURAL";
    CallsOrderBy["ParentCallIdAsc"] = "PARENT_CALL_ID_ASC";
    CallsOrderBy["ParentCallIdDesc"] = "PARENT_CALL_ID_DESC";
    CallsOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    CallsOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
    CallsOrderBy["SectionAsc"] = "SECTION_ASC";
    CallsOrderBy["SectionDesc"] = "SECTION_DESC";
    CallsOrderBy["SignerIdAsc"] = "SIGNER_ID_ASC";
    CallsOrderBy["SignerIdDesc"] = "SIGNER_ID_DESC";
    CallsOrderBy["TimestampAsc"] = "TIMESTAMP_ASC";
    CallsOrderBy["TimestampDesc"] = "TIMESTAMP_DESC";
})(CallsOrderBy = exports.CallsOrderBy || (exports.CallsOrderBy = {}));
var DexActionsOrderBy;
(function (DexActionsOrderBy) {
    DexActionsOrderBy["AccountIdAsc"] = "ACCOUNT_ID_ASC";
    DexActionsOrderBy["AccountIdDesc"] = "ACCOUNT_ID_DESC";
    DexActionsOrderBy["DataAsc"] = "DATA_ASC";
    DexActionsOrderBy["DataDesc"] = "DATA_DESC";
    DexActionsOrderBy["ExtrinsicIdAsc"] = "EXTRINSIC_ID_ASC";
    DexActionsOrderBy["ExtrinsicIdDesc"] = "EXTRINSIC_ID_DESC";
    DexActionsOrderBy["IdAsc"] = "ID_ASC";
    DexActionsOrderBy["IdDesc"] = "ID_DESC";
    DexActionsOrderBy["Natural"] = "NATURAL";
    DexActionsOrderBy["PoolIdAsc"] = "POOL_ID_ASC";
    DexActionsOrderBy["PoolIdDesc"] = "POOL_ID_DESC";
    DexActionsOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    DexActionsOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
    DexActionsOrderBy["SubTypeAsc"] = "SUB_TYPE_ASC";
    DexActionsOrderBy["SubTypeDesc"] = "SUB_TYPE_DESC";
    DexActionsOrderBy["TimestampAsc"] = "TIMESTAMP_ASC";
    DexActionsOrderBy["TimestampDesc"] = "TIMESTAMP_DESC";
    DexActionsOrderBy["Token0AmountAsc"] = "TOKEN0_AMOUNT_ASC";
    DexActionsOrderBy["Token0AmountDesc"] = "TOKEN0_AMOUNT_DESC";
    DexActionsOrderBy["Token0IdAsc"] = "TOKEN0_ID_ASC";
    DexActionsOrderBy["Token0IdDesc"] = "TOKEN0_ID_DESC";
    DexActionsOrderBy["Token1AmountAsc"] = "TOKEN1_AMOUNT_ASC";
    DexActionsOrderBy["Token1AmountDesc"] = "TOKEN1_AMOUNT_DESC";
    DexActionsOrderBy["Token1IdAsc"] = "TOKEN1_ID_ASC";
    DexActionsOrderBy["Token1IdDesc"] = "TOKEN1_ID_DESC";
    DexActionsOrderBy["TypeAsc"] = "TYPE_ASC";
    DexActionsOrderBy["TypeDesc"] = "TYPE_DESC";
    DexActionsOrderBy["VolumeUSDAsc"] = "VOLUME_U_S_D_ASC";
    DexActionsOrderBy["VolumeUSDDesc"] = "VOLUME_U_S_D_DESC";
})(DexActionsOrderBy = exports.DexActionsOrderBy || (exports.DexActionsOrderBy = {}));
var DexDayDataOrderBy;
(function (DexDayDataOrderBy) {
    DexDayDataOrderBy["DailyVolumeUSDAsc"] = "DAILY_VOLUME_U_S_D_ASC";
    DexDayDataOrderBy["DailyVolumeUSDDesc"] = "DAILY_VOLUME_U_S_D_DESC";
    DexDayDataOrderBy["DateAsc"] = "DATE_ASC";
    DexDayDataOrderBy["DateDesc"] = "DATE_DESC";
    DexDayDataOrderBy["IdAsc"] = "ID_ASC";
    DexDayDataOrderBy["IdDesc"] = "ID_DESC";
    DexDayDataOrderBy["Natural"] = "NATURAL";
    DexDayDataOrderBy["PoolCountAsc"] = "POOL_COUNT_ASC";
    DexDayDataOrderBy["PoolCountDesc"] = "POOL_COUNT_DESC";
    DexDayDataOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    DexDayDataOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
    DexDayDataOrderBy["TotalTVLUSDAsc"] = "TOTAL_T_V_L_U_S_D_ASC";
    DexDayDataOrderBy["TotalTVLUSDDesc"] = "TOTAL_T_V_L_U_S_D_DESC";
    DexDayDataOrderBy["TotalVolumeUSDAsc"] = "TOTAL_VOLUME_U_S_D_ASC";
    DexDayDataOrderBy["TotalVolumeUSDDesc"] = "TOTAL_VOLUME_U_S_D_DESC";
})(DexDayDataOrderBy = exports.DexDayDataOrderBy || (exports.DexDayDataOrderBy = {}));
var DexesOrderBy;
(function (DexesOrderBy) {
    DexesOrderBy["IdAsc"] = "ID_ASC";
    DexesOrderBy["IdDesc"] = "ID_DESC";
    DexesOrderBy["Natural"] = "NATURAL";
    DexesOrderBy["PoolCountAsc"] = "POOL_COUNT_ASC";
    DexesOrderBy["PoolCountDesc"] = "POOL_COUNT_DESC";
    DexesOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    DexesOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
    DexesOrderBy["TotalTVLUSDAsc"] = "TOTAL_T_V_L_U_S_D_ASC";
    DexesOrderBy["TotalTVLUSDDesc"] = "TOTAL_T_V_L_U_S_D_DESC";
    DexesOrderBy["TotalVolumeUSDAsc"] = "TOTAL_VOLUME_U_S_D_ASC";
    DexesOrderBy["TotalVolumeUSDDesc"] = "TOTAL_VOLUME_U_S_D_DESC";
})(DexesOrderBy = exports.DexesOrderBy || (exports.DexesOrderBy = {}));
var EventsOrderBy;
(function (EventsOrderBy) {
    EventsOrderBy["BlockIdAsc"] = "BLOCK_ID_ASC";
    EventsOrderBy["BlockIdDesc"] = "BLOCK_ID_DESC";
    EventsOrderBy["BlockNumberAsc"] = "BLOCK_NUMBER_ASC";
    EventsOrderBy["BlockNumberDesc"] = "BLOCK_NUMBER_DESC";
    EventsOrderBy["DataAsc"] = "DATA_ASC";
    EventsOrderBy["DataDesc"] = "DATA_DESC";
    EventsOrderBy["ExtrinsicIdAsc"] = "EXTRINSIC_ID_ASC";
    EventsOrderBy["ExtrinsicIdDesc"] = "EXTRINSIC_ID_DESC";
    EventsOrderBy["IdAsc"] = "ID_ASC";
    EventsOrderBy["IdDesc"] = "ID_DESC";
    EventsOrderBy["IndexAsc"] = "INDEX_ASC";
    EventsOrderBy["IndexDesc"] = "INDEX_DESC";
    EventsOrderBy["MethodAsc"] = "METHOD_ASC";
    EventsOrderBy["MethodDesc"] = "METHOD_DESC";
    EventsOrderBy["Natural"] = "NATURAL";
    EventsOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    EventsOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
    EventsOrderBy["SectionAsc"] = "SECTION_ASC";
    EventsOrderBy["SectionDesc"] = "SECTION_DESC";
    EventsOrderBy["TimestampAsc"] = "TIMESTAMP_ASC";
    EventsOrderBy["TimestampDesc"] = "TIMESTAMP_DESC";
})(EventsOrderBy = exports.EventsOrderBy || (exports.EventsOrderBy = {}));
var ExtrinsicsOrderBy;
(function (ExtrinsicsOrderBy) {
    ExtrinsicsOrderBy["ArgsAsc"] = "ARGS_ASC";
    ExtrinsicsOrderBy["ArgsDesc"] = "ARGS_DESC";
    ExtrinsicsOrderBy["BlockIdAsc"] = "BLOCK_ID_ASC";
    ExtrinsicsOrderBy["BlockIdDesc"] = "BLOCK_ID_DESC";
    ExtrinsicsOrderBy["IdAsc"] = "ID_ASC";
    ExtrinsicsOrderBy["IdDesc"] = "ID_DESC";
    ExtrinsicsOrderBy["IsSignedAsc"] = "IS_SIGNED_ASC";
    ExtrinsicsOrderBy["IsSignedDesc"] = "IS_SIGNED_DESC";
    ExtrinsicsOrderBy["IsSuccessAsc"] = "IS_SUCCESS_ASC";
    ExtrinsicsOrderBy["IsSuccessDesc"] = "IS_SUCCESS_DESC";
    ExtrinsicsOrderBy["MethodAsc"] = "METHOD_ASC";
    ExtrinsicsOrderBy["MethodDesc"] = "METHOD_DESC";
    ExtrinsicsOrderBy["Natural"] = "NATURAL";
    ExtrinsicsOrderBy["NonceAsc"] = "NONCE_ASC";
    ExtrinsicsOrderBy["NonceDesc"] = "NONCE_DESC";
    ExtrinsicsOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    ExtrinsicsOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
    ExtrinsicsOrderBy["SectionAsc"] = "SECTION_ASC";
    ExtrinsicsOrderBy["SectionDesc"] = "SECTION_DESC";
    ExtrinsicsOrderBy["SignatureAsc"] = "SIGNATURE_ASC";
    ExtrinsicsOrderBy["SignatureDesc"] = "SIGNATURE_DESC";
    ExtrinsicsOrderBy["SignerIdAsc"] = "SIGNER_ID_ASC";
    ExtrinsicsOrderBy["SignerIdDesc"] = "SIGNER_ID_DESC";
    ExtrinsicsOrderBy["TimestampAsc"] = "TIMESTAMP_ASC";
    ExtrinsicsOrderBy["TimestampDesc"] = "TIMESTAMP_DESC";
    ExtrinsicsOrderBy["TipAsc"] = "TIP_ASC";
    ExtrinsicsOrderBy["TipDesc"] = "TIP_DESC";
})(ExtrinsicsOrderBy = exports.ExtrinsicsOrderBy || (exports.ExtrinsicsOrderBy = {}));
var HomaActionsOrderBy;
(function (HomaActionsOrderBy) {
    HomaActionsOrderBy["AccountIdAsc"] = "ACCOUNT_ID_ASC";
    HomaActionsOrderBy["AccountIdDesc"] = "ACCOUNT_ID_DESC";
    HomaActionsOrderBy["DataAsc"] = "DATA_ASC";
    HomaActionsOrderBy["DataDesc"] = "DATA_DESC";
    HomaActionsOrderBy["ExtrinsicIdAsc"] = "EXTRINSIC_ID_ASC";
    HomaActionsOrderBy["ExtrinsicIdDesc"] = "EXTRINSIC_ID_DESC";
    HomaActionsOrderBy["IdAsc"] = "ID_ASC";
    HomaActionsOrderBy["IdDesc"] = "ID_DESC";
    HomaActionsOrderBy["Natural"] = "NATURAL";
    HomaActionsOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    HomaActionsOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
    HomaActionsOrderBy["SubTypeAsc"] = "SUB_TYPE_ASC";
    HomaActionsOrderBy["SubTypeDesc"] = "SUB_TYPE_DESC";
    HomaActionsOrderBy["TimestampAsc"] = "TIMESTAMP_ASC";
    HomaActionsOrderBy["TimestampDesc"] = "TIMESTAMP_DESC";
    HomaActionsOrderBy["TypeAsc"] = "TYPE_ASC";
    HomaActionsOrderBy["TypeDesc"] = "TYPE_DESC";
})(HomaActionsOrderBy = exports.HomaActionsOrderBy || (exports.HomaActionsOrderBy = {}));
var IncentiveActionsOrderBy;
(function (IncentiveActionsOrderBy) {
    IncentiveActionsOrderBy["AccountIdAsc"] = "ACCOUNT_ID_ASC";
    IncentiveActionsOrderBy["AccountIdDesc"] = "ACCOUNT_ID_DESC";
    IncentiveActionsOrderBy["DataAsc"] = "DATA_ASC";
    IncentiveActionsOrderBy["DataDesc"] = "DATA_DESC";
    IncentiveActionsOrderBy["ExtrinsicIdAsc"] = "EXTRINSIC_ID_ASC";
    IncentiveActionsOrderBy["ExtrinsicIdDesc"] = "EXTRINSIC_ID_DESC";
    IncentiveActionsOrderBy["IdAsc"] = "ID_ASC";
    IncentiveActionsOrderBy["IdDesc"] = "ID_DESC";
    IncentiveActionsOrderBy["Natural"] = "NATURAL";
    IncentiveActionsOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    IncentiveActionsOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
    IncentiveActionsOrderBy["SubTypeAsc"] = "SUB_TYPE_ASC";
    IncentiveActionsOrderBy["SubTypeDesc"] = "SUB_TYPE_DESC";
    IncentiveActionsOrderBy["TimestampAsc"] = "TIMESTAMP_ASC";
    IncentiveActionsOrderBy["TimestampDesc"] = "TIMESTAMP_DESC";
    IncentiveActionsOrderBy["TypeAsc"] = "TYPE_ASC";
    IncentiveActionsOrderBy["TypeDesc"] = "TYPE_DESC";
})(IncentiveActionsOrderBy = exports.IncentiveActionsOrderBy || (exports.IncentiveActionsOrderBy = {}));
var LoanActionsOrderBy;
(function (LoanActionsOrderBy) {
    LoanActionsOrderBy["AccountIdAsc"] = "ACCOUNT_ID_ASC";
    LoanActionsOrderBy["AccountIdDesc"] = "ACCOUNT_ID_DESC";
    LoanActionsOrderBy["DataAsc"] = "DATA_ASC";
    LoanActionsOrderBy["DataDesc"] = "DATA_DESC";
    LoanActionsOrderBy["ExtrinsicIdAsc"] = "EXTRINSIC_ID_ASC";
    LoanActionsOrderBy["ExtrinsicIdDesc"] = "EXTRINSIC_ID_DESC";
    LoanActionsOrderBy["IdAsc"] = "ID_ASC";
    LoanActionsOrderBy["IdDesc"] = "ID_DESC";
    LoanActionsOrderBy["Natural"] = "NATURAL";
    LoanActionsOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    LoanActionsOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
    LoanActionsOrderBy["SubTypeAsc"] = "SUB_TYPE_ASC";
    LoanActionsOrderBy["SubTypeDesc"] = "SUB_TYPE_DESC";
    LoanActionsOrderBy["TimestampAsc"] = "TIMESTAMP_ASC";
    LoanActionsOrderBy["TimestampDesc"] = "TIMESTAMP_DESC";
    LoanActionsOrderBy["TypeAsc"] = "TYPE_ASC";
    LoanActionsOrderBy["TypeDesc"] = "TYPE_DESC";
})(LoanActionsOrderBy = exports.LoanActionsOrderBy || (exports.LoanActionsOrderBy = {}));
var LoanParamsHistoriesOrderBy;
(function (LoanParamsHistoriesOrderBy) {
    LoanParamsHistoriesOrderBy["CollateralIdAsc"] = "COLLATERAL_ID_ASC";
    LoanParamsHistoriesOrderBy["CollateralIdDesc"] = "COLLATERAL_ID_DESC";
    LoanParamsHistoriesOrderBy["EndAtBlockIdAsc"] = "END_AT_BLOCK_ID_ASC";
    LoanParamsHistoriesOrderBy["EndAtBlockIdDesc"] = "END_AT_BLOCK_ID_DESC";
    LoanParamsHistoriesOrderBy["EndAtBlockNumberAsc"] = "END_AT_BLOCK_NUMBER_ASC";
    LoanParamsHistoriesOrderBy["EndAtBlockNumberDesc"] = "END_AT_BLOCK_NUMBER_DESC";
    LoanParamsHistoriesOrderBy["GlobalInterestRatePerSecAsc"] = "GLOBAL_INTEREST_RATE_PER_SEC_ASC";
    LoanParamsHistoriesOrderBy["GlobalInterestRatePerSecDesc"] = "GLOBAL_INTEREST_RATE_PER_SEC_DESC";
    LoanParamsHistoriesOrderBy["IdAsc"] = "ID_ASC";
    LoanParamsHistoriesOrderBy["IdDesc"] = "ID_DESC";
    LoanParamsHistoriesOrderBy["InterestRatePerSecAsc"] = "INTEREST_RATE_PER_SEC_ASC";
    LoanParamsHistoriesOrderBy["InterestRatePerSecDesc"] = "INTEREST_RATE_PER_SEC_DESC";
    LoanParamsHistoriesOrderBy["LiquidationPenaltyAsc"] = "LIQUIDATION_PENALTY_ASC";
    LoanParamsHistoriesOrderBy["LiquidationPenaltyDesc"] = "LIQUIDATION_PENALTY_DESC";
    LoanParamsHistoriesOrderBy["LiquidationRatioAsc"] = "LIQUIDATION_RATIO_ASC";
    LoanParamsHistoriesOrderBy["LiquidationRatioDesc"] = "LIQUIDATION_RATIO_DESC";
    LoanParamsHistoriesOrderBy["MaximumTotalDebitValueAsc"] = "MAXIMUM_TOTAL_DEBIT_VALUE_ASC";
    LoanParamsHistoriesOrderBy["MaximumTotalDebitValueDesc"] = "MAXIMUM_TOTAL_DEBIT_VALUE_DESC";
    LoanParamsHistoriesOrderBy["Natural"] = "NATURAL";
    LoanParamsHistoriesOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    LoanParamsHistoriesOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
    LoanParamsHistoriesOrderBy["RequiredCollateralRatioAsc"] = "REQUIRED_COLLATERAL_RATIO_ASC";
    LoanParamsHistoriesOrderBy["RequiredCollateralRatioDesc"] = "REQUIRED_COLLATERAL_RATIO_DESC";
    LoanParamsHistoriesOrderBy["StartAtBlockIdAsc"] = "START_AT_BLOCK_ID_ASC";
    LoanParamsHistoriesOrderBy["StartAtBlockIdDesc"] = "START_AT_BLOCK_ID_DESC";
    LoanParamsHistoriesOrderBy["StartAtBlockNumberAsc"] = "START_AT_BLOCK_NUMBER_ASC";
    LoanParamsHistoriesOrderBy["StartAtBlockNumberDesc"] = "START_AT_BLOCK_NUMBER_DESC";
})(LoanParamsHistoriesOrderBy = exports.LoanParamsHistoriesOrderBy || (exports.LoanParamsHistoriesOrderBy = {}));
var LoanParamsOrderBy;
(function (LoanParamsOrderBy) {
    LoanParamsOrderBy["CollateralIdAsc"] = "COLLATERAL_ID_ASC";
    LoanParamsOrderBy["CollateralIdDesc"] = "COLLATERAL_ID_DESC";
    LoanParamsOrderBy["DebitExchangeRateAsc"] = "DEBIT_EXCHANGE_RATE_ASC";
    LoanParamsOrderBy["DebitExchangeRateDesc"] = "DEBIT_EXCHANGE_RATE_DESC";
    LoanParamsOrderBy["GlobalInterestRatePerSecAsc"] = "GLOBAL_INTEREST_RATE_PER_SEC_ASC";
    LoanParamsOrderBy["GlobalInterestRatePerSecDesc"] = "GLOBAL_INTEREST_RATE_PER_SEC_DESC";
    LoanParamsOrderBy["IdAsc"] = "ID_ASC";
    LoanParamsOrderBy["IdDesc"] = "ID_DESC";
    LoanParamsOrderBy["InterestRatePerSecAsc"] = "INTEREST_RATE_PER_SEC_ASC";
    LoanParamsOrderBy["InterestRatePerSecDesc"] = "INTEREST_RATE_PER_SEC_DESC";
    LoanParamsOrderBy["LiquidationPenaltyAsc"] = "LIQUIDATION_PENALTY_ASC";
    LoanParamsOrderBy["LiquidationPenaltyDesc"] = "LIQUIDATION_PENALTY_DESC";
    LoanParamsOrderBy["LiquidationRatioAsc"] = "LIQUIDATION_RATIO_ASC";
    LoanParamsOrderBy["LiquidationRatioDesc"] = "LIQUIDATION_RATIO_DESC";
    LoanParamsOrderBy["MaximumTotalDebitValueAsc"] = "MAXIMUM_TOTAL_DEBIT_VALUE_ASC";
    LoanParamsOrderBy["MaximumTotalDebitValueDesc"] = "MAXIMUM_TOTAL_DEBIT_VALUE_DESC";
    LoanParamsOrderBy["Natural"] = "NATURAL";
    LoanParamsOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    LoanParamsOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
    LoanParamsOrderBy["RequiredCollateralRatioAsc"] = "REQUIRED_COLLATERAL_RATIO_ASC";
    LoanParamsOrderBy["RequiredCollateralRatioDesc"] = "REQUIRED_COLLATERAL_RATIO_DESC";
    LoanParamsOrderBy["StartAtBlockIdAsc"] = "START_AT_BLOCK_ID_ASC";
    LoanParamsOrderBy["StartAtBlockIdDesc"] = "START_AT_BLOCK_ID_DESC";
    LoanParamsOrderBy["StartAtBlockNumberAsc"] = "START_AT_BLOCK_NUMBER_ASC";
    LoanParamsOrderBy["StartAtBlockNumberDesc"] = "START_AT_BLOCK_NUMBER_DESC";
})(LoanParamsOrderBy = exports.LoanParamsOrderBy || (exports.LoanParamsOrderBy = {}));
var LoanPositionsOrderBy;
(function (LoanPositionsOrderBy) {
    LoanPositionsOrderBy["CollateralAmountAsc"] = "COLLATERAL_AMOUNT_ASC";
    LoanPositionsOrderBy["CollateralAmountDesc"] = "COLLATERAL_AMOUNT_DESC";
    LoanPositionsOrderBy["CollateralIdAsc"] = "COLLATERAL_ID_ASC";
    LoanPositionsOrderBy["CollateralIdDesc"] = "COLLATERAL_ID_DESC";
    LoanPositionsOrderBy["DebitAmountAsc"] = "DEBIT_AMOUNT_ASC";
    LoanPositionsOrderBy["DebitAmountDesc"] = "DEBIT_AMOUNT_DESC";
    LoanPositionsOrderBy["IdAsc"] = "ID_ASC";
    LoanPositionsOrderBy["IdDesc"] = "ID_DESC";
    LoanPositionsOrderBy["Natural"] = "NATURAL";
    LoanPositionsOrderBy["OwnerIdAsc"] = "OWNER_ID_ASC";
    LoanPositionsOrderBy["OwnerIdDesc"] = "OWNER_ID_DESC";
    LoanPositionsOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    LoanPositionsOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
})(LoanPositionsOrderBy = exports.LoanPositionsOrderBy || (exports.LoanPositionsOrderBy = {}));
var NftActionsOrderBy;
(function (NftActionsOrderBy) {
    NftActionsOrderBy["AccountIdAsc"] = "ACCOUNT_ID_ASC";
    NftActionsOrderBy["AccountIdDesc"] = "ACCOUNT_ID_DESC";
    NftActionsOrderBy["DataAsc"] = "DATA_ASC";
    NftActionsOrderBy["DataDesc"] = "DATA_DESC";
    NftActionsOrderBy["ExtrinsicIdAsc"] = "EXTRINSIC_ID_ASC";
    NftActionsOrderBy["ExtrinsicIdDesc"] = "EXTRINSIC_ID_DESC";
    NftActionsOrderBy["IdAsc"] = "ID_ASC";
    NftActionsOrderBy["IdDesc"] = "ID_DESC";
    NftActionsOrderBy["Natural"] = "NATURAL";
    NftActionsOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    NftActionsOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
    NftActionsOrderBy["SubTypeAsc"] = "SUB_TYPE_ASC";
    NftActionsOrderBy["SubTypeDesc"] = "SUB_TYPE_DESC";
    NftActionsOrderBy["TimestampAsc"] = "TIMESTAMP_ASC";
    NftActionsOrderBy["TimestampDesc"] = "TIMESTAMP_DESC";
    NftActionsOrderBy["TypeAsc"] = "TYPE_ASC";
    NftActionsOrderBy["TypeDesc"] = "TYPE_DESC";
})(NftActionsOrderBy = exports.NftActionsOrderBy || (exports.NftActionsOrderBy = {}));
var OracleFeedRecordsOrderBy;
(function (OracleFeedRecordsOrderBy) {
    OracleFeedRecordsOrderBy["AccountIdAsc"] = "ACCOUNT_ID_ASC";
    OracleFeedRecordsOrderBy["AccountIdDesc"] = "ACCOUNT_ID_DESC";
    OracleFeedRecordsOrderBy["BlockIdAsc"] = "BLOCK_ID_ASC";
    OracleFeedRecordsOrderBy["BlockIdDesc"] = "BLOCK_ID_DESC";
    OracleFeedRecordsOrderBy["BlockNumberAsc"] = "BLOCK_NUMBER_ASC";
    OracleFeedRecordsOrderBy["BlockNumberDesc"] = "BLOCK_NUMBER_DESC";
    OracleFeedRecordsOrderBy["IdAsc"] = "ID_ASC";
    OracleFeedRecordsOrderBy["IdDesc"] = "ID_DESC";
    OracleFeedRecordsOrderBy["Natural"] = "NATURAL";
    OracleFeedRecordsOrderBy["PriceAsc"] = "PRICE_ASC";
    OracleFeedRecordsOrderBy["PriceDesc"] = "PRICE_DESC";
    OracleFeedRecordsOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    OracleFeedRecordsOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
    OracleFeedRecordsOrderBy["ProviderAsc"] = "PROVIDER_ASC";
    OracleFeedRecordsOrderBy["ProviderDesc"] = "PROVIDER_DESC";
    OracleFeedRecordsOrderBy["TokenIdAsc"] = "TOKEN_ID_ASC";
    OracleFeedRecordsOrderBy["TokenIdDesc"] = "TOKEN_ID_DESC";
})(OracleFeedRecordsOrderBy = exports.OracleFeedRecordsOrderBy || (exports.OracleFeedRecordsOrderBy = {}));
var PoolDayDataOrderBy;
(function (PoolDayDataOrderBy) {
    PoolDayDataOrderBy["DateAsc"] = "DATE_ASC";
    PoolDayDataOrderBy["DateDesc"] = "DATE_DESC";
    PoolDayDataOrderBy["Exchange0Asc"] = "EXCHANGE0_ASC";
    PoolDayDataOrderBy["Exchange0Desc"] = "EXCHANGE0_DESC";
    PoolDayDataOrderBy["Exchange1Asc"] = "EXCHANGE1_ASC";
    PoolDayDataOrderBy["Exchange1Desc"] = "EXCHANGE1_DESC";
    PoolDayDataOrderBy["IdAsc"] = "ID_ASC";
    PoolDayDataOrderBy["IdDesc"] = "ID_DESC";
    PoolDayDataOrderBy["Natural"] = "NATURAL";
    PoolDayDataOrderBy["PoolIdAsc"] = "POOL_ID_ASC";
    PoolDayDataOrderBy["PoolIdDesc"] = "POOL_ID_DESC";
    PoolDayDataOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    PoolDayDataOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
    PoolDayDataOrderBy["Token0AmountAsc"] = "TOKEN0_AMOUNT_ASC";
    PoolDayDataOrderBy["Token0AmountDesc"] = "TOKEN0_AMOUNT_DESC";
    PoolDayDataOrderBy["Token0CloseAsc"] = "TOKEN0_CLOSE_ASC";
    PoolDayDataOrderBy["Token0CloseDesc"] = "TOKEN0_CLOSE_DESC";
    PoolDayDataOrderBy["Token0HighAsc"] = "TOKEN0_HIGH_ASC";
    PoolDayDataOrderBy["Token0HighDesc"] = "TOKEN0_HIGH_DESC";
    PoolDayDataOrderBy["Token0IdAsc"] = "TOKEN0_ID_ASC";
    PoolDayDataOrderBy["Token0IdDesc"] = "TOKEN0_ID_DESC";
    PoolDayDataOrderBy["Token0LowAsc"] = "TOKEN0_LOW_ASC";
    PoolDayDataOrderBy["Token0LowDesc"] = "TOKEN0_LOW_DESC";
    PoolDayDataOrderBy["Token0OpenAsc"] = "TOKEN0_OPEN_ASC";
    PoolDayDataOrderBy["Token0OpenDesc"] = "TOKEN0_OPEN_DESC";
    PoolDayDataOrderBy["Token1AmountAsc"] = "TOKEN1_AMOUNT_ASC";
    PoolDayDataOrderBy["Token1AmountDesc"] = "TOKEN1_AMOUNT_DESC";
    PoolDayDataOrderBy["Token1IdAsc"] = "TOKEN1_ID_ASC";
    PoolDayDataOrderBy["Token1IdDesc"] = "TOKEN1_ID_DESC";
    PoolDayDataOrderBy["TvlUSDAsc"] = "TVL_U_S_D_ASC";
    PoolDayDataOrderBy["TvlUSDDesc"] = "TVL_U_S_D_DESC";
    PoolDayDataOrderBy["TxCountAsc"] = "TX_COUNT_ASC";
    PoolDayDataOrderBy["TxCountDesc"] = "TX_COUNT_DESC";
    PoolDayDataOrderBy["VolumeToken0Asc"] = "VOLUME_TOKEN0_ASC";
    PoolDayDataOrderBy["VolumeToken0Desc"] = "VOLUME_TOKEN0_DESC";
    PoolDayDataOrderBy["VolumeToken1Asc"] = "VOLUME_TOKEN1_ASC";
    PoolDayDataOrderBy["VolumeToken1Desc"] = "VOLUME_TOKEN1_DESC";
    PoolDayDataOrderBy["VolumeUSDAsc"] = "VOLUME_U_S_D_ASC";
    PoolDayDataOrderBy["VolumeUSDDesc"] = "VOLUME_U_S_D_DESC";
})(PoolDayDataOrderBy = exports.PoolDayDataOrderBy || (exports.PoolDayDataOrderBy = {}));
var PoolHourDataOrderBy;
(function (PoolHourDataOrderBy) {
    PoolHourDataOrderBy["DateAsc"] = "DATE_ASC";
    PoolHourDataOrderBy["DateDesc"] = "DATE_DESC";
    PoolHourDataOrderBy["Exchange0Asc"] = "EXCHANGE0_ASC";
    PoolHourDataOrderBy["Exchange0Desc"] = "EXCHANGE0_DESC";
    PoolHourDataOrderBy["Exchange1Asc"] = "EXCHANGE1_ASC";
    PoolHourDataOrderBy["Exchange1Desc"] = "EXCHANGE1_DESC";
    PoolHourDataOrderBy["IdAsc"] = "ID_ASC";
    PoolHourDataOrderBy["IdDesc"] = "ID_DESC";
    PoolHourDataOrderBy["Natural"] = "NATURAL";
    PoolHourDataOrderBy["PoolIdAsc"] = "POOL_ID_ASC";
    PoolHourDataOrderBy["PoolIdDesc"] = "POOL_ID_DESC";
    PoolHourDataOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    PoolHourDataOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
    PoolHourDataOrderBy["Token0AmountAsc"] = "TOKEN0_AMOUNT_ASC";
    PoolHourDataOrderBy["Token0AmountDesc"] = "TOKEN0_AMOUNT_DESC";
    PoolHourDataOrderBy["Token0CloseAsc"] = "TOKEN0_CLOSE_ASC";
    PoolHourDataOrderBy["Token0CloseDesc"] = "TOKEN0_CLOSE_DESC";
    PoolHourDataOrderBy["Token0HighAsc"] = "TOKEN0_HIGH_ASC";
    PoolHourDataOrderBy["Token0HighDesc"] = "TOKEN0_HIGH_DESC";
    PoolHourDataOrderBy["Token0IdAsc"] = "TOKEN0_ID_ASC";
    PoolHourDataOrderBy["Token0IdDesc"] = "TOKEN0_ID_DESC";
    PoolHourDataOrderBy["Token0LowAsc"] = "TOKEN0_LOW_ASC";
    PoolHourDataOrderBy["Token0LowDesc"] = "TOKEN0_LOW_DESC";
    PoolHourDataOrderBy["Token0OpenAsc"] = "TOKEN0_OPEN_ASC";
    PoolHourDataOrderBy["Token0OpenDesc"] = "TOKEN0_OPEN_DESC";
    PoolHourDataOrderBy["Token1AmountAsc"] = "TOKEN1_AMOUNT_ASC";
    PoolHourDataOrderBy["Token1AmountDesc"] = "TOKEN1_AMOUNT_DESC";
    PoolHourDataOrderBy["Token1IdAsc"] = "TOKEN1_ID_ASC";
    PoolHourDataOrderBy["Token1IdDesc"] = "TOKEN1_ID_DESC";
    PoolHourDataOrderBy["TvlUSDAsc"] = "TVL_U_S_D_ASC";
    PoolHourDataOrderBy["TvlUSDDesc"] = "TVL_U_S_D_DESC";
    PoolHourDataOrderBy["TxCountAsc"] = "TX_COUNT_ASC";
    PoolHourDataOrderBy["TxCountDesc"] = "TX_COUNT_DESC";
    PoolHourDataOrderBy["VolumeToken0Asc"] = "VOLUME_TOKEN0_ASC";
    PoolHourDataOrderBy["VolumeToken0Desc"] = "VOLUME_TOKEN0_DESC";
    PoolHourDataOrderBy["VolumeToken1Asc"] = "VOLUME_TOKEN1_ASC";
    PoolHourDataOrderBy["VolumeToken1Desc"] = "VOLUME_TOKEN1_DESC";
    PoolHourDataOrderBy["VolumeUSDAsc"] = "VOLUME_U_S_D_ASC";
    PoolHourDataOrderBy["VolumeUSDDesc"] = "VOLUME_U_S_D_DESC";
})(PoolHourDataOrderBy = exports.PoolHourDataOrderBy || (exports.PoolHourDataOrderBy = {}));
var PoolsOrderBy;
(function (PoolsOrderBy) {
    PoolsOrderBy["Exchange0Asc"] = "EXCHANGE0_ASC";
    PoolsOrderBy["Exchange0Desc"] = "EXCHANGE0_DESC";
    PoolsOrderBy["Exchange1Asc"] = "EXCHANGE1_ASC";
    PoolsOrderBy["Exchange1Desc"] = "EXCHANGE1_DESC";
    PoolsOrderBy["FeeAsc"] = "FEE_ASC";
    PoolsOrderBy["FeeDesc"] = "FEE_DESC";
    PoolsOrderBy["IdAsc"] = "ID_ASC";
    PoolsOrderBy["IdDesc"] = "ID_DESC";
    PoolsOrderBy["Natural"] = "NATURAL";
    PoolsOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    PoolsOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
    PoolsOrderBy["Token0AmountAsc"] = "TOKEN0_AMOUNT_ASC";
    PoolsOrderBy["Token0AmountDesc"] = "TOKEN0_AMOUNT_DESC";
    PoolsOrderBy["Token0IdAsc"] = "TOKEN0_ID_ASC";
    PoolsOrderBy["Token0IdDesc"] = "TOKEN0_ID_DESC";
    PoolsOrderBy["Token0TVLAsc"] = "TOKEN0_T_V_L_ASC";
    PoolsOrderBy["Token0TVLDesc"] = "TOKEN0_T_V_L_DESC";
    PoolsOrderBy["Token0VolumeAsc"] = "TOKEN0_VOLUME_ASC";
    PoolsOrderBy["Token0VolumeDesc"] = "TOKEN0_VOLUME_DESC";
    PoolsOrderBy["Token1AmountAsc"] = "TOKEN1_AMOUNT_ASC";
    PoolsOrderBy["Token1AmountDesc"] = "TOKEN1_AMOUNT_DESC";
    PoolsOrderBy["Token1IdAsc"] = "TOKEN1_ID_ASC";
    PoolsOrderBy["Token1IdDesc"] = "TOKEN1_ID_DESC";
    PoolsOrderBy["Token1TVLAsc"] = "TOKEN1_T_V_L_ASC";
    PoolsOrderBy["Token1TVLDesc"] = "TOKEN1_T_V_L_DESC";
    PoolsOrderBy["Token1VolumeAsc"] = "TOKEN1_VOLUME_ASC";
    PoolsOrderBy["Token1VolumeDesc"] = "TOKEN1_VOLUME_DESC";
    PoolsOrderBy["TvlUSDAsc"] = "TVL_U_S_D_ASC";
    PoolsOrderBy["TvlUSDDesc"] = "TVL_U_S_D_DESC";
    PoolsOrderBy["TxCountAsc"] = "TX_COUNT_ASC";
    PoolsOrderBy["TxCountDesc"] = "TX_COUNT_DESC";
    PoolsOrderBy["VolumeUSDAsc"] = "VOLUME_U_S_D_ASC";
    PoolsOrderBy["VolumeUSDDesc"] = "VOLUME_U_S_D_DESC";
})(PoolsOrderBy = exports.PoolsOrderBy || (exports.PoolsOrderBy = {}));
var PriceBundlesOrderBy;
(function (PriceBundlesOrderBy) {
    PriceBundlesOrderBy["IdAsc"] = "ID_ASC";
    PriceBundlesOrderBy["IdDesc"] = "ID_DESC";
    PriceBundlesOrderBy["KsmAsc"] = "KSM_ASC";
    PriceBundlesOrderBy["KsmDesc"] = "KSM_DESC";
    PriceBundlesOrderBy["Natural"] = "NATURAL";
    PriceBundlesOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    PriceBundlesOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
})(PriceBundlesOrderBy = exports.PriceBundlesOrderBy || (exports.PriceBundlesOrderBy = {}));
var PriceRecordsOrderBy;
(function (PriceRecordsOrderBy) {
    PriceRecordsOrderBy["IdAsc"] = "ID_ASC";
    PriceRecordsOrderBy["IdDesc"] = "ID_DESC";
    PriceRecordsOrderBy["KsmAsc"] = "KSM_ASC";
    PriceRecordsOrderBy["KsmDesc"] = "KSM_DESC";
    PriceRecordsOrderBy["Natural"] = "NATURAL";
    PriceRecordsOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    PriceRecordsOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
})(PriceRecordsOrderBy = exports.PriceRecordsOrderBy || (exports.PriceRecordsOrderBy = {}));
var ProvisionPoolsOrderBy;
(function (ProvisionPoolsOrderBy) {
    ProvisionPoolsOrderBy["EndAtBlockIdAsc"] = "END_AT_BLOCK_ID_ASC";
    ProvisionPoolsOrderBy["EndAtBlockIdDesc"] = "END_AT_BLOCK_ID_DESC";
    ProvisionPoolsOrderBy["EndAtBlockNumberAsc"] = "END_AT_BLOCK_NUMBER_ASC";
    ProvisionPoolsOrderBy["EndAtBlockNumberDesc"] = "END_AT_BLOCK_NUMBER_DESC";
    ProvisionPoolsOrderBy["IdAsc"] = "ID_ASC";
    ProvisionPoolsOrderBy["IdDesc"] = "ID_DESC";
    ProvisionPoolsOrderBy["InitializeShareAsc"] = "INITIALIZE_SHARE_ASC";
    ProvisionPoolsOrderBy["InitializeShareDesc"] = "INITIALIZE_SHARE_DESC";
    ProvisionPoolsOrderBy["Natural"] = "NATURAL";
    ProvisionPoolsOrderBy["PoolTokenIdAsc"] = "POOL_TOKEN_ID_ASC";
    ProvisionPoolsOrderBy["PoolTokenIdDesc"] = "POOL_TOKEN_ID_DESC";
    ProvisionPoolsOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    ProvisionPoolsOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
    ProvisionPoolsOrderBy["StartAtBlockIdAsc"] = "START_AT_BLOCK_ID_ASC";
    ProvisionPoolsOrderBy["StartAtBlockIdDesc"] = "START_AT_BLOCK_ID_DESC";
    ProvisionPoolsOrderBy["StartAtBlockNumberAsc"] = "START_AT_BLOCK_NUMBER_ASC";
    ProvisionPoolsOrderBy["StartAtBlockNumberDesc"] = "START_AT_BLOCK_NUMBER_DESC";
    ProvisionPoolsOrderBy["Token0AmountAsc"] = "TOKEN0_AMOUNT_ASC";
    ProvisionPoolsOrderBy["Token0AmountDesc"] = "TOKEN0_AMOUNT_DESC";
    ProvisionPoolsOrderBy["Token0IdAsc"] = "TOKEN0_ID_ASC";
    ProvisionPoolsOrderBy["Token0IdDesc"] = "TOKEN0_ID_DESC";
    ProvisionPoolsOrderBy["Token1AmountAsc"] = "TOKEN1_AMOUNT_ASC";
    ProvisionPoolsOrderBy["Token1AmountDesc"] = "TOKEN1_AMOUNT_DESC";
    ProvisionPoolsOrderBy["Token1IdAsc"] = "TOKEN1_ID_ASC";
    ProvisionPoolsOrderBy["Token1IdDesc"] = "TOKEN1_ID_DESC";
    ProvisionPoolsOrderBy["TxCountAsc"] = "TX_COUNT_ASC";
    ProvisionPoolsOrderBy["TxCountDesc"] = "TX_COUNT_DESC";
})(ProvisionPoolsOrderBy = exports.ProvisionPoolsOrderBy || (exports.ProvisionPoolsOrderBy = {}));
var SystemConstsOrderBy;
(function (SystemConstsOrderBy) {
    SystemConstsOrderBy["IdAsc"] = "ID_ASC";
    SystemConstsOrderBy["IdDesc"] = "ID_DESC";
    SystemConstsOrderBy["LiquidTokenIdAsc"] = "LIQUID_TOKEN_ID_ASC";
    SystemConstsOrderBy["LiquidTokenIdDesc"] = "LIQUID_TOKEN_ID_DESC";
    SystemConstsOrderBy["NativeTokenIdAsc"] = "NATIVE_TOKEN_ID_ASC";
    SystemConstsOrderBy["NativeTokenIdDesc"] = "NATIVE_TOKEN_ID_DESC";
    SystemConstsOrderBy["Natural"] = "NATURAL";
    SystemConstsOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    SystemConstsOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
    SystemConstsOrderBy["StableTokenIdAsc"] = "STABLE_TOKEN_ID_ASC";
    SystemConstsOrderBy["StableTokenIdDesc"] = "STABLE_TOKEN_ID_DESC";
    SystemConstsOrderBy["StakignTokenIdAsc"] = "STAKIGN_TOKEN_ID_ASC";
    SystemConstsOrderBy["StakignTokenIdDesc"] = "STAKIGN_TOKEN_ID_DESC";
})(SystemConstsOrderBy = exports.SystemConstsOrderBy || (exports.SystemConstsOrderBy = {}));
var TokenDayDataOrderBy;
(function (TokenDayDataOrderBy) {
    TokenDayDataOrderBy["DailyTxCountAsc"] = "DAILY_TX_COUNT_ASC";
    TokenDayDataOrderBy["DailyTxCountDesc"] = "DAILY_TX_COUNT_DESC";
    TokenDayDataOrderBy["DailyVolumeTokenAsc"] = "DAILY_VOLUME_TOKEN_ASC";
    TokenDayDataOrderBy["DailyVolumeTokenDesc"] = "DAILY_VOLUME_TOKEN_DESC";
    TokenDayDataOrderBy["DailyVolumeUSDAsc"] = "DAILY_VOLUME_U_S_D_ASC";
    TokenDayDataOrderBy["DailyVolumeUSDDesc"] = "DAILY_VOLUME_U_S_D_DESC";
    TokenDayDataOrderBy["DateAsc"] = "DATE_ASC";
    TokenDayDataOrderBy["DateDesc"] = "DATE_DESC";
    TokenDayDataOrderBy["IdAsc"] = "ID_ASC";
    TokenDayDataOrderBy["IdDesc"] = "ID_DESC";
    TokenDayDataOrderBy["Natural"] = "NATURAL";
    TokenDayDataOrderBy["PriceAsc"] = "PRICE_ASC";
    TokenDayDataOrderBy["PriceDesc"] = "PRICE_DESC";
    TokenDayDataOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    TokenDayDataOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
    TokenDayDataOrderBy["TokenIdAsc"] = "TOKEN_ID_ASC";
    TokenDayDataOrderBy["TokenIdDesc"] = "TOKEN_ID_DESC";
})(TokenDayDataOrderBy = exports.TokenDayDataOrderBy || (exports.TokenDayDataOrderBy = {}));
var TokensOrderBy;
(function (TokensOrderBy) {
    TokensOrderBy["DecimalAsc"] = "DECIMAL_ASC";
    TokensOrderBy["DecimalDesc"] = "DECIMAL_DESC";
    TokensOrderBy["IdAsc"] = "ID_ASC";
    TokensOrderBy["IdDesc"] = "ID_DESC";
    TokensOrderBy["IssuanceAsc"] = "ISSUANCE_ASC";
    TokensOrderBy["IssuanceDesc"] = "ISSUANCE_DESC";
    TokensOrderBy["LockedInDexAsc"] = "LOCKED_IN_DEX_ASC";
    TokensOrderBy["LockedInDexDesc"] = "LOCKED_IN_DEX_DESC";
    TokensOrderBy["LockedInIncentiveAsc"] = "LOCKED_IN_INCENTIVE_ASC";
    TokensOrderBy["LockedInIncentiveDesc"] = "LOCKED_IN_INCENTIVE_DESC";
    TokensOrderBy["LockedInLoanAsc"] = "LOCKED_IN_LOAN_ASC";
    TokensOrderBy["LockedInLoanDesc"] = "LOCKED_IN_LOAN_DESC";
    TokensOrderBy["NameAsc"] = "NAME_ASC";
    TokensOrderBy["NameDesc"] = "NAME_DESC";
    TokensOrderBy["Natural"] = "NATURAL";
    TokensOrderBy["PriceAsc"] = "PRICE_ASC";
    TokensOrderBy["PriceDesc"] = "PRICE_DESC";
    TokensOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    TokensOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
    TokensOrderBy["TxCountAsc"] = "TX_COUNT_ASC";
    TokensOrderBy["TxCountDesc"] = "TX_COUNT_DESC";
    TokensOrderBy["VolumeAsc"] = "VOLUME_ASC";
    TokensOrderBy["VolumeDesc"] = "VOLUME_DESC";
    TokensOrderBy["VolumeUSDAsc"] = "VOLUME_U_S_D_ASC";
    TokensOrderBy["VolumeUSDDesc"] = "VOLUME_U_S_D_DESC";
})(TokensOrderBy = exports.TokensOrderBy || (exports.TokensOrderBy = {}));
var TotalLoanPositionsOrderBy;
(function (TotalLoanPositionsOrderBy) {
    TotalLoanPositionsOrderBy["CollateralAmountAsc"] = "COLLATERAL_AMOUNT_ASC";
    TotalLoanPositionsOrderBy["CollateralAmountDesc"] = "COLLATERAL_AMOUNT_DESC";
    TotalLoanPositionsOrderBy["CollateralIdAsc"] = "COLLATERAL_ID_ASC";
    TotalLoanPositionsOrderBy["CollateralIdDesc"] = "COLLATERAL_ID_DESC";
    TotalLoanPositionsOrderBy["DebitAmountAsc"] = "DEBIT_AMOUNT_ASC";
    TotalLoanPositionsOrderBy["DebitAmountDesc"] = "DEBIT_AMOUNT_DESC";
    TotalLoanPositionsOrderBy["IdAsc"] = "ID_ASC";
    TotalLoanPositionsOrderBy["IdDesc"] = "ID_DESC";
    TotalLoanPositionsOrderBy["Natural"] = "NATURAL";
    TotalLoanPositionsOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    TotalLoanPositionsOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
})(TotalLoanPositionsOrderBy = exports.TotalLoanPositionsOrderBy || (exports.TotalLoanPositionsOrderBy = {}));
var TransfersOrderBy;
(function (TransfersOrderBy) {
    TransfersOrderBy["AmountAsc"] = "AMOUNT_ASC";
    TransfersOrderBy["AmountDesc"] = "AMOUNT_DESC";
    TransfersOrderBy["AmountInUSDAsc"] = "AMOUNT_IN_U_S_D_ASC";
    TransfersOrderBy["AmountInUSDDesc"] = "AMOUNT_IN_U_S_D_DESC";
    TransfersOrderBy["CallIdAsc"] = "CALL_ID_ASC";
    TransfersOrderBy["CallIdDesc"] = "CALL_ID_DESC";
    TransfersOrderBy["ExtrinsicIdAsc"] = "EXTRINSIC_ID_ASC";
    TransfersOrderBy["ExtrinsicIdDesc"] = "EXTRINSIC_ID_DESC";
    TransfersOrderBy["FromIdAsc"] = "FROM_ID_ASC";
    TransfersOrderBy["FromIdDesc"] = "FROM_ID_DESC";
    TransfersOrderBy["IdAsc"] = "ID_ASC";
    TransfersOrderBy["IdDesc"] = "ID_DESC";
    TransfersOrderBy["IsSuccessAsc"] = "IS_SUCCESS_ASC";
    TransfersOrderBy["IsSuccessDesc"] = "IS_SUCCESS_DESC";
    TransfersOrderBy["Natural"] = "NATURAL";
    TransfersOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    TransfersOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
    TransfersOrderBy["TimestampAsc"] = "TIMESTAMP_ASC";
    TransfersOrderBy["TimestampDesc"] = "TIMESTAMP_DESC";
    TransfersOrderBy["TokenIdAsc"] = "TOKEN_ID_ASC";
    TransfersOrderBy["TokenIdDesc"] = "TOKEN_ID_DESC";
    TransfersOrderBy["ToIdAsc"] = "TO_ID_ASC";
    TransfersOrderBy["ToIdDesc"] = "TO_ID_DESC";
})(TransfersOrderBy = exports.TransfersOrderBy || (exports.TransfersOrderBy = {}));
var UserProvisionsOrderBy;
(function (UserProvisionsOrderBy) {
    UserProvisionsOrderBy["IdAsc"] = "ID_ASC";
    UserProvisionsOrderBy["IdDesc"] = "ID_DESC";
    UserProvisionsOrderBy["Natural"] = "NATURAL";
    UserProvisionsOrderBy["PoolIdAsc"] = "POOL_ID_ASC";
    UserProvisionsOrderBy["PoolIdDesc"] = "POOL_ID_DESC";
    UserProvisionsOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    UserProvisionsOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
    UserProvisionsOrderBy["Token0AmountAsc"] = "TOKEN0_AMOUNT_ASC";
    UserProvisionsOrderBy["Token0AmountDesc"] = "TOKEN0_AMOUNT_DESC";
    UserProvisionsOrderBy["Token0IdAsc"] = "TOKEN0_ID_ASC";
    UserProvisionsOrderBy["Token0IdDesc"] = "TOKEN0_ID_DESC";
    UserProvisionsOrderBy["Token1AmountAsc"] = "TOKEN1_AMOUNT_ASC";
    UserProvisionsOrderBy["Token1AmountDesc"] = "TOKEN1_AMOUNT_DESC";
    UserProvisionsOrderBy["Token1IdAsc"] = "TOKEN1_ID_ASC";
    UserProvisionsOrderBy["Token1IdDesc"] = "TOKEN1_ID_DESC";
})(UserProvisionsOrderBy = exports.UserProvisionsOrderBy || (exports.UserProvisionsOrderBy = {}));
exports.TokensDocument = (0, graphql_tag_1.default) `
    query Tokens {
  query {
    tokens {
      totalCount
      nodes {
        id
        name
        price
        volume
        volumeUSD
      }
    }
  }
}
    `;
exports.TokenDocument = (0, graphql_tag_1.default) `
    query Token($name: String!) {
  query {
    token(id: $name) {
      id
      name
      price
      volume
      volumeUSD
    }
  }
}
    `;
exports.AccountExtrinsicsDocument = (0, graphql_tag_1.default) `
    query AccountExtrinsics($signerId: String!) {
  query {
    extrinsics(filter: {signerId: {equalTo: $signerId}}, orderBy: TIMESTAMP_DESC) {
      totalCount
      nodes {
        id
        method
        section
        args
        signerId
        nonce
        timestamp
        signature
        isSigned
        isSuccess
        blockId
      }
    }
  }
}
    `;
const defaultWrapper = (action, _operationName) => action();
function getSdk(client, withWrapper = defaultWrapper) {
    return {
        Tokens(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.TokensDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'Tokens');
        },
        Token(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.TokenDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'Token');
        },
        AccountExtrinsics(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AccountExtrinsicsDocument, variables, Object.assign(Object.assign({}, requestHeaders), wrappedRequestHeaders)), 'AccountExtrinsics');
        }
    };
}
exports.getSdk = getSdk;
//# sourceMappingURL=queries.js.map