module.exports = (sequelize, Sequelize) => {
    const Kr_videotrending = sequelize.define("kr_videotrending", {
      video_id: {
        type: Sequelize.STRING(100)
      },
      title: {
        type: Sequelize.STRING(500)
      },
      channelId: {
        type: Sequelize.STRING(500)
      },
      channelTitle: {
        type: Sequelize.STRING(500)
      },
      trending_date: {
        type: Sequelize.DATE
      },
      view_count: {
        type: Sequelize.INTEGER
      },
      like: {
        type: Sequelize.INTEGER
      },
      dislike: {
        type: Sequelize.INTEGER
      },
      comment_count: {
        type: Sequelize.INTEGER
      }
    });
  
    return Kr_videotrending;
  };