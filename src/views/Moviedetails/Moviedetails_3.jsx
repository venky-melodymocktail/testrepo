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
import MmBlogCard from '../../components/MmBlogCard.jsx'
import MmFooter from '../../components/MmFooter.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmBlogCardMd from '../../components/MmBlogCardMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmBlogCardXs from '../../components/MmBlogCardXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'

const Moviedetails_3 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 620
            const element = document.getElementById('t18_352_2348')
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
                id="t18_352_2348"
                style={{
                    width: 620,
                    backgroundColor: 'rgba(255,255,255,1.00)',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
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
                <MmHeaderS
                    {...dl.changes.userDetail}
                    onChangeAddress={(val) => {
                        dl.functions.modalsPlugin.openModal('AddressPopupS')
                    }}
                    onClickMenu={(val) => {}}
                    onLogIn={(val) => {
                        dl.functions.viewsPlugin.showView('login')
                    }}
                    onClickProfile={(val) => {
                        dl.functions.viewsPlugin.showView('profile')
                        var currentPath = dl.functions.common.getLastPath()
                        dl.functions.onLoadFunctions[currentPath]()
                    }}
                />

                <div
                    id="t18_352_2351"
                    style={{
                        width: 620,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        paddingTop: 20,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_1766_9"
                        style={{
                            width: 620,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: 'flex',
                            paddingTop: 20,
                            paddingBottom: 30,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_1766_10"
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
                            {dl.changes.movieDetail.imageurl
                                ?.slice(4, -1)
                                .trim() != '' ? (
                                <img
                                    id="t18_1766_11"
                                    style={{
                                        height: 427,
                                        width: 569,
                                        borderTopLeftRadius: 12,
                                        borderTopRightRadius: 12,
                                        display: 'flex',
                                        borderWidth: 0,
                                        marginTop: 0,
                                    }}
                                    src={dl.changes.movieDetail.imageurl
                                        ?.slice(4, -1)
                                        .trim()}
                                ></img>
                            ) : (
                                <></>
                            )}

                            <div
                                id="t18_1766_12"
                                style={{
                                    width: 569,
                                    borderBottomLeftRadius: 12,
                                    borderBottomRightRadius: 12,
                                    flexDirection: 'row',
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
                                    id="t18_1766_13"
                                    style={{
                                        height: 498,
                                        width: 569,
                                        borderBottomLeftRadius: 12,
                                        borderBottomRightRadius: 12,
                                        backgroundColor:
                                            'rgba(248,246,246,1.00)',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        paddingTop: 10,
                                        paddingBottom: 10,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                    }}
                                >
                                    <div
                                        id="t18_1766_14"
                                        style={{
                                            height: 421,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingTop: 10,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 12.5,
                                        }}
                                    >
                                        <div
                                            id="t18_1766_15"
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
                                            <span
                                                id="t18_1766_16"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 24,
                                                    fontWeight: 600,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '29.045454025268555px',
                                                    textAlign: 'center',
                                                    marginTop: 0,
                                                    marginBottom: 7,
                                                }}
                                            >
                                                {dl.changes.movieDetail.title}
                                            </span>

                                            <MaterialRating
                                                dataSource={
                                                    dl.changes.movieDetail
                                                        .ratingProps
                                                }
                                            />

                                            <div
                                                id="t18_1766_23"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 7,
                                                    marginBottom: 7,
                                                }}
                                            >
                                                <span
                                                    id="t18_1766_24"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 13,
                                                        fontWeight: 500,
                                                        color: 'rgba(113,113,113,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '15.732954025268555px',
                                                        textAlign: 'center',
                                                        marginLeft: 0,
                                                        marginRight: 5,
                                                    }}
                                                >
                                                    Genre:
                                                </span>

                                                <span
                                                    id="t18_1766_25"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 15,
                                                        fontWeight: 600,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '18.15340805053711px',
                                                        textAlign: 'center',
                                                        marginLeft: 5,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    {
                                                        dl.changes.movieDetail
                                                            .genre
                                                    }
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1766_26"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-end',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 7,
                                                    marginBottom: 7,
                                                }}
                                            >
                                                <span
                                                    id="t18_1766_27"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 13,
                                                        fontWeight: 500,
                                                        color: 'rgba(113,113,113,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '15.732954025268555px',
                                                        textAlign: 'center',
                                                        marginLeft: 0,
                                                        marginRight: 5,
                                                    }}
                                                >
                                                    Language:
                                                </span>

                                                <span
                                                    id="t18_1766_28"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 15,
                                                        fontWeight: 600,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '18.15340805053711px',
                                                        textAlign: 'center',
                                                        marginLeft: 5,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    {
                                                        dl.changes.movieDetail
                                                            .language
                                                    }
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1766_29"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 7,
                                                    marginBottom: 7,
                                                }}
                                            >
                                                <span
                                                    id="t18_1766_30"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 13,
                                                        fontWeight: 500,
                                                        color: 'rgba(113,113,113,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '15.732954025268555px',
                                                        textAlign: 'center',
                                                        marginLeft: 0,
                                                        marginRight: 5,
                                                    }}
                                                >
                                                    Category:
                                                </span>

                                                <span
                                                    id="t18_1766_31"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 15,
                                                        fontWeight: 600,
                                                        color: 'rgba(0,0,0,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '18.15340805053711px',
                                                        textAlign: 'center',
                                                        marginLeft: 5,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    {
                                                        dl.changes.movieDetail
                                                            .category
                                                    }
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1766_32"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 7,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_1766_33"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 13,
                                                        fontWeight: 500,
                                                        color: 'rgba(113,113,113,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '15.732954025268555px',
                                                        textAlign: 'center',
                                                        marginLeft: 0,
                                                        marginRight: 5,
                                                    }}
                                                >
                                                    Available on:
                                                </span>

                                                <div
                                                    id="t18_1766_34"
                                                    style={{
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
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
                                                    {dl.changes.movieDetail.availableOn_1
                                                        ?.slice(4, -1)
                                                        .trim() != '' ? (
                                                        <img
                                                            id="t18_1766_37"
                                                            style={{
                                                                height: 29,
                                                                width: 28,
                                                                display: 'flex',
                                                                borderWidth: 0,
                                                                marginLeft: 0,
                                                                marginRight: 4,
                                                            }}
                                                            src={dl.changes.movieDetail.availableOn_1
                                                                ?.slice(4, -1)
                                                                .trim()}
                                                        ></img>
                                                    ) : (
                                                        <></>
                                                    )}

                                                    {dl.changes.movieDetail.availableOn_2
                                                        ?.slice(4, -1)
                                                        .trim() != '' ? (
                                                        <img
                                                            id="t18_1766_38"
                                                            style={{
                                                                height: 28,
                                                                width: 27,
                                                                display: 'flex',
                                                                borderWidth: 0,
                                                                marginLeft: 4,
                                                                marginRight: 4,
                                                            }}
                                                            src={dl.changes.movieDetail.availableOn_2
                                                                ?.slice(4, -1)
                                                                .trim()}
                                                        ></img>
                                                    ) : (
                                                        <></>
                                                    )}

                                                    {dl.changes.movieDetail.availableOn_3
                                                        ?.slice(4, -1)
                                                        .trim() != '' ? (
                                                        <img
                                                            id="t18_1919_6"
                                                            style={{
                                                                height: 28,
                                                                width: 27,
                                                                display: 'flex',
                                                                borderWidth: 0,
                                                                marginLeft: 4,
                                                                marginRight: 4,
                                                            }}
                                                            src={dl.changes.movieDetail.availableOn_3
                                                                ?.slice(4, -1)
                                                                .trim()}
                                                        ></img>
                                                    ) : (
                                                        <></>
                                                    )}

                                                    {dl.changes.movieDetail.availableOn_4
                                                        ?.slice(4, -1)
                                                        .trim() != '' ? (
                                                        <img
                                                            id="t18_1919_7"
                                                            style={{
                                                                height: 28,
                                                                width: 27,
                                                                display: 'flex',
                                                                borderWidth: 0,
                                                                marginLeft: 4,
                                                                marginRight: 4,
                                                            }}
                                                            src={dl.changes.movieDetail.availableOn_4
                                                                ?.slice(4, -1)
                                                                .trim()}
                                                        ></img>
                                                    ) : (
                                                        <></>
                                                    )}

                                                    {dl.changes.movieDetail.availableOn_5
                                                        ?.slice(4, -1)
                                                        .trim() != '' ? (
                                                        <img
                                                            id="t18_1919_8"
                                                            style={{
                                                                height: 28,
                                                                width: 27,
                                                                display: 'flex',
                                                                borderWidth: 0,
                                                                marginLeft: 4,
                                                                marginRight: 4,
                                                            }}
                                                            src={dl.changes.movieDetail.availableOn_5
                                                                ?.slice(4, -1)
                                                                .trim()}
                                                        ></img>
                                                    ) : (
                                                        <></>
                                                    )}

                                                    {dl.changes.movieDetail.availableOn_6
                                                        ?.slice(4, -1)
                                                        .trim() != '' ? (
                                                        <img
                                                            id="t18_1919_9"
                                                            style={{
                                                                height: 28,
                                                                width: 27,
                                                                display: 'flex',
                                                                borderWidth: 0,
                                                                marginLeft: 4,
                                                                marginRight: 0,
                                                            }}
                                                            src={dl.changes.movieDetail.availableOn_6
                                                                ?.slice(4, -1)
                                                                .trim()}
                                                        ></img>
                                                    ) : (
                                                        <></>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1766_39"
                                            style={{
                                                width: 524,
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 12,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <span
                                                id="t18_1766_40"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 15,
                                                    fontWeight: 400,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '22px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                {
                                                    dl.changes.movieDetail
                                                        .description
                                                }
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1766_41"
                                        style={{
                                            height: 28,
                                            width: 500,
                                            borderRadius: 7,
                                            backgroundColor:
                                                'rgba(255,255,255,1.00)',
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
                                            marginTop: 12.5,
                                            marginBottom: 0,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            var url =
                                                dl.changes.movieDetail
                                                    .trailerURL
                                            if (
                                                !url.startsWith('http://') &&
                                                !url.startsWith('https://')
                                            ) {
                                                url = 'https://' + url
                                            }
                                            window.open(url, '_blank')
                                        }}
                                    >
                                        <span
                                            id="t18_1766_42"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 15,
                                                fontWeight: 700,
                                                color: 'rgba(186,15,23,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '18.15340805053711px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            Watch Trailer
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    id="t18_353_2431"
                    style={{
                        width: 600,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
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
                    {dl.changes.addSpaces.MovieDetailsAd.sm
                        ?.slice(4, -1)
                        .trim() != '' ? (
                        <img
                            id="t18_353_2429"
                            style={{
                                height: 244,
                                width: 570,
                                display: 'flex',
                                borderWidth: 0,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                if (
                                    dl.changes.addSpaces['MovieDetailsAd']
                                        .redirectURL
                                ) {
                                    window.open(
                                        dl.changes.addSpaces['MovieDetailsAd']
                                            .redirectURL,
                                        '_blank'
                                    )
                                }
                            }}
                            src={dl.changes.addSpaces.MovieDetailsAd.sm
                                ?.slice(4, -1)
                                .trim()}
                        ></img>
                    ) : (
                        <></>
                    )}
                </div>

                <div
                    id="t18_534_97"
                    style={{
                        width: 620,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        paddingTop: 30,
                        paddingBottom: 50,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <span
                        id="t18_534_98"
                        style={{
                            fontFamily: 'Inter',
                            fontSize: 24,
                            fontWeight: 700,
                            color: 'rgba(186,15,23,1)',
                            letterSpacing: 0,
                            lineHeight: '29.045454025268555px',
                            textAlign: 'left',
                            marginTop: 0,
                            marginBottom: 15,
                        }}
                    >
                        Movie blogs
                    </span>

                    <div
                        id="t18_701_482"
                        style={{
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 15,
                            marginBottom: 15,
                        }}
                    >
                        <MmBlogCard
                            {...dl.changes.moviesBlogList.blog1}
                            onCreateBookmark={(val) => {
                                val.stopPropagation()
                                var userToken =
                                    dl.functions.common.getCookie('userToken')
                                if (userToken) {
                                    var blogId =
                                        dl.changes.moviesBlogList.blog1._id
                                    var body = {
                                        serviceType: 'blogs',
                                        bookmarkedObjectId: blogId,
                                    }
                                    dl.functions.createBookmark(body)
                                } else {
                                    dl.functions.modalsPlugin.openModal(
                                        'loginS'
                                    )
                                }
                            }}
                            onRemoveBookmark={(val) => {}}
                            onClick={(val) => {
                                var blogId = dl.changes.moviesBlogList.blog1._id
                                dl.functions.common.relativeRedirect(
                                    `blogdetails?blogId=${blogId}`,
                                    true
                                )
                            }}
                        />

                        <MmBlogCard
                            {...dl.changes.moviesBlogList.blog2}
                            onCreateBookmark={(val) => {
                                val.stopPropagation()
                                var userToken =
                                    dl.functions.common.getCookie('userToken')
                                if (userToken) {
                                    var blogId =
                                        dl.changes.moviesBlogList.blog2._id
                                    var body = {
                                        serviceType: 'blogs',
                                        bookmarkedObjectId: blogId,
                                    }
                                    dl.functions.createBookmark(body)
                                } else {
                                    dl.functions.modalsPlugin.openModal(
                                        'loginS'
                                    )
                                }
                            }}
                            onRemoveBookmark={(val) => {}}
                            onClick={(val) => {
                                var blogId = dl.changes.moviesBlogList.blog2._id
                                dl.functions.common.relativeRedirect(
                                    `blogdetails?blogId=${blogId}`,
                                    true
                                )
                            }}
                        />

                        <MmBlogCard
                            {...dl.changes.moviesBlogList.blog3}
                            onCreateBookmark={(val) => {
                                val.stopPropagation()
                                var userToken =
                                    dl.functions.common.getCookie('userToken')
                                if (userToken) {
                                    var blogId =
                                        dl.changes.moviesBlogList.blog3._id
                                    var body = {
                                        serviceType: 'blogs',
                                        bookmarkedObjectId: blogId,
                                    }
                                    dl.functions.createBookmark(body)
                                } else {
                                    dl.functions.modalsPlugin.openModal(
                                        'loginS'
                                    )
                                }
                            }}
                            onRemoveBookmark={(val) => {}}
                            onClick={(val) => {
                                var blogId = dl.changes.moviesBlogList.blog3._id
                                dl.functions.common.relativeRedirect(
                                    `blogdetails?blogId=${blogId}`,
                                    true
                                )
                            }}
                        />
                    </div>

                    <div
                        id="t18_534_120"
                        style={{
                            height: 17,
                            width: 90,
                            borderRadius: 7,
                            backgroundColor: 'rgba(186,15,23,1.00)',
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
                            marginTop: 15,
                            marginBottom: 0,
                            cursor: 'pointer',
                        }}
                        onClick={(e) => {
                            dl.functions.viewsPlugin.showView('blogs')
                            var currentPath = dl.functions.common.getLastPath()
                            dl.functions.onLoadFunctions[currentPath]()
                        }}
                    >
                        <span
                            id="t18_534_121"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 15,
                                fontWeight: 700,
                                color: 'rgba(255,255,255,1)',
                                letterSpacing: 0,
                                lineHeight: '18.15340805053711px',
                                textAlign: 'left',
                            }}
                        >
                            View All
                        </span>
                    </div>
                </div>

                <div
                    id="t18_361_3412"
                    style={{
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        paddingTop: 30,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginBottom: 0,
                    }}
                >
                    <MmFooterS />
                </div>
            </div>
        </div>
    )
})
export default Moviedetails_3
