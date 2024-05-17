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

const Wantedhomedetails_3 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 620
            const element = document.getElementById('t18_1294_680')
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
                id="t18_1294_680"
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
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <div
                    id="t18_1294_681"
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
                        id="t18_1294_682"
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
                            id="t18_1294_685"
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
                                id="t18_1294_686"
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
                                    id="t18_1294_687"
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
                                        id="t18_1294_688"
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
                                            id="t18_1294_689"
                                            style={{
                                                width: 546,
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
                                                id="t18_1294_690"
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
                                                    id="t18_1294_691"
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
                                                            .needAHomeDetails
                                                            .title
                                                    }
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1294_692"
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
                                                        id="t18_1294_693"
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
                                                    id="t18_1294_694"
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
                                                            .needAHomeDetails
                                                            .location
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1294_695"
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
                                            id="t18_1294_696"
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
                                                id="t18_1294_697"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 15,
                                                    fontWeight: 400,
                                                    color: 'rgba(113,113,113,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '22.5px',
                                                    textAlign: 'left',
                                                    marginLeft: 0,
                                                    marginRight: 5,
                                                }}
                                            >
                                                Posted by:
                                            </span>

                                            <span
                                                id="t18_1604_465"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 15,
                                                    fontWeight: 400,
                                                    color: 'rgba(113,113,113,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '22.5px',
                                                    textAlign: 'left',
                                                    marginLeft: 5,
                                                    marginRight: 0,
                                                }}
                                            >
                                                {
                                                    dl.changes.needAHomeDetails
                                                        .postedBy
                                                }
                                            </span>
                                        </div>

                                        <div
                                            id="t18_1294_698"
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
                                            <div
                                                id="t18_1604_497"
                                                style={{
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
                                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c7f7e0d2f29714077d45c2c6c5118445e5e46978.png' !=
                                                '' ? (
                                                    <img
                                                        id="t18_1604_498"
                                                        style={{
                                                            height: 35,
                                                            width: 35,
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
                                                    id="t18_1604_499"
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
                                                            id="t18_1604_500"
                                                            style={{
                                                                height: 35,
                                                                width: 35.197265625,
                                                                display: 'flex',
                                                                borderWidth: 0,
                                                                marginLeft: 0,
                                                                marginRight: 5,
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
                                                            id="t18_1604_501"
                                                            style={{
                                                                height: 35,
                                                                width: 35,
                                                                display: 'flex',
                                                                borderWidth: 0,
                                                                marginLeft: 5,
                                                                marginRight: 5,
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
                                                            id="t18_1604_502"
                                                            style={{
                                                                height: 35,
                                                                width: 35,
                                                                display: 'flex',
                                                                borderWidth: 0,
                                                                marginLeft: 5,
                                                                marginRight: 5,
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
                                                            id="t18_1604_503"
                                                            style={{
                                                                height: 35,
                                                                width: 35,
                                                                display: 'flex',
                                                                borderWidth: 0,
                                                                marginLeft: 5,
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
                                </div>

                                <div
                                    id="t18_1294_726"
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
                                        id="t18_1294_727"
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
                                            id="t18_1294_728"
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
                                                id="t18_1294_729"
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
                                            id="t18_1294_730"
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
                                                id="t18_1294_731"
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
                                                    dl.changes.needAHomeDetails
                                                        .description
                                                }
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1294_732"
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
                                            id="t18_1294_733"
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
                                                id="t18_1294_734"
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
                                                    id="t18_1294_735"
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
                                                        id="t18_1294_736"
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
                                                            id="t18_1294_737"
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
                                                                    .needAHomeDetails
                                                                    .title
                                                            }
                                                        </span>
                                                    </div>
                                                </div>

                                                <div
                                                    id="t18_1294_738"
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
                                                        id="t18_1294_741"
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
                                                                .needAHomeDetails
                                                                .location
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1294_742"
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
                                                id="t18_1294_743"
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
                                                    id="t18_1294_744"
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
                                                        id="t18_1294_745"
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
                                                        id="t18_1294_746"
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
                                                                .needAHomeDetails
                                                                .type
                                                        }
                                                    </span>
                                                </div>

                                                {/* <div
                                                    id="t18_1294_747"
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
                                                        id="t18_1294_748"
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
                                                        Needed by:
                                                    </span>

                                                    <span
                                                        id="t18_1294_749"
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
                                                                .needAHomeDetails
                                                                .neededBy
                                                        }
                                                    </span>
                                                </div> */}

                                                <div
                                                    id="t18_1294_757"
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
                                                        id="t18_1294_758"
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
                                                        id="t18_1294_759"
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
                                                                .needAHomeDetails
                                                                .noOfPeople
                                                        }
                                                    </span>
                                                </div>
                                            </div>

                                            <div
                                                id="t18_1294_763"
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
                                                    id="t18_1294_764"
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
                                                        id="t18_1294_765"
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
                                                        id="t18_1294_766"
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
                                                                .needAHomeDetails
                                                                .stayLeaseType
                                                        }
                                                    </span>
                                                </div>

                                                <div
                                                    id="t18_1294_767"
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
                                                                .needAhomeDetailsVisibleStatus
                                                                .roomFurnished,
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 5,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1294_768"
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
                                                        id="t18_1294_769"
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
                                                                .needAHomeDetails
                                                                .roomFurnishingRequired
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_1294_770"
                                    style={{
                                        width: 560,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display:
                                            dl.changes
                                                .needAhomeDetailsVisibleStatus
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
                                        id="t18_1294_771"
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
                                        id="t18_1294_772"
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
                                            {dl.changes.needAHomeDetails.amenities.map(
                                                (item, index) => {
                                                    return (
                                                        <div>
                                                            <MmArrayCompSs
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
                                    id="t18_1294_781"
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
                                        id="t18_1294_782"
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
                                        id="t18_1294_783"
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
                                            {dl.changes.needAHomeDetails.utilities.map(
                                                (item, index) => {
                                                    return (
                                                        <div>
                                                            <MmArrayCompSs
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
                                    id="t18_1294_792"
                                    style={{
                                        height: 150,
                                        width: 560,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display:
                                            dl.changes
                                                .needAhomeDetailsVisibleStatus
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
                                        id="t18_1294_793"
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
                                            id="t18_1294_794"
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
                                        id="t18_1294_795"
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
                                            id="t18_1294_799"
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
                                                        .needAhomeDetailsVisibleStatus
                                                        .smokingPolicy,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 5,
                                            }}
                                        >
                                            <span
                                                id="t18_1294_800"
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
                                                id="t18_1294_801"
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
                                                    dl.changes.needAHomeDetails
                                                        .smokingPolicy
                                                }
                                            </span>
                                        </div>

                                        <div
                                            id="t18_1294_802"
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
                                                        .needAhomeDetailsVisibleStatus
                                                        .petFriendly,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 5,
                                                marginRight: 0,
                                            }}
                                        >
                                            <span
                                                id="t18_1294_803"
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
                                                id="t18_1294_804"
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
                                                    dl.changes.needAHomeDetails
                                                        .petFriendly
                                                }
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_1294_805"
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
                                        id="t18_1294_806"
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
                                            id="t18_1294_807"
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
                                        id="t18_1294_808"
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
                                                id="t18_1294_809"
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
                                            id="t18_1294_810"
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
export default Wantedhomedetails_3
