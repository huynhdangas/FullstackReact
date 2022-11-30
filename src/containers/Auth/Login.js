import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

// import * as actions from "../store/actions";
import * as actions from "../../store/actions";

import "./Login.scss";
import { FormattedMessage } from "react-intl";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isShowPassword: false,
        };
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value,
        });
    };

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value,
        });
    };

    handleLogin = () => {
        console.log(this.state.username);
        console.log(this.state);
    };

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword,
        });
    };

    render() {
        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="col-12 text-login">Login</div>
                        <div className="col-12 form-group">
                            <label>Username:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                value={this.state.username}
                                onChange={(event) =>
                                    this.handleOnChangeUsername(event)
                                }
                                placeholder="Enter your username"
                            />
                        </div>
                        <div className="col-12 form-group">
                            <label>Password:</label>
                            <div className="custom-input-password">
                                <input
                                    type={
                                        this.state.isShowPassword
                                            ? "text"
                                            : "password"
                                    }
                                    name="password"
                                    value={this.state.password}
                                    onChange={(event) =>
                                        this.handleOnChangePassword(event)
                                    }
                                    className="form-control"
                                    placeholder="Enter your password"
                                />

                                <span
                                    onClick={() =>
                                        this.handleShowHidePassword()
                                    }
                                >
                                    <i
                                        class={
                                            this.state.isShowPassword
                                                ? "fas fa-eye"
                                                : "fas fa-eye-slash"
                                        }
                                    ></i>
                                </span>
                            </div>
                        </div>
                        <div className="col-12 form-group">
                            <button onClick={() => this.handleLogin()}>
                                Login
                            </button>
                        </div>
                        <div className="col-12 form-group">
                            <span>Forgot your password?</span>
                        </div>
                        <div className="col-12 text-center">
                            <span className="text-other-login">
                                Or login with:
                            </span>
                        </div>
                        <div className="col-12 social-login">
                            <i className="fab fa-google google"></i>
                            <i class="fab fa-facebook facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) =>
            dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
