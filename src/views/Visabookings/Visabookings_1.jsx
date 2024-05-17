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
import MmEmptyList from '../../components/MmEmptyList.jsx'
import MyBookingsVisa from '../../components/MyBookingsVisa.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MyBookingsVisaMd from '../../components/MyBookingsVisaMd.jsx'
import MmBookingServiceMd from '../../components/MmBookingServiceMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MyBookingsVisaS from '../../components/MyBookingsVisaS.jsx'
import MmEmptyListS from '../../components/MmEmptyListS.jsx'
import MmBookingServiceS from '../../components/MmBookingServiceS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MyBookingsVisaXs from '../../components/MyBookingsVisaXs.jsx'
import MmEmptyListXs from '../../components/MmEmptyListXs.jsx'
import MmBookingServiceXs from '../../components/MmBookingServiceXs.jsx'

const Visabookings_1 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_1284_2985')
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
                id="t18_1284_2985"
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
                    id="t18_1284_2986"
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
                        id="t18_1284_2987"
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
                            id="t18_1284_2988"
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
                                id="t18_1284_2991"
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
                                    id="t18_1284_2992"
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
                                        id="t18_1284_2993"
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
                                            id="t18_1284_2994"
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
                                                id="t18_1284_2995"
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
                                                    id="t18_1284_2996"
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
                                                id="t18_1284_2997"
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
                                                    id="t18_1284_2998"
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
                                            id="t18_1284_2999"
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
                                                id="t18_1284_3000"
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
                                                        id="t18_1284_3001"
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
                                                    id="t18_1284_3002"
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
                                                id="t18_1284_3003"
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
                                                        id="t18_1284_3004"
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
                                                    id="t18_1284_3005"
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
                                                id="t18_1284_3006"
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
                                                    marginBottom: 29,
                                                }}
                                            >
                                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/e0582ed5631f09f0ce6c38fb37e6eb002ba248b5.png' !=
                                                '' ? (
                                                    <img
                                                        id="t18_1284_3007"
                                                        style={{
                                                            height: 18.921875,
                                                            width: 20.169921875,
                                                            display: 'flex',
                                                            borderWidth: 0,
                                                            marginLeft: 0,
                                                            marginRight: 4.5,
                                                        }}
                                                        src={
                                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/e0582ed5631f09f0ce6c38fb37e6eb002ba248b5.png'
                                                        }
                                                    ></img>
                                                ) : (
                                                    <></>
                                                )}

                                                <span
                                                    id="t18_1284_3008"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 18,
                                                        fontWeight: 600,
                                                        color: 'rgba(255,255,255,1)',
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
                                                id="t18_1284_3009"
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
                                                    marginBottom: 0,
                                                    cursor: 'pointer',
                                                }}
                                                onClick={(e) => {
                                                    dl.functions.viewsPlugin.showView(
                                                        'rentalbookmarks'
                                                    )
                                                    var currentPath =
                                                        dl.functions.common.getLastPath()
                                                    dl.functions.onLoadFunctions[
                                                        currentPath
                                                    ]()
                                                }}
                                            >
                                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/97319f975e094821cce4576862473b6ee7a16fca.png' !=
                                                '' ? (
                                                    <img
                                                        id="t18_1284_3010"
                                                        style={{
                                                            height: 20.2265625,
                                                            width: 18.10986328125,
                                                            display: 'flex',
                                                            borderWidth: 0,
                                                            marginLeft: 0,
                                                            marginRight: 5.5,
                                                        }}
                                                        src={
                                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/97319f975e094821cce4576862473b6ee7a16fca.png'
                                                        }
                                                    ></img>
                                                ) : (
                                                    <></>
                                                )}

                                                <span
                                                    id="t18_1284_3011"
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
                                                    Bookmarks
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1284_3012"
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
                                            id="t18_1284_3013"
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
                                                id="t18_1284_3014"
                                                style={{
                                                    height: 142,
                                                    width: 1076,
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
                                                    marginBottom: 0.5,
                                                }}
                                            >
                                                <div
                                                    id="t18_1284_3015"
                                                    style={{
                                                        height: 60,
                                                        borderRadius: 30,
                                                        backgroundColor:
                                                            'rgba(248,246,246,1.00)',
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'flex-end',
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
                                                        id="t18_1284_3016"
                                                        style={{
                                                            height: 32,
                                                            width: 193,
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
                                                        <span
                                                            id="t18_1284_3017"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 20,
                                                                fontWeight: 500,
                                                                color: 'rgba(186,15,23,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '24.204544067382812px',
                                                                textAlign:
                                                                    'center',
                                                            }}
                                                        >
                                                            Study abroad
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1284_3018"
                                                        style={{
                                                            height: 32,
                                                            width: 193,
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
                                                            marginRight: 0,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1284_3019"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 20,
                                                                fontWeight: 500,
                                                                color: 'rgba(255,255,255,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '24.204544067382812px',
                                                                textAlign:
                                                                    'center',
                                                            }}
                                                        >
                                                            Visa & Immigration
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                id="t18_1284_3025"
                                                style={{
                                                    width: 1096,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
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
                                                    {dl.changes.bookingList.map(
                                                        (item, index) => {
                                                            return (
                                                                <div>
                                                                    <MyBookingsVisa
                                                                        {...item}
                                                                        {...dl
                                                                            .changes
                                                                            .bookingList}
                                                                        onClickJoinHere={(
                                                                            val
                                                                        ) => {
                                                                            var url =
                                                                                dl
                                                                                    .changes
                                                                                    .bookingList[
                                                                                    index
                                                                                ]
                                                                                    .joinLink
                                                                            window.open(
                                                                                url,
                                                                                '_blank'
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
                                            {...dl.changes.bookingNoDataVisible}
                                        />

                                        <div
                                            id="t18_1284_3028"
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
                                                    var page = val
                                                    dl.functions.getBooking(
                                                        'Visa %26 Immigration',
                                                        '6',
                                                        page
                                                    )
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
export default Visabookings_1
