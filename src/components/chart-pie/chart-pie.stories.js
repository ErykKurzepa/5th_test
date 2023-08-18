import { html } from 'lit';
import './chart-pie';
export default {
    title: 'Chart Pie',
    component: 'form-plugin-chart-js',
    parameters: {
        actions: {
            handles: ['click'],
        },
    },
    argTypes: {
        bindings: {
            options: ['chart1', 'chart2', 'chart3'],
            type: { name: 'string', required: false },
            control: {
                type: 'select',
            },
        },
    },
};
const Template = ({ bindings }) => html `<form-plugin-chart-js
  style="max-width: 400px"
  .bindings=${bindings}
>
</form-plugin-chart-js>`;
export const Base = Template.bind({});
Base.args = {};
