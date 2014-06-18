ig.module( 

    'game.utils.storage'

)
.defines(function() {

	ig.merge(ig, {

		'coins': 0,

		'coins_level': 0,

		'setLevelAmount': function setLevelAmount() {

			this.coins_level = this.coins || 0;

		},

		'rollbackToLevelAmount': function rollbackToLevelAmount() {

			this.coins = this.coins_level || 0;

		},

		'getCoinAmount': function getCoinAmount() {

			return this.coins;

		},

		'addCoin': function addCoin(amount) {

			var amt = amount || 1;

			this.coins += amt;

			return this.coins;

		}

	});

});