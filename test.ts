import detectSocialNetwork from "./src";

const url = "https://twitter.com/jack/status/20";

const test = detectSocialNetwork(url);

console.log(test);