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

const Ridesharing_2 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 900
            const element = document.getElementById('t18_822_5585')
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
                id="t18_822_5585"
                style={{
                    width: 900,
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
                    id="t18_822_5136"
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
                    <div
                        id="t18_822_5137"
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
                            id="t18_822_5138"
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
                            <MmHeaderMd
                                {...dl.changes.userDetail}
                                onChangeAddress={(val) => {
                                    dl.functions.modalsPlugin.openModal(
                                        'AddressPopupLg'
                                    )
                                }}
                                onClickMenu={(val) => {
                                    dl.functions.modalsPlugin.openModal(
                                        'navigationMd'
                                    )
                                }}
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

                            <MmServiceSelectorMd
                                {...dl.changes.serviceSelectorMini}
                            />

                            <div
                                id="t18_822_5143"
                                style={{
                                    height: 445,
                                    width: 900,
                                    backgroundImage:
                                        'url(https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/5c912ccb4db758f8f719a684c6d4fddbd5cbea8d.png)',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
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
                                    id="t18_822_5144"
                                    style={{
                                        height: 209,
                                        width: 398,
                                        borderRadius: 10,
                                        backgroundColor:
                                            'rgba(234,234,234,1.00)',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 12,
                                    }}
                                >
                                    <span
                                        id="t18_822_5145"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 18,
                                            fontWeight: 600,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '21.784090042114258px',
                                            textAlign: 'center',
                                            marginTop: 0,
                                            marginBottom: 12.5,
                                        }}
                                    >
                                        Post your Need
                                    </span>

                                    <div
                                        id="t18_822_5146"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 12.5,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_822_5147"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 14.5,
                                            }}
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/d90c9f2c357b3b86b1ad8bc04dad8fe2ac82cfe1.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_822_5148"
                                                    style={{
                                                        height: 54,
                                                        width: 54,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                        marginTop: 0,
                                                        marginBottom: 5,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/d90c9f2c357b3b86b1ad8bc04dad8fe2ac82cfe1.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}

                                            <div
                                                id="t18_822_5149"
                                                style={{
                                                    height: 16,
                                                    width: 136,
                                                    borderRadius: 100,
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
                                                    borderWidth: 2,
                                                    borderColor:
                                                        'rgba(186,15,23,1)',
                                                    borderStyle: 'solid',
                                                    marginTop: 5,
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
                                                            'loginLg'
                                                        )
                                                    }
                                                }}
                                            >
                                                <span
                                                    id="t18_822_5150"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 16,
                                                        fontWeight: 600,
                                                        color: 'rgba(186,15,23,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '19.363636016845703px',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    I need a Ride
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_822_5151"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 14.5,
                                                marginRight: 0,
                                            }}
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/a7c3d03bc5534c21c456f86d36948d06ab0236cb.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_822_5152"
                                                    style={{
                                                        height: 54,
                                                        width: 54,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                        marginTop: 0,
                                                        marginBottom: 5,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/a7c3d03bc5534c21c456f86d36948d06ab0236cb.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}

                                            <div
                                                id="t18_822_5153"
                                                style={{
                                                    height: 16,
                                                    width: 136,
                                                    borderRadius: 100,
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
                                                    borderWidth: 2,
                                                    borderColor:
                                                        'rgba(186,15,23,1)',
                                                    borderStyle: 'solid',
                                                    marginTop: 5,
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
                                                    id="t18_822_5154"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 16,
                                                        fontWeight: 600,
                                                        color: 'rgba(186,15,23,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '19.363636016845703px',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    I have a Ride
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_822_5155"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 12,
                                        marginBottom: 0,
                                    }}
                                >
                                    <div
                                        id="t18_822_5156"
                                        style={{
                                            height: 81,
                                            width: 693,
                                            borderRadius: 15,
                                            backgroundColor:
                                                'rgba(203,202,202,0.80)',
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            paddingTop: 15,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 1.5,
                                            borderColor: 'rgba(186,15,23,1)',
                                            borderStyle: 'solid',
                                            marginTop: 0,
                                            marginBottom: -7.5,
                                        }}
                                    >
                                        <MaterialDate
                                            value={dl.changes.rideDateFilter}
                                            minDate={dl.changes.todaysDate}
                                            placeholder="Search Date Filter"
                                            style={{
                                                height: 46,
                                                width: 204,
                                                borderRadius: 5,
                                                backgroundColor:
                                                    'rgba(255,255,255,1.00)',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                display: 'flex',
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 7.5,
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
                                                height: 46,
                                                width: 204,
                                                borderRadius: 5,
                                                backgroundColor:
                                                    'rgba(255,255,255,1.00)',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                display: 'flex',
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 7.5,
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
                                            <option value="" disabled selected>
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
                                                dl.changes.ridesZipCodeoptions
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
                                                            res[i].state_name +
                                                            ',' +
                                                            res[i].zip
                                                        zipcodeArr.push(option)
                                                    }
                                                    // alert(zipcodeArr)
                                                    dl.changes.ridesZipCodeoptions =
                                                        zipcodeArr
                                                }
                                                run()
                                            }}
                                            onSelect={(val) => {
                                                var zipcode = val.split(',')
                                                dl.changes.rideZipcode = zipcode
                                                // alert(val)
                                                // dl.functions.getRideSharing("8", "1")
                                                dl.functions.applyRideSharingFilter()
                                            }}
                                            style={{
                                                height: 46,
                                                width: 208,
                                                borderRadius: 5,
                                                backgroundColor:
                                                    'rgba(255,255,255,1.00)',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 7.5,
                                                marginRight: 0,
                                                cursor: 'pointer',
                                            }}
                                            placeholder="Search By Zipcode"
                                            value={dl.changes.rideZipcode}
                                        ></MaterialAutoComplete>
                                    </div>

                                    <div
                                        id="t18_822_5163"
                                        style={{
                                            height: 28,
                                            width: 138,
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
                                            marginTop: -7.5,
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
                                            id="t18_822_5164"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 18,
                                                fontWeight: 600,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '21.784090042114258px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            Clear
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div
                                id="t18_1683_174"
                                style={{
                                    width: 816,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingLeft: 34,
                                    paddingRight: 50,
                                    paddingTop: 20,
                                    paddingBottom: 20,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                }}
                            >
                                <div
                                    id="t18_1683_175"
                                    style={{
                                        width: 141,
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
                                            id="t18_1683_176"
                                            style={{
                                                height: 12,
                                                width: 17,
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
                                        id="t18_1683_177"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 20,
                                            fontWeight: 600,
                                            color: 'rgba(255,255,255,1)',
                                            letterSpacing: 0,
                                            lineHeight: '24.204544067382812px',
                                            textAlign: 'center',
                                            marginLeft: 5,
                                            marginRight: 0,
                                        }}
                                    >
                                        Filters
                                    </span>
                                </div>

                                <div
                                    id="t18_1683_178"
                                    style={{
                                        width: 690,
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
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
                                                        {dl.changes
                                                            .rideSharingTypeSelector
                                                            .value ==
                                                        'Wanted' ? (
                                                            <MmFilterMd
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
                                                        ) : (
                                                            <MmFilterMd
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
                                                        )}
                                                    </div>
                                                )
                                            }
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div
                                id="t18_822_5189"
                                style={{
                                    width: 900,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingTop: 20,
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
                                    {dl.changes.rideSharingList.map(
                                        (item, index) => {
                                            return (
                                                <div>
                                                    <MmOfferedRideCard
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
                                                                'large'
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

                            <MmEmptyList
                                {...dl.changes.rideSharingNoDataVisible}
                            />

                            <div
                                id="t18_822_5225"
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

                        <MmFooterMd />
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Ridesharing_2
