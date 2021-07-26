export enum StatusEnum {
  ToDo = "to-do",
  InProgress = "in-progress",
  Done = "done"
}

export interface IProjectItem {
  id?: number,
  title: string,
  tags: string[],
  description: string,
  status: StatusEnum
};