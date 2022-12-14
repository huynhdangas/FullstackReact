import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserRedux.scss";
// import { getAllCodeService } from "../../../services/userService";
import { LANGUAGES } from "../../../utils";
import * as actions from "../../../store/actions";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImg: "",
            isOpen: false,

            email: "",
            password: "",
            firstName: "",
            lastName: "",
            phonenumber: "",
            address: "",
            gender: "",
            position: "",
            role: "",
            avatar: "",
        };
    }
    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();
        // try {
        //     let res = await getAllCodeService("gender");
        //     if (res && res.errCode === 0) {
        //         this.setState({
        //             genderArr: res.data,
        //         });
        //     }
        //     console.log("check res:", res);
        // } catch (e) {}
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            let arrGenders = this.props.genderRedux;
            this.setState({
                genderArr: arrGenders,
                gender:
                    arrGenders && arrGenders.length > 0
                        ? arrGenders[0].key
                        : "",
            });
        }
        if (prevProps.positionRedux !== this.props.positionRedux) {
            let arrPositions = this.props.positionRedux;
            this.setState({
                positionArr: arrPositions,
                position:
                    arrPositions && arrPositions.length > 0
                        ? arrPositions[0].key
                        : "",
            });
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            let arrRoles = this.props.roleRedux;
            this.setState({
                roleArr: arrRoles,
                role: arrRoles && arrRoles.length > 0 ? arrRoles[0].key : "",
            });
        }
    }

    handleOnChangeImage = (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let objectUrl = URL.createObjectURL(file);

            this.setState({
                previewImg: objectUrl,
                avatar: file,
            });
        }
    };
    openPreviewImage = () => {
        if (!this.state.previewImg) {
            return;
        }
        this.setState({
            isOpen: true,
        });
    };
    handleSaveUser = () => {
        let isValid = this.checkValideInput();
        if (isValid === false) return;
        //fire redux action
        this.props.createNewUser({
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            phonenumber: this.state.phonenumber,
            gender: this.state.gender,
            role: this.state.role,
            position: this.state.position,
        });
    };

    onChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({ ...copyState });
    };

    checkValideInput = () => {
        let isValid = true;
        let arrCheck = [
            "email",
            "password",
            "firstName",
            "lastName",
            "phonenumber",
            "address",
        ];
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false;
                alert("This input is required " + arrCheck[i]);
                break;
            }
        }

        return isValid;
    };

    render() {
        let genders = this.state.genderArr;
        let positions = this.state.positionArr;
        let roles = this.state.roleArr;
        let language = this.props.language;
        let isLoadingGender = this.props.isLoadingGender;

        let {
            email,
            password,
            firstName,
            lastName,
            phonenumber,
            address,
            role,
            gender,
            position,
            avatar,
        } = this.state;

        return (
            <div className="users-container">
                <div className="title text-center">
                    <FormattedMessage id="manage-user.add" />
                </div>
                <div className="users-table mt-3 mx-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {isLoadingGender === true
                                    ? "Loading gender"
                                    : ""}
                            </div>

                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.email" />
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(event) =>
                                        this.onChangeInput(event, "email")
                                    }
                                />
                            </div>
                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.password" />
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(event) =>
                                        this.onChangeInput(event, "password")
                                    }
                                />
                            </div>
                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.first-name" />
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={firstName}
                                    onChange={(event) =>
                                        this.onChangeInput(event, "firstName")
                                    }
                                />
                            </div>
                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.last-name" />
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={lastName}
                                    onChange={(event) =>
                                        this.onChangeInput(event, "lastName")
                                    }
                                />
                            </div>
                            <div className="col-9">
                                <label>
                                    <FormattedMessage id="manage-user.phonenumber" />
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={phonenumber}
                                    onChange={(event) =>
                                        this.onChangeInput(event, "phonenumber")
                                    }
                                />
                            </div>
                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.address" />
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={address}
                                    onChange={(event) =>
                                        this.onChangeInput(event, "address")
                                    }
                                />
                            </div>
                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.gender" />
                                </label>
                                <select
                                    class="form-control"
                                    onChange={(event) =>
                                        this.onChangeInput(event, "gender")
                                    }
                                >
                                    {genders &&
                                        genders.length > 0 &&
                                        genders.map((item, index) => {
                                            return (
                                                <option
                                                    key={index}
                                                    value={item.key}
                                                >
                                                    {language === LANGUAGES.VI
                                                        ? item.valueVi
                                                        : item.valueEn}
                                                </option>
                                            );
                                        })}
                                </select>
                            </div>
                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.position" />
                                </label>
                                <select
                                    class="form-control"
                                    onChange={(event) =>
                                        this.onChangeInput(event, "position")
                                    }
                                >
                                    {positions &&
                                        positions.length > 0 &&
                                        positions.map((item, index) => {
                                            return (
                                                <option
                                                    key={index}
                                                    value={item.key}
                                                >
                                                    {language === LANGUAGES.VI
                                                        ? item.valueVi
                                                        : item.valueEn}
                                                </option>
                                            );
                                        })}
                                </select>
                            </div>
                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.role" />
                                </label>
                                <select
                                    class="form-control"
                                    onChange={(event) =>
                                        this.onChangeInput(event, "role")
                                    }
                                >
                                    {roles &&
                                        roles.length > 0 &&
                                        roles.map((item, index) => {
                                            return (
                                                <option
                                                    key={index}
                                                    value={item.key}
                                                >
                                                    {language === LANGUAGES.VI
                                                        ? item.valueVi
                                                        : item.valueEn}
                                                </option>
                                            );
                                        })}
                                </select>
                            </div>
                            <div className="col-3">
                                <label>
                                    <FormattedMessage id="manage-user.image" />
                                </label>
                                <div className="preview-img-container">
                                    <input
                                        id="previewImg"
                                        type="file"
                                        onChange={(event) =>
                                            this.handleOnChangeImage(event)
                                        }
                                        hidden
                                    />
                                    <label
                                        className="label-upload"
                                        htmlFor="previewImg"
                                    >
                                        Tai anh{" "}
                                        <i className="fas fa-upload"></i>
                                    </label>
                                    <div
                                        className="preview-image"
                                        onClick={() => this.openPreviewImage()}
                                        style={{
                                            backgroundImage: `url(${this.state.previewImg})`,
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <button
                                    className="btn btn-primary"
                                    onClick={() => this.handleSaveUser()}
                                >
                                    <FormattedMessage id="manage-user.save" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.isOpen === true && (
                    <Lightbox
                        mainSrc={this.state.previewImg}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        roleRedux: state.admin.roles,
        positionRedux: state.admin.positions,
        isLoadingGender: state.admin.isLoadingGender,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        createNewUser: (data) => dispatch(actions.createNewUser(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
