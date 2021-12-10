//hash-based message authentication code
const { createHmac } = require("crypto");

const key = "super-secret!";

const message = "hey, how's it going";

const hmac = createHmac("sha256", key).update(message).digest("hex");

const key2 = "other-password";

const hmac2 = createHmac("sha256", key2).update(message).digest("hex");

console.log(hmac);
console.log(hmac2);
