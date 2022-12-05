import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManager.scss";
import {
    getAllUsers,
    createNewUserService,
    deleteUserService,
    editUserService,
} from "../../services/userService";
import ModalUser from "./ModalUser";
import ModalEditUser from "./ModalEditUser";
import { emitter } from "../../utils/emitter";

class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            userEdit: {},
        };
    }

    async componentDidMount() {
        await this.getAllUsersFromReact();
    }

    getAllUsersFromReact = async () => {
        let response = await getAllUsers("ALL");
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users,
            });
        }
    };

    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true,
        });
    };

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        });
    };

    toggleUserEditModal = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser,
        });
    };

    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data);
            console.log(response);
            if (response && response.message.errCode !== 0) {
                alert(response.message.errMessage);
            } else {
                await this.getAllUsersFromReact();
                this.setState({
                    isOpenModalUser: false,
                });
                emitter.emit("EVENT_CLEAR_MODAL_DATA"); // clear modal data
            }
        } catch (e) {
            console.log(e);
        }
    };
    handleDeleteUser = async (user) => {
        console.log("Delete user", user);
        try {
            let res = await deleteUserService(user.id);

            if (res && res.message.errCode === 0) {
                await this.getAllUsersFromReact();
            } else {
                alert(res.message.errCode);
            }
        } catch (e) {
            console.log(e);
        }
    };

    handleEditUser = (user) => {
        console.log("Edit user", user);
        this.setState({
            isOpenModalEditUser: true,
            userEdit: user,
        });
    };

    doEditUser = async (user) => {
        try {
            let res = await editUserService(user);
            if (res && res.message.errCode === 0) {
                this.setState({ isOpenModalEditUser: false });
                await this.getAllUsersFromReact();
            } else {
                alert(res.message.errCode);
            }
        } catch (e) {
            console.log(e);
        }
    };

    /***
     * life cycle
     * 1 run contructor
     * 2 did mount
     * 3 render
     *
     * dau tien chay vao ham did mount sau do la render, muon ham did mount chay lai thi phai setState
     */

    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    createNewUser={this.createNewUser}
                    toggleFromParent={this.toggleUserModal}
                />
                {this.state.isOpenModalEditUser && (
                    <ModalEditUser
                        isOpen={this.state.isOpenModalEditUser}
                        editUser={this.doEditUser}
                        toggleFromParent={this.toggleUserEditModal}
                        currentUser={this.state.userEdit}
                    />
                )}

                <div className="title text-center">Manager users</div>
                <div className="mx-1">
                    <button
                        className="btn btn-primary px-3"
                        onClick={() => this.handleAddNewUser()}
                    >
                        <i className="fas fa-plus"></i> Add new users
                    </button>
                </div>
                <div className="users-table mt-3 mx-1">
                    <table>
                        <tr>
                            <th>Email</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>

                        {arrUsers &&
                            arrUsers.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    this.handleEditUser(item)
                                                }
                                                className="btn-edit"
                                            >
                                                <i className="fas fa-pencil-alt"></i>
                                            </button>
                                            <button
                                                onClick={() =>
                                                    this.handleDeleteUser(item)
                                                }
                                                className="btn-delete"
                                            >
                                                <i className="fas fa-trash-alt"></i>
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
