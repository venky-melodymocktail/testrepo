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

const Home_2 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 900
            const element = document.getElementById('t18_520_4')
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
                id="t18_520_4"
                style={{
                    width: 900,
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
                <div
                    id="t18_520_5"
                    style={{
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
                    <div
                        id="t18_520_6"
                        style={{
                            backgroundColor: 'rgba(255,255,255,1.00)',
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
                                dl.functions.modalsPlugin.openModal(
                                    'navigationMd'
                                )
                            }}
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

                        <div
                            id="t18_520_30"
                            style={{
                                height: 389,
                                width: 900,
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
                                id="t18_2086_1379"
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
                                    id="t18_2086_1374"
                                    className={' carousel'}
                                    style={{
                                        width: 802,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingBottom: 4,
                                        position: 'relative',
                                        overflow: 'scroll',
                                        borderWidth: 0,
                                        marginTop: 0,
                                    }}
                                >
                                    <div
                                        id="t18_2086_1370"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-end',
                                            display: 'flex',
                                            paddingBottom: 2,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                        }}
                                    >
                                        {dl.changes.addSpaces.HomeMain1.md.imageUrl
                                            ?.slice(4, -1)
                                            .trim() != '' ? (
                                            <img
                                                id="t18_2086_1371"
                                                className={' carousel-item'}
                                                style={{
                                                    height: 318,
                                                    width: 802,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    cursor: 'pointer',
                                                }}
                                                onClick={(e) => {
                                                    if (
                                                        dl.changes.addSpaces[
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
                                                src={dl.changes.addSpaces.HomeMain1.md.imageUrl
                                                    ?.slice(4, -1)
                                                    .trim()}
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

                                        {dl.changes.addSpaces.HomeMain2.md.imageUrl
                                            ?.slice(4, -1)
                                            .trim() != '' ? (
                                            <img
                                                id="t18_2086_1372"
                                                className={' carousel-item'}
                                                style={{
                                                    height: 318,
                                                    width: 802,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    cursor: 'pointer',
                                                }}
                                                onClick={(e) => {
                                                    if (
                                                        dl.changes.addSpaces[
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
                                                src={dl.changes.addSpaces.HomeMain2.md.imageUrl
                                                    ?.slice(4, -1)
                                                    .trim()}
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

                                        {dl.changes.addSpaces.HomeMain3.md.imageUrl
                                            ?.slice(4, -1)
                                            .trim() != '' ? (
                                            <img
                                                id="t18_2086_1373"
                                                className={' carousel-item'}
                                                style={{
                                                    height: 318,
                                                    width: 802,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginRight: 0,
                                                    cursor: 'pointer',
                                                }}
                                                onClick={(e) => {
                                                    if (
                                                        dl.changes.addSpaces[
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
                                                src={dl.changes.addSpaces.HomeMain3.md.imageUrl
                                                    ?.slice(4, -1)
                                                    .trim()}
                                            ></img>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                </div>

                                <div
                                    id="t18_2086_1375"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginBottom: 0,
                                        marginTop: '-20px',
                                    }}
                                >
                                    <div
                                        id="t18_2086_1376"
                                        style={{
                                            height: 7,
                                            width: 7,
                                            borderRadius: 30,
                                            backgroundColor:
                                                dl.changes.homemain1,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            borderWidth: 0,
                                            marginLeft: 0,
                                            marginRight: 2.5,
                                        }}
                                    ></div>

                                    <div
                                        id="t18_2086_1377"
                                        style={{
                                            height: 6,
                                            width: 6,
                                            borderRadius: 30,
                                            backgroundColor:
                                                dl.changes.homemain2,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            borderWidth: 0,
                                            marginLeft: 2.5,
                                            marginRight: 2.5,
                                        }}
                                    ></div>

                                    <div
                                        id="t18_2086_1378"
                                        style={{
                                            height: 6,
                                            width: 6,
                                            borderRadius: 30,
                                            backgroundColor:
                                                dl.changes.homemain3,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            borderWidth: 0,
                                            marginLeft: 2.5,
                                            marginRight: 0,
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>

                        <div
                            id="t18_520_43"
                            style={{
                                height: 240,
                                width: 750,
                                backgroundColor: 'rgba(186,15,23,1.00)',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                display: 'flex',
                                paddingLeft: 75,
                                paddingRight: 75,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_520_44"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingLeft: 32,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 7.5,
                                }}
                            >
                                <span
                                    id="t18_520_45"
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
                                    Services
                                </span>
                            </div>

                            <div
                                id="t18_520_46"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 7.5,
                                    marginBottom: 0,
                                }}
                            >
                                <div
                                    id="t18_520_47"
                                    className={'mm-service1'}
                                    style={{
                                        height: 177,
                                        width: 175,
                                        borderRadius: 12,
                                        backgroundColor: 'rgba(186,15,23,1.00)',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 0,
                                        marginRight: 10,
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

                                        var serviceSelector =
                                            dl.changes.serviceSelector.services

                                        for (var key in serviceSelector) {
                                            serviceSelector[key] =
                                                'rgba(186,15,23,1)'
                                        }

                                        // serviceSelector["travelSuggestions"]="rgba(156,18,24,1)"
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/739108ae1165dc763982f258d39539f30165a0d0.png' !=
                                    '' ? (
                                        <img
                                            id="t18_520_48"
                                            style={{
                                                height: 64,
                                                width: 64,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 10,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/739108ae1165dc763982f258d39539f30165a0d0.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <div
                                        id="t18_520_49"
                                        style={{
                                            height: 48,
                                            width: 116,
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
                                            id="t18_520_50"
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
                                            Rentals & Properties
                                        </span>

                                        <div
                                            id="t18_520_51"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingBottom: 5,
                                                position: 'relative',
                                                borderWidth: 0,
                                                marginLeft: 4,
                                                marginRight: 0,
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                <div
                                    id="t18_520_52"
                                    className={'mm-service1'}
                                    style={{
                                        height: 177,
                                        width: 175,
                                        borderRadius: 12,
                                        backgroundColor: 'rgba(186,15,23,1.00)',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 10,
                                        marginRight: 10,
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

                                        var serviceSelector =
                                            dl.changes.serviceSelector.services

                                        for (var key in serviceSelector) {
                                            serviceSelector[key] =
                                                'rgba(186,15,23,1)'
                                        }

                                        serviceSelector['ridesharing'] =
                                            'rgba(156,18,24,1)'
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/d3cfdac7ad304f44cedd7f242f4c6e151a0f654a.png' !=
                                    '' ? (
                                        <img
                                            id="t18_520_53"
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
                                        id="t18_520_54"
                                        style={{
                                            height: 48,
                                            width: 73,
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
                                            id="t18_520_55"
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
                                            Ride Sharing
                                        </span>
                                    </div>
                                </div>

                                <div
                                    id="t18_520_56"
                                    style={{
                                        height: 177,
                                        width: 175,
                                        borderRadius: 12,
                                        backgroundColor: 'rgba(186,15,23,1.00)',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 10,
                                        marginRight: 10,
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
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/f77235af01a95fcb13faf22d15e7a02291bb4c64.png' !=
                                    '' ? (
                                        <img
                                            id="t18_520_57"
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
                                        id="t18_520_58"
                                        style={{
                                            height: 48,
                                            width: 109,
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
                                            id="t18_520_59"
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
                                            Travel Suggestios
                                        </span>
                                    </div>
                                </div>

                                <div
                                    id="t18_520_60"
                                    style={{
                                        height: 177,
                                        width: 175,
                                        borderRadius: 12,
                                        backgroundColor: 'rgba(186,15,23,1.00)',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 10,
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
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/62d03eb1f837828b14964d09b684b2c7c6ee78fe.png' !=
                                    '' ? (
                                        <img
                                            id="t18_520_61"
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
                                        id="t18_520_62"
                                        style={{
                                            height: 48,
                                            width: 109,
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
                                            id="t18_520_63"
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
                                            Movie Suggestions
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            id="t18_520_64"
                            style={{
                                height: 240,
                                width: 900,
                                backgroundColor: 'rgba(156,18,24,1.00)',
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
                                id="t18_627_270"
                                style={{
                                    height: 197,
                                    width: 760,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                }}
                            >
                                <div
                                    id="t18_520_65"
                                    className={'mm-service2'}
                                    style={{
                                        height: 177,
                                        width: 175,
                                        borderRadius: 12,
                                        backgroundColor: 'rgba(156,18,24,1.00)',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 0,
                                        marginRight: 10,
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

                                        var serviceSelector =
                                            dl.changes.serviceSelector.services

                                        for (var key in serviceSelector) {
                                            serviceSelector[key] =
                                                'rgba(186,15,23,1)'
                                        }

                                        serviceSelector['studyabroad'] =
                                            'rgba(156,18,24,1)'
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b6f6f55edb0a59993b632f2dafa6e8f76855c82c.png' !=
                                    '' ? (
                                        <img
                                            id="t18_520_66"
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
                                        id="t18_520_67"
                                        style={{
                                            width: 68,
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
                                            id="t18_520_68"
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
                                            Study Abroad
                                        </span>
                                    </div>
                                </div>

                                <div
                                    id="t18_520_69"
                                    className={'mm-service2'}
                                    style={{
                                        height: 177,
                                        width: 175,
                                        borderRadius: 12,
                                        backgroundColor: 'rgba(156,18,24,1.00)',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 10,
                                        marginRight: 10,
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

                                        var serviceSelector =
                                            dl.changes.serviceSelector.services

                                        for (var key in serviceSelector) {
                                            serviceSelector[key] =
                                                'rgba(186,15,23,1)'
                                        }

                                        serviceSelector['visaquestions'] =
                                            'rgba(156,18,24,1)'
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/2b63129a861a59f04f03afd733e9d4e9324f56e4.png' !=
                                    '' ? (
                                        <img
                                            id="t18_520_70"
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
                                        id="t18_520_71"
                                        style={{
                                            width: 104,
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
                                            id="t18_520_72"
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
                                            Visa & Immigration
                                        </span>
                                    </div>
                                </div>

                                <div
                                    id="t18_520_73"
                                    className={'mm-service2'}
                                    style={{
                                        height: 177,
                                        width: 175,
                                        borderRadius: 12,
                                        backgroundColor: 'rgba(156,18,24,1.00)',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 10,
                                        marginRight: 10,
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
                                            id="t18_520_74"
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
                                        id="t18_520_75"
                                        style={{
                                            width: 108,
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
                                            id="t18_520_76"
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
                                            Travel Companion
                                        </span>
                                    </div>
                                </div>

                                <div
                                    id="t18_520_77"
                                    className={'mm-service2'}
                                    style={{
                                        height: 177,
                                        width: 175,
                                        borderRadius: 12,
                                        backgroundColor: 'rgba(156,18,24,1.00)',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 10,
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
                                            id="t18_520_78"
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
                                        id="t18_520_79"
                                        style={{
                                            width: 83,
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
                                            id="t18_520_80"
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
                                            Tax Services
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            id="t18_2086_1390"
                            style={{
                                height: 389,
                                width: 900,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginBottom: 0,
                            }}
                        >
                            <div
                                id="t18_2086_1391"
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
                                    id="t18_2086_1392"
                                    className={' carousel'}
                                    style={{
                                        width: 802,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingBottom: 4,
                                        position: 'relative',
                                        overflow: 'scroll',
                                        borderWidth: 0,
                                        marginTop: 0,
                                    }}
                                >
                                    <div
                                        id="t18_2086_1393"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-end',
                                            display: 'flex',
                                            paddingBottom: 2,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                        }}
                                    >
                                        {dl.changes.addSpaces.HomeSecondary1.md
                                            ?.slice(4, -1)
                                            .trim() != '' ? (
                                            <img
                                                id="t18_2086_1394"
                                                className={' carousel-item'}
                                                style={{
                                                    height: 318,
                                                    width: 802,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    cursor: 'pointer',
                                                }}
                                                onClick={(e) => {
                                                    if (
                                                        dl.changes.addSpaces[
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
                                                src={dl.changes.addSpaces.HomeSecondary1.md
                                                    ?.slice(4, -1)
                                                    .trim()}
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

                                        {dl.changes.addSpaces.HomeSecondary2.md
                                            ?.slice(4, -1)
                                            .trim() != '' ? (
                                            <img
                                                id="t18_2086_1395"
                                                className={' carousel-item'}
                                                style={{
                                                    height: 318,
                                                    width: 802,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    cursor: 'pointer',
                                                }}
                                                onClick={(e) => {
                                                    if (
                                                        dl.changes.addSpaces[
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
                                                src={dl.changes.addSpaces.HomeSecondary2.md
                                                    ?.slice(4, -1)
                                                    .trim()}
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

                                        {dl.changes.addSpaces.HomeSecondary3.md
                                            ?.slice(4, -1)
                                            .trim() != '' ? (
                                            <img
                                                id="t18_2086_1396"
                                                className={' carousel-item'}
                                                style={{
                                                    height: 318,
                                                    width: 802,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginRight: 0,
                                                    cursor: 'pointer',
                                                }}
                                                onClick={(e) => {
                                                    if (
                                                        dl.changes.addSpaces[
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
                                                src={dl.changes.addSpaces.HomeSecondary3.md
                                                    ?.slice(4, -1)
                                                    .trim()}
                                            ></img>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                </div>

                                <div
                                    id="t18_2086_1397"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginBottom: 0,
                                        marginTop: '-20px',
                                    }}
                                >
                                    <div
                                        id="t18_2086_1398"
                                        style={{
                                            height: 7,
                                            width: 7,
                                            borderRadius: 30,
                                            backgroundColor:
                                                dl.changes.homesecoundry1,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            borderWidth: 0,
                                            marginLeft: 0,
                                            marginRight: 2.5,
                                        }}
                                    ></div>

                                    <div
                                        id="t18_2086_1399"
                                        style={{
                                            height: 6,
                                            width: 6,
                                            borderRadius: 30,
                                            backgroundColor:
                                                dl.changes.homesecoundry2,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            borderWidth: 0,
                                            marginLeft: 2.5,
                                            marginRight: 2.5,
                                        }}
                                    ></div>

                                    <div
                                        id="t18_2086_1400"
                                        style={{
                                            height: 6,
                                            width: 6,
                                            borderRadius: 30,
                                            backgroundColor:
                                                dl.changes.homesecoundry3,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            borderWidth: 0,
                                            marginLeft: 2.5,
                                            marginRight: 0,
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    id="t18_520_108"
                    style={{
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginBottom: 0,
                    }}
                >
                    <div
                        id="t18_520_109"
                        style={{
                            height: 272,
                            width: 900,
                            backgroundColor: 'rgba(186,15,23,1.00)',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 0,
                        }}
                    >
                        <div
                            id="t18_520_110"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingLeft: 40,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 10,
                            }}
                        >
                            <span
                                id="t18_520_111"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 20,
                                    fontWeight: 400,
                                    color: 'rgba(255,255,255,1)',
                                    letterSpacing: 0,
                                    lineHeight: '24.204544067382812px',
                                    textAlign: 'left',
                                    marginLeft: 0,
                                    marginRight: 5,
                                }}
                            >
                                We have services
                            </span>

                            <span
                                id="t18_520_112"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 24,
                                    fontWeight: 700,
                                    color: 'rgba(255,255,255,1)',
                                    letterSpacing: 0,
                                    lineHeight: '29.045454025268555px',
                                    textAlign: 'left',
                                    marginLeft: 5,
                                    marginRight: 0,
                                }}
                            >
                                COMING SOON
                            </span>
                        </div>

                        <div
                            id="t18_520_113"
                            style={{
                                flexDirection: 'row',
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
                                id="t18_520_114"
                                className={'mm-service1'}
                                style={{
                                    height: 137,
                                    width: 130,
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
                                    marginRight: 10,
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/1e6b45215bec0d2bbb86ca5f3e6d0fdfaaf09503.png' !=
                                '' ? (
                                    <img
                                        id="t18_520_115"
                                        style={{
                                            height: 64,
                                            width: 64,
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
                                    id="t18_520_116"
                                    style={{
                                        height: 48,
                                        width: 47,
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
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
                                        id="t18_520_117"
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
                                        Jobs
                                    </span>
                                </div>
                            </div>

                            <div
                                id="t18_520_118"
                                className={'mm-service1'}
                                style={{
                                    height: 137,
                                    width: 130,
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
                                    marginLeft: 10,
                                    marginRight: 10,
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/51c723ffc6c563e59e66cfab7c33622d5a034cdf.png' !=
                                '' ? (
                                    <img
                                        id="t18_520_119"
                                        style={{
                                            height: 64,
                                            width: 64,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 10,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/51c723ffc6c563e59e66cfab7c33622d5a034cdf.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <div
                                    id="t18_520_120"
                                    style={{
                                        height: 48,
                                        width: 160,
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
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
                                        id="t18_520_121"
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
                                        IT Trainings & Courses
                                    </span>
                                </div>
                            </div>

                            <div
                                id="t18_520_122"
                                className={'mm-service1'}
                                style={{
                                    height: 137,
                                    width: 130,
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
                                    marginLeft: 10,
                                    marginRight: 10,
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b053ad8e1add9644e8ccdfabe37a4c88c0705afd.png' !=
                                '' ? (
                                    <img
                                        id="t18_520_123"
                                        style={{
                                            height: 64,
                                            width: 64,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 10,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b053ad8e1add9644e8ccdfabe37a4c88c0705afd.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <div
                                    id="t18_520_124"
                                    style={{
                                        height: 48,
                                        width: 66,
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
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
                                        id="t18_520_125"
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
                            </div>

                            <div
                                id="t18_520_126"
                                className={'mm-service1'}
                                style={{
                                    height: 137,
                                    width: 130,
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
                                    marginLeft: 10,
                                    marginRight: 10,
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/79c0c87c8a18251720b02af4e1904014dd0804df.png' !=
                                '' ? (
                                    <img
                                        id="t18_520_127"
                                        style={{
                                            height: 64,
                                            width: 64,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 10,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/79c0c87c8a18251720b02af4e1904014dd0804df.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <div
                                    id="t18_520_128"
                                    style={{
                                        height: 48,
                                        width: 88,
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
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
                                        id="t18_520_129"
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
                            </div>

                            <div
                                id="t18_520_131"
                                className={'mm-service2'}
                                style={{
                                    height: 137,
                                    width: 130,
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
                                    marginLeft: 10,
                                    marginRight: 10,
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/a816f11963e00fa479497d1470f71a64ee3ac4a6.png' !=
                                '' ? (
                                    <img
                                        id="t18_520_132"
                                        style={{
                                            height: 64,
                                            width: 64,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 10,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/a816f11963e00fa479497d1470f71a64ee3ac4a6.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <div
                                    id="t18_520_133"
                                    style={{
                                        width: 133,
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
                                        id="t18_520_134"
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
                                        id="t18_520_135"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingBottom: 5,
                                            position: 'relative',
                                            borderWidth: 0,
                                            marginLeft: 4,
                                            marginRight: 0,
                                        }}
                                    ></div>
                                </div>
                            </div>

                            <div
                                id="t18_520_136"
                                className={'mm-service2'}
                                style={{
                                    height: 137,
                                    width: 130,
                                    borderRadius: 12,
                                    backgroundColor: 'rgba(186,15,23,1.00)',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingTop: 20,
                                    paddingBottom: 20,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 10,
                                    marginRight: 0,
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/6b8ab0af948d2b41f370472d83a420fb7fed87cf.png' !=
                                '' ? (
                                    <img
                                        id="t18_520_137"
                                        style={{
                                            height: 74,
                                            width: 74,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 10,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/6b8ab0af948d2b41f370472d83a420fb7fed87cf.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <div
                                    id="t18_520_138"
                                    style={{
                                        height: 48,
                                        width: 89,
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
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
                                        id="t18_520_139"
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
                            </div>
                        </div>
                    </div>

                    <div
                        id="t18_520_91"
                        style={{
                            height: 558,
                            width: 900,
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
                            id="t18_520_92"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 26,
                                fontWeight: 700,
                                color: 'rgba(186,15,23,1)',
                                letterSpacing: 0,
                                lineHeight: '31.46590805053711px',
                                textAlign: 'left',
                                marginTop: 0,
                                marginBottom: 15,
                            }}
                        >
                            Our Blog post
                        </span>

                        <div
                            id="t18_521_1193"
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
                                    var blogId = dl.changes.blogsHome.blog1._id
                                    dl.functions.common.relativeRedirect(
                                        `blogdetails?blogId=${blogId}`,
                                        true
                                    )
                                }}
                            />

                            <MmBlogCardMd
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
                                    var blogId = dl.changes.blogsHome.blog2._id
                                    dl.functions.common.relativeRedirect(
                                        `blogdetails?blogId=${blogId}`,
                                        true
                                    )
                                }}
                            />

                            <MmBlogCardMd
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
                                    var blogId = dl.changes.blogsHome.blog3._id
                                    dl.functions.common.relativeRedirect(
                                        `blogdetails?blogId=${blogId}`,
                                        true
                                    )
                                }}
                            />
                        </div>

                        <div
                            id="t18_520_106"
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
                                id="t18_520_107"
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
                        id="t18_520_147"
                        style={{
                            height: 121,
                            width: 750,
                            backgroundColor: 'rgba(248,246,246,1.00)',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            display: 'flex',
                            paddingLeft: 75,
                            paddingRight: 75,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_520_148"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 0,
                            }}
                        >
                            <span
                                id="t18_520_149"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 20,
                                    fontWeight: 700,
                                    color: 'rgba(0,0,0,1)',
                                    letterSpacing: 0,
                                    lineHeight: '45px',
                                    textAlign: 'left',
                                    marginTop: 0,
                                }}
                            >
                                Do you want to post an Ad?
                            </span>

                            <span
                                id="t18_520_150"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: 'rgba(113,113,113,1)',
                                    letterSpacing: 0,
                                    lineHeight: '16.94318199157715px',
                                    textAlign: 'left',
                                    marginBottom: 0,
                                }}
                            >
                                Contact us here
                            </span>
                        </div>

                        <div
                            id="t18_520_151"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginRight: 0,
                            }}
                        >
                            <div
                                id="t18_520_152"
                                className={'hvr-grow'}
                                style={{
                                    height: 51,
                                    width: 152,
                                    borderRadius: 12,
                                    backgroundColor: 'rgba(255,255,255,1.00)',
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
                                    marginRight: 10,
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
                                        id="t18_520_153"
                                        style={{
                                            height: 28,
                                            width: 28,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 5,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b95f8784c0fdf03d13bf3bb26d4b8c8a3249e50d.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <span
                                    id="t18_520_154"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 14,
                                        fontWeight: 600,
                                        color: 'rgba(82,82,86,1)',
                                        letterSpacing: 0,
                                        lineHeight: '16.94318199157715px',
                                        textAlign: 'left',
                                        marginTop: 5,
                                        marginBottom: 0,
                                    }}
                                >
                                    +1 4694434605
                                </span>
                            </div>

                            <div
                                id="t18_520_155"
                                className={'hvr-grow'}
                                style={{
                                    height: 51,
                                    width: 217,
                                    borderRadius: 12,
                                    backgroundColor: 'rgba(255,255,255,1.00)',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingTop: 15,
                                    paddingBottom: 15,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 10,
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
                                        id="t18_520_156"
                                        style={{
                                            height: 28,
                                            width: 28,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 5,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/e2513dbd4a8460a472d4de84135c73a82a2555e5.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <span
                                    id="t18_520_157"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 14,
                                        fontWeight: 600,
                                        color: 'rgba(82,82,86,1)',
                                        letterSpacing: 0,
                                        lineHeight: '16.94318199157715px',
                                        textAlign: 'left',
                                        marginTop: 5,
                                        marginBottom: 0,
                                    }}
                                >
                                    admin@melodymocktail.com
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        id="t18_2022_410"
                        style={{
                            height: 309,
                            width: 850,
                            backgroundImage:
                                'url(https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/d8b32c62df0cf2799cf4194007082a569aafc565.png)',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                            display: 'flex',
                            paddingRight: 50,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_520_159"
                            style={{
                                height: 238,
                                width: 637,
                                backgroundColor: 'rgba(29,26,5,0.7)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                display: 'flex',
                                paddingLeft: 70,
                                paddingRight: 70,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                borderRadius: 10,
                                backdropFilter: 'blur(10px)',
                            }}
                        >
                            <div
                                id="t18_2022_390"
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
                                    id="t18_520_160"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 28,
                                        fontWeight: 700,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '33.8863639831543px',
                                        textAlign: 'left',
                                        marginTop: 0,
                                        marginBottom: 5,
                                    }}
                                >
                                    CONTACT US
                                </span>

                                <span
                                    id="t18_520_161"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 400,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
                                        textAlign: 'left',
                                        marginTop: 5,
                                        marginBottom: 0,
                                    }}
                                >
                                    Feel free to get in touch with us
                                </span>
                            </div>

                            <div
                                id="t18_2022_389"
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
                                    id="t18_520_163"
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
                                            id="t18_520_164"
                                            style={{
                                                height: 28,
                                                width: 28,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 7.5,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/aeab48983fe260f59868f4ceabd1a13e6d06938e.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <span
                                        id="t18_520_165"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 15,
                                            fontWeight: 600,
                                            color: 'rgba(248,246,246,1)',
                                            letterSpacing: 0,
                                            lineHeight: '18.15340805053711px',
                                            textAlign: 'left',
                                            marginLeft: 7.5,
                                            marginRight: 0,
                                        }}
                                    >
                                        +1 4694434605
                                    </span>
                                </div>

                                <div
                                    id="t18_520_166"
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
                                            id="t18_520_167"
                                            style={{
                                                height: 28,
                                                width: 28,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 7.5,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/254daf3266d78c805ac96b393d57ac2f20f9892c.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <span
                                        id="t18_520_168"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 15,
                                            fontWeight: 600,
                                            color: 'rgba(248,246,246,1)',
                                            letterSpacing: 0,
                                            lineHeight: '18.15340805053711px',
                                            textAlign: 'left',
                                            marginLeft: 7.5,
                                            marginRight: 0,
                                        }}
                                    >
                                        admin@melodymocktail.com
                                    </span>
                                </div>

                                <div
                                    id="t18_520_169"
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
                                            id="t18_520_170"
                                            style={{
                                                height: 28,
                                                width: 28,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 7.5,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/978075568f9c33788aba3c3da05049f4a168b3f8.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <span
                                        id="t18_520_171"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 15,
                                            fontWeight: 600,
                                            color: 'rgba(248,246,246,1)',
                                            letterSpacing: 0,
                                            lineHeight: '18.15340805053711px',
                                            textAlign: 'left',
                                            marginLeft: 7.5,
                                            marginRight: 0,
                                        }}
                                    >
                                        Chat with us
                                    </span>
                                </div>

                                <div
                                    id="t18_520_169"
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
                                            id="t18_520_170"
                                            style={{
                                                height: 28,
                                                width: 28,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 7.5,
                                            }}
                                            src={
                                                'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/8e55563e-e0a8-4b6d-97c1-006cd6325f12.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <span
                                        id="t18_520_171"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 15,
                                            fontWeight: 600,
                                            color: 'rgba(248,246,246,1)',
                                            letterSpacing: 0,
                                            lineHeight: '18.15340805053711px',
                                            textAlign: 'left',
                                            marginLeft: 7.5,
                                            marginRight: 0,
                                        }}
                                    >
                                        Subscribe
                                    </span>
                                </div>

                                <div
                                    id="t18_520_169"
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
                                            id="t18_520_170"
                                            style={{
                                                height: 28,
                                                width: 28,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 7.5,
                                            }}
                                            src={
                                                'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/8bf14b5a-ad4e-4662-874b-7afad4fd6caa.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <span
                                        id="t18_520_171"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 15,
                                            fontWeight: 600,
                                            color: 'rgba(248,246,246,1)',
                                            letterSpacing: 0,
                                            lineHeight: '18.15340805053711px',
                                            textAlign: 'left',
                                            marginLeft: 7.5,
                                            marginRight: 0,
                                        }}
                                    >
                                        Follow Us
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <MmFooterMd />
                </div>
            </div>
        </div>
    )
})
export default Home_2
