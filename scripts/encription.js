const jsonWebToken = require("jsonwebtoken");

const SECRET = "bwugwuyvgbskbsduvwe"
const encrypted_Token = jsonWebToken.sign("Hey This is Suppose to be encrypted",SECRET)


// const Tempered_Token = "eyJhbGciOiJIUzI1NiJ9.SGV5IFRoaXMgaXMgU3VwcG9zZSB0byBiZSBlbmNyeXB0ZWQ.SrdbSzGWnfloJqVMZR-1y2_B2Rln6LqYcLFfNJxcjyk"
console.log(encrypted_Token)

const decrypted_message = jsonWebToken.decode(encrypted_Token)
console.log(decrypted_message)

jsonWebToken.verify(encrypted_Token,SECRET)