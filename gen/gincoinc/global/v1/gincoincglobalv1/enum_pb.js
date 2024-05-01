// source: gincoinc/global/v1/gincoincglobalv1/enum.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

goog.exportSymbol('proto.gincoinc.global.v1.AddressType', null, global);
goog.exportSymbol('proto.gincoinc.global.v1.Coin', null, global);
goog.exportSymbol('proto.gincoinc.global.v1.CosmosMsgType', null, global);
goog.exportSymbol('proto.gincoinc.global.v1.EthereumCallMethod', null, global);
goog.exportSymbol('proto.gincoinc.global.v1.EthereumStakingHistoryType', null, global);
goog.exportSymbol('proto.gincoinc.global.v1.EthereumStakingRewardLayerType', null, global);
goog.exportSymbol('proto.gincoinc.global.v1.NemTransactionType', null, global);
goog.exportSymbol('proto.gincoinc.global.v1.Network', null, global);
goog.exportSymbol('proto.gincoinc.global.v1.SolanaEventType', null, global);
goog.exportSymbol('proto.gincoinc.global.v1.SolanaRecentBlockhashType', null, global);
goog.exportSymbol('proto.gincoinc.global.v1.StakingEventType', null, global);
goog.exportSymbol('proto.gincoinc.global.v1.StakingValidatorStatus', null, global);
goog.exportSymbol('proto.gincoinc.global.v1.SymbolTransactionType', null, global);
goog.exportSymbol('proto.gincoinc.global.v1.TransactionResult', null, global);
goog.exportSymbol('proto.gincoinc.global.v1.TransactionState', null, global);
goog.exportSymbol('proto.gincoinc.global.v1.TransferType', null, global);
goog.exportSymbol('proto.gincoinc.global.v1.UTXOState', null, global);
goog.exportSymbol('proto.gincoinc.global.v1.XRPTransactionType', null, global);
/**
 * @enum {number}
 */
proto.gincoinc.global.v1.Coin = {
  COIN_INVALID: 0,
  COIN_BTC: 1,
  COIN_ETH: 2,
  COIN_LTC: 3,
  COIN_BCH: 4,
  COIN_XRP: 5,
  COIN_ERC20_BAT: 6,
  COIN_TRX: 7,
  COIN_ERC20_USDT: 8,
  COIN_RYO: 9,
  COIN_ERC20_JASMY: 10,
  COIN_ERC20_ENJ: 11,
  COIN_ERC20_OMG: 12,
  COIN_XLM: 13,
  COIN_ADA: 14,
  COIN_DOT: 15,
  COIN_ERC20_LINK: 16,
  COIN_ERC20_DEP: 17,
  COIN_ERC20_USDC: 18,
  COIN_ERC20_GYEN: 19,
  COIN_ERC20_ZAIF: 20,
  COIN_ERC20_FSCC: 21,
  COIN_ERC20_CMS: 22,
  COIN_ERC20_CICC: 23,
  COIN_ERC20_NCXC: 24,
  COIN_ERC20_COT: 25,
  COIN_XEM: 26,
  COIN_MONA: 27,
  COIN_IOST: 28,
  COIN_ERC20_SKEB: 29,
  COIN_KLAY: 30,
  COIN_MATIC: 31,
  COIN_XYM: 32,
  COIN_AVAX: 33,
  COIN_ERC20_MATIC: 34,
  COIN_ERC20_ROND: 35,
  COIN_ERC20_MV: 36,
  COIN_POLYGON_ERC20_ROND: 37,
  COIN_POLYGON_ERC20_MV: 38,
  COIN_POLYGON_ERC20_TSUGT: 39,
  COIN_ERC20_GXE: 40,
  COIN_OAS: 41,
  COIN_ASTR: 42,
  COIN_XDC: 43,
  COIN_ATOM: 44,
  COIN_KLAYTN_KIP7_MBX: 45,
  COIN_ETC: 46,
  COIN_ERC20_DAI: 47,
  COIN_ERC20_WETH: 48,
  COIN_ALGO: 49,
  COIN_ERC20_AXS: 50,
  COIN_ERC20_SAND: 51,
  COIN_ERC20_MKR: 52,
  COIN_ERC20_CHZ: 53,
  COIN_ERC20_NIDT: 54,
  COIN_ERC20_FNCT: 55,
  COIN_ERC20_SHIB: 56,
  COIN_ERC20_APE: 57,
  COIN_ERC20_BNB: 58,
  COIN_ERC20_FCR: 59,
  COIN_HBAR: 60,
  COIN_JOC: 61,
  COIN_SOL: 62,
  COIN_BNB: 63,
  COIN_FLR: 64,
  COIN_POLYGON_ERC20_OSHI: 65,
  COIN_ARBITRUM_ERC20_ARB: 66,
  COIN_KLAYTN_KIP7_BORA: 67,
  COIN_ERC20_MASK: 68,
  COIN_ERC20_SUP: 69,
  COIN_ERC20_DM2P: 70,
  COIN_APT: 71,
  COIN_SDN: 10002,
  COIN_ERC20_SCDEV: 10003,
  COIN_ERC20_SCQA: 10004,
  COIN_ERC20_SCPROD: 10005
};

