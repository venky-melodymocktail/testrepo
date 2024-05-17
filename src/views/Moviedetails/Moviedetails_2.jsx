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

const Moviedetails_2 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 900
            const element = document.getElementById('t18_344_1962')
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
                id="t18_344_1962"
                style={{
                    width: 900,
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
                <MmHeaderMd
                    {...dl.changes.userDetail}
                    onChangeAddress={(val) => {
                        dl.functions.modalsPlugin.openModal('AddressPopupLg')
                    }}
                    onClickMenu={(val) => {
                        dl.functions.modalsPlugin.openModal('navigationMd')
                    }}
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
                    id="t18_344_1965"
                    style={{
                        width: 900,
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        display: 'flex',
                        paddingTop: 63,
                        paddingBottom: 73,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_344_1966"
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
                        {dl.changes.movieDetail.imageurl?.slice(4, -1).trim() !=
                        '' ? (
                            <img
                                id="t18_344_1967"
                                style={{
                                    height: 588,
                                    width: 813,
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
                            id="t18_344_1969"
                            style={{
                                width: 763,
                                borderBottomLeftRadius: 12,
                                borderBottomRightRadius: 12,
                                backgroundColor: 'rgba(248,246,246,1.00)',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                display: 'flex',
                                paddingLeft: 30,
                                paddingRight: 20,
                                paddingTop: 30,
                                paddingBottom: 30,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginBottom: 0,
                            }}
                        >
                            <div
                                id="t18_344_1970"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 12.5,
                                }}
                            >
                                <div
                                    id="t18_344_1971"
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
                                        id="t18_344_1972"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 24,
                                            fontWeight: 600,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '29.045454025268555px',
                                            textAlign: 'left',
                                            marginTop: 0,
                                            marginBottom: 7,
                                        }}
                                    >
                                        {dl.changes.movieDetail.title}
                                    </span>

                                    <MaterialRating
                                        dataSource={
                                            dl.changes.movieDetail.ratingProps
                                        }
                                    />

                                    <div
                                        id="t18_344_1979"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 7,
                                            marginBottom: 7,
                                        }}
                                    >
                                        <span
                                            id="t18_344_1980"
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
                                            id="t18_344_1981"
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
                                            {dl.changes.movieDetail.genre}
                                        </span>
                                    </div>

                                    <div
                                        id="t18_344_1982"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-end',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 7,
                                            marginBottom: 7,
                                        }}
                                    >
                                        <span
                                            id="t18_344_1983"
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
                                            id="t18_344_1984"
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
                                            {dl.changes.movieDetail.language}
                                        </span>
                                    </div>

                                    <div
                                        id="t18_344_1985"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 7,
                                            marginBottom: 7,
                                        }}
                                    >
                                        <span
                                            id="t18_344_1986"
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
                                            id="t18_344_1987"
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
                                            {dl.changes.movieDetail.category}
                                        </span>
                                    </div>

                                    <div
                                        id="t18_344_1988"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 7,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_344_1989"
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
                                            id="t18_344_1990"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
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
                                                    id="t18_344_1993"
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
                                                    id="t18_344_1994"
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
                                                    id="t18_1919_2"
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
                                                    id="t18_1919_3"
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
                                                    id="t18_1919_4"
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
                                                    id="t18_1919_5"
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
                                    id="t18_344_1995"
                                    style={{
                                        width: 744,
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
                                        id="t18_344_1996"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 15,
                                            fontWeight: 400,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '20px',
                                            textAlign: 'left',
                                        }}
                                    >
                                        {dl.changes.movieDetail.description}
                                    </span>
                                </div>
                            </div>

                            <div
                                id="t18_344_1997"
                                style={{
                                    height: 20,
                                    width: 723,
                                    borderRadius: 7,
                                    backgroundColor: 'rgba(255,255,255,1.00)',
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
                                    var url = dl.changes.movieDetail.trailerURL
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
                                    id="t18_344_1998"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 15,
                                        fontWeight: 700,
                                        color: 'rgba(186,15,23,1)',
                                        letterSpacing: 0,
                                        lineHeight: '18.15340805053711px',
                                        textAlign: 'center',
                                    }}
                                >
                                    Watch Trailer
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    id="t18_345_2097"
                    style={{
                        width: 900,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        paddingTop: 10,
                        paddingBottom: 10,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    {dl.changes.addSpaces.MovieDetailsAd.md
                        ?.slice(4, -1)
                        .trim() != '' ? (
                        <img
                            id="t18_344_2000"
                            style={{
                                height: 312,
                                width: 788,
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
                            src={dl.changes.addSpaces.MovieDetailsAd.md
                                ?.slice(4, -1)
                                .trim()}
                        ></img>
                    ) : (
                        <></>
                    )}
                </div>

                <div
                    id="t18_534_37"
                    style={{
                        width: 900,
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
                        id="t18_534_38"
                        style={{
                            fontFamily: 'Inter',
                            fontSize: 30,
                            fontWeight: 700,
                            color: 'rgba(186,15,23,1)',
                            letterSpacing: 0,
                            lineHeight: '36.30681610107422px',
                            textAlign: 'left',
                            marginTop: 0,
                            marginBottom: 15,
                        }}
                    >
                        Movie blogs
                    </span>

                    <div
                        id="t18_701_448"
                        style={{
                            flexDirection: 'row',
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
                        <MmBlogCardMd
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
                                        'loginLg'
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

                        <MmBlogCardMd
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
                                        'loginLg'
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

                        <MmBlogCardMd
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
                                        'loginLg'
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
                        id="t18_534_70"
                        style={{
                            height: 24,
                            width: 133,
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
                            id="t18_534_71"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 20,
                                fontWeight: 700,
                                color: 'rgba(255,255,255,1)',
                                letterSpacing: 0,
                                lineHeight: '24.204544067382812px',
                                textAlign: 'left',
                            }}
                        >
                            View All
                        </span>
                    </div>
                </div>

                <MmFooterMd />
            </div>
        </div>
    )
})
export default Moviedetails_2
