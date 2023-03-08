import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      sheetColor: '#86ddb6',
    };
  },
  methods: {
    togglePlay() {
      if (this.sheetColor === '#86ddb6') {
        this.sheetColor = '#e16774cc';
      } else {
        this.sheetColor = '#86ddb6';
      }
    },
  },
});
