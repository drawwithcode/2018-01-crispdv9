function setup() {
	// define artboard size
	createCanvas(500,500);
	// Set here the values that are not changing all over the sketch
	strokeWeight(2);
	stroke(170);
}

function draw() {
	background(110,219,255);
	strokeWeight(0)
	//floor
	fill(0,179,48)
	rect(0,450,500,500)
	//sole
	fill(252,204,40,100)
	ellipse(mouseX,mouseY,90,90)
	fill(252,204,40)
	ellipse(mouseX,mouseY,60,60)
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
	strokeWeight(2);
	stroke(0,0,0)
	rect(200, 325, 100, 140);
	fill(96,94,96)
	rect(200,335,100,8);
	//Head
	strokeWeight(3);
  stroke(0,0,0);
  line(290,130,280,200);
	stroke(96,94,96);
	line(310,120,320,100);
	stroke(96,94,96);
	line(295,120,298,110);
	stroke(96,94,96);
	line(280,120,270,100);
	strokeWeight(2);
	stroke(0,0,0);
	fill(228,219,26);
	rect(185, 200, 150, 90);
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
	rect(220,260,40,20);
}
