import React, { Component } from "react";

import { connect } from "react-redux";

import { FormattedMessage } from "react-intl";

class HomeFooter extends Component {
    render() {
        return (
            <div className="home-footer">
                <p>
                    &copy; 2023 huynhngyendang.com.
                    <a href="#">
                        More infomation dsa sads a sad sadsad asd sads adsa dsa
                    </a>
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
