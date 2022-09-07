export const INITIAL_STATE = { isConnected: false };

export enum ConnectionTypes {
  CONNECT = 'CONNECT',
  DISCONNECT = 'DISCONNECT',
}
export interface ConnectionAction {
  type: ConnectionTypes;
  payload: any;
}

export const connectionReducer = (state = INITIAL_STATE, action: ConnectionAction) => {
  switch (action.type) {
    case ConnectionTypes.CONNECT:
      return { ...state, ...action.payload };
    case 'DISCONNECT':
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
