// source: gincoinc/adamant/teller/v1/adamanttellerv1/teller_api.proto
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
var gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb = require('../../../../../gincoinc/adamant/global/v1/adamantglobalv1/global_api_pb.js');
goog.object.extend(proto, gincoinc_adamant_global_v1_adamantglobalv1_global_api_pb);
var gincoinc_adamant_global_v1_adamantglobalv1_model_pb = require('../../../../../gincoinc/adamant/global/v1/adamantglobalv1/model_pb.js');
goog.object.extend(proto, gincoinc_adamant_global_v1_adamantglobalv1_model_pb);
var gincoinc_global_v1_gincoincglobalv1_enum_pb = require('../../../../../gincoinc/global/v1/gincoincglobalv1/enum_pb.js');
goog.object.extend(proto, gincoinc_global_v1_gincoincglobalv1_enum_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var validate_validate_pb = require('../../../../../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
goog.exportSymbol('proto.adamant.teller.v1.CreateWalletRequest', null, global);
goog.exportSymbol('proto.adamant.teller.v1.InitializeWalletRequest', null, global);
goog.exportSymbol('proto.adamant.teller.v1.InitializeXRPWalletRequest', null, global);
goog.exportSymbol('proto.adamant.teller.v1.SignTransactionRequest', null, global);
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
proto.adamant.teller.v1.CreateWalletRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.teller.v1.CreateWalletRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.teller.v1.CreateWalletRequest.displayName = 'proto.adamant.teller.v1.CreateWalletRequest';
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
proto.adamant.teller.v1.InitializeXRPWalletRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.teller.v1.InitializeXRPWalletRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.teller.v1.InitializeXRPWalletRequest.displayName = 'proto.adamant.teller.v1.InitializeXRPWalletRequest';
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
proto.adamant.teller.v1.InitializeWalletRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.teller.v1.InitializeWalletRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.teller.v1.InitializeWalletRequest.displayName = 'proto.adamant.teller.v1.InitializeWalletRequest';
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
proto.adamant.teller.v1.SignTransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.adamant.teller.v1.SignTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.adamant.teller.v1.SignTransactionRequest.displayName = 'proto.adamant.teller.v1.SignTransactionRequest';
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
proto.adamant.teller.v1.CreateWalletRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.teller.v1.CreateWalletRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.teller.v1.CreateWalletRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.teller.v1.CreateWalletRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    coin: jspb.Message.getFieldWithDefault(msg, 2, 0),
    walletType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    addressType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    destinationWalletId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    inheritWalletId: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.adamant.teller.v1.CreateWalletRequest}
 */
proto.adamant.teller.v1.CreateWalletRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.teller.v1.CreateWalletRequest;
  return proto.adamant.teller.v1.CreateWalletRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.teller.v1.CreateWalletRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.teller.v1.CreateWalletRequest}
 */
