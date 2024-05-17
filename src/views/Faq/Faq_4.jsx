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

const Faq_4 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 400
            const element = document.getElementById('t18_808_4958')
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
                id="t18_808_4958"
                style={{
                    width: 400,
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
                    id="t18_374_5298"
                    style={{
                        width: 400,
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <MmHeaderXs
                        {...dl.changes.userDetail}
                        onChangeAddress={(val) => {
                            dl.functions.modalsPlugin.openModal('AddressPopupS')
                        }}
                        onLogIn={(val) => {
                            dl.functions.viewsPlugin.showView('login')
                        }}
                        onClickProfile={(val) => {
                            // dl.functions.viewsPlugin.showView("profile")
                            // var currentPath = dl.functions.common.getLastPath()
                            // dl.functions.onLoadFunctions[currentPath]()
                            // var screens = [
                            //     "rentallistings",
                            //     "ridelistings",
                            //     "travelcompanionlisting",
                            //     "questionlistings",
                            //     "studyabroadbookings",
                            //     "visabookings",
                            //     "rentalbookmarks",
                            //     "ridebookmarks",
                            //     "travelcompanionbookmarks",
                            //     "moviebookmarks",
                            //     "blogbookmarks",
                            //     "questionbookmarks",
                            // ]
                            // var currentPath = dl.functions.common.getLastPath()
                            // for(var i=0; i<screens.length; i++){
                            //     if(screens[i]==currentPath){
                            //     	val.stopPropagation();

                            //     }
                            // }

                            dl.functions.modalsPlugin.openModal('navigationXs')
                        }}
                    />

                    <MmServiceSelectorXs {...dl.changes.serviceSelectorMini} />

                    <div
                        id="t18_2227_267"
                        style={{
                            height: 160,
                            width: 381,
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
                            id="t18_2227_268"
                            style={{
                                height: 84,
                                width: 372,
                                borderRadius: 10,
                                backgroundColor: 'rgba(248,246,246,1.00)',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                paddingTop: 20,
                                paddingBottom: 20,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <span
                                id="t18_2227_269"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 13,
                                    fontWeight: 500,
                                    color: 'rgba(113,113,113,1)',
                                    letterSpacing: 0,
                                    lineHeight: '15.732954025268555px',
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
                                id="t18_2246_50"
                                style={{
                                    height: 28,
                                    width: 114,
                                    borderRadius: 30,
                                    backgroundColor: 'rgba(244,186,84,1.00)',
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
                                    id="t18_2246_51"
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
                        id="t18_1683_134"
                        style={{
                            width: 380,
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingLeft: 20,
                            paddingTop: 20,
                            paddingBottom: 10,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            borderColor: 'rgba(207,206,206,1)',
                            borderBottomWidth: 1,
                            borderStyle: 'solid',
                        }}
                    >
                        <div
                            id="t18_1683_135"
                            style={{
                                height: 15,
                                width: 100,
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
                                marginTop: 0,
                                marginBottom: 5,
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
                                    id="t18_1683_136"
                                    style={{
                                        height: 12,
                                        width: 17,
                                        display: 'flex',
                                        borderWidth: 0,
                                        marginLeft: 0,
                                        marginRight: 3,
                                    }}
                                    src={
                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/826373dad5dd0e37209a226b39515b5d2478d996.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}

                            <span
                                id="t18_1683_137"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 12,
                                    fontWeight: 600,
                                    color: 'rgba(255,255,255,1)',
                                    letterSpacing: 0,
                                    lineHeight: '14.522727012634277px',
                                    textAlign: 'center',
                                    marginLeft: 3,
                                    marginRight: 0,
                                }}
                            >
                                Filters
                            </span>
                        </div>

                        <div
                            id="t18_1683_138"
                            style={{
                                width: 361,
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 5,
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
                                {dl.changes.universalFiltersList.map(
                                    (item, index) => {
                                        return (
                                            <div>
                                                <MmFilterXs
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
                        id="t18_374_5333"
                        style={{
                            width: 400,
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
                            id="t18_374_5334"
                            style={{
                                width: 400,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingTop: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_374_5335"
                                style={{
                                    width: 380,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderBottomWidth: 1,
                                    borderStyle: 'solid',
                                    marginTop: 0,
                                }}
                            >
                                <div
                                    id="t18_374_5336"
                                    style={{
                                        width: 349,
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingBottom: 40,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                    }}
                                >
                                    <div
                                        id="t18_374_5337"
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
                                            marginTop: 0,
                                            marginBottom: 5,
                                        }}
                                    >
                                        <div
                                            id="t18_374_5338"
                                            style={{
                                                height: 44,
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
                                                id="t18_374_5339"
                                                style={{
                                                    height: 16,
                                                    width: 125,
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
                                                    id="t18_374_5340"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 13,
                                                        fontWeight: 500,
                                                        color: 'rgba(255,255,255,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '15.732954025268555px',
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    FAQ
                                                </span>
                                            </div>

                                            <div
                                                id="t18_2255_60"
                                                style={{
                                                    height: 36,
                                                    width: 165,
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
                                                    id="t18_374_5341"
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
                                                        fontSize: 13,
                                                        fontWeight: 500,
                                                        color: 'rgba(186,15,23,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '15.732954025268555px',
                                                        textAlign: 'center',
                                                        cursor: 'pointer',
                                                    }}
                                                >
                                                    Post/Answer A Question
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_374_5342"
                                        style={{
                                            width: 327,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 5,
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
                                                            <MmFaqXs
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
                            </div>

                            <div
                                id="t18_1027_622"
                                style={{
                                    height: 259,
                                    width: 400,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: dl.changes.visaFaqNoDataVisible,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                }}
                            >
                                <div
                                    id="t18_1027_623"
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
                                            id="t18_1027_624"
                                            style={{
                                                height: 145,
                                                width: 223,
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
                                        id="t18_1027_625"
                                        style={{
                                            height: 52,
                                            width: 181,
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
                                            id="t18_1027_626"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 14,
                                                fontWeight: 500,
                                                color: 'rgba(0,0,0,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '16.94318199157715px',
                                                textAlign: 'left',
                                                marginTop: 0,
                                                marginBottom: 2.5,
                                            }}
                                        >
                                            No records found
                                        </span>

                                        <div
                                            id="t18_1027_627"
                                            style={{
                                                height: 30,
                                                width: 181,
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 2.5,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <span
                                                id="t18_1027_628"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 12,
                                                    fontWeight: 400,
                                                    color: 'rgba(167,167,167,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '14.522727012634277px',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                We can’t find any item matching
                                                your search
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                id="t18_374_5396"
                                style={{
                                    height: 34,
                                    width: 400,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderBottomWidth: 1,
                                    borderStyle: 'solid',
                                    marginBottom: 0,
                                }}
                            >
                                <MMPagination
                                    total={dl.changes.paginationState.total}
                                    active={dl.changes.paginationState.active}
                                    onChange={(val) => {
                                        dl.changes.paginationState.active = val
                                        var page = String(val)
                                        dl.functions.getvisafaq('10', page)
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        id="t18_742_303"
                        style={{
                            width: 400,
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
                            id="t18_742_304"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 18,
                                fontWeight: 600,
                                color: 'rgba(186,15,23,1)',
                                letterSpacing: 0,
                                lineHeight: '21.784090042114258px',
                                textAlign: 'left',
                                marginTop: 0,
                                marginBottom: 15,
                            }}
                        >
                            Visa blogs
                        </span>

                        <div
                            id="t18_742_305"
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
                            <MmBlogCardXs
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

                            <MmBlogCardXs
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

                            <MmBlogCardXs
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
                            id="t18_742_339"
                            style={{
                                height: 16,
                                width: 101,
                                borderRadius: 5,
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
                                id="t18_742_340"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 14,
                                    fontWeight: 700,
                                    color: 'rgba(255,255,255,1)',
                                    letterSpacing: 0,
                                    lineHeight: '16.94318199157715px',
                                    textAlign: 'left',
                                }}
                            >
                                View All
                            </span>
                        </div>
                    </div>

                    <MmFooterXs />
                </div>
            </div>
        </div>
    )
})
export default Faq_4
