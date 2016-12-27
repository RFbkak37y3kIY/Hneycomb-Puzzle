(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 1920,
	fps: 60,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"lib/images/background.png", id:"background"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.background = function() {
	this.initialize(img.background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1109,1920);


(lib.cell = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#353535","#000000"],[0,1],68.4,0,-68.4,0).s().p("AqrGLIAAsVIKrmLIKsGLIAAMVIqsGLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#353535","#000000"],[0,1],-82.2,0.1,82.3,0.1).s().p("As1HbIAAu1IM1nbIM2HbIAAO1Is2Hbg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.2,-95,164.6,190);


// stage content:
(lib._lib = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cell();
	this.instance.setTransform(871.9,1568.7,0.545,0.545,90,0,0,24.2,-24.5);

	this.instance_1 = new lib.cell();
	this.instance_1.setTransform(871.9,1657.4,0.545,0.545,90,0,0,21.3,-24.5);

	this.instance_2 = new lib.cell();
	this.instance_2.setTransform(794.5,1613.3,0.545,0.545,90,0,0,23.9,-24.5);

	this.instance_3 = new lib.cell();
	this.instance_3.setTransform(597.7,1613.2,0.545,0.545,90,0,0,22.6,-24.3);

	this.instance_4 = new lib.cell();
	this.instance_4.setTransform(520.1,1568.3,0.545,0.545,90,0,0,23.2,-24.6);

	this.instance_5 = new lib.cell();
	this.instance_5.setTransform(520.1,1657.4,0.545,0.545,90,0,0,21.3,-24.6);

	this.instance_6 = new lib.cell();
	this.instance_6.setTransform(442.1,1613.1,0.545,0.545,90,0,0,23.5,-24.3);

	this.instance_7 = new lib.cell();
	this.instance_7.setTransform(245.8,1613.4,0.545,0.545,90,0,0,22.9,-24.3);

	this.instance_8 = new lib.cell();
	this.instance_8.setTransform(167.6,1568.2,0.545,0.545,90,0,0,23.3,-22.9);

	this.instance_9 = new lib.cell();
	this.instance_9.setTransform(167.6,1659.3,0.545,0.545,90,0,0,24.8,-22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_10 = new lib.background();
	this.instance_10.setTransform(-40,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(472,960,1109,1920);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;