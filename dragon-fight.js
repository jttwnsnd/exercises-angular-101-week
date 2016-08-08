var dragonFight = angular.module('dragonFight', []);
dragonFight.controller('dragonFightController', function($scope){
	$scope.message = "Will you choose to fight, or flee from the dragon?"
	$scope.dragon = "Dragon.png";
	$scope.weapon = 0;
	$scope.attackAmount = 1;
	$scope.warriorHealth = 60;
	$scope.dragonHealth = 100;
	var fight = false;
	$scope.fightMe = function(){
		$scope.fight = true;
		$scope.message = "Fight on, hero! Choose your weapon!"
	}
	$scope.runAway = function(){
		$scope.dragon = 'defeated.jpg';
		$scope.message = "Poor soul, the dragon caught wind of your cowardice and will eat you."
	}
	$scope.reset = function(){
		$scope.dragon = 'Dragon.png';
		$scope.fight = false;
		$scope.warriorFightValue = '';
		$scope.message = 'Will you choose to fight, or flee from the dragon?';

	}
	$scope.attack = function(){
		$scope.warriorFightValue = (Math.floor(Math.random() * 12) + Math.floor(Math.random() * 12) + $scope.weapon) * $scope.attackAmount;
		switch($scope.weapon){
			case 5:
				$scope.message = 'You picked the sword and swung for '+ $scope.warriorFightValue + ' damage against the dragon!';
				break;
			case 8:
				$scope.message = 'You picked the axe and swung for '+ $scope.warriorFightValue + ' damage against the dragon!';
				break;
			case 3:
				$scope.message = 'You picked the bow and shot twice for '+ $scope.warriorFightValue + ' damage against the dragon!';
				break;
			case 2:
				$scope.message = 'You picked the twin-daggers and swung four times for '+ $scope.warriorFightValue + ' damage against the dragon!';
				break;
		}
	}
	$scope.sword = function(){
		$scope.weapon = 5;
	};
	$scope.axe = function(){
		$scope.weapon = 8;
		
	};
	$scope.bow = function(){
		$scope.weapon = 3;
		$scope.attackAmount = 2;
	};
	$scope.dagger = function(){
		$scope.weapon = 2;
		$scope.attackAmount = 4;
	};
})