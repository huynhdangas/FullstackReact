import React, { Component } from "react";

import { connect } from "react-redux";

import { FormattedMessage } from "react-intl";

class About extends Component {
    render() {
        return (
            <div className="section-share section-about">
                <div className="section-container">
                    <div className="section-header">
                        <span>Truyền thông nói về hỏi dân it</span>
                        <button>Xem thêm</button>
                    </div>
                    <div className="section-body">
                        <div className="section-content">
                            <div className="content-left">
                                dsadsadasdsadsa <br /> dsadsadasdsadsa <br />
                                dsadsadasdsadsa dsadsadasdsadsa
                                <br /> dsadsadasdsadsa
                                <br /> dsadsadasdsadsa
                            </div>
                            <div className="content-right">
                                <iframe
                                    width="300px"
                                    height="300px"
                                    src="https://www.youtube.com/embed/aeI77nTNFfs?list=RDaeI77nTNFfs"
                                    title="Yoasobi - Tabun たぶん | Lyrics"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
