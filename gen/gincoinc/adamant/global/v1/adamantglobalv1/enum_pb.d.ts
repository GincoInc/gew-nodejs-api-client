// package: adamant.global.v1
// file: gincoinc/adamant/global/v1/adamantglobalv1/enum.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export enum WalletType {
    WALLET_TYPE_INVALID = 0,
    WALLET_TYPE_SELF_CUSTODY_HOT = 1,
    WALLET_TYPE_SELF_CUSTODY_COLD = 2,
    WALLET_TYPE_SELF_CUSTODY_HOT_SINGLE_SIG = 3,
    WALLET_TYPE_SELF_CUSTODY_HOT_RECEIVE_ONLY = 4,
    WALLET_TYPE_SELF_CUSTODY_COLD_SINGLE_SIG = 5,
}

export enum WalletState {
    WALLET_STATE_INVALID = 0,
    WALLET_STATE_PROPOSED = 1,
    WALLET_STATE_KEY_REGISTERING = 2,
    WALLET_STATE_KEY_REGISTERED = 3,
    WALLET_STATE_VALIDATOR_REVIEWING = 4,
    WALLET_STATE_VALIDATOR_REVIEWED = 5,
    WALLET_STATE_ACTIVATING = 6,
    WALLET_STATE_ACTIVATED = 7,
    WALLET_STATE_SIGNING = 8,
    WALLET_STATE_SIGNED = 9,
    WALLET_STATE_SUBMITTING = 10,
    WALLET_STATE_SUBMITTED = 11,
    WALLET_STATE_COMPLETED = 12,
    WALLET_STATE_CANCELLED = 13,
    WALLET_STATE_ARCHIVED = 14,
    WALLET_STATE_ADDRESS_IMPORT_WAITING = 15,
    WALLET_STATE_ADDRESS_IMPORTING = 16,
    WALLET_STATE_ADDRESS_IMPORT_FAILED = 17,
    WALLET_STATE_ADDRESS_DELETING = 18,
    WALLET_STATE_ADDRESS_DELETE_FAILED = 19,
    WALLET_STATE_FLUSHING = 20,
    WALLET_STATE_ACCOUNT_CREATING = 21,
}

export enum WalletProposalType {
    WALLET_PROPOSAL_TYPE_INVALID = 0,
    WALLET_PROPOSAL_TYPE_POLICY = 1,
    WALLET_PROPOSAL_TYPE_VALIDATOR = 2,
}

export enum AddressState {
    ADDRESS_STATE_INVALID = 0,
    ADDRESS_STATE_SUBMITTING = 1,
    ADDRESS_STATE_SUBMITTED = 2,
    ADDRESS_STATE_COMPLETED = 3,
}

export enum TransactionState {
    TRANSACTION_STATE_INVALID = 0,
    TRANSACTION_STATE_SIGNING = 1,
    TRANSACTION_STATE_SIGNED = 2,
    TRANSACTION_STATE_REVIEWING = 3,
    TRANSACTION_STATE_REVIEWED = 4,
    TRANSACTION_STATE_SUBMITTING = 5,
    TRANSACTION_STATE_SUBMITTED = 6,
    TRANSACTION_STATE_CANCELLING = 8,
    TRANSACTION_STATE_CANCELLED = 7,
}

export enum AccountType {
    ACCOUNT_TYPE_INVALID = 0,
    ACCOUNT_TYPE_USER = 1,
    ACCOUNT_TYPE_SERVICE_ACCOUNT = 2,
}

export enum UserState {
    USER_STATE_INVALID = 0,
    USER_STATE_UNCONFIRMED = 1,
    USER_STATE_CONFIRMED = 2,
    USER_STATE_DEACTIVATED = 3,
}

export enum RoleType {
    ROLE_TYPE_INVALID = 0,
    ROLE_TYPE_ORG_MANAGER = 1,
    ROLE_TYPE_ORG_SIGNER = 2,
    ROLE_TYPE_ORG_VALIDATOR = 3,
    ROLE_TYPE_ORG_VIEWER = 4,
    ROLE_TYPE_ORG_DEVELOPER = 5,
    ROLE_TYPE_HOT_WALLET_ADMIN = 6,
    ROLE_TYPE_HOT_WALLET_VIEWER = 7,
}

export enum ResourceType {
    RESOURCE_TYPE_INVALID = 0,
    RESOURCE_TYPE_WALLET = 1,
    RESOURCE_TYPE_ORGANIZATION = 2,
}

