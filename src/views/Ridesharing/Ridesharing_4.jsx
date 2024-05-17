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

import MmOfferedRideCardLg from '../../components/MmOfferedRideCardLg.jsx'
import MmHeader from '../../components/MmHeader.jsx'
import MmServiceSelector from '../../components/MmServiceSelector.jsx'
import MmFooter from '../../components/MmFooter.jsx'
import MmEmptyList from '../../components/MmEmptyList.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmOfferedRideCard from '../../components/MmOfferedRideCard.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmServiceSelectorMd from '../../components/MmServiceSelectorMd.jsx'
import MmFilterMd from '../../components/MmFilterMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmOfferedRideCardS from '../../components/MmOfferedRideCardS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmServiceSelectorS from '../../components/MmServiceSelectorS.jsx'
import MmFilterS from '../../components/MmFilterS.jsx'
import MmEmptyListS from '../../components/MmEmptyListS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmOfferedRideCardXs from '../../components/MmOfferedRideCardXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmServiceSelectorXs from '../../components/MmServiceSelectorXs.jsx'
import MmFilterXs from '../../components/MmFilterXs.jsx'
import MmEmptyListXs from '../../components/MmEmptyListXs.jsx'

const Ridesharing_4 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 400
            const element = document.getElementById('t18_822_5587')
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
                id="t18_822_5587"
                style={{
                    width: 400,
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
                    id="t18_822_5336"
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
                    <div
                        id="t18_822_5337"
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
                            id="t18_822_5338"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 5,
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

                            <MmServiceSelectorXs
                                {...dl.changes.serviceSelectorMini}
                            />

                            <div
                                id="t18_822_5343"
                                style={{
                                    height: 224,
                                    width: 400,
                                    backgroundImage:
                                        'url(https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/009b1bc68c4eec064b04205e036e5ae06eefd270.png)',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    paddingTop: 20,
                                    paddingBottom: 20,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderBottomWidth: 1,
                                    borderStyle: 'solid',
                                }}
                            >
                                <div
                                    id="t18_822_5344"
                                    style={{
                                        height: 117,
                                        width: 266,
                                        borderRadius: 5,
                                        backgroundColor:
                                            'rgba(248,246,246,1.00)',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 5,
                                    }}
                                >
                                    <div
                                        id="t18_822_5345"
                                        style={{
                                            width: 212,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            paddingLeft: 10,
                                            paddingRight: 10,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 6,
                                        }}
                                    >
                                        <span
                                            id="t18_822_5346"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 14,
                                                fontWeight: 600,
                                                color: 'rgba(0,0,0,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '16.94318199157715px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            Post your Need
                                        </span>
                                    </div>

                                    <div
                                        id="t18_822_5347"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 6,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_822_5348"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 10,
                                            }}
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/7c254faa2cae5af751c912a7443528d39e5d9d3f.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_822_5349"
                                                    style={{
                                                        height: 28,
                                                        width: 28,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                        marginTop: 0,
                                                        marginBottom: 3.5,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/7c254faa2cae5af751c912a7443528d39e5d9d3f.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}

                                            <div
                                                id="t18_822_5350"
                                                style={{
                                                    height: 5,
                                                    width: 88,
                                                    borderRadius: 20,
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
                                                    borderWidth: 0.5,
                                                    borderColor:
                                                        'rgba(186,15,23,1)',
                                                    borderStyle: 'solid',
                                                    marginTop: 3.5,
                                                    marginBottom: 0,
                                                    cursor: 'pointer',
                                                }}
                                                onClick={(e) => {
                                                    var userToken =
                                                        dl.functions.common.getCookie(
                                                            'userToken'
                                                        )
                                                    if (userToken) {
                                                        dl.functions.viewsPlugin.showView(
                                                            'ineedaride'
                                                        )
                                                        var currentPath =
                                                            dl.functions.common.getLastPath()
                                                        dl.functions.onLoadFunctions[
                                                            currentPath
                                                        ]()

                                                        var serviceSelector =
                                                            dl.changes
                                                                .serviceSelector
                                                                .services

                                                        for (var key in serviceSelector) {
                                                            serviceSelector[
                                                                key
                                                            ] =
                                                                'rgba(186,15,23,1)'
                                                        }

                                                        serviceSelector[
                                                            'ineedaride'
                                                        ] = 'rgba(156,18,24,1)'
                                                    } else {
                                                        dl.functions.modalsPlugin.openModal(
                                                            'loginS'
                                                        )
                                                    }
                                                }}
                                            >
                                                <span
                                                    id="t18_822_5351"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 11,
                                                        fontWeight: 600,
                                                        color: 'rgba(186,15,23,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '13.3125px',
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    I need a Ride
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_822_5352"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 10,
                                                marginRight: 0,
                                            }}
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/89c1fde3e8b53d3716b6fc0974c3dea8a16c0581.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_822_5353"
                                                    style={{
                                                        height: 28,
                                                        width: 28,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                        marginTop: 0,
                                                        marginBottom: 3.5,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/89c1fde3e8b53d3716b6fc0974c3dea8a16c0581.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}

                                            <div
                                                id="t18_822_5354"
                                                style={{
                                                    height: 5,
                                                    width: 88,
                                                    borderRadius: 20,
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
                                                    borderWidth: 0.5,
                                                    borderColor:
                                                        'rgba(186,15,23,1)',
                                                    borderStyle: 'solid',
                                                    marginTop: 3.5,
                                                    marginBottom: 0,
                                                    cursor: 'pointer',
                                                }}
                                                onClick={(e) => {
                                                    //                       dl.functions.viewsPlugin.showView("ihavearide")
                                                    // var currentPath = dl.functions.common.getLastPath()
                                                    // dl.functions.onLoadFunctions[currentPath]()

                                                    // var serviceSelector=dl.changes.serviceSelector.services

                                                    // for(var key in serviceSelector){
                                                    //     serviceSelector[key]="rgba(186,15,23,1)"
                                                    // }

                                                    // serviceSelector["ihavearide"]="rgba(156,18,24,1)"
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
                                                            dl.changes
                                                                .serviceSelector
                                                                .services

                                                        for (var key in serviceSelector) {
                                                            serviceSelector[
                                                                key
                                                            ] =
                                                                'rgba(186,15,23,1)'
                                                        }

                                                        serviceSelector[
                                                            'listmyride'
                                                        ] = 'rgba(156,18,24,1)'
                                                    } else {
                                                        dl.functions.modalsPlugin.openModal(
                                                            'loginLg'
                                                        )
                                                    }
                                                }}
                                            >
                                                <span
                                                    id="t18_822_5355"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 11,
                                                        fontWeight: 600,
                                                        color: 'rgba(186,15,23,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '13.3125px',
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    I have a Ride
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_822_5356"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'center',
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
                                        id="t18_822_5357"
                                        style={{
                                            height: 118,
                                            width: 266,
                                            borderRadius: 5,
                                            backgroundColor:
                                                'rgba(181,183,183,1.00)',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            paddingTop: 10,
                                            paddingBottom: 10,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0.5,
                                            borderColor: 'rgba(186,15,23,1)',
                                            borderStyle: 'solid',
                                            marginTop: 0,
                                            marginBottom: -2.5,
                                        }}
                                    >
                                        <div
                                            id="t18_822_5358"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                            }}
                                        >
                                            <MaterialDate
                                                value={
                                                    dl.changes.rideDateFilter
                                                }
                                                minDate={dl.changes.todaysDate}
                                                placeholder="Date"
                                                style={{
                                                    height: 32,
                                                    width: 214,
                                                    borderRadius: 3,
                                                    backgroundColor:
                                                        'rgba(255,255,255,1.00)',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    paddingLeft: 10,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 3.5,
                                                    cursor: 'pointer',
                                                }}
                                                onChange={(val) => {
                                                    let date = new Date(val)
                                                    date.setHours(0)
                                                    date.setMinutes(0)
                                                    date.setSeconds(0)
                                                    date.setMilliseconds(0)
                                                    // alert(date.toISOString());

                                                    dl.changes.rideDateFilter =
                                                        date.toISOString()
                                                    dl.functions.applyRideSharingFilter()
                                                }}
                                            />

                                            <select
                                                name="cars"
                                                id="t18_1021_41"
                                                // style={{height:48,width:325,borderRadius:4,backgroundColor:"rgba(255,255,255,1)",flexDirection:"row",alignItems:"center",justifyContent:"flex-end",display:"flex",itemSpacing:20,paddingLeft:10,paddingRight:10,paddingTop:0,paddingBottom:0,position:"relative",overflow:"visible",borderWidth:1,borderColor:props.inputBorderColor,borderStyle:"solid",marginLeft:8,marginRight:0,cursor:"pointer",}}
                                                style={{
                                                    height: 32,
                                                    width: 214,
                                                    borderRadius: 3,
                                                    backgroundColor:
                                                        'rgba(255,255,255,1.00)',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    paddingLeft: 10,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 3,
                                                    marginBottom: 3.5,
                                                    cursor: 'pointer',
                                                }}
                                                onChange={(val) => {
                                                    val = val.target.value
                                                    if (val == 'Offered') {
                                                        dl.functions.getRideSharing(
                                                            8,
                                                            1
                                                        )
                                                        dl.changes.rideSharingTypeSelector.value =
                                                            'Offered'
                                                    }

                                                    if (val == 'Wanted') {
                                                        dl.functions.getHaveARides(
                                                            8,
                                                            1
                                                        )
                                                        dl.changes.rideSharingTypeSelector.value =
                                                            'Wanted'
                                                    }
                                                    // console.log(val)
                                                    // props.onChange&&props.onChange(val)
                                                }}
                                            >
                                                <option
                                                    value=""
                                                    disabled
                                                    selected
                                                >
                                                    {
                                                        dl.changes
                                                            .rideSharingTypeSelector
                                                            .value
                                                    }
                                                </option>
                                                {Array.isArray(
                                                    dl.changes
                                                        .rideSharingTypeSelector
                                                        .options
                                                ) &&
                                                    dl.changes.rideSharingTypeSelector.options.map(
                                                        (item, index) => {
                                                            return (
                                                                <option
                                                                    value={item}
                                                                >
                                                                    {item}
                                                                </option>
                                                            )
                                                        }
                                                    )}
                                            </select>

                                            <MaterialAutoComplete
                                                options={
                                                    dl.changes
                                                        .ridesZipCodeoptions
                                                }
                                                onChange={(val) => {
                                                    const run = async () => {
                                                        var searchtext = val
                                                        if (isNaN(searchtext)) {
                                                            return
                                                        }
                                                        var zipcodeArr = []
                                                        var res =
                                                            await dl.functions.searchZipCode(
                                                                searchtext
                                                            )
                                                        for (
                                                            var i = 0;
                                                            i < res.length;
                                                            i++
                                                        ) {
                                                            var option =
                                                                res[i].city +
                                                                ',' +
                                                                res[i]
                                                                    .state_name +
                                                                ',' +
                                                                res[i].zip
                                                            zipcodeArr.push(
                                                                option
                                                            )
                                                        }
                                                        // alert(zipcodeArr)
                                                        dl.changes.ridesZipCodeoptions =
                                                            zipcodeArr
                                                    }
                                                    run()
                                                }}
                                                onSelect={(val) => {
                                                    var zipcode = val.split(',')
                                                    dl.changes.rideZipcode =
                                                        zipcode
                                                    // alert(val)
                                                    // dl.functions.getRideSharing("8", "1")
                                                    dl.functions.applyRideSharingFilter()
                                                }}
                                                style={{
                                                    height: 32,
                                                    width: 214,
                                                    borderRadius: 3,
                                                    backgroundColor:
                                                        'rgba(255,255,255,1.00)',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    paddingLeft: 10,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 3.5,
                                                    marginBottom: 0,
                                                    cursor: 'pointer',
                                                }}
                                                placeholder="Zipcode"
                                                value={dl.changes.rideZipcode}
                                            ></MaterialAutoComplete>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_822_5365"
                                        style={{
                                            height: 5,
                                            width: 65,
                                            borderRadius: 5,
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
                                            marginTop: -2.5,
                                            marginBottom: 0,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            dl.changes.rideZipcode = ''
                                            dl.changes.rideDateFilter = ''
                                            dl.functions.applyRideSharingFilter()
                                        }}
                                    >
                                        <span
                                            id="t18_822_5366"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 12,
                                                fontWeight: 500,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '14.522727012634277px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            Clear
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div
                                id="t18_1683_158"
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
                                    id="t18_1683_159"
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
                                            id="t18_1683_160"
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
                                        id="t18_1683_161"
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
                                    id="t18_1683_162"
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
                                id="t18_822_5378"
                                style={{
                                    width: 400,
                                    flexDirection: 'column',
                                    alignItems: 'center',
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
                                    {dl.changes.rideSharingList.map(
                                        (item, index) => {
                                            return (
                                                <div>
                                                    <MmOfferedRideCardXs
                                                        {...item}
                                                        {...dl.changes
                                                            .rideSharingList}
                                                        onClickContact={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            var id =
                                                                dl.changes
                                                                    .rideSharingList[
                                                                    index
                                                                ]._id
                                                            dl.functions.contactUsAction(
                                                                id,
                                                                'rides',
                                                                'small'
                                                            )
                                                        }}
                                                        onClickBookmark={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            dl.functions.bookmarkAction(
                                                                'rideSharingList',
                                                                index,
                                                                'rides'
                                                            )
                                                        }}
                                                        onClickRemoveBookmark={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            dl.functions.bookmarkAction(
                                                                'rideSharingList',
                                                                index,
                                                                'rides'
                                                            )
                                                        }}
                                                        onClick={(val) => {
                                                            var rideId =
                                                                dl.changes
                                                                    .rideSharingList[
                                                                    index
                                                                ]._id
                                                            dl.functions.common.relativeRedirect(
                                                                `offeredride?rideId=${rideId}`,
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
                                {...dl.changes.rideSharingNoDataVisible}
                            />

                            <div
                                id="t18_822_5448"
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
                                        var page = String(val)
                                        // dl.functions.getRideSharing("8", page)
                                        var rideType =
                                            dl.changes.rideSharingTypeSelector
                                                .value
                                        if (rideType == 'Offered') {
                                            dl.functions.getRideSharing(8, page)
                                            // dl.changes.rideSharingTypeSelector.value = "Offered"
                                        }

                                        if (rideType == 'Wanted') {
                                            dl.functions.getHaveARides(8, page)
                                            // dl.changes.rideSharingTypeSelector.value = "Wanted"
                                        }
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
export default Ridesharing_4
