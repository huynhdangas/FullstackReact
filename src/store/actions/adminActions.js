import actionTypes from "./actionTypes";
import {
    getAllCodeService,
    createNewUserService,
    getAllUsers,
    deleteUserService,
    editUserService,
    getTopDoctorHomeService,
} from "../../services/userService";

import { toast, ToastContainer } from "react-toastify";

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
            // console.log(res);
            if (res && res.message.errCode === 0) {
                toast.success("Created new user success");
                dispatch(saveUserSuccess());
                dispatch(fetchAllUsersStart());
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

// all users

export const fetchAllUsersStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers("ALL");

            // console.log(res);
            if (res && res.errCode === 0) {
                dispatch(fetchAllUsersSuccess(res.users.reverse()));
            } else {
                dispatch(fetchAllUsersFailed());
            }
        } catch (e) {
            dispatch(fetchAllUsersFailed());
            console.log("saveUserFaided  error: ", e);
        }
    };
};

export const fetchAllUsersSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USER_SUCCESS,
    users: data,
});

export const fetchAllUsersFailed = () => ({
    type: actionTypes.FETCH_ALL_USER_FAILDED,
});

// delete user

export const deleteAUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);
            // console.log(res);
            if (res && res.message.errCode === 0) {
                toast.success("Delete user success");
                dispatch(deleteUsersSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                toast.success("Delete user error");

                dispatch(deleteUsersFailed());
            }
        } catch (e) {
            toast.success("Delete user error");

            dispatch(deleteUsersFailed());
            console.log("saveUserFaided  error: ", e);
        }
    };
};

export const deleteUsersSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS,
});

export const deleteUsersFailed = () => ({
    type: actionTypes.DELETE_USER_FAILDED,
});

//edit users

export const EditAUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data);
            // console.log(res);
            if (res && res.message.errCode === 0) {
                toast.success("Update user success");
                dispatch(EditUsersSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                toast.success("Edit user error");

                dispatch(EditUsersFailed());
            }
        } catch (e) {
            toast.success("Edit user error");

            dispatch(EditUsersFailed());
            console.log("saveUserFaided  error: ", e);
        }
    };
};

export const EditUsersSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS,
});

export const EditUsersFailed = () => ({
    type: actionTypes.EDIT_USER_FAILDED,
});

export const fetchTopDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopDoctorHomeService(10);
            console.log(res);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTOR_SUCCESS,
                    dataDoctors: res.data,
                });
            } else {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTOR_FAILDED,
                });
            }
        } catch (e) {
            console.log(e);
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTOR_FAILDED,
            });
        }
    };
};

export const fetchTopDoctorSuccess = () => ({
    type: actionTypes.FETCH_TOP_DOCTOR_SUCCESS,
});

export const fetchTopDoctorFailed = () => ({
    type: actionTypes.FETCH_TOP_DOCTOR_FAILDED,
});
