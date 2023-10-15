import { ReactFormConst } from "./const";

export const submitCreator = (payload) => ({
    type: ReactFormConst.Submit,
    payload,
});
export const deleteCreator = (payload) => ({
    type: ReactFormConst.Delete,
    payload: payload
});
export const EidtCreator = (payload) => ({
    type: ReactFormConst.Edit,
    payload,
});