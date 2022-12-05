import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Label,
    Form,
    FormGroup,
} from "reactstrap";
import { emitter } from "../../utils/emitter";
class ModalUser extends Component {
    constructor(props) {
        //props: thuoc tinh
        super(props);
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            address: "",
        };
        this.listenToEmitter();
    }
    listenToEmitter() {
        emitter.on("EVENT_CLEAR_MODAL_DATA", () => {
            //clear modal
            this.setState({
                email: "",
                password: "",
                firstName: "",
                lastName: "",
                address: "",
            });
        });
    }
    componentDidMount() {}

    toggle = () => {
        this.props.toggleFromParent();
    };

    handleOnChangeInput = (event, id) => {
        // bad code

        // this.state[id] = event.target.value;
        // this.setState(
        //     {
        //         ...this.state,
        //     },
        //     () => {
        //         console.log("bad state:", this.state);
        //     }
        // );

        //good code

        let copyState = { ...this.state };
        copyState[id] = event.target.value;

        this.setState({
            ...copyState,
        });
    };

    checkValideInput = () => {
        let isValid = true;
        let arrInput = [
            "email",
            "password",
            "firstName",
            "lastName",
            "address",
        ];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert("Missing parameter: " + arrInput[i]);
                break;
            }
        }
        return isValid;
    };

    handleAddNewUser = () => {
        let isValid = this.checkValideInput();
        if (isValid === true) {
            this.props.createNewUser(this.state);
        }
    };

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => this.toggle()}
                classNames="abcClassName"
                size="lg"
            >
                <ModalHeader toggle={() => this.toggle()}>
                    Add New User
                </ModalHeader>
                <ModalBody>
                    <div className="container">
                        <div className="row">
                            <div className="col-6 form-group">
                                <lable>Email</lable>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={this.state.email}
                                    onChange={(event) =>
                                        this.handleOnChangeInput(event, "email")
                                    }
                                />
                            </div>
                            <div className="col-6 form-group">
                                <lable>Password</lable>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={this.state.password}
                                    onChange={(event) =>
                                        this.handleOnChangeInput(
                                            event,
                                            "password"
                                        )
                                    }
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 form-group">
                                <lable>FirstName</lable>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange={(event) =>
                                        this.handleOnChangeInput(
                                            event,
                                            "firstName"
                                        )
                                    }
                                />
                            </div>
                            <div className="col-6 form-group">
                                <lable>LastName</lable>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange={(event) =>
                                        this.handleOnChangeInput(
                                            event,
                                            "lastName"
                                        )
                                    }
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 form-group">
                                <label>Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="1234 Main St"
                                    name="address"
                                    value={this.state.address}
                                    onChange={(event) =>
                                        this.handleOnChangeInput(
                                            event,
                                            "address"
                                        )
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        className="px-3"
                        onClick={() => this.handleAddNewUser()}
                    >
                        Add User
                    </Button>
                    <Button
                        color="secondary"
                        className="px-3"
                        onClick={() => this.toggle()}
                    >
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
