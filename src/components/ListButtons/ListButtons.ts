import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    listIcon: {
      type: String as PropType<string>,
      required: true,
    },
    listButtonName: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    return {
      listIcon: props.listIcon,
      listButtonName: props.listButtonName,
    };
  },
});
