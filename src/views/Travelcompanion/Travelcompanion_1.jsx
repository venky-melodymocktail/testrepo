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
import MMFilterHorizantal from '../../components/main/MMFilterHorizantal.jsx'
import FilterListIcon from '@mui/icons-material/FilterList'
import {
    Divider,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Switch,
} from '@mui/material'

const Travelcompanion_1 = observer(() => {
    console.log(dl.changes.tcZipcodeOptions)
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_1509_460')
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
                id="t18_1509_460"
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
                    marginLeft: 0,
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <div
                    id="t18_1509_461"
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
                        id="t18_1509_462"
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
                            id="t18_1509_463"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 47.5,
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

                            <MmServiceSelector
                                {...dl.changes.serviceSelector}
                                onRentalsClick={(val) => {
                                    var serviceSelector =
                                        dl.changes.serviceSelector.services

                                    for (var key in serviceSelector) {
                                        serviceSelector[key] =
                                            'rgba(186,15,23,1)'
                                    }

                                    serviceSelector['rentals'] =
                                        'rgba(156,18,24,1)'
                                    // var currentPath = dl.functions.common.getLastPath()
                                    // dl.functions.onLoadFunctions[currentPath]()

                                    dl.functions.viewsPlugin.showView('rooms')
                                    var currentPath =
                                        dl.functions.common.getLastPath()
                                    dl.functions.onLoadFunctions[currentPath]()
                                }}
                                onRidesClick={(val) => {
                                    var serviceSelector =
                                        dl.changes.serviceSelector.services

                                    for (var key in serviceSelector) {
                                        serviceSelector[key] =
                                            'rgba(186,15,23,1)'
                                    }

                                    serviceSelector['rides'] =
                                        'rgba(156,18,24,1)'

                                    dl.functions.viewsPlugin.showView(
                                        'ridesharing'
                                    )
                                    var currentPath =
                                        dl.functions.common.getLastPath()
                                    dl.functions.onLoadFunctions[currentPath]()
                                }}
                                onTSClick={(val) => {
                                    var serviceSelector =
                                        dl.changes.serviceSelector.services

                                    for (var key in serviceSelector) {
                                        serviceSelector[key] =
                                            'rgba(186,15,23,1)'
                                    }

                                    serviceSelector['travelSuggestions'] =
                                        'rgba(156,18,24,1)'

                                    dl.functions.viewsPlugin.showView(
                                        'travelsuggestions'
                                    )
                                    var currentPath =
                                        dl.functions.common.getLastPath()
                                    dl.functions.onLoadFunctions[currentPath]()
                                }}
                                onMSClick={(val) => {
                                    var serviceSelector =
                                        dl.changes.serviceSelector.services

                                    for (var key in serviceSelector) {
                                        serviceSelector[key] =
                                            'rgba(186,15,23,1)'
                                    }

                                    serviceSelector['movieSuggestions'] =
                                        'rgba(156,18,24,1)'

                                    dl.functions.viewsPlugin.showView(
                                        'moviesuggestions'
                                    )
                                    var currentPath =
                                        dl.functions.common.getLastPath()
                                    dl.functions.onLoadFunctions[currentPath]()
                                }}
                                onStudyAbroadClick={(val) => {
                                    // var serviceSelector=dl.changes.dataSource.services
                                    var serviceSelector =
                                        dl.changes.serviceSelector.services

                                    for (var key in serviceSelector) {
                                        serviceSelector[key] =
                                            'rgba(186,15,23,1)'
                                    }

                                    serviceSelector['studyAbroad'] =
                                        'rgba(156,18,24,1)'
                                    dl.functions.viewsPlugin.showView(
                                        'studyabroad'
                                    )
                                    var currentPath =
                                        dl.functions.common.getLastPath()
                                    dl.functions.onLoadFunctions[currentPath]()
                                }}
                                onVisaClick={(val) => {
                                    // var serviceSelector=dl.changes.dataSource.services
                                    var serviceSelector =
                                        dl.changes.serviceSelector.services

                                    for (var key in serviceSelector) {
                                        serviceSelector[key] =
                                            'rgba(186,15,23,1)'
                                    }

                                    serviceSelector['visaQna'] =
                                        'rgba(156,18,24,1)'
                                    dl.functions.viewsPlugin.showView(
                                        'visaquestions'
                                    )
                                    var currentPath =
                                        dl.functions.common.getLastPath()
                                    dl.functions.onLoadFunctions[currentPath]()
                                }}
                                onTravelCompanionClick={(val) => {
                                    // var serviceSelector=dl.changes.dataSource.services

                                    // for(var key in serviceSelector){
                                    //     serviceSelector[key]="rgba(186,15,23,1)"
                                    // }

                                    // serviceSelector["travelCompanion"]="rgba(156,18,24,1)"
                                    dl.functions.viewsPlugin.showView(
                                        'travelcompanion'
                                    )
                                    var currentPath =
                                        dl.functions.common.getLastPath()
                                    dl.functions.onLoadFunctions[currentPath]()

                                    var serviceSelector =
                                        dl.changes.serviceSelector.services

                                    for (var key in serviceSelector) {
                                        serviceSelector[key] =
                                            'rgba(186,15,23,1)'
                                    }

                                    serviceSelector['travelCompanion'] =
                                        'rgba(156,18,24,1)'
                                }}
                            />

                            <div
                                id="t18_1509_516"
                                style={{
                                    minHeight: 540,
                                    width: 1440,
                                    backgroundImage:
                                        'url(https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/5c912ccb4db758f8f719a684c6d4fddbd5cbea8d.png)',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingTop: 59,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderBottomWidth: 1,
                                    borderStyle: 'solid',
                                    paddingBottom: 30,
                                }}
                            >
                                <div
                                    id="t18_1509_517"
                                    style={{
                                        height: 297,
                                        width: 611,
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
                                        marginBottom: 17,
                                    }}
                                >
                                    <div
                                        id="t18_1509_518"
                                        style={{
                                            width: 493,
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
                                            marginTop: 0,
                                            marginBottom: 18,
                                        }}
                                    >
                                        <span
                                            id="t18_1509_519"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 20,
                                                fontWeight: 600,
                                                color: 'rgba(0,0,0,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '24.204544067382812px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            Post your Need
                                        </span>
                                    </div>

                                    <div
                                        id="t18_1509_520"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 18,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_1509_521"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 27,
                                            }}
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/7c254faa2cae5af751c912a7443528d39e5d9d3f.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_1509_522"
                                                    style={{
                                                        height: 64,
                                                        width: 64,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                        marginTop: 0,
                                                        marginBottom: 10,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/7c254faa2cae5af751c912a7443528d39e5d9d3f.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}

                                            <div
                                                id="t18_1509_523"
                                                className={
                                                    ' hoverEffect2-button'
                                                }
                                                style={{
                                                    height: 40,
                                                    width: 209,
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
                                                    marginTop: 10,
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
                                                    id="t18_1509_524"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 16,
                                                        fontWeight: 600,
                                                        color: 'rgba(186,15,23,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '19.363636016845703px',
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    I need a Travel Companion
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1509_525"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 27,
                                                marginRight: 0,
                                            }}
                                        >
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/89c1fde3e8b53d3716b6fc0974c3dea8a16c0581.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_1509_526"
                                                    style={{
                                                        height: 64,
                                                        width: 64,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                        marginTop: 0,
                                                        marginBottom: 10,
                                                        cursor: 'pointer',
                                                    }}
                                                    onClick={(e) => {}}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/89c1fde3e8b53d3716b6fc0974c3dea8a16c0581.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}

                                            <div
                                                id="t18_1509_527"
                                                className={
                                                    ' hoverEffect2-button'
                                                }
                                                style={{
                                                    height: 39,
                                                    width: 210,
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
                                                    marginTop: 10,
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
                                                    id="t18_1509_528"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 16,
                                                        fontWeight: 600,
                                                        color: 'rgba(186,15,23,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '19.363636016845703px',
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
                                    id="t18_1509_529"
                                    style={{
                                        padding: '7px 40px',
                                        borderRadius: 66,
                                        backgroundColor: '#fff',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        marginTop: '30px',
                                    }}
                                >
                                    <FormControl
                                        sx={{ m: 1 }}
                                        variant="standard"
                                        style={{
                                            width: '130px',
                                            // height: '60px',
                                            margin: '0px',
                                        }}
                                    >
                                        <InputLabel
                                            shrink={true}
                                            id="demo-customized-select-label"
                                            focused={false}
                                            // style={{ marginTop: '-7px' }}
                                        >
                                            Select Options
                                        </InputLabel>
                                        <Select
                                            disableUnderline
                                            sx={{
                                                height: '30px',
                                                margin: 0,
                                            }}
                                            labelId="demo-customized-select-label"
                                            id="demo-customized-select"
                                            inputProps={{
                                                IconComponent: () => null,
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
                                                dl.changes.tcTopFilter.fromDate =
                                                    null
                                                dl.changes.tcTopFilter.latest = false
                                                dl.changes.tcTopFilter.cOnDate =
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
                                            defaultValue={'Offered'}
                                        >
                                            {Array.isArray(
                                                dl.changes
                                                    .travelCompanionTypeSelector
                                                    .options
                                            ) &&
                                                dl.changes.travelCompanionTypeSelector.options.map(
                                                    (item, index) => {
                                                        return (
                                                            <MenuItem
                                                                key={index}
                                                                value={item}
                                                            >
                                                                {item}
                                                            </MenuItem>
                                                        )
                                                    }
                                                )}
                                        </Select>
                                    </FormControl>
                                    <Divider orientation="vertical" />
                                    {/* latest one  */}
                                    <FormControl
                                        sx={{ m: 1 }}
                                        variant="standard"
                                        style={{
                                            width: '100px',
                                            // height: '60px',
                                            margin: '0px',
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <InputLabel
                                            shrink={true}
                                            id="demo-customized-select-label"
                                            focused={false}
                                            style={{
                                                // marginTop: '7px',
                                                marginLeft: 15,
                                            }}
                                        >
                                            Show Latest
                                        </InputLabel>
                                        <div
                                            style={{
                                                height: 30,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginTop: 15,
                                                // marginBottom: 10,
                                            }}
                                        >
                                            <Switch
                                                // defaultChecked={false}
                                                onChange={(val) => {
                                                    dl.changes.tcTopFilter.latest =
                                                        val.target.checked

                                                    console.log(
                                                        val.target.checked
                                                    )
                                                    if (
                                                        dl.changes
                                                            .travelCompanionTypeSelector
                                                            .value == 'Wanted'
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
                                                // color="rgba(186,15,23,1.00)"
                                                color="error"
                                                checked={
                                                    dl.changes.tcTopFilter
                                                        .latest
                                                }
                                            />
                                        </div>
                                    </FormControl>
                                    <Divider orientation="vertical" />
                                    <div>
                                        <InputLabel
                                            shrink={true}
                                            id="demo-customized-select-label"
                                            focused={false}
                                            style={{ marginLeft: '17px' }}
                                        >
                                            Select From
                                        </InputLabel>

                                        <MaterialAutoComplete
                                            disableUnderline
                                            sx={{
                                                height: '30px',
                                            }}
                                            components={{
                                                DropdownIndicator: () => null,
                                                IndicatorSeparator: () => null,
                                            }}
                                            options={
                                                dl.changes.tcZipcodeOptions
                                            }
                                            onChange={(val) => {
                                                var serachString = val
                                                const run = async () => {
                                                    if (val.length > 0) {
                                                        console.log('HHHH')
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
                                                if (
                                                    dl.changes
                                                        .travelCompanionTypeSelector
                                                        .value == 'Wanted'
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
                                                // height: 52,
                                                width: 212,
                                                borderRadius: 10,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                border: 'none',
                                                position: 'relative',
                                                overflow: 'visible',
                                                marginLeft: 9,
                                                marginRight: 9,
                                                cursor: 'pointer',
                                                marginTop: '-10px',
                                            }}
                                            placeholder="From"
                                            value={
                                                dl.changes
                                                    .seletedTCTopFromAirport
                                            }
                                        ></MaterialAutoComplete>
                                    </div>
                                    <Divider orientation="vertical" />
                                    <div
                                        sx={{
                                            '&:hover': {
                                                backgroundColor: 'black',
                                            },
                                        }}
                                    >
                                        <InputLabel
                                            shrink={true}
                                            id="demo-customized-select-label"
                                            focused={false}
                                            style={{ marginLeft: '17px' }}
                                        >
                                            Select To
                                        </InputLabel>
                                        <MaterialAutoComplete
                                            options={
                                                dl.changes.tcZipcodeOptions
                                            }
                                            sx={{
                                                height: '30px',
                                            }}
                                            onChange={(val) => {
                                                // const run = async() => {
                                                //     var searchtext = val
                                                //     var zipcodeArr = []
                                                //     var res = await dl.functions.searchZipCode(searchtext)
                                                //     for(var i=0; i<res.length; i++){
                                                //         zipcodeArr.push(res[i].zip)
                                                //     }
                                                //     // alert(zipcodeArr)
                                                //     dl.changes.tcZipcodeOptions = zipcodeArr
                                                // }
                                                // run()

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
                                                // dl.changes.tcToZipcode[]
                                                // var airport = val
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

                                                if (
                                                    dl.changes
                                                        .travelCompanionTypeSelector
                                                        .value == 'Wanted'
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
                                                // height: 52,
                                                width: 212,
                                                borderRadius: 10,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                border: 'none',
                                                position: 'relative',
                                                overflow: 'visible',
                                                marginLeft: 9,
                                                marginRight: 9,
                                                cursor: 'pointer',
                                                marginTop: '-10px',
                                            }}
                                            placeholder="To"
                                            value={
                                                dl.changes
                                                    .selectedTCTopToAirport
                                            }
                                        ></MaterialAutoComplete>
                                    </div>
                                    <Divider orientation="vertical" />
                                    <div
                                        style={{
                                            padding: '0px 15px',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <InputLabel
                                            shrink={true}
                                            id="demo-customized-select-label"
                                            focused={false}
                                            style={{ marginLeft: '17px' }}
                                        >
                                            Select Date
                                        </InputLabel>
                                        <MaterialDate
                                            value={
                                                dl.changes.tcTopFilter.fromDate
                                            }
                                            sx={{
                                                height: '50px',
                                            }}
                                            minDate={dl.changes.todaysDate}
                                            placeholder="From date"
                                            style={{
                                                // height: 52,
                                                width: 160,
                                                // padding: '0px 20px',
                                                borderRadius: 5,
                                                // marginTop: '-5px',
                                                flexDirection: 'row',
                                                background: 'none',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                marginLeft: 9,
                                                marginRight: 9,
                                                cursor: 'pointer',
                                            }}
                                            onChange={(val) => {
                                                if (val) {
                                                    const formattedDate = (
                                                        date
                                                    ) =>
                                                        `${date.getDate()} ${date.toLocaleString(
                                                            'default',
                                                            { month: 'short' }
                                                        )} ${date.getFullYear()}`
                                                    dl.changes.tcTopFilter.fromDate =
                                                        formattedDate(
                                                            new Date(val)
                                                        )

                                                    if (
                                                        dl.changes
                                                            .travelCompanionTypeSelector
                                                            .value == 'Wanted'
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
                                                    // dl.functions.getIWantToBeTC(
                                                    //     '8',
                                                    //     '1'
                                                    // )
                                                }
                                            }}
                                        />
                                    </div>
                                    <Divider orientation="vertical" />

                                    {/* //posted on Filter */}
                                    <div
                                        style={{
                                            padding: '0px 15px',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <InputLabel
                                            shrink={true}
                                            id="demo-customized-select-label"
                                            focused={false}
                                            style={{ marginLeft: '17px' }}
                                        >
                                            Posted On
                                        </InputLabel>
                                        <MaterialDate
                                            value={
                                                dl.changes.tcTopFilter.cOnDate
                                            }
                                            sx={{
                                                height: '50px',
                                            }}
                                            // minDate={dl.changes.todaysDate}
                                            placeholder="Posted On"
                                            style={{
                                                // height: 52,
                                                width: 140,
                                                // padding: '0px 20px',
                                                borderRadius: 5,
                                                // marginTop: '-5px',
                                                flexDirection: 'row',
                                                background: 'none',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                marginLeft: 9,
                                                marginRight: 9,
                                                cursor: 'pointer',
                                            }}
                                            onChange={(val) => {
                                                if (val) {
                                                    const formattedDate = (
                                                        date
                                                    ) =>
                                                        `${date.getDate()} ${date.toLocaleString(
                                                            'default',
                                                            { month: 'short' }
                                                        )} ${date.getFullYear()}`
                                                    dl.changes.tcTopFilter.cOnDate =
                                                        formattedDate(
                                                            new Date(val)
                                                        )
                                                    if (
                                                        dl.changes
                                                            .travelCompanionTypeSelector
                                                            .value == 'Wanted'
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
                                                }
                                            }}
                                        />
                                    </div>
                                    <Divider orientation="vertical" />
                                    <div
                                        onClick={async () => {
                                            dl.changes.popupFilter =
                                                'travelComapanionFilter'
                                            // dl.functions.modalsPlugin.openModal('filterLg')
                                            await dl.functions.setUniversalFilters()
                                            dl.functions.modalsPlugin.openModal(
                                                'filterLg'
                                            )
                                        }}
                                        style={{
                                            // margin: 'auto',
                                            // marginLeft: '40px',
                                            boxShadow: 'none',
                                            border: '1px solid rgba(207,206,206,1)',
                                            borderRadius: 30,
                                            backgroundColor: 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                            borderWidth: 1,
                                            borderColor: 'rgba(186,15,23,1)',
                                            borderStyle: 'solid',
                                            // marginTop:10,
                                            marginLeft: 30,
                                        }}
                                    >
                                        <FilterListIcon
                                            sx={{
                                                color: '#b02a23',
                                                fontSize: 25,
                                                fontWeight: '700',
                                            }}
                                        />
                                        {/* <p style={{ color: "black", fontSize: 18, fontWeight: "700", marginLeft:10 }}>More</p> */}
                                    </div>
                                </div>

                                <div
                                    id="t18_1509_546"
                                    style={{
                                        height: 12,
                                        width: 150,
                                        borderRadius: 5,
                                        backgroundColor: 'rgba(186,15,23,1.00)',
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
                                        marginTop: -8,
                                        marginBottom: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        dl.changes.seletedTCTopFromAirport = ''
                                        dl.changes.tcTopFilter.fromAirport = ''
                                        dl.changes.tcTopFilter.toAirport = ''
                                        dl.changes.selectedTCTopToAirport = ''
                                        dl.changes.tcTopFilter.fromDate = null
                                        dl.changes.tcTopFilter.cOnDate = ''
                                        console.log(
                                            dl.changes.tcTopFilter.fromDate
                                        )
                                        dl.changes.tcTopFilter.toDate = ''
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
                                        // dl.functions.getIWantToBeTC('8', '1')
                                    }}
                                >
                                    <span
                                        id="t18_1509_547"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 15,
                                            fontWeight: 500,
                                            color: 'rgba(255,255,255,1)',
                                            letterSpacing: 0,
                                            lineHeight: '22.99431800842285px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        Reset
                                    </span>
                                </div>
                            </div>

                            <div
                                id="t18_1509_548"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginBottom: 0,
                                }}
                            >
                                {/* {dl.changes.travelCompanionTypeSelector.value ==
                                'Wanted' ? (
                                    <MMFilter
                                        dataSource={
                                            dl.changes.travelComapanionFilter
                                        }
                                        onChange={(val) => {
                                            dl.functions.getINeedATC('8', '1')
                                        }}
                                    />
                                ) : (
                                    <MMFilter
                                        dataSource={
                                            dl.changes.travelComapanionFilter
                                        }
                                        onChange={(val) => {
                                            dl.functions.getIWantToBeTC(
                                                '8',
                                                '1'
                                            )
                                        }}
                                    />
                                )} */}

                                <div
                                    id="t18_1509_608"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
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
                                        id="t18_1509_609"
                                        style={{
                                            width: '94%',
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingLeft: 10,
                                            paddingRight: 10,
                                            paddingTop: 20,
                                            paddingBottom: 20,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 1,
                                            marginTop: 0,
                                            borderColor: 'rgba(207,206,206,1)',
                                            borderStyle: 'solid',
                                            borderBottomWidth: 0,
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
                                                            <MmCompanionOff
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
                                                                        dl
                                                                            .changes
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
                                                                onClick={(
                                                                    val
                                                                ) => {
                                                                    if (
                                                                        dl
                                                                            .changes
                                                                            .travelCompanionTypeSelector
                                                                            .value ==
                                                                        'Wanted'
                                                                    ) {
                                                                        var tcId =
                                                                            dl
                                                                                .changes
                                                                                .wantToBeATCList[
                                                                                index
                                                                            ]
                                                                                ._id
                                                                        dl.functions.common.relativeRedirect(
                                                                            `wantedtcdetails?tcId=${tcId}`,
                                                                            true
                                                                        )
                                                                    } else {
                                                                        var tcId =
                                                                            dl
                                                                                .changes
                                                                                .wantToBeATCList[
                                                                                index
                                                                            ]
                                                                                ._id
                                                                        dl.functions.common.relativeRedirect(
                                                                            `offeredtcdetails?tcId=${tcId}`,
                                                                            true
                                                                        )
                                                                    }
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
                                    <div
                                        style={{
                                            // borderWidth: 1,
                                            borderWidth: '1px',
                                            borderTopWidth: '0px',
                                            // borderBottomWidth:0,
                                            marginTop: 0,
                                            borderColor: 'rgba(207,206,206,1)',
                                            borderStyle: 'solid',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '95.4%',
                                        }}
                                    >
                                        <MmEmptyList
                                            {...dl.changes.needATCNoDataVisible}
                                        />
                                    </div>

                                    <div
                                        id="t18_1509_646"
                                        style={{
                                            height: 56,
                                            width: '91.4%',
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            paddingLeft: 60,
                                            paddingTop: 10,
                                            paddingBottom: 10,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 1,
                                            borderColor: 'rgba(207,206,206,1)',
                                            // borderTopWidth: 1,
                                            // borderBottomWidth: 1,
                                            borderStyle: 'solid',
                                            marginBottom: 0,
                                        }}
                                    >
                                        <MMPagination
                                            total={
                                                dl.changes.paginationState.total
                                            }
                                            active={
                                                dl.changes.paginationState
                                                    .active
                                            }
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
                                                    dl.functions.getIWantToBeTC(
                                                        8,
                                                        page
                                                    )
                                                }

                                                if (tcType == 'Wanted') {
                                                    dl.functions.getINeedATC(
                                                        8,
                                                        page
                                                    )
                                                }
                                            }}
                                        />
                                    </div>
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
export default Travelcompanion_1
