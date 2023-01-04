<template>
    <div class="flex">
        <div class="filter_background">
            <p class = "filter_text_title"> 篩選條件
                <img src = "@/assets/teampage/minus.svg" class = "filter_plus_minus" v-if = "is_show_list" @click = "click_show_list">
                <img src = "@/assets/teampage/plus.svg" class = "filter_plus_minus" v-else @click = "click_show_list">
            </p>
            
            <ul  v-if = is_show_list>
                <p class = "filter_text" v-for = "country in list" :key = "country">
                <input type="radio" @click = "click_on_radio_list($event)"  :id = "country.text" :value = "country.text" v-model = "list_select">
                {{country.text}}
                </p>
            </ul>	
            
        </div>
        <div  class = "videos">
          <div> fuck my live </div>
          <ul>
            <div v-for="video in videos" :key = "video.title" >
              <div class = "main_video_box">
                <div>
                <a :href = video_id_to_link(video.video_id) class = 'title'>{{ video.title }}</a>
                <div class = "flex">
                  <img :src="video.thumbnail_link" :alt="video.title" class = 'pic'>
                  <div class = 'channel_box'>
                    <a :href = channel_id_to_link(video.channel_id) class = 'channel_title'>頻道: {{ video.channel_title }}</a>
                    <p class = 'date'>發布時間: {{video.publish_at}}</p>
                    <p class = 'date'>發燒日期: {{video.trending_date}}</p>
                  </div>
                  <div>
                    <div class = 'flex_1'>
                      <img src = '../assets/play.png' class = 'icon'>
                      <p class = 'digit'>   : {{video.view_count}}</p>
                    </div>
                    <div class = 'flex_1'>
                      <img src = '../assets/like.png' class = 'icon'>
                      <p class = 'digit'>   : {{video.likes}}</p>
                    </div>
                    <div class = 'flex_1'>
                      <img src = '../assets/dislike.png' class = 'icon'>
                      <p class = 'digit'>   : {{video.dislikes}}</p>
                    </div>
                    <div class = 'flex_1'>
                      <img src = '../assets/comment.png' class = 'icon'>
                      <p class = 'digit'>   : {{video.comment_count}}</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </ul>
  
        </div>
    </div>
    
  </template>
  
  <script>
  import BRDataService from "../services/BRDataService";

  export default {
    data() {
      return {
        videos: [
        { video_id:"s9FH4rDMvds",
          title: 'LEVEI UM FORA? FINGI ESTAR APAIXONADO POR ELA!', 
          publish_at:'2020-08-11T22:21:49Z',
          channel_id: 'UCGfBwrCoi9ZJjKiUK8MmJNw',
          channel_title:'Pietro Guedes',
          categoty_id:22,
          trending_date:'2020-08-12T00:00:00Z',
          tags:'pietro|guedes|ingrid|ohara|pingrid|vlog|amigos|jully|molina|mansão|mansao|dos|youtubers|gkhouse',
          view_count:111111,
          likes:111111,
          dislikes:11111,
          comment_count:111112,
          thumbnail_link: 'https://i.ytimg.com/vi/s9FH4rDMvds/default.jpg',
          comments_disabled:false,
          ratings_disabled:false,
        },
        { video_id:"jbGRowa5tIk",title: 'ITZY “Not Shy” M/V TEASER', channel_id: 'UCaO6TYtlC8U5ttz62hTrZgg', thumbnail_link: 'https://i.ytimg.com/vi/jbGRowa5tIk/default.jpg', isFav: false },
        { video_id:"3EfkCrXKZNs",title: 'Oh Juliana PARÓDIA - MC Niack', channel_id: 'UCoXZmVma073v5G1cW82UKkA', thumbnail_link: 'https://i.ytimg.com/vi/3EfkCrXKZNs/default.jpg', isFav: true },
        ],
        list: [
          { text: '前十最多觀看' },
          { text: '前十最多喜歡' },
          { text: '前十最多不喜歡' },
          { text: '前十留言數最多' }
        ],
        is_show_list: false,
        list_select: ''
      }
    },
    methods: {
      click_show_list() {
        this.is_show_list = !this.is_show_list
      },

      click_on_radio_list($event) {
        console.log($event.target._value);
        if ('前十最多觀看' == $event.target._value) {
          this.search_top_view();
          console.log("check");
        }
      },

      search_top_view() {
        BRDataService.getTopView()
        .then(response => {
          this.videos = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      },
      
      video_id_to_link(id){
        return "https://www.youtube.com/watch?v="+id
      },
      
      channel_id_to_link(id){
        return "https://www.youtube.com/channel/"+id
      },
      
      retrieveVideos() {
        BRDataService.getAll()
          .then(response => {
            this.videos = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      refreshList() {
        this.retrieveVideos();
        this.currentVideo = null;
        this.currentIndex = -1;
      },
  
      setActiveVideo(video, index) {
        this.currentVideo = video;
        this.currentIndex = video ? index : -1;
      },
  
      removeAllVideos() {
        BRDataService.deleteAll()
          .then(response => {
            console.log(response.data);
            this.refreshList();
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
  }
  </script>
  
  <style>
  .filter_background {
    background: #f5f5f5;
    padding-top: 13px;
    padding-bottom: 13px;
    height: fit-content;
    width:300px;
    box-shadow: inset -4px -4px 8px rgba(221, 220, 220, 0.8),
      inset 4px 4px 8px rgba(187, 187, 187, 0.8);
    border-radius: 32px;
  }
  .filter_plus_minus {
    float: right;
    margin-right: 26px;
    text-align: right;
  }
  .filter_text {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    align-items: center;
    text-align: left;
    margin-left: 26px;
    color: #7190fe;
  }
  .filter_text_title {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    margin-left: 26px;
    color: #7190fe;
    justify-content: space-between;
  }
  .filter_line {
    width: auto;
    background: linear-gradient(
      259deg,
      #d39cff -9.61%,
      rgba(180, 197, 254, 0.852278) 62.12%,
      rgba(147, 241, 254, 0.695417) 102.26%,
      rgba(240, 222, 255, 0.32) 121%
    );
  }
  .flex{
    display: flex;
  }
  .flex_1{
    display: flex;
    align-items: center;
  }
  .main_video_box {
    padding:20px;
    margin : 20px;
    width: 900px;
    left: 0px;
    top: 0px;
    border-radius: 20px;
    background-color: white;
    box-shadow: 4px 4px 4px 0px #BBCAFACF,
                4px 4px 4px 0px #E4F4FF inset;
  }
  .channel_box{
    margin:10px;
    margin-left:40px;
    margin-right:40px;
  }
  .pic{
    height:200px;
  }
  .channel_title{
    height:100px;
    margin-bottom: 100px;
    text-align: center;
    font-weight: bolder;
  }
  .title{
    font-size: 30px;
    color:blue;
    font-weight: bolder;
  }
  .date{
    margin-top:20px;
    height:60px;
  }
  .icon{
    height:30px;
  }
  .digit{
    margin-top:16px;
  }
  </style>
  