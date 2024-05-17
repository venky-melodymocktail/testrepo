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

import MmFooter from '../../components/MmFooter.jsx'
import MmHeader from '../../components/MmHeader.jsx'
import MmCompanionWan from '../../components/MmCompanionWan.jsx'
import MmEmptyList from '../../components/MmEmptyList.jsx'
import MmCompanionWanMd from '../../components/MmCompanionWanMd.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmFilterMd from '../../components/MmFilterMd.jsx'
import MmCompanionWanS from '../../components/MmCompanionWanS.jsx'
import MmEmptyListS from '../../components/MmEmptyListS.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmFilterS from '../../components/MmFilterS.jsx'
import MmCompanionWanXs from '../../components/MmCompanionWanXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmEmptyListXs from '../../components/MmEmptyListXs.jsx'
import MmFilterXs from '../../components/MmFilterXs.jsx'

const Iwanttobetravelcompanion_3 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 620
            const element = document.getElementById('t18_1624_2310')
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
                id="t18_1624_2310"
                style={{
                    width: 620,
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
                    id="t18_1624_2110"
                    style={{
                        width: 620,
                        backgroundColor: 'rgba(255,255,255,1.00)',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_1624_2111"
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
                            id="t18_1624_2112"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 26.5,
                            }}
                        >
                            <MmHeaderS
                                {...dl.changes.userDetail}
                                onChangeAddress={(val) => {
                                    dl.functions.modalsPlugin.openModal(
                                        'AddressPopupS'
                                    )
                                }}
                                onClickMenu={(val) => {}}
                                onLogIn={(val) => {
                                    dl.functions.viewsPlugin.showView('login')
                                }}
                                onClickProfile={(val) => {
                                    dl.functions.viewsPlugin.showView('profile')
                                    var currentPath =
                                        dl.functions.common.getLastPath()
                                    dl.functions.onLoadFunctions[currentPath]()
                                }}
                            />

                            <div
                                id="t18_1624_2115"
                                style={{
                                    height: 40,
                                    width: 590,
                                    backgroundColor: 'rgba(248,246,246,1.00)',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingLeft: 30,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderBottomWidth: 1,
                                    borderStyle: 'solid',
                                }}
                            >
                                <span
                                    id="t18_1624_2116"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 500,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
                                        textAlign: 'left',
                                        marginLeft: 0,
                                        marginRight: 7,
                                    }}
                                >
                                    Travel companion
                                </span>

                                <div
                                    id="t18_1624_2117"
                                    style={{
                                        height: 10,
                                        width: 11,
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 7,
                                        marginRight: 7,
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/83d78575792856e766bb4b65ca55e6822443925f.png' !=
                                    '' ? (
                                        <img
                                            id="t18_1624_2118"
                                            style={{
                                                height: 13,
                                                width: 7,
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
                                            id="t18_1624_2119"
                                            style={{
                                                height: 13,
                                                width: 7,
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
                                    id="t18_1624_2120"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 500,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
                                        textAlign: 'left',
                                        marginLeft: 7,
                                        marginRight: 0,
                                    }}
                                >
                                    I will be your travel companion
                                </span>
                            </div>

                            <div
                                id="t18_1624_2121"
                                style={{
                                    width: 620,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderTopWidth: 1,
                                }}
                            >
                                <div
                                    id="t18_1624_2122"
                                    style={{
                                        width: 549,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 21,
                                        paddingRight: 50,
                                        paddingTop: 20,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                    }}
                                >
                                    <div
                                        id="t18_1624_2123"
                                        style={{
                                            height: 15,
                                            width: 126,
                                            borderRadius: 7,
                                            backgroundColor:
                                                'rgba(186,15,23,1.00)',
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
                                            dl.functions.modalsPlugin.openModal(
                                                'filter'
                                            )
                                        }}
                                    >
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/826373dad5dd0e37209a226b39515b5d2478d996.png' !=
                                        '' ? (
                                            <img
                                                id="t18_1624_2124"
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
                                            id="t18_1624_2125"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 16,
                                                fontWeight: 600,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '19.363636016845703px',
                                                textAlign: 'center',
                                                marginLeft: 5,
                                                marginRight: 0,
                                            }}
                                        >
                                            Filters
                                        </span>
                                    </div>

                                    <div
                                        id="t18_1624_2273"
                                        style={{
                                            width: 440,
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
                                                                onRemove={(
                                                                    val
                                                                ) => {
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
                            </div>

                            <div
                                id="t18_1624_2132"
                                style={{
                                    height: 60,
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
                                }}
                            >
                                <div
                                    id="t18_1624_2133"
                                    style={{
                                        height: 41,
                                        width: 306,
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
                                                'iwanttobetcform'
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
                                            id="t18_1624_2134"
                                            style={{
                                                height: 23,
                                                width: 23,
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
                                        id="t18_1624_2135"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 16,
                                            fontWeight: 500,
                                            color: 'rgba(255,255,255,1)',
                                            letterSpacing: 0,
                                            lineHeight: '19.363636016845703px',
                                            textAlign: 'center',
                                            marginLeft: 5.5,
                                            marginRight: 0,
                                        }}
                                    >
                                        I want to be a travel companion
                                    </span>
                                </div>
                            </div>

                            <div
                                id="t18_1624_2136"
                                style={{
                                    width: 600,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
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
                                <div
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {dl.changes.needATCList.map(
                                        (item, index) => {
                                            return (
                                                <div>
                                                    <MmCompanionWanS
                                                        {...item}
                                                        {...dl.changes
                                                            .needATCList}
                                                        onClickEdit={(
                                                            val
                                                        ) => {}}
                                                        onClickContact={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            var id =
                                                                dl.changes
                                                                    .needATCList[
                                                                    index
                                                                ]._id
                                                            dl.functions.contactUsAction(
                                                                id,
                                                                'travelCompanion',
                                                                'small'
                                                            )
                                                        }}
                                                        onClickDelete={(
                                                            val
                                                        ) => {}}
                                                        onClick={(val) => {
                                                            var tcId =
                                                                dl.changes
                                                                    .needATCList[
                                                                    index
                                                                ]._id
                                                            dl.functions.common.relativeRedirect(
                                                                `wantedtcdetails?tcId=${tcId}`,
                                                                true
                                                            )
                                                        }}
                                                        onClickBookmark={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            dl.functions.bookmarkAction(
                                                                'needATCList',
                                                                index,
                                                                'travelcompanions'
                                                            )
                                                        }}
                                                        onClickRemoveBookmark={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            dl.functions.bookmarkAction(
                                                                'needATCList',
                                                                index,
                                                                'travelcompanions'
                                                            )
                                                        }}
                                                        onClickPromote={(
                                                            val
                                                        ) => {}}
                                                    />
                                                </div>
                                            )
                                        }
                                    )}
                                </div>
                            </div>

                            <MmEmptyListS
                                {...dl.changes.wantToBeTCNoDataVisible}
                            />

                            <div
                                id="t18_1624_2174"
                                style={{
                                    height: 38,
                                    width: 610,
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
                                        var page = String(val)
                                        dl.changes.paginationState.active =
                                            Number(val)
                                        dl.functions.getINeedATC('8', page)
                                    }}
                                />
                            </div>
                        </div>

                        <MmFooterS />
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Iwanttobetravelcompanion_3
