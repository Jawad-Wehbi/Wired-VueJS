import { projectInfo } from '../../DataTypes';

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
