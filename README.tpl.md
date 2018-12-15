# RvnAddr.js: Ravencoin general purpose address translation for Node.js and web browsers.

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Plug & Play JavaScript library for all Ravencoin address format translation needs. Easy-to-use, thoroughly tested, and feature complete.

## Installation

### Using NPM

```bsh
$ npm install --save rvnaddrjs
```

### Using Bower

```bsh
$ bower install --save rvnaddrjs
```

### Manually

You may also download the distribution file manually and place it within your third-party scripts directory: [dist/rvnaddrjs-{{ version }}.min.js](https://cdn.rawgit.com/raven-community/rvnaddrjs/master/dist/rvnaddrjs-{{ version }}.min.js).

## Usage

### In Node.js

```javascript
var rvnaddr = require('rvnaddrjs');
```

### Browser

#### Script Tag

You may include a script tag in your HTML and the `rvnaddr` module will be defined globally on subsequent scripts.

```html
<html>
  <head>
    ...
    <script src="https://cdn.rawgit.com/raven-community/rvnaddrjs/master/dist/rvnaddrjs-{{ version }}.min.js"></script>
  </head>
  ...
</html>
```

## Code Examples

### Supported formats, networks and address types.
```javascript
var Format = rvnaddr.Format; // Legacy, Rvn2addr.
var Network = rvnaddr.Network; // Mainnet or Testnet.
var Type = rvnaddr.Type; // P2PKH or P2SH.
```

### Test for address format.
```javascript
var isLegacyAddress = rvnaddr.isLegacyAddress;
var isRvn2Address = rvnaddr.isRvn2Address;

isLegacyAddress('1B9UNtBfkkpgt8kVbwLN9ktE62QKnMbDzR')
isLegacyAddress('qph5kuz78czq00e3t85ugpgd7xmer5kr7c5f6jdpwk')
isRvn2Address('qph5kuz78czq00e3t85ugpgd7xmer5kr7c5f6jdpwk')
isRvn2Address('CScMwvXjdooDnGevHgfHjGWFi9cjk75Aaj')
```

### Test for address network.
```javascript
var isMainnetAddress = rvnaddr.isMainnetAddress;
var isTestnetAddress = rvnaddr.isTestnetAddress;

isMainnetAddress('1P238gziZdeS5Wj9nqLhQHSBK2Lz6zPSke')
isMainnetAddress('mnbGP2FeRsbgdQCzDT35zPWDcYSKm4wrcg')
isTestnetAddress('qqdcsl6c879esyxyacmz7g6vtzwjjwtznsggspc457')
isTestnetAddress('CeUvhjLnSgcxyedaUafcyo4Cw9ZPwGq9JJ')
```

### Test for address type.
```javascript
var isP2PKHAddress = rvnaddr.isP2PKHAddress;
var isP2SHAddress = rvnaddr.isP2SHAddress;

isP2PKHAddress('1Mdob5JY1yuwoj6y76Vf3AQpoqUH5Aft8z')
isP2PKHAddress('2NFGG7yRBizUANU48b4dASrnNftqsNwzSM1')
isP2SHAddress('H92i9XpREZiBscxGu6Vx3M8jNGBKqscBBB')
isP2SHAddress('CeUvhjLnSgcxyedaUafcyo4Cw9ZPwGq9JJ')
```

### Detect address format.
```javascript
var detectAddressFormat = rvnaddr.detectAddressFormat;

detectAddressFormat('qqdcsl6c879esyxyacmz7g6vtzwjjwtznsggspc457') // Format.Rvn2addr
```

### Detect address network.
```javascript
var detectAddressNetwork = rvnaddr.detectAddressNetwork;

detectAddressNetwork('1P238gziZdeS5Wj9nqLhQHSBK2Lz6zPSke') // Network.Mainnet
detectAddressNetwork('qqdcsl6c879esyxyacmz7g6vtzwjjwtznsggspc457') // Network.Testnet
```

### Detect address type.
```javascript
var detectAddressType = rvnaddr.detectAddressType;

detectAddressType('1P238gziZdeS5Wj9nqLhQHSBK2Lz6zPSke') // Type.P2PKH
detectAddressType('3NKpWcnyZtEKttoQECAFTnmkxMkzgbT4WX') // Type.P2SH
```

### Translate address from any address format into a specific format.
```javascript
var toLegacyAddress = rvnaddr.toLegacyAddress;
var toRvn2Address = rvnaddr.toRvn2Address;

toLegacyAddress('qph5kuz78czq00e3t85ugpgd7xmer5kr7c5f6jdpwk') // 1B9UNtBfkkpgt8kVbwLN9ktE62QKnMbDzR
toRvn2Address('1B9UNtBfkkpgt8kVbwLN9ktE62QKnMbDzR') // ravh5kuz78czq00e3t85ugpgd7xmer5kr7c5f6jdpwk
```

## Documentation

### Generate and Browse Locally

```bsh
$ npm run docs
```

### Online

Browse automatically generated jsdocs [online](https://cdn.rawgit.com/raven-community/rvnaddrjs/master/jsdoc/index.html).
