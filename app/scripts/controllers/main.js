'use strict';

/**
 * @ngdoc function
 * @name porygonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the porygonApp
 */

var TypeChart = {
	'Bug': {
		damageTaken: {
			'Bug': 0,
			'Dark': 0,
			'Dragon': 0,
			'Electric': 0,
			'Fairy': 0,
			'Fighting': 2,
			'Fire': 1,
			'Flying': 1,
			'Ghost': 0,
			'Grass': 2,
			'Ground': 2,
			'Ice': 0,
			'Normal': 0,
			'Poison': 0,
			'Psychic': 0,
			'Rock': 1,
			'Steel': 0,
			'Water': 0
		},
		HPivs: {'atk':30, 'def':30, 'spd':30}
	},
	'Dark': {
		damageTaken: {
			'Bug': 1,
			'Dark': 2,
			'Dragon': 0,
			'Electric': 0,
			'Fairy': 1,
			'Fighting': 1,
			'Fire': 0,
			'Flying': 0,
			'Ghost': 2,
			'Grass': 0,
			'Ground': 0,
			'Ice': 0,
			'Normal': 0,
			'Poison': 0,
			'Psychic': 3,
			'Rock': 0,
			'Steel': 0,
			'Water': 0
		},
		HPivs: {}
	},
	'Dragon': {
		damageTaken: {
			'Bug': 0,
			'Dark': 0,
			'Dragon': 1,
			'Electric': 2,
			'Fairy': 1,
			'Fighting': 0,
			'Fire': 2,
			'Flying': 0,
			'Ghost': 0,
			'Grass': 2,
			'Ground': 0,
			'Ice': 1,
			'Normal': 0,
			'Poison': 0,
			'Psychic': 0,
			'Rock': 0,
			'Steel': 0,
			'Water': 2
		},
		HPivs: {'atk':30}
	},
	'Electric': {
		damageTaken: {
			par: 3,
			'Bug': 0,
			'Dark': 0,
			'Dragon': 0,
			'Electric': 2,
			'Fairy': 0,
			'Fighting': 0,
			'Fire': 0,
			'Flying': 2,
			'Ghost': 0,
			'Grass': 0,
			'Ground': 1,
			'Ice': 0,
			'Normal': 0,
			'Poison': 0,
			'Psychic': 0,
			'Rock': 0,
			'Steel': 2,
			'Water': 0
		},
		HPivs: {'spa':30}
	},
	'Fairy': {
		damageTaken: {
			'Bug': 2,
			'Dark': 2,
			'Dragon': 3,
			'Electric': 0,
			'Fairy': 0,
			'Fighting': 2,
			'Fire': 0,
			'Flying': 0,
			'Ghost': 0,
			'Grass': 0,
			'Ground': 0,
			'Ice': 0,
			'Normal': 0,
			'Poison': 1,
			'Psychic': 0,
			'Rock': 0,
			'Steel': 1,
			'Water': 0
		}
	},
	'Fighting': {
		damageTaken: {
			'Bug': 2,
			'Dark': 2,
			'Dragon': 0,
			'Electric': 0,
			'Fairy': 1,
			'Fighting': 0,
			'Fire': 0,
			'Flying': 1,
			'Ghost': 0,
			'Grass': 0,
			'Ground': 0,
			'Ice': 0,
			'Normal': 0,
			'Poison': 0,
			'Psychic': 1,
			'Rock': 2,
			'Steel': 0,
			'Water': 0
		},
		HPivs: {'def':30, 'spa':30, 'spd':30, 'spe':30}
	},
	'Fire': {
		damageTaken: {
			brn: 3,
			'Bug': 2,
			'Dark': 0,
			'Dragon': 0,
			'Electric': 0,
			'Fairy': 2,
			'Fighting': 0,
			'Fire': 2,
			'Flying': 0,
			'Ghost': 0,
			'Grass': 2,
			'Ground': 1,
			'Ice': 2,
			'Normal': 0,
			'Poison': 0,
			'Psychic': 0,
			'Rock': 1,
			'Steel': 2,
			'Water': 1
		},
		HPivs: {'atk':30, 'spa':30, 'spe':30}
	},
	'Flying': {
		damageTaken: {
			'Bug': 2,
			'Dark': 0,
			'Dragon': 0,
			'Electric': 1,
			'Fairy': 0,
			'Fighting': 2,
			'Fire': 0,
			'Flying': 0,
			'Ghost': 0,
			'Grass': 2,
			'Ground': 3,
			'Ice': 1,
			'Normal': 0,
			'Poison': 0,
			'Psychic': 0,
			'Rock': 1,
			'Steel': 0,
			'Water': 0
		},
		HPivs: {'hp':30, 'atk':30, 'def':30, 'spa':30, 'spd':30}
	},
	'Ghost': {
		damageTaken: {
			trapped: 3,
			'Bug': 2,
			'Dark': 1,
			'Dragon': 0,
			'Electric': 0,
			'Fairy': 0,
			'Fighting': 3,
			'Fire': 0,
			'Flying': 0,
			'Ghost': 1,
			'Grass': 0,
			'Ground': 0,
			'Ice': 0,
			'Normal': 3,
			'Poison': 2,
			'Psychic': 0,
			'Rock': 0,
			'Steel': 0,
			'Water': 0
		},
		HPivs: {'def':30, 'spd':30}
	},
	'Grass': {
		damageTaken: {
			powder: 3,
			'Bug': 1,
			'Dark': 0,
			'Dragon': 0,
			'Electric': 2,
			'Fairy': 0,
			'Fighting': 0,
			'Fire': 1,
			'Flying': 1,
			'Ghost': 0,
			'Grass': 2,
			'Ground': 2,
			'Ice': 1,
			'Normal': 0,
			'Poison': 1,
			'Psychic': 0,
			'Rock': 0,
			'Steel': 0,
			'Water': 2
		},
		HPivs: {'atk':30, 'spa':30}
	},
	'Ground': {
		damageTaken: {
			sandstorm: 3,
			'Bug': 0,
			'Dark': 0,
			'Dragon': 0,
			'Electric': 3,
			'Fairy': 0,
			'Fighting': 0,
			'Fire': 0,
			'Flying': 0,
			'Ghost': 0,
			'Grass': 1,
			'Ground': 0,
			'Ice': 1,
			'Normal': 0,
			'Poison': 2,
			'Psychic': 0,
			'Rock': 2,
			'Steel': 0,
			'Water': 1
		},
		HPivs: {'spa':30, 'spd':30}
	},
	'Ice': {
		damageTaken: {
			hail: 3,
			frz: 3,
			'Bug': 0,
			'Dark': 0,
			'Dragon': 0,
			'Electric': 0,
			'Fairy': 0,
			'Fighting': 1,
			'Fire': 1,
			'Flying': 0,
			'Ghost': 0,
			'Grass': 0,
			'Ground': 0,
			'Ice': 2,
			'Normal': 0,
			'Poison': 0,
			'Psychic': 0,
			'Rock': 1,
			'Steel': 1,
			'Water': 0
		},
		HPivs: {'atk':30, 'def':30}
	},
	'Normal': {
		damageTaken: {
			'Bug': 0,
			'Dark': 0,
			'Dragon': 0,
			'Electric': 0,
			'Fairy': 0,
			'Fighting': 1,
			'Fire': 0,
			'Flying': 0,
			'Ghost': 3,
			'Grass': 0,
			'Ground': 0,
			'Ice': 0,
			'Normal': 0,
			'Poison': 0,
			'Psychic': 0,
			'Rock': 0,
			'Steel': 0,
			'Water': 0
		}
	},
	'Poison': {
		damageTaken: {
			psn: 3,
			tox: 3,
			'Bug': 2,
			'Dark': 0,
			'Dragon': 0,
			'Electric': 0,
			'Fairy': 2,
			'Fighting': 2,
			'Fire': 0,
			'Flying': 0,
			'Ghost': 0,
			'Grass': 2,
			'Ground': 1,
			'Ice': 0,
			'Normal': 0,
			'Poison': 2,
			'Psychic': 1,
			'Rock': 0,
			'Steel': 0,
			'Water': 0
		},
		HPivs: {'def':30, 'spa':30, 'spd':30}
	},
	'Psychic': {
		damageTaken: {
			'Bug': 1,
			'Dark': 1,
			'Dragon': 0,
			'Electric': 0,
			'Fairy': 0,
			'Fighting': 2,
			'Fire': 0,
			'Flying': 0,
			'Ghost': 1,
			'Grass': 0,
			'Ground': 0,
			'Ice': 0,
			'Normal': 0,
			'Poison': 0,
			'Psychic': 2,
			'Rock': 0,
			'Steel': 0,
			'Water': 0
		},
		HPivs: {'atk':30, 'spe':30}
	},
	'Rock': {
		damageTaken: {
			sandstorm: 3,
			'Bug': 0,
			'Dark': 0,
			'Dragon': 0,
			'Electric': 0,
			'Fairy': 0,
			'Fighting': 1,
			'Fire': 2,
			'Flying': 2,
			'Ghost': 0,
			'Grass': 1,
			'Ground': 1,
			'Ice': 0,
			'Normal': 2,
			'Poison': 2,
			'Psychic': 0,
			'Rock': 0,
			'Steel': 1,
			'Water': 1
		},
		HPivs: {'def':30, 'spd':30, 'spe':30}
	},
	'Steel': {
		damageTaken: {
			psn: 3,
			tox: 3,
			sandstorm: 3,
			'Bug': 2,
			'Dark': 0,
			'Dragon': 2,
			'Electric': 0,
			'Fairy': 2,
			'Fighting': 1,
			'Fire': 1,
			'Flying': 2,
			'Ghost': 0,
			'Grass': 2,
			'Ground': 1,
			'Ice': 2,
			'Normal': 2,
			'Poison': 3,
			'Psychic': 2,
			'Rock': 2,
			'Steel': 2,
			'Water': 0
		},
		HPivs: {'spd':30}
	},
	'Water': {
		damageTaken: {
			'Bug': 0,
			'Dark': 0,
			'Dragon': 0,
			'Electric': 1,
			'Fairy': 0,
			'Fighting': 0,
			'Fire': 2,
			'Flying': 0,
			'Ghost': 0,
			'Grass': 1,
			'Ground': 0,
			'Ice': 2,
			'Normal': 0,
			'Poison': 0,
			'Psychic': 0,
			'Rock': 0,
			'Steel': 2,
			'Water': 2
		},
		HPivs: {'atk':30, 'def':30, 'spa':30}
	}
};



