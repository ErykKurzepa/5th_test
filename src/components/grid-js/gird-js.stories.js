import { html } from 'lit';
import './grid-js';
export default {
    title: 'Grid JS',
    component: 'form-plugin-grid-js',
};
const Template = ({ sortable, pagination }) => {
    return html `<form-plugin-grid-js
    ?sortable=${sortable}
    ?pagination=${pagination}
  >
  </form-plugin-grid-js>`;
};
export const Base = Template.bind({});
Base.args = {};
