const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "XHYPHER:~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNElDRDBVTG8xUmIvN2YyamVTK1lZZnFYblNTVmxYUDJQNVR5emMvZ3RIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVFjZ0R3eHB1bU1ZMkVNdEttYlNwNHFXRllLMkZqdEVXWm5LcjBzU3JuND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQXIzZ1JSSGx3YUFES21QdkN2WWlBamltSk9ycjBDOHp2anB6Q095VzBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNT3ZxSzlEbDBqbnpjMWV3NHkwc1drYWdjL3hHWlFQam1rOStEWW9BWnhrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9PRUpLZWlSRjJ6Uzcyd3crbWJFR2wvc1FHK1dTSkUzS0d4UlVOaFQ0bDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllDT3hweWJjamV0VEpKWlA1czQzY0JTWnl0czA5TUgyR0xuekRzdjZ1UjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUVPY0d6a295MUNsT2ZEUzNkdUJqcjl2cWs5c2dkRkFNUFZBZERsMk8xVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3Q5TG51L0JlSXJvOHAzLzFCZmxOQ2tRTzRJZ0tJcmVrTTRzUUFXQ0lCWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFudHM1U0VrVHFGUUpaeWR1UU11UEVEVXlhWWV6NEs5MWhVeEtyUWhER1pVN2g1Uytvb3NjZkg1ZHNyeFlNdUJ3OUh4TkhvTHNab3lsSTh2aVhWZUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzgsImFkdlNlY3JldEtleSI6IkZKTmR0eTZ4YmRtMWtJV0RNaGJqdE0reDNwVFM4cGVtazF6TWNSakJzOEU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik81THJXNmQxUWctd2NNV3NXWkRzT3ciLCJwaG9uZUlkIjoiOGZjNzUwOTEtNjMzMi00YzcxLThkZjQtNjU5YWViNDk5MjEwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9BMVljZzVyckZPcmVBbnl0eWlXWjhsNkNvYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuRjIwTTYxamx3Y2xxYXNRRGZ4L2kvRzVKREE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTVJNQUxWSU4iLCJtZSI6eyJpZCI6IjI2MzcxNTMwNTk3NjoyM0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJzdXBlcnN0YXIgbXVzaWMgYnkgemltdGsiLCJsaWQiOiI2NTc2NTAyNTc3OTgxNDoyM0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0ppQWpyRUNFTnJ0ck1nR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkJOUkY4WVgvMm9tQTloWFFCZmJ5RnlBbjlIbW55K0FIR04vbnpsQjFuM0U9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik15bE4rTzdWRUhSMkNURE9ZZGFVOVpoaDVjK0lhZGhIZ0tuT2pWUHNyVkJJTlpnZlBpdHlhSitadTNCWnZxSGdmVE1sR3pXak9XeUp1cUI2c1JpR0J3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkTnZ6V2M5YWU2ck5HelhmZ0hnMndVTmhMeVkxeG5pbXF6eVBqeXpiaEJsVVVURlpJNnRQY0Z3TEovTUpLNTlvUWZjb2FROWtMSkJDWDlEWDE3Y2lCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MzcxNTMwNTk3NjoyM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRVFVSZkdGLzlxSmdQWVYwQVgyOGhjZ0ovUjVwOHZnQnhqZjU4NVFkWjl4In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjIzNDI2MzIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQWNSIn0=",
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
