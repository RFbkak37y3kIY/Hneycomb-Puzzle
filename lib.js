(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 512,
	height: 960,
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


(lib.cell = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();stop
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#353535","#000000"],[0,1],-82.2,0.1,82.3,0.1).s().p("As1HbIAAu1IM1nbIM2HbIAAO1Is2Hbg");

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_3}]},1).to({state:[]},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.2,-95,164.6,190);


(lib.background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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
	this.instance = new lib.cell();
	this.instance.setTransform(428.4,250.3,0.74,0.74,90,0,0,9.2,-10.3);

	this.instance_1 = new lib.cell();
	this.instance_1.setTransform(428.4,-236.7,0.74,0.74,90,0,0,9.2,-10.3);

	this.instance_2 = new lib.cell();
	this.instance_2.setTransform(428.4,-115.8,0.74,0.74,90,0,0,8.1,-10.3);

	this.instance_3 = new lib.cell();
	this.instance_3.setTransform(428.4,128.5,0.74,0.74,90,0,0,9.2,-10.3);

	this.instance_4 = new lib.cell();
	this.instance_4.setTransform(428.4,6.5,0.74,0.74,90,0,0,8.8,-10.3);

	this.instance_5 = new lib.cell();
	this.instance_5.setTransform(323.1,188.3,0.74,0.74,90,0,0,7.7,-10.2);

	this.instance_6 = new lib.cell();
	this.instance_6.setTransform(323.1,310.6,0.74,0.74,90,0,0,8.5,-10.2);

	this.instance_7 = new lib.cell();
	this.instance_7.setTransform(323.1,-297.5,0.74,0.74,90,0,0,9.1,-10.2);

	this.instance_8 = new lib.cell();
	this.instance_8.setTransform(323.1,-176.1,0.74,0.74,90,0,0,8.7,-10.2);

	this.instance_9 = new lib.cell();
	this.instance_9.setTransform(323.1,68.1,0.74,0.74,90,0,0,9.7,-10.2);

	this.instance_10 = new lib.cell();
	this.instance_10.setTransform(323.1,-54,0.74,0.74,90,0,0,9.2,-10.2);

	this.instance_11 = new lib.cell();
	this.instance_11.setTransform(216.8,128.5,0.74,0.74,90,0,0,9.2,-8.7);

	this.instance_12 = new lib.cell();
	this.instance_12.setTransform(216.8,250.1,0.74,0.74,90,0,0,9.2,-8.7);

	this.instance_13 = new lib.cell();
	this.instance_13.setTransform(216.8,372.1,0.74,0.74,90,0,0,9.6,-8.7);

	this.instance_14 = new lib.cell();
	this.instance_14.setTransform(216.8,-358.7,0.74,0.74,90,0,0,8.4,-8.7);

	this.instance_15 = new lib.cell();
	this.instance_15.setTransform(216.8,-236.5,0.74,0.74,90,0,0,9.2,-8.7);

	this.instance_16 = new lib.cell();
	this.instance_16.setTransform(216.8,6.5,0.74,0.74,90,0,0,8.8,-8.7);

	this.instance_17 = new lib.cell();
	this.instance_17.setTransform(216.8,-115.6,0.74,0.74,90,0,0,8.1,-8.7);

	this.instance_18 = new lib.cell();
	this.instance_18.setTransform(112.1,188,0.74,0.74,90,0,0,7.7,-9.3);

	this.instance_19 = new lib.cell();
	this.instance_19.setTransform(112.1,310.1,0.74,0.74,90,0,0,8.5,-9.3);

	this.instance_20 = new lib.cell();
	this.instance_20.setTransform(112.1,432,0.74,0.74,90,0,0,9.1,-9.3);

	this.instance_21 = new lib.cell();
	this.instance_21.setTransform(112.1,-297,0.74,0.74,90,0,0,9.1,-9.3);

	this.instance_22 = new lib.cell();
	this.instance_22.setTransform(112.1,-175.8,0.74,0.74,90,0,0,8.7,-9.3);

	this.instance_23 = new lib.cell("synched",0);
	this.instance_23.setTransform(112.1,68,0.74,0.74,90,0,0,9.8,-9.3);

	this.instance_24 = new lib.cell("synched",4);
	this.instance_24.setTransform(112.1,-54,0.74,0.74,90,0,0,9.1,-9.3);

	this.instance_25 = new lib.cell();
	this.instance_25.setTransform(112.1,-419.5,0.74,0.74,90,0,0,7.7,-9.3);

	this.instance_26 = new lib.cell();
	this.instance_26.setTransform(6.7,492.9,0.74,0.74,90,0,0,9.1,-9.1);

	this.instance_27 = new lib.cell();
	this.instance_27.setTransform(6.7,249.8,0.74,0.74,90,0,0,9.2,-9.1);

	this.instance_28 = new lib.cell();
	this.instance_28.setTransform(6.7,371.6,0.74,0.74,90,0,0,9.6,-9.1);

	this.instance_29 = new lib.cell();
	this.instance_29.setTransform(6.7,-236.4,0.74,0.74,90,0,0,9.2,-9.1);

	this.instance_30 = new lib.cell("synched",3);
	this.instance_30.setTransform(6.7,-115.7,0.74,0.74,90,0,0,8.1,-9.1);

	this.instance_31 = new lib.cell("synched",0);
	this.instance_31.setTransform(6.7,128.2,0.74,0.74,90,0,0,9.2,-9.1);

	this.instance_32 = new lib.cell();
	this.instance_32.setTransform(6.7,6.4,0.74,0.74,90,0,0,8.8,-9.1);

	this.instance_33 = new lib.cell();
	this.instance_33.setTransform(6.7,-479.9,0.74,0.74,90,0,0,8.7,-9.1);

	this.instance_34 = new lib.cell();
	this.instance_34.setTransform(6.7,-358.6,0.74,0.74,90,0,0,8.4,-9.1);

	this.instance_35 = new lib.cell();
	this.instance_35.setTransform(-98.6,-419.7,0.74,0.74,90,0,0,7.7,-9);

	this.instance_36 = new lib.cell();
	this.instance_36.setTransform(-99,432.2,0.74,0.74,90,0,0,9.1,-8.4);

	this.instance_37 = new lib.cell();
	this.instance_37.setTransform(-98.6,188,0.74,0.74,90,0,0,7.7,-9);

	this.instance_38 = new lib.cell();
	this.instance_38.setTransform(-98.6,310.2,0.74,0.74,90,0,0,8.5,-9);

	this.instance_39 = new lib.cell();
	this.instance_39.setTransform(-98.6,-297.1,0.74,0.74,90,0,0,9.1,-9);

	this.instance_40 = new lib.cell("single",1);
	this.instance_40.setTransform(-98.6,-175.9,0.74,0.74,90,0,0,8.7,-8.9);

	this.instance_41 = new lib.cell("synched",0);
	this.instance_41.setTransform(-98.6,68,0.74,0.74,90,0,0,9.8,-8.9);

	this.instance_42 = new lib.cell("synched",2);
	this.instance_42.setTransform(-98.6,-54,0.74,0.74,90,0,0,9.1,-8.9);

	this.instance_43 = new lib.cell();
	this.instance_43.setTransform(-203.3,-358.8,0.74,0.74,90,0,0,8.4,-9.6);

	this.instance_44 = new lib.cell();
	this.instance_44.setTransform(-203.3,127.8,0.74,0.74,90,0,0,8.4,-9.6);

	this.instance_45 = new lib.cell();
	this.instance_45.setTransform(-203.3,249.6,0.74,0.74,90,0,0,8.6,-9.6);

	this.instance_46 = new lib.cell();
	this.instance_46.setTransform(-203.3,371.3,0.74,0.74,90,0,0,8.8,-9.6);

	this.instance_47 = new lib.cell();
	this.instance_47.setTransform(-203.3,-237.2,0.74,0.74,90,0,0,8.4,-9.6);

	this.instance_48 = new lib.cell();
	this.instance_48.setTransform(-203.3,6.8,0.74,0.74,90,0,0,9.3,-9.6);

	this.instance_49 = new lib.cell();
	this.instance_49.setTransform(-203.3,-114.9,0.74,0.74,90,0,0,9.2,-9.6);

	this.instance_50 = new lib.cell();
	this.instance_50.setTransform(-308.6,-297.2,0.74,0.74,90,0,0,9.1,-9.5);

	this.instance_51 = new lib.cell();
	this.instance_51.setTransform(-308.6,67.9,0.74,0.74,90,0,0,9.7,-9.5);

	this.instance_52 = new lib.cell();
	this.instance_52.setTransform(-308.6,187.8,0.74,0.74,90,0,0,7.7,-9.5);

	this.instance_53 = new lib.cell();
	this.instance_53.setTransform(-308.6,309.9,0.74,0.74,90,0,0,8.5,-9.5);

	this.instance_54 = new lib.cell();
	this.instance_54.setTransform(-308.6,-53.9,0.74,0.74,90,0,0,9.2,-9.5);

	this.instance_55 = new lib.cell();
	this.instance_55.setTransform(-308.6,-176,0.74,0.74,90,0,0,8.7,-9.5);

	this.instance_56 = new lib.cell();
	this.instance_56.setTransform(-415.6,-237.1,0.74,0.74,90,0,0,8.4,-7);

	this.instance_57 = new lib.cell();
	this.instance_57.setTransform(-415.6,127.9,0.74,0.74,90,0,0,8.4,-7);

	this.instance_58 = new lib.cell();
	this.instance_58.setTransform(-415.6,249.6,0.74,0.74,90,0,0,8.6,-7);

	this.instance_59 = new lib.cell();
	this.instance_59.setTransform(-415.6,6.9,0.74,0.74,90,0,0,9.3,-7);

	this.instance_60 = new lib.cell();
	this.instance_60.setTransform(-415.6,-114.8,0.74,0.74,90,0,0,9.2,-7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhHHAotMAAAhR1MBHKgo+MBHFAoxMAAABS7MhGjAohg");
	this.shape.setTransform(-2.9,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgFeBWyQgUABgRgLQgSgKgKgRIlJo6IqVAAQgUAAgRgKQgRgKgLgRIlKo8IqVAAQgTABgSgLQgSgJgKgSIlMo/IqQAAQgUAAgSgKQgRgKgKgRIlGo2IqUAAQgUAAgSgKQgRgKgLgRIlgphQgKgSAAgTQABgUAJgSIFLo9IlLo9QgKgRAAgVQABgTAJgSIFLo7IlLo8QgKgRAAgUQABgSAJgSIFLo9IlLo8QgKgRAAgUQABgUAJgSIFKo6IlKo4QgKgSAAgTQABgVAJgRIFgphQALgRARgKQASgLAUABIKPAAIFLo/QAKgRARgKQASgKAUAAIKPAAIFNpAQAKgSASgKQASgKATAAIKYAAIFGo1QAKgSARgKQASgKAUAAIKTAAIFLo9QAKgRASgKQARgLAUABIK9AAQAUgBASALQARAKAKARIFNJAIKTAAQAUAAASAKQAQAKALARIFGI1IKRAAQAUgBASALQAQAKALARIFMI+IKUAAQAUAAARAKQASAKAKASIFKI9IKTAAQAVAAARAKQARAJALASIFgJhQAKARAAAVQgBATgJASIlJI5IFJI6QAKASAAAVQgBATgJASIlLI6IFLI+QAKARAAATQgBATgJARIlLI8IFLI9QAKARAAAVQgBATgJASIlMI9IFMI+QAKASAAAUQgBAUgJARIlgJhQgLARgRAKQgRALgVgBIqTAAIlKI8QgKASgSAKQgRAKgUAAIqXAAIlJI4QgLARgQAKQgSALgUgBIqPAAIlII5QgLASgQAJQgSALgUAAIqUAAIlLI7QgKARgRAKQgSALgUgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-499.4,-555.5,998.8,1111);


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
		function Init() {
			self.colL.mc00.gotoAndStop(1);
			self.colL.mc10.gotoAndStop(2);
			self.colL.mc11.gotoAndStop(3);
			
			/*self.colC.mc00.gotoAndStop(1);
			self.colC.mc10.gotoAndStop(2);
			self.colC.mc11.gotoAndStop(3);
			self.colC.mc11.gotoAndStop(3);
			
			self.colR.mc00.gotoAndStop(1);
			self.colR.mc01.gotoAndStop(2);
			self.colR.mc11.gotoAndStop(3);
			
			*/
			console.log("Init is called",self.colL.mc11);
		}
		setTimeout(Init, 1000);
		function hendlerDrug(e){
			e.currentTarget.x = e.stageX / stage.scaleX;
			e.currentTarget.y = (e.stageY / stage.scaleY) - 250;
		}
		this.colL.on('pressmove', hendlerDrug);
		this.colC.on('pressmove', hendlerDrug);
		this.colR.on('pressmove', hendlerDrug);
		
		/*
		this.addEventListener('click', function(e){
			console.log("is Click", e.toString(), stage);
		})
		
		
		stage.addEventListener('stagemousedown', function(e){
			console.log('stagemousedown is called');
			
		});
		
		
		
		stage.addEventListener('stagemousemove', function(e){
			console.log('stagemousemove is called', e);
		});
		stage.addEventListener('stagemouseup', function(e){
			console.log('stagemouseup is called', e);
		});*/
		
		//'stagemousedown'
		//'stagemousemove'
		//'stagemouseup'
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.colR = new lib.ItemRight();
	this.colR.setTransform(409.9,800.4,0.5,0.5,0,0,0,0.1,0.1);
	this.colR.cache(-92,-92,185,182);

	this.colC = new lib.ItemCenter();
	this.colC.setTransform(253.3,800.2,0.5,0.5,0,0,0,0.1,0);
	this.colC.cache(-131,-92,263,183);

	this.colL = new lib.ItemLeft();
	this.colL.setTransform(96.9,800.5,0.5,0.5,0,0,0,0,0.1);
	this.colL.cache(-92,-92,185,183);

	this.instance = new lib.Controll();
	this.instance.setTransform(253.5,800.4,0.5,0.5,0,0,0,412.4,97.7);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,15,50);
	this.instance.cache(-2,-2,829,199);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.colL},{t:this.colC},{t:this.colR}]}).wait(1));

	// Слой 2
	this.plygon = new lib.WorkSpace();
	this.plygon.setTransform(256.1,398.1,0.474,0.474,0,0,0,0.1,0.1);
	this.plygon.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,15,50);
	this.plygon.cache(-501,-557,1003,1115);

	this.timeline.addTween(cjs.Tween.get(this.plygon).wait(1));

	// background
	this.instance_1 = new lib.background();
	this.instance_1.setTransform(0,0.1,0.5,0.5,0,0,0,0,0.1);
	this.instance_1.cache(-2,-2,1028,1929);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(222.1,480,583,962.6);

})(lib = lib||{}, img = img||{}, cjs = cjs||{}, ss = ss||{});
var lib, img, cjs, ss;