// source: gincoinc/adamant/global/v1/adamantglobalv1/audit_logger.proto
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
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var gincoinc_adamant_global_v1_adamantglobalv1_enum_pb = require('../../../../../gincoinc/adamant/global/v1/adamantglobalv1/enum_pb.js');
goog.object.extend(proto, gincoinc_adamant_global_v1_adamantglobalv1_enum_pb);
var gincoinc_global_v1_gincoincglobalv1_enum_pb = require('../../../../../gincoinc/global/v1/gincoincglobalv1/enum_pb.js');
goog.object.extend(proto, gincoinc_global_v1_gincoincglobalv1_enum_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.adamant.global.v1.AuditLog', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.adamant.global.v1.AuditLog = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.adamant.global.v1.AuditLog.repeatedFields_, null);
};
goog.inherits(proto.adamant.global.v1.AuditLog, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.global.v1.AuditLog.displayName = 'proto.adamant.global.v1.AuditLog';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.adamant.global.v1.AuditLog.repeatedFields_ = [36,37,38,31];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.adamant.global.v1.AuditLog.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.global.v1.AuditLog.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.global.v1.AuditLog} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.AuditLog.toObject = function(includeInstance, msg) {
  var f, obj = {
    auditLogId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    auditLogGroup: jspb.Message.getFieldWithDefault(msg, 2, 0),
    auditLogType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    accountId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    accountName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    targetAccountId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    targetAccountName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    email: jspb.Message.getFieldWithDefault(msg, 8, ""),
    roleType: jspb.Message.getFieldWithDefault(msg, 9, 0),
    serviceAccountId: jspb.Message.getFieldWithDefault(msg, 10, ""),
    serviceAccountName: jspb.Message.getFieldWithDefault(msg, 11, ""),
    serviceAccountKeyId: jspb.Message.getFieldWithDefault(msg, 12, ""),
    walletId: jspb.Message.getFieldWithDefault(msg, 13, ""),
    walletName: jspb.Message.getFieldWithDefault(msg, 14, ""),
    walletGroupId: jspb.Message.getFieldWithDefault(msg, 34, ""),
    walletGroupName: jspb.Message.getFieldWithDefault(msg, 35, ""),
    walletNamesList: (f = jspb.Message.getRepeatedField(msg, 36)) == null ? undefined : f,
    transactionId: jspb.Message.getFieldWithDefault(msg, 15, ""),
    coinType: jspb.Message.getFieldWithDefault(msg, 16, 0),
    stringValue: jspb.Message.getFieldWithDefault(msg, 17, ""),
    txId: jspb.Message.getFieldWithDefault(msg, 18, ""),
    policyId: jspb.Message.getFieldWithDefault(msg, 19, ""),
    policyName: jspb.Message.getFieldWithDefault(msg, 20, ""),
    labeledAddressId: jspb.Message.getFieldWithDefault(msg, 21, ""),
    address: jspb.Message.getFieldWithDefault(msg, 22, ""),
    addressName: jspb.Message.getFieldWithDefault(msg, 23, ""),
    transferLimitId: jspb.Message.getFieldWithDefault(msg, 24, ""),
    transferLimitName: jspb.Message.getFieldWithDefault(msg, 25, ""),
    transferOneTimeLimit: jspb.Message.getFieldWithDefault(msg, 26, 0),
    transferHourlyLimit: jspb.Message.getFieldWithDefault(msg, 27, 0),
    transferDailyLimit: jspb.Message.getFieldWithDefault(msg, 28, 0),
    whitelistId: jspb.Message.getFieldWithDefault(msg, 29, ""),
    whitelistName: jspb.Message.getFieldWithDefault(msg, 30, ""),
    oldValidatorsList: (f = jspb.Message.getRepeatedField(msg, 37)) == null ? undefined : f,
    newValidatorsList: (f = jspb.Message.getRepeatedField(msg, 38)) == null ? undefined : f,
    whitelistAddressesList: (f = jspb.Message.getRepeatedField(msg, 31)) == null ? undefined : f,
    eventTime: (f = msg.getEventTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.adamant.global.v1.AuditLog}
 */
proto.adamant.global.v1.AuditLog.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.global.v1.AuditLog;
  return proto.adamant.global.v1.AuditLog.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.global.v1.AuditLog} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.global.v1.AuditLog}
 */
