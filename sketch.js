var a;

function setup() {
	frameRate(35);
	createCanvas(600, 600);
	a = new mouseEater();
}

function draw() {
	background(51);
	a.show();
	a.seek();
	a.update();
}

function mouseEater() {
	this.position = createVector((width/2), (height/2));
	this.targetTrajectory;
	this.targetPoint = createVector(mouseX, mouseY);

	this.show = function() {
		stroke(255);
		strokeWeight(15);
		point(this.position.x, this.position.y);
		point(this.targetPoint.x, this.targetPoint.y);
	}

	this.update = function() {
		this.position.sub(this.targetTrajectory);
		this.targetPoint.set(mouseX, mouseY);
	}

	this.seek = function() {
		this.targetTrajectory = p5.Vector.sub(this.position, this.targetPoint)
		this.targetTrajectory.normalize();
		this.targetTrajectory.mult(6);
	}

	this.debuggingTools = function() {
		console.log(this.targetPoint);
	}


}