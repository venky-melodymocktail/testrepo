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
import MmCompanionOff from '../../components/MmCompanionOff.jsx'
import MmCompanionWan from '../../components/MmCompanionWan.jsx'
import MmEmptyList from '../../components/MmEmptyList.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmCompanionOffMd from '../../components/MmCompanionOffMd.jsx'
import MmCompanionWanMd from '../../components/MmCompanionWanMd.jsx'
import MmListingServiceMd from '../../components/MmListingServiceMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmCompanionOffS from '../../components/MmCompanionOffS.jsx'
import MmCompanionWanS from '../../components/MmCompanionWanS.jsx'
import MmListingServiceS from '../../components/MmListingServiceS.jsx'
import MmEmptyListS from '../../components/MmEmptyListS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmCompanionOffXs from '../../components/MmCompanionOffXs.jsx'
import MmCompanionWanXs from '../../components/MmCompanionWanXs.jsx'
import MmEmptyListXs from '../../components/MmEmptyListXs.jsx'
import MmListingServiceXs from '../../components/MmListingServiceXs.jsx'
import LogoutIcon from '@mui/icons-material/Logout'

const Travelcompanionlisting_1 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_1267_2534')
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
                id="t18_1267_2534"
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
                    id="t18_1267_2535"
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
                        id="t18_1267_2536"
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
                            id="t18_1267_2537"
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
                                id="t18_1267_2540"
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
                                    id="t18_1267_2541"
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
                                        id="t18_1267_2542"
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
                                            id="t18_1267_2543"
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
                                                id="t18_1267_2544"
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
                                                    id="t18_1267_2545"
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
                                                id="t18_1267_2546"
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
                                                    id="t18_1267_2547"
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
                                            id="t18_1267_2548"
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
                                                id="t18_1267_2549"
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
                                                        id="t18_1267_2550"
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
                                                    id="t18_1267_2551"
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
                                                id="t18_1267_2552"
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
                                                    cursor: 'pointer',
                                                }}
                                                onClick={(e) => {}}
                                            >
                                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/1c6267d938b40e6bc34677fe686ad0ab97c4b478.png' !=
                                                '' ? (
                                                    <img
                                                        id="t18_1267_2553"
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
                                                    id="t18_1267_2554"
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
                                                id="t18_1267_2555"
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
                                                        id="t18_1267_2556"
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
                                                    id="t18_1267_2557"
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
                                                id="t18_1267_2558"
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
                                                        id="t18_1267_2559"
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
                                                    id="t18_1267_2560"
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
                                                    // dl.functions.viewsPlugin.showView(
                                                    //     'rentalbookmarks'
                                                    // )
                                                    // var currentPath =
                                                    //     dl.functions.common.getLastPath()
                                                    // dl.functions.onLoadFunctions[
                                                    //     currentPath
                                                    // ]()
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
                                        id="t18_1267_2561"
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
                                            id="t18_1267_2562"
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
                                                id="t18_1267_2563"
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
                                                    id="t18_1267_2564"
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
                                                        id="t18_1267_2565"
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
                                                            marginLeft: 0,
                                                            marginRight: 0.5,
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
                                                        <span
                                                            id="t18_1267_2566"
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
                                                            Rentals & Properties
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1267_2567"
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
                                                            id="t18_1267_2568"
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
                                                        id="t18_1267_2569"
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
                                                            marginLeft: 0.5,
                                                            marginRight: 0.5,
                                                            cursor: 'pointer',
                                                        }}
                                                        onClick={(e) => {}}
                                                    >
                                                        <span
                                                            id="t18_1267_2570"
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
                                                            Travel Companion
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1267_2571"
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
                                                            id="t18_1267_2572"
                                                            onClick={() => {
                                                                dl.functions.viewsPlugin.showView(
                                                                    'questionlistings'
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
                                                                fontSize: 20,
                                                                fontWeight: 500,
                                                                color: 'rgba(186,15,23,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '24.204544067382812px',
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
                                                id="t18_1267_2573"
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
                                                    id="t18_1267_2574"
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

                                                        dl.changes.selectedTCListingType =
                                                            val
                                                        if (val == 'Offered') {
                                                            dl.functions.getWillBeATcListing(
                                                                '6',
                                                                '1'
                                                            )
                                                            dl.changes.offeredTCListingVisible =
                                                                'none'
                                                            dl.changes.wantedTcListingVisible =
                                                                'flex'
                                                        }

                                                        if (val == 'Wanted') {
                                                            dl.functions.getTcListing(
                                                                '6',
                                                                '1'
                                                            )
                                                            dl.changes.offeredTCListingVisible =
                                                                'flex'
                                                            dl.changes.wantedTcListingVisible =
                                                                'none'
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
                                                                                .selectedTCListingType
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
                                                id="t18_1267_3290"
                                                style={{
                                                    width: 1036,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display:
                                                        dl.changes
                                                            .wantedTcListingVisible,
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
                                                    {dl.changes.willBeATcListingList.map(
                                                        (item, index) => {
                                                            return (
                                                                <div>
                                                                    <MmCompanionOff
                                                                        {...item}
                                                                        {...dl
                                                                            .changes
                                                                            .willBeATcListingList}
                                                                        onClickEdit={(
                                                                            val
                                                                        ) => {
                                                                            val.stopPropagation()
                                                                            var tcId =
                                                                                dl
                                                                                    .changes
                                                                                    .willBeATcListingList[
                                                                                    index
                                                                                ]
                                                                                    ._id
                                                                            dl.functions.common.relativeRedirect(
                                                                                `iwanttobetcform?tcId=${tcId}&mode=edit`,
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
                                                                                                .willBeATcListingList[
                                                                                                index
                                                                                            ]
                                                                                                ._id,
                                                                                            status: 'inactive',
                                                                                        }

                                                                                    var res =
                                                                                        await dl.functions.updateWillBeATc(
                                                                                            body,
                                                                                            true
                                                                                        )
                                                                                    if (
                                                                                        res ==
                                                                                        200
                                                                                    ) {
                                                                                        dl.functions.getWillBeATcListing(
                                                                                            '6',
                                                                                            '1'
                                                                                        )
                                                                                    }
                                                                                }

                                                                            run()
                                                                        }}
                                                                        onClick={(
                                                                            val
                                                                        ) => {
                                                                            var tcId =
                                                                                dl
                                                                                    .changes
                                                                                    .willBeATcListingList[
                                                                                    index
                                                                                ]
                                                                                    ._id
                                                                            dl.functions.common.relativeRedirect(
                                                                                `offeredtcdetails?tcId=${tcId}`,
                                                                                true
                                                                            )
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
                                                                            var tcId =
                                                                                dl
                                                                                    .changes
                                                                                    .willBeATcListingList[
                                                                                    index
                                                                                ]
                                                                                    ._id
                                                                            var title =
                                                                                dl
                                                                                    .changes
                                                                                    .willBeATcListingList[
                                                                                    index
                                                                                ]
                                                                                    .city

                                                                            dl.changes.promoteDetail.serviceType =
                                                                                'willBeATravelCompanion'
                                                                            dl.changes.promoteDetail.serviceId =
                                                                                tcId
                                                                            dl.changes.promoteDetail.title =
                                                                                'Will be a Travel Companion to ' +
                                                                                title
                                                                            dl.changes.promoteDetail[
                                                                                'navigationdetail'
                                                                            ] =
                                                                                'Travel Companion << Offered'
                                                                            dl.functions.modalsPlugin.openModal(
                                                                                'promoteLg'
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
                                                id="t18_1267_3293"
                                                style={{
                                                    width: 1036,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display:
                                                        dl.changes
                                                            .offeredTCListingVisible,
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
                                                    {dl.changes.tcListingList.map(
                                                        (item, index) => {
                                                            return (
                                                                <div>
                                                                    <MmCompanionWan
                                                                        {...item}
                                                                        {...dl
                                                                            .changes
                                                                            .tcListingList}
                                                                        onClickEdit={(
                                                                            val
                                                                        ) => {
                                                                            val.stopPropagation()
                                                                            var tcId =
                                                                                dl
                                                                                    .changes
                                                                                    .tcListingList[
                                                                                    index
                                                                                ]
                                                                                    ._id
                                                                            dl.functions.common.relativeRedirect(
                                                                                `ineedatravelcompanionform?tcId=${tcId}&mode=edit`,
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
                                                                                                .tcListingList[
                                                                                                index
                                                                                            ]
                                                                                                ._id,
                                                                                            status: 'inactive',
                                                                                        }

                                                                                    var res =
                                                                                        await dl.functions.updateTC(
                                                                                            body,
                                                                                            true
                                                                                        )
                                                                                    if (
                                                                                        res ==
                                                                                        200
                                                                                    ) {
                                                                                        dl.functions.getTcListing(
                                                                                            '6',
                                                                                            '1'
                                                                                        )
                                                                                    }
                                                                                }

                                                                            run()
                                                                        }}
                                                                        onClick={(
                                                                            val
                                                                        ) => {
                                                                            var tcId =
                                                                                dl
                                                                                    .changes
                                                                                    .tcListingList[
                                                                                    index
                                                                                ]
                                                                                    ._id
                                                                            dl.functions.common.relativeRedirect(
                                                                                `wantedtcdetails?tcId=${tcId}`,
                                                                                true
                                                                            )
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
                                                                            var tcId =
                                                                                dl
                                                                                    .changes
                                                                                    .tcListingList[
                                                                                    index
                                                                                ]
                                                                                    ._id
                                                                            var title =
                                                                                dl
                                                                                    .changes
                                                                                    .tcListingList[
                                                                                    index
                                                                                ]
                                                                                    .city
                                                                            dl.changes.promoteDetail.serviceType =
                                                                                'travelCompanion'
                                                                            dl.changes.promoteDetail.serviceId =
                                                                                tcId
                                                                            dl.changes.promoteDetail.title =
                                                                                'Need a Travel Companion to ' +
                                                                                title
                                                                            dl.changes.promoteDetail[
                                                                                'navigationdetail'
                                                                            ] =
                                                                                'Travel Companion << Wanted'
                                                                            dl.functions.modalsPlugin.openModal(
                                                                                'promoteLg'
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
                                                .tcListingNoDataVisible}
                                        />

                                        <div
                                            id="t18_1267_2651"
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
                                                    if (
                                                        dl.changes
                                                            .selectedTCListingType ==
                                                        'Offered'
                                                    ) {
                                                        dl.functions.getWillBeATcListing(
                                                            '6',
                                                            val
                                                        )
                                                        dl.changes.offeredTCListingVisible =
                                                            'none'
                                                        dl.changes.wantedTcListingVisible =
                                                            'flex'
                                                    }

                                                    if (
                                                        dl.changes
                                                            .selectedTCListingType ==
                                                        'Wanted'
                                                    ) {
                                                        dl.functions.getTcListing(
                                                            '6',
                                                            val
                                                        )
                                                        dl.changes.offeredTCListingVisible =
                                                            'flex'
                                                        dl.changes.wantedTcListingVisible =
                                                            'none'
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
export default Travelcompanionlisting_1
