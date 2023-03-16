import { get, post } from '@/service';
import { projectInfo } from 'DataTypes';
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      selectedOption1: null,
      projectCategoriesArray: {} as projectInfo,
      result: [] as projectInfo[],
      selectedProject: '',
      selectedCategory: '',
      projects: [] as string[],
      categories: [] as string[],
    };
  },
  computed: {
    selectDisplay(): string {
      return this.selectedProject ? 'block' : 'none';
    },
    isCategorySelected(): boolean {
      return this.selectedCategory === 'false';
    },
  },
  async mounted() {
    try {
      const response = await get('/team/projects');
      this.result = response.data.data;
      this.getNames(this.result);
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async createNewTask() {
      try {
        if (this.runningTaskId != 0) {
          const pauseresponse = await post(`/tasks/${this.runningTaskId}/stop`);
          this.result = pauseresponse.data.data.items;
        }
        const response = await post('/tasks', {
          project: this.selectedProject,
          category: this.selectedCategory,
          due_date: '14/10/2021 07:20',
          estimated_time_hours: 0,
          estimated_time_minutes: 0,
          running: true,
          limit: 0,
          offset: 0,
        });
        this.result = response.data.data;
        console.log('object');
      } catch (error) {
        console.error(error);
      }
    },
    getNames(arr: projectInfo[]) {
      return (this.projects = arr.map((obj) => obj.name));
    },
    getProjectInfo(): void {
      let newArray: projectInfo[] = [];
      newArray = this.result.filter((obj) => {
        return obj.name === this.selectedProject;
      });
      this.projectCategoriesArray = newArray[0];
      console.log('SELECTED PROJECT OBJ', this.projectCategoriesArray);
      this.getProjectCategories(this.projectCategoriesArray);
    },
    getProjectCategories(obj: projectInfo): string[] {
      return (this.categories = obj.task_categories.map((obj) => obj.name));
    },
  },
  watch: {
    selectedProject() {
      this.getProjectInfo();
    },
  },
  props: {
    runningTaskId: {
      type: Number,
      required: true,
    },
  },
});
