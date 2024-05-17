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
import MmServiceSelector from '../../components/MmServiceSelector.jsx'
import MmCompanionOff from '../../components/MmCompanionOff.jsx'
import MmEmptyList from '../../components/MmEmptyList.jsx'
import MmCompanionOffMd from '../../components/MmCompanionOffMd.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmServiceSelectorMd from '../../components/MmServiceSelectorMd.jsx'
import MmFilterMd from '../../components/MmFilterMd.jsx'
import MmCompanionOffS from '../../components/MmCompanionOffS.jsx'
import MmServiceSelectorS from '../../components/MmServiceSelectorS.jsx'
import MmEmptyListS from '../../components/MmEmptyListS.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmFilterS from '../../components/MmFilterS.jsx'
import MmCompanionOffXs from '../../components/MmCompanionOffXs.jsx'
import MmServiceSelectorXs from '../../components/MmServiceSelectorXs.jsx'
import MmEmptyListXs from '../../components/MmEmptyListXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmFilterXs from '../../components/MmFilterXs.jsx'

const Travelcompanion_2 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 900
            const element = document.getElementById('t18_1624_2306')
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
                id="t18_1624_2306"
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
                    marginLeft: 0,
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <div
                    id="t18_1624_1679"
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
                        id="t18_1624_1680"
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
                            id="t18_1624_1681"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 31.5,
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
                                id="t18_1624_1686"
                                style={{
                                    height: 424,
                                    width: 900,
                                    backgroundImage:
                                        'url(https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/5c912ccb4db758f8f719a684c6d4fddbd5cbea8d.png)',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingTop: 22,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderBottomWidth: 1,
                                    borderStyle: 'solid',
                                }}
                            >
                                <div
                                    id="t18_1624_1687"
                                    style={{
                                        height: 246,
                                        width: 518,
                                        borderRadius: 10,
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
                                        marginBottom: 15,
                                    }}
                                >
                                    <div
                                        id="t18_1624_1688"
                                        style={{
                                            width: 450,
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
                                            marginBottom: 11.5,
                                        }}
                                    >
                                        <span
                                            id="t18_1624_1689"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 18,
                                                fontWeight: 600,
                                                color: 'rgba(0,0,0,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '21.784090042114258px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            Post your Need
                                        </span>
                                    </div>

                                    <div
                                        id="t18_1624_1690"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 11.5,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_1624_1691"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 22.5,
                                            }}
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/7c254faa2cae5af751c912a7443528d39e5d9d3f.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_1624_1692"
                                                    style={{
                                                        height: 64,
                                                        width: 64,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                        marginTop: 0,
                                                        marginBottom: 6,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/7c254faa2cae5af751c912a7443528d39e5d9d3f.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}

                                            <div
                                                id="t18_1624_1693"
                                                style={{
                                                    height: 35,
                                                    width: 156,
                                                    borderRadius: 60,
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
                                                    marginTop: 6,
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
                                                            'ineedatravelcompanionform'
                                                        )
                                                        var currentPath =
                                                            dl.functions.common.getLastPath()
                                                        dl.functions.onLoadFunctions[
                                                            currentPath
                                                        ]()
                                                    } else {
                                                        dl.functions.modalsPlugin.openModal(
                                                            'loginLg'
                                                        )
                                                    }
                                                }}
                                            >
                                                <span
                                                    id="t18_1624_1694"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 14,
                                                        fontWeight: 600,
                                                        color: 'rgba(186,15,23,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '16.94318199157715px',
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    I need a Travel Companion
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1624_1695"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 22.5,
                                                marginRight: 0,
                                            }}
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/89c1fde3e8b53d3716b6fc0974c3dea8a16c0581.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_1624_1696"
                                                    style={{
                                                        height: 64,
                                                        width: 64,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                        marginTop: 0,
                                                        marginBottom: 6,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/89c1fde3e8b53d3716b6fc0974c3dea8a16c0581.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}

                                            <div
                                                id="t18_1624_1697"
                                                style={{
                                                    height: 35,
                                                    width: 171,
                                                    borderRadius: 60,
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
                                                    marginTop: 6,
                                                    marginBottom: 0,
                                                    cursor: 'pointer',
                                                }}
                                                onClick={(e) => {
                                                    //                       dl.functions.viewsPlugin.showView("iwanttobetravelcompanion")
                                                    // var currentPath = dl.functions.common.getLastPath()
                                                    // dl.functions.onLoadFunctions[currentPath]()
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
                                                            'loginLg'
                                                        )
                                                    }
                                                }}
                                            >
                                                <span
                                                    id="t18_1624_1698"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 14,
                                                        fontWeight: 600,
                                                        color: 'rgba(186,15,23,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '16.94318199157715px',
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    I will be your Travel
                                                    Companion
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_1624_1699"
                                    style={{
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
                                    <div
                                        id="t18_1624_1700"
                                        style={{
                                            height: 89,
                                            width: 865,
                                            borderRadius: 10,
                                            backgroundColor:
                                                'rgba(248,246,246,0.80)',
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            paddingTop: 15,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 1,
                                            borderColor: 'rgba(186,15,23,1)',
                                            borderStyle: 'solid',
                                            marginTop: 0,
                                            marginBottom: -14,
                                        }}
                                    >
                                        <select
                                            name="cars"
                                            id="t18_1021_41"
                                            // style={{height:48,width:325,borderRadius:4,backgroundColor:"rgba(255,255,255,1)",flexDirection:"row",alignItems:"center",justifyContent:"flex-end",display:"flex",itemSpacing:20,paddingLeft:10,paddingRight:10,paddingTop:0,paddingBottom:0,position:"relative",overflow:"visible",borderWidth:1,borderColor:props.inputBorderColor,borderStyle:"solid",marginLeft:8,marginRight:0,cursor:"pointer",}}
                                            style={{
                                                height: 47,
                                                width: 161,
                                                borderRadius: 5,
                                                backgroundColor:
                                                    'rgba(255,255,255,1.00)',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingLeft: 5,
                                                paddingRight: 5,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 1,
                                                borderColor:
                                                    'rgba(186,15,23,1)',
                                                borderStyle: 'solid',
                                                marginLeft: 6,
                                                marginRight: 6,
                                                cursor: 'pointer',
                                            }}
                                            onChange={(val) => {
                                                val = val.target.value
                                                dl.changes.tcTopFilter.fromAirport = ''
                                                dl.changes.seletedTCTopFromAirport = ''
                                                dl.changes.selectedTCTopToAirport = ""
                                                dl.changes.tcTopFilter.toAirport = ''
                                                if (val == 'Offered') {
                                                    dl.functions.getIWantToBeTC(
                                                        8,
                                                        1
                                                    )
                                                    dl.changes.travelCompanionTypeSelector.value =
                                                        'Offered'
                                                }

                                                if (val == 'Wanted') {
                                                    dl.functions.getINeedATC(
                                                        8,
                                                        1
                                                    )
                                                    dl.changes.travelCompanionTypeSelector.value =
                                                        'Wanted'
                                                }
                                                // console.log(val)
                                                // props.onChange&&props.onChange(val)
                                            }}
                                        >
                                            <option value="" disabled selected>
                                                {
                                                    dl.changes
                                                        .travelCompanionTypeSelector
                                                        .value
                                                }
                                            </option>
                                            {Array.isArray(
                                                dl.changes
                                                    .travelCompanionTypeSelector
                                                    .options
                                            ) &&
                                                dl.changes.travelCompanionTypeSelector.options.map(
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
                                                dl.changes.tcZipcodeOptions
                                            }
                                            onChange={(val) => {
                                                var serachString = val
                                                const run = async () => {
                                                    if (val.length > 0) {
                                                        var res =
                                                            await dl.functions.getAirports(
                                                                serachString
                                                            )
                                                        dl.changes.tcZipcodeOptions =
                                                            res.airports
                                                        dl.changes.airportslist =
                                                            res.airportdetails
                                                    } else {
                                                        dl.changes.airportslist =
                                                            [
                                                                {
                                                                    city_code:
                                                                        'ORD',
                                                                    country_code:
                                                                        'US',
                                                                    name: "Chicago O'Hare International Airport",
                                                                    lat: 41.978367,
                                                                    lng: -87.904712,
                                                                    airportId:
                                                                        '64968e4476d9a5aa1686d881',
                                                                },
                                                                {
                                                                    city_code:
                                                                        'HYD',
                                                                    country_code:
                                                                        'IN',
                                                                    name: 'Rajiv Gandhi International Airport',
                                                                    lat: 17.232113,
                                                                    lng: 78.430047,
                                                                    airportId:
                                                                        '64968e4476d9a5aa1686dda9',
                                                                },
                                                                {
                                                                    city_code:
                                                                        'JFK',
                                                                    country_code:
                                                                        'US',
                                                                    name: 'John F. Kennedy International Airport',
                                                                    lat: 40.640655,
                                                                    lng: -73.781937,
                                                                    airportId:
                                                                        '64968e4476d9a5aa1686d894',
                                                                },
                                                                {
                                                                    city_code:
                                                                        'DFW',
                                                                    country_code:
                                                                        'US',
                                                                    name: 'Dallas/Fort Worth International Airport',
                                                                    lat: 32.896738,
                                                                    lng: -97.03711,
                                                                    airportId:
                                                                        '64968e4476d9a5aa1686d883',
                                                                },
                                                                {
                                                                    city_code:
                                                                        'MAA',
                                                                    country_code:
                                                                        'IN',
                                                                    name: 'Chennai International Airport',
                                                                    lat: 12.986867,
                                                                    lng: 80.166286,
                                                                    airportId:
                                                                        '64968e4476d9a5aa1686d8e5',
                                                                },
                                                                {
                                                                    city_code:
                                                                        'SFO',
                                                                    country_code:
                                                                        'US',
                                                                    name: 'San Francisco International Airport',
                                                                    lat: 37.617678,
                                                                    lng: -122.380227,
                                                                    airportId:
                                                                        '64968e4476d9a5aa1686d891',
                                                                },
                                                            ]

                                                        dl.changes.tcZipcodeOptions =
                                                            [
                                                                "Chicago O'Hare International Airport, ORD",
                                                                'Rajiv Gandhi International Airport, HYD',
                                                                'John F. Kennedy International Airport, JFK',
                                                                'Dallas/Fort Worth International Airport, DFW',
                                                                'Chennai International Airport, MAA',
                                                                'San Francisco International Airport, SFO',
                                                            ]
                                                    }
                                                }

                                                run()
                                            }}
                                            onSelect={(val) => {
                                                dl.changes.seletedTCTopFromAirport =
                                                    val
                                                var airportName = val.split(',')
                                                var airport = airportName[0]
                                                // var airport = val
                                                for (
                                                    let i = 0;
                                                    i <
                                                    dl.changes.airportslist
                                                        .length;
                                                    i++
                                                ) {
                                                    if (
                                                        dl.changes.airportslist[
                                                            i
                                                        ].name == airport
                                                    ) {
                                                        dl.changes.tcTopFilter.fromAirport =
                                                            dl.changes.airportslist[
                                                                i
                                                            ].city_code
                                                    }
                                                }
                                                dl.functions.getIWantToBeTC(
                                                    '8',
                                                    '1'
                                                )
                                            }}
                                            style={{
                                                height: 47,
                                                width: 161,
                                                borderRadius: 5,
                                                backgroundColor:
                                                    'rgba(255,255,255,1.00)',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingLeft: 5,
                                                paddingRight: 5,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0.5,
                                                borderColor:
                                                    'rgba(186,15,23,1)',
                                                borderStyle: 'solid',
                                                marginLeft: 6,
                                                marginRight: 6,
                                                cursor: 'pointer',
                                            }}
                                            placeholder="From"
                                            value={
                                                dl.changes
                                                    .seletedTCTopFromAirport
                                            }
                                        ></MaterialAutoComplete>

                                        <MaterialAutoComplete
                                            options={
                                                dl.changes.tcZipcodeOptions
                                            }
                                            onChange={(val) => {
                                                var serachString = val
                                                const run = async () => {
                                                    if (val.length > 0) {
                                                        var res =
                                                            await dl.functions.getAirports(
                                                                serachString
                                                            )
                                                        dl.changes.tcZipcodeOptions =
                                                            res.airports
                                                        dl.changes.airportslist =
                                                            res.airportdetails
                                                    } else {
                                                        dl.changes.airportslist =
                                                            [
                                                                {
                                                                    city_code:
                                                                        'ORD',
                                                                    country_code:
                                                                        'US',
                                                                    name: "Chicago O'Hare International Airport",
                                                                    lat: 41.978367,
                                                                    lng: -87.904712,
                                                                    airportId:
                                                                        '64968e4476d9a5aa1686d881',
                                                                },
                                                                {
                                                                    city_code:
                                                                        'HYD',
                                                                    country_code:
                                                                        'IN',
                                                                    name: 'Rajiv Gandhi International Airport',
                                                                    lat: 17.232113,
                                                                    lng: 78.430047,
                                                                    airportId:
                                                                        '64968e4476d9a5aa1686dda9',
                                                                },
                                                                {
                                                                    city_code:
                                                                        'JFK',
                                                                    country_code:
                                                                        'US',
                                                                    name: 'John F. Kennedy International Airport',
                                                                    lat: 40.640655,
                                                                    lng: -73.781937,
                                                                    airportId:
                                                                        '64968e4476d9a5aa1686d894',
                                                                },
                                                                {
                                                                    city_code:
                                                                        'DFW',
                                                                    country_code:
                                                                        'US',
                                                                    name: 'Dallas/Fort Worth International Airport',
                                                                    lat: 32.896738,
                                                                    lng: -97.03711,
                                                                    airportId:
                                                                        '64968e4476d9a5aa1686d883',
                                                                },
                                                                {
                                                                    city_code:
                                                                        'MAA',
                                                                    country_code:
                                                                        'IN',
                                                                    name: 'Chennai International Airport',
                                                                    lat: 12.986867,
                                                                    lng: 80.166286,
                                                                    airportId:
                                                                        '64968e4476d9a5aa1686d8e5',
                                                                },
                                                                {
                                                                    city_code:
                                                                        'SFO',
                                                                    country_code:
                                                                        'US',
                                                                    name: 'San Francisco International Airport',
                                                                    lat: 37.617678,
                                                                    lng: -122.380227,
                                                                    airportId:
                                                                        '64968e4476d9a5aa1686d891',
                                                                },
                                                            ]

                                                        dl.changes.tcZipcodeOptions =
                                                            [
                                                                "Chicago O'Hare International Airport, ORD",
                                                                'Rajiv Gandhi International Airport, HYD',
                                                                'John F. Kennedy International Airport, JFK',
                                                                'Dallas/Fort Worth International Airport, DFW',
                                                                'Chennai International Airport, MAA',
                                                                'San Francisco International Airport, SFO',
                                                            ]
                                                    }
                                                }

                                                run()
                                            }}
                                            onSelect={(val) => {
                                                dl.changes.selectedTCTopToAirport =
                                                    val
                                                var airportName = val.split(',')
                                                var airport = airportName[0]
                                                for (
                                                    let i = 0;
                                                    i <
                                                    dl.changes.airportslist
                                                        .length;
                                                    i++
                                                ) {
                                                    if (
                                                        dl.changes.airportslist[
                                                            i
                                                        ].name == airport
                                                    ) {
                                                        dl.changes.tcTopFilter.toAirport =
                                                            dl.changes.airportslist[
                                                                i
                                                            ].city_code
                                                    }
                                                }
                                                dl.functions.getIWantToBeTC(
                                                    '8',
                                                    '1'
                                                )
                                            }}
                                            style={{
                                                height: 47,
                                                width: 161,
                                                borderRadius: 5,
                                                backgroundColor:
                                                    'rgba(255,255,255,1.00)',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingLeft: 5,
                                                paddingRight: 5,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0.5,
                                                borderColor:
                                                    'rgba(186,15,23,1)',
                                                borderStyle: 'solid',
                                                marginLeft: 6,
                                                marginRight: 6,
                                                cursor: 'pointer',
                                            }}
                                            placeholder="To"
                                            value={
                                                dl.changes
                                                    .selectedTCTopToAirport
                                            }
                                        ></MaterialAutoComplete>

                                        <MaterialDate
                                            value={
                                                dl.changes.tcTopFilter.fromDate
                                            }
                                            minDate={dl.changes.todaysDate}
                                            placeholder="From date"
                                            style={{
                                                height: 47,
                                                width: 161,
                                                borderRadius: 5,
                                                backgroundColor:
                                                    'rgba(255,255,255,1.00)',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingLeft: 5,
                                                paddingRight: 6,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 1,
                                                borderColor:
                                                    'rgba(186,15,23,1)',
                                                borderStyle: 'solid',
                                                marginLeft: 6,
                                                marginRight: 6,
                                                cursor: 'pointer',
                                            }}
                                            onChange={(val) => {
                                                const formattedDate = (date) =>
                                                    `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`
                                                dl.changes.tcTopFilter.fromDate =
                                                    formattedDate(new Date(val))
                                                dl.functions.getIWantToBeTC(
                                                    '8',
                                                    '1'
                                                )
                                            }}
                                        />

                                        {/* <MaterialDate 
  value={dl.changes.tcTopFilter.toDate}
  minDate={dl.changes.todaysDate}
  
  placeholder="To date"
  style={{height:47,width:161,borderRadius:5,backgroundColor:"rgba(255,255,255,1.00)",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",display:"flex",paddingLeft:5,paddingRight:5,position:"relative",overflow:"visible",borderWidth:1,borderColor:"rgba(186,15,23,1)",borderStyle:"solid",marginLeft:6,marginRight:0,cursor:"pointer",}}
  
  
            onChange={(val)=>{
              const formattedDate = (date) => `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
dl.changes.tcTopFilter.toDate = formattedDate(new Date(val))
dl.functions.getIWantToBeTC("8", "1")
              
            }}

  
  /> */}
                                    </div>

                                    <div
                                        id="t18_1624_1716"
                                        style={{
                                            height: 25,
                                            width: 122,
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
                                            marginTop: -14,
                                            marginBottom: 0,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            dl.changes.seletedTCTopFromAirport =
                                                ''
                                            dl.changes.tcTopFilter.fromAirport =
                                                ''
                                            dl.changes.tcTopFilter.toAirport =
                                                ''
                                            dl.changes.selectedTCTopToAirport =
                                                ''
                                            dl.changes.tcTopFilter.fromDate = ''
                                            dl.changes.tcTopFilter.toDate = ''
                                            dl.functions.getIWantToBeTC(
                                                '8',
                                                '1'
                                            )
                                        }}
                                    >
                                        <span
                                            id="t18_1624_1717"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 17,
                                                fontWeight: 500,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '20.573863983154297px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            Clear
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div
                                id="t18_1624_2291"
                                style={{
                                    width: 900,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingBottom: 15,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderTopWidth: 1,
                                }}
                            >
                                <div
                                    id="t18_1624_2292"
                                    style={{
                                        width: 818,
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 32,
                                        paddingRight: 50,
                                        paddingTop: 20,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                    }}
                                >
                                    <div
                                        id="t18_1624_2293"
                                        style={{
                                            width: 141,
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
                                                id="t18_1624_2294"
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
                                            id="t18_1624_2295"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 20,
                                                fontWeight: 600,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '24.204544067382812px',
                                                textAlign: 'center',
                                                marginLeft: 5,
                                                marginRight: 0,
                                            }}
                                        >
                                            Filters
                                        </span>
                                    </div>

                                    <div
                                        id="t18_1624_2296"
                                        style={{
                                            width: 689,
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
                                                                .travelCompanionTypeSelector
                                                                .value ==
                                                            'Wanted' ? (
                                                                // dl.changes.universalFiltersList = dl.changes.travelComapanionFilter;
                                                                <MmFilterMd
                                                                    {...item}
                                                                    {...dl
                                                                        .changes
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
                                                                    {...dl
                                                                        .changes
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
                            </div>

                            <div
                                id="t18_1624_1742"
                                style={{
                                    width: 900,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
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
                                    {dl.changes.wantToBeATCList.map(
                                        (item, index) => {
                                            return (
                                                <div>
                                                    <MmCompanionOffMd
                                                        {...item}
                                                        {...dl.changes
                                                            .wantToBeATCList}
                                                        onClickEdit={(
                                                            val
                                                        ) => {}}
                                                        onClickContact={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            var id =
                                                                dl.changes
                                                                    .wantToBeATCList[
                                                                    index
                                                                ]._id
                                                            dl.functions.contactUsAction(
                                                                id,
                                                                'willBeATravelCompanion',
                                                                'large'
                                                            )
                                                        }}
                                                        onClickDelete={(
                                                            val
                                                        ) => {}}
                                                        onClick={(val) => {
                                                            if (
                                                                dl.changes
                                                                    .travelCompanionTypeSelector
                                                                    .value ==
                                                                'Wanted'
                                                            ) {
                                                                var tcId =
                                                                    dl.changes
                                                                        .wantToBeATCList[
                                                                        index
                                                                    ]._id
                                                                dl.functions.common.relativeRedirect(
                                                                    `wantedtcdetails?tcId=${tcId}`,
                                                                    true
                                                                )
                                                            } else {
                                                                var tcId =
                                                                    dl.changes
                                                                        .wantToBeATCList[
                                                                        index
                                                                    ]._id
                                                                dl.functions.common.relativeRedirect(
                                                                    `offeredtcdetails?tcId=${tcId}`,
                                                                    true
                                                                )
                                                            }
                                                            //                 var tcId = dl.changes.wantToBeATCList[index]._id
                                                            // dl.functions.common.relativeRedirect(`offeredtcdetails?tcId=${tcId}`,true)
                                                        }}
                                                        onClickBookmark={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            dl.functions.bookmarkAction(
                                                                'wantToBeATCList',
                                                                index,
                                                                'willbeatravelcompanions'
                                                            )
                                                        }}
                                                        onClickRemoveBookmark={(
                                                            val
                                                        ) => {
                                                            val.stopPropagation()
                                                            dl.functions.bookmarkAction(
                                                                'wantToBeATCList',
                                                                index,
                                                                'willbeatravelcompanions'
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

                            <MmEmptyList {...dl.changes.needATCNoDataVisible} />

                            <div
                                id="t18_1624_1778"
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
                                        var page = String(val)
                                        dl.changes.paginationState.active =
                                            Number(val)
                                        // dl.functions.getIWantToBeTC("8", page)
                                        var tcType =
                                            dl.changes
                                                .travelCompanionTypeSelector
                                                .value
                                        if (tcType == 'Offered') {
                                            dl.functions.getIWantToBeTC(8, page)
                                        }

                                        if (tcType == 'Wanted') {
                                            dl.functions.getINeedATC(8, page)
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
export default Travelcompanion_2
