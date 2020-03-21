'use strict';

//  https://github.com/megasaab

class Progressbar{
    constructor(option){
        const {
            // default values here!
            start = 0 ,
            end = 100,
            bg = 'green',
            height = 20,
            textColor = 'white',
            border = '1px solid black',

        } = option

        this.start = start;
        this.end = end;
        this.bg = bg;
        this.height = height;
        this.textColor = textColor;
        this.border = border;
    }

    init(selector) {
       document.querySelector(selector).append(this.createProgressBar());
    }

    createProgressBar() {
        const Progressbar = document.createElement('div');
        const bar = this.createBar()
        Progressbar.append(bar);
        Progressbar.style.width = '100%';
        Progressbar.style.border = this.border;
        this.animateBar(bar);
        return Progressbar;
    }

    createBar() {
        const bar = document.createElement('div');
        bar.style.cssText = `
            text-align: center;
            background-color: ${this.bg};
            height: ${this.height}px;
            line-height:${this.height}px;
            color: ${this.color};
        `;

        this.stateProgress(bar);

        return bar;
    }

    stateProgress(elem){
        elem.style.width = `${this.start}%`;
        elem.textContent = `${this.start}%`
    }

    animateBar(bar) {
        const animate = () => {
            if (this.start < this.end) {
                this.start++;
                this.stateProgress(bar);
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }
}

