import React, { createContext, Dispatch, useReducer } from 'react';

import { getFromLS, saveToLS } from '../utils/localstorageHandler';

interface ProviderProps {
  children?: React.ReactNode;
}

export enum ActionTypes {
  UpdateToken = 'UpdateToken',
}

interface Action {
  type: ActionTypes;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

interface GlobalStateType {
  accessToken: string;
}

const initialState: GlobalStateType = {
  accessToken: getFromLS('accessToken') || '',
};

export const GlobalState = createContext(initialState);
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const GlobalDispatch = React.createContext<Dispatch<Action>>(() => {});

const reducer = (state: GlobalStateType, action: Action): GlobalStateType => {
  switch (action.type) {
    case ActionTypes.UpdateToken:
      saveToLS('accessToken', action.data);
      return {
        ...state,
        accessToken: action.data,
      };
    default:
      return state;
  }
};

export const GlobalStateProvider = ({ children }: ProviderProps) => {
  const [globalState, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalState.Provider value={globalState}>
      <GlobalDispatch.Provider value={dispatch}>{children}</GlobalDispatch.Provider>
    </GlobalState.Provider>
  );
};
