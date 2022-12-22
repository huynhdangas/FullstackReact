import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "../../HomePage/HomeHeader";
import "./DetailDoctor.scss";
import { getDetailInforDoctor } from "../../../services/userService";
import { LANGUAGES } from "../../../utils";

class DetailDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detaiDoctor: {},
        };
    }

    async componentDidMount() {
        if (
            this.props.match &&
            this.props.match.params &&
            this.props.match.params.id
        ) {
            let id = this.props.match.params.id;
            let res = await getDetailInforDoctor(id);
            if (res && res.errCode === 0) {
                this.setState({
                    detaiDoctor: res.data,
                });
            }
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {}

    render() {
        console.log(this.state);
        let { detaiDoctor } = this.state;
        let { language } = this.props;
        let nameVi = "",
            nameEn = "";
        if (detaiDoctor && detaiDoctor.positionData) {
            nameVi = `${detaiDoctor.positionData.valueVi}, ${detaiDoctor.firstName} ${detaiDoctor.lastName}`;
            nameEn = `${detaiDoctor.positionData.valueEn}, ${detaiDoctor.firstName} ${detaiDoctor.lastName}`;
        }

        return (
            <>
                <HomeHeader isShowBanner={false} />
                <div className="doctor-detail-container">
                    <div className="intro-doctor">
                        <div
                            class="content-left"
                            style={{
                                backgroundImage: `url(${
                                    detaiDoctor && detaiDoctor.image
                                })`,
                            }}
                        ></div>
                        <div class="content-right">
                            <div className="up">
                                {language === LANGUAGES.VI ? nameVi : nameEn}
                            </div>
                            <div className="down">
                                {detaiDoctor &&
                                    detaiDoctor.Markdown &&
                                    detaiDoctor.Markdown.description && (
                                        <span>
                                            {detaiDoctor.Markdown.description}
                                        </span>
                                    )}
                            </div>
                        </div>
                    </div>
                    <div class="schedule-doctor"></div>
                    <div class="detail-infor-doctor">
                        {detaiDoctor &&
                            detaiDoctor.Markdown &&
                            detaiDoctor.Markdown.contentHTML && (
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: detaiDoctor.Markdown
                                            .contentHTML,
                                    }}
                                ></div>
                            )}
                    </div>
                    <div class="comment-doctor"></div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
