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

import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmServiceSelectorXs from '../../components/MmServiceSelectorXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmListingRideOffXs from '../../components/MmListingRideOffXs.jsx'
import MmListingRideWanXs from '../../components/MmListingRideWanXs.jsx'
import MmEmptyListXs from '../../components/MmEmptyListXs.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmServiceSelectorS from '../../components/MmServiceSelectorS.jsx'
import MmListingRideOffS from '../../components/MmListingRideOffS.jsx'
import MmListingRideWanS from '../../components/MmListingRideWanS.jsx'
import MmEmptyListS from '../../components/MmEmptyListS.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmServiceSelectorMd from '../../components/MmServiceSelectorMd.jsx'
import MmListingRideOffMd from '../../components/MmListingRideOffMd.jsx'
import MmListingRideWanMd from '../../components/MmListingRideWanMd.jsx'
import MmEmptyList from '../../components/MmEmptyList.jsx'
import MmHeader from '../../components/MmHeader.jsx'
import MmFooter from '../../components/MmFooter.jsx'
import MmListingRideOff from '../../components/MmListingRideOff.jsx'
import MmListingRideWan from '../../components/MmListingRideWan.jsx'

const Ridebookmarks_1 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_1282_1776')
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
                id="t18_1282_1776"
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
                    id="t18_1282_1777"
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
                        id="t18_1282_1778"
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
                            id="t18_1282_1779"
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
                                id="t18_1282_1782"
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
                                    id="t18_1282_1783"
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
                                        id="t18_1282_1784"
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
                                            id="t18_1282_1785"
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
                                                id="t18_1282_1786"
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
                                                    id="t18_1282_1787"
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
                                                id="t18_1282_1788"
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
                                                    id="t18_1282_1789"
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
                                            id="t18_1282_1790"
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
                                                id="t18_1282_1791"
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
                                                        id="t18_1282_1792"
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
                                                    id="t18_1282_1793"
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
                                                id="t18_1282_1794"
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
                                                        id="t18_1282_1795"
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
                                                    id="t18_1282_1796"
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
                                                id="t18_1282_1797"
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
                                                        id="t18_1282_1798"
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
                                                    id="t18_1282_1799"
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
                                                id="t18_1282_1800"
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
                                                        id="t18_1282_1801"
                                                        style={{
                                                            height: 20.2265625,
                                                            width: 18.1103515625,
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
                                                    id="t18_1282_1802"
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
                                        id="t18_1282_1803"
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
                                            id="t18_1282_1804"
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
                                                id="t18_1282_1805"
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
                                                    id="t18_1282_1806"
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
                                                        id="t18_1282_1807"
                                                        style={{
                                                            height: 32,
                                                            width: 140,
                                                            borderRadius: 30,
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
                                                            id="t18_1282_1808"
                                                            onClick={() => {
                                                                dl.functions.viewsPlugin.showView(
                                                                    'rentalbookmarks'
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
                                                            Rentals & Properties
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1282_1809"
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
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1282_1810"
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
                                                            Ride Sharing
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1282_1811"
                                                        style={{
                                                            height: 32,
                                                            width: 140,
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
                                                            id="t18_1282_1812"
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
                                                        id="t18_1282_1813"
                                                        style={{
                                                            height: 32,
                                                            width: 140,
                                                            borderRadius: 30,
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
                                                            id="t18_1282_1814"
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
                                                        id="t18_1282_1815"
                                                        style={{
                                                            height: 32,
                                                            width: 140,
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
                                                            id="t18_1282_1816"
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
                                                        id="t18_1282_1817"
                                                        style={{
                                                            height: 32,
                                                            width: 140,
                                                            borderRadius: 30,
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
                                                            id="t18_1282_1818"
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
                                                id="t18_1282_1819"
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
                                                    id="t18_1282_1823"
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
                                                        cursor: 'pointer',
                                                    }}
                                                    onChange={(val) => {
                                                        val = val.target.value

                                                        dl.changes.selectedRideBookmarkType =
                                                            val

                                                        if (
                                                            dl.changes
                                                                .selectedRideBookmarkType ==
                                                            'Offered'
                                                        ) {
                                                            dl.changes.offeredRideVisible =
                                                                'flex'
                                                            dl.changes.wantedRideVisible =
                                                                'none'
                                                            dl.functions.getBookmarkedRides(
                                                                1
                                                            )
                                                        }

                                                        if (
                                                            dl.changes
                                                                .selectedRideBookmarkType ==
                                                            'Wanted'
                                                        ) {
                                                            dl.changes.offeredRideVisible =
                                                                'none'
                                                            dl.changes.wantedRideVisible =
                                                                'flex'
                                                            dl.functions.getBookmarkedRides(
                                                                1
                                                            )
                                                        }

                                                        // dl.functions.getBookmarkedRides(1)
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
                                                                                .selectedRideBookmarkType
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
                                                id="t18_1282_2042"
                                                style={{
                                                    width: 1096,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display:
                                                        dl.changes
                                                            .offeredRideVisible,
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
                                                    {dl.changes.bookmarkedRideList.map(
                                                        (item, index) => {
                                                            return (
                                                                <div>
                                                                    <MmListingRideOff
                                                                        {...item}
                                                                        {...dl
                                                                            .changes
                                                                            .bookmarkedRideList}
                                                                        onClickContact={(
                                                                            val
                                                                        ) => {
                                                                            val.stopPropagation()
                                                                            dl.changes.contactUSForm.firstname =
                                                                                dl.changes.userDetail.firstName
                                                                            dl.changes.contactUSForm.lastname =
                                                                                dl.changes.userDetail.lastName
                                                                            dl.changes.contactUSForm.email =
                                                                                dl.changes.userDetail.email
                                                                            if (
                                                                                dl
                                                                                    .changes
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
                                                                        }}
                                                                        onClickDelete={(
                                                                            val
                                                                        ) => {}}
                                                                        onClickEdit={(
                                                                            val
                                                                        ) => {}}
                                                                        onClickPromote={(
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
                                                                                    .bookmarkedRideList[
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
                                                                        onClick={(
                                                                            val
                                                                        ) => {
                                                                            var rideId =
                                                                                dl
                                                                                    .changes
                                                                                    .bookmarkedRideList[
                                                                                    index
                                                                                ]
                                                                                    ._id
                                                                            dl.functions.common.relativeRedirect(
                                                                                `offeredride?rideId=${rideId}`,
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
                                                id="t18_1282_2045"
                                                style={{
                                                    width: 1096,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display:
                                                        dl.changes
                                                            .wantedRideVisible,
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
                                                    {dl.changes.bookmarkedRideList.map(
                                                        (item, index) => {
                                                            return (
                                                                <div>
                                                                    <MmListingRideWan
                                                                        {...item}
                                                                        {...dl
                                                                            .changes
                                                                            .bookmarkedRideList}
                                                                        onClickContact={(
                                                                            val
                                                                        ) => {
                                                                            val.stopPropagation()
                                                                            dl.changes.contactUSForm.firstname =
                                                                                dl.changes.userDetail.firstName
                                                                            dl.changes.contactUSForm.lastname =
                                                                                dl.changes.userDetail.lastName
                                                                            dl.changes.contactUSForm.email =
                                                                                dl.changes.userDetail.email
                                                                            if (
                                                                                dl
                                                                                    .changes
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
                                                                        }}
                                                                        onClickDelete={(
                                                                            val
                                                                        ) => {}}
                                                                        onClickEdit={(
                                                                            val
                                                                        ) => {}}
                                                                        onClickPromote={(
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
                                                                                    .bookmarkedRideList[
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
                                                                        onClick={(
                                                                            val
                                                                        ) => {
                                                                            var rideId =
                                                                                dl
                                                                                    .changes
                                                                                    .bookmarkedRideList[
                                                                                    index
                                                                                ]
                                                                                    ._id
                                                                            dl.functions.common.relativeRedirect(
                                                                                `wantedride?rideId=${rideId}`,
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
                                            id="t18_1282_1838"
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
                                                            .selectedRideBookmarkType ==
                                                        'Offered'
                                                    ) {
                                                        dl.changes.offeredRideVisible =
                                                            'flex'
                                                        dl.changes.wantedRideVisible =
                                                            'none'
                                                        dl.functions.getBookmarkedRides(
                                                            Number(val)
                                                        )
                                                    }

                                                    if (
                                                        dl.changes
                                                            .selectedRideBookmarkType ==
                                                        'Wanted'
                                                    ) {
                                                        dl.changes.offeredRideVisible =
                                                            'none'
                                                        dl.changes.wantedRideVisible =
                                                            'flex'
                                                        dl.functions.getBookmarkedRides(
                                                            Number(val)
                                                        )
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
export default Ridebookmarks_1
