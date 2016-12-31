(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 410,
	height: 768,
	fps: 45,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.perimiter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgGJBWqIlfpfIq9AAIlfpfIq+AAIldpkIq+AAIldpbIq/AAImLqsIFfpgIlfpgIFfpgIlfpgIFfpfIlfpgIFfpgIlfpgIGLqsIK+AAIFepfIK9AAIFepjILAAAIFdpcIK8AAIFgphIMTAAIFgJiIK8ABIFcJbILAAAIFfJfIK9AAIFfJfIK+AAIGKKsIlfJhIFfJhIlfJgIFfJfIlfJhIFfJhIlfJgIFfJiImKKrIq+AAIlfJgIq9AAIlfJfIrAAAIlcJaIq9AAIlfJigEhLXgl+IFfJgIlfJgIFfJgIlfJfIFfJgIlfJgIFfJgIlfJgIE0IWILGAAIFWJbIK/AAIFdJkIK+AAIFeJfIK+AAIFeJfIJmAAIFgpiIK9AAIFcpaILAAAIFfpfIK9AAIFfpgIK9AAIE0oVIlfpiIFfpgIlfphIFfphIlfpfIFfpgIlfphIFfphIk0oWIq+AAIlepfIq+AAIlepfIrBAAIlcpbIq8gCIlfphIpnAAIlfJhIq9AAIlbJcIrBAAIleJjIq+AAIleJfIq+AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-499.7,-554.6,999.6,1109.3);


