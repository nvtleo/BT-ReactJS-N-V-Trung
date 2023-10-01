import { combineReducers, createStore } from "redux";
import { ChangeColorBoxReducer } from "../ChangeColorBox/reducer";
import { BookTicketsReducer } from "../BookTickets/reducer";
/**
 * reducer: nỏi quản lý state và logic
 * recuder bắt buộc phải có return
 * khi dispatch thí nó sẽ chạy tất cả các  hàm reducer 
 * chúng ta muốn xử lý sét lại state nào thì vào reducer đó xử lý
 */
const rootReducer = combineReducers({
    ChangeColorBoxReducer,
    BookTicketsReducer

});
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

