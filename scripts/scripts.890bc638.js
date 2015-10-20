"use strict";var constants={EVENTS:{VIEW_CHANGE:"viewChange"}};console.log(constants),angular.module("lilivicApp",["ngRoute","ngTouch","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/home",{templateUrl:"views/home.html",controller:"HomeCtrl",controllerAs:"home"}).when("/works",{templateUrl:"views/works.html",controller:"WorksCtrl",controllerAs:"works"}).when("/shop",{templateUrl:"views/shop.html",controller:"ShopCtrl",controllerAs:"shop"}).when("/blog",{templateUrl:"views/blog.html",controller:"BlogCtrl",controllerAs:"blog"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/home"})}]),angular.module("lilivicApp").controller("AboutCtrl",["$rootScope",function(a){a.$broadcast(constants.EVENTS.VIEW_CHANGE)}]),angular.module("lilivicApp").controller("BlogCtrl",["$rootScope",function(a){a.$broadcast(constants.EVENTS.VIEW_CHANGE)}]),angular.module("lilivicApp").controller("HomeCtrl",["$rootScope","$scope","$timeout",function(a,b,c){b.coverClass="hide",b.coverCounter=0;var d=function(){b.coverClass="hide",c(f(),100)},e=function(){b.coverClass="fade_out_animation home_cover_background_"+b.coverCounter,c(d,950)},f=function(){b.coverClass="hide",b.coverCounter++,8===b.coverCounter&&(b.coverCounter=1),b.coverClass="fade_in_animation home_cover_background_"+b.coverCounter,c(e,1e4)};c(f,100),a.$broadcast(constants.EVENTS.VIEW_CHANGE)}]);var labels={en:{about:"Bio",blog:"Blog",shop:"Shop",soon:"Soon",works:"Gallery"},pt_BR:{about:"Bio",blog:"Blog",shop:"Shop",soon:"Em breve",works:"Galeria"}};angular.module("lilivicApp").controller("NavigationCtrl",["$scope","$location",function(a,b){a.currentI18n="pt_BR",a.setI18n=function(b){a.currentI18n=b,a.label=labels[a.currentI18n]},a.setI18n(a.currentI18n),a.labelLinkClass=function(b){var c="";return b===a.currentI18n&&(c+="selected"),c},a.viewLinkClass=function(a){var c="";return"/"+a===b.path()&&(c+="selected"),c}}]),angular.module("lilivicApp").controller("ShopCtrl",["$rootScope",function(a){a.$broadcast(constants.EVENTS.VIEW_CHANGE)}]),angular.module("lilivicApp").controller("WorksCtrl",["$rootScope","$scope",function(a,b){b.interval=3e4,b.noWrapSlides=!1,b.slides=[],b.imageQuantity=9;for(var c=1;c<b.imageQuantity+1;c++)b.slides.push({image:"/images/works/"+c+".jpg"});a.$broadcast(constants.EVENTS.VIEW_CHANGE)}]),angular.module("lilivicApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="row"> <div class="col-xs-12"> <h2>em breve / soon</h2> </div> </div>'),a.put("views/blog.html",'<div class="page-content"> <iframe src="https://lilivicgallery.wordpress.com/" frameborder="0"></iframe> </div>'),a.put("views/home.html",'<!-- prefetch --> <div ng-show="false"> <img src="images/illustration_cover.jpg"> <img src="images/muBS_cover.jpg"> <img src="images/cards_cover_1.jpg"> <img src="images/cards_cover_2.jpg"> <img src="images/cards_cover_3.jpg"> <img src="images/muDP_cover.jpg"> <img src="images/muNA_cover.jpg"> </div> <div class="home_cover" ng-class="coverClass"></div>'),a.put("views/shop.html",'<div class="row"> <div class="col-xs-12"> <h2>em breve / soon</h2> </div> </div>'),a.put("views/works.html",'<div class="row"> <div class="col-xs-12"> <h2>em breve / soon</h2> </div> </div>')}]);