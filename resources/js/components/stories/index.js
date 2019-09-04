import { storiesOf } from '@storybook/vue';
import AppButton from '../AppButton';

storiesOf('Button', module)
  .add('Basic', () => ({
    components: { AppButton },
    template: '<app-button>Text</app-button>'
  }));
