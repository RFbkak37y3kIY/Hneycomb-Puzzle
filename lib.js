(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 410,
	height: 768,
	fps: 30,
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(53,53,53,0.498)","rgba(0,0,0,0.8)"],[0,1],-82.2,0.1,82.3,0.1).s().p("As1HbIAAu1IM1nbIM2HbIAAO1Is2Hbg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0.298)","rgba(255,255,255,0.439)","rgba(0,0,0,0.298)","rgba(0,0,0,0.22)"],[0,0,1,1],68.4,0,-68.4,0).s().p("AqrGLIAAsVIKrmLIKsGLIAAMVIqsGLg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0.298)","rgba(255,255,255,0.439)","rgba(0,0,0,0.298)"],[0,0,1],-82.2,0.1,82.3,0.1).s().p("As1HbIAAu1IM1nbIM2HbIAAO1Is2HbgAqrmKIAAMVIKrGLIKrmLIAAsVIqrmLg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(11));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.2,-95,164.6,190);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#04FF60"],[0.106,1],0,-965,0,965.1).s().p("EhP/CWZMAAAksxMCf/AAAMAAAEsxg");
	this.shape.setTransform(512,962.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1024,1925.1);


(lib.WorkSpace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.mc84 = new lib.cell();
	this.mc84.setTransform(428.4,250.3,0.74,0.74,90,0,0,9.2,-10.3);

	this.mc40 = new lib.cell();
	this.mc40.setTransform(428.4,-236.7,0.74,0.74,90,0,0,9.2,-10.3);

	this.mc51 = new lib.cell();
	this.mc51.setTransform(428.4,-115.8,0.74,0.74,90,0,0,8.1,-10.3);

	this.mc73 = new lib.cell();
	this.mc73.setTransform(428.4,128.5,0.74,0.74,90,0,0,9.2,-10.3);

	this.mc62 = new lib.cell();
	this.mc62.setTransform(428.4,6.5,0.74,0.74,90,0,0,8.8,-10.3);

	this.mc74 = new lib.cell();
	this.mc74.setTransform(323.1,188.3,0.74,0.74,90,0,0,7.7,-10.2);

	this.mc85 = new lib.cell();
	this.mc85.setTransform(323.1,310.6,0.74,0.74,90,0,0,8.5,-10.2);

	this.mc30 = new lib.cell();
	this.mc30.setTransform(323.1,-297.5,0.74,0.74,90,0,0,9.1,-10.2);

	this.mc41 = new lib.cell();
	this.mc41.setTransform(323.1,-176.1,0.74,0.74,90,0,0,8.7,-10.2);

	this.mc63 = new lib.cell();
	this.mc63.setTransform(323.1,68.1,0.74,0.74,90,0,0,9.7,-10.2);

	this.mc52 = new lib.cell();
	this.mc52.setTransform(323.1,-54,0.74,0.74,90,0,0,9.2,-10.2);

	this.mc64 = new lib.cell();
	this.mc64.setTransform(216.8,128.5,0.74,0.74,90,0,0,9.2,-8.7);

	this.mc75 = new lib.cell();
	this.mc75.setTransform(216.8,250.1,0.74,0.74,90,0,0,9.2,-8.7);

	this.mc86 = new lib.cell();
	this.mc86.setTransform(216.8,372.1,0.74,0.74,90,0,0,9.6,-8.7);

	this.mc20 = new lib.cell();
	this.mc20.setTransform(216.8,-358.7,0.74,0.74,90,0,0,8.4,-8.7);

	this.mc31 = new lib.cell();
	this.mc31.setTransform(216.8,-236.5,0.74,0.74,90,0,0,9.2,-8.7);

	this.mc53 = new lib.cell();
	this.mc53.setTransform(216.8,6.5,0.74,0.74,90,0,0,8.8,-8.7);

	this.mc42 = new lib.cell();
	this.mc42.setTransform(216.8,-115.6,0.74,0.74,90,0,0,8.1,-8.7);

	this.mc65 = new lib.cell();
	this.mc65.setTransform(112.1,188,0.74,0.74,90,0,0,7.7,-9.3);

	this.mc76 = new lib.cell();
	this.mc76.setTransform(112.1,310.1,0.74,0.74,90,0,0,8.5,-9.3);

	this.mc87 = new lib.cell();
	this.mc87.setTransform(112.1,432,0.74,0.74,90,0,0,9.1,-9.3);

	this.mc21 = new lib.cell();
	this.mc21.setTransform(112.1,-297,0.74,0.74,90,0,0,9.1,-9.3);

	this.mc32 = new lib.cell();
	this.mc32.setTransform(112.1,-175.8,0.74,0.74,90,0,0,8.7,-9.3);

	this.mc54 = new lib.cell();
	this.mc54.setTransform(112.1,68,0.74,0.74,90,0,0,9.8,-9.3);

	this.mc43 = new lib.cell();
	this.mc43.setTransform(112.1,-54,0.74,0.74,90,0,0,9.1,-9.3);

	this.mc10 = new lib.cell();
	this.mc10.setTransform(112.1,-419.5,0.74,0.74,90,0,0,7.7,-9.3);

	this.mc88 = new lib.cell();
	this.mc88.setTransform(6.7,492.9,0.74,0.74,90,0,0,9.1,-9.1);

	this.mc66 = new lib.cell();
	this.mc66.setTransform(6.7,249.8,0.74,0.74,90,0,0,9.2,-9.1);

	this.mc77 = new lib.cell();
	this.mc77.setTransform(6.7,371.6,0.74,0.74,90,0,0,9.6,-9.1);

	this.mc22 = new lib.cell();
	this.mc22.setTransform(6.7,-236.4,0.74,0.74,90,0,0,9.2,-9.1);

	this.mc33 = new lib.cell();
	this.mc33.setTransform(6.7,-115.7,0.74,0.74,90,0,0,8.1,-9.1);

	this.mc55 = new lib.cell();
	this.mc55.setTransform(6.7,128.2,0.74,0.74,90,0,0,9.2,-9.1);

	this.mc44 = new lib.cell();
	this.mc44.setTransform(6.7,6.4,0.74,0.74,90,0,0,8.8,-9.1);

	this.mc00 = new lib.cell();
	this.mc00.setTransform(6.7,-479.9,0.74,0.74,90,0,0,8.7,-9.1);

	this.mc11 = new lib.cell();
	this.mc11.setTransform(6.7,-358.6,0.74,0.74,90,0,0,8.4,-9.1);

	this.mc01 = new lib.cell();
	this.mc01.setTransform(-98.6,-419.7,0.74,0.74,90,0,0,7.7,-9);

	this.mc78 = new lib.cell();
	this.mc78.setTransform(-99,432.2,0.74,0.74,90,0,0,9.1,-8.4);

	this.mc56 = new lib.cell();
	this.mc56.setTransform(-105.2,182.3,0.74,0.74,90);

	this.mc67 = new lib.cell();
	this.mc67.setTransform(-98.6,310.2,0.74,0.74,90,0,0,8.5,-9);

	this.mc12 = new lib.cell();
	this.mc12.setTransform(-98.6,-297.1,0.74,0.74,90,0,0,9.1,-9);

	this.mc23 = new lib.cell();
	this.mc23.setTransform(-98.6,-175.9,0.74,0.74,90,0,0,8.7,-8.9);

	this.mc45 = new lib.cell();
	this.mc45.setTransform(-98.6,68,0.74,0.74,90,0,0,9.8,-8.9);

	this.mc34 = new lib.cell();
	this.mc34.setTransform(-98.6,-54,0.74,0.74,90,0,0,9.1,-8.9);

	this.mc02 = new lib.cell();
	this.mc02.setTransform(-203.3,-358.8,0.74,0.74,90,0,0,8.4,-9.6);

	this.mc46 = new lib.cell();
	this.mc46.setTransform(-203.3,127.8,0.74,0.74,90,0,0,8.4,-9.6);

	this.mc57 = new lib.cell();
	this.mc57.setTransform(-203.3,249.6,0.74,0.74,90,0,0,8.6,-9.6);

	this.mc68 = new lib.cell();
	this.mc68.setTransform(-203.3,371.3,0.74,0.74,90,0,0,8.8,-9.6);

	this.mc13 = new lib.cell();
	this.mc13.setTransform(-203.3,-237.2,0.74,0.74,90,0,0,8.4,-9.6);

	this.mc35 = new lib.cell();
	this.mc35.setTransform(-203.3,6.8,0.74,0.74,90,0,0,9.3,-9.6);

	this.mc24 = new lib.cell();
	this.mc24.setTransform(-203.3,-114.9,0.74,0.74,90,0,0,9.2,-9.6);

	this.mc03 = new lib.cell();
	this.mc03.setTransform(-308.6,-297.2,0.74,0.74,90,0,0,9.1,-9.5);

	this.mc36 = new lib.cell();
	this.mc36.setTransform(-308.6,67.9,0.74,0.74,90,0,0,9.7,-9.5);

	this.mc47 = new lib.cell();
	this.mc47.setTransform(-308.6,187.8,0.74,0.74,90,0,0,7.7,-9.5);

	this.mc58 = new lib.cell();
	this.mc58.setTransform(-308.6,309.9,0.74,0.74,90,0,0,8.5,-9.5);

	this.mc25 = new lib.cell();
	this.mc25.setTransform(-308.6,-53.9,0.74,0.74,90,0,0,9.2,-9.5);

	this.mc14 = new lib.cell();
	this.mc14.setTransform(-308.6,-176,0.74,0.74,90,0,0,8.7,-9.5);

	this.mc04 = new lib.cell();
	this.mc04.setTransform(-415.6,-237.1,0.74,0.74,90,0,0,8.4,-7);

	this.mc37 = new lib.cell();
	this.mc37.setTransform(-415.6,127.9,0.74,0.74,90,0,0,8.4,-7);

	this.mc48 = new lib.cell();
	this.mc48.setTransform(-415.6,249.6,0.74,0.74,90,0,0,8.6,-7);

	this.mc26 = new lib.cell();
	this.mc26.setTransform(-415.6,6.9,0.74,0.74,90,0,0,9.3,-7);

	this.mc15 = new lib.cell();
	this.mc15.setTransform(-415.6,-114.8,0.74,0.74,90,0,0,9.2,-7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc15},{t:this.mc26},{t:this.mc48},{t:this.mc37},{t:this.mc04},{t:this.mc14},{t:this.mc25},{t:this.mc58},{t:this.mc47},{t:this.mc36},{t:this.mc03},{t:this.mc24},{t:this.mc35},{t:this.mc13},{t:this.mc68},{t:this.mc57},{t:this.mc46},{t:this.mc02},{t:this.mc34},{t:this.mc45},{t:this.mc23},{t:this.mc12},{t:this.mc67},{t:this.mc56},{t:this.mc78},{t:this.mc01},{t:this.mc11},{t:this.mc00},{t:this.mc44},{t:this.mc55},{t:this.mc33},{t:this.mc22},{t:this.mc77},{t:this.mc66},{t:this.mc88},{t:this.mc10},{t:this.mc43},{t:this.mc54},{t:this.mc32},{t:this.mc21},{t:this.mc87},{t:this.mc76},{t:this.mc65},{t:this.mc42},{t:this.mc53},{t:this.mc31},{t:this.mc20},{t:this.mc86},{t:this.mc75},{t:this.mc64},{t:this.mc52},{t:this.mc63},{t:this.mc41},{t:this.mc30},{t:this.mc85},{t:this.mc74},{t:this.mc62},{t:this.mc73},{t:this.mc51},{t:this.mc40},{t:this.mc84}]}).wait(1));

	// Слой 4
	this.instance = new lib.perimiter();
	this.instance.setTransform(1.1,0.1);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,5,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-514.7,-565.5,1034,1144);


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
			for(var i=0; i < 9; i++) {
				for(var j=0; j < 9; j++){
					if(j < (5+i) && i<(5+j)){
						self.polygon["mc"+j+i].alpha = 1;
					}
				}
			}	
		}
		function HitTest(target){
			function isOk(a, b){
				var k = 40;
				var ag = a.localToGlobal(0,0),
					bg = b.localToGlobal(0,0);
				return Math.abs(ag.x - bg.x) < k && Math.abs(ag.y - bg.y) < k;
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
					pArr.a.alpha = alpha;
					pArr.b.alpha = alpha;
					pArr.d.alpha = alpha;
					break;
				case "colC":
					if(!(pArr.b && pArr.c && pArr.d)) return null;
					pArr.a.alpha = alpha;
					pArr.b.alpha = alpha;
					pArr.c.alpha = alpha;
					pArr.d.alpha = alpha;
					break;
				case "colR":
					if(!( pArr.c && pArr.d)) return null;
					pArr.a.alpha = alpha;
					pArr.c.alpha = alpha;
					pArr.d.alpha = alpha;
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
			reDrowPolygon();
			var htEl = HitTest(el)
			if(htEl){
				model.setSelection = setSelected(el.name, htEl.name);
			}else{
				model.setSelection = null;
			}
		}
		function setColorOnDesk (){
			var o = model.setSelection;
			if(!o) return false;
			switch(o.crlName) {
				case "colL":
					o.el.a.gotoAndStop(self.colL.mc00.currentFrame);
					o.el.b.gotoAndStop(self.colL.mc10.currentFrame);
					o.el.d.gotoAndStop(self.colL.mc11.currentFrame);
				
					break;
				case "colC":
					o.el.a.gotoAndStop(self.colC.mc00.currentFrame);
					o.el.b.gotoAndStop(self.colC.mc10.currentFrame);
					o.el.c.gotoAndStop(self.colC.mc01.currentFrame);
					o.el.d.gotoAndStop(self.colC.mc11.currentFrame);
					break;
				case "colR":
					o.el.a.gotoAndStop(self.colR.mc00.currentFrame);
					o.el.c.gotoAndStop(self.colR.mc01.currentFrame);
					o.el.d.gotoAndStop(self.colR.mc11.currentFrame);
					break;
				
			}
			reDrowPolygon();
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.tFPS = new cjs.Text("FPS:000", "bold 45px 'Courier New'", "#FFFFFF");
	this.tFPS.name = "tFPS";
	this.tFPS.lineHeight = 53;
	this.tFPS.lineWidth = 233;
	this.tFPS.setTransform(17,53.7,0.8,0.8);

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
	this.polygon = new lib.WorkSpace();
	this.polygon.setTransform(205.1,318.8,0.38,0.38,0,0,0,0.6,0.3);

	this.timeline.addTween(cjs.Tween.get(this.polygon).wait(1));

	// Слой 3
	this.instance_1 = new lib.controlBack();
	this.instance_1.setTransform(205.1,642.2,0.877,0.8,0,0,0,0.3,0.1);
	this.instance_1.filters = [new cjs.BlurFilter(16, 16, 3)];
	this.instance_1.cache(-258,-77,516,155);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// background
	this.instance_2 = new lib.background();
	this.instance_2.setTransform(0,0.2,0.4,0.4,0,0,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(163.3,384.1,496,770.4);

})(lib = lib||{}, img = img||{}, cjs = cjs||{}, ss = ss||{});
var lib, img, cjs, ss;