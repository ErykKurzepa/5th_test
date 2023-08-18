var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Grid } from 'gridjs';
import { styles } from './grid-js.styles';
/**
 * A Simple example of using a grid library
 * https://gridjs.io/
 */
export let NintexSampleGirdJs = class NintexSampleGirdJs extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Allow Grid Sorting
         */
        this.sortable = false;
        /**
         * Allow Grid Pagination
         */
        this.pagination = false;
    }
    static getMetaConfig() {
        // plugin contract information
        return import('./grid-js.config').then(({ config }) => {
            return config;
        });
    }
    firstUpdated() {
        var _a;
        this.grid = new Grid({
            columns: ['Name', 'Email', 'Phone Number'],
            data: [
                ['John', 'john@example.com', '(353) 01 222 3333'],
                ['Mark', 'mark@mail.com', '(01) 22 888 4444'],
                ['Eoin', 'eoin@mail.com', '0097 22 654 00033'],
                ['Sarah', 'sarahcdd@mail.com', '+322 876 1233'],
                ['Afshin', 'afshin@home.com', '(353) 22 87 8356'],
                ['Fred', 'fred@home.com', '(353) 44 55 3854'],
            ],
            sort: this.sortable,
            pagination: this.pagination
                ? {
                    limit: 5,
                }
                : undefined,
        });
        this.grid.render((_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById('js-canvas'));
    }
    render() {
        if (this.grid) {
            this.grid.updateConfig({
                sort: this.sortable,
                pagination: this.pagination
                    ? {
                        limit: 5,
                    }
                    : undefined,
            });
            this.grid.forceRender();
        }
        return html ` <div id="js-canvas"></div>`;
    }
};
NintexSampleGirdJs.styles = styles; //Add custom CSS. See https://help.nintex.com/en-US/formplugins/Reference/Style.htm
__decorate([
    property({ type: Boolean })
], NintexSampleGirdJs.prototype, "sortable", void 0);
__decorate([
    property({ type: Boolean })
], NintexSampleGirdJs.prototype, "pagination", void 0);
NintexSampleGirdJs = __decorate([
    customElement('form-plugin-grid-js')
], NintexSampleGirdJs);
