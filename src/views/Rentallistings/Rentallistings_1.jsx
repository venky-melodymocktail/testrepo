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
import MmOfferedRoomCard from '../../components/MmOfferedRoomCard.jsx'
import MmWantedRoomCard from '../../components/MmWantedRoomCard.jsx'
import MmOfferedHomeCard from '../../components/MmOfferedHomeCard.jsx'
import MmWantedHomeCard from '../../components/MmWantedHomeCard.jsx'
import MmFooter from '../../components/MmFooter.jsx'
import MmEmptyList from '../../components/MmEmptyList.jsx'
import MmOfferedRoomCardMd from '../../components/MmOfferedRoomCardMd.jsx'
import MmWantedRoomCardMd from '../../components/MmWantedRoomCardMd.jsx'
import MmOfferedHomeCardMd from '../../components/MmOfferedHomeCardMd.jsx'
import MmWantedHomeCardMd from '../../components/MmWantedHomeCardMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmListingServiceMd from '../../components/MmListingServiceMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmOfferedRoomCardS from '../../components/MmOfferedRoomCardS.jsx'
import MmOfferedHomeCardS from '../../components/MmOfferedHomeCardS.jsx'
import MmEmptyListS from '../../components/MmEmptyListS.jsx'
import MmListingServiceS from '../../components/MmListingServiceS.jsx'
import MmWantedHomeCardS from '../../components/MmWantedHomeCardS.jsx'
import MmWantedRoomCardS from '../../components/MmWantedRoomCardS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmOfferedRoomCardXs from '../../components/MmOfferedRoomCardXs.jsx'
import MmWantedRoomCardXs from '../../components/MmWantedRoomCardXs.jsx'
import MmOfferedHomeCardXs from '../../components/MmOfferedHomeCardXs.jsx'
import MmWantedHomeCardXs from '../../components/MmWantedHomeCardXs.jsx'
import MmEmptyListXs from '../../components/MmEmptyListXs.jsx'
import MmListingServiceXs from '../../components/MmListingServiceXs.jsx'
import LogoutIcon from '@mui/icons-material/Logout'

