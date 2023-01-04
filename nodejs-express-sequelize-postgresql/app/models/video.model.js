module.exports = (sequelize, Sequelize) => {
    const Video = sequelize.define("video", {
      video_id: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING
      },
      publishedAt: {
        type: Sequelize.DATE
      },
      channelId: {
        type: Sequelize.STRING
      },
      channelTitle: {
        type: Sequelize.STRING
      },
      categoryId: {
        type: Sequelize.INTEGER
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
      },
      thumbnail_link: {
        type: Sequelize.STRING
      },
      comments_disabled: {
        type: Sequelize.BOOLEAN
      },
      ratings_disabled: {
        type: Sequelize.BOOLEAN
      },
      description: {
        type: Sequelize.TEXT
      }
    });
  
    return Video;
  };