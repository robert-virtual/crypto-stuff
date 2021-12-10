const { createHash } = require("crypto");

function hash(input) {
  return createHash("sha256").update(input).digest("hex");
  // .digest('hex')    // 7ad584e61a22
  // .digest('base64') // etWE/eWt=
}

let password = "hi-mon";
const hash1 = hash(password);
const hash2 = hash(password);

console.log("hash: ", hash1);
console.log("hash: ", hash1.length);
console.log("hash: ", hash2);
