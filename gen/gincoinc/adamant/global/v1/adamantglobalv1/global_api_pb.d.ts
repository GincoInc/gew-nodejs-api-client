// package: adamant.global.v1
// file: gincoinc/adamant/global/v1/adamantglobalv1/global_api.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as gincoinc_adamant_global_v1_adamantglobalv1_audit_logger_pb from "../../../../../gincoinc/adamant/global/v1/adamantglobalv1/audit_logger_pb";
import * as gincoinc_adamant_global_v1_adamantglobalv1_enum_pb from "../../../../../gincoinc/adamant/global/v1/adamantglobalv1/enum_pb";
import * as gincoinc_adamant_global_v1_adamantglobalv1_model_pb from "../../../../../gincoinc/adamant/global/v1/adamantglobalv1/model_pb";
import * as gincoinc_global_v1_gincoincglobalv1_enum_pb from "../../../../../gincoinc/global/v1/gincoincglobalv1/enum_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as validate_validate_pb from "../../../../../validate/validate_pb";

export class ApproveWalletRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): ApproveWalletRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ApproveWalletRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ApproveWalletRequest): ApproveWalletRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ApproveWalletRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ApproveWalletRequest;
    static deserializeBinaryFromReader(message: ApproveWalletRequest, reader: jspb.BinaryReader): ApproveWalletRequest;
}

export namespace ApproveWalletRequest {
    export type AsObject = {
        walletId: string,
    }
}

export class ApproveTransactionRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): ApproveTransactionRequest;
    getTransactionId(): string;
    setTransactionId(value: string): ApproveTransactionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ApproveTransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ApproveTransactionRequest): ApproveTransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ApproveTransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ApproveTransactionRequest;
    static deserializeBinaryFromReader(message: ApproveTransactionRequest, reader: jspb.BinaryReader): ApproveTransactionRequest;
}

export namespace ApproveTransactionRequest {
    export type AsObject = {
        walletId: string,
        transactionId: string,
    }
}

export class CreateWalletRequest extends jspb.Message { 
    getWalletName(): string;
    setWalletName(value: string): CreateWalletRequest;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): CreateWalletRequest;
    getWalletType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType;
    setWalletType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType): CreateWalletRequest;
    getAddressType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType;
    setAddressType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType): CreateWalletRequest;
    getM(): number;
    setM(value: number): CreateWalletRequest;
    getN(): number;
    setN(value: number): CreateWalletRequest;
    clearMembersList(): void;
    getMembersList(): Array<string>;
    setMembersList(value: Array<string>): CreateWalletRequest;
    addMembers(value: string, index?: number): string;
    getRequiredApprovalCount(): number;
    setRequiredApprovalCount(value: number): CreateWalletRequest;
    getPolicyId(): string;
    setPolicyId(value: string): CreateWalletRequest;
    getDestinationWalletId(): string;
    setDestinationWalletId(value: string): CreateWalletRequest;
    getWatchOnly(): boolean;
    setWatchOnly(value: boolean): CreateWalletRequest;
    getInheritWalletId(): string;
    setInheritWalletId(value: string): CreateWalletRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateWalletRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateWalletRequest): CreateWalletRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateWalletRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateWalletRequest;
    static deserializeBinaryFromReader(message: CreateWalletRequest, reader: jspb.BinaryReader): CreateWalletRequest;
}

export namespace CreateWalletRequest {
    export type AsObject = {
        walletName: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        walletType: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType,
        addressType: gincoinc_global_v1_gincoincglobalv1_enum_pb.AddressType,
        m: number,
        n: number,
        membersList: Array<string>,
        requiredApprovalCount: number,
        policyId: string,
        destinationWalletId: string,
        watchOnly: boolean,
        inheritWalletId: string,
    }
}

export class CreateWalletResponse extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): CreateWalletResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateWalletResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateWalletResponse): CreateWalletResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateWalletResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateWalletResponse;
    static deserializeBinaryFromReader(message: CreateWalletResponse, reader: jspb.BinaryReader): CreateWalletResponse;
}

export namespace CreateWalletResponse {
    export type AsObject = {
        walletId: string,
    }
}

export class GetWalletRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): GetWalletRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetWalletRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetWalletRequest): GetWalletRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetWalletRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetWalletRequest;
    static deserializeBinaryFromReader(message: GetWalletRequest, reader: jspb.BinaryReader): GetWalletRequest;
}

export namespace GetWalletRequest {
    export type AsObject = {
        walletId: string,
    }
}

export class BatchGetWalletsWithoutBalanceRequest extends jspb.Message { 
    clearWalletIdsList(): void;
    getWalletIdsList(): Array<string>;
    setWalletIdsList(value: Array<string>): BatchGetWalletsWithoutBalanceRequest;
    addWalletIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchGetWalletsWithoutBalanceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BatchGetWalletsWithoutBalanceRequest): BatchGetWalletsWithoutBalanceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchGetWalletsWithoutBalanceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchGetWalletsWithoutBalanceRequest;
    static deserializeBinaryFromReader(message: BatchGetWalletsWithoutBalanceRequest, reader: jspb.BinaryReader): BatchGetWalletsWithoutBalanceRequest;
}

export namespace BatchGetWalletsWithoutBalanceRequest {
    export type AsObject = {
        walletIdsList: Array<string>,
    }
}

export class BatchGetWalletsWithoutBalanceResponse extends jspb.Message { 
    clearWalletsList(): void;
    getWalletsList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletWithoutBalance>;
    setWalletsList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletWithoutBalance>): BatchGetWalletsWithoutBalanceResponse;
    addWallets(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletWithoutBalance, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletWithoutBalance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchGetWalletsWithoutBalanceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BatchGetWalletsWithoutBalanceResponse): BatchGetWalletsWithoutBalanceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchGetWalletsWithoutBalanceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchGetWalletsWithoutBalanceResponse;
    static deserializeBinaryFromReader(message: BatchGetWalletsWithoutBalanceResponse, reader: jspb.BinaryReader): BatchGetWalletsWithoutBalanceResponse;
}

export namespace BatchGetWalletsWithoutBalanceResponse {
    export type AsObject = {
        walletsList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletWithoutBalance.AsObject>,
    }
}

export class CancelWalletRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): CancelWalletRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelWalletRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CancelWalletRequest): CancelWalletRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelWalletRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelWalletRequest;
    static deserializeBinaryFromReader(message: CancelWalletRequest, reader: jspb.BinaryReader): CancelWalletRequest;
}

export namespace CancelWalletRequest {
    export type AsObject = {
        walletId: string,
    }
}

export class ArchiveWalletRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): ArchiveWalletRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ArchiveWalletRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ArchiveWalletRequest): ArchiveWalletRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ArchiveWalletRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ArchiveWalletRequest;
    static deserializeBinaryFromReader(message: ArchiveWalletRequest, reader: jspb.BinaryReader): ArchiveWalletRequest;
}

export namespace ArchiveWalletRequest {
    export type AsObject = {
        walletId: string,
    }
}

export class UnArchiveWalletRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): UnArchiveWalletRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnArchiveWalletRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UnArchiveWalletRequest): UnArchiveWalletRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnArchiveWalletRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnArchiveWalletRequest;
    static deserializeBinaryFromReader(message: UnArchiveWalletRequest, reader: jspb.BinaryReader): UnArchiveWalletRequest;
}

export namespace UnArchiveWalletRequest {
    export type AsObject = {
        walletId: string,
    }
}

export class ListWalletsRequest extends jspb.Message { 
    getPageSize(): number;
    setPageSize(value: number): ListWalletsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListWalletsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListWalletsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListWalletsRequest): ListWalletsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListWalletsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListWalletsRequest;
    static deserializeBinaryFromReader(message: ListWalletsRequest, reader: jspb.BinaryReader): ListWalletsRequest;
}

export namespace ListWalletsRequest {
    export type AsObject = {
        pageSize: number,
        pageToken: string,
    }
}

export class ListWalletsByFilterRequest extends jspb.Message { 
    getFilterType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.ListFilterType;
    setFilterType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.ListFilterType): ListWalletsByFilterRequest;
    getWalletId(): string;
    setWalletId(value: string): ListWalletsByFilterRequest;
    getWalletName(): string;
    setWalletName(value: string): ListWalletsByFilterRequest;
    getAddress(): string;
    setAddress(value: string): ListWalletsByFilterRequest;
    getWatchOnly(): boolean;
    setWatchOnly(value: boolean): ListWalletsByFilterRequest;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): ListWalletsByFilterRequest;
    clearWalletTypeList(): void;
    getWalletTypeList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType>;
    setWalletTypeList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType>): ListWalletsByFilterRequest;
    addWalletType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType;
    clearWalletStateList(): void;
    getWalletStateList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletState>;
    setWalletStateList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletState>): ListWalletsByFilterRequest;
    addWalletState(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletState, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletState;
    getPageSize(): number;
    setPageSize(value: number): ListWalletsByFilterRequest;
    getPageToken(): string;
    setPageToken(value: string): ListWalletsByFilterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListWalletsByFilterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListWalletsByFilterRequest): ListWalletsByFilterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListWalletsByFilterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListWalletsByFilterRequest;
    static deserializeBinaryFromReader(message: ListWalletsByFilterRequest, reader: jspb.BinaryReader): ListWalletsByFilterRequest;
}

export namespace ListWalletsByFilterRequest {
    export type AsObject = {
        filterType: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.ListFilterType,
        walletId: string,
        walletName: string,
        address: string,
        watchOnly: boolean,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        walletTypeList: Array<gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType>,
        walletStateList: Array<gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletState>,
        pageSize: number,
        pageToken: string,
    }
}

export class ListWalletsResponse extends jspb.Message { 
    clearWalletsList(): void;
    getWalletsList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet>;
    setWalletsList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet>): ListWalletsResponse;
    addWallets(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListWalletsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListWalletsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListWalletsResponse): ListWalletsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListWalletsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListWalletsResponse;
    static deserializeBinaryFromReader(message: ListWalletsResponse, reader: jspb.BinaryReader): ListWalletsResponse;
}

export namespace ListWalletsResponse {
    export type AsObject = {
        walletsList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Wallet.AsObject>,
        nextPageToken: string,
    }
}

export class ListBaseWalletsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListBaseWalletsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListBaseWalletsRequest): ListBaseWalletsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListBaseWalletsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListBaseWalletsRequest;
    static deserializeBinaryFromReader(message: ListBaseWalletsRequest, reader: jspb.BinaryReader): ListBaseWalletsRequest;
}

export namespace ListBaseWalletsRequest {
    export type AsObject = {
    }
}

export class ListBaseWalletsResponse extends jspb.Message { 
    clearWalletsList(): void;
    getWalletsList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletWithoutBalance>;
    setWalletsList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletWithoutBalance>): ListBaseWalletsResponse;
    addWallets(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletWithoutBalance, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletWithoutBalance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListBaseWalletsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListBaseWalletsResponse): ListBaseWalletsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListBaseWalletsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListBaseWalletsResponse;
    static deserializeBinaryFromReader(message: ListBaseWalletsResponse, reader: jspb.BinaryReader): ListBaseWalletsResponse;
}

export namespace ListBaseWalletsResponse {
    export type AsObject = {
        walletsList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletWithoutBalance.AsObject>,
    }
}

export class UpdateWalletNameRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): UpdateWalletNameRequest;
    getName(): string;
    setName(value: string): UpdateWalletNameRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateWalletNameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateWalletNameRequest): UpdateWalletNameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateWalletNameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateWalletNameRequest;
    static deserializeBinaryFromReader(message: UpdateWalletNameRequest, reader: jspb.BinaryReader): UpdateWalletNameRequest;
}

export namespace UpdateWalletNameRequest {
    export type AsObject = {
        walletId: string,
        name: string,
    }
}

export class UpdateWalletValidationRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): UpdateWalletValidationRequest;
    clearNewValidatorIdsList(): void;
    getNewValidatorIdsList(): Array<string>;
    setNewValidatorIdsList(value: Array<string>): UpdateWalletValidationRequest;
    addNewValidatorIds(value: string, index?: number): string;
    getNewRequiredApprovalCount(): number;
    setNewRequiredApprovalCount(value: number): UpdateWalletValidationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateWalletValidationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateWalletValidationRequest): UpdateWalletValidationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateWalletValidationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateWalletValidationRequest;
    static deserializeBinaryFromReader(message: UpdateWalletValidationRequest, reader: jspb.BinaryReader): UpdateWalletValidationRequest;
}

export namespace UpdateWalletValidationRequest {
    export type AsObject = {
        walletId: string,
        newValidatorIdsList: Array<string>,
        newRequiredApprovalCount: number,
    }
}

export class UpdateWalletPolicyRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): UpdateWalletPolicyRequest;
    getPolicyId(): string;
    setPolicyId(value: string): UpdateWalletPolicyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateWalletPolicyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateWalletPolicyRequest): UpdateWalletPolicyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateWalletPolicyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateWalletPolicyRequest;
    static deserializeBinaryFromReader(message: UpdateWalletPolicyRequest, reader: jspb.BinaryReader): UpdateWalletPolicyRequest;
}

export namespace UpdateWalletPolicyRequest {
    export type AsObject = {
        walletId: string,
        policyId: string,
    }
}

export class ReviewWalletProposalRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): ReviewWalletProposalRequest;
    getApprove(): boolean;
    setApprove(value: boolean): ReviewWalletProposalRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReviewWalletProposalRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReviewWalletProposalRequest): ReviewWalletProposalRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReviewWalletProposalRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReviewWalletProposalRequest;
    static deserializeBinaryFromReader(message: ReviewWalletProposalRequest, reader: jspb.BinaryReader): ReviewWalletProposalRequest;
}

export namespace ReviewWalletProposalRequest {
    export type AsObject = {
        walletId: string,
        approve: boolean,
    }
}

export class ExistsWalletByNameRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): ExistsWalletByNameRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExistsWalletByNameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExistsWalletByNameRequest): ExistsWalletByNameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExistsWalletByNameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExistsWalletByNameRequest;
    static deserializeBinaryFromReader(message: ExistsWalletByNameRequest, reader: jspb.BinaryReader): ExistsWalletByNameRequest;
}

export namespace ExistsWalletByNameRequest {
    export type AsObject = {
        name: string,
    }
}

export class ExistsWalletByNameResponse extends jspb.Message { 
    getExists(): boolean;
    setExists(value: boolean): ExistsWalletByNameResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExistsWalletByNameResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ExistsWalletByNameResponse): ExistsWalletByNameResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExistsWalletByNameResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExistsWalletByNameResponse;
    static deserializeBinaryFromReader(message: ExistsWalletByNameResponse, reader: jspb.BinaryReader): ExistsWalletByNameResponse;
}

export namespace ExistsWalletByNameResponse {
    export type AsObject = {
        exists: boolean,
    }
}

export class ExistsWalletGroupByNameRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): ExistsWalletGroupByNameRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExistsWalletGroupByNameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExistsWalletGroupByNameRequest): ExistsWalletGroupByNameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExistsWalletGroupByNameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExistsWalletGroupByNameRequest;
    static deserializeBinaryFromReader(message: ExistsWalletGroupByNameRequest, reader: jspb.BinaryReader): ExistsWalletGroupByNameRequest;
}

export namespace ExistsWalletGroupByNameRequest {
    export type AsObject = {
        name: string,
    }
}

export class ExistsWalletGroupByNameResponse extends jspb.Message { 
    getExists(): boolean;
    setExists(value: boolean): ExistsWalletGroupByNameResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExistsWalletGroupByNameResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ExistsWalletGroupByNameResponse): ExistsWalletGroupByNameResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExistsWalletGroupByNameResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExistsWalletGroupByNameResponse;
    static deserializeBinaryFromReader(message: ExistsWalletGroupByNameResponse, reader: jspb.BinaryReader): ExistsWalletGroupByNameResponse;
}

