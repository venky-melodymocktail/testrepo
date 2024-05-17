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

const Offeredtcdetails_1 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_1513_1563')
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
                id="t18_1513_1563"
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
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <div
                    id="t18_1513_1460"
                    style={{
                        backgroundColor: 'rgba(255,255,255,1.00)',
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
                        id="t18_1513_1461"
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
                            id="t18_1513_1464"
                            style={{
                                width: 1420,
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                display: 'flex',
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 60,
                                paddingBottom: 60,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_1513_1465"
                                style={{
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
                                    id="t18_1513_1466"
                                    style={{
                                        width: 920,
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 20,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 50,
                                        paddingRight: 50,
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
                                        id="t18_1513_1467"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-end',
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
                                            id="t18_1513_1468"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 20,
                                            }}
                                        >
                                            <div
                                                id="t18_1513_1469"
                                                style={{
                                                    width: 680,
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
                                                    id="t18_1513_1470"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 36,
                                                        fontWeight: 700,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '43.568180084228516px',
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
                                                id="t18_1513_1471"
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
                                                    id="t18_1513_1472"
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
                                                        marginRight: 5,
                                                    }}
                                                >
                                                    Posted by:
                                                </span>

                                                <span
                                                    id="t18_1641_192"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 18,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '21.784090042114258px',
                                                        textAlign: 'left',
                                                        marginLeft: 5,
                                                        marginRight: 5,
                                                    }}
                                                >
                                                    {
                                                        dl.changes.needATcDetail
                                                            .postedBy
                                                    }
                                                </span>

                                                <span
                                                    id="t18_1641_191"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 18,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '21.784090042114258px',
                                                        textAlign: 'left',
                                                        marginLeft: 5,
                                                        marginRight: 5,
                                                    }}
                                                >
                                                    on
                                                </span>

                                                <span
                                                    id="t18_1513_1473"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 18,
                                                        fontWeight: 400,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '21.784090042114258px',
                                                        textAlign: 'left',
                                                        marginLeft: 5,
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
                                            id="t18_1513_1474"
                                            /// make the display flex to see the owners details or none to hide
                                            style={{
                                                height: 121,
                                                width: 233,
                                                borderRadius: 10,
                                                backgroundColor:
                                                    'rgba(248,246,246,1.00)',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                display: 'none',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 20,
                                                marginRight: 0,
                                            }}
                                        >
                                            <span
                                                id="t18_1513_1475"
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
                                                    marginBottom: 2.5,
                                                }}
                                            >
                                                Expected tip:
                                            </span>

                                            <span
                                                id="t18_1513_1476"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 46,
                                                    fontWeight: 700,
                                                    color: 'rgba(28,167,139,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '55.67045211791992px',
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
                                        id="t18_1513_1477"
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
                                                id="t18_1513_1478"
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
                                            id="t18_1513_1479"
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
                                                    id="t18_1513_1480"
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
                                                    id="t18_1513_1481"
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
                                                    id="t18_1513_1482"
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
                                                    id="t18_1513_1483"
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
                                    id="t18_1513_1484"
                                    /// change the height to 347 when personal detail section is visible
                                    style={{
                                        height: 147,
                                        width: 970,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 50,
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
                                        id="t18_1513_1485"
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
                                            id="t18_1513_1486"
                                            style={{
                                                width: 918,
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
                                                id="t18_1513_1487"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 21,
                                                    fontWeight: 600,
                                                    color: 'rgba(186,15,23,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '25.414772033691406px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Personal details
                                            </span>
                                        </div>

                                        <div
                                            id="t18_1513_1488"
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
                                                id="t18_1513_1489"
                                                style={{
                                                    height: 124,
                                                    width: 281,
                                                    borderRadius: 15,
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
                                                    marginRight: 19,
                                                }}
                                            >
                                                <span
                                                    id="t18_1513_1490"
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
                                                    id="t18_1513_1491"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 18,
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
                                                id="t18_1513_1492"
                                                style={{
                                                    height: 124,
                                                    width: 281,
                                                    borderRadius: 15,
                                                    backgroundColor:
                                                        'rgba(248,246,246,1.00)',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 19,
                                                    marginRight: 19,
                                                }}
                                            >
                                                <span
                                                    id="t18_1513_1493"
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
                                                    id="t18_1513_1494"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 18,
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
                                                id="t18_1513_1495"
                                                style={{
                                                    height: 124,
                                                    width: 281,
                                                    borderRadius: 15,
                                                    backgroundColor:
                                                        'rgba(248,246,246,1.00)',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 19,
                                                    marginRight: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_1513_1496"
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
                                                    id="t18_1513_1497"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 18,
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
                                        id="t18_1513_1498"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-end',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 9,
                                            marginBottom: 9,
                                        }}
                                    >
                                        <div
                                            id="t18_1513_1499"
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
                                            }}
                                        >
                                            <span
                                                id="t18_1513_1500"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 17,
                                                    fontWeight: 600,
                                                    color: 'rgba(112,112,112,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '20.573863983154297px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Languages known :
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1513_1501"
                                        style={{
                                            width: 923,
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 9,
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
                                                            <MmArrayComp
                                                                {...item}
                                                                {...dl.changes
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

                                <div
                                    id="t18_1513_1505"
                                    style={{
                                        width: 969,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 50,
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
                                        id="t18_1513_1506"
                                        style={{
                                            width: 922,
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
                                            id="t18_1513_1507"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 21,
                                                fontWeight: 600,
                                                color: 'rgba(186,15,23,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '25.414772033691406px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            Travel details
                                        </span>
                                    </div>

                                    <div
                                        id="t18_1513_1508"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 17,
                                            marginBottom: 17,
                                        }}
                                    >
                                        <div
                                            id="t18_1624_1236"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 18.5,
                                            }}
                                        >
                                            <div
                                                id="t18_1513_1509"
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
                                                }}
                                            >
                                                <div
                                                    id="t18_1513_1510"
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
                                                    }}
                                                >
                                                    <div
                                                        id="t18_1513_1511"
                                                        style={{
                                                            height: 124,
                                                            width: 281,
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
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginLeft: 0,
                                                            marginRight: 20.5,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1513_1512"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 20,
                                                                fontWeight: 400,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '24.204544067382812px',
                                                                textAlign:
                                                                    'center',
                                                                marginTop: 0,
                                                                marginBottom: 1,
                                                            }}
                                                        >
                                                            Ticket:
                                                        </span>

                                                        <span
                                                            id="t18_1513_1513"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 20,
                                                                fontWeight: 700,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '24.204544067382812px',
                                                                textAlign:
                                                                    'center',
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
                                                        id="t18_1513_1514"
                                                        style={{
                                                            height: 124,
                                                            width: 281,
                                                            borderRadius: 15,
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
                                                                    .needATcDetail
                                                                    .dateTimeVisible,
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginLeft: 20.5,
                                                            marginRight: 20.5,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1513_1515"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 20,
                                                                fontWeight: 400,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '24.204544067382812px',
                                                                textAlign:
                                                                    'center',
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
                                                            id="t18_1513_1516"
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
                                                                    .dateOfJourrney
                                                            }
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1513_1517"
                                                        style={{
                                                            height: 124,
                                                            width: 281,
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
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginLeft: 20.5,
                                                            marginRight: 0,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1513_1518"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 20,
                                                                fontWeight: 400,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '24.204544067382812px',
                                                                textAlign:
                                                                    'center',
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
                                                            id="t18_1513_1519"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 20,
                                                                fontWeight: 700,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '24.204544067382812px',
                                                                textAlign:
                                                                    'center',
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
                                            </div>

                                            <div
                                                id="t18_1624_1225"
                                                style={{
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <div
                                                    id="t18_1624_1226"
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
                                                    }}
                                                >
                                                    <div
                                                        id="t18_1624_1227"
                                                        style={{
                                                            height: 124,
                                                            width: 281,
                                                            borderRadius: 15,
                                                            backgroundColor:
                                                                'rgba(248,246,246,1.00)',
                                                            flexDirection:
                                                                'column',
                                                            alignItems:
                                                                'center',
                                                            justifyContent:
                                                                'center',
                                                            display: 'none',
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginLeft: 0,
                                                            marginRight: 20.5,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1624_1228"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 20,
                                                                fontWeight: 400,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '24.204544067382812px',
                                                                textAlign:
                                                                    'center',
                                                                marginTop: 0,
                                                                marginBottom: 1,
                                                            }}
                                                        >
                                                            Ticket:
                                                        </span>

                                                        <span
                                                            id="t18_1624_1229"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 20,
                                                                fontWeight: 700,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '24.204544067382812px',
                                                                textAlign:
                                                                    'center',
                                                                marginTop: 1,
                                                                marginBottom: 0,
                                                            }}
                                                        >
                                                            Yet to book
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1624_1230"
                                                        style={{
                                                            height: 124,
                                                            width: 281,
                                                            borderRadius: 15,
                                                            backgroundColor:
                                                                'rgba(248,246,246,1.00)',
                                                            flexDirection:
                                                                'column',
                                                            alignItems:
                                                                'center',
                                                            justifyContent:
                                                                'center',
                                                            display: 'none',
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginLeft: 20.5,
                                                            marginRight: 20.5,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1624_1231"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 20,
                                                                fontWeight: 400,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '24.204544067382812px',
                                                                textAlign:
                                                                    'center',
                                                                marginTop: 0,
                                                                marginBottom: 1,
                                                            }}
                                                        >
                                                            From date:
                                                        </span>

                                                        <span
                                                            id="t18_1624_1232"
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
                                                            22 Feb, 2023
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1624_1233"
                                                        style={{
                                                            height: 124,
                                                            width: 281,
                                                            borderRadius: 15,
                                                            backgroundColor:
                                                                'rgba(248,246,246,1.00)',
                                                            flexDirection:
                                                                'column',
                                                            alignItems:
                                                                'center',
                                                            justifyContent:
                                                                'center',
                                                            display: 'none',
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginLeft: 20.5,
                                                            marginRight: 0,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1624_1234"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 20,
                                                                fontWeight: 400,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '24.204544067382812px',
                                                                textAlign:
                                                                    'center',
                                                                marginTop: 0,
                                                                marginBottom: 1,
                                                            }}
                                                        >
                                                            To dare:
                                                        </span>

                                                        <span
                                                            id="t18_1624_1235"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 20,
                                                                fontWeight: 700,
                                                                color: 'rgba(0,0,0,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '24.204544067382812px',
                                                                textAlign:
                                                                    'center',
                                                                marginTop: 1,
                                                                marginBottom: 0,
                                                            }}
                                                        >
                                                            28 Feb, 2023
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1513_1527"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 18.5,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_1513_1528"
                                                style={{
                                                    height: 134,
                                                    width: 281,
                                                    borderRadius: 15,
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
                                                    id="t18_1513_1529"
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
                                                        marginBottom: 1,
                                                    }}
                                                >
                                                    From:
                                                </span>

                                                <span
                                                    id="t18_1513_1530"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 20,
                                                        fontWeight: 700,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '24.204544067382812px',
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
                                                    id="t18_1513_1531"
                                                    style={{
                                                        height: 5,
                                                        width: 357,
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
                                                id="t18_1513_1532"
                                                style={{
                                                    height: 134,
                                                    width: 281,
                                                    borderRadius: 15,
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
                                                    id="t18_1513_1533"
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
                                                        marginBottom: 1,
                                                    }}
                                                >
                                                    To:
                                                </span>

                                                <span
                                                    id="t18_1513_1534"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 20,
                                                        fontWeight: 700,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '24.204544067382812px',
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
                                        id="t18_1513_1535"
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
                                                id="t18_1513_1536"
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
                                                }}
                                            >
                                                <div
                                                    id="t18_1513_1537"
                                                    style={{
                                                        width: 582,
                                                        flexDirection: 'row',
                                                        alignItems:
                                                            'flex-start',
                                                        justifyContent:
                                                            'flex-start',
                                                        display:
                                                            dl.changes
                                                                .needATcDetail
                                                                .tickedBookedVisible,
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
                                                        id="t18_1513_1538"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 17,
                                                            fontWeight: 600,
                                                            color: 'rgba(112,112,112,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '20.573863983154297px',
                                                            textAlign: 'left',
                                                        }}
                                                    >
                                                        Stops:
                                                    </span>
                                                </div>

                                                <div
                                                    id="t18_1513_1539"
                                                    style={{
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'flex-start',
                                                        display:
                                                            dl.changes
                                                                .needATcDetail
                                                                .tickedBookedVisible,
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
                                                            id="t18_1513_1540"
                                                            style={{
                                                                height: 134,
                                                                width: 281,
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
                                                                id="t18_1513_1541"
                                                                style={{
                                                                    fontFamily:
                                                                        'Inter',
                                                                    fontSize: 20,
                                                                    fontWeight: 400,
                                                                    color: 'rgba(0,0,0,1)',
                                                                    letterSpacing: 0,
                                                                    lineHeight:
                                                                        '24.204544067382812px',
                                                                    textAlign:
                                                                        'center',
                                                                    marginTop: 0,
                                                                    marginBottom: 1,
                                                                }}
                                                            >
                                                                Stop 1:
                                                            </span>

                                                            <span
                                                                id="t18_1513_1542"
                                                                style={{
                                                                    fontFamily:
                                                                        'Inter',
                                                                    fontSize: 20,
                                                                    fontWeight: 700,
                                                                    color: 'rgba(0,0,0,1)',
                                                                    letterSpacing: 0,
                                                                    lineHeight:
                                                                        '24.204544067382812px',
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
                                                            id="t18_1513_1543"
                                                            style={{
                                                                height: 134,
                                                                width: 281,
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
                                                                id="t18_1513_1544"
                                                                style={{
                                                                    fontFamily:
                                                                        'Inter',
                                                                    fontSize: 20,
                                                                    fontWeight: 400,
                                                                    color: 'rgba(0,0,0,1)',
                                                                    letterSpacing: 0,
                                                                    lineHeight:
                                                                        '24.204544067382812px',
                                                                    textAlign:
                                                                        'center',
                                                                    marginTop: 0,
                                                                    marginBottom: 1,
                                                                }}
                                                            >
                                                                Stop 2:
                                                            </span>

                                                            <span
                                                                id="t18_1513_1545"
                                                                style={{
                                                                    fontFamily:
                                                                        'Inter',
                                                                    fontSize: 20,
                                                                    fontWeight: 700,
                                                                    color: 'rgba(0,0,0,1)',
                                                                    letterSpacing: 0,
                                                                    lineHeight:
                                                                        '24.204544067382812px',
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
                                            id="t18_1513_1546"
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
                                            <span
                                                id="t18_1513_1547"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 17,
                                                    fontWeight: 600,
                                                    color: 'rgba(112,112,112,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '20.573863983154297px',
                                                    textAlign: 'left',
                                                    marginTop: 0,
                                                    marginBottom: 10,
                                                }}
                                            >
                                                Preferred airlines:
                                            </span>

                                            <div
                                                id="t18_1513_1548"
                                                style={{
                                                    width: 923,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
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
                                                                    <MmArrayComp
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
                                    id="t18_1513_1552"
                                    style={{
                                        height: 184,
                                        width: 1019,
                                        borderBottomLeftRadius: 20,
                                        borderBottomRightRadius: 20,
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingTop: 41,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginBottom: 0,
                                    }}
                                >
                                    <div
                                        id="t18_1513_1553"
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
                                            id="t18_1513_1554"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 20,
                                                fontWeight: 400,
                                                color: 'rgba(0,0,0,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '24.204544067382812px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            Interested ?
                                        </span>
                                    </div>

                                    <div
                                        id="t18_1513_1555"
                                        className={' contact-btn'}
                                        style={{
                                            height: 65,
                                            width: 302,
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
                                                id="t18_1513_1556"
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
                                            id="t18_1513_1557"
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
                                            VIEW CONTACT
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
export default Offeredtcdetails_1