proto.adamant.teller.v1.CreateWalletRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWalletName(value);
      break;
    case 2:
      var value = /** @type {!proto.gincoinc.global.v1.Coin} */ (reader.readEnum());
      msg.setCoin(value);
      break;
    case 3:
      var value = /** @type {!proto.adamant.global.v1.WalletType} */ (reader.readEnum());
      msg.setWalletType(value);
      break;
    case 4:
      var value = /** @type {!proto.gincoinc.global.v1.AddressType} */ (reader.readEnum());
      msg.setAddressType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationWalletId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setInheritWalletId(value);
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
proto.adamant.teller.v1.CreateWalletRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.teller.v1.CreateWalletRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.teller.v1.CreateWalletRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.teller.v1.CreateWalletRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletName();
  if (f.length > 0) {
    writer.writeString(
      1,
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
  f = message.getWalletType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getAddressType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getDestinationWalletId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getInheritWalletId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string wallet_name = 1;
 * @return {string}
 */
proto.adamant.teller.v1.CreateWalletRequest.prototype.getWalletName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.teller.v1.CreateWalletRequest} returns this
 */
proto.adamant.teller.v1.CreateWalletRequest.prototype.setWalletName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional gincoinc.global.v1.Coin coin = 2;
 * @return {!proto.gincoinc.global.v1.Coin}
 */
proto.adamant.teller.v1.CreateWalletRequest.prototype.getCoin = function() {
  return /** @type {!proto.gincoinc.global.v1.Coin} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.gincoinc.global.v1.Coin} value
 * @return {!proto.adamant.teller.v1.CreateWalletRequest} returns this
 */
proto.adamant.teller.v1.CreateWalletRequest.prototype.setCoin = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional adamant.global.v1.WalletType wallet_type = 3;
 * @return {!proto.adamant.global.v1.WalletType}
 */
proto.adamant.teller.v1.CreateWalletRequest.prototype.getWalletType = function() {
  return /** @type {!proto.adamant.global.v1.WalletType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.adamant.global.v1.WalletType} value
 * @return {!proto.adamant.teller.v1.CreateWalletRequest} returns this
 */
proto.adamant.teller.v1.CreateWalletRequest.prototype.setWalletType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional gincoinc.global.v1.AddressType address_type = 4;
 * @return {!proto.gincoinc.global.v1.AddressType}
 */
proto.adamant.teller.v1.CreateWalletRequest.prototype.getAddressType = function() {
  return /** @type {!proto.gincoinc.global.v1.AddressType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.gincoinc.global.v1.AddressType} value
 * @return {!proto.adamant.teller.v1.CreateWalletRequest} returns this
 */
proto.adamant.teller.v1.CreateWalletRequest.prototype.setAddressType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string destination_wallet_id = 5;
 * @return {string}
 */
proto.adamant.teller.v1.CreateWalletRequest.prototype.getDestinationWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.teller.v1.CreateWalletRequest} returns this
 */
proto.adamant.teller.v1.CreateWalletRequest.prototype.setDestinationWalletId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string inherit_wallet_id = 6;
 * @return {string}
 */
proto.adamant.teller.v1.CreateWalletRequest.prototype.getInheritWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.teller.v1.CreateWalletRequest} returns this
 */
proto.adamant.teller.v1.CreateWalletRequest.prototype.setInheritWalletId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
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
proto.adamant.teller.v1.InitializeXRPWalletRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.teller.v1.InitializeXRPWalletRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.teller.v1.InitializeXRPWalletRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.teller.v1.InitializeXRPWalletRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.adamant.teller.v1.InitializeXRPWalletRequest}
 */
proto.adamant.teller.v1.InitializeXRPWalletRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.teller.v1.InitializeXRPWalletRequest;
  return proto.adamant.teller.v1.InitializeXRPWalletRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.teller.v1.InitializeXRPWalletRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.teller.v1.InitializeXRPWalletRequest}
 */
proto.adamant.teller.v1.InitializeXRPWalletRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.adamant.teller.v1.InitializeXRPWalletRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.teller.v1.InitializeXRPWalletRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.teller.v1.InitializeXRPWalletRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.teller.v1.InitializeXRPWalletRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.teller.v1.InitializeXRPWalletRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.teller.v1.InitializeXRPWalletRequest} returns this
 */
proto.adamant.teller.v1.InitializeXRPWalletRequest.prototype.setWalletId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.adamant.teller.v1.InitializeWalletRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.teller.v1.InitializeWalletRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.teller.v1.InitializeWalletRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.teller.v1.InitializeWalletRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.adamant.teller.v1.InitializeWalletRequest}
 */
proto.adamant.teller.v1.InitializeWalletRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.teller.v1.InitializeWalletRequest;
  return proto.adamant.teller.v1.InitializeWalletRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.teller.v1.InitializeWalletRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.teller.v1.InitializeWalletRequest}
 */
proto.adamant.teller.v1.InitializeWalletRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.adamant.teller.v1.InitializeWalletRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.teller.v1.InitializeWalletRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.teller.v1.InitializeWalletRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.teller.v1.InitializeWalletRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.teller.v1.InitializeWalletRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.teller.v1.InitializeWalletRequest} returns this
 */
proto.adamant.teller.v1.InitializeWalletRequest.prototype.setWalletId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.adamant.teller.v1.SignTransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.adamant.teller.v1.SignTransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.adamant.teller.v1.SignTransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.teller.v1.SignTransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    walletId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    transactionId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.adamant.teller.v1.SignTransactionRequest}
 */
proto.adamant.teller.v1.SignTransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.adamant.teller.v1.SignTransactionRequest;
  return proto.adamant.teller.v1.SignTransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.adamant.teller.v1.SignTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.adamant.teller.v1.SignTransactionRequest}
 */
proto.adamant.teller.v1.SignTransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTransactionId(value);
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
proto.adamant.teller.v1.SignTransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.adamant.teller.v1.SignTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.adamant.teller.v1.SignTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.adamant.teller.v1.SignTransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWalletId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string wallet_id = 1;
 * @return {string}
 */
proto.adamant.teller.v1.SignTransactionRequest.prototype.getWalletId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.teller.v1.SignTransactionRequest} returns this
 */
proto.adamant.teller.v1.SignTransactionRequest.prototype.setWalletId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string transaction_id = 2;
 * @return {string}
 */
proto.adamant.teller.v1.SignTransactionRequest.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.adamant.teller.v1.SignTransactionRequest} returns this
 */
proto.adamant.teller.v1.SignTransactionRequest.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.adamant.teller.v1);