export namespace ExistsWalletGroupByNameResponse {
    export type AsObject = {
        exists: boolean,
    }
}

export class FlushBalanceRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): FlushBalanceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FlushBalanceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FlushBalanceRequest): FlushBalanceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FlushBalanceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FlushBalanceRequest;
    static deserializeBinaryFromReader(message: FlushBalanceRequest, reader: jspb.BinaryReader): FlushBalanceRequest;
}

export namespace FlushBalanceRequest {
    export type AsObject = {
        walletId: string,
    }
}

export class FlushBalanceResponse extends jspb.Message { 
    clearFlushedAddressesList(): void;
    getFlushedAddressesList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.FlushedAddress>;
    setFlushedAddressesList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.FlushedAddress>): FlushBalanceResponse;
    addFlushedAddresses(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.FlushedAddress, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.FlushedAddress;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FlushBalanceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FlushBalanceResponse): FlushBalanceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FlushBalanceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FlushBalanceResponse;
    static deserializeBinaryFromReader(message: FlushBalanceResponse, reader: jspb.BinaryReader): FlushBalanceResponse;
}

export namespace FlushBalanceResponse {
    export type AsObject = {
        flushedAddressesList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.FlushedAddress.AsObject>,
    }
}

export class ListWalletFlushSettingsResponse extends jspb.Message { 
    clearWalletFlushSettingsList(): void;
    getWalletFlushSettingsList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletFlushSetting>;
    setWalletFlushSettingsList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletFlushSetting>): ListWalletFlushSettingsResponse;
    addWalletFlushSettings(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletFlushSetting, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletFlushSetting;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListWalletFlushSettingsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListWalletFlushSettingsResponse): ListWalletFlushSettingsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListWalletFlushSettingsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListWalletFlushSettingsResponse;
    static deserializeBinaryFromReader(message: ListWalletFlushSettingsResponse, reader: jspb.BinaryReader): ListWalletFlushSettingsResponse;
}

export namespace ListWalletFlushSettingsResponse {
    export type AsObject = {
        walletFlushSettingsList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletFlushSetting.AsObject>,
    }
}

export class UpdateWalletFlushSettingRequest extends jspb.Message { 
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): UpdateWalletFlushSettingRequest;
    getDestinationWalletId(): string;
    setDestinationWalletId(value: string): UpdateWalletFlushSettingRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateWalletFlushSettingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateWalletFlushSettingRequest): UpdateWalletFlushSettingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateWalletFlushSettingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateWalletFlushSettingRequest;
    static deserializeBinaryFromReader(message: UpdateWalletFlushSettingRequest, reader: jspb.BinaryReader): UpdateWalletFlushSettingRequest;
}

export namespace UpdateWalletFlushSettingRequest {
    export type AsObject = {
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        destinationWalletId: string,
    }
}

export class ListCompensationFeeHistoriesRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): ListCompensationFeeHistoriesRequest;
    getAddress(): string;
    setAddress(value: string): ListCompensationFeeHistoriesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCompensationFeeHistoriesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListCompensationFeeHistoriesRequest): ListCompensationFeeHistoriesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCompensationFeeHistoriesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCompensationFeeHistoriesRequest;
    static deserializeBinaryFromReader(message: ListCompensationFeeHistoriesRequest, reader: jspb.BinaryReader): ListCompensationFeeHistoriesRequest;
}

export namespace ListCompensationFeeHistoriesRequest {
    export type AsObject = {
        walletId: string,
        address: string,
    }
}

export class ListCompensationFeeHistoriesResponse extends jspb.Message { 
    clearCompensationFeesList(): void;
    getCompensationFeesList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CompensationFee>;
    setCompensationFeesList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CompensationFee>): ListCompensationFeeHistoriesResponse;
    addCompensationFees(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CompensationFee, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CompensationFee;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCompensationFeeHistoriesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListCompensationFeeHistoriesResponse): ListCompensationFeeHistoriesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCompensationFeeHistoriesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCompensationFeeHistoriesResponse;
    static deserializeBinaryFromReader(message: ListCompensationFeeHistoriesResponse, reader: jspb.BinaryReader): ListCompensationFeeHistoriesResponse;
}

export namespace ListCompensationFeeHistoriesResponse {
    export type AsObject = {
        compensationFeesList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CompensationFee.AsObject>,
    }
}

export class ListUTXOsRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): ListUTXOsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListUTXOsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListUTXOsRequest): ListUTXOsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListUTXOsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListUTXOsRequest;
    static deserializeBinaryFromReader(message: ListUTXOsRequest, reader: jspb.BinaryReader): ListUTXOsRequest;
}

export namespace ListUTXOsRequest {
    export type AsObject = {
        walletId: string,
    }
}

export class ListUTXOsResponse extends jspb.Message { 
    clearUtxosList(): void;
    getUtxosList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.UTXO>;
    setUtxosList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.UTXO>): ListUTXOsResponse;
    addUtxos(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.UTXO, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.UTXO;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListUTXOsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListUTXOsResponse): ListUTXOsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListUTXOsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListUTXOsResponse;
    static deserializeBinaryFromReader(message: ListUTXOsResponse, reader: jspb.BinaryReader): ListUTXOsResponse;
}

export namespace ListUTXOsResponse {
    export type AsObject = {
        utxosList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.UTXO.AsObject>,
    }
}

export class UpdateShouldCheckRemittanceFlagRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): UpdateShouldCheckRemittanceFlagRequest;
    getShouldCheckRemittance(): boolean;
    setShouldCheckRemittance(value: boolean): UpdateShouldCheckRemittanceFlagRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateShouldCheckRemittanceFlagRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateShouldCheckRemittanceFlagRequest): UpdateShouldCheckRemittanceFlagRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateShouldCheckRemittanceFlagRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateShouldCheckRemittanceFlagRequest;
    static deserializeBinaryFromReader(message: UpdateShouldCheckRemittanceFlagRequest, reader: jspb.BinaryReader): UpdateShouldCheckRemittanceFlagRequest;
}

export namespace UpdateShouldCheckRemittanceFlagRequest {
    export type AsObject = {
        walletId: string,
        shouldCheckRemittance: boolean,
    }
}

export class CreateWalletGroupRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateWalletGroupRequest;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): CreateWalletGroupRequest;
    clearWalletIdsList(): void;
    getWalletIdsList(): Array<string>;
    setWalletIdsList(value: Array<string>): CreateWalletGroupRequest;
    addWalletIds(value: string, index?: number): string;
    getWatchOnly(): boolean;
    setWatchOnly(value: boolean): CreateWalletGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateWalletGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateWalletGroupRequest): CreateWalletGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateWalletGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateWalletGroupRequest;
    static deserializeBinaryFromReader(message: CreateWalletGroupRequest, reader: jspb.BinaryReader): CreateWalletGroupRequest;
}

export namespace CreateWalletGroupRequest {
    export type AsObject = {
        name: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        walletIdsList: Array<string>,
        watchOnly: boolean,
    }
}

export class CreateWalletGroupResponse extends jspb.Message { 
    getWalletGroupId(): string;
    setWalletGroupId(value: string): CreateWalletGroupResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateWalletGroupResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateWalletGroupResponse): CreateWalletGroupResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateWalletGroupResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateWalletGroupResponse;
    static deserializeBinaryFromReader(message: CreateWalletGroupResponse, reader: jspb.BinaryReader): CreateWalletGroupResponse;
}

export namespace CreateWalletGroupResponse {
    export type AsObject = {
        walletGroupId: string,
    }
}

export class UpdateWalletGroupRequest extends jspb.Message { 
    getWalletGroupId(): string;
    setWalletGroupId(value: string): UpdateWalletGroupRequest;
    clearWalletIdsList(): void;
    getWalletIdsList(): Array<string>;
    setWalletIdsList(value: Array<string>): UpdateWalletGroupRequest;
    addWalletIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateWalletGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateWalletGroupRequest): UpdateWalletGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateWalletGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateWalletGroupRequest;
    static deserializeBinaryFromReader(message: UpdateWalletGroupRequest, reader: jspb.BinaryReader): UpdateWalletGroupRequest;
}

export namespace UpdateWalletGroupRequest {
    export type AsObject = {
        walletGroupId: string,
        walletIdsList: Array<string>,
    }
}

export class UpdateWalletGroupNameRequest extends jspb.Message { 
    getWalletGroupId(): string;
    setWalletGroupId(value: string): UpdateWalletGroupNameRequest;
    getName(): string;
    setName(value: string): UpdateWalletGroupNameRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateWalletGroupNameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateWalletGroupNameRequest): UpdateWalletGroupNameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateWalletGroupNameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateWalletGroupNameRequest;
    static deserializeBinaryFromReader(message: UpdateWalletGroupNameRequest, reader: jspb.BinaryReader): UpdateWalletGroupNameRequest;
}

export namespace UpdateWalletGroupNameRequest {
    export type AsObject = {
        walletGroupId: string,
        name: string,
    }
}

export class GetWalletGroupRequest extends jspb.Message { 
    getWalletGroupId(): string;
    setWalletGroupId(value: string): GetWalletGroupRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetWalletGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetWalletGroupRequest): GetWalletGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetWalletGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetWalletGroupRequest;
    static deserializeBinaryFromReader(message: GetWalletGroupRequest, reader: jspb.BinaryReader): GetWalletGroupRequest;
}

export namespace GetWalletGroupRequest {
    export type AsObject = {
        walletGroupId: string,
    }
}

export class ListWalletGroupsRequest extends jspb.Message { 
    getWatchOnly(): boolean;
    setWatchOnly(value: boolean): ListWalletGroupsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListWalletGroupsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListWalletGroupsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListWalletGroupsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListWalletGroupsRequest): ListWalletGroupsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListWalletGroupsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListWalletGroupsRequest;
    static deserializeBinaryFromReader(message: ListWalletGroupsRequest, reader: jspb.BinaryReader): ListWalletGroupsRequest;
}

export namespace ListWalletGroupsRequest {
    export type AsObject = {
        watchOnly: boolean,
        pageSize: number,
        pageToken: string,
    }
}

export class ListWalletGroupsResponse extends jspb.Message { 
    clearWalletGroupsList(): void;
    getWalletGroupsList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletGroup>;
    setWalletGroupsList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletGroup>): ListWalletGroupsResponse;
    addWalletGroups(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletGroup, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletGroup;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListWalletGroupsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListWalletGroupsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListWalletGroupsResponse): ListWalletGroupsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListWalletGroupsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListWalletGroupsResponse;
    static deserializeBinaryFromReader(message: ListWalletGroupsResponse, reader: jspb.BinaryReader): ListWalletGroupsResponse;
}

export namespace ListWalletGroupsResponse {
    export type AsObject = {
        walletGroupsList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletGroup.AsObject>,
        nextPageToken: string,
    }
}

export class RegisterKeyRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): RegisterKeyRequest;
    getPubKey(): string;
    setPubKey(value: string): RegisterKeyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterKeyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterKeyRequest): RegisterKeyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterKeyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterKeyRequest;
    static deserializeBinaryFromReader(message: RegisterKeyRequest, reader: jspb.BinaryReader): RegisterKeyRequest;
}

export namespace RegisterKeyRequest {
    export type AsObject = {
        walletId: string,
        pubKey: string,
    }
}

export class RegisterKeyResponse extends jspb.Message { 
    getKeyId(): string;
    setKeyId(value: string): RegisterKeyResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterKeyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterKeyResponse): RegisterKeyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterKeyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterKeyResponse;
    static deserializeBinaryFromReader(message: RegisterKeyResponse, reader: jspb.BinaryReader): RegisterKeyResponse;
}

export namespace RegisterKeyResponse {
    export type AsObject = {
        keyId: string,
    }
}

export class CreateAddressRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): CreateAddressRequest;
    getFeeRate(): number;
    setFeeRate(value: number): CreateAddressRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAddressRequest): CreateAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAddressRequest;
    static deserializeBinaryFromReader(message: CreateAddressRequest, reader: jspb.BinaryReader): CreateAddressRequest;
}

export namespace CreateAddressRequest {
    export type AsObject = {
        walletId: string,
        feeRate: number,
    }
}

export class CreateAddressResponse extends jspb.Message { 
    getAddressId(): string;
    setAddressId(value: string): CreateAddressResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAddressResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAddressResponse): CreateAddressResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAddressResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAddressResponse;
    static deserializeBinaryFromReader(message: CreateAddressResponse, reader: jspb.BinaryReader): CreateAddressResponse;
}

export namespace CreateAddressResponse {
    export type AsObject = {
        addressId: string,
    }
}

export class GetAddressRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): GetAddressRequest;
    getAddressId(): string;
    setAddressId(value: string): GetAddressRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAddressRequest): GetAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAddressRequest;
    static deserializeBinaryFromReader(message: GetAddressRequest, reader: jspb.BinaryReader): GetAddressRequest;
}

export namespace GetAddressRequest {
    export type AsObject = {
        walletId: string,
        addressId: string,
    }
}

export class GetAddressByAddressRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): GetAddressByAddressRequest;
    getAddress(): string;
    setAddress(value: string): GetAddressByAddressRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAddressByAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAddressByAddressRequest): GetAddressByAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAddressByAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAddressByAddressRequest;
    static deserializeBinaryFromReader(message: GetAddressByAddressRequest, reader: jspb.BinaryReader): GetAddressByAddressRequest;
}

export namespace GetAddressByAddressRequest {
    export type AsObject = {
        walletId: string,
        address: string,
    }
}

export class GetAddressByAddressCoinRequest extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): GetAddressByAddressCoinRequest;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): GetAddressByAddressCoinRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAddressByAddressCoinRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAddressByAddressCoinRequest): GetAddressByAddressCoinRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAddressByAddressCoinRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAddressByAddressCoinRequest;
    static deserializeBinaryFromReader(message: GetAddressByAddressCoinRequest, reader: jspb.BinaryReader): GetAddressByAddressCoinRequest;
}

export namespace GetAddressByAddressCoinRequest {
    export type AsObject = {
        address: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
    }
}

export class GetAddressByIndexRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): GetAddressByIndexRequest;
    getIndex(): number;
    setIndex(value: number): GetAddressByIndexRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAddressByIndexRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAddressByIndexRequest): GetAddressByIndexRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAddressByIndexRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAddressByIndexRequest;
    static deserializeBinaryFromReader(message: GetAddressByIndexRequest, reader: jspb.BinaryReader): GetAddressByIndexRequest;
}

export namespace GetAddressByIndexRequest {
    export type AsObject = {
        walletId: string,
        index: number,
    }
}

export class GetAddressWithoutBalanceByIndexRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): GetAddressWithoutBalanceByIndexRequest;
    getIndex(): number;
    setIndex(value: number): GetAddressWithoutBalanceByIndexRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAddressWithoutBalanceByIndexRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAddressWithoutBalanceByIndexRequest): GetAddressWithoutBalanceByIndexRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAddressWithoutBalanceByIndexRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAddressWithoutBalanceByIndexRequest;
    static deserializeBinaryFromReader(message: GetAddressWithoutBalanceByIndexRequest, reader: jspb.BinaryReader): GetAddressWithoutBalanceByIndexRequest;
}

export namespace GetAddressWithoutBalanceByIndexRequest {
    export type AsObject = {
        walletId: string,
        index: number,
    }
}

export class ListAddressesRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): ListAddressesRequest;
    getOmitChange(): boolean;
    setOmitChange(value: boolean): ListAddressesRequest;
    getPageSize(): number;
    setPageSize(value: number): ListAddressesRequest;
    getPageToken(): string;
    setPageToken(value: string): ListAddressesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAddressesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAddressesRequest): ListAddressesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAddressesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAddressesRequest;
    static deserializeBinaryFromReader(message: ListAddressesRequest, reader: jspb.BinaryReader): ListAddressesRequest;
}

