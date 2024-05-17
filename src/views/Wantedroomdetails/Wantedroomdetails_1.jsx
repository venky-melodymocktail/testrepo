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
import MmArrayComp from '../../components/MmArrayComp.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmArrayCompSs from '../../components/MmArrayCompSs.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmArrayCompS from '../../components/MmArrayCompS.jsx'

const Wantedroomdetails_1 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_1193_1069')
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
                id="t18_1193_1069"
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
                    id="t18_1193_773"
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
                        id="t18_1193_774"
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
                            id="t18_1193_777"
                            style={{
                                width: 1420,
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                display: 'flex',
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 73,
                                paddingBottom: 50,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_1193_778"
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
                                    id="t18_1193_779"
                                    style={{
                                        width: 960,
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
                                        id="t18_1193_780"
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
                                            id="t18_1193_781"
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
                                                id="t18_1193_782"
                                                style={{
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
                                                }}
                                            >
                                                <span
                                                    id="t18_1193_783"
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
                                                            .needARoomDetails
                                                            .title
                                                    }
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1193_784"
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
                                                        id="t18_1193_785"
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
                                                    id="t18_1193_786"
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
                                                            .needARoomDetails
                                                            .location
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1193_787"
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
                                            id="t18_1193_788"
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
                                            <div
                                                id="t18_1318_160"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 2.5,
                                                }}
                                            >
                                                <span
                                                    id="t18_1318_161"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 17,
                                                        fontWeight: 400,
                                                        color: 'rgba(113,113,113,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '25.5px',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    Posted by:
                                                </span>
                                            </div>

                                            <span
                                                id="t18_1193_789"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 17,
                                                    fontWeight: 400,
                                                    color: 'rgba(113,113,113,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '25.5px',
                                                    textAlign: 'left',
                                                    marginLeft: 2.5,
                                                    marginRight: 0,
                                                }}
                                            >
                                                {
                                                    dl.changes.needARoomDetails
                                                        .postedBy
                                                }
                                            </span>
                                        </div>

                                        <div
                                            id="t18_1318_162"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
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
                                                    id="t18_1318_163"
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
                                                            window.location.href
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
                                                id="t18_1318_164"
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
                                                        id="t18_1318_165"
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
                                                                window.location
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
                                                        id="t18_1318_166"
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
                                                                window.location
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
                                                        id="t18_1318_167"
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
                                                                window.location
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
                                                        id="t18_1318_168"
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
                                                                window.location
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
                                    id="t18_1193_793"
                                    /// make the display flex to see the owners details
                                    style={{
                                        width: 968,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'none',
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
                                        id="t18_1193_794"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 8.5,
                                        }}
                                    >
                                        <div
                                            id="t18_1193_795"
                                            style={{
                                                width: 591,
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
                                                id="t18_1193_796"
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
                                            id="t18_1193_797"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
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
                                                id="t18_1193_798"
                                                style={{
                                                    height: 104,
                                                    width: 261,
                                                    borderRadius: 20,
                                                    backgroundColor:
                                                        'rgba(248,246,246,1.00)',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display:
                                                        dl.changes
                                                            .needARoomDetailsVisibleStatus
                                                            .age,
                                                    paddingLeft: 10,
                                                    paddingRight: 10,
                                                    paddingTop: 10,
                                                    paddingBottom: 10,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 10,
                                                }}
                                            >
                                                <span
                                                    id="t18_1193_799"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 20,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '24.204544067382812px',
                                                        textAlign: 'center',
                                                        marginTop: 0,
                                                    }}
                                                >
                                                    Age:
                                                </span>

                                                <span
                                                    id="t18_1318_154"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 20,
                                                        fontWeight: 600,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '24.204544067382812px',
                                                        textAlign: 'center',
                                                        marginBottom: 0,
                                                    }}
                                                >
                                                    {
                                                        dl.changes
                                                            .needARoomDetails
                                                            .Age
                                                    }
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1225_1133"
                                                style={{
                                                    height: 104,
                                                    width: 261,
                                                    borderRadius: 20,
                                                    backgroundColor:
                                                        'rgba(248,246,246,1.00)',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display:
                                                        dl.changes
                                                            .needARoomDetailsVisibleStatus
                                                            .occupation,
                                                    paddingLeft: 10,
                                                    paddingRight: 10,
                                                    paddingTop: 10,
                                                    paddingBottom: 10,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 10,
                                                    marginRight: 10,
                                                }}
                                            >
                                                <span
                                                    id="t18_1225_1134"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 20,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '24.204544067382812px',
                                                        textAlign: 'center',
                                                        marginTop: 0,
                                                    }}
                                                >
                                                    Occupation:
                                                </span>

                                                <span
                                                    id="t18_1318_155"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 20,
                                                        fontWeight: 600,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '24.204544067382812px',
                                                        textAlign: 'center',
                                                        marginBottom: 0,
                                                    }}
                                                >
                                                    {
                                                        dl.changes
                                                            .needARoomDetails
                                                            .occupation
                                                    }
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1193_800"
                                                style={{
                                                    height: 104,
                                                    width: 261,
                                                    borderRadius: 20,
                                                    backgroundColor:
                                                        'rgba(248,246,246,1.00)',
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
                                                    marginLeft: 10,
                                                    marginRight: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_1193_801"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 20,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '24.204544067382812px',
                                                        textAlign: 'center',
                                                        marginTop: 0,
                                                    }}
                                                >
                                                    Gender:
                                                </span>

                                                <span
                                                    id="t18_1318_156"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 20,
                                                        fontWeight: 600,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '24.204544067382812px',
                                                        textAlign: 'center',
                                                        marginBottom: 0,
                                                    }}
                                                >
                                                    {
                                                        dl.changes
                                                            .needARoomDetails
                                                            .preferedGender
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1318_153"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display:
                                                dl.changes
                                                    .needARoomDetailsVisibleStatus
                                                    .languagesKnown,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 8.5,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_1193_802"
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
                                                id="t18_1193_803"
                                                style={{
                                                    width: 908,
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
                                                }}
                                            >
                                                <span
                                                    id="t18_1193_804"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 17,
                                                        fontWeight: 400,
                                                        color: 'rgba(113,113,113,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '25.5px',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    Languages known:
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1318_150"
                                            style={{
                                                width: 925,
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
                                                style={{
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                {dl.changes.needARoomDetails.languages.map(
                                                    (item, index) => {
                                                        return (
                                                            <div>
                                                                <MmArrayComp
                                                                    {...item}
                                                                    {...dl
                                                                        .changes
                                                                        .needARoomDetails
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
                                    id="t18_1193_817"
                                    style={{
                                        width: 968,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 50,
                                        paddingTop: 26,
                                        paddingBottom: 20,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        borderColor: 'rgba(207,206,206,1)',
                                        borderBottomWidth: 1,
                                        borderStyle: 'solid',
                                    }}
                                >
                                    <div
                                        id="t18_1193_818"
                                        style={{
                                            width: 148,
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
                                            marginBottom: 5.5,
                                        }}
                                    >
                                        <span
                                            id="t18_1193_819"
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
                                        id="t18_1193_820"
                                        style={{
                                            width: 910,
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
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
                                            id="t18_1193_821"
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
                                                dl.changes.needARoomDetails
                                                    .description
                                            }
                                        </span>
                                    </div>
                                </div>

                                <div
                                    id="t18_1193_822"
                                    style={{
                                        width: 968,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 50,
                                        paddingTop: 25,
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
                                        id="t18_1193_823"
                                        style={{
                                            width: 910,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 19,
                                        }}
                                    >
                                        <div
                                            id="t18_1193_824"
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
                                                id="t18_1193_825"
                                                style={{
                                                    width: 642,
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
                                                }}
                                            >
                                                <span
                                                    id="t18_1193_826"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 28,
                                                        fontWeight: 700,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '42px',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    {
                                                        dl.changes
                                                            .needARoomDetails
                                                            .title
                                                    }
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1193_827"
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
                                                <span
                                                    id="t18_1193_830"
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
                                                            .needARoomDetails
                                                            .location
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1193_831"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 19,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_1193_832"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-end',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 16.5,
                                            }}
                                        >
                                            <div
                                                id="t18_1193_833"
                                                style={{
                                                    height: 124,
                                                    width: 281,
                                                    borderRadius: 20,
                                                    backgroundColor:
                                                        'rgba(248,246,246,1.00)',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 20,
                                                }}
                                            >
                                                <span
                                                    id="t18_1193_834"
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
                                                    Type:
                                                </span>

                                                <span
                                                    id="t18_1193_835"
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
                                                        dl.changes
                                                            .needARoomDetails
                                                            .type
                                                    }
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1193_836"
                                                style={{
                                                    height: 124,
                                                    width: 281,
                                                    borderRadius: 20,
                                                    backgroundColor:
                                                        'rgba(248,246,246,1.00)',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 20,
                                                    marginRight: 20,
                                                }}
                                            >
                                                <span
                                                    id="t18_1193_837"
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
                                                    Needed from:
                                                </span>

                                                <span
                                                    id="t18_1193_838"
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
                                                        dl.changes
                                                            .needARoomDetails
                                                            .availabilityFrom
                                                    }
                                                </span>
                                            </div>

                                            {/* <div
                                                id="t18_1193_839"
                                                style={{
                                                    height: 124,
                                                    width: 281,
                                                    borderRadius: 20,
                                                    backgroundColor:
                                                        'rgba(248,246,246,1.00)',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 20,
                                                    marginRight: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_1193_840"
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
                                                    Needed to:
                                                </span>

                                                <span
                                                    id="t18_1193_841"
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
                                                        dl.changes
                                                            .needARoomDetails
                                                            .availabilityTo
                                                    }
                                                </span>
                                            </div> */}
                                            <div
                                                id="t18_1193_846"
                                                style={{
                                                    height: 124,
                                                    width: 281,
                                                    borderRadius: 20,
                                                    backgroundColor:
                                                        'rgba(248,246,246,1.00)',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display:
                                                        dl.changes
                                                            .needARoomDetailsVisibleStatus
                                                            .roomFurnished,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 20,
                                                    marginRight: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_1193_847"
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
                                                    Room furnishing:
                                                </span>

                                                <span
                                                    id="t18_1193_848"
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
                                                        dl.changes
                                                            .needARoomDetails
                                                            .roomFurnishingRequired
                                                    }
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1225_1135"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 16.5,
                                                marginBottom: 16.5,
                                            }}
                                        >
                                            <div
                                                id="t18_1225_1136"
                                                style={{
                                                    height: 124,
                                                    width: 281,
                                                    borderRadius: 20,
                                                    backgroundColor:
                                                        'rgba(248,246,246,1.00)',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 20,
                                                }}
                                            >
                                                <span
                                                    id="t18_1225_1137"
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
                                                    Price mode:
                                                </span>

                                                <span
                                                    id="t18_1225_1138"
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
                                                        dl.changes
                                                            .needARoomDetails
                                                            .pricemode
                                                    }
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1225_1139"
                                                style={{
                                                    height: 124,
                                                    width: 281,
                                                    borderRadius: 20,
                                                    backgroundColor:
                                                        'rgba(248,246,246,1.00)',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 20,
                                                    marginRight: 20,
                                                }}
                                            >
                                                <span
                                                    id="t18_1225_1140"
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
                                                    No. of people:
                                                </span>

                                                <span
                                                    id="t18_1225_1141"
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
                                                        dl.changes
                                                            .needARoomDetails
                                                            .noOfPeople
                                                    }
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1225_1142"
                                                style={{
                                                    height: 104,
                                                    width: 261,
                                                    borderRadius: 20,
                                                    backgroundColor:
                                                        'rgba(248,246,246,1.00)',
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
                                                    marginLeft: 20,
                                                    marginRight: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_1225_1143"
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
                                                    Attached bath:
                                                </span>

                                                <span
                                                    id="t18_1318_157"
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
                                                        dl.changes
                                                            .needARoomDetails
                                                            .attachedBath
                                                    }
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1193_842"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 16.5,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_1193_843"
                                                style={{
                                                    height: 124,
                                                    width: 281,
                                                    borderRadius: 20,
                                                    backgroundColor:
                                                        'rgba(248,246,246,1.00)',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 20,
                                                }}
                                            >
                                                <span
                                                    id="t18_1193_844"
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
                                                    Stay/lease type:
                                                </span>

                                                <span
                                                    id="t18_1193_845"
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
                                                        dl.changes
                                                            .needARoomDetails
                                                            .stayLeaseType
                                                    }
                                                </span>
                                            </div>

                                            {/* <div
                                                id="t18_1193_846"
                                                style={{
                                                    height: 124,
                                                    width: 281,
                                                    borderRadius: 20,
                                                    backgroundColor:
                                                        'rgba(248,246,246,1.00)',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display:
                                                        dl.changes
                                                            .needARoomDetailsVisibleStatus
                                                            .roomFurnished,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 20,
                                                    marginRight: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_1193_847"
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
                                                    Room furnishing:
                                                </span>

                                                <span
                                                    id="t18_1193_848"
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
                                                        dl.changes
                                                            .needARoomDetails
                                                            .roomFurnishingRequired
                                                    }
                                                </span>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_1193_851"
                                    style={{
                                        width: 968,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display:
                                            dl.changes
                                                .needARoomDetailsVisibleStatus
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
                                        id="t18_1193_852"
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
                                        id="t18_1318_169"
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
                                            {dl.changes.needARoomDetails.amenities.map(
                                                (item, index) => {
                                                    return (
                                                        <div>
                                                            <MmArrayComp
                                                                {...item}
                                                                {...dl.changes
                                                                    .needARoomDetails
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
                                    id="t18_1193_870"
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
                                        id="t18_1193_871"
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
                                            id="t18_1193_872"
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
                                        id="t18_1318_172"
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
                                            {dl.changes.needARoomDetails.utilities.map(
                                                (item, index) => {
                                                    return (
                                                        <div>
                                                            <MmArrayComp
                                                                {...item}
                                                                {...dl.changes
                                                                    .needARoomDetails
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
                                    id="t18_1193_890"
                                    style={{
                                        width: 968,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display:
                                            dl.changes
                                                .needARoomDetailsVisibleStatus
                                                .additionalInfo,
                                        paddingLeft: 50,
                                        paddingTop: 25,
                                        paddingBottom: 25,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        borderColor: 'rgba(207,206,206,1)',
                                        borderBottomWidth: 1,
                                        borderStyle: 'solid',
                                    }}
                                >
                                    <div
                                        id="t18_1193_891"
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
                                            id="t18_1193_892"
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
                                        id="t18_1193_893"
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
                                            id="t18_1193_894"
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
                                                        .needARoomDetailsVisibleStatus
                                                        .vegPreference,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 19.5,
                                            }}
                                        >
                                            <span
                                                id="t18_1193_895"
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
                                                id="t18_1193_896"
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
                                                    dl.changes.needARoomDetails
                                                        .vegPreference
                                                }
                                            </span>
                                        </div>

                                        <div
                                            id="t18_1193_897"
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
                                                        .needARoomDetailsVisibleStatus
                                                        .smokingPolicy,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 19.5,
                                                marginRight: 19.5,
                                            }}
                                        >
                                            <span
                                                id="t18_1193_898"
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
                                                id="t18_1193_899"
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
                                                    dl.changes.needARoomDetails
                                                        .smokingPolicy
                                                }
                                            </span>
                                        </div>

                                        <div
                                            id="t18_1193_900"
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
                                                        .needARoomDetailsVisibleStatus
                                                        .petFriendly,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 19.5,
                                                marginRight: 0,
                                            }}
                                        >
                                            <span
                                                id="t18_1193_901"
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
                                                id="t18_1193_902"
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
                                                    dl.changes.needARoomDetails
                                                        .petFriendly
                                                }
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_1193_903"
                                    style={{
                                        height: 203,
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
                                        id="t18_1193_904"
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
                                            id="t18_1193_905"
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
                                        id="t18_1193_906"
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
                                                    'needaroom'
                                                dl.changes.contactUSForm.serviceId =
                                                    dl.changes.needARoomDetails._id
                                                dl.changes.contactUSForm.firstname =
                                                    dl.changes.userDetail.firstName
                                                dl.changes.contactUSForm.lastname =
                                                    dl.changes.userDetail.lastName
                                                dl.changes.contactUSForm.email =
                                                    dl.changes.userDetail.email
                                                if (
                                                    dl.changes.userDetail.phone
                                                        .length > 12
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
                                                id="t18_1193_907"
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
                                            id="t18_1193_908"
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
    )
})
export default Wantedroomdetails_1
