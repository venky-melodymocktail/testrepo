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
import MmFaq from '../../components/MmFaq.jsx'
import MmBlogCard from '../../components/MmBlogCard.jsx'
import MmFooter from '../../components/MmFooter.jsx'
import MmServiceSelector from '../../components/MmServiceSelector.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmBlogCardMd from '../../components/MmBlogCardMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmServiceSelectorMd from '../../components/MmServiceSelectorMd.jsx'
import MmFilterMd from '../../components/MmFilterMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFaqS from '../../components/MmFaqS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmServiceSelectorS from '../../components/MmServiceSelectorS.jsx'
import MmFilterS from '../../components/MmFilterS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmFaqXs from '../../components/MmFaqXs.jsx'
import MmBlogCardXs from '../../components/MmBlogCardXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmServiceSelectorXs from '../../components/MmServiceSelectorXs.jsx'
import MmFilterXs from '../../components/MmFilterXs.jsx'

const Faq_2 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 900
            const element = document.getElementById('t18_808_4956')
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
                id="t18_808_4956"
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
                    id="t18_368_4423"
                    style={{
                        width: 900,
                        flexDirection: 'column',
                        alignItems: 'flex-start',
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

                    <MmServiceSelectorMd {...dl.changes.serviceSelectorMini} />

                    <div
                        id="t18_368_4475"
                        style={{
                            height: 222,
                            width: 880,
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
                            id="t18_2227_258"
                            style={{
                                height: 163,
                                width: 739,
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
                                id="t18_2227_259"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 15,
                                    fontWeight: 600,
                                    color: 'rgba(113,113,113,1)',
                                    letterSpacing: 0,
                                    lineHeight: '18.15340805053711px',
                                    textAlign: 'center',
                                    marginTop: 0,
                                    marginBottom: 8,
                                }}
                            >
                                Need an expert advice? Book a slot to Secure
                                your spot for personalized guidance –
                                effortlessly book a one-on-one session or a
                                group session with our experts for tailored
                                advice and insights
                            </span>

                            <div
                                id="t18_2246_38"
                                style={{
                                    height: 32,
                                    width: 141,
                                    borderRadius: 30,
                                    backgroundColor: 'rgba(244,186,84,1.00)',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 8,
                                    marginBottom: 0,
                                }}
                            >
                                <span
                                    id="t18_2246_39"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 15,
                                        fontWeight: 500,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '18.15340805053711px',
                                        textAlign: 'left',
                                    }}
                                >
                                    COMING SOON
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        id="t18_1683_150"
                        style={{
                            width: 816,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingLeft: 34,
                            paddingRight: 50,
                            paddingTop: 20,
                            paddingBottom: 20,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_1683_151"
                            style={{
                                width: 141,
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
                                dl.functions.modalsPlugin.openModal('filter')
                            }}
                        >
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/826373dad5dd0e37209a226b39515b5d2478d996.png' !=
                            '' ? (
                                <img
                                    id="t18_1683_152"
                                    style={{
                                        height: 12,
                                        width: 17,
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
                                id="t18_1683_153"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 20,
                                    fontWeight: 600,
                                    color: 'rgba(255,255,255,1)',
                                    letterSpacing: 0,
                                    lineHeight: '24.204544067382812px',
                                    textAlign: 'center',
                                    marginLeft: 5,
                                    marginRight: 0,
                                }}
                            >
                                Filters
                            </span>
                        </div>

                        <div
                            id="t18_1683_154"
                            style={{
                                width: 690,
                                flexDirection: 'row',
                                alignItems: 'flex-start',
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
                                                <MmFilterMd
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
                        id="t18_368_4480"
                        style={{
                            width: 900,
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
                        }}
                    >
                        <div
                            id="t18_368_4481"
                            style={{
                                width: 900,
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
                                id="t18_368_4528"
                                style={{
                                    width: 900,
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
                                    id="t18_368_4529"
                                    style={{
                                        width: 831,
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
                                        id="t18_368_4530"
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
                                            id="t18_368_4531"
                                            style={{
                                                height: 60,
                                                borderRadius: 30,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
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
                                                id="t18_368_4532"
                                                style={{
                                                    height: 32,
                                                    width: 220,
                                                    borderRadius: 30,
                                                    backgroundColor:
                                                        'rgba(186,15,23,1.00)',
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
                                                    marginLeft: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_368_4533"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 18,
                                                        fontWeight: 500,
                                                        color: 'rgba(255,255,255,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '21.784090042114258px',
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    FAQ
                                                </span>
                                            </div>

                                            <div
                                                id="t18_2255_61"
                                                style={{
                                                    height: 52,
                                                    width: 240,
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginRight: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_368_4534"
                                                    onClick={() => {
                                                        dl.functions.viewsPlugin.showView(
                                                            'visaquestions'
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

                                                        serviceSelector[
                                                            'visaquestions'
                                                        ] = 'rgba(156,18,24,1)'
                                                    }}
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 18,
                                                        fontWeight: 500,
                                                        color: 'rgba(186,15,23,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '21.784090042114258px',
                                                        textAlign: 'center',
                                                        cursor: 'pointer',
                                                    }}
                                                >
                                                    Answer a question
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_368_4535"
                                        style={{
                                            width: 831,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 10,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            {dl.changes.visafaqs.map(
                                                (item, index) => {
                                                    return (
                                                        <div>
                                                            <MmFaq
                                                                {...item}
                                                                {...dl.changes
                                                                    .visafaqs}
                                                                onOpen={(
                                                                    val
                                                                ) => {
                                                                    dl.changes.visafaqs[
                                                                        index
                                                                    ].answerVisible =
                                                                        'flex'
                                                                    dl.changes.visafaqs[
                                                                        index
                                                                    ].arrowVisibble =
                                                                        'none'
                                                                }}
                                                                onClose={(
                                                                    val
                                                                ) => {
                                                                    dl.changes.visafaqs[
                                                                        index
                                                                    ].answerVisible =
                                                                        'none'
                                                                    dl.changes.visafaqs[
                                                                        index
                                                                    ].arrowVisibble =
                                                                        'flex'
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
                                    id="t18_1025_521"
                                    style={{
                                        height: 397,
                                        width: 900,
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display:
                                            dl.changes.visaFaqNoDataVisible,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                    }}
                                >
                                    <div
                                        id="t18_1027_657"
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
                                                id="t18_1025_522"
                                                style={{
                                                    height: 236,
                                                    width: 365,
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
                                            id="t18_1025_523"
                                            style={{
                                                height: 58,
                                                width: 211,
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 15,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <span
                                                id="t18_1025_524"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 16,
                                                    fontWeight: 500,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '19.363636016845703px',
                                                    textAlign: 'left',
                                                    marginTop: 0,
                                                    marginBottom: 2.5,
                                                }}
                                            >
                                                No records found
                                            </span>

                                            <div
                                                id="t18_1025_525"
                                                style={{
                                                    height: 34,
                                                    width: 211,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
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
                                                    id="t18_1025_526"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 14,
                                                        fontWeight: 400,
                                                        color: 'rgba(167,167,167,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '16.94318199157715px',
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
                                    id="t18_368_4589"
                                    style={{
                                        height: 21,
                                        width: 899,
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
                                        total={dl.changes.paginationState.total}
                                        active={
                                            dl.changes.paginationState.active
                                        }
                                        onChange={(val) => {
                                            dl.changes.paginationState.active =
                                                val
                                            var page = String(val)
                                            dl.functions.getvisafaq('10', page)
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        id="t18_808_4959"
                        style={{
                            width: 900,
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
                        <span
                            id="t18_808_4960"
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
                            id="t18_808_4961"
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
                                    var userToken =
                                        dl.functions.common.getCookie(
                                            'userToken'
                                        )
                                    if (userToken) {
                                        var blogId =
                                            dl.changes.visaQandABlog.blog1._id
                                        var body = {
                                            serviceType: 'blogs',
                                            bookmarkedObjectId: blogId,
                                        }
                                        dl.functions.createBookmark(body)
                                    } else {
                                        dl.functions.modalsPlugin.openModal(
                                            'loginLg'
                                        )
                                    }
                                }}
                                onRemoveBookmark={(val) => {}}
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
                                    var userToken =
                                        dl.functions.common.getCookie(
                                            'userToken'
                                        )
                                    if (userToken) {
                                        var blogId =
                                            dl.changes.visaQandABlog.blog2._id
                                        var body = {
                                            serviceType: 'blogs',
                                            bookmarkedObjectId: blogId,
                                        }
                                        dl.functions.createBookmark(body)
                                    } else {
                                        dl.functions.modalsPlugin.openModal(
                                            'loginLg'
                                        )
                                    }
                                }}
                                onRemoveBookmark={(val) => {}}
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
                                    var userToken =
                                        dl.functions.common.getCookie(
                                            'userToken'
                                        )
                                    if (userToken) {
                                        var blogId =
                                            dl.changes.visaQandABlog.blog3._id
                                        var body = {
                                            serviceType: 'blogs',
                                            bookmarkedObjectId: blogId,
                                        }
                                        dl.functions.createBookmark(body)
                                    } else {
                                        dl.functions.modalsPlugin.openModal(
                                            'loginLg'
                                        )
                                    }
                                }}
                                onRemoveBookmark={(val) => {}}
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
                            id="t18_808_4995"
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
                                // var currentPath = dl.functions.common.getLastPath()
                                // dl.functions.onLoadFunctions[currentPath]()
                                dl.changes.blogsFilter[0].options[0].selected = true
                                dl.functions.applyBlogFilter()
                            }}
                        >
                            <span
                                id="t18_808_4996"
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
export default Faq_2
