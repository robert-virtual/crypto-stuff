const { publicEncrypt, privateDecrypt } = require("crypto");
const { privateKey, publicKey } = require("./keypair");

const message = "the british are comming!";

const encryptedData = publicEncrypt(publicKey, Buffer.from(message));

console.log(encryptedData.toString("hex"));

const decryptedData = privateDecrypt(privateKey, encryptedData);

console.log("------------Decrypted Data-------");
console.log(decryptedData.toString("utf8"));
console.log(decryptedData.toString("utf-8"));
