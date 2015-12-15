"use strict";var constants={EVENTS:{VIEW_CHANGE:"viewChange"}};console.log(constants),angular.module("lilivicApp",["ngRoute","ngTouch","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/home",{templateUrl:"views/home.html",controller:"HomeCtrl",controllerAs:"home"}).when("/works/:section",{templateUrl:"views/works.html",controller:"WorksCtrl",controllerAs:"works"}).when("/shop",{templateUrl:"views/shop.html",controller:"ShopCtrl",controllerAs:"shop"}).when("/blog",{templateUrl:"views/blog.html",controller:"BlogCtrl",controllerAs:"blog"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/home"})}]),angular.module("lilivicApp").service("i18n",function(){var a={en:{about:"Bio",blog:"Blog",shop:"Shop",soon:"Soon",works:"Gallery",works_draw:"Draws",works_shape:"Shapes",works_wall:"Walls"},pt:{about:"Bio",blog:"Blog",shop:"Shop",soon:"Em breve",works:"Galeria",works_draw:"Ilustrações",works_shape:"Shapes",works_wall:"Murais"}},b=null;return b=navigator.language.startsWith("pt")?"pt":"en",{getMessage:function(c){return a[b][c]},init:function(a){a.getMessage=this.getMessage,a.setLanguage=this.setLanguage},setLanguage:function(a){b=a},getLanguage:function(){return b}}}),angular.module("lilivicApp").controller("AboutCtrl",["$rootScope","$scope","i18n",function(a,b,c){c.init(b),a.$broadcast(constants.EVENTS.VIEW_CHANGE)}]),angular.module("lilivicApp").controller("BlogCtrl",["$rootScope",function(a){a.$broadcast(constants.EVENTS.VIEW_CHANGE)}]),angular.module("lilivicApp").controller("HomeCtrl",["$rootScope","$scope","$timeout",function(a,b,c){b.coverClass="hide",b.coverCounter=0;var d=function(){b.coverClass="hide",c(f(),100)},e=function(){b.coverClass="fade_out_animation home_cover_background_"+b.coverCounter,c(d,950)},f=function(){b.coverClass="hide",b.coverCounter++,8===b.coverCounter&&(b.coverCounter=1),b.coverClass="fade_in_animation home_cover_background_"+b.coverCounter,c(e,1e4)};c(f,100),a.$broadcast(constants.EVENTS.VIEW_CHANGE)}]),angular.module("lilivicApp").controller("NavigationCtrl",["$scope","$location","i18n",function(a,b,c){c.init(a),a.labelLinkClass=function(a){var b="";return a===c.getLanguage()&&(b+="selected"),b},a.viewLinkClass=function(b){var c="";return a.isCurrentLocation(b)&&(c+="selected"),c},a.isCurrentLocation=function(a){return b.path().indexOf(a)>-1}}]),angular.module("lilivicApp").controller("ShopCtrl",["$rootScope","$scope","i18n",function(a,b,c){c.init(b),a.$broadcast(constants.EVENTS.VIEW_CHANGE)}]),angular.module("lilivicApp").controller("WorksCtrl",["$rootScope","$scope","$routeParams","$modal","$window","i18n",function(a,b,c,d,e,f){switch(f.init(b),b.currentSection=c.section,b.currentSection){case"draw":b.currentSectionImageCount=21;break;case"wall":b.currentSectionImageCount=20}b.open=function(a){e.innerWidth>768&&d.open({animation:!0,templateUrl:"workModalContent.html",controller:"WorkModalCtrl",size:"lg",resolve:{image:function(){return a},imageCount:function(){return b.currentSectionImageCount},imageNumber:function(){return a.substring(a.lastIndexOf("_")+1,a.lastIndexOf("."))}}})},b.isCurrentSection=function(a){return b.currentSection===a},a.$broadcast(constants.EVENTS.VIEW_CHANGE)}]).controller("WorkModalCtrl",["$scope","$modalInstance","image","imageCount","imageNumber",function(a,b,c,d,e){a.image=c,a.imageCount=d,a.imageNumber=e,a.previous=function(){a.imageNumber--,a.imageNumber<=0&&(a.imageNumber=a.imageCount),a.updateImage()},a.next=function(){a.imageNumber++,a.imageNumber>a.imageCount&&(a.imageNumber=1),a.updateImage()},a.updateImage=function(){var b=c.substring(0,c.lastIndexOf("_")+1);a.image=b+a.imageNumber+".jpg"},a.dismiss=function(){b.dismiss("cancel")}}]),angular.module("lilivicApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="container-fluid"> <div class="row"> <div class="col-xs-12"> <h2> <span ng-bind="getMessage(\'soon\')"></span> </h2> </div> </div> </div>'),a.put("views/blog.html",'<div class="page-content"> <iframe src="https://lilivicgallery.wordpress.com/" frameborder="0"></iframe> </div>'),a.put("views/home.html",'<!-- prefetch --> <div ng-show="false"> <img src="images/bg_home_1.jpg"> <img src="images/bg_home_2.jpg"> <img src="images/bg_home_3.jpg"> <img src="images/bg_home_4.jpg"> <img src="images/bg_home_5.jpg"> <img src="images/bg_home_6.jpg"> <img src="images/bg_home_7.jpg"> </div> <div class="home_cover hidden-lg hidden-md" ng-class="coverClass"></div> <div class="home_video hidden-sm hidden-xs"> <video autoplay loop> <source type="video/mp4" src="videos/bg_home.mp4" poster="images/bg_home_1.jpg"> </source></video> </div> <div class="home_video_mask"></div>'),a.put("views/shop.html",'<div class="container-fluid"> <div class="row"> <div class="col-xs-12"> <h2> <span ng-bind="getMessage(\'soon\')"></span> </h2> </div> </div> </div>'),a.put("views/works.html",'<script type="text/ng-template" id="workModalContent.html"><div class="modal-body">\n    <div class="container-fluid">\n      <div class="row">\n        <div class="col-xs-12">\n          <a href="javascript:void(0)" class="work-navigation-link" ng-click="previous(imageNumber)">\n            <span class="glyphicon glyphicon-menu-left"></span>\n          </a>\n          <a href="javascript:void(0)" class="thumbnail" ng-click="dismiss();">\n            <img class="work-image" ng-src="{{image}}">\n          </a>\n          <a href="javascript:void(0)" class="work-navigation-link" ng-click="next(imageNumber)">\n            <span class="glyphicon glyphicon-menu-right"></span>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div></script> <div class="container-fluid works-container" ng-show="isCurrentSection(\'wall\')"> <div class="row text-center"> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_wall_1.jpg\')"> <div class="work-thumbnail work-wall-thumbnail-1"></div> </a> </div> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_wall_2.jpg\')"> <div class="work-thumbnail work-wall-thumbnail-2"></div> </a> </div> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_wall_3.jpg\')"> <div class="work-thumbnail work-wall-thumbnail-3"></div> </a> </div> </div> <div class="row text-center"> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_wall_4.jpg\')"> <div class="work-thumbnail work-wall-thumbnail-4"></div> </a> </div> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_wall_5.jpg\')"> <div class="work-thumbnail work-wall-thumbnail-5"></div> </a> </div> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_wall_6.jpg\')"> <div class="work-thumbnail work-wall-thumbnail-6"></div> </a> </div> </div> <div class="row text-center"> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_wall_7.jpg\')"> <div class="work-thumbnail work-wall-thumbnail-7"></div> </a> </div> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_wall_8.jpg\')"> <div class="work-thumbnail work-wall-thumbnail-8"></div> </a> </div> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_wall_9.jpg\')"> <div class="work-thumbnail work-wall-thumbnail-9"></div> </a> </div> </div> <div class="row text-center"> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_wall_10.jpg\')"> <div class="work-thumbnail work-wall-thumbnail-10"></div> </a> </div> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_wall_11.jpg\')"> <div class="work-thumbnail work-wall-thumbnail-11"></div> </a> </div> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_wall_12.jpg\')"> <div class="work-thumbnail work-wall-thumbnail-12"></div> </a> </div> </div> <div class="row text-center"> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_wall_13.jpg\')"> <div class="work-thumbnail work-wall-thumbnail-13"></div> </a> </div> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_wall_14.jpg\')"> <div class="work-thumbnail work-wall-thumbnail-14"></div> </a> </div> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_wall_15.jpg\')"> <div class="work-thumbnail work-wall-thumbnail-15"></div> </a> </div> </div> <div class="row text-center"> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_wall_16.jpg\')"> <div class="work-thumbnail work-wall-thumbnail-16"></div> </a> </div> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_wall_17.jpg\')"> <div class="work-thumbnail work-wall-thumbnail-17"></div> </a> </div> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_wall_18.jpg\')"> <div class="work-thumbnail work-wall-thumbnail-18"></div> </a> </div> </div> <div class="row text-center"> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_wall_19.jpg\')"> <div class="work-thumbnail work-wall-thumbnail-19"></div> </a> </div> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_wall_20.jpg\')"> <div class="work-thumbnail work-wall-thumbnail-20"></div> </a> </div> </div> </div> <div class="container-fluid works-container" ng-show="isCurrentSection(\'draw\')"> <div class="row text-center"> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_draw_1.jpg\')"> <div class="work-thumbnail work-draw-thumbnail-1"></div> </a> </div> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_draw_2.jpg\')"> <div class="work-thumbnail work-draw-thumbnail-2"></div> </a> </div> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_draw_3.jpg\')"> <div class="work-thumbnail work-draw-thumbnail-3"></div> </a> </div> </div> <div class="row text-center"> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_draw_4.jpg\')"> <div class="work-thumbnail work-draw-thumbnail-4"></div> </a> </div> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_draw_5.jpg\')"> <div class="work-thumbnail work-draw-thumbnail-5"></div> </a> </div> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_draw_6.jpg\')"> <div class="work-thumbnail work-draw-thumbnail-6"></div> </a> </div> </div> <div class="row text-center"> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_draw_7.jpg\')"> <div class="work-thumbnail work-draw-thumbnail-7"></div> </a> </div> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_draw_8.jpg\')"> <div class="work-thumbnail work-draw-thumbnail-8"></div> </a> </div> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_draw_9.jpg\')"> <div class="work-thumbnail work-draw-thumbnail-9"></div> </a> </div> </div> <div class="row text-center"> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_draw_10.jpg\')"> <div class="work-thumbnail work-draw-thumbnail-10"></div> </a> </div> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_draw_11.jpg\')"> <div class="work-thumbnail work-draw-thumbnail-11"></div> </a> </div> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_draw_12.jpg\')"> <div class="work-thumbnail work-draw-thumbnail-12"></div> </a> </div> </div> <div class="row text-center"> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_draw_13.jpg\')"> <div class="work-thumbnail work-draw-thumbnail-13"></div> </a> </div> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_draw_14.jpg\')"> <div class="work-thumbnail work-draw-thumbnail-14"></div> </a> </div> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_draw_15.jpg\')"> <div class="work-thumbnail work-draw-thumbnail-15"></div> </a> </div> </div> <div class="row text-center"> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_draw_16.jpg\')"> <div class="work-thumbnail work-draw-thumbnail-16"></div> </a> </div> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_draw_17.jpg\')"> <div class="work-thumbnail work-draw-thumbnail-17"></div> </a> </div> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_draw_18.jpg\')"> <div class="work-thumbnail work-draw-thumbnail-18"></div> </a> </div> </div> <div class="row text-center"> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_draw_19.jpg\')"> <div class="work-thumbnail work-draw-thumbnail-19"></div> </a> </div> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_draw_20.jpg\')"> <div class="work-thumbnail work-draw-thumbnail-20"></div> </a> </div> <div class="col-md-4"> <a href="javascript:void(0)" class="thumbnail" ng-click="open(\'images/work_draw_21.jpg\')"> <div class="work-thumbnail work-draw-thumbnail-21"></div> </a> </div> </div> </div>')}]);