export namespace ListAddressesRequest {
    export type AsObject = {
        walletId: string,
        omitChange: boolean,
        pageSize: number,
        pageToken: string,
    }
}

export class ListAddressesResponse extends jspb.Message { 
    clearAddressesList(): void;
    getAddressesList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>;
    setAddressesList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address>): ListAddressesResponse;
    addAddresses(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListAddressesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAddressesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListAddressesResponse): ListAddressesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAddressesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAddressesResponse;
    static deserializeBinaryFromReader(message: ListAddressesResponse, reader: jspb.BinaryReader): ListAddressesResponse;
}

export namespace ListAddressesResponse {
    export type AsObject = {
        addressesList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Address.AsObject>,
        nextPageToken: string,
    }
}

export class ListAddressesWithBalanceRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): ListAddressesWithBalanceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAddressesWithBalanceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAddressesWithBalanceRequest): ListAddressesWithBalanceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAddressesWithBalanceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAddressesWithBalanceRequest;
    static deserializeBinaryFromReader(message: ListAddressesWithBalanceRequest, reader: jspb.BinaryReader): ListAddressesWithBalanceRequest;
}

export namespace ListAddressesWithBalanceRequest {
    export type AsObject = {
        walletId: string,
    }
}

export class ListAddressesWithBalanceResponse extends jspb.Message { 
    clearAddressesList(): void;
    getAddressesList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.AddressWithBalance>;
    setAddressesList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.AddressWithBalance>): ListAddressesWithBalanceResponse;
    addAddresses(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.AddressWithBalance, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.AddressWithBalance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAddressesWithBalanceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListAddressesWithBalanceResponse): ListAddressesWithBalanceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAddressesWithBalanceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAddressesWithBalanceResponse;
    static deserializeBinaryFromReader(message: ListAddressesWithBalanceResponse, reader: jspb.BinaryReader): ListAddressesWithBalanceResponse;
}

export namespace ListAddressesWithBalanceResponse {
    export type AsObject = {
        addressesList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.AddressWithBalance.AsObject>,
    }
}

export class UpdateAddressBalanceRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): UpdateAddressBalanceRequest;
    getAddress(): string;
    setAddress(value: string): UpdateAddressBalanceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAddressBalanceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAddressBalanceRequest): UpdateAddressBalanceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAddressBalanceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAddressBalanceRequest;
    static deserializeBinaryFromReader(message: UpdateAddressBalanceRequest, reader: jspb.BinaryReader): UpdateAddressBalanceRequest;
}

export namespace UpdateAddressBalanceRequest {
    export type AsObject = {
        walletId: string,
        address: string,
    }
}

export class ListAddressesWithoutBalanceRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): ListAddressesWithoutBalanceRequest;
    getOmitChange(): boolean;
    setOmitChange(value: boolean): ListAddressesWithoutBalanceRequest;
    getPageSize(): number;
    setPageSize(value: number): ListAddressesWithoutBalanceRequest;
    getPageToken(): string;
    setPageToken(value: string): ListAddressesWithoutBalanceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAddressesWithoutBalanceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAddressesWithoutBalanceRequest): ListAddressesWithoutBalanceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAddressesWithoutBalanceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAddressesWithoutBalanceRequest;
    static deserializeBinaryFromReader(message: ListAddressesWithoutBalanceRequest, reader: jspb.BinaryReader): ListAddressesWithoutBalanceRequest;
}

export namespace ListAddressesWithoutBalanceRequest {
    export type AsObject = {
        walletId: string,
        omitChange: boolean,
        pageSize: number,
        pageToken: string,
    }
}

export class ListAddressesWithoutBalanceResponse extends jspb.Message { 
    clearAddressesList(): void;
    getAddressesList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.AddressWithoutBalance>;
    setAddressesList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.AddressWithoutBalance>): ListAddressesWithoutBalanceResponse;
    addAddresses(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.AddressWithoutBalance, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.AddressWithoutBalance;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListAddressesWithoutBalanceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAddressesWithoutBalanceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListAddressesWithoutBalanceResponse): ListAddressesWithoutBalanceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAddressesWithoutBalanceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAddressesWithoutBalanceResponse;
    static deserializeBinaryFromReader(message: ListAddressesWithoutBalanceResponse, reader: jspb.BinaryReader): ListAddressesWithoutBalanceResponse;
}

export namespace ListAddressesWithoutBalanceResponse {
    export type AsObject = {
        addressesList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.AddressWithoutBalance.AsObject>,
        nextPageToken: string,
    }
}

export class GetEthereumFeeAddressRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetEthereumFeeAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetEthereumFeeAddressRequest): GetEthereumFeeAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetEthereumFeeAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetEthereumFeeAddressRequest;
    static deserializeBinaryFromReader(message: GetEthereumFeeAddressRequest, reader: jspb.BinaryReader): GetEthereumFeeAddressRequest;
}

export namespace GetEthereumFeeAddressRequest {
    export type AsObject = {
    }
}

export class DeleteAllWatchOnlyAddressesByWalletIDRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): DeleteAllWatchOnlyAddressesByWalletIDRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteAllWatchOnlyAddressesByWalletIDRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteAllWatchOnlyAddressesByWalletIDRequest): DeleteAllWatchOnlyAddressesByWalletIDRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteAllWatchOnlyAddressesByWalletIDRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteAllWatchOnlyAddressesByWalletIDRequest;
    static deserializeBinaryFromReader(message: DeleteAllWatchOnlyAddressesByWalletIDRequest, reader: jspb.BinaryReader): DeleteAllWatchOnlyAddressesByWalletIDRequest;
}

export namespace DeleteAllWatchOnlyAddressesByWalletIDRequest {
    export type AsObject = {
        walletId: string,
    }
}

export class ImportAddressRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): ImportAddressRequest;
    getAddress(): string;
    setAddress(value: string): ImportAddressRequest;
    getIsChangeAddress(): boolean;
    setIsChangeAddress(value: boolean): ImportAddressRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImportAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ImportAddressRequest): ImportAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImportAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImportAddressRequest;
    static deserializeBinaryFromReader(message: ImportAddressRequest, reader: jspb.BinaryReader): ImportAddressRequest;
}

export namespace ImportAddressRequest {
    export type AsObject = {
        walletId: string,
        address: string,
        isChangeAddress: boolean,
    }
}

export class CreateTransactionRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): CreateTransactionRequest;
    getFeeRate(): number;
    setFeeRate(value: number): CreateTransactionRequest;
    clearTxOutputsList(): void;
    getTxOutputsList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTxOutput>;
    setTxOutputsList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTxOutput>): CreateTransactionRequest;
    addTxOutputs(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTxOutput, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTxOutput;
    getAddress(): string;
    setAddress(value: string): CreateTransactionRequest;
    getDestinationTag(): number;
    setDestinationTag(value: number): CreateTransactionRequest;
    getMemoId(): string;
    setMemoId(value: string): CreateTransactionRequest;
    getStringValue(): string;
    setStringValue(value: string): CreateTransactionRequest;

    hasSubstrateSpecific(): boolean;
    clearSubstrateSpecific(): void;
    getSubstrateSpecific(): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CreateTransactionSubstrateSpecific | undefined;
    setSubstrateSpecific(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CreateTransactionSubstrateSpecific): CreateTransactionRequest;

    hasWalletConnectSpecific(): boolean;
    clearWalletConnectSpecific(): void;
    getWalletConnectSpecific(): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CreateTransactionWalletConnectSpecific | undefined;
    setWalletConnectSpecific(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CreateTransactionWalletConnectSpecific): CreateTransactionRequest;

    hasNemSpecific(): boolean;
    clearNemSpecific(): void;
    getNemSpecific(): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CreateTransactionNemSpecific | undefined;
    setNemSpecific(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CreateTransactionNemSpecific): CreateTransactionRequest;

    hasIostSpecific(): boolean;
    clearIostSpecific(): void;
    getIostSpecific(): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CreateTransactionIOSTSpecific | undefined;
    setIostSpecific(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CreateTransactionIOSTSpecific): CreateTransactionRequest;

    hasXymSpecific(): boolean;
    clearXymSpecific(): void;
    getXymSpecific(): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CreateTransactionSymbolSpecific | undefined;
    setXymSpecific(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CreateTransactionSymbolSpecific): CreateTransactionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTransactionRequest): CreateTransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTransactionRequest;
    static deserializeBinaryFromReader(message: CreateTransactionRequest, reader: jspb.BinaryReader): CreateTransactionRequest;
}

export namespace CreateTransactionRequest {
    export type AsObject = {
        walletId: string,
        feeRate: number,
        txOutputsList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTxOutput.AsObject>,
        address: string,
        destinationTag: number,
        memoId: string,
        stringValue: string,
        substrateSpecific?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CreateTransactionSubstrateSpecific.AsObject,
        walletConnectSpecific?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CreateTransactionWalletConnectSpecific.AsObject,
        nemSpecific?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CreateTransactionNemSpecific.AsObject,
        iostSpecific?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CreateTransactionIOSTSpecific.AsObject,
        xymSpecific?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CreateTransactionSymbolSpecific.AsObject,
    }
}

export class CreateTransactionResponse extends jspb.Message { 
    getTransactionId(): string;
    setTransactionId(value: string): CreateTransactionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTransactionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTransactionResponse): CreateTransactionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTransactionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTransactionResponse;
    static deserializeBinaryFromReader(message: CreateTransactionResponse, reader: jspb.BinaryReader): CreateTransactionResponse;
}

export namespace CreateTransactionResponse {
    export type AsObject = {
        transactionId: string,
    }
}

export class CreateXRPInitTransactionsRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): CreateXRPInitTransactionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateXRPInitTransactionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateXRPInitTransactionsRequest): CreateXRPInitTransactionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateXRPInitTransactionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateXRPInitTransactionsRequest;
    static deserializeBinaryFromReader(message: CreateXRPInitTransactionsRequest, reader: jspb.BinaryReader): CreateXRPInitTransactionsRequest;
}

export namespace CreateXRPInitTransactionsRequest {
    export type AsObject = {
        walletId: string,
    }
}

export class CreateInitTransactionRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): CreateInitTransactionRequest;

    hasIostSpecific(): boolean;
    clearIostSpecific(): void;
    getIostSpecific(): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CreateTransactionIOSTSpecific | undefined;
    setIostSpecific(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CreateTransactionIOSTSpecific): CreateInitTransactionRequest;

    hasSymbolSpecific(): boolean;
    clearSymbolSpecific(): void;
    getSymbolSpecific(): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CreateTransactionSymbolSpecific | undefined;
    setSymbolSpecific(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CreateTransactionSymbolSpecific): CreateInitTransactionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateInitTransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateInitTransactionRequest): CreateInitTransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateInitTransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateInitTransactionRequest;
    static deserializeBinaryFromReader(message: CreateInitTransactionRequest, reader: jspb.BinaryReader): CreateInitTransactionRequest;
}

export namespace CreateInitTransactionRequest {
    export type AsObject = {
        walletId: string,
        iostSpecific?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CreateTransactionIOSTSpecific.AsObject,
        symbolSpecific?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CreateTransactionSymbolSpecific.AsObject,
    }
}

export class SignTransactionRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): SignTransactionRequest;
    getTransactionId(): string;
    setTransactionId(value: string): SignTransactionRequest;
    getKeyId(): string;
    setKeyId(value: string): SignTransactionRequest;

    hasSignedInfo(): boolean;
    clearSignedInfo(): void;
    getSignedInfo(): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo | undefined;
    setSignedInfo(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo): SignTransactionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignTransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SignTransactionRequest): SignTransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignTransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignTransactionRequest;
    static deserializeBinaryFromReader(message: SignTransactionRequest, reader: jspb.BinaryReader): SignTransactionRequest;
}

export namespace SignTransactionRequest {
    export type AsObject = {
        walletId: string,
        transactionId: string,
        keyId: string,
        signedInfo?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo.AsObject,
    }
}

export class SignXRPInitTransactionsRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): SignXRPInitTransactionsRequest;
    getKeyId(): string;
    setKeyId(value: string): SignXRPInitTransactionsRequest;
    clearSignedInfoList(): void;
    getSignedInfoList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo>;
    setSignedInfoList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo>): SignXRPInitTransactionsRequest;
    addSignedInfo(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignXRPInitTransactionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SignXRPInitTransactionsRequest): SignXRPInitTransactionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignXRPInitTransactionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignXRPInitTransactionsRequest;
    static deserializeBinaryFromReader(message: SignXRPInitTransactionsRequest, reader: jspb.BinaryReader): SignXRPInitTransactionsRequest;
}

export namespace SignXRPInitTransactionsRequest {
    export type AsObject = {
        walletId: string,
        keyId: string,
        signedInfoList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo.AsObject>,
    }
}

export class SignInitTransactionRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): SignInitTransactionRequest;
    getKeyId(): string;
    setKeyId(value: string): SignInitTransactionRequest;
    clearSignedInfoList(): void;
    getSignedInfoList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo>;
    setSignedInfoList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo>): SignInitTransactionRequest;
    addSignedInfo(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignInitTransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SignInitTransactionRequest): SignInitTransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignInitTransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignInitTransactionRequest;
    static deserializeBinaryFromReader(message: SignInitTransactionRequest, reader: jspb.BinaryReader): SignInitTransactionRequest;
}

export namespace SignInitTransactionRequest {
    export type AsObject = {
        walletId: string,
        keyId: string,
        signedInfoList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestSignedInfo.AsObject>,
    }
}

export class SendTransactionRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): SendTransactionRequest;
    getTransactionId(): string;
    setTransactionId(value: string): SendTransactionRequest;
    getExecutorType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.ExecutorType;
    setExecutorType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.ExecutorType): SendTransactionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendTransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SendTransactionRequest): SendTransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendTransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendTransactionRequest;
    static deserializeBinaryFromReader(message: SendTransactionRequest, reader: jspb.BinaryReader): SendTransactionRequest;
}

export namespace SendTransactionRequest {
    export type AsObject = {
        walletId: string,
        transactionId: string,
        executorType: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.ExecutorType,
    }
}

export class SendTransactionResponse extends jspb.Message { 
    getTxId(): string;
    setTxId(value: string): SendTransactionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendTransactionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SendTransactionResponse): SendTransactionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendTransactionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendTransactionResponse;
    static deserializeBinaryFromReader(message: SendTransactionResponse, reader: jspb.BinaryReader): SendTransactionResponse;
}

export namespace SendTransactionResponse {
    export type AsObject = {
        txId: string,
    }
}

export class SendXRPInitTransactionsRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): SendXRPInitTransactionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendXRPInitTransactionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SendXRPInitTransactionsRequest): SendXRPInitTransactionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendXRPInitTransactionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendXRPInitTransactionsRequest;
    static deserializeBinaryFromReader(message: SendXRPInitTransactionsRequest, reader: jspb.BinaryReader): SendXRPInitTransactionsRequest;
}

export namespace SendXRPInitTransactionsRequest {
    export type AsObject = {
        walletId: string,
    }
}

export class SendXRPInitTransactionsResponse extends jspb.Message { 
    clearTxIdsList(): void;
    getTxIdsList(): Array<string>;
    setTxIdsList(value: Array<string>): SendXRPInitTransactionsResponse;
    addTxIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendXRPInitTransactionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SendXRPInitTransactionsResponse): SendXRPInitTransactionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendXRPInitTransactionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendXRPInitTransactionsResponse;
    static deserializeBinaryFromReader(message: SendXRPInitTransactionsResponse, reader: jspb.BinaryReader): SendXRPInitTransactionsResponse;
}

export namespace SendXRPInitTransactionsResponse {
    export type AsObject = {
        txIdsList: Array<string>,
    }
}

