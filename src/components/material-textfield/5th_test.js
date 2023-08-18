var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/mwc-textfield/mwc-textfield.js';
import { styles } from './material-textfield.styles';
const fire = (element, data) => {
    const args = {
        bubbles: true,
        cancelable: false,
        composed: true,
        ...data,
    };
    // the event name 'ntx-value-change' is required to tell the form engine to update the value
    const event = new CustomEvent('ntx-value-change', args);
    element.dispatchEvent(event);
    return event;
};
export let NintexSampleTextfield = class NintexSampleTextfield extends LitElement {
    constructor() {
        super(...arguments);
        this.outlined = false;
        this.readOnly = false; //Add a read-only mode. See https://help.nintex.com/en-US/formplugins/Reference/ReadOnly.htm
    }
    static getMetaConfig() {
        // plugin contract information
        return {
            controlName: 'Material Text field',
            fallbackDisableSubmit: false,
            iconUrl: 'one-line-text',
            version: '1',
            properties: {
                outlined: {
                    type: 'boolean',
                    title: 'Show Outline',
                },
                value: {
                    type: 'string',
                    title: 'Value',
                    // this is to mark the field as value field. it should only be defined once in the list of properties
                    isValueField: true,
                    defaultValue: 'This is a text field default value',
                },
            },
            standardProperties: {
                fieldLabel: true,
                description: true,
                defaultValue: true,
                readOnly: true, //Add a read-only mode. See https://help.nintex.com/en-US/formplugins/Reference/ReadOnly.htm
            },
        };
    }
    // Render the UI as a function of component state
    render() {
        return html ` <mwc-textfield
      id="textfield"
      .label="${this.label}"
      .helper="${this.description}"
      ?outlined="${this.outlined}"
      ?disabled="${this.readOnly}"
      @change="${() => this.onChange()}"
    ></mwc-textfield>`;
    }
    onChange() {
        var _a;
        const el = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById('textfield');
        if (el) {
            fire(this, { detail: el.value });
        }
    }
};
NintexSampleTextfield.styles = styles; //Add custom CSS. See https://help.nintex.com/en-US/formplugins/Reference/Style.htm
__decorate([
    property()
], NintexSampleTextfield.prototype, "label", void 0);
__decorate([
    property()
], NintexSampleTextfield.prototype, "description", void 0);
__decorate([
    property({ type: Boolean })
], NintexSampleTextfield.prototype, "outlined", void 0);
__decorate([
    property({ type: Boolean })
], NintexSampleTextfield.prototype, "readOnly", void 0);
NintexSampleTextfield = __decorate([
    customElement('form-plugin-textfield')
], NintexSampleTextfield);
