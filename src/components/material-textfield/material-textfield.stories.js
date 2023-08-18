import { html } from 'lit';
import './material-textfield';
export default {
    title: 'Material/Textfield',
    component: 'form-plugin-textfield',
    parameters: {
        actions: {
            handles: ['nintex-value-change'],
        },
    },
};
const Template = ({ title, description, outlined, readOnly, }) => {
    return html `<form-plugin-textfield
    .title=${title}
    .description=${description}
    ?outlined=${outlined}
    ?readOnly=${readOnly}
  >
  </form-plugin-textfield>`;
};
export const Base = Template.bind({});
Base.args = {
    title: 'Example',
    description: 'Description of field',
};
