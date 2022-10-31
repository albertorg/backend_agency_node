const CryptoJS = require("crypto-js");

export const xSignature = () => {
    
    const publicKey = process.env.API_KEY
    const privateKey = process.env.SECRET
    
    // UTC creation
    const utcDate = Math.floor(new Date().getTime() / 1000);

    // Signature Assembly
    const assemble = (publicKey + privateKey + utcDate);

    // SHA-256 Encryption
    const hash = CryptoJS.SHA256(assemble).toString()
    return hash.toString(CryptoJS.enc.Hex)    
}