angular.module('porygonApp').filter('pokeOrder', function() {
    return function(object) {
        var array = [];
        angular.forEach(object, function (value, key) { 
            array.push({key: key, value: value});
        });
        return array;
    };
});

angular.module('porygonApp').controller('MainCtrl', function ($scope) {
    $scope.pokedex = BattlePokedex;
    $scope.types = [ 'Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psychic', 'Rock', 'Steel', 'Water'];
    $scope.getImmunity = function (sourceType, targetTyping) {
            // returns false if the target is immune; true otherwise
            // also checks immunity to some statuses
            if (Array.isArray(targetTyping)) {
                    for (var i = 0; i < targetTyping.length; i++) {
                            if (!this.getImmunity(sourceType, targetTyping[i])) return false;
                    }
                    return true;
            }
            var typeData = TypeChart[targetTyping];
            if (typeData && typeData.damageTaken[sourceType] === 3) return false;
            return true;
    };

    $scope.getEffectiveness = function (source, targetTyping) {
        var totalTypeMod = 0;
        // If they are dual typed
        if (Array.isArray(targetTyping)) {
            // For every type they have (two normally)
            for (var i = 0; i < targetTyping.length; i++) {
                totalTypeMod += this.getEffectiveness(source, targetTyping[i]);
            }
            return totalTypeMod;
        }
        var typeData = TypeChart[targetTyping];
        if (!typeData) return 0;
        switch (typeData.damageTaken[source]) {
            case 1: return 1; // super-effective
            case 2: return -1; // resist
            default: return 0;
        }
    };
});
