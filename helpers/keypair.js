const { generateKeyPairSync } = require("crypto");

// rsa = rivest-shamir-adleman
const { privateKey, publicKey } = generateKeyPairSync("rsa", {
  modulusLength: 4096, //the length of your key in bits
  publicKeyEncoding: {
    type: "spki",
    format: "pem", // privacy enhance mail
  },
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
    // cipher: "aes-256-cbc",
    // passphrase: "top secret",
  },
});

module.exports = {
  privateKey,
  publicKey,
};
