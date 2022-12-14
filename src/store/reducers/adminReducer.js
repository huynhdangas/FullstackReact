import actionTypes from "../actions/actionTypes";

const initialState = {
    genders: [],
    roles: [],
    positions: [],
    isLoadingGender: false,
};

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            state.isLoadingGender = true;

            return {
                ...state,
            };
        case actionTypes.FETCH_GENDER_SUCCESS:
            state.genders = action.data;
            state.isLoadingGender = false;

            return {
                ...state,
            };
        case actionTypes.FETCH_GENDER_FAIDED:
            state.genders = [];

            state.isLoadingGender = false;

            return {
                ...state,
            };
        case actionTypes.FETCH_POSITION_SUCCESS:
            state.positions = action.data;
            return {
                ...state,
            };
        case actionTypes.FETCH_POSITION_FAILDED:
            state.positions = [];

            return {
                ...state,
            };

        case actionTypes.FETCH_ROLE_SUCCESS:
            state.roles = action.data;
            return {
                ...state,
            };
        case actionTypes.FETCH_ROLE_FAILDED:
            state.roles = [];

            return {
                ...state,
            };
        default:
            return state;
    }
};

export default adminReducer;
