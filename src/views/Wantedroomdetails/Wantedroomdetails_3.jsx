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

const Wantedroomdetails_3 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 620
            const element = document.getElementById('t18_1232_1677')
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
                id="t18_1232_1677"
                style={{
                    width: 620,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    paddingBottom: 5,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginLeft: 10,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <div
                    id="t18_1225_1154"
                    style={{
                        width: 620,
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
                        id="t18_1225_1155"
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
                        <MmHeaderS
                            {...dl.changes.userDetail}
                            onChangeAddress={(val) => {
                                dl.functions.modalsPlugin.openModal(
                                    'AddressPopupS'
                                )
                            }}
                            onClickMenu={(val) => {}}
                            onLogIn={(val) => {
                                dl.functions.viewsPlugin.showView('login')
                            }}
                            onClickProfile={(val) => {
                                dl.functions.viewsPlugin.showView('profile')
                                var currentPath =
                                    dl.functions.common.getLastPath()
                                dl.functions.onLoadFunctions[currentPath]()
                            }}
                        />

                        <div
                            id="t18_1225_1158"
                            style={{
                                width: 601,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 47,
                                paddingBottom: 30,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_1225_1159"
                                style={{
                                    width: 580,
                                    borderRadius: 20,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 1,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderStyle: 'solid',
                                }}
                            >
                                <div
                                    id="t18_1225_1160"
                                    style={{
                                        width: 560,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 20,
                                        paddingTop: 20,
                                        paddingBottom: 20,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                    }}
                                >
                                    <div
                                        id="t18_1225_1161"
                                        style={{
                                            width: 546,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 4.5,
                                        }}
                                    >
                                        <div
                                            id="t18_1225_1162"
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
                                                id="t18_1225_1163"
                                                style={{
                                                    width: 383,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 5,
                                                }}
                                            >
                                                <span
                                                    id="t18_1225_1164"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 20,
                                                        fontWeight: 700,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '24.204544067382812px',
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
                                                id="t18_1225_1165"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
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
                                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/1dae74ee7a4adb933849b4ebb7af54bd5d13fc9a.png' !=
                                                '' ? (
                                                    <img
                                                        id="t18_1225_1166"
                                                        style={{
                                                            height: 12.71875,
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
                                                    id="t18_1225_1167"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 14,
                                                        fontWeight: 500,
                                                        color: 'rgba(113,113,113,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '16.94318199157715px',
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
                                        id="t18_1225_1174"
                                        style={{
                                            width: 467,
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
                                            id="t18_1225_1175"
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
                                                id="t18_1590_257"
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
                                                    id="t18_1590_256"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 15,
                                                        fontWeight: 400,
                                                        color: 'rgba(113,113,113,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '22.5px',
                                                        textAlign: 'left',
                                                        marginLeft: 0,
                                                        marginRight: 2.5,
                                                    }}
                                                >
                                                    Posted by:
                                                </span>

                                                <span
                                                    id="t18_1225_1176"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 15,
                                                        fontWeight: 400,
                                                        color: 'rgba(113,113,113,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '22.5px',
                                                        textAlign: 'left',
                                                        marginLeft: 2.5,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    {
                                                        dl.changes
                                                            .needARoomDetails
                                                            .postedBy
                                                    }
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1590_258"
                                            style={{
                                                flexDirection: 'row',
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
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c7f7e0d2f29714077d45c2c6c5118445e5e46978.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_1590_259"
                                                    style={{
                                                        height: 25,
                                                        width: 25,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                        marginLeft: 0,
                                                        marginRight: 5,
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
                                                id="t18_1590_260"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-end',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 5,
                                                    marginRight: 0,
                                                }}
                                            >
                                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/f86479c5f13f179327df6addde448bbc85be06e7.png' !=
                                                '' ? (
                                                    <img
                                                        id="t18_1590_261"
                                                        style={{
                                                            height: 25,
                                                            width: 25.1416015625,
                                                            display: 'flex',
                                                            borderWidth: 0,
                                                            marginLeft: 0,
                                                            marginRight: 5,
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
                                                        id="t18_1590_262"
                                                        style={{
                                                            height: 25,
                                                            width: 25,
                                                            display: 'flex',
                                                            borderWidth: 0,
                                                            marginLeft: 5,
                                                            marginRight: 5,
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
                                                        id="t18_1590_263"
                                                        style={{
                                                            height: 25,
                                                            width: 25,
                                                            display: 'flex',
                                                            borderWidth: 0,
                                                            marginLeft: 5,
                                                            marginRight: 5,
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
                                                        id="t18_1590_264"
                                                        style={{
                                                            height: 25,
                                                            width: 25,
                                                            display: 'flex',
                                                            borderWidth: 0,
                                                            marginLeft: 5,
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
                                    id="t18_1225_1180"
                                    /// make the display flex to see the owners details
                                    style={{
                                        width: 560,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'none',
                                        paddingLeft: 20,
                                        paddingTop: 5,
                                        paddingBottom: 20,
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
                                        id="t18_1225_1181"
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
                                            id="t18_1225_1182"
                                            style={{
                                                width: 425,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 7.5,
                                            }}
                                        >
                                            <span
                                                id="t18_1225_1183"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 20,
                                                    fontWeight: 400,
                                                    color: 'rgba(186,15,23,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '30px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Owner details
                                            </span>
                                        </div>

                                        <div
                                            id="t18_1225_1184"
                                            style={{
                                                flexDirection: 'row',
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
                                                id="t18_1225_1185"
                                                style={{
                                                    height: 40,
                                                    width: 130,
                                                    borderRadius: 10,
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
                                                    marginRight: 4.5,
                                                }}
                                            >
                                                <span
                                                    id="t18_1590_265"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 16,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '24px',
                                                        textAlign: 'center',
                                                        marginTop: 0,
                                                    }}
                                                >
                                                    Age:
                                                </span>

                                                <span
                                                    id="t18_1225_1186"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 16,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '24px',
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
                                                id="t18_1225_1299"
                                                style={{
                                                    height: 60,
                                                    width: 150,
                                                    borderRadius: 10,
                                                    backgroundColor:
                                                        'rgba(248,246,246,1.00)',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display:
                                                        dl.changes
                                                            .needARoomDetailsVisibleStatus
                                                            .occupation,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 4.5,
                                                    marginRight: 4.5,
                                                }}
                                            >
                                                <span
                                                    id="t18_1225_1300"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 14,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '21px',
                                                        textAlign: 'center',
                                                        marginTop: 0,
                                                    }}
                                                >
                                                    Occupation:
                                                </span>

                                                <span
                                                    id="t18_1225_1301"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 14,
                                                        fontWeight: 600,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '21px',
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
                                                id="t18_1225_1187"
                                                style={{
                                                    height: 60,
                                                    width: 150,
                                                    borderRadius: 10,
                                                    backgroundColor:
                                                        'rgba(248,246,246,1.00)',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 4.5,
                                                    marginRight: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_1225_1188"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 14,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '21px',
                                                        textAlign: 'center',
                                                        marginTop: 0,
                                                    }}
                                                >
                                                    Gender:
                                                </span>

                                                <span
                                                    id="t18_1225_1189"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 14,
                                                        fontWeight: 600,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '21px',
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
                                        id="t18_1945_3"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 8.5,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_1225_1190"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'center',
                                                display:
                                                    dl.changes
                                                        .needARoomDetailsVisibleStatus
                                                        .languagesKnown,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 8.5,
                                            }}
                                        >
                                            <div
                                                id="t18_1225_1191"
                                                style={{
                                                    width: 463,
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
                                                    id="t18_1225_1192"
                                                    style={{
                                                        fontFamily: 'Poppins',
                                                        fontSize: 14,
                                                        fontWeight: 400,
                                                        color: 'rgba(113,113,113,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '21px',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    Languages known:
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1225_1193"
                                            style={{
                                                width: 547,
                                                flexDirection: 'row',
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
                                                                <MmArrayCompSs
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
                                    id="t18_1225_1209"
                                    style={{
                                        width: 560,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 20,
                                        paddingTop: 10,
                                        paddingBottom: 20,
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
                                        id="t18_1225_1210"
                                        style={{
                                            width: 540,
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
                                            id="t18_1225_1211"
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
                                            }}
                                        >
                                            <span
                                                id="t18_1225_1212"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 20,
                                                    fontWeight: 400,
                                                    color: 'rgba(186,15,23,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '30px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Overview
                                            </span>
                                        </div>

                                        <div
                                            id="t18_1225_1213"
                                            style={{
                                                width: 541,
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingTop: 10,
                                                paddingBottom: 10,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <span
                                                id="t18_1225_1214"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 16,
                                                    fontWeight: 400,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '24px',
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
                                        id="t18_1225_1215"
                                        style={{
                                            width: 538,
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
                                            id="t18_1225_1216"
                                            style={{
                                                width: 538,
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
                                                id="t18_1225_1217"
                                                style={{
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                }}
                                            >
                                                <div
                                                    id="t18_1225_1218"
                                                    style={{
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
                                                    <div
                                                        id="t18_1225_1219"
                                                        style={{
                                                            width: 362,
                                                            flexDirection:
                                                                'row',
                                                            alignItems:
                                                                'flex-start',
                                                            justifyContent:
                                                                'flex-start',
                                                            display: 'flex',
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1225_1220"
                                                            style={{
                                                                fontFamily:
                                                                    'Poppins',
                                                                fontSize: 16,
                                                                fontWeight: 700,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '24px',
                                                                textAlign:
                                                                    'left',
                                                            }}
                                                        >
                                                            {
                                                                dl.changes
                                                                    .needARoomDetails
                                                                    .title
                                                            }
                                                        </span>
                                                    </div>
                                                </div>

                                                <div
                                                    id="t18_1225_1221"
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
                                                        id="t18_1225_1224"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 14,
                                                            fontWeight: 500,
                                                            color: 'rgba(113,113,113,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '16.94318199157715px',
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
                                            id="t18_1225_1228"
                                            style={{
                                                width: 538,
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
                                                id="t18_1225_1229"
                                                style={{
                                                    width: 538,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-end',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 12.5,
                                                }}
                                            >
                                                <div
                                                    id="t18_1225_1230"
                                                    style={{
                                                        height: 60,
                                                        width: 170,
                                                        borderRadius: 10,
                                                        backgroundColor:
                                                            'rgba(248,246,246,1.00)',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 0,
                                                        marginRight: 5,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1225_1231"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 14,
                                                            fontWeight: 400,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '21px',
                                                            textAlign: 'center',
                                                            marginTop: 0,
                                                        }}
                                                    >
                                                        Type:
                                                    </span>

                                                    <span
                                                        id="t18_1225_1232"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 14,
                                                            fontWeight: 600,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '21px',
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
                                                    id="t18_1225_1233"
                                                    style={{
                                                        height: 60,
                                                        width: 170,
                                                        borderRadius: 10,
                                                        backgroundColor:
                                                            'rgba(248,246,246,1.00)',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 5,
                                                        marginRight: 5,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1225_1234"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 14,
                                                            fontWeight: 400,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '21px',
                                                            textAlign: 'center',
                                                            marginTop: 0,
                                                        }}
                                                    >
                                                        Needed from:
                                                    </span>

                                                    <span
                                                        id="t18_1225_1235"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 14,
                                                            fontWeight: 600,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '21px',
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
                                                    id="t18_1225_1236"
                                                    style={{
                                                        height: 60,
                                                        width: 170,
                                                        borderRadius: 10,
                                                        backgroundColor:
                                                            'rgba(248,246,246,1.00)',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 5,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1225_1237"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 14,
                                                            fontWeight: 400,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '21px',
                                                            textAlign: 'center',
                                                            marginTop: 0,
                                                        }}
                                                    >
                                                        Needed to:
                                                    </span>

                                                    <span
                                                        id="t18_1225_1238"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 14,
                                                            fontWeight: 600,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '21px',
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
                                                    id="t18_1225_1253"
                                                    style={{
                                                        height: 60,
                                                        width: 170,
                                                        borderRadius: 10,
                                                        backgroundColor:
                                                            'rgba(248,246,246,1.00)',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        display:
                                                            dl.changes
                                                                .needARoomDetailsVisibleStatus
                                                                .roomFurnished,
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 5,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1225_1254"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 14,
                                                            fontWeight: 400,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '21px',
                                                            textAlign: 'center',
                                                            marginTop: 0,
                                                        }}
                                                    >
                                                        Room furnishing:
                                                    </span>

                                                    <span
                                                        id="t18_1225_1255"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 14,
                                                            fontWeight: 600,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '21px',
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
                                                id="t18_1225_1239"
                                                style={{
                                                    width: 538,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 12.5,
                                                    marginBottom: 12.5,
                                                }}
                                            >
                                                <div
                                                    id="t18_1225_1240"
                                                    style={{
                                                        height: 60,
                                                        width: 170,
                                                        borderRadius: 10,
                                                        backgroundColor:
                                                            'rgba(248,246,246,1.00)',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 0,
                                                        marginRight: 5,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1225_1241"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 14,
                                                            fontWeight: 400,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '21px',
                                                            textAlign: 'center',
                                                            marginTop: 0,
                                                        }}
                                                    >
                                                        Price mode:
                                                    </span>

                                                    <span
                                                        id="t18_1225_1242"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 14,
                                                            fontWeight: 600,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '21px',
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
                                                    id="t18_1225_1243"
                                                    style={{
                                                        height: 60,
                                                        width: 170,
                                                        borderRadius: 10,
                                                        backgroundColor:
                                                            'rgba(248,246,246,1.00)',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 5,
                                                        marginRight: 5,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1225_1244"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 14,
                                                            fontWeight: 400,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '21px',
                                                            textAlign: 'center',
                                                            marginTop: 0,
                                                        }}
                                                    >
                                                        No. of people:
                                                    </span>

                                                    <span
                                                        id="t18_1225_1245"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 14,
                                                            fontWeight: 600,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '21px',
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
                                                    id="t18_1225_1246"
                                                    style={{
                                                        height: 60,
                                                        width: 170,
                                                        borderRadius: 10,
                                                        backgroundColor:
                                                            'rgba(248,246,246,1.00)',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 5,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1225_1247"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 14,
                                                            fontWeight: 400,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '21px',
                                                            textAlign: 'center',
                                                            marginTop: 0,
                                                        }}
                                                    >
                                                        Attached bath:
                                                    </span>

                                                    <span
                                                        id="t18_1225_1248"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 14,
                                                            fontWeight: 600,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '21px',
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
                                                id="t18_1225_1249"
                                                style={{
                                                    width: 538,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 12.5,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <div
                                                    id="t18_1225_1250"
                                                    style={{
                                                        height: 60,
                                                        width: 170,
                                                        borderRadius: 10,
                                                        backgroundColor:
                                                            'rgba(248,246,246,1.00)',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 0,
                                                        marginRight: 5,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1225_1251"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 14,
                                                            fontWeight: 400,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '21px',
                                                            textAlign: 'center',
                                                            marginTop: 0,
                                                        }}
                                                    >
                                                        Stay/lease type:
                                                    </span>

                                                    <span
                                                        id="t18_1225_1252"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 14,
                                                            fontWeight: 600,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '21px',
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
                                                    id="t18_1225_1253"
                                                    style={{
                                                        height: 60,
                                                        width: 170,
                                                        borderRadius: 10,
                                                        backgroundColor:
                                                            'rgba(248,246,246,1.00)',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        display:
                                                            dl.changes
                                                                .needARoomDetailsVisibleStatus
                                                                .roomFurnished,
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 5,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1225_1254"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 14,
                                                            fontWeight: 400,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '21px',
                                                            textAlign: 'center',
                                                            marginTop: 0,
                                                        }}
                                                    >
                                                        Room furnishing:
                                                    </span>

                                                    <span
                                                        id="t18_1225_1255"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 14,
                                                            fontWeight: 600,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '21px',
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
                                </div>

                                <div
                                    id="t18_1225_1256"
                                    style={{
                                        width: 560,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display:
                                            dl.changes
                                                .needARoomDetailsVisibleStatus
                                                .amenities,
                                        paddingLeft: 20,
                                        paddingTop: 10,
                                        paddingBottom: 20,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        borderColor: 'rgba(207,206,206,1)',
                                        borderBottomWidth: 1,
                                        borderStyle: 'solid',
                                    }}
                                >
                                    <span
                                        id="t18_1225_1257"
                                        style={{
                                            fontFamily: 'Poppins',
                                            fontSize: 20,
                                            fontWeight: 400,
                                            color: 'rgba(186,15,23,1)',
                                            letterSpacing: 0,
                                            lineHeight: '30px',
                                            textAlign: 'left',
                                            marginTop: 0,
                                            marginBottom: 7.5,
                                        }}
                                    >
                                        Amenities
                                    </span>

                                    <div
                                        id="t18_1225_1258"
                                        style={{
                                            width: 547,
                                            flexDirection: 'row',
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
                                                            <MmArrayCompSs
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
                                    id="t18_1225_1267"
                                    style={{
                                        width: 560,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 20,
                                        paddingTop: 10,
                                        paddingBottom: 20,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        borderColor: 'rgba(207,206,206,1)',
                                        borderBottomWidth: 1,
                                        borderStyle: 'solid',
                                    }}
                                >
                                    <span
                                        id="t18_1225_1268"
                                        style={{
                                            fontFamily: 'Poppins',
                                            fontSize: 20,
                                            fontWeight: 400,
                                            color: 'rgba(186,15,23,1)',
                                            letterSpacing: 0,
                                            lineHeight: '30px',
                                            textAlign: 'left',
                                            marginTop: 0,
                                            marginBottom: 7.5,
                                        }}
                                    >
                                        Utilities
                                    </span>

                                    <div
                                        id="t18_1225_1269"
                                        style={{
                                            width: 547,
                                            flexDirection: 'row',
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
                                            {dl.changes.needARoomDetails.utilities.map(
                                                (item, index) => {
                                                    return (
                                                        <div>
                                                            <MmArrayCompSs
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
                                    id="t18_1225_1278"
                                    style={{
                                        height: 150,
                                        width: 560,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display:
                                            dl.changes
                                                .needARoomDetailsVisibleStatus
                                                .additionalInfo,
                                        paddingLeft: 20,
                                        paddingTop: 10,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        borderColor: 'rgba(207,206,206,1)',
                                        borderBottomWidth: 1,
                                        borderStyle: 'solid',
                                    }}
                                >
                                    <div
                                        id="t18_1225_1279"
                                        style={{
                                            width: 441,
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
                                        }}
                                    >
                                        <span
                                            id="t18_1225_1280"
                                            style={{
                                                fontFamily: 'Poppins',
                                                fontSize: 20,
                                                fontWeight: 400,
                                                color: 'rgba(186,15,23,1)',
                                                letterSpacing: 0,
                                                lineHeight: '30px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            Additional Info
                                        </span>
                                    </div>

                                    <div
                                        id="t18_1225_1281"
                                        style={{
                                            width: 492,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_1225_1282"
                                            style={{
                                                height: 60,
                                                width: 150,
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
                                                marginRight: 5,
                                            }}
                                        >
                                            <span
                                                id="t18_1225_1283"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 14,
                                                    fontWeight: 400,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '21px',
                                                    textAlign: 'center',
                                                    marginTop: 0,
                                                }}
                                            >
                                                Veg preference:
                                            </span>

                                            <span
                                                id="t18_1225_1284"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 14,
                                                    fontWeight: 400,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '21px',
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
                                            id="t18_1225_1285"
                                            style={{
                                                height: 60,
                                                width: 150,
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
                                                marginLeft: 5,
                                                marginRight: 5,
                                            }}
                                        >
                                            <span
                                                id="t18_1225_1286"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 14,
                                                    fontWeight: 400,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '21px',
                                                    textAlign: 'center',
                                                    marginTop: 0,
                                                }}
                                            >
                                                Smoking Policy:
                                            </span>

                                            <span
                                                id="t18_1225_1287"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 14,
                                                    fontWeight: 600,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '21px',
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
                                            id="t18_1225_1288"
                                            style={{
                                                height: 60,
                                                width: 150,
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
                                                marginLeft: 5,
                                                marginRight: 0,
                                            }}
                                        >
                                            <span
                                                id="t18_1225_1289"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 14,
                                                    fontWeight: 400,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '21px',
                                                    textAlign: 'center',
                                                    marginTop: 0,
                                                }}
                                            >
                                                Pet friendly:
                                            </span>

                                            <span
                                                id="t18_1225_1290"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 14,
                                                    fontWeight: 600,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '21px',
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
                                    id="t18_1225_1291"
                                    style={{
                                        height: 132,
                                        width: 580,
                                        borderBottomLeftRadius: 20,
                                        borderBottomRightRadius: 20,
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
                                        id="t18_1225_1292"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingLeft: 10,
                                            paddingRight: 10,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 5,
                                        }}
                                    >
                                        <span
                                            id="t18_1225_1293"
                                            style={{
                                                fontFamily: 'Raleway',
                                                fontSize: 16,
                                                fontWeight: 400,
                                                color: 'rgba(0,0,0,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '18.784000396728516px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            Interested in this property?
                                        </span>
                                    </div>

                                    <div
                                        id="t18_1225_1294"
                                        style={{
                                            height: 50,
                                            width: 200,
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
                                            marginTop: 5,
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
                                                    'contactAdvertiserS'
                                                )
                                            } else {
                                                dl.functions.modalsPlugin.openModal(
                                                    'loginS'
                                                )
                                            }
                                        }}
                                    >
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/8b731d91cd7f7a57bfb64c1f7d44d15d586186ac.png' !=
                                        '' ? (
                                            <img
                                                id="t18_1225_1295"
                                                style={{
                                                    height: 32,
                                                    width: 34,
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
                                            id="t18_1225_1296"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 20,
                                                fontWeight: 500,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '24.204544067382812px',
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

                        <MmFooterS />
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Wantedroomdetails_3
