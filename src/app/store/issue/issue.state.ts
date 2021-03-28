import { IssueState, Issues } from 'src/app/static/types';

export const initialState: IssueState = {
  entities: {},
  selected: [],
  filter: { text: '' },
};
