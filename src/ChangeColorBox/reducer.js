import { ChangeColorBoxConst } from "./const";
export const ChangeColorBoxReducer = (state = "red", action) => {
    switch (action.type) {
        case ChangeColorBoxConst.CHANGE_COLOR:
            state = action.payload
            return state;
        default: return state;

    }
};
