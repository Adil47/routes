// JavaScript Document




var app=angular.module("MyModule",["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider.when("/",{templateUrl:"home.html"})
	.when("/about",{templateUrl:"about.html"})
	.when("/contact",{templateUrl:"contact.html"})
	
	;
	
});


