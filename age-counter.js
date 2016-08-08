var ageCounter = angular.module('ageCounter', []);
ageCounter.controller('ageCounterController', function($scope){
	var currentDate = new Date();
	var currentYear = currentDate.getFullYear();
})