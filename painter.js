//收录了140多个具有英文颜色名的的16进制和RGB的颜色对照表
//[颜色中文名, 16进制颜色, RGB整数颜色, RGB百分比颜色]
var ColorRefTable = [
    ['aliceblue', '#f0f8ff', 'rgb(240,248,255)', 'rgb(94.1%,96.9%,100%)'],
    ['antiquewhite', '#faebd7', 'rgb(250,235,215)', 'rgb(98%,92.2%,84.3%)'],
    ['aqua', '#00ffff', 'rgb(0,255,255)', 'rgb(0%,100%,100%)'],
    ['aquamarine', '#7fffd4', 'rgb(127,255,212)', 'rgb(49.8%,100%,83.1%)'],
    ['azure', '#f0ffff', 'rgb(240,255,255)', 'rgb(94.1%,100%,100%)'],
    ['beige', '#f5f5dc', 'rgb(245,245,220)', 'rgb(96.1%,96.1%,86.3%)'],
    ['bisque', '#ffe4c4', 'rgb(255,228,196)', 'rgb(100%,89.4%,76.9%)'],
    ['black', '#000000', 'rgb(0,0,0)', 'rgb(0%,0%,0%)'],
    ['blanchedalmond', '#ffebcd', 'rgb(255,235,205)', 'rgb(100%,92.2%,80.4%)'],
    ['blue', '#0000ff', 'rgb(0,0,255)', 'rgb(0%,0%,100%)'],
    ['blueviolet', '#8a2be2', 'rgb(138,43,226)', 'rgb(54.1%,16.9%,88.6%)'],
    ['brown', '#a52a2a', 'rgb(165,42,42)', 'rgb(64.7%,16.5%,16.5%)'],
    ['burlywood', '#deb887', 'rgb(222,184,135)', 'rgb(87.1%,72.2%,52.9%)'],
    ['cadetblue', '#5f9ea0', 'rgb(95,158,160)', 'rgb(37.3%,62%,62.7%)'],
    ['chartreuse', '#7fff00', 'rgb(127,255,0)', 'rgb(49.8%,100%,0%)'],
    ['chocolate', '#d2691e', 'rgb(210,105,30)', 'rgb(82.4%,41.1%,11.8%)'],
    ['coral', '#ff7f50', 'rgb(255,127,80)', 'rgb(100%,49.8%,31.4%)'],
    ['cornflowerblue', '#6495ed', 'rgb(100,149,237)', 'rgb(39.2%,58.4%,92.9%)'],
    ['cornsilk', '#fff8dc', 'rgb(255,248,220)', 'rgb(100%,97.3%,86.3%)'],
    ['crimson', '#dc143c', 'rgb(220,20,60)', 'rgb(86.3%,7.8%,23.5%)'],
    ['cyan', '#00ffff', 'rgb(0,255,255)', 'rgb(0%,100%,100%)'],
    ['darkblue', '#00008b', 'rgb(0,0,139)', 'rgb(0%,0%,54.5%)'],
    ['darkcyan', '#008b8b', 'rgb(0,139,139)', 'rgb(0%,54.5%,54.5%)'],
    ['darkgoldenrod', '#b8860b', 'rgb(184,134,11)', 'rgb(72.2%,52.5%,4.3%)'],
    ['darkgray', '#a9a9a9', 'rgb(169,169,169)', 'rgb(66.3%,66.3%,66.3%)'],
    ['darkgreen', '#006400', 'rgb(0,100,0)', 'rgb(0%,39.2%,0%)'],
    ['darkgrey', '#a9a9a9', 'rgb(169,169,169)', 'rgb(66.3%,66.3%,66.3%)'],
    ['darkkhaki', '#bdb76b', 'rgb(189,183,107)', 'rgb(74.1%,71.8%,42%)'],
    ['darkmagenta', '#8b008b', 'rgb(139,0,139)', 'rgb(54.5%,0%,54.5%)'],
    ['darkolivegreen', '#556b2f', 'rgb(85,107,47)', 'rgb(33.3%,42%,18.4%)'],
    ['darkorange', '#ff8c00', 'rgb(255,140,0)', 'rgb(100%,54.9%,0%)'],
    ['darkorchid', '#9932cc', 'rgb(153,50,204)', 'rgb(60%,19.6%,80%)'],
    ['darkred', '#8b0000', 'rgb(139,0,0)', 'rgb(54.5%,0%,0%)'],
    ['darksalmon', '#e9967a', 'rgb(233,150,122)', 'rgb(91.4%,58.8%,47.8%)'],
    ['darkseagreen', '#8fbc8f', 'rgb(143,188,143)', 'rgb(56.1%,73.7%,56.1%)'],
    ['darkslateblue', '#483d8b', 'rgb(72,61,139)', 'rgb(28.2%,23.9%,54.5%)'],
    ['darkslategray', '#2f4f4f', 'rgb(47,79,79)', 'rgb(18.4%,31%,31%)'],
    ['darkslategrey', '#2f4f4f', 'rgb(47,79,79)', 'rgb(18.4%,31%,31%)'],
    ['darkturquoise', '#00ced1', 'rgb(0,206,209)', 'rgb(0%,80.8%,82%)'],
    ['darkviolet', '#9400d3', 'rgb(148,0,211)', 'rgb(58%,0%,82.7%)'],
    ['deeppink', '#ff1493', 'rgb(255,20,147)', 'rgb(100%,7.8%,57.6%)'],
    ['deepskyblue', '#00bfff', 'rgb(0,191,255)', 'rgb(0%,74.9%,100%)'],
    ['dimgray', '#696969', 'rgb(105,105,105)', 'rgb(41.1%,41.1%,41.1%)'],
    ['dimgrey', '#696969', 'rgb(105,105,105)', 'rgb(41.1%,41.1%,41.1%)'],
    ['dodgerblue', '#1e90ff', 'rgb(30,144,255)', 'rgb(11.8%,56.5%,100%)'],
    ['firebrick', '#b22222', 'rgb(178,34,34)', 'rgb(69.8%,13.3%,13.3%)'],
    ['floralwhite', '#fffaf0', 'rgb(255,250,240)', 'rgb(100%,98%,94.1%)'],
    ['forestgreen', '#228b22', 'rgb(34,139,34)', 'rgb(13.3%,54.5%,13.3%)'],
    ['fuchsia', '#ff00ff', 'rgb(255,0,255)', 'rgb(100%,0%,100%)'],
    ['gainsboro', '#dcdcdc', 'rgb(220,220,220)', 'rgb(86.3%,86.3%,86.3%)'],
    ['ghostwhite', '#f8f8ff', 'rgb(248,248,255)', 'rgb(97.3%,97.3%,100%)'],
    ['gold', '#ffd700', 'rgb(255,215,0)', 'rgb(100%,84.3%,0%)'],
    ['goldenrod', '#daa520', 'rgb(218,165,32)', 'rgb(85.5%,64.7%,12.5%)'],
    ['gray', '#808080', 'rgb(128,128,128)', 'rgb(50.2%,50.2%,50.2%)'],
    ['green', '#008000', 'rgb(0,128,0)', 'rgb(0%,50.2%,0%)'],
    ['greenyellow', '#adff2f', 'rgb(173,255,47)', 'rgb(67.8%,100%,18.4%)'],
    ['grey', '#808080', 'rgb(128,128,128)', 'rgb(50.2%,50.2%,50.2%)'],
    ['honeydew', '#f0fff0', 'rgb(240,255,240)', 'rgb(94.1%,100%,94.1%)'],
    ['hotpink', '#ff69b4', 'rgb(255,105,180)', 'rgb(100%,41.1%,70.6%)'],
    ['indianred', '#cd5c5c', 'rgb(205,92,92)', 'rgb(80.4%,36%,36%)'],
    ['indigo', '#4b0082', 'rgb(75,0,130)', 'rgb(29.4%,0%,51%)'],
    ['ivory', '#fffff0', 'rgb(255,255,240)', 'rgb(100%,100%,94.1%)'],
    ['khaki', '#f0e68c', 'rgb(240,230,140)', 'rgb(94.1%,90.2%,54.9%)'],
    ['lavender', '#e6e6fa', 'rgb(230,230,250)', 'rgb(90.2%,90.2%,98%)'],
    ['lavenderblush', '#fff0f5', 'rgb(255,240,245)', 'rgb(100%,94.1%,96.1%)'],
    ['lawngreen', '#7cfc00', 'rgb(124,252,0)', 'rgb(48.6%,98.8%,0%)'],
    ['lemonchiffon', '#fffacd', 'rgb(255,250,205)', 'rgb(100%,98%,80.4%)'],
    ['lightblue', '#add8e6', 'rgb(173,216,230)', 'rgb(67.8%,84.7%,90.2%)'],
    ['lightcoral', '#f08080', 'rgb(240,128,128)', 'rgb(94.1%,50.2%,50.2%)'],
    ['lightcyan', '#e0ffff', 'rgb(224,255,255)', 'rgb(87.8%,100%,100%)'],
    ['lightgoldenrodyellow', '#fafad2', 'rgb(250,250,210)', 'rgb(98%,98%,82.4%)'],
    ['lightgray', '#d3d3d3', 'rgb(211,211,211)', 'rgb(82.7%,82.7%,82.7%)'],
    ['lightgreen', '#90ee90', 'rgb(144,238,144)', 'rgb(56.5%,93.3%,56.5%)'],
    ['lightgrey', '#d3d3d3', 'rgb(211,211,211)', 'rgb(82.7%,82.7%,82.7%)'],
    ['lightpink', '#ffb6c1', 'rgb(255,182,193)', 'rgb(100%,71.4%,75.7%)'],
    ['lightsalmon', '#ffa07a', 'rgb(255,160,122)', 'rgb(100%,62.7%,47.8%)'],
    ['lightseagreen', '#20b2aa', 'rgb(32,178,170)', 'rgb(12.5%,69.8%,66.7%)'],
    ['lightskyblue', '#87cefa', 'rgb(135,206,250)', 'rgb(52.9%,80.8%,98%)'],
    ['lightslategray', '#778899', 'rgb(119,136,153)', 'rgb(46.7%,53.3%,60%)'],
    ['lightslategrey', '#778899', 'rgb(119,136,153)', 'rgb(46.7%,53.3%,60%)'],
    ['lightsteelblue', '#b0c4de', 'rgb(176,196,222)', 'rgb(69%,76.9%,87.1%)'],
    ['lightyellow', '#ffffe0', 'rgb(255,255,224)', 'rgb(100%,100%,87.8%)'],
    ['lime', '#00ff00', 'rgb(0,255,0)', 'rgb(0%,100%,0%)'],
    ['limegreen', '#32cd32', 'rgb(50,205,50)', 'rgb(19.6%,80.4%,19.6%)'],
    ['linen', '#faf0e6', 'rgb(250,240,230)', 'rgb(98%,94.1%,90.2%)'],
    ['magenta', '#ff00ff', 'rgb(255,0,255)', 'rgb(100%,0%,100%)'],
    ['maroon', '#800000', 'rgb(128,0,0)', 'rgb(50.2%,0%,0%)'],
    ['mediumaquamarine', '#66cdaa', 'rgb(102,205,170)', 'rgb(40%,80.4%,66.7%)'],
    ['mediumblue', '#0000cd', 'rgb(0,0,205)', 'rgb(0%,0%,80.4%)'],
    ['mediumorchid', '#ba55d3', 'rgb(186,85,211)', 'rgb(72.9%,33.3%,82.7%)'],
    ['mediumpurple', '#9370db', 'rgb(147,112,219)', 'rgb(57.6%,43.9%,85.9%)'],
    ['mediumseagreen', '#3cb371', 'rgb(60,179,113)', 'rgb(23.5%,70.2%,44.3%)'],
    ['mediumslateblue', '#7b68ee', 'rgb(123,104,238)', 'rgb(48.2%,40.8%,93.3%)'],
    ['mediumspringgreen', '#00fa9a', 'rgb(0,250,154)', 'rgb(0%,98%,60.4%)'],
    ['mediumturquoise', '#48d1cc', 'rgb(72,209,204)', 'rgb(28.2%,82%,80%)'],
    ['mediumvioletred', '#c71585', 'rgb(199,21,133)', 'rgb(78%,8.2%,52.2%)'],
    ['midnightblue', '#191970', 'rgb(25,25,112)', 'rgb(9.8%,9.8%,43.9%)'],
    ['mintcream', '#f5fffa', 'rgb(245,255,250)', 'rgb(96.1%,100%,98%)'],
    ['mistyrose', '#ffe4e1', 'rgb(255,228,225)', 'rgb(100%,89.4%,88.2%)'],
    ['moccasin', '#ffe4b5', 'rgb(255,228,181)', 'rgb(100%,89.4%,71%)'],
    ['navajowhite', '#ffdead', 'rgb(255,222,173)', 'rgb(100%,87.1%,67.8%)'],
    ['navy', '#000080', 'rgb(0,0,128)', 'rgb(0%,0%,50.2%)'],
    ['oldlace', '#fdf5e6', 'rgb(253,245,230)', 'rgb(99.2%,96.1%,90.2%)'],
    ['olive', '#808000', 'rgb(128,128,0)', 'rgb(50.2%,50.2%,0%)'],
    ['olivedrab', '#6b8e23', 'rgb(107,142,35)', 'rgb(42%,55.7%,13.7%)'],
    ['orange', '#ffa500', 'rgb(255,165,0)', 'rgb(100%,64.7%,0%)'],
    ['orangered', '#ff4500', 'rgb(255,69,0)', 'rgb(100%,27.1%,0%)'],
    ['orchid', '#da70d6', 'rgb(218,112,214)', 'rgb(85.5%,43.9%,83.9%)'],
    ['palegoldenrod', '#eee8aa', 'rgb(238,232,170)', 'rgb(93.3%,91%,66.7%)'],
    ['palegreen', '#98fb98', 'rgb(152,251,152)', 'rgb(59.6%,98.4%,59.6%)'],
    ['paleturquoise', '#afeeee', 'rgb(175,238,238)', 'rgb(68.6%,93.3%,93.3%)'],
    ['palevioletred', '#db7093', 'rgb(219,112,147)', 'rgb(85.9%,43.9%,57.6%)'],
    ['papayawhip', '#ffefd5', 'rgb(255,239,213)', 'rgb(100%,93.7%,83.5%)'],
    ['peachpuff', '#ffdab9', 'rgb(255,218,185)', 'rgb(100%,85.5%,72.5%)'],
    ['peru', '#cd853f', 'rgb(205,133,63)', 'rgb(80.4%,52.2%,24.7%)'],
    ['pink', '#ffc0cb', 'rgb(255,192,203)', 'rgb(100%,75.3%,79.6%)'],
    ['plum', '#dda0dd', 'rgb(221,160,221)', 'rgb(86.7%,62.7%,86.7%)'],
    ['powderblue', '#b0e0e6', 'rgb(176,224,230)', 'rgb(69%,87.8%,90.2%)'],
    ['purple', '#800080', 'rgb(128,0,128)', 'rgb(50.2%,0%,50.2%)'],
    ['red', '#ff0000', 'rgb(255,0,0)', 'rgb(100%,0%,0%)'],
    ['rosybrown', '#bc8f8f', 'rgb(188,143,143)', 'rgb(73.7%,56.1%,56.1%)'],
    ['royalblue', '#4169e1', 'rgb(65,105,225)', 'rgb(25.5%,41.1%,100%)'],
    ['saddlebrown', '#8b4513', 'rgb(139,69,19)', 'rgb(54.5%,27.1%,7.5%)'],
    ['salmon', '#fa8072', 'rgb(250,128,114)', 'rgb(98%,50.2%,44.7%)'],
    ['sandybrown', '#f4a460', 'rgb(244,164,96)', 'rgb(95.7%,64.3%,37.6%)'],
    ['seagreen', '#2e8b57', 'rgb(46,139,87)', 'rgb(18%,54.5%,34.1%)'],
    ['seashell', '#fff5ee', 'rgb(255,245,238)', 'rgb(100%,96.1%,93.3%)'],
    ['sienna', '#a0522d', 'rgb(160,82,45)', 'rgb(62.7%,32.2%,17.6%)'],
    ['silver', '#c0c0c0', 'rgb(192,192,192)', 'rgb(75.3%,75.3%,75.3%)'],
    ['skyblue', '#87ceeb', 'rgb(135,206,235)', 'rgb(52.9%,80.8%,92.2%)'],
    ['slateblue', '#6a5acd', 'rgb(106,90,205)', 'rgb(41.6%,35.3%,80.4%)'],
    ['slategray', '#708090', 'rgb(112,128,144)', 'rgb(43.9%,50.2%,56.5%)'],
    ['slategrey', '#708090', 'rgb(112,128,144)', 'rgb(43.9%,50.2%,56.5%)'],
    ['snow', '#fffafa', 'rgb(255,250,250)', 'rgb(100%,98%,98%)'],
    ['springgreen', '#00ff7f', 'rgb(0,255,127)', 'rgb(0%,100%,49.8%)'],
    ['steelblue', '#4682b4', 'rgb(70,130,180)', 'rgb(27.5%,51%,70.6%)'],
    ['tan', '#d2b48c', 'rgb(210,180,140)', 'rgb(82.4%,70.6%,54.9%)'],
    ['teal', '#008080', 'rgb(0,128,128)', 'rgb(0%,50.2%,50.2%)'],
    ['thistle', '#d8bfd8', 'rgb(216,191,216)', 'rgb(84.7%,74.9%,84.7%)'],
    ['tomato', '#ff6347', 'rgb(255,99,71)', 'rgb(100%,38.8%%,27.8%)'],
    ['turquoise', '#40e0d0', 'rgb(64,224,208)', 'rgb(25.1%,87.7%,81.6%)'],
    ['violet', '#ee82ee', 'rgb(238,130,238)', 'rgb(93.3%,51%,93.3%)'],
    ['wheat', '#f5deb3', 'rgb(245,222,179)', 'rgb(96.1%,87.1%,70.2%)'],
    ['white', '#ffffff', 'rgb(255,255,255)', 'rgb(100%,100%,100%)'],
    ['whitesmoke', '#f5f5f5', 'rgb(245,245,245)', 'rgb(96.1%,96.1%,96.1%)'],
    ['yellow', '#ffff00', 'rgb(255,255,0)', 'rgb(100%,100%,0%)'],
    ['yellowgreen', '#9acd32', 'rgb(154,205,50)', 'rgb(60.4%,80.4%,19.6%)']
];

