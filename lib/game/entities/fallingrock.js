ig.module(

	'game.entities.fallingrock'

)
.requires(

	'impact.entity',

	'plugins.box2d.entity'

)
.defines(function() {
	
	EntityFallingrock = ig.Box2DEntity.extend({
		
		'size': {

			x: 25,
			y: 27

		},
		
		'type': ig.Entity.TYPE.B,

		'checkAgainst': ig.Entity.TYPE.NONE,

		'collides': ig.Entity.COLLIDES.PASSIVE,

		'animSheet': new ig.AnimationSheet('media/rock.png', 29, 31),

		'cantHarm': true,

		'damage': 1,

		'direction': null,
			
		init: function(x, y, settings) {

			this.parent(x, y, settings);

			this.addAnim('idle', 1, [0]);

			this.direction = (Math.round(Math.random() * 1));

		},
		
		update: function() {

			//if(this.standing) this.kill();

			this.currentAnim.angle += (Math.random() * (this.direction ? .1 : -.1));

			if(this.pos.y + this.size.y > window.innerHeight) {

				this.kill();console.log("KILLED");

			}

			this.parent();

		}
		
	});

});