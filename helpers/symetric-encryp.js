const { createCipheriv, randomBytes, createDecipheriv } = require("crypto");

//iv = initial vector

const message = "I like dogs";

const key = randomBytes(32);
const iv = randomBytes(16);

// aes = advanced encryption standard
const cipher = createCipheriv("aes256", key, iv);

// ecrypt

const encryptedMessage =
  cipher.update(message, "utf8", "hex") + cipher.final("hex");

// decrypt

const decipher = createDecipheriv("aes256", key, iv);

const decryptedMessage =
  decipher.update(encryptedMessage, "hex", "utf8") + decipher.final("utf8");

console.log(`encrypted: ${encryptedMessage}`);
console.log(`dencrypted: ${decryptedMessage}`);
console.log(`dencrypted: ${decryptedMessage.toString("utf-8")}`);
