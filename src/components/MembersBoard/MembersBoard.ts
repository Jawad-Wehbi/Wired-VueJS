import { defineComponent } from 'vue';
import ListItem from '../ListItem/ListItem.vue';
import ListButtons from '../ListButtons/ListButtons.vue';
import ButtonSection from '../ButtonSection/ButtonSection.vue';
export default defineComponent({
  data() {
    return {
      plansDialog: false,
    };
  },
  methods: {
    togglelistItem() {
      this.$emit('showMemberTasks');
    },
    toggleDetails() {
      this.$emit('showTeamDetails');
    },
  },
  components: { ListItem, ListButtons, ButtonSection },
});
