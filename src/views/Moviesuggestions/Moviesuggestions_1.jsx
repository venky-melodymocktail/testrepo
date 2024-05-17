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

const Moviesuggestions_1 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_165_165')
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
                id="t18_165_165"
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

                <MmServiceSelector
                    {...dl.changes.serviceSelector}
                    onRentalsClick={(val) => {
                        var serviceSelector =
                            dl.changes.serviceSelector.services

                        for (var key in serviceSelector) {
                            serviceSelector[key] = 'rgba(186,15,23,1)'
                        }

                        serviceSelector['rentals'] = 'rgba(156,18,24,1)'
                        // var currentPath = dl.functions.common.getLastPath()
                        // dl.functions.onLoadFunctions[currentPath]()

                        dl.functions.viewsPlugin.showView('rooms')
                        var currentPath = dl.functions.common.getLastPath()
                        dl.functions.onLoadFunctions[currentPath]()
                    }}
                    onRidesClick={(val) => {
                        var serviceSelector =
                            dl.changes.serviceSelector.services

                        for (var key in serviceSelector) {
                            serviceSelector[key] = 'rgba(186,15,23,1)'
                        }

                        serviceSelector['rides'] = 'rgba(156,18,24,1)'

                        dl.functions.viewsPlugin.showView('ridesharing')
                        var currentPath = dl.functions.common.getLastPath()
                        dl.functions.onLoadFunctions[currentPath]()
                    }}
                    onTSClick={(val) => {
                        var serviceSelector =
                            dl.changes.serviceSelector.services

                        for (var key in serviceSelector) {
                            serviceSelector[key] = 'rgba(186,15,23,1)'
                        }

                        serviceSelector['travelSuggestions'] =
                            'rgba(156,18,24,1)'

                        dl.functions.viewsPlugin.showView('travelsuggestions')
                        var currentPath = dl.functions.common.getLastPath()
                        dl.functions.onLoadFunctions[currentPath]()
                    }}
                    onMSClick={(val) => {
                        var serviceSelector =
                            dl.changes.serviceSelector.services

                        for (var key in serviceSelector) {
                            serviceSelector[key] = 'rgba(186,15,23,1)'
                        }

                        serviceSelector['movieSuggestions'] =
                            'rgba(156,18,24,1)'

                        dl.functions.viewsPlugin.showView('moviesuggestions')
                        var currentPath = dl.functions.common.getLastPath()
                        dl.functions.onLoadFunctions[currentPath]()
                    }}
                    onStudyAbroadClick={(val) => {
                        // var serviceSelector=dl.changes.dataSource.services
                        var serviceSelector =
                            dl.changes.serviceSelector.services

                        for (var key in serviceSelector) {
                            serviceSelector[key] = 'rgba(186,15,23,1)'
                        }

                        serviceSelector['studyAbroad'] = 'rgba(156,18,24,1)'
                        dl.functions.viewsPlugin.showView('studyabroad')
                        var currentPath = dl.functions.common.getLastPath()
                        dl.functions.onLoadFunctions[currentPath]()
                    }}
                    onVisaClick={(val) => {
                        // var serviceSelector=dl.changes.dataSource.services
                        var serviceSelector =
                            dl.changes.serviceSelector.services

                        for (var key in serviceSelector) {
                            serviceSelector[key] = 'rgba(186,15,23,1)'
                        }

                        serviceSelector['visaQna'] = 'rgba(156,18,24,1)'
                        dl.functions.viewsPlugin.showView('visaquestions')
                        var currentPath = dl.functions.common.getLastPath()
                        dl.functions.onLoadFunctions[currentPath]()
                    }}
                    onTravelCompanionClick={(val) => {
                        // var serviceSelector=dl.changes.dataSource.services

                        // for(var key in serviceSelector){
                        //     serviceSelector[key]="rgba(186,15,23,1)"
                        // }

                        // serviceSelector["travelCompanion"]="rgba(156,18,24,1)"
                        dl.functions.viewsPlugin.showView('travelcompanion')
                        var currentPath = dl.functions.common.getLastPath()
                        dl.functions.onLoadFunctions[currentPath]()

                        var serviceSelector =
                            dl.changes.serviceSelector.services

                        for (var key in serviceSelector) {
                            serviceSelector[key] = 'rgba(186,15,23,1)'
                        }

                        serviceSelector['travelCompanion'] = 'rgba(156,18,24,1)'
                    }}
                />

                <div
                    id="t18_74_886"
                    style={{
                        width: 1420,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 73,
                        paddingBottom: 73,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_916_10415"
                        style={{
                            height: 50,
                            width: 744,
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
                            id="t18_916_10416"
                            style={{
                                height: 37,
                                width: 652,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 0,
                                marginRight: 9,
                            }}
                        >
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/70f5b72a34765deae5b34e6ad476040b1c4bda4c.png' !=
                            '' ? (
                                <img
                                    id="t18_916_10417"
                                    style={{
                                        height: 22,
                                        width: 22,
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
                                id="t18_916_10418"
                                placeholder="Search Movie"
                                value={dl.changes.movieSerachString}
                                style={{
                                    height: '50px',
                                    width: '635px',
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
                                    itemSpacing: 10,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    fontFamily: 'Inter',
                                    fontSize: 20,
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
                            id="t18_916_10420"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 9,
                                marginRight: 9,
                            }}
                        >
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/69c17245ea33f76ff74faf996cf2ee0ffac5b0d8.png' !=
                            '' ? (
                                <img
                                    id="t18_916_10421"
                                    style={{
                                        height: 16,
                                        width: 16,
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
                            id="t18_916_10422"
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
                                marginLeft: 9,
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
                                    id="t18_916_10423"
                                    style={{
                                        height: 21,
                                        width: 20,
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
                    id="t18_541_164"
                    style={{
                        width: 1440,
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        borderColor: 'rgba(207,206,206,1)',
                        borderBottomWidth: 1,
                        borderStyle: 'solid',
                    }}
                >
                    <div
                        id="t18_74_891"
                        style={{
                            width: 1440,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            borderColor: 'rgba(207,206,206,1)',
                            borderTopWidth: 1,
                            borderStyle: 'solid',
                        }}
                    >
                        <MMFilter
                            dataSource={dl.changes.moviesFilter}
                            onChange={(val) => {
                                dl.changes.moviesFilter = val
                                dl.functions.applyMovieSuggestionFilter()
                            }}
                        />

                        <div
                            id="t18_74_939"
                            style={{
                                width: 1014,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                borderColor: 'rgba(207,206,206,1)',
                                borderLeftWidth: 1,
                                borderStyle: 'solid',
                                marginRight: 0,
                            }}
                        >
                            <div
                                id="t18_74_941"
                                style={{
                                    width: 999,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingLeft: 10,
                                    paddingTop: 30,
                                    paddingBottom: 30,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                }}
                            >
                                <div
                                    id="t18_74_1053"
                                    style={{
                                        width: 999,
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 36,
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {dl.changes.movieSuggestionList.map(
                                            (item, index) => {
                                                return (
                                                    <div>
                                                        <MmMovieCard
                                                            {...item}
                                                            {...dl.changes
                                                                .movieSuggestionList}
                                                            onCreateBookmark={(
                                                                val
                                                            ) => {
                                                                val.stopPropagation()
                                                                dl.functions.bookmarkAction(
                                                                    'movieSuggestionList',
                                                                    index,
                                                                    'moviesuggestions'
                                                                )
                                                            }}
                                                            onRemoveBookmark={(
                                                                val
                                                            ) => {
                                                                val.stopPropagation()
                                                                dl.functions.bookmarkAction(
                                                                    'movieSuggestionList',
                                                                    index,
                                                                    'moviesuggestions'
                                                                )
                                                            }}
                                                            onClickTrailer={(
                                                                val
                                                            ) => {
                                                                val.stopPropagation()

                                                                var url =
                                                                    dl.changes
                                                                        .movieSuggestionList[
                                                                        index
                                                                    ].trailerURL
                                                                if (
                                                                    !url.startsWith(
                                                                        'http://'
                                                                    ) &&
                                                                    !url.startsWith(
                                                                        'https://'
                                                                    )
                                                                ) {
                                                                    url =
                                                                        'https://' +
                                                                        url
                                                                }
                                                                window.open(
                                                                    url,
                                                                    '_blank'
                                                                )
                                                            }}
                                                            onClick={(val) => {
                                                                var movieId =
                                                                    dl.changes
                                                                        .movieSuggestionList[
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
                                            }
                                        )}
                                    </div>
                                </div>

                                <div
                                    id="t18_1025_454"
                                    style={{
                                        height: 397,
                                        width: 950,
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: dl.changes.moviesNoDataVisible,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 36,
                                        marginBottom: 0,
                                    }}
                                >
                                    <div
                                        id="t18_1025_455"
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
                                                id="t18_1025_456"
                                                style={{
                                                    height: 236,
                                                    width: 365,
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
                                            id="t18_1025_457"
                                            style={{
                                                height: 65,
                                                width: 254,
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
                                                id="t18_1025_458"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 18,
                                                    fontWeight: 500,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '21.784090042114258px',
                                                    textAlign: 'left',
                                                    marginTop: 0,
                                                    marginBottom: 2.5,
                                                }}
                                            >
                                                No records found
                                            </span>

                                            <div
                                                id="t18_1025_459"
                                                style={{
                                                    height: 38,
                                                    width: 254,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 2.5,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_1025_460"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 16,
                                                        fontWeight: 400,
                                                        color: 'rgba(167,167,167,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '19.363636016845703px',
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    We can’t find any item
                                                    matching your search
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                id="t18_74_981"
                                style={{
                                    height: 15,
                                    width: 958,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingLeft: 60,
                                    paddingTop: 30,
                                    paddingBottom: 30,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderTopWidth: 1,
                                    borderStyle: 'solid',
                                    marginBottom: 0,
                                }}
                            >
                                <MMPagination
                                    total={dl.changes.paginationState.total}
                                    active={dl.changes.paginationState.active}
                                    onChange={(val) => {
                                        dl.changes.paginationState.active = val
                                        var page = String(val)
                                        dl.functions.getMovieSuggestrion(
                                            '9',
                                            page
                                        )
                                    }}
                                />

                                <div
                                    id="t18_74_993"
                                    style={{
                                        height: 13.9140625,
                                        width: 8,
                                        display: 'flex',
                                        borderWidth: 0,
                                        marginLeft: 11,
                                        marginRight: 0,
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    id="t18_146_106"
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
                        id="t18_146_103"
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
                            marginTop: 0,
                            marginBottom: 29,
                        }}
                    >
                        <span
                            id="t18_146_54"
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
                            id="t18_146_102"
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

                    <div
                        id="t18_146_105"
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
                            // var currentPath = dl.functions.common.getLastPath()
                            // dl.functions.onLoadFunctions[currentPath]()
                            dl.changes.blogsFilter[0].options[3].selected = true
                            dl.functions.applyBlogFilter()
                        }}
                    >
                        <span
                            id="t18_146_104"
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

                <MmFooter />
            </div>
        </div>
    )
})
export default Moviesuggestions_1