export enum TokenType {
    TOKEN_TYPE_INVALID = 0,
    TOKEN_TYPE_LOGIN_TOKEN = 1,
    TOKEN_TYPE_MAIL_TOKEN = 2,
    TOKEN_TYPE_PASSWORD_RESET_TOKEN = 3,
    TOKEN_TYPE_PASSWORD_UPDATE_TOKEN = 4,
    TOKEN_TYPE_SIGNUP_TOKEN = 5,
    TOKEN_TYPE_REFRESH_TOKEN = 6,
}

export enum PolicyType {
    POLICY_TYPE_INVALID = 0,
    POLICY_TYPE_HOT_WALLET_POLICY = 1,
    POLICY_TYPE_COLD_WALLET_POLICY = 2,
}

export enum TransferLimitType {
    TRANSFER_LIMIT_TYPE_INVALID = 0,
    TRANSFER_LIMIT_TYPE_HOURLY = 1,
    TRANSFER_LIMIT_TYPE_DAILY = 2,
    TRANSFER_LIMIT_TYPE_ONE_TIME = 3,
}

export enum NotificationType {
    NOTIFICATION_TYPE_INVALID = 0,
    NOTIFICATION_TYPE_WALLET_SIGNER_APPROVE_REQUEST = 1,
    NOTIFICATION_TYPE_WALLET_VALIDATOR_APPROVE_REQUEST = 2,
    NOTIFICATION_TYPE_WALLET_ACTIVATE_FAILED = 3,
    NOTIFICATION_TYPE_WALLET_CANCELLED = 4,
    NOTIFICATION_TYPE_WALLET_COMPLETED = 5,
    NOTIFICATION_TYPE_WALLET_FAILED = 6,
    NOTIFICATION_TYPE_WALLET_ADDRESS_APPROVE_REQUEST = 23,
    NOTIFICATION_TYPE_WALLET_XRP_ACTIVATE_REQUEST = 24,
    NOTIFICATION_TYPE_WALLET_MULTISIG_CONFIG_REQUEST = 25,
    NOTIFICATION_TYPE_WALLET_MANAGER_TRANSACTION_REQUEST = 26,
    NOTIFICATION_TYPE_WALLET_VALIDATOR_CHANGE_REQUEST = 27,
    NOTIFICATION_TYPE_TRANSACTION_SIGNER_APPROVE_REQUEST = 7,
    NOTIFICATION_TYPE_TRANSACTION_VALIDATOR_APPROVE_REQUEST = 8,
    NOTIFICATION_TYPE_TRANSACTION_READY = 22,
    NOTIFICATION_TYPE_TRANSACTION_SUBMITTED = 9,
    NOTIFICATION_TYPE_TRANSACTION_CANCELLED = 10,
    NOTIFICATION_TYPE_TRANSFER_SEND_COMPLETED = 11,
    NOTIFICATION_TYPE_TRANSFER_SEND_FAILED = 12,
    NOTIFICATION_TYPE_TRANSFER_RECEIVE_COMPLETED = 13,
    NOTIFICATION_TYPE_TRANSFER_RECEIVE_FAILED = 14,
    NOTIFICATION_TYPE_ADDRESS_APPROVE_REQUEST = 15,
    NOTIFICATION_TYPE_ADDRESS_COMPLETED = 16,
    NOTIFICATION_TYPE_ADDRESS_CANCELLED = 17,
    NOTIFICATION_TYPE_TRANSFERLIMIT_APPROVE_REQUEST = 18,
    NOTIFICATION_TYPE_TRANSFERLIMIT_COMPLETED = 19,
    NOTIFICATION_TYPE_TRANSFERLIMIT_CANCELLED = 20,
    NOTIFICATION_TYPE_WHITELIST_DETACH_REQUEST = 21,
}

export enum AuditLogGroup {
    AUDIT_LOG_GROUP_INVALID = 0,
    AUDIT_LOG_GROUP_LOGIN = 1,
    AUDIT_LOG_GROUP_ACCOUNT = 2,
    AUDIT_LOG_GROUP_SERVICE_ACCOUNT = 3,
    AUDIT_LOG_GROUP_WALLET = 4,
    AUDIT_LOG_GROUP_TRANSACTION = 5,
    AUDIT_LOG_GROUP_POLICY = 6,
    AUDIT_LOG_GROUP_WALLET_GROUP = 7,
}

