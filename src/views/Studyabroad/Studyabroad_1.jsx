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
import MmBlogCard from '../../components/MmBlogCard.jsx'
import MmFooter from '../../components/MmFooter.jsx'
import MmServiceSelector from '../../components/MmServiceSelector.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmServiceSelectorMd from '../../components/MmServiceSelectorMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmBlogCardMd from '../../components/MmBlogCardMd.jsx'
import MmServiceSelectorS from '../../components/MmServiceSelectorS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmBlogCardXs from '../../components/MmBlogCardXs.jsx'
import MmServiceSelectorXs from '../../components/MmServiceSelectorXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'

const Studyabroad_1 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_815_5084')
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
                id="t18_815_5084"
                style={{
                    width: 1440,
                    flexDirection: 'column',
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
                    id="t18_211_400"
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
                        id="t18_2227_271"
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
                            id="t18_2227_272"
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
                                id="t18_2227_273"
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
                                id="t18_2246_42"
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
                                    id="t18_2246_43"
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
                        id="t18_211_397"
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
                            id="t18_211_376"
                            style={{
                                width: 1420,
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
                                marginTop: 0,
                                marginBottom: 10,
                            }}
                        >
                            <div
                                id="t18_211_368"
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
                                <div
                                    id="t18_211_369"
                                    className={' blogContainer'}
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingTop: 35,
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
                                        {dl.changes.studyAbroadBlogs.map(
                                            (item, index) => {
                                                return (
                                                    <div>
                                                        <MmBlogCard
                                                            {...item}
                                                            {...dl.changes
                                                                .studyAbroadBlogs}
                                                            onCreateBookmark={(
                                                                val
                                                            ) => {
                                                                val.stopPropagation()
                                                                dl.functions.bookmarkAction(
                                                                    'studyAbroadBlogs',
                                                                    index,
                                                                    'blogs'
                                                                )
                                                            }}
                                                            onRemoveBookmark={(
                                                                val
                                                            ) => {
                                                                val.stopPropagation()
                                                                dl.functions.bookmarkAction(
                                                                    'studyAbroadBlogs',
                                                                    index,
                                                                    'blogs'
                                                                )
                                                            }}
                                                            onClick={(val) => {
                                                                var blogId =
                                                                    dl.changes
                                                                        .studyAbroadBlogs[
                                                                        index
                                                                    ]._id
                                                                dl.functions.common.relativeRedirect(
                                                                    `blogdetails?blogId=${blogId}`,
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
                            id="t18_211_395"
                            className={' hovereffectsignIn-btn'}
                            style={{
                                height: 37,
                                width: 168,
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
                                marginTop: 10,
                                marginBottom: 0,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                dl.functions.viewsPlugin.showView('blogs')
                                // var currentPath = dl.functions.common.getLastPath()
                                // dl.functions.onLoadFunctions[currentPath]()
                                dl.changes.blogsFilter[0].options[1].selected = true
                                dl.functions.applyBlogFilter()
                            }}
                        >
                            <span
                                id="t18_211_396"
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

                    <div
                        id="t18_1025_482"
                        style={{
                            height: 397,
                            width: 950,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: dl.changes.studyAbroadNoDataVisible,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_1025_483"
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
                                    id="t18_1025_484"
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
                                id="t18_1025_485"
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
                                    id="t18_1025_486"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 18,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '21.784090042114258px',
                                        textAlign: 'left',
                                        marginTop: 0,
                                        marginBottom: 2.5,
                                    }}
                                >
                                    No records found
                                </span>

                                <div
                                    id="t18_1025_487"
                                    style={{
                                        height: 38,
                                        width: 254,
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
                                        id="t18_1025_488"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 16,
                                            fontWeight: 400,
                                            color: 'rgba(167,167,167,1)',
                                            letterSpacing: 0,
                                            lineHeight: '19.363636016845703px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        We can’t find any item matching your
                                        search
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <MmFooter />
                </div>
            </div>
        </div>
    )
})
export default Studyabroad_1
