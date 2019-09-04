import { configure } from '@storybook/vue';
import '../public/css/app.css';

function loadStories() {
  require('../resources/js/components/stories/index');
  // You can require as many stories as you need.
}

configure(loadStories, module);