/**
 * @enum {number}
 */
proto.gincoinc.global.v1.Network = {
  NETWORK_INVALID: 0,
  NETWORK_BITCOIN_MAINNET: 1,
  NETWORK_BITCOIN_TESTNET: 2,
  NETWORK_ETHEREUM_MAINNET: 3,
  NETWORK_ETHEREUM_TESTNET: 4,
  NETWORK_ETHEREUM_TESTNET_2: 59,
  NETWORK_LITECOIN_MAINNET: 5,
  NETWORK_LITECOIN_TESTNET: 6,
  NETWORK_BITCOINCASH_MAINNET: 7,
  NETWORK_BITCOINCASH_TESTNET: 8,
  NETWORK_RIPPLE_MAINNET: 9,
  NETWORK_RIPPLE_TESTNET: 10,
  NETWORK_TRON_MAINNET: 11,
  NETWORK_TRON_TESTNET: 12,
  NETWORK_C0BAN_MAINNET: 13,
  NETWORK_C0BAN_TESTNET: 14,
  NETWORK_STELLAR_MAINNET: 15,
  NETWORK_STELLAR_TESTNET: 16,
  NETWORK_CARDANO_MAINNET: 17,
  NETWORK_CARDANO_TESTNET: 18,
  NETWORK_POLKADOT_MAINNET: 19,
  NETWORK_POLKADOT_TESTNET: 20,
  NETWORK_NEM_MAINNET: 21,
  NETWORK_NEM_TESTNET: 22,
  NETWORK_MONACOIN_MAINNET: 23,
  NETWORK_MONACOIN_TESTNET: 24,
  NETWORK_IOST_MAINNET: 25,
  NETWORK_IOST_TESTNET: 26,
  NETWORK_KLAY_MAINNET: 27,
  NETWORK_KLAY_TESTNET: 28,
  NETWORK_POLYGON_MAINNET: 29,
  NETWORK_POLYGON_TESTNET: 30,
  NETWORK_SYMBOL_MAINNET: 31,
  NETWORK_SYMBOL_TESTNET: 32,
  NETWORK_AVALANCHE_MAINNET: 33,
  NETWORK_AVALANCHE_TESTNET: 34,
  NETWORK_OASYS_MAINNET: 35,
  NETWORK_OASYS_TESTNET: 36,
  NETWORK_ASTAR_MAINNET: 37,
  NETWORK_SHIBUYA_TESTNET: 38,
  NETWORK_XDC_MAINNET: 39,
  NETWORK_XDC_TESTNET: 40,
  NETWORK_COSMOS_MAINNET: 41,
  NETWORK_COSMOS_TESTNET: 42,
  NETWORK_ETHEREUM_CLASSIC_MAINNET: 43,
  NETWORK_ETHEREUM_CLASSIC_TESTNET: 44,
  NETWORK_ALGORAND_MAINNET: 45,
  NETWORK_ALGORAND_TESTNET: 46,
  NETWORK_HEDERA_MAINNET: 47,
  NETWORK_HEDERA_TESTNET: 48,
  NETWORK_JAPAN_OPEN_CHAIN_MAINNET: 49,
  NETWORK_JAPAN_OPEN_CHAIN_TESTNET: 50,
  NETWORK_SOLANA_MAINNET: 51,
  NETWORK_SOLANA_TESTNET: 52,
  NETWORK_BNB_SMART_CHAIN_MAINNET: 53,
  NETWORK_BNB_SMART_CHAIN_TESTNET: 54,
  NETWORK_FLARE_MAINNET: 55,
  NETWORK_FLARE_TESTNET: 56,
  NETWORK_ARBITRUM_ONE_MAINNET: 57,
  NETWORK_ARBITRUM_ONE_TESTNET: 58,
  NETWORK_APTOS_MAINNET: 60,
  NETWORK_APTOS_TESTNET: 61,
  NETWORK_SHIDEN_MAINNET: 10002
};

