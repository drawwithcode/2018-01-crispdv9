function setup() {
	// define artboard size
	createCanvas(500,500);
	// Set here the values that are not changing all over the sketch
	strokeWeight(2);
	stroke(170);
}

function draw() {

	//sole
	fill(252,204,40)
	ellipse(100,100,60)
	fill(252,204,40,100)
	ellipse(98,100,90)
	//Neck
	strokeWeight(3)
	line(260, 280, 260, 340);
	line(270,275,270,335);
	line(280,270,280,330);
	//Wheel
	strokeWeight(0)
	fill(96,94,96)
	ellipse(250, 465, 70, 70);
	//Body
	strokeWeight(5)
	fill(0,0,0)
	line(200,350,150,300);
	strokeWeight(0)
	fill(96,94,96)
	ellipse(150,300,25)
	strokeWeight(5)
	line(300,350,350,300);
	strokeWeight(0)
	fill(96,94,96)
	ellipse(350,300,25)
	fill(228,219,26)
	rect(200, 325, 100, 140);
	fill(96,94,96)
	rect(200,335,100,8);
	//Head
	strokeWeight(3);
  stroke(96,94,96,60);
  line(265,235,235,200)
  line(290,130,280,200);
  line(335,260,290,245)
	strokeWeight(0);
	fill(228,219,26)
	ellipse(270, 240, 90, 90);
	fill(255,255,255);
	ellipse(283,233,28);
	fill(0,0,0);
	ellipse(283,233,5);
	fill(96,94,96);
	ellipse(258,230,10);
	fill(96,94,96);
	ellipse(295,215,8);
	fill(96,94,96);
	ellipse(300,245,6);

}
