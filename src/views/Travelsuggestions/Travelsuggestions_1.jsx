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
import MmFooter from '../../components/MmFooter.jsx'
import MmBlogCard from '../../components/MmBlogCard.jsx'
import MmServiceSelector from '../../components/MmServiceSelector.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmServiceSelectorMd from '../../components/MmServiceSelectorMd.jsx'
import MmFilterMd from '../../components/MmFilterMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmBlogCardMd from '../../components/MmBlogCardMd.jsx'
import MmServiceSelectorS from '../../components/MmServiceSelectorS.jsx'
import MmFilterS from '../../components/MmFilterS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmBlogCardXs from '../../components/MmBlogCardXs.jsx'
import MmServiceSelectorXs from '../../components/MmServiceSelectorXs.jsx'
import MmFilterXs from '../../components/MmFilterXs.jsx'

const Travelsuggestions_1 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_521_623')
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
                backgroundColor: 'rgba(255,255,255,1.00)',
            }}
        >
            <div
                id="t18_521_623"
                style={{
                    width: 1440,
                    backgroundColor: 'rgba(255,255,255,1.00)',
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
                <MmHeader
                    {...dl.changes.userDetail}
                    onChangeAddress={(val) => {
                        dl.functions.modalsPlugin.openModal('AddressPopupLg')
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

                        dl.functions.viewsPlugin.showView('travelsuggestions')
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

                        dl.functions.viewsPlugin.showView('moviesuggestions')
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

                        serviceSelector['travelCompanion'] = 'rgba(156,18,24,1)'
                    }}
                />

                <div
                    id="t18_2227_40"
                    style={{
                        width: 1440,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        paddingTop: 40,
                        paddingBottom: 40,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_2227_32"
                        style={{
                            height: 220,
                            width: 1320,
                            borderRadius: 15,
                            backgroundImage:
                                'url(https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/7de8b198cfae02c887293485afd5d52c786d8d02.png)',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
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
                            id="t18_2226_28"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 24,
                                fontWeight: 700,
                                color: 'rgba(255,255,255,1)',
                                letterSpacing: 0,
                                lineHeight: '29.045454025268555px',
                                textAlign: 'left',
                                marginTop: 0,
                                marginBottom: 7.5,
                            }}
                        >
                            Build Your Custom Travel Itinerary
                        </span>

                        <div
                            id="t18_2270_2"
                            style={{
                                width: 534,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 7.5,
                                marginBottom: 7.5,
                            }}
                        >
                            <span
                                id="t18_2227_29"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: 'rgba(255,255,255,1)',
                                    letterSpacing: 0,
                                    lineHeight: '16.94318199157715px',
                                    textAlign: 'center',
                                }}
                            >
                                Craft your personalized travel adventure with
                                ease – build your custom travel itinerary
                                tailored to your preferences, ensuring a
                                seamless and unforgettable journey.
                            </span>
                        </div>

                        <div
                            id="t18_2227_30"
                            style={{
                                height: 27,
                                width: 142,
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
                                marginTop: 7.5,
                                marginBottom: 0,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                window.open('https://ai.melodymocktail.com/')
                            }}
                        >
                            <span
                                id="t18_2227_31"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 18,
                                    fontWeight: 700,
                                    color: 'rgba(255,255,255,1)',
                                    letterSpacing: 0,
                                    lineHeight: '21.784090042114258px',
                                    textAlign: 'left',
                                }}
                            >
                                Start Now
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    id="t18_521_675"
                    style={{
                        height: -22,
                        width: 1420,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 73,
                        paddingBottom: 73,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        borderColor: 'rgba(207,206,206,1)',
                        borderBottomWidth: 1,
                        borderStyle: 'solid',
                    }}
                >
                    <div
                        id="t18_915_10315"
                        style={{
                            height: 50,
                            width: 762,
                            borderRadius: 50,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingLeft: 15,
                            paddingRight: 7,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 1,
                            borderColor: 'rgba(186,15,23,1)',
                            borderStyle: 'solid',
                        }}
                    >
                        <div
                            id="t18_915_10316"
                            style={{
                                width: 671,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 0,
                                marginRight: 9,
                            }}
                        >
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/70f5b72a34765deae5b34e6ad476040b1c4bda4c.png' !=
                            '' ? (
                                <img
                                    id="t18_915_10317"
                                    style={{
                                        height: 22,
                                        width: 22,
                                        display: 'flex',
                                        borderWidth: 0,
                                        marginLeft: 0,
                                        marginRight: 5,
                                    }}
                                    src={
                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/70f5b72a34765deae5b34e6ad476040b1c4bda4c.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}

                            <input
                                id="t18_915_10318"
                                placeholder="Search travel suggestion"
                                value={dl.changes.blogSearchString}
                                style={{
                                    height: '50px',
                                    width: '645px',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 5,
                                    marginRight: 0,
                                    cursor: 'pointer',
                                    itemSpacing: 10,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    fontFamily: 'Inter',
                                    fontSize: 20,
                                    color: 'rgba(113,113,113,1)',
                                    fontWeight: 400,
                                    textAlign: 'left',
                                }}
                                onChange={(val) => {
                                    val = val.target.value

                                    dl.changes.blogSearchString = val
                                }}
                                type="text"
                            ></input>
                        </div>

                        <div
                            id="t18_916_10372"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 9,
                                marginRight: 9,
                            }}
                        >
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/69c17245ea33f76ff74faf996cf2ee0ffac5b0d8.png' !=
                            '' ? (
                                <img
                                    id="t18_916_10371"
                                    style={{
                                        height: 15,
                                        width: 15,
                                        display: 'flex',
                                        borderWidth: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        dl.changes.blogSearchString = ''
                                        dl.functions.searchTravelSuggestion(
                                            dl.changes.blogSearchString
                                        )
                                    }}
                                    src={
                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/69c17245ea33f76ff74faf996cf2ee0ffac5b0d8.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}
                        </div>

                        <div
                            id="t18_915_10320"
                            style={{
                                height: 20,
                                width: 20,
                                borderRadius: 50,
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
                                marginLeft: 9,
                                marginRight: 0,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                var run = async () => {
                                    var res =
                                        await dl.functions.searchTravelSuggestion(
                                            dl.changes.blogSearchString
                                        )
                                    // alert(JSON.stringify(res))
                                }

                                run()
                            }}
                        >
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b279de17ff8955703e5cd02ce3887e12f106db6a.png' !=
                            '' ? (
                                <img
                                    id="t18_915_10321"
                                    style={{
                                        height: 21,
                                        width: 21,
                                        display: 'flex',
                                        borderWidth: 0,
                                    }}
                                    src={
                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b279de17ff8955703e5cd02ce3887e12f106db6a.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </div>

                <div
                    id="t18_541_165"
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
                        borderBottomWidth: 1,
                        borderStyle: 'solid',
                    }}
                >
                    <MMFilter
                        dataSource={dl.changes.travelSuggestionFilters}
                        onChange={(val) => {
                            dl.changes.travelSuggestionFilters = val
                            dl.functions.applyTravelSuggestionFilter()
                        }}
                    />

                    <div
                        id="t18_541_212"
                        style={{
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
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
                            id="t18_541_213"
                            style={{
                                width: 1005,
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingTop: 40,
                                paddingBottom: 40,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: 'center',
                                }}
                            >
                                {dl.changes.travelBlogsList.map(
                                    (item, index) => {
                                        return (
                                            <div>
                                                <MmBlogCard
                                                    {...item}
                                                    {...dl.changes
                                                        .travelBlogsList}
                                                    onCreateBookmark={(val) => {
                                                        val.stopPropagation()
                                                        dl.functions.bookmarkAction(
                                                            'travelBlogsList',
                                                            index,
                                                            'blogs'
                                                        )
                                                    }}
                                                    onRemoveBookmark={(val) => {
                                                        val.stopPropagation()
                                                        dl.functions.bookmarkAction(
                                                            'travelBlogsList',
                                                            index,
                                                            'blogs'
                                                        )
                                                    }}
                                                    onClick={(val) => {
                                                        var blogId =
                                                            dl.changes
                                                                .travelBlogsList[
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

                        <div
                            id="t18_1020_4216"
                            style={{
                                height: 397,
                                width: 950,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: dl.changes.travelNoDataVisible,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_1025_453"
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
                                        id="t18_1019_4211"
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
                                    id="t18_1020_4214"
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
                                        id="t18_1019_4212"
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
                                        id="t18_1020_4215"
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
                                            id="t18_1020_4213"
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
                                            We can’t find any item matching your
                                            search
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            id="t18_541_224"
                            style={{
                                height: 88,
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginBottom: 0,
                            }}
                        >
                            <div
                                id="t18_541_225"
                                style={{
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
                                }}
                            >
                                <MMPagination
                                    total={dl.changes.paginationState.total}
                                    active={dl.changes.paginationState.active}
                                    onChange={(val) => {
                                        dl.changes.paginationState.active = val
                                        var page = String(val)
                                        dl.functions.getTravelBlogs('9', page)
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <MmFooter />
            </div>
        </div>
    )
})
export default Travelsuggestions_1
