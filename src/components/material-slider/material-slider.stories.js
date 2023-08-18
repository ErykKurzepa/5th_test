import { html } from 'lit';
import './material-slider';
export default {
    title: 'Material/Slider',
    component: 'form-plugin-slider',
    actions: {
        handles: ['nintex-value-change'],
    },
};
const Template = ({ title, disabled, min, max, value, }) => html `<form-plugin-slider
  .title=${title}
  ?disabled=${disabled}
  .min=${min}
  .max=${max}
  .value=${value}
>
</form-plugin-slider>`;
export const Base = Template.bind({});
Base.args = {
    title: 'Example',
};
