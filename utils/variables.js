const config = require("./../config.json");
let token;
let mongodb;

if (config.dev) {
    token = process.env.token;
    mongodb = process.env.database;
} if (!config.dev) {
    token = process.env.token;
    mongodb = process.env.database;
    
};



module.exports = { config, token, mongodb };
