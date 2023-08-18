import { html } from 'lit';
import './styled-input';
export default {
    title: 'Styled Input',
    component: 'form-plugin-styled-input',
    parameters: {
        actions: {
            handles: ['ntx-value-change'],
        },
    },
};
const Template = ({ value, readOnly }) => {
    return html ` <form-plugin-styled-input
    .value="${value}"
    .readOnly="${readOnly}"
  ></form-plugin-styled-input>`;
};
export const Base = Template.bind({});
Base.args = {
    value: 'my value',
};
