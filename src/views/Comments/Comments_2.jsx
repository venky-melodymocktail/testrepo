import React, { useEffect, useState } from 'react'
import dl from '../../datalayer/state'
import { observer } from 'mobx-react'
import Lottie from 'react-lottie'

import MaterialSwitch from '../../components/main/MaterialSwitch.jsx'
import MaterialSelect from '../../components/main/MaterialSelect.jsx'
import ReactDraft from '../../components/main/ReactDraft.jsx'
import MaterialMenu from '../../components/main/MaterialMenu.jsx'
import MMPagination from '../../components/main/MMPagination.jsx'
import MMFilter from '../../components/main/MMFilter.jsx'
import MaterialDate from '../../components/main/MaterialDate.jsx'
import MaterialAutoComplete from '../../components/main/MaterialAutoComplete.jsx'
import MaterialRating from '../../components/main/MaterialRating.jsx'

import MmHeader from '../../components/MmHeader.jsx'
import MmQuestion from '../../components/MmQuestion.jsx'
import MmComment from '../../components/MmComment.jsx'
import MmBlogCard from '../../components/MmBlogCard.jsx'
import MmFooter from '../../components/MmFooter.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmBlogCardMd from '../../components/MmBlogCardMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmQuestionS from '../../components/MmQuestionS.jsx'
import MmCommentS from '../../components/MmCommentS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmQuestionXs from '../../components/MmQuestionXs.jsx'
import MmCommentXs from '../../components/MmCommentXs.jsx'
import MmBlogCardXs from '../../components/MmBlogCardXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'

