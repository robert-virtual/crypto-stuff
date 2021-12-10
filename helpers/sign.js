const { createVerify, createSign } = require("crypto");

const { privateKey, publicKey } = require("./keypair");

const message = " this data must be signed";

// sign

const signer = createSign("rsa-sha256");

signer.update(message);

const signature = signer.sign(privateKey, "hex");

console.log(message);

// adjuntar el mensaje con la firma y enviarla

// verify
const verifier = createVerify("rsa-sha256");

verifier.update(message);
// si el mesaje cambia o la firma
const isVerified = verifier.verify(publicKey, signature, "hex");

console.log(isVerified);
