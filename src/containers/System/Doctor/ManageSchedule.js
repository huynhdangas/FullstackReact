import React, { Component } from "react";
import { connect } from "react-redux";

class ManageSchedule extends Component {
    render() {
        const { isLoggedIn } = this.props;
        return (
            <>
                <div>Manage schedule</div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);
