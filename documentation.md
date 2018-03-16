<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [typedArrayToBase64][1]
-   [base64ToTypedArray][2]

## typedArrayToBase64

Convert any typed array into a base64 string

**Parameters**

-   `typedArray` **([Int8Array][3] \| [Int16Array][4] \| [Int32Array][5] \| [Uint8Array][6] \| [Uint16Array][7] \| [Uint32Array][8] \| [Float32Array][9] \| [Float64Array][10])** a typed array

Returns **[Object][11]** of form {type: String, data: String} where "type" is of {"int8"|"int16"|"int32"|"uint8"|"uint16"|"uint32"|"float32"|"float64"} and "data" is the base64 string

## base64ToTypedArray

Convert a base64 string into a typed array

**Parameters**

-   `b64Str` **\[type]** a base64 string
-   `type` **[String][12]** the type of typed array encoded into b64Str. Default: "uint8" but can be any of "int8" | "int16" | "int32" | "uint8" | "uint16" | "uint32" | "float32" | "float64" (optional, default `"uint8"`)

Returns **([Int8Array][3] \| [Int16Array][4] \| [Int32Array][5] \| [Uint8Array][6] \| [Uint16Array][7] \| [Uint32Array][8] \| [Float32Array][9] \| [Float64Array][10])** the output typed array

[1]: #typedarraytobase64

[2]: #base64totypedarray

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Int8Array

[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Int16Array

[5]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Int32Array

[6]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array

[7]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array

[8]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array

[9]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array

[10]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float64Array

[11]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[12]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String