export class SendInitTransactionRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): SendInitTransactionRequest;
    getExecutorType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.ExecutorType;
    setExecutorType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.ExecutorType): SendInitTransactionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendInitTransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SendInitTransactionRequest): SendInitTransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendInitTransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendInitTransactionRequest;
    static deserializeBinaryFromReader(message: SendInitTransactionRequest, reader: jspb.BinaryReader): SendInitTransactionRequest;
}

export namespace SendInitTransactionRequest {
    export type AsObject = {
        walletId: string,
        executorType: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.ExecutorType,
    }
}

export class SendInitTransactionResponse extends jspb.Message { 
    clearTxIdsList(): void;
    getTxIdsList(): Array<string>;
    setTxIdsList(value: Array<string>): SendInitTransactionResponse;
    addTxIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendInitTransactionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SendInitTransactionResponse): SendInitTransactionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendInitTransactionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendInitTransactionResponse;
    static deserializeBinaryFromReader(message: SendInitTransactionResponse, reader: jspb.BinaryReader): SendInitTransactionResponse;
}

export namespace SendInitTransactionResponse {
    export type AsObject = {
        txIdsList: Array<string>,
    }
}

export class CancelTransactionRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): CancelTransactionRequest;
    getTransactionId(): string;
    setTransactionId(value: string): CancelTransactionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelTransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CancelTransactionRequest): CancelTransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelTransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelTransactionRequest;
    static deserializeBinaryFromReader(message: CancelTransactionRequest, reader: jspb.BinaryReader): CancelTransactionRequest;
}

export namespace CancelTransactionRequest {
    export type AsObject = {
        walletId: string,
        transactionId: string,
    }
}

export class GetTransactionRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): GetTransactionRequest;
    getTransactionId(): string;
    setTransactionId(value: string): GetTransactionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTransactionRequest): GetTransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTransactionRequest;
    static deserializeBinaryFromReader(message: GetTransactionRequest, reader: jspb.BinaryReader): GetTransactionRequest;
}

export namespace GetTransactionRequest {
    export type AsObject = {
        walletId: string,
        transactionId: string,
    }
}

export class GetTransactionByTxIDRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): GetTransactionByTxIDRequest;
    getTxId(): string;
    setTxId(value: string): GetTransactionByTxIDRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTransactionByTxIDRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTransactionByTxIDRequest): GetTransactionByTxIDRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTransactionByTxIDRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTransactionByTxIDRequest;
    static deserializeBinaryFromReader(message: GetTransactionByTxIDRequest, reader: jspb.BinaryReader): GetTransactionByTxIDRequest;
}

export namespace GetTransactionByTxIDRequest {
    export type AsObject = {
        walletId: string,
        txId: string,
    }
}

export class ListTransactionsRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): ListTransactionsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListTransactionsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListTransactionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTransactionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTransactionsRequest): ListTransactionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTransactionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTransactionsRequest;
    static deserializeBinaryFromReader(message: ListTransactionsRequest, reader: jspb.BinaryReader): ListTransactionsRequest;
}

export namespace ListTransactionsRequest {
    export type AsObject = {
        walletId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListTransactionsByFilterRequest extends jspb.Message { 
    getFilterType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.ListFilterType;
    setFilterType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.ListFilterType): ListTransactionsByFilterRequest;
    getTransactionId(): string;
    setTransactionId(value: string): ListTransactionsByFilterRequest;
    getWalletId(): string;
    setWalletId(value: string): ListTransactionsByFilterRequest;
    getWalletName(): string;
    setWalletName(value: string): ListTransactionsByFilterRequest;
    getAddressName(): string;
    setAddressName(value: string): ListTransactionsByFilterRequest;
    getAddress(): string;
    setAddress(value: string): ListTransactionsByFilterRequest;
    getTxid(): string;
    setTxid(value: string): ListTransactionsByFilterRequest;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): ListTransactionsByFilterRequest;
    clearWalletTypeList(): void;
    getWalletTypeList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType>;
    setWalletTypeList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType>): ListTransactionsByFilterRequest;
    addWalletType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType;
    clearTransactionStateList(): void;
    getTransactionStateList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.TransactionState>;
    setTransactionStateList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.TransactionState>): ListTransactionsByFilterRequest;
    addTransactionState(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.TransactionState, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.TransactionState;
    getPageSize(): number;
    setPageSize(value: number): ListTransactionsByFilterRequest;
    getPageToken(): string;
    setPageToken(value: string): ListTransactionsByFilterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTransactionsByFilterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTransactionsByFilterRequest): ListTransactionsByFilterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTransactionsByFilterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTransactionsByFilterRequest;
    static deserializeBinaryFromReader(message: ListTransactionsByFilterRequest, reader: jspb.BinaryReader): ListTransactionsByFilterRequest;
}

export namespace ListTransactionsByFilterRequest {
    export type AsObject = {
        filterType: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.ListFilterType,
        transactionId: string,
        walletId: string,
        walletName: string,
        addressName: string,
        address: string,
        txid: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        walletTypeList: Array<gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType>,
        transactionStateList: Array<gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.TransactionState>,
        pageSize: number,
        pageToken: string,
    }
}

export class ListTransactionsResponse extends jspb.Message { 
    clearTransactionsList(): void;
    getTransactionsList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction>;
    setTransactionsList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction>): ListTransactionsResponse;
    addTransactions(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListTransactionsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTransactionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListTransactionsResponse): ListTransactionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTransactionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTransactionsResponse;
    static deserializeBinaryFromReader(message: ListTransactionsResponse, reader: jspb.BinaryReader): ListTransactionsResponse;
}

export namespace ListTransactionsResponse {
    export type AsObject = {
        transactionsList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transaction.AsObject>,
        nextPageToken: string,
    }
}

export class GetSignInfoRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): GetSignInfoRequest;
    getTransactionId(): string;
    setTransactionId(value: string): GetSignInfoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSignInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSignInfoRequest): GetSignInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSignInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSignInfoRequest;
    static deserializeBinaryFromReader(message: GetSignInfoRequest, reader: jspb.BinaryReader): GetSignInfoRequest;
}

export namespace GetSignInfoRequest {
    export type AsObject = {
        walletId: string,
        transactionId: string,
    }
}

export class ListSignInfoRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): ListSignInfoRequest;
    getTransactionId(): string;
    setTransactionId(value: string): ListSignInfoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSignInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSignInfoRequest): ListSignInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSignInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSignInfoRequest;
    static deserializeBinaryFromReader(message: ListSignInfoRequest, reader: jspb.BinaryReader): ListSignInfoRequest;
}

export namespace ListSignInfoRequest {
    export type AsObject = {
        walletId: string,
        transactionId: string,
    }
}

export class ListSignInfoResponse extends jspb.Message { 
    clearSignInfoListList(): void;
    getSignInfoListList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo>;
    setSignInfoListList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo>): ListSignInfoResponse;
    addSignInfoList(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSignInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSignInfoResponse): ListSignInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSignInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSignInfoResponse;
    static deserializeBinaryFromReader(message: ListSignInfoResponse, reader: jspb.BinaryReader): ListSignInfoResponse;
}

export namespace ListSignInfoResponse {
    export type AsObject = {
        signInfoListList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo.AsObject>,
    }
}

export class ListXRPInitSignInfoRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): ListXRPInitSignInfoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListXRPInitSignInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListXRPInitSignInfoRequest): ListXRPInitSignInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListXRPInitSignInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListXRPInitSignInfoRequest;
    static deserializeBinaryFromReader(message: ListXRPInitSignInfoRequest, reader: jspb.BinaryReader): ListXRPInitSignInfoRequest;
}

export namespace ListXRPInitSignInfoRequest {
    export type AsObject = {
        walletId: string,
    }
}

export class ListXRPInitSignInfoResponse extends jspb.Message { 
    clearSignInfoListList(): void;
    getSignInfoListList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo>;
    setSignInfoListList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo>): ListXRPInitSignInfoResponse;
    addSignInfoList(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListXRPInitSignInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListXRPInitSignInfoResponse): ListXRPInitSignInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListXRPInitSignInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListXRPInitSignInfoResponse;
    static deserializeBinaryFromReader(message: ListXRPInitSignInfoResponse, reader: jspb.BinaryReader): ListXRPInitSignInfoResponse;
}

export namespace ListXRPInitSignInfoResponse {
    export type AsObject = {
        signInfoListList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SignInfo.AsObject>,
    }
}

export class ListInitSignInfoRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): ListInitSignInfoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListInitSignInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListInitSignInfoRequest): ListInitSignInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListInitSignInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListInitSignInfoRequest;
    static deserializeBinaryFromReader(message: ListInitSignInfoRequest, reader: jspb.BinaryReader): ListInitSignInfoRequest;
}

export namespace ListInitSignInfoRequest {
    export type AsObject = {
        walletId: string,
    }
}

export class ListTransfersRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): ListTransfersRequest;
    getPageSize(): number;
    setPageSize(value: number): ListTransfersRequest;
    getPageToken(): string;
    setPageToken(value: string): ListTransfersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTransfersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTransfersRequest): ListTransfersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTransfersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTransfersRequest;
    static deserializeBinaryFromReader(message: ListTransfersRequest, reader: jspb.BinaryReader): ListTransfersRequest;
}

export namespace ListTransfersRequest {
    export type AsObject = {
        walletId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListTransfersByFilterRequest extends jspb.Message { 
    getFilterType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.ListFilterType;
    setFilterType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.ListFilterType): ListTransfersByFilterRequest;
    getTransferId(): string;
    setTransferId(value: string): ListTransfersByFilterRequest;
    getWalletId(): string;
    setWalletId(value: string): ListTransfersByFilterRequest;
    getWalletName(): string;
    setWalletName(value: string): ListTransfersByFilterRequest;
    getAddressName(): string;
    setAddressName(value: string): ListTransfersByFilterRequest;
    getAddress(): string;
    setAddress(value: string): ListTransfersByFilterRequest;
    getTxid(): string;
    setTxid(value: string): ListTransfersByFilterRequest;
    getWatchOnly(): boolean;
    setWatchOnly(value: boolean): ListTransfersByFilterRequest;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): ListTransfersByFilterRequest;
    clearWalletTypeList(): void;
    getWalletTypeList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType>;
    setWalletTypeList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType>): ListTransfersByFilterRequest;
    addWalletType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType;
    getTransferType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType;
    setTransferType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType): ListTransfersByFilterRequest;
    getPageSize(): number;
    setPageSize(value: number): ListTransfersByFilterRequest;
    getPageToken(): string;
    setPageToken(value: string): ListTransfersByFilterRequest;

    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): ListTransfersByFilterRequest;

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): ListTransfersByFilterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTransfersByFilterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTransfersByFilterRequest): ListTransfersByFilterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTransfersByFilterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTransfersByFilterRequest;
    static deserializeBinaryFromReader(message: ListTransfersByFilterRequest, reader: jspb.BinaryReader): ListTransfersByFilterRequest;
}

export namespace ListTransfersByFilterRequest {
    export type AsObject = {
        filterType: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.ListFilterType,
        transferId: string,
        walletId: string,
        walletName: string,
        addressName: string,
        address: string,
        txid: string,
        watchOnly: boolean,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        walletTypeList: Array<gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType>,
        transferType: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType,
        pageSize: number,
        pageToken: string,
        startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ListTransfersResponse extends jspb.Message { 
    clearTransfersList(): void;
    getTransfersList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transfer>;
    setTransfersList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transfer>): ListTransfersResponse;
    addTransfers(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transfer, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transfer;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListTransfersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTransfersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListTransfersResponse): ListTransfersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTransfersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTransfersResponse;
    static deserializeBinaryFromReader(message: ListTransfersResponse, reader: jspb.BinaryReader): ListTransfersResponse;
}

export namespace ListTransfersResponse {
    export type AsObject = {
        transfersList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Transfer.AsObject>,
        nextPageToken: string,
    }
}

export class ListUncheckedTransfersByFilterRequest extends jspb.Message { 
    getHasChecked(): boolean;
    setHasChecked(value: boolean): ListUncheckedTransfersByFilterRequest;
    clearWalletTypeList(): void;
    getWalletTypeList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType>;
    setWalletTypeList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType>): ListUncheckedTransfersByFilterRequest;
    addWalletType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType;
    getPageSize(): number;
    setPageSize(value: number): ListUncheckedTransfersByFilterRequest;
    getPageToken(): string;
    setPageToken(value: string): ListUncheckedTransfersByFilterRequest;
    getFilterType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.ListFilterType;
    setFilterType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.ListFilterType): ListUncheckedTransfersByFilterRequest;
    getTransferId(): string;
    setTransferId(value: string): ListUncheckedTransfersByFilterRequest;
    getWalletId(): string;
    setWalletId(value: string): ListUncheckedTransfersByFilterRequest;
    getWalletName(): string;
    setWalletName(value: string): ListUncheckedTransfersByFilterRequest;
    getAddress(): string;
    setAddress(value: string): ListUncheckedTransfersByFilterRequest;
    getTxid(): string;
    setTxid(value: string): ListUncheckedTransfersByFilterRequest;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): ListUncheckedTransfersByFilterRequest;
    getTransferType(): gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType;
    setTransferType(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType): ListUncheckedTransfersByFilterRequest;

    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): ListUncheckedTransfersByFilterRequest;

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): ListUncheckedTransfersByFilterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListUncheckedTransfersByFilterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListUncheckedTransfersByFilterRequest): ListUncheckedTransfersByFilterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListUncheckedTransfersByFilterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListUncheckedTransfersByFilterRequest;
    static deserializeBinaryFromReader(message: ListUncheckedTransfersByFilterRequest, reader: jspb.BinaryReader): ListUncheckedTransfersByFilterRequest;
}

export namespace ListUncheckedTransfersByFilterRequest {
    export type AsObject = {
        hasChecked: boolean,
        walletTypeList: Array<gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.WalletType>,
        pageSize: number,
        pageToken: string,
        filterType: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.ListFilterType,
        transferId: string,
        walletId: string,
        walletName: string,
        address: string,
        txid: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        transferType: gincoinc_global_v1_gincoincglobalv1_enum_pb.TransferType,
        startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class UpdateUncheckedTransferHasCheckedFlagRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): UpdateUncheckedTransferHasCheckedFlagRequest;
    getUncheckedTransferId(): string;
    setUncheckedTransferId(value: string): UpdateUncheckedTransferHasCheckedFlagRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateUncheckedTransferHasCheckedFlagRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateUncheckedTransferHasCheckedFlagRequest): UpdateUncheckedTransferHasCheckedFlagRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateUncheckedTransferHasCheckedFlagRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateUncheckedTransferHasCheckedFlagRequest;
    static deserializeBinaryFromReader(message: UpdateUncheckedTransferHasCheckedFlagRequest, reader: jspb.BinaryReader): UpdateUncheckedTransferHasCheckedFlagRequest;
}

export namespace UpdateUncheckedTransferHasCheckedFlagRequest {
    export type AsObject = {
        walletId: string,
        uncheckedTransferId: string,
    }
}

export class ListUncheckedTransfersResponse extends jspb.Message { 
    clearUncheckedTransfersList(): void;
    getUncheckedTransfersList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.UncheckedTransfer>;
    setUncheckedTransfersList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.UncheckedTransfer>): ListUncheckedTransfersResponse;
    addUncheckedTransfers(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.UncheckedTransfer, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.UncheckedTransfer;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListUncheckedTransfersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListUncheckedTransfersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListUncheckedTransfersResponse): ListUncheckedTransfersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListUncheckedTransfersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListUncheckedTransfersResponse;
    static deserializeBinaryFromReader(message: ListUncheckedTransfersResponse, reader: jspb.BinaryReader): ListUncheckedTransfersResponse;
}

