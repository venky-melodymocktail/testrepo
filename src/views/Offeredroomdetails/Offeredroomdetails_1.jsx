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

import MmFooter from '../../components/MmFooter.jsx'
import MmHeader from '../../components/MmHeader.jsx'
import MmImageArray from '../../components/MmImageArray.jsx'
import MmArrayComp from '../../components/MmArrayComp.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmPhotoMd from '../../components/MmPhotoMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmArrayCompS from '../../components/MmArrayCompS.jsx'
import MmPhotoXs from '../../components/MmPhotoXs.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'

const Offeredroomdetails_1 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_1193_1068')
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
                id="t18_1193_1068"
                style={{
                    width: 1440,
                    flexDirection: 'row',
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
                    id="t18_1193_911"
                    style={{
                        backgroundColor: 'rgba(255,255,255,1.00)',
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
                        id="t18_1193_912"
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
                            id="t18_1193_915"
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
                                id="t18_1193_916"
                                style={{
                                    width: 1420,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    paddingTop: 88,
                                    paddingBottom: 30,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 38,
                                }}
                            >
                                <div
                                    id="t18_1193_917"
                                    style={{
                                        borderRadius: 20,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 1,
                                        borderColor: 'rgba(207,206,206,1)',
                                        borderStyle: 'solid',
                                    }}
                                >
                                    <div
                                        id="t18_1193_918"
                                        style={{
                                            width: 958,
                                            borderTopLeftRadius: 20,
                                            borderTopRightRadius: 20,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingLeft: 60,
                                            paddingTop: 30,
                                            paddingBottom: 30,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_1193_919"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 4.5,
                                            }}
                                        >
                                            <div
                                                id="t18_1193_920"
                                                style={{
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 35,
                                                }}
                                            >
                                                <div
                                                    id="t18_1193_921"
                                                    style={{
                                                        width: 728,
                                                        flexDirection: 'row',
                                                        alignItems:
                                                            'flex-start',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        paddingTop: 10,
                                                        paddingBottom: 10,
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginTop: 0,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1193_922"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 28,
                                                            fontWeight: 700,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '33.8863639831543px',
                                                            textAlign: 'left',
                                                        }}
                                                    >
                                                        {
                                                            dl.changes
                                                                .roomDetails
                                                                .title
                                                        }
                                                    </span>
                                                </div>

                                                <div
                                                    id="t18_1193_923"
                                                    style={{
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginBottom: 0,
                                                    }}
                                                >
                                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/1dae74ee7a4adb933849b4ebb7af54bd5d13fc9a.png' !=
                                                    '' ? (
                                                        <img
                                                            id="t18_1193_924"
                                                            style={{
                                                                height: 12.72265625,
                                                                width: 10.51953125,
                                                                display: 'flex',
                                                                borderWidth: 0,
                                                                marginLeft: 0,
                                                                marginRight: 3,
                                                            }}
                                                            src={
                                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/1dae74ee7a4adb933849b4ebb7af54bd5d13fc9a.png'
                                                            }
                                                        ></img>
                                                    ) : (
                                                        <></>
                                                    )}

                                                    <span
                                                        id="t18_1193_925"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 16,
                                                            fontWeight: 500,
                                                            color: 'rgba(113,113,113,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '19.363636016845703px',
                                                            textAlign: 'left',
                                                            marginLeft: 3,
                                                            marginRight: 0,
                                                        }}
                                                    >
                                                        {
                                                            dl.changes
                                                                .roomDetails
                                                                .location
                                                        }
                                                    </span>
                                                </div>
                                            </div>

                                            <div
                                                id="t18_1193_926"
                                                style={{
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-end',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 35,
                                                    marginRight: 0,
                                                }}
                                            >
                                                <div
                                                    id="t18_1193_927"
                                                    style={{
                                                        height: 38,
                                                        width: 140,
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginTop: 0,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1193_928"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 25,
                                                            fontWeight: 700,
                                                            color: 'rgba(28,167,139,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '37.5px',
                                                            textAlign: 'left',
                                                            marginLeft: 0,
                                                            marginRight: 2,
                                                        }}
                                                    >
                                                        {
                                                            dl.changes
                                                                .roomDetails
                                                                .rent
                                                        }
                                                    </span>

                                                    <span
                                                        id="t18_1193_929"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 18,
                                                            fontWeight: 600,
                                                            color: 'rgba(113,113,113,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '27px',
                                                            textAlign: 'left',
                                                            marginLeft: 2,
                                                            marginRight: 0,
                                                        }}
                                                    >
                                                        {
                                                            dl.changes
                                                                .roomDetails
                                                                .priceMode
                                                        }
                                                    </span>
                                                </div>

                                                <div
                                                    id="t18_1193_930"
                                                    style={{
                                                        flexDirection: 'row',
                                                        alignItems:
                                                            'flex-start',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginBottom: 0,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1193_931"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 17,
                                                            fontWeight: 400,
                                                            color: 'rgba(113,113,113,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '25.5px',
                                                            textAlign: 'left',
                                                            display:
                                                                dl.changes
                                                                    .roomDetails
                                                                    .negotiableVisible,
                                                        }}
                                                    >
                                                        Negotiable
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1193_932"
                                            style={{
                                                width: 893,
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 4.5,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_1193_933"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 10,
                                                }}
                                            >
                                                <span
                                                    id="t18_1193_934"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 17,
                                                        fontWeight: 400,
                                                        color: 'rgba(113,113,113,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '25.5px',
                                                        textAlign: 'left',
                                                        marginLeft: 0,
                                                        marginRight: 5,
                                                    }}
                                                >
                                                    Posted by:
                                                </span>

                                                <span
                                                    id="t18_1318_84"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 17,
                                                        fontWeight: 400,
                                                        color: 'rgba(113,113,113,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '25.5px',
                                                        textAlign: 'left',
                                                        marginLeft: 5,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    {
                                                        dl.changes.roomDetails
                                                            .postedBy
                                                    }
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1318_136"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 10,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c7f7e0d2f29714077d45c2c6c5118445e5e46978.png' !=
                                                '' ? (
                                                    <img
                                                        id="t18_1318_137"
                                                        style={{
                                                            height: 35,
                                                            width: 35,
                                                            display: 'flex',
                                                            borderWidth: 0,
                                                            marginLeft: 0,
                                                            marginRight: 7.5,
                                                            cursor: 'pointer',
                                                        }}
                                                        onClick={(e) => {
                                                            var currentUrl =
                                                                window.location
                                                                    .href
                                                            dl.functions.common.copyToClipboard(
                                                                currentUrl
                                                            )
                                                        }}
                                                        src={
                                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c7f7e0d2f29714077d45c2c6c5118445e5e46978.png'
                                                        }
                                                    ></img>
                                                ) : (
                                                    <></>
                                                )}

                                                <div
                                                    id="t18_1318_138"
                                                    style={{
                                                        flexDirection: 'row',
                                                        alignItems: 'flex-end',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 7.5,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/f86479c5f13f179327df6addde448bbc85be06e7.png' !=
                                                    '' ? (
                                                        <img
                                                            id="t18_1318_139"
                                                            style={{
                                                                height: 35,
                                                                width: 35.197265625,
                                                                display: 'flex',
                                                                borderWidth: 0,
                                                                marginLeft: 0,
                                                                marginRight: 7.5,
                                                                cursor: 'pointer',
                                                            }}
                                                            onClick={(e) => {
                                                                var currentUrl =
                                                                    window
                                                                        .location
                                                                        .href
                                                                dl.functions.common.socialShare.shareOnFacebook(
                                                                    currentUrl
                                                                )
                                                            }}
                                                            src={
                                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/f86479c5f13f179327df6addde448bbc85be06e7.png'
                                                            }
                                                        ></img>
                                                    ) : (
                                                        <></>
                                                    )}

                                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c9056919b4f865ea8af5bfb6a43fe247d91200d9.png' !=
                                                    '' ? (
                                                        <img
                                                            id="t18_1318_140"
                                                            style={{
                                                                height: 35,
                                                                width: 35,
                                                                display: 'flex',
                                                                borderWidth: 0,
                                                                marginLeft: 7.5,
                                                                marginRight: 7.5,
                                                                cursor: 'pointer',
                                                            }}
                                                            onClick={(e) => {
                                                                var currentUrl =
                                                                    window
                                                                        .location
                                                                        .href
                                                                dl.functions.common.socialShare.shareOnTwitter(
                                                                    currentUrl
                                                                )
                                                            }}
                                                            src={
                                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c9056919b4f865ea8af5bfb6a43fe247d91200d9.png'
                                                            }
                                                        ></img>
                                                    ) : (
                                                        <></>
                                                    )}

                                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/8223252ea1bd14751ea5ecbe77c9b647dca1212e.png' !=
                                                    '' ? (
                                                        <img
                                                            id="t18_1318_141"
                                                            style={{
                                                                height: 35,
                                                                width: 35,
                                                                display: 'flex',
                                                                borderWidth: 0,
                                                                marginLeft: 7.5,
                                                                marginRight: 7.5,
                                                                cursor: 'pointer',
                                                            }}
                                                            onClick={(e) => {
                                                                var currentUrl =
                                                                    window
                                                                        .location
                                                                        .href
                                                                dl.functions.common.socialShare.shareOnWhatsApp(
                                                                    currentUrl
                                                                )
                                                            }}
                                                            src={
                                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/8223252ea1bd14751ea5ecbe77c9b647dca1212e.png'
                                                            }
                                                        ></img>
                                                    ) : (
                                                        <></>
                                                    )}

                                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/6711ac5e2712675bf7ad999c6c394153aa8b0294.png' !=
                                                    '' ? (
                                                        <img
                                                            id="t18_1318_142"
                                                            style={{
                                                                height: 35,
                                                                width: 35,
                                                                display: 'flex',
                                                                borderWidth: 0,
                                                                marginLeft: 7.5,
                                                                marginRight: 0,
                                                                cursor: 'pointer',
                                                            }}
                                                            onClick={(e) => {
                                                                var currentUrl =
                                                                    window
                                                                        .location
                                                                        .href
                                                                dl.functions.common.socialShare.shareOnLinkedIn(
                                                                    currentUrl
                                                                )
                                                            }}
                                                            src={
                                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/6711ac5e2712675bf7ad999c6c394153aa8b0294.png'
                                                            }
                                                        ></img>
                                                    ) : (
                                                        <></>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1193_938"
                                        /// make the display flex to see the owners details
                                        style={{
                                            width: 968,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display:
                                                dl.changes
                                                    .roomDetailsVisibleStatus
                                                    .ownerDetails,
                                            paddingLeft: 50,
                                            paddingTop: 15,
                                            paddingBottom: 30,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            borderColor: 'rgba(207,206,206,1)',
                                            borderTopWidth: 1,
                                            borderBottomWidth: 1,
                                            borderStyle: 'solid',
                                        }}
                                    >
                                        <div
                                            id="t18_1193_939"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'none',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 8.5,
                                            }}
                                        >
                                            <div
                                                id="t18_1193_940"
                                                style={{
                                                    width: 591,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    paddingTop: 10,
                                                    paddingBottom: 10,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 9.5,
                                                }}
                                            >
                                                <span
                                                    id="t18_1193_941"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 30,
                                                        fontWeight: 400,
                                                        color: 'rgba(186,15,23,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '45px',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    Owner details
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1193_942"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 9.5,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <div
                                                    id="t18_1193_943"
                                                    style={{
                                                        height: 104,
                                                        width: 261,
                                                        borderRadius: 20,
                                                        backgroundColor:
                                                            'rgba(248,246,246,1.00)',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        display:
                                                            dl.changes
                                                                .roomDetailsVisibleStatus
                                                                .age,
                                                        paddingLeft: 10,
                                                        paddingRight: 10,
                                                        paddingTop: 10,
                                                        paddingBottom: 10,
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 0,
                                                        marginRight: 14.5,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1193_944"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 20,
                                                            fontWeight: 400,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '30px',
                                                            textAlign: 'center',
                                                            marginTop: 0,
                                                        }}
                                                    >
                                                        Age:
                                                    </span>

                                                    <span
                                                        id="t18_1318_71"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 20,
                                                            fontWeight: 600,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '30px',
                                                            textAlign: 'center',
                                                            marginBottom: 0,
                                                        }}
                                                    >
                                                        {
                                                            dl.changes
                                                                .roomDetails.Age
                                                        }
                                                    </span>
                                                </div>

                                                <div
                                                    id="t18_1193_945"
                                                    style={{
                                                        height: 104,
                                                        width: 261,
                                                        borderRadius: 20,
                                                        backgroundColor:
                                                            'rgba(248,246,246,1.00)',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        display:
                                                            dl.changes
                                                                .roomDetailsVisibleStatus
                                                                .occupation,
                                                        paddingLeft: 10,
                                                        paddingRight: 10,
                                                        paddingTop: 10,
                                                        paddingBottom: 10,
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 14.5,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1193_946"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 20,
                                                            fontWeight: 400,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '30px',
                                                            textAlign: 'center',
                                                            marginTop: 0,
                                                        }}
                                                    >
                                                        Occupation:
                                                    </span>

                                                    <span
                                                        id="t18_1318_72"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 20,
                                                            fontWeight: 600,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '30px',
                                                            textAlign: 'center',
                                                            marginBottom: 0,
                                                        }}
                                                    >
                                                        {
                                                            dl.changes
                                                                .roomDetails
                                                                .occupation
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1318_83"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display:
                                                    dl.changes
                                                        .roomDetailsVisibleStatus
                                                        .languagesKnown,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 8.5,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_1193_947"
                                                style={{
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 5,
                                                }}
                                            >
                                                <div
                                                    id="t18_1193_948"
                                                    style={{
                                                        width: 908,
                                                        flexDirection: 'row',
                                                        alignItems:
                                                            'flex-start',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        paddingTop: 10,
                                                        paddingBottom: 10,
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1193_949"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 17,
                                                            fontWeight: 400,
                                                            color: 'rgba(113,113,113,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '25.5px',
                                                            textAlign: 'left',
                                                        }}
                                                    >
                                                        Languages known:
                                                    </span>
                                                </div>
                                            </div>

                                            <div
                                                id="t18_1318_73"
                                                style={{
                                                    width: 925,
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 5,
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
                                                    {dl.changes.roomDetails.languages.map(
                                                        (item, index) => {
                                                            return (
                                                                <div>
                                                                    <MmArrayComp
                                                                        {...item}
                                                                        {...dl
                                                                            .changes
                                                                            .roomDetails
                                                                            .languages}
                                                                    />
                                                                </div>
                                                            )
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1193_962"
                                        style={{
                                            width: 969,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingLeft: 50,
                                            paddingTop: 20,
                                            paddingBottom: 20,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_1193_963"
                                            style={{
                                                width: 936,
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingLeft: 10,
                                                paddingTop: 10,
                                                paddingBottom: 10,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 10,
                                            }}
                                        >
                                            <span
                                                id="t18_1193_964"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 30,
                                                    fontWeight: 400,
                                                    color: 'rgba(186,15,23,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '45px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Photos
                                            </span>
                                        </div>

                                        <div
                                            id="t18_1354_2"
                                            style={{
                                                width: 950,
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                paddingTop: 10,
                                                paddingBottom: 10,
                                                position: 'relative',
                                                overflow: 'hidden',
                                                borderWidth: 0,
                                                marginTop: 10,
                                                marginBottom: 10,
                                            }}
                                        >
                                            <div
                                                id="t18_1320_217"
                                                style={{
                                                    width: 'auto',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        flexWrap: 'no-wrap',
                                                        justifyContent:
                                                            'center',
                                                    }}
                                                >
                                                    {dl.changes.roomDetails.images.map(
                                                        (item, index) => {
                                                            return (
                                                                <div>
                                                                    <MmImageArray
                                                                        {...item}
                                                                        {...dl
                                                                            .changes
                                                                            .roomDetails
                                                                            .images}
                                                                    />
                                                                </div>
                                                            )
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1320_219"
                                            style={{
                                                height: 30,
                                                width: 30,
                                                borderRadius: 30,
                                                backgroundColor:
                                                    'rgba(255,255,255,1.00)',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                paddingTop: 10,
                                                paddingBottom: 10,
                                                position: 'absolute',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                top: 213.0625,
                                                left: 963.5,
                                                marginTop: 10,
                                                marginBottom: 10,
                                                cursor: 'pointer',
                                            }}
                                            onClick={(e) => {
                                                let id = '1354:2'
                                                if (
                                                    !document.getElementById(id)
                                                ) {
                                                    id = 't18_1354_2'
                                                }
                                                const container =
                                                    document.getElementById(id)
                                                container.scroll({
                                                    left:
                                                        container.scrollLeft +
                                                        378, // Scroll by 100 pixels horizontally
                                                    behavior: 'smooth', // Smooth scrolling behavior
                                                })
                                            }}
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b7b54d13c18adbe781bd00bcbf5597dbf92a6785.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_1320_220"
                                                    style={{
                                                        height: 24,
                                                        width: 14,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b7b54d13c18adbe781bd00bcbf5597dbf92a6785.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}
                                        </div>

                                        <div
                                            id="t18_1320_222"
                                            style={{
                                                height: 30,
                                                width: 30,
                                                borderRadius: 30,
                                                backgroundColor:
                                                    'rgba(255,255,255,1.00)',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                paddingTop: 10,
                                                paddingBottom: 10,
                                                position: 'absolute',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                top: 213.0625,
                                                left: 66.5,
                                                marginTop: 10,
                                                marginBottom: 0,
                                                cursor: 'pointer',
                                            }}
                                            onClick={(e) => {
                                                let id = '1354:2'
                                                if (
                                                    !document.getElementById(id)
                                                ) {
                                                    id = 't18_1354_2'
                                                }
                                                const container =
                                                    document.getElementById(id)
                                                container.scroll({
                                                    left:
                                                        container.scrollLeft -
                                                        378, // Scroll by 100 pixels horizontally
                                                    behavior: 'smooth', // Smooth scrolling behavior
                                                })
                                            }}
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/0bee1c6488ff59401bd1dbbe8a33b3fc5fe23b55.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_1320_223"
                                                    style={{
                                                        height: 24,
                                                        width: 14,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/0bee1c6488ff59401bd1dbbe8a33b3fc5fe23b55.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1193_969"
                                        style={{
                                            width: 969,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingLeft: 50,
                                            paddingTop: 30,
                                            paddingBottom: 30,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            borderColor: 'rgba(207,206,206,1)',
                                            borderTopWidth: 1,
                                            borderBottomWidth: 1,
                                            borderStyle: 'solid',
                                        }}
                                    >
                                        <div
                                            id="t18_1193_970"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 28.5,
                                            }}
                                        >
                                            <div
                                                id="t18_1193_971"
                                                style={{
                                                    width: 148,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    paddingTop: 10,
                                                    paddingBottom: 10,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 5.5,
                                                }}
                                            >
                                                <span
                                                    id="t18_1193_972"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 30,
                                                        fontWeight: 400,
                                                        color: 'rgba(186,15,23,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '45px',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    Overview
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1193_973"
                                                style={{
                                                    width: 910,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    paddingTop: 10,
                                                    paddingBottom: 10,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 5.5,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_1193_974"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 20,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '30px',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    {
                                                        dl.changes.roomDetails
                                                            .description
                                                    }
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1193_975"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 28.5,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_1193_976"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 19,
                                                }}
                                            >
                                                <div
                                                    id="t18_1193_977"
                                                    style={{
                                                        flexDirection: 'column',
                                                        alignItems:
                                                            'flex-start',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 0,
                                                        marginRight: 54,
                                                    }}
                                                >
                                                    <div
                                                        id="t18_1193_978"
                                                        style={{
                                                            width: 642,
                                                            flexDirection:
                                                                'row',
                                                            alignItems:
                                                                'flex-start',
                                                            justifyContent:
                                                                'flex-start',
                                                            display: 'flex',
                                                            paddingTop: 10,
                                                            paddingBottom: 10,
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginTop: 0,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1193_979"
                                                            style={{
                                                                fontFamily:
                                                                    'Poppins',
                                                                fontSize: 28,
                                                                fontWeight: 700,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '42px',
                                                                textAlign:
                                                                    'left',
                                                            }}
                                                        >
                                                            {
                                                                dl.changes
                                                                    .roomDetails
                                                                    .title
                                                            }
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1193_980"
                                                        style={{
                                                            flexDirection:
                                                                'row',
                                                            alignItems:
                                                                'center',
                                                            justifyContent:
                                                                'flex-start',
                                                            display: 'flex',
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginBottom: 0,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1193_983"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 16,
                                                                fontWeight: 500,
                                                                color: 'rgba(113,113,113,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '19.363636016845703px',
                                                                textAlign:
                                                                    'left',
                                                                marginLeft: 3,
                                                                marginRight: 0,
                                                            }}
                                                        >
                                                            {
                                                                dl.changes
                                                                    .roomDetails
                                                                    .location
                                                            }
                                                        </span>
                                                    </div>
                                                </div>

                                                <div
                                                    id="t18_1193_984"
                                                    style={{
                                                        height: 38,
                                                        width: 140,
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 54,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1193_985"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 25,
                                                            fontWeight: 700,
                                                            color: 'rgba(28,167,139,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '37.5px',
                                                            textAlign: 'left',
                                                            marginLeft: 0,
                                                            marginRight: 2,
                                                        }}
                                                    >
                                                        {
                                                            dl.changes
                                                                .roomDetails
                                                                .rent
                                                        }
                                                    </span>

                                                    <span
                                                        id="t18_1193_986"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 18,
                                                            fontWeight: 600,
                                                            color: 'rgba(113,113,113,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '27px',
                                                            textAlign: 'left',
                                                            marginLeft: 2,
                                                            marginRight: 0,
                                                        }}
                                                    >
                                                        {
                                                            dl.changes
                                                                .roomDetails
                                                                .priceMode
                                                        }
                                                    </span>
                                                </div>
                                            </div>

                                            <div
                                                id="t18_1193_987"
                                                style={{
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 19,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <div
                                                    id="t18_1193_988"
                                                    style={{
                                                        flexDirection: 'row',
                                                        alignItems: 'flex-end',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginTop: 0,
                                                        marginBottom: 16.5,
                                                    }}
                                                >
                                                    <div
                                                        id="t18_1193_989"
                                                        style={{
                                                            height: 124,
                                                            width: 281,
                                                            borderRadius: 20,
                                                            backgroundColor:
                                                                'rgba(248,246,246,1.00)',
                                                            flexDirection:
                                                                'column',
                                                            alignItems:
                                                                'center',
                                                            justifyContent:
                                                                'center',
                                                            display: 'flex',
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginLeft: 0,
                                                            marginRight: 20,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1193_990"
                                                            style={{
                                                                fontFamily:
                                                                    'Poppins',
                                                                fontSize: 20,
                                                                fontWeight: 400,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '30px',
                                                                textAlign:
                                                                    'center',
                                                                marginTop: 0,
                                                            }}
                                                        >
                                                            Type:
                                                        </span>

                                                        <span
                                                            id="t18_1193_991"
                                                            style={{
                                                                fontFamily:
                                                                    'Poppins',
                                                                fontSize: 20,
                                                                fontWeight: 600,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '30px',
                                                                textAlign:
                                                                    'center',
                                                                marginBottom: 0,
                                                            }}
                                                        >
                                                            {
                                                                dl.changes
                                                                    .roomDetails
                                                                    .type
                                                            }
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1193_992"
                                                        style={{
                                                            height: 124,
                                                            width: 281,
                                                            borderRadius: 20,
                                                            backgroundColor:
                                                                'rgba(248,246,246,1.00)',
                                                            flexDirection:
                                                                'column',
                                                            alignItems:
                                                                'center',
                                                            justifyContent:
                                                                'center',
                                                            display: 'flex',
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginLeft: 20,
                                                            marginRight: 20,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1193_993"
                                                            style={{
                                                                fontFamily:
                                                                    'Poppins',
                                                                fontSize: 20,
                                                                fontWeight: 400,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '30px',
                                                                textAlign:
                                                                    'center',
                                                                marginTop: 0,
                                                            }}
                                                        >
                                                            Available from:
                                                        </span>

                                                        <span
                                                            id="t18_1193_994"
                                                            style={{
                                                                fontFamily:
                                                                    'Poppins',
                                                                fontSize: 20,
                                                                fontWeight: 600,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '30px',
                                                                textAlign:
                                                                    'center',
                                                                marginBottom: 0,
                                                            }}
                                                        >
                                                            {
                                                                dl.changes
                                                                    .roomDetails
                                                                    .availabilityFrom
                                                            }
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1193_995"
                                                        style={{
                                                            height: 124,
                                                            width: 281,
                                                            borderRadius: 20,
                                                            backgroundColor:
                                                                'rgba(248,246,246,1.00)',
                                                            flexDirection:
                                                                'column',
                                                            alignItems:
                                                                'center',
                                                            justifyContent:
                                                                'center',
                                                            display: 'flex',
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginLeft: 20,
                                                            marginRight: 0,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1193_996"
                                                            style={{
                                                                fontFamily:
                                                                    'Poppins',
                                                                fontSize: 20,
                                                                fontWeight: 400,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '30px',
                                                                textAlign:
                                                                    'center',
                                                                marginTop: 0,
                                                            }}
                                                        >
                                                            Available to:
                                                        </span>

                                                        <span
                                                            id="t18_1193_997"
                                                            style={{
                                                                fontFamily:
                                                                    'Poppins',
                                                                fontSize: 20,
                                                                fontWeight: 600,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '30px',
                                                                textAlign:
                                                                    'center',
                                                                marginBottom: 0,
                                                            }}
                                                        >
                                                            {
                                                                dl.changes
                                                                    .roomDetails
                                                                    .availabilityTo
                                                            }
                                                        </span>
                                                    </div>
                                                </div>

                                                <div
                                                    id="t18_1224_915"
                                                    style={{
                                                        flexDirection: 'row',
                                                        alignItems:
                                                            'flex-start',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginTop: 16.5,
                                                        marginBottom: 16.5,
                                                    }}
                                                >
                                                    <div
                                                        id="t18_1224_916"
                                                        style={{
                                                            height: 124,
                                                            width: 281,
                                                            borderRadius: 20,
                                                            backgroundColor:
                                                                'rgba(248,246,246,1.00)',
                                                            flexDirection:
                                                                'column',
                                                            alignItems:
                                                                'center',
                                                            justifyContent:
                                                                'center',
                                                            display: 'flex',
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginLeft: 0,
                                                            marginRight: 20,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1224_917"
                                                            style={{
                                                                fontFamily:
                                                                    'Poppins',
                                                                fontSize: 20,
                                                                fontWeight: 400,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '30px',
                                                                textAlign:
                                                                    'center',
                                                                marginTop: 0,
                                                            }}
                                                        >
                                                            Preferred gender:
                                                        </span>

                                                        <span
                                                            id="t18_1224_918"
                                                            style={{
                                                                fontFamily:
                                                                    'Poppins',
                                                                fontSize: 20,
                                                                fontWeight: 600,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '30px',
                                                                textAlign:
                                                                    'center',
                                                                marginBottom: 0,
                                                            }}
                                                        >
                                                            {
                                                                dl.changes
                                                                    .roomDetails
                                                                    .preferedGender
                                                            }
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1224_919"
                                                        style={{
                                                            height: 124,
                                                            width: 281,
                                                            borderRadius: 20,
                                                            backgroundColor:
                                                                'rgba(248,246,246,1.00)',
                                                            flexDirection:
                                                                'column',
                                                            alignItems:
                                                                'center',
                                                            justifyContent:
                                                                'center',
                                                            display: 'flex',
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginLeft: 20,
                                                            marginRight: 20,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1224_920"
                                                            style={{
                                                                fontFamily:
                                                                    'Poppins',
                                                                fontSize: 20,
                                                                fontWeight: 400,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '30px',
                                                                textAlign:
                                                                    'center',
                                                                marginTop: 0,
                                                            }}
                                                        >
                                                            No. of people:
                                                        </span>

                                                        <span
                                                            id="t18_1224_921"
                                                            style={{
                                                                fontFamily:
                                                                    'Poppins',
                                                                fontSize: 20,
                                                                fontWeight: 600,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '30px',
                                                                textAlign:
                                                                    'center',
                                                                marginBottom: 0,
                                                            }}
                                                        >
                                                            {
                                                                dl.changes
                                                                    .roomDetails
                                                                    .noOfPeople
                                                            }
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1224_922"
                                                        style={{
                                                            height: 104,
                                                            width: 261,
                                                            borderRadius: 20,
                                                            backgroundColor:
                                                                'rgba(248,246,246,1.00)',
                                                            flexDirection:
                                                                'column',
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
                                                            marginLeft: 20,
                                                            marginRight: 0,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1224_923"
                                                            style={{
                                                                fontFamily:
                                                                    'Poppins',
                                                                fontSize: 20,
                                                                fontWeight: 400,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '30px',
                                                                textAlign:
                                                                    'center',
                                                                marginTop: 0,
                                                            }}
                                                        >
                                                            Attached bath:
                                                        </span>

                                                        <span
                                                            id="t18_1318_143"
                                                            style={{
                                                                fontFamily:
                                                                    'Poppins',
                                                                fontSize: 20,
                                                                fontWeight: 600,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '30px',
                                                                textAlign:
                                                                    'center',
                                                                marginBottom: 0,
                                                            }}
                                                        >
                                                            {
                                                                dl.changes
                                                                    .roomDetails
                                                                    .attachedBath
                                                            }
                                                        </span>
                                                    </div>
                                                </div>

                                                <div
                                                    id="t18_1193_998"
                                                    style={{
                                                        flexDirection: 'row',
                                                        alignItems:
                                                            'flex-start',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginTop: 16.5,
                                                        marginBottom: 0,
                                                    }}
                                                >
                                                    <div
                                                        id="t18_1193_999"
                                                        style={{
                                                            height: 124,
                                                            width: 281,
                                                            borderRadius: 20,
                                                            backgroundColor:
                                                                'rgba(248,246,246,1.00)',
                                                            flexDirection:
                                                                'column',
                                                            alignItems:
                                                                'center',
                                                            justifyContent:
                                                                'center',
                                                            display: 'flex',
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginLeft: 0,
                                                            marginRight: 20,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1193_1000"
                                                            style={{
                                                                fontFamily:
                                                                    'Poppins',
                                                                fontSize: 20,
                                                                fontWeight: 400,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '30px',
                                                                textAlign:
                                                                    'center',
                                                                marginTop: 0,
                                                            }}
                                                        >
                                                            Stay/lease type:
                                                        </span>

                                                        <span
                                                            id="t18_1193_1001"
                                                            style={{
                                                                fontFamily:
                                                                    'Poppins',
                                                                fontSize: 20,
                                                                fontWeight: 600,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '30px',
                                                                textAlign:
                                                                    'center',
                                                                marginBottom: 0,
                                                            }}
                                                        >
                                                            {
                                                                dl.changes
                                                                    .roomDetails
                                                                    .stayLeaseType
                                                            }
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1193_1002"
                                                        style={{
                                                            height: 124,
                                                            width: 281,
                                                            borderRadius: 20,
                                                            backgroundColor:
                                                                'rgba(248,246,246,1.00)',
                                                            flexDirection:
                                                                'column',
                                                            alignItems:
                                                                'center',
                                                            justifyContent:
                                                                'center',
                                                            display:
                                                                dl.changes
                                                                    .roomDetailsVisibleStatus
                                                                    .roomFurnished,
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginLeft: 20,
                                                            marginRight: 0,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1193_1003"
                                                            style={{
                                                                fontFamily:
                                                                    'Poppins',
                                                                fontSize: 20,
                                                                fontWeight: 400,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '30px',
                                                                textAlign:
                                                                    'center',
                                                                marginTop: 0,
                                                            }}
                                                        >
                                                            Room furnishing:
                                                        </span>

                                                        <span
                                                            id="t18_1193_1004"
                                                            style={{
                                                                fontFamily:
                                                                    'Poppins',
                                                                fontSize: 20,
                                                                fontWeight: 600,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '30px',
                                                                textAlign:
                                                                    'center',
                                                                marginBottom: 0,
                                                            }}
                                                        >
                                                            {
                                                                dl.changes
                                                                    .roomDetails
                                                                    .roomFurnishingRequired
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1193_1007"
                                        style={{
                                            width: 968,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display:
                                                dl.changes
                                                    .roomDetailsVisibleStatus
                                                    .amenities,
                                            paddingLeft: 50,
                                            paddingTop: 30,
                                            paddingBottom: 30,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            borderColor: 'rgba(207,206,206,1)',
                                            borderBottomWidth: 1,
                                            borderStyle: 'solid',
                                        }}
                                    >
                                        <span
                                            id="t18_1193_1008"
                                            style={{
                                                fontFamily: 'Poppins',
                                                fontSize: 30,
                                                fontWeight: 400,
                                                color: 'rgba(186,15,23,1)',
                                                letterSpacing: 0,
                                                lineHeight: '45px',
                                                textAlign: 'left',
                                                marginTop: 0,
                                                marginBottom: 7.5,
                                            }}
                                        >
                                            Amenities
                                        </span>

                                        <div
                                            id="t18_1318_144"
                                            style={{
                                                width: 925,
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
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
                                                style={{
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                {dl.changes.roomDetails.amenities.map(
                                                    (item, index) => {
                                                        return (
                                                            <div>
                                                                <MmArrayComp
                                                                    {...item}
                                                                    {...dl
                                                                        .changes
                                                                        .roomDetails
                                                                        .amenities}
                                                                />
                                                            </div>
                                                        )
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1193_1026"
                                        style={{
                                            width: 968,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingLeft: 50,
                                            paddingTop: 29,
                                            paddingBottom: 30,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            borderColor: 'rgba(207,206,206,1)',
                                            borderBottomWidth: 1,
                                            borderStyle: 'solid',
                                        }}
                                    >
                                        <div
                                            id="t18_1193_1027"
                                            style={{
                                                width: 912,
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingTop: 10,
                                                paddingBottom: 10,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 2.5,
                                            }}
                                        >
                                            <span
                                                id="t18_1193_1028"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 30,
                                                    fontWeight: 400,
                                                    color: 'rgba(186,15,23,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '45px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Utilities
                                            </span>
                                        </div>

                                        <div
                                            id="t18_1318_147"
                                            style={{
                                                width: 925,
                                                flexDirection: 'column',
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
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                {dl.changes.roomDetails.utilities.map(
                                                    (item, index) => {
                                                        return (
                                                            <div>
                                                                <MmArrayComp
                                                                    {...item}
                                                                    {...dl
                                                                        .changes
                                                                        .roomDetails
                                                                        .utilities}
                                                                />
                                                            </div>
                                                        )
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1193_1046"
                                        style={{
                                            width: 968,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display:
                                                dl.changes
                                                    .roomDetailsVisibleStatus
                                                    .additionalInfo,
                                            paddingLeft: 50,
                                            paddingTop: 26,
                                            paddingBottom: 30,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            borderColor: 'rgba(207,206,206,1)',
                                            borderBottomWidth: 1,
                                            borderStyle: 'solid',
                                        }}
                                    >
                                        <div
                                            id="t18_1193_1047"
                                            style={{
                                                width: 920,
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingTop: 10,
                                                paddingBottom: 10,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 9.5,
                                            }}
                                        >
                                            <span
                                                id="t18_1193_1048"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 30,
                                                    fontWeight: 400,
                                                    color: 'rgba(186,15,23,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '45px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Additional Info
                                            </span>
                                        </div>

                                        <div
                                            id="t18_1193_1049"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 9.5,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_1193_1050"
                                                style={{
                                                    height: 124,
                                                    width: 281,
                                                    borderRadius: 10,
                                                    backgroundColor:
                                                        'rgba(248,246,246,1.00)',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display:
                                                        dl.changes
                                                            .roomDetailsVisibleStatus
                                                            .vegPreference,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 19.5,
                                                }}
                                            >
                                                <span
                                                    id="t18_1193_1051"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 20,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '30px',
                                                        textAlign: 'center',
                                                        marginTop: 0,
                                                    }}
                                                >
                                                    Veg preference:
                                                </span>

                                                <span
                                                    id="t18_1193_1052"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 20,
                                                        fontWeight: 600,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '30px',
                                                        textAlign: 'center',
                                                        marginBottom: 0,
                                                    }}
                                                >
                                                    {
                                                        dl.changes.roomDetails
                                                            .vegPreference
                                                    }
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1193_1053"
                                                style={{
                                                    height: 124,
                                                    width: 281,
                                                    borderRadius: 10,
                                                    backgroundColor:
                                                        'rgba(248,246,246,1.00)',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display:
                                                        dl.changes
                                                            .roomDetailsVisibleStatus
                                                            .smokingPolicy,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 19.5,
                                                    marginRight: 19.5,
                                                }}
                                            >
                                                <span
                                                    id="t18_1193_1054"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 20,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '30px',
                                                        textAlign: 'center',
                                                        marginTop: 0,
                                                    }}
                                                >
                                                    Smoking Policy:
                                                </span>

                                                <span
                                                    id="t18_1193_1055"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 20,
                                                        fontWeight: 600,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '30px',
                                                        textAlign: 'center',
                                                        marginBottom: 0,
                                                    }}
                                                >
                                                    {
                                                        dl.changes.roomDetails
                                                            .smokingPolicy
                                                    }
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1193_1056"
                                                style={{
                                                    height: 124,
                                                    width: 281,
                                                    borderRadius: 10,
                                                    backgroundColor:
                                                        'rgba(248,246,246,1.00)',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display:
                                                        dl.changes
                                                            .roomDetailsVisibleStatus
                                                            .petFriendly,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 19.5,
                                                    marginRight: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_1193_1057"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 20,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '30px',
                                                        textAlign: 'center',
                                                        marginTop: 0,
                                                    }}
                                                >
                                                    Pet friendly:
                                                </span>

                                                <span
                                                    id="t18_1193_1058"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 20,
                                                        fontWeight: 600,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '30px',
                                                        textAlign: 'center',
                                                        marginBottom: 0,
                                                    }}
                                                >
                                                    {
                                                        dl.changes.roomDetails
                                                            .petFriendly
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1193_1059"
                                        style={{
                                            height: 177,
                                            width: 1018,
                                            borderBottomLeftRadius: 20,
                                            borderBottomRightRadius: 20,
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingTop: 50,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_1193_1060"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                paddingTop: 10,
                                                paddingBottom: 10,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 9.5,
                                            }}
                                        >
                                            <span
                                                id="t18_1193_1061"
                                                style={{
                                                    fontFamily: 'Raleway',
                                                    fontSize: 20,
                                                    fontWeight: 400,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '23.479999542236328px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Interested in this property?
                                            </span>
                                        </div>

                                        <div
                                            id="t18_1193_1062"
                                            className={' contact-btn'}
                                            style={{
                                                height: 65,
                                                width: 251,
                                                borderRadius: 10,
                                                backgroundColor:
                                                    'rgba(186,15,23,1.00)',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 9.5,
                                                marginBottom: 0,
                                                cursor: 'pointer',
                                            }}
                                            onClick={(e) => {
                                                var userToken =
                                                    dl.functions.common.getCookie(
                                                        'userToken'
                                                    )
                                                if (userToken) {
                                                    dl.changes.contactUSForm.serviceType =
                                                        'rooms'
                                                    dl.changes.contactUSForm.serviceId =
                                                        dl.changes.roomDetails._id
                                                    dl.changes.contactUSForm.firstname =
                                                        dl.changes.userDetail.firstName
                                                    dl.changes.contactUSForm.lastname =
                                                        dl.changes.userDetail.lastName
                                                    dl.changes.contactUSForm.email =
                                                        dl.changes.userDetail.email
                                                    if (
                                                        dl.changes.userDetail
                                                            .phone.length > 12
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
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/8b731d91cd7f7a57bfb64c1f7d44d15d586186ac.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_1193_1063"
                                                    style={{
                                                        height: 39.12890625,
                                                        width: 38.8798828125,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                        marginLeft: 0,
                                                        marginRight: 7,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/8b731d91cd7f7a57bfb64c1f7d44d15d586186ac.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}

                                            <span
                                                id="t18_1193_1064"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 25,
                                                    fontWeight: 500,
                                                    color: 'rgba(255,255,255,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '30.25568199157715px',
                                                    textAlign: 'left',
                                                    marginLeft: 7,
                                                    marginRight: 0,
                                                }}
                                            >
                                                CONTACT
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
        </div>
    )
})
export default Offeredroomdetails_1
