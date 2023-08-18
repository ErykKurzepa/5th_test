import { html } from 'lit';
import './animated-logo';
export default {
    title: 'lit-Logo',
    component: 'motion-lit',
};
const Template = ({ word }) => html ` <form-plugin-animated-logo
    .word="${word}"
  ></form-plugin-animated-logo>`;
export const Base = Template.bind({});
Base.args = {
    word: 'Nintex',
};
