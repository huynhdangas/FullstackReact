import React, { Component } from "react";

import { connect } from "react-redux";

import { FormattedMessage } from "react-intl";
import Slider from "react-slick";

// import "./Specialty.scss";
import specialtyImg from "../../../assets/specialty/co-xuong-khop.jpg";

class Specialty extends Component {
    render() {
        return (
            <div className="section-share section-specialty">
                <div className="section-container">
                    <div className="section-header">
                        <span>Chuyên khoa phổ biến</span>
                        <button>Xem thêm</button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="section-customize">
                                <div className="bg-image section-specialty"></div>
                                <h4>Cơ xương khớp 1</h4>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-specialty"></div>
                                <h4>Cơ xương khớp 2</h4>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-specialty"></div>
                                <h4>Cơ xương khớp 3</h4>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-specialty"></div>
                                <h4>Cơ xương khớp 4</h4>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-specialty"></div>
                                <h4>Cơ xương khớp 5</h4>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-specialty"></div>
                                <h4>Cơ xương khớp 6</h4>
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
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
