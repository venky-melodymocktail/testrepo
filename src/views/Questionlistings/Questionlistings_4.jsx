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
import MmListingQuestion from '../../components/MmListingQuestion.jsx'
import MmEmptyList from '../../components/MmEmptyList.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmListingServiceMd from '../../components/MmListingServiceMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmListingQuestionS from '../../components/MmListingQuestionS.jsx'
import MmListingServiceS from '../../components/MmListingServiceS.jsx'
import MmEmptyListS from '../../components/MmEmptyListS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmListingQuestionXs from '../../components/MmListingQuestionXs.jsx'
import MmEmptyListXs from '../../components/MmEmptyListXs.jsx'
import MmListingServiceXs from '../../components/MmListingServiceXs.jsx'

const Questionlistings_4 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 400
            const element = document.getElementById('t18_1267_2391')
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
                id="t18_1267_2391"
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
                    marginLeft: 10,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <div
                    id="t18_1267_2392"
                    style={{
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
                    <div
                        id="t18_1267_2393"
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
                        <div
                            id="t18_1267_2394"
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
                            <MmHeaderXs
                                {...dl.changes.userDetail}
                                onChangeAddress={(val) => {
                                    dl.functions.modalsPlugin.openModal(
                                        'AddressPopupS'
                                    )
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

                                    dl.functions.modalsPlugin.openModal(
                                        'navigationXs'
                                    )
                                }}
                            />

                            <div
                                id="t18_1267_2397"
                                style={{
                                    height: -4,
                                    width: 400,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingBottom: 30,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                }}
                            >
                                <div
                                    id="t18_1267_2398"
                                    style={{
                                        height: 22,
                                        width: 350,
                                        backgroundColor:
                                            'rgba(248,246,246,1.00)',
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
                                        id="t18_1267_2399"
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
                                            id="t18_1267_2400"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 8,
                                                fontWeight: 500,
                                                color: 'rgba(113,113,113,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '9.681818008422852px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            {'Account << My listings'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <MmListingServiceXs
                                {...dl.changes.listingServiceSelector}
                            />

                            <div
                                id="t18_1267_2513"
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
                                    {dl.changes.visaquestionsListing.map(
                                        (item, index) => {
                                            return (
                                                <div>
                                                    <MmListingQuestionXs
                                                        {...item}
                                                        {...dl.changes
                                                            .visaquestionsListing}
                                                        onUnsave={(val) => {}}
                                                        onClickDelete={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            const run =
                                                                async () => {
                                                                    var body = {
                                                                        id: dl
                                                                            .changes
                                                                            .visaquestionsListing[
                                                                            index
                                                                        ]._id,
                                                                        status: 'inactive',
                                                                    }

                                                                    var res =
                                                                        await dl.functions.updateVisaQandA(
                                                                            body
                                                                        )
                                                                    if (
                                                                        res ==
                                                                        200
                                                                    ) {
                                                                        dl.functions.onLoadFunctions[
                                                                            'questionlistings'
                                                                        ]()
                                                                        dl.functions.modalsPlugin.closeModal(
                                                                            'editVisaQna'
                                                                        )
                                                                    }
                                                                }

                                                            run()
                                                        }}
                                                        onClickEdit={(val) => {
                                                            val.stopPropagation()
                                                            dl.changes.selectedVisaquestionsListing =
                                                                dl.changes.visaquestionsListing[
                                                                    index
                                                                ]
                                                            dl.changes.visaQuestionPopupDetail.question =
                                                                dl.changes.visaquestionsListing[
                                                                    index
                                                                ].question
                                                            dl.changes.visaQuestionPopupDetail.type =
                                                                dl.changes.visaquestionsListing[
                                                                    index
                                                                ].category
                                                            dl.functions.modalsPlugin.openModal(
                                                                'editVisaQnaS'
                                                            )
                                                        }}
                                                        onClickLink={(val) => {
                                                            val.stopPropagation()
                                                            var visaQuestionId =
                                                                dl.changes
                                                                    .visaquestionsListing[
                                                                    index
                                                                ]._id
                                                            var link = `https://melodymocktail.com/comments?visaQuestionId=${visaQuestionId}`
                                                            dl.functions.common.copyToClipboard(
                                                                link
                                                            )
                                                            window.toast(
                                                                'Link Copied!'
                                                            )
                                                        }}
                                                        onClickReport={(
                                                            val
                                                        ) => {}}
                                                        onClick={(val) => {
                                                            var visaQuestionId =
                                                                dl.changes
                                                                    .visaquestionsListing[
                                                                    index
                                                                ]._id
                                                            dl.functions.common.relativeRedirect(
                                                                `comments?visaQuestionId=${visaQuestionId}`,
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

                            <MmEmptyListXs
                                {...dl.changes.visaQuestionListingNoDataVisible}
                            />

                            <div
                                id="t18_1267_2496"
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
                                    marginBottom: 0,
                                }}
                            >
                                <MMPagination
                                    total={dl.changes.paginationState.total}
                                    active={dl.changes.paginationState.active}
                                    onChange={(val) => {
                                        dl.changes.paginationState.active = val
                                        dl.functions.getvisaquestionListing(
                                            '6',
                                            val,
                                            ''
                                        )
                                    }}
                                />
                            </div>
                        </div>

                        <MmFooterXs />
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Questionlistings_4