proto.adamant.global.v1.AuditLog.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuditLogId(value);
      break;
    case 2:
      var value = /** @type {!proto.adamant.global.v1.AuditLogGroup} */ (reader.readEnum());
      msg.setAuditLogGroup(value);
      break;
    case 3:
      var value = /** @type {!proto.adamant.global.v1.AuditLogType} */ (reader.readEnum());
      msg.setAuditLogType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetAccountId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetAccountName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 9:
      var value = /** @type {!proto.adamant.global.v1.RoleType} */ (reader.readEnum());
      msg.setRoleType(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceAccountId(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceAccountName(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceAccountKeyId(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletName(value);
      break;
    case 34:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletGroupId(value);
      break;
    case 35:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletGroupName(value);
      break;
    case 36:
      var value = /** @type {string} */ (reader.readString());
      msg.addWalletNames(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionId(value);
      break;
    case 16:
      var value = /** @type {!proto.gincoinc.global.v1.Coin} */ (reader.readEnum());
      msg.setCoinType(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringValue(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxId(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setPolicyId(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setPolicyName(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabeledAddressId(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddressName(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransferLimitId(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransferLimitName(value);
      break;
    case 26:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTransferOneTimeLimit(value);
      break;
    case 27:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTransferHourlyLimit(value);
      break;
    case 28:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTransferDailyLimit(value);
      break;
    case 29:
      var value = /** @type {string} */ (reader.readString());
      msg.setWhitelistId(value);
      break;
    case 30:
      var value = /** @type {string} */ (reader.readString());
      msg.setWhitelistName(value);
      break;
    case 37:
      var value = /** @type {string} */ (reader.readString());
      msg.addOldValidators(value);
      break;
    case 38:
      var value = /** @type {string} */ (reader.readString());
      msg.addNewValidators(value);
      break;
    case 31:
      var value = /** @type {string} */ (reader.readString());
      msg.addWhitelistAddresses(value);
      break;
    case 32:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEventTime(value);
      break;
    case 33:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.adamant.global.v1.AuditLog.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.global.v1.AuditLog.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.global.v1.AuditLog} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.global.v1.AuditLog.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuditLogId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAuditLogGroup();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getAuditLogType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAccountName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTargetAccountId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTargetAccountName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getRoleType();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getServiceAccountId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getServiceAccountName();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getServiceAccountKeyId();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getWalletName();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getWalletGroupId();
  if (f.length > 0) {
    writer.writeString(
      34,
      f
    );
  }
  f = message.getWalletGroupName();
  if (f.length > 0) {
    writer.writeString(
      35,
      f
    );
  }
  f = message.getWalletNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      36,
      f
    );
  }
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getCoinType();
  if (f !== 0.0) {
    writer.writeEnum(
      16,
      f
    );
  }
  f = message.getStringValue();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getTxId();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getPolicyId();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getPolicyName();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getLabeledAddressId();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getAddressName();
  if (f.length > 0) {
    writer.writeString(
      23,
      f
    );
  }
  f = message.getTransferLimitId();
  if (f.length > 0) {
    writer.writeString(
      24,
      f
    );
  }
  f = message.getTransferLimitName();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getTransferOneTimeLimit();
  if (f !== 0) {
    writer.writeInt64(
      26,
      f
    );
  }
  f = message.getTransferHourlyLimit();
  if (f !== 0) {
    writer.writeInt64(
      27,
      f
    );
  }
  f = message.getTransferDailyLimit();
  if (f !== 0) {
    writer.writeInt64(
      28,
      f
    );
  }
  f = message.getWhitelistId();
  if (f.length > 0) {
    writer.writeString(
      29,
      f
    );
  }
  f = message.getWhitelistName();
  if (f.length > 0) {
    writer.writeString(
      30,
      f
    );
  }
  f = message.getOldValidatorsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      37,
      f
    );
  }
  f = message.getNewValidatorsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      38,
      f
    );
  }
  f = message.getWhitelistAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      31,
      f
    );
  }
  f = message.getEventTime();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string audit_log_id = 1;
 * @return {string}
 */
proto.adamant.global.v1.AuditLog.prototype.getAuditLogId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setAuditLogId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AuditLogGroup audit_log_group = 2;
 * @return {!proto.adamant.global.v1.AuditLogGroup}
 */
proto.adamant.global.v1.AuditLog.prototype.getAuditLogGroup = function() {
  return /** @type {!proto.adamant.global.v1.AuditLogGroup} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.adamant.global.v1.AuditLogGroup} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setAuditLogGroup = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional AuditLogType audit_log_type = 3;
 * @return {!proto.adamant.global.v1.AuditLogType}
 */
proto.adamant.global.v1.AuditLog.prototype.getAuditLogType = function() {
  return /** @type {!proto.adamant.global.v1.AuditLogType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.adamant.global.v1.AuditLogType} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setAuditLogType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string account_id = 4;
 * @return {string}
 */
proto.adamant.global.v1.AuditLog.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string account_name = 5;
 * @return {string}
 */
proto.adamant.global.v1.AuditLog.prototype.getAccountName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setAccountName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string target_account_id = 6;
 * @return {string}
 */
proto.adamant.global.v1.AuditLog.prototype.getTargetAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setTargetAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string target_account_name = 7;
 * @return {string}
 */
proto.adamant.global.v1.AuditLog.prototype.getTargetAccountName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setTargetAccountName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string email = 8;
 * @return {string}
 */
proto.adamant.global.v1.AuditLog.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional RoleType role_type = 9;
 * @return {!proto.adamant.global.v1.RoleType}
 */
proto.adamant.global.v1.AuditLog.prototype.getRoleType = function() {
  return /** @type {!proto.adamant.global.v1.RoleType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.adamant.global.v1.RoleType} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setRoleType = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional string service_account_id = 10;
 * @return {string}
 */
proto.adamant.global.v1.AuditLog.prototype.getServiceAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setServiceAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string service_account_name = 11;
 * @return {string}
 */
proto.adamant.global.v1.AuditLog.prototype.getServiceAccountName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setServiceAccountName = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string service_account_key_id = 12;
 * @return {string}
 */
proto.adamant.global.v1.AuditLog.prototype.getServiceAccountKeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setServiceAccountKeyId = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string wallet_id = 13;
 * @return {string}
 */
proto.adamant.global.v1.AuditLog.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setWalletId = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string wallet_name = 14;
 * @return {string}
 */
proto.adamant.global.v1.AuditLog.prototype.getWalletName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setWalletName = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string wallet_group_id = 34;
 * @return {string}
 */
proto.adamant.global.v1.AuditLog.prototype.getWalletGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 34, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setWalletGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 34, value);
};


/**
 * optional string wallet_group_name = 35;
 * @return {string}
 */
proto.adamant.global.v1.AuditLog.prototype.getWalletGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 35, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setWalletGroupName = function(value) {
  return jspb.Message.setProto3StringField(this, 35, value);
};


/**
 * repeated string wallet_names = 36;
 * @return {!Array<string>}
 */
proto.adamant.global.v1.AuditLog.prototype.getWalletNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 36));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setWalletNamesList = function(value) {
  return jspb.Message.setField(this, 36, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.addWalletNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 36, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.clearWalletNamesList = function() {
  return this.setWalletNamesList([]);
};


/**
 * optional string transaction_id = 15;
 * @return {string}
 */
proto.adamant.global.v1.AuditLog.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional gincoinc.global.v1.Coin coin_type = 16;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.global.v1.AuditLog.prototype.getCoinType = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {!proto.gincoinc.global.v1.Coin} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setCoinType = function(value) {
  return jspb.Message.setProto3EnumField(this, 16, value);
};


/**
 * optional string string_value = 17;
 * @return {string}
 */
proto.adamant.global.v1.AuditLog.prototype.getStringValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setStringValue = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string tx_id = 18;
 * @return {string}
 */
proto.adamant.global.v1.AuditLog.prototype.getTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setTxId = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string policy_id = 19;
 * @return {string}
 */
proto.adamant.global.v1.AuditLog.prototype.getPolicyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setPolicyId = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional string policy_name = 20;
 * @return {string}
 */
proto.adamant.global.v1.AuditLog.prototype.getPolicyName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setPolicyName = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional string labeled_address_id = 21;
 * @return {string}
 */
proto.adamant.global.v1.AuditLog.prototype.getLabeledAddressId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setLabeledAddressId = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string address = 22;
 * @return {string}
 */
proto.adamant.global.v1.AuditLog.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional string address_name = 23;
 * @return {string}
 */
proto.adamant.global.v1.AuditLog.prototype.getAddressName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setAddressName = function(value) {
  return jspb.Message.setProto3StringField(this, 23, value);
};


/**
 * optional string transfer_limit_id = 24;
 * @return {string}
 */
proto.adamant.global.v1.AuditLog.prototype.getTransferLimitId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setTransferLimitId = function(value) {
  return jspb.Message.setProto3StringField(this, 24, value);
};


/**
 * optional string transfer_limit_name = 25;
 * @return {string}
 */
proto.adamant.global.v1.AuditLog.prototype.getTransferLimitName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setTransferLimitName = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * optional int64 transfer_one_time_limit = 26;
 * @return {number}
 */
proto.adamant.global.v1.AuditLog.prototype.getTransferOneTimeLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 26, 0));
};


/**
 * @param {number} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setTransferOneTimeLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 26, value);
};


/**
 * optional int64 transfer_hourly_limit = 27;
 * @return {number}
 */
proto.adamant.global.v1.AuditLog.prototype.getTransferHourlyLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 27, 0));
};