/**
 * @enum {number}
 */
proto.gincoinc.global.v1.AddressType = {
  ADDRESS_TYPE_INVALID: 0,
  ADDRESS_TYPE_P2SH: 1,
  ADDRESS_TYPE_P2SH_P2WSH: 2,
  ADDRESS_TYPE_P2WSH: 3,
  ADDRESS_TYPE_NONE: 100
};

/**
 * @enum {number}
 */
proto.gincoinc.global.v1.TransactionState = {
  TRANSACTION_STATE_INVALID: 0,
  TRANSACTION_STATE_SUBMITTED: 1,
  TRANSACTION_STATE_PENDING: 2,
  TRANSACTION_STATE_PROCESSING: 3,
  TRANSACTION_STATE_CONFIRMED: 4,
  TRANSACTION_STATE_DROPPED: 5
};

/**
 * @enum {number}
 */
proto.gincoinc.global.v1.UTXOState = {
  UTXO_STATE_INVALID: 0,
  UTXO_STATE_PENDING_UNSPENT: 1,
  UTXO_STATE_UNSPENT: 2,
  UTXO_STATE_PENDING_SPENT: 3,
  UTXO_STATE_SPENT: 4
};

/**
 * @enum {number}
 */
proto.gincoinc.global.v1.TransferType = {
  TRANSFER_TYPE_INVALID: 0,
  TRANSFER_TYPE_SEND: 1,
  TRANSFER_TYPE_RECEIVE: 2,
  TRANSFER_TYPE_CHANGE: 3,
  TRANSFER_TYPE_FATAL: 4
};

/**
 * @enum {number}
 */
proto.gincoinc.global.v1.XRPTransactionType = {
  XRP_TRANSACTION_TYPE_INVALID: 0,
  XRP_TRANSACTION_TYPE_PAYMENT: 1,
  XRP_TRANSACTION_TYPE_SET_SIGNER_LIST: 2,
  XRP_TRANSACTION_TYPE_DISABLE_MASTER: 3
};

/**
 * @enum {number}
 */
proto.gincoinc.global.v1.TransactionResult = {
  TRANSACTION_RESULT_INVALID: 0,
  TRANSACTION_RESULT_PENDING: 1,
  TRANSACTION_RESULT_SUCCESS: 2,
  TRANSACTION_RESULT_FAILURE: 3,
  TRANSACTION_RESULT_NONE: 100
};

/**
 * @enum {number}
 */
proto.gincoinc.global.v1.NemTransactionType = {
  NEM_TRANSACTION_TYPE_INVALID: 0,
  NEM_TRANSACTION_TYPE_TRANSFER_TYPE: 1,
  NEM_TRANSACTION_TYPE_IMPORTANCE_TRANSFER_TYPE: 2,
  NEM_TRANSACTION_TYPE_MULTISIG_MODIFICATION_TYPE: 3,
  NEM_TRANSACTION_TYPE_MULTISIG_SIGNATURE_TYPE: 4,
  NEM_TRANSACTION_TYPE_MULTISIG_TRANSACTION_TYPE: 5,
  NEM_TRANSACTION_TYPE_PROVISION_NAMESPACE_TYPE: 6,
  NEM_TRANSACTION_TYPE_MOSAIC_DEFINITION_TYPE: 7,
  NEM_TRANSACTION_TYPE_MOSAIC_SUPPLY_TYPE: 8
};

