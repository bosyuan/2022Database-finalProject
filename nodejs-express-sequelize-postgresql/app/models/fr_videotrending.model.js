module.exports = (sequelize, Sequelize) => {
    const Fr_videotrending = sequelize.define("fr_videotrending", {
      video_id: {
        type: Sequelize.STRING(100),
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING(500)
      },
      channelid: {
        type: Sequelize.STRING(500)
      },
      channeltitle: {
        type: Sequelize.STRING(500)
      },
      trending_date: {
        type: Sequelize.DATE,
        primaryKey: true
      },
      view_count: {
        type: Sequelize.INTEGER
      },
      likes: {
        type: Sequelize.INTEGER
      },
      dislikes: {
        type: Sequelize.INTEGER
      },
      comment_count: {
        type: Sequelize.INTEGER
      }
    }, 
    {
      timestamps: false,
    });
  
    return Fr_videotrending;
  };