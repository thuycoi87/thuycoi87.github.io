webpackJsonp([1],{"4F4/":function(t,n){},"4TB6":function(t,n,e){t.exports=e.p+"static/img/facebook-messenger.e53a5c8.png"},"7dei":function(t,n){},GkQz:function(t,n,e){t.exports=e.p+"static/img/vegetable.03600d2.jpg"},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("7+uW"),s={name:"App",mounted:function(){var t=this.$route.path;"/"!==t&&(this.$router.push("/"),setTimeout(function(n){document.getElementById(t.substring(1)).scrollIntoView({behavior:"smooth"}),setTimeout(function(){return window.location.hash=t.substring(1)},250)},1e3))}},c={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var r,a,o=e("VU/8")(s,c,!1,function(t){e("hLe0")},null,null).exports,u=e("/ocq"),d=e("Xxa5"),h=e.n(d),p=e("Dd8w"),l=e.n(p),m=e("exGp"),v=e.n(m),f=e("E/LO"),_=(e("881v"),e("t6Iv")),g=this,C=f.a.initializeApp({apiKey:"AIzaSyCqtJl94CcBeKsJHDfhVPevwnrgxGQqo5w",authDomain:"thuycoishop.firebaseapp.com",projectId:"thuycoishop",storageBucket:"thuycoishop.appspot.com",messagingSenderId:"145463122858",appId:"1:145463122858:web:deff296034c7d5f34729d3",measurementId:"G-YCCCGX16Z3"}),y=Object(_.c)(C),k=(r=v()(h.a.mark(function t(n){var e,i;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(_.a)(n,"allProducts"),t.next=3,Object(_.b)(e);case 3:return i=t.sent,t.abrupt("return",i.docs.map(function(t){return l()({},t.data(),{productId:t.id})}));case 5:case"end":return t.stop()}},t,g)})),function(t){return r.apply(this,arguments)}),I=(a=v()(h.a.mark(function t(n){var e,i;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(_.a)(n,"shopInformation"),t.next=3,Object(_.b)(e);case 3:return i=t.sent,t.abrupt("return",i.docs.map(function(t){return t.data()})[0]);case 5:case"end":return t.stop()}},t,g)})),function(t){return a.apply(this,arguments)}),w={name:"Header",methods:{openMessenger:function(){window.open("http://m.me/trantiendangkhoa0710","_blank")}},data:function(){return{shopName:"thuycoishop"}},mounted:function(){var t=this;I(y).then(function(n){return t.shopName=n.shopName})}},b={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"shop-header-container"},[n("div",{staticClass:"shop-header"},[n("p",{staticClass:"header-title"},[this._v("\n      "+this._s(this.shopName)+"\n    ")]),this._v(" "),n("div",{staticClass:"contact-icon",on:{click:this.openMessenger}},[n("img",{staticClass:"contact-icon-img",attrs:{src:e("4TB6"),alt:"Liên Hệ"}})])])])},staticRenderFns:[]};var x=e("VU/8")(w,b,!1,function(t){e("iJ2s")},"data-v-16ccefc3",null).exports,S={name:"Introduction",data:function(){return{shopDesc:"Thủy Còi Shop (thuycoishop) chuyên kinh doanh các loại thực phẩm SẠCH và chất lượng từ các miền quê của người quen, gửi qua xe khách trong ngày và ship đến tận tay khách hàng với chi phí tốt nhất."}},mounted:function(){var t=this;I(y).then(function(n){return t.shopDesc=n.shopDesc})}},M={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"intro-container"},[n("div",{staticClass:"intro-main-div"},[n("p",{staticClass:"intro-text"},[this._v("\n      "+this._s(this.shopDesc)+"\n    ")])])])},staticRenderFns:[]};var E=e("VU/8")(S,M,!1,function(t){e("nmg6")},"data-v-408d3e6e",null).exports,T={name:"Product",props:{title:String,description:String,price:String,shipPrice:String,imgUrl:Array,isInActive:Boolean,productId:String},data:function(){return{imgIndex:0}},methods:{scrollToThis:function(t){window.location.hash=t}}},D={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:{"product-container":!0,"inactive-product-container":t.isInActive},attrs:{id:t.productId},on:{click:function(){return t.scrollToThis(t.productId)}}},[e("div",{staticClass:"product-info"},[e("div",{staticClass:"product-description"},[e("div",{staticStyle:{"margin-bottom":"5px",width:"100%","font-family":"Futura, serif","font-weight":"bold","font-size":"20px"}},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),e("div",{staticStyle:{width:"100%","font-family":"Dancing_Script, serif"}},[t._v("\n        "+t._s(t.description)+"\n      ")])]),t._v(" "),e("div",{staticClass:"product-img-container",on:{click:function(n){t.imgIndex=(t.imgIndex+1)%(t.imgUrl.length>0?t.imgUrl.length:1)}}},[e("img",{staticClass:"product-img",attrs:{src:t.imgUrl[t.imgIndex],alt:"minh hoa"}})])]),t._v(" "),e("div",{staticStyle:{width:"100%","font-family":"Dancing_Script, serif"}},[e("p",[e("b",[t._v("Giá:")]),t._v(" "+t._s(t.price)+"\n    ")])]),t._v(" "),e("div",{staticStyle:{width:"100%","font-family":"Dancing_Script, serif"}},[e("p",[e("b",[t._v("Giá ship")]),t._v(": "+t._s(t.shipPrice)+"\n    ")])])])},staticRenderFns:[]};var H=[],P={name:"Market",components:{Product:e("VU/8")(T,D,!1,function(t){e("gCRE")},"data-v-df550a04",null).exports},data:function(){return{leftMenuIsChosen:!0,allProducts:H}},mounted:function(){var t=this;k(y).then(function(n){return t.allProducts=n})}},U={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"market-container"},[t._m(0),t._v(" "),e("div",{staticClass:"margetMenu"},[e("div",{class:{menuHalf:!0,menuIsChosen:t.leftMenuIsChosen},on:{click:function(n){t.leftMenuIsChosen=!0}}},[e("a",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{href:"#active"}},[t._v("\n        Có hàng\n      ")])]),t._v(" "),e("div",{class:{menuHalf:!0,menuIsChosen:!t.leftMenuIsChosen},on:{click:function(n){t.leftMenuIsChosen=!1}}},[e("a",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{href:"#inActive"}},[t._v("\n        Chưa có hàng\n      ")])])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"products-container"},t._l(t.allProducts.filter(function(t){return t.active}),function(t){return e("Product",{key:JSON.stringify(t),attrs:{title:t.product_name,description:t.product_description,price:t.product_price,"ship-price":t.product_ship_price,"img-url":t.imgUrl,"product-id":t.productId}})}),1),t._v(" "),t._m(3),t._v(" "),e("div",{staticClass:"products-container"},t._l(t.allProducts.filter(function(t){return!t.active}),function(t){return e("Product",{key:JSON.stringify(t),attrs:{title:t.product_name,description:t.product_description,price:t.product_price,"ship-price":t.product_ship_price,"img-url":t.imgUrl,"is-in-active":!0,"product-id":t.productId}})}),1)])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticStyle:{width:"100%"}},[n("h2",{staticClass:"marketMenuTitle"},[this._v("Tất cả sản phẩm")]),this._v(" "),n("div",{staticClass:"marketMenuDesc"},[this._v("Rau, thịt, hải sản,... đều có!!!")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticStyle:{width:"100%","margin-top":"20px"}},[n("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e("GkQz"),alt:"rau cu"}})])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticStyle:{width:"100%"},attrs:{id:"active"}},[n("h2",{staticClass:"marketMenuTitle"},[this._v("Sản phẩm có hàng")]),this._v(" "),n("div",{staticClass:"marketMenuDesc"},[this._v("Các sản phẩm ở đây em đang có hàng ạ")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticStyle:{width:"100%","margin-top":"50px"},attrs:{id:"inActive"}},[n("h2",{staticClass:"marketMenuTitle"},[this._v("Sản phẩm chưa có hàng")]),this._v(" "),n("div",{staticClass:"marketMenuDesc"},[this._v("Các sản phẩm ở đây em chưa có hàng ạ, các chị cứ theo dõi nhé, lúc nào có em sẽ cập nhật ạ.")])])}]};var $={name:"Home",components:{Market:e("VU/8")(P,U,!1,function(t){e("7dei")},"data-v-c211b52e",null).exports,Introduction:E,Header:x}},A={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("Header"),this._v(" "),n("div",{staticClass:"mainHomeBody"},[n("Introduction"),this._v(" "),n("Market")],1)],1)},staticRenderFns:[]};var F=e("VU/8")($,A,!1,function(t){e("4F4/")},"data-v-2abb7133",null).exports;i.a.use(u.a);var O=new u.a({routes:[{path:"/",name:"Home",component:F}]}),R=e("hnaQ");i.a.use(R.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:O,components:{App:o},template:"<App/>"})},gCRE:function(t,n){},hLe0:function(t,n){},iJ2s:function(t,n){},nmg6:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.df41ec708756d018ef7a.js.map