/**
 * @enum {number}
 */
proto.gincoinc.global.v1.SymbolTransactionType = {
  SYMBOL_TRANSACTION_TYPE_INVALID: 0,
  SYMBOL_TRANSACTION_TYPE_ACCOUNT_KEY_LINK: 1,
  SYMBOL_TRANSACTION_TYPE_NODE_KEY_LINK: 2,
  SYMBOL_TRANSACTION_TYPE_AGGREGATE_COMPLETE: 3,
  SYMBOL_TRANSACTION_TYPE_AGGREGATE_BONDED: 4,
  SYMBOL_TRANSACTION_TYPE_VOTING_KEY_LINK: 5,
  SYMBOL_TRANSACTION_TYPE_VRF_KEY_LINK: 6,
  SYMBOL_TRANSACTION_TYPE_HASH_LOCK: 7,
  SYMBOL_TRANSACTION_TYPE_SECRET_LOCK: 8,
  SYMBOL_TRANSACTION_TYPE_SECRET_PROOF: 9,
  SYMBOL_TRANSACTION_TYPE_ACCOUNT_METADATA: 10,
  SYMBOL_TRANSACTION_TYPE_MOSAIC_METADATA: 11,
  SYMBOL_TRANSACTION_TYPE_NAMESPACE_METADATA: 12,
  SYMBOL_TRANSACTION_TYPE_MOSAIC_DEFINITION: 13,
  SYMBOL_TRANSACTION_TYPE_MOSAIC_SUPPLY_CHANGE: 14,
  SYMBOL_TRANSACTION_TYPE_MOSAIC_SUPPLY_REVOCATION: 15,
  SYMBOL_TRANSACTION_TYPE_MULTISIG_ACCOUNT_MODIFICATION: 16,
  SYMBOL_TRANSACTION_TYPE_ADDRESS_ALIAS: 17,
  SYMBOL_TRANSACTION_TYPE_MOSAIC_ALIAS: 18,
  SYMBOL_TRANSACTION_TYPE_NAMESPACE_REGISTRATION: 19,
  SYMBOL_TRANSACTION_TYPE_ACCOUNT_ADDRESS_RESTRICTION: 20,
  SYMBOL_TRANSACTION_TYPE_ACCOUNT_MOSAIC_RESTRICTION: 21,
  SYMBOL_TRANSACTION_TYPE_ACCOUNT_OPERATION_RESTRICTION: 22,
  SYMBOL_TRANSACTION_TYPE_MOSAIC_ADDRESS_RESTRICTION: 23,
  SYMBOL_TRANSACTION_TYPE_MOSAIC_GLOBAL_RESTRICTION: 24,
  SYMBOL_TRANSACTION_TYPE_TRANSFER: 25
};

/**
 * @enum {number}
 */
proto.gincoinc.global.v1.EthereumStakingRewardLayerType = {
  ETHEREUM_STAKING_REWARD_LAYER_TYPE_INVALID: 0,
  ETHEREUM_STAKING_REWARD_LAYER_TYPE_CONSENSUS: 1,
  ETHEREUM_STAKING_REWARD_LAYER_TYPE_EXECUTION: 2,
  ETHEREUM_STAKING_REWARD_LAYER_TYPE_EXECUTION_MEV: 3
};

/**
 * @enum {number}
 */
proto.gincoinc.global.v1.CosmosMsgType = {
  COSMOS_MSG_TYPE_INVALID: 0,
  COSMOS_MSG_TYPE_SEND: 1,
  COSMOS_MSG_TYPE_DELEGATE: 2,
  COSMOS_MSG_TYPE_UNDELEGATE: 3,
  COSMOS_MSG_TYPE_UNBONDED: 4,
  COSMOS_MSG_TYPE_WITHDRAW_DELEGATOR_REWARD: 5
};

/**
 * @enum {number}
 */
