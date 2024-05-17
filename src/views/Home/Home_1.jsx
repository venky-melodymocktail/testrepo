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
import MmMainAd1 from '../../components/MmMainAd1.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmBlogCardMd from '../../components/MmBlogCardMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmBlogCardXs from '../../components/MmBlogCardXs.jsx'
import MmOfferedRoomCard from '../../components/MmOfferedRoomCard.jsx'
import MmOfferedRoomCardMd from '../../components/MmOfferedRoomCardMd.jsx'
import MmOfferedRoomCardS from '../../components/MmOfferedRoomCardS.jsx'
import GoogelAdType1 from '../../components/GoogelAdType1.jsx'
import MmCompanionOffS from '../../components/MmCompanionOffS.jsx'

const Home_1 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_520_3')
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
                id="t18_520_3"
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

                <div
                    id="t18_49_3"
                    style={{
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginTop: 1,
                        marginBottom: 0,
                    }}
                >
                    <div
                        id="t18_49_2"
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
                        {/* //////// services section /// */}
                        <div
                            id="t18_4_346"
                            style={{
                                minHeight: 190,
                                width: 1118,
                                backgroundColor: 'rgba(186,15,23,1.00)',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                display: 'flex',
                                paddingLeft: 161,
                                paddingRight: 161,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                paddingBottom: 10,
                                paddingTop: 5,
                            }}
                        >
                            {/* <div
                                id="t18_2021_388"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    paddingLeft: 27,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 12.5,
                                }}
                            >
                                <span
                                    id="t18_4_347"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 24,
                                        fontWeight: 600,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '29.045454025268555px',
                                        textAlign: 'left',
                                    }}
                                >
                                    Services
                                </span>
                            </div> */}

                            <div
                                id="t18_4_348"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 12.5,
                                    marginBottom: 0,
                                }}
                            >
                                <div
                                    id="t18_4_349"
                                    className={'mm-service1'}
                                    style={{
                                        width: 145,
                                        borderRadius: 12,
                                        backgroundColor: 'rgba(186,15,23,1.00)',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        paddingTop: 20,
                                        paddingBottom: 20,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 0,
                                        // marginRight: 69.5,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        dl.functions.viewsPlugin.showView(
                                            'rooms'
                                        )
                                        var currentPath =
                                            dl.functions.common.getLastPath()
                                        dl.functions.onLoadFunctions[
                                            currentPath
                                        ]()
                                    }}
                                >
                                    {/* {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/739108ae1165dc763982f258d39539f30165a0d0.png' !=
                                    '' ? (
                                        <img
                                            id="t18_4_350"
                                            style={{
                                                height: 64,
                                                width: 64,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 7.5,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/739108ae1165dc763982f258d39539f30165a0d0.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )} */}
                                    <div
                                        style={{
                                            height: 65,
                                            width: 65,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 10,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 35,
                                            backgroundColor: 'white',
                                        }}
                                    >
                                        <Lottie
                                            options={{
                                                loop: dl.changes
                                                    .homeServiceLottie.loop,
                                                path: dl.changes
                                                    .homeServiceLottie.source,
                                            }}
                                            height={70}
                                            width={70}
                                        />
                                    </div>

                                    <div
                                        id="t18_4_351"
                                        style={{
                                            height: 48,
                                            width: 96,
                                            flexDirection: 'row',
                                            alignItems: 'flex-end',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 10,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_4_352"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 15,
                                                fontWeight: 600,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight: '24px',
                                                textAlign: 'center',
                                                marginLeft: 0,
                                                marginRight: 4,
                                            }}
                                        >
                                            Rentals & Properties
                                        </span>

                                        <div
                                            id="t18_4_353"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingBottom: 5,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 4,
                                                marginRight: 0,
                                            }}
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_4_354"
                                                    style={{
                                                        height: 10.984375,
                                                        width: 6,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_4_355"
                                    className={'mm-service1'}
                                    style={{
                                        width: 145,
                                        borderRadius: 12,
                                        backgroundColor: 'rgba(186,15,23,1.00)',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        paddingTop: 20,
                                        paddingBottom: 20,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        // marginLeft: 69.5,
                                        // marginRight: 69.5,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        dl.functions.viewsPlugin.showView(
                                            'ridesharing'
                                        )
                                        var currentPath =
                                            dl.functions.common.getLastPath()
                                        dl.functions.onLoadFunctions[
                                            currentPath
                                        ]()
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/d3cfdac7ad304f44cedd7f242f4c6e151a0f654a.png' !=
                                    '' ? (
                                        <img
                                            id="t18_4_356"
                                            style={{
                                                height: 64,
                                                width: 64,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 10,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/d3cfdac7ad304f44cedd7f242f4c6e151a0f654a.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <div
                                        id="t18_4_357"
                                        style={{
                                            height: 48,
                                            width: 87,
                                            flexDirection: 'row',
                                            alignItems: 'flex-end',
                                            justifyContent: 'Center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 10,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_4_358"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 15,
                                                fontWeight: 600,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight: '24px',
                                                textAlign: 'center',
                                                marginLeft: 0,
                                                marginRight: 4,
                                            }}
                                        >
                                            Ride Sharing
                                        </span>

                                        <div
                                            id="t18_4_359"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingBottom: 5,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 4,
                                                marginRight: 0,
                                            }}
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_4_360"
                                                    style={{
                                                        height: 10.984375,
                                                        width: 6,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_4_361"
                                    className={'mm-service1'}
                                    style={{
                                        width: 145,
                                        borderRadius: 12,
                                        backgroundColor: 'rgba(186,15,23,1.00)',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        paddingTop: 20,
                                        paddingBottom: 20,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        // marginLeft: 69.5,
                                        // marginRight: 69.5,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        dl.functions.viewsPlugin.showView(
                                            'travelsuggestions'
                                        )
                                        var currentPath =
                                            dl.functions.common.getLastPath()
                                        dl.functions.onLoadFunctions[
                                            currentPath
                                        ]()

                                        var serviceSelector =
                                            dl.changes.serviceSelector.services

                                        for (var key in serviceSelector) {
                                            serviceSelector[key] =
                                                'rgba(186,15,23,1)'
                                        }

                                        serviceSelector['travelSuggestions'] =
                                            'rgba(156,18,24,1)'
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/f77235af01a95fcb13faf22d15e7a02291bb4c64.png' !=
                                    '' ? (
                                        <img
                                            id="t18_4_362"
                                            style={{
                                                height: 64,
                                                width: 64,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 10,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/f77235af01a95fcb13faf22d15e7a02291bb4c64.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <div
                                        id="t18_4_363"
                                        style={{
                                            height: 48,
                                            width: 93,
                                            flexDirection: 'row',
                                            alignItems: 'flex-end',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 10,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_4_364"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 15,
                                                fontWeight: 600,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight: '24px',
                                                textAlign: 'center',
                                                marginLeft: 0,
                                                marginRight: 4,
                                            }}
                                        >
                                            Travel Suggestions
                                        </span>

                                        <div
                                            id="t18_4_365"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingBottom: 5,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 4,
                                                marginRight: 0,
                                            }}
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_4_366"
                                                    style={{
                                                        height: 10.984375,
                                                        width: 6,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_4_367"
                                    className={'mm-service1'}
                                    style={{
                                        width: 145,
                                        borderRadius: 12,
                                        backgroundColor: 'rgba(186,15,23,1.00)',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        paddingTop: 20,
                                        paddingBottom: 20,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        // marginLeft: 69.5,
                                        marginRight: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        dl.functions.viewsPlugin.showView(
                                            'moviesuggestions'
                                        )
                                        var currentPath =
                                            dl.functions.common.getLastPath()
                                        dl.functions.onLoadFunctions[
                                            currentPath
                                        ]()

                                        var serviceSelector =
                                            dl.changes.serviceSelector.services

                                        for (var key in serviceSelector) {
                                            serviceSelector[key] =
                                                'rgba(186,15,23,1)'
                                        }

                                        serviceSelector['movieSuggestions'] =
                                            'rgba(156,18,24,1)'
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/62d03eb1f837828b14964d09b684b2c7c6ee78fe.png' !=
                                    '' ? (
                                        <img
                                            id="t18_4_368"
                                            style={{
                                                height: 64,
                                                width: 64,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 10,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/62d03eb1f837828b14964d09b684b2c7c6ee78fe.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <div
                                        id="t18_4_369"
                                        style={{
                                            height: 48,
                                            width: 93,
                                            flexDirection: 'row',
                                            alignItems: 'flex-end',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 10,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_4_370"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 15,
                                                fontWeight: 600,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight: '24px',
                                                textAlign: 'center',
                                                marginLeft: 0,
                                                marginRight: 4,
                                            }}
                                        >
                                            Movie Suggestions
                                        </span>

                                        <div
                                            id="t18_4_371"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingBottom: 5,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 4,
                                                marginRight: 0,
                                            }}
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_4_372"
                                                    style={{
                                                        height: 10.984375,
                                                        width: 6,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_4_374"
                                    // className={'mm-service2'}
                                    className={'mm-service1'}
                                    style={{
                                        width: 145,
                                        borderRadius: 12,
                                        // backgroundColor: 'rgba(156,18,24,1.00)',
                                        backgroundColor: 'rgba(186,15,23,1.00)',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        paddingTop: 20,
                                        paddingBottom: 20,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 0,
                                        // marginRight: 69.5,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        dl.functions.viewsPlugin.showView(
                                            'studyabroad'
                                        )
                                        var currentPath =
                                            dl.functions.common.getLastPath()
                                        dl.functions.onLoadFunctions[
                                            currentPath
                                        ]()
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b6f6f55edb0a59993b632f2dafa6e8f76855c82c.png' !=
                                    '' ? (
                                        <img
                                            id="t18_4_375"
                                            style={{
                                                height: 64,
                                                width: 64,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 10,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b6f6f55edb0a59993b632f2dafa6e8f76855c82c.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <div
                                        id="t18_4_376"
                                        style={{
                                            height: 48,
                                            width: 82,
                                            flexDirection: 'row',
                                            alignItems: 'flex-end',
                                            justifyContent: 'flex-end',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 10,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_4_377"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 15,
                                                fontWeight: 600,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight: '24px',
                                                textAlign: 'center',
                                                marginLeft: 0,
                                                marginRight: 4,
                                            }}
                                        >
                                            Study Abroad
                                        </span>

                                        <div
                                            id="t18_4_378"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingBottom: 5,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 4,
                                                marginRight: 0,
                                            }}
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_4_379"
                                                    style={{
                                                        height: 10.984375,
                                                        width: 6,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_4_380"
                                    className={'mm-service1'}
                                    // className={'mm-service2'}
                                    style={{
                                        width: 145,
                                        borderRadius: 12,
                                        // backgroundColor: 'rgba(156,18,24,1.00)',
                                        backgroundColor: 'rgba(186,15,23,1.00)',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        paddingTop: 20,
                                        paddingBottom: 20,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        // marginLeft: 69.5,
                                        // marginRight: 69.5,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        dl.functions.viewsPlugin.showView(
                                            'visaquestions'
                                        )
                                        var currentPath =
                                            dl.functions.common.getLastPath()
                                        dl.functions.onLoadFunctions[
                                            currentPath
                                        ]()
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/2b63129a861a59f04f03afd733e9d4e9324f56e4.png' !=
                                    '' ? (
                                        <img
                                            id="t18_4_381"
                                            style={{
                                                height: 64,
                                                width: 64,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 10,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/2b63129a861a59f04f03afd733e9d4e9324f56e4.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <div
                                        id="t18_4_382"
                                        style={{
                                            height: 48,
                                            width: 88,
                                            flexDirection: 'row',
                                            alignItems: 'flex-end',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 10,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_4_383"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 15,
                                                fontWeight: 600,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight: '24px',
                                                textAlign: 'center',
                                                marginLeft: 0,
                                                marginRight: 4,
                                            }}
                                        >
                                            Visa & Immigration
                                        </span>

                                        <div
                                            id="t18_4_384"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingBottom: 5,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 4,
                                                marginRight: 0,
                                            }}
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_4_385"
                                                    style={{
                                                        height: 10.984375,
                                                        width: 6,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_4_386"
                                    // className={'mm-service2'}
                                    className={'mm-service1'}
                                    style={{
                                        width: 145,
                                        borderRadius: 12,
                                        // backgroundColor: 'rgba(156,18,24,1.00)',
                                        backgroundColor: 'rgba(186,15,23,1.00)',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        paddingTop: 20,
                                        paddingBottom: 20,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        // marginLeft: 69.5,
                                        // marginRight: 69.5,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        dl.functions.viewsPlugin.showView(
                                            'travelcompanion'
                                        )
                                        var currentPath =
                                            dl.functions.common.getLastPath()
                                        dl.functions.onLoadFunctions[
                                            currentPath
                                        ]()

                                        var serviceSelector =
                                            dl.changes.serviceSelector.services

                                        for (var key in serviceSelector) {
                                            serviceSelector[key] =
                                                'rgba(186,15,23,1)'
                                        }

                                        serviceSelector['travelCompanion'] =
                                            'rgba(156,18,24,1)'
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ea78da19e331dafba285de348964be92f458cbf5.png' !=
                                    '' ? (
                                        <img
                                            id="t18_4_387"
                                            style={{
                                                height: 64,
                                                width: 64,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 10,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ea78da19e331dafba285de348964be92f458cbf5.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <div
                                        id="t18_4_388"
                                        style={{
                                            height: 48,
                                            width: 92,
                                            flexDirection: 'row',
                                            alignItems: 'flex-end',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 10,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_4_389"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 15,
                                                fontWeight: 600,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight: '24px',
                                                textAlign: 'center',
                                                marginLeft: 0,
                                                marginRight: 4,
                                            }}
                                        >
                                            Travel Companion
                                        </span>

                                        <div
                                            id="t18_4_390"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingBottom: 5,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 4,
                                                marginRight: 0,
                                            }}
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_4_391"
                                                    style={{
                                                        height: 10.984375,
                                                        width: 6,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_4_392"
                                    className={'mm-service1'}
                                    // className={'mm-service2'}
                                    style={{
                                        width: 145,
                                        borderRadius: 12,
                                        // backgroundColor: 'rgba(156,18,24,1.00)',
                                        backgroundColor: 'rgba(186,15,23,1.00)',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        paddingTop: 20,
                                        paddingBottom: 20,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        // marginLeft: 69.5,
                                        marginRight: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        window.open(
                                            'https://cleartaxfiler.com/'
                                        )
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ddae75667f9009b0371e548f3174f2f4553c0662.png' !=
                                    '' ? (
                                        <img
                                            id="t18_4_393"
                                            style={{
                                                height: 64,
                                                width: 64,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 10,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ddae75667f9009b0371e548f3174f2f4553c0662.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <div
                                        id="t18_4_394"
                                        style={{
                                            height: 48,
                                            width: 97,
                                            flexDirection: 'row',
                                            alignItems: 'flex-end',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 10,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_4_395"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 15,
                                                fontWeight: 600,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight: '24px',
                                                textAlign: 'center',
                                                marginLeft: 0,
                                                marginRight: 4,
                                            }}
                                        >
                                            Tax Services
                                        </span>

                                        <div
                                            id="t18_4_396"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingBottom: 5,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 4,
                                                marginRight: 0,
                                            }}
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_4_397"
                                                    style={{
                                                        height: 10.984375,
                                                        width: 6,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* // Google ad section */}

                        {/* <div style={{width:"100%"}}>
                            <GoogelAdType1/>
                        </div> */}

                        {/* //////// services section /// */}
                        <div
                            id="t18_1365_254"
                            style={{
                                height: 664,
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'hidden',
                                borderWidth: 0,
                                marginTop: 0,
                            }}
                        >
                            <div
                                id="t18_1365_253"
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
                                    id="t18_1365_247"
                                    style={{
                                        height: 583,
                                        width: 1440,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingBottom: 5,
                                        position: 'relative',
                                        overflow: 'hidden',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 15,
                                    }}
                                >
                                    <div
                                        id="t18_1365_245"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_1365_226"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingBottom: 5,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_1365_227"
                                                style={{
                                                    height: 583,
                                                    width: 1440,
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    justifyContent: 'flex-end',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                }}
                                            >
                                                <MmMainAd1
                                                    {...dl.changes.addSpaces
                                                        .HomeMain1.lg}
                                                    onClickHere={(val) => {
                                                        if (
                                                            dl.changes
                                                                .addSpaces[
                                                                'HomeMain1'
                                                            ].redirectURL
                                                        ) {
                                                            window.open(
                                                                dl.changes
                                                                    .addSpaces[
                                                                    'HomeMain1'
                                                                ].redirectURL,
                                                                '_blank'
                                                            )
                                                        }
                                                    }}
                                                    onClick={(val) => {
                                                        if (
                                                            dl.changes
                                                                .addSpaces[
                                                                'HomeMain1'
                                                            ].redirectURL
                                                        ) {
                                                            window.open(
                                                                dl.changes
                                                                    .addSpaces[
                                                                    'HomeMain1'
                                                                ].redirectURL,
                                                                '_blank'
                                                            )
                                                        }
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1365_232"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingBottom: 5,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_1365_233"
                                                style={{
                                                    height: 583,
                                                    width: 1440,
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    justifyContent: 'flex-end',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                }}
                                            >
                                                <MmMainAd1
                                                    {...dl.changes.addSpaces
                                                        .HomeMain2.lg}
                                                    onClickHere={(val) => {
                                                        if (
                                                            dl.changes
                                                                .addSpaces[
                                                                'HomeMain2'
                                                            ].redirectURL
                                                        ) {
                                                            window.open(
                                                                dl.changes
                                                                    .addSpaces[
                                                                    'HomeMain2'
                                                                ].redirectURL,
                                                                '_blank'
                                                            )
                                                        }
                                                    }}
                                                    onClick={(val) => {
                                                        if (
                                                            dl.changes
                                                                .addSpaces[
                                                                'HomeMain2'
                                                            ].redirectURL
                                                        ) {
                                                            window.open(
                                                                dl.changes
                                                                    .addSpaces[
                                                                    'HomeMain2'
                                                                ].redirectURL,
                                                                '_blank'
                                                            )
                                                        }
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1365_238"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingBottom: 5,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginRight: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_1365_239"
                                                style={{
                                                    height: 583,
                                                    width: 1440,
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    justifyContent: 'flex-end',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                }}
                                            >
                                                <MmMainAd1
                                                    {...dl.changes.addSpaces
                                                        .HomeMain3.lg}
                                                    onClickHere={(val) => {
                                                        if (
                                                            dl.changes
                                                                .addSpaces[
                                                                'HomeMain3'
                                                            ].redirectURL
                                                        ) {
                                                            window.open(
                                                                dl.changes
                                                                    .addSpaces[
                                                                    'HomeMain3'
                                                                ].redirectURL,
                                                                '_blank'
                                                            )
                                                        }
                                                    }}
                                                    onClick={(val) => {
                                                        if (
                                                            dl.changes
                                                                .addSpaces[
                                                                'HomeMain3'
                                                            ].redirectURL
                                                        ) {
                                                            window.open(
                                                                dl.changes
                                                                    .addSpaces[
                                                                    'HomeMain3'
                                                                ].redirectURL,
                                                                '_blank'
                                                            )
                                                        }
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_1365_225"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 15,
                                        marginBottom: 0,
                                    }}
                                >
                                    <div
                                        id="t18_1365_221"
                                        style={{
                                            height: '8px',
                                            width: '8px',
                                            borderRadius: 30,
                                            backgroundColor:
                                                dl.changes
                                                    .home1CarouselDotsColor[0],
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingLeft: 0,
                                            paddingRight: 0,
                                            paddingTop: 0,
                                            paddingBottom: 0,
                                            position: 'relative',
                                            borderWidth: 1,
                                            borderColor: 'rgba(186,15,23,1)',
                                            borderStyle: 'solid',
                                            marginLeft: 0,
                                            marginRight: 10,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            dl.functions.home1CarouselGoToIndex(
                                                0
                                            )
                                        }}
                                    ></div>

                                    <div
                                        id="t18_1365_222"
                                        style={{
                                            height: '8px',
                                            width: '8px',
                                            borderRadius: 30,
                                            backgroundColor:
                                                dl.changes
                                                    .home1CarouselDotsColor[1],
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingLeft: 0,
                                            paddingRight: 0,
                                            paddingTop: 0,
                                            paddingBottom: 0,
                                            position: 'relative',
                                            borderWidth: 1,
                                            borderColor: 'rgba(186,15,23,1)',
                                            borderStyle: 'solid',
                                            marginLeft: 10,
                                            marginRight: 10,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            dl.functions.home1CarouselGoToIndex(
                                                1
                                            )
                                        }}
                                    ></div>

                                    <div
                                        id="t18_1365_223"
                                        style={{
                                            height: '8px',
                                            width: '8px',
                                            borderRadius: 30,
                                            backgroundColor:
                                                dl.changes
                                                    .home1CarouselDotsColor[2],
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingLeft: 0,
                                            paddingRight: 0,
                                            paddingTop: 0,
                                            paddingBottom: 0,
                                            position: 'relative',
                                            borderWidth: 1,
                                            borderColor: 'rgba(186,15,23,1)',
                                            borderStyle: 'solid',
                                            marginLeft: 10,
                                            marginRight: 0,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            dl.functions.home1CarouselGoToIndex(
                                                2
                                            )
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>

                        <div
                            id="t18_4_373"
                            style={{
                                // height: 450,
                                width: '100%',
                                // backgroundColor: 'rgba(156,18,24,1.00)',
                                backgroundColor: 'white',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                // paddingLeft: 161,
                                // paddingRight: 161,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            {/* For latest cards of Rental make height 650 of the parent div */}
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    width: '100%',
                                    paddingTop: 60,
                                }}
                                className="angledGradeint-lr"
                            >
                                <div
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 30,
                                        fontWeight: 700,
                                        color: 'rgba(186,15,23,1)',
                                        letterSpacing: 0,
                                        lineHeight: '36.30681610107422px',
                                        textAlign: 'center',
                                        marginTop: 0,
                                        marginBottom: 20,
                                        width: '100%',
                                    }}
                                >
                                    <a
                                        style={{
                                            fontWeight: '400',
                                            color: 'rgba(140, 44, 35,1)',
                                            fontSize: 25,
                                        }}
                                    >
                                        Recently Uploaded
                                    </a>{' '}
                                    Rental{' '}
                                    <a
                                        style={{
                                            fontWeight: '400',
                                            color: 'rgba(140, 44, 35,1)',
                                            fontSize: 25,
                                        }}
                                    >
                                        posts
                                    </a>
                                </div>
                                <div
                                    style={{
                                        width: '90%',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    {dl.changes.latestHomeRental.map(
                                        (item, index) => {
                                            if (index >= 4) {
                                                return <></>
                                            }

                                            return (
                                                <div>
                                                    <MmOfferedRoomCardS
                                                        {...item}
                                                        {...dl.changes
                                                            .latestHomeRental}
                                                        onClickEdit={(
                                                            val
                                                        ) => {}}
                                                        onClickContact={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            var userToken =
                                                                dl.functions.common.getCookie(
                                                                    'userToken'
                                                                )
                                                            if (userToken) {
                                                                dl.changes.contactUSForm.serviceType =
                                                                    'rental'
                                                                dl.changes.contactUSForm.serviceId =
                                                                    dl.changes.latestHomeRental[
                                                                        index
                                                                    ]._id
                                                                dl.changes.contactUSForm.firstname =
                                                                    dl.changes.userDetail.firstName
                                                                dl.changes.contactUSForm.lastname =
                                                                    dl.changes.userDetail.lastName
                                                                dl.changes.contactUSForm.email =
                                                                    dl.changes.userDetail.email
                                                                if (
                                                                    dl.changes
                                                                        .userDetail
                                                                        .phone
                                                                        .length >
                                                                    12
                                                                ) {
                                                                    dl.changes.contactUSForm.countryCode =
                                                                        '+91'
                                                                    dl.changes.contactUSForm.phone =
                                                                        dl.changes.userDetail.phone.substring(
                                                                            3
                                                                        )
                                                                } else {
                                                                    dl.changes.contactUSForm.countryCode =
                                                                        '+1'
                                                                    dl.changes.contactUSForm.phone =
                                                                        dl.changes.userDetail.phone.substring(
                                                                            2
                                                                        )
                                                                }
                                                                dl.functions.modalsPlugin.openModal(
                                                                    'contactAdvertiserLg'
                                                                )
                                                            } else {
                                                                dl.functions.modalsPlugin.openModal(
                                                                    'loginLg'
                                                                )
                                                            }
                                                        }}
                                                        onClickDelete={(
                                                            val
                                                        ) => {}}
                                                        onClickBookMark={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            dl.functions.bookmarkAction(
                                                                'latestHomeRental',
                                                                index,
                                                                'rooms'
                                                            )
                                                        }}
                                                        onClickRemoveBookMark={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            dl.functions.bookmarkAction(
                                                                'latestHomeRental',
                                                                index,
                                                                'rooms'
                                                            )
                                                        }}
                                                        onClickPromote={(
                                                            val
                                                        ) => {}}
                                                        onClick={(val) => {
                                                            if (
                                                                item.rentalType ==
                                                                'Home'
                                                            ) {
                                                                var homeid =
                                                                    dl.changes
                                                                        .latestHomeRental[
                                                                        index
                                                                    ]._id
                                                                dl.functions.common.relativeRedirect(
                                                                    `offeredhomedetails?homeId=${homeid}`,
                                                                    true
                                                                )
                                                            } else {
                                                                var roomid =
                                                                    dl.changes
                                                                        .latestHomeRental[
                                                                        index
                                                                    ]._id
                                                                dl.functions.common.relativeRedirect(
                                                                    `offeredroomdetails?roomId=${roomid}`,
                                                                    true
                                                                )
                                                            }

                                                            // alert("here")
                                                        }}
                                                    />
                                                </div>
                                            )
                                        }
                                    )}
                                </div>
                            </div>

                            {/* For latest cards of Travel Companion make height 650 of the parent div */}
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    width: '100%',
                                    paddingTop: 40,
                                    marginTop: -5,
                                }}
                                className="angledGradeint-rl"
                            >
                                <div
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 30,
                                        fontWeight: 700,
                                        color: 'rgba(186,15,23,1)',
                                        letterSpacing: 0,
                                        lineHeight: '36.30681610107422px',
                                        textAlign: 'center',
                                        marginTop: 0,
                                        marginBottom: 20,
                                        width: '100%',
                                    }}
                                >
                                    <a
                                        style={{
                                            fontWeight: '400',
                                            color: 'rgba(140, 44, 35,1)',
                                            fontSize: 25,
                                        }}
                                    >
                                        Recently Uploaded
                                    </a>{' '}
                                    Travel Companion{' '}
                                    <a
                                        style={{
                                            fontWeight: '400',
                                            color: 'rgba(140, 44, 35,1)',
                                            fontSize: 25,
                                        }}
                                    >
                                        posts
                                    </a>
                                </div>
                                <div
                                    style={{
                                        width: '90%',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    {dl.changes.latestTravelCompanion.map(
                                        (item, index) => {
                                            if (index >= 4) {
                                                return <></>
                                            }

                                            return (
                                                <div>
                                                    <MmCompanionOffS
                                                        {...item}
                                                        {...dl.changes
                                                            .latestTravelCompanion}
                                                        onClickEdit={(
                                                            val
                                                        ) => {}}
                                                        onClickContact={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            var id =
                                                                dl.changes
                                                                    .latestTravelCompanion[
                                                                    index
                                                                ]._id
                                                            dl.functions.contactUsAction(
                                                                id,
                                                                'willBeATravelCompanion',
                                                                'small'
                                                            )
                                                        }}
                                                        onClickDelete={(
                                                            val
                                                        ) => {}}
                                                        onClick={(val) => {
                                                            if (
                                                                dl.changes
                                                                    .travelCompanionTypeSelector
                                                                    .value ==
                                                                'Wanted'
                                                            ) {
                                                                var tcId =
                                                                    dl.changes
                                                                        .latestTravelCompanion[
                                                                        index
                                                                    ]._id
                                                                dl.functions.common.relativeRedirect(
                                                                    `wantedtcdetails?tcId=${tcId}`,
                                                                    true
                                                                )
                                                            } else {
                                                                var tcId =
                                                                    dl.changes
                                                                        .latestTravelCompanion[
                                                                        index
                                                                    ]._id
                                                                dl.functions.common.relativeRedirect(
                                                                    `offeredtcdetails?tcId=${tcId}`,
                                                                    true
                                                                )
                                                            }
                                                        }}
                                                        onClickBookmark={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            dl.functions.bookmarkAction(
                                                                'latestTravelCompanion',
                                                                index,
                                                                'willbeatravelcompanions'
                                                            )
                                                        }}
                                                        onClickRemoveBookmark={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            dl.functions.bookmarkAction(
                                                                'latestTravelCompanion',
                                                                index,
                                                                'willbeatravelcompanions'
                                                            )
                                                        }}
                                                        onClickPromote={(
                                                            val
                                                        ) => {}}
                                                    />
                                                </div>
                                            )
                                        }
                                    )}
                                </div>
                            </div>

                            {/* <div
                                id="t18_4_374"
                                className={'mm-service2'}
                                style={{
                                    width: 175,
                                    borderRadius: 12,
                                    backgroundColor: 'rgba(156,18,24,1.00)',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    paddingTop: 20,
                                    paddingBottom: 20,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 69.5,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    dl.functions.viewsPlugin.showView(
                                        'studyabroad'
                                    )
                                    var currentPath =
                                        dl.functions.common.getLastPath()
                                    dl.functions.onLoadFunctions[currentPath]()
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b6f6f55edb0a59993b632f2dafa6e8f76855c82c.png' !=
                                '' ? (
                                    <img
                                        id="t18_4_375"
                                        style={{
                                            height: 74,
                                            width: 74,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 7.5,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b6f6f55edb0a59993b632f2dafa6e8f76855c82c.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <div
                                    id="t18_4_376"
                                    style={{
                                        height: 48,
                                        width: 82,
                                        flexDirection: 'row',
                                        alignItems: 'flex-end',
                                        justifyContent: 'flex-end',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 7.5,
                                        marginBottom: 0,
                                    }}
                                >
                                    <span
                                        id="t18_4_377"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 18,
                                            fontWeight: 600,
                                            color: 'rgba(255,255,255,1)',
                                            letterSpacing: 0,
                                            lineHeight: '24px',
                                            textAlign: 'center',
                                            marginLeft: 0,
                                            marginRight: 4,
                                        }}
                                    >
                                        Study Abroad
                                    </span>

                                    <div
                                        id="t18_4_378"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingBottom: 5,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 4,
                                            marginRight: 0,
                                        }}
                                    >
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png' !=
                                        '' ? (
                                            <img
                                                id="t18_4_379"
                                                style={{
                                                    height: 10.984375,
                                                    width: 6,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                }}
                                                src={
                                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div
                                id="t18_4_380"
                                className={'mm-service2'}
                                style={{
                                    width: 175,
                                    borderRadius: 12,
                                    backgroundColor: 'rgba(156,18,24,1.00)',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    paddingTop: 20,
                                    paddingBottom: 20,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 69.5,
                                    marginRight: 69.5,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    dl.functions.viewsPlugin.showView('faq')
                                    var currentPath =
                                        dl.functions.common.getLastPath()
                                    dl.functions.onLoadFunctions[currentPath]()
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/2b63129a861a59f04f03afd733e9d4e9324f56e4.png' !=
                                '' ? (
                                    <img
                                        id="t18_4_381"
                                        style={{
                                            height: 74,
                                            width: 74,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 7.5,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/2b63129a861a59f04f03afd733e9d4e9324f56e4.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <div
                                    id="t18_4_382"
                                    style={{
                                        height: 48,
                                        width: 118,
                                        flexDirection: 'row',
                                        alignItems: 'flex-end',
                                        justifyContent: 'flex-end',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 7.5,
                                        marginBottom: 0,
                                    }}
                                >
                                    <span
                                        id="t18_4_383"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 18,
                                            fontWeight: 600,
                                            color: 'rgba(255,255,255,1)',
                                            letterSpacing: 0,
                                            lineHeight: '24px',
                                            textAlign: 'center',
                                            marginLeft: 0,
                                            marginRight: 4,
                                        }}
                                    >
                                        Visa & Immigration
                                    </span>

                                    <div
                                        id="t18_4_384"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingBottom: 5,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 4,
                                            marginRight: 0,
                                        }}
                                    >
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png' !=
                                        '' ? (
                                            <img
                                                id="t18_4_385"
                                                style={{
                                                    height: 10.984375,
                                                    width: 6,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                }}
                                                src={
                                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div
                                id="t18_4_386"
                                className={'mm-service2'}
                                style={{
                                    width: 175,
                                    borderRadius: 12,
                                    backgroundColor: 'rgba(156,18,24,1.00)',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    paddingTop: 20,
                                    paddingBottom: 20,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 69.5,
                                    marginRight: 69.5,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    dl.functions.viewsPlugin.showView(
                                        'travelcompanion'
                                    )
                                    var currentPath =
                                        dl.functions.common.getLastPath()
                                    dl.functions.onLoadFunctions[currentPath]()

                                    var serviceSelector =
                                        dl.changes.serviceSelector.services

                                    for (var key in serviceSelector) {
                                        serviceSelector[key] =
                                            'rgba(186,15,23,1)'
                                    }

                                    serviceSelector['travelCompanion'] =
                                        'rgba(156,18,24,1)'
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ea78da19e331dafba285de348964be92f458cbf5.png' !=
                                '' ? (
                                    <img
                                        id="t18_4_387"
                                        style={{
                                            height: 74,
                                            width: 74,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 7.5,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ea78da19e331dafba285de348964be92f458cbf5.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <div
                                    id="t18_4_388"
                                    style={{
                                        height: 48,
                                        width: 122,
                                        flexDirection: 'row',
                                        alignItems: 'flex-end',
                                        justifyContent: 'flex-end',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 7.5,
                                        marginBottom: 0,
                                    }}
                                >
                                    <span
                                        id="t18_4_389"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 18,
                                            fontWeight: 600,
                                            color: 'rgba(255,255,255,1)',
                                            letterSpacing: 0,
                                            lineHeight: '24px',
                                            textAlign: 'center',
                                            marginLeft: 0,
                                            marginRight: 4,
                                        }}
                                    >
                                        Travel Companion
                                    </span>

                                    <div
                                        id="t18_4_390"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingBottom: 5,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 4,
                                            marginRight: 0,
                                        }}
                                    >
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png' !=
                                        '' ? (
                                            <img
                                                id="t18_4_391"
                                                style={{
                                                    height: 10.984375,
                                                    width: 6,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                }}
                                                src={
                                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div
                                id="t18_4_392"
                                className={'mm-service2'}
                                style={{
                                    width: 175,
                                    borderRadius: 12,
                                    backgroundColor: 'rgba(156,18,24,1.00)',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    paddingTop: 20,
                                    paddingBottom: 20,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 69.5,
                                    marginRight: 0,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    window.open('https://cleartaxfiler.com/')
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ddae75667f9009b0371e548f3174f2f4553c0662.png' !=
                                '' ? (
                                    <img
                                        id="t18_4_393"
                                        style={{
                                            height: 74,
                                            width: 74,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 7.5,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ddae75667f9009b0371e548f3174f2f4553c0662.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <div
                                    id="t18_4_394"
                                    style={{
                                        height: 48,
                                        width: 97,
                                        flexDirection: 'row',
                                        alignItems: 'flex-end',
                                        justifyContent: 'flex-end',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 7.5,
                                        marginBottom: 0,
                                    }}
                                >
                                    <span
                                        id="t18_4_395"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 18,
                                            fontWeight: 600,
                                            color: 'rgba(255,255,255,1)',
                                            letterSpacing: 0,
                                            lineHeight: '24px',
                                            textAlign: 'center',
                                            marginLeft: 0,
                                            marginRight: 4,
                                        }}
                                    >
                                        Tax Services
                                    </span>

                                    <div
                                        id="t18_4_396"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingBottom: 5,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 4,
                                            marginRight: 0,
                                        }}
                                    >
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png' !=
                                        '' ? (
                                            <img
                                                id="t18_4_397"
                                                style={{
                                                    height: 10.984375,
                                                    width: 6,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                }}
                                                src={
                                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                </div>
                            </div>*/}
                        </div>

                        <div
                            id="t18_4_398"
                            style={{
                                height: 492,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_1364_205"
                                style={{
                                    width: 1254,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    display: 'flex',
                                    paddingLeft: 93,
                                    paddingRight: 93,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/a232f2656d4dfabc3f42d2da2720746b18259512.png' !=
                                '' ? (
                                    <img
                                        id="t18_1364_206"
                                        style={{
                                            height: 23,
                                            width: 13,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: 0,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            dl.functions.home2CarouselScrollLeft()
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/a232f2656d4dfabc3f42d2da2720746b18259512.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <div
                                    id="t18_1364_213"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingBottom: 5,
                                        position: 'relative',
                                        overflow: 'hidden',
                                        borderWidth: 0,
                                    }}
                                >
                                    <div
                                        id="t18_1364_207"
                                        style={{
                                            height: 402,
                                            width: 1119,
                                            borderRadius: 25,
                                            backgroundColor:
                                                'rgba(255,255,255,1.00)',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_1364_208"
                                            style={{
                                                width: 3357,
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                            }}
                                        >
                                            {dl.changes.addSpaces.HomeSecondary1.lg
                                                ?.slice(4, -1)
                                                .trim() != '' ? (
                                                <img
                                                    id="t18_1364_209"
                                                    style={{
                                                        height: 402,
                                                        width: 1119,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                        marginLeft: 0,
                                                        cursor: 'pointer',
                                                    }}
                                                    onClick={(e) => {
                                                        if (
                                                            dl.changes
                                                                .addSpaces[
                                                                'HomeSecondary1'
                                                            ].redirectURL
                                                        ) {
                                                            window.open(
                                                                dl.changes
                                                                    .addSpaces[
                                                                    'HomeSecondary1'
                                                                ].redirectURL,
                                                                '_blank'
                                                            )
                                                        }
                                                    }}
                                                    src={dl.changes.addSpaces.HomeSecondary1.lg
                                                        ?.slice(4, -1)
                                                        .trim()}
                                                ></img>
                                            ) : (
                                                <></>
                                            )}

                                            {dl.changes.addSpaces.HomeSecondary2.lg
                                                ?.slice(4, -1)
                                                .trim() != '' ? (
                                                <img
                                                    id="t18_1364_210"
                                                    style={{
                                                        height: 402,
                                                        width: 1119,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                        cursor: 'pointer',
                                                    }}
                                                    onClick={(e) => {
                                                        if (
                                                            dl.changes
                                                                .addSpaces[
                                                                'HomeSecondary2'
                                                            ].redirectURL
                                                        ) {
                                                            window.open(
                                                                dl.changes
                                                                    .addSpaces[
                                                                    'HomeSecondary2'
                                                                ].redirectURL,
                                                                '_blank'
                                                            )
                                                        }
                                                    }}
                                                    src={dl.changes.addSpaces.HomeSecondary2.lg
                                                        ?.slice(4, -1)
                                                        .trim()}
                                                ></img>
                                            ) : (
                                                <></>
                                            )}

                                            {dl.changes.addSpaces.HomeSecondary3.lg
                                                ?.slice(4, -1)
                                                .trim() != '' ? (
                                                <img
                                                    id="t18_1364_211"
                                                    style={{
                                                        height: 402,
                                                        width: 1119,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                        marginRight: 0,
                                                        cursor: 'pointer',
                                                    }}
                                                    onClick={(e) => {
                                                        if (
                                                            dl.changes
                                                                .addSpaces[
                                                                'HomeSecondary3'
                                                            ].redirectURL
                                                        ) {
                                                            window.open(
                                                                dl.changes
                                                                    .addSpaces[
                                                                    'HomeSecondary3'
                                                                ].redirectURL,
                                                                '_blank'
                                                            )
                                                        }
                                                    }}
                                                    src={dl.changes.addSpaces.HomeSecondary3.lg
                                                        ?.slice(4, -1)
                                                        .trim()}
                                                ></img>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/541d91e6721516ef581510c75f166d7f1f788948.png' !=
                                '' ? (
                                    <img
                                        id="t18_1364_212"
                                        style={{
                                            height: 22.75,
                                            width: 13,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginRight: 0,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            dl.functions.home2CarouselScrollRight()
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/541d91e6721516ef581510c75f166d7f1f788948.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>

                        <div
                            id="t18_4_436"
                            style={{
                                height: 215,
                                width: 1440,
                                backgroundColor: 'rgba(186,15,23,1.00)',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingTop: 30,
                                paddingBottom: 30,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_4_437"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 12.5,
                                }}
                            >
                                <span
                                    id="t18_4_438"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 20,
                                        fontWeight: 500,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '24.204544067382812px',
                                        textAlign: 'left',
                                        marginLeft: 0,
                                        marginRight: 5,
                                    }}
                                >
                                    We have more services
                                </span>

                                <span
                                    id="t18_4_439"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 30,
                                        fontWeight: 700,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '36.30681610107422px',
                                        textAlign: 'left',
                                        marginLeft: 5,
                                        marginRight: 0,
                                    }}
                                >
                                    COMING SOON
                                </span>
                            </div>

                            <div
                                id="t18_629_271"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 12.5,
                                    marginBottom: 0,
                                }}
                            >
                                <div
                                    id="t18_4_441"
                                    className={'mm-service1'}
                                    style={{
                                        height: 129,
                                        width: 175,
                                        borderRadius: 12,
                                        backgroundColor: 'rgba(186,15,23,1.00)',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        paddingTop: 20,
                                        paddingBottom: 20,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 0,
                                        marginRight: 25,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {}}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/1e6b45215bec0d2bbb86ca5f3e6d0fdfaaf09503.png' !=
                                    '' ? (
                                        <img
                                            id="t18_976_101"
                                            style={{
                                                height: 74,
                                                width: 74,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 10,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/1e6b45215bec0d2bbb86ca5f3e6d0fdfaaf09503.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <div
                                        id="t18_4_443"
                                        style={{
                                            height: 48,
                                            width: 81,
                                            flexDirection: 'row',
                                            alignItems: 'flex-end',
                                            justifyContent: 'flex-end',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 10,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_4_444"
                                            style={{
                                                height: 48,
                                                flexDirection: 'row',
                                                alignItems: 'flex-end',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 4,
                                            }}
                                        >
                                            <span
                                                id="t18_4_445"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 20,
                                                    fontWeight: 600,
                                                    color: 'rgba(255,255,255,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '24px',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                Jobs
                                            </span>
                                        </div>

                                        <div
                                            id="t18_4_446"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingBottom: 5,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 4,
                                                marginRight: 0,
                                            }}
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_4_447"
                                                    style={{
                                                        height: 10.984375,
                                                        width: 6,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_4_448"
                                    className={'mm-service1'}
                                    style={{
                                        height: 129,
                                        width: 175,
                                        borderRadius: 12,
                                        backgroundColor: 'rgba(186,15,23,1.00)',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        paddingTop: 20,
                                        paddingBottom: 20,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 25,
                                        marginRight: 25,
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/51c723ffc6c563e59e66cfab7c33622d5a034cdf.png' !=
                                    '' ? (
                                        <img
                                            id="t18_976_102"
                                            style={{
                                                height: 74,
                                                width: 74,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 7.5,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/51c723ffc6c563e59e66cfab7c33622d5a034cdf.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <div
                                        id="t18_4_450"
                                        style={{
                                            height: 48,
                                            width: 123,
                                            flexDirection: 'row',
                                            alignItems: 'flex-end',
                                            justifyContent: 'flex-end',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 7.5,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_4_451"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 18,
                                                fontWeight: 600,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight: '24px',
                                                textAlign: 'center',
                                                marginLeft: 0,
                                                marginRight: 4,
                                            }}
                                        >
                                            IT Trainings & Courses
                                        </span>

                                        <div
                                            id="t18_4_452"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingBottom: 5,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 4,
                                                marginRight: 0,
                                            }}
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_4_453"
                                                    style={{
                                                        height: 10.984375,
                                                        width: 6,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_4_454"
                                    className={'mm-service1'}
                                    style={{
                                        height: 129,
                                        width: 175,
                                        borderRadius: 12,
                                        backgroundColor: 'rgba(186,15,23,1.00)',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        paddingTop: 20,
                                        paddingBottom: 20,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 25,
                                        marginRight: 25,
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b053ad8e1add9644e8ccdfabe37a4c88c0705afd.png' !=
                                    '' ? (
                                        <img
                                            id="t18_976_104"
                                            style={{
                                                height: 74,
                                                width: 74,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 7.5,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b053ad8e1add9644e8ccdfabe37a4c88c0705afd.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <div
                                        id="t18_4_456"
                                        style={{
                                            height: 48,
                                            width: 100,
                                            flexDirection: 'row',
                                            alignItems: 'flex-end',
                                            justifyContent: 'flex-end',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 7.5,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_4_457"
                                            style={{
                                                height: 48,
                                                flexDirection: 'row',
                                                alignItems: 'flex-end',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 4,
                                            }}
                                        >
                                            <span
                                                id="t18_4_458"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 18,
                                                    fontWeight: 600,
                                                    color: 'rgba(255,255,255,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '24px',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                Events
                                            </span>
                                        </div>

                                        <div
                                            id="t18_4_459"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingBottom: 5,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 4,
                                                marginRight: 0,
                                            }}
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_4_460"
                                                    style={{
                                                        height: 10.984375,
                                                        width: 6,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_4_461"
                                    className={'mm-service1'}
                                    style={{
                                        height: 129,
                                        width: 175,
                                        borderRadius: 12,
                                        backgroundColor: 'rgba(186,15,23,1.00)',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        paddingTop: 20,
                                        paddingBottom: 20,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 25,
                                        marginRight: 25,
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/a816f11963e00fa479497d1470f71a64ee3ac4a6.png' !=
                                    '' ? (
                                        <img
                                            id="t18_976_106"
                                            style={{
                                                height: 74,
                                                width: 74,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 7.5,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/a816f11963e00fa479497d1470f71a64ee3ac4a6.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <div
                                        id="t18_4_463"
                                        style={{
                                            height: 48,
                                            width: 133,
                                            flexDirection: 'row',
                                            alignItems: 'flex-end',
                                            justifyContent: 'flex-end',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 7.5,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_4_464"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 18,
                                                fontWeight: 600,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight: '24px',
                                                textAlign: 'center',
                                                marginLeft: 0,
                                                marginRight: 4,
                                            }}
                                        >
                                            Legal Consultancy
                                        </span>

                                        <div
                                            id="t18_4_465"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingBottom: 5,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 4,
                                                marginRight: 0,
                                            }}
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_4_466"
                                                    style={{
                                                        height: 10.984375,
                                                        width: 6,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_4_467"
                                    className={'mm-service1'}
                                    style={{
                                        height: 129,
                                        width: 175,
                                        borderRadius: 12,
                                        backgroundColor: 'rgba(186,15,23,1.00)',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        paddingTop: 20,
                                        paddingBottom: 20,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 25,
                                        marginRight: 25,
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/79c0c87c8a18251720b02af4e1904014dd0804df.png' !=
                                    '' ? (
                                        <img
                                            id="t18_976_105"
                                            style={{
                                                height: 74,
                                                width: 74,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 7.5,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/79c0c87c8a18251720b02af4e1904014dd0804df.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <div
                                        id="t18_4_469"
                                        style={{
                                            height: 48,
                                            width: 122,
                                            flexDirection: 'row',
                                            alignItems: 'flex-end',
                                            justifyContent: 'flex-end',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 7.5,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_4_470"
                                            style={{
                                                height: 48,
                                                flexDirection: 'row',
                                                alignItems: 'flex-end',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 4,
                                            }}
                                        >
                                            <span
                                                id="t18_4_471"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 18,
                                                    fontWeight: 600,
                                                    color: 'rgba(255,255,255,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '24px',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                Coupons
                                            </span>
                                        </div>

                                        <div
                                            id="t18_4_472"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingBottom: 5,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 4,
                                                marginRight: 0,
                                            }}
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_4_473"
                                                    style={{
                                                        height: 10.984375,
                                                        width: 6,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_4_474"
                                    className={'mm-service1'}
                                    style={{
                                        height: 129,
                                        width: 175,
                                        borderRadius: 12,
                                        backgroundColor: 'rgba(186,15,23,1.00)',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        paddingTop: 20,
                                        paddingBottom: 20,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 25,
                                        marginRight: 0,
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/6b8ab0af948d2b41f370472d83a420fb7fed87cf.png' !=
                                    '' ? (
                                        <img
                                            id="t18_976_107"
                                            style={{
                                                height: 74,
                                                width: 74,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 7.5,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/6b8ab0af948d2b41f370472d83a420fb7fed87cf.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <div
                                        id="t18_4_476"
                                        style={{
                                            height: 48,
                                            width: 123,
                                            flexDirection: 'row',
                                            alignItems: 'flex-end',
                                            justifyContent: 'flex-end',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 7.5,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_4_477"
                                            style={{
                                                height: 48,
                                                flexDirection: 'row',
                                                alignItems: 'flex-end',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 4,
                                            }}
                                        >
                                            <span
                                                id="t18_4_478"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 18,
                                                    fontWeight: 600,
                                                    color: 'rgba(255,255,255,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '24px',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                I Am Here
                                            </span>
                                        </div>

                                        <div
                                            id="t18_4_479"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingBottom: 5,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 4,
                                                marginRight: 0,
                                            }}
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_4_480"
                                                    style={{
                                                        height: 10.984375,
                                                        width: 6,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/398bdfdd88a5efd3d28b9020943e781655c36554.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            id="t18_4_411"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingTop: 20,
                                paddingBottom: 40,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_4_412"
                                style={{
                                    width: 1440,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 20,
                                }}
                            >
                                <span
                                    id="t18_4_413"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 30,
                                        fontWeight: 700,
                                        color: 'rgba(186,15,23,1)',
                                        letterSpacing: 0,
                                        lineHeight: '36.30681610107422px',
                                        textAlign: 'left',
                                        marginTop: 0,
                                        marginBottom: 20,
                                    }}
                                >
                                    Our Blog post
                                </span>

                                <div
                                    id="t18_4_414"
                                    className={' blogContainer'}
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 20,
                                        marginBottom: 0,
                                    }}
                                >
                                    <MmBlogCard
                                        {...dl.changes.blogsHome.blog1}
                                        onCreateBookmark={(val) => {
                                            val.stopPropagation()
                                            dl.functions.bookmarkAction(
                                                'blogsHome',
                                                'blog1',
                                                'blogs'
                                            )
                                        }}
                                        onRemoveBookmark={(val) => {
                                            val.stopPropagation()
                                            dl.functions.bookmarkAction(
                                                'blogsHome',
                                                'blog1',
                                                'blogs'
                                            )
                                        }}
                                        onClick={(val) => {
                                            var blogId =
                                                dl.changes.blogsHome.blog1._id
                                            dl.functions.common.relativeRedirect(
                                                `blogdetails?blogId=${blogId}`,
                                                true
                                            )
                                        }}
                                    />

                                    <MmBlogCard
                                        {...dl.changes.blogsHome.blog2}
                                        onCreateBookmark={(val) => {
                                            val.stopPropagation()
                                            dl.functions.bookmarkAction(
                                                'blogsHome',
                                                'blog2',
                                                'blogs'
                                            )
                                        }}
                                        onRemoveBookmark={(val) => {
                                            val.stopPropagation()
                                            dl.functions.bookmarkAction(
                                                'blogsHome',
                                                'blog2',
                                                'blogs'
                                            )
                                        }}
                                        onClick={(val) => {
                                            var blogId =
                                                dl.changes.blogsHome.blog2._id
                                            dl.functions.common.relativeRedirect(
                                                `blogdetails?blogId=${blogId}`,
                                                true
                                            )
                                        }}
                                    />

                                    <MmBlogCard
                                        {...dl.changes.blogsHome.blog3}
                                        onCreateBookmark={(val) => {
                                            val.stopPropagation()
                                            dl.functions.bookmarkAction(
                                                'blogsHome',
                                                'blog3',
                                                'blogs'
                                            )
                                        }}
                                        onRemoveBookmark={(val) => {
                                            val.stopPropagation()
                                            dl.functions.bookmarkAction(
                                                'blogsHome',
                                                'blog3',
                                                'blogs'
                                            )
                                        }}
                                        onClick={(val) => {
                                            var blogId =
                                                dl.changes.blogsHome.blog3._id
                                            dl.functions.common.relativeRedirect(
                                                `blogdetails?blogId=${blogId}`,
                                                true
                                            )
                                        }}
                                    />
                                </div>
                            </div>

                            <div
                                id="t18_4_433"
                                className={' hovereffectsignIn-btn'}
                                style={{
                                    height: 36,
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
                                    marginTop: 20,
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
                                    id="t18_4_434"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 16,
                                        fontWeight: 700,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '19.363636016845703px',
                                        textAlign: 'left',
                                    }}
                                >
                                    View All
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_4_492"
                            style={{
                                height: 137,
                                width: 1440,
                                backgroundColor: 'rgba(248,246,246,1.00)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_2024_720"
                                style={{
                                    width: 1247,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                }}
                            >
                                <div
                                    id="t18_4_493"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 0,
                                        marginRight: 106,
                                    }}
                                >
                                    <span
                                        id="t18_4_494"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 26,
                                            fontWeight: 700,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '45px',
                                            textAlign: 'left',
                                            marginTop: 0,
                                            marginBottom: 5,
                                        }}
                                    >
                                        Do you want to post an Ad?
                                    </span>

                                    <span
                                        id="t18_4_495"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 16,
                                            fontWeight: 500,
                                            color: 'rgba(113,113,113,1)',
                                            letterSpacing: 0,
                                            lineHeight: '19.363636016845703px',
                                            textAlign: 'left',
                                            marginTop: 5,
                                            marginBottom: 0,
                                        }}
                                    >
                                        Contact us here
                                    </span>
                                </div>

                                <div
                                    id="t18_4_496"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 106,
                                        marginRight: 0,
                                    }}
                                >
                                    <div
                                        id="t18_4_497"
                                        className={'hvr-grow'}
                                        style={{
                                            height: 71,
                                            width: 186,
                                            borderRadius: 12,
                                            backgroundColor:
                                                'rgba(255,255,255,1.00)',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingTop: 15,
                                            paddingBottom: 15,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 0,
                                            marginRight: 15,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            dl.functions.common.callNumber(
                                                '+14694434605'
                                            )
                                        }}
                                    >
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b95f8784c0fdf03d13bf3bb26d4b8c8a3249e50d.png' !=
                                        '' ? (
                                            <img
                                                id="t18_4_498"
                                                style={{
                                                    height: 30,
                                                    width: 30,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 10,
                                                }}
                                                src={
                                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b95f8784c0fdf03d13bf3bb26d4b8c8a3249e50d.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

                                        <span
                                            id="t18_4_499"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 18,
                                                fontWeight: 600,
                                                color: 'rgba(82,82,86,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '21.784090042114258px',
                                                textAlign: 'left',
                                                marginTop: 10,
                                                marginBottom: 0,
                                            }}
                                        >
                                            +1 4694434605
                                        </span>
                                    </div>

                                    <div
                                        id="t18_4_500"
                                        className={'hvr-grow'}
                                        style={{
                                            height: 71,
                                            width: 284,
                                            borderRadius: 12,
                                            backgroundColor:
                                                'rgba(255,255,255,1.00)',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingTop: 15,
                                            paddingBottom: 15,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 15,
                                            marginRight: 0,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            dl.functions.common.sendEmail(
                                                'admin@melodymocktail.com'
                                            )
                                        }}
                                    >
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/e2513dbd4a8460a472d4de84135c73a82a2555e5.png' !=
                                        '' ? (
                                            <img
                                                id="t18_4_501"
                                                style={{
                                                    height: 30,
                                                    width: 30,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 10,
                                                }}
                                                src={
                                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/e2513dbd4a8460a472d4de84135c73a82a2555e5.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

                                        <span
                                            id="t18_4_502"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 18,
                                                fontWeight: 600,
                                                color: 'rgba(82,82,86,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '21.784090042114258px',
                                                textAlign: 'left',
                                                marginTop: 10,
                                                marginBottom: 0,
                                            }}
                                        >
                                            admin@melodymocktail.com
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            id="t18_2024_723"
                            style={{
                                height: 452,
                                width: 1380,
                                backgroundImage:
                                    'url(https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/0da4373f790bb7bf8e643203680333c3b924cf99.png)',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                flexDirection: 'column',
                                alignItems: 'flex-end',
                                justifyContent: 'flex-end',
                                display: 'flex',
                                paddingRight: 60,
                                paddingBottom: 100,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_4_504"
                                style={{
                                    height: 272,
                                    width: 812,
                                    backgroundColor: 'rgba(29,26,5,.7)',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    display: 'flex',
                                    paddingLeft: 100,
                                    paddingRight: 100,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderRadius: 15,
                                    backdropFilter: 'blur(10px)',
                                }}
                            >
                                <div
                                    id="t18_2024_722"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 0,
                                        marginRight: 5,
                                    }}
                                >
                                    <span
                                        id="t18_4_505"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 40,
                                            fontWeight: 700,
                                            color: 'rgba(255,255,255,1)',
                                            letterSpacing: 0,
                                            lineHeight: '48.409088134765625px',
                                            textAlign: 'left',
                                            marginTop: 0,
                                            marginBottom: 5,
                                        }}
                                    >
                                        CONTACT US
                                    </span>

                                    <span
                                        id="t18_4_506"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 16,
                                            fontWeight: 400,
                                            color: 'rgba(255,255,255,1)',
                                            letterSpacing: 0,
                                            lineHeight: '19.363636016845703px',
                                            textAlign: 'left',
                                            marginTop: 5,
                                            marginBottom: 0,
                                        }}
                                    >
                                        Feel free to get in touch with us
                                    </span>
                                </div>

                                <div
                                    id="t18_2024_721"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 5,
                                        marginRight: 0,
                                    }}
                                >
                                    <div
                                        id="t18_4_508"
                                        className={'hvr-grow'}
                                        style={{
                                            borderRadius: 10,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            boxShadow:
                                                '0px 10px 20px rgba(0,0,0,0.07100000232458115)',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 0,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            dl.functions.common.callNumber(
                                                '+14694434605'
                                            )
                                        }}
                                    >
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/aeab48983fe260f59868f4ceabd1a13e6d06938e.png' !=
                                        '' ? (
                                            <img
                                                id="t18_4_509"
                                                style={{
                                                    height: 30,
                                                    width: 30,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 5,
                                                }}
                                                src={
                                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/aeab48983fe260f59868f4ceabd1a13e6d06938e.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

                                        <span
                                            id="t18_4_510"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 18,
                                                fontWeight: 600,
                                                color: 'rgba(248,246,246,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '21.784090042114258px',
                                                textAlign: 'left',
                                                marginLeft: 5,
                                                marginRight: 0,
                                            }}
                                        >
                                            +1 4694434605
                                        </span>
                                    </div>

                                    <div
                                        id="t18_4_511"
                                        className={'hvr-grow'}
                                        style={{
                                            borderRadius: 10,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            boxShadow:
                                                '0px 10px 20px rgba(0,0,0,0.07100000232458115)',
                                            borderWidth: 0,
                                            marginTop: 15,
                                            marginBottom: 0,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            dl.functions.common.sendEmail(
                                                'admin@melodymocktail.com'
                                            )
                                        }}
                                    >
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/254daf3266d78c805ac96b393d57ac2f20f9892c.png' !=
                                        '' ? (
                                            <img
                                                id="t18_4_512"
                                                style={{
                                                    height: 30,
                                                    width: 30,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 5,
                                                }}
                                                src={
                                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/254daf3266d78c805ac96b393d57ac2f20f9892c.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

                                        <span
                                            id="t18_4_513"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 18,
                                                fontWeight: 600,
                                                color: 'rgba(248,246,246,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '21.784090042114258px',
                                                textAlign: 'left',
                                                marginLeft: 5,
                                                marginRight: 0,
                                            }}
                                        >
                                            admin@melodymocktail.com
                                        </span>
                                    </div>

                                    <div
                                        id="t18_4_514"
                                        className={'hvr-grow'}
                                        style={{
                                            borderRadius: 10,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            boxShadow:
                                                '0px 10px 20px rgba(0,0,0,0.07100000232458115)',
                                            borderWidth: 0,
                                            marginTop: 15,
                                            marginBottom: 0,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            dl.functions.common.startWAChat(
                                                '+14694434605'
                                            )
                                        }}
                                    >
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/978075568f9c33788aba3c3da05049f4a168b3f8.png' !=
                                        '' ? (
                                            <img
                                                id="t18_4_515"
                                                style={{
                                                    height: 30,
                                                    width: 30,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 5,
                                                }}
                                                src={
                                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/978075568f9c33788aba3c3da05049f4a168b3f8.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

                                        <span
                                            id="t18_4_516"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 18,
                                                fontWeight: 600,
                                                color: 'rgba(248,246,246,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '21.784090042114258px',
                                                textAlign: 'left',
                                                marginLeft: 5,
                                                marginRight: 0,
                                            }}
                                        >
                                            Chat with us
                                        </span>
                                    </div>

                                    <div
                                        id="t18_4_514"
                                        className={'hvr-grow'}
                                        style={{
                                            borderRadius: 10,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            boxShadow:
                                                '0px 10px 20px rgba(0,0,0,0.07100000232458115)',
                                            borderWidth: 0,
                                            marginTop: 15,
                                            marginBottom: 0,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            window.open(
                                                'https://www.youtube.com/@melodymocktail',
                                                '_blank'
                                            )
                                        }}
                                    >
                                        {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/8e55563e-e0a8-4b6d-97c1-006cd6325f12.png' !=
                                        '' ? (
                                            <img
                                                id="t18_4_515"
                                                style={{
                                                    height: 30,
                                                    width: 30,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 5,
                                                }}
                                                src={
                                                    'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/8e55563e-e0a8-4b6d-97c1-006cd6325f12.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

                                        <span
                                            id="t18_4_516"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 18,
                                                fontWeight: 600,
                                                color: 'rgba(248,246,246,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '21.784090042114258px',
                                                textAlign: 'left',
                                                marginLeft: 5,
                                                marginRight: 0,
                                            }}
                                        >
                                            Subscribe
                                        </span>
                                    </div>

                                    <div
                                        id="t18_4_514"
                                        className={'hvr-grow'}
                                        style={{
                                            borderRadius: 10,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            boxShadow:
                                                '0px 10px 20px rgba(0,0,0,0.07100000232458115)',
                                            borderWidth: 0,
                                            marginTop: 15,
                                            marginBottom: 0,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            window.open(
                                                ' https://www.linkedin.com/company/melody-mocktail',
                                                '_blank'
                                            )
                                        }}
                                    >
                                        {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/8bf14b5a-ad4e-4662-874b-7afad4fd6caa.png' !=
                                        '' ? (
                                            <img
                                                id="t18_4_515"
                                                style={{
                                                    height: 30,
                                                    width: 30,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 5,
                                                }}
                                                src={
                                                    'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/8bf14b5a-ad4e-4662-874b-7afad4fd6caa.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

                                        <span
                                            id="t18_4_516"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 18,
                                                fontWeight: 600,
                                                color: 'rgba(248,246,246,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '21.784090042114258px',
                                                textAlign: 'left',
                                                marginLeft: 5,
                                                marginRight: 0,
                                            }}
                                        >
                                            Follow Us
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <MmFooter />
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Home_1
