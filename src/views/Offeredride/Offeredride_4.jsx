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

const Offeredride_4 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 400
            const element = document.getElementById('t18_893_7055')
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
                id="t18_893_7055"
                style={{
                    width: 400,
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
                    id="t18_893_7056"
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
                        id="t18_893_7057"
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
                        <MmHeaderXs
                            {...dl.changes.userDetail}
                            onChangeAddress={(val) => {
                                dl.functions.modalsPlugin.openModal(
                                    'AddressPopupS'
                                )
                            }}
                            onLogIn={(val) => {
                                dl.functions.viewsPlugin.showView('login')
                            }}
                            onClickProfile={(val) => {
                                // dl.functions.viewsPlugin.showView("profile")
                                // var currentPath = dl.functions.common.getLastPath()
                                // dl.functions.onLoadFunctions[currentPath]()
                                // var screens = [
                                //     "rentallistings",
                                //     "ridelistings",
                                //     "travelcompanionlisting",
                                //     "questionlistings",
                                //     "studyabroadbookings",
                                //     "visabookings",
                                //     "rentalbookmarks",
                                //     "ridebookmarks",
                                //     "travelcompanionbookmarks",
                                //     "moviebookmarks",
                                //     "blogbookmarks",
                                //     "questionbookmarks",
                                // ]
                                // var currentPath = dl.functions.common.getLastPath()
                                // for(var i=0; i<screens.length; i++){
                                //     if(screens[i]==currentPath){
                                //     	val.stopPropagation();

                                //     }
                                // }

                                dl.functions.modalsPlugin.openModal(
                                    'navigationXs'
                                )
                            }}
                        />

                        <div
                            id="t18_976_379"
                            style={{
                                width: 400,
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                display: 'flex',
                                paddingTop: 30,
                                paddingBottom: 20,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_976_324"
                                style={{
                                    width: 360,
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
                                    id="t18_976_325"
                                    style={{
                                        width: 340,
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 10,
                                        paddingRight: 10,
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
                                        id="t18_976_326"
                                        style={{
                                            width: 267,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 0,
                                            marginRight: 7.5,
                                        }}
                                    >
                                        <div
                                            id="t18_976_327"
                                            style={{
                                                width: 267,
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 2.5,
                                            }}
                                        >
                                            <div
                                                id="t18_976_328"
                                                style={{
                                                    height: 19,
                                                    width: 270,
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 2.5,
                                                }}
                                            >
                                                <span
                                                    id="t18_976_329"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 16,
                                                        fontWeight: 700,
                                                        color: 'rgba(186,15,23,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '19.363636016845703px',
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
                                                id="t18_976_330"
                                                style={{
                                                    height: 12,
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 2.5,
                                                    marginBottom: 2.5,
                                                }}
                                            >
                                                <span
                                                    id="t18_976_331"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 10,
                                                        fontWeight: 700,
                                                        color: 'rgba(112,112,112,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '12.102272033691406px',
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
                                                id="t18_1583_247"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
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
                                                <div
                                                    id="t18_1583_248"
                                                    style={{
                                                        height: 12,
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 0,
                                                        marginRight: 1.5,
                                                    }}
                                                >
                                                    <div
                                                        id="t18_1583_249"
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
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1583_250"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 11,
                                                                fontWeight: 400,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '13.3125px',
                                                                textAlign:
                                                                    'left',
                                                                marginLeft: 0,
                                                                marginRight: 2.5,
                                                            }}
                                                        >
                                                            Posted by:
                                                        </span>

                                                        <span
                                                            id="t18_1583_251"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 11,
                                                                fontWeight: 400,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '13.3125px',
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
                                                    id="t18_1583_252"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 9,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '10.892045021057129px',
                                                        textAlign: 'left',
                                                        marginLeft: 1.5,
                                                        marginRight: 1.5,
                                                    }}
                                                >
                                                    on
                                                </span>

                                                <span
                                                    id="t18_1583_253"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 11,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '13.3125px',
                                                        textAlign: 'left',
                                                        marginLeft: 1.5,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    {dl.changes.rideDetail.cOn}
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_976_334"
                                            style={{
                                                height: 15,
                                                width: 103.0849609375,
                                                flexDirection: 'row',
                                                alignItems: 'center',
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
                                                id="t18_976_335"
                                                style={{
                                                    height: 15,
                                                    width: 103.0849609375,
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
                                                        id="t18_976_336"
                                                        style={{
                                                            height: 15,
                                                            width: 15,
                                                            display: 'flex',
                                                            borderWidth: 0,
                                                            marginLeft: 0,
                                                            marginRight: 3.5,
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
                                                    id="t18_976_337"
                                                    style={{
                                                        flexDirection: 'row',
                                                        alignItems: 'flex-end',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 3.5,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/f86479c5f13f179327df6addde448bbc85be06e7.png' !=
                                                    '' ? (
                                                        <img
                                                            id="t18_976_338"
                                                            style={{
                                                                height: 15,
                                                                width: 15.0849609375,
                                                                display: 'flex',
                                                                borderWidth: 0,
                                                                marginLeft: 0,
                                                                marginRight: 3.5,
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
                                                            id="t18_976_339"
                                                            style={{
                                                                height: 15,
                                                                width: 15,
                                                                display: 'flex',
                                                                borderWidth: 0,
                                                                marginLeft: 3.5,
                                                                marginRight: 3.5,
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
                                                            id="t18_976_340"
                                                            style={{
                                                                height: 15,
                                                                width: 15,
                                                                display: 'flex',
                                                                borderWidth: 0,
                                                                marginLeft: 3.5,
                                                                marginRight: 3.5,
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

                                                    <div
                                                        id="t18_976_341"
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
                                                            marginLeft: 3.5,
                                                            marginRight: 0,
                                                        }}
                                                    >
                                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/6711ac5e2712675bf7ad999c6c394153aa8b0294.png' !=
                                                        '' ? (
                                                            <img
                                                                id="t18_976_342"
                                                                style={{
                                                                    height: 15,
                                                                    width: 15,
                                                                    display:
                                                                        'flex',
                                                                    borderWidth: 0,
                                                                    cursor: 'pointer',
                                                                }}
                                                                onClick={(
                                                                    e
                                                                ) => {
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
                                        id="t18_976_343"
                                        style={{
                                            height: 12,
                                            width: 35,
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
                                            marginLeft: 7.5,
                                            marginRight: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_976_344"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 16,
                                                fontWeight: 700,
                                                color: 'rgba(28,167,139,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '19.363636016845703px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            {dl.changes.rideDetail.price}
                                        </span>
                                    </div>
                                </div>

                                <div
                                    id="t18_976_345"
                                    style={{
                                        width: 340,
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        paddingLeft: 10,
                                        paddingRight: 10,
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
                                        id="t18_976_346"
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
                                            id="t18_976_347"
                                            style={{
                                                height: 50,
                                                width: 119,
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
                                                id="t18_976_348"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 10,
                                                    fontWeight: 400,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '12.102272033691406px',
                                                    textAlign: 'center',
                                                    marginTop: 0,
                                                    marginBottom: 2.5,
                                                }}
                                            >
                                                From:
                                            </span>

                                            <div
                                                id="t18_976_349"
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
                                                    id="t18_976_350"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 10,
                                                        fontWeight: 700,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '12.102272033691406px',
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
                                            id="t18_976_351"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_976_352"
                                                style={{
                                                    height: 10,
                                                    width: 10,
                                                    borderRadius: 100,
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 1,
                                                    borderColor:
                                                        'rgba(28,167,139,1)',
                                                    borderStyle: 'solid',
                                                    marginLeft: 0,
                                                }}
                                            >
                                                <div
                                                    id="t18_976_353"
                                                    style={{
                                                        height: 5,
                                                        width: 5,
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
                                                id="t18_976_354"
                                                style={{
                                                    height: 1,
                                                    width: 80,
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
                                                id="t18_976_355"
                                                style={{
                                                    height: 10,
                                                    width: 10,
                                                    borderRadius: 100,
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 1,
                                                    borderColor:
                                                        'rgba(28,167,139,1)',
                                                    borderStyle: 'solid',
                                                    marginRight: 0,
                                                }}
                                            >
                                                <div
                                                    id="t18_976_356"
                                                    style={{
                                                        height: 5,
                                                        width: 5,
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
                                            id="t18_976_357"
                                            style={{
                                                height: 50,
                                                width: 119,
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
                                                id="t18_976_358"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 10,
                                                    fontWeight: 400,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '12.102272033691406px',
                                                    textAlign: 'center',
                                                    marginTop: 0,
                                                    marginBottom: 2.5,
                                                }}
                                            >
                                                To:
                                            </span>

                                            <div
                                                id="t18_976_359"
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
                                                    id="t18_976_360"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 10,
                                                        fontWeight: 700,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '12.102272033691406px',
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
                                        id="t18_976_361"
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
                                            id="t18_976_362"
                                            style={{
                                                height: 50,
                                                width: 105,
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
                                                marginRight: 3.5,
                                            }}
                                        >
                                            <span
                                                id="t18_976_363"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 10,
                                                    fontWeight: 400,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '12.102272033691406px',
                                                    textAlign: 'center',
                                                    marginTop: 0,
                                                    marginBottom: 2.5,
                                                }}
                                            >
                                                Spots available:
                                            </span>

                                            <div
                                                id="t18_976_364"
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
                                                    id="t18_976_365"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 10,
                                                        fontWeight: 700,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '12.102272033691406px',
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
                                            id="t18_976_366"
                                            style={{
                                                height: 50,
                                                width: 105,
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
                                                marginLeft: 3.5,
                                                marginRight: 3.5,
                                            }}
                                        >
                                            <span
                                                id="t18_976_367"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 10,
                                                    fontWeight: 400,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '12.102272033691406px',
                                                    textAlign: 'center',
                                                    marginTop: 0,
                                                    marginBottom: 2.5,
                                                }}
                                            >
                                                City:
                                            </span>

                                            <div
                                                id="t18_976_368"
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
                                                    id="t18_976_369"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 10,
                                                        fontWeight: 700,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '12.102272033691406px',
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
                                            id="t18_976_370"
                                            style={{
                                                height: 50,
                                                width: 105,
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
                                                marginLeft: 3.5,
                                                marginRight: 0,
                                            }}
                                        >
                                            <span
                                                id="t18_976_371"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 10,
                                                    fontWeight: 400,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '12.102272033691406px',
                                                    textAlign: 'center',
                                                    marginTop: 0,
                                                    marginBottom: 2.5,
                                                }}
                                            >
                                                State:
                                            </span>

                                            <div
                                                id="t18_976_372"
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
                                                    id="t18_976_373"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 10,
                                                        fontWeight: 700,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '12.102272033691406px',
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
                                    id="t18_976_374"
                                    style={{
                                        height: 59,
                                        width: 360,
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        paddingTop: 20,
                                        paddingBottom: 20,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginBottom: 0,
                                    }}
                                >
                                    <span
                                        id="t18_976_375"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 8,
                                            fontWeight: 400,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '9.681818008422852px',
                                            textAlign: 'left',
                                            marginTop: 0,
                                            marginBottom: 5,
                                        }}
                                    >
                                        Interested in this ride?
                                    </span>

                                    <div
                                        id="t18_976_376"
                                        style={{
                                            height: 30,
                                            width: 124,
                                            borderRadius: 3,
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
                                                id="t18_976_377"
                                                style={{
                                                    height: 15,
                                                    width: 15,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 3.5,
                                                }}
                                                src={
                                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ee6e2c232cad8e133606a35bc27a2c093689285a.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

                                        <span
                                            id="t18_976_378"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 9,
                                                fontWeight: 500,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '10.892045021057129px',
                                                textAlign: 'left',
                                                marginLeft: 3.5,
                                                marginRight: 0,
                                            }}
                                        >
                                            CONTACT
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <MmFooterXs />
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Offeredride_4
