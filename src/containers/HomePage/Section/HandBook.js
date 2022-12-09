import React, { Component } from "react";

import { connect } from "react-redux";

import { FormattedMessage } from "react-intl";
import Slider from "react-slick";

class HandBook extends Component {
    render() {
        return (
            <div className="section-share handbook">
                <div className="section-container">
                    <div className="section-header">
                        <span>Cẩm nang</span>
                        <button>Xem thêm</button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="section-customize">
                                <div className="bg-image handbook"></div>
                                <h4>Cơ xương khớp 1</h4>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image handbook"></div>
                                <h4>Cơ xương khớp 2</h4>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image handbook"></div>
                                <h4>Cơ xương khớp 3</h4>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image handbook"></div>
                                <h4>Cơ xương khớp 4</h4>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image handbook"></div>
                                <h4>Cơ xương khớp 5</h4>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image handbook"></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
