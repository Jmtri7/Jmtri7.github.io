var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//an object that moves
function object(x, y, w, h, direction, speed, name) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.direction = direction,
	this.speed = speed / 10;
	this.name = name;
	this.draw = function() {
		ctx.beginPath();
		ctx.rect(this.x, this.y, this.w, this.h);
		ctx.stroke();
	}
}


function creature(x, y, w, h, direction, speed, name) {
	object.call(this, x, y, w, h, direction, speed, name),
	this.wander = function() {
		this.x += this.speed * Math.cos(this.direction);
		this.y += this.speed * Math.sin(this.direction);
		if((this.x < 0)||(this.x + this.w > c.width)||(this.y + this.h > c.height)||(this.y < 0)) {
			this.direction += Math.PI;
			this.x += this.speed * Math.cos(this.direction);
			this.y += this.speed * Math.sin(this.direction);
		}

		for(j = 0; j < numcreatures; j++){
			if(creatures[j].name !== this.name) {
				if(((this.y + this.h >= creatures[j].y)&&(this.y <= creatures[j].y + creatures[j].h))&&((this.x + this.w >= creatures[j].x)&&(this.x <= creatures[j].x + creatures[j].w))) {
					this.direction += Math.PI;
					this.x += this.speed * Math.cos(this.direction);
					this.y += this.speed * Math.sin(this.direction);
					
				}
			}
		}

	}
}

var numcreatures = 50;
var creatures = [];
var randw;
var randh;

for(i = 0; i < numcreatures; i++){
randw = Math.random();
randh = Math.random();
creatures[i] = new creature((c.width - 100 * randw) * Math.random(), (c.height - 100 * randh) * Math.random(), 100 * randw, 100 * randh, Math.random() * 2 * Math.PI, 5, i);
	for(j = 0; j < i; j++){
		while(((creatures[i].y + creatures[i].h > creatures[j].y)&&(creatures[i].y < creatures[j].y + creatures[j].h))&&((creatures[i].x + creatures[i].w > creatures[j].x)&&(creatures[i].x < creatures[j].x + creatures[j].w))) {
		randw = Math.random();
		randh = Math.random();
		creatures[i] = new creature((c.width - 100 * randw) * Math.random(), (c.height - 100 * randh) * Math.random(), 100 * randw, 100 * randh, Math.random() * 2 * Math.PI, 5, i);
		j = 0;
		}
	}

}

begin();

function begin() {

setInterval(function(){
	ctx.clearRect(0, 0, c.width, c.height);

for(i = 0; i < numcreatures; i++){
	creatures[i].draw();
	creatures[i].wander();
}


}, 0.06);

}


