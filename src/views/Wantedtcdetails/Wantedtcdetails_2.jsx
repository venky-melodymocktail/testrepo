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
import MmArrayCompSs from '../../components/MmArrayCompSs.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmArrayCompS from '../../components/MmArrayCompS.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'

const Wantedtcdetails_2 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 900
            const element = document.getElementById('t18_1626_2')
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
                id="t18_1626_2"
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
                    id="t18_1624_959"
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
                        id="t18_1624_960"
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
                        <MmHeaderMd />

                        <div
                            id="t18_1624_963"
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
                                id="t18_1624_964"
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
                                    id="t18_1624_965"
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
                                        id="t18_1624_966"
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
                                            id="t18_1624_967"
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
                                                id="t18_1624_968"
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
                                                    id="t18_1624_969"
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
                                                        dl.changes
                                                            .wantToBeATcDetail
                                                            .title
                                                    }
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1624_970"
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
                                                    id="t18_1624_971"
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
                                                    id="t18_1624_972"
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
                                                        dl.changes
                                                            .wantToBeATcDetail
                                                            .postedBy
                                                    }
                                                </span>

                                                <span
                                                    id="t18_1624_973"
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
                                                    id="t18_1624_974"
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
                                                        dl.changes
                                                            .wantToBeATcDetail
                                                            .postedOn
                                                    }
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1624_975"
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
                                                id="t18_1624_976"
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
                                                Tip offered:
                                            </span>

                                            <span
                                                id="t18_1624_977"
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
                                                {
                                                    dl.changes.wantToBeATcDetail
                                                        .tip
                                                }
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1624_1353"
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
                                                id="t18_1624_1354"
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
                                            id="t18_1624_1355"
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
                                                    id="t18_1624_1356"
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
                                                    id="t18_1624_1357"
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
                                                    id="t18_1624_1358"
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
                                                    id="t18_1624_1359"
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
                                    id="t18_1624_981"
                                    /// change the height to 302 when personal detail section is visible
                                    style={{
                                        height: 147,
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
                                        id="t18_1624_982"
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
                                            id="t18_1624_983"
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
                                                id="t18_1624_984"
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
                                            id="t18_1624_985"
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
                                                id="t18_1624_986"
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
                                                    id="t18_1624_987"
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
                                                    id="t18_1624_988"
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
                                                        dl.changes
                                                            .wantToBeATcDetail
                                                            .firstName
                                                    }
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1624_989"
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
                                                    id="t18_1624_990"
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
                                                    id="t18_1624_991"
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
                                                        dl.changes
                                                            .wantToBeATcDetail
                                                            .lastName
                                                    }
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1624_992"
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
                                                    id="t18_1624_993"
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
                                                    id="t18_1624_994"
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
                                                        dl.changes
                                                            .wantToBeATcDetail
                                                            .vaccinated
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1624_995"
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
                                            id="t18_1624_996"
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
                                                id="t18_1624_997"
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
                                            id="t18_1624_998"
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
                                                {dl.changes.wantToBeATcDetail.languagesKnown.map(
                                                    (item, index) => {
                                                        return (
                                                            <div>
                                                                <MmArrayCompSs
                                                                    {...item}
                                                                    {...dl
                                                                        .changes
                                                                        .wantToBeATcDetail
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
                                    id="t18_1624_1005"
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
                                        id="t18_1624_1006"
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
                                            id="t18_1624_1007"
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
                                        id="t18_1624_1008"
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
                                            id="t18_1624_1254"
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
                                                id="t18_1624_1009"
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
                                                    id="t18_1624_1010"
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
                                                        display:
                                                            dl.changes
                                                                .wantToBeATcDetail
                                                                .tickedBookedVisible,
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 0,
                                                        marginRight: 10,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1624_1011"
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
                                                        id="t18_1624_1012"
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
                                                                .wantToBeATcDetail
                                                                .ticketStatus
                                                        }
                                                    </span>
                                                </div>

                                                <div
                                                    id="t18_1624_1013"
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
                                                        display:
                                                            dl.changes
                                                                .wantToBeATcDetail
                                                                .tickedBookedVisible,
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 10,
                                                        marginRight: 10,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1624_1014"
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
                                                        Date & Time:
                                                    </span>

                                                    <span
                                                        id="t18_1624_1015"
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
                                                                .wantToBeATcDetail
                                                                .dateOfJourney
                                                        }
                                                    </span>
                                                </div>

                                                <div
                                                    id="t18_1624_1016"
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
                                                        display:
                                                            dl.changes
                                                                .wantToBeATcDetail
                                                                .tickedBookedVisible,
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 10,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1624_1017"
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
                                                        Airline:
                                                    </span>

                                                    <span
                                                        id="t18_1624_1018"
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
                                                                .wantToBeATcDetail
                                                                .airline
                                                        }
                                                    </span>
                                                </div>
                                            </div>

                                            <div
                                                id="t18_1624_1244"
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
                                                    id="t18_1624_1245"
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
                                                        display:
                                                            dl.changes
                                                                .wantToBeATcDetail
                                                                .ticketYetToBookVisible,
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 0,
                                                        marginRight: 10,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1624_1246"
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
                                                        id="t18_1624_1247"
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
                                                    id="t18_1624_1248"
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
                                                        display:
                                                            dl.changes
                                                                .wantToBeATcDetail
                                                                .ticketYetToBookVisible,
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 10,
                                                        marginRight: 10,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1624_1249"
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
                                                        id="t18_1624_1250"
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
                                                                .wantToBeATcDetail
                                                                .fromDate
                                                        }
                                                    </span>
                                                </div>

                                                <div
                                                    id="t18_1624_1251"
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
                                                        display:
                                                            dl.changes
                                                                .wantToBeATcDetail
                                                                .ticketYetToBookVisible,
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 10,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1624_1252"
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
                                                        id="t18_1624_1253"
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
                                                                .wantToBeATcDetail
                                                                .toDate
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1624_1019"
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
                                                id="t18_1624_1020"
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
                                                    id="t18_1624_1021"
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
                                                    id="t18_1624_1022"
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
                                                            .wantToBeATcDetail
                                                            .jouneyFrom
                                                    }
                                                </span>
                                            </div>

                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/07fcf6304480f43a19340f89754a1a98c88caa77.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_1624_1023"
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
                                                id="t18_1624_1024"
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
                                                    id="t18_1624_1025"
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
                                                    id="t18_1624_1026"
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
                                                            .wantToBeATcDetail
                                                            .jouneyto
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1624_1243"
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
                                        {dl.changes.wantToBeATcDetail.stop1 ==
                                            'No Info' &&
                                        dl.changes.wantToBeATcDetail.stop2 ==
                                            'No Info' ? null : (
                                            <div
                                                id="t18_1624_1027"
                                                style={{
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display:
                                                        dl.changes
                                                            .wantToBeATcDetail
                                                            .tickedBookedVisible,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                }}
                                            >
                                                <div
                                                    id="t18_1624_1028"
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
                                                        id="t18_1624_1029"
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
                                                    id="t18_1624_1030"
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
                                                    {dl.changes
                                                        .wantToBeATcDetail
                                                        .stop1 ==
                                                    'No Info' ? null : (
                                                        <div
                                                            id="t18_1624_1031"
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
                                                                id="t18_1624_1032"
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
                                                                id="t18_1624_1033"
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
                                                                        .wantToBeATcDetail
                                                                        .stop1
                                                                }
                                                            </span>
                                                        </div>
                                                    )}

                                                    {dl.changes
                                                        .wantToBeATcDetail
                                                        .stop2 ==
                                                    'No Info' ? null : (
                                                        <div
                                                            id="t18_1624_1034"
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
                                                                id="t18_1624_1035"
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
                                                                id="t18_1624_1036"
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
                                                                        .wantToBeATcDetail
                                                                        .stop2
                                                                }
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                        {/* <div
                                            id="t18_1624_1027"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display:
                                                    dl.changes.wantToBeATcDetail
                                                        .tickedBookedVisible,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_1624_1028"
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
                                                    marginBottom: 4,
                                                }}
                                            >
                                                <span
                                                    id="t18_1624_1029"
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
                                                id="t18_1624_1030"
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
                                                <div
                                                    id="t18_1624_1031"
                                                    style={{
                                                        height: 100,
                                                        width: 250,
                                                        borderRadius: 15,
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
                                                        id="t18_1624_1032"
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
                                                        Stop 1:
                                                    </span>

                                                    <span
                                                        id="t18_1624_1033"
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
                                                                .wantToBeATcDetail
                                                                .stop1
                                                        }
                                                    </span>
                                                </div>

                                                <div
                                                    id="t18_1624_1034"
                                                    style={{
                                                        height: 100,
                                                        width: 250,
                                                        borderRadius: 15,
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
                                                        id="t18_1624_1035"
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
                                                        Stop 2:
                                                    </span>

                                                    <span
                                                        id="t18_1624_1036"
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
                                                                .wantToBeATcDetail
                                                                .stop2
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </div> */}

                                        <div
                                            id="t18_1624_1242"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display:
                                                    dl.changes.wantToBeATcDetail
                                                        .ticketYetToBookVisible,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_1624_1237"
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
                                                    id="t18_1624_1238"
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
                                                id="t18_1624_1239"
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
                                                    {dl.changes.wantToBeATcDetail.preferedAirlines.map(
                                                        (item, index) => {
                                                            return (
                                                                <div>
                                                                    <MmArrayCompSs
                                                                        {...item}
                                                                        {...dl
                                                                            .changes
                                                                            .wantToBeATcDetail
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
                                    id="t18_1624_1037"
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
                                        id="t18_1624_1038"
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
                                            id="t18_1624_1039"
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
                                        id="t18_1624_1040"
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
                                                dl.changes.wantToBeATcDetail._id
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
                                                id="t18_1624_1041"
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
                                            id="t18_1624_1042"
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
export default Wantedtcdetails_2