export namespace ListUncheckedTransfersResponse {
    export type AsObject = {
        uncheckedTransfersList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.UncheckedTransfer.AsObject>,
        nextPageToken: string,
    }
}

export class ListEventTriggeredMessagesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListEventTriggeredMessagesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListEventTriggeredMessagesRequest): ListEventTriggeredMessagesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListEventTriggeredMessagesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListEventTriggeredMessagesRequest;
    static deserializeBinaryFromReader(message: ListEventTriggeredMessagesRequest, reader: jspb.BinaryReader): ListEventTriggeredMessagesRequest;
}

export namespace ListEventTriggeredMessagesRequest {
    export type AsObject = {
    }
}

export class ListEventTriggeredMessagesResponse extends jspb.Message { 
    clearEventTriggeredMessagesList(): void;
    getEventTriggeredMessagesList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EventTriggeredMessage>;
    setEventTriggeredMessagesList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EventTriggeredMessage>): ListEventTriggeredMessagesResponse;
    addEventTriggeredMessages(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EventTriggeredMessage, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EventTriggeredMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListEventTriggeredMessagesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListEventTriggeredMessagesResponse): ListEventTriggeredMessagesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListEventTriggeredMessagesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListEventTriggeredMessagesResponse;
    static deserializeBinaryFromReader(message: ListEventTriggeredMessagesResponse, reader: jspb.BinaryReader): ListEventTriggeredMessagesResponse;
}

export namespace ListEventTriggeredMessagesResponse {
    export type AsObject = {
        eventTriggeredMessagesList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.EventTriggeredMessage.AsObject>,
    }
}

export class CreateEventTriggeredMessageRequest extends jspb.Message { 
    getEventTriggeredMessageType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.EventTriggeredMessageType;
    setEventTriggeredMessageType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.EventTriggeredMessageType): CreateEventTriggeredMessageRequest;
    getDestination(): string;
    setDestination(value: string): CreateEventTriggeredMessageRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateEventTriggeredMessageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateEventTriggeredMessageRequest): CreateEventTriggeredMessageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateEventTriggeredMessageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateEventTriggeredMessageRequest;
    static deserializeBinaryFromReader(message: CreateEventTriggeredMessageRequest, reader: jspb.BinaryReader): CreateEventTriggeredMessageRequest;
}

export namespace CreateEventTriggeredMessageRequest {
    export type AsObject = {
        eventTriggeredMessageType: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.EventTriggeredMessageType,
        destination: string,
    }
}

export class CreateEventTriggeredMessageResponce extends jspb.Message { 
    getEventTriggeredMessageId(): string;
    setEventTriggeredMessageId(value: string): CreateEventTriggeredMessageResponce;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateEventTriggeredMessageResponce.AsObject;
    static toObject(includeInstance: boolean, msg: CreateEventTriggeredMessageResponce): CreateEventTriggeredMessageResponce.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateEventTriggeredMessageResponce, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateEventTriggeredMessageResponce;
    static deserializeBinaryFromReader(message: CreateEventTriggeredMessageResponce, reader: jspb.BinaryReader): CreateEventTriggeredMessageResponce;
}

export namespace CreateEventTriggeredMessageResponce {
    export type AsObject = {
        eventTriggeredMessageId: string,
    }
}

export class UpdateEventTriggeredMessageRequest extends jspb.Message { 
    getEventTriggeredMessageId(): string;
    setEventTriggeredMessageId(value: string): UpdateEventTriggeredMessageRequest;
    getDestination(): string;
    setDestination(value: string): UpdateEventTriggeredMessageRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateEventTriggeredMessageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateEventTriggeredMessageRequest): UpdateEventTriggeredMessageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateEventTriggeredMessageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateEventTriggeredMessageRequest;
    static deserializeBinaryFromReader(message: UpdateEventTriggeredMessageRequest, reader: jspb.BinaryReader): UpdateEventTriggeredMessageRequest;
}

export namespace UpdateEventTriggeredMessageRequest {
    export type AsObject = {
        eventTriggeredMessageId: string,
        destination: string,
    }
}

export class DeleteEventTriggeredMessageRequest extends jspb.Message { 
    getEventTriggeredMessageId(): string;
    setEventTriggeredMessageId(value: string): DeleteEventTriggeredMessageRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteEventTriggeredMessageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteEventTriggeredMessageRequest): DeleteEventTriggeredMessageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteEventTriggeredMessageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteEventTriggeredMessageRequest;
    static deserializeBinaryFromReader(message: DeleteEventTriggeredMessageRequest, reader: jspb.BinaryReader): DeleteEventTriggeredMessageRequest;
}

export namespace DeleteEventTriggeredMessageRequest {
    export type AsObject = {
        eventTriggeredMessageId: string,
    }
}

export class GetRateSnapshotRequest extends jspb.Message { 
    getRateSnapshotId(): string;
    setRateSnapshotId(value: string): GetRateSnapshotRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRateSnapshotRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRateSnapshotRequest): GetRateSnapshotRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRateSnapshotRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRateSnapshotRequest;
    static deserializeBinaryFromReader(message: GetRateSnapshotRequest, reader: jspb.BinaryReader): GetRateSnapshotRequest;
}

export namespace GetRateSnapshotRequest {
    export type AsObject = {
        rateSnapshotId: string,
    }
}

export class GetLatestRateSnapshotRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLatestRateSnapshotRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLatestRateSnapshotRequest): GetLatestRateSnapshotRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLatestRateSnapshotRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLatestRateSnapshotRequest;
    static deserializeBinaryFromReader(message: GetLatestRateSnapshotRequest, reader: jspb.BinaryReader): GetLatestRateSnapshotRequest;
}

export namespace GetLatestRateSnapshotRequest {
    export type AsObject = {
    }
}

export class SetRatesRequest extends jspb.Message { 
    clearRatesList(): void;
    getRatesList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestRate>;
    setRatesList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestRate>): SetRatesRequest;
    addRates(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestRate, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestRate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetRatesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetRatesRequest): SetRatesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetRatesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetRatesRequest;
    static deserializeBinaryFromReader(message: SetRatesRequest, reader: jspb.BinaryReader): SetRatesRequest;
}

export namespace SetRatesRequest {
    export type AsObject = {
        ratesList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestRate.AsObject>,
    }
}

export class SetDefaultRatesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetDefaultRatesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetDefaultRatesRequest): SetDefaultRatesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetDefaultRatesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetDefaultRatesRequest;
    static deserializeBinaryFromReader(message: SetDefaultRatesRequest, reader: jspb.BinaryReader): SetDefaultRatesRequest;
}

export namespace SetDefaultRatesRequest {
    export type AsObject = {
    }
}

export class SetRatesResponse extends jspb.Message { 
    getRateSnapshotId(): string;
    setRateSnapshotId(value: string): SetRatesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetRatesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetRatesResponse): SetRatesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetRatesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetRatesResponse;
    static deserializeBinaryFromReader(message: SetRatesResponse, reader: jspb.BinaryReader): SetRatesResponse;
}

export namespace SetRatesResponse {
    export type AsObject = {
        rateSnapshotId: string,
    }
}

export class SetDefaultRatesResponse extends jspb.Message { 
    clearRateSnapshotIdsList(): void;
    getRateSnapshotIdsList(): Array<string>;
    setRateSnapshotIdsList(value: Array<string>): SetDefaultRatesResponse;
    addRateSnapshotIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetDefaultRatesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetDefaultRatesResponse): SetDefaultRatesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetDefaultRatesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetDefaultRatesResponse;
    static deserializeBinaryFromReader(message: SetDefaultRatesResponse, reader: jspb.BinaryReader): SetDefaultRatesResponse;
}

export namespace SetDefaultRatesResponse {
    export type AsObject = {
        rateSnapshotIdsList: Array<string>,
    }
}

export class GetSpendableBalanceRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): GetSpendableBalanceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSpendableBalanceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSpendableBalanceRequest): GetSpendableBalanceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSpendableBalanceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSpendableBalanceRequest;
    static deserializeBinaryFromReader(message: GetSpendableBalanceRequest, reader: jspb.BinaryReader): GetSpendableBalanceRequest;
}

export namespace GetSpendableBalanceRequest {
    export type AsObject = {
        walletId: string,
    }
}

export class GetSpendableBalanceResponse extends jspb.Message { 
    getTotalSpendableBalance(): number;
    setTotalSpendableBalance(value: number): GetSpendableBalanceResponse;
    getStringTotalSpendableBalance(): string;
    setStringTotalSpendableBalance(value: string): GetSpendableBalanceResponse;
    getDailySpendableBalance(): number;
    setDailySpendableBalance(value: number): GetSpendableBalanceResponse;
    getStringDailySpendableBalance(): string;
    setStringDailySpendableBalance(value: string): GetSpendableBalanceResponse;
    getHourlySpendableBalance(): number;
    setHourlySpendableBalance(value: number): GetSpendableBalanceResponse;
    getStringHourlySpendableBalance(): string;
    setStringHourlySpendableBalance(value: string): GetSpendableBalanceResponse;
    getOneTimeSpendableBalance(): number;
    setOneTimeSpendableBalance(value: number): GetSpendableBalanceResponse;
    getStringOneTimeSpendableBalance(): string;
    setStringOneTimeSpendableBalance(value: string): GetSpendableBalanceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSpendableBalanceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetSpendableBalanceResponse): GetSpendableBalanceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSpendableBalanceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSpendableBalanceResponse;
    static deserializeBinaryFromReader(message: GetSpendableBalanceResponse, reader: jspb.BinaryReader): GetSpendableBalanceResponse;
}

export namespace GetSpendableBalanceResponse {
    export type AsObject = {
        totalSpendableBalance: number,
        stringTotalSpendableBalance: string,
        dailySpendableBalance: number,
        stringDailySpendableBalance: string,
        hourlySpendableBalance: number,
        stringHourlySpendableBalance: string,
        oneTimeSpendableBalance: number,
        stringOneTimeSpendableBalance: string,
    }
}

export class GetTotalBalanceRequest extends jspb.Message { 
    getWatchOnly(): boolean;
    setWatchOnly(value: boolean): GetTotalBalanceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTotalBalanceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTotalBalanceRequest): GetTotalBalanceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTotalBalanceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTotalBalanceRequest;
    static deserializeBinaryFromReader(message: GetTotalBalanceRequest, reader: jspb.BinaryReader): GetTotalBalanceRequest;
}

export namespace GetTotalBalanceRequest {
    export type AsObject = {
        watchOnly: boolean,
    }
}

export class ListBalanceSnapshotsRequest extends jspb.Message { 
    getWatchOnly(): boolean;
    setWatchOnly(value: boolean): ListBalanceSnapshotsRequest;

    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): ListBalanceSnapshotsRequest;

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): ListBalanceSnapshotsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListBalanceSnapshotsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListBalanceSnapshotsRequest): ListBalanceSnapshotsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListBalanceSnapshotsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListBalanceSnapshotsRequest;
    static deserializeBinaryFromReader(message: ListBalanceSnapshotsRequest, reader: jspb.BinaryReader): ListBalanceSnapshotsRequest;
}

export namespace ListBalanceSnapshotsRequest {
    export type AsObject = {
        watchOnly: boolean,
        startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ListBalanceSnapshotsResponse extends jspb.Message { 
    clearBalanceSnapshotsList(): void;
    getBalanceSnapshotsList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.BalanceSnapshot>;
    setBalanceSnapshotsList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.BalanceSnapshot>): ListBalanceSnapshotsResponse;
    addBalanceSnapshots(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.BalanceSnapshot, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.BalanceSnapshot;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListBalanceSnapshotsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListBalanceSnapshotsResponse): ListBalanceSnapshotsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListBalanceSnapshotsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListBalanceSnapshotsResponse;
    static deserializeBinaryFromReader(message: ListBalanceSnapshotsResponse, reader: jspb.BinaryReader): ListBalanceSnapshotsResponse;
}

export namespace ListBalanceSnapshotsResponse {
    export type AsObject = {
        balanceSnapshotsList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.BalanceSnapshot.AsObject>,
    }
}

export class ListWalletBalanceSnapshotsRequest extends jspb.Message { 
    clearWalletIdsList(): void;
    getWalletIdsList(): Array<string>;
    setWalletIdsList(value: Array<string>): ListWalletBalanceSnapshotsRequest;
    addWalletIds(value: string, index?: number): string;

    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): ListWalletBalanceSnapshotsRequest;

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): ListWalletBalanceSnapshotsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListWalletBalanceSnapshotsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListWalletBalanceSnapshotsRequest): ListWalletBalanceSnapshotsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListWalletBalanceSnapshotsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListWalletBalanceSnapshotsRequest;
    static deserializeBinaryFromReader(message: ListWalletBalanceSnapshotsRequest, reader: jspb.BinaryReader): ListWalletBalanceSnapshotsRequest;
}

export namespace ListWalletBalanceSnapshotsRequest {
    export type AsObject = {
        walletIdsList: Array<string>,
        startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ListWalletBalanceSnapshotsResponse extends jspb.Message { 

    hasWalletBalanceSnapshotMap(): boolean;
    clearWalletBalanceSnapshotMap(): void;
    getWalletBalanceSnapshotMap(): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletBalanceSnapshotMap | undefined;
    setWalletBalanceSnapshotMap(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletBalanceSnapshotMap): ListWalletBalanceSnapshotsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListWalletBalanceSnapshotsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListWalletBalanceSnapshotsResponse): ListWalletBalanceSnapshotsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListWalletBalanceSnapshotsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListWalletBalanceSnapshotsResponse;
    static deserializeBinaryFromReader(message: ListWalletBalanceSnapshotsResponse, reader: jspb.BinaryReader): ListWalletBalanceSnapshotsResponse;
}

export namespace ListWalletBalanceSnapshotsResponse {
    export type AsObject = {
        walletBalanceSnapshotMap?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletBalanceSnapshotMap.AsObject,
    }
}

export class ListTransferVolumeSnapshotsRequest extends jspb.Message { 
    getWatchOnly(): boolean;
    setWatchOnly(value: boolean): ListTransferVolumeSnapshotsRequest;

    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): ListTransferVolumeSnapshotsRequest;

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): ListTransferVolumeSnapshotsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTransferVolumeSnapshotsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTransferVolumeSnapshotsRequest): ListTransferVolumeSnapshotsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTransferVolumeSnapshotsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTransferVolumeSnapshotsRequest;
    static deserializeBinaryFromReader(message: ListTransferVolumeSnapshotsRequest, reader: jspb.BinaryReader): ListTransferVolumeSnapshotsRequest;
}

export namespace ListTransferVolumeSnapshotsRequest {
    export type AsObject = {
        watchOnly: boolean,
        startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ListTransferVolumeSnapshotsResponse extends jspb.Message { 

    hasTransferVolumeSnapshots(): boolean;
    clearTransferVolumeSnapshots(): void;
    getTransferVolumeSnapshots(): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferVolumeSnapshots | undefined;
    setTransferVolumeSnapshots(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferVolumeSnapshots): ListTransferVolumeSnapshotsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTransferVolumeSnapshotsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListTransferVolumeSnapshotsResponse): ListTransferVolumeSnapshotsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTransferVolumeSnapshotsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTransferVolumeSnapshotsResponse;
    static deserializeBinaryFromReader(message: ListTransferVolumeSnapshotsResponse, reader: jspb.BinaryReader): ListTransferVolumeSnapshotsResponse;
}

export namespace ListTransferVolumeSnapshotsResponse {
    export type AsObject = {
        transferVolumeSnapshots?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferVolumeSnapshots.AsObject,
    }
}

export class ListWalletTransferVolumeSnapshotsRequest extends jspb.Message { 
    clearWalletIdsList(): void;
    getWalletIdsList(): Array<string>;
    setWalletIdsList(value: Array<string>): ListWalletTransferVolumeSnapshotsRequest;
    addWalletIds(value: string, index?: number): string;

    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): ListWalletTransferVolumeSnapshotsRequest;

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): ListWalletTransferVolumeSnapshotsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListWalletTransferVolumeSnapshotsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListWalletTransferVolumeSnapshotsRequest): ListWalletTransferVolumeSnapshotsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListWalletTransferVolumeSnapshotsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListWalletTransferVolumeSnapshotsRequest;
    static deserializeBinaryFromReader(message: ListWalletTransferVolumeSnapshotsRequest, reader: jspb.BinaryReader): ListWalletTransferVolumeSnapshotsRequest;
}

