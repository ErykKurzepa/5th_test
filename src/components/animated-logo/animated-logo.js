var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { animate, AnimateController, fade, flyBelow } from '@lit-labs/motion';
import { styles } from './styles';
export let NintexSampleAnimatedLogo = class NintexSampleAnimatedLogo extends LitElement {
    constructor() {
        super(...arguments);
        this.defaultLogo = 'Logo';
        this.word = this.defaultLogo;
        this.duration = 1000;
        this.controller = new AnimateController(this, {
            defaultOptions: {
                keyframeOptions: {
                    duration: this.duration,
                    fill: 'backwards',
                },
            },
        });
    }
    static getMetaConfig() {
        return {
            controlName: 'LIT Logo',
            fallbackDisableSubmit: false,
            version: '1',
        };
    }
    render() {
        var _a;
        const delayTime = this.duration / (this.word.length * 2.5);
        return html `
      ${(_a = this.word.split('')) === null || _a === void 0 ? void 0 : _a.map((letter, i) => html `<span
            class="letter"
            ${animate({
            keyframeOptions: {
                delay: i * delayTime,
            },
            in: fade,
            out: flyBelow,
        })}
            >${letter}</span
          >`)}
    `;
    }
};
NintexSampleAnimatedLogo.styles = styles; //Add custom CSS. See https://help.nintex.com/en-US/formplugins/Reference/Style.htm
__decorate([
    property({ type: String })
], NintexSampleAnimatedLogo.prototype, "word", void 0);
NintexSampleAnimatedLogo = __decorate([
    customElement('form-plugin-animated-logo')
], NintexSampleAnimatedLogo);
