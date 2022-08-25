// source: gincoinc/adamant/teller/v1/adamanttellerv1/event.proto
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

var gincoinc_global_v1_gincoincglobalv1_enum_pb = require('../../../../../gincoinc/global/v1/gincoincglobalv1/enum_pb.js');
goog.object.extend(proto, gincoinc_global_v1_gincoincglobalv1_enum_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.adamant.teller.v1.TransferUpdateEvent', null, global);
goog.exportSymbol('proto.adamant.teller.v1.TransferUpdated', null, global);
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
proto.adamant.teller.v1.TransferUpdated = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.teller.v1.TransferUpdated, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.teller.v1.TransferUpdated.displayName = 'proto.adamant.teller.v1.TransferUpdated';
}
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
proto.adamant.teller.v1.TransferUpdateEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.teller.v1.TransferUpdateEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.teller.v1.TransferUpdateEvent.displayName = 'proto.adamant.teller.v1.TransferUpdateEvent';
}



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
proto.adamant.teller.v1.TransferUpdated.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.teller.v1.TransferUpdated.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.teller.v1.TransferUpdated} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.teller.v1.TransferUpdated.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    transferId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    coin: jspb.Message.getFieldWithDefault(msg, 3, 0),
    txId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    txIndex: jspb.Message.getFieldWithDefault(msg, 5, 0),
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    stringValue: jspb.Message.getFieldWithDefault(msg, 7, ""),
    jpyRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    address: jspb.Message.getFieldWithDefault(msg, 9, ""),
    destinationTag: jspb.Message.getFieldWithDefault(msg, 10, 0),
    memoId: jspb.Message.getFieldWithDefault(msg, 14, 0),
    message: jspb.Message.getFieldWithDefault(msg, 21, ""),
    state: jspb.Message.getFieldWithDefault(msg, 11, 0),
    result: jspb.Message.getFieldWithDefault(msg, 12, 0),
    transferType: jspb.Message.getFieldWithDefault(msg, 13, 0),
    from: jspb.Message.getFieldWithDefault(msg, 15, ""),
    to: jspb.Message.getFieldWithDefault(msg, 16, ""),
    time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    eventId: jspb.Message.getFieldWithDefault(msg, 18, ""),
    fee: jspb.Message.getFloatingPointFieldWithDefault(msg, 19, 0.0),
    stringFee: jspb.Message.getFieldWithDefault(msg, 20, "")
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
 * @return {!proto.adamant.teller.v1.TransferUpdated}
 */
proto.adamant.teller.v1.TransferUpdated.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.teller.v1.TransferUpdated;
  return proto.adamant.teller.v1.TransferUpdated.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.teller.v1.TransferUpdated} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.teller.v1.TransferUpdated}
 */
