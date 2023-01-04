module.exports = (sequelize, Sequelize) => {
    const Br_videoinfo = sequelize.define("br_videoinfo", {
      video_id: {
        type: Sequelize.STRING(100)
      },
      publishedat: {
        type: Sequelize.STRING(100)
      },
      categoryid: {
        type: Sequelize.INTEGER
      },
      tags: {
        type: Sequelize.STRING(100)
      },
      thumbnail_link: {
        type: Sequelize.STRING(500)
      },
      comments_disabled: {
        type: Sequelize.STRING(10)
      },
      ratings_disabled: {
        type: Sequelize.STRING(10)
      }
    });
  
    return Br_videoinfo;
  };