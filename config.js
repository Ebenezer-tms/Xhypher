const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "XHYPHER:~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0hPbmdQY3l5TVlZUVBpVFhVMCtvRjRlSE1pYWxXOXlhbkJqbm44ZS9HUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2IrbDF0N3FyWUFKUHRKM1FxdUlmaEZJR2JSOUI2WS9hZ3lzMzllTTl5WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySXVPdXA1YlV1TkVVRmEyRm9PdHN0a1lSZU1FN2lqVWF3SWZKTlNFelhrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSZEVmeHRjMGUrUTlvUHRka3h1V1dSWGsxbGZvYTJuOVFidzUraWZXdUc4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRCdlJhYXRXbFJJNkRidVZEd1JTdjJubGhEaTBDYnNaTDBadnNUM0VTbjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Img2YTltUm9BQkd5dE56d0pSTnhUTXU1eSthSEpYUTdlSmNzMjIrc3MyVUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEIwS084OURkMmFYZXRFY0g3Q0sxcWd0QjNsMk5QSDF6WjVSRnRVbUpYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMko0V2wzOTZSS2hJRi9aQ3NYaVpFTUNaMXd3Q3NrNVJCRUFjU0hlY1poTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZGTGRyc3BsK1dCNkpIaGMrUkpGVTJoNWpNWXp2V2tqNm1NTEJseXdxWlhwanI2aWh6dXJhZ0R5TE51S0hwcXFIM0tYemU3aDhrdnpJZ2NYK0h1L2lRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY1LCJhZHZTZWNyZXRLZXkiOiIvTUY5Q3c2WUY0aEhNSTBjY1lQbnVoYzlvbHIvcGtEeEN4MGQ3d0JIQ053PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2MzcxNTMwNTk3NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTc1MzBCODVCRUI5N0ZEOEE3OThGMEMxRTlEMUNFOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYyMzYyMTEzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIxUjBCOF8tZFR3V2xrTnRoQ0NtZlh3IiwicGhvbmVJZCI6IjhmYmIyMjdiLWU2ZTctNDY2MC1hMGQ1LTJjM2M4NTllYTE5ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4MStWOXkwMlY3Q2haQTduNXN1clZrbENPQ1k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3NhUmZqK3Q3VHdZZWI2dnBLYm9OMW9MSHZ3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1STUFMVklOIiwibWUiOnsiaWQiOiIyNjM3MTUzMDU5NzY6MjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoic3VwZXJzdGFyIG11c2ljIGJ5IHppbXRrIiwibGlkIjoiNjU3NjUwMjU3Nzk4MTQ6MjZAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKcUFqckVDRU8rRnJzZ0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJCTlJGOFlYLzJvbUE5aFhRQmZieUZ5QW45SG1ueStBSEdOL256bEIxbjNFPSIsImFjY291bnRTaWduYXR1cmUiOiJ0clBkT2s0ZmpEa0VURytmNFFBSFp5R0MxNmZKKy9ic1gyRzhtU0hZYnBSQ29EZTJiYU4rUmxVZmFvcGpOMWFEOW00cVphV0V4REdFOEpNVFRNeVNDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVkp6NVBQSmZFMWVvSTVVbjVSbW9QR0lmdEZDeDVWMis5bGVFa1JueDhhUHRSRHV4VTkwc3REVml3WVloaERobmtGVll3bDNJWE1oQ2JIS09laHEvaGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTUzMDU5NzY6MjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUVRVUmZHRi85cUpnUFlWMEFYMjhoY2dKL1I1cDh2Z0J4amY1ODVRZFo5eCJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYyMzYyMTA5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtZRSJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY KHAN-MD 🤍*",
// set the auto reply massage on status reply  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "mujo",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "KHAN-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "92342758XXXX",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "hoyo",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*superstar is on fire*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/149k8x.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *KHAN-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923146190772",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