export namespace ListWalletTransferVolumeSnapshotsRequest {
    export type AsObject = {
        walletIdsList: Array<string>,
        startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ListWalletTransferVolumeSnapshotsResponse extends jspb.Message { 

    hasWalletTransferVolumeSnapshots(): boolean;
    clearWalletTransferVolumeSnapshots(): void;
    getWalletTransferVolumeSnapshots(): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletTransferVolumeSnapshots | undefined;
    setWalletTransferVolumeSnapshots(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletTransferVolumeSnapshots): ListWalletTransferVolumeSnapshotsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListWalletTransferVolumeSnapshotsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListWalletTransferVolumeSnapshotsResponse): ListWalletTransferVolumeSnapshotsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListWalletTransferVolumeSnapshotsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListWalletTransferVolumeSnapshotsResponse;
    static deserializeBinaryFromReader(message: ListWalletTransferVolumeSnapshotsResponse, reader: jspb.BinaryReader): ListWalletTransferVolumeSnapshotsResponse;
}

export namespace ListWalletTransferVolumeSnapshotsResponse {
    export type AsObject = {
        walletTransferVolumeSnapshots?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.WalletTransferVolumeSnapshots.AsObject,
    }
}

export class CalculateFeeRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): CalculateFeeRequest;
    getFeeRate(): number;
    setFeeRate(value: number): CalculateFeeRequest;
    clearTxOutputsList(): void;
    getTxOutputsList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTxOutput>;
    setTxOutputsList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTxOutput>): CalculateFeeRequest;
    addTxOutputs(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTxOutput, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTxOutput;
    getAddress(): string;
    setAddress(value: string): CalculateFeeRequest;
    getDestinationTag(): number;
    setDestinationTag(value: number): CalculateFeeRequest;
    getStringValue(): string;
    setStringValue(value: string): CalculateFeeRequest;

    hasSubstrateSpecific(): boolean;
    clearSubstrateSpecific(): void;
    getSubstrateSpecific(): CalculateFeeSubstrateSpecific | undefined;
    setSubstrateSpecific(value?: CalculateFeeSubstrateSpecific): CalculateFeeRequest;

    hasNemSpecific(): boolean;
    clearNemSpecific(): void;
    getNemSpecific(): CalculateFeeNemSpecific | undefined;
    setNemSpecific(value?: CalculateFeeNemSpecific): CalculateFeeRequest;

    hasSymbolSpecific(): boolean;
    clearSymbolSpecific(): void;
    getSymbolSpecific(): CalculateFeeSymbolSpecific | undefined;
    setSymbolSpecific(value?: CalculateFeeSymbolSpecific): CalculateFeeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CalculateFeeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CalculateFeeRequest): CalculateFeeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CalculateFeeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CalculateFeeRequest;
    static deserializeBinaryFromReader(message: CalculateFeeRequest, reader: jspb.BinaryReader): CalculateFeeRequest;
}

export namespace CalculateFeeRequest {
    export type AsObject = {
        walletId: string,
        feeRate: number,
        txOutputsList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTxOutput.AsObject>,
        address: string,
        destinationTag: number,
        stringValue: string,
        substrateSpecific?: CalculateFeeSubstrateSpecific.AsObject,
        nemSpecific?: CalculateFeeNemSpecific.AsObject,
        symbolSpecific?: CalculateFeeSymbolSpecific.AsObject,
    }
}

export class CalculateFeeSubstrateSpecific extends jspb.Message { 
    getCallType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.SubstrateCallType;
    setCallType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.SubstrateCallType): CalculateFeeSubstrateSpecific;
    getMultisigCallType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.SubstrateCallType;
    setMultisigCallType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.SubstrateCallType): CalculateFeeSubstrateSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CalculateFeeSubstrateSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: CalculateFeeSubstrateSpecific): CalculateFeeSubstrateSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CalculateFeeSubstrateSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CalculateFeeSubstrateSpecific;
    static deserializeBinaryFromReader(message: CalculateFeeSubstrateSpecific, reader: jspb.BinaryReader): CalculateFeeSubstrateSpecific;
}

export namespace CalculateFeeSubstrateSpecific {
    export type AsObject = {
        callType: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.SubstrateCallType,
        multisigCallType: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.SubstrateCallType,
    }
}

export class CalculateFeeNemSpecific extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): CalculateFeeNemSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CalculateFeeNemSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: CalculateFeeNemSpecific): CalculateFeeNemSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CalculateFeeNemSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CalculateFeeNemSpecific;
    static deserializeBinaryFromReader(message: CalculateFeeNemSpecific, reader: jspb.BinaryReader): CalculateFeeNemSpecific;
}

export namespace CalculateFeeNemSpecific {
    export type AsObject = {
        message: string,
    }
}

export class CalculateFeeSymbolSpecific extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): CalculateFeeSymbolSpecific;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CalculateFeeSymbolSpecific.AsObject;
    static toObject(includeInstance: boolean, msg: CalculateFeeSymbolSpecific): CalculateFeeSymbolSpecific.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CalculateFeeSymbolSpecific, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CalculateFeeSymbolSpecific;
    static deserializeBinaryFromReader(message: CalculateFeeSymbolSpecific, reader: jspb.BinaryReader): CalculateFeeSymbolSpecific;
}

export namespace CalculateFeeSymbolSpecific {
    export type AsObject = {
        message: string,
    }
}

export class CalculateFeeResponse extends jspb.Message { 
    getFee(): number;
    setFee(value: number): CalculateFeeResponse;
    getStringFee(): string;
    setStringFee(value: string): CalculateFeeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CalculateFeeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CalculateFeeResponse): CalculateFeeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CalculateFeeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CalculateFeeResponse;
    static deserializeBinaryFromReader(message: CalculateFeeResponse, reader: jspb.BinaryReader): CalculateFeeResponse;
}

export namespace CalculateFeeResponse {
    export type AsObject = {
        fee: number,
        stringFee: string,
    }
}

export class GetMembersDeactivatabilitiesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMembersDeactivatabilitiesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetMembersDeactivatabilitiesRequest): GetMembersDeactivatabilitiesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMembersDeactivatabilitiesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMembersDeactivatabilitiesRequest;
    static deserializeBinaryFromReader(message: GetMembersDeactivatabilitiesRequest, reader: jspb.BinaryReader): GetMembersDeactivatabilitiesRequest;
}

export namespace GetMembersDeactivatabilitiesRequest {
    export type AsObject = {
    }
}

export class GetMembersDeactivatabilitiesResponse extends jspb.Message { 
    clearDeactivatabilitiesList(): void;
    getDeactivatabilitiesList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Deactivatability>;
    setDeactivatabilitiesList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Deactivatability>): GetMembersDeactivatabilitiesResponse;
    addDeactivatabilities(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Deactivatability, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Deactivatability;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMembersDeactivatabilitiesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetMembersDeactivatabilitiesResponse): GetMembersDeactivatabilitiesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMembersDeactivatabilitiesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMembersDeactivatabilitiesResponse;
    static deserializeBinaryFromReader(message: GetMembersDeactivatabilitiesResponse, reader: jspb.BinaryReader): GetMembersDeactivatabilitiesResponse;
}

export namespace GetMembersDeactivatabilitiesResponse {
    export type AsObject = {
        deactivatabilitiesList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Deactivatability.AsObject>,
    }
}

export class GetRecommendedFeeRateRequest extends jspb.Message { 
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): GetRecommendedFeeRateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRecommendedFeeRateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetRecommendedFeeRateRequest): GetRecommendedFeeRateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRecommendedFeeRateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRecommendedFeeRateRequest;
    static deserializeBinaryFromReader(message: GetRecommendedFeeRateRequest, reader: jspb.BinaryReader): GetRecommendedFeeRateRequest;
}

export namespace GetRecommendedFeeRateRequest {
    export type AsObject = {
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
    }
}

export class GetRecommendedFeeRateResponse extends jspb.Message { 
    getFastest(): number;
    setFastest(value: number): GetRecommendedFeeRateResponse;
    getFast(): number;
    setFast(value: number): GetRecommendedFeeRateResponse;
    getAverage(): number;
    setAverage(value: number): GetRecommendedFeeRateResponse;
    getSafeLow(): number;
    setSafeLow(value: number): GetRecommendedFeeRateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetRecommendedFeeRateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetRecommendedFeeRateResponse): GetRecommendedFeeRateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetRecommendedFeeRateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetRecommendedFeeRateResponse;
    static deserializeBinaryFromReader(message: GetRecommendedFeeRateResponse, reader: jspb.BinaryReader): GetRecommendedFeeRateResponse;
}

export namespace GetRecommendedFeeRateResponse {
    export type AsObject = {
        fastest: number,
        fast: number,
        average: number,
        safeLow: number,
    }
}

export class ValidateAddressRequest extends jspb.Message { 
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): ValidateAddressRequest;
    getAddress(): string;
    setAddress(value: string): ValidateAddressRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateAddressRequest): ValidateAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateAddressRequest;
    static deserializeBinaryFromReader(message: ValidateAddressRequest, reader: jspb.BinaryReader): ValidateAddressRequest;
}

export namespace ValidateAddressRequest {
    export type AsObject = {
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        address: string,
    }
}

export class ValidateAddressResponse extends jspb.Message { 
    getValid(): boolean;
    setValid(value: boolean): ValidateAddressResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateAddressResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateAddressResponse): ValidateAddressResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateAddressResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateAddressResponse;
    static deserializeBinaryFromReader(message: ValidateAddressResponse, reader: jspb.BinaryReader): ValidateAddressResponse;
}

export namespace ValidateAddressResponse {
    export type AsObject = {
        valid: boolean,
    }
}

export class ListConfirmationsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListConfirmationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListConfirmationsRequest): ListConfirmationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListConfirmationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListConfirmationsRequest;
    static deserializeBinaryFromReader(message: ListConfirmationsRequest, reader: jspb.BinaryReader): ListConfirmationsRequest;
}

export namespace ListConfirmationsRequest {
    export type AsObject = {
    }
}

export class ListConfirmationsResponse extends jspb.Message { 
    clearConfirmationsList(): void;
    getConfirmationsList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Confirmation>;
    setConfirmationsList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Confirmation>): ListConfirmationsResponse;
    addConfirmations(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Confirmation, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Confirmation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListConfirmationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListConfirmationsResponse): ListConfirmationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListConfirmationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListConfirmationsResponse;
    static deserializeBinaryFromReader(message: ListConfirmationsResponse, reader: jspb.BinaryReader): ListConfirmationsResponse;
}

export namespace ListConfirmationsResponse {
    export type AsObject = {
        confirmationsList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Confirmation.AsObject>,
    }
}

export class ListAuditLogsRequest extends jspb.Message { 
    getAuditLogGroup(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AuditLogGroup;
    setAuditLogGroup(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AuditLogGroup): ListAuditLogsRequest;
    getAccountId(): string;
    setAccountId(value: string): ListAuditLogsRequest;
    getPageSize(): number;
    setPageSize(value: number): ListAuditLogsRequest;
    getPageToken(): string;
    setPageToken(value: string): ListAuditLogsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAuditLogsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAuditLogsRequest): ListAuditLogsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAuditLogsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAuditLogsRequest;
    static deserializeBinaryFromReader(message: ListAuditLogsRequest, reader: jspb.BinaryReader): ListAuditLogsRequest;
}

export namespace ListAuditLogsRequest {
    export type AsObject = {
        auditLogGroup: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.AuditLogGroup,
        accountId: string,
        pageSize: number,
        pageToken: string,
    }
}

export class ListAuditLogsResponse extends jspb.Message { 
    clearAuditLogsList(): void;
    getAuditLogsList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_audit_logger_pb.AuditLog>;
    setAuditLogsList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_audit_logger_pb.AuditLog>): ListAuditLogsResponse;
    addAuditLogs(value?: gincoinc_adamant_global_v1_adamantglobalv1_audit_logger_pb.AuditLog, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_audit_logger_pb.AuditLog;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListAuditLogsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAuditLogsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListAuditLogsResponse): ListAuditLogsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAuditLogsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAuditLogsResponse;
    static deserializeBinaryFromReader(message: ListAuditLogsResponse, reader: jspb.BinaryReader): ListAuditLogsResponse;
}

export namespace ListAuditLogsResponse {
    export type AsObject = {
        auditLogsList: Array<gincoinc_adamant_global_v1_adamantglobalv1_audit_logger_pb.AuditLog.AsObject>,
        nextPageToken: string,
    }
}

export class CreateLabeledAddressRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateLabeledAddressRequest;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): CreateLabeledAddressRequest;
    getAddress(): string;
    setAddress(value: string): CreateLabeledAddressRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateLabeledAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateLabeledAddressRequest): CreateLabeledAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateLabeledAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateLabeledAddressRequest;
    static deserializeBinaryFromReader(message: CreateLabeledAddressRequest, reader: jspb.BinaryReader): CreateLabeledAddressRequest;
}

export namespace CreateLabeledAddressRequest {
    export type AsObject = {
        name: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        address: string,
    }
}

export class CreateLabeledAddressResponse extends jspb.Message { 
    getLabeledAddressId(): string;
    setLabeledAddressId(value: string): CreateLabeledAddressResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateLabeledAddressResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateLabeledAddressResponse): CreateLabeledAddressResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateLabeledAddressResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateLabeledAddressResponse;
    static deserializeBinaryFromReader(message: CreateLabeledAddressResponse, reader: jspb.BinaryReader): CreateLabeledAddressResponse;
}

export namespace CreateLabeledAddressResponse {
    export type AsObject = {
        labeledAddressId: string,
    }
}

export class UpdateLabeledAddressRequest extends jspb.Message { 
    getLabeledAddressId(): string;
    setLabeledAddressId(value: string): UpdateLabeledAddressRequest;
    getName(): string;
    setName(value: string): UpdateLabeledAddressRequest;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): UpdateLabeledAddressRequest;
    getAddress(): string;
    setAddress(value: string): UpdateLabeledAddressRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateLabeledAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateLabeledAddressRequest): UpdateLabeledAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateLabeledAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateLabeledAddressRequest;
    static deserializeBinaryFromReader(message: UpdateLabeledAddressRequest, reader: jspb.BinaryReader): UpdateLabeledAddressRequest;
}

export namespace UpdateLabeledAddressRequest {
    export type AsObject = {
        labeledAddressId: string,
        name: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        address: string,
    }
}

export class GetLabeledAddressRequest extends jspb.Message { 
    getLabeledAddressId(): string;
    setLabeledAddressId(value: string): GetLabeledAddressRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLabeledAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLabeledAddressRequest): GetLabeledAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLabeledAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLabeledAddressRequest;
    static deserializeBinaryFromReader(message: GetLabeledAddressRequest, reader: jspb.BinaryReader): GetLabeledAddressRequest;
}

export namespace GetLabeledAddressRequest {
    export type AsObject = {
        labeledAddressId: string,
    }
}

export class ListLabeledAddressesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLabeledAddressesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListLabeledAddressesRequest): ListLabeledAddressesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLabeledAddressesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLabeledAddressesRequest;
    static deserializeBinaryFromReader(message: ListLabeledAddressesRequest, reader: jspb.BinaryReader): ListLabeledAddressesRequest;
}

export namespace ListLabeledAddressesRequest {
    export type AsObject = {
    }
}

