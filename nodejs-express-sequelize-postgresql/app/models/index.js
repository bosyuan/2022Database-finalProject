const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.videos = require("./video.model.js")(sequelize, Sequelize);
db.videos = require("./br_videoinfo.model.js")(sequelize, Sequelize);
db.videos = require("./br_videotrending.model.js")(sequelize, Sequelize);
db.videos = require("./ca_videoinfo.model.js")(sequelize, Sequelize);
db.videos = require("./ca_videotrending.model.js")(sequelize, Sequelize);
db.videos = require("./de_videoinfo.model.js")(sequelize, Sequelize);
db.videos = require("./de_videotrending.model.js")(sequelize, Sequelize);
db.videos = require("./fr_videoinfo.model.js")(sequelize, Sequelize);
db.videos = require("./fr_videotrending.model.js")(sequelize, Sequelize);
db.videos = require("./gb_videoinfo.model.js")(sequelize, Sequelize);
db.videos = require("./gb_videotrending.model.js")(sequelize, Sequelize);
db.videos = require("./in_videoinfo.model.js")(sequelize, Sequelize);
db.videos = require("./in_videotrending.model.js")(sequelize, Sequelize);
db.videos = require("./jp_videoinfo.model.js")(sequelize, Sequelize);
db.videos = require("./jp_videotrending.model.js")(sequelize, Sequelize);
db.videos = require("./kr_videoinfo.model.js")(sequelize, Sequelize);
db.videos = require("./kr_videotrending.model.js")(sequelize, Sequelize);
db.videos = require("./mx_videoinfo.model.js")(sequelize, Sequelize);
db.videos = require("./mx_videotrending.model.js")(sequelize, Sequelize);
db.videos = require("./ru_videoinfo.model.js")(sequelize, Sequelize);
db.videos = require("./ru_videotrending.model.js")(sequelize, Sequelize);

module.exports = db;