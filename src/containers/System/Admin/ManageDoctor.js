import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./ManageDoctor.scss";
import * as actions from "../../../store/actions";

import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
// import style manually
import "react-markdown-editor-lite/lib/index.css";
import Select from "react-select";

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentMarkdown: "",
            contentHTML: "",
            selectedDoctor: "",
            description: "",
        };
    }
    componentDidMount() {}

    componentDidUpdate(prevProps, prevState, snapshot) {}

    handleChange = (selectedDoctor) => {
        this.setState({ selectedDoctor });
    };

    handleEditorChange = (html, text) => {
        this.setState({
            contentMarkdown: text,
            contentHTML: html,
        });
    };
    handleSaveContentMarkdown = () => {
        console.log("check state", this.state);
    };
    handleOnChangeDesc = (event) => {
        this.setState({
            description: event.target.value,
        });
    };

    render() {
        // console.log("all user", this.props.users);
        // console.log("users", this.state.userRedux);
        const options = [
            { value: "chocolate", label: "Chocolate" },
            { value: "strawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" },
        ];
        return (
            <div className="manage-doctor-container">
                <div className="manage-doctor-title">
                    Tao them thong tin doctor
                </div>
                <div className="more-info">
                    <div className="content-left form-group">
                        <label>Chon bac si</label>
                        <Select
                            value={this.state.selectedDoctor}
                            onChange={this.handleChange}
                            options={options}
                        />
                    </div>
                    <div className="content-right form-group">
                        <label>Thong tin gioi thieu</label>
                        <textarea
                            onChange={(event) => this.handleOnChangeDesc(event)}
                            value={this.state.description}
                            className="form-control"
                            rows="4"
                        ></textarea>
                    </div>
                </div>
                <div className="manage-doctor-editor">
                    <MdEditor
                        style={{ height: "500px" }}
                        renderHTML={(text) => mdParser.render(text)}
                        onChange={this.handleEditorChange}
                    />
                    <button
                        className="save-content-doctor"
                        onClick={() => this.handleSaveContentMarkdown()}
                    >
                        Save
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.admin.users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllUsersStart: () => dispatch(actions.fetchAllUsersStart()),
        deleteAUser: (id) => dispatch(actions.deleteAUser(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
