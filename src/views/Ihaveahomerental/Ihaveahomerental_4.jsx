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
import MmWantedHomeCard from '../../components/MmWantedHomeCard.jsx'
import MmEmptyList from '../../components/MmEmptyList.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmWantedHomeCardMd from '../../components/MmWantedHomeCardMd.jsx'
import MmFilterMd from '../../components/MmFilterMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmWantedHomeCardS from '../../components/MmWantedHomeCardS.jsx'
import MmEmptyListS from '../../components/MmEmptyListS.jsx'
import MmFilterS from '../../components/MmFilterS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmWantedHomeCardXs from '../../components/MmWantedHomeCardXs.jsx'
import MmEmptyListXs from '../../components/MmEmptyListXs.jsx'
import MmFilterXs from '../../components/MmFilterXs.jsx'

const Ihaveahomerental_4 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 400
            const element = document.getElementById('t18_1216_218')
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
                id="t18_1216_218"
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
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <div
                    id="t18_1038_2834"
                    style={{
                        backgroundColor: 'rgba(255,255,255,1.00)',
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_1038_2835"
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
                            id="t18_1038_2836"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 15.5,
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
                                id="t18_1038_2839"
                                style={{
                                    height: 31,
                                    width: 380,
                                    backgroundColor: 'rgba(248,246,246,1.00)',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingLeft: 20,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderBottomWidth: 0.5,
                                    borderStyle: 'solid',
                                }}
                            >
                                <span
                                    id="t18_1038_2840"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 10,
                                        fontWeight: 500,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '12.102272033691406px',
                                        textAlign: 'left',
                                        marginLeft: 0,
                                        marginRight: 2.5,
                                    }}
                                >
                                    Rooms/Roommates
                                </span>

                                <div
                                    id="t18_1038_2841"
                                    style={{
                                        height: 8,
                                        width: 9,
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 2.5,
                                        marginRight: 2.5,
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/83d78575792856e766bb4b65ca55e6822443925f.png' !=
                                    '' ? (
                                        <img
                                            id="t18_1038_2842"
                                            style={{
                                                height: 8,
                                                width: 4,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/83d78575792856e766bb4b65ca55e6822443925f.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/83d78575792856e766bb4b65ca55e6822443925f.png' !=
                                    '' ? (
                                        <img
                                            id="t18_1038_2843"
                                            style={{
                                                height: 8,
                                                width: 5,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginRight: 0,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/83d78575792856e766bb4b65ca55e6822443925f.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}
                                </div>

                                <span
                                    id="t18_1038_2844"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 10,
                                        fontWeight: 500,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '12.102272033691406px',
                                        textAlign: 'left',
                                        marginLeft: 2.5,
                                        marginRight: 0,
                                    }}
                                >
                                    I have a home
                                </span>
                            </div>

                            <div
                                id="t18_1632_117"
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
                                    id="t18_1632_118"
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
                                        dl.functions.modalsPlugin.openModal(
                                            'filter'
                                        )
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/826373dad5dd0e37209a226b39515b5d2478d996.png' !=
                                    '' ? (
                                        <img
                                            id="t18_1632_119"
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
                                        id="t18_1632_120"
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
                                    id="t18_1632_121"
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
                                                                ].selected =
                                                                    false
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
                                id="t18_1038_2856"
                                style={{
                                    height: 49,
                                    width: 380,
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
                                }}
                            >
                                <div
                                    id="t18_1038_2857"
                                    style={{
                                        height: 35,
                                        width: 139,
                                        borderRadius: 30,
                                        backgroundColor: 'rgba(186,15,23,1.00)',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        var userToken =
                                            dl.functions.common.getCookie(
                                                'userToken'
                                            )

                                        if (userToken) {
                                            dl.functions.viewsPlugin.showView(
                                                'listmyhomeform'
                                            )
                                            var currentPath =
                                                dl.functions.common.getLastPath()
                                            dl.functions.onLoadFunctions[
                                                currentPath
                                            ]()
                                        } else {
                                            dl.functions.modalsPlugin.openModal(
                                                'loginS'
                                            )
                                        }
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/41a7227774b5b1086601e797a1f6691e1f551b82.png' !=
                                    '' ? (
                                        <img
                                            id="t18_1038_2858"
                                            style={{
                                                height: 17,
                                                width: 17,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 5.5,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/41a7227774b5b1086601e797a1f6691e1f551b82.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <span
                                        id="t18_1038_2859"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 12,
                                            fontWeight: 500,
                                            color: 'rgba(255,255,255,1)',
                                            letterSpacing: 0,
                                            lineHeight: '14.522727012634277px',
                                            textAlign: 'center',
                                            marginLeft: 5.5,
                                            marginRight: 0,
                                        }}
                                    >
                                        List my home
                                    </span>
                                </div>
                            </div>

                            <div
                                id="t18_1038_2860"
                                style={{
                                    width: 400,
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
                                <div
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {dl.changes.needAHomeList.map(
                                        (item, index) => {
                                            return (
                                                <div>
                                                    <MmWantedHomeCardXs
                                                        {...item}
                                                        {...dl.changes
                                                            .needAHomeList}
                                                        onClickEdit={(
                                                            val
                                                        ) => {}}
                                                        onClickContact={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            var userToken =
                                                                dl.functions.common.getCookie(
                                                                    'userToken'
                                                                )
                                                            if (userToken) {
                                                                dl.changes.contactUSForm.serviceType =
                                                                    'needahome'
                                                                dl.changes.contactUSForm.serviceId =
                                                                    dl.changes.needAHomeList[
                                                                        index
                                                                    ]._id
                                                                dl.changes.contactUSForm.firstname =
                                                                    dl.changes.userDetail.firstName
                                                                dl.changes.contactUSForm.lastname =
                                                                    dl.changes.userDetail.lastName
                                                                dl.changes.contactUSForm.email =
                                                                    dl.changes.userDetail.email
                                                                if (
                                                                    dl.changes
                                                                        .userDetail
                                                                        .phone
                                                                        .length >
                                                                    12
                                                                ) {
                                                                    dl.changes.contactUSForm.countryCode =
                                                                        '+91'
                                                                    dl.changes.contactUSForm.phone =
                                                                        dl.changes.userDetail.phone.substring(
                                                                            3
                                                                        )
                                                                } else {
                                                                    dl.changes.contactUSForm.countryCode =
                                                                        '+1'
                                                                    dl.changes.contactUSForm.phone =
                                                                        dl.changes.userDetail.phone.substring(
                                                                            2
                                                                        )
                                                                }
                                                                dl.functions.modalsPlugin.openModal(
                                                                    'contactAdvertiserS'
                                                                )
                                                            } else {
                                                                dl.functions.modalsPlugin.openModal(
                                                                    'loginS'
                                                                )
                                                            }
                                                        }}
                                                        onClickDelete={(
                                                            val
                                                        ) => {}}
                                                        onClickBookmark={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            dl.functions.bookmarkAction(
                                                                'needAHomeList',
                                                                index,
                                                                'needahomes'
                                                            )
                                                        }}
                                                        onClickRemoveBookmark={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            dl.functions.bookmarkAction(
                                                                'needAHomeList',
                                                                index,
                                                                'needahomes'
                                                            )
                                                        }}
                                                        onClickPromote={(
                                                            val
                                                        ) => {}}
                                                        onClick={(val) => {
                                                            var homeid =
                                                                dl.changes
                                                                    .needAHomeList[
                                                                    index
                                                                ]._id
                                                            dl.functions.common.relativeRedirect(
                                                                `wantedhomedetails?homeId=${homeid}`,
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
                                {...dl.changes.rentelNodataVisible}
                            />

                            <div
                                id="t18_1038_2891"
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
                                        dl.functions.applyNeddAHomeFilter(val)
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
export default Ihaveahomerental_4