/**
 * @param {number} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setTransferHourlyLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 27, value);
};


/**
 * optional int64 transfer_daily_limit = 28;
 * @return {number}
 */
proto.adamant.global.v1.AuditLog.prototype.getTransferDailyLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/**
 * @param {number} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setTransferDailyLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 28, value);
};


/**
 * optional string whitelist_id = 29;
 * @return {string}
 */
proto.adamant.global.v1.AuditLog.prototype.getWhitelistId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 29, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setWhitelistId = function(value) {
  return jspb.Message.setProto3StringField(this, 29, value);
};


/**
 * optional string whitelist_name = 30;
 * @return {string}
 */
proto.adamant.global.v1.AuditLog.prototype.getWhitelistName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 30, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setWhitelistName = function(value) {
  return jspb.Message.setProto3StringField(this, 30, value);
};


/**
 * repeated string old_validators = 37;
 * @return {!Array<string>}
 */
proto.adamant.global.v1.AuditLog.prototype.getOldValidatorsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 37));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setOldValidatorsList = function(value) {
  return jspb.Message.setField(this, 37, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.addOldValidators = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 37, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.clearOldValidatorsList = function() {
  return this.setOldValidatorsList([]);
};


/**
 * repeated string new_validators = 38;
 * @return {!Array<string>}
 */
proto.adamant.global.v1.AuditLog.prototype.getNewValidatorsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 38));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setNewValidatorsList = function(value) {
  return jspb.Message.setField(this, 38, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.addNewValidators = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 38, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.clearNewValidatorsList = function() {
  return this.setNewValidatorsList([]);
};


/**
 * repeated string whitelist_addresses = 31;
 * @return {!Array<string>}
 */
proto.adamant.global.v1.AuditLog.prototype.getWhitelistAddressesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 31));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.setWhitelistAddressesList = function(value) {
  return jspb.Message.setField(this, 31, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.addWhitelistAddresses = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 31, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.clearWhitelistAddressesList = function() {
  return this.setWhitelistAddressesList([]);
};


/**
 * optional google.protobuf.Timestamp event_time = 32;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.AuditLog.prototype.getEventTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 32));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
*/
proto.adamant.global.v1.AuditLog.prototype.setEventTime = function(value) {
  return jspb.Message.setWrapperField(this, 32, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.clearEventTime = function() {
  return this.setEventTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.AuditLog.prototype.hasEventTime = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional google.protobuf.Timestamp create_time = 33;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.global.v1.AuditLog.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 33));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.adamant.global.v1.AuditLog} returns this
*/
proto.adamant.global.v1.AuditLog.prototype.setCreateTime = function(value) {
  return jspb.Message.setWrapperField(this, 33, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.adamant.global.v1.AuditLog} returns this
 */
proto.adamant.global.v1.AuditLog.prototype.clearCreateTime = function() {
  return this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.global.v1.AuditLog.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 33) != null;
};


goog.object.extend(exports, proto.adamant.global.v1);
