import { html } from 'lit';
import './iframe';
export default {
    title: 'IFrame',
    component: 'form-plugin-iframe',
};
const Template = ({ name, description, src, height }) => {
    return html `<form-plugin-iframe
    .name=${name}
    .description=${description}
    .src=${src}
    .height=${height}
  >
  </form-plugin-iframe>`;
};
export const Base = Template.bind({});
Base.args = {
    src: 'https://www.wikipedia.org/',
    height: 500,
    name: 'Name',
    description: 'description',
};
