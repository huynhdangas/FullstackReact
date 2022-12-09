import React, { Component } from "react";

import { connect } from "react-redux";
import "./MedicalFacility.scss";

import { FormattedMessage } from "react-intl";
import Slider from "react-slick";

class MedicalFacility extends Component {
    render() {
        return (
            <div className="section-share section-medical-facility">
                <div className="section-container">
                    <div className="section-header">
                        <span>Cơ sở y tế nổi bật</span>
                        <button>Xem thêm</button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="section-customize">
                                <div className="bg-image section-medical-facility"></div>
                                <h4>Bệnh viện Việt Đức 1</h4>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-medical-facility"></div>
                                <h4>Bệnh viện Việt Đức 2</h4>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-medical-facility"></div>
                                <h4>Bệnh viện Việt Đức 3</h4>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-medical-facility"></div>
                                <h4>Bệnh viện Việt Đức 4</h4>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-medical-facility"></div>
                                <h4>Bệnh viện Việt Đức 5</h4>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-medical-facility"></div>
                                <h4>Bệnh viện Việt Đức 6</h4>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