export enum AuditLogType {
    AUDIT_LOG_TYPE_INVALID = 0,
    AUDIT_LOG_TYPE_LOGIN = 1,
    AUDIT_LOG_TYPE_LOGIN_FAIL = 2,
    AUDIT_LOG_TYPE_2FA_FAIL = 50,
    AUDIT_LOG_TYPE_LOGOUT = 3,
    AUDIT_LOG_TYPE_WALLET_CREATE = 4,
    AUDIT_LOG_TYPE_WALLET_APPROVE = 5,
    AUDIT_LOG_TYPE_WALLET_CANCEL = 6,
    AUDIT_LOG_TYPE_WALLET_REGISTER_PUBKEY = 7,
    AUDIT_LOG_TYPE_WALLET_ARCHIVE = 8,
    AUDIT_LOG_TYPE_WALLET_UNARCHIVE = 9,
    AUDIT_LOG_TYPE_WALLET_NAME_CHANGE = 10,
    AUDIT_LOG_TYPE_WALLET_POLICY_CHANGE = 11,
    AUDIT_LOG_TYPE_WALLET_NO_WHITELIST_REQUEST = 12,
    AUDIT_LOG_TYPE_WALLET_NO_WHITELIST_APPROVE = 13,
    AUDIT_LOG_TYPE_WALLET_NO_WHITELIST_CANCEL = 14,
    AUDIT_LOG_TYPE_WALLET_ADDRESS_UPLOAD = 51,
    AUDIT_LOG_TYPE_WALLET_ADDRESS_DOWNLOAD = 52,
    AUDIT_LOG_TYPE_WALLET_ADDRESS_DELETE = 53,
    AUDIT_LOG_TYPE_WALLET_GROUP_CREATE = 54,
    AUDIT_LOG_TYPE_WALLET_GROUP_NAME_CHANGE = 55,
    AUDIT_LOG_TYPE_WALLET_GROUP_CHANGE = 56,
    AUDIT_LOG_TYPE_TRANSACTION_CREATE = 15,
    AUDIT_LOG_TYPE_TRANSACTION_APPROVE = 16,
    AUDIT_LOG_TYPE_TRANSACTION_CANCEL = 17,
    AUDIT_LOG_TYPE_TRANSACTION_REGISTER_SIGNATURE = 18,
    AUDIT_LOG_TYPE_TRANSACTION_SUBMIT = 19,
    AUDIT_LOG_TYPE_ACCOUNT_PASSWORD_CHANGE = 20,
    AUDIT_LOG_TYPE_ACCOUNT_EMAIL_CHANGE = 21,
    AUDIT_LOG_TYPE_ACCOUNT_INVITE = 22,
    AUDIT_LOG_TYPE_ACCOUNT_ARCHIVE = 23,
    AUDIT_LOG_TYPE_ACCOUNT_UNARCHIVE = 24,
    AUDIT_LOG_TYPE_SERVICE_ACCOUNT_CREATE = 25,
    AUDIT_LOG_TYPE_SERVICE_ACCOUNT_CHANGE_PERMISSION = 26,
    AUDIT_LOG_TYPE_SERVICE_ACCOUNT_ACTIVATE = 27,
    AUDIT_LOG_TYPE_SERVICE_ACCOUNT_INACTIVE = 28,
    AUDIT_LOG_TYPE_SERVICE_ACCOUNT_DELETE = 29,
    AUDIT_LOG_TYPE_SERVICE_ACCOUNT_KEY_CREATE = 30,
    AUDIT_LOG_TYPE_SERVICE_ACCOUNT_KEY_DELETE = 31,
    AUDIT_LOG_TYPE_POLICY_ADDRESS_CREATE = 32,
    AUDIT_LOG_TYPE_POLICY_ADDRESS_DELETE = 33,
    AUDIT_LOG_TYPE_POLICY_ADDRESS_APPROVE = 34,
    AUDIT_LOG_TYPE_POLICY_ADDRESS_CANCEL = 35,
    AUDIT_LOG_TYPE_POLICY_SPENDING_LIMIT_CREATE = 36,
    AUDIT_LOG_TYPE_POLICY_SPENDING_LIMIT_CHANGE = 37,
    AUDIT_LOG_TYPE_POLICY_SPENDING_LIMIT_DELETE = 38,
    AUDIT_LOG_TYPE_POLICY_SPENDING_LIMIT_APPROVE = 39,
    AUDIT_LOG_TYPE_POLICY_SPENDING_LIMIT_CANCEL = 40,
    AUDIT_LOG_TYPE_POLICY_WHITELIST_CREATE = 41,
    AUDIT_LOG_TYPE_POLICY_WHITELIST_CHANGE = 42,
    AUDIT_LOG_TYPE_POLICY_WHITELIST_DELETE = 43,
    AUDIT_LOG_TYPE_POLICY_POLICY_CREATE = 44,
    AUDIT_LOG_TYPE_POLICY_POLICY_CHANGE = 45,
    AUDIT_LOG_TYPE_POLICY_POLICY_DELETE = 46,
    AUDIT_LOG_TYPE_POLICY_REQUEST_NO_WHITELIST = 47,
    AUDIT_LOG_TYPE_POLICY_APPROVE_NO_WHITELIST = 48,
    AUDIT_LOG_TYPE_POLICY_CANCEL_NO_WHITELIST = 49,
}