proto.adamant.teller.v1.TransferUpdated.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransferId(value);
      break;
    case 3:
      var value = /** @type {!proto.gincoinc.global.v1.Coin} */ (reader.readEnum());
      msg.setCoin(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTxIndex(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringValue(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setJpyRate(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDestinationTag(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMemoId(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 11:
      var value = /** @type {!proto.gincoinc.global.v1.TransactionState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 12:
      var value = /** @type {!proto.gincoinc.global.v1.TransactionResult} */ (reader.readEnum());
      msg.setResult(value);
      break;
    case 13:
      var value = /** @type {!proto.gincoinc.global.v1.TransferType} */ (reader.readEnum());
      msg.setTransferType(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrom(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setTo(value);
      break;
    case 17:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventId(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFee(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringFee(value);
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
proto.adamant.teller.v1.TransferUpdated.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.teller.v1.TransferUpdated.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.teller.v1.TransferUpdated} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.teller.v1.TransferUpdated.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTransferId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCoin();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getTxId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTxIndex();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getStringValue();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getJpyRate();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getDestinationTag();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getMemoId();
  if (f !== 0) {
    writer.writeUint64(
      14,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getTransferType();
  if (f !== 0.0) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = message.getFrom();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getTo();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEventId();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getFee();
  if (f !== 0.0) {
    writer.writeDouble(
      19,
      f
    );
  }
  f = message.getStringFee();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.teller.v1.TransferUpdated.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.teller.v1.TransferUpdated} returns this
 */
proto.adamant.teller.v1.TransferUpdated.prototype.setWalletId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string transfer_id = 2;
 * @return {string}
 */
proto.adamant.teller.v1.TransferUpdated.prototype.getTransferId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.teller.v1.TransferUpdated} returns this
 */
proto.adamant.teller.v1.TransferUpdated.prototype.setTransferId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional gincoinc.global.v1.Coin coin = 3;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.teller.v1.TransferUpdated.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.gincoinc.global.v1.Coin} value
 * @return {!proto.adamant.teller.v1.TransferUpdated} returns this
 */
proto.adamant.teller.v1.TransferUpdated.prototype.setCoin = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string tx_id = 4;
 * @return {string}
 */
proto.adamant.teller.v1.TransferUpdated.prototype.getTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.teller.v1.TransferUpdated} returns this
 */
proto.adamant.teller.v1.TransferUpdated.prototype.setTxId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 tx_index = 5;
 * @return {number}
 */
proto.adamant.teller.v1.TransferUpdated.prototype.getTxIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.adamant.teller.v1.TransferUpdated} returns this
 */
proto.adamant.teller.v1.TransferUpdated.prototype.setTxIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional double value = 6;
 * @return {number}
 */
proto.adamant.teller.v1.TransferUpdated.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.adamant.teller.v1.TransferUpdated} returns this
 */
proto.adamant.teller.v1.TransferUpdated.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional string string_value = 7;
 * @return {string}
 */
proto.adamant.teller.v1.TransferUpdated.prototype.getStringValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.teller.v1.TransferUpdated} returns this
 */
proto.adamant.teller.v1.TransferUpdated.prototype.setStringValue = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional double jpy_rate = 8;
 * @return {number}
 */
proto.adamant.teller.v1.TransferUpdated.prototype.getJpyRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.adamant.teller.v1.TransferUpdated} returns this
 */
proto.adamant.teller.v1.TransferUpdated.prototype.setJpyRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional string address = 9;
 * @return {string}
 */
proto.adamant.teller.v1.TransferUpdated.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.teller.v1.TransferUpdated} returns this
 */
proto.adamant.teller.v1.TransferUpdated.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional uint32 destination_tag = 10;
 * @return {number}
 */
proto.adamant.teller.v1.TransferUpdated.prototype.getDestinationTag = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.adamant.teller.v1.TransferUpdated} returns this
 */
proto.adamant.teller.v1.TransferUpdated.prototype.setDestinationTag = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint64 memo_id = 14;
 * @return {number}
 */
proto.adamant.teller.v1.TransferUpdated.prototype.getMemoId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.adamant.teller.v1.TransferUpdated} returns this
 */
proto.adamant.teller.v1.TransferUpdated.prototype.setMemoId = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional string message = 21;
 * @return {string}
 */
proto.adamant.teller.v1.TransferUpdated.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.teller.v1.TransferUpdated} returns this
 */
proto.adamant.teller.v1.TransferUpdated.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional gincoinc.global.v1.TransactionState state = 11;
 * @return {!proto.gincoinc.global.v1.TransactionState}
 */
proto.adamant.teller.v1.TransferUpdated.prototype.getState = function() {
  return /** @type {!proto.gincoinc.global.v1.TransactionState} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.gincoinc.global.v1.TransactionState} value
 * @return {!proto.adamant.teller.v1.TransferUpdated} returns this
 */
proto.adamant.teller.v1.TransferUpdated.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional gincoinc.global.v1.TransactionResult result = 12;
 * @return {!proto.gincoinc.global.v1.TransactionResult}
 */
proto.adamant.teller.v1.TransferUpdated.prototype.getResult = function() {
  return /** @type {!proto.gincoinc.global.v1.TransactionResult} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.gincoinc.global.v1.TransactionResult} value
 * @return {!proto.adamant.teller.v1.TransferUpdated} returns this
 */
proto.adamant.teller.v1.TransferUpdated.prototype.setResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional gincoinc.global.v1.TransferType transfer_type = 13;
 * @return {!proto.gincoinc.global.v1.TransferType}
 */
proto.adamant.teller.v1.TransferUpdated.prototype.getTransferType = function() {
  return /** @type {!proto.gincoinc.global.v1.TransferType} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.gincoinc.global.v1.TransferType} value
 * @return {!proto.adamant.teller.v1.TransferUpdated} returns this
 */
proto.adamant.teller.v1.TransferUpdated.prototype.setTransferType = function(value) {
  return jspb.Message.setProto3EnumField(this, 13, value);
};


/**
 * optional string from = 15;
 * @return {string}
 */
proto.adamant.teller.v1.TransferUpdated.prototype.getFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.teller.v1.TransferUpdated} returns this
 */
proto.adamant.teller.v1.TransferUpdated.prototype.setFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string to = 16;
 * @return {string}
 */
proto.adamant.teller.v1.TransferUpdated.prototype.getTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.teller.v1.TransferUpdated} returns this
 */
proto.adamant.teller.v1.TransferUpdated.prototype.setTo = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional google.protobuf.Timestamp time = 17;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.teller.v1.TransferUpdated.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 17));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.adamant.teller.v1.TransferUpdated} returns this
*/
proto.adamant.teller.v1.TransferUpdated.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.adamant.teller.v1.TransferUpdated} returns this
 */
