import React, { Component } from "react";

import { connect } from "react-redux";
import "./MedicalFacility.scss";

import { FormattedMessage } from "react-intl";
import Slider from "react-slick";

class OutStandingDoctor extends Component {
    render() {
        return (
            <div className="section-share out-standing-doctor">
                <div className="section-container">
                    <div className="section-header">
                        <span>Bác sĩ nổi bật tuần qua</span>
                        <button>Xem thêm</button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-image out-standing-doctor"></div>
                                    </div>
                                    <div className="position text-center">
                                        <h4>Giáo sư tiến sĩ</h4>
                                        <div>Cơ xương khớp 1</div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-image out-standing-doctor"></div>
                                    </div>
                                    <div className="position text-center">
                                        <h4>Giáo sư tiến sĩ</h4>
                                        <div>Cơ xương khớp 2</div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-image out-standing-doctor"></div>
                                    </div>
                                    <div className="position text-center">
                                        <h4>Giáo sư tiến sĩ</h4>
                                        <div>Cơ xương khớp 3</div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-image out-standing-doctor"></div>
                                    </div>
                                    <div className="position text-center">
                                        <h4>Giáo sư tiến sĩ</h4>
                                        <div>Cơ xương khớp 4</div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-image out-standing-doctor"></div>
                                    </div>
                                    <div className="position text-center">
                                        <h4>Giáo sư tiến sĩ</h4>
                                        <div>Cơ xương khớp 5</div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