export enum PreconditionFailureType {
    PRECONDITION_FAILURE_TYPE_INVALID = 0,
    PRECONDITION_FAILURE_TYPE_MFA_REQUIRED = 1,
    PRECONDITION_FAILURE_TYPE_MFA_NOT_REGISTERED = 2,
    PRECONDITION_FAILURE_TYPE_USER_NOT_ACTIVE = 3,
    PRECONDITION_FAILURE_TYPE_USER_IS_ARCHIVED = 4,
    PRECONDITION_FAILURE_TYPE_EMAIL_IS_ALREADY_USED = 5,
    PRECONDITION_FAILURE_TYPE_INVITATION_TOKEN_IS_INVALID = 27,
    PRECONDITION_FAILURE_TYPE_INVITATION_TOKEN_IS_EXPIRED = 28,
    PRECONDITION_FAILURE_TYPE_INSUFFICIENT_SPENDABLE_BALANCE = 6,
    PRECONDITION_FAILURE_TYPE_HOURLY_LIMIT_EXCEEDED = 7,
    PRECONDITION_FAILURE_TYPE_DAILY_LIMIT_EXCEEDED = 8,
    PRECONDITION_FAILURE_TYPE_ONETIME_LIMIT_EXCEEDED = 9,
    PRECONDITION_FAILURE_TYPE_WALLET_NAME_IS_ALREADY_USED = 10,
    PRECONDITION_FAILURE_TYPE_WALLET_IS_CANCELED = 11,
    PRECONDITION_FAILURE_TYPE_WALLET_IS_ARCHIVED = 12,
    PRECONDITION_FAILURE_TYPE_TRANSACTION_IS_CANCELED = 13,
    PRECONDITION_FAILURE_TYPE_PROPOSAL_ALREADY_EXISTS = 14,
    PRECONDITION_FAILURE_TYPE_NO_RATE = 15,
    PRECONDITION_FAILURE_TYPE_WHITELIST_OF_BASEPOLICY = 16,
    PRECONDITION_FAILURE_TYPE_CANNOT_ARCHIVE_WALLET_WITH_BALANCE = 17,
    PRECONDITION_FAILURE_TYPE_TEMPORARY_INCREASE_IN_FEERATE = 18,
    PRECONDITION_FAILURE_TYPE_INSUFFICIENT_FEE_ACCOUNT_BALANCE = 20,
    PRECONDITION_FAILURE_TYPE_CANNOT_FLUSH_BALANCE_DUE_TO_EXISTING_UNCONFIRMED_TRANSFERS = 21,
    PRECONDITION_FAILURE_TYPE_WALLET_STATE_IS_FLUSHING = 22,
    PRECONDITION_FAILURE_TYPE_WALLET_FLUSH_SETTING_DOES_NOT_EXIST = 23,
    PRECONDITION_FAILURE_TYPE_TRANSACTION_ALREADY_CANCELED = 24,
    PRECONDITION_FAILURE_TYPE_TRANSACTION_ALREADY_SUBMITTED = 25,
    PRECONDITION_FAILURE_TYPE_CANNOT_OPERATE_TRANSACTION_DUE_TO_WALLET_STATE_IS_CREATING = 26,
    PRECONDITION_FAILURE_TYPE_TRANSACTION_INCLUDE_SELF_ADDRESS = 29,
    PRECONDITION_FAILURE_TYPE_PROHIBITED_BY_SUBSCRIPTION = 19,
}

export enum ListFilterType {
    LIST_FILTER_TYPE_INVALID = 0,
    LIST_FILTER_TYPE_WALLET_ID = 1,
    LIST_FILTER_TYPE_WALLET_NAME = 2,
    LIST_FILTER_TYPE_WALLET_ADDRESS = 3,
    LIST_FILTER_TYPE_TRANSACTION_ID = 4,
    LIST_FILTER_TYPE_TRANSFER_ID = 5,
    LIST_FILTER_TYPE_ADDRESS_NAME = 6,
    LIST_FILTER_TYPE_ADDRESS = 7,
    LIST_FILTER_TYPE_TXID = 8,
    LIST_FILTER_TYPE_OWNER_ID = 9,
    LIST_FILTER_TYPE_WALLET_ID_CREATE_TIME = 10,
}

