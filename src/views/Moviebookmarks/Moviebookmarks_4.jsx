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

const Moviebookmarks_4 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 400
            const element = document.getElementById('t18_1278_4377')
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
                id="t18_1278_4377"
                style={{
                    width: 400,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    paddingBottom: 5,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <div
                    id="t18_1278_4299"
                    style={{
                        width: 400,
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
                        id="t18_1278_4302"
                        style={{
                            height: 21,
                            width: 400,
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
                            id="t18_1278_4303"
                            style={{
                                height: 22,
                                width: 350,
                                backgroundColor: 'rgba(248,246,246,1.00)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingLeft: 20,
                                paddingRight: 30,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_1278_4304"
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
                                    id="t18_1278_4305"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 8,
                                        fontWeight: 500,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '9.681818008422852px',
                                        textAlign: 'left',
                                    }}
                                >
                                    {'Account << Bookmarks'}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        id="t18_1278_4306"
                        style={{
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingTop: 5,
                            paddingBottom: 5,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <MmServiceSelectorXs
                            {...dl.changes.serviceSelectorMini}
                        />
                    </div>

                    <div
                        id="t18_1278_4331"
                        style={{
                            width: 400,
                            flexDirection: 'column',
                            alignItems: 'center',
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
                                            <MmMovieCardXs
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

                    <MmEmptyListXs {...dl.changes.bookmarkNodataVisible} />

                    <div
                        id="t18_1278_4355"
                        style={{
                            height: 24,
                            width: 390,
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
                        />
                    </div>

                    <MmFooterXs />
                </div>
            </div>
        </div>
    )
})
export default Moviebookmarks_4