const Comments_2 = observer(() => {
    const [Aicomment, setAiComment] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 900
            const element = document.getElementById('t18_807_4953')
            if (element) {
                element.style.transform = 'scale(' + scale + ')'
                element.style.transformOrigin = 'center top'
            }
            if (scale < 1) {
                element.style.marginBottom =
                    -(1 - scale) * element.offsetHeight + 'px'
            }
        }

        window.addEventListener('resize', handleResize)
        handleResize() // Initial scale calculation

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <div
            style={{
                justifyContent: 'center',
                display: 'flex',
                width: '100%',
                backgroundColor: '#fff',
            }}
        >
            <div
                id="t18_807_4953"
                style={{
                    width: 900,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    paddingBottom: 10,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <div
                    id="t18_486_70"
                    style={{
                        width: 900,
                        backgroundColor: 'rgba(255,255,255,1.00)',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <MmHeaderMd
                        {...dl.changes.userDetail}
                        onChangeAddress={(val) => {
                            dl.functions.modalsPlugin.openModal(
                                'AddressPopupLg'
                            )
                        }}
                        onClickMenu={(val) => {
                            dl.functions.modalsPlugin.openModal('navigationMd')
                        }}
                        onLogIn={(val) => {
                            dl.functions.viewsPlugin.showView('login')
                        }}
                        onClickProfile={(val) => {
                            dl.functions.viewsPlugin.showView('profile')
                            var currentPath = dl.functions.common.getLastPath()
                            dl.functions.onLoadFunctions[currentPath]()
                        }}
                    />

                    <div
                        id="t18_486_68"
                        style={{
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 20,
                            marginBottom: 20,
                        }}
                    >
                        <MmQuestion
                            {...dl.changes.visaQuestionCommentDetail}
                            onSave={(val) => {
                                let run = async () => {
                                    var userToken =
                                        dl.functions.common.getCookie(
                                            'userToken'
                                        )
                                    if (userToken) {
                                        var visaQuestionId =
                                            dl.changes.visaDetailQuestionId
                                        var body = {
                                            serviceType: 'visaqandas',
                                            bookmarkedObjectId: visaQuestionId,
                                        }
                                        await dl.functions.createBookmark(body)
                                        dl.changes.visaQuestionCommentDetail.bookmarkactiveVisible =
                                            dl.changes.visaQuestionCommentDetail
                                                .bookmarkactiveVisible == 'none'
                                                ? 'flex'
                                                : 'none'
                                        dl.changes.visaQuestionCommentDetail.bookmarkInactiveVisible =
                                            dl.changes.visaQuestionCommentDetail
                                                .bookmarkInactiveVisible ==
                                            'none'
                                                ? 'flex'
                                                : 'none'
                                    } else {
                                        dl.functions.modalsPlugin.openModal(
                                            'loginLg'
                                        )
                                    }
                                }
                                run()
                            }}
                            onUnsave={(val) => {
                                let run = async () => {
                                    var userToken =
                                        dl.functions.common.getCookie(
                                            'userToken'
                                        )
                                    if (userToken) {
                                        var visaQuestionId =
                                            dl.changes.visaDetailQuestionId
                                        var body = {
                                            serviceType: 'visaqandas',
                                            bookmarkedObjectId: visaQuestionId,
                                        }
                                        await dl.functions.createBookmark(body)
                                        dl.changes.visaQuestionCommentDetail.bookmarkactiveVisible =
                                            dl.changes.visaQuestionCommentDetail
                                                .bookmarkactiveVisible == 'none'
                                                ? 'flex'
                                                : 'none'
                                        dl.changes.visaQuestionCommentDetail.bookmarkInactiveVisible =
                                            dl.changes.visaQuestionCommentDetail
                                                .bookmarkInactiveVisible ==
                                            'none'
                                                ? 'flex'
                                                : 'none'
                                    } else {
                                        dl.functions.modalsPlugin.openModal(
                                            'loginLg'
                                        )
                                    }
                                }
                                run()
                            }}
                            onClickComments={(val) => {}}
                            onClickLink={(val) => {
                                var visaQuestionId =
                                    dl.changes.visaDetailQuestionId
                                var link = `https://melodymocktail.com/comments?visaQuestionId=${visaQuestionId}`
                                dl.functions.common.copyToClipboard(link)
                                window.toast('Link Copied!')
                            }}
                            onClickReport={(val) => {
                                // var userToken = dl.functions.common.getCookie("userToken")
                                // if(userToken){
                                //     var visaQuestionId = dl.changes.visaDetailQuestionId
                                //     dl.changes.reportForm.reportType= "visaquestions"
                                //     dl.changes.reportForm.reportedId= visaQuestionId
                                //     dl.functions.modalsPlugin.openModal('reportacommentLg')

                                // }
                                // else{

                                //     dl.functions.modalsPlugin.openModal('loginLg')
                                // }
                                dl.functions.onReport(
                                    dl.changes.visaDetailQuestionId,
                                    'visaquestions',
                                    'large'
                                )
                            }}
                            onClick={(val) => {}}
                        />

                        <div
                            id="t18_443_1816"
                            style={{
                                width: 831,
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'space-between',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 15,
                                marginBottom: 0,
                            }}
                        >
                            <textarea
                                id="t18_443_1814"
                                placeholder="Enter your Comment"
                                value={dl.changes.createVisaQuestionComment}
                                style={{
                                    height: 60,
                                    width: 650,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingLeft: 20,
                                    paddingRight: 10,
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 1,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderStyle: 'solid',
                                    // marginTop: 15,
                                    // marginBottom: 15,
                                    cursor: 'pointer',
                                    fontFamily: 'Inter',
                                    fontSize: 14,
                                    color: 'grey',
                                    fontWeight: 400,
                                    textAlign: 'left',
                                }}
                                onChange={(val) => {
                                    val = val.target.value
                                    console.log(val)
                                    var userToken =
                                        dl.functions.common.getCookie(
                                            'userToken'
                                        )

                                    console.log(userToken)
                                    if (userToken) {
                                        dl.changes.createVisaQuestionComment =
                                            val
                                    } else {
                                        dl.functions.modalsPlugin.openModal(
                                            'loginLg'
                                        )
                                    }
                                }}
                                type="text"
                            ></textarea>
                            <div
                                id="t18_443_1818"
                                style={{
                                    height: 14,
                                    width: 93,
                                    borderRadius: 5,
                                    backgroundColor: 'rgba(244,186,84,1.00)',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    var userToken =
                                        dl.functions.common.getCookie(
                                            'userToken'
                                        )
                                    if (userToken) {
                                        const run = async () => {
                                            var body = {
                                                visaQuestionID:
                                                    dl.changes
                                                        .visaQuestionCommentDetail
                                                        ._id,
                                                comment:
                                                    dl.changes
                                                        .createVisaQuestionComment,
                                            }
                                            if (body.comment == '') {
                                                dl.functions.modalsPlugin.openModal(
                                                    'errorGeneric'
                                                )
                                                dl.changes.errorGenericMessages =
                                                    'Plese Enter your comment'
                                            } else {
                                                var res =
                                                    await dl.functions.createVisaQuestionComment(
                                                        body
                                                    )
                                                if (res == 200) {
                                                    dl.functions.getVisaQuestionComments(
                                                        dl.changes
                                                            .visaQuestionCommentDetail
                                                            ._id
                                                    )
                                                }
                                            }
                                        }
                                        run()
                                    } else {
                                        dl.functions.modalsPlugin.openModal(
                                            'loginLg'
                                        )
                                    }
                                }}
                            >
                                <span
                                    id="t18_443_1819"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 16,
                                        fontWeight: 600,
                                        color: 'rgba(38,50,56,1)',
                                        letterSpacing: 0,
                                        lineHeight: '19.363636016845703px',
                                        textAlign: 'left',
                                    }}
                                >
                                    Publish
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* <div
                        id="t18_486_27"
                        style={{
                            width: 900,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingTop: 10,
                            paddingBottom: 10,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 20,
                            marginBottom: 20,
                        }}
                    >
                        {dl.changes.addSpaces.VisaCommentsAd.md
                            ?.slice(4, -1)
                            .trim() != '' ? (
                            <img
                                id="t18_486_29"
                                style={{
                                    height: 348,
                                    width: 831,
                                    display: 'flex',
                                    borderWidth: 0,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    if (
                                        dl.changes.addSpaces['VisaCommentsAd']
                                            .redirectURL
                                    ) {
                                        window.open(
                                            dl.changes.addSpaces[
                                                'VisaCommentsAd'
                                            ].redirectURL,
                                            '_blank'
                                        )
                                    }
                                }}
                                src={dl.changes.addSpaces.VisaCommentsAd.md
                                    ?.slice(4, -1)
                                    .trim()}
                            ></img>
                        ) : (
                            <></>
                        )}
                    </div> */}

                    <div
                        id="t18_486_71"
                        style={{
                            width: 900,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 20,
                            marginBottom: 20,
                        }}
                    >
                        <div
                            id="t18_486_69"
                            style={{
                                width: 831,
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_486_47"
                                style={{
                                    width: 831,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {/* mm Ai comment start */}
                                    {dl.changes.visaQuestionCommentDetail
                                        .answered ? (
                                        <div
                                            style={{
                                                justifyContent: 'center',
                                                display: 'flex',
                                                // backgroundColor: '#BA0F1708',
                                                // paddingLeft: 20,
                                                borderWidth: 1,
                                                // borderBottomWidth: 2,
                                                // borderColor: '#3C060845',
                                                // borderStyle: 'solid',
                                                // borderRadius: 5,
                                                // marginBottom: 15,
                                            }}
                                        >
                                            <div
                                                id="t18_773_255"
                                                style={{
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    itemSpacing: 10,
                                                    // paddingLeft: 15,
                                                    // paddingRight: 15,
                                                    paddingTop: 10,
                                                    paddingBottom: 10,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 5,
                                                    marginBottom: 5,
                                                }}
                                            >
                                                <div
                                                    id="t18_756_164"
                                                    style={{
                                                        width: 831,
                                                        flexDirection: 'row',
                                                        alignItems:
                                                            'flex-start',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        itemSpacing: 20,
                                                        paddingLeft: 0,
                                                        paddingRight: 0,
                                                        paddingTop: 0,
                                                        paddingBottom: 0,
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            width: 40,
                                                            height: 40,
                                                            borderRadius: 20,
                                                            borderWidth: 1,
                                                            // borderBottomWidth: 2,
                                                            borderColor:
                                                                '#3C060845',
                                                            borderStyle:
                                                                'solid',
                                                            // borderRadius: 5,
                                                            // marginBottom: 15,
                                                            display: 'flex',
                                                            alignItems:
                                                                'center',
                                                            justifyContent:
                                                                'center',
                                                        }}
                                                    >
                                                        <img
                                                            style={{
                                                                width: '25px',
                                                                height: '25px',
                                                                objectFit:
                                                                    'contain',
                                                                marginLeft: 0,
                                                            }}
                                                            src="https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/659b1bef-e439-487d-b8bd-4b9b549d7314.png"
                                                        />
                                                    </div>

                                                    <div
                                                        id="t18_756_166"
                                                        style={{
                                                            flexDirection:
                                                                'column',
                                                            alignItems:
                                                                'flex-start',
                                                            justifyContent:
                                                                'flex-start',
                                                            display: 'flex',
                                                            itemSpacing: 7,
                                                            paddingLeft: 0,
                                                            paddingRight: 0,
                                                            paddingTop: 0,
                                                            paddingBottom: 0,
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginLeft: 10,
                                                            marginRight: 0,
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                color: '#7F1D1D',
                                                                fontSize: 16,
                                                                fontWeight: 500,
                                                                marginLeft: 5,
                                                                marginBottom: 5,
                                                            }}
                                                        >
                                                            Melody Mocktail{' '}
                                                            <a
                                                                style={{
                                                                    fontWeight: 700,
                                                                    marginInline: 1.5,
                                                                    fontSize: 20,
                                                                }}
                                                            >
                                                                AI
                                                            </a>
                                                        </div>
                                                        <div
                                                            id="t18_756_168"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 14,
                                                                fontWeight: 400,
                                                                color: 'rgba(184,178,178,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '16.94318199157715px',
                                                                textAlign:
                                                                    'left',
                                                                // marginTop: 2.5,
                                                                marginBottom: 3.5,
                                                                marginLeft: 5,
                                                            }}
                                                        >
                                                            {
                                                                dl.changes
                                                                    .visaQuestionCommentDetail
                                                                    .answeredOn
                                                            }
                                                        </div>

                                                        <div
                                                            className={
                                                                Aicomment
                                                                    ? 'expanded'
                                                                    : 'not_Expanded'
                                                            }
                                                            style={{
                                                                width: 720,
                                                                alignItems:
                                                                    'flex-start',
                                                                color: '#3C0608',
                                                                fontWeight: 500,
                                                                fontSize: 14,
                                                                marginLeft: 5,
                                                                // marginBottom: 10,
                                                            }}
                                                        >
                                                            <span>
                                                                {
                                                                    dl.changes
                                                                        .visaQuestionCommentDetail
                                                                        .answers
                                                                }
                                                            </span>
                                                        </div>
                                                        {Aicomment ? (
                                                            <div
                                                                onClick={() => {
                                                                    setAiComment(
                                                                        false
                                                                    )
                                                                }}
                                                                style={{
                                                                    // width: 760,
                                                                    alignItems:
                                                                        'flex-start',
                                                                    color: 'black',
                                                                    fontWeight: 700,
                                                                    fontSize: 14,
                                                                    cursor: 'pointer',
                                                                    marginTop: 5,
                                                                    marginLeft: 5,
                                                                }}
                                                            >
                                                                Show Less
                                                            </div>
                                                        ) : (
                                                            <div
                                                                onClick={() => {
                                                                    setAiComment(
                                                                        true
                                                                    )
                                                                }}
                                                                style={{
                                                                    // width: 760,
                                                                    alignItems:
                                                                        'flex-start',
                                                                    color: 'black',
                                                                    fontWeight: 700,
                                                                    fontSize: 14,
                                                                    cursor: 'pointer',
                                                                    marginTop: 5,
                                                                    marginLeft: 5,
                                                                }}
                                                            >
                                                                Show More
                                                            </div>
                                                        )}

                                                        <div
                                                            id="t18_756_175"
                                                            style={{
                                                                flexDirection:
                                                                    'column',
                                                                alignItems:
                                                                    'flex-start',
                                                                justifyContent:
                                                                    'flex-start',
                                                                display: 'flex',
                                                                paddingLeft: 0,
                                                                paddingRight: 0,
                                                                paddingTop: 0,
                                                                paddingBottom: 0,
                                                                position:
                                                                    'relative',
                                                                overflow:
                                                                    'visible',
                                                                borderWidth: 0,
                                                                marginTop: 10,
                                                                marginBottom: 0,
                                                                marginLeft: 5,
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    width: 740,
                                                                    alignItems:
                                                                        'flex-start',
                                                                    color: '#3C0608',
                                                                    fontWeight: 500,
                                                                    fontSize: 14,
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        fontWeight: 700,
                                                                        fontSize: 16,
                                                                    }}
                                                                >
                                                                    *Note:
                                                                </span>{' '}
                                                                This Answer may
                                                                not be exact,
                                                                for a more
                                                                thorough Answer,
                                                                please contact
                                                                Expert.
                                                            </div>
                                                            <div
                                                                id="t18_756_172"
                                                                style={{
                                                                    flexDirection:
                                                                        'row',
                                                                    alignItems:
                                                                        'center',
                                                                    justifyContent:
                                                                        'flex-start',
                                                                    display:
                                                                        'flex',
                                                                    itemSpacing: 8,
                                                                    paddingLeft: 0,
                                                                    paddingRight: 0,
                                                                    paddingTop: 0,
                                                                    paddingBottom: 0,
                                                                    position:
                                                                        'relative',
                                                                    overflow:
                                                                        'visible',
                                                                    borderWidth: 0,
                                                                    marginTop: 10,
                                                                    cursor: 'pointer',
                                                                }}
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    // props.onClickReport &&
                                                                    //     props.onClickReport(
                                                                    //         e
                                                                    //     )
                                                                }}
                                                            >
                                                                {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/Report.png' !=
                                                                '' ? (
                                                                    <img
                                                                        id="t18_756_173"
                                                                        style={{
                                                                            height: 19,
                                                                            width: 19,
                                                                            display:
                                                                                'flex',
                                                                            borderWidth: 0,
                                                                            marginLeft: 0,
                                                                            marginRight: 4,
                                                                        }}
                                                                        src={
                                                                            'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/Report.png'
                                                                        }
                                                                    ></img>
                                                                ) : (
                                                                    <></>
                                                                )}

                                                                <span
                                                                    id="t18_756_174"
                                                                    style={{
                                                                        fontFamily:
                                                                            'Inter',
                                                                        fontSize: 13,
                                                                        fontWeight: 400,
                                                                        color: 'rgba(113,113,113,1)',
                                                                        letterSpacing: 0,
                                                                        lineHeight:
                                                                            '15.732954025268555px',
                                                                        textAlign:
                                                                            'center',
                                                                        marginLeft: 4,
                                                                        marginRight: 0,
                                                                    }}
                                                                >
                                                                    Report
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : null}

                                    {/* ////Ai  comment  End*/}
                                    {dl.changes.visaQuestionComments.map(
                                        (item, index) => {
                                            return (
                                                <div>
                                                    <MmComment
                                                        {...item}
                                                        {...dl.changes
                                                            .visaQuestionComments}
                                                        onClickDelete={(
                                                            val
                                                        ) => {
                                                            const run =
                                                                async () => {
                                                                    var body = {
                                                                        visaQuestionCommentId:
                                                                            dl
                                                                                .changes
                                                                                .visaQuestionComments[
                                                                                index
                                                                            ]
                                                                                .commentId,
                                                                    }
                                                                    var res =
                                                                        await dl.functions.visaQuestionCommentDelete(
                                                                            body
                                                                        )
                                                                    if (
                                                                        res ==
                                                                        200
                                                                    ) {
                                                                        dl.functions.getVisaQuestionComments(
                                                                            dl
                                                                                .changes
                                                                                .visaQuestionCommentDetail
                                                                                ._id
                                                                        )
                                                                    }
                                                                }
                                                            run()
                                                        }}
                                                        onClickReport={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            // var userToken = dl.functions.common.getCookie("userToken")
                                                            // if(userToken){
                                                            //    dl.changes.reportForm.reportType= "visaQuestionsComments"
                                                            //    dl.changes.reportForm.reportedId= dl.changes.visaQuestionComments[index].commentId
                                                            //    dl.functions.modalsPlugin.openModal('reportacommentLg')

                                                            // }
                                                            // else{

                                                            //     dl.functions.modalsPlugin.openModal('loginLg')
                                                            // }
                                                            dl.functions.onReport(
                                                                dl.changes
                                                                    .visaQuestionComments[
                                                                    index
                                                                ].commentId,
                                                                'visaQuestionsComments',
                                                                'large'
                                                            )
                                                        }}
                                                    />
                                                </div>
                                            )
                                        }
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        id="t18_486_27"
                        style={{
                            width: 900,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingTop: 10,
                            paddingBottom: 10,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 20,
                            marginBottom: 20,
                        }}
                    >
                        {dl.changes.addSpaces.VisaCommentsAd.md
                            ?.slice(4, -1)
                            .trim() != '' ? (
                            <img
                                id="t18_486_29"
                                style={{
                                    height: 348,
                                    width: 831,
                                    display: 'flex',
                                    borderWidth: 0,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    if (
                                        dl.changes.addSpaces['VisaCommentsAd']
                                            .redirectURL
                                    ) {
                                        window.open(
                                            dl.changes.addSpaces[
                                                'VisaCommentsAd'
                                            ].redirectURL,
                                            '_blank'
                                        )
                                    }
                                }}
                                src={dl.changes.addSpaces.VisaCommentsAd.md
                                    ?.slice(4, -1)
                                    .trim()}
                            ></img>
                        ) : (
                            <></>
                        )}
                    </div>

                    <div
                        id="t18_735_131"
                        style={{
                            width: 900,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingTop: 30,
                            paddingBottom: 50,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 20,
                            marginBottom: 20,
                        }}
                    >
                        <span
                            id="t18_735_132"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 30,
                                fontWeight: 700,
                                color: 'rgba(186,15,23,1)',
                                letterSpacing: 0,
                                lineHeight: '36.30681610107422px',
                                textAlign: 'left',
                                marginTop: 0,
                                marginBottom: 15,
                            }}
                        >
                            Visa blogs
                        </span>

                        <div
                            id="t18_735_133"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 15,
                                marginBottom: 15,
                            }}
                        >
                            <MmBlogCardMd
                                {...dl.changes.visaQandABlog.blog1}
                                onCreateBookmark={(val) => {
                                    val.stopPropagation()
                                    dl.functions.bookmarkAction(
                                        'visaQandABlog',
                                        'blog1',
                                        'blogs'
                                    )
                                }}
                                onRemoveBookmark={(val) => {
                                    val.stopPropagation()
                                    dl.functions.bookmarkAction(
                                        'visaQandABlog',
                                        'blog1',
                                        'blogs'
                                    )
                                }}
                                onClick={(val) => {
                                    var blogId =
                                        dl.changes.visaQandABlog.blog1._id
                                    dl.functions.common.relativeRedirect(
                                        `blogdetails?blogId=${blogId}`,
                                        true
                                    )
                                }}
                            />

                            <MmBlogCardMd
                                {...dl.changes.visaQandABlog.blog2}
                                onCreateBookmark={(val) => {
                                    val.stopPropagation()
                                    dl.functions.bookmarkAction(
                                        'visaQandABlog',
                                        'blog2',
                                        'blogs'
                                    )
                                }}
                                onRemoveBookmark={(val) => {
                                    val.stopPropagation()
                                    dl.functions.bookmarkAction(
                                        'visaQandABlog',
                                        'blog2',
                                        'blogs'
                                    )
                                }}
                                onClick={(val) => {
                                    var blogId =
                                        dl.changes.visaQandABlog.blog2._id
                                    dl.functions.common.relativeRedirect(
                                        `blogdetails?blogId=${blogId}`,
                                        true
                                    )
                                }}
                            />

                            <MmBlogCardMd
                                {...dl.changes.visaQandABlog.blog3}
                                onCreateBookmark={(val) => {
                                    val.stopPropagation()
                                    dl.functions.bookmarkAction(
                                        'visaQandABlog',
                                        'blog3',
                                        'blogs'
                                    )
                                }}
                                onRemoveBookmark={(val) => {
                                    val.stopPropagation()
                                    dl.functions.bookmarkAction(
                                        'visaQandABlog',
                                        'blog3',
                                        'blogs'
                                    )
                                }}
                                onClick={(val) => {
                                    var blogId =
                                        dl.changes.visaQandABlog.blog3._id
                                    dl.functions.common.relativeRedirect(
                                        `blogdetails?blogId=${blogId}`,
                                        true
                                    )
                                }}
                            />
                        </div>

                        <div
                            id="t18_735_167"
                            style={{
                                height: 24,
                                width: 133,
                                borderRadius: 7,
                                backgroundColor: 'rgba(186,15,23,1.00)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 10,
                                paddingBottom: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 15,
                                marginBottom: 0,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                dl.functions.viewsPlugin.showView('blogs')
                                var currentPath =
                                    dl.functions.common.getLastPath()
                                dl.functions.onLoadFunctions[currentPath]()
                            }}
                        >
                            <span
                                id="t18_735_168"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 20,
                                    fontWeight: 700,
                                    color: 'rgba(255,255,255,1)',
                                    letterSpacing: 0,
                                    lineHeight: '24.204544067382812px',
                                    textAlign: 'left',
                                }}
                            >
                                View All
                            </span>
                        </div>
                    </div>

                    <MmFooterMd />
                </div>
            </div>
        </div>
    )
})
export default Comments_2
