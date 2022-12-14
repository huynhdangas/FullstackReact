import actionTypes from "./actionTypes";
import {
    getAllCodeService,
    createNewUserService,
} from "../../services/userService";

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START,
// });

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_GENDER_START,
            });
            let res = await getAllCodeService("GENDER");
            if (res && res.errCode === 0) {
                // console.log("check get state:", res.data);
                dispatch(fetchGenderSuccess(res.data));
            } else {
                dispatch(fetchGenderFaided());
            }
        } catch (e) {
            dispatch(fetchGenderFaided());
            console.log("fetstate error: ", e);
        }
    };
};

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData,
});

export const fetchGenderFaided = () => ({
    type: actionTypes.FETCH_GENDER_FAIDED,
});

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_POSITION_START,
            });
            let res = await getAllCodeService("POSITION");
            if (res && res.errCode === 0) {
                // console.log("check get state:", res.data);
                dispatch(fetchPositionSuccess(res.data));
            } else {
                dispatch(fetchPositionFaided());
            }
        } catch (e) {
            dispatch(fetchPositionFaided());
            console.log("fetstate error: ", e);
        }
    };
};

export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData,
});

export const fetchPositionFaided = () => ({
    type: actionTypes.FETCH_POSITION_FAILDED,
});

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_ROLE_START,
            });
            let res = await getAllCodeService("ROLE");
            if (res && res.errCode === 0) {
                // console.log("check get state:", res.data);
                dispatch(fetchRoleSuccess(res.data));
            } else {
                dispatch(fetchRoleFaided());
            }
        } catch (e) {
            dispatch(fetchRoleFaided());
            console.log("fetstate error: ", e);
        }
    };
};

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData,
});

export const fetchRoleFaided = () => ({
    type: actionTypes.FETCH_ROLE_FAILDED,
});

//start doing end

export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            console.log(res);
            if (res && res.message.errCode === 0) {
                dispatch(saveUserSuccess());
            } else {
                dispatch(saveUserFaided());
            }
        } catch (e) {
            dispatch(saveUserFaided());
            console.log("saveUserFaided  error: ", e);
        }
    };
};

export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS,
});

export const saveUserFaided = () => ({
    type: actionTypes.CREATE_USER_FAILDED,
});
