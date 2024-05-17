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

const Travelcompanion_4 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 400
            const element = document.getElementById('t18_1624_2308')
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
                id="t18_1624_2308"
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
                    id="t18_1624_1900"
                    style={{
                        width: 400,
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
                        id="t18_1624_1901"
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
                            id="t18_1624_1902"
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

                            <MmServiceSelectorXs
                                {...dl.changes.serviceSelectorMini}
                            />

                            <div
                                id="t18_1624_1907"
                                style={{
                                    height: 259,
                                    width: 400,
                                    backgroundImage:
                                        'url(https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/5c912ccb4db758f8f719a684c6d4fddbd5cbea8d.png)',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    paddingTop: 5,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderBottomWidth: 1,
                                    borderStyle: 'solid',
                                }}
                            >
                                <div
                                    id="t18_1624_1908"
                                    style={{
                                        height: 113,
                                        width: 294,
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
                                        marginBottom: 4,
                                    }}
                                >
                                    <div
                                        id="t18_1624_1909"
                                        style={{
                                            width: 262,
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
                                            marginBottom: 3.5,
                                        }}
                                    >
                                        <span
                                            id="t18_1624_1910"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 12,
                                                fontWeight: 600,
                                                color: 'rgba(0,0,0,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '14.522727012634277px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            Post your Need
                                        </span>
                                    </div>

                                    <div
                                        id="t18_1624_1911"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 3.5,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_1624_1912"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 5,
                                            }}
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/7c254faa2cae5af751c912a7443528d39e5d9d3f.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_1624_1913"
                                                    style={{
                                                        height: 25,
                                                        width: 25,
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
                                                id="t18_1624_1914"
                                                style={{
                                                    height: 15,
                                                    width: 110,
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
                                                    id="t18_1624_1915"
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
                                                    I need a Travel Companion
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1624_1916"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 5,
                                                marginRight: 0,
                                            }}
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/89c1fde3e8b53d3716b6fc0974c3dea8a16c0581.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_1624_1917"
                                                    style={{
                                                        height: 25,
                                                        width: 25,
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
                                                id="t18_1624_1918"
                                                style={{
                                                    height: 15,
                                                    width: 110,
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
                                                    id="t18_1624_1919"
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
                                                    I will be your Travel
                                                    Companion
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_1624_1920"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 4,
                                        marginBottom: 0,
                                    }}
                                >
                                    <div
                                        id="t18_1624_1921"
                                        style={{
                                            height: 94,
                                            width: 383,
                                            borderRadius: 5,
                                            backgroundColor:
                                                'rgba(248,246,246,0.58)',
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            paddingTop: 5,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0.5,
                                            borderColor: 'rgba(186,15,23,1)',
                                            borderStyle: 'solid',
                                            marginTop: 0,
                                            marginBottom: -5.5,
                                        }}
                                    >
                                        <div
                                            id="t18_1624_1922"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_1624_1923"
                                                style={{
                                                    width: 367,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 3.5,
                                                }}
                                            >
                                                <select
                                                    name="cars"
                                                    id="t18_1021_41"
                                                    // style={{height:48,width:325,borderRadius:4,backgroundColor:"rgba(255,255,255,1)",flexDirection:"row",alignItems:"center",justifyContent:"flex-end",display:"flex",itemSpacing:20,paddingLeft:10,paddingRight:10,paddingTop:0,paddingBottom:0,position:"relative",overflow:"visible",borderWidth:1,borderColor:props.inputBorderColor,borderStyle:"solid",marginLeft:8,marginRight:0,cursor:"pointer",}}
                                                    style={{
                                                        height: 36,
                                                        width: 168,
                                                        borderRadius: 3,
                                                        backgroundColor:
                                                            'rgba(255,255,255,1.00)',
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'space-between',
                                                        display: 'flex',
                                                        paddingLeft: 6,
                                                        paddingRight: 6,
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 3.5,
                                                        marginRight: 12,
                                                        cursor: 'pointer',
                                                    }}
                                                    onChange={(val) => {
                                                        val = val.target.value
                                                        dl.changes.tcTopFilter.fromAirport =
                                                            ''
                                                        dl.changes.seletedTCTopFromAirport =
                                                            ''
                                                        dl.changes.selectedTCTopToAirport =
                                                            ''
                                                        dl.changes.tcTopFilter.toAirport =
                                                            ''
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
                                                    <option
                                                        value=""
                                                        disabled
                                                        selected
                                                    >
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
                                                                        value={
                                                                            item
                                                                        }
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
                                                            .tcZipcodeOptions
                                                    }
                                                    onChange={(val) => {
                                                        var serachString = val
                                                        const run =
                                                            async () => {
                                                                if (
                                                                    val.length >
                                                                    0
                                                                ) {
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
                                                                // airportslist = res.airportdetails
                                                            }

                                                        run()
                                                    }}
                                                    onSelect={(val) => {
                                                        dl.changes.seletedTCTopFromAirport =
                                                            val
                                                        var airportName =
                                                            val.split(',')
                                                        var airport =
                                                            airportName[0]
                                                        // var airport = val
                                                        for (
                                                            let i = 0;
                                                            i <
                                                            dl.changes
                                                                .airportslist
                                                                .length;
                                                            i++
                                                        ) {
                                                            if (
                                                                dl.changes
                                                                    .airportslist[
                                                                    i
                                                                ].name ==
                                                                airport
                                                            ) {
                                                                dl.changes.tcTopFilter.fromAirport =
                                                                    dl.changes.airportslist[
                                                                        i
                                                                    ].city_code
                                                            }
                                                        }
                                                        if (
                                                            dl.changes
                                                                .travelCompanionTypeSelector
                                                                .value ==
                                                            'Wanted'
                                                        ) {
                                                            dl.functions.getINeedATC(
                                                                8,
                                                                1
                                                            )
                                                        } else {
                                                            dl.functions.getIWantToBeTC(
                                                                '8',
                                                                '1'
                                                            )
                                                        }
                                                    }}
                                                    style={{
                                                        height: 36,
                                                        width: 168,
                                                        borderRadius: 3,
                                                        backgroundColor:
                                                            'rgba(255,255,255,1.00)',
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'space-between',
                                                        display: 'flex',
                                                        paddingLeft: 6,
                                                        paddingRight: 6,
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0.20000000298023224,
                                                        borderColor:
                                                            'rgba(186,15,23,1)',
                                                        borderStyle: 'solid',
                                                        marginLeft: 0,
                                                        marginRight: 3.5,
                                                        cursor: 'pointer',
                                                    }}
                                                    placeholder="From"
                                                    value={
                                                        dl.changes
                                                            .seletedTCTopFromAirport
                                                    }
                                                ></MaterialAutoComplete>
                                            </div>

                                            <div
                                                id="t18_2074_930"
                                                style={{
                                                    width: 367,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 3.5,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <MaterialAutoComplete
                                                    options={
                                                        dl.changes
                                                            .tcZipcodeOptions
                                                    }
                                                    onChange={(val) => {
                                                        var serachString = val
                                                        const run =
                                                            async () => {
                                                                if (
                                                                    val.length >
                                                                    0
                                                                ) {
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
                                                        var airportName =
                                                            val.split(',')
                                                        var airport =
                                                            airportName[0]
                                                        for (
                                                            let i = 0;
                                                            i <
                                                            dl.changes
                                                                .airportslist
                                                                .length;
                                                            i++
                                                        ) {
                                                            if (
                                                                dl.changes
                                                                    .airportslist[
                                                                    i
                                                                ].name ==
                                                                airport
                                                            ) {
                                                                dl.changes.tcTopFilter.toAirport =
                                                                    dl.changes.airportslist[
                                                                        i
                                                                    ].city_code
                                                            }
                                                        }
                                                        if (
                                                            dl.changes
                                                                .travelCompanionTypeSelector
                                                                .value ==
                                                            'Wanted'
                                                        ) {
                                                            dl.functions.getINeedATC(
                                                                8,
                                                                1
                                                            )
                                                        } else {
                                                            dl.functions.getIWantToBeTC(
                                                                '8',
                                                                '1'
                                                            )
                                                        }
                                                    }}
                                                    style={{
                                                        height: 36,
                                                        width: 168,
                                                        borderRadius: 3,
                                                        backgroundColor:
                                                            'rgba(255,255,255,1.00)',
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'space-between',
                                                        display: 'flex',
                                                        paddingLeft: 6,
                                                        paddingRight: 6,
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 3.5,
                                                        marginRight: 12,
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
                                                        dl.changes.tcTopFilter
                                                            .fromDate
                                                    }
                                                    minDate={
                                                        dl.changes.todaysDate
                                                    }
                                                    placeholder="From date"
                                                    style={{
                                                        height: 36,
                                                        width: 168,
                                                        borderRadius: 3,
                                                        backgroundColor:
                                                            'rgba(255,255,255,1.00)',
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'space-between',
                                                        display: 'flex',
                                                        paddingLeft: 6,
                                                        paddingRight: 6,
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0.20000000298023224,
                                                        borderColor:
                                                            'rgba(186,15,23,1)',
                                                        borderStyle: 'solid',
                                                        marginLeft: 0,
                                                        marginRight: 3.5,
                                                        cursor: 'pointer',
                                                    }}
                                                    onChange={(val) => {
                                                        const formattedDate = (
                                                            date
                                                        ) =>
                                                            `${date.getDate()} ${date.toLocaleString(
                                                                'default',
                                                                {
                                                                    month: 'short',
                                                                }
                                                            )} ${date.getFullYear()}`
                                                        dl.changes.tcTopFilter.fromDate =
                                                            formattedDate(
                                                                new Date(val)
                                                            )
                                                        if (
                                                            dl.changes
                                                                .travelCompanionTypeSelector
                                                                .value ==
                                                            'Wanted'
                                                        ) {
                                                            dl.functions.getINeedATC(
                                                                8,
                                                                1
                                                            )
                                                        } else {
                                                            dl.functions.getIWantToBeTC(
                                                                '8',
                                                                '1'
                                                            )
                                                        }
                                                    }}
                                                />

                                                {/* <MaterialDate 
  value={dl.changes.tcTopFilter.toDate}
  minDate={dl.changes.todaysDate}
  
  placeholder="To date"
  style={{height:36,width:168,borderRadius:3,backgroundColor:"rgba(255,255,255,1.00)",flexDirection:"row",alignItems:"center",justifyContent:"space-between",display:"flex",paddingLeft:6,paddingRight:6,position:"relative",overflow:"visible",borderWidth:0,marginLeft:3.5,marginRight:0,cursor:"pointer",}}
  
  
            onChange={(val)=>{
              const formattedDate = (date) => `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
dl.changes.tcTopFilter.toDate = formattedDate(new Date(val))
dl.functions.getIWantToBeTC("8", "1")
              
            }}

  
  /> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1624_1940"
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
                                            marginTop: -5.5,
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
                                            dl.changes.tcTopFilter.cOnDate = ''

                                            if (
                                                dl.changes
                                                    .travelCompanionTypeSelector
                                                    .value == 'Wanted'
                                            ) {
                                                dl.functions.getINeedATC(8, 1)
                                            } else {
                                                dl.functions.getIWantToBeTC(
                                                    '8',
                                                    '1'
                                                )
                                            }
                                        }}
                                    >
                                        <span
                                            id="t18_1624_1941"
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
                                id="t18_1624_2274"
                                style={{
                                    width: 380,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingLeft: 20,
                                    paddingTop: 12,
                                    paddingBottom: 10,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderBottomWidth: 0.5,
                                    borderStyle: 'solid',
                                }}
                            >
                                <div
                                    id="t18_1624_2275"
                                    style={{
                                        height: 8,
                                        width: 92,
                                        borderRadius: 5,
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
                                            id="t18_1624_2276"
                                            style={{
                                                height: 10,
                                                width: 15,
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
                                        id="t18_1624_2277"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 13,
                                            fontWeight: 600,
                                            color: 'rgba(255,255,255,1)',
                                            letterSpacing: 0,
                                            lineHeight: '15.732954025268555px',
                                            textAlign: 'center',
                                            marginLeft: 3,
                                            marginRight: 0,
                                        }}
                                    >
                                        Filters
                                    </span>
                                </div>

                                <div
                                    id="t18_1624_2278"
                                    style={{
                                        width: 360,
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
                                                        {dl.changes
                                                            .travelCompanionTypeSelector
                                                            .value ==
                                                        'Wanted' ? (
                                                            <MmFilterXs
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
                                                                    ].selected = false
                                                                    dl.functions.applyUniversalFilter()
                                                                }}
                                                            />
                                                        ) : (
                                                            <MmFilterXs
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
                                                                    ].selected = false
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
                                id="t18_1624_1953"
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
                                    {dl.changes.wantToBeATCList.map(
                                        (item, index) => {
                                            return (
                                                <div>
                                                    <MmCompanionOffXs
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
                                                                'small'
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

                            <MmEmptyListXs
                                {...dl.changes.needATCNoDataVisible}
                            />

                            <div
                                id="t18_1624_1991"
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

                        <MmFooterXs />
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Travelcompanion_4
