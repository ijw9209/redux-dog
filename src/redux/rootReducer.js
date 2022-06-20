const initialState = {
    dogData: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_DOGS":
            return { ...state, dogData: action.payload };
        default:
            return state;
    }
}

export default rootReducer;

//rootReducer에는 state와 action이 들어감, state는 초기값을 지정할 수 있다.
//SET_DOGS는 action을 setState와 같은 기능