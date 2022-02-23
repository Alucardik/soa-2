/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.sampleStruct1', null, global);
goog.exportSymbol('proto.sampleStruct2', null, global);

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
proto.sampleStruct1 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sampleStruct1.repeatedFields_, null);
};
goog.inherits(proto.sampleStruct1, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.sampleStruct1.displayName = 'proto.sampleStruct1';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sampleStruct1.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sampleStruct1.prototype.toObject = function(opt_includeInstance) {
  return proto.sampleStruct1.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sampleStruct1} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sampleStruct1.toObject = function(includeInstance, msg) {
  var f, obj = {
    integer: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pb_float: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
    stringdata: jspb.Message.getFieldWithDefault(msg, 3, ""),
    arrayList: jspb.Message.getRepeatedField(msg, 4)
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
 * @return {!proto.sampleStruct1}
 */
proto.sampleStruct1.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sampleStruct1;
  return proto.sampleStruct1.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sampleStruct1} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sampleStruct1}
 */
proto.sampleStruct1.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInteger(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFloat(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringdata(value);
      break;
    case 4:
      var value = /** @type {!Array<number>} */ (reader.readPackedInt64());
      msg.setArrayList(value);
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
proto.sampleStruct1.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sampleStruct1.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sampleStruct1} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sampleStruct1.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInteger();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getFloat();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getStringdata();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getArrayList();
  if (f.length > 0) {
    writer.writePackedInt64(
      4,
      f
    );
  }
};


/**
 * optional int64 integer = 1;
 * @return {number}
 */
proto.sampleStruct1.prototype.getInteger = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.sampleStruct1.prototype.setInteger = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional float float = 2;
 * @return {number}
 */
proto.sampleStruct1.prototype.getFloat = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.sampleStruct1.prototype.setFloat = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string stringData = 3;
 * @return {string}
 */
proto.sampleStruct1.prototype.getStringdata = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.sampleStruct1.prototype.setStringdata = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated int64 array = 4;
 * @return {!Array<number>}
 */
proto.sampleStruct1.prototype.getArrayList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array<number>} value */
proto.sampleStruct1.prototype.setArrayList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.sampleStruct1.prototype.addArray = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


proto.sampleStruct1.prototype.clearArrayList = function() {
  this.setArrayList([]);
};



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
proto.sampleStruct2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sampleStruct2.repeatedFields_, null);
};
goog.inherits(proto.sampleStruct2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.sampleStruct2.displayName = 'proto.sampleStruct2';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sampleStruct2.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sampleStruct2.prototype.toObject = function(opt_includeInstance) {
  return proto.sampleStruct2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sampleStruct2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sampleStruct2.toObject = function(includeInstance, msg) {
  var f, obj = {
    integer: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pb_float: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
    stringdata: jspb.Message.getFieldWithDefault(msg, 3, ""),
    arrayList: jspb.Message.getRepeatedField(msg, 4),
    extendedstringdata: jspb.Message.getFieldWithDefault(msg, 5, ""),
    nested: (f = msg.getNested()) && proto.sampleStruct1.toObject(includeInstance, f)
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
 * @return {!proto.sampleStruct2}
 */
proto.sampleStruct2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sampleStruct2;
  return proto.sampleStruct2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sampleStruct2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sampleStruct2}
 */
proto.sampleStruct2.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInteger(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFloat(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringdata(value);
      break;
    case 4:
      var value = /** @type {!Array<number>} */ (reader.readPackedInt64());
      msg.setArrayList(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setExtendedstringdata(value);
      break;
    case 6:
      var value = new proto.sampleStruct1;
      reader.readMessage(value,proto.sampleStruct1.deserializeBinaryFromReader);
      msg.setNested(value);
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
proto.sampleStruct2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sampleStruct2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sampleStruct2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sampleStruct2.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInteger();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getFloat();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getStringdata();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getArrayList();
  if (f.length > 0) {
    writer.writePackedInt64(
      4,
      f
    );
  }
  f = message.getExtendedstringdata();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getNested();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.sampleStruct1.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 integer = 1;
 * @return {number}
 */
proto.sampleStruct2.prototype.getInteger = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.sampleStruct2.prototype.setInteger = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional float float = 2;
 * @return {number}
 */
proto.sampleStruct2.prototype.getFloat = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.sampleStruct2.prototype.setFloat = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string stringData = 3;
 * @return {string}
 */
proto.sampleStruct2.prototype.getStringdata = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.sampleStruct2.prototype.setStringdata = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated int64 array = 4;
 * @return {!Array<number>}
 */
proto.sampleStruct2.prototype.getArrayList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array<number>} value */
proto.sampleStruct2.prototype.setArrayList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.sampleStruct2.prototype.addArray = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


proto.sampleStruct2.prototype.clearArrayList = function() {
  this.setArrayList([]);
};


/**
 * optional string extendedStringData = 5;
 * @return {string}
 */
proto.sampleStruct2.prototype.getExtendedstringdata = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.sampleStruct2.prototype.setExtendedstringdata = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional sampleStruct1 nested = 6;
 * @return {?proto.sampleStruct1}
 */
proto.sampleStruct2.prototype.getNested = function() {
  return /** @type{?proto.sampleStruct1} */ (
    jspb.Message.getWrapperField(this, proto.sampleStruct1, 6));
};


/** @param {?proto.sampleStruct1|undefined} value */
proto.sampleStruct2.prototype.setNested = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.sampleStruct2.prototype.clearNested = function() {
  this.setNested(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.sampleStruct2.prototype.hasNested = function() {
  return jspb.Message.getField(this, 6) != null;
};


goog.object.extend(exports, proto);
