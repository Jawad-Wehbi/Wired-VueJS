import { get, post, put } from '@/service';
import { projectInfo, Shortcuts, TaskRecord } from 'DataTypes';
import { defineComponent } from 'vue';
import MainButton from '../MainButton/MainButton.vue';
import TaskCard from '../TaskCard/TaskCard.vue';
import NewTaskCard from '../NewTaskCard/NewTaskCard.vue';
import { isToday, parseISO } from 'date-fns';
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
      addShortcutDialog: false,
      allTasksDialog: false,
      offset: 0,
      limit: 12,
      allTasks: [] as TaskRecord[],
      items: [] as Shortcuts[],
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
    async endAllTasks() {
      try {
        const getresponse = await get('/tasks');
        const data = getresponse.data.data.items;
        const filteredByToday: TaskRecord[] = data.filter(
          (item: TaskRecord) => {
            return isToday(parseISO(item.first_log.start_date));
          }
        );
        filteredByToday.forEach(async (task: TaskRecord) => {
          try {
            if (task.status !== 'finished') {
              const response = await put(`/tasks/${task.id}/end`);
              this.result = response.data.data;
            }
          } catch (error) {
            console.error(error);
          }
        });
      } catch (error) {
        console.error(error);
      }
    },
    async getCustomShortcuts() {
      try {
        const response = await get('/user_shortcuts');
        this.items = response.data.data.items;
        console.log('items are Hereeeeeeeee :>> ', this.items);
      } catch (error) {
        console.error(error);
      }
    },
    async getAllTasks() {
      try {
        const response = await get('/tasks', {
          offset: this.offset,
          limit: this.limit,
        });
        console.log('========>', response.data);
        const data = response.data.data.items;
        this.offset = this.offset + this.limit;
        this.allTasks.push(...data);
        console.log(this.allTasks);
        return (this.allTasksDialog = true);
      } catch (error) {
        console.error(error);
      }
    },
    async createNewShortcut() {
      try {
        const response = await post('/user_shortcuts', {
          data: {
            project_name: this.selectedProject,
            category_name: this.selectedCategory,
          },
          shortcut_type: 'task_start',
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
  components: { MainButton, TaskCard, NewTaskCard },
});
