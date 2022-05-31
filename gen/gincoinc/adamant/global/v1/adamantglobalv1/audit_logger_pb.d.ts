// package: adamant.global.v1
// file: gincoinc/adamant/global/v1/adamantglobalv1/audit_logger.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gincoinc_adamant_global_v1_adamantglobalv1_enum_pb from "../../../../../gincoinc/adamant/global/v1/adamantglobalv1/enum_pb";
import * as gincoinc_global_v1_gincoincglobalv1_enum_pb from "../../../../../gincoinc/global/v1/gincoincglobalv1/enum_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class AuditLog extends jspb.Message { 
    getAuditLogId(): string;
    setAuditLogId(value: string): AuditLog;
    getAuditLogGroup(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AuditLogGroup;
    setAuditLogGroup(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AuditLogGroup): AuditLog;
    getAuditLogType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AuditLogType;
    setAuditLogType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AuditLogType): AuditLog;
    getAccountId(): string;
    setAccountId(value: string): AuditLog;
    getAccountName(): string;
    setAccountName(value: string): AuditLog;
    getTargetAccountId(): string;
    setTargetAccountId(value: string): AuditLog;
    getTargetAccountName(): string;
    setTargetAccountName(value: string): AuditLog;
    getEmail(): string;
    setEmail(value: string): AuditLog;
    getRoleType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.RoleType;
    setRoleType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.RoleType): AuditLog;
    getServiceAccountId(): string;
    setServiceAccountId(value: string): AuditLog;
    getServiceAccountName(): string;
    setServiceAccountName(value: string): AuditLog;
    getServiceAccountKeyId(): string;
    setServiceAccountKeyId(value: string): AuditLog;
    getWalletId(): string;
    setWalletId(value: string): AuditLog;
    getWalletName(): string;
    setWalletName(value: string): AuditLog;
    getWalletGroupId(): string;
    setWalletGroupId(value: string): AuditLog;
    getWalletGroupName(): string;
    setWalletGroupName(value: string): AuditLog;
    clearWalletNamesList(): void;
    getWalletNamesList(): Array<string>;
    setWalletNamesList(value: Array<string>): AuditLog;
    addWalletNames(value: string, index?: number): string;
    getTransactionId(): string;
    setTransactionId(value: string): AuditLog;
    getCoinType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoinType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): AuditLog;
    getStringValue(): string;
    setStringValue(value: string): AuditLog;
    getTxId(): string;
    setTxId(value: string): AuditLog;
    getPolicyId(): string;
    setPolicyId(value: string): AuditLog;
    getPolicyName(): string;
    setPolicyName(value: string): AuditLog;
    getLabeledAddressId(): string;
    setLabeledAddressId(value: string): AuditLog;
    getAddress(): string;
    setAddress(value: string): AuditLog;
    getAddressName(): string;
    setAddressName(value: string): AuditLog;
    getTransferLimitId(): string;
    setTransferLimitId(value: string): AuditLog;
    getTransferLimitName(): string;
    setTransferLimitName(value: string): AuditLog;
    getTransferOneTimeLimit(): number;
    setTransferOneTimeLimit(value: number): AuditLog;
    getTransferHourlyLimit(): number;
    setTransferHourlyLimit(value: number): AuditLog;
    getTransferDailyLimit(): number;
    setTransferDailyLimit(value: number): AuditLog;
    getWhitelistId(): string;
    setWhitelistId(value: string): AuditLog;
    getWhitelistName(): string;
    setWhitelistName(value: string): AuditLog;
    clearWhitelistAddressesList(): void;
    getWhitelistAddressesList(): Array<string>;
    setWhitelistAddressesList(value: Array<string>): AuditLog;
    addWhitelistAddresses(value: string, index?: number): string;

    hasEventTime(): boolean;
    clearEventTime(): void;
    getEventTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEventTime(value?: google_protobuf_timestamp_pb.Timestamp): AuditLog;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): AuditLog;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuditLog.AsObject;
    static toObject(includeInstance: boolean, msg: AuditLog): AuditLog.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuditLog, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuditLog;
    static deserializeBinaryFromReader(message: AuditLog, reader: jspb.BinaryReader): AuditLog;
}

export namespace AuditLog {
    export type AsObject = {
        auditLogId: string,
        auditLogGroup: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AuditLogGroup,
        auditLogType: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AuditLogType,
        accountId: string,
        accountName: string,
        targetAccountId: string,
        targetAccountName: string,
        email: string,
        roleType: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.RoleType,
        serviceAccountId: string,
        serviceAccountName: string,
        serviceAccountKeyId: string,
        walletId: string,
        walletName: string,
        walletGroupId: string,
        walletGroupName: string,
        walletNamesList: Array<string>,
        transactionId: string,
        coinType: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        stringValue: string,
        txId: string,
        policyId: string,
        policyName: string,
        labeledAddressId: string,
        address: string,
        addressName: string,
        transferLimitId: string,
        transferLimitName: string,
        transferOneTimeLimit: number,
        transferHourlyLimit: number,
        transferDailyLimit: number,
        whitelistId: string,
        whitelistName: string,
        whitelistAddressesList: Array<string>,
        eventTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}
