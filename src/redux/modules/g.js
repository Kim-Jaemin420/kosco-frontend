import { createAction, handleActions } from 'redux-actions';

// ACTION TYPE
const CHANGE_FIELD = 'g/CHANGE_FIELD';
const CHANGE_TEXT_AREA = 'g/CHANGE_TEXT_AREA';
const ADD_INITIALSTATE = 'g/ADD_INITIALSTATE';
const DELETE_INITIALSTATE = 'g/DELETE_INITIALSTATE';
const STORAGE = 'g/STORAGE';
const GET_G_H = 'g/GET_G_H';
const GET_G_DATA = 'g/GET_G_DATA';
const G_INITIALIZE = 'g/G_INITIALIZE';

// CREATE ACTION
export const changeField = createAction(CHANGE_FIELD);
export const changeTextArea = createAction(CHANGE_TEXT_AREA);
export const addInitialState = createAction(ADD_INITIALSTATE);
export const deleteInitialState = createAction(DELETE_INITIALSTATE);
export const storage = createAction(STORAGE);
export const getGH = createAction(GET_G_H);
export const getGData = createAction(GET_G_DATA);
export const gInitialize = createAction(G_INITIALIZE);

// INITIAL STATE
const initialState = {
  H: {
    RCVNO: '',
    VESSELNM: '',
  },
  D2: {
    0: {
      Qty: '',
      SerialNo: '',
      Manuf: '',
      Type: '',
      Capacity: '',
      TestDt: new Date(),
      Perform: '',
    },
    1: {
      Qty: '',
      SerialNo: '',
      Manuf: '',
      Type: '',
      Capacity: '',
      TestDt: new Date(),
      Perform: '',
    },
    2: {
      Qty: '',
      SerialNo: '',
      Manuf: '',
      Type: '',
      Capacity: '',
      TestDt: new Date(),
      Perform: '',
    },
    3: {
      Qty: '',
      SerialNo: '',
      Manuf: '',
      Type: '',
      Capacity: '',
      TestDt: new Date(),
      Perform: '',
    },
  },
  D3: '',
};

// REDUCER
const gReducer = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { id, name, value } }) => {
      return {
        ...state,
        D2: {
          ...state.D2,
          [id]: {
            ...state.D2[id],
            [name]: value,
          },
        },
      };
    },

    [CHANGE_TEXT_AREA]: (state, { payload: value }) => {
      return {
        ...state,
        D3: value,
      };
    },

    [ADD_INITIALSTATE]: (state, { payload: id }) => {
      console.log(id);
      return {
        ...state,
        D2: {
          ...state.D2,
          [id]: {
            Qty: '',
            SerialNo: '',
            Manuf: '',
            Type: '',
            Capacity: '',
            TestDt: new Date(),
            Perform: '',
          },
        },
      };
    },

    [DELETE_INITIALSTATE]: (state, { payload: id }) => {
      delete state.D2[id];
      return { ...state, D2: state.D2 };
    },
    [STORAGE]: (state, { payload: { RCVNO, VESSELNM } }) => {
      return {
        ...state,
        H: {
          ...state.H,
          RCVNO,
          VESSELNM,
        },
      };
    },
    [GET_G_H]: (state, { payload }) => {
      return {
        ...state,
        H: payload,
      };
    },
    [GET_G_DATA]: (state, { payload: { D2, D3 } }) => {
      return {
        ...state,
        D2,
        D3,
      };
    },
    [G_INITIALIZE]: () => initialState,
  },
  initialState
);

export default gReducer;
