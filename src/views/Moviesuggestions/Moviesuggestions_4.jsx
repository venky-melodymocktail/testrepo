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

const Moviesuggestions_4 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 400
            const element = document.getElementById('t18_340_1741')
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
                id="t18_340_1741"
                style={{
                    width: 400,
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

                <MmServiceSelectorXs {...dl.changes.serviceSelectorMini} />

                <div
                    id="t18_340_1785"
                    style={{
                        height: 70,
                        width: 380,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 5,
                        paddingBottom: 5,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        borderColor: 'rgba(207,206,206,1)',
                        borderBottomWidth: 1,
                        borderStyle: 'solid',
                    }}
                >
                    <div
                        id="t18_916_10442"
                        style={{
                            height: 34,
                            width: 321,
                            borderRadius: 50,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingLeft: 14,
                            paddingRight: 5,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 2,
                            borderColor: 'rgba(186,15,23,1)',
                            borderStyle: 'solid',
                        }}
                    >
                        <div
                            id="t18_916_10443"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 0,
                                marginRight: 4,
                            }}
                        >
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/70f5b72a34765deae5b34e6ad476040b1c4bda4c.png' !=
                            '' ? (
                                <img
                                    id="t18_916_10444"
                                    style={{
                                        height: 13,
                                        width: 13,
                                        display: 'flex',
                                        borderWidth: 0,
                                        marginLeft: 0,
                                        marginRight: 4,
                                    }}
                                    src={
                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/70f5b72a34765deae5b34e6ad476040b1c4bda4c.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}

                            <input
                                id="t18_916_10445"
                                placeholder="Search Movie"
                                value={dl.changes.movieSerachString}
                                style={{
                                    height: 26,
                                    width: 252,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 4,
                                    marginRight: 0,
                                    cursor: 'pointer',
                                    fontFamily: 'Inter',
                                    fontSize: 8,
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
                            id="t18_916_10447"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 4,
                                marginRight: 4,
                            }}
                        >
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/69c17245ea33f76ff74faf996cf2ee0ffac5b0d8.png' !=
                            '' ? (
                                <img
                                    id="t18_916_10448"
                                    style={{
                                        height: 8,
                                        width: 8,
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
                            id="t18_916_10449"
                            style={{
                                height: '25px',
                                width: '25px',
                                borderRadius: 50,
                                backgroundColor: 'rgba(186,15,23,1.00)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                paddingLeft: 0,
                                paddingRight: 0,
                                paddingTop: 0,
                                paddingBottom: 0,
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
                            <div
                                id="t18_970_100"
                                style={{
                                    height: 14,
                                    width: 14,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b279de17ff8955703e5cd02ce3887e12f106db6a.png' !=
                                '' ? (
                                    <img
                                        id="t18_916_10450"
                                        style={{
                                            height: 14,
                                            width: 14,
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
                </div>

                <div
                    id="t18_1683_62"
                    style={{
                        width: 380,
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        paddingLeft: 20,
                        paddingTop: 20,
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
                        id="t18_1683_63"
                        style={{
                            height: 15,
                            width: 100,
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
                            marginTop: 0,
                            marginBottom: 5,
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
                                id="t18_1683_64"
                                style={{
                                    height: 12,
                                    width: 17,
                                    display: 'flex',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 3,
                                }}
                                src={
                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/826373dad5dd0e37209a226b39515b5d2478d996.png'
                                }
                            ></img>
                        ) : (
                            <></>
                        )}

                        <span
                            id="t18_1683_65"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 12,
                                fontWeight: 600,
                                color: 'rgba(255,255,255,1)',
                                letterSpacing: 0,
                                lineHeight: '14.522727012634277px',
                                textAlign: 'center',
                                marginLeft: 3,
                                marginRight: 0,
                            }}
                        >
                            Filters
                        </span>
                    </div>

                    <div
                        id="t18_1683_66"
                        style={{
                            width: 361,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 5,
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
                            {dl.changes.universalFiltersList.map(
                                (item, index) => {
                                    return (
                                        <div>
                                            <MmFilterXs
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
                    id="t18_340_1920"
                    style={{
                        width: 380,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        paddingLeft: 10,
                        paddingRight: 10,
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
                                    <MmMovieCardXs
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
                    id="t18_1025_593"
                    style={{
                        height: 259,
                        width: 400,
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
                        id="t18_1025_599"
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
                                id="t18_1025_594"
                                style={{
                                    height: 145,
                                    width: 223,
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
                            id="t18_1025_595"
                            style={{
                                height: 52,
                                width: 181,
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
                                id="t18_1025_596"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: 'rgba(0,0,0,1)',
                                    letterSpacing: 0,
                                    lineHeight: '16.94318199157715px',
                                    textAlign: 'left',
                                    marginTop: 0,
                                    marginBottom: 2.5,
                                }}
                            >
                                No records found
                            </span>

                            <div
                                id="t18_1025_597"
                                style={{
                                    height: 30,
                                    width: 181,
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
                                    id="t18_1025_598"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        fontWeight: 400,
                                        color: 'rgba(167,167,167,1)',
                                        letterSpacing: 0,
                                        lineHeight: '14.522727012634277px',
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
                    id="t18_340_1809"
                    style={{
                        height: -9,
                        width: 400,
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
                    id="t18_541_279"
                    style={{
                        width: 400,
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
                        id="t18_541_280"
                        style={{
                            fontFamily: 'Inter',
                            fontSize: 18,
                            fontWeight: 600,
                            color: 'rgba(186,15,23,1)',
                            letterSpacing: 0,
                            lineHeight: '21.784090042114258px',
                            textAlign: 'left',
                            marginTop: 0,
                            marginBottom: 15,
                        }}
                    >
                        Movie blogs
                    </span>

                    <div
                        id="t18_541_281"
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
                        <MmBlogCardXs
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

                        <MmBlogCardXs
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

                        <MmBlogCardXs
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
                        id="t18_541_312"
                        style={{
                            height: 9,
                            width: 75,
                            borderRadius: 5,
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
                            id="t18_541_313"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 14,
                                fontWeight: 700,
                                color: 'rgba(255,255,255,1)',
                                letterSpacing: 0,
                                lineHeight: '16.94318199157715px',
                                textAlign: 'left',
                            }}
                        >
                            View All
                        </span>
                    </div>
                </div>

                <div
                    id="t18_340_1822"
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
                    <MmFooterXs />
                </div>
            </div>
        </div>
    )
})
export default Moviesuggestions_4
