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
import MmComment from '../../components/MmComment.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmCommentS from '../../components/MmCommentS.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmBlogCommentS from '../../components/MmBlogCommentS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmCommentXs from '../../components/MmCommentXs.jsx'

const Blogdetails_4 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 400
            const element = document.getElementById('t18_338_15')
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
                backgroundColor: 'rgba(255,255,255,1.00)',
            }}
        >
            <div
                id="t18_338_15"
                style={{
                    width: 400,
                    backgroundColor: 'rgba(255,255,255,1.00)',
                    flexDirection: 'column',
                    alignItems: 'center',
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
                <MmHeaderXs
                    {...dl.changes.userDetail}
                    onChangeAddress={(val) => {
                        dl.functions.modalsPlugin.openModal('AddressPopupS')
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

                        dl.functions.modalsPlugin.openModal('navigationXs')
                    }}
                />

                <div
                    id="t18_338_40"
                    style={{
                        width: 400,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        paddingTop: 30,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_338_41"
                        style={{
                            width: 336,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: 'flex',
                            paddingBottom: 20,
                            position: 'relative',
                            overflow: 'hidden',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_338_42"
                            style={{
                                width: 336,
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
                                id="t18_1982_7"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                }}
                            >
                                <div
                                    id="t18_338_43"
                                    style={{
                                        width: 336,
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
                                        id="t18_338_46"
                                        style={{
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
                                            id="t18_338_47"
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
                                            <span
                                                id="t18_338_48"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 16,
                                                    fontWeight: 700,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '19.363636016845703px',
                                                    textAlign: 'left',
                                                    marginTop: 0,
                                                    marginBottom: 3.5,
                                                }}
                                            >
                                                {dl.changes.blogDetail.title}
                                            </span>

                                            <span
                                                id="t18_338_53"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 14,
                                                    fontWeight: 400,
                                                    color: 'rgba(158,156,156,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '16.94318199157715px',
                                                    textAlign: 'left',
                                                    marginTop: 3.5,
                                                    marginBottom: 3.5,
                                                }}
                                            >
                                                {dl.changes.blogDetail.cOn}
                                            </span>

                                            <div
                                                id="t18_338_49"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 3.5,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <div
                                                    id="t18_885_6544"
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
                                                            id="t18_885_6545"
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
                                                                    window
                                                                        .location
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
                                                        id="t18_885_6546"
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
                                                            marginLeft: 3.5,
                                                            marginRight: 0,
                                                        }}
                                                    >
                                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/f86479c5f13f179327df6addde448bbc85be06e7.png' !=
                                                        '' ? (
                                                            <img
                                                                id="t18_885_6547"
                                                                style={{
                                                                    height: 15,
                                                                    width: 15.0849609375,
                                                                    display:
                                                                        'flex',
                                                                    borderWidth: 0,
                                                                    marginLeft: 0,
                                                                    marginRight: 3.5,
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
                                                                id="t18_885_6548"
                                                                style={{
                                                                    height: 15,
                                                                    width: 15,
                                                                    display:
                                                                        'flex',
                                                                    borderWidth: 0,
                                                                    marginLeft: 3.5,
                                                                    marginRight: 3.5,
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
                                                                id="t18_885_6549"
                                                                style={{
                                                                    height: 15,
                                                                    width: 15,
                                                                    display:
                                                                        'flex',
                                                                    borderWidth: 0,
                                                                    marginLeft: 3.5,
                                                                    marginRight: 3.5,
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
                                                                id="t18_885_6550"
                                                                style={{
                                                                    height: 15,
                                                                    width: 15,
                                                                    display:
                                                                        'flex',
                                                                    borderWidth: 0,
                                                                    marginLeft: 3.5,
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
                                        style={{
                                            width: 336,
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingTop: 10,
                                            paddingBottom: 10,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 10,
                                            marginBottom: 0,
                                        }}
                                    >
                                        {
                                            <div
                                                style={{ width: '100%' }}
                                                dangerouslySetInnerHTML={{
                                                    __html: dl.changes
                                                        .blogDetail.description,
                                                }}
                                            />
                                        }
                                    </div>
                                </div>

                                {dl.changes.addSpaces.BlogDetailsAd1.xs
                                    ?.slice(4, -1)
                                    .trim() != '' ? (
                                    <img
                                        id="t18_1982_6"
                                        style={{
                                            height: 135,
                                            width: 340,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginTop: 10,
                                            marginBottom: 0,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            if (
                                                dl.changes.addSpaces[
                                                    'BlogDetailsAd1'
                                                ].redirectURL
                                            ) {
                                                window.open(
                                                    dl.changes.addSpaces[
                                                        'BlogDetailsAd1'
                                                    ].redirectURL,
                                                    '_blank'
                                                )
                                            }
                                        }}
                                        src={dl.changes.addSpaces.BlogDetailsAd1.xs
                                            ?.slice(4, -1)
                                            .trim()}
                                    ></img>
                                ) : (
                                    <></>
                                )}
                            </div>

                            <div
                                id="t18_1982_9"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginBottom: 0,
                                }}
                            >
                                <div
                                    id="t18_338_62"
                                    style={{
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
                                        id="t18_338_63"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 11,
                                        }}
                                    >
                                        <div
                                            id="t18_338_64"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 12,
                                            }}
                                        >
                                            <div
                                                id="t18_338_65"
                                                style={{
                                                    width: 316,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    paddingLeft: 10,
                                                    paddingRight: 10,
                                                    paddingTop: 20,
                                                    paddingBottom: 13,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    borderColor:
                                                        'rgba(207,206,206,1)',
                                                    borderBottomWidth: 1,
                                                    borderStyle: 'solid',
                                                    marginTop: 0,
                                                    marginBottom: 22,
                                                }}
                                            >
                                                <span
                                                    id="t18_338_66"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 15,
                                                        fontWeight: 500,
                                                        color: 'rgba(112,112,112,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '18.15340805053711px',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    {dl.changes.noOfComments}
                                                </span>
                                            </div>

                                            <textarea
                                                id="t18_338_67"
                                                placeholder="Add your comment here..."
                                                value={dl.changes.newComment}
                                                style={{
                                                    height: 64,
                                                    width: 316,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    paddingLeft: 10,
                                                    paddingRight: 10,
                                                    paddingTop: 12,
                                                    paddingBottom: 10,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 1,
                                                    borderColor:
                                                        'rgba(207,206,206,1)',
                                                    borderStyle: 'solid',
                                                    marginTop: 22,
                                                    marginBottom: 0,
                                                    cursor: 'pointer',
                                                    itemSpacing: 10,
                                                    fontFamily: 'Inter',
                                                    fontSize: 13,
                                                    color: 'rgba(184,178,178,1)',
                                                    fontWeight: 400,
                                                    textAlign: 'left',
                                                }}
                                                onChange={(val) => {
                                                    val = val.target.value
                                                    dl.changes.newComment = val
                                                }}
                                            ></textarea>
                                        </div>

                                        <div
                                            id="t18_338_69"
                                            style={{
                                                width: 336,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-end',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 12,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <span
                                                id="t18_338_70"
                                                onClick={() => {
                                                    dl.changes.newComment = ''
                                                }}
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 14,
                                                    fontWeight: 600,
                                                    color: 'rgba(113,113,113,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '16.94318199157715px',
                                                    textAlign: 'left',
                                                    marginLeft: 0,
                                                    marginRight: 14.5,
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                Cancel
                                            </span>

                                            <div
                                                id="t18_338_71"
                                                style={{
                                                    height: 10,
                                                    width: 66,
                                                    borderRadius: 5,
                                                    backgroundColor:
                                                        'rgba(244,186,84,1.00)',
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
                                                    marginLeft: 14.5,
                                                    marginRight: 0,
                                                    cursor: 'pointer',
                                                }}
                                                onClick={(e) => {
                                                    var userToken =
                                                        dl.functions.common.getCookie(
                                                            'userToken'
                                                        )
                                                    if (userToken) {
                                                        var params =
                                                            dl.functions.common.getParams()
                                                        var blogId =
                                                            params.blogId

                                                        var body = {
                                                            comment:
                                                                dl.changes
                                                                    .newComment,
                                                            blogId: blogId,
                                                        }
                                                        if (
                                                            body.comment == ''
                                                        ) {
                                                            dl.functions.modalsPlugin.openModal(
                                                                'errorGeneric'
                                                            )
                                                            dl.changes.errorGenericMessages =
                                                                'Plese Enter your comment'
                                                        } else {
                                                            dl.functions.createBlogComment(
                                                                body
                                                            )
                                                        }
                                                    } else {
                                                        dl.functions.modalsPlugin.openModal(
                                                            'loginS'
                                                        )
                                                    }
                                                }}
                                            >
                                                <span
                                                    id="t18_338_72"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 14,
                                                        fontWeight: 600,
                                                        color: 'rgba(38,50,56,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '16.94318199157715px',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    Publish
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_338_73"
                                        style={{
                                            width: 336,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 11,
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
                                            {dl.changes.blogComments.map(
                                                (item, index) => {
                                                    return (
                                                        <div>
                                                            <MmCommentXs
                                                                {...item}
                                                                {...dl.changes
                                                                    .blogComments}
                                                                onClickDelete={(
                                                                    val
                                                                ) => {
                                                                    const run =
                                                                        async () => {
                                                                            var commentId =
                                                                                dl
                                                                                    .changes
                                                                                    .blogComments[
                                                                                    index
                                                                                ]
                                                                                    .commentId
                                                                            var body =
                                                                                {
                                                                                    id: commentId,
                                                                                }
                                                                            var res =
                                                                                await dl.functions.deleteBlogComment(
                                                                                    body
                                                                                )
                                                                            // alert(commentId)
                                                                        }
                                                                    run()
                                                                }}
                                                                onClickReport={(
                                                                    val
                                                                ) => {
                                                                    // var userToken = dl.functions.common.getCookie("userToken")
                                                                    // const run = async() => {
                                                                    //     if(userToken){
                                                                    //         var commentId = dl.changes.blogComments[index].commentId
                                                                    //         var body = {
                                                                    //             "id": commentId,
                                                                    //             "status": "active"
                                                                    //         }
                                                                    //         var res = await dl.functions.reportBlogComment(body)
                                                                    //     }
                                                                    //     else{
                                                                    //         alert("You need to login")
                                                                    //     }
                                                                    // }
                                                                    // run()
                                                                    dl.functions.onReport(
                                                                        dl
                                                                            .changes
                                                                            .blogComments[
                                                                            index
                                                                        ]
                                                                            .commentId,
                                                                        'blogcomments',
                                                                        'small'
                                                                    )
                                                                }}
                                                            />
                                                        </div>
                                                    )
                                                }
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {dl.changes.addSpaces.BlogDetailsAd2.xs
                                    ?.slice(4, -1)
                                    .trim() != '' ? (
                                    <img
                                        id="t18_1982_8"
                                        style={{
                                            height: 135,
                                            width: 340,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginTop: 10,
                                            marginBottom: 0,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            if (
                                                dl.changes.addSpaces[
                                                    'BlogDetailsAd2'
                                                ].redirectURL
                                            ) {
                                                window.open(
                                                    dl.changes.addSpaces[
                                                        'BlogDetailsAd2'
                                                    ].redirectURL,
                                                    '_blank'
                                                )
                                            }
                                        }}
                                        src={dl.changes.addSpaces.BlogDetailsAd2.xs
                                            ?.slice(4, -1)
                                            .trim()}
                                    ></img>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <MmFooterXs />
            </div>
        </div>
    )
})
export default Blogdetails_4
