import React, { Component } from "react";

import { connect } from "react-redux";
import "./HomeHeader.scss";
import { FormattedMessage } from "react-intl";

class HomeHeader extends Component {
    render() {
        console.log(this.props);
        return (
            <>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            <i className="fas fa-bars"></i>
                            <div className="header-logo"></div>
                        </div>
                        <div className="center-content">
                            <div className="child-content">
                                <div>
                                    <b>
                                        <FormattedMessage id="home-header.speciality" />
                                    </b>
                                </div>
                                <div className="subs-title">
                                    <FormattedMessage id="home-header.searchdoctor" />
                                </div>
                            </div>
                            <div className="child-content">
                                <div>
                                    <b>
                                        <FormattedMessage id="home-header.health-facility" />
                                    </b>
                                </div>
                                <div className="subs-title">
                                    <FormattedMessage id="home-header.select-room" />
                                </div>
                            </div>
                            <div className="child-content">
                                <div>
                                    <b>
                                        <FormattedMessage id="home-header.doctor" />
                                    </b>
                                </div>
                                <div className="subs-title">
                                    <FormattedMessage id="home-header.select-doctor" />
                                </div>
                            </div>
                            <div className="child-content">
                                <div>
                                    <b>
                                        <FormattedMessage id="home-header.fee" />
                                    </b>
                                </div>
                                <div className="subs-title">
                                    <FormattedMessage id="home-header.check-health" />
                                </div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="support">
                                <i className="fas fa-question-circle"></i>
                                <FormattedMessage id="home-header.support" />
                            </div>
                            <div className="language-vi">VN</div>
                            <div className="language-en">EN</div>
                        </div>
                    </div>
                </div>

                <div className="home-header-banner">
                    <div className="content-up">
                        <div className="title1">
                            <FormattedMessage id="banner.title1" />
                        </div>
                        <div className="title2">
                            <FormattedMessage id="banner.title2" />
                        </div>
                        <div className="search">
                            <i className="fas fa-search"></i>
                            <input
                                type="text"
                                placeholder="Tim chuyen khoa kham benh..."
                            />
                        </div>
                    </div>
                    <div className="options">
                        <div className="option-child">
                            <div className="icon-child">
                                <i className="fas fa-hospital"></i>
                            </div>
                            <div className="text-child">
                                <FormattedMessage id="banner.child1" />
                            </div>
                        </div>
                        <div className="option-child">
                            <div className="icon-child">
                                <i className="fas fa-mobile"></i>
                            </div>
                            <div className="text-child">
                                <FormattedMessage id="banner.child2" />
                            </div>
                        </div>
                        <div className="option-child">
                            <div className="icon-child">
                                <i className="fas fa-file"></i>
                            </div>
                            <div className="text-child">
                                <FormattedMessage id="banner.child3" />
                            </div>
                        </div>
                        <div className="option-child">
                            <div className="icon-child">
                                <i className="fas fa-vials"></i>
                            </div>
                            <div className="text-child">
                                <FormattedMessage id="banner.child4" />
                            </div>
                        </div>
                        <div className="option-child">
                            <div className="icon-child">
                                <i className="fas fa-heart"></i>
                            </div>
                            <div className="text-child">
                                <FormattedMessage id="banner.child5" />
                            </div>
                        </div>
                        <div className="option-child">
                            <div className="icon-child">
                                <i className="fas fa-wrench"></i>
                            </div>
                            <div className="text-child">
                                <FormattedMessage id="banner.child6" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);