export class ListLabeledAddressesResponse extends jspb.Message { 
    clearAddressesList(): void;
    getAddressesList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress>;
    setAddressesList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress>): ListLabeledAddressesResponse;
    addAddresses(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLabeledAddressesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListLabeledAddressesResponse): ListLabeledAddressesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLabeledAddressesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLabeledAddressesResponse;
    static deserializeBinaryFromReader(message: ListLabeledAddressesResponse, reader: jspb.BinaryReader): ListLabeledAddressesResponse;
}

export namespace ListLabeledAddressesResponse {
    export type AsObject = {
        addressesList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.LabeledAddress.AsObject>,
    }
}

export class DeleteLabeledAddressRequest extends jspb.Message { 
    getLabeledAddressId(): string;
    setLabeledAddressId(value: string): DeleteLabeledAddressRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteLabeledAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteLabeledAddressRequest): DeleteLabeledAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteLabeledAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteLabeledAddressRequest;
    static deserializeBinaryFromReader(message: DeleteLabeledAddressRequest, reader: jspb.BinaryReader): DeleteLabeledAddressRequest;
}

export namespace DeleteLabeledAddressRequest {
    export type AsObject = {
        labeledAddressId: string,
    }
}

export class ReviewLabeledAddressProposalRequest extends jspb.Message { 
    getLabeledAddressId(): string;
    setLabeledAddressId(value: string): ReviewLabeledAddressProposalRequest;
    getApprove(): boolean;
    setApprove(value: boolean): ReviewLabeledAddressProposalRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReviewLabeledAddressProposalRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReviewLabeledAddressProposalRequest): ReviewLabeledAddressProposalRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReviewLabeledAddressProposalRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReviewLabeledAddressProposalRequest;
    static deserializeBinaryFromReader(message: ReviewLabeledAddressProposalRequest, reader: jspb.BinaryReader): ReviewLabeledAddressProposalRequest;
}

export namespace ReviewLabeledAddressProposalRequest {
    export type AsObject = {
        labeledAddressId: string,
        approve: boolean,
    }
}

export class CreateWhitelistRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateWhitelistRequest;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): CreateWhitelistRequest;
    clearAddressIdsList(): void;
    getAddressIdsList(): Array<string>;
    setAddressIdsList(value: Array<string>): CreateWhitelistRequest;
    addAddressIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateWhitelistRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateWhitelistRequest): CreateWhitelistRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateWhitelistRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateWhitelistRequest;
    static deserializeBinaryFromReader(message: CreateWhitelistRequest, reader: jspb.BinaryReader): CreateWhitelistRequest;
}

export namespace CreateWhitelistRequest {
    export type AsObject = {
        name: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        addressIdsList: Array<string>,
    }
}

export class CreateWhitelistResponse extends jspb.Message { 
    getWhitelistId(): string;
    setWhitelistId(value: string): CreateWhitelistResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateWhitelistResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateWhitelistResponse): CreateWhitelistResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateWhitelistResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateWhitelistResponse;
    static deserializeBinaryFromReader(message: CreateWhitelistResponse, reader: jspb.BinaryReader): CreateWhitelistResponse;
}

export namespace CreateWhitelistResponse {
    export type AsObject = {
        whitelistId: string,
    }
}

export class GetWhitelistRequest extends jspb.Message { 
    getWhitelistId(): string;
    setWhitelistId(value: string): GetWhitelistRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetWhitelistRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetWhitelistRequest): GetWhitelistRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetWhitelistRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetWhitelistRequest;
    static deserializeBinaryFromReader(message: GetWhitelistRequest, reader: jspb.BinaryReader): GetWhitelistRequest;
}

export namespace GetWhitelistRequest {
    export type AsObject = {
        whitelistId: string,
    }
}

export class ListWhitelistsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListWhitelistsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListWhitelistsRequest): ListWhitelistsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListWhitelistsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListWhitelistsRequest;
    static deserializeBinaryFromReader(message: ListWhitelistsRequest, reader: jspb.BinaryReader): ListWhitelistsRequest;
}

export namespace ListWhitelistsRequest {
    export type AsObject = {
    }
}

export class ListWhitelistsResponse extends jspb.Message { 
    clearWhitelistsList(): void;
    getWhitelistsList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist>;
    setWhitelistsList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist>): ListWhitelistsResponse;
    addWhitelists(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListWhitelistsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListWhitelistsResponse): ListWhitelistsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListWhitelistsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListWhitelistsResponse;
    static deserializeBinaryFromReader(message: ListWhitelistsResponse, reader: jspb.BinaryReader): ListWhitelistsResponse;
}

export namespace ListWhitelistsResponse {
    export type AsObject = {
        whitelistsList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Whitelist.AsObject>,
    }
}

export class UpdateWhitelistRequest extends jspb.Message { 
    getWhitelistId(): string;
    setWhitelistId(value: string): UpdateWhitelistRequest;
    getName(): string;
    setName(value: string): UpdateWhitelistRequest;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): UpdateWhitelistRequest;
    clearAddressIdsList(): void;
    getAddressIdsList(): Array<string>;
    setAddressIdsList(value: Array<string>): UpdateWhitelistRequest;
    addAddressIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateWhitelistRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateWhitelistRequest): UpdateWhitelistRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateWhitelistRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateWhitelistRequest;
    static deserializeBinaryFromReader(message: UpdateWhitelistRequest, reader: jspb.BinaryReader): UpdateWhitelistRequest;
}

export namespace UpdateWhitelistRequest {
    export type AsObject = {
        whitelistId: string,
        name: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        addressIdsList: Array<string>,
    }
}

export class UpdateWhitelistAddressesRequest extends jspb.Message { 
    getWhitelistId(): string;
    setWhitelistId(value: string): UpdateWhitelistAddressesRequest;
    clearAddressIdsList(): void;
    getAddressIdsList(): Array<string>;
    setAddressIdsList(value: Array<string>): UpdateWhitelistAddressesRequest;
    addAddressIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateWhitelistAddressesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateWhitelistAddressesRequest): UpdateWhitelistAddressesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateWhitelistAddressesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateWhitelistAddressesRequest;
    static deserializeBinaryFromReader(message: UpdateWhitelistAddressesRequest, reader: jspb.BinaryReader): UpdateWhitelistAddressesRequest;
}

export namespace UpdateWhitelistAddressesRequest {
    export type AsObject = {
        whitelistId: string,
        addressIdsList: Array<string>,
    }
}

export class DeleteWhitelistRequest extends jspb.Message { 
    getWhitelistId(): string;
    setWhitelistId(value: string): DeleteWhitelistRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteWhitelistRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteWhitelistRequest): DeleteWhitelistRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteWhitelistRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteWhitelistRequest;
    static deserializeBinaryFromReader(message: DeleteWhitelistRequest, reader: jspb.BinaryReader): DeleteWhitelistRequest;
}

export namespace DeleteWhitelistRequest {
    export type AsObject = {
        whitelistId: string,
    }
}

export class CreateTransferLimitRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateTransferLimitRequest;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): CreateTransferLimitRequest;
    clearTransferLimitsList(): void;
    getTransferLimitsList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTransferLimitEntry>;
    setTransferLimitsList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTransferLimitEntry>): CreateTransferLimitRequest;
    addTransferLimits(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTransferLimitEntry, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTransferLimitEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTransferLimitRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTransferLimitRequest): CreateTransferLimitRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTransferLimitRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTransferLimitRequest;
    static deserializeBinaryFromReader(message: CreateTransferLimitRequest, reader: jspb.BinaryReader): CreateTransferLimitRequest;
}

export namespace CreateTransferLimitRequest {
    export type AsObject = {
        name: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        transferLimitsList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTransferLimitEntry.AsObject>,
    }
}

export class CreateTransferLimitResponse extends jspb.Message { 
    getTransferLimitId(): string;
    setTransferLimitId(value: string): CreateTransferLimitResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTransferLimitResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTransferLimitResponse): CreateTransferLimitResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTransferLimitResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTransferLimitResponse;
    static deserializeBinaryFromReader(message: CreateTransferLimitResponse, reader: jspb.BinaryReader): CreateTransferLimitResponse;
}

export namespace CreateTransferLimitResponse {
    export type AsObject = {
        transferLimitId: string,
    }
}

export class GetTransferLimitRequest extends jspb.Message { 
    getTransferLimitId(): string;
    setTransferLimitId(value: string): GetTransferLimitRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTransferLimitRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTransferLimitRequest): GetTransferLimitRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTransferLimitRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTransferLimitRequest;
    static deserializeBinaryFromReader(message: GetTransferLimitRequest, reader: jspb.BinaryReader): GetTransferLimitRequest;
}

export namespace GetTransferLimitRequest {
    export type AsObject = {
        transferLimitId: string,
    }
}

export class ListTransferLimitsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTransferLimitsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTransferLimitsRequest): ListTransferLimitsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTransferLimitsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTransferLimitsRequest;
    static deserializeBinaryFromReader(message: ListTransferLimitsRequest, reader: jspb.BinaryReader): ListTransferLimitsRequest;
}

export namespace ListTransferLimitsRequest {
    export type AsObject = {
    }
}

export class ListTransferLimitsResponse extends jspb.Message { 
    clearTransferLimitsList(): void;
    getTransferLimitsList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit>;
    setTransferLimitsList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit>): ListTransferLimitsResponse;
    addTransferLimits(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTransferLimitsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListTransferLimitsResponse): ListTransferLimitsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTransferLimitsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTransferLimitsResponse;
    static deserializeBinaryFromReader(message: ListTransferLimitsResponse, reader: jspb.BinaryReader): ListTransferLimitsResponse;
}

export namespace ListTransferLimitsResponse {
    export type AsObject = {
        transferLimitsList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.TransferLimit.AsObject>,
    }
}

export class UpdateTransferLimitRequest extends jspb.Message { 
    getTransferLimitId(): string;
    setTransferLimitId(value: string): UpdateTransferLimitRequest;
    clearTransferLimitsList(): void;
    getTransferLimitsList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTransferLimitEntry>;
    setTransferLimitsList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTransferLimitEntry>): UpdateTransferLimitRequest;
    addTransferLimits(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTransferLimitEntry, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTransferLimitEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTransferLimitRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTransferLimitRequest): UpdateTransferLimitRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTransferLimitRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTransferLimitRequest;
    static deserializeBinaryFromReader(message: UpdateTransferLimitRequest, reader: jspb.BinaryReader): UpdateTransferLimitRequest;
}

export namespace UpdateTransferLimitRequest {
    export type AsObject = {
        transferLimitId: string,
        transferLimitsList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.RequestTransferLimitEntry.AsObject>,
    }
}

export class UpdateTransferLimitNameRequest extends jspb.Message { 
    getTransferLimitId(): string;
    setTransferLimitId(value: string): UpdateTransferLimitNameRequest;
    getName(): string;
    setName(value: string): UpdateTransferLimitNameRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTransferLimitNameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTransferLimitNameRequest): UpdateTransferLimitNameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTransferLimitNameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTransferLimitNameRequest;
    static deserializeBinaryFromReader(message: UpdateTransferLimitNameRequest, reader: jspb.BinaryReader): UpdateTransferLimitNameRequest;
}

export namespace UpdateTransferLimitNameRequest {
    export type AsObject = {
        transferLimitId: string,
        name: string,
    }
}

export class DeleteTransferLimitRequest extends jspb.Message { 
    getTransferLimitId(): string;
    setTransferLimitId(value: string): DeleteTransferLimitRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTransferLimitRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTransferLimitRequest): DeleteTransferLimitRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTransferLimitRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTransferLimitRequest;
    static deserializeBinaryFromReader(message: DeleteTransferLimitRequest, reader: jspb.BinaryReader): DeleteTransferLimitRequest;
}

export namespace DeleteTransferLimitRequest {
    export type AsObject = {
        transferLimitId: string,
    }
}

export class ReviewTransferLimitProposalRequest extends jspb.Message { 
    getTransferLimitId(): string;
    setTransferLimitId(value: string): ReviewTransferLimitProposalRequest;
    getApprove(): boolean;
    setApprove(value: boolean): ReviewTransferLimitProposalRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReviewTransferLimitProposalRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReviewTransferLimitProposalRequest): ReviewTransferLimitProposalRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReviewTransferLimitProposalRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReviewTransferLimitProposalRequest;
    static deserializeBinaryFromReader(message: ReviewTransferLimitProposalRequest, reader: jspb.BinaryReader): ReviewTransferLimitProposalRequest;
}

export namespace ReviewTransferLimitProposalRequest {
    export type AsObject = {
        transferLimitId: string,
        approve: boolean,
    }
}

export class CreatePolicyRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CreatePolicyRequest;
    getCoin(): gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin;
    setCoin(value: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin): CreatePolicyRequest;
    getType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.PolicyType;
    setType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.PolicyType): CreatePolicyRequest;
    getWhitelistId(): string;
    setWhitelistId(value: string): CreatePolicyRequest;
    getTransferLimitId(): string;
    setTransferLimitId(value: string): CreatePolicyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePolicyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePolicyRequest): CreatePolicyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePolicyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePolicyRequest;
    static deserializeBinaryFromReader(message: CreatePolicyRequest, reader: jspb.BinaryReader): CreatePolicyRequest;
}

export namespace CreatePolicyRequest {
    export type AsObject = {
        name: string,
        coin: gincoinc_global_v1_gincoincglobalv1_enum_pb.Coin,
        type: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.PolicyType,
        whitelistId: string,
        transferLimitId: string,
    }
}

export class CreatePolicyResponse extends jspb.Message { 
    getPolicyId(): string;
    setPolicyId(value: string): CreatePolicyResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePolicyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePolicyResponse): CreatePolicyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePolicyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePolicyResponse;
    static deserializeBinaryFromReader(message: CreatePolicyResponse, reader: jspb.BinaryReader): CreatePolicyResponse;
}

export namespace CreatePolicyResponse {
    export type AsObject = {
        policyId: string,
    }
}

export class GetPolicyRequest extends jspb.Message { 
    getPolicyId(): string;
    setPolicyId(value: string): GetPolicyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPolicyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPolicyRequest): GetPolicyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPolicyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPolicyRequest;
    static deserializeBinaryFromReader(message: GetPolicyRequest, reader: jspb.BinaryReader): GetPolicyRequest;
}

export namespace GetPolicyRequest {
    export type AsObject = {
        policyId: string,
    }
}

export class ListPoliciesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPoliciesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListPoliciesRequest): ListPoliciesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPoliciesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPoliciesRequest;
    static deserializeBinaryFromReader(message: ListPoliciesRequest, reader: jspb.BinaryReader): ListPoliciesRequest;
}

export namespace ListPoliciesRequest {
    export type AsObject = {
    }
}

export class IsDeletablePolicyRequest extends jspb.Message { 
    getPolicyId(): string;
    setPolicyId(value: string): IsDeletablePolicyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IsDeletablePolicyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: IsDeletablePolicyRequest): IsDeletablePolicyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IsDeletablePolicyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IsDeletablePolicyRequest;
    static deserializeBinaryFromReader(message: IsDeletablePolicyRequest, reader: jspb.BinaryReader): IsDeletablePolicyRequest;
}

export namespace IsDeletablePolicyRequest {
    export type AsObject = {
        policyId: string,
    }
}

export class IsDeletablePolicyResponse extends jspb.Message { 
    getIsDeletable(): boolean;
    setIsDeletable(value: boolean): IsDeletablePolicyResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IsDeletablePolicyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: IsDeletablePolicyResponse): IsDeletablePolicyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IsDeletablePolicyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IsDeletablePolicyResponse;
    static deserializeBinaryFromReader(message: IsDeletablePolicyResponse, reader: jspb.BinaryReader): IsDeletablePolicyResponse;
}

export namespace IsDeletablePolicyResponse {
    export type AsObject = {
        isDeletable: boolean,
    }
}

