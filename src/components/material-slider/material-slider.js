var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/mwc-slider/slider.js';
import { updatePluginValue } from '../../utils/events';
export let NintexSampleSlider = class NintexSampleSlider extends LitElement {
    constructor() {
        super(...arguments);
        this.disabled = false; //Add a read-only mode. See https://help.nintex.com/en-US/formplugins/Reference/ReadOnly.htm
        this.min = 0;
        this.max = 100;
        this.value = 0; //A field to pass a value to the workflow as a variable. See https://help.nintex.com/en-US/formplugins/Reference/StoreValue.htm
    }
    static getMetaConfig() {
        return import('./material-slider.config').then(x => x.config);
    }
    render() {
        const min = this.min || 0;
        const max = this.max || 100;
        let value = this.value || this.min || 0;
        if (value < min) {
            value = min;
        }
        else if (value > max) {
            value = max;
        }
        return html `<label for="slider1">${this.titleField}</label>
      <mwc-slider
        id="slider1"
        .min=${min}
        .max=${max}
        .value=${value}
        ?disabled=${this.disabled}
        discrete
        @change=${(e) => {
            this.value = e.detail.value;
            updatePluginValue(this, { detail: e.detail.value });
        }}
      ></mwc-slider> `;
    }
};
NintexSampleSlider.styles = css ` //Add custom CSS. See https://help.nintex.com/en-US/formplugins/Reference/Style.htm
    :host {
      /* height: 100%; */
      width: 100%;
      display: block;

      --mdc-theme-primary: var(--ntx-form-theme-color-highlight, #f56900);
    }
  `;
__decorate([
    property()
], NintexSampleSlider.prototype, "titleField", void 0);
__decorate([
    property({ type: Boolean })
], NintexSampleSlider.prototype, "disabled", void 0);
__decorate([
    property({ type: Number })
], NintexSampleSlider.prototype, "min", void 0);
__decorate([
    property({ type: Number })
], NintexSampleSlider.prototype, "max", void 0);
__decorate([
    property({ type: Number, reflect: true })
], NintexSampleSlider.prototype, "value", void 0);
NintexSampleSlider = __decorate([
    customElement('form-plugin-slider')
], NintexSampleSlider);