const Rentallistings_1 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_1262_420')
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
                id="t18_1262_420"
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
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <div
                    id="t18_1261_275"
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
                        id="t18_1261_276"
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
                            id="t18_1261_277"
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
                                id="t18_1261_280"
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
                                    id="t18_1261_281"
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
                                        id="t18_1261_282"
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
                                            id="t18_1261_283"
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
                                                id="t18_1261_284"
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
                                                    id="t18_1261_285"
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
                                                id="t18_1261_286"
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
                                                    id="t18_1261_287"
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
                                            id="t18_1261_288"
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
                                                id="t18_1261_289"
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
                                                        id="t18_1261_290"
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
                                                    id="t18_1261_291"
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
                                                id="t18_1261_292"
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
                                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/1c6267d938b40e6bc34677fe686ad0ab97c4b478.png' !=
                                                '' ? (
                                                    <img
                                                        id="t18_1261_293"
                                                        style={{
                                                            height: 17.6015625,
                                                            width: 20.080078125,
                                                            display: 'flex',
                                                            borderWidth: 0,
                                                            marginLeft: 0,
                                                            marginRight: 4.5,
                                                        }}
                                                        src={
                                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/1c6267d938b40e6bc34677fe686ad0ab97c4b478.png'
                                                        }
                                                    ></img>
                                                ) : (
                                                    <></>
                                                )}

                                                <span
                                                    id="t18_1261_294"
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
                                                    My Listings
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1261_295"
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
                                                        id="t18_1261_296"
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
                                                    id="t18_1261_297"
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
                                                id="t18_1261_298"
                                                className={
                                                    ' grayshadoweffect-btn'
                                                }
                                                style={{
                                                    height: 52,
                                                    width: 173,
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
                                                        'rentalbookmarks'
                                                    )
                                                    var currentPath =
                                                        dl.functions.common.getLastPath()
                                                    dl.functions.onLoadFunctions[
                                                        currentPath
                                                    ]()
                                                }}
                                            >
                                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/f4d5f41cd2eb76bac1e87a4fabb016db3c68bcdd.png' !=
                                                '' ? (
                                                    <img
                                                        id="t18_1261_299"
                                                        style={{
                                                            height: 20.2265625,
                                                            width: 18.1103515625,
                                                            display: 'flex',
                                                            borderWidth: 0,
                                                            marginLeft: 0,
                                                            marginRight: 5.5,
                                                        }}
                                                        src={
                                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/f4d5f41cd2eb76bac1e87a4fabb016db3c68bcdd.png'
                                                        }
                                                    ></img>
                                                ) : (
                                                    <></>
                                                )}

                                                <span
                                                    id="t18_1261_300"
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

                                            <div
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
                                                    dl.functions.modalsPlugin.openModal(
                                                        'logOutPopup'
                                                    )

                                                    // alert("Logout")
                                                }}
                                            >
                                                <LogoutIcon
                                                    style={{
                                                        height: 21,
                                                        width: 19,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                        marginLeft: 0,
                                                        marginRight: 5.5,
                                                    }}
                                                    color="rgba(0,0,0,1)"
                                                />

                                                <span
                                                    id="t18_598_150"
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
                                                    Logout
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1261_301"
                                        style={{
                                            width: 1095,
                                            flexDirection: 'column',
                                            alignItems: 'center',
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
                                            id="t18_1261_302"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_1261_303"
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
                                                    id="t18_1261_304"
                                                    style={{
                                                        height: 52,
                                                        width: 925,
                                                        borderRadius: 30,
                                                        backgroundColor:
                                                            'rgba(248,246,246,1.00)',
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        paddingLeft: 4,
                                                        paddingRight: 4,
                                                        paddingTop: 4,
                                                        paddingBottom: 4,
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 2,
                                                        borderColor:
                                                            'rgba(186,15,23,1)',
                                                        borderStyle: 'solid',
                                                    }}
                                                >
                                                    <div
                                                        id="t18_1261_305"
                                                        style={{
                                                            height: 32,
                                                            width: 210,
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
                                                            marginRight: 0.5,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1261_306"
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
                                                            Rentals & Properties
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1262_401"
                                                        style={{
                                                            height: 32,
                                                            width: 210,
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
                                                            marginLeft: 0.5,
                                                            marginRight: 0.5,
                                                            cursor: 'pointer',
                                                        }}
                                                        onClick={(e) => {
                                                            dl.functions.viewsPlugin.showView(
                                                                'ridelistings'
                                                            )
                                                            var currentPath =
                                                                dl.functions.common.getLastPath()
                                                            dl.functions.onLoadFunctions[
                                                                currentPath
                                                            ]()
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1261_307"
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
                                                            Ride Sharing
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1262_402"
                                                        style={{
                                                            height: 32,
                                                            width: 210,
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
                                                            marginLeft: 0.5,
                                                            marginRight: 0.5,
                                                            cursor: 'pointer',
                                                        }}
                                                        onClick={(e) => {
                                                            dl.functions.viewsPlugin.showView(
                                                                'travelcompanionlisting'
                                                            )
                                                            var currentPath =
                                                                dl.functions.common.getLastPath()
                                                            dl.functions.onLoadFunctions[
                                                                currentPath
                                                            ]()
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1261_308"
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
                                                            Travel Companion
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1262_403"
                                                        style={{
                                                            height: 32,
                                                            width: 210,
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
                                                            marginLeft: 0.5,
                                                            marginRight: 0,
                                                            cursor: 'pointer',
                                                        }}
                                                        onClick={(e) => {
                                                            dl.functions.viewsPlugin.showView(
                                                                'questionlistings'
                                                            )
                                                            var currentPath =
                                                                dl.functions.common.getLastPath()
                                                            dl.functions.onLoadFunctions[
                                                                currentPath
                                                            ]()
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1261_309"
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
                                                            Visa & Immigration
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                id="t18_1261_310"
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
                                                {/* <select name="cars" id='t18_1261_311'
                style={{height:54,width:270,borderRadius:5,backgroundColor:"rgba(255,255,255,1.00)",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",display:"flex",paddingLeft:10,paddingRight:10,position:"relative",overflow:"visible",borderWidth:1,borderColor:"rgba(186,15,23,1)",borderStyle:"solid",marginLeft:0,marginRight:15,cursor:"pointer",}}

                
                onChange={(val)=>{
                    val = val.target.value
                    
                    dl.changes.selectedListingrentelType = val

if(dl.changes.selectedListingrentelType=="Rooms/Roommates"){
    if(dl.changes.selectedListingType=="Offered"){
        // alert('f1 room offered')
        dl.functions.getRoomListing("6", "1")
    }
    if(dl.changes.selectedListingType=="Wanted"){
        // alert('f1 room wanted')

        dl.functions.getneedARoomListing("6", "1")
    }
}

if(dl.changes.selectedListingrentelType=="Home rentals"){
    if(dl.changes.selectedListingType=="Offered"){
        // alert('f1 home offered')

        dl.functions.getHomeListing("6", "1")
    }
    if(dl.changes.selectedListingType=="Wanted"){
        // alert('f1 home wanted')

        dl.functions.getneedAHomeListing("6", "1")
    }
}
                }}
                >

<option value="" disabled selected>
              Select your option
            </option>
                {Array.isArray(dl.changes.bookmarkRentelType) && dl.changes.bookmarkRentelType.map((item, index) => {
                    return <option value={item}  selected={item==dl.changes.selectedListingrentelType}>{item}</option>;
                })}


            </select> */}

                                                <select
                                                    name="cars"
                                                    id="t18_1262_398"
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

                                                        dl.changes.selectedListingType =
                                                            val
                                                        // if(dl.changes.selectedListingrentelType=="Rooms/Roommates"){
                                                        if (
                                                            dl.changes
                                                                .selectedListingType ==
                                                            'Offered'
                                                        ) {
                                                            // alert('f2 room offered')

                                                            dl.functions.getRoomListing(
                                                                '6',
                                                                '1'
                                                            )
                                                        }
                                                        if (
                                                            dl.changes
                                                                .selectedListingType ==
                                                            'Wanted'
                                                        ) {
                                                            // alert('f2 room wanted')

                                                            dl.functions.getneedARoomListing(
                                                                '6',
                                                                '1'
                                                            )
                                                        }
                                                        // }

                                                        // if(dl.changes.selectedListingrentelType=="Home rentals"){
                                                        // if(dl.changes.selectedListingType=="Offered"){
                                                        //     // alert('f2 home offered')

                                                        //     dl.functions.getHomeListing("6", "1")
                                                        // }
                                                        // if(dl.changes.selectedListingType=="Wanted"){
                                                        //     // alert('f2 home wanted')

                                                        //     dl.functions.getneedAHomeListing("6", "1")
                                                        // }
                                                        // }
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
                                                                                .selectedListingType
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
                                                id="t18_1267_3090"
                                                style={{
                                                    width: 1036,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display:
                                                        dl.changes
                                                            .roomlistingVisible,
                                                    paddingLeft: 30,
                                                    paddingRight: 30,
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
                                                    {dl.changes.roomsListing.map(
                                                        (item, index) => {
                                                            return (
                                                                <div>
                                                                    <MmOfferedRoomCard
                                                                        {...item}
                                                                        {...dl
                                                                            .changes
                                                                            .roomsListing}
                                                                        onClickEdit={(
                                                                            val
                                                                        ) => {
                                                                            val.stopPropagation()
                                                                            if (
                                                                                dl
                                                                                    .changes
                                                                                    .roomsListing[
                                                                                    index
                                                                                ]
                                                                                    .rentalType ==
                                                                                'Home'
                                                                            ) {
                                                                                var roomid =
                                                                                    dl
                                                                                        .changes
                                                                                        .roomsListing[
                                                                                        index
                                                                                    ]
                                                                                        ._id
                                                                                dl.functions.common.relativeRedirect(
                                                                                    `listmyhomeform?homeId=${roomid}&mode=edit`,
                                                                                    true
                                                                                )
                                                                            } else {
                                                                                var roomid =
                                                                                    dl
                                                                                        .changes
                                                                                        .roomsListing[
                                                                                        index
                                                                                    ]
                                                                                        ._id
                                                                                dl.functions.common.relativeRedirect(
                                                                                    `listmyroomform?roomId=${roomid}&mode=edit`,
                                                                                    true
                                                                                )
                                                                            }
                                                                        }}
                                                                        onClickContact={(
                                                                            val
                                                                        ) => {}}
                                                                        onClickDelete={(
                                                                            val
                                                                        ) => {
                                                                            dl.functions.modalsPlugin.openModal(
                                                                                'loading'
                                                                            )
                                                                            val.stopPropagation()
                                                                            const run =
                                                                                async () => {
                                                                                    var body =
                                                                                        {
                                                                                            id: dl
                                                                                                .changes
                                                                                                .roomsListing[
                                                                                                index
                                                                                            ]
                                                                                                ._id,
                                                                                            status: 'inactive',
                                                                                        }
                                                                                    var res =
                                                                                        await dl.functions.updateRooms(
                                                                                            body
                                                                                        )
                                                                                    if (
                                                                                        res ==
                                                                                        200
                                                                                    ) {
                                                                                        dl.functions.getRoomListing(
                                                                                            '6',
                                                                                            1
                                                                                        )
                                                                                        dl.functions.modalsPlugin.closeModal(
                                                                                            'loading'
                                                                                        )
                                                                                    }
                                                                                }

                                                                            run()
                                                                        }}
                                                                        onClickBookMark={(
                                                                            val
                                                                        ) => {}}
                                                                        onClickRemoveBookMark={(
                                                                            val
                                                                        ) => {}}
                                                                        onClickPromote={(
                                                                            val
                                                                        ) => {
                                                                            val.stopPropagation()
                                                                            var roomid =
                                                                                dl
                                                                                    .changes
                                                                                    .roomsListing[
                                                                                    index
                                                                                ]
                                                                                    ._id
                                                                            var title =
                                                                                dl
                                                                                    .changes
                                                                                    .roomsListing[
                                                                                    index
                                                                                ]
                                                                                    .title
                                                                            dl.changes.promoteDetail.serviceType =
                                                                                'rental'
                                                                            dl.changes.promoteDetail.serviceId =
                                                                                roomid
                                                                            dl.changes.promoteDetail.title =
                                                                                title
                                                                            dl.changes.promoteDetail[
                                                                                'navigationdetail'
                                                                            ] =
                                                                                'Rentals & Properties << Rental << Offered'
                                                                            dl.functions.modalsPlugin.openModal(
                                                                                'promoteLg'
                                                                            )
                                                                        }}
                                                                        onClick={(
                                                                            val
                                                                        ) => {
                                                                            if (
                                                                                dl
                                                                                    .changes
                                                                                    .roomsListing[
                                                                                    index
                                                                                ]
                                                                                    .rentalType ==
                                                                                'Home'
                                                                            ) {
                                                                                var homeid =
                                                                                    dl
                                                                                        .changes
                                                                                        .roomsListing[
                                                                                        index
                                                                                    ]
                                                                                        ._id
                                                                                dl.functions.common.relativeRedirect(
                                                                                    `offeredhomedetails?homeId=${homeid}`,
                                                                                    true
                                                                                )
                                                                            } else {
                                                                                var roomid =
                                                                                    dl
                                                                                        .changes
                                                                                        .roomsListing[
                                                                                        index
                                                                                    ]
                                                                                        ._id
                                                                                dl.functions.common.relativeRedirect(
                                                                                    `offeredroomdetails?roomId=${roomid}`,
                                                                                    true
                                                                                )
                                                                            }
                                                                        }}
                                                                    />
                                                                </div>
                                                            )
                                                        }
                                                    )}
                                                </div>
                                            </div>

                                            <div
                                                id="t18_1267_3093"
                                                style={{
                                                    width: 1036,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display:
                                                        dl.changes
                                                            .needARoomListingVisible,
                                                    paddingLeft: 30,
                                                    paddingRight: 30,
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
                                                    {dl.changes.needARoomListing.map(
                                                        (item, index) => {
                                                            return (
                                                                <div>
                                                                    <MmWantedRoomCard
                                                                        {...item}
                                                                        {...dl
                                                                            .changes
                                                                            .needARoomListing}
                                                                        onClickEdit={(
                                                                            val
                                                                        ) => {
                                                                            val.stopPropagation()
                                                                            if (
                                                                                dl
                                                                                    .changes
                                                                                    .needARoomListing[
                                                                                    index
                                                                                ]
                                                                                    .rentalType ==
                                                                                'Home'
                                                                            ) {
                                                                                var homeId =
                                                                                    dl
                                                                                        .changes
                                                                                        .needARoomListing[
                                                                                        index
                                                                                    ]
                                                                                        ._id
                                                                                dl.functions.common.relativeRedirect(
                                                                                    `ineedahomeform?homeId=${homeId}&mode=edit`,
                                                                                    true
                                                                                )
                                                                            } else {
                                                                                var roomid =
                                                                                    dl
                                                                                        .changes
                                                                                        .needARoomListing[
                                                                                        index
                                                                                    ]
                                                                                        ._id
                                                                                dl.functions.common.relativeRedirect(
                                                                                    `ineedaroomform?roomId=${roomid}&mode=edit`,
                                                                                    true
                                                                                )
                                                                            }
                                                                        }}
                                                                        onClickContact={(
                                                                            val
                                                                        ) => {}}
                                                                        onClickDelete={(
                                                                            val
                                                                        ) => {
                                                                            dl.functions.modalsPlugin.openModal(
                                                                                'loading'
                                                                            )
                                                                            val.stopPropagation()
                                                                            const run =
                                                                                async () => {
                                                                                    var body =
                                                                                        {
                                                                                            id: dl
                                                                                                .changes
                                                                                                .needARoomListing[
                                                                                                index
                                                                                            ]
                                                                                                ._id,
                                                                                            status: 'inactive',
                                                                                        }
                                                                                    var res =
                                                                                        await dl.functions.updateNeedARoom(
                                                                                            body
                                                                                        )
                                                                                    if (
                                                                                        res ==
                                                                                        200
                                                                                    ) {
                                                                                        dl.functions.getneedARoomListing(
                                                                                            '6',
                                                                                            1
                                                                                        )
                                                                                        dl.functions.modalsPlugin.closeModal(
                                                                                            'loading'
                                                                                        )
                                                                                    }
                                                                                }
                                                                            run()
                                                                        }}
                                                                        onClickBookmark={(
                                                                            val
                                                                        ) => {}}
                                                                        onClickRemoveBookmark={(
                                                                            val
                                                                        ) => {}}
                                                                        onClickPromote={(
                                                                            val
                                                                        ) => {
                                                                            val.stopPropagation()
                                                                            var roomid =
                                                                                dl
                                                                                    .changes
                                                                                    .needARoomListing[
                                                                                    index
                                                                                ]
                                                                                    ._id
                                                                            var title =
                                                                                dl
                                                                                    .changes
                                                                                    .needARoomListing[
                                                                                    index
                                                                                ]
                                                                                    .title

                                                                            dl.changes.promoteDetail.serviceType =
                                                                                'needarental'
                                                                            dl.changes.promoteDetail.serviceId =
                                                                                roomid
                                                                            dl.changes.promoteDetail.title =
                                                                                title
                                                                            dl.changes.promoteDetail[
                                                                                'navigationdetail'
                                                                            ] =
                                                                                'Rentals & Properties << Rental << Wanted'
                                                                            dl.functions.modalsPlugin.openModal(
                                                                                'promoteLg'
                                                                            )
                                                                        }}
                                                                        onClick={(
                                                                            val
                                                                        ) => {
                                                                            if (
                                                                                dl
                                                                                    .changes
                                                                                    .needARoomListing[
                                                                                    index
                                                                                ]
                                                                                    .rentalType ==
                                                                                'Home'
                                                                            ) {
                                                                                var homeid =
                                                                                    dl
                                                                                        .changes
                                                                                        .needARoomListing[
                                                                                        index
                                                                                    ]
                                                                                        ._id
                                                                                dl.functions.common.relativeRedirect(
                                                                                    `wantedhomedetails?homeId=${homeid}`,
                                                                                    true
                                                                                )
                                                                            } else {
                                                                                var roomid =
                                                                                    dl
                                                                                        .changes
                                                                                        .needARoomListing[
                                                                                        index
                                                                                    ]
                                                                                        ._id
                                                                                dl.functions.common.relativeRedirect(
                                                                                    `wantedroomdetails?roomId=${roomid}`,
                                                                                    true
                                                                                )
                                                                            }
                                                                        }}
                                                                    />
                                                                </div>
                                                            )
                                                        }
                                                    )}
                                                </div>
                                            </div>

                                            <div
                                                id="t18_1267_3096"
                                                style={{
                                                    width: 1036,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display:
                                                        dl.changes
                                                            .homeListingVisible,
                                                    paddingLeft: 30,
                                                    paddingRight: 30,
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
                                                    {dl.changes.homeRentelsListing.map(
                                                        (item, index) => {
                                                            return (
                                                                <div>
                                                                    <MmOfferedHomeCard
                                                                        {...item}
                                                                        {...dl
                                                                            .changes
                                                                            .homeRentelsListing}
                                                                        onClickEdit={(
                                                                            val
                                                                        ) => {
                                                                            val.stopPropagation()
                                                                            var roomid =
                                                                                dl
                                                                                    .changes
                                                                                    .homeRentelsListing[
                                                                                    index
                                                                                ]
                                                                                    ._id
                                                                            dl.functions.common.relativeRedirect(
                                                                                `listmyhomeform?homeId=${roomid}&mode=edit`,
                                                                                true
                                                                            )
                                                                        }}
                                                                        onClickContact={(
                                                                            val
                                                                        ) => {}}
                                                                        onClickDelete={(
                                                                            val
                                                                        ) => {
                                                                            val.stopPropagation()
                                                                            const run =
                                                                                async () => {
                                                                                    var body =
                                                                                        {
                                                                                            id: dl
                                                                                                .changes
                                                                                                .homeRentelsListing[
                                                                                                index
                                                                                            ]
                                                                                                ._id,
                                                                                            status: 'inactive',
                                                                                        }
                                                                                    var res =
                                                                                        await dl.functions.updateHomeRental(
                                                                                            body
                                                                                        )
                                                                                    if (
                                                                                        res ==
                                                                                        200
                                                                                    ) {
                                                                                        dl.functions.getHomeListing(
                                                                                            '6',
                                                                                            1
                                                                                        )
                                                                                    }
                                                                                }

                                                                            run()
                                                                        }}
                                                                        onClickBookmark={(
                                                                            val
                                                                        ) => {}}
                                                                        onClickRemoveBookmark={(
                                                                            val
                                                                        ) => {}}
                                                                        onClickPromote={(
                                                                            val
                                                                        ) => {
                                                                            val.stopPropagation()
                                                                            var homeid =
                                                                                dl
                                                                                    .changes
                                                                                    .homeRentelsListing[
                                                                                    index
                                                                                ]
                                                                                    ._id
                                                                            var title =
                                                                                dl
                                                                                    .changes
                                                                                    .homeRentelsListing[
                                                                                    index
                                                                                ]
                                                                                    .title
                                                                            dl.changes.promoteDetail.serviceType =
                                                                                'home'
                                                                            dl.changes.promoteDetail.serviceId =
                                                                                homeid
                                                                            dl.changes.promoteDetail.title =
                                                                                title
                                                                            dl.changes.promoteDetail[
                                                                                'navigationdetail'
                                                                            ] =
                                                                                'Rentals & Properties << Home Rentals << Offered'
                                                                            dl.functions.modalsPlugin.openModal(
                                                                                'promoteLg'
                                                                            )
                                                                        }}
                                                                        onClick={(
                                                                            val
                                                                        ) => {
                                                                            var homeid =
                                                                                dl
                                                                                    .changes
                                                                                    .homeRentelsListing[
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
                                                id="t18_1267_3099"
                                                style={{
                                                    width: 1036,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display:
                                                        dl.changes
                                                            .needAHomeListingVisible,
                                                    paddingLeft: 30,
                                                    paddingRight: 30,
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
                                                    {dl.changes.needAHomeListing.map(
                                                        (item, index) => {
                                                            return (
                                                                <div>
                                                                    <MmWantedHomeCard
                                                                        {...item}
                                                                        {...dl
                                                                            .changes
                                                                            .needAHomeListing}
                                                                        onClickEdit={(
                                                                            val
                                                                        ) => {
                                                                            val.stopPropagation()
                                                                            var homeId =
                                                                                dl
                                                                                    .changes
                                                                                    .needAHomeListing[
                                                                                    index
                                                                                ]
                                                                                    ._id
                                                                            dl.functions.common.relativeRedirect(
                                                                                `ineedahomeform?homeId=${homeId}&mode=edit`,
                                                                                true
                                                                            )
                                                                        }}
                                                                        onClickContact={(
                                                                            val
                                                                        ) => {}}
                                                                        onClickDelete={(
                                                                            val
                                                                        ) => {
                                                                            val.stopPropagation()
                                                                            const run =
                                                                                async () => {
                                                                                    var body =
                                                                                        {
                                                                                            id: dl
                                                                                                .changes
                                                                                                .needAHomeListing[
                                                                                                index
                                                                                            ]
                                                                                                ._id,
                                                                                            status: 'inactive',
                                                                                        }
                                                                                    var res =
                                                                                        await dl.functions.updateNeedAHome(
                                                                                            body
                                                                                        )
                                                                                    if (
                                                                                        res ==
                                                                                        200
                                                                                    ) {
                                                                                        dl.functions.getneedAHomeListing(
                                                                                            '6',
                                                                                            1
                                                                                        )
                                                                                    }
                                                                                }

                                                                            run()
                                                                        }}
                                                                        onClickBookmark={(
                                                                            val
                                                                        ) => {}}
                                                                        onClickRemoveBookmark={(
                                                                            val
                                                                        ) => {}}
                                                                        onClickPromote={(
                                                                            val
                                                                        ) => {
                                                                            val.stopPropagation()
                                                                            var homeid =
                                                                                dl
                                                                                    .changes
                                                                                    .needAHomeListing[
                                                                                    index
                                                                                ]
                                                                                    ._id
                                                                            var title =
                                                                                dl
                                                                                    .changes
                                                                                    .needAHomeListing[
                                                                                    index
                                                                                ]
                                                                                    .title
                                                                            dl.changes.promoteDetail.serviceType =
                                                                                'needahome'
                                                                            dl.changes.promoteDetail.serviceId =
                                                                                homeid
                                                                            dl.changes.promoteDetail.title =
                                                                                title
                                                                            dl.changes.promoteDetail[
                                                                                'navigationdetail'
                                                                            ] =
                                                                                'Rentals & Properties << Home Rentals << Wanted'
                                                                            dl.functions.modalsPlugin.openModal(
                                                                                'promoteLg'
                                                                            )
                                                                        }}
                                                                        onClick={(
                                                                            val
                                                                        ) => {
                                                                            var homeid =
                                                                                dl
                                                                                    .changes
                                                                                    .needAHomeListing[
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
                                                .rentelistingNoDataVisible}
                                        />

                                        <div
                                            id="t18_1261_360"
                                            style={{
                                                height: 56,
                                                width: 1016,
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
                                                    // if(dl.changes.selectedListingrentelType=="Rooms/Roommates"){
                                                    if (
                                                        dl.changes
                                                            .selectedListingType ==
                                                        'Offered'
                                                    ) {
                                                        dl.functions.getRoomListing(
                                                            '6',
                                                            val
                                                        )
                                                    }
                                                    if (
                                                        dl.changes
                                                            .selectedListingType ==
                                                        'Wanted'
                                                    ) {
                                                        dl.functions.getneedARoomListing(
                                                            '6',
                                                            val
                                                        )
                                                    }
                                                    // }

                                                    // if(dl.changes.selectedListingrentelType=="Home rentals"){
                                                    //     if(dl.changes.selectedListingType=="Offered"){
                                                    //         dl.functions.getHomeListing("6", val)
                                                    //     }
                                                    //     if(dl.changes.selectedListingType=="Wanted"){
                                                    //         dl.functions.getneedAHomeListing("6", val)
                                                    //     }
                                                    // }
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
export default Rentallistings_1