proto.adamant.teller.v1.TransferUpdated.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.teller.v1.TransferUpdated.prototype.hasTime = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional string event_id = 18;
 * @return {string}
 */
proto.adamant.teller.v1.TransferUpdated.prototype.getEventId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.teller.v1.TransferUpdated} returns this
 */
proto.adamant.teller.v1.TransferUpdated.prototype.setEventId = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional double fee = 19;
 * @return {number}
 */
proto.adamant.teller.v1.TransferUpdated.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 19, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.adamant.teller.v1.TransferUpdated} returns this
 */
proto.adamant.teller.v1.TransferUpdated.prototype.setFee = function(value) {
  return jspb.Message.setProto3FloatField(this, 19, value);
};


/**
 * optional string string_fee = 20;
 * @return {string}
 */
proto.adamant.teller.v1.TransferUpdated.prototype.getStringFee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.teller.v1.TransferUpdated} returns this
 */
proto.adamant.teller.v1.TransferUpdated.prototype.setStringFee = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};





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
proto.adamant.teller.v1.TransferUpdateEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.teller.v1.TransferUpdateEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.teller.v1.TransferUpdateEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.teller.v1.TransferUpdateEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    walletId: jspb.Message.getFieldWithDefault(msg, 14, ""),
    coin: jspb.Message.getFieldWithDefault(msg, 2, 0),
    txId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    txIndex: jspb.Message.getFieldWithDefault(msg, 4, 0),
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    stringValue: jspb.Message.getFieldWithDefault(msg, 6, ""),
    jpyRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0),
    address: jspb.Message.getFieldWithDefault(msg, 7, ""),
    destinationTag: jspb.Message.getFieldWithDefault(msg, 8, 0),
    memoId: jspb.Message.getFieldWithDefault(msg, 15, 0),
    state: jspb.Message.getFieldWithDefault(msg, 9, 0),
    result: jspb.Message.getFieldWithDefault(msg, 10, 0),
    transferType: jspb.Message.getFieldWithDefault(msg, 11, 0),
    time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.adamant.teller.v1.TransferUpdateEvent}
 */
proto.adamant.teller.v1.TransferUpdateEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.teller.v1.TransferUpdateEvent;
  return proto.adamant.teller.v1.TransferUpdateEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.teller.v1.TransferUpdateEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.teller.v1.TransferUpdateEvent}
 */
