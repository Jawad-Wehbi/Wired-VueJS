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
  props: {
    showButton: {
      type: Boolean,
      default: false,
    },
    showName: {
      type: Boolean,
      default: false,
    },
    TaskDetails: {
      type: Object,
      default: false,
    },
  },
});
