import React, { Component } from "react";

import { connect } from "react-redux";
import "./MedicalFacility.scss";

import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import * as actions from "../../../store/actions";
import { LANGUAGES } from "../../../utils";

class OutStandingDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrDoctors: [],
        };
    }
    componentDidMount() {
        this.props.loadTopDoctor();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topDoctors !== this.props.topDoctors) {
            this.setState({
                arrDoctors: this.props.topDoctors,
            });
        }
    }

    render() {
        let { arrDoctors } = this.state;
        let { language } = this.props;
        return (
            <div className="section-share out-standing-doctor">
                <div className="section-container">
                    <div className="section-header">
                        <span>
                            <FormattedMessage id="homepage.out-standing-doctor" />
                        </span>
                        <button>
                            <FormattedMessage id="homepage.more-info" />
                        </button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            {arrDoctors &&
                                arrDoctors.length > 0 &&
                                arrDoctors.map((item, index) => {
                                    let imageBase64 = "";
                                    if (item.image) {
                                        imageBase64 = new Buffer(
                                            item.image,
                                            "base64"
                                        ).toString("binary");
                                    }
                                    let nameVi = `${item.positionData.valueVi}, ${item.firstName} ${item.lastName}`;
                                    let nameEn = `${item.positionData.valueEn}, ${item.firstName} ${item.lastName}`;
                                    return (
                                        <div
                                            className="section-customize"
                                            key={index}
                                        >
                                            <div className="customize-border">
                                                <div className="outer-bg">
                                                    <div
                                                        className="bg-image out-standing-doctor"
                                                        style={{
                                                            backgroundImage: `url(${imageBase64})`,
                                                        }}
                                                    ></div>
                                                </div>
                                                <div className="position text-center">
                                                    <h5>
                                                        {language ===
                                                        LANGUAGES.VI
                                                            ? nameVi
                                                            : nameEn}
                                                    </h5>
                                                    <div>{item.positionId}</div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn,
        topDoctors: state.admin.topDoctors,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadTopDoctor: () => dispatch(actions.fetchTopDoctor()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
