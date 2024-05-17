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

const Faq_1 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_808_4955')
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
                id="t18_808_4955"
                style={{
                    width: 1440,
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
                    id="t18_203_1544"
                    style={{
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <MmHeader
                        {...dl.changes.userDetail}
                        onChangeAddress={(val) => {
                            dl.functions.modalsPlugin.openModal(
                                'AddressPopupLg'
                            )
                        }}
                        onSignUp={(val) => {
                            dl.functions.viewsPlugin.showView('signup')
                        }}
                        onLogIn={(val) => {
                            dl.functions.viewsPlugin.showView('login')
                        }}
                        onClickServices={(val) => {
                            dl.functions.common.goToDivId('4:346')
                        }}
                        onClickBlogs={(val) => {
                            dl.functions.common.goToDivId('4:412')
                        }}
                        onClickAboutUs={(val) => {
                            dl.functions.common.goToDivId('4:481')
                        }}
                        onClickContactUs={(val) => {
                            dl.functions.common.goToDivId('4:481')
                        }}
                        onClickProfile={(val) => {
                            dl.functions.viewsPlugin.showView('profile')
                            var currentPath = dl.functions.common.getLastPath()
                            dl.functions.onLoadFunctions[currentPath]()
                        }}
                    />

                    <MmServiceSelector
                        {...dl.changes.serviceSelector}
                        onRentalsClick={(val) => {
                            var serviceSelector =
                                dl.changes.serviceSelector.services

                            for (var key in serviceSelector) {
                                serviceSelector[key] = 'rgba(186,15,23,1)'
                            }

                            serviceSelector['rentals'] = 'rgba(156,18,24,1)'
                            // var currentPath = dl.functions.common.getLastPath()
                            // dl.functions.onLoadFunctions[currentPath]()

                            dl.functions.viewsPlugin.showView('rooms')
                            var currentPath = dl.functions.common.getLastPath()
                            dl.functions.onLoadFunctions[currentPath]()
                        }}
                        onRidesClick={(val) => {
                            var serviceSelector =
                                dl.changes.serviceSelector.services

                            for (var key in serviceSelector) {
                                serviceSelector[key] = 'rgba(186,15,23,1)'
                            }

                            serviceSelector['rides'] = 'rgba(156,18,24,1)'

                            dl.functions.viewsPlugin.showView('ridesharing')
                            var currentPath = dl.functions.common.getLastPath()
                            dl.functions.onLoadFunctions[currentPath]()
                        }}
                        onTSClick={(val) => {
                            var serviceSelector =
                                dl.changes.serviceSelector.services

                            for (var key in serviceSelector) {
                                serviceSelector[key] = 'rgba(186,15,23,1)'
                            }

                            serviceSelector['travelSuggestions'] =
                                'rgba(156,18,24,1)'

                            dl.functions.viewsPlugin.showView(
                                'travelsuggestions'
                            )
                            var currentPath = dl.functions.common.getLastPath()
                            dl.functions.onLoadFunctions[currentPath]()
                        }}
                        onMSClick={(val) => {
                            var serviceSelector =
                                dl.changes.serviceSelector.services

                            for (var key in serviceSelector) {
                                serviceSelector[key] = 'rgba(186,15,23,1)'
                            }

                            serviceSelector['movieSuggestions'] =
                                'rgba(156,18,24,1)'

                            dl.functions.viewsPlugin.showView(
                                'moviesuggestions'
                            )
                            var currentPath = dl.functions.common.getLastPath()
                            dl.functions.onLoadFunctions[currentPath]()
                        }}
                        onStudyAbroadClick={(val) => {
                            // var serviceSelector=dl.changes.dataSource.services
                            var serviceSelector =
                                dl.changes.serviceSelector.services

                            for (var key in serviceSelector) {
                                serviceSelector[key] = 'rgba(186,15,23,1)'
                            }

                            serviceSelector['studyAbroad'] = 'rgba(156,18,24,1)'
                            dl.functions.viewsPlugin.showView('studyabroad')
                            var currentPath = dl.functions.common.getLastPath()
                            dl.functions.onLoadFunctions[currentPath]()
                        }}
                        onVisaClick={(val) => {
                            // var serviceSelector=dl.changes.dataSource.services
                            var serviceSelector =
                                dl.changes.serviceSelector.services

                            for (var key in serviceSelector) {
                                serviceSelector[key] = 'rgba(186,15,23,1)'
                            }

                            serviceSelector['visaQna'] = 'rgba(156,18,24,1)'
                            dl.functions.viewsPlugin.showView('visaquestions')
                            var currentPath = dl.functions.common.getLastPath()
                            dl.functions.onLoadFunctions[currentPath]()
                        }}
                        onTravelCompanionClick={(val) => {
                            // var serviceSelector=dl.changes.dataSource.services

                            // for(var key in serviceSelector){
                            //     serviceSelector[key]="rgba(186,15,23,1)"
                            // }

                            // serviceSelector["travelCompanion"]="rgba(156,18,24,1)"
                            dl.functions.viewsPlugin.showView('travelcompanion')
                            var currentPath = dl.functions.common.getLastPath()
                            dl.functions.onLoadFunctions[currentPath]()

                            var serviceSelector =
                                dl.changes.serviceSelector.services

                            for (var key in serviceSelector) {
                                serviceSelector[key] = 'rgba(186,15,23,1)'
                            }

                            serviceSelector['travelCompanion'] =
                                'rgba(156,18,24,1)'
                        }}
                    />

                    <div
                        id="t18_193_351"
                        style={{
                            width: 1420,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 50,
                            paddingBottom: 50,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_2227_254"
                            style={{
                                height: 146,
                                width: 1091,
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
                                id="t18_2227_255"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 600,
                                    color: 'rgba(113,113,113,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
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
                                id="t18_2246_36"
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
                                    id="t18_2246_37"
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
                        id="t18_193_352"
                        style={{
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
                            id="t18_193_353"
                            style={{
                                width: 1440,
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
                            <MMFilter
                                dataSource={dl.changes.visaFilter}
                                onChange={(val) => {
                                    dl.changes.visaFilter = val
                                    dl.functions.applyVisafaqFilters()
                                }}
                            />

                            <div
                                id="t18_193_400"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingTop: 30,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderLeftWidth: 1,
                                    borderStyle: 'solid',
                                    marginRight: 0,
                                }}
                            >
                                <div
                                    id="t18_193_401"
                                    style={{
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
                                        id="t18_195_516"
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
                                            id="t18_193_470"
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
                                                id="t18_193_471"
                                                style={{
                                                    height: 32,
                                                    width: 223,
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
                                                    id="t18_193_472"
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
                                                id="t18_2255_58"
                                                style={{
                                                    height: 52,
                                                    width: 243,
                                                    borderRadius: 30,
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
                                                    id="t18_193_473"
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
                                                        var currentPath =
                                                            dl.functions.common.getLastPath()
                                                        dl.functions.onLoadFunctions[
                                                            currentPath
                                                        ]()
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
                                                    Post/Answer A Question
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_195_497"
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
                                    id="t18_1025_475"
                                    style={{
                                        height: 397,
                                        width: 950,
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
                                        id="t18_1025_476"
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
                                                id="t18_1025_477"
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
                                            id="t18_1025_478"
                                            style={{
                                                height: 65,
                                                width: 254,
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
                                                id="t18_1025_479"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 18,
                                                    fontWeight: 500,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '21.784090042114258px',
                                                    textAlign: 'left',
                                                    marginTop: 0,
                                                    marginBottom: 2.5,
                                                }}
                                            >
                                                No records found
                                            </span>

                                            <div
                                                id="t18_1025_480"
                                                style={{
                                                    height: 38,
                                                    width: 254,
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
                                                    id="t18_1025_481"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 16,
                                                        fontWeight: 400,
                                                        color: 'rgba(167,167,167,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '19.363636016845703px',
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
                                    id="t18_193_457"
                                    style={{
                                        height: 17,
                                        width: 890,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 60,
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
                        id="t18_195_543"
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
                        <div
                            id="t18_195_544"
                            style={{
                                width: 1440,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingTop: 45,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 29,
                            }}
                        >
                            <span
                                id="t18_195_545"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 40,
                                    fontWeight: 700,
                                    color: 'rgba(186,15,23,1)',
                                    letterSpacing: 0,
                                    lineHeight: '48.409088134765625px',
                                    textAlign: 'left',
                                    marginTop: 0,
                                    marginBottom: 22,
                                }}
                            >
                                Visa blogs
                            </span>

                            <div
                                id="t18_195_546"
                                className={' blogContainer'}
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 22,
                                    marginBottom: 0,
                                }}
                            >
                                <MmBlogCard
                                    {...dl.changes.visaQandABlog.blog1}
                                    onCreateBookmark={(val) => {
                                        val.stopPropagation()
                                        var userToken =
                                            dl.functions.common.getCookie(
                                                'userToken'
                                            )
                                        if (userToken) {
                                            var blogId =
                                                dl.changes.visaQandABlog.blog1
                                                    ._id
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

                                <MmBlogCard
                                    {...dl.changes.visaQandABlog.blog2}
                                    onCreateBookmark={(val) => {
                                        val.stopPropagation()
                                        var userToken =
                                            dl.functions.common.getCookie(
                                                'userToken'
                                            )
                                        if (userToken) {
                                            var blogId =
                                                dl.changes.visaQandABlog.blog2
                                                    ._id
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

                                <MmBlogCard
                                    {...dl.changes.visaQandABlog.blog3}
                                    onCreateBookmark={(val) => {
                                        val.stopPropagation()
                                        var userToken =
                                            dl.functions.common.getCookie(
                                                'userToken'
                                            )
                                        if (userToken) {
                                            var blogId =
                                                dl.changes.visaQandABlog.blog3
                                                    ._id
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
                        </div>

                        <div
                            id="t18_195_571"
                            className={' hovereffectsignIn-btn'}
                            style={{
                                height: 38,
                                width: 210,
                                borderRadius: 10,
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
                                marginTop: 29,
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
                                id="t18_195_572"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 22,
                                    fontWeight: 700,
                                    color: 'rgba(255,255,255,1)',
                                    letterSpacing: 0,
                                    lineHeight: '26.625px',
                                    textAlign: 'left',
                                }}
                            >
                                View All
                            </span>
                        </div>
                    </div>

                    <MmFooter />
                </div>
            </div>
        </div>
    )
})
export default Faq_1
