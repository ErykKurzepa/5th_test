var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
export let NintexStyledInput = class NintexStyledInput extends LitElement {
    constructor() {
        super(...arguments);
        this.value = 'hello';
        this.readOnly = false; //Add a read-only mode. See https://help.nintex.com/en-US/formplugins/Reference/ReadOnly.htm
    }
    static getMetaConfig() {
        // plugin contract information
        return {
            controlName: 'Styled Input',
            fallbackDisableSubmit: false,
            iconUrl: 'one-line-text',
            version: '1',
            properties: {
                value: {
                    type: 'string',
                    title: 'Value',
                    /* This marks the field as the value field. Should only be defined once in the list of properties.
                       See https://help.nintex.com/en-US/formplugins/Reference/StoreValue.htm */
                    isValueField: true,
                    defaultValue: 'This is a text field default value',
                },
            },
            standardProperties: {
                fieldLabel: true,
                defaultValue: true,
                readOnly: true, //Add a read-only mode. See https://help.nintex.com/en-US/formplugins/Reference/ReadOnly.htm
            },
        };
    }
    // Render the UI as a function of component state
    render() {
        return html `<input
      class="form-control"
      class="form-control"
      ?disabled="${this.readOnly}"
      @change="${(e) => this.onChange(e)}"
      .value="${this.value}"
    />`;
    }
    onChange(e) {
        var _a;
        const value = (_a = e.target) === null || _a === void 0 ? void 0 : _a.value;
        const args = {
            bubbles: true,
            cancelable: false,
            composed: true,
            detail: value,
        };
        const event = new CustomEvent('ntx-value-change', args);
        this.dispatchEvent(event);
    }
};
// Define scoped styles right with your component, in plain CSS.  See https://help.nintex.com/en-US/formplugins/Reference/Style.htm
NintexStyledInput.styles = css ` 
    .form-control {
      color: var(--ntx-form-theme-color-secondary);
      background-color: var(
        --ntx-form-theme-color-input-background,
        transparent
      );
      font-size: var(--ntx-form-theme-text-input-size);
      font-family: var(--ntx-form-theme-font-family);
      border: 1px solid var(--ntx-form-theme-color-border);
      border-radius: var(--ntx-form-theme-border-radius);
    }

    .form-control:focus {
      outline: none;
      border-color: var(--ntx-form-theme-color-primary);
    }
  `;
__decorate([
    property()
], NintexStyledInput.prototype, "value", void 0);
__decorate([
    property({ type: Boolean })
], NintexStyledInput.prototype, "readOnly", void 0);
NintexStyledInput = __decorate([
    customElement('form-plugin-styled-input')
], NintexStyledInput);
