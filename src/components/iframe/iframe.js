var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit-html/directives/style-map.js';
import { styles } from './iframe.styles';
export let NintexSampleIframe = class NintexSampleIframe extends LitElement {
    constructor() {
        super(...arguments);
        this.src = 'https://www.wikipedia.org/';
        this.height = 500;
    }
    static getMetaConfig() {
        // plugin contract information
        return {
            controlName: 'IFrame-new',
            fallbackDisableSubmit: false,
            description: 'IFrame component which can render url view with the frame',
            iconUrl: 'one-line-text',
            groupName: 'Visual',
            version: '1.3',
            properties: {
                src: {
                    type: 'string',
                    title: 'Source URL',
                    description: 'URL of the iframe, please note many sites block been rendered in iframes',
                    defaultValue: 'https://www.wikipedia.org/',
                },
                height: {
                    type: 'string',
                    title: 'Height',
                    description: 'Height of the component',
                    defaultValue: 500,
                },
                frameTitle: {
                    type: 'string',
                    title: 'Frame Title',
                    description: 'IFrame Title',
                },
            },
            standardProperties: {
                readOnly: true,
                required: true,
                description: true,
            },
        };
    }
    // Render the UI as a function of component state
    render() {
        console.log('Props', {
            name: this.name,
            description: this.description,
            src: this.src,
            height: this.height,
        });
        let styles = { height: this.height + 'px' };
        return html ` <iframe
      class="frame"
      style=${styleMap(styles)}
      .name="${this.name}"
      allow="geolocation *; microphone; camera"
      .title="${this.description}"
      src="${this.src}"
    ></iframe>`;
    }
};
// Define scoped styles right with your component, in plain CSS
NintexSampleIframe.styles = styles; //Add custom CSS. See https://help.nintex.com/en-US/formplugins/Reference/Style.htm
__decorate([
    property()
], NintexSampleIframe.prototype, "name", void 0);
__decorate([
    property()
], NintexSampleIframe.prototype, "description", void 0);
__decorate([
    property()
], NintexSampleIframe.prototype, "src", void 0);
__decorate([
    property({ type: Number })
], NintexSampleIframe.prototype, "height", void 0);
NintexSampleIframe = __decorate([
    customElement('form-plugin-iframe')
], NintexSampleIframe);
