export interface RootState {
  issue: IssueState;
}

export interface IssueState {
  entities: Issues;
  filter: Filter;
}

export interface Issues {
  [id: string]: Issue;
}

export type Issue = {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  resolved: boolean;
};

export type Filter = {
  text: string;
};