proto.adamant.teller.v1.TransferUpdateEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventId(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletId(value);
      break;
    case 2:
      var value = /** @type {!proto.gincoinc.global.v1.Coin} */ (reader.readEnum());
      msg.setCoin(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTxIndex(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringValue(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setJpyRate(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDestinationTag(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMemoId(value);
      break;
    case 9:
      var value = /** @type {!proto.gincoinc.global.v1.TransactionState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 10:
      var value = /** @type {!proto.gincoinc.global.v1.TransactionResult} */ (reader.readEnum());
      msg.setResult(value);
      break;
    case 11:
      var value = /** @type {!proto.gincoinc.global.v1.TransferType} */ (reader.readEnum());
      msg.setTransferType(value);
      break;
    case 12:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
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
proto.adamant.teller.v1.TransferUpdateEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.teller.v1.TransferUpdateEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.teller.v1.TransferUpdateEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.teller.v1.TransferUpdateEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getCoin();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getTxId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTxIndex();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getStringValue();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getJpyRate();
  if (f !== 0.0) {
    writer.writeDouble(
      13,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDestinationTag();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getMemoId();
  if (f !== 0) {
    writer.writeUint64(
      15,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getTransferType();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string event_id = 1;
 * @return {string}
 */
proto.adamant.teller.v1.TransferUpdateEvent.prototype.getEventId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.teller.v1.TransferUpdateEvent} returns this
 */
proto.adamant.teller.v1.TransferUpdateEvent.prototype.setEventId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string wallet_id = 14;
 * @return {string}
 */
proto.adamant.teller.v1.TransferUpdateEvent.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.teller.v1.TransferUpdateEvent} returns this
 */
proto.adamant.teller.v1.TransferUpdateEvent.prototype.setWalletId = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional gincoinc.global.v1.Coin coin = 2;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.teller.v1.TransferUpdateEvent.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.gincoinc.global.v1.Coin} value
 * @return {!proto.adamant.teller.v1.TransferUpdateEvent} returns this
 */
proto.adamant.teller.v1.TransferUpdateEvent.prototype.setCoin = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string tx_id = 3;
 * @return {string}
 */
proto.adamant.teller.v1.TransferUpdateEvent.prototype.getTxId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.teller.v1.TransferUpdateEvent} returns this
 */
proto.adamant.teller.v1.TransferUpdateEvent.prototype.setTxId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 tx_index = 4;
 * @return {number}
 */
proto.adamant.teller.v1.TransferUpdateEvent.prototype.getTxIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.adamant.teller.v1.TransferUpdateEvent} returns this
 */
proto.adamant.teller.v1.TransferUpdateEvent.prototype.setTxIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional double value = 5;
 * @return {number}
 */
proto.adamant.teller.v1.TransferUpdateEvent.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.adamant.teller.v1.TransferUpdateEvent} returns this
 */
proto.adamant.teller.v1.TransferUpdateEvent.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional string string_value = 6;
 * @return {string}
 */
proto.adamant.teller.v1.TransferUpdateEvent.prototype.getStringValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.teller.v1.TransferUpdateEvent} returns this
 */
proto.adamant.teller.v1.TransferUpdateEvent.prototype.setStringValue = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional double jpy_rate = 13;
 * @return {number}
 */
proto.adamant.teller.v1.TransferUpdateEvent.prototype.getJpyRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.adamant.teller.v1.TransferUpdateEvent} returns this
 */
proto.adamant.teller.v1.TransferUpdateEvent.prototype.setJpyRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional string address = 7;
 * @return {string}
 */
proto.adamant.teller.v1.TransferUpdateEvent.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.teller.v1.TransferUpdateEvent} returns this
 */
proto.adamant.teller.v1.TransferUpdateEvent.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional uint32 destination_tag = 8;
 * @return {number}
 */
proto.adamant.teller.v1.TransferUpdateEvent.prototype.getDestinationTag = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.adamant.teller.v1.TransferUpdateEvent} returns this
 */
proto.adamant.teller.v1.TransferUpdateEvent.prototype.setDestinationTag = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint64 memo_id = 15;
 * @return {number}
 */
proto.adamant.teller.v1.TransferUpdateEvent.prototype.getMemoId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.adamant.teller.v1.TransferUpdateEvent} returns this
 */
proto.adamant.teller.v1.TransferUpdateEvent.prototype.setMemoId = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional gincoinc.global.v1.TransactionState state = 9;
 * @return {!proto.gincoinc.global.v1.TransactionState}
 */
proto.adamant.teller.v1.TransferUpdateEvent.prototype.getState = function() {
  return /** @type {!proto.gincoinc.global.v1.TransactionState} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.gincoinc.global.v1.TransactionState} value
 * @return {!proto.adamant.teller.v1.TransferUpdateEvent} returns this
 */
proto.adamant.teller.v1.TransferUpdateEvent.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional gincoinc.global.v1.TransactionResult result = 10;
 * @return {!proto.gincoinc.global.v1.TransactionResult}
 */
proto.adamant.teller.v1.TransferUpdateEvent.prototype.getResult = function() {
  return /** @type {!proto.gincoinc.global.v1.TransactionResult} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.gincoinc.global.v1.TransactionResult} value
 * @return {!proto.adamant.teller.v1.TransferUpdateEvent} returns this
 */
proto.adamant.teller.v1.TransferUpdateEvent.prototype.setResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional gincoinc.global.v1.TransferType transfer_type = 11;
 * @return {!proto.gincoinc.global.v1.TransferType}
 */
proto.adamant.teller.v1.TransferUpdateEvent.prototype.getTransferType = function() {
  return /** @type {!proto.gincoinc.global.v1.TransferType} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.gincoinc.global.v1.TransferType} value
 * @return {!proto.adamant.teller.v1.TransferUpdateEvent} returns this
 */
proto.adamant.teller.v1.TransferUpdateEvent.prototype.setTransferType = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional google.protobuf.Timestamp time = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.adamant.teller.v1.TransferUpdateEvent.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.adamant.teller.v1.TransferUpdateEvent} returns this
*/
proto.adamant.teller.v1.TransferUpdateEvent.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.adamant.teller.v1.TransferUpdateEvent} returns this
 */
proto.adamant.teller.v1.TransferUpdateEvent.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.adamant.teller.v1.TransferUpdateEvent.prototype.hasTime = function() {
  return jspb.Message.getField(this, 12) != null;
};


goog.object.extend(exports, proto.adamant.teller.v1);
