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
import MmArrayComp from '../../components/MmArrayComp.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmArrayCompSs from '../../components/MmArrayCompSs.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmArrayCompS from '../../components/MmArrayCompS.jsx'

const Wantedhomedetails_1 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_1195_1538')
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
                id="t18_1195_1538"
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
                    id="t18_1195_1539"
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
                        id="t18_1195_1540"
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
                            id="t18_1195_1543"
                            style={{
                                width: 1420,
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                display: 'flex',
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 73,
                                paddingBottom: 30,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_1195_1544"
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
                                    id="t18_1195_1545"
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
                                        borderColor: 'rgba(207,206,206,1)',
                                        borderBottomWidth: 1,
                                        borderStyle: 'solid',
                                        marginTop: 0,
                                    }}
                                >
                                    <div
                                        id="t18_1195_1546"
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
                                            id="t18_1195_1547"
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
                                                id="t18_1195_1548"
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
                                                    id="t18_1195_1549"
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
                                                            .needAHomeDetails
                                                            .title
                                                    }
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1195_1550"
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
                                                        id="t18_1195_1551"
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
                                                    id="t18_1195_1552"
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
                                                            .needAHomeDetails
                                                            .location
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1318_201"
                                        style={{
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
                                            id="t18_1195_1553"
                                            style={{
                                                width: 893,
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
                                            <div
                                                id="t18_1195_1554"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_1318_193"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 17,
                                                        fontWeight: 400,
                                                        color: 'rgba(113,113,113,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '25.5px',
                                                        textAlign: 'left',
                                                        marginLeft: 0,
                                                        marginRight: 2.5,
                                                    }}
                                                >
                                                    Posted by:
                                                </span>

                                                <span
                                                    id="t18_1195_1555"
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
                                                        dl.changes
                                                            .needAHomeDetails
                                                            .postedBy
                                                    }
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1318_194"
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
                                                    id="t18_1318_195"
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
                                                id="t18_1318_196"
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
                                                        id="t18_1318_197"
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
                                                        id="t18_1318_198"
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
                                                        id="t18_1318_199"
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
                                                        id="t18_1318_200"
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
                                    id="t18_1195_1583"
                                    style={{
                                        width: 968,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
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
                                        id="t18_1195_1584"
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
                                            id="t18_1195_1585"
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
                                        id="t18_1195_1586"
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
                                            id="t18_1195_1587"
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
                                                dl.changes.needAHomeDetails
                                                    .description
                                            }
                                        </span>
                                    </div>
                                </div>

                                <div
                                    id="t18_1195_1588"
                                    style={{
                                        width: 968,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
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
                                        id="t18_1195_1589"
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
                                            id="t18_1195_1590"
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
                                                id="t18_1195_1591"
                                                style={{
                                                    width: 911,
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
                                                    id="t18_1195_1592"
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
                                                            .needAHomeDetails
                                                            .title
                                                    }
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1195_1593"
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
                                                    id="t18_1195_1596"
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
                                                            .needAHomeDetails
                                                            .location
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1195_1597"
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
                                            id="t18_1195_1598"
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
                                                id="t18_1195_1599"
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
                                                    id="t18_1195_1600"
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
                                                    id="t18_1195_1601"
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
                                                            .needAHomeDetails
                                                            .type
                                                    }
                                                </span>
                                            </div>

                                            {/* <div
                                                id="t18_1195_1602"
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
                                                    id="t18_1195_1603"
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
                                                    Needed by
                                                </span>

                                                <span
                                                    id="t18_1195_1604"
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
                                                            .needAHomeDetails
                                                            .neededBy
                                                    }
                                                </span>
                                            </div> */}

                                            <div
                                                id="t18_1195_1609"
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
                                                    id="t18_1195_1610"
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
                                                    Lease type:
                                                </span>

                                                <span
                                                    id="t18_1195_1611"
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
                                                            .needAHomeDetails
                                                            .stayLeaseType
                                                    }
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1195_1608"
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
                                                id="t18_1195_1612"
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
                                                    id="t18_1195_1613"
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
                                                    id="t18_1195_1614"
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
                                                            .needAHomeDetails
                                                            .noOfPeople
                                                    }
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1195_1605"
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
                                                            .needAhomeDetailsVisibleStatus
                                                            .roomFurnished,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 20,
                                                    marginRight: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_1195_1606"
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
                                                    Furnishing required?
                                                </span>

                                                <span
                                                    id="t18_1195_1607"
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
                                                            .needAHomeDetails
                                                            .roomFurnishingRequired
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_1195_1617"
                                    style={{
                                        width: 968,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display:
                                            dl.changes
                                                .needAhomeDetailsVisibleStatus
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
                                        id="t18_1195_1618"
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
                                        id="t18_1318_202"
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
                                            {dl.changes.needAHomeDetails.amenities.map(
                                                (item, index) => {
                                                    return (
                                                        <div>
                                                            <MmArrayComp
                                                                {...item}
                                                                {...dl.changes
                                                                    .needAHomeDetails
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
                                    id="t18_1195_1636"
                                    style={{
                                        width: 968,
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
                                        borderBottomWidth: 1,
                                        borderStyle: 'solid',
                                    }}
                                >
                                    <div
                                        id="t18_1195_1637"
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
                                            id="t18_1195_1638"
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
                                        id="t18_1318_205"
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
                                            {dl.changes.needAHomeDetails.utilities.map(
                                                (item, index) => {
                                                    return (
                                                        <div>
                                                            <MmArrayComp
                                                                {...item}
                                                                {...dl.changes
                                                                    .needAHomeDetails
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
                                    id="t18_1195_1656"
                                    style={{
                                        width: 968,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display:
                                            dl.changes
                                                .needAhomeDetailsVisibleStatus
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
                                        id="t18_1195_1657"
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
                                            id="t18_1195_1658"
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
                                        id="t18_1195_1659"
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
                                            id="t18_1195_1660"
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
                                                        .needAhomeDetailsVisibleStatus
                                                        .smokingPolicy,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 19.5,
                                            }}
                                        >
                                            <span
                                                id="t18_1195_1661"
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
                                                Do you smoke?
                                            </span>

                                            <span
                                                id="t18_1195_1662"
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
                                                    dl.changes.needAHomeDetails
                                                        .smokingPolicy
                                                }
                                            </span>
                                        </div>

                                        <div
                                            id="t18_1195_1663"
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
                                                        .needAhomeDetailsVisibleStatus
                                                        .petFriendly,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 19.5,
                                                marginRight: 0,
                                            }}
                                        >
                                            <span
                                                id="t18_1195_1664"
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
                                                Do you have pets?:
                                            </span>

                                            <span
                                                id="t18_1195_1665"
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
                                                    dl.changes.needAHomeDetails
                                                        .petFriendly
                                                }
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_1195_1669"
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
                                        id="t18_1195_1670"
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
                                            id="t18_1195_1671"
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
                                        id="t18_1195_1672"
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
                                                    'needahome'
                                                dl.changes.contactUSForm.serviceId =
                                                    dl.changes.needAHomeDetails._id
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
                                                id="t18_1195_1673"
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
                                            id="t18_1195_1674"
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
export default Wantedhomedetails_1
