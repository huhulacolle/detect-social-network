# detect-social-network

[![npm version](https://img.shields.io/npm/v/detect-social-network.svg)](https://www.npmjs.com/package/detect-social-network)
[![license](https://img.shields.io/npm/l/detect-social-network.svg)](https://www.npmjs.com/package/detect-social-network)

detect-social-network is a JavaScript library that allows you to identify the social network from a given URL.

## Installation

You can install the library using npm:

```bash
npm install detect-social-network
```

## Usage

```js
// Using ES6 Import
import detectSocialNetwork from "detect-social-network";

const url = "https://twitter.com/jack/status/20";
const socialNetwork = detectSocialNetwork(url);

console.log(`The link belongs to: ${socialNetwork}`);
```

```js
// Using CommonJS
const detectSocialNetwork = require("detect-social-network");

const url = "https://twitter.com/jack/status/20";
const socialNetwork = detectSocialNetwork.default(url);

console.log(`The link belongs to: ${socialNetwork}`);
```

## Supported Social Networks

Currently, detect-social-network can identify the following social networks:

    discord
    facebook
    github
    instagram
    linkedin
    pinterest
    reddit
    tiktok
    tumblr
    twitter
    youtube
    dailymotion
