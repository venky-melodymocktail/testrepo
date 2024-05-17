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
import MmArrayCompSs from '../../components/MmArrayCompSs.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmArrayCompS from '../../components/MmArrayCompS.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'

const Offeredtcdetails_4 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 400
            const element = document.getElementById('t18_1626_7')
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
                id="t18_1626_7"
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
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <div
                    id="t18_1624_1464"
                    style={{
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
                        id="t18_1624_1465"
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
                            id="t18_1624_1468"
                            style={{
                                width: 380,
                                flexDirection: 'row',
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
                            }}
                        >
                            <div
                                id="t18_1624_1469"
                                style={{
                                    width: 363,
                                    borderRadius: 15,
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
                                    id="t18_1624_1470"
                                    style={{
                                        width: 343,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20,
                                        flexDirection: 'column',
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
                                        borderColor: 'rgba(207,206,206,1)',
                                        borderBottomWidth: 1,
                                        borderStyle: 'solid',
                                        marginTop: 0,
                                    }}
                                >
                                    <div
                                        id="t18_1624_1471"
                                        style={{
                                            width: 337,
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
                                            id="t18_1624_1472"
                                            style={{
                                                width: 336,
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                paddingTop: 10,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_1624_1473"
                                                style={{
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                }}
                                            >
                                                <div
                                                    id="t18_1624_1474"
                                                    style={{
                                                        width: 335,
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
                                                        id="t18_1624_1475"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 15,
                                                            fontWeight: 700,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '18.15340805053711px',
                                                            textAlign: 'left',
                                                        }}
                                                    >
                                                        {
                                                            dl.changes
                                                                .needATcDetail
                                                                .title
                                                        }
                                                    </span>
                                                </div>

                                                <div
                                                    id="t18_1624_1476"
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
                                                        marginBottom: 5,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1624_1477"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 10,
                                                            fontWeight: 400,
                                                            color: 'rgba(112,112,112,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '12.102272033691406px',
                                                            textAlign: 'left',
                                                            marginLeft: 0,
                                                            marginRight: 2.5,
                                                        }}
                                                    >
                                                        Posted by:
                                                    </span>

                                                    <span
                                                        id="t18_1624_1478"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 10,
                                                            fontWeight: 400,
                                                            color: 'rgba(112,112,112,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '12.102272033691406px',
                                                            textAlign: 'left',
                                                            marginLeft: 2.5,
                                                            marginRight: 2.5,
                                                        }}
                                                    >
                                                        {
                                                            dl.changes
                                                                .needATcDetail
                                                                .postedBy
                                                        }
                                                    </span>

                                                    <span
                                                        id="t18_1624_1479"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 10,
                                                            fontWeight: 400,
                                                            color: 'rgba(112,112,112,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '12.102272033691406px',
                                                            textAlign: 'left',
                                                            marginLeft: 2.5,
                                                            marginRight: 2.5,
                                                        }}
                                                    >
                                                        on
                                                    </span>

                                                    <span
                                                        id="t18_1624_1480"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 10,
                                                            fontWeight: 400,
                                                            color: 'rgba(112,112,112,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '12.102272033691406px',
                                                            textAlign: 'left',
                                                            marginLeft: 2.5,
                                                            marginRight: 0,
                                                        }}
                                                    >
                                                        {
                                                            dl.changes
                                                                .needATcDetail
                                                                .postedOn
                                                        }
                                                    </span>
                                                </div>

                                                <div
                                                    id="t18_1624_1481"
                                                    /// make the display flex to see the owners details or none to hide
                                                    style={{
                                                        height: 45,
                                                        width: 79,
                                                        borderRadius: 5,
                                                        backgroundColor:
                                                            'rgba(248,246,246,1.00)',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        display: 'none',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginTop: 5,
                                                        marginBottom: 0,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1624_1482"
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
                                                        Expected tip:
                                                    </span>

                                                    <span
                                                        id="t18_1624_1483"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 14,
                                                            fontWeight: 700,
                                                            color: 'rgba(28,167,139,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '16.94318199157715px',
                                                            textAlign: 'left',
                                                            marginTop: 2.5,
                                                            marginBottom: 0,
                                                        }}
                                                    >
                                                        {
                                                            dl.changes
                                                                .needATcDetail
                                                                .tip
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1624_1484"
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
                                            marginTop: 5,
                                            marginBottom: 0,
                                        }}
                                    >
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c7f7e0d2f29714077d45c2c6c5118445e5e46978.png' !=
                                        '' ? (
                                            <img
                                                id="t18_1624_1485"
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
                                            id="t18_1624_1486"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-end',
                                                justifyContent: 'flex-start',
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
                                                    id="t18_1624_1487"
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
                                                            window.location.href
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
                                                    id="t18_1624_1488"
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
                                                            window.location.href
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
                                                    id="t18_1624_1489"
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
                                                            window.location.href
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
                                                id="t18_1624_1490"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
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
                                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/6711ac5e2712675bf7ad999c6c394153aa8b0294.png' !=
                                                '' ? (
                                                    <img
                                                        id="t18_1624_1491"
                                                        style={{
                                                            height: 15,
                                                            width: 15,
                                                            display: 'flex',
                                                            borderWidth: 0,
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
                                    id="t18_1624_1492"
                                    style={{
                                        width: 353,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 10,
                                        paddingTop: 9,
                                        paddingBottom: 10,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        borderColor: 'rgba(207,206,206,1)',
                                        borderBottomWidth: 1,
                                        borderStyle: 'solid',
                                    }}
                                >
                                    <div
                                        id="t18_1624_1493"
                                        // set the display to flex to show personal detail in the page
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'none',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 4,
                                        }}
                                    >
                                        <div
                                            id="t18_1624_1494"
                                            style={{
                                                height: 14,
                                                width: 190,
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
                                                marginBottom: 5,
                                            }}
                                        >
                                            <span
                                                id="t18_1624_1495"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 15,
                                                    fontWeight: 600,
                                                    color: 'rgba(186,15,23,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '18.15340805053711px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Personal details
                                            </span>
                                        </div>

                                        <div
                                            id="t18_1624_1496"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 5,
                                                marginBottom: 5,
                                            }}
                                        >
                                            <div
                                                id="t18_1624_1497"
                                                style={{
                                                    borderRadius: 5,
                                                    backgroundColor:
                                                        'rgba(248,246,246,1.00)',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    paddingLeft: 10,
                                                    paddingRight: 10,
                                                    paddingTop: 5,
                                                    paddingBottom: 5,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 5,
                                                }}
                                            >
                                                <span
                                                    id="t18_1624_1498"
                                                    style={{
                                                        fontFamily: 'Raleway',
                                                        fontSize: 12,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '28px',
                                                        textAlign: 'center',
                                                        marginLeft: 0,
                                                        marginRight: 1.5,
                                                    }}
                                                >
                                                    First name:
                                                </span>

                                                <span
                                                    id="t18_1624_1499"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 12,
                                                        fontWeight: 700,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '28px',
                                                        textAlign: 'center',
                                                        marginLeft: 1.5,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    {
                                                        dl.changes.needATcDetail
                                                            .firstName
                                                    }
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1624_1500"
                                                style={{
                                                    borderRadius: 5,
                                                    backgroundColor:
                                                        'rgba(248,246,246,1.00)',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    paddingLeft: 10,
                                                    paddingRight: 10,
                                                    paddingTop: 5,
                                                    paddingBottom: 5,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 5,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_1624_1501"
                                                    style={{
                                                        fontFamily: 'Raleway',
                                                        fontSize: 12,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '28px',
                                                        textAlign: 'center',
                                                        marginLeft: 0,
                                                        marginRight: 1.5,
                                                    }}
                                                >
                                                    Last name:
                                                </span>

                                                <span
                                                    id="t18_1624_1502"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 12,
                                                        fontWeight: 700,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '28px',
                                                        textAlign: 'center',
                                                        marginLeft: 1.5,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    {
                                                        dl.changes.needATcDetail
                                                            .lastName
                                                    }
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1624_1503"
                                            style={{
                                                borderRadius: 5,
                                                backgroundColor:
                                                    'rgba(248,246,246,1.00)',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                paddingTop: 5,
                                                paddingBottom: 5,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 5,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <span
                                                id="t18_1624_1504"
                                                style={{
                                                    fontFamily: 'Raleway',
                                                    fontSize: 12,
                                                    fontWeight: 400,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '28px',
                                                    textAlign: 'center',
                                                    marginLeft: 0,
                                                    marginRight: 1.5,
                                                }}
                                            >
                                                Vaccinated:
                                            </span>

                                            <span
                                                id="t18_1624_1505"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 12,
                                                    fontWeight: 700,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '28px',
                                                    textAlign: 'center',
                                                    marginLeft: 1.5,
                                                    marginRight: 0,
                                                }}
                                            >
                                                {
                                                    dl.changes.needATcDetail
                                                        .vaccinated
                                                }
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1624_1506"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 4,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_1624_1507"
                                            style={{
                                                width: 293,
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
                                                id="t18_1624_1508"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 13,
                                                    fontWeight: 600,
                                                    color: 'rgba(112,112,112,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '15.732954025268555px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Languages known :
                                            </span>
                                        </div>

                                        <div
                                            id="t18_1624_1509"
                                            style={{
                                                width: 335,
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
                                                style={{
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                {dl.changes.needATcDetail.languagesKnown.map(
                                                    (item, index) => {
                                                        return (
                                                            <div>
                                                                <MmArrayCompS
                                                                    {...item}
                                                                    {...dl
                                                                        .changes
                                                                        .needATcDetail
                                                                        .languagesKnown}
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
                                    id="t18_1624_1512"
                                    style={{
                                        width: 353,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 10,
                                        paddingTop: 10,
                                        paddingBottom: 10,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        borderColor: 'rgba(207,206,206,1)',
                                        borderBottomWidth: 1,
                                        borderStyle: 'solid',
                                    }}
                                >
                                    <div
                                        id="t18_1624_1513"
                                        style={{
                                            height: 15,
                                            width: 286,
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
                                            marginBottom: 6.5,
                                        }}
                                    >
                                        <span
                                            id="t18_1624_1514"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 15,
                                                fontWeight: 600,
                                                color: 'rgba(186,15,23,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '18.15340805053711px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            Travel details
                                        </span>
                                    </div>

                                    <div
                                        id="t18_1624_1515"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display:
                                                dl.changes.needATcDetail
                                                    .tickedBookedVisible,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 6.5,
                                            marginBottom: 6.5,
                                        }}
                                    >
                                        <div
                                            id="t18_1624_1516"
                                            style={{
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
                                                id="t18_1624_1517"
                                                style={{
                                                    borderRadius: 5,
                                                    backgroundColor:
                                                        'rgba(248,246,246,1.00)',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    paddingLeft: 10,
                                                    paddingRight: 10,
                                                    paddingTop: 5,
                                                    paddingBottom: 5,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 5,
                                                }}
                                            >
                                                <span
                                                    id="t18_1624_1518"
                                                    style={{
                                                        fontFamily: 'Raleway',
                                                        fontSize: 12,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '28px',
                                                        textAlign: 'center',
                                                        marginLeft: 0,
                                                        marginRight: 1.5,
                                                    }}
                                                >
                                                    Ticket:
                                                </span>

                                                <span
                                                    id="t18_1624_1519"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 12,
                                                        fontWeight: 700,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '28px',
                                                        textAlign: 'center',
                                                        marginLeft: 1.5,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    {
                                                        dl.changes.needATcDetail
                                                            .ticketStatus
                                                    }
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1624_1520"
                                                style={{
                                                    borderRadius: 5,
                                                    backgroundColor:
                                                        'rgba(248,246,246,1.00)',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    paddingLeft: 10,
                                                    paddingRight: 10,
                                                    paddingTop: 5,
                                                    paddingBottom: 5,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 5,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_1624_1521"
                                                    style={{
                                                        fontFamily: 'Raleway',
                                                        fontSize: 12,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '28px',
                                                        textAlign: 'center',
                                                        marginLeft: 0,
                                                        marginRight: 1.5,
                                                    }}
                                                >
                                                    Date & Time:
                                                </span>

                                                <span
                                                    id="t18_1624_1522"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 12,
                                                        fontWeight: 700,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '28px',
                                                        textAlign: 'center',
                                                        marginLeft: 1.5,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    {
                                                        dl.changes.needATcDetail
                                                            .dateOfJourrney
                                                    }
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1624_1523"
                                            style={{
                                                borderRadius: 5,
                                                backgroundColor:
                                                    'rgba(248,246,246,1.00)',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                paddingTop: 5,
                                                paddingBottom: 5,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 5,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <span
                                                id="t18_1624_1524"
                                                style={{
                                                    fontFamily: 'Raleway',
                                                    fontSize: 12,
                                                    fontWeight: 400,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '28px',
                                                    textAlign: 'center',
                                                    marginLeft: 0,
                                                    marginRight: 1.5,
                                                }}
                                            >
                                                Airline:
                                            </span>

                                            <span
                                                id="t18_1624_1525"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 12,
                                                    fontWeight: 700,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '28px',
                                                    textAlign: 'center',
                                                    marginLeft: 1.5,
                                                    marginRight: 0,
                                                }}
                                            >
                                                {
                                                    dl.changes.needATcDetail
                                                        .airline
                                                }
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1624_1526"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display:
                                                dl.changes.needATcDetail
                                                    .ticketYetToBookVisible,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 6.5,
                                            marginBottom: 6.5,
                                        }}
                                    >
                                        <div
                                            id="t18_1624_1527"
                                            style={{
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
                                                id="t18_1624_1528"
                                                style={{
                                                    borderRadius: 5,
                                                    backgroundColor:
                                                        'rgba(248,246,246,1.00)',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    paddingLeft: 10,
                                                    paddingRight: 10,
                                                    paddingTop: 5,
                                                    paddingBottom: 5,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 5,
                                                }}
                                            >
                                                <span
                                                    id="t18_1624_1529"
                                                    style={{
                                                        fontFamily: 'Raleway',
                                                        fontSize: 12,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '28px',
                                                        textAlign: 'center',
                                                        marginLeft: 0,
                                                        marginRight: 1.5,
                                                    }}
                                                >
                                                    Ticket:
                                                </span>

                                                <span
                                                    id="t18_1624_1530"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 12,
                                                        fontWeight: 700,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '28px',
                                                        textAlign: 'center',
                                                        marginLeft: 1.5,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    Yet to book
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1624_1531"
                                                style={{
                                                    borderRadius: 5,
                                                    backgroundColor:
                                                        'rgba(248,246,246,1.00)',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    paddingLeft: 10,
                                                    paddingRight: 10,
                                                    paddingTop: 5,
                                                    paddingBottom: 5,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 5,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_1624_1532"
                                                    style={{
                                                        fontFamily: 'Raleway',
                                                        fontSize: 12,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '28px',
                                                        textAlign: 'center',
                                                        marginLeft: 0,
                                                        marginRight: 1.5,
                                                    }}
                                                >
                                                    From date:
                                                </span>

                                                <span
                                                    id="t18_1624_1533"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 12,
                                                        fontWeight: 700,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '28px',
                                                        textAlign: 'center',
                                                        marginLeft: 1.5,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    {
                                                        dl.changes.needATcDetail
                                                            .fromDate
                                                    }
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1624_1534"
                                            style={{
                                                borderRadius: 5,
                                                backgroundColor:
                                                    'rgba(248,246,246,1.00)',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                paddingTop: 5,
                                                paddingBottom: 5,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 5,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <span
                                                id="t18_1624_1535"
                                                style={{
                                                    fontFamily: 'Raleway',
                                                    fontSize: 12,
                                                    fontWeight: 400,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '28px',
                                                    textAlign: 'center',
                                                    marginLeft: 0,
                                                    marginRight: 1.5,
                                                }}
                                            >
                                                To date:
                                            </span>

                                            <span
                                                id="t18_1624_1536"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 12,
                                                    fontWeight: 700,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '28px',
                                                    textAlign: 'center',
                                                    marginLeft: 1.5,
                                                    marginRight: 0,
                                                }}
                                            >
                                                {
                                                    dl.changes.needATcDetail
                                                        .toDate
                                                }
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1624_1537"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 6.5,
                                            marginBottom: 6.5,
                                        }}
                                    >
                                        <div
                                            id="t18_1624_1538"
                                            style={{
                                                height: 63,
                                                width: 123,
                                                borderRadius: 3,
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
                                                marginLeft: 0,
                                            }}
                                        >
                                            <span
                                                id="t18_1624_1539"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 12,
                                                    fontWeight: 400,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '14.522727012634277px',
                                                    textAlign: 'center',
                                                    marginTop: 0,
                                                    marginBottom: 1,
                                                }}
                                            >
                                                From:
                                            </span>

                                            <span
                                                id="t18_1624_1540"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 12,
                                                    fontWeight: 700,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '14.522727012634277px',
                                                    textAlign: 'center',
                                                    marginTop: 1,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                {
                                                    dl.changes.needATcDetail
                                                        .jouneyFrom
                                                }
                                            </span>
                                        </div>

                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/07fcf6304480f43a19340f89754a1a98c88caa77.png' !=
                                        '' ? (
                                            <img
                                                id="t18_1624_1541"
                                                style={{
                                                    height: 0.84375,
                                                    width: 60,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                }}
                                                src={
                                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/07fcf6304480f43a19340f89754a1a98c88caa77.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

                                        <div
                                            id="t18_1624_1542"
                                            style={{
                                                height: 63,
                                                width: 123,
                                                borderRadius: 3,
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
                                                marginRight: 0,
                                            }}
                                        >
                                            <span
                                                id="t18_1624_1543"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 12,
                                                    fontWeight: 400,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '14.522727012634277px',
                                                    textAlign: 'center',
                                                    marginTop: 0,
                                                    marginBottom: 1,
                                                }}
                                            >
                                                To:
                                            </span>

                                            <span
                                                id="t18_1624_1544"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 12,
                                                    fontWeight: 700,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '14.522727012634277px',
                                                    textAlign: 'center',
                                                    marginTop: 1,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                {
                                                    dl.changes.needATcDetail
                                                        .jouneyto
                                                }
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1624_1545"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 6.5,
                                            marginBottom: 0,
                                        }}
                                    >
                                        {dl.changes.needATcDetail.stop1 ==
                                            'No Info' &&
                                        dl.changes.needATcDetail.stop2 ==
                                            'No Info' ? null : (
                                            <div
                                                id="t18_1624_1546"
                                                style={{
                                                    width: 296,
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display:
                                                        dl.changes.needATcDetail
                                                            .tickedBookedVisible,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                }}
                                            >
                                                <div
                                                    id="t18_1624_1547"
                                                    style={{
                                                        width: 284,
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
                                                        marginBottom: 2,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1624_1548"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 13,
                                                            fontWeight: 600,
                                                            color: 'rgba(112,112,112,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '15.732954025268555px',
                                                            textAlign: 'left',
                                                        }}
                                                    >
                                                        Stops:
                                                    </span>
                                                </div>

                                                <div
                                                    id="t18_1624_1549"
                                                    style={{
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginTop: 2,
                                                        marginBottom: 0,
                                                    }}
                                                >
                                                    {dl.changes.needATcDetail
                                                        .stop1 ==
                                                    'No Info' ? null : (
                                                        <div
                                                            id="t18_1624_1550"
                                                            style={{
                                                                height: 63,
                                                                width: 117,
                                                                borderRadius: 3,
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
                                                                overflow:
                                                                    'visible',
                                                                borderWidth: 0,
                                                                marginLeft: 0,
                                                                marginRight: 5,
                                                            }}
                                                        >
                                                            <span
                                                                id="t18_1624_1551"
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
                                                                        'center',
                                                                    marginTop: 0,
                                                                    marginBottom: 1,
                                                                }}
                                                            >
                                                                Stop 1:
                                                            </span>

                                                            <span
                                                                id="t18_1624_1552"
                                                                style={{
                                                                    fontFamily:
                                                                        'Inter',
                                                                    fontSize: 12,
                                                                    fontWeight: 700,
                                                                    color: 'rgba(0,0,0,1)',
                                                                    letterSpacing: 0,
                                                                    lineHeight:
                                                                        '14.522727012634277px',
                                                                    textAlign:
                                                                        'center',
                                                                    marginTop: 1,
                                                                    marginBottom: 0,
                                                                }}
                                                            >
                                                                {
                                                                    dl.changes
                                                                        .needATcDetail
                                                                        .stop1
                                                                }
                                                            </span>
                                                        </div>
                                                    )}

                                                    {dl.changes.needATcDetail
                                                        .stop2 ==
                                                    'No Info' ? null : (
                                                        <div
                                                            id="t18_1624_1553"
                                                            style={{
                                                                height: 63,
                                                                width: 117,
                                                                borderRadius: 3,
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
                                                                overflow:
                                                                    'visible',
                                                                borderWidth: 0,
                                                                marginLeft: 5,
                                                                marginRight: 0,
                                                            }}
                                                        >
                                                            <span
                                                                id="t18_1624_1554"
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
                                                                        'center',
                                                                    marginTop: 0,
                                                                    marginBottom: 1,
                                                                }}
                                                            >
                                                                Stop 2:
                                                            </span>

                                                            <span
                                                                id="t18_1624_1555"
                                                                style={{
                                                                    fontFamily:
                                                                        'Inter',
                                                                    fontSize: 12,
                                                                    fontWeight: 700,
                                                                    color: 'rgba(0,0,0,1)',
                                                                    letterSpacing: 0,
                                                                    lineHeight:
                                                                        '14.522727012634277px',
                                                                    textAlign:
                                                                        'center',
                                                                    marginTop: 1,
                                                                    marginBottom: 0,
                                                                }}
                                                            >
                                                                {
                                                                    dl.changes
                                                                        .needATcDetail
                                                                        .stop2
                                                                }
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                        <div
                                            id="t18_1624_1556"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display:
                                                    dl.changes.needATcDetail
                                                        .ticketYetToBookVisible,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_1624_1557"
                                                style={{
                                                    width: 284,
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
                                                    marginBottom: 2,
                                                }}
                                            >
                                                <span
                                                    id="t18_1624_1558"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 13,
                                                        fontWeight: 600,
                                                        color: 'rgba(112,112,112,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '15.732954025268555px',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    Preferred airlines:
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1624_1559"
                                                style={{
                                                    width: 335,
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 2,
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
                                                    {dl.changes.needATcDetail.preferedAirlines.map(
                                                        (item, index) => {
                                                            return (
                                                                <div>
                                                                    <MmArrayCompS
                                                                        {...item}
                                                                        {...dl
                                                                            .changes
                                                                            .needATcDetail
                                                                            .preferedAirlines}
                                                                    />
                                                                </div>
                                                            )
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_1624_1562"
                                    style={{
                                        height: 99,
                                        width: 363,
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
                                        id="t18_1624_1563"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            paddingLeft: 10,
                                            paddingRight: 10,
                                            paddingBottom: 10,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 2.5,
                                        }}
                                    >
                                        <span
                                            id="t18_1624_1564"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 10,
                                                fontWeight: 400,
                                                color: 'rgba(0,0,0,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '12.102272033691406px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            Interested ?
                                        </span>
                                    </div>

                                    <div
                                        id="t18_1624_1565"
                                        style={{
                                            height: 30,
                                            width: 144,
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
                                            marginTop: 2.5,
                                            marginBottom: 0,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            var id =
                                                dl.changes.needATcDetail._id
                                            dl.functions.contactUsAction(
                                                id,
                                                'travelCompanion',
                                                'small'
                                            )
                                        }}
                                    >
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/8b731d91cd7f7a57bfb64c1f7d44d15d586186ac.png' !=
                                        '' ? (
                                            <img
                                                id="t18_1624_1566"
                                                style={{
                                                    height: 15.09375,
                                                    width: 15,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 4,
                                                }}
                                                src={
                                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/8b731d91cd7f7a57bfb64c1f7d44d15d586186ac.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

                                        <span
                                            id="t18_1624_1567"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 12,
                                                fontWeight: 500,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '14.522727012634277px',
                                                textAlign: 'left',
                                                marginLeft: 4,
                                                marginRight: 0,
                                            }}
                                        >
                                            VIEW CONTACT
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
export default Offeredtcdetails_4
