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
import MmWantedRideCard from '../../components/MmWantedRideCard.jsx'
import MmFooter from '../../components/MmFooter.jsx'
import MmEmptyList from '../../components/MmEmptyList.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmWantedRideCardMd from '../../components/MmWantedRideCardMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmFilterMd from '../../components/MmFilterMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmWantedRideCardS from '../../components/MmWantedRideCardS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmFilterS from '../../components/MmFilterS.jsx'
import MmEmptyListS from '../../components/MmEmptyListS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmWantedRideCardXs from '../../components/MmWantedRideCardXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmFilterXs from '../../components/MmFilterXs.jsx'
import MmEmptyListXs from '../../components/MmEmptyListXs.jsx'

const Ihavearide_1 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_872_6024')
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
                id="t18_872_6024"
                style={{
                    width: 1440,
                    flexDirection: 'row',
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
                <div
                    id="t18_872_5634"
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
                    <MmHeader
                        {...dl.changes.userDetail}
                        onChangeAddress={(val) => {
                            dl.functions.modalsPlugin.openModal(
                                'AddressPopupLg'
                            )
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
                        id="t18_872_5637"
                        style={{
                            height: 76,
                            width: 1332,
                            backgroundColor: 'rgba(248,246,246,1.00)',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingLeft: 108,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <span
                            id="t18_872_5638"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 16,
                                fontWeight: 500,
                                color: 'rgba(113,113,113,1)',
                                letterSpacing: 0,
                                lineHeight: '19.363636016845703px',
                                textAlign: 'left',
                                marginLeft: 0,
                                marginRight: 4,
                            }}
                        >
                            Ride sharing
                        </span>

                        <div
                            id="t18_872_5639"
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
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/895f27f08df0738b6130654a5ed8d2f87a799400.png' !=
                            '' ? (
                                <img
                                    id="t18_872_5640"
                                    style={{
                                        height: 13.022064208984375,
                                        width: 7,
                                        display: 'flex',
                                        borderWidth: 0,
                                        marginLeft: 0,
                                        marginRight: 1,
                                    }}
                                    src={
                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/895f27f08df0738b6130654a5ed8d2f87a799400.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}

                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/895f27f08df0738b6130654a5ed8d2f87a799400.png' !=
                            '' ? (
                                <img
                                    id="t18_872_5641"
                                    style={{
                                        height: 13.022064208984375,
                                        width: 7,
                                        display: 'flex',
                                        borderWidth: 0,
                                        marginLeft: 1,
                                        marginRight: 0,
                                    }}
                                    src={
                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/895f27f08df0738b6130654a5ed8d2f87a799400.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}
                        </div>

                        <span
                            id="t18_872_5642"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 16,
                                fontWeight: 500,
                                color: 'rgba(113,113,113,1)',
                                letterSpacing: 0,
                                lineHeight: '19.363636016845703px',
                                textAlign: 'left',
                                marginLeft: 4,
                                marginRight: 0,
                            }}
                        >
                            I have a ride
                        </span>
                    </div>

                    <div
                        id="t18_872_5643"
                        style={{
                            flexDirection: 'row',
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
                            id="t18_872_5644"
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
                                dataSource={dl.changes.rideSharingFilter}
                                onChange={(val) => {
                                    dl.functions.applyhaveARideFilter()
                                }}
                            />

                            <div
                                id="t18_872_5713"
                                style={{
                                    width: 1064,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingTop: 30,
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
                                    id="t18_872_5714"
                                    className={' contact-btn'}
                                    style={{
                                        height: 60,
                                        width: 286,
                                        borderRadius: 30,
                                        backgroundColor: 'rgba(186,15,23,1.00)',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        var userToken =
                                            dl.functions.common.getCookie(
                                                'userToken'
                                            )
                                        if (userToken) {
                                            dl.functions.viewsPlugin.showView(
                                                'listmyride'
                                            )
                                            var currentPath =
                                                dl.functions.common.getLastPath()
                                            dl.functions.onLoadFunctions[
                                                currentPath
                                            ]()
                                            var serviceSelector =
                                                dl.changes.serviceSelector
                                                    .services

                                            for (var key in serviceSelector) {
                                                serviceSelector[key] =
                                                    'rgba(186,15,23,1)'
                                            }

                                            serviceSelector['listmyride'] =
                                                'rgba(156,18,24,1)'
                                        } else {
                                            dl.functions.modalsPlugin.openModal(
                                                'loginLg'
                                            )
                                        }
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/305019dfaf4bb0a5ce6337097f315921a3f5e583.png' !=
                                    '' ? (
                                        <img
                                            id="t18_872_5715"
                                            style={{
                                                height: 27,
                                                width: 27,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 8.5,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/305019dfaf4bb0a5ce6337097f315921a3f5e583.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <span
                                        id="t18_872_5716"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 20,
                                            fontWeight: 500,
                                            color: 'rgba(255,255,255,1)',
                                            letterSpacing: 0,
                                            lineHeight: '24.204544067382812px',
                                            textAlign: 'center',
                                            marginLeft: 8.5,
                                            marginRight: 0,
                                        }}
                                    >
                                        List my Ride
                                    </span>
                                </div>

                                <div
                                    id="t18_872_5717"
                                    style={{
                                        width: 1061,
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingTop: 20,
                                        paddingBottom: 20,
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
                                        {dl.changes.haveARideList.map(
                                            (item, index) => {
                                                return (
                                                    <div>
                                                        <MmWantedRideCard
                                                            {...item}
                                                            {...dl.changes
                                                                .haveARideList}
                                                            onClickContact={(
                                                                val
                                                            ) => {
                                                                val.stopPropagation()
                                                                var id =
                                                                    dl.changes
                                                                        .haveARideList[
                                                                        index
                                                                    ]._id
                                                                dl.functions.contactUsAction(
                                                                    id,
                                                                    'rides',
                                                                    'large'
                                                                )
                                                            }}
                                                            onClickBookmark={(
                                                                val
                                                            ) => {
                                                                val.stopPropagation()
                                                                dl.functions.bookmarkAction(
                                                                    'haveARideList',
                                                                    index,
                                                                    'rides'
                                                                )
                                                            }}
                                                            onClickRemoveBookmark={(
                                                                val
                                                            ) => {
                                                                val.stopPropagation()
                                                                dl.functions.bookmarkAction(
                                                                    'haveARideList',
                                                                    index,
                                                                    'rides'
                                                                )
                                                            }}
                                                            onClick={(val) => {
                                                                var rideId =
                                                                    dl.changes
                                                                        .haveARideList[
                                                                        index
                                                                    ]._id
                                                                dl.functions.common.relativeRedirect(
                                                                    `wantedride?rideId=${rideId}`,
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

                                <MmEmptyList
                                    {...dl.changes.haveARideNoDataVisible}
                                />

                                <div
                                    id="t18_872_5749"
                                    style={{
                                        height: 3,
                                        width: 1003,
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
                                        active={
                                            dl.changes.paginationState.active
                                        }
                                        onChange={(val) => {
                                            dl.functions.applyhaveARideFilter(
                                                val
                                            )
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        id="t18_872_5762"
                        style={{
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingTop: 20,
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
        </div>
    )
})
export default Ihavearide_1
