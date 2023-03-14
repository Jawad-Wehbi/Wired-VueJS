export interface TaskRecord {
  id: number;
  due_date: string;
  estimated_time_hours: number;
  estimated_time_minutes: number;
  total_spent_time: string;
  notes: string;
  status: string;
  progress: number;
  extra_data: string;
  project: Project;
  task_category: Project;
  first_log: Firstlog;
  last_log: Firstlog;
  user: User;
}

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  team_id: number;
  team_admin: boolean;
  user_status: string;
  full_name: string;
  initials: string;
}

interface Firstlog {
  id: number;
  start_date: string;
  end_date?: string;
  difference?: number;
}

interface Project {
  id: number;
  name: string;
  deletable: boolean;
}
export interface projectInfo {
  id: number;
  name: string;
  deletable: boolean;
  task_categories: Taskcategory[];
}

interface Taskcategory {
  id: number;
  name: string;
  deletable: boolean;
}
interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  team_id: number;
  team_admin: boolean;
  user_status: string;
  full_name: string;
  initials: string;
}

interface Item {
  id: number;
  due_date: string;
  estimated_time_hours: number;
  estimated_time_minutes: number;
  total_spent_time: string;
  notes: string;
  status: string;
  progress: number;
  extra_data: string;
  project: {
    id: number;
    name: string;
    deletable: boolean;
  };
  task_category: {
    id: number;
    name: string;
    deletable: boolean;
  };
  first_log: {
    id: number;
    start_date: string;
    end_date: string;
    difference: string;
  };
  last_log: {
    id: number;
    start_date: string;
    end_date: string | null;
    difference: string | null;
  };
  user: User;
}
export interface filteredTask {
  name: string;
  tasks: TaskRecord[];
}