proto.gincoinc.global.v1.StakingValidatorStatus = {
  STAKING_VALIDATOR_STATUS_INVALID: 0,
  STAKING_VALIDATOR_STATUS_ACTIVE: 1,
  STAKING_VALIDATOR_STATUS_STOP: 2,
  STAKING_VALIDATOR_STATUS_PAUSE: 3
};

/**
 * @enum {number}
 */
proto.gincoinc.global.v1.StakingEventType = {
  STAKING_EVENT_TYPE_INVALID: 0,
  STAKING_EVENT_TYPE_STAKE: 1,
  STAKING_EVENT_TYPE_UNSTAKE: 2,
  STAKING_EVENT_TYPE_REWARD: 3
};

/**
 * @enum {number}
 */
proto.gincoinc.global.v1.EthereumStakingHistoryType = {
  ETHEREUM_STAKING_HISTORY_TYPE_INVALID: 0,
  ETHEREUM_STAKING_HISTORY_TYPE_REWARD_CONSENSUS: 1,
  ETHEREUM_STAKING_HISTORY_TYPE_REWARD_EXECUTION: 2,
  ETHEREUM_STAKING_HISTORY_TYPE_REWARD_MEV: 3,
  ETHEREUM_STAKING_HISTORY_TYPE_START: 4,
  ETHEREUM_STAKING_HISTORY_TYPE_EXIT: 5
};

/**
 * @enum {number}
 */
proto.gincoinc.global.v1.SolanaRecentBlockhashType = {
  SOLANA_RECENT_BLOCKHASH_TYPE_INVALID: 0,
  SOLANA_RECENT_BLOCKHASH_TYPE_FINALIZED: 1,
  SOLANA_RECENT_BLOCKHASH_TYPE_CONFIRMED: 2,
  SOLANA_RECENT_BLOCKHASH_TYPE_PROCESSED: 3
};

/**
 * @enum {number}
 */
proto.gincoinc.global.v1.SolanaEventType = {
  SOLANA_EVENT_TYPE_INVALID: 0,
  SOLANA_EVENT_TYPE_DELEGATE: 1,
  SOLANA_EVENT_TYPE_DEACTIVATE: 2,
  SOLANA_EVENT_TYPE_WITHDRAW: 3,
  SOLANA_EVENT_TYPE_STAKE_INIT: 4,
  SOLANA_EVENT_TYPE_REWARD: 5,
  SOLANA_EVENT_TYPE_DELEGATE_COMPLETE: 6,
  SOLANA_EVENT_TYPE_DEACTIVATE_COMPLETE: 7
};

/**
 * @enum {number}
 */
proto.gincoinc.global.v1.EthereumCallMethod = {
  ETHEREUM_CALL_METHOD_INVALID: 0,
  ETHEREUM_CALL_METHOD_PROGMAT_COIN_INITIALIZE: 1,
  ETHEREUM_CALL_METHOD_PROGMAT_COIN_CONFIGURE_MINTER: 2,
  ETHEREUM_CALL_METHOD_PROGMAT_COIN_MINT_AND_TRANSFER: 3,
  ETHEREUM_CALL_METHOD_PROGMAT_COIN_MINT: 4,
  ETHEREUM_CALL_METHOD_PROGMAT_COIN_BURN: 5,
  ETHEREUM_CALL_METHOD_PROGMAT_COIN_ADD_TO_WHITELIST: 6,
  ETHEREUM_CALL_METHOD_PROGMAT_COIN_REMOVE_FROM_WHITELIST: 7,
  ETHEREUM_CALL_METHOD_PROGMAT_COIN_ADD_TO_BLACKLIST: 8,
  ETHEREUM_CALL_METHOD_PROGMAT_COIN_REMOVE_FROM_BLACKLIST: 9,
  ETHEREUM_CALL_METHOD_PROGMAT_COIN_CONFISCATE: 10,
  ETHEREUM_CALL_METHOD_PROGMAT_COIN_PAUSE: 11,
  ETHEREUM_CALL_METHOD_PROGMAT_COIN_UNPAUSE: 12
};

goog.object.extend(exports, proto.gincoinc.global.v1);
