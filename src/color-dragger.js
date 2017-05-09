import DOM from './utils/DOMHelper';

export class ColorDragger {

    constructor() {
        this.draggable = DOM.select('.draggable');
        this.background = DOM.select('.container');
        // this.draggable = document.querySelector('.draggable');
        // this.background = document.querySelector('.container');
        this.active = false;

        this.hue = 193;
        this.sat = 67;
        this.lit = 28;

        this.mouseX = 0;
        this.mouseY = 0;

        this.direction = null;

        this.background.style.backgroundColor = `hsl(${this.hue},${this.sat}%,${this.lit}%)`;

        this.events();
    }

    events() {
        DOM.listenEvents(this.draggable, ['mousedown', 'touchstart'], this.onChangeStart.bind(this));
        DOM.listenEvents(this.draggable, ['mousemove', 'touchmove'], this.onChange.bind(this));
        DOM.listenEvents(this.draggable, ['touchend', 'mouseleave', 'mouseup'], this.onChangeEnd.bind(this));
    }

    setHue(option) {
        if (option.hasOwnProperty('increment')) {
            this.hue = (this.hue > 360) ? 0 : ++this.hue;
            console.log(this.hue);
        }
        else if (option.hasOwnProperty('decrement')) {
            this.hue = (this.hue < 0) ? 360 : --this.hue;
            console.log(this.hue);
        }
    }

    setLightness(option) {
        if (option.hasOwnProperty('increment')) {
            this.lit = (this.lit > 100) ? 0 : ++this.lit;
            console.log(this.lit);
        }
        else if (option.hasOwnProperty('decrement')) {
            this.lit = (this.lit < 0) ? 100 : --this.lit;
            console.log(this.lit);
        }
    }

    onChangeStart(event) {
        this.active = true;
        this.mouseX = event.offsetX;
        this.mouseY = event.offsetY;
    }

    onChangeEnd(event) {
        this.active = false;
        this.direction = null;
    }

    onChange(event) {
        // Disable browser refresh default behavior
        event.preventDefault();

        if (this.active) {
            const startY = this.mouseY;
            const startX = this.mouseX;
            const currentY = event.offsetY;
            const currentX = event.offsetX;

            if (this.direction === null) {
                this.direction = (startY !== currentY) ? 'vertical' : 'horizontal';
            }
            else if (this.direction === 'vertical') {
                // Up
                if (startY < currentY) {
                    const decrement = startY - currentY;
                    this.setLightness({decrement});
                }
                // Down
                else {
                    const increment = currentY - startY;
                    this.setLightness({increment});
                }

                this.background.style.backgroundColor = `hsl(${this.hue},${this.sat}%,${this.lit}%)`;
            }
            else if (this.direction === 'horizontal') {
                // Left
                if (startX > currentX) {
                    const decrement = startX - currentX;
                    this.setHue({decrement});
                }
                // Right
                else {
                    const increment = currentX - startX;
                    this.setHue({increment});
                }

                this.background.style.backgroundColor = `hsl(${this.hue},${this.sat}%,${this.lit}%)`;
            }

            this.mouseY = currentY;
            this.mouseX = currentX;

        }
    }

}