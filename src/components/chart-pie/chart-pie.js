var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ArcElement, Chart, Legend, PieController, Title, Tooltip, } from 'chart.js';
import { styleMap } from 'lit/directives/style-map.js';
import { styles } from './chart-pie.styles';
import { fakeData } from './chart-pie.data';
import { updatePluginValue } from '../../utils/events';
/**
 * @tag form-plugin-chart-js
 * @tagname form-plugin-chart-js
 *
 */
export let NintexSampleChartJs = class NintexSampleChartJs extends LitElement {
    constructor() {
        super();
        this.bindings = 'chart1';
        Chart.register(ArcElement, PieController, Legend, Tooltip, Title);
    }
    static get styles() {
        return styles;
    }
    static getMetaConfig() {
        return import('./chart-pie.config').then(x => x.config);
    }
    updated() {
        var _a;
        const el = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.chart-container');
        if (!el) {
            return;
        }
        if (this.chart) {
            this.chart.destroy();
        }
        const colors = ['#9DDA89', '#7558A2', '#FF8B47', '#17CDD6', '#D0D65A'];
        const bindingData = fakeData[this.bindings] || [];
        const data = {
            labels: bindingData.map(x => x.name),
            datasets: [
                {
                    data: bindingData.map(x => x.value),
                    backgroundColor: colors,
                },
            ],
        };
        const config = {
            type: 'pie',
            data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: {
                                size: 14,
                                family: 'Open Sans',
                            },
                        },
                    },
                    title: {
                        display: true,
                        text: this.titleField || 'Pie Chart',
                    },
                },
                onClick: (event, elements, chart) => {
                    var _a;
                    if (chart.data && chart.data.labels) {
                        const label = (_a = chart.data) === null || _a === void 0 ? void 0 : _a.labels[elements[0].index];
                        updatePluginValue(this, { detail: label });
                    }
                },
            },
        };
        this.chart = new Chart(el, config);
    }
    render() {
        const elementStyles = {
            maxHeight: this.maxHeight ? `${this.maxHeight}px` : '400px',
        };
        return html `
      <canvas
        id="myChart"
        class="chart-container"
        aria-label="Chart with Name"
        role="img"
        style=${styleMap(elementStyles)}
      ></canvas>
    `;
    }
};
__decorate([
    property({ reflect: true })
], NintexSampleChartJs.prototype, "bindings", void 0);
__decorate([
    property({ reflect: true })
], NintexSampleChartJs.prototype, "titleField", void 0);
__decorate([
    property({ type: Number })
], NintexSampleChartJs.prototype, "maxHeight", void 0);
NintexSampleChartJs = __decorate([
    customElement('form-plugin-chart-js')
], NintexSampleChartJs);
