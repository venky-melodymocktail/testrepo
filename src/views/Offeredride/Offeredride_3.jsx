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
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'

const Offeredride_3 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 620
            const element = document.getElementById('t18_893_6994')
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
                id="t18_893_6994"
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
                    id="t18_893_6995"
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
                        id="t18_893_6996"
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
                            id="t18_893_6999"
                            style={{
                                width: 600,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 30,
                                paddingBottom: 30,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_976_271"
                                style={{
                                    width: 580,
                                    borderRadius: 15,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingTop: 17,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 1,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderStyle: 'solid',
                                }}
                            >
                                <div
                                    id="t18_976_272"
                                    style={{
                                        width: 555,
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 25,
                                        paddingBottom: 10,
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
                                        id="t18_976_273"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 0,
                                            marginRight: 10,
                                        }}
                                    >
                                        <div
                                            id="t18_976_274"
                                            style={{
                                                height: 68,
                                                flexDirection: 'column',
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
                                                id="t18_976_275"
                                                style={{
                                                    height: 24,
                                                    width: 419,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 4,
                                                }}
                                            >
                                                <span
                                                    id="t18_976_276"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 20,
                                                        fontWeight: 700,
                                                        color: 'rgba(186,15,23,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '24.204544067382812px',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    {
                                                        dl.changes.rideDetail
                                                            .title
                                                    }
                                                </span>
                                            </div>

                                            <div
                                                id="t18_976_277"
                                                style={{
                                                    height: 15,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 4,
                                                    marginBottom: 4,
                                                }}
                                            >
                                                <span
                                                    id="t18_976_278"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 12,
                                                        fontWeight: 700,
                                                        color: 'rgba(112,112,112,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '14.522727012634277px',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    {
                                                        dl.changes.rideDetail
                                                            .dateOfJourney
                                                    }
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1583_240"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 4,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <div
                                                    id="t18_1583_241"
                                                    style={{
                                                        height: 13,
                                                        flexDirection: 'row',
                                                        alignItems:
                                                            'flex-start',
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
                                                    <div
                                                        id="t18_1583_242"
                                                        style={{
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
                                                            id="t18_1583_243"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 12,
                                                                fontWeight: 400,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '14.522727012634277px',
                                                                textAlign:
                                                                    'left',
                                                                marginLeft: 0,
                                                                marginRight: 2.5,
                                                            }}
                                                        >
                                                            Posted by:
                                                        </span>

                                                        <span
                                                            id="t18_1583_244"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 12,
                                                                fontWeight: 400,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '14.522727012634277px',
                                                                textAlign:
                                                                    'left',
                                                                marginLeft: 2.5,
                                                                marginRight: 0,
                                                            }}
                                                        >
                                                            {
                                                                dl.changes
                                                                    .rideDetail
                                                                    .offeredBy
                                                            }
                                                        </span>
                                                    </div>
                                                </div>

                                                <span
                                                    id="t18_1583_245"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 11,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '13.3125px',
                                                        textAlign: 'left',
                                                        marginLeft: 2.5,
                                                        marginRight: 2.5,
                                                    }}
                                                >
                                                    on
                                                </span>

                                                <span
                                                    id="t18_1583_246"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 12,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '14.522727012634277px',
                                                        textAlign: 'left',
                                                        marginLeft: 2.5,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    {dl.changes.rideDetail.cOn}
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_976_281"
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
                                                    id="t18_976_282"
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
                                                id="t18_976_283"
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
                                                        id="t18_976_284"
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
                                                        id="t18_976_285"
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
                                                        id="t18_976_286"
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
                                                        id="t18_976_287"
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

                                    <div
                                        id="t18_976_288"
                                        style={{
                                            height: 27,
                                            width: 68,
                                            borderRadius: 5,
                                            backgroundColor:
                                                'rgba(248,246,246,1.00)',
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
                                            marginLeft: 10,
                                            marginRight: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_976_289"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 24,
                                                fontWeight: 700,
                                                color: 'rgba(28,167,139,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '29.045454025268555px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            {dl.changes.rideDetail.price}
                                        </span>
                                    </div>
                                </div>

                                <div
                                    id="t18_976_290"
                                    style={{
                                        width: 530,
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        paddingLeft: 25,
                                        paddingRight: 25,
                                        paddingTop: 20,
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
                                        id="t18_976_291"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 15.5,
                                        }}
                                    >
                                        <div
                                            id="t18_976_292"
                                            style={{
                                                height: 70,
                                                width: 160,
                                                borderRadius: 5,
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
                                            }}
                                        >
                                            <span
                                                id="t18_976_293"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 13,
                                                    fontWeight: 400,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '15.732954025268555px',
                                                    textAlign: 'center',
                                                    marginTop: 0,
                                                    marginBottom: 2.5,
                                                }}
                                            >
                                                From:
                                            </span>

                                            <div
                                                id="t18_976_294"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 2.5,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_976_295"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 13,
                                                        fontWeight: 700,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '15.732954025268555px',
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    {
                                                        dl.changes.rideDetail
                                                            .from.city
                                                    }
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_976_296"
                                            style={{
                                                height: 20,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_976_297"
                                                style={{
                                                    height: 20,
                                                    width: 20,
                                                    borderRadius: 100,
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 2,
                                                    borderColor:
                                                        'rgba(28,167,139,1)',
                                                    borderStyle: 'solid',
                                                    marginLeft: 0,
                                                }}
                                            >
                                                <div
                                                    id="t18_976_298"
                                                    style={{
                                                        height: 10,
                                                        width: 10,
                                                        borderRadius: 100,
                                                        backgroundColor:
                                                            'rgba(28,167,139,1.00)',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        borderWidth: 0,
                                                    }}
                                                ></div>
                                            </div>

                                            <div
                                                id="t18_976_299"
                                                style={{
                                                    height: 2,
                                                    width: 170,
                                                    backgroundColor:
                                                        'rgba(28,167,139,1.00)',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    borderWidth: 0,
                                                }}
                                            ></div>

                                            <div
                                                id="t18_976_300"
                                                style={{
                                                    height: 20,
                                                    width: 20,
                                                    borderRadius: 100,
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 2,
                                                    borderColor:
                                                        'rgba(28,167,139,1)',
                                                    borderStyle: 'solid',
                                                    marginRight: 0,
                                                }}
                                            >
                                                <div
                                                    id="t18_976_301"
                                                    style={{
                                                        height: 10,
                                                        width: 10,
                                                        borderRadius: 100,
                                                        backgroundColor:
                                                            'rgba(28,167,139,1.00)',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        borderWidth: 0,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_976_302"
                                            style={{
                                                height: 70,
                                                width: 160,
                                                borderRadius: 5,
                                                backgroundColor:
                                                    'rgba(248,246,246,1.00)',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginRight: 0,
                                            }}
                                        >
                                            <span
                                                id="t18_976_303"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 13,
                                                    fontWeight: 400,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '15.732954025268555px',
                                                    textAlign: 'center',
                                                    marginTop: 0,
                                                    marginBottom: 2.5,
                                                }}
                                            >
                                                To:
                                            </span>

                                            <div
                                                id="t18_976_304"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 2.5,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_976_305"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 13,
                                                        fontWeight: 700,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '15.732954025268555px',
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    {
                                                        dl.changes.rideDetail.to
                                                            .city
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_976_306"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 15.5,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_976_307"
                                            style={{
                                                height: 70,
                                                width: 160,
                                                borderRadius: 5,
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
                                                marginRight: 11,
                                            }}
                                        >
                                            <span
                                                id="t18_976_308"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 13,
                                                    fontWeight: 400,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '15.732954025268555px',
                                                    textAlign: 'center',
                                                    marginTop: 0,
                                                    marginBottom: 2.5,
                                                }}
                                            >
                                                Spots available:
                                            </span>

                                            <div
                                                id="t18_976_309"
                                                style={{
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 2.5,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_976_310"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 13,
                                                        fontWeight: 700,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '15.732954025268555px',
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    {
                                                        dl.changes.rideDetail
                                                            .spotAvailable
                                                    }
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_976_311"
                                            style={{
                                                height: 70,
                                                width: 160,
                                                borderRadius: 5,
                                                backgroundColor:
                                                    'rgba(248,246,246,1.00)',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 11,
                                                marginRight: 11,
                                            }}
                                        >
                                            <span
                                                id="t18_976_312"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 13,
                                                    fontWeight: 400,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '15.732954025268555px',
                                                    textAlign: 'center',
                                                    marginTop: 0,
                                                    marginBottom: 2.5,
                                                }}
                                            >
                                                City:
                                            </span>

                                            <div
                                                id="t18_976_313"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 2.5,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_976_314"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 13,
                                                        fontWeight: 700,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '15.732954025268555px',
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    {
                                                        dl.changes.rideDetail
                                                            .from.city
                                                    }
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_976_315"
                                            style={{
                                                height: 70,
                                                width: 160,
                                                borderRadius: 5,
                                                backgroundColor:
                                                    'rgba(248,246,246,1.00)',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 11,
                                                marginRight: 0,
                                            }}
                                        >
                                            <span
                                                id="t18_976_316"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 13,
                                                    fontWeight: 400,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '15.732954025268555px',
                                                    textAlign: 'center',
                                                    marginTop: 0,
                                                    marginBottom: 2.5,
                                                }}
                                            >
                                                State:
                                            </span>

                                            <div
                                                id="t18_976_317"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 2.5,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_976_318"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 13,
                                                        fontWeight: 700,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '15.732954025268555px',
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    {
                                                        dl.changes.rideDetail
                                                            .from.state
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_976_319"
                                    style={{
                                        height: 80,
                                        width: 580,
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        paddingTop: 35,
                                        paddingBottom: 35,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginBottom: 0,
                                    }}
                                >
                                    <span
                                        id="t18_976_320"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 12,
                                            fontWeight: 400,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '14.522727012634277px',
                                            textAlign: 'left',
                                            marginTop: 0,
                                            marginBottom: 7.5,
                                        }}
                                    >
                                        Interested in this ride?
                                    </span>

                                    <div
                                        id="t18_976_321"
                                        style={{
                                            height: 43,
                                            width: 199,
                                            borderRadius: 5,
                                            backgroundColor:
                                                'rgba(186,15,23,1.00)',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 7.5,
                                            marginBottom: 0,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            var id = dl.changes.rideDetail._id
                                            dl.functions.contactUsAction(
                                                id,
                                                'rides',
                                                'small'
                                            )
                                        }}
                                    >
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ee6e2c232cad8e133606a35bc27a2c093689285a.png' !=
                                        '' ? (
                                            <img
                                                id="t18_976_322"
                                                style={{
                                                    height: 25,
                                                    width: 25,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 11.5,
                                                }}
                                                src={
                                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ee6e2c232cad8e133606a35bc27a2c093689285a.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

                                        <span
                                            id="t18_976_323"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 14,
                                                fontWeight: 500,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '16.94318199157715px',
                                                textAlign: 'left',
                                                marginLeft: 11.5,
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
export default Offeredride_3
