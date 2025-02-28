const fs = require("fs"); 
require("dotenv").config();

module.exports = {
    prefix: process.env.PREFIX || ".",
    ownerName: process.env.OWNER_NAME || "Toxxic-Boy",
    ownerNumber: process.env.OWNER_NUMBER || "2348165846414",
    mode: process.env.MODE || "public",
    region: process.env.REGION || "Nigeria",
    botName: process.env.BOT_NAME || "Rias Gremory V3",
    exifPack: process.env.EXIF_PACK || "RIAS V3 LOVES",
    exifAuthor: process.env.EXIF_AUTHOR || "Toxxic",
    timeZone: process.env.TIME_ZONE || "Africa/Lagos",
    presenceStatus: process.env.PRESENCE_STATUS || "unavailable",
    autoRead: process.env.AUTO_READ === "true",
    autoViewStatus: process.env.AUTO_VIEW_STATUS === "true",
    autoReact: process.env.AUTO_REACT === "true",
    sessionId: process.env.SESSION_ID || "",
    autoRejectEnabled: process.env.AUTO_REJECT_ENABLED || "false",
}eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUs0ekZubWtSc24xMDRWU0hRV2JiMWYwOW14amZrbTNSMDR6T09paXJIND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidURKK052VGR4RDlCVE9oOC9EdVM3Uys3R2daR1Z6VTBsVFJsRFVrN0xtdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSUtNZFJIeSt5VlRieHp0a2owQkxtR1VKaWQwRy8rUlRHbU43b2ZadWs4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpVlZtM21IdTRLNFBuUHh0QlI2V295NnZFb3NGMFVWOWVXYVYvTUNlQW1ZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJGNnE3VVFXSHlIT29xYlp4OVRnUkU1WWMxSDNaenBFU0NLMnhGcHYySGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjliQUtmNUtLWGI1UEViWG81RnNUQTlzTE5FMjVCcEtQakZ6UXBhVFErQlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0N0SFJlSG43Mi9ndHJoZk5MbzRFNmM3ZXQvTDgxcTJNTXQzNmd2UVIyOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2VCOXpYZTJQZUU4c044R3JpeE1aS2c1R093R29aMk8vVkp5RXJ6a3V5dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJ6QlM2OS84b21ueXNyVmNQQTk0Vkt6U1VWTXhwUFRsRlUzZEFYZXQ5RUxtb0Y2ZEo3REUwNzdvdGdTM29LSHhjeTFpN3BIY3dNNDBpeUw2c2YxSmdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAwLCJhZHZTZWNyZXRLZXkiOiJjZytUaEF0UUxaL1VubmZhQWYwSTMwRnkvUEVEY3g5TzA1RlZYaG1wOTRvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJGNTJHU0RXRSIsIm1lIjp7ImlkIjoiMjM0OTEzNjk5Mjc4NjoyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IsOYTEEgQlRDIiwibGlkIjoiNzU2NjkxMTk3Mjk3ODg6MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ08yUDVPVUZFUEw0dTcwR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ijh0dG44bmtITzg4M3IvL1I5eWxMTE8vRWtkaDJHcE9EeENuZnpGRkkzMGM9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImczWkdJZlRoTXlTSnQ2b2ZDRnlPejdQOGhycjZUMVBWM0hwRjVlQUVxY2tGbmJUU21PWjFpaXJlbFpBMWtmQnM2RGdCYUF2Y1hHTWtwbllYcW1VR0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJITTJpZHZhMzJHQVY5QXlESWFhT3RRNVFEUnpUZ2Z5K2p6UWpHTDNMZFAxcVFtUkloRXdCTldIbHUwWnBOc1FsSnNGRUFKTHFmZldpVTVWMUxDbVpnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxMzY5OTI3ODY6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmTGJaL0o1Qnp2UE42Ly8wZmNwU3l6dnhKSFlkaHFUZzhRcDM4eFJTTjlIIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mzk1MjExNTEsImxhc3RQcm9wSGFzaCI6IjJQMVloZiJ9;

let file = require.resolve(__filename); 
fs.watchFile(file, () => {
    fs.unwatchFile(file); 
    console.log(`Update '${__filename}'`); 
    delete require.cache[file];
    require(file); 
});