(lib.Controll = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABUPLIkCnAIoCAAIkvoLIEvoKIIFAAIEBnAIJcAAIEuIMIkDG+IEAHAIkuILg");
	this.shape.setTransform(725.4,97.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AktPLIkEnBIoDAAIkvoKIEvoKIIGAAIEDnAIJZAAIEEHBIIEAAIEuIKIkuILIoIAAIkCG/g");
	this.shape_1.setTransform(412,97.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AqwPLIkvoLIEFnAIkDm+IEuoMIJcAAIEBHAIIEAAIEuIKIkvINIoOgRIj2HPgAh7AIIgFgIIABAAIgBAAg");
	this.shape_2.setTransform(99.2,98.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,824.6,195.2);


(lib.controlBack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("Egn+AKkIAA1HMBP9AAAIAAVHg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.6)").s().p("Egn+ALzIAAhPMBP9AAAIAABPgEgn+gKjIAAhPMBP9AAAIAABPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-256,-75.5,512,151.1);


(lib.cell = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(53,53,53,0.498)","rgba(0,0,0,0.8)"],[0,1],-82.2,0.1,82.3,0.1).s().p("As1HbIAAu1IM1nbIM2HbIAAO1Is2Hbg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0.298)","rgba(255,255,255,0.439)","rgba(0,0,0,0.298)","rgba(0,0,0,0.22)"],[0,0,1,1],68.4,0,-68.4,0).s().p("AqrGLIAAsVIKrmLIKsGLIAAMVIqsGLg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0.298)","rgba(255,255,255,0.439)","rgba(0,0,0,0.298)"],[0,0,1],-82.2,0.1,82.3,0.1).s().p("As1HbIAAu1IM1nbIM2HbIAAO1Is2HbgAqrmKIAAMVIKrGLIKrmLIAAsVIqrmLg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(6));

	// Слой 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("As1HbIAAu1IM1nbIM2HbIAAO1Is2Hbg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FF00").s().p("As1HbIAAu1IM1nbIM2HbIAAO1Is2Hbg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("As1HbIAAu1IM1nbIM2HbIAAO1Is2Hbg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("As1HbIAAu1IM1nbIM2HbIAAO1Is2Hbg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FFFF").s().p("As1HbIAAu1IM1nbIM2HbIAAO1Is2Hbg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF00FF").s().p("As1HbIAAu1IM1nbIM2HbIAAO1Is2Hbg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.2,-95,164.6,190);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#04FF60"],[0.106,1],0,-965,0,965.1).s().p("EhP/CWZMAAAksxMCf/AAAMAAAEsxg");
	this.shape.setTransform(512,962.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1024,1925.1);


(lib.WorkSpace02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.mc84 = new lib.cell();
	this.mc84.setTransform(352.1,305.7,0.281,0.281,90,0,0,9.3,-10.3);

	this.mc40 = new lib.cell();
	this.mc40.setTransform(352.1,120.7,0.281,0.281,90,0,0,9.3,-10.3);

	this.mc51 = new lib.cell();
	this.mc51.setTransform(352.1,166.6,0.281,0.281,90,0,0,8,-10.3);

	this.mc73 = new lib.cell();
	this.mc73.setTransform(352.1,259.4,0.281,0.281,90,0,0,9.3,-10.3);

	this.mc62 = new lib.cell();
	this.mc62.setTransform(352.1,213.1,0.281,0.281,90,0,0,8.9,-10.3);

	this.mc74 = new lib.cell();
	this.mc74.setTransform(312.1,282.1,0.281,0.281,90,0,0,7.9,-10.2);

	this.mc85 = new lib.cell();
	this.mc85.setTransform(312.1,328.5,0.281,0.281,90,0,0,8.6,-10.2);

	this.mc30 = new lib.cell();
	this.mc30.setTransform(312.1,97.7,0.281,0.281,90,0,0,9.3,-10.2);

	this.mc41 = new lib.cell();
	this.mc41.setTransform(312.1,143.8,0.281,0.281,90,0,0,8.9,-10.2);

	this.mc63 = new lib.cell();
	this.mc63.setTransform(312.1,236.4,0.281,0.281,90,0,0,9.6,-10.2);

	this.mc52 = new lib.cell();
	this.mc52.setTransform(312.1,190.1,0.281,0.281,90,0,0,9.5,-10.2);

	this.mc64 = new lib.cell();
	this.mc64.setTransform(271.7,259.4,0.281,0.281,90,0,0,9.3,-8.7);

	this.mc75 = new lib.cell();
	this.mc75.setTransform(271.7,305.6,0.281,0.281,90,0,0,9.3,-8.7);

	this.mc86 = new lib.cell();
	this.mc86.setTransform(271.7,351.9,0.281,0.281,90,0,0,9.6,-8.7);

	this.mc20 = new lib.cell();
	this.mc20.setTransform(271.7,74.4,0.281,0.281,90,0,0,8.6,-8.7);

	this.mc31 = new lib.cell();
	this.mc31.setTransform(271.7,120.8,0.281,0.281,90,0,0,9.3,-8.7);

	this.mc53 = new lib.cell();
	this.mc53.setTransform(271.7,213.1,0.281,0.281,90,0,0,8.7,-8.7);

	this.mc42 = new lib.cell();
	this.mc42.setTransform(271.7,166.7,0.281,0.281,90,0,0,8,-8.7);

	this.mc65 = new lib.cell();
	this.mc65.setTransform(232,282,0.281,0.281,90,0,0,7.7,-9.5);

	this.mc76 = new lib.cell();
	this.mc76.setTransform(232,328.4,0.281,0.281,90,0,0,8.7,-9.5);

	this.mc87 = new lib.cell();
	this.mc87.setTransform(232,374.6,0.281,0.281,90,0,0,9.1,-9.5);

	this.mc21 = new lib.cell();
	this.mc21.setTransform(232,97.8,0.281,0.281,90,0,0,9.1,-9.5);

	this.mc32 = new lib.cell();
	this.mc32.setTransform(232,143.9,0.281,0.281,90,0,0,8.9,-9.5);

	this.mc54 = new lib.cell();
	this.mc54.setTransform(232,236.4,0.281,0.281,90,0,0,9.8,-9.5);

	this.mc43 = new lib.cell();
	this.mc43.setTransform(232,190.1,0.281,0.281,90,0,0,9.3,-9.5);

	this.mc10 = new lib.cell();
	this.mc10.setTransform(232,51.3,0.281,0.281,90,0,0,7.9,-9.5);

	this.mc88 = new lib.cell();
	this.mc88.setTransform(192,397.8,0.281,0.281,90,0,0,9.3,-9.3);

	this.mc66 = new lib.cell();
	this.mc66.setTransform(192,305.5,0.281,0.281,90,0,0,9.3,-9.3);

	this.mc77 = new lib.cell();
	this.mc77.setTransform(192,351.7,0.281,0.281,90,0,0,9.6,-9.3);

	this.mc22 = new lib.cell();
	this.mc22.setTransform(192,120.8,0.281,0.281,90,0,0,9.3,-9.3);

	this.mc33 = new lib.cell();
	this.mc33.setTransform(192,166.7,0.281,0.281,90,0,0,8.2,-9.3);

	this.mc55 = new lib.cell();
	this.mc55.setTransform(192,259.3,0.281,0.281,90,0,0,9.5,-9.3);

	this.mc44 = new lib.cell();
	this.mc44.setTransform(192,213,0.281,0.281,90,0,0,8.9,-9.3);

	this.mc00 = new lib.cell();
	this.mc00.setTransform(192,28.4,0.281,0.281,90,0,0,8.7,-9.3);

	this.mc11 = new lib.cell();
	this.mc11.setTransform(192,74.5,0.281,0.281,90,0,0,8.6,-9.3);

	this.mc01 = new lib.cell();
	this.mc01.setTransform(152,51.2,0.281,0.281,90,0,0,7.7,-9.1);

	this.mc78 = new lib.cell();
	this.mc78.setTransform(151.8,374.7,0.281,0.281,90,0,0,9.3,-8.6);

	this.mc56 = new lib.cell();
	this.mc56.setTransform(149.5,279.8,0.281,0.281,90,0,0,0,-0.2);

	this.mc67 = new lib.cell();
	this.mc67.setTransform(152,328.4,0.281,0.281,90,0,0,8.6,-9.1);

	this.mc12 = new lib.cell();
	this.mc12.setTransform(152,97.8,0.281,0.281,90,0,0,9.1,-9.1);

	this.mc23 = new lib.cell();
	this.mc23.setTransform(152,143.8,0.281,0.281,90,0,0,8.7,-9.1);

	this.mc45 = new lib.cell();
	this.mc45.setTransform(152,236.4,0.281,0.281,90,0,0,9.8,-9.1);

	this.mc34 = new lib.cell();
	this.mc34.setTransform(152,190.1,0.281,0.281,90,0,0,9.3,-9.1);

	this.mc02 = new lib.cell();
	this.mc02.setTransform(112.2,74.4,0.281,0.281,90,0,0,8.6,-9.6);

	this.mc46 = new lib.cell();
	this.mc46.setTransform(112.2,259.1,0.281,0.281,90,0,0,8.3,-9.6);

	this.mc57 = new lib.cell();
	this.mc57.setTransform(112.2,305.4,0.281,0.281,90,0,0,8.7,-9.6);

	this.mc68 = new lib.cell();
	this.mc68.setTransform(112.2,351.6,0.281,0.281,90,0,0,8.7,-9.6);

	this.mc13 = new lib.cell();
	this.mc13.setTransform(112.2,120.6,0.281,0.281,90,0,0,8.6,-9.6);

	this.mc35 = new lib.cell();
	this.mc35.setTransform(112.2,213.2,0.281,0.281,90,0,0,9.3,-9.6);

	this.mc24 = new lib.cell();
	this.mc24.setTransform(112.2,167,0.281,0.281,90,0,0,9.3,-9.6);

	this.mc03 = new lib.cell();
	this.mc03.setTransform(72.2,97.8,0.281,0.281,90,0,0,9.3,-9.6);

	this.mc36 = new lib.cell();
	this.mc36.setTransform(72.2,236.4,0.281,0.281,90,0,0,9.8,-9.6);

	this.mc47 = new lib.cell();
	this.mc47.setTransform(72.2,281.9,0.281,0.281,90,0,0,7.9,-9.6);

	this.mc58 = new lib.cell();
	this.mc58.setTransform(72.2,328.3,0.281,0.281,90,0,0,8.6,-9.6);

	this.mc25 = new lib.cell();
	this.mc25.setTransform(72.2,190.1,0.281,0.281,90,0,0,9.3,-9.6);

	this.mc14 = new lib.cell();
	this.mc14.setTransform(72.2,143.8,0.281,0.281,90,0,0,8.7,-9.6);

	this.mc04 = new lib.cell();
	this.mc04.setTransform(31.6,120.6,0.281,0.281,90,0,0,8.3,-7.1);

	this.mc37 = new lib.cell();
	this.mc37.setTransform(31.6,259.2,0.281,0.281,90,0,0,8.6,-7.1);

	this.mc48 = new lib.cell();
	this.mc48.setTransform(31.6,305.4,0.281,0.281,90,0,0,8.7,-7.1);

	this.mc26 = new lib.cell();
	this.mc26.setTransform(31.6,213.2,0.281,0.281,90,0,0,9.3,-7.1);

	this.mc15 = new lib.cell();
	this.mc15.setTransform(31.6,167,0.281,0.281,90,0,0,9.3,-7.1);

	this.instance = new lib.perimiter();
	this.instance.setTransform(189.8,210.6,0.38,0.38,0,0,0,0.1,0);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,5,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.mc15},{t:this.mc26},{t:this.mc48},{t:this.mc37},{t:this.mc04},{t:this.mc14},{t:this.mc25},{t:this.mc58},{t:this.mc47},{t:this.mc36},{t:this.mc03},{t:this.mc24},{t:this.mc35},{t:this.mc13},{t:this.mc68},{t:this.mc57},{t:this.mc46},{t:this.mc02},{t:this.mc34},{t:this.mc45},{t:this.mc23},{t:this.mc12},{t:this.mc67},{t:this.mc56},{t:this.mc78},{t:this.mc01},{t:this.mc11},{t:this.mc00},{t:this.mc44},{t:this.mc55},{t:this.mc33},{t:this.mc22},{t:this.mc77},{t:this.mc66},{t:this.mc88},{t:this.mc10},{t:this.mc43},{t:this.mc54},{t:this.mc32},{t:this.mc21},{t:this.mc87},{t:this.mc76},{t:this.mc65},{t:this.mc42},{t:this.mc53},{t:this.mc31},{t:this.mc20},{t:this.mc86},{t:this.mc75},{t:this.mc64},{t:this.mc52},{t:this.mc63},{t:this.mc41},{t:this.mc30},{t:this.mc85},{t:this.mc74},{t:this.mc62},{t:this.mc73},{t:this.mc51},{t:this.mc40},{t:this.mc84}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-11,415,457);


(lib.ItemRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.mc00 = new lib.cell();
	this.mc00.setTransform(52.1,-31.9,0.545,0.545,90,0,0,24.2,-24.5);

	this.mc11 = new lib.cell();
	this.mc11.setTransform(50,54.6,0.545,0.545,90,0,0,21.3,-24.5);

	this.mc01 = new lib.cell();
	this.mc01.setTransform(-25.3,12.7,0.545,0.545,90,0,0,23.9,-24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc01},{t:this.mc11},{t:this.mc00}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.4,-89.9,180.9,177.8);


(lib.ItemLeft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.mc10 = new lib.cell();
	this.mc10.setTransform(52,12.4,0.545,0.545,90,0,0,22.9,-24.3);

	this.mc00 = new lib.cell();
	this.mc00.setTransform(-26.2,-32.1,0.545,0.545,90,0,0,23.3,-22.9);

	this.mc11 = new lib.cell();
	this.mc11.setTransform(-26.2,58.3,0.545,0.545,90,0,0,24.8,-22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc11},{t:this.mc00},{t:this.mc10}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.4,-89.6,180.9,179.2);


(lib.ItemCenter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.mc10 = new lib.cell();
	this.mc10.setTransform(90.9,12.3,0.545,0.545,90,0,0,22.6,-24.3);

	this.mc00 = new lib.cell();
	this.mc00.setTransform(13.5,-32.2,0.545,0.545,90,0,0,23.2,-24.6);

	this.mc11 = new lib.cell();
	this.mc11.setTransform(13.3,56.2,0.545,0.545,90,0,0,21.3,-24.6);

	this.mc01 = new lib.cell();
	this.mc01.setTransform(-64.3,12.7,0.545,0.545,90,0,0,23.5,-24.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc01},{t:this.mc11},{t:this.mc00},{t:this.mc10}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.3,-89.6,258.7,179.1);


(lib.background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		createjs.Ticker.addEventListener("tick", handleTick);
		
		var self = this;
		var celsArray = [];
		
		var options = {
			comb: 20,
			delay: 20
		}
		
		var tikDelay = options.delay;
		function handleTick(event) {
		    // Actions carried out each tick (aka frame)
		    if (!event.paused) {
		        // Actions carried out when the Ticker is not paused.
				tikDelay--;
				
				if( celsArray.length < options.comb && tikDelay == 0){
					var c = new lib.cell(); 
					var sc = Math.random()+0.1;
					c.x = Math.random() * 1024;
					c.y = 2200;
					c.rotation = Math.random()*360;
					c.alpha = 0.3;
					c.myProp = {
						speedY: Math.random() * 2 + 1,
						speedRotation: Math.random() * 4 - 2,
					};
					self.addChild(c);
					c.gotoAndStop(Math.floor(Math.random() * 7 + 1))
					c.cache(-100, -100, 200, 200);
					c.scaleX = sc;
					c.scaleY = sc;
								
					celsArray.push(c);
				};
				for(var i = 0; i < celsArray.length; i++){
					celsArray[i].y -= celsArray[i].myProp.speedY;
					celsArray[i].rotation += celsArray[i].myProp.speedRotation;
					if(celsArray[i].y < -100){
						self.removeChild(celsArray[i]);				
						celsArray.splice(i,1);
					}
				}
				if(tikDelay<=0) {
					tikDelay = options.delay;
				}
				
		    }
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.bg();
	this.instance.setTransform(512,962.5,1,1,0,0,0,512,962.5);
	this.instance.cache(-2,-2,1028,1929);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1024,1925.1);


// stage content:
(lib._lib = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		createjs.Touch.enable(stage);
		var self = this;
		model = {
			controlLeft: [[],[]],
			controlCenter: [[],[]],
			controlRight: [[],[]],
			polygon: [
				[0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0]
			],
			setSelection:{}
		};
		function r(){
			return Math.floor(Math.random()*6+1);
		}
		
		function reNewL(){
			self.colL.mc00.gotoAndStop(r());
			self.colL.mc10.gotoAndStop(r());
			self.colL.mc11.gotoAndStop(r());
		}
		function reNewC(){
			self.colC.mc00.gotoAndStop(r());
			self.colC.mc10.gotoAndStop(r());
			self.colC.mc11.gotoAndStop(r());
			self.colC.mc01.gotoAndStop(r());
		}
		function reNewR(){
			self.colR.mc00.gotoAndStop(r());
			self.colR.mc01.gotoAndStop(r());
			self.colR.mc11.gotoAndStop(r());
		}
		function Init() {
			self.colL.name = "colL";
			self.colC.name = "colC";
			self.colR.name = "colR";
		
			reNewL();
			reNewC();
			reNewR();
			reDrowPolygon();
		}
		//Init()
		setTimeout(Init, 1000 / lib.properties.fps);
		
		/* DEBUG */
		
		/* DEBUG */	var nFPS = 0;
		/* DEBUG */	this.on('tick', function(e){
		/* DEBUG */		nFPS++;
		/* DEBUG */	})
		
		/* DEBUG */	setInterval(function(){
		/* DEBUG */		self.tFPS.text = "FPS: " + nFPS;
		/* DEBUG */		nFPS = 0;
		/* DEBUG */	}, 1000)
		function reDrowPolygon(){
			self.polygon.uncache();
			self.polygon.cache(-20, -20, 500, 500);
		}
		function HitTest(target){
			function isOk(a, b){
				var k = 40;
				var ag = a.localToGlobal(0,0),
					bg = b.localToGlobal(0,0);
				return Math.abs(ag.x - bg.x) < k && Math.abs(ag.y - bg.y+5) < k;
			}
			for(var i=0; i<9; i++) {
				for(var j=0; j<9; j++){
					if(j<(5+i) && i<(5+j)){   
						if(isOk(target, self.polygon["mc"+j+i])){
							self.polygon["mc"+j+i].name = "mc"+j+i;
							return self.polygon["mc"+j+i];
						}
					}
				}
			}
			return null;
		}
		function setSelected(controlName, targetName){
			var p = {
					x: targetName.split("mc")[1].charAt(0)*1,
					y: targetName.split("mc")[1].charAt(1)*1,
				},
				pArr = {
					a: self.polygon["mc"+(p.x+0)+(p.y+0)],
					b: self.polygon["mc"+(p.x+1)+(p.y+0)],
					c: self.polygon["mc"+(p.x+0)+(p.y+1)],
					d: self.polygon["mc"+(p.x+1)+(p.y+1)]
				},
				alpha = 0.5;
			
			switch(controlName) {
				case "colL":
					if(!(pArr.b && pArr.d)) return null;
					break;
				case "colC":
					if(!(pArr.b && pArr.c && pArr.d)) return null;
					break;
				case "colR":
					if(!( pArr.c && pArr.d)) return null;
					break;
			}
			return {el: pArr, pos: p, crlName: controlName};
		
		}
		function hendlerDrug(e){
			var el = e.currentTarget;
			var ax = e.stageX / stage.scaleX,
				ay = (e.stageY / stage.scaleY) - 100;
			el.x = (el.x + ax) / 2;
			el.y = (el.y + ay) / 2;
			el.scaleX = el.scaleY = 0.38 / 0.74;
			el.alpha = 0.5;
			var htEl = HitTest(el)
			if(htEl){
				model.setSelection = setSelected(el.name, htEl.name);
			}else{
				model.setSelection = null;
			}
		}
		function delLines(){
			var arrCelsForDel = [];
			function add(xx, yy){
				if(self.polygon["mc"+xx+yy] == undefined) {
					return;
				}
				if(!arrCelsForDel.some(function(a) {return a.b == "mc"+xx+yy })){
					arrCelsForDel.push({
						name: "mc"+xx+yy,
						el:self.polygon["mc"+xx+yy],
						x:xx,
						y:yy
					});
				}
			}
			var p = model.polygon;
			var str = "";
			for(var i=0;i<=8;i++){
				for(var j=0;j<=8;j++){
					if(p[i][j] != 0){
						if(j <= 6 && p[i][j] == p[i][j+1] && p[i][j] == p[i][j+2]){
							add(i+0, j+0);
							add(i+0, j+1);
							add(i+0, j+2);
						}
						if(j<=6 && i<=6 && p[i][j] == p[i+1][j+1] && p[i][j] == p[i+2][j+2]){
							add(i+0, j+0);
							add(i+1, j+1);
							add(i+2, j+2);
						}
						if(i<=6 && p[i][j] == p[i+1][j] && p[i][j] == p[i+2][j] ){
							add(i+0, j+0);
							add(i+1, j+0);
							add(i+2, j+0);
						}
					}
				}
			}
			console.log(arrCelsForDel);
			for(var k=0;k<arrCelsForDel.length; k++){
				arrCelsForDel[k].el.gotoAndStop(7);
				//arrCelsForDel[k].el.alpha =	0.1;
				model.polygon[arrCelsForDel[k].x][arrCelsForDel[k].y] = 0;
				setAnim(arrCelsForDel[k].name);
			}
			
		}
		function setColorOnDesk (){
			var o = model.setSelection;
			if(!o) return false;
			
			switch(o.crlName) {
				case "colL":
					if(!(model.polygon[o.pos.x+0][o.pos.y+0] == 0 &&
						model.polygon[o.pos.x+1][o.pos.y+0] == 0 &&
						model.polygon[o.pos.x+1][o.pos.y+1] == 0)) return false;
				
					o.el.a.gotoAndStop(self.colL.mc00.currentFrame);
					o.el.b.gotoAndStop(self.colL.mc10.currentFrame);
					o.el.d.gotoAndStop(self.colL.mc11.currentFrame);
					model.polygon[o.pos.x+0][o.pos.y+0] = self.colL.mc00.currentFrame*1;
					model.polygon[o.pos.x+1][o.pos.y+0] = self.colL.mc10.currentFrame*1;
					model.polygon[o.pos.x+1][o.pos.y+1] = self.colL.mc11.currentFrame*1;
				
					break;
				case "colC":
					if(!(model.polygon[o.pos.x+0][o.pos.y+0] == 0 &&
						 model.polygon[o.pos.x+1][o.pos.y+0] == 0 &&
						 model.polygon[o.pos.x+0][o.pos.y+1] == 0 &&
						 model.polygon[o.pos.x+1][o.pos.y+1] == 0)) return false;
					
					o.el.a.gotoAndStop(self.colC.mc00.currentFrame);
					o.el.b.gotoAndStop(self.colC.mc10.currentFrame);
					o.el.c.gotoAndStop(self.colC.mc01.currentFrame);
					o.el.d.gotoAndStop(self.colC.mc11.currentFrame);
					model.polygon[o.pos.x+0][o.pos.y+0] = self.colC.mc00.currentFrame*1;
					model.polygon[o.pos.x+1][o.pos.y+0] = self.colC.mc10.currentFrame*1;
					model.polygon[o.pos.x+0][o.pos.y+1] = self.colC.mc01.currentFrame*1;
					model.polygon[o.pos.x+1][o.pos.y+1] = self.colC.mc11.currentFrame*1;
					break;
				case "colR":
					if(!(model.polygon[o.pos.x+0][o.pos.y+0] == 0 &&
						model.polygon[o.pos.x+0][o.pos.y+1] == 0 &&
						model.polygon[o.pos.x+1][o.pos.y+1] == 0)) return false;
					
					o.el.a.gotoAndStop(self.colR.mc00.currentFrame);
					o.el.c.gotoAndStop(self.colR.mc01.currentFrame);
					o.el.d.gotoAndStop(self.colR.mc11.currentFrame);
					model.polygon[o.pos.x+0][o.pos.y+0] = self.colR.mc00.currentFrame*1;
					model.polygon[o.pos.x+0][o.pos.y+1] = self.colR.mc01.currentFrame*1;
					model.polygon[o.pos.x+1][o.pos.y+1] = self.colR.mc11.currentFrame*1;
					
					break;
				
			}
			delLines();
			reDrowPolygon();
			/*DEBUG*/
			console.clear();
			var s = ""; for(var i in model.polygon){
				s += "\n" + model.polygon[i].toString();
			};console.info(s);
			return true;
			
		}
		this.colL.on('pressmove', hendlerDrug);
		this.colC.on('pressmove', hendlerDrug);
		this.colR.on('pressmove', hendlerDrug);
		
		this.colL.on('pressup', function(e){
			var el = e.currentTarget;
			if(setColorOnDesk ()){
				el.alpha = 0;
				reNewL()
				el.x = 77.5;
				el.y = 640.75;
				el.scaleX = 0.01;
				el.scaleY = 0.01;
				
				createjs.Tween.get(el).to({
					alpha:1,
					scaleX: 0.4,
					scaleY: 0.4
		
				}, 250)
			}else createjs.Tween.get(el).to({
				alpha:1,
				x: 77.5,
				y: 640.75,
				scaleX: 0.4,
				scaleY: 0.4
		
			}, 250);
		});
		this.colC.on('pressup', function(e){
			var el = e.currentTarget;
			if(setColorOnDesk ()){
				el.alpha = 0;
				reNewC()
				el.x = 202.65;
				el.y = 640.5;
				el.scaleX = 0.01;
				el.scaleY = 0.01;
				
				createjs.Tween.get(el).to({
					alpha:1,
					scaleX: 0.4,
					scaleY: 0.4
		
				}, 250)
			}else createjs.Tween.get(e.currentTarget).to({
				alpha:1,
				x: 202.65,
				y: 640.5,
				scaleX: 0.4,
				scaleY: 0.4
		
			}, 250)
		});
		this.colR.on('pressup', function(e){
			var el = e.currentTarget;
			if(setColorOnDesk ()){
				el.alpha = 0;
				reNewR()
				el.x = 327.95;
				el.y = 640.55;
				el.scaleX = 0.01;
				el.scaleY = 0.01;
				
				createjs.Tween.get(el).to({
					alpha:1,
					scaleX: 0.4,
					scaleY: 0.4
		
				}, 250)
			}else createjs.Tween.get(e.currentTarget).to({
				alpha:1,
				x: 327.95,
				y: 640.55,
				scaleX: 0.4,
				scaleY: 0.4
		
			}, 250)
		});
		
		function setAnim(indexCell){
			var c001 = new lib.cell(), 
				el = self.polygon[indexCell];
		
			c001.x = el.localToGlobal(0,0).x;
			c001.y = el.localToGlobal(0,0).y;
			c001.rotation = 90;
			c001.scaleX = el.scaleX;
			c001.scaleY = el.scaleY;
			self.addChild(c001);
			c001.gotoAndPlay(1);
			var _interval = setInterval(function(){
		         c001.gotoAndPlay(1);
		    },1000/45*8)
		    setTimeout(function(){
		        clearInterval(_interval)
				self.removeChild(c001);
		    },1000)
			createjs.Tween.get(c001).to({
				alpha:0,
				rotation: 300,
				scaleX: 0,
				scaleY: 0
		
			}, 900);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.tFPS = new cjs.Text("FPS:000", "45px 'Cooper Black'", "#FFFFFF");
	this.tFPS.name = "tFPS";
	this.tFPS.lineHeight = 54;
	this.tFPS.lineWidth = 233;
	this.tFPS.setTransform(17.6,80.7,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.tFPS).wait(1));

	// Слой 1
	this.colR = new lib.ItemRight();
	this.colR.setTransform(328.1,640.7,0.4,0.4,0,0,0,0.4,0.4);

	this.colC = new lib.ItemCenter();
	this.colC.setTransform(202.7,640.6,0.4,0.4,0,0,0,0.1,0.3);

	this.colL = new lib.ItemLeft();
	this.colL.setTransform(77.6,640.9,0.4,0.4,0,0,0,0.1,0.3);

	this.instance = new lib.Controll();
	this.instance.setTransform(202.9,640.8,0.4,0.4,0,0,0,412.7,98);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,5,9);
	this.instance.cache(-2,-2,829,199);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.colL},{t:this.colC},{t:this.colR}]}).wait(1));

	// Слой 2
	this.polygon = new lib.WorkSpace02();
	this.polygon.setTransform(205.8,348.6,1,1,0,0,0,189.8,210.6);

	this.timeline.addTween(cjs.Tween.get(this.polygon).wait(1));

	// Слой 3
	this.instance_1 = new lib.controlBack();
	this.instance_1.setTransform(205.1,642.2,0.877,0.8,0,0,0,0.3,0.1);
	this.instance_1.filters = [new cjs.BlurFilter(8, 8, 3)];
	this.instance_1.cache(-258,-77,516,155);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// background
	this.instance_2 = new lib.background();
	this.instance_2.setTransform(0,0.2,0.4,0.4,0,0,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(174.3,384.1,474,770.4);

})(lib = lib||{}, img = img||{}, cjs = cjs||{}, ss = ss||{});
var lib, img, cjs, ss;