import { ReactFormConst } from "./const";

const stateDefault = {
    listSV: [],
};
export const reactFormReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case ReactFormConst.Submit:
            const newListSV = [...state.listSV];
            newListSV.push(action.payload);
            state.listSV = newListSV;
            return { ...state };
        case ReactFormConst.Delete:
            const newList = state.listSV.filter((sv) => sv.id !== action.payload);
            state.listSV = newList
            return { ...state }
        default:
            return state;
    }
};
