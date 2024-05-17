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
import MmMovieCard from '../../components/MmMovieCard.jsx'
import MmEmptyList from '../../components/MmEmptyList.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmServiceSelectorMd from '../../components/MmServiceSelectorMd.jsx'
import MmMovieCardMd from '../../components/MmMovieCardMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmServiceSelectorS from '../../components/MmServiceSelectorS.jsx'
import MmEmptyListS from '../../components/MmEmptyListS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmServiceSelectorXs from '../../components/MmServiceSelectorXs.jsx'
import MmMovieCardXs from '../../components/MmMovieCardXs.jsx'
import MmEmptyListXs from '../../components/MmEmptyListXs.jsx'

const Moviebookmarks_2 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 900
            const element = document.getElementById('t18_1278_4374')
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
                id="t18_1278_4374"
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
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <div
                    id="t18_1278_4084"
                    style={{
                        width: 900,
                        backgroundColor: 'rgba(255,255,255,1.00)',
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
                        id="t18_1278_4087"
                        style={{
                            height: 33,
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingBottom: 5,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_1278_4088"
                            style={{
                                height: 28,
                                width: 840,
                                backgroundColor: 'rgba(248,246,246,1.00)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingLeft: 30,
                                paddingRight: 30,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_1278_4089"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                }}
                            >
                                <span
                                    id="t18_1278_4090"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 10,
                                        fontWeight: 500,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '12.102272033691406px',
                                        textAlign: 'left',
                                    }}
                                >
                                    {'Account << Bookmarks'}
                                </span>
                            </div>
                        </div>
                    </div>

                    <MmServiceSelectorMd {...dl.changes.serviceSelectorMini} />

                    <div
                        id="t18_1278_4115"
                        style={{
                            width: 900,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingTop: 20,
                            paddingBottom: 30,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                            }}
                        >
                            {dl.changes.bookmarkedMoviesList.map(
                                (item, index) => {
                                    return (
                                        <div>
                                            <MmMovieCardMd
                                                {...item}
                                                {...dl.changes
                                                    .bookmarkedMoviesList}
                                                onCreateBookmark={(val) => {}}
                                                onRemoveBookmark={(val) => {
                                                    val.stopPropagation()
                                                    var id =
                                                        dl.changes
                                                            .bookmarkedMoviesList[
                                                            index
                                                        ].bookmarkId
                                                    var body = {
                                                        bookmarkId: id,
                                                    }
                                                    dl.functions.deleteBookmark(
                                                        body
                                                    )
                                                }}
                                                onClickTrailer={(val) => {
                                                    val.stopPropagation()

                                                    var url =
                                                        dl.changes
                                                            .bookmarkedMoviesList[
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
                                                        url = 'https://' + url
                                                    }
                                                    window.open(url, '_blank')
                                                }}
                                                onClick={(val) => {
                                                    var movieId =
                                                        dl.changes
                                                            .bookmarkedMoviesList[
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

                    <MmEmptyList {...dl.changes.bookmarkNodataVisible} />

                    <div
                        id="t18_1278_4185"
                        style={{
                            height: 56,
                            width: 890,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            paddingLeft: 10,
                            paddingTop: 10,
                            paddingBottom: 10,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            borderColor: 'rgba(207,206,206,1)',
                            borderTopWidth: 1,
                            borderBottomWidth: 1,
                            borderStyle: 'solid',
                        }}
                    >
                        <MMPagination
                            total={dl.changes.paginationState.total}
                            active={dl.changes.paginationState.active}
                            onChange={(val) => {
                                dl.changes.paginationState.active = val
                                dl.functions.getBookmarkedmovieSuggestions(val)
                            }}
                        />
                    </div>

                    <div
                        id="t18_1278_4200"
                        style={{
                            height: 84,
                            backgroundColor: 'rgba(255,255,255,1.00)',
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
                        <MmFooterMd />
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Moviebookmarks_2