export enum MailType {
    MAIL_TYPE_INVALID = 0,
    MAIL_TYPE_USER_INVITED = 1,
    MAIL_TYPE_PASSWORD_RESET_REQUEST = 2,
    MAIL_TYPE_PASSWORD_UPDATED = 3,
    MAIL_TYPE_EMAIL_UPDATE_REQUEST = 4,
    MAIL_TYPE_EMAIL_UPDATED = 5,
    MAIL_TYPE_FRAUD_TRANSACTION_SUBMITTED = 6,
    MAIL_TYPE_IMPORT_ADDRESS_COMPLETED = 7,
    MAIL_TYPE_VALIDATOR_CHANGE_REQUESTED = 8,
    MAIL_TYPE_UNCHECKED_TRANSFER_EXISTS = 9,
    MAIL_TYPE_DOWNLOAD_RESOURCE = 10,
}

export enum WatchOnlyAddressState {
    WATCH_ONLY_ADDRESS_STATE_INVALID = 0,
    WATCH_ONLY_ADDRESS_STATE_ADDRESS_IMPORTING = 1,
    WATCH_ONLY_ADDRESS_STATE_ADDRESS_IMPORTED = 2,
    WATCH_ONLY_ADDRESS_STATE_IMPORT_FAILED = 3,
    WATCH_ONLY_ADDRESS_STATE_ADDRESS_DELETING = 4,
    WATCH_ONLY_ADDRESS_STATE_ADDRESS_DELETED = 5,
    WATCH_ONLY_ADDRESS_STATE_DELETE_FAILED = 6,
    WATCH_ONLY_ADDRESS_STATE_DOWNLOAD = 7,
}

export enum SubstrateCallType {
    SUBSTRATE_CALL_TYPE_INVALID = 0,
    SUBSTRATE_CALL_TYPE_TRANSFER = 1,
    SUBSTRATE_CALL_TYPE_TRANSFER_ALL = 2,
    SUBSTRATE_CALL_TYPE_TRANSFER_KEEP_ALIVE = 3,
    SUBSTRATE_CALL_TYPE_APPROVE_AS_MULTI = 4,
    SUBSTRATE_CALL_TYPE_AS_MULTI = 5,
    SUBSTRATE_CALL_TYPE_AS_MULTI_THRESHOLD1 = 6,
    SUBSTRATE_CALL_TYPE_CANCEL_AS_MULTI = 7,
}

export enum DownloadResourceType {
    DOWNLOAD_RESOURCE_TYPE_INVALID = 0,
    DOWNLOAD_RESOURCE_TYPE_ALL_WALLET_BALANCE_SNAPSHOT_EOD = 1,
    DOWNLOAD_RESOURCE_TYPE_ALL_WALLET_GROUP_BALANCE_SNAPSHOT_EOD = 2,
    DOWNLOAD_RESOURCE_TYPE_ALL_WALLET_BALANCE_SNAPSHOT_ON_DEMAND = 3,
    DOWNLOAD_RESOURCE_TYPE_ALL_WALLET_GROUP_BALANCE_SNAPSHOT_ON_DEMAND = 4,
    DOWNLOAD_RESOURCE_TYPE_WALLET_TRANSFER = 5,
}

export enum EventTriggeredMessageType {
    EVENT_TRIGGERED_MESSAGE_TYPE_INVALID = 0,
    EVENT_TRIGGERED_MESSAGE_TYPE_UNCHECKED_TRANSFER_ALERT = 1,
    EVENT_TRIGGERED_MESSAGE_TYPE_FRAUDULENT_TRANSFER_ALERT = 2,
}

export enum WalletConnectCallRequestType {
    WALLET_CONNECT_CALL_REQUEST_TYPE_INVALID = 0,
    WALLET_CONNECT_CALL_REQUEST_TYPE_ETH_SEND_TRANSACTION = 1,
    WALLET_CONNECT_CALL_REQUEST_TYPE_ETH_SIGN_TYPED_DATA = 2,
}

export enum EthereumContractMethodIDType {
    ETHEREUM_CONTRACT_METHOD_ID_TYPE_INVALID = 0,
    ETHEREUM_CONTRACT_METHOD_ID_TYPE_ERC20_APPROVE = 1,
    ETHEREUM_CONTRACT_METHOD_ID_TYPE_UNISWAP_MULTICALL = 2,
}
