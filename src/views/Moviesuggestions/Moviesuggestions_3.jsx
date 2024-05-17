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
import MmMovieCard from '../../components/MmMovieCard.jsx'
import MmBlogCard from '../../components/MmBlogCard.jsx'
import MmServiceSelector from '../../components/MmServiceSelector.jsx'
import MmFooter from '../../components/MmFooter.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmMovieCardMd from '../../components/MmMovieCardMd.jsx'
import MmBlogCardMd from '../../components/MmBlogCardMd.jsx'
import MmServiceSelectorMd from '../../components/MmServiceSelectorMd.jsx'
import MmFilterMd from '../../components/MmFilterMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmServiceSelectorS from '../../components/MmServiceSelectorS.jsx'
import MmFilterS from '../../components/MmFilterS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmMovieCardXs from '../../components/MmMovieCardXs.jsx'
import MmBlogCardXs from '../../components/MmBlogCardXs.jsx'
import MmServiceSelectorXs from '../../components/MmServiceSelectorXs.jsx'
import MmFilterXs from '../../components/MmFilterXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'

const Moviesuggestions_3 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 620
            const element = document.getElementById('t18_340_1247')
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
                id="t18_340_1247"
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

                <MmServiceSelectorS {...dl.changes.serviceSelectorMini} />

                <div
                    id="t18_340_1297"
                    style={{
                        height: 78,
                        width: 600,
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
                        borderColor: 'rgba(207,206,206,1)',
                        borderBottomWidth: 1,
                        borderStyle: 'solid',
                    }}
                >
                    <div
                        id="t18_916_10433"
                        style={{
                            height: 50,
                            width: 510,
                            borderRadius: 50,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingLeft: 15,
                            paddingRight: 5,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 1,
                            borderColor: 'rgba(186,15,23,1)',
                            borderStyle: 'solid',
                        }}
                    >
                        <div
                            id="t18_916_10434"
                            style={{
                                width: 428,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 0,
                                marginRight: 5,
                            }}
                        >
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/70f5b72a34765deae5b34e6ad476040b1c4bda4c.png' !=
                            '' ? (
                                <img
                                    id="t18_916_10435"
                                    style={{
                                        height: 16,
                                        width: 16,
                                        display: 'flex',
                                        borderWidth: 0,
                                        marginLeft: 0,
                                        marginRight: 5,
                                    }}
                                    src={
                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/70f5b72a34765deae5b34e6ad476040b1c4bda4c.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}

                            <input
                                id="t18_916_10436"
                                placeholder="Search Movie"
                                value={dl.changes.movieSerachString}
                                style={{
                                    height: 36,
                                    width: 413,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 5,
                                    marginRight: 0,
                                    cursor: 'pointer',
                                    fontFamily: 'Inter',
                                    fontSize: 14,
                                    color: 'rgba(113,113,113,1)',
                                    fontWeight: 400,
                                    textAlign: 'left',
                                }}
                                onChange={(val) => {
                                    val = val.target.value

                                    dl.changes.movieSerachString = val
                                }}
                                type="text"
                            ></input>
                        </div>

                        <div
                            id="t18_916_10438"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 5,
                                marginRight: 5,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                dl.changes.movieSerachString = ''
                            }}
                        >
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/69c17245ea33f76ff74faf996cf2ee0ffac5b0d8.png' !=
                            '' ? (
                                <img
                                    id="t18_916_10439"
                                    style={{
                                        height: 18,
                                        width: 18,
                                        display: 'flex',
                                        borderWidth: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        dl.changes.movieSerachString = ''
                                        dl.functions.searchMovie(
                                            dl.changes.movieSerachString
                                        )
                                    }}
                                    src={
                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/69c17245ea33f76ff74faf996cf2ee0ffac5b0d8.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}
                        </div>

                        <div
                            id="t18_916_10440"
                            style={{
                                height: 40,
                                width: 40,
                                borderRadius: 50,
                                backgroundColor: 'rgba(186,15,23,1.00)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 0,
                                marginRight: 0,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                var run = async () => {
                                    var res = await dl.functions.searchMovie(
                                        dl.changes.movieSerachString
                                    )
                                    // alert(JSON.stringify(res))
                                }

                                run()
                            }}
                        >
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b279de17ff8955703e5cd02ce3887e12f106db6a.png' !=
                            '' ? (
                                <img
                                    id="t18_916_10441"
                                    style={{
                                        height: 21,
                                        width: 21,
                                        display: 'flex',
                                        borderWidth: 0,
                                    }}
                                    src={
                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b279de17ff8955703e5cd02ce3887e12f106db6a.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </div>

                <div
                    id="t18_1683_70"
                    style={{
                        width: 549,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        paddingLeft: 21,
                        paddingRight: 50,
                        paddingTop: 20,
                        paddingBottom: 20,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_1683_71"
                        style={{
                            height: 15,
                            width: 126,
                            borderRadius: 7,
                            backgroundColor: 'rgba(186,15,23,1.00)',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            paddingTop: 10,
                            paddingBottom: 10,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginLeft: 0,
                            marginRight: 7.5,
                            cursor: 'pointer',
                        }}
                        onClick={(e) => {
                            dl.functions.setUniversalFilters()
                            dl.functions.modalsPlugin.openModal('filter')
                        }}
                    >
                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/826373dad5dd0e37209a226b39515b5d2478d996.png' !=
                        '' ? (
                            <img
                                id="t18_1683_72"
                                style={{
                                    height: 10.5859375,
                                    width: 15,
                                    display: 'flex',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 5,
                                }}
                                src={
                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/826373dad5dd0e37209a226b39515b5d2478d996.png'
                                }
                            ></img>
                        ) : (
                            <></>
                        )}

                        <span
                            id="t18_1683_73"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 16,
                                fontWeight: 600,
                                color: 'rgba(255,255,255,1)',
                                letterSpacing: 0,
                                lineHeight: '19.363636016845703px',
                                textAlign: 'center',
                                marginLeft: 5,
                                marginRight: 0,
                            }}
                        >
                            Filters
                        </span>
                    </div>

                    <div
                        id="t18_1683_74"
                        style={{
                            width: 449,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginLeft: 7.5,
                            marginRight: 0,
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                            }}
                        >
                            {dl.changes.universalFiltersList.map(
                                (item, index) => {
                                    return (
                                        <div>
                                            <MmFilterS
                                                {...item}
                                                {...dl.changes
                                                    .universalFiltersList}
                                                onRemove={(val) => {
                                                    dl.changes.universalFiltersList.splice(
                                                        index,
                                                        1
                                                    )
                                                    dl.changes.universalFilter[
                                                        item.filterIndex
                                                    ].options[
                                                        item.optionIndex
                                                    ].selected = false
                                                    dl.functions.applyUniversalFilter()
                                                }}
                                            />
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    </div>
                </div>

                <div
                    id="t18_702_108"
                    style={{
                        width: 620,
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        display: 'flex',
                        paddingTop: 35,
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
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                        }}
                    >
                        {dl.changes.movieSuggestionList.map((item, index) => {
                            return (
                                <div>
                                    <MmMovieCardMd
                                        {...item}
                                        {...dl.changes.movieSuggestionList}
                                        onCreateBookmark={(val) => {
                                            val.stopPropagation()
                                            dl.functions.bookmarkAction(
                                                'movieSuggestionList',
                                                index,
                                                'moviesuggestions'
                                            )
                                        }}
                                        onRemoveBookmark={(val) => {
                                            val.stopPropagation()
                                            dl.functions.bookmarkAction(
                                                'movieSuggestionList',
                                                index,
                                                'moviesuggestions'
                                            )
                                        }}
                                        onClickTrailer={(val) => {
                                            val.stopPropagation()

                                            var url =
                                                dl.changes.movieSuggestionList[
                                                    index
                                                ].trailerURL
                                            if (
                                                !url.startsWith('http://') &&
                                                !url.startsWith('https://')
                                            ) {
                                                url = 'https://' + url
                                            }
                                            window.open(url, '_blank')
                                        }}
                                        onClick={(val) => {
                                            var movieId =
                                                dl.changes.movieSuggestionList[
                                                    index
                                                ]._id
                                            dl.functions.common.relativeRedirect(
                                                `moviedetails?msId=${movieId}`,
                                                true
                                            )
                                        }}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div
                    id="t18_1025_551"
                    style={{
                        height: 319,
                        width: 618,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: dl.changes.moviesNoDataVisible,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_1027_662"
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
                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c00eabc0b50238a2e6d4f7f0b4efb517fdb34594.png' !=
                        '' ? (
                            <img
                                id="t18_1025_552"
                                style={{
                                    height: 195,
                                    width: 301,
                                    display: 'flex',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 15,
                                }}
                                src={
                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c00eabc0b50238a2e6d4f7f0b4efb517fdb34594.png'
                                }
                            ></img>
                        ) : (
                            <></>
                        )}

                        <div
                            id="t18_1025_553"
                            style={{
                                height: 55,
                                width: 196,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 15,
                                marginBottom: 0,
                            }}
                        >
                            <span
                                id="t18_1025_554"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 15,
                                    fontWeight: 500,
                                    color: 'rgba(0,0,0,1)',
                                    letterSpacing: 0,
                                    lineHeight: '18.15340805053711px',
                                    textAlign: 'left',
                                    marginTop: 0,
                                    marginBottom: 2.5,
                                }}
                            >
                                No records found
                            </span>

                            <div
                                id="t18_1025_555"
                                style={{
                                    height: 32,
                                    width: 196,
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
                                <span
                                    id="t18_1025_556"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 400,
                                        color: 'rgba(167,167,167,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
                                        textAlign: 'center',
                                    }}
                                >
                                    We can’t find any item matching your search
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    id="t18_340_1328"
                    style={{
                        height: -1,
                        width: 620,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        paddingTop: 30,
                        paddingBottom: 30,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        borderColor: 'rgba(207,206,206,1)',
                        borderBottomWidth: 1,
                        borderStyle: 'solid',
                    }}
                >
                    <MMPagination
                        total={dl.changes.paginationState.total}
                        active={dl.changes.paginationState.active}
                        onChange={(val) => {
                            dl.changes.paginationState.active = val
                            var page = String(val)
                            dl.functions.getMovieSuggestrion('9', page)
                        }}
                    />
                </div>

                <div
                    id="t18_534_72"
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
                        id="t18_534_73"
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
                        id="t18_701_411"
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
                                dl.functions.bookmarkAction(
                                    'moviesBlogList',
                                    'blog1',
                                    'blogs'
                                )
                            }}
                            onRemoveBookmark={(val) => {
                                val.stopPropagation()
                                dl.functions.bookmarkAction(
                                    'moviesBlogList',
                                    'blog1',
                                    'blogs'
                                )
                            }}
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
                                dl.functions.bookmarkAction(
                                    'moviesBlogList',
                                    'blog2',
                                    'blogs'
                                )
                            }}
                            onRemoveBookmark={(val) => {
                                val.stopPropagation()
                                dl.functions.bookmarkAction(
                                    'moviesBlogList',
                                    'blog2',
                                    'blogs'
                                )
                            }}
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
                                dl.functions.bookmarkAction(
                                    'moviesBlogList',
                                    'blog3',
                                    'blogs'
                                )
                            }}
                            onRemoveBookmark={(val) => {
                                val.stopPropagation()
                                dl.functions.bookmarkAction(
                                    'moviesBlogList',
                                    'blog3',
                                    'blogs'
                                )
                            }}
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
                        id="t18_534_95"
                        style={{
                            height: 24,
                            width: 127,
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
                            // var currentPath = dl.functions.common.getLastPath()
                            // dl.functions.onLoadFunctions[currentPath]()
                            dl.changes.blogsFilter[0].options[3].selected = true
                            dl.functions.applyBlogFilter()
                        }}
                    >
                        <span
                            id="t18_534_96"
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
                    id="t18_340_1341"
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
export default Moviesuggestions_3
