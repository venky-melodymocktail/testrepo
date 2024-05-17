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
import MmWantedRoomCard from '../../components/MmWantedRoomCard.jsx'
import MmEmptyList from '../../components/MmEmptyList.jsx'
import MmWantedRoomCardMd from '../../components/MmWantedRoomCardMd.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmFilterMd from '../../components/MmFilterMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmWantedRoomCardS from '../../components/MmWantedRoomCardS.jsx'
import MmEmptyListS from '../../components/MmEmptyListS.jsx'
import MmFilterS from '../../components/MmFilterS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmWantedRoomCardXs from '../../components/MmWantedRoomCardXs.jsx'
import MmEmptyListXs from '../../components/MmEmptyListXs.jsx'
import MmFilterXs from '../../components/MmFilterXs.jsx'
import MmServiceSelector from '../../components/MmServiceSelector.jsx'
import MMFilterHorizantal from '../../components/main/MMFilterHorizantal.jsx'
import FilterListIcon from '@mui/icons-material/FilterList'

const Ihavearoom_1 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_1189_3')
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
                id="t18_1189_3"
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
                    id="t18_996_79"
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
                        id="t18_996_80"
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

                        <MmServiceSelector
                            {...dl.changes.serviceSelector}
                            onRentalsClick={(val) => {
                                var serviceSelector =
                                    dl.changes.serviceSelector.services

                                for (var key in serviceSelector) {
                                    serviceSelector[key] = 'rgba(186,15,23,1)'
                                }

                                serviceSelector['rentals'] = 'rgba(156,18,24,1)'
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
                                    serviceSelector[key] = 'rgba(186,15,23,1)'
                                }

                                serviceSelector['rides'] = 'rgba(156,18,24,1)'

                                dl.functions.viewsPlugin.showView('ridesharing')
                                var currentPath =
                                    dl.functions.common.getLastPath()
                                dl.functions.onLoadFunctions[currentPath]()
                            }}
                            onTSClick={(val) => {
                                var serviceSelector =
                                    dl.changes.serviceSelector.services

                                for (var key in serviceSelector) {
                                    serviceSelector[key] = 'rgba(186,15,23,1)'
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
                                    serviceSelector[key] = 'rgba(186,15,23,1)'
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
                                    serviceSelector[key] = 'rgba(186,15,23,1)'
                                }

                                serviceSelector['studyAbroad'] =
                                    'rgba(156,18,24,1)'
                                dl.functions.viewsPlugin.showView('studyabroad')
                                var currentPath =
                                    dl.functions.common.getLastPath()
                                dl.functions.onLoadFunctions[currentPath]()
                            }}
                            onVisaClick={(val) => {
                                // var serviceSelector=dl.changes.dataSource.services
                                var serviceSelector =
                                    dl.changes.serviceSelector.services

                                for (var key in serviceSelector) {
                                    serviceSelector[key] = 'rgba(186,15,23,1)'
                                }

                                serviceSelector['visaQna'] = 'rgba(156,18,24,1)'
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
                                    serviceSelector[key] = 'rgba(186,15,23,1)'
                                }

                                serviceSelector['travelCompanion'] =
                                    'rgba(156,18,24,1)'
                            }}
                        />

                        <div
                            id="t18_995_543"
                            style={{
                                height: 470,
                                width: 1440,
                                backgroundImage:
                                    'url(https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/957aae04f849e1a91560079d6ef4d792de53f339.png)',
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
                            }}
                        >
                            <div
                                id="t18_995_544"
                                style={{
                                    height: 253,
                                    width: 575,
                                    borderRadius: 10,
                                    backgroundColor: 'rgba(248,246,246,0.2)',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingTop: 20,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 25,
                                    backdropFilter: "blur(10px)"
                                }}
                            >
                                <div
                                    id="t18_995_545"
                                    style={{
                                        width: 527,
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
                                        id="t18_995_546"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 20,
                                            fontWeight: 600,
                                            // color: 'rgba(0,0,0,1)',,
                                            color:"white",
                                            letterSpacing: 0,
                                            lineHeight: '24.204544067382812px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        Post Your Need
                                    </span>
                                </div>

                                <div
                                    id="t18_995_547"
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
                                        id="t18_995_548"
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
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/09c2e835c6bf5cfa535647c6fd30861fe38c8366.png' !=
                                        '' ? (
                                            <img
                                                id="t18_995_549"
                                                style={{
                                                    height: 64,
                                                    width: 64,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 10,
                                                }}
                                                src={
                                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/09c2e835c6bf5cfa535647c6fd30861fe38c8366.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

                                        <div
                                            id="t18_995_550"
                                            className={' hoverEffect2-button'}
                                            style={{
                                                height: 28,
                                                width: 204,
                                                borderRadius: 25,
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
                                                // borderColor:
                                                //     'rgba(186,15,23,1)',
                                                borderColor:"white",
                                                borderStyle: 'solid',
                                                marginTop: 10,
                                                marginBottom: 0,
                                                cursor: 'pointer',
                                            }}
                                            onClick={(e) => {
                                                dl.functions.modalsPlugin.openModal(
                                                    'PostYourNeedRoomLg'
                                                )
                                            }}
                                        >
                                            <span
                                                id="t18_995_551"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 18,
                                                    fontWeight: 600,
                                                    // color: 'rgba(186,15,23,1)',
                                                    color:"white",
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '21.784090042114258px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Rooms/Roommates
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_995_552"
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
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/6f544722ca03a0dd19a08f6f59cd7f4ebfd3a15b.png' !=
                                        '' ? (
                                            <img
                                                id="t18_995_553"
                                                style={{
                                                    height: 64,
                                                    width: 64,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 10,
                                                }}
                                                src={
                                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/6f544722ca03a0dd19a08f6f59cd7f4ebfd3a15b.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

                                        <div
                                            id="t18_995_554"
                                            className={' hoverEffect2-button'}
                                            style={{
                                                height: 28,
                                                width: 204,
                                                borderRadius: 25,
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
                                                // borderColor:
                                                //     'rgba(186,15,23,1)',
                                                borderColor:"white",
                                                borderStyle: 'solid',
                                                marginTop: 10,
                                                marginBottom: 0,
                                                cursor: 'pointer',
                                            }}
                                            onClick={(e) => {
                                                dl.functions.modalsPlugin.openModal(
                                                    'PostYourNeedHomeLg'
                                                )
                                            }}
                                        >
                                            <span
                                                id="t18_995_555"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 18,
                                                    fontWeight: 600,
                                                    // color: 'rgba(186,15,23,1)',
                                                    color:"white",
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '21.784090042114258px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Home rentals
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div style={{width:250, height:300, borderRadius:20, backgroundColor:"white", marginRight:-950, marginTop:-300}}>

</div> */}

                            <div
                                id="t18_996_65"
                                style={{
                                    height: 50,
                                    width: 803,
                                    borderRadius: 50,
                                    backgroundColor: 'rgba(255,255,255,1.00)',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingLeft: 15,
                                    paddingRight: 7,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 1,
                                    borderColor: 'rgba(186,15,23,1)',
                                    borderStyle: 'solid',
                                    marginTop: 25,
                                    marginBottom: 0,
                                }}
                            >
                                <div
                                    id="t18_996_66"
                                    style={{
                                        height: 34,
                                        width: 712,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 0,
                                        marginRight: 9,
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/70f5b72a34765deae5b34e6ad476040b1c4bda4c.png' !=
                                    '' ? (
                                        <img
                                            id="t18_996_67"
                                            style={{
                                                height: 24,
                                                width: 24,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 5,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/70f5b72a34765deae5b34e6ad476040b1c4bda4c.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    {/* <input
                                        id="t18_996_68"
                                        placeholder="Search by Title, City, State and Zipcode"
                                        value={dl.changes.needARoomSearchText}
                                        style={{
                                            height: '47px',
                                            width: '680px',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 5,
                                            marginRight: 0,
                                            cursor: 'pointer',
                                            fontFamily: 'Inter',
                                            fontSize: 20,
                                            color: 'rgba(113,113,113,1)',
                                            fontWeight: 400,
                                            textAlign: 'left',
                                        }}
                                        onChange={(val) => {
                                            val = val.target.value

                                            dl.changes.needARoomSearchText = val
                                        }}
                                        type="text"
                                    ></input> */}
                                    <MaterialAutoComplete
                                        options={dl.changes.RentalSearchOptions}
                                        onChange={async(val) => {
                                            
                                            var searchtext = val
                                                    var zipcodeArr = []
                                                    zipcodeArr.push(val)
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
                                                    dl.changes.RentalSearchOptions =
                                                        zipcodeArr
                                        }}
                                        onSelect={(val) => {
                                            dl.changes.needARoomSearchText = val
                                            if(val!=dl.changes.RentalSearchOptions[0]){
                                                var zipcode = val.split(',')
                                                dl.changes.RentalsearchZipcode = zipcode[2]
                                            }
                                            dl.functions.applyNeedARoomFilter()
                                            // props.onSelect && props.onSelect(val)
                                        }}
                                        style={{
                                            height: '47px',
                                            width: '680px',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 5,
                                            marginRight: 0,
                                            cursor: 'pointer',
                                            fontFamily: 'Inter',
                                            fontSize: 20,
                                            color: 'rgba(113,113,113,1)',
                                            fontWeight: 400,
                                            textAlign: 'left',
                                        }}
                                        placeholder="Search by Title, City, State and Zipcode"
                                        value={dl.changes.needARoomSearchText}
                                    ></MaterialAutoComplete>
                                </div>

                                <div
                                    id="t18_996_70"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 9,
                                        marginRight: 9,
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/69c17245ea33f76ff74faf996cf2ee0ffac5b0d8.png' !=
                                    '' ? (
                                        <img
                                            id="t18_996_71"
                                            style={{
                                                height: 15,
                                                width: 15,
                                                display: 'flex',
                                                borderWidth: 0,
                                                cursor: 'pointer',
                                            }}
                                            onClick={(e) => {
                                                dl.changes.needARoomSearchText =
                                                    ''
                                                dl.changes.RentalsearchZipcode = ''
                                                dl.functions.applyNeedARoomFilter()
                                                // dl.functions.getNeedAroom(
                                                //     '9',
                                                //     '1'
                                                // )
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/69c17245ea33f76ff74faf996cf2ee0ffac5b0d8.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}
                                </div>

                                <div
                                    id="t18_996_72"
                                    style={{
                                        height: 20,
                                        width: 20,
                                        borderRadius: 50,
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
                                        marginLeft: 9,
                                        marginRight: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        dl.functions.applyNeedARoomFilter()
                                        // dl.functions.searchNeedAroom(
                                        //     dl.changes.needARoomSearchText,
                                        //     1
                                        // )
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b279de17ff8955703e5cd02ce3887e12f106db6a.png' !=
                                    '' ? (
                                        <img
                                            id="t18_996_73"
                                            style={{
                                                height: 21,
                                                width: 21,
                                                display: 'flex',
                                                borderWidth: 0,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b279de17ff8955703e5cd02ce3887e12f106db6a.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </div>
                            <div
                                className="container"
                                style={{
                                    width: '95%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent:"center",
                                    marginTop: '20px',
                                    flexDirection: 'row',
                                    overflowX: 'scroll',
                                    height: '50px',
                                    overflowY: 'hidden',
                                    scrollbarColor: 'white',
                                }}
                            >
                                {/* /// NEW FILTER STYLE */}
                                <div style={{}}>
                                    <div
                                        style={{
                                            marginLeft: '20px',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <MMFilterHorizantal
                                            dataSource={
                                                dl.changes.wantedroomFilter
                                            }
                                            onChange={(val) => {
                                                dl.functions.applyNeedARoomFilter()
                                            }}
                                        />
                                        <div
                                            onClick={async () => {
                                                dl.changes.popupFilter =
                                                    'offeredroomFilter'
                                                // dl.functions.modalsPlugin.openModal('filterLg')
                                                await dl.functions.setUniversalFilters()
                                                dl.functions.modalsPlugin.openModal(
                                                    'filterLg'
                                                )
                                            }}
                                            style={{
                                                margin: 0,
                                                width: 100,
                                                height: 48,
                                                paddingLeft: '10px',
                                                paddingRight: '10px',
                                                boxShadow: 'none',
                                                border: '1px solid rgba(207,206,206,1)',
                                                borderRadius: 4,
                                                // marginLeft: '10px',
                                                backgroundColor: 'white',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <FilterListIcon
                                                sx={{
                                                    color: '#b02a23',
                                                    fontSize: 25,
                                                    fontWeight: '700',
                                                }}
                                            />
                                            <p
                                                style={{
                                                    color: 'black',
                                                    fontSize: 18,
                                                    fontWeight: '700',
                                                    marginLeft: 10,
                                                }}
                                            >
                                                More
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            id="t18_996_83"
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
                                id="t18_996_84"
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
                                id="t18_996_85"
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
                                        id="t18_996_86"
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
                                        id="t18_996_87"
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
                                id="t18_996_88"
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
                                I have a Room
                            </span>
                        </div>

                        <div
                            id="t18_996_89"
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
                            {/* <MMFilter
                                dataSource={dl.changes.wantedroomFilter}
                                onChange={(val) => {
                                    dl.functions.applyNeedARoomFilter()
                                }}
                            /> */}

                            <div
                                id="t18_996_121"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderLeftWidth: 1,
                                    borderStyle: 'solid',
                                    marginRight: 0,
                                    width: '100%',
                                }}
                            >
                                <div
                                    id="t18_996_122"
                                    style={{
                                        width: '95%',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingTop: 32,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        borderColor: 'rgba(207,206,206,0.7)',
                                        borderWidth: 1,
                                        borderStyle: 'solid',
                                        borderTopWidth: 0,
                                    }}
                                >
                                    <div
                                        id="t18_996_123"
                                        style={{
                                            width: 1066,
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
                                            marginTop: 0,
                                            marginBottom: 15.5,
                                        }}
                                    >
                                        {/* <div
    id='t18_996_124'
    className={ ' contact-btn'}
    

    style={{height:60,width:257,borderRadius:30,backgroundColor:"rgba(186,15,23,1.00)",flexDirection:"row",alignItems:"center",justifyContent:"center",display:"flex",position:"relative",overflow:"visible",borderWidth:0,cursor:"pointer",}}
    
    
                    onClick={(e)=>{
                    
                    
                      var userToken = dl.functions.common.getCookie("userToken")

if(userToken){
    dl.functions.viewsPlugin.showView("listmyroomform")
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
    id='t18_996_125'
    
    

    style={{height:27,width:27,display:"flex",borderWidth:0,marginLeft:0,marginRight:5.5,}}
    
    

    src={"https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/41a7227774b5b1086601e797a1f6691e1f551b82.png"}


>

    
</img>:<></>}
    
    
    
    
    <span
                   
    id='t18_996_126'
    
    

    

    style={{fontFamily:"Inter",fontSize:20,fontWeight:500,color:"rgba(255,255,255,1)",letterSpacing:0,lineHeight:"24.204544067382812px",textAlign:"center",marginLeft:5.5,marginRight:0,}}
                >
                    List my Room
                    
                </span>    
    
    
</div> */}

                                        {/* /// for room and home rental switch */}

                                        {/* <div
    id='t18_995_596'
    
    

    style={{width:958,flexDirection:"column",alignItems:"center",justifyContent:"flex-start",display:"flex",position:"relative",overflow:"visible",borderWidth:0,marginTop:0,marginBottom:24,}}
    
    


>

    
    
    <div
    id='t18_995_597'
    
    

    style={{height:52,width:456,borderRadius:30,backgroundColor:"rgba(248,246,246,1.00)",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",display:"flex",paddingLeft:4,paddingRight:4,paddingTop:4,paddingBottom:4,position:"relative",overflow:"visible",borderWidth:2,borderColor:"rgba(186,15,23,1)",borderStyle:"solid",}}
    
    


>

    
    
    <div
    id='t18_995_598'
    
    

    style={{height:32,width:210,borderRadius:30,backgroundColor:"rgba(186,15,23,1.00)",flexDirection:"row",alignItems:"center",justifyContent:"center",display:"flex",paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10,position:"relative",overflow:"visible",borderWidth:0,marginLeft:0,marginRight:21,}}
    
    


>

    
    
    <span
                   
    id='t18_995_599'
    
    

    

    style={{fontFamily:"Inter",fontSize:20,fontWeight:500,color:"rgba(255,255,255,1)",letterSpacing:0,lineHeight:"24.204544067382812px",textAlign:"center",}}
                >
                    Rooms/Roommates
                    
                </span>    
    
    
</div>
    
    
    
    
    <span
                   
    id='t18_995_600'
    
    

    
            onClick={()=>{
                dl.functions.viewsPlugin.showView("homerentals")
var currentPath = dl.functions.common.getLastPath()
dl.functions.onLoadFunctions[currentPath]()
            }}
            

    style={{fontFamily:"Inter",fontSize:20,fontWeight:500,color:"rgba(186,15,23,1)",letterSpacing:0,lineHeight:"24.204544067382812px",textAlign:"center",marginLeft:21,marginRight:0,cursor:"pointer",}}
                >
                    Home Rentals
                    
                </span>    
    
    
</div>
</div> */}
                                        {/* //////////////////////////////////// for offered and wanted tougle */}

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
                                                    justifyContent:
                                                        'flex-start',
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
                                                        justifyContent:
                                                            'center',
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
                                                        justifyContent:
                                                            'center',
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
                                    </div>

                                    <div
                                        id="t18_996_127"
                                        style={{
                                            width: '96%',
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'center',
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
                                            id="t18_996_128"
                                            style={{
                                                width: '100%',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'center',
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
                                                {dl.changes.needARoomList.map(
                                                    (item, index) => {
                                                        return (
                                                            <div>
                                                                <MmWantedRoomCard
                                                                    {...item}
                                                                    {...dl
                                                                        .changes
                                                                        .needARoomList}
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
                                                                                'needARental'
                                                                            dl.changes.contactUSForm.serviceId =
                                                                                dl.changes.needARoomList[
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
                                                                            'needARoomList',
                                                                            index,
                                                                            'needarooms'
                                                                        )
                                                                    }}
                                                                    onClickRemoveBookmark={(
                                                                        val
                                                                    ) => {
                                                                        val.stopPropagation()
                                                                        dl.functions.bookmarkAction(
                                                                            'needARoomList',
                                                                            index,
                                                                            'needarooms'
                                                                        )
                                                                    }}
                                                                    onClickPromote={(
                                                                        val
                                                                    ) => {}}
                                                                    onClick={(
                                                                        val
                                                                    ) => {
                                                                        if (
                                                                            item.rentalType ==
                                                                            'Home'
                                                                        ) {
                                                                            var homeid =
                                                                                dl
                                                                                    .changes
                                                                                    .needARoomList[
                                                                                    index
                                                                                ]
                                                                                    ._id
                                                                            dl.functions.common.relativeRedirect(
                                                                                `wantedhomedetails?homeId=${homeid}`,
                                                                                true
                                                                            )
                                                                        } else {
                                                                            var roomid =
                                                                                dl
                                                                                    .changes
                                                                                    .needARoomList[
                                                                                    index
                                                                                ]
                                                                                    ._id
                                                                            dl.functions.common.relativeRedirect(
                                                                                `wantedroomdetails?roomId=${roomid}`,
                                                                                true
                                                                            )
                                                                        }
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
                                    id="t18_996_158"
                                    style={{
                                        height: 56,
                                        width: '95%',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        paddingLeft: 0,
                                        paddingTop: 10,
                                        paddingBottom: 10,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 1,
                                        borderColor: 'rgba(207,206,206,1)',
                                        // borderTopWidth: 1,
                                        borderStyle: 'solid',
                                        marginBottom: 0,
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '95%',
                                            marginLeft: '2.5%',
                                            paddingLeft: 25,
                                            borderColor: 'rgba(207,206,206,1)',
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
                                                dl.changes.paginationState.active =
                                                    val

                                                if (
                                                    dl.changes
                                                        .needARoomSearchText
                                                        .length > 0
                                                ) {
                                                    dl.functions.searchNeedAroom(
                                                        dl.changes
                                                            .needARoomSearchText,
                                                        val
                                                    )
                                                    return
                                                }

                                                dl.functions.applyNeedARoomFilter(
                                                    val
                                                )
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
export default Ihavearoom_1