function getRBGFromName(colorName) {
    for (let i = 0; i < ColorRefTable.length; i++) {
        if (ColorRefTable[i][0] === colorName) {
            return ColorRefTable[i][2];
        }
    }
    return 'rgb(0,0,0)';
}

function RGBSplit(s) {
    let match = s.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
    return match ? {
        red: match[1],
        green: match[2],
        blue: match[3]
    } : {};
}

function getFontColorFromBackingColor(color) {
	let match = RGBSplit(color);
	// console.log(match);
	console.log(parseInt(match.red) + parseInt(match.green) + parseInt(match.blue));
    if(parseInt(match.red) + parseInt(match.green) + parseInt(match.blue) <= 382){
        return 'rgb(255,255,255)';
    }
    return 'rgb(0,0,0)';
}

// --------------------------------------------------------------------------------
/**
 * 取出小括号内的内容
 * @param text
 * @returns {string}
 */
function isObjEmpty(obj){
	if(obj == undefined || obj == null){
		return true;
	}
	return false;
}

function getParenthesesStr(text) {
    let result = ''
    if (isObjEmpty(text))
        return result
    let regex = /\((.+?)\)/g;
    let options = text.match(regex)
    if (!isObjEmpty(options)) {
        let option = options[0]
        if (!isObjEmpty(option)) {
            result = option.substring(1, option.length - 1)
        }
    }
    return result
}

