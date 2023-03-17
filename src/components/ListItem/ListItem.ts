import { TaskRecord } from 'DataTypes';
import { defineComponent, PropType } from 'vue';
export default defineComponent({
  methods: {
    togglelistItem() {
      this.$emit(
        'togglelistItem',
        this.MembersInfo.user.id,
        this.MembersInfo.user.first_name
      );
    },
  },
  props: {
    MembersInfo: {
      type: Object as PropType<TaskRecord>,
      required: true,
    },
  },
  mounted() {
    console.log(this.MembersInfo);
  },
});
