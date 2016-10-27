/**
 * Created by hxsd on 2016/9/29.
 */
var myapp=angular.module("myapp",["ionic"]);
myapp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state("wedding",{
        url:"/wedding",
        templateUrl:"views/wedding/wedding.html"
    }).state("home",{
        url:"/home",
        templateUrl:"views/home/home.html",
        controller:"homeCtrl"
    }).state("display",{
        url:"/display",
        templateUrl:"views/display/display.html",
        controller:"displayCtrl"
    }).state("select",{
        url:"/select",
        templateUrl:"views/select/select.html",
        controller:"selectCtrl"
    }).state("about",{
        url:"/about",
        templateUrl:"views/about/about.html"
    });
    $urlRouterProvider.otherwise("/wedding")
});