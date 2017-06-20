const getSvgCode = ({height}) => `
    <svg class='time-line-svg' width="500" height="${height}">
        <defs>
        <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" stroke-width="0.5"/>
        </pattern>
        <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="url(#smallGrid)"/>
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="gray" stroke-width="1"/>
        </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <g class="layer"></g>
        <line class="cursor" x1="10" y1="0" x2="10" y2="${height}" />
    </svg>
`;

const wrapCode = content => `<div class="time-line-wrapper"> ${content} </div>`;

const makeLabels = labels => `<div class="labels">
    ${
        labels.map(label => `<span>${label}:</span>`).join('')
    }
</div>`;

function setAttrs(elm, attrs) {
    for (let name in attrs) {
        elm.setAttribute(name, attrs[name]);
    }
}

class TimeLine {
    constructor (parentElm, types, scale=30) {
        this.scale = scale;
        this.startTime = null;
        this.types = {};
        const labels = [];
        let count = 0;        
        for (let name in types) {
            const type = types[name];
            labels.push(type.caption || name);
            this.types[name] = Object.assign({}, type, {
                y: 10.5 + count * 20,
                class: type.class + ' tick'    
            });
            count++;
        }
        parentElm.innerHTML = wrapCode(makeLabels(labels) + getSvgCode({height: count * 20 + 10}));
        this.layer = parentElm.querySelector('.layer');
        this.svg = parentElm.querySelector('.time-line-svg');
        this.cursor = parentElm.querySelector('.cursor');
    }

    addLayer(){
        var layer = document.createElementNS("http://www.w3.org/2000/svg", "g");
        setAttrs(layer, {class: 'layer'});
        this.svg.appendChild(layer);
        return layer;
    }

    moveCursor(){
        var x = this.getCurrentPos();
        
        setAttrs(this.cursor, {
            x1: x,
            x2: x
        });
        requestAnimationFrame(this.moveCursor.bind(this));
    }

    getCurrentPos(){
        let pos = (Date.now() - this.startTime) / this.scale + 10;
        
        if (pos > 500) {
            this.startTime = Date.now();
            this.layer.remove();
            this.layer = this.addLayer();
            return this.getCurrentPos();
        }

        return pos;
    }

    log(type, n) {
        if (!this.startTime) {
            this.startTime = Date.now();
            this.moveCursor();
        }
        var props = Object.assign({}, this.types[type], {
            x: Math.round(this.getCurrentPos()) + 0.5,
            width: 3,
            height: 10
        });
        var point = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        setAttrs(point, props);
        this.layer.appendChild(point);
    }
}

module.exports = TimeLine;