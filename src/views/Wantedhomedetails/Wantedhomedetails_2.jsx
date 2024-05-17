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

const Wantedhomedetails_2 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 900
            const element = document.getElementById('t18_1294_552')
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
                id="t18_1294_552"
                style={{
                    width: 900,
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
                    id="t18_1294_553"
                    style={{
                        width: 900,
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
                        id="t18_1294_554"
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
                        <MmHeaderMd
                            {...dl.changes.userDetail}
                            onChangeAddress={(val) => {
                                dl.functions.modalsPlugin.openModal(
                                    'AddressPopupLg'
                                )
                            }}
                            onClickMenu={(val) => {
                                dl.functions.modalsPlugin.openModal(
                                    'navigationMd'
                                )
                            }}
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
                            id="t18_1294_557"
                            style={{
                                flexDirection: 'column',
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
                                id="t18_1294_558"
                                style={{
                                    width: 880,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    paddingTop: 40,
                                    paddingBottom: 30,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 10,
                                }}
                            >
                                <div
                                    id="t18_1294_559"
                                    style={{
                                        width: 842,
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
                                        id="t18_1294_560"
                                        style={{
                                            width: 782,
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
                                            id="t18_1294_561"
                                            style={{
                                                width: 741,
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
                                                id="t18_1294_562"
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
                                                    id="t18_1294_563"
                                                    style={{
                                                        width: 540,
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
                                                        id="t18_1294_564"
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
                                                    id="t18_1294_565"
                                                    style={{
                                                        height: 19,
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
                                                            id="t18_1294_566"
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
                                                        id="t18_1294_567"
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
                                            id="t18_1294_568"
                                            style={{
                                                width: 710,
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
                                                id="t18_1294_569"
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
                                                    marginBottom: 7.5,
                                                }}
                                            >
                                                <span
                                                    id="t18_1604_464"
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
                                                    id="t18_1294_570"
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
                                                        dl.changes
                                                            .needAHomeDetails
                                                            .postedBy
                                                    }
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1294_571"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 7.5,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <div
                                                    id="t18_1604_504"
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
                                                            id="t18_1604_505"
                                                            style={{
                                                                height: 35,
                                                                width: 35,
                                                                display: 'flex',
                                                                borderWidth: 0,
                                                                marginLeft: 0,
                                                                marginRight: 7.5,
                                                            }}
                                                            src={
                                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c7f7e0d2f29714077d45c2c6c5118445e5e46978.png'
                                                            }
                                                        ></img>
                                                    ) : (
                                                        <></>
                                                    )}

                                                    <div
                                                        id="t18_1604_506"
                                                        style={{
                                                            flexDirection:
                                                                'row',
                                                            alignItems:
                                                                'flex-end',
                                                            justifyContent:
                                                                'flex-start',
                                                            display: 'flex',
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginLeft: 7.5,
                                                            marginRight: 0,
                                                        }}
                                                    >
                                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/f86479c5f13f179327df6addde448bbc85be06e7.png' !=
                                                        '' ? (
                                                            <img
                                                                id="t18_1604_507"
                                                                style={{
                                                                    height: 35,
                                                                    width: 35.197265625,
                                                                    display:
                                                                        'flex',
                                                                    borderWidth: 0,
                                                                    marginLeft: 0,
                                                                    marginRight: 7.5,
                                                                    cursor: 'pointer',
                                                                }}
                                                                onClick={(
                                                                    e
                                                                ) => {
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
                                                                id="t18_1604_508"
                                                                style={{
                                                                    height: 35,
                                                                    width: 35,
                                                                    display:
                                                                        'flex',
                                                                    borderWidth: 0,
                                                                    marginLeft: 7.5,
                                                                    marginRight: 7.5,
                                                                    cursor: 'pointer',
                                                                }}
                                                                onClick={(
                                                                    e
                                                                ) => {
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
                                                                id="t18_1604_509"
                                                                style={{
                                                                    height: 35,
                                                                    width: 35,
                                                                    display:
                                                                        'flex',
                                                                    borderWidth: 0,
                                                                    marginLeft: 7.5,
                                                                    marginRight: 7.5,
                                                                    cursor: 'pointer',
                                                                }}
                                                                onClick={(
                                                                    e
                                                                ) => {
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
                                                                id="t18_1604_510"
                                                                style={{
                                                                    height: 35,
                                                                    width: 35,
                                                                    display:
                                                                        'flex',
                                                                    borderWidth: 0,
                                                                    marginLeft: 7.5,
                                                                    marginRight: 0,
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
                                        id="t18_1294_598"
                                        style={{
                                            width: 812,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingLeft: 30,
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
                                            id="t18_1294_599"
                                            style={{
                                                width: 775,
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
                                                id="t18_1294_600"
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
                                                    id="t18_1294_601"
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
                                                id="t18_1294_602"
                                                style={{
                                                    width: 775,
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
                                                    id="t18_1294_603"
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
                                                        dl.changes
                                                            .needAHomeDetails
                                                            .description
                                                    }
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1294_604"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
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
                                                id="t18_1294_605"
                                                style={{
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
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
                                                    id="t18_1294_606"
                                                    style={{
                                                        width: 765,
                                                        flexDirection: 'row',
                                                        alignItems:
                                                            'flex-start',
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
                                                        id="t18_1294_607"
                                                        style={{
                                                            fontFamily:
                                                                'Poppins',
                                                            fontSize: 24,
                                                            fontWeight: 700,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '36px',
                                                            textAlign: 'left',
                                                        }}
                                                    >
                                                        Charming Nice Two Room
                                                        Available for Rent
                                                    </span>
                                                </div>

                                                <div
                                                    id="t18_1294_608"
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
                                                    <span
                                                        id="t18_1294_611"
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
                                                        35004
                                                    </span>
                                                </div>
                                            </div>

                                            <div
                                                id="t18_1294_612"
                                                style={{
                                                    width: 770,
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
                                                    id="t18_1294_613"
                                                    style={{
                                                        width: 770,
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
                                                        id="t18_1294_614"
                                                        style={{
                                                            height: 90,
                                                            width: 230,
                                                            borderRadius: 10,
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
                                                            id="t18_1294_615"
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
                                                            id="t18_1294_616"
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
                                                                    .needAHomeDetails
                                                                    .type
                                                            }
                                                        </span>
                                                    </div>

                                                    {/* <div
                                                        id="t18_1294_617"
                                                        style={{
                                                            height: 90,
                                                            width: 230,
                                                            borderRadius: 10,
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
                                                            id="t18_1294_618"
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
                                                            Needed by:
                                                        </span>

                                                        <span
                                                            id="t18_1294_619"
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
                                                                    .needAHomeDetails
                                                                    .neededBy
                                                            }
                                                        </span>
                                                    </div> */}

                                                    <div
                                                        id="t18_1294_627"
                                                        style={{
                                                            height: 90,
                                                            width: 230,
                                                            borderRadius: 10,
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
                                                            id="t18_1294_628"
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
                                                            id="t18_1294_629"
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
                                                                    .needAHomeDetails
                                                                    .noOfPeople
                                                            }
                                                        </span>
                                                    </div>
                                                </div>

                                                <div
                                                    id="t18_1294_633"
                                                    style={{
                                                        width: 770,
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
                                                        id="t18_1294_634"
                                                        style={{
                                                            height: 90,
                                                            width: 230,
                                                            borderRadius: 10,
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
                                                            id="t18_1294_635"
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
                                                            Stay/lease type
                                                        </span>

                                                        <span
                                                            id="t18_1294_636"
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
                                                                    .needAHomeDetails
                                                                    .stayLeaseType
                                                            }
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1294_637"
                                                        style={{
                                                            height: 90,
                                                            width: 230,
                                                            borderRadius: 10,
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
                                                                    .needAhomeDetailsVisibleStatus
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
                                                            id="t18_1294_638"
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
                                                            id="t18_1294_639"
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
                                        id="t18_1294_640"
                                        style={{
                                            width: 812,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display:
                                                dl.changes
                                                    .needAhomeDetailsVisibleStatus
                                                    .amenities,
                                            paddingLeft: 30,
                                            paddingTop: 20,
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
                                            id="t18_1294_641"
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
                                            id="t18_1294_642"
                                            style={{
                                                width: 754,
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
                                                                <MmArrayComp
                                                                    {...item}
                                                                    {...dl
                                                                        .changes
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
                                        id="t18_1294_649"
                                        style={{
                                            width: 812,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingLeft: 30,
                                            paddingTop: 20,
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
                                            id="t18_1294_650"
                                            style={{
                                                width: 726,
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
                                                id="t18_1294_651"
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
                                            id="t18_1294_652"
                                            style={{
                                                width: 754,
                                                flexDirection: 'row',
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
                                                                    {...dl
                                                                        .changes
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
                                        id="t18_1294_659"
                                        style={{
                                            width: 812,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display:
                                                dl.changes
                                                    .needAhomeDetailsVisibleStatus
                                                    .additionalInfo,
                                            paddingLeft: 30,
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
                                            id="t18_1294_660"
                                            style={{
                                                width: 678,
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
                                                id="t18_1294_661"
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
                                            id="t18_1294_662"
                                            style={{
                                                width: 781,
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
                                                id="t18_1294_666"
                                                style={{
                                                    height: 90,
                                                    width: 200,
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
                                                    id="t18_1294_667"
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
                                                    id="t18_1294_668"
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
                                                            .smokingPolicy
                                                    }
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1294_669"
                                                style={{
                                                    height: 90,
                                                    width: 200,
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
                                                    id="t18_1294_670"
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
                                                    id="t18_1294_671"
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
                                                            .petFriendly
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1294_672"
                                        style={{
                                            height: 171,
                                            width: 842,
                                            borderBottomLeftRadius: 20,
                                            borderBottomRightRadius: 20,
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingTop: 40,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_1294_673"
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
                                                id="t18_1294_674"
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
                                            id="t18_1294_675"
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
                                                    id="t18_1294_676"
                                                    style={{
                                                        height: 39.1328125,
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
                                                id="t18_1294_677"
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

                            <MmFooterMd />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Wantedhomedetails_2
