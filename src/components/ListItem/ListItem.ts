import { addSecondsToTime } from '@/helpers/timeFormatter';
import { TaskRecord } from 'DataTypes';
import { defineComponent, PropType } from 'vue';
export default defineComponent({
  data() {
    return {
      totalSpentTime: 0,
    };
  },
  methods: {
    togglelistItem() {
      this.$emit(
        'togglelistItem',
        this.MembersInfo.user.id,
        this.MembersInfo.user.first_name
      );
    },
    //

    //
    // Total Work Time functions
    //

    //
    // totalMemberWorkTimeAddition() {
    //   if (this.MembersInfo !== undefined) {
    //     console.log('this.MembersInfo :>> ', this.MembersInfo);
    //     // this.MembersInfo.map((item) => {
    //     //   console.log('item.total_spent_time :>> ', item.total_spent_time);
    //     //   return (this.totalSpentTime += +item.total_spent_time);
    //     // });
    //     console.log('totalSpentTime is:>> ', this.totalSpentTime);
    //   }
    // },
    // MemberWorktimeIncrementter() {
    //   this.totalSpentTime += 0.5;
    //   return addSecondsToTime('00:00:00', Math.round(this.totalSpentTime));
    // },
  },
  props: {
    MembersInfo: {
      type: Object as PropType<TaskRecord>,
      required: true,
    },
    totalSpentTime: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    console.log('MembersInfo form ListItem', this.MembersInfo);
  },
});
