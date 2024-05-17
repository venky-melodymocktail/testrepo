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

const Moviedetails_1 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_165_289')
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
                id="t18_165_289"
                style={{
                    width: 1440,
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
                <MmHeader
                    {...dl.changes.userDetail}
                    onChangeAddress={(val) => {
                        dl.functions.modalsPlugin.openModal('AddressPopupLg')
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
                        var currentPath = dl.functions.common.getLastPath()
                        dl.functions.onLoadFunctions[currentPath]()
                    }}
                />

                <div
                    id="t18_362_3557"
                    style={{
                        width: 1440,
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
                        id="t18_362_3524"
                        style={{
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginLeft: 0,
                            marginRight: 19.5,
                        }}
                    >
                        {dl.changes.movieDetail.imageurl?.slice(4, -1).trim() !=
                        '' ? (
                            <img
                                id="t18_362_3525"
                                style={{
                                    height: 500,
                                    width: 813,
                                    borderTopLeftRadius: 12,
                                    borderBottomLeftRadius: 12,
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
                            id="t18_362_3527"
                            style={{
                                width: 763,
                                borderTopRightRadius: 12,
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
                                id="t18_362_3528"
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
                                    id="t18_362_3529"
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
                                        id="t18_362_3530"
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
                                        id="t18_362_3537"
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
                                            id="t18_362_3538"
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
                                            id="t18_362_3539"
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
                                        id="t18_362_3540"
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
                                            id="t18_362_3541"
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
                                            id="t18_362_3542"
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
                                        id="t18_362_3543"
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
                                            id="t18_362_3544"
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
                                            id="t18_362_3545"
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
                                        id="t18_362_3546"
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
                                            id="t18_362_3547"
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
                                            id="t18_362_3548"
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
                                            <div
                                                id="t18_362_3549"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-end',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 4,
                                                }}
                                            >
                                                {dl.changes.movieDetail.availableOn_1
                                                    ?.slice(4, -1)
                                                    .trim() != '' ? (
                                                    <img
                                                        id="t18_362_3550"
                                                        style={{
                                                            height: 27,
                                                            width: 26,
                                                            display: 'flex',
                                                            borderWidth: 0,
                                                        }}
                                                        src={dl.changes.movieDetail.availableOn_1
                                                            ?.slice(4, -1)
                                                            .trim()}
                                                    ></img>
                                                ) : (
                                                    <></>
                                                )}
                                            </div>

                                            <div
                                                id="t18_660_9"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-end',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 4,
                                                    marginRight: 4,
                                                }}
                                            >
                                                {dl.changes.movieDetail.availableOn_2
                                                    ?.slice(4, -1)
                                                    .trim() != '' ? (
                                                    <img
                                                        id="t18_660_10"
                                                        style={{
                                                            height: 27,
                                                            width: 26,
                                                            display: 'flex',
                                                            borderWidth: 0,
                                                        }}
                                                        src={dl.changes.movieDetail.availableOn_2
                                                            ?.slice(4, -1)
                                                            .trim()}
                                                    ></img>
                                                ) : (
                                                    <></>
                                                )}
                                            </div>

                                            {dl.changes.movieDetail.availableOn_3
                                                ?.slice(4, -1)
                                                .trim() != '' ? (
                                                <img
                                                    id="t18_660_7"
                                                    style={{
                                                        height: 29,
                                                        width: 28,
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
                                                    id="t18_362_3551"
                                                    style={{
                                                        height: 29,
                                                        width: 28,
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
                                                    id="t18_660_8"
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
                                                    id="t18_362_3552"
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
                                    id="t18_362_3553"
                                    style={{
                                        width: 753,
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
                                        id="t18_362_3554"
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
                                id="t18_362_3555"
                                className={' MovieTrailerButton'}
                                style={{
                                    height: 28,
                                    width: 733,
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
                                    id="t18_362_3556"
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

                    <div
                        id="t18_362_3591"
                        style={{
                            height: 500,
                            width: 355,
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginLeft: 19.5,
                            marginRight: 0,
                            cursor: 'pointer',
                            backgroundImage: '',
                        }}
                        onClick={(e) => {
                            // if(dl.changes.addSpaces["MovieDetailsAd"].redirectURL){
                            //     window.open(dl.changes.addSpaces["MovieDetailsAd"].redirectURL, '_blank');
                            // }
                        }}
                    >
                        <div
                            id="t18_656_2"
                            style={{
                                height: 500,
                                width: 355,
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            {dl.changes.addSpaces.MovieDetailsAd.lg
                                ?.slice(4, -1)
                                .trim() != '' ? (
                                <img
                                    id="t18_362_3592"
                                    style={{
                                        height: 500,
                                        width: 355,
                                        display: 'flex',
                                        borderWidth: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        if (
                                            dl.changes.addSpaces[
                                                'MovieDetailsAd'
                                            ].redirectURL
                                        ) {
                                            window.open(
                                                dl.changes.addSpaces[
                                                    'MovieDetailsAd'
                                                ].redirectURL,
                                                '_blank'
                                            )
                                        }
                                    }}
                                    src={dl.changes.addSpaces.MovieDetailsAd.lg
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
                    id="t18_165_235"
                    style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_165_236"
                        style={{
                            width: 1440,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingTop: 20,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 0,
                            marginBottom: 29,
                        }}
                    >
                        <div
                            id="t18_701_418"
                            style={{
                                width: 1440,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingTop: 45,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <span
                                id="t18_701_419"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 40,
                                    fontWeight: 700,
                                    color: 'rgba(186,15,23,1)',
                                    letterSpacing: 0,
                                    lineHeight: '48.409088134765625px',
                                    textAlign: 'left',
                                    marginTop: 0,
                                    marginBottom: 22,
                                }}
                            >
                                Movie Blogs
                            </span>

                            <div
                                id="t18_701_420"
                                className={' blogContainer'}
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 22,
                                    marginBottom: 0,
                                }}
                            >
                                <MmBlogCard
                                    {...dl.changes.moviesBlogList.blog1}
                                    onCreateBookmark={(val) => {
                                        val.stopPropagation()
                                        var userToken =
                                            dl.functions.common.getCookie(
                                                'userToken'
                                            )
                                        if (userToken) {
                                            var blogId =
                                                dl.changes.moviesBlogList.blog1
                                                    ._id
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
                                        var blogId =
                                            dl.changes.moviesBlogList.blog1._id
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
                                            dl.functions.common.getCookie(
                                                'userToken'
                                            )
                                        if (userToken) {
                                            var blogId =
                                                dl.changes.moviesBlogList.blog2
                                                    ._id
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
                                        var blogId =
                                            dl.changes.moviesBlogList.blog2._id
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
                                            dl.functions.common.getCookie(
                                                'userToken'
                                            )
                                        if (userToken) {
                                            var blogId =
                                                dl.changes.moviesBlogList.blog3
                                                    ._id
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
                                        var blogId =
                                            dl.changes.moviesBlogList.blog3._id
                                        dl.functions.common.relativeRedirect(
                                            `blogdetails?blogId=${blogId}`,
                                            true
                                        )
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        id="t18_165_263"
                        className={' hovereffectsignIn-btn'}
                        style={{
                            height: 37,
                            width: 168,
                            borderRadius: 10,
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
                            marginTop: 29,
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
                            id="t18_165_264"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 22,
                                fontWeight: 700,
                                color: 'rgba(255,255,255,1)',
                                letterSpacing: 0,
                                lineHeight: '26.625px',
                                textAlign: 'left',
                            }}
                        >
                            View All
                        </span>
                    </div>
                </div>

                <div
                    id="t18_165_265"
                    style={{
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        paddingTop: 10,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginBottom: 0,
                    }}
                >
                    <MmFooter />
                </div>
            </div>
        </div>
    )
})
export default Moviedetails_1
