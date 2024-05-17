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

const Home_3 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 620
            const element = document.getElementById('t18_520_196')
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
                id="t18_520_196"
                style={{
                    width: 620,
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
                <MmHeaderS
                    {...dl.changes.userDetail}
                    onChangeAddress={(val) => {
                        dl.functions.modalsPlugin.openModal('AddressPopupS')
                    }}
                    onClickMenu={(val) => {}}
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
                    id="t18_520_221"
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
                        id="t18_2082_1306"
                        style={{
                            height: 325,
                            width: 600,
                            flexDirection: 'column',
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
                            marginTop: 0,
                        }}
                    >
                        <div
                            id="t18_2082_1307"
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
                                id="t18_2082_1308"
                                className={' carousel'}
                                style={{
                                    width: 539,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingBottom: 3,
                                    position: 'relative',
                                    overflow: 'scroll',
                                    borderWidth: 0,
                                    marginTop: 0,
                                }}
                            >
                                <div
                                    id="t18_2082_1309"
                                    style={{
                                        width: 539,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingBottom: 2,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                    }}
                                >
                                    {dl.changes.addSpaces.HomeMain1.sm.imageUrl
                                        ?.slice(4, -1)
                                        .trim() != '' ? (
                                        <img
                                            id="t18_2082_1310"
                                            className={' carousel-item'}
                                            style={{
                                                height: 280,
                                                width: 550,
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
                                                        dl.changes.addSpaces[
                                                            'HomeMain1'
                                                        ].redirectURL,
                                                        '_blank'
                                                    )
                                                }
                                            }}
                                            src={dl.changes.addSpaces.HomeMain1.sm.imageUrl
                                                ?.slice(4, -1)
                                                .trim()}
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    {dl.changes.addSpaces.HomeMain2.sm.imageUrl
                                        ?.slice(4, -1)
                                        .trim() != '' ? (
                                        <img
                                            id="t18_2082_1311"
                                            className={' carousel-item'}
                                            style={{
                                                height: 280,
                                                width: 550,
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
                                                        dl.changes.addSpaces[
                                                            'HomeMain2'
                                                        ].redirectURL,
                                                        '_blank'
                                                    )
                                                }
                                            }}
                                            src={dl.changes.addSpaces.HomeMain2.sm.imageUrl
                                                ?.slice(4, -1)
                                                .trim()}
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    {dl.changes.addSpaces.HomeMain3.sm.imageUrl
                                        ?.slice(4, -1)
                                        .trim() != '' ? (
                                        <img
                                            id="t18_2082_1312"
                                            className={' carousel-item'}
                                            style={{
                                                height: 280,
                                                width: 550,
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
                                                        dl.changes.addSpaces[
                                                            'HomeMain3'
                                                        ].redirectURL,
                                                        '_blank'
                                                    )
                                                }
                                            }}
                                            src={dl.changes.addSpaces.HomeMain3.sm.imageUrl
                                                ?.slice(4, -1)
                                                .trim()}
                                        ></img>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </div>

                            <div
                                id="t18_2082_1313"
                                style={{
                                    height: 6,
                                    width: 26,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginBottom: 0,
                                    marginTop: '-16px',
                                }}
                            >
                                <div
                                    id="t18_2082_1314"
                                    style={{
                                        height: 6,
                                        width: 6,
                                        borderRadius: 30,
                                        backgroundColor: dl.changes.homemain1,
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
                                    id="t18_2082_1315"
                                    style={{
                                        height: 5,
                                        width: 5,
                                        borderRadius: 30,
                                        backgroundColor: dl.changes.homemain2,
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
                                    id="t18_2082_1316"
                                    style={{
                                        height: 5,
                                        width: 5,
                                        borderRadius: 30,
                                        backgroundColor: dl.changes.homemain3,
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
                        id="t18_520_235"
                        style={{
                            height: 272,
                            width: 470,
                            backgroundColor: 'rgba(186,15,23,1.00)',
                            flexDirection: 'column',
                            alignItems: 'center',
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
                            id="t18_520_236"
                            style={{
                                width: 126,
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 7.5,
                            }}
                        >
                            <div
                                id="t18_520_237"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                }}
                            >
                                <span
                                    id="t18_520_238"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 26,
                                        fontWeight: 700,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '31.46590805053711px',
                                        textAlign: 'left',
                                    }}
                                >
                                    Services
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_520_239"
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
                                id="t18_520_240"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 5,
                                }}
                            >
                                <div
                                    id="t18_520_241"
                                    className={'mm-service1'}
                                    style={{
                                        height: 176,
                                        width: 130,
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
                                        marginRight: 5,
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
                                            id="t18_520_242"
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
                                        id="t18_520_243"
                                        style={{
                                            height: 48,
                                            width: 116,
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
                                            id="t18_520_244"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 16,
                                                fontWeight: 600,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight: '24px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            Rentals & Properties
                                        </span>
                                    </div>
                                </div>

                                <div
                                    id="t18_520_246"
                                    className={'mm-service1'}
                                    style={{
                                        height: 176,
                                        width: 130,
                                        borderRadius: 12,
                                        backgroundColor: 'rgba(186,15,23,1.00)',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 5,
                                        marginRight: 0,
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
                                            id="t18_520_247"
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
                                        id="t18_520_248"
                                        style={{
                                            height: 48,
                                            width: 73,
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
                                            id="t18_520_249"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 16,
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
                            </div>

                            <div
                                id="t18_520_250"
                                style={{
                                    flexDirection: 'row',
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
                                    id="t18_520_251"
                                    style={{
                                        height: 136,
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
                                        marginRight: 5,
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
                                            id="t18_520_252"
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
                                        id="t18_520_253"
                                        style={{
                                            height: 48,
                                            width: 109,
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
                                            id="t18_520_254"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 16,
                                                fontWeight: 600,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight: '24px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            Travel Suggestions
                                        </span>
                                    </div>
                                </div>

                                <div
                                    id="t18_520_255"
                                    style={{
                                        height: 136,
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
                                        marginLeft: 5,
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
                                            id="t18_520_256"
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
                                        id="t18_520_257"
                                        style={{
                                            height: 48,
                                            width: 109,
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
                                            id="t18_520_258"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 16,
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
                    </div>

                    <div
                        id="t18_520_259"
                        style={{
                            width: 470,
                            backgroundColor: 'rgba(156,18,24,1.00)',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            paddingLeft: 75,
                            paddingRight: 75,
                            paddingTop: 20,
                            paddingBottom: 20,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginBottom: 0,
                        }}
                    >
                        <div
                            id="t18_520_260"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 0,
                                marginRight: 5,
                            }}
                        >
                            <div
                                id="t18_520_261"
                                className={'mm-service2'}
                                style={{
                                    height: 136,
                                    width: 130,
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
                                    marginRight: 5,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    dl.functions.viewsPlugin.showView(
                                        'studyabroad'
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

                                    serviceSelector['studyabroad'] =
                                        'rgba(156,18,24,1)'
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b6f6f55edb0a59993b632f2dafa6e8f76855c82c.png' !=
                                '' ? (
                                    <img
                                        id="t18_520_262"
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
                                    id="t18_520_263"
                                    style={{
                                        height: 48,
                                        width: 68,
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
                                        id="t18_520_264"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 16,
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
                                id="t18_520_265"
                                className={'mm-service2'}
                                style={{
                                    height: 136,
                                    width: 130,
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
                                    marginLeft: 5,
                                    marginRight: 0,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    dl.functions.viewsPlugin.showView(
                                        'visaquestions'
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

                                    serviceSelector['visaquestions'] =
                                        'rgba(156,18,24,1)'
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/2b63129a861a59f04f03afd733e9d4e9324f56e4.png' !=
                                '' ? (
                                    <img
                                        id="t18_520_266"
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
                                    id="t18_520_267"
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
                                        id="t18_520_268"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 16,
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
                        </div>

                        <div
                            id="t18_520_269"
                            style={{
                                flexDirection: 'row',
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
                                id="t18_520_270"
                                className={'mm-service2'}
                                style={{
                                    height: 136,
                                    width: 130,
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
                                    marginRight: 5,
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
                                        id="t18_520_271"
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
                                    id="t18_520_272"
                                    style={{
                                        height: 48,
                                        width: 108,
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
                                        id="t18_520_273"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 16,
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
                                id="t18_520_274"
                                className={'mm-service2'}
                                style={{
                                    height: 136,
                                    width: 130,
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
                                    marginLeft: 5,
                                    marginRight: 0,
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ddae75667f9009b0371e548f3174f2f4553c0662.png' !=
                                '' ? (
                                    <img
                                        id="t18_520_275"
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
                                    id="t18_520_276"
                                    style={{
                                        height: 48,
                                        width: 83,
                                        flexDirection: 'row',
                                        alignItems: 'flex-end',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 10,
                                        marginBottom: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        window.open(
                                            'https://cleartaxfiler.com/'
                                        )
                                    }}
                                >
                                    <span
                                        id="t18_520_277"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 16,
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
                </div>

                <div
                    id="t18_2082_1305"
                    style={{
                        height: 325,
                        width: 600,
                        flexDirection: 'column',
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
                    }}
                >
                    <div
                        id="t18_2082_1304"
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
                            id="t18_2082_1303"
                            className={' carousel'}
                            style={{
                                width: 539,
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingBottom: 3,
                                position: 'relative',
                                overflow: 'scroll',
                                borderWidth: 0,
                                marginTop: 0,
                            }}
                        >
                            <div
                                id="t18_2082_1295"
                                style={{
                                    width: 539,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingBottom: 2,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                }}
                            >
                                {dl.changes.addSpaces.HomeSecondary1.sm
                                    ?.slice(4, -1)
                                    .trim() != '' ? (
                                    <img
                                        id="t18_2082_1296"
                                        className={' carousel-item'}
                                        style={{
                                            height: 280,
                                            width: 550,
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
                                                    dl.changes.addSpaces[
                                                        'HomeSecondary1'
                                                    ].redirectURL,
                                                    '_blank'
                                                )
                                            }
                                        }}
                                        src={dl.changes.addSpaces.HomeSecondary1.sm
                                            ?.slice(4, -1)
                                            .trim()}
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                {dl.changes.addSpaces.HomeSecondary2.sm
                                    ?.slice(4, -1)
                                    .trim() != '' ? (
                                    <img
                                        id="t18_2082_1297"
                                        className={' carousel-item'}
                                        style={{
                                            height: 280,
                                            width: 550,
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
                                                    dl.changes.addSpaces[
                                                        'HomeSecondary2'
                                                    ].redirectURL,
                                                    '_blank'
                                                )
                                            }
                                        }}
                                        src={dl.changes.addSpaces.HomeSecondary2.sm
                                            ?.slice(4, -1)
                                            .trim()}
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                {dl.changes.addSpaces.HomeSecondary3.sm
                                    ?.slice(4, -1)
                                    .trim() != '' ? (
                                    <img
                                        id="t18_2082_1298"
                                        className={' carousel-item'}
                                        style={{
                                            height: 280,
                                            width: 550,
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
                                                    dl.changes.addSpaces[
                                                        'HomeSecondary3'
                                                    ].redirectURL,
                                                    '_blank'
                                                )
                                            }
                                        }}
                                        src={dl.changes.addSpaces.HomeSecondary3.sm
                                            ?.slice(4, -1)
                                            .trim()}
                                    ></img>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>

                        <div
                            id="t18_2082_1299"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginBottom: 0,
                                marginTop: '-16px',
                            }}
                        >
                            <div
                                id="t18_2082_1300"
                                style={{
                                    height: 6,
                                    width: 6,
                                    borderRadius: 30,
                                    backgroundColor: dl.changes.homesecoundry1,
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
                                id="t18_2082_1301"
                                style={{
                                    height: 5,
                                    width: 5,
                                    borderRadius: 30,
                                    backgroundColor: dl.changes.homesecoundry2,
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
                                id="t18_2082_1302"
                                style={{
                                    height: 5,
                                    width: 5,
                                    borderRadius: 30,
                                    backgroundColor: dl.changes.homesecoundry3,
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
                    id="t18_2027_732"
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
                        id="t18_520_304"
                        style={{
                            height: 225,
                            width: 600,
                            backgroundColor: 'rgba(186,15,23,1.00)',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 40,
                            paddingBottom: 10,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 0,
                        }}
                    >
                        <div
                            id="t18_520_305"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 10,
                            }}
                        >
                            <span
                                id="t18_520_306"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 18,
                                    fontWeight: 400,
                                    color: 'rgba(255,255,255,1)',
                                    letterSpacing: 0,
                                    lineHeight: '21.784090042114258px',
                                    textAlign: 'left',
                                    marginLeft: 0,
                                    marginRight: 5,
                                }}
                            >
                                We have services
                            </span>

                            <span
                                id="t18_520_307"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 22,
                                    fontWeight: 700,
                                    color: 'rgba(255,255,255,1)',
                                    letterSpacing: 0,
                                    lineHeight: '26.625px',
                                    textAlign: 'left',
                                    marginLeft: 5,
                                    marginRight: 0,
                                }}
                            >
                                COMING SOON
                            </span>
                        </div>

                        <div
                            id="t18_520_308"
                            style={{
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
                            <div
                                id="t18_520_309"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 5,
                                }}
                            >
                                <div
                                    id="t18_520_310"
                                    style={{
                                        height: 176,
                                        width: 110,
                                        borderRadius: 12,
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 10,
                                        paddingRight: 10,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 0,
                                        marginRight: 5,
                                    }}
                                >
                                    <div
                                        id="t18_520_311"
                                        className={'mm-service1'}
                                        style={{
                                            width: 175,
                                            borderRadius: 12,
                                            backgroundColor:
                                                'rgba(186,15,23,1.00)',
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
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/1e6b45215bec0d2bbb86ca5f3e6d0fdfaaf09503.png' !=
                                        '' ? (
                                            <img
                                                id="t18_520_312"
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
                                            id="t18_520_313"
                                            style={{
                                                height: 24,
                                                width: 47,
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
                                                id="t18_520_314"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 16,
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
                                </div>

                                <div
                                    id="t18_520_315"
                                    className={'mm-service1'}
                                    style={{
                                        height: 136,
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
                                        marginLeft: 5,
                                        marginRight: 0,
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/51c723ffc6c563e59e66cfab7c33622d5a034cdf.png' !=
                                    '' ? (
                                        <img
                                            id="t18_520_316"
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
                                        id="t18_520_317"
                                        style={{
                                            width: 128,
                                            flexDirection: 'row',
                                            alignItems: 'center',
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
                                            id="t18_520_318"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 16,
                                                fontWeight: 600,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight: '24px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            IT Trainings & courses
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div
                                id="t18_520_319"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 5,
                                    marginRight: 0,
                                }}
                            >
                                <div
                                    id="t18_520_320"
                                    className={'mm-service1'}
                                    style={{
                                        height: 136,
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
                                        marginLeft: 0,
                                        marginRight: 5,
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b053ad8e1add9644e8ccdfabe37a4c88c0705afd.png' !=
                                    '' ? (
                                        <img
                                            id="t18_520_321"
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
                                        id="t18_520_322"
                                        style={{
                                            height: 24,
                                            width: 66,
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
                                            id="t18_520_323"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 16,
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
                                    id="t18_520_324"
                                    className={'mm-service1'}
                                    style={{
                                        height: 136,
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
                                        marginLeft: 5,
                                        marginRight: 0,
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/79c0c87c8a18251720b02af4e1904014dd0804df.png' !=
                                    '' ? (
                                        <img
                                            id="t18_520_325"
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
                                        id="t18_520_326"
                                        style={{
                                            height: 24,
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
                                            id="t18_520_327"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 16,
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
                            </div>
                        </div>
                    </div>

                    <div
                        id="t18_520_328"
                        style={{
                            height: 182,
                            width: 540,
                            backgroundColor: 'rgba(156,18,24,1.00)',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingLeft: 40,
                            paddingRight: 40,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginBottom: 0,
                        }}
                    >
                        <div
                            id="t18_520_329"
                            className={'mm-service2'}
                            style={{
                                height: 136,
                                width: 130,
                                borderRadius: 12,
                                backgroundColor: 'rgba(156,18,24,1.00)',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
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
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/a816f11963e00fa479497d1470f71a64ee3ac4a6.png' !=
                            '' ? (
                                <img
                                    id="t18_520_330"
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
                                id="t18_520_331"
                                style={{
                                    height: 48,
                                    width: 133,
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
                                    id="t18_520_332"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 16,
                                        fontWeight: 600,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '24px',
                                        textAlign: 'center',
                                    }}
                                >
                                    Legal Consultancy
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_520_334"
                            className={'mm-service2'}
                            style={{
                                height: 136,
                                width: 130,
                                borderRadius: 12,
                                backgroundColor: 'rgba(156,18,24,1.00)',
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
                                    id="t18_520_335"
                                    style={{
                                        height: 64,
                                        width: 64,
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
                                id="t18_520_336"
                                style={{
                                    height: 24,
                                    width: 89,
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
                                    id="t18_520_337"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 16,
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
                    id="t18_520_287"
                    style={{
                        width: 620,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        paddingTop: 30,
                        paddingBottom: 50,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <span
                        id="t18_520_288"
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
                        Our Blog post
                    </span>

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
                            var blogId = dl.changes.blogsHome.blog1._id
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
                            var blogId = dl.changes.blogsHome.blog2._id
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
                            var blogId = dl.changes.blogsHome.blog3._id
                            dl.functions.common.relativeRedirect(
                                `blogdetails?blogId=${blogId}`,
                                true
                            )
                        }}
                    />

                    <div
                        id="t18_520_301"
                        style={{
                            height: 24,
                            width: 138,
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
                            var currentPath = dl.functions.common.getLastPath()
                            dl.functions.onLoadFunctions[currentPath]()
                        }}
                    >
                        <span
                            id="t18_520_302"
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
                    id="t18_520_303"
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
                        id="t18_520_345"
                        style={{
                            height: 172,
                            width: 470,
                            backgroundColor: 'rgba(248,246,246,1.00)',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            paddingLeft: 75,
                            paddingRight: 75,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 0,
                        }}
                    >
                        <div
                            id="t18_520_346"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 10,
                            }}
                        >
                            <span
                                id="t18_520_347"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 20,
                                    fontWeight: 700,
                                    color: 'rgba(0,0,0,1)',
                                    letterSpacing: 0,
                                    lineHeight: '35px',
                                    textAlign: 'center',
                                    marginTop: 0,
                                }}
                            >
                                Do you want to post an Ad?
                            </span>

                            <span
                                id="t18_520_348"
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
                            id="t18_520_349"
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
                                id="t18_520_350"
                                className={'hvr-grow'}
                                style={{
                                    height: 74,
                                    width: 164,
                                    borderRadius: 12,
                                    backgroundColor: 'rgba(255,255,255,1.00)',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
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
                                        id="t18_520_351"
                                        style={{
                                            height: 25.59375,
                                            width: 25,
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
                                    id="t18_520_352"
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
                                id="t18_520_353"
                                className={'hvr-grow'}
                                style={{
                                    height: 74,
                                    width: 208,
                                    borderRadius: 12,
                                    backgroundColor: 'rgba(255,255,255,1.00)',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
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
                                        id="t18_520_354"
                                        style={{
                                            height: 25,
                                            width: 25,
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
                                    id="t18_520_355"
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
                        id="t18_2027_726"
                        style={{
                            height: 295,
                            width: 620,
                            backgroundImage:
                                'url(https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/d8b32c62df0cf2799cf4194007082a569aafc565.png)',
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
                            marginBottom: 0,
                        }}
                    >
                        <div
                            id="t18_520_357"
                            style={{
                                height: 269,
                                width: 230,
                                backgroundColor: 'rgba(29,26,5,0.7)',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                display: 'flex',
                                paddingLeft: 60,
                                paddingRight: 60,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                borderRadius: 10,
                                backdropFilter: 'blur(10px)',
                            }}
                        >
                            <div
                                id="t18_2027_725"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 10,
                                }}
                            >
                                <span
                                    id="t18_520_358"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 24,
                                        fontWeight: 700,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '29.045454025268555px',
                                        textAlign: 'left',
                                        marginTop: 0,
                                        marginBottom: 2.5,
                                    }}
                                >
                                    CONTACT US
                                </span>

                                <span
                                    id="t18_520_359"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 11,
                                        fontWeight: 400,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '13.3125px',
                                        textAlign: 'left',
                                        marginTop: 2.5,
                                        marginBottom: 0,
                                    }}
                                >
                                    Feel free to get in touch with us
                                </span>
                            </div>

                            <div
                                id="t18_2027_724"
                                style={{
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
                                    id="t18_593_29"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 5,
                                    }}
                                >
                                    <div
                                        id="t18_520_361"
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
                                            marginBottom: 5,
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
                                                id="t18_520_362"
                                                style={{
                                                    height: 25,
                                                    width: 25,
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
                                            id="t18_520_363"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 14,
                                                fontWeight: 600,
                                                color: 'rgba(248,246,246,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '16.94318199157715px',
                                                textAlign: 'left',
                                                marginLeft: 5,
                                                marginRight: 0,
                                            }}
                                        >
                                            +1 4694434605
                                        </span>
                                    </div>

                                    <div
                                        id="t18_520_364"
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
                                            marginTop: 5,
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
                                                id="t18_520_365"
                                                style={{
                                                    height: 25,
                                                    width: 25,
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
                                            id="t18_520_366"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 14,
                                                fontWeight: 600,
                                                color: 'rgba(248,246,246,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '16.94318199157715px',
                                                textAlign: 'left',
                                                marginLeft: 5,
                                                marginRight: 0,
                                            }}
                                        >
                                            admin@melodymocktail.com
                                        </span>
                                    </div>
                                </div>

                                <div
                                    id="t18_520_367"
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
                                        marginTop: 5,
                                        marginBottom: 5,
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
                                            id="t18_520_368"
                                            style={{
                                                height: 25,
                                                width: 25,
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
                                        id="t18_520_369"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 14,
                                            fontWeight: 600,
                                            color: 'rgba(248,246,246,1)',
                                            letterSpacing: 0,
                                            lineHeight: '16.94318199157715px',
                                            textAlign: 'left',
                                            marginLeft: 5,
                                            marginRight: 0,
                                        }}
                                    >
                                        Chat with us
                                    </span>
                                </div>
                                <div
                                    id="t18_520_367"
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
                                        marginTop: 5,
                                        marginBottom: 5,
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
                                            id="t18_520_368"
                                            style={{
                                                height: 25,
                                                width: 25,
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
                                        id="t18_520_369"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 14,
                                            fontWeight: 600,
                                            color: 'rgba(248,246,246,1)',
                                            letterSpacing: 0,
                                            lineHeight: '16.94318199157715px',
                                            textAlign: 'left',
                                            marginLeft: 5,
                                            marginRight: 0,
                                        }}
                                    >
                                        Subscribe
                                    </span>
                                </div>

                                <div
                                    id="t18_520_367"
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
                                        marginTop: 5,
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
                                            id="t18_520_368"
                                            style={{
                                                height: 25,
                                                width: 25,
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
                                        id="t18_520_369"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 14,
                                            fontWeight: 600,
                                            color: 'rgba(248,246,246,1)',
                                            letterSpacing: 0,
                                            lineHeight: '16.94318199157715px',
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
                </div>

                <MmFooterS />
            </div>
        </div>
    )
})
export default Home_3
