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
import MmOfferedRoomCard from '../../components/MmOfferedRoomCard.jsx'
import MmWantedRoomCard from '../../components/MmWantedRoomCard.jsx'
import MmOfferedHomeCard from '../../components/MmOfferedHomeCard.jsx'
import MmWantedHomeCard from '../../components/MmWantedHomeCard.jsx'
import MmEmptyList from '../../components/MmEmptyList.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmServiceSelectorMd from '../../components/MmServiceSelectorMd.jsx'
import MmOfferedRoomCardMd from '../../components/MmOfferedRoomCardMd.jsx'
import MmWantedRoomCardMd from '../../components/MmWantedRoomCardMd.jsx'
import MmOfferedHomeCardMd from '../../components/MmOfferedHomeCardMd.jsx'
import MmWantedHomeCardMd from '../../components/MmWantedHomeCardMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmServiceSelectorXs from '../../components/MmServiceSelectorXs.jsx'
import MmOfferedRoomCardXs from '../../components/MmOfferedRoomCardXs.jsx'
import MmWantedRoomCardXs from '../../components/MmWantedRoomCardXs.jsx'
import MmOfferedHomeCardXs from '../../components/MmOfferedHomeCardXs.jsx'
import MmWantedHomeCardXs from '../../components/MmWantedHomeCardXs.jsx'
import MmEmptyListXs from '../../components/MmEmptyListXs.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmServiceSelectorS from '../../components/MmServiceSelectorS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmOfferedRoomCardS from '../../components/MmOfferedRoomCardS.jsx'
import MmWantedRoomCardS from '../../components/MmWantedRoomCardS.jsx'
import MmOfferedHomeCardS from '../../components/MmOfferedHomeCardS.jsx'
import MmWantedHomeCardS from '../../components/MmWantedHomeCardS.jsx'
import MmEmptyListS from '../../components/MmEmptyListS.jsx'

