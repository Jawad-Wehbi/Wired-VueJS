import { defineComponent, PropType } from 'vue';
interface StyleProps {
  color: string;
  backgroundColor: string;
  fontSize: string;
}
export default defineComponent({
  props: {
    styles: {
      type: Object as () => StyleProps,
      default: () => ({}),
    },
    content: {
      type: String,
      required: true,
    },
    icon: {
      type: String as PropType<string>,
      required: true,
    },
    buttonName: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    return {
      icon: props.icon,
      buttonName: props.buttonName,
    };
  },
  computed: {
    computedStyles(): Record<string, string> {
      const styles = {
        color: this.styles.color,
        backgroundColor: this.styles.backgroundColor,
      };
      return styles;
    },
  },
});
