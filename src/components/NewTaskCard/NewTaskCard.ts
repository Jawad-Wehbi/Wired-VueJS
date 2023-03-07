import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      SelectProject: '',
      SelectCategory: '',
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    };
  },
  computed: {
    selectDisplay(): string {
      return this.SelectProject ? 'block' : 'none';
    },
    isCategorySelected(): boolean {
      return this.SelectCategory !== '';
    },
  },
});
