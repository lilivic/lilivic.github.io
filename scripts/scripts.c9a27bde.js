"use strict";var constants={EVENTS:{VIEW_CHANGE:"viewChange"}};console.log(constants),angular.module("lilivicApp",["ngRoute","ngTouch","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/home",{templateUrl:"views/home.html",controller:"HomeCtrl",controllerAs:"home"}).when("/works",{templateUrl:"views/works.html",controller:"WorksCtrl",controllerAs:"works"}).when("/shop",{templateUrl:"views/shop.html",controller:"ShopCtrl",controllerAs:"shop"}).when("/blog",{templateUrl:"views/blog.html",controller:"BlogCtrl",controllerAs:"blog"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/home"})}]),angular.module("lilivicApp").controller("AboutCtrl",["$rootScope",function(a){a.$broadcast(constants.EVENTS.VIEW_CHANGE)}]),angular.module("lilivicApp").controller("BlogCtrl",["$rootScope",function(a){a.$broadcast(constants.EVENTS.VIEW_CHANGE)}]),angular.module("lilivicApp").controller("GlobalStateCtrl",["$scope","$location","$timeout",function(a,b,c){a.bodyClass="",a.homeClassCounter=1;var d=function(){a.homeClassCounter++,7===a.homeClassCounter&&(a.homeClassCounter=1),a.bodyClass="home_background_"+a.homeClassCounter,a.timeout=c(a.timeoutFunction,1e4)},e=function(){a.bodyClass="blank_background"};a.timeoutFunction=e(),a.timeout=c(a.timeoutFunction,100),a.$on(constants.EVENTS.VIEW_CHANGE,function(){switch(c.cancel(a.timeout),b.path()){case"/home":a.timeoutFunction=d,a.timeout=c(a.timeoutFunction,100);break;default:a.timeoutFunction=e,a.timeout=c(a.timeoutFunction,100)}})}]),angular.module("lilivicApp").controller("HomeCtrl",["$rootScope",function(a){a.$broadcast(constants.EVENTS.VIEW_CHANGE)}]);var labels={en:{about:"Bio",blog:"Blog",shop:"Shop",soon:"Soon",works:"Gallery"},pt_BR:{about:"Bio",blog:"Blog",shop:"Shop",soon:"Em breve",works:"Galeria"}};angular.module("lilivicApp").controller("NavigationCtrl",["$scope","$location",function(a,b){a.currentI18n="pt_BR",a.setI18n=function(b){a.currentI18n=b,a.label=labels[a.currentI18n]},a.setI18n(a.currentI18n),a.labelLinkClass=function(b){var c="";return b===a.currentI18n&&(c+="selected"),c},a.viewLinkClass=function(a){var c="";return"/"+a===b.path()&&(c+="selected"),c}}]),angular.module("lilivicApp").controller("ShopCtrl",["$rootScope",function(a){a.$broadcast(constants.EVENTS.VIEW_CHANGE)}]),angular.module("lilivicApp").controller("WorksCtrl",["$rootScope","$scope",function(a,b){b.interval=3e4,b.noWrapSlides=!1,b.slides=[],b.imageQuantity=9;for(var c=1;c<b.imageQuantity+1;c++)b.slides.push({image:"/images/works/"+c+".jpg"});a.$broadcast(constants.EVENTS.VIEW_CHANGE)}]),angular.module("lilivicApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="page-content"> <h2>em breve / soon</h2> </div>'),a.put("views/blog.html",'<div class="page-content"> <iframe src="https://lilivicgallery.wordpress.com/" frameborder="0"></iframe> </div>'),a.put("views/home.html",""),a.put("views/shop.html",'<div class="page-content"> <h2>em breve / soon</h2> </div>'),a.put("views/works.html",'<div class="page-content"> <h2>em breve / soon</h2> <div class="carousel-container" ng-show="false"> <carousel interval="interval" no-wrap="noWrapSlides"> <slide ng-repeat="slide in slides" active="slide.active"> <img ng-src="{{slide.image}}" style="margin:auto"> <div class="carousel-caption"> <p>{{slide.text}}</p> </div> </slide> </carousel> </div> </div>')}]);