const Rentalbookmarks_1 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_1282_1480')
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
                id="t18_1282_1480"
                style={{
                    width: 1440,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    paddingBottom: 5,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginLeft: 0,
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <div
                    id="t18_1282_1481"
                    style={{
                        width: 1440,
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
                    <div
                        id="t18_1282_1482"
                        style={{
                            width: 1440,
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
                            id="t18_1282_1483"
                            style={{
                                width: 1440,
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
                                    var currentPath =
                                        dl.functions.common.getLastPath()
                                    dl.functions.onLoadFunctions[currentPath]()
                                }}
                            />

                            <div
                                id="t18_1282_1486"
                                style={{
                                    flexDirection: 'column',
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
                                    id="t18_1282_1487"
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
                                    <div
                                        id="t18_1282_1488"
                                        style={{
                                            width: 344,
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
                                        <div
                                            id="t18_1282_1489"
                                            style={{
                                                height: 111,
                                                width: 244,
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                paddingLeft: 100,
                                                paddingBottom: 10,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                borderColor:
                                                    'rgba(207,206,206,1)',
                                                borderRightWidth: 1,
                                                borderBottomWidth: 1,
                                                borderStyle: 'solid',
                                                marginTop: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_1282_1490"
                                                style={{
                                                    height: 11,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
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
                                                <span
                                                    id="t18_1282_1491"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 17,
                                                        fontWeight: 600,
                                                        color: 'rgba(88,89,91,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '20.573863983154297px',
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    Account
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1282_1492"
                                                style={{
                                                    height: 20,
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
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_1282_1493"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 20,
                                                        fontWeight: 600,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '24.204544067382812px',
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    {dl.changes.userDetail.name}
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1282_1494"
                                            style={{
                                                width: 344,
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingTop: 48,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                borderRightWidth: 1,
                                                borderBottomWidth: 1,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_1282_1495"
                                                className={
                                                    ' grayshadoweffect-btn'
                                                }
                                                style={{
                                                    height: 52,
                                                    width: 173,
                                                    borderRadius: 12,
                                                    backgroundColor:
                                                        'rgba(248,246,246,1.00)',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 29,
                                                    cursor: 'pointer',
                                                }}
                                                onClick={(e) => {
                                                    dl.functions.viewsPlugin.showView(
                                                        'profile'
                                                    )
                                                    var currentPath =
                                                        dl.functions.common.getLastPath()
                                                    dl.functions.onLoadFunctions[
                                                        currentPath
                                                    ]()
                                                }}
                                            >
                                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/128189680070ce8cfb75f12ba1c14099e954c5c1.png' !=
                                                '' ? (
                                                    <img
                                                        id="t18_1282_1496"
                                                        style={{
                                                            height: 24,
                                                            width: 24,
                                                            display: 'flex',
                                                            borderWidth: 0,
                                                            marginLeft: 0,
                                                            marginRight: 5.5,
                                                        }}
                                                        src={
                                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/128189680070ce8cfb75f12ba1c14099e954c5c1.png'
                                                        }
                                                    ></img>
                                                ) : (
                                                    <></>
                                                )}

                                                <span
                                                    id="t18_1282_1497"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 18,
                                                        fontWeight: 500,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '21.784090042114258px',
                                                        textAlign: 'center',
                                                        marginLeft: 5.5,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    Profile
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1282_1565"
                                                className={
                                                    ' grayshadoweffect-btn'
                                                }
                                                style={{
                                                    height: 52,
                                                    width: 173,
                                                    borderRadius: 12,
                                                    backgroundColor:
                                                        'rgba(248,246,246,1.00)',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 29,
                                                    marginBottom: 29,
                                                    cursor: 'pointer',
                                                }}
                                                onClick={(e) => {
                                                    dl.functions.viewsPlugin.showView(
                                                        'rentallistings'
                                                    )
                                                    var currentPath =
                                                        dl.functions.common.getLastPath()
                                                    dl.functions.onLoadFunctions[
                                                        currentPath
                                                    ]()
                                                }}
                                            >
                                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/d0fa68a3e8634a11b5ca965e207b37f162d5bbb4.png' !=
                                                '' ? (
                                                    <img
                                                        id="t18_1282_1566"
                                                        style={{
                                                            height: 17.6015625,
                                                            width: 20.080078125,
                                                            display: 'flex',
                                                            borderWidth: 0,
                                                            marginLeft: 0,
                                                            marginRight: 5,
                                                        }}
                                                        src={
                                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/d0fa68a3e8634a11b5ca965e207b37f162d5bbb4.png'
                                                        }
                                                    ></img>
                                                ) : (
                                                    <></>
                                                )}

                                                <span
                                                    id="t18_1282_1567"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 18,
                                                        fontWeight: 500,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '21.784090042114258px',
                                                        textAlign: 'center',
                                                        marginLeft: 5,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    My Listings
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1282_1559"
                                                className={
                                                    ' grayshadoweffect-btn'
                                                }
                                                style={{
                                                    height: 52,
                                                    width: 173,
                                                    borderRadius: 12,
                                                    backgroundColor:
                                                        'rgba(248,246,246,1.00)',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 29,
                                                    marginBottom: 29,
                                                    cursor: 'pointer',
                                                }}
                                                onClick={(e) => {
                                                    dl.functions.viewsPlugin.showView(
                                                        'studyabroadbookings'
                                                    )
                                                    var currentPath =
                                                        dl.functions.common.getLastPath()
                                                    dl.functions.onLoadFunctions[
                                                        currentPath
                                                    ]()
                                                }}
                                            >
                                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/920261ee1602e2824bf24d47a1afa346f325ae9a.png' !=
                                                '' ? (
                                                    <img
                                                        id="t18_1282_1560"
                                                        style={{
                                                            height: 18.921875,
                                                            width: 20.169921875,
                                                            display: 'flex',
                                                            borderWidth: 0,
                                                            marginLeft: 0,
                                                            marginRight: 4.5,
                                                        }}
                                                        src={
                                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/920261ee1602e2824bf24d47a1afa346f325ae9a.png'
                                                        }
                                                    ></img>
                                                ) : (
                                                    <></>
                                                )}

                                                <span
                                                    id="t18_1282_1561"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 18,
                                                        fontWeight: 500,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '21.784090042114258px',
                                                        textAlign: 'center',
                                                        marginLeft: 4.5,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    My Bookings
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1282_1562"
                                                className={' contact-btn'}
                                                style={{
                                                    height: 52,
                                                    width: 173,
                                                    borderRadius: 12,
                                                    backgroundColor:
                                                        'rgba(186,15,23,1.00)',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 29,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/d12b3812de113bc38ac816ac56ac91587dc4a859.png' !=
                                                '' ? (
                                                    <img
                                                        id="t18_1282_1563"
                                                        style={{
                                                            height: 20.2265625,
                                                            width: 18.10986328125,
                                                            display: 'flex',
                                                            borderWidth: 0,
                                                            marginLeft: 0,
                                                            marginRight: 5.5,
                                                        }}
                                                        src={
                                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/d12b3812de113bc38ac816ac56ac91587dc4a859.png'
                                                        }
                                                    ></img>
                                                ) : (
                                                    <></>
                                                )}

                                                <span
                                                    id="t18_1282_1564"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 18,
                                                        fontWeight: 500,
                                                        color: 'rgba(255,255,255,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '21.784090042114258px',
                                                        textAlign: 'center',
                                                        marginLeft: 5.5,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    Bookmarks
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1282_1507"
                                        style={{
                                            width: 1095,
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
                                            id="t18_1282_1508"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'flex-end',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_1282_1509"
                                                style={{
                                                    height: 162,
                                                    width: 1076,
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    paddingLeft: 10,
                                                    paddingRight: 10,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 0.5,
                                                }}
                                            >
                                                <div
                                                    id="t18_1282_1546"
                                                    style={{
                                                        height: 60,
                                                        borderRadius: 30,
                                                        backgroundColor:
                                                            'rgba(248,246,246,1.00)',
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        display: 'flex',
                                                        paddingLeft: 4,
                                                        paddingRight: 4,
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 2,
                                                        borderColor:
                                                            'rgba(186,15,23,1)',
                                                        borderStyle: 'solid',
                                                    }}
                                                >
                                                    <div
                                                        id="t18_1282_1547"
                                                        style={{
                                                            height: 32,
                                                            width: 140,
                                                            borderRadius: 30,
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
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginLeft: 0,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1282_1548"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 17,
                                                                fontWeight: 500,
                                                                color: 'rgba(255,255,255,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '20.573863983154297px',
                                                                textAlign:
                                                                    'center',
                                                            }}
                                                        >
                                                            Rentals & Properties
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1282_1549"
                                                        style={{
                                                            height: 32,
                                                            width: 140,
                                                            backgroundColor:
                                                                'rgba(248,246,246,1.00)',
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
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            cursor: 'pointer',
                                                        }}
                                                        onClick={(e) => {
                                                            dl.functions.viewsPlugin.showView(
                                                                'ridebookmarks'
                                                            )
                                                            var currentPath =
                                                                dl.functions.common.getLastPath()
                                                            dl.functions.onLoadFunctions[
                                                                currentPath
                                                            ]()
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1282_1550"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 17,
                                                                fontWeight: 500,
                                                                color: 'rgba(197,18,29,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '20.573863983154297px',
                                                                textAlign:
                                                                    'center',
                                                            }}
                                                        >
                                                            Ride Sharing
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1282_1551"
                                                        style={{
                                                            height: 32,
                                                            width: 140,
                                                            backgroundColor:
                                                                'rgba(248,246,246,1.00)',
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
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1282_1552"
                                                            onClick={() => {
                                                                dl.functions.viewsPlugin.showView(
                                                                    'travelcompanionbookmarks'
                                                                )
                                                                var currentPath =
                                                                    dl.functions.common.getLastPath()
                                                                dl.functions.onLoadFunctions[
                                                                    currentPath
                                                                ]()
                                                            }}
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 17,
                                                                fontWeight: 500,
                                                                color: 'rgba(197,18,29,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '20.573863983154297px',
                                                                textAlign:
                                                                    'center',
                                                                cursor: 'pointer',
                                                            }}
                                                        >
                                                            Travel Companion
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1282_1553"
                                                        style={{
                                                            height: 32,
                                                            width: 140,
                                                            borderRadius: 30,
                                                            backgroundColor:
                                                                'rgba(248,246,246,1.00)',
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
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1282_1554"
                                                            onClick={() => {
                                                                dl.functions.viewsPlugin.showView(
                                                                    'moviebookmarks'
                                                                )
                                                                var currentPath =
                                                                    dl.functions.common.getLastPath()
                                                                dl.functions.onLoadFunctions[
                                                                    currentPath
                                                                ]()
                                                            }}
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 17,
                                                                fontWeight: 500,
                                                                color: 'rgba(186,15,23,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '20.573863983154297px',
                                                                textAlign:
                                                                    'center',
                                                                cursor: 'pointer',
                                                            }}
                                                        >
                                                            Movie Suggestion
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1282_1555"
                                                        style={{
                                                            height: 32,
                                                            width: 140,
                                                            backgroundColor:
                                                                'rgba(248,246,246,1.00)',
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
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            cursor: 'pointer',
                                                        }}
                                                        onClick={(e) => {
                                                            dl.functions.viewsPlugin.showView(
                                                                'blogbookmarks'
                                                            )
                                                            var currentPath =
                                                                dl.functions.common.getLastPath()
                                                            dl.functions.onLoadFunctions[
                                                                currentPath
                                                            ]()
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1282_1556"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 17,
                                                                fontWeight: 500,
                                                                color: 'rgba(186,15,23,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '20.573863983154297px',
                                                                textAlign:
                                                                    'center',
                                                            }}
                                                        >
                                                            Blogs
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1282_1557"
                                                        style={{
                                                            height: 32,
                                                            width: 140,
                                                            borderRadius: 30,
                                                            backgroundColor:
                                                                'rgba(248,246,246,1.00)',
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
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginRight: 0,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1282_1558"
                                                            onClick={() => {
                                                                dl.functions.viewsPlugin.showView(
                                                                    'questionbookmarks'
                                                                )
                                                                var currentPath =
                                                                    dl.functions.common.getLastPath()
                                                                dl.functions.onLoadFunctions[
                                                                    currentPath
                                                                ]()
                                                            }}
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 17,
                                                                fontWeight: 500,
                                                                color: 'rgba(186,15,23,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '20.573863983154297px',
                                                                textAlign:
                                                                    'center',
                                                                cursor: 'pointer',
                                                            }}
                                                        >
                                                            Visa & Immigration
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                id="t18_1282_1580"
                                                style={{
                                                    height: 84,
                                                    width: 1016,
                                                    backgroundColor:
                                                        'rgba(248,246,246,1.00)',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    paddingLeft: 40,
                                                    paddingRight: 40,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0.5,
                                                    marginBottom: 0.5,
                                                }}
                                            >
                                                <select
                                                    name="cars"
                                                    id="t18_1282_1581"
                                                    style={{
                                                        height: 54,
                                                        width: 270,
                                                        borderRadius: 5,
                                                        backgroundColor:
                                                            'rgba(255,255,255,1.00)',
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        paddingLeft: 10,
                                                        paddingRight: 10,
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 1,
                                                        borderColor:
                                                            'rgba(186,15,23,1)',
                                                        borderStyle: 'solid',
                                                        marginLeft: 0,
                                                        marginRight: 15,
                                                        cursor: 'pointer',
                                                    }}
                                                    onChange={(val) => {
                                                        val = val.target.value

                                                        dl.changes.selectedBookmarkRentalType =
                                                            val

                                                        if (
                                                            dl.changes
                                                                .selectedBookmarkRentalType ==
                                                            'Home rentals'
                                                        ) {
                                                            if (
                                                                dl.changes
                                                                    .selectedBookmarkType ==
                                                                'Wanted'
                                                            ) {
                                                                dl.functions.getBookmarkedNeedAHome(
                                                                    1
                                                                )
                                                            } else {
                                                                dl.functions.getBookmarkedHomes(
                                                                    1
                                                                )
                                                            }
                                                        }

                                                        if (
                                                            dl.changes
                                                                .selectedBookmarkRentalType ==
                                                            'Rooms/Roommates'
                                                        ) {
                                                            if (
                                                                dl.changes
                                                                    .selectedBookmarkType ==
                                                                'Wanted'
                                                            ) {
                                                                dl.functions.getBookmarkedNeedArooms(
                                                                    1
                                                                )
                                                            } else {
                                                                dl.functions.getBookmarkedrooms(
                                                                    1
                                                                )
                                                            }
                                                        }
                                                    }}
                                                >
                                                    <option
                                                        value=""
                                                        disabled
                                                        selected
                                                    >
                                                        Select your option
                                                    </option>
                                                    {Array.isArray(
                                                        dl.changes
                                                            .bookmarkRentelType
                                                    ) &&
                                                        dl.changes.bookmarkRentelType.map(
                                                            (item, index) => {
                                                                return (
                                                                    <option
                                                                        value={
                                                                            item
                                                                        }
                                                                        selected={
                                                                            item ==
                                                                            dl
                                                                                .changes
                                                                                .selectedBookmarkRentalType
                                                                        }
                                                                    >
                                                                        {item}
                                                                    </option>
                                                                )
                                                            }
                                                        )}
                                                </select>

                                                <select
                                                    name="cars"
                                                    id="t18_1282_1584"
                                                    style={{
                                                        height: 54,
                                                        width: 270,
                                                        borderRadius: 5,
                                                        backgroundColor:
                                                            'rgba(255,255,255,1.00)',
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        paddingLeft: 10,
                                                        paddingRight: 10,
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 1,
                                                        borderColor:
                                                            'rgba(186,15,23,1)',
                                                        borderStyle: 'solid',
                                                        marginLeft: 15,
                                                        marginRight: 0,
                                                        cursor: 'pointer',
                                                    }}
                                                    onChange={(val) => {
                                                        val = val.target.value

                                                        dl.changes.selectedBookmarkType =
                                                            val

                                                        if (
                                                            dl.changes
                                                                .selectedBookmarkRentalType ==
                                                            'Home rentals'
                                                        ) {
                                                            if (
                                                                dl.changes
                                                                    .selectedBookmarkType ==
                                                                'Wanted'
                                                            ) {
                                                                dl.functions.getBookmarkedNeedAHome(
                                                                    1
                                                                )
                                                            } else {
                                                                dl.functions.getBookmarkedHomes(
                                                                    1
                                                                )
                                                            }
                                                        }

                                                        if (
                                                            dl.changes
                                                                .selectedBookmarkRentalType ==
                                                            'Rooms/Roommates'
                                                        ) {
                                                            if (
                                                                dl.changes
                                                                    .selectedBookmarkType ==
                                                                'Wanted'
                                                            ) {
                                                                dl.functions.getBookmarkedNeedArooms(
                                                                    1
                                                                )
                                                            } else {
                                                                dl.functions.getBookmarkedrooms(
                                                                    1
                                                                )
                                                            }
                                                        }
                                                    }}
                                                >
                                                    <option
                                                        value=""
                                                        disabled
                                                        selected
                                                    >
                                                        Select your option
                                                    </option>
                                                    {Array.isArray(
                                                        dl.changes.bookmarkType
                                                    ) &&
                                                        dl.changes.bookmarkType.map(
                                                            (item, index) => {
                                                                return (
                                                                    <option
                                                                        value={
                                                                            item
                                                                        }
                                                                        selected={
                                                                            item ==
                                                                            dl
                                                                                .changes
                                                                                .selectedBookmarkType
                                                                        }
                                                                    >
                                                                        {item}
                                                                    </option>
                                                                )
                                                            }
                                                        )}
                                                </select>
                                            </div>

                                            <div
                                                id="t18_1282_1568"
                                                style={{
                                                    width: 1096,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display:
                                                        dl.changes
                                                            .roomsBookmarkVisible,
                                                    paddingTop: 40,
                                                    paddingBottom: 40,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0.5,
                                                    marginBottom: 0.5,
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
                                                    {dl.changes.bookmarkedRoomList.map(
                                                        (item, index) => {
                                                            return (
                                                                <div>
                                                                    <MmOfferedRoomCard
                                                                        {...item}
                                                                        {...dl
                                                                            .changes
                                                                            .bookmarkedRoomList}
                                                                        onClickEdit={(
                                                                            val
                                                                        ) => {}}
                                                                        onClickContact={(
                                                                            val
                                                                        ) => {
                                                                            val.stopPropagation()
                                                                            var id =
                                                                                dl
                                                                                    .changes
                                                                                    .bookmarkedRoomList[
                                                                                    index
                                                                                ]
                                                                                    ._id
                                                                            dl.functions.contactUsAction(
                                                                                id,
                                                                                'rooms',
                                                                                'large'
                                                                            )
                                                                        }}
                                                                        onClickDelete={(
                                                                            val
                                                                        ) => {}}
                                                                        onClickBookMark={(
                                                                            val
                                                                        ) => {}}
                                                                        onClickRemoveBookMark={(
                                                                            val
                                                                        ) => {
                                                                            val.stopPropagation()
                                                                            var id =
                                                                                dl
                                                                                    .changes
                                                                                    .bookmarkedRoomList[
                                                                                    index
                                                                                ]
                                                                                    .bookmarkId
                                                                            var body =
                                                                                {
                                                                                    bookmarkId:
                                                                                        id,
                                                                                }
                                                                            dl.functions.deleteBookmark(
                                                                                body
                                                                            )
                                                                        }}
                                                                        onClickPromote={(
                                                                            val
                                                                        ) => {}}
                                                                        onClick={(
                                                                            val
                                                                        ) => {
                                                                            var roomid =
                                                                                dl
                                                                                    .changes
                                                                                    .bookmarkedRoomList[
                                                                                    index
                                                                                ]
                                                                                    ._id
                                                                            dl.functions.common.relativeRedirect(
                                                                                `offeredroomdetails?roomId=${roomid}`,
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
                                                id="t18_1282_1571"
                                                style={{
                                                    width: 1096,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display:
                                                        dl.changes
                                                            .needARoomBookmarkVisible,
                                                    paddingTop: 40,
                                                    paddingBottom: 40,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0.5,
                                                    marginBottom: 0.5,
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
                                                    {dl.changes.bookmarkedNeedARoomList.map(
                                                        (item, index) => {
                                                            return (
                                                                <div>
                                                                    <MmWantedRoomCard
                                                                        {...item}
                                                                        {...dl
                                                                            .changes
                                                                            .bookmarkedNeedARoomList}
                                                                        onClickEdit={(
                                                                            val
                                                                        ) => {}}
                                                                        onClickContact={(
                                                                            val
                                                                        ) => {
                                                                            val.stopPropagation()
                                                                            var id =
                                                                                dl
                                                                                    .changes
                                                                                    .bookmarkedNeedARoomList[
                                                                                    index
                                                                                ]
                                                                                    ._id
                                                                            dl.functions.contactUsAction(
                                                                                id,
                                                                                'needaroom',
                                                                                'large'
                                                                            )
                                                                        }}
                                                                        onClickDelete={(
                                                                            val
                                                                        ) => {}}
                                                                        onClickBookmark={(
                                                                            val
                                                                        ) => {}}
                                                                        onClickRemoveBookmark={(
                                                                            val
                                                                        ) => {
                                                                            val.stopPropagation()
                                                                            var id =
                                                                                dl
                                                                                    .changes
                                                                                    .bookmarkedNeedARoomList[
                                                                                    index
                                                                                ]
                                                                                    .bookmarkId
                                                                            var body =
                                                                                {
                                                                                    bookmarkId:
                                                                                        id,
                                                                                }
                                                                            dl.functions.deleteBookmark(
                                                                                body
                                                                            )
                                                                        }}
                                                                        onClickPromote={(
                                                                            val
                                                                        ) => {}}
                                                                        onClick={(
                                                                            val
                                                                        ) => {
                                                                            var roomid =
                                                                                dl
                                                                                    .changes
                                                                                    .bookmarkedNeedARoomList[
                                                                                    index
                                                                                ]
                                                                                    ._id
                                                                            dl.functions.common.relativeRedirect(
                                                                                `wantedroomdetails?roomId=${roomid}`,
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
                                                id="t18_1282_1574"
                                                style={{
                                                    width: 1096,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display:
                                                        dl.changes
                                                            .homesBookmarkVisible,
                                                    paddingTop: 40,
                                                    paddingBottom: 40,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0.5,
                                                    marginBottom: 0.5,
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
                                                    {dl.changes.bookmarkedHomeList.map(
                                                        (item, index) => {
                                                            return (
                                                                <div>
                                                                    <MmOfferedHomeCard
                                                                        {...item}
                                                                        {...dl
                                                                            .changes
                                                                            .bookmarkedHomeList}
                                                                        onClickEdit={(
                                                                            val
                                                                        ) => {}}
                                                                        onClickContact={(
                                                                            val
                                                                        ) => {
                                                                            val.stopPropagation()
                                                                            var id =
                                                                                dl
                                                                                    .changes
                                                                                    .bookmarkedHomeList[
                                                                                    index
                                                                                ]
                                                                                    ._id
                                                                            dl.functions.contactUsAction(
                                                                                id,
                                                                                'home',
                                                                                'large'
                                                                            )
                                                                        }}
                                                                        onClickDelete={(
                                                                            val
                                                                        ) => {}}
                                                                        onClickBookmark={(
                                                                            val
                                                                        ) => {}}
                                                                        onClickRemoveBookmark={(
                                                                            val
                                                                        ) => {
                                                                            val.stopPropagation()
                                                                            var id =
                                                                                dl
                                                                                    .changes
                                                                                    .bookmarkedHomeList[
                                                                                    index
                                                                                ]
                                                                                    .bookmarkId
                                                                            var body =
                                                                                {
                                                                                    bookmarkId:
                                                                                        id,
                                                                                }
                                                                            dl.functions.deleteBookmark(
                                                                                body
                                                                            )
                                                                        }}
                                                                        onClickPromote={(
                                                                            val
                                                                        ) => {}}
                                                                        onClick={(
                                                                            val
                                                                        ) => {
                                                                            var homeid =
                                                                                dl
                                                                                    .changes
                                                                                    .bookmarkedHomeList[
                                                                                    index
                                                                                ]
                                                                                    ._id
                                                                            dl.functions.common.relativeRedirect(
                                                                                `offeredhomedetails?homeId=${homeid}`,
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
                                                id="t18_1282_1577"
                                                style={{
                                                    width: 1096,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display:
                                                        dl.changes
                                                            .needAHomeBookmarkVisible,
                                                    paddingTop: 40,
                                                    paddingBottom: 40,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0.5,
                                                    marginBottom: 0,
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
                                                    {dl.changes.bookmarkedNeedAHomeList.map(
                                                        (item, index) => {
                                                            return (
                                                                <div>
                                                                    <MmWantedHomeCard
                                                                        {...item}
                                                                        {...dl
                                                                            .changes
                                                                            .bookmarkedNeedAHomeList}
                                                                        onClickEdit={(
                                                                            val
                                                                        ) => {}}
                                                                        onClickContact={(
                                                                            val
                                                                        ) => {
                                                                            val.stopPropagation()
                                                                            var id =
                                                                                dl
                                                                                    .changes
                                                                                    .bookmarkedNeedAHomeList[
                                                                                    index
                                                                                ]
                                                                                    ._id
                                                                            dl.functions.contactUsAction(
                                                                                id,
                                                                                'needahome',
                                                                                'large'
                                                                            )
                                                                        }}
                                                                        onClickDelete={(
                                                                            val
                                                                        ) => {}}
                                                                        onClickBookmark={(
                                                                            val
                                                                        ) => {}}
                                                                        onClickRemoveBookmark={(
                                                                            val
                                                                        ) => {
                                                                            val.stopPropagation()
                                                                            var id =
                                                                                dl
                                                                                    .changes
                                                                                    .bookmarkedNeedAHomeList[
                                                                                    index
                                                                                ]
                                                                                    .bookmarkId
                                                                            var body =
                                                                                {
                                                                                    bookmarkId:
                                                                                        id,
                                                                                }
                                                                            dl.functions.deleteBookmark(
                                                                                body
                                                                            )
                                                                        }}
                                                                        onClickPromote={(
                                                                            val
                                                                        ) => {}}
                                                                        onClick={(
                                                                            val
                                                                        ) => {
                                                                            var homeid =
                                                                                dl
                                                                                    .changes
                                                                                    .bookmarkedNeedAHomeList[
                                                                                    index
                                                                                ]
                                                                                    ._id
                                                                            dl.functions.common.relativeRedirect(
                                                                                `wantedhomedetails?homeId=${homeid}`,
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

                                        <MmEmptyList
                                            {...dl.changes
                                                .bookmarkNodataVisible}
                                        />

                                        <div
                                            id="t18_1282_1529"
                                            style={{
                                                height: 56,
                                                width: 1035,
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                paddingLeft: 60,
                                                paddingTop: 10,
                                                paddingBottom: 10,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                borderColor:
                                                    'rgba(207,206,206,1)',
                                                borderTopWidth: 1,
                                                borderStyle: 'solid',
                                                marginBottom: 0,
                                            }}
                                        >
                                            <MMPagination
                                                total={
                                                    dl.changes.paginationState
                                                        .total
                                                }
                                                active={
                                                    dl.changes.paginationState
                                                        .active
                                                }
                                                onChange={(val) => {
                                                    dl.changes.paginationState.active =
                                                        val
                                                    if (
                                                        dl.changes
                                                            .selectedBookmarkRentalType ==
                                                        'Home rentals'
                                                    ) {
                                                        if (
                                                            dl.changes
                                                                .selectedBookmarkType ==
                                                            'Wanted'
                                                        ) {
                                                            dl.functions.getBookmarkedNeedAHome(
                                                                Number(val)
                                                            )
                                                        } else {
                                                            dl.functions.getBookmarkedHomes(
                                                                Number(val)
                                                            )
                                                        }
                                                    }

                                                    if (
                                                        dl.changes
                                                            .selectedBookmarkRentalType ==
                                                        'Rooms/Roommates'
                                                    ) {
                                                        if (
                                                            dl.changes
                                                                .selectedBookmarkType ==
                                                            'Wanted'
                                                        ) {
                                                            dl.functions.getBookmarkedNeedArooms(
                                                                Number(val)
                                                            )
                                                        } else {
                                                            dl.functions.getBookmarkedrooms(
                                                                Number(val)
                                                            )
                                                        }
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <MmFooter />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Rentalbookmarks_1