function getWidth() {
	var wpx = window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;
	return wpx;
}

function getHeight() {
	var hpx = window.innerHeight
		|| document.documentElement.clientHeight
		|| document.body.clientHeight;
	return hpx;
}

function drawNode(cxt, x, y, rpx, txt, tpx) {
	cxt.beginPath();
	cxt.arc(x, y, rpx, 0, Math.PI * 2, true);
	let color = getParenthesesStr(txt);
	txt = txt.replace(/\((.+?)\)/g,'');
	if(color === ''){
		color = 'white';
	}
	cxt.fillStyle=color;
	cxt.fill();
	let colorRBG = getRBGFromName(color);
	let colorBackground = getFontColorFromBackingColor(colorRBG);
	cxt.fillStyle=colorBackground;
	cxt.stroke();
	cxt.font = String(tpx) + "px sans-serif";
	cxt.fillText(txt, x - rpx / 2, y + rpx / 2);
}

function linkNode(cxt, x1, y1, x2, y2, rpx) {
	var dx = Math.abs(x1 - x2);
	var dy = Math.abs(y1 - y2);
	var ang = Math.atan2(dy, dx);
	var xmv = rpx * Math.cos(ang);
	var ymv = rpx * Math.sin(ang);
	function drawLine(cxt, x1, y1, x2, y2) {
		cxt.moveTo(x1, y1);
		cxt.lineTo(x2, y2);
		cxt.stroke();
	}
	if (x1 < x2 && y1 <= y2) {
		drawLine(cxt, x1 + xmv, y1 + ymv, x2 - xmv, y2 - ymv);
	} else if (x1 <= x2 && y1 > y2) {
		drawLine(cxt, x1 + xmv, y1 - ymv, x2 - xmv, y2 + ymv);
	} else if (x1 > x2 && y1 >= y2) {
		drawLine(cxt, x1 - xmv, y1 - ymv, x2 + xmv, y2 + ymv);
	} else {
		drawLine(cxt, x1 - xmv, y1 + ymv, x2 + xmv, y2 - ymv);
	}
}

