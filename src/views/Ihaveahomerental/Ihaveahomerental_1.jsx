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

const Ihaveahomerental_1 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_1193_1067')
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
                id="t18_1193_1067"
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
                <div
                    id="t18_1038_2582"
                    style={{
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
                        id="t18_1038_2583"
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
                                var currentPath =
                                    dl.functions.common.getLastPath()
                                dl.functions.onLoadFunctions[currentPath]()
                            }}
                        />

                        <div
                            id="t18_1038_2586"
                            style={{
                                height: 58,
                                width: 1340,
                                backgroundColor: 'rgba(248,246,246,1.00)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingLeft: 100,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                borderColor: 'rgba(207,206,206,1)',
                                borderBottomWidth: 1,
                                borderStyle: 'solid',
                            }}
                        >
                            <span
                                id="t18_1038_2587"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 500,
                                    color: 'rgba(113,113,113,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginLeft: 0,
                                    marginRight: 7,
                                }}
                            >
                                Rooms/Roommates
                            </span>

                            <div
                                id="t18_1038_2588"
                                style={{
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
                                        id="t18_1038_2589"
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
                                        id="t18_1038_2590"
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
                                id="t18_1038_2591"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 500,
                                    color: 'rgba(113,113,113,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginLeft: 7,
                                    marginRight: 0,
                                }}
                            >
                                I have a home
                            </span>
                        </div>

                        <div
                            id="t18_1038_2592"
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
                                borderBottomWidth: 1,
                                borderStyle: 'solid',
                            }}
                        >
                            <MMFilter
                                dataSource={dl.changes.needAHomeFilter}
                                onChange={(val) => {
                                    dl.functions.applyNeddAHomeFilter()
                                }}
                            />

                            <div
                                id="t18_1038_2624"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
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
                                    id="t18_1038_2625"
                                    style={{
                                        width: 1096,
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingTop: 32,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                    }}
                                >
                                    {/* <div
    id='t18_1038_2626'
    
    

    style={{width:1066,flexDirection:"column",alignItems:"center",justifyContent:"center",display:"flex",paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10,position:"relative",overflow:"visible",borderWidth:0,marginTop:0,marginBottom:15.5,}}
    
    


>

    
    
    <div
    id='t18_1038_2627'
    className={ ' contact-btn'}
    

    style={{height:60,width:257,borderRadius:30,backgroundColor:"rgba(186,15,23,1.00)",flexDirection:"row",alignItems:"center",justifyContent:"center",display:"flex",position:"relative",overflow:"visible",borderWidth:0,cursor:"pointer",}}
    
    
                    onClick={(e)=>{
                    
                    
                      var userToken = dl.functions.common.getCookie("userToken")

if(userToken){
    dl.functions.viewsPlugin.showView("listmyhomeform")
    var currentPath = dl.functions.common.getLastPath()
    dl.functions.onLoadFunctions[currentPath]()
}
else{
    dl.functions.modalsPlugin.openModal('loginLg')
}
        }
    } 


>

    
    
   {"https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/41a7227774b5b1086601e797a1f6691e1f551b82.png"!=""? <img
    id='t18_1038_2628'
    
    

    style={{height:27,width:27,display:"flex",borderWidth:0,marginLeft:0,marginRight:5.5,}}
    
    

    src={"https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/41a7227774b5b1086601e797a1f6691e1f551b82.png"}


>

    
</img>:<></>}
    
    
    
    
    <span
                   
    id='t18_1038_2629'
    
    

    

    style={{fontFamily:"Inter",fontSize:20,fontWeight:500,color:"rgba(255,255,255,1)",letterSpacing:0,lineHeight:"24.204544067382812px",textAlign:"center",marginLeft:5.5,marginRight:0,}}
                >
                    List my home
                    
                </span>    
    
    
</div>
    
    
    
    
</div> */}

                                    {/* /// for room and home rental selector(Toggele) */}
                                    <div
                                        id="t18_1036_1471"
                                        style={{
                                            width: 868,
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingLeft: 80,
                                            paddingRight: 10,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 24,
                                        }}
                                    >
                                        <div
                                            id="t18_1036_1472"
                                            style={{
                                                height: 52,
                                                width: 456,
                                                borderRadius: 30,
                                                backgroundColor:
                                                    'rgba(248,246,246,1.00)',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingLeft: 4,
                                                paddingRight: 4,
                                                paddingTop: 4,
                                                paddingBottom: 4,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 2,
                                                borderColor:
                                                    'rgba(186,15,23,1)',
                                                borderStyle: 'solid',
                                            }}
                                        >
                                            <div
                                                id="t18_1036_1473"
                                                style={{
                                                    height: 32,
                                                    width: 204,
                                                    borderRadius: 30,
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
                                                    marginLeft: 0,
                                                    marginRight: 15,
                                                    cursor: 'pointer',
                                                }}
                                                onClick={(e) => {
                                                    dl.functions.viewsPlugin.showView(
                                                        'rooms'
                                                    )
                                                    var currentPath =
                                                        dl.functions.common.getLastPath()
                                                    dl.functions.onLoadFunctions[
                                                        currentPath
                                                    ]()
                                                }}
                                            >
                                                <span
                                                    id="t18_1036_1474"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 20,
                                                        fontWeight: 500,
                                                        color: 'rgba(186,15,23,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '24.204544067382812px',
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    Roommates
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1036_1532"
                                                style={{
                                                    height: 28,
                                                    width: 180,
                                                    borderRadius: 30,
                                                    backgroundColor:
                                                        'rgba(186,15,23,1.00)',
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
                                                    marginLeft: 15,
                                                    marginRight: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_1036_1475"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 20,
                                                        fontWeight: 500,
                                                        color: 'rgba(255,255,255,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '24.204544067382812px',
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    Home Rentals
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* /// for offered and wanted toggle button */}
                                    <div
                                        id="t18_1036_1471"
                                        style={{
                                            width: 868,
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingLeft: 80,
                                            paddingRight: 10,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 24,
                                        }}
                                    >
                                        <div
                                            id="t18_1036_1472"
                                            style={{
                                                height: 52,
                                                width: 456,
                                                borderRadius: 30,
                                                backgroundColor:
                                                    'rgba(248,246,246,1.00)',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingLeft: 4,
                                                paddingRight: 4,
                                                paddingTop: 4,
                                                paddingBottom: 4,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 2,
                                                borderColor:
                                                    'rgba(186,15,23,1)',
                                                borderStyle: 'solid',
                                            }}
                                        >
                                            <div
                                                id="t18_1036_1473"
                                                style={{
                                                    height: 32,
                                                    width: 204,
                                                    borderRadius: 30,
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
                                                    marginLeft: 0,
                                                    marginRight: 15,
                                                    cursor: 'pointer',
                                                }}
                                                onClick={(e) => {
                                                    dl.functions.viewsPlugin.showView(
                                                        'homerentals'
                                                    )
                                                    var currentPath =
                                                        dl.functions.common.getLastPath()
                                                    dl.functions.onLoadFunctions[
                                                        currentPath
                                                    ]()
                                                }}
                                            >
                                                <span
                                                    id="t18_1036_1474"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 20,
                                                        fontWeight: 500,
                                                        color: 'rgba(186,15,23,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '24.204544067382812px',
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    Offered
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1036_1532"
                                                style={{
                                                    height: 28,
                                                    width: 180,
                                                    borderRadius: 30,
                                                    backgroundColor:
                                                        'rgba(186,15,23,1.00)',
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
                                                    marginLeft: 15,
                                                    marginRight: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_1036_1475"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 20,
                                                        fontWeight: 500,
                                                        color: 'rgba(255,255,255,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '24.204544067382812px',
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    Wanted
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ////////////////////// */}

                                    <div
                                        id="t18_1038_2630"
                                        style={{
                                            width: 1096,
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingTop: 10,
                                            paddingBottom: 10,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 15.5,
                                            marginBottom: 15.5,
                                        }}
                                    >
                                        <div
                                            id="t18_1038_2631"
                                            style={{
                                                width: 1086,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
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
                                                                <MmWantedHomeCard
                                                                    {...item}
                                                                    {...dl
                                                                        .changes
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
                                                                        if (
                                                                            userToken
                                                                        ) {
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
                                                                                dl
                                                                                    .changes
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
                                                                                'contactAdvertiserLg'
                                                                            )
                                                                        } else {
                                                                            dl.functions.modalsPlugin.openModal(
                                                                                'loginLg'
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
                                                                    onClick={(
                                                                        val
                                                                    ) => {
                                                                        var homeid =
                                                                            dl
                                                                                .changes
                                                                                .needAHomeList[
                                                                                index
                                                                            ]
                                                                                ._id
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
                                    </div>

                                    <MmEmptyList
                                        {...dl.changes.rentelNodataVisible}
                                    />
                                </div>

                                <div
                                    id="t18_1038_2661"
                                    style={{
                                        height: 56,
                                        width: 1036,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        paddingLeft: 60,
                                        paddingTop: 10,
                                        paddingBottom: 10,
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
                                            dl.changes.paginationState.active =
                                                val
                                            dl.functions.applyNeddAHomeFilter(
                                                val
                                            )
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <MmFooter />
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Ihaveahomerental_1
