import { get } from '@/service';
import { isSameDay, parseISO } from 'date-fns';
import { projectInfo, TaskRecord } from '../../DataTypes';

export function getProjectInfo(
  result: projectInfo[],
  selectedProject: string
): projectInfo[] {
  return result.filter((obj) => {
    return obj.name === selectedProject;
  });
}
export function selectDisplay(selectedProject: boolean): string {
  return selectedProject ? 'block' : 'none';
}
export function todayDataHelper(obj: TaskRecord[]): TaskRecord[] {
  const today = new Date();
  return obj
    .filter((items) => {
      const itemDate = parseISO(items.first_log.start_date);
      return isSameDay(today, itemDate);
    })
    .filter((items) => {
      return items.status !== 'finished';
    });
}

export async function teamprojects() {
  try {
    const response = await get('/team/projects');
    const result = response.data.data;
  } catch (error) {
    console.error(error);
  }
}
