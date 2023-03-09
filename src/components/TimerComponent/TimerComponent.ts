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
    Timer: {
      type: String as PropType<string>,
      required: true,
    },
    icon: {
      type: String as PropType<string>,
      required: true,
    },
    TimerTitle: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    return {
      icon: props.icon,
      TimerTitle: props.TimerTitle,
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
