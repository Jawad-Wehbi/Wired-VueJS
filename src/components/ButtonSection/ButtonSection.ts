import { get, post, put } from '@/service';
import { projectInfo, Shortcuts, TaskRecord } from 'DataTypes';
import { defineComponent, PropType } from 'vue';
import MainButton from '../MainButton/MainButton.vue';
import TaskCard from '../TaskCard/TaskCard.vue';
import NewTaskCard from '../NewTaskCard/NewTaskCard.vue';
import { isToday, parseISO } from 'date-fns';
import { getProjectInfo } from '@/helpers/utils';
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
  props: {
    runningTaskId: {
      type: Number,
      required: true,
    },
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
    this.getCustomShortcuts();
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
        const customShortcuts = await get('/user_shortcuts');
        this.items = customShortcuts.data.data.items;
      } catch (error) {
        console.error(error);
      }
    },
    async getAllTasks() {
      try {
        const allTasks = await get('/tasks', {
          offset: this.offset,
          limit: this.limit,
        });
        const data = allTasks.data.data.items;
        this.offset = this.offset + this.limit;
        this.allTasks.push(...data);
        return (this.allTasksDialog = true);
      } catch (error) {
        console.error(error);
      }
    },
    async createNewShortcut() {
      try {
        const NewShortcut = await post('/user_shortcuts', {
          data: {
            project_name: this.selectedProject,
            category_name: this.selectedCategory,
          },
          shortcut_type: 'task_start',
        });
        this.result = NewShortcut.data.data;
      } catch (error) {
        console.error(error);
      }
    },
    async createNewTask(project_name: string, category_name: string) {
      if (this.runningTaskId !== 0) {
        const pauseresponse = await post(`/tasks/${this.runningTaskId}/stop`);
        this.result = pauseresponse.data.data.items;
      }
      try {
        const response = await post('/tasks', {
          project: project_name,
          category: category_name,
          due_date: '14/10/2021 07:20',
          estimated_time_hours: 0,
          estimated_time_minutes: 0,
          running: true,
          limit: 0,
          offset: 0,
        });
        this.result = response.data.data;
      } catch (error) {
        console.error(error);
      }
    },
    getNames(arr: projectInfo[]) {
      return (this.projects = arr.map((obj) => obj.name));
    },
    getProjectInfo(): void {
      const newArray = getProjectInfo(this.result, this.selectedProject);
      this.projectCategoriesArray = newArray[0];
      console.log('SELECTED PROJECT OBJ', this.projectCategoriesArray);
      this.getProjectCategories(this.projectCategoriesArray);
    },
    getProjectCategories(projectName: projectInfo): string[] {
      return (this.categories = projectName.task_categories.map(
        (obj) => obj.name
      ));
    },
  },
  watch: {
    selectedProject() {
      this.getProjectInfo();
    },
  },
  components: { MainButton, TaskCard, NewTaskCard },
});
