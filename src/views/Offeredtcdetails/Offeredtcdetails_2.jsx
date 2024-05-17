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

const Offeredtcdetails_2 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 900
            const element = document.getElementById('t18_1626_5')
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
                id="t18_1626_5"
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
                    id="t18_1624_1360"
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
                        id="t18_1624_1361"
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
                            id="t18_1624_1364"
                            style={{
                                height: 1434,
                                width: 880,
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
                            }}
                        >
                            <div
                                id="t18_1624_1365"
                                style={{
                                    width: 840,
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
                                    id="t18_1624_1366"
                                    style={{
                                        width: 800,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 20,
                                        paddingRight: 20,
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
                                        id="t18_1624_1367"
                                        style={{
                                            width: 800,
                                            flexDirection: 'row',
                                            alignItems: 'center',
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
                                            id="t18_1624_1368"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 10,
                                            }}
                                        >
                                            <div
                                                id="t18_1624_1369"
                                                style={{
                                                    width: 626,
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
                                                    marginBottom: 1.5,
                                                }}
                                            >
                                                <span
                                                    id="t18_1624_1370"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 30,
                                                        fontWeight: 700,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '36.30681610107422px',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    {
                                                        dl.changes.needATcDetail
                                                            .title
                                                    }
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1624_1371"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 1.5,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_1624_1372"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 18,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '21.784090042114258px',
                                                        textAlign: 'left',
                                                        marginLeft: 0,
                                                        marginRight: 2.5,
                                                    }}
                                                >
                                                    Posted by:
                                                </span>

                                                <span
                                                    id="t18_1624_1373"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 18,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '21.784090042114258px',
                                                        textAlign: 'left',
                                                        marginLeft: 2.5,
                                                        marginRight: 2.5,
                                                    }}
                                                >
                                                    {
                                                        dl.changes.needATcDetail
                                                            .postedBy
                                                    }
                                                </span>

                                                <span
                                                    id="t18_1624_1374"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 18,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '21.784090042114258px',
                                                        textAlign: 'left',
                                                        marginLeft: 2.5,
                                                        marginRight: 2.5,
                                                    }}
                                                >
                                                    on
                                                </span>

                                                <span
                                                    id="t18_1624_1375"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 18,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '21.784090042114258px',
                                                        textAlign: 'left',
                                                        marginLeft: 2.5,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    {
                                                        dl.changes.needATcDetail
                                                            .postedOn
                                                    }
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1624_1376"
                                            /// make the display flex to see the owners details or none to hide
                                            style={{
                                                height: 86,
                                                width: 154,
                                                borderRadius: 8,
                                                backgroundColor:
                                                    'rgba(248,246,246,1.00)',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                display: 'none',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 10,
                                                marginRight: 0,
                                            }}
                                        >
                                            <span
                                                id="t18_1624_1377"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 18,
                                                    fontWeight: 400,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '21.784090042114258px',
                                                    textAlign: 'center',
                                                    marginTop: 0,
                                                    marginBottom: 2.5,
                                                }}
                                            >
                                                Expected tip:
                                            </span>

                                            <span
                                                id="t18_1624_1378"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 36,
                                                    fontWeight: 700,
                                                    color: 'rgba(28,167,139,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '43.568180084228516px',
                                                    textAlign: 'left',
                                                    marginTop: 2.5,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                {dl.changes.needATcDetail.tip}
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1624_1379"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 8.5,
                                            marginBottom: 0,
                                        }}
                                    >
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c7f7e0d2f29714077d45c2c6c5118445e5e46978.png' !=
                                        '' ? (
                                            <img
                                                id="t18_1624_1380"
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
                                            id="t18_1624_1381"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-end',
                                                justifyContent: 'flex-start',
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
                                                    id="t18_1624_1382"
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
                                                    id="t18_1624_1383"
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
                                                    id="t18_1624_1384"
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

                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/6711ac5e2712675bf7ad999c6c394153aa8b0294.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_1624_1385"
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
                                                            window.location.href
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
                                    id="t18_1624_1386"
                                    /// change the height to 302 when personal detail section is visible or none to hide
                                    style={{
                                        height: 140,
                                        width: 820,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 20,
                                        paddingTop: 18,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        borderColor: 'rgba(207,206,206,1)',
                                        borderBottomWidth: 1,
                                        borderStyle: 'solid',
                                    }}
                                >
                                    <div
                                        id="t18_1624_1387"
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
                                            marginBottom: 9,
                                        }}
                                    >
                                        <div
                                            id="t18_1624_1388"
                                            style={{
                                                width: 595,
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
                                                marginBottom: 8,
                                            }}
                                        >
                                            <span
                                                id="t18_1624_1389"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 20,
                                                    fontWeight: 600,
                                                    color: 'rgba(186,15,23,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '24.204544067382812px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Personal details
                                            </span>
                                        </div>

                                        <div
                                            id="t18_1624_1390"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 8,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_1624_1391"
                                                style={{
                                                    height: 90,
                                                    width: 230,
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
                                                    marginLeft: 0,
                                                    marginRight: 10,
                                                }}
                                            >
                                                <span
                                                    id="t18_1624_1392"
                                                    style={{
                                                        fontFamily: 'Raleway',
                                                        fontSize: 20,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '28px',
                                                        textAlign: 'center',
                                                        marginTop: 0,
                                                    }}
                                                >
                                                    First name:
                                                </span>

                                                <span
                                                    id="t18_1624_1393"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 16,
                                                        fontWeight: 700,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '28px',
                                                        textAlign: 'center',
                                                        marginBottom: 0,
                                                    }}
                                                >
                                                    {
                                                        dl.changes.needATcDetail
                                                            .firstName
                                                    }
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1624_1394"
                                                style={{
                                                    height: 90,
                                                    width: 230,
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
                                                    marginLeft: 10,
                                                    marginRight: 10,
                                                }}
                                            >
                                                <span
                                                    id="t18_1624_1395"
                                                    style={{
                                                        fontFamily: 'Raleway',
                                                        fontSize: 20,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '28px',
                                                        textAlign: 'center',
                                                        marginTop: 0,
                                                    }}
                                                >
                                                    Last name:
                                                </span>

                                                <span
                                                    id="t18_1624_1396"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 16,
                                                        fontWeight: 700,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '28px',
                                                        textAlign: 'center',
                                                        marginBottom: 0,
                                                    }}
                                                >
                                                    {
                                                        dl.changes.needATcDetail
                                                            .lastName
                                                    }
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1624_1397"
                                                style={{
                                                    height: 90,
                                                    width: 230,
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
                                                    marginLeft: 10,
                                                    marginRight: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_1624_1398"
                                                    style={{
                                                        fontFamily: 'Raleway',
                                                        fontSize: 20,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '28px',
                                                        textAlign: 'center',
                                                        marginTop: 0,
                                                    }}
                                                >
                                                    Vaccinated:
                                                </span>

                                                <span
                                                    id="t18_1624_1399"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 16,
                                                        fontWeight: 700,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '28px',
                                                        textAlign: 'center',
                                                        marginBottom: 0,
                                                    }}
                                                >
                                                    {
                                                        dl.changes.needATcDetail
                                                            .vaccinated
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1624_1400"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 9,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_1624_1401"
                                            style={{
                                                width: 464,
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
                                                marginBottom: 4.5,
                                            }}
                                        >
                                            <span
                                                id="t18_1624_1402"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 16,
                                                    fontWeight: 600,
                                                    color: 'rgba(112,112,112,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '19.363636016845703px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Languages known :
                                            </span>
                                        </div>

                                        <div
                                            id="t18_1624_1403"
                                            style={{
                                                width: 765,
                                                flexDirection: 'row',
                                                alignItems: 'center',
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
                                                                <MmArrayCompSs
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
                                    id="t18_1624_1406"
                                    style={{
                                        width: 820,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 20,
                                        paddingTop: 18,
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
                                        id="t18_1624_1407"
                                        style={{
                                            width: 754,
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
                                            marginBottom: 17,
                                        }}
                                    >
                                        <span
                                            id="t18_1624_1408"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 20,
                                                fontWeight: 600,
                                                color: 'rgba(186,15,23,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '24.204544067382812px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            Travel details
                                        </span>
                                    </div>

                                    <div
                                        id="t18_1624_1409"
                                        style={{
                                            width: 775,
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 17,
                                            marginBottom: 17,
                                        }}
                                    >
                                        <div
                                            id="t18_1624_1410"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 12.5,
                                            }}
                                        >
                                            <div
                                                id="t18_1624_1411"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                }}
                                            >
                                                <div
                                                    id="t18_1624_1412"
                                                    style={{
                                                        height: 90,
                                                        width: 230,
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
                                                        marginRight: 10,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1624_1413"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 18,
                                                            fontWeight: 400,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '21.784090042114258px',
                                                            textAlign: 'center',
                                                            marginTop: 0,
                                                            marginBottom: 1,
                                                        }}
                                                    >
                                                        Ticket:
                                                    </span>

                                                    <span
                                                        id="t18_1624_1414"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 18,
                                                            fontWeight: 700,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '21.784090042114258px',
                                                            textAlign: 'center',
                                                            marginTop: 1,
                                                            marginBottom: 0,
                                                        }}
                                                    >
                                                        {
                                                            dl.changes
                                                                .needATcDetail
                                                                .ticketStatus
                                                        }
                                                    </span>
                                                </div>

                                                <div
                                                    id="t18_1624_1415"
                                                    style={{
                                                        height: 90,
                                                        width: 260.5,
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
                                                        marginLeft: 10,
                                                        marginRight: 10,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1624_1416"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 18,
                                                            fontWeight: 400,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '21.784090042114258px',
                                                            textAlign: 'center',
                                                            marginTop: 0,
                                                            marginBottom: 1,
                                                        }}
                                                    >
                                                        {
                                                            dl.changes
                                                                .needATcDetail
                                                                .middleTitle
                                                        }
                                                    </span>

                                                    <span
                                                        id="t18_1624_1417"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 18,
                                                            fontWeight: 700,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '21.784090042114258px',
                                                            textAlign: 'center',
                                                            marginTop: 1,
                                                            marginBottom: 0,
                                                        }}
                                                    >
                                                        {
                                                            dl.changes
                                                                .needATcDetail
                                                                .dateOfJourrney
                                                        }
                                                    </span>
                                                </div>

                                                <div
                                                    id="t18_1624_1418"
                                                    style={{
                                                        height: 90,
                                                        width: 230,
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
                                                        marginLeft: 10,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1624_1419"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 18,
                                                            fontWeight: 400,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '21.784090042114258px',
                                                            textAlign: 'center',
                                                            marginTop: 0,
                                                            marginBottom: 1,
                                                        }}
                                                    >
                                                        {
                                                            dl.changes
                                                                .needATcDetail
                                                                .rightboxTitle
                                                        }
                                                    </span>

                                                    <span
                                                        id="t18_1624_1420"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 18,
                                                            fontWeight: 700,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '21.784090042114258px',
                                                            textAlign: 'center',
                                                            marginTop: 1,
                                                            marginBottom: 0,
                                                        }}
                                                    >
                                                        {
                                                            dl.changes
                                                                .needATcDetail
                                                                .airline
                                                        }
                                                    </span>
                                                </div>
                                            </div>

                                            <div
                                                id="t18_1624_1421"
                                                style={{
                                                    flexDirection: 'row',
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
                                                    id="t18_1624_1422"
                                                    style={{
                                                        height: 90,
                                                        width: 230,
                                                        borderRadius: 10,
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
                                                        marginLeft: 0,
                                                        marginRight: 10,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1624_1423"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 18,
                                                            fontWeight: 400,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '21.784090042114258px',
                                                            textAlign: 'center',
                                                            marginTop: 0,
                                                            marginBottom: 1,
                                                        }}
                                                    >
                                                        Ticket:
                                                    </span>

                                                    <span
                                                        id="t18_1624_1424"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 18,
                                                            fontWeight: 700,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '21.784090042114258px',
                                                            textAlign: 'center',
                                                            marginTop: 1,
                                                            marginBottom: 0,
                                                        }}
                                                    >
                                                        Yet to book
                                                    </span>
                                                </div>

                                                <div
                                                    id="t18_1624_1425"
                                                    style={{
                                                        height: 90,
                                                        width: 260.5,
                                                        borderRadius: 10,
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
                                                        marginLeft: 10,
                                                        marginRight: 10,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1624_1426"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 18,
                                                            fontWeight: 400,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '21.784090042114258px',
                                                            textAlign: 'center',
                                                            marginTop: 0,
                                                            marginBottom: 1,
                                                        }}
                                                    >
                                                        From date:
                                                    </span>

                                                    <span
                                                        id="t18_1624_1427"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 18,
                                                            fontWeight: 700,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '21.784090042114258px',
                                                            textAlign: 'center',
                                                            marginTop: 1,
                                                            marginBottom: 0,
                                                        }}
                                                    >
                                                        22 Feb, 2023
                                                    </span>
                                                </div>

                                                <div
                                                    id="t18_1624_1428"
                                                    style={{
                                                        height: 90,
                                                        width: 230,
                                                        borderRadius: 10,
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
                                                        marginLeft: 10,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1624_1429"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 18,
                                                            fontWeight: 400,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '21.784090042114258px',
                                                            textAlign: 'center',
                                                            marginTop: 0,
                                                            marginBottom: 1,
                                                        }}
                                                    >
                                                        To date:
                                                    </span>

                                                    <span
                                                        id="t18_1624_1430"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 18,
                                                            fontWeight: 700,
                                                            color: 'rgba(0,0,0,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '21.784090042114258px',
                                                            textAlign: 'center',
                                                            marginTop: 1,
                                                            marginBottom: 0,
                                                        }}
                                                    >
                                                        28 Feb, 2023
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1624_1431"
                                            style={{
                                                width: 753,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 12.5,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_1624_1432"
                                                style={{
                                                    height: 100,
                                                    width: 230,
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
                                                    marginLeft: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_1624_1433"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 18,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '21.784090042114258px',
                                                        textAlign: 'center',
                                                        marginTop: 0,
                                                        marginBottom: 1,
                                                    }}
                                                >
                                                    From:
                                                </span>

                                                <span
                                                    id="t18_1624_1434"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 18,
                                                        fontWeight: 700,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '21.784090042114258px',
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
                                                    id="t18_1624_1435"
                                                    style={{
                                                        height: 4.203125,
                                                        width: 300,
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
                                                id="t18_1624_1436"
                                                style={{
                                                    height: 100,
                                                    width: 230,
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
                                                    marginRight: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_1624_1437"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 18,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '21.784090042114258px',
                                                        textAlign: 'center',
                                                        marginTop: 0,
                                                        marginBottom: 1,
                                                    }}
                                                >
                                                    To:
                                                </span>

                                                <span
                                                    id="t18_1624_1438"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 18,
                                                        fontWeight: 700,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '21.784090042114258px',
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
                                    </div>

                                    <div
                                        id="t18_1624_1439"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 17,
                                            marginBottom: 0,
                                        }}
                                    >
                                        {dl.changes.needATcDetail.stop1 ==
                                            'No Info' &&
                                        dl.changes.needATcDetail.stop2 ==
                                            'No Info' ? null : (
                                            <div
                                                id="t18_1624_1440"
                                                style={{
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
                                                    id="t18_1624_1441"
                                                    style={{
                                                        width: 582,
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
                                                        marginBottom: 4,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1624_1442"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 16,
                                                            fontWeight: 600,
                                                            color: 'rgba(112,112,112,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '19.363636016845703px',
                                                            textAlign: 'left',
                                                        }}
                                                    >
                                                        Stops:
                                                    </span>
                                                </div>

                                                <div
                                                    id="t18_1624_1443"
                                                    style={{
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
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
                                                    {dl.changes.needATcDetail
                                                        .stop1 ==
                                                    'No Info' ? null : (
                                                        <div
                                                            id="t18_1624_1444"
                                                            style={{
                                                                height: 100,
                                                                width: 250,
                                                                borderRadius: 15,
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
                                                                overflow:
                                                                    'visible',
                                                                borderWidth: 0,
                                                                marginLeft: 0,
                                                                marginRight: 10,
                                                            }}
                                                        >
                                                            <span
                                                                id="t18_1624_1445"
                                                                style={{
                                                                    fontFamily:
                                                                        'Inter',
                                                                    fontSize: 18,
                                                                    fontWeight: 400,
                                                                    color: 'rgba(0,0,0,1)',
                                                                    letterSpacing: 0,
                                                                    lineHeight:
                                                                        '21.784090042114258px',
                                                                    textAlign:
                                                                        'center',
                                                                    marginTop: 0,
                                                                    marginBottom: 1,
                                                                }}
                                                            >
                                                                Stop 1:
                                                            </span>

                                                            <span
                                                                id="t18_1624_1446"
                                                                style={{
                                                                    fontFamily:
                                                                        'Inter',
                                                                    fontSize: 18,
                                                                    fontWeight: 700,
                                                                    color: 'rgba(0,0,0,1)',
                                                                    letterSpacing: 0,
                                                                    lineHeight:
                                                                        '21.784090042114258px',
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
                                                            id="t18_1624_1447"
                                                            style={{
                                                                height: 100,
                                                                width: 250,
                                                                borderRadius: 15,
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
                                                                overflow:
                                                                    'visible',
                                                                borderWidth: 0,
                                                                marginLeft: 10,
                                                                marginRight: 0,
                                                            }}
                                                        >
                                                            <span
                                                                id="t18_1624_1448"
                                                                style={{
                                                                    fontFamily:
                                                                        'Inter',
                                                                    fontSize: 18,
                                                                    fontWeight: 400,
                                                                    color: 'rgba(0,0,0,1)',
                                                                    letterSpacing: 0,
                                                                    lineHeight:
                                                                        '21.784090042114258px',
                                                                    textAlign:
                                                                        'center',
                                                                    marginTop: 0,
                                                                    marginBottom: 1,
                                                                }}
                                                            >
                                                                Stop 2:
                                                            </span>

                                                            <span
                                                                id="t18_1624_1449"
                                                                style={{
                                                                    fontFamily:
                                                                        'Inter',
                                                                    fontSize: 18,
                                                                    fontWeight: 700,
                                                                    color: 'rgba(0,0,0,1)',
                                                                    letterSpacing: 0,
                                                                    lineHeight:
                                                                        '21.784090042114258px',
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
                                            id="t18_1624_1450"
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
                                                id="t18_1624_1451"
                                                style={{
                                                    width: 582,
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
                                                    marginBottom: 4.5,
                                                }}
                                            >
                                                <span
                                                    id="t18_1624_1452"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 16,
                                                        fontWeight: 600,
                                                        color: 'rgba(112,112,112,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '19.363636016845703px',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    Preferred airlines
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1624_1453"
                                                style={{
                                                    width: 765,
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 4.5,
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
                                                                    <MmArrayCompSs
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
                                    id="t18_1624_1456"
                                    style={{
                                        height: 187,
                                        width: 840,
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
                                        id="t18_1624_1457"
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
                                            marginBottom: 5.5,
                                        }}
                                    >
                                        <span
                                            id="t18_1624_1458"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 18,
                                                fontWeight: 400,
                                                color: 'rgba(0,0,0,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '21.784090042114258px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            Interested ?
                                        </span>
                                    </div>

                                    <div
                                        id="t18_1624_1459"
                                        style={{
                                            height: 60,
                                            width: 240,
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
                                            marginTop: 5.5,
                                            marginBottom: 0,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            var id =
                                                dl.changes.needATcDetail._id
                                            dl.functions.contactUsAction(
                                                id,
                                                'travelCompanion',
                                                'large'
                                            )
                                        }}
                                    >
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/8b731d91cd7f7a57bfb64c1f7d44d15d586186ac.png' !=
                                        '' ? (
                                            <img
                                                id="t18_1624_1460"
                                                style={{
                                                    height: 30.1953125,
                                                    width: 30,
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
                                            id="t18_1624_1461"
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
                                            VIEW CONTACT
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
    )
})
export default Offeredtcdetails_2
