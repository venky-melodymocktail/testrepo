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
import MmBlogCard from '../../components/MmBlogCard.jsx'
import MmFooter from '../../components/MmFooter.jsx'
import MmServiceSelector from '../../components/MmServiceSelector.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmBlogCardMd from '../../components/MmBlogCardMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmServiceSelectorMd from '../../components/MmServiceSelectorMd.jsx'
import MmFilterMd from '../../components/MmFilterMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmQuestionS from '../../components/MmQuestionS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmServiceSelectorS from '../../components/MmServiceSelectorS.jsx'
import MmFilterS from '../../components/MmFilterS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmQuestionXs from '../../components/MmQuestionXs.jsx'
import MmBlogCardXs from '../../components/MmBlogCardXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmServiceSelectorXs from '../../components/MmServiceSelectorXs.jsx'
import MmFilterXs from '../../components/MmFilterXs.jsx'

const Visaquestions_3 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 620
            const element = document.getElementById('t18_799_4947')
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
                id="t18_799_4947"
                style={{
                    width: 620,
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
                    id="t18_439_180"
                    style={{
                        width: 620,
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
                        id="t18_414_182"
                        style={{
                            width: 620,
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 0,
                        }}
                    >
                        <MmHeaderS
                            {...dl.changes.userDetail}
                            onChangeAddress={(val) => {
                                dl.functions.modalsPlugin.openModal(
                                    'AddressPopupS'
                                )
                            }}
                            onClickMenu={(val) => {}}
                            onLogIn={(val) => {
                                dl.functions.viewsPlugin.showView('login')
                            }}
                            onClickProfile={(val) => {
                                dl.functions.viewsPlugin.showView('profile')
                                var currentPath =
                                    dl.functions.common.getLastPath()
                                dl.functions.onLoadFunctions[currentPath]()
                            }}
                        />

                        <MmServiceSelectorS
                            {...dl.changes.serviceSelectorMini}
                        />

                        <div
                            id="t18_414_587"
                            style={{
                                height: 185,
                                width: 600,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                paddingLeft: 10,
                                paddingRight: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                borderColor: 'rgba(207,206,206,1)',
                                borderBottomWidth: 1,
                                borderStyle: 'solid',
                            }}
                        >
                            <div
                                id="t18_414_588"
                                style={{
                                    height: 137,
                                    width: 558,
                                    borderRadius: 10,
                                    backgroundColor: 'rgba(248,246,246,1.00)',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                }}
                            >
                                <span
                                    id="t18_414_589"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 14,
                                        fontWeight: 600,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '16.94318199157715px',
                                        textAlign: 'center',
                                        marginTop: 0,
                                        marginBottom: 5,
                                    }}
                                >
                                    Need an expert advice? Book a slot to Secure
                                    your spot for personalized guidance –
                                    effortlessly book a one-on-one session or a
                                    group session with our experts for tailored
                                    advice and insights
                                </span>

                                <div
                                    id="t18_2246_56"
                                    style={{
                                        height: 28,
                                        width: 114,
                                        borderRadius: 30,
                                        backgroundColor:
                                            'rgba(244,186,84,1.00)',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 5,
                                        marginBottom: 0,
                                    }}
                                >
                                    <span
                                        id="t18_2246_57"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 13,
                                            fontWeight: 500,
                                            color: 'rgba(255,255,255,1)',
                                            letterSpacing: 0,
                                            lineHeight: '15.732954025268555px',
                                            textAlign: 'left',
                                        }}
                                    >
                                        COMING SOON
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div
                            id="t18_1683_118"
                            style={{
                                width: 549,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingLeft: 21,
                                paddingRight: 50,
                                paddingTop: 20,
                                paddingBottom: 20,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_1683_119"
                                style={{
                                    height: 15,
                                    width: 126,
                                    borderRadius: 7,
                                    backgroundColor: 'rgba(186,15,23,1.00)',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 7.5,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    dl.functions.setUniversalFilters()
                                    dl.functions.modalsPlugin.openModal(
                                        'filter'
                                    )
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/826373dad5dd0e37209a226b39515b5d2478d996.png' !=
                                '' ? (
                                    <img
                                        id="t18_1683_120"
                                        style={{
                                            height: 10.58984375,
                                            width: 15,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: 0,
                                            marginRight: 5,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/826373dad5dd0e37209a226b39515b5d2478d996.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <span
                                    id="t18_1683_121"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 16,
                                        fontWeight: 600,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '19.363636016845703px',
                                        textAlign: 'center',
                                        marginLeft: 5,
                                        marginRight: 0,
                                    }}
                                >
                                    Filters
                                </span>
                            </div>

                            <div
                                id="t18_1683_122"
                                style={{
                                    width: 449,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 7.5,
                                    marginRight: 0,
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {dl.changes.universalFiltersList.map(
                                        (item, index) => {
                                            return (
                                                <div>
                                                    <MmFilterS
                                                        {...item}
                                                        {...dl.changes
                                                            .universalFiltersList}
                                                        onRemove={(val) => {
                                                            dl.changes.universalFiltersList.splice(
                                                                index,
                                                                1
                                                            )
                                                            dl.changes.universalFilter[
                                                                item.filterIndex
                                                            ].options[
                                                                item.optionIndex
                                                            ].selected = false
                                                            dl.functions.applyUniversalFilter()
                                                        }}
                                                    />
                                                </div>
                                            )
                                        }
                                    )}
                                </div>
                            </div>
                        </div>

                        <div
                            id="t18_414_230"
                            style={{
                                width: 620,
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                borderColor: 'rgba(207,206,206,1)',
                                borderBottomWidth: 1,
                                borderStyle: 'solid',
                                marginBottom: 0,
                            }}
                        >
                            <div
                                id="t18_414_231"
                                style={{
                                    width: 620,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderTopWidth: 1,
                                    borderStyle: 'solid',
                                }}
                            >
                                <div
                                    id="t18_414_232"
                                    style={{
                                        width: 620,
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingTop: 30,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                    }}
                                >
                                    <div
                                        id="t18_414_233"
                                        style={{
                                            width: 560,
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingBottom: 40,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_414_234"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                paddingTop: 10,
                                                paddingBottom: 10,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 10,
                                            }}
                                        >
                                            <div
                                                id="t18_414_235"
                                                style={{
                                                    height: 48,
                                                    borderRadius: 30,
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    paddingLeft: 5,
                                                    paddingRight: 5,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 2,
                                                    borderColor:
                                                        'rgba(186,15,23,1)',
                                                    borderStyle: 'solid',
                                                }}
                                            >
                                                <div
                                                    id="t18_414_236"
                                                    style={{
                                                        height: 18,
                                                        width: 175,
                                                        borderRadius: 30,
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        display: 'flex',
                                                        paddingLeft: 10,
                                                        paddingRight: 10,
                                                        paddingTop: 10,
                                                        paddingBottom: 10,
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 0,
                                                        cursor: 'pointer',
                                                    }}
                                                    onClick={(e) => {
                                                        dl.functions.viewsPlugin.showView(
                                                            'faq'
                                                        )
                                                        var currentPath =
                                                            dl.functions.common.getLastPath()
                                                        dl.functions.onLoadFunctions[
                                                            currentPath
                                                        ]()

                                                        var serviceSelector =
                                                            dl.changes
                                                                .serviceSelector
                                                                .services

                                                        for (var key in serviceSelector) {
                                                            serviceSelector[
                                                                key
                                                            ] =
                                                                'rgba(186,15,23,1)'
                                                        }

                                                        serviceSelector['faq'] =
                                                            'rgba(156,18,24,1)'
                                                    }}
                                                >
                                                    <span
                                                        id="t18_414_237"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 15,
                                                            fontWeight: 500,
                                                            color: 'rgba(186,15,23,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '18.15340805053711px',
                                                            textAlign: 'center',
                                                        }}
                                                    >
                                                        FAQ
                                                    </span>
                                                </div>

                                                <div
                                                    id="t18_414_238"
                                                    style={{
                                                        height: 38,
                                                        width: 195,
                                                        borderRadius: 30,
                                                        backgroundColor:
                                                            'rgba(186,15,23,1.00)',
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_414_239"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 15,
                                                            fontWeight: 500,
                                                            color: 'rgba(255,255,255,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '18.15340805053711px',
                                                            textAlign: 'center',
                                                        }}
                                                    >
                                                        Post/Answer A Question
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_414_240"
                                            style={{
                                                height: 364,
                                                width: 537,
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 10,
                                                marginBottom: 10,
                                            }}
                                        >
                                            <div
                                                id="t18_414_241"
                                                style={{
                                                    height: 364,
                                                    width: 537,
                                                    borderRadius: 5,
                                                    backgroundColor:
                                                        'rgba(248,246,246,1.00)',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_414_242"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 22,
                                                        fontWeight: 700,
                                                        color: 'rgba(186,15,23,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '26.625px',
                                                        textAlign: 'left',
                                                        marginTop: 0,
                                                        marginBottom: 7.5,
                                                    }}
                                                >
                                                    Have a query?
                                                </span>

                                                <div
                                                    id="t18_414_243"
                                                    style={{
                                                        flexDirection: 'column',
                                                        alignItems:
                                                            'flex-start',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginTop: 7.5,
                                                        marginBottom: 0,
                                                    }}
                                                >
                                                    <input
                                                        id="t18_414_244"
                                                        placeholder="Enter your Query here"
                                                        value={
                                                            dl.changes
                                                                .visaQuestionInput
                                                                .question
                                                        }
                                                        style={{
                                                            height: 131,
                                                            width: 487,
                                                            borderRadius: 4,
                                                            backgroundColor:
                                                                'rgba(255,255,255,1.00)',
                                                            flexDirection:
                                                                'column',
                                                            alignItems:
                                                                'flex-start',
                                                            justifyContent:
                                                                'flex-start',
                                                            display: 'flex',
                                                            paddingLeft: 20,
                                                            paddingTop: 10,
                                                            paddingBottom: 10,
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginTop: 0,
                                                            marginBottom: 10,
                                                            cursor: 'pointer',
                                                            fontFamily: 'Inter',
                                                            fontSize: 16,
                                                            color: 'rgba(112,112,112,1)',
                                                            fontWeight: 400,
                                                            textAlign: 'left',
                                                        }}
                                                        onChange={(val) => {
                                                            val =
                                                                val.target.value

                                                            var userToken =
                                                                dl.functions.common.getCookie(
                                                                    'userToken'
                                                                )
                                                            if (userToken) {
                                                                dl.changes.visaQuestionInput.question =
                                                                    val
                                                            } else {
                                                                dl.functions.modalsPlugin.openModal(
                                                                    'loginS'
                                                                )
                                                            }
                                                        }}
                                                        type="text"
                                                    ></input>

                                                    <div
                                                        id="t18_414_248"
                                                        style={{
                                                            flexDirection:
                                                                'column',
                                                            alignItems:
                                                                'flex-start',
                                                            justifyContent:
                                                                'center',
                                                            display: 'flex',
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginTop: 10,
                                                            marginBottom: 0,
                                                        }}
                                                    >
                                                        <select
                                                            name="cars"
                                                            id="t18_414_249"
                                                            style={{
                                                                height: 47,
                                                                width: 307,
                                                                borderRadius: 4,
                                                                backgroundColor:
                                                                    'rgba(255,255,255,1.00)',
                                                                flexDirection:
                                                                    'row',
                                                                alignItems:
                                                                    'center',
                                                                justifyContent:
                                                                    'center',
                                                                display: 'flex',
                                                                position:
                                                                    'relative',
                                                                overflow:
                                                                    'visible',
                                                                borderWidth: 0,
                                                                marginTop: 0,
                                                                marginBottom: 10,
                                                                cursor: 'pointer',
                                                            }}
                                                            onChange={(val) => {
                                                                val =
                                                                    val.target
                                                                        .value

                                                                dl.changes.visaQuestionInput.category =
                                                                    val
                                                            }}
                                                        >
                                                            <option
                                                                value=""
                                                                disabled
                                                                selected
                                                            >
                                                                Select your
                                                                option
                                                            </option>
                                                            {Array.isArray(
                                                                dl.changes
                                                                    .visaQandACategories
                                                            ) &&
                                                                dl.changes.visaQandACategories.map(
                                                                    (
                                                                        item,
                                                                        index
                                                                    ) => {
                                                                        return (
                                                                            <option
                                                                                value={
                                                                                    item
                                                                                }
                                                                                selected={
                                                                                    item ==
                                                                                    dl
                                                                                        .changes
                                                                                        .visaQuestionInput
                                                                                        .category
                                                                                }
                                                                            >
                                                                                {
                                                                                    item
                                                                                }
                                                                            </option>
                                                                        )
                                                                    }
                                                                )}
                                                        </select>

                                                        <div
                                                            id="t18_414_252"
                                                            style={{
                                                                height: 27,
                                                                width: 129,
                                                                borderRadius: 4,
                                                                backgroundColor:
                                                                    'rgba(186,15,23,1.00)',
                                                                flexDirection:
                                                                    'row',
                                                                alignItems:
                                                                    'center',
                                                                justifyContent:
                                                                    'center',
                                                                display: 'flex',
                                                                paddingLeft: 10,
                                                                paddingRight: 10,
                                                                paddingTop: 10,
                                                                paddingBottom: 10,
                                                                position:
                                                                    'relative',
                                                                overflow:
                                                                    'visible',
                                                                borderWidth: 0,
                                                                marginTop: 10,
                                                                marginBottom: 0,
                                                                cursor: 'pointer',
                                                            }}
                                                            onClick={(e) => {
                                                                var userToken =
                                                                    dl.functions.common.getCookie(
                                                                        'userToken'
                                                                    )
                                                                if (userToken) {
                                                                    if (
                                                                        dl
                                                                            .changes
                                                                            .visaQuestionInput
                                                                            .question ==
                                                                            '' ||
                                                                        dl
                                                                            .changes
                                                                            .visaQuestionInput
                                                                            .category ==
                                                                            ''
                                                                    ) {
                                                                        dl.functions.modalsPlugin.openModal(
                                                                            'errorGeneric'
                                                                        )
                                                                        dl.changes.errorGenericMessages =
                                                                            'Please Enter your Question and Visa Category'
                                                                    } else {
                                                                        dl.functions.createVisaQuestion()
                                                                    }
                                                                } else {
                                                                    dl.functions.modalsPlugin.openModal(
                                                                        'loginS'
                                                                    )
                                                                }
                                                            }}
                                                        >
                                                            <span
                                                                id="t18_414_253"
                                                                style={{
                                                                    fontFamily:
                                                                        'Inter',
                                                                    fontSize: 20,
                                                                    fontWeight: 700,
                                                                    color: 'rgba(255,255,255,1)',
                                                                    letterSpacing: 0,
                                                                    lineHeight:
                                                                        '24.204544067382812px',
                                                                    textAlign:
                                                                        'left',
                                                                }}
                                                            >
                                                                Submit
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_744_482"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingTop: 10,
                                                paddingBottom: 10,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 10,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_744_481"
                                                style={{
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
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
                                                        justifyContent:
                                                            'center',
                                                    }}
                                                >
                                                    {dl.changes.visaquestions.map(
                                                        (item, index) => {
                                                            return (
                                                                <div>
                                                                    <MmQuestionS
                                                                        {...item}
                                                                        {...dl
                                                                            .changes
                                                                            .visaquestions}
                                                                        onSave={(
                                                                            val
                                                                        ) => {
                                                                            val.stopPropagation()
                                                                            dl.functions.bookmarkAction(
                                                                                'visaquestions',
                                                                                index,
                                                                                'visaqandas'
                                                                            )
                                                                        }}
                                                                        onUnsave={(
                                                                            val
                                                                        ) => {
                                                                            val.stopPropagation()
                                                                            dl.functions.bookmarkAction(
                                                                                'visaquestions',
                                                                                index,
                                                                                'visaqandas'
                                                                            )
                                                                        }}
                                                                        onClickComments={(
                                                                            val
                                                                        ) => {
                                                                            var visaQuestionId =
                                                                                dl
                                                                                    .changes
                                                                                    .visaquestions[
                                                                                    index
                                                                                ]
                                                                                    ._id
                                                                            dl.functions.common.relativeRedirect(
                                                                                `comments?visaQuestionId=${visaQuestionId}`,
                                                                                true
                                                                            )
                                                                        }}
                                                                        onClickLink={(
                                                                            val
                                                                        ) => {
                                                                            val.stopPropagation()
                                                                            var visaQuestionId =
                                                                                dl
                                                                                    .changes
                                                                                    .visaquestions[
                                                                                    index
                                                                                ]
                                                                                    ._id
                                                                            var link = `https://melodymocktail.com/comments?visaQuestionId=${visaQuestionId}`
                                                                            dl.functions.common.copyToClipboard(
                                                                                link
                                                                            )
                                                                            window.toast(
                                                                                'Link Copied!'
                                                                            )
                                                                        }}
                                                                        onClickReport={(
                                                                            val
                                                                        ) => {
                                                                            val.stopPropagation()
                                                                            // var userToken = dl.functions.common.getCookie("userToken")
                                                                            // if(userToken){
                                                                            //    dl.changes.reportForm.reportType= "visaquestions"
                                                                            //    dl.changes.reportForm.reportedId= dl.changes.visaquestions[index]._id
                                                                            //    dl.functions.modalsPlugin.openModal('reportacommentLg')

                                                                            // }
                                                                            // else{

                                                                            //     dl.functions.modalsPlugin.openModal('loginS')
                                                                            // }

                                                                            dl.functions.onReport(
                                                                                dl
                                                                                    .changes
                                                                                    .visaquestions[
                                                                                    index
                                                                                ]
                                                                                    ._id,
                                                                                'visaquestions',
                                                                                'small'
                                                                            )
                                                                        }}
                                                                        onClick={(
                                                                            val
                                                                        ) => {
                                                                            var visaQuestionId =
                                                                                dl
                                                                                    .changes
                                                                                    .visaquestions[
                                                                                    index
                                                                                ]
                                                                                    ._id
                                                                            dl.functions.common.relativeRedirect(
                                                                                `comments?visaQuestionId=${visaQuestionId}`,
                                                                                true
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
                                        id="t18_1025_563"
                                        style={{
                                            height: 319,
                                            width: 618,
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            display:
                                                dl.changes
                                                    .visaQuestionNoDataVisible,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_1027_658"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                            }}
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c00eabc0b50238a2e6d4f7f0b4efb517fdb34594.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_1025_564"
                                                    style={{
                                                        height: 195,
                                                        width: 301,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                        marginTop: 0,
                                                        marginBottom: 15,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c00eabc0b50238a2e6d4f7f0b4efb517fdb34594.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}

                                            <div
                                                id="t18_1025_565"
                                                style={{
                                                    height: 55,
                                                    width: 196,
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 15,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_1025_566"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 15,
                                                        fontWeight: 500,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '18.15340805053711px',
                                                        textAlign: 'left',
                                                        marginTop: 0,
                                                        marginBottom: 2.5,
                                                    }}
                                                >
                                                    No records found
                                                </span>

                                                <div
                                                    id="t18_1025_567"
                                                    style={{
                                                        height: 32,
                                                        width: 196,
                                                        flexDirection: 'row',
                                                        alignItems:
                                                            'flex-start',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginTop: 2.5,
                                                        marginBottom: 0,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1025_568"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 13,
                                                            fontWeight: 400,
                                                            color: 'rgba(167,167,167,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '15.732954025268555px',
                                                            textAlign: 'center',
                                                        }}
                                                    >
                                                        We can’t find any item
                                                        matching your search
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_414_410"
                                        style={{
                                            height: 21,
                                            width: 620,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            paddingTop: 30,
                                            paddingBottom: 30,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            borderColor: 'rgba(207,206,206,1)',
                                            borderTopWidth: 1,
                                            borderStyle: 'solid',
                                            marginBottom: 0,
                                        }}
                                    >
                                        <MMPagination
                                            total={
                                                dl.changes.paginationState.total
                                            }
                                            active={
                                                dl.changes.paginationState
                                                    .active
                                            }
                                            onChange={(val) => {
                                                dl.changes.paginationState.active =
                                                    val
                                                var page = String(val)
                                                dl.functions.getvisaQuestions(
                                                    '10',
                                                    page
                                                )
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        id="t18_735_207"
                        style={{
                            width: 620,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingTop: 30,
                            paddingBottom: 10,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <span
                            id="t18_735_208"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 24,
                                fontWeight: 700,
                                color: 'rgba(186,15,23,1)',
                                letterSpacing: 0,
                                lineHeight: '29.045454025268555px',
                                textAlign: 'left',
                                marginTop: 0,
                                marginBottom: 15,
                            }}
                        >
                            Visa blogs
                        </span>

                        <div
                            id="t18_735_209"
                            style={{
                                flexDirection: 'column',
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
                            <MmBlogCard
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

                            <MmBlogCard
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

                            <MmBlogCard
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
                            id="t18_735_234"
                            style={{
                                height: 24,
                                width: 127,
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
                                // var currentPath = dl.functions.common.getLastPath()
                                // dl.functions.onLoadFunctions[currentPath]()
                                dl.changes.blogsFilter[0].options[0].selected = true
                                dl.functions.applyBlogFilter()
                            }}
                        >
                            <span
                                id="t18_735_235"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 15,
                                    fontWeight: 700,
                                    color: 'rgba(255,255,255,1)',
                                    letterSpacing: 0,
                                    lineHeight: '18.15340805053711px',
                                    textAlign: 'left',
                                }}
                            >
                                View All
                            </span>
                        </div>
                    </div>

                    <MmFooterS />
                </div>
            </div>
        </div>
    )
})
export default Visaquestions_3
