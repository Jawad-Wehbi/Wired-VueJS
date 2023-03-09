import { defineComponent } from 'vue';
import ListItem from '../ListItem/ListItem.vue';
import ListButtons from '../ListButtons/ListButtons.vue';
import ButtonSection from '../ButtonSection/ButtonSection.vue';
export default defineComponent({
  data() {
    return {};
  },
  methods: {
    togglelistItem() {
      this.$emit('showMemberTasks');
    },
  },
  components: { ListItem, ListButtons, ButtonSection },
});
