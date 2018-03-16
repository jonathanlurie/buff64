buff64 encodes typed arrays into a base64 string, for Node and browser. Types arrays can be any of `Int8Array`, `Int16Array`, `Int32Array`, `Uint8Array`, `Uint16Array`, `Uint32Array`, `Float32Array` and `Float64Array`. Alternatively, it also converts back to these types arrays.

## Install
`npm install --save buff64`

Then from Node:  
```js
const buff64 = require("buff64");
```

From ES6:  
```js
import * as buff64 from 'buff64';
```

Or from browser, you must use the *umd* package:  
```html
<script src="../dist/buff64.umd.js"></script>
```

## usage
Only two methods are available: `typedArrayToBase64` and `base64ToTypedArray`.
```js
// an array containing data
var arr = new Float32Array( [10, 11, 12, 42] )

// encoding
var b64 = buff64.typedArrayToBase64( arr );
// b64 value is { type: 'float32', data: 'AAAgQQAAMEEAAEBBAAAoQg==' }

// decoding
var arrBis = buff64.base64ToTypedArray( b64.data, b64.type );
// arrBis is Float32Array [ 10, 11, 12, 42 ]

// Here, arr and arrBis are of the same type and contain exactly the same data
```

The encoding method not only gives the base64 string but also a type as a string. This type can be one of `int8`, `int16`, `int32`, `uint8`, `uint16`, `uint32`, `float32` or `float64`. It is simple to interpret and comes from the [Numpy Data Types](https://docs.scipy.org/doc/numpy/user/basics.types.html).  

As shown on the example, this type is required for calling `base64ToTypedArray` so the it knows if the given base64 string represent an array of bytes or float or other.

You can run this example from `example/` in a browser or with Node.

## License
MIT
