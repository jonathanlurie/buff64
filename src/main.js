import { Base64 } from 'js-base64';

var typeToJsConstructor = {
  "int8": Int8Array,
  "int16": Int16Array,
  "int32": Int32Array,
  "uint8": Uint8Array,
  "uint16": Uint16Array,
  "uint32": Uint32Array,
  "float32": Float32Array,
  "float64": Float64Array
}

var jsConstructorNameToType = {
  "Int8Array": "int8",
  "Int16Array": "int16",
  "Int32Array": "int32",
  "Uint8Array": "uint8",
  "Uint16Array": "uint16",
  "Uint32Array": "uint32",
  "Float32Array": "float32",
  "Float64Array": "float64"
}

function getJsConstructorFromType( type ){
  if( type in typeToJsConstructor ){
    return typeToJsConstructor[ type ];
  }else{
    return null;
  }
}


function getTypeFromJsConstructor( jsconstr ){
  if( jsconstr in jsConstructorNameToType ){
    return jsConstructorNameToType[ jsconstr ];
  }else{
    return null;
  }
}


/**
 * Convert any typed array into a base64 string
 * @param  {Int8Array|Int16Array|Int32Array|Uint8Array|Uint16Array|Uint32Array|Float32Array|Float64Array} typedArray - a typed array
 * @return {Object} of form {type: String, data: String} where "type" is of {"int8"|"int16"|"int32"|"uint8"|"uint16"|"uint32"|"float32"|"float64"} and "data" is the base64 string
 */
function typedArrayToBase64( typedArray ){
  var type = getTypeFromJsConstructor( typedArray.constructor.name );

  if( !type )
    return null;

  var arr = new Uint8Array( typedArray.buffer );
  var reducedToStr = '';

  for(var i=0; i<arr.length; i++){
    reducedToStr += String.fromCharCode(arr[i]);
  }
  var base64Str = Base64.encode(reducedToStr);

  return {
    type: type,
    data: base64Str
  }
}


/**
 * Convert a base64 string into a typed array
 * @param  {[type]} b64Str - a base64 string
 * @param  {String} type - the type of typed array encoded into b64Str. Default: "uint8" but can be any of "int8" | "int16" | "int32" | "uint8" | "uint16" | "uint32" | "float32" | "float64"
 * @return {Int8Array|Int16Array|Int32Array|Uint8Array|Uint16Array|Uint32Array|Float32Array|Float64Array} the output typed array
 */
function base64ToTypedArray( b64Str, type="uint8" ){
  var jsArrayConstructor = getJsConstructorFromType( type );

  if( !jsArrayConstructor )
    return null;

  var reducedToStr = Base64.decode( b64Str );
  var arr = new Uint8Array( reducedToStr.length );

  for(var i=0; i<arr.length; i++){
    arr[i] = reducedToStr.charCodeAt(i)
  }

  return new jsArrayConstructor( arr.buffer );
}


export { typedArrayToBase64, base64ToTypedArray }