function isSpecialChar(x) {
	if(x === ' ' || x === '#'){
		return true;
	}
	return false;
}

function build(tree, cxt, rpx, tpx, wpx) {
	var len = tree.length;
	var cur = 0;
	function dfs(layer, pxShift, unitShift) {
		while (cur < len && tree.charAt(cur) === ' ') {
			++cur;
		}
		if (!isSpecialChar(tree.charAt(cur))) {
			var end = cur;
			while (end < len && !isSpecialChar(tree.charAt(end))) {
				++end;
			}
			let value = tree.slice(cur, end);
			cur = end;
			var x = pxShift;
			var y = layer * rpx + (layer - 1) * 2 * rpx;
			drawNode(cxt, x, y, rpx, String(value), tpx);
			var left = dfs(layer + 1, pxShift - unitShift / 2, unitShift / 2);
			if (!(left === 0)) {
				linkNode(cxt, x, y, left[0], left[1], rpx);
			}
			var right = dfs(layer + 1, pxShift + unitShift / 2, unitShift / 2);
			if (!(right === 0)) {
				linkNode(cxt, x, y, right[0], right[1], rpx);
			}
			var ret = new Array(2);
			ret[0] = x;
			ret[1] = y;
			return ret;
		} else {
			++cur;
			return 0;
		}
	}
	dfs(1, wpx / 2, wpx / 2);
}

function main() {
	let maxRowNode = parseInt(prompt("Please enter the maximum number of nodes one row can contain, so the program can adjust the size of nodes.", "64"));
	var wpx = getWidth() - 100;
	var hpx = getHeight() - 100;
	document.getElementById("Cvs").setAttribute("width", String(wpx));
	document.getElementById("Cvs").setAttribute("height", String(hpx));
	var cxt = document.getElementById("Cvs").getContext("2d");
	var tree = prompt("Please enter the pre-order traversal series (including the empty node) of the binary tree, sepreted by spaces.", "1 2 4 # # 5 12 # 13 # 14 15 # # # # 3 6 8 10 # # 11 # # 9 # # 7 # #");
	var r = wpx / (maxRowNode * 2);
	build(tree, cxt, r, r / 3 * 4, wpx);
}

main();
