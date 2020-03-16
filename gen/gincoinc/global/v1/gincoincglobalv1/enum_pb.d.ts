// package: gincoinc.global.v1
// file: gincoinc/global/v1/gincoincglobalv1/enum.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export enum Coin {
    COIN_INVALID = 0,
    COIN_BTC = 1,
    COIN_ETH = 2,
    COIN_LTC = 3,
    COIN_BCH = 4,
    COIN_XRP = 5,
}

export enum Network {
    NETWORK_INVALID = 0,
    NETWORK_BITCOIN_MAINNET = 1,
    NETWORK_BITCOIN_TESTNET = 2,
    NETWORK_ETHEREUM_MAINNET = 3,
    NETWORK_ETHEREUM_TESTNET = 4,
    NETWORK_LITECOIN_MAINNET = 5,
    NETWORK_LITECOIN_TESTNET = 6,
    NETWORK_BITCOINCASH_MAINNET = 7,
    NETWORK_BITCOINCASH_TESTNET = 8,
    NETWORK_RIPPLE_MAINNET = 9,
    NETWORK_RIPPLE_TESTNET = 10,
}

export enum AddressType {
    ADDRESS_TYPE_INVALID = 0,
    ADDRESS_TYPE_P2SH = 1,
    ADDRESS_TYPE_P2SH_P2WSH = 2,
    ADDRESS_TYPE_P2WSH = 3,
    ADDRESS_TYPE_NONE = 100,
}

export enum TransactionState {
    TRANSACTION_STATE_INVALID = 0,
    TRANSACTION_STATE_SUBMITTED = 1,
    TRANSACTION_STATE_PENDING = 2,
    TRANSACTION_STATE_PROCESSING = 3,
    TRANSACTION_STATE_CONFIRMED = 4,
}

export enum UTXOState {
    UTXO_STATE_INVALID = 0,
    UTXO_STATE_PENDING_UNSPENT = 1,
    UTXO_STATE_UNSPENT = 2,
    UTXO_STATE_PENDING_SPENT = 3,
    UTXO_STATE_SPENT = 4,
}

export enum TransferType {
    TRANSFER_TYPE_INVALID = 0,
    TRANSFER_TYPE_SEND = 1,
    TRANSFER_TYPE_RECEIVE = 2,
    TRANSFER_TYPE_CHANGE = 3,
    TRANSFER_TYPE_FATAL = 4,
}

export enum XRPTransactionType {
    XRP_TRANSACTION_TYPE_INVALID = 0,
    XRP_TRANSACTION_TYPE_PAYMENT = 1,
    XRP_TRANSACTION_TYPE_SET_SIGNER_LIST = 2,
    XRP_TRANSACTION_TYPE_DISABLE_MASTER = 3,
}

export enum TransactionResult {
    TRANSACTION_RESULT_INVALID = 0,
    TRANSACTION_RESULT_PENDING = 1,
    TRANSACTION_RESULT_SUCCESS = 2,
    TRANSACTION_RESULT_FAILURE = 3,
    TRANSACTION_RESULT_NONE = 100,
}
