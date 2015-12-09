"use strict";var constants={EVENTS:{VIEW_CHANGE:"viewChange"}};console.log(constants),angular.module("lilivicApp",["ngRoute","ngTouch","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/home",{templateUrl:"views/home.html",controller:"HomeCtrl",controllerAs:"home"}).when("/works/:section",{templateUrl:"views/works.html",controller:"WorksCtrl",controllerAs:"works"}).when("/shop",{templateUrl:"views/shop.html",controller:"ShopCtrl",controllerAs:"shop"}).when("/blog",{templateUrl:"views/blog.html",controller:"BlogCtrl",controllerAs:"blog"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/home"})}]),angular.module("lilivicApp").service("i18n",function(){var a={en:{about:"Bio",blog:"Blog",shop:"Shop",soon:"Soon",works:"Gallery",works_draw:"Draws",works_shape:"Shapes",works_wall:"Walls"},pt:{about:"Bio",blog:"Blog",shop:"Shop",soon:"Em breve",works:"Galeria",works_draw:"Ilustrações",works_shape:"Shapes",works_wall:"Murais"}},b=null;return b=navigator.language.startsWith("pt")?"pt":"en",{getMessage:function(c){return a[b][c]},init:function(a){a.getMessage=this.getMessage,a.setLanguage=this.setLanguage},setLanguage:function(a){b=a},getLanguage:function(){return b}}}),angular.module("lilivicApp").controller("AboutCtrl",["$rootScope","$scope","i18n",function(a,b,c){c.init(b),a.$broadcast(constants.EVENTS.VIEW_CHANGE)}]),angular.module("lilivicApp").controller("BlogCtrl",["$rootScope",function(a){a.$broadcast(constants.EVENTS.VIEW_CHANGE)}]),angular.module("lilivicApp").controller("HomeCtrl",["$rootScope","$scope","$timeout",function(a,b,c){b.coverClass="hide",b.coverCounter=0;var d=function(){b.coverClass="hide",c(f(),100)},e=function(){b.coverClass="fade_out_animation home_cover_background_"+b.coverCounter,c(d,950)},f=function(){b.coverClass="hide",b.coverCounter++,8===b.coverCounter&&(b.coverCounter=1),b.coverClass="fade_in_animation home_cover_background_"+b.coverCounter,c(e,1e4)};c(f,100),a.$broadcast(constants.EVENTS.VIEW_CHANGE)}]),angular.module("lilivicApp").controller("NavigationCtrl",["$scope","$location","i18n",function(a,b,c){c.init(a),a.labelLinkClass=function(a){var b="";return a===c.getLanguage()&&(b+="selected"),b},a.viewLinkClass=function(b){var c="";return a.isCurrentLocation(b)&&(c+="selected"),c},a.isCurrentLocation=function(a){return b.path().indexOf(a)>-1}}]),angular.module("lilivicApp").controller("ShopCtrl",["$rootScope","$scope","i18n",function(a,b,c){c.init(b),a.$broadcast(constants.EVENTS.VIEW_CHANGE)}]),angular.module("lilivicApp").controller("WorksCtrl",["$rootScope","$scope","i18n",function(a,b,c){c.init(b),a.$broadcast(constants.EVENTS.VIEW_CHANGE)}]),angular.module("lilivicApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="container-fluid"> <div class="row"> <div class="col-xs-12"> <h2> <span ng-bind="getMessage(\'soon\')"></span> </h2> </div> </div> </div>'),a.put("views/blog.html",'<div class="page-content"> <iframe src="https://lilivicgallery.wordpress.com/" frameborder="0"></iframe> </div>'),a.put("views/home.html",'<!-- prefetch --> <div ng-show="false"> <img src="images/bg_home_1.jpg"> <img src="images/bg_home_2.jpg"> <img src="images/bg_home_3.jpg"> <img src="images/bg_home_4.jpg"> <img src="images/bg_home_5.jpg"> <img src="images/bg_home_6.jpg"> <img src="images/bg_home_7.jpg"> </div> <div class="home_cover hidden-lg" ng-class="coverClass"></div> <div class="home_video hidden-md hidden-sm hidden-xs"> <video autoplay loop> <source type="video/mp4" src="videos/bg_home.mp4"> </source></video> </div>'),a.put("views/shop.html",'<div class="container-fluid"> <div class="row"> <div class="col-xs-12"> <h2> <span ng-bind="getMessage(\'soon\')"></span> </h2> </div> </div> </div>'),a.put("views/works.html",'<!--<div class="container-fluid works-container">--><!--<div class="row text-center">--><!--<div class="col-xs-4">A</div>--><!--<div class="col-xs-4">B</div>--><!--<div class="col-xs-4">C</div>--><!--</div>--><!--</div>--> <div class="container-fluid"> <div class="row"> <div class="col-xs-12"> <h2> <span ng-bind="getMessage(\'soon\')"></span> </h2> </div> </div> </div>')}]);