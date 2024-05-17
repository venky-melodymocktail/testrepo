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

const Home_4 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 400
            const element = document.getElementById('t18_282_981')
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
                id="t18_282_981"
                style={{
                    width: 400,
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

                <div
                    id="t18_282_802"
                    style={{
                        height: 227,
                        width: 400,
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
                        id="t18_2079_1267"
                        style={{
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
                            id="t18_2079_1252"
                            className={' carousel'}
                            style={{
                                width: 357,
                                flexDirection: 'row',
                                alignItems: 'center',
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
                                id="t18_2079_1257"
                                style={{
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
                                {dl.changes.addSpaces.HomeMain1.xs.imageUrl
                                    ?.slice(4, -1)
                                    .trim() != '' ? (
                                    <img
                                        id="t18_2079_1248"
                                        className={' carousel-item'}
                                        style={{
                                            height: 197,
                                            width: 357,
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
                                        src={dl.changes.addSpaces.HomeMain1.xs.imageUrl
                                            ?.slice(4, -1)
                                            .trim()}
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                {dl.changes.addSpaces.HomeMain2.xs.imageUrl
                                    ?.slice(4, -1)
                                    .trim() != '' ? (
                                    <img
                                        id="t18_2079_1250"
                                        className={' carousel-item'}
                                        style={{
                                            height: 197,
                                            width: 357,
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
                                        src={dl.changes.addSpaces.HomeMain2.xs.imageUrl
                                            ?.slice(4, -1)
                                            .trim()}
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                {dl.changes.addSpaces.HomeMain3.xs.imageUrl
                                    ?.slice(4, -1)
                                    .trim() != '' ? (
                                    <img
                                        id="t18_2079_1249"
                                        className={' carousel-item'}
                                        style={{
                                            height: 197,
                                            width: 357,
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
                                        src={dl.changes.addSpaces.HomeMain3.xs.imageUrl
                                            ?.slice(4, -1)
                                            .trim()}
                                    ></img>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>

                        <div
                            id="t18_2079_1253"
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
                                id="t18_2079_1254"
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
                                id="t18_2079_1255"
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
                                id="t18_2079_1256"
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
                    id="t18_282_863"
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
                        id="t18_282_812"
                        style={{
                            height: 362,
                            width: 360,
                            backgroundColor: 'rgba(186,15,23,1.00)',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            paddingLeft: 20,
                            paddingRight: 20,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 0,
                        }}
                    >
                        <div
                            id="t18_282_813"
                            style={{
                                flexDirection: 'row',
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
                            <span
                                id="t18_282_814"
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
                                Services
                            </span>
                        </div>

                        <div
                            id="t18_282_816"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 5,
                                marginBottom: 0,
                            }}
                        >
                            <div
                                id="t18_282_817"
                                style={{
                                    flexDirection: 'row',
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
                                    id="t18_282_818"
                                    className={'mm-service1'}
                                    style={{
                                        height: 154,
                                        width: 148,
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
                                            id="t18_282_819"
                                            style={{
                                                height: 54,
                                                width: 54,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 5,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/739108ae1165dc763982f258d39539f30165a0d0.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <div
                                        id="t18_282_820"
                                        style={{
                                            height: 48,
                                            width: 116,
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
                                            id="t18_282_821"
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
                                    id="t18_282_823"
                                    className={'mm-service1'}
                                    style={{
                                        height: 154,
                                        width: 148,
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
                                            id="t18_282_824"
                                            style={{
                                                height: 54,
                                                width: 54,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 5,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/d3cfdac7ad304f44cedd7f242f4c6e151a0f654a.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <div
                                        id="t18_282_825"
                                        style={{
                                            height: 48,
                                            width: 73,
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
                                            id="t18_282_826"
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
                                id="t18_282_827"
                                style={{
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
                                    id="t18_282_828"
                                    style={{
                                        height: 154,
                                        width: 148,
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
                                            id="t18_282_829"
                                            style={{
                                                height: 54,
                                                width: 54,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 5,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/f77235af01a95fcb13faf22d15e7a02291bb4c64.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <div
                                        id="t18_282_830"
                                        style={{
                                            height: 48,
                                            width: 109,
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
                                            id="t18_282_831"
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
                                    id="t18_282_832"
                                    style={{
                                        height: 154,
                                        width: 148,
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
                                            id="t18_282_833"
                                            style={{
                                                height: 54,
                                                width: 54,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 5,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/62d03eb1f837828b14964d09b684b2c7c6ee78fe.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <div
                                        id="t18_282_834"
                                        style={{
                                            height: 48,
                                            width: 109,
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
                                            id="t18_282_835"
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
                        id="t18_282_836"
                        style={{
                            height: 328,
                            width: 360,
                            backgroundColor: 'rgba(156,18,24,1.00)',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            paddingLeft: 20,
                            paddingRight: 20,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginBottom: 0,
                        }}
                    >
                        <div
                            id="t18_282_837"
                            style={{
                                flexDirection: 'row',
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
                                id="t18_282_838"
                                className={'mm-service2'}
                                style={{
                                    height: 154,
                                    width: 148,
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
                                        id="t18_282_839"
                                        style={{
                                            height: 54,
                                            width: 54,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 5,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b6f6f55edb0a59993b632f2dafa6e8f76855c82c.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <div
                                    id="t18_282_840"
                                    style={{
                                        height: 48,
                                        width: 68,
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
                                        id="t18_282_841"
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
                                id="t18_282_842"
                                className={'mm-service2'}
                                style={{
                                    height: 154,
                                    width: 148,
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
                                        id="t18_282_843"
                                        style={{
                                            height: 54,
                                            width: 54,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 5,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/2b63129a861a59f04f03afd733e9d4e9324f56e4.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <div
                                    id="t18_282_844"
                                    style={{
                                        height: 48,
                                        width: 93,
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
                                        id="t18_282_845"
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
                            id="t18_282_846"
                            style={{
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
                                id="t18_282_847"
                                className={'mm-service2'}
                                style={{
                                    height: 154,
                                    width: 148,
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
                                        id="t18_282_848"
                                        style={{
                                            height: 54,
                                            width: 54,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 5,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ea78da19e331dafba285de348964be92f458cbf5.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <div
                                    id="t18_282_849"
                                    style={{
                                        height: 48,
                                        width: 108,
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
                                        id="t18_282_850"
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
                                id="t18_282_851"
                                className={'mm-service2'}
                                style={{
                                    height: 154,
                                    width: 148,
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
                                    window.open('https://cleartaxfiler.com/')
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ddae75667f9009b0371e548f3174f2f4553c0662.png' !=
                                '' ? (
                                    <img
                                        id="t18_282_852"
                                        style={{
                                            height: 54,
                                            width: 54,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 5,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ddae75667f9009b0371e548f3174f2f4553c0662.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <div
                                    id="t18_282_853"
                                    style={{
                                        height: 48,
                                        width: 83,
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
                                        id="t18_282_854"
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
                    id="t18_2082_1281"
                    style={{
                        height: 237,
                        width: 400,
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
                        id="t18_2082_1282"
                        style={{
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
                            id="t18_2082_1283"
                            className={' carousel'}
                            style={{
                                width: 357,
                                flexDirection: 'row',
                                alignItems: 'center',
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
                                id="t18_2082_1284"
                                style={{
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
                                {dl.changes.addSpaces.HomeSecondary1.xs
                                    ?.slice(4, -1)
                                    .trim() != '' ? (
                                    <img
                                        id="t18_2082_1285"
                                        className={' carousel-item'}
                                        style={{
                                            height: 197,
                                            width: 357,
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
                                        src={dl.changes.addSpaces.HomeSecondary1.xs
                                            ?.slice(4, -1)
                                            .trim()}
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                {dl.changes.addSpaces.HomeSecondary2.xs
                                    ?.slice(4, -1)
                                    .trim() != '' ? (
                                    <img
                                        id="t18_2082_1286"
                                        className={' carousel-item'}
                                        style={{
                                            height: 197,
                                            width: 357,
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
                                        src={dl.changes.addSpaces.HomeSecondary2.xs
                                            ?.slice(4, -1)
                                            .trim()}
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                {dl.changes.addSpaces.HomeSecondary3.xs
                                    ?.slice(4, -1)
                                    .trim() != '' ? (
                                    <img
                                        id="t18_2082_1287"
                                        className={' carousel-item'}
                                        style={{
                                            height: 197,
                                            width: 357,
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
                                        src={dl.changes.addSpaces.HomeSecondary3.xs
                                            ?.slice(4, -1)
                                            .trim()}
                                    ></img>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>

                        <div
                            id="t18_2082_1288"
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
                                id="t18_2082_1289"
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
                                id="t18_2082_1290"
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
                                id="t18_2082_1291"
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
                    id="t18_282_921"
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
                        id="t18_282_889"
                        style={{
                            height: 230,
                            width: 360,
                            backgroundColor: 'rgba(186,15,23,1.00)',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            paddingLeft: 20,
                            paddingRight: 20,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 0,
                        }}
                    >
                        <div
                            id="t18_282_860"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 5,
                            }}
                        >
                            <span
                                id="t18_282_861"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 400,
                                    color: 'rgba(255,255,255,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginLeft: 0,
                                    marginRight: 5,
                                }}
                            >
                                We have services
                            </span>

                            <span
                                id="t18_282_862"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 20,
                                    fontWeight: 700,
                                    color: 'rgba(255,255,255,1)',
                                    letterSpacing: 0,
                                    lineHeight: '24.204544067382812px',
                                    textAlign: 'left',
                                    marginLeft: 5,
                                    marginRight: 0,
                                }}
                            >
                                COMING SOON
                            </span>
                        </div>

                        <div
                            id="t18_282_890"
                            style={{
                                width: 370,
                                flexDirection: 'column',
                                alignItems: 'center',
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
                                id="t18_282_891"
                                style={{
                                    width: 370,
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
                                    id="t18_282_892"
                                    style={{
                                        width: 370,
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
                                        id="t18_282_893"
                                        style={{
                                            height: 153,
                                            width: 98,
                                            borderRadius: 12,
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
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
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/1e6b45215bec0d2bbb86ca5f3e6d0fdfaaf09503.png' !=
                                        '' ? (
                                            <img
                                                id="t18_282_895"
                                                style={{
                                                    height: 54,
                                                    width: 54,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 5,
                                                }}
                                                src={
                                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/1e6b45215bec0d2bbb86ca5f3e6d0fdfaaf09503.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

                                        <div
                                            id="t18_282_896"
                                            style={{
                                                height: 48,
                                                width: 43,
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
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
                                                id="t18_282_897"
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

                                    <div
                                        id="t18_282_903"
                                        className={'mm-service1'}
                                        style={{
                                            height: 113,
                                            width: 118,
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
                                            marginLeft: 5,
                                            marginRight: 5,
                                        }}
                                    >
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b053ad8e1add9644e8ccdfabe37a4c88c0705afd.png' !=
                                        '' ? (
                                            <img
                                                id="t18_282_904"
                                                style={{
                                                    height: 54,
                                                    width: 54,
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
                                            id="t18_282_905"
                                            style={{
                                                height: 48,
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
                                                id="t18_282_906"
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
                                        id="t18_282_898"
                                        className={'mm-service1'}
                                        style={{
                                            height: 153,
                                            width: 118,
                                            borderRadius: 12,
                                            backgroundColor:
                                                'rgba(186,15,23,1.00)',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            display: 'flex',
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
                                                id="t18_282_899"
                                                style={{
                                                    height: 54,
                                                    width: 54,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 5,
                                                }}
                                                src={
                                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/51c723ffc6c563e59e66cfab7c33622d5a034cdf.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

                                        <div
                                            id="t18_282_900"
                                            style={{
                                                height: 48,
                                                flexDirection: 'row',
                                                alignItems: 'flex-end',
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
                                                id="t18_282_901"
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
                                                IT Trainings & Courses
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        id="t18_282_911"
                        style={{
                            height: 162,
                            width: 360,
                            backgroundColor: 'rgba(156,18,24,1.00)',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            paddingLeft: 20,
                            paddingRight: 20,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginBottom: 0,
                        }}
                    >
                        <div
                            id="t18_282_907"
                            className={'mm-service1'}
                            style={{
                                height: 113,
                                width: 118,
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
                            }}
                        >
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/79c0c87c8a18251720b02af4e1904014dd0804df.png' !=
                            '' ? (
                                <img
                                    id="t18_282_908"
                                    style={{
                                        height: 54,
                                        width: 54,
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
                                id="t18_282_909"
                                style={{
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
                                    id="t18_282_910"
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

                        <div
                            id="t18_282_912"
                            className={'mm-service2'}
                            style={{
                                height: 113,
                                width: 118,
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
                                marginLeft: 5,
                                marginRight: 5,
                            }}
                        >
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/a816f11963e00fa479497d1470f71a64ee3ac4a6.png' !=
                            '' ? (
                                <img
                                    id="t18_282_913"
                                    style={{
                                        height: 54,
                                        width: 54,
                                        display: 'flex',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 5,
                                    }}
                                    src={
                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/a816f11963e00fa479497d1470f71a64ee3ac4a6.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}

                            <div
                                id="t18_282_914"
                                style={{
                                    height: 48,
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
                                    id="t18_282_915"
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
                            id="t18_282_917"
                            className={'mm-service2'}
                            style={{
                                height: 113,
                                width: 118,
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
                                marginLeft: 5,
                                marginRight: 0,
                            }}
                        >
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/6b8ab0af948d2b41f370472d83a420fb7fed87cf.png' !=
                            '' ? (
                                <img
                                    id="t18_282_918"
                                    style={{
                                        height: 54,
                                        width: 54,
                                        display: 'flex',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 5,
                                    }}
                                    src={
                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/6b8ab0af948d2b41f370472d83a420fb7fed87cf.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}

                            <div
                                id="t18_282_919"
                                style={{
                                    height: 24,
                                    width: 80,
                                    flexDirection: 'row',
                                    alignItems: 'flex-end',
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
                                    id="t18_282_920"
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
                    id="t18_282_873"
                    style={{
                        width: 400,
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
                        id="t18_282_874"
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
                        Our Blog post
                    </span>

                    <div
                        id="t18_521_1194"
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

                        <MmBlogCardXs
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

                        <MmBlogCardXs
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
                        id="t18_282_887"
                        style={{
                            height: 16,
                            width: 108,
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
                            var currentPath = dl.functions.common.getLastPath()
                            dl.functions.onLoadFunctions[currentPath]()
                        }}
                    >
                        <span
                            id="t18_282_888"
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

                <div
                    id="t18_282_929"
                    style={{
                        height: 158,
                        width: 360,
                        backgroundColor: 'rgba(248,246,246,1.00)',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        paddingLeft: 20,
                        paddingRight: 20,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_282_930"
                        style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 0,
                            marginBottom: 7,
                        }}
                    >
                        <span
                            id="t18_282_931"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 16,
                                fontWeight: 700,
                                color: 'rgba(0,0,0,1)',
                                letterSpacing: 0,
                                lineHeight: '20px',
                                textAlign: 'center',
                                marginTop: 0,
                            }}
                        >
                            Do you want to post an Ad?
                        </span>

                        <span
                            id="t18_282_932"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 13,
                                fontWeight: 500,
                                color: 'rgba(113,113,113,1)',
                                letterSpacing: 0,
                                lineHeight: '15.732954025268555px',
                                textAlign: 'left',
                                marginBottom: 0,
                            }}
                        >
                            Contact us here
                        </span>
                    </div>

                    <div
                        id="t18_282_933"
                        style={{
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 7,
                            marginBottom: 0,
                        }}
                    >
                        <div
                            id="t18_282_934"
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
                                marginRight: 5,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                dl.functions.common.callNumber('+14694434605')
                            }}
                        >
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b95f8784c0fdf03d13bf3bb26d4b8c8a3249e50d.png' !=
                            '' ? (
                                <img
                                    id="t18_282_935"
                                    style={{
                                        height: 25.59375,
                                        width: 25,
                                        display: 'flex',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 3.5,
                                    }}
                                    src={
                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b95f8784c0fdf03d13bf3bb26d4b8c8a3249e50d.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}

                            <span
                                id="t18_282_936"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 13,
                                    fontWeight: 600,
                                    color: 'rgba(82,82,86,1)',
                                    letterSpacing: 0,
                                    lineHeight: '15.732954025268555px',
                                    textAlign: 'left',
                                    marginTop: 3.5,
                                    marginBottom: 0,
                                }}
                            >
                                +1 4694434605
                            </span>
                        </div>

                        <div
                            id="t18_282_937"
                            className={'hvr-grow'}
                            style={{
                                height: 74,
                                width: 195,
                                borderRadius: 12,
                                backgroundColor: 'rgba(255,255,255,1.00)',
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
                                dl.functions.common.sendEmail(
                                    'admin@melodymocktail.com'
                                )
                            }}
                        >
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/e2513dbd4a8460a472d4de84135c73a82a2555e5.png' !=
                            '' ? (
                                <img
                                    id="t18_282_938"
                                    style={{
                                        height: 25,
                                        width: 25,
                                        display: 'flex',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 3.5,
                                    }}
                                    src={
                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/e2513dbd4a8460a472d4de84135c73a82a2555e5.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}

                            <span
                                id="t18_282_939"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 13,
                                    fontWeight: 600,
                                    color: 'rgba(82,82,86,1)',
                                    letterSpacing: 0,
                                    lineHeight: '15.732954025268555px',
                                    textAlign: 'left',
                                    marginTop: 3.5,
                                    marginBottom: 0,
                                }}
                            >
                                admin@melodymocktail.com
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    id="t18_2027_739"
                    style={{
                        height: 226,
                        width: 400,
                        backgroundImage:
                            'url(https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/0da4373f790bb7bf8e643203680333c3b924cf99.png)',
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
                    <div
                        id="t18_282_941"
                        style={{
                            height: 211,
                            width: 225,
                            backgroundColor: 'rgba(29,26,5,0.7)',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: 'flex',
                            paddingLeft: 20,
                            paddingRight: 20,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            backdropFilter: 'blur(10px)',
                            borderRadius: 10,
                        }}
                    >
                        <div
                            id="t18_2027_738"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 8,
                            }}
                        >
                            <span
                                id="t18_282_942"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 18,
                                    fontWeight: 700,
                                    color: 'rgba(255,255,255,1)',
                                    letterSpacing: 0,
                                    lineHeight: '21.784090042114258px',
                                    textAlign: 'left',
                                    marginTop: 0,
                                    marginBottom: 2.5,
                                }}
                            >
                                CONTACT US
                            </span>

                            <span
                                id="t18_282_943"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 9,
                                    fontWeight: 400,
                                    color: 'rgba(255,255,255,1)',
                                    letterSpacing: 0,
                                    lineHeight: '10.892045021057129px',
                                    textAlign: 'left',
                                    marginTop: 2.5,
                                    marginBottom: 0,
                                }}
                            >
                                Feel free to get in touch with us
                            </span>
                        </div>

                        <div
                            id="t18_282_944"
                            style={{
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
                                id="t18_282_945"
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
                                    id="t18_282_946"
                                    className={'hvr-grow'}
                                    style={{
                                        borderRadius: 10,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
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
                                            id="t18_282_947"
                                            style={{
                                                height: 20,
                                                width: 20,
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
                                        id="t18_282_948"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 13,
                                            fontWeight: 600,
                                            color: 'rgba(248,246,246,1)',
                                            letterSpacing: 0,
                                            lineHeight: '15.732954025268555px',
                                            textAlign: 'left',
                                            marginLeft: 5,
                                            marginRight: 0,
                                        }}
                                    >
                                        +1 4694434605
                                    </span>
                                </div>

                                <div
                                    id="t18_282_949"
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
                                            id="t18_282_950"
                                            style={{
                                                height: 20,
                                                width: 20,
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
                                        id="t18_282_951"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 13,
                                            fontWeight: 600,
                                            color: 'rgba(248,246,246,1)',
                                            letterSpacing: 0,
                                            lineHeight: '15.732954025268555px',
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
                                id="t18_282_952"
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
                                        id="t18_282_953"
                                        style={{
                                            height: 20,
                                            width: 20,
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
                                    id="t18_282_954"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 600,
                                        color: 'rgba(248,246,246,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
                                        textAlign: 'left',
                                        marginLeft: 5,
                                        marginRight: 0,
                                    }}
                                >
                                    Chat with us
                                </span>
                            </div>

                            <div
                                id="t18_282_952"
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
                                        id="t18_282_953"
                                        style={{
                                            height: 20,
                                            width: 20,
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
                                    id="t18_282_954"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 600,
                                        color: 'rgba(248,246,246,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
                                        textAlign: 'left',
                                        marginLeft: 5,
                                        marginRight: 0,
                                    }}
                                >
                                    Subscribe
                                </span>
                            </div>

                            <div
                                id="t18_282_952"
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
                                        id="t18_282_953"
                                        style={{
                                            height: 20,
                                            width: 20,
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
                                    id="t18_282_954"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 600,
                                        color: 'rgba(248,246,246,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
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

                <MmFooterXs />
            </div>
        </div>
    )
})
export default Home_4
