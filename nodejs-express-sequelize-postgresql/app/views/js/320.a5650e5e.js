"use strict";(self["webpackChunkvue_3_crud"]=self["webpackChunkvue_3_crud"]||[]).push([[320],{2320:function(e,t,i){i.r(t),i.d(t,{default:function(){return V}});var l=i(6252),s=i(9963),n=i(3577),o=i(8297),_=i(6481);const c={class:"flex"},d={class:"filter_background"},r={class:"filter_text_title"},a={key:0},u=["id","value"],h={class:"videos"},g=(0,l._)("div",null," fuck my live ",-1),v={class:"main_video_box"},w=["href"],k={class:"flex"},p=["src","alt"],m={class:"channel_box"},f=["href"];function b(e,t,i,b,x,y){return(0,l.wg)(),(0,l.iD)("div",c,[(0,l._)("div",d,[(0,l._)("p",r,[(0,l.Uk)(" 篩選條件 "),x.is_show_list?((0,l.wg)(),(0,l.iD)("img",{key:0,src:o,class:"filter_plus_minus",onClick:t[0]||(t[0]=(...e)=>y.click_show_list&&y.click_show_list(...e))})):((0,l.wg)(),(0,l.iD)("img",{key:1,src:_,class:"filter_plus_minus",onClick:t[1]||(t[1]=(...e)=>y.click_show_list&&y.click_show_list(...e))}))]),x.is_show_list?((0,l.wg)(),(0,l.iD)("ul",a,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(x.list,(e=>((0,l.wg)(),(0,l.iD)("p",{class:"filter_text",key:e},[(0,l.wy)((0,l._)("input",{type:"radio",onClick:t[2]||(t[2]=e=>y.click_on_radio_list(e)),id:e.text,value:e.text,"onUpdate:modelValue":t[3]||(t[3]=e=>x.list_select=e)},null,8,u),[[s.G2,x.list_select]]),(0,l.Uk)(" "+(0,n.zw)(e.text),1)])))),128))])):(0,l.kq)("",!0)]),(0,l._)("div",h,[g,(0,l._)("ul",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(x.videos,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e.title},[(0,l._)("div",v,[(0,l._)("div",null,[(0,l._)("a",{href:y.video_id_to_link(e.video_id),class:"title"},(0,n.zw)(e.title),9,w),(0,l._)("div",k,[(0,l._)("img",{src:e.thumbnail_link,alt:e.title,class:"pic"},null,8,p),(0,l._)("div",m,[(0,l._)("a",{href:y.channel_id_to_link(e.channel_id)},"頻道: "+(0,n.zw)(e.channel_title),9,f),(0,l._)("p",null,"發布時間: "+(0,n.zw)(e.publish_at),1),(0,l._)("p",null,"發燒日期: "+(0,n.zw)(e.trending_date),1)]),(0,l._)("div",null,[(0,l._)("p",null,"view_count:"+(0,n.zw)(e.view_count),1),(0,l._)("p",null,"likes:"+(0,n.zw)(e.likes),1),(0,l._)("p",null,"dislikes:"+(0,n.zw)(e.dislikes),1),(0,l._)("p",null,"comment_count:"+(0,n.zw)(e.comment_count),1)])])])])])))),128))])])])}var x=i(7417);class y{getAll(){return x.Z.get("/br_videotrending")}get(e){return x.Z.get(`/br_videotrending/${e}`)}getTopView(){return x.Z.get("/br_videotrending/trending")}create(e){return x.Z.post("/br_videotrending",e)}update(e,t){return x.Z.put(`/br_videotrending/${e}`,t)}delete(e){return x.Z["delete"](`/br_videotrending/${e}`)}deleteAll(){return x.Z["delete"]("/br_videotrending")}}var A=new y,Z={data(){return{videos:[{video_id:"s9FH4rDMvds",title:"LEVEI UM FORA? FINGI ESTAR APAIXONADO POR ELA!",publish_at:"2020-08-11T22:21:49Z",channel_id:"UCGfBwrCoi9ZJjKiUK8MmJNw",channel_title:"Pietro Guedes",categoty_id:22,trending_date:"2020-08-12T00:00:00Z",tags:"pietro|guedes|ingrid|ohara|pingrid|vlog|amigos|jully|molina|mansão|mansao|dos|youtubers|gkhouse",view_count:111111,likes:111111,dislikes:11111,comment_count:111112,thumbnail_link:"https://i.ytimg.com/vi/s9FH4rDMvds/default.jpg",comments_disabled:!1,ratings_disabled:!1},{video_id:"jbGRowa5tIk",title:"ITZY “Not Shy” M/V TEASER",channel_id:"UCaO6TYtlC8U5ttz62hTrZgg",thumbnail_link:"https://i.ytimg.com/vi/jbGRowa5tIk/default.jpg",isFav:!1},{video_id:"3EfkCrXKZNs",title:"Oh Juliana PARÓDIA - MC Niack",channel_id:"UCoXZmVma073v5G1cW82UKkA",thumbnail_link:"https://i.ytimg.com/vi/3EfkCrXKZNs/default.jpg",isFav:!0}],list:[{text:"前十最多觀看"},{text:"前十最多喜歡"},{text:"前十最多不喜歡"},{text:"前十留言數最多"}],is_show_list:!1,list_select:""}},methods:{click_show_list(){this.is_show_list=!this.is_show_list},click_on_radio_list(e){console.log(e.target._value),"前十最多觀看"==e.target._value&&(this.search_top_view(),console.log("check"))},search_top_view(){A.getTopView().then((e=>{this.videos=e.data,console.log(e.data)})).catch((e=>{console.log(e)}))},video_id_to_link(e){return"https://www.youtube.com/watch?v="+e},channel_id_to_link(e){return"https://www.youtube.com/channel/"+e},retrieveVideos(){A.getAll().then((e=>{this.videos=e.data,console.log(e.data)})).catch((e=>{console.log(e)}))},refreshList(){this.retrieveVideos(),this.currentVideo=null,this.currentIndex=-1},setActiveVideo(e,t){this.currentVideo=e,this.currentIndex=e?t:-1},removeAllVideos(){A.deleteAll().then((e=>{console.log(e.data),this.refreshList()})).catch((e=>{console.log(e)}))}}},C=i(3744);const D=(0,C.Z)(Z,[["render",b]]);var V=D},8297:function(e,t,i){e.exports=i.p+"img/minus.5a97cff3.svg"},6481:function(e,t,i){e.exports=i.p+"img/plus.d22b316c.svg"}}]);
//# sourceMappingURL=320.a5650e5e.js.map