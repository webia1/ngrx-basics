export interface CounterState {
  count: number;
}

export interface IssueState {}

export interface RootState {
  issue: IssueState;
  // counter?: CounterState;
}
