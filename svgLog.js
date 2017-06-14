	var logTable = document.getElementById('logTable');

	var types = {
		click: {
			y: 10,
			class: 'click'
		},
		start: {
			y: 30,
			class: 'start'
		},
		end: {
			y: 50,
			class: 'end'
		}
	}

	var startTime = null;

	var cursor = document.getElementById('cursor');

	function moveCursor(){
		var x = getCurrentPos();
		cursor.setAttribute('x1', x);
		cursor.setAttribute('x2', x);
		requestAnimationFrame(moveCursor);
	}

	function getCurrentPos(){
		return (Date.now() - startTime) / 30 + 10;
	}

	function log(type, n) {
		if (!startTime) {
			startTime = Date.now();
			moveCursor();
		}
		var type = Object.assign({}, types[type], {
			x: getCurrentPos(),
			r: 5,
			width: 3,
			height: 10
		});
		var point = document.createElementNS("http://www.w3.org/2000/svg","rect");
		for (var key in type) {
			point.setAttribute(key, type[key]);
		}
		logTable.appendChild(point);
	}