export class IsDeletableLabeledAddressRequest extends jspb.Message { 
    getLabeledAddressId(): string;
    setLabeledAddressId(value: string): IsDeletableLabeledAddressRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IsDeletableLabeledAddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: IsDeletableLabeledAddressRequest): IsDeletableLabeledAddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IsDeletableLabeledAddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IsDeletableLabeledAddressRequest;
    static deserializeBinaryFromReader(message: IsDeletableLabeledAddressRequest, reader: jspb.BinaryReader): IsDeletableLabeledAddressRequest;
}

export namespace IsDeletableLabeledAddressRequest {
    export type AsObject = {
        labeledAddressId: string,
    }
}

export class IsDeletableLabeledAddressResponse extends jspb.Message { 
    getIsDeletable(): boolean;
    setIsDeletable(value: boolean): IsDeletableLabeledAddressResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IsDeletableLabeledAddressResponse.AsObject;
    static toObject(includeInstance: boolean, msg: IsDeletableLabeledAddressResponse): IsDeletableLabeledAddressResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IsDeletableLabeledAddressResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IsDeletableLabeledAddressResponse;
    static deserializeBinaryFromReader(message: IsDeletableLabeledAddressResponse, reader: jspb.BinaryReader): IsDeletableLabeledAddressResponse;
}

export namespace IsDeletableLabeledAddressResponse {
    export type AsObject = {
        isDeletable: boolean,
    }
}

export class IsDeletableWhitelistRequest extends jspb.Message { 
    getWhitelistId(): string;
    setWhitelistId(value: string): IsDeletableWhitelistRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IsDeletableWhitelistRequest.AsObject;
    static toObject(includeInstance: boolean, msg: IsDeletableWhitelistRequest): IsDeletableWhitelistRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IsDeletableWhitelistRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IsDeletableWhitelistRequest;
    static deserializeBinaryFromReader(message: IsDeletableWhitelistRequest, reader: jspb.BinaryReader): IsDeletableWhitelistRequest;
}

export namespace IsDeletableWhitelistRequest {
    export type AsObject = {
        whitelistId: string,
    }
}

export class IsDeletableWhitelistResponse extends jspb.Message { 
    getIsDeletable(): boolean;
    setIsDeletable(value: boolean): IsDeletableWhitelistResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IsDeletableWhitelistResponse.AsObject;
    static toObject(includeInstance: boolean, msg: IsDeletableWhitelistResponse): IsDeletableWhitelistResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IsDeletableWhitelistResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IsDeletableWhitelistResponse;
    static deserializeBinaryFromReader(message: IsDeletableWhitelistResponse, reader: jspb.BinaryReader): IsDeletableWhitelistResponse;
}

export namespace IsDeletableWhitelistResponse {
    export type AsObject = {
        isDeletable: boolean,
    }
}

export class IsDeletableTransferLimitRequest extends jspb.Message { 
    getTransferLimitId(): string;
    setTransferLimitId(value: string): IsDeletableTransferLimitRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IsDeletableTransferLimitRequest.AsObject;
    static toObject(includeInstance: boolean, msg: IsDeletableTransferLimitRequest): IsDeletableTransferLimitRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IsDeletableTransferLimitRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IsDeletableTransferLimitRequest;
    static deserializeBinaryFromReader(message: IsDeletableTransferLimitRequest, reader: jspb.BinaryReader): IsDeletableTransferLimitRequest;
}

export namespace IsDeletableTransferLimitRequest {
    export type AsObject = {
        transferLimitId: string,
    }
}

export class IsDeletableTransferLimitResponse extends jspb.Message { 
    getIsDeletable(): boolean;
    setIsDeletable(value: boolean): IsDeletableTransferLimitResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IsDeletableTransferLimitResponse.AsObject;
    static toObject(includeInstance: boolean, msg: IsDeletableTransferLimitResponse): IsDeletableTransferLimitResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IsDeletableTransferLimitResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IsDeletableTransferLimitResponse;
    static deserializeBinaryFromReader(message: IsDeletableTransferLimitResponse, reader: jspb.BinaryReader): IsDeletableTransferLimitResponse;
}

export namespace IsDeletableTransferLimitResponse {
    export type AsObject = {
        isDeletable: boolean,
    }
}

export class ListPoliciesResponse extends jspb.Message { 
    clearPoliciesList(): void;
    getPoliciesList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy>;
    setPoliciesList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy>): ListPoliciesResponse;
    addPolicies(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPoliciesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListPoliciesResponse): ListPoliciesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPoliciesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPoliciesResponse;
    static deserializeBinaryFromReader(message: ListPoliciesResponse, reader: jspb.BinaryReader): ListPoliciesResponse;
}

export namespace ListPoliciesResponse {
    export type AsObject = {
        policiesList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.Policy.AsObject>,
    }
}

export class UpdatePolicyRequest extends jspb.Message { 
    getPolicyId(): string;
    setPolicyId(value: string): UpdatePolicyRequest;
    getName(): string;
    setName(value: string): UpdatePolicyRequest;
    getWhitelistId(): string;
    setWhitelistId(value: string): UpdatePolicyRequest;
    getTransferLimitId(): string;
    setTransferLimitId(value: string): UpdatePolicyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdatePolicyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdatePolicyRequest): UpdatePolicyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdatePolicyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdatePolicyRequest;
    static deserializeBinaryFromReader(message: UpdatePolicyRequest, reader: jspb.BinaryReader): UpdatePolicyRequest;
}

export namespace UpdatePolicyRequest {
    export type AsObject = {
        policyId: string,
        name: string,
        whitelistId: string,
        transferLimitId: string,
    }
}

export class DeletePolicyRequest extends jspb.Message { 
    getPolicyId(): string;
    setPolicyId(value: string): DeletePolicyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeletePolicyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeletePolicyRequest): DeletePolicyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeletePolicyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeletePolicyRequest;
    static deserializeBinaryFromReader(message: DeletePolicyRequest, reader: jspb.BinaryReader): DeletePolicyRequest;
}

export namespace DeletePolicyRequest {
    export type AsObject = {
        policyId: string,
    }
}

export class ReviewPolicyProposalRequest extends jspb.Message { 
    getPolicyId(): string;
    setPolicyId(value: string): ReviewPolicyProposalRequest;
    getApprove(): boolean;
    setApprove(value: boolean): ReviewPolicyProposalRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReviewPolicyProposalRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReviewPolicyProposalRequest): ReviewPolicyProposalRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReviewPolicyProposalRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReviewPolicyProposalRequest;
    static deserializeBinaryFromReader(message: ReviewPolicyProposalRequest, reader: jspb.BinaryReader): ReviewPolicyProposalRequest;
}

export namespace ReviewPolicyProposalRequest {
    export type AsObject = {
        policyId: string,
        approve: boolean,
    }
}

export class ListSubstrateChildAddressesRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): ListSubstrateChildAddressesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSubstrateChildAddressesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSubstrateChildAddressesRequest): ListSubstrateChildAddressesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSubstrateChildAddressesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSubstrateChildAddressesRequest;
    static deserializeBinaryFromReader(message: ListSubstrateChildAddressesRequest, reader: jspb.BinaryReader): ListSubstrateChildAddressesRequest;
}

export namespace ListSubstrateChildAddressesRequest {
    export type AsObject = {
        walletId: string,
    }
}

export class ListSubstrateChildAddressesResponse extends jspb.Message { 
    clearSubstrateChildAddressesList(): void;
    getSubstrateChildAddressesList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SubstrateChildAddress>;
    setSubstrateChildAddressesList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SubstrateChildAddress>): ListSubstrateChildAddressesResponse;
    addSubstrateChildAddresses(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SubstrateChildAddress, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SubstrateChildAddress;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSubstrateChildAddressesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSubstrateChildAddressesResponse): ListSubstrateChildAddressesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSubstrateChildAddressesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSubstrateChildAddressesResponse;
    static deserializeBinaryFromReader(message: ListSubstrateChildAddressesResponse, reader: jspb.BinaryReader): ListSubstrateChildAddressesResponse;
}

export namespace ListSubstrateChildAddressesResponse {
    export type AsObject = {
        substrateChildAddressesList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SubstrateChildAddress.AsObject>,
    }
}

export class ListSymbolChildAddressesRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): ListSymbolChildAddressesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSymbolChildAddressesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSymbolChildAddressesRequest): ListSymbolChildAddressesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSymbolChildAddressesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSymbolChildAddressesRequest;
    static deserializeBinaryFromReader(message: ListSymbolChildAddressesRequest, reader: jspb.BinaryReader): ListSymbolChildAddressesRequest;
}

export namespace ListSymbolChildAddressesRequest {
    export type AsObject = {
        walletId: string,
    }
}

export class ListSymbolChildAddressesResponse extends jspb.Message { 
    clearSymbolChildAddressesList(): void;
    getSymbolChildAddressesList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SymbolChildAddress>;
    setSymbolChildAddressesList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SymbolChildAddress>): ListSymbolChildAddressesResponse;
    addSymbolChildAddresses(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SymbolChildAddress, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SymbolChildAddress;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSymbolChildAddressesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSymbolChildAddressesResponse): ListSymbolChildAddressesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSymbolChildAddressesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSymbolChildAddressesResponse;
    static deserializeBinaryFromReader(message: ListSymbolChildAddressesResponse, reader: jspb.BinaryReader): ListSymbolChildAddressesResponse;
}

export namespace ListSymbolChildAddressesResponse {
    export type AsObject = {
        symbolChildAddressesList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.SymbolChildAddress.AsObject>,
    }
}

export class ListIOSTChildAccountsRequest extends jspb.Message { 
    getWalletId(): string;
    setWalletId(value: string): ListIOSTChildAccountsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListIOSTChildAccountsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListIOSTChildAccountsRequest): ListIOSTChildAccountsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListIOSTChildAccountsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListIOSTChildAccountsRequest;
    static deserializeBinaryFromReader(message: ListIOSTChildAccountsRequest, reader: jspb.BinaryReader): ListIOSTChildAccountsRequest;
}

export namespace ListIOSTChildAccountsRequest {
    export type AsObject = {
        walletId: string,
    }
}

export class ListIOSTChildAccountsResponse extends jspb.Message { 
    clearIostChildAccountsList(): void;
    getIostChildAccountsList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.IOSTChildAccount>;
    setIostChildAccountsList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.IOSTChildAccount>): ListIOSTChildAccountsResponse;
    addIostChildAccounts(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.IOSTChildAccount, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.IOSTChildAccount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListIOSTChildAccountsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListIOSTChildAccountsResponse): ListIOSTChildAccountsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListIOSTChildAccountsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListIOSTChildAccountsResponse;
    static deserializeBinaryFromReader(message: ListIOSTChildAccountsResponse, reader: jspb.BinaryReader): ListIOSTChildAccountsResponse;
}

export namespace ListIOSTChildAccountsResponse {
    export type AsObject = {
        iostChildAccountsList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.IOSTChildAccount.AsObject>,
    }
}

export class DownloadResourceRequest extends jspb.Message { 
    getDownloadResourceType(): gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.DownloadResourceType;
    setDownloadResourceType(value: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.DownloadResourceType): DownloadResourceRequest;
    getWatchOnly(): boolean;
    setWatchOnly(value: boolean): DownloadResourceRequest;
    getWalletId(): string;
    setWalletId(value: string): DownloadResourceRequest;

    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): DownloadResourceRequest;

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): DownloadResourceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DownloadResourceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DownloadResourceRequest): DownloadResourceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DownloadResourceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DownloadResourceRequest;
    static deserializeBinaryFromReader(message: DownloadResourceRequest, reader: jspb.BinaryReader): DownloadResourceRequest;
}

export namespace DownloadResourceRequest {
    export type AsObject = {
        downloadResourceType: gincoinc_adamant_global_v1_adamantglobalv1_enum_pb.DownloadResourceType,
        watchOnly: boolean,
        walletId: string,
        startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class CreateIOSTAccountRequest extends jspb.Message { 
    getAccountName(): string;
    setAccountName(value: string): CreateIOSTAccountRequest;
    getWalletId(): string;
    setWalletId(value: string): CreateIOSTAccountRequest;
    getAccountId(): string;
    setAccountId(value: string): CreateIOSTAccountRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateIOSTAccountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateIOSTAccountRequest): CreateIOSTAccountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateIOSTAccountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateIOSTAccountRequest;
    static deserializeBinaryFromReader(message: CreateIOSTAccountRequest, reader: jspb.BinaryReader): CreateIOSTAccountRequest;
}

export namespace CreateIOSTAccountRequest {
    export type AsObject = {
        accountName: string,
        walletId: string,
        accountId: string,
    }
}

export class CreateIOSTAccountResponse extends jspb.Message { 
    getAddressId(): string;
    setAddressId(value: string): CreateIOSTAccountResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateIOSTAccountResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateIOSTAccountResponse): CreateIOSTAccountResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateIOSTAccountResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateIOSTAccountResponse;
    static deserializeBinaryFromReader(message: CreateIOSTAccountResponse, reader: jspb.BinaryReader): CreateIOSTAccountResponse;
}

export namespace CreateIOSTAccountResponse {
    export type AsObject = {
        addressId: string,
    }
}

export class ExistsIOSTAccountRequest extends jspb.Message { 
    getAccountName(): string;
    setAccountName(value: string): ExistsIOSTAccountRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExistsIOSTAccountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExistsIOSTAccountRequest): ExistsIOSTAccountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExistsIOSTAccountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExistsIOSTAccountRequest;
    static deserializeBinaryFromReader(message: ExistsIOSTAccountRequest, reader: jspb.BinaryReader): ExistsIOSTAccountRequest;
}

export namespace ExistsIOSTAccountRequest {
    export type AsObject = {
        accountName: string,
    }
}

export class ExistsIOSTAccountResponse extends jspb.Message { 
    getExists(): boolean;
    setExists(value: boolean): ExistsIOSTAccountResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExistsIOSTAccountResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ExistsIOSTAccountResponse): ExistsIOSTAccountResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExistsIOSTAccountResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExistsIOSTAccountResponse;
    static deserializeBinaryFromReader(message: ExistsIOSTAccountResponse, reader: jspb.BinaryReader): ExistsIOSTAccountResponse;
}

export namespace ExistsIOSTAccountResponse {
    export type AsObject = {
        exists: boolean,
    }
}

export class GetIOSTCallerAccountRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetIOSTCallerAccountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetIOSTCallerAccountRequest): GetIOSTCallerAccountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetIOSTCallerAccountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetIOSTCallerAccountRequest;
    static deserializeBinaryFromReader(message: GetIOSTCallerAccountRequest, reader: jspb.BinaryReader): GetIOSTCallerAccountRequest;
}

export namespace GetIOSTCallerAccountRequest {
    export type AsObject = {
    }
}

export class ListCallersRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCallersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListCallersRequest): ListCallersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCallersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCallersRequest;
    static deserializeBinaryFromReader(message: ListCallersRequest, reader: jspb.BinaryReader): ListCallersRequest;
}

export namespace ListCallersRequest {
    export type AsObject = {
    }
}

export class ListCallersResponse extends jspb.Message { 
    clearCallerAddressesList(): void;
    getCallerAddressesList(): Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CallerAddress>;
    setCallerAddressesList(value: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CallerAddress>): ListCallersResponse;
    addCallerAddresses(value?: gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CallerAddress, index?: number): gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CallerAddress;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListCallersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListCallersResponse): ListCallersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListCallersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListCallersResponse;
    static deserializeBinaryFromReader(message: ListCallersResponse, reader: jspb.BinaryReader): ListCallersResponse;
}

export namespace ListCallersResponse {
    export type AsObject = {
        callerAddressesList: Array<gincoinc_adamant_global_v1_adamantglobalv1_model_pb.CallerAddress.AsObject>,
    }
}
