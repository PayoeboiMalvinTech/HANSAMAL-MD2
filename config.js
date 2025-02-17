const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'HANSAMAL-MD=81gR2CLB#vfftYGC3aW6pFKg6Hpyjcf1lOtedNH4Lgpivqrvq1fA' : process.env.SESSION_ID,
GITHUB_USER_NAME: process.env.GITHUB_USER_NAME === undefined ? 'PayoeboiMalvinTech' : process.env.GITHUB_USER_NAME,
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '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' : process.env.GITHUB_AUTH_TOKEN,        
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '263714757857' : process.env.OWNER_NUMBER
};
