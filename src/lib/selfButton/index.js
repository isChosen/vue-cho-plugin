import ChoButton from './Button.vue';

ChoButton.install = Vue => {
  Vue.component(ChoButton.name, ChoButton);
  /* if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(ChoButton);
  } */
};

export default ChoButton;
