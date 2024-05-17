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

import MmOfferedHomeCard from '../../components/MmOfferedHomeCard.jsx'
import MmHeader from '../../components/MmHeader.jsx'
import MmServiceSelector from '../../components/MmServiceSelector.jsx'
import MmFooter from '../../components/MmFooter.jsx'
import MmOfferedRoomCard from '../../components/MmOfferedRoomCard.jsx'
import MmEmptyList from '../../components/MmEmptyList.jsx'
import MmOfferedRoomCardMd from '../../components/MmOfferedRoomCardMd.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmServiceSelectorMd from '../../components/MmServiceSelectorMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmFilterMd from '../../components/MmFilterMd.jsx'
import MmOfferedRoomCardS from '../../components/MmOfferedRoomCardS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmServiceSelectorS from '../../components/MmServiceSelectorS.jsx'
import MmEmptyListS from '../../components/MmEmptyListS.jsx'
import MmFilterS from '../../components/MmFilterS.jsx'
import MmOfferedRoomCardXs from '../../components/MmOfferedRoomCardXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmServiceSelectorXs from '../../components/MmServiceSelectorXs.jsx'
import MmEmptyListXs from '../../components/MmEmptyListXs.jsx'
import MmFilterXs from '../../components/MmFilterXs.jsx'
// import MMFilterVertical from '../../components/main/MMFilterVertical.jsx';
import MMFilterHorizantal from '../../components/main/MMFilterHorizantal.jsx'
import FilterListIcon from '@mui/icons-material/FilterList'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Rooms_1 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_1189_2')
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
                id="t18_1189_2"
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
                    overflowX: 'hidden',
                }}
            >
                <div
                    id="t18_995_489"
                    style={{
                        backgroundColor: 'rgba(255,255,255,1.00)',
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
                        id="t18_995_490"
                        style={{
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
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
                            {/* <MmOfferedRoomCard
    
// //     {...item} {...dl.changes.roomsList[0]}
    
// //             onClickEdit={(val)=>{
                
// //             }}
            
// //             onClickContact={(val)=>{
// //                 val.stopPropagation();
// // var userToken = dl.functions.common.getCookie("userToken")
// // if(userToken){
// // 	dl.changes.contactUSForm.serviceType = "rooms"
// // 	dl.changes.contactUSForm.serviceId = dl.changes.roomsList[index]._id
// // 	dl.changes.contactUSForm.firstname = dl.changes.userDetail.firstName
// // 	dl.changes.contactUSForm.lastname = dl.changes.userDetail.lastName
// // 	dl.changes.contactUSForm.email = dl.changes.userDetail.email
// // 	if(dl.changes.userDetail.phone.length>12){
// // 		dl.changes.contactUSForm.countryCode = "+91"
// // 		dl.changes.contactUSForm.phone = dl.changes.userDetail.phone.substring(3)
		
// // 	}
// // 	else{
// // 		dl.changes.contactUSForm.countryCode = "+1"
// // 		dl.changes.contactUSForm.phone = dl.changes.userDetail.phone.substring(2)
// // 	}
// // 	dl.functions.modalsPlugin.openModal('contactAdvertiserLg')
// // }
// // else{
// // 	dl.functions.modalsPlugin.openModal('loginLg')
	
// // }
// //             }}
            
// //             onClickDelete={(val)=>{
                
// //             }}
            
// //             onClickBookMark={(val)=>{
// //                 val.stopPropagation();
// // dl.functions.bookmarkAction("roomsList",index,"rooms");
// //             }}
            
// //             onClickRemoveBookMark={(val)=>{
// //                 val.stopPropagation();
// // dl.functions.bookmarkAction("roomsList",index,"rooms");
// //             }}
            
// //             onClickPromote={(val)=>{
                
// //             }}
            
// //             onClick={(val)=>{
// //                 var roomid = dl.changes.roomsList[index]._id
// // dl.functions.common.relativeRedirect(`offeredroomdetails?roomId=${roomid}`,true)
// // alert("here")
//             }}
            
    
    />   */}
                            {/* <div style={{width:250, height:300, borderRadius:20, backgroundColor:"white", marginRight:950, marginBottom:-300}}>

</div>  */}

                            <div
                                id="t18_995_544"
                                style={{
                                    height: 230,
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
                                        // paddingLeft: 10,
                                        // paddingRight: 10,
                                        // paddingTop: 10,
                                        // paddingBottom: 10,
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
                                            // color: 'rgba(0,0,0,1)',
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
                                    {/* /// new search component */}
                                    <MaterialAutoComplete
                                        options={dl.changes.RentalSearchOptions}
                                        onChange={async(val) => {
                                            // props.onChange && props.onChange(val)
                                            // dl.changes.roomSearchText = val
                                            // console.log(dl.changes.roomSearchText)
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
                                            dl.changes.roomSearchText = val
                                            if(val!=dl.changes.RentalSearchOptions[0]){
                                                var zipcode = val.split(',')
                                                dl.changes.RentalsearchZipcode = zipcode[2]
                                            }
                                            dl.functions.applyRoomFilter()
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
                                        value={dl.changes.roomSearchText}
                                    ></MaterialAutoComplete>
                                    {/* <input
                                        id="t18_996_68"
                                        placeholder="Search by Title, City, State and Zipcode"
                                        value={dl.changes.roomSearchText}
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

                                            dl.changes.roomSearchText = val
                                        }}
                                        type="text"
                                    ></input> */}
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
                                                dl.changes.roomSearchText = ''
                                                dl.changes.RentalsearchZipcode = ''
                                                dl.functions.applyRoomFilter()
                                                // dl.functions.getRooms('9', '1')
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
                                        // dl.functions.serachRooms(
                                        //     dl.changes.roomSearchText,
                                        //     1
                                        // )
                                        console.log(dl.changes.roomSearchText)
                                        dl.changes.roomSearchText = dl.changes.roomSearchText
                                        dl.functions.applyRoomFilter()
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
                                    {/* <Accordion
                disableGutters
                sx={{
                  margin: 0,
                  width: 200,
                
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  boxShadow: "none",
                  border: "1px solid rgba(207,206,206,1)",
                borderTopLeftRadius:"5px",
                  borderTopRightRadius:"5px",
                  borderBottomLeftRadius:"5px",
                  borderBottomRightRadius:"5px",
                  
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{ color: "#b02a23", fontSize: 18, fontWeight: "700" }}
                    />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div
                    style={{
                      fontSize: "18px",
                      color: "black",
                      fontWeight: "600",
                      fontFamily: "Inter",
                    }}
                  >
                    Rental Type
                  </div>
                </AccordionSummary>
                <AccordionDetails style={{zIndex:100, position:"fixed", backgroundColor:"white", borderWidth:"1px", borderStyle:"solid", width:150, borderColor:"rgba(207,206,206,0.8)", marginRight:-20, borderRadius:4}}>
                  {["Home", "Room"].map((option, optionIndex) => {
                    return (
                      <div
                        onClick={() => {
                          onChange(index, optionIndex);
                        }}
                        style={{
                          flexDirection: "column",
                          marginTop: 5,
                          cursor: "pointer",
                        }}
                      >
                        <div
                          style={{
                            flexDirection: "row",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {option.selected ? (
                            <div
                              style={{
                                width: "16px",
                                height: "16px",
                                borderRadius: "8px",
                                backgroundColor: "rgba(186,15,23,1)",
                              }}
                            ></div>
                          ) : (
                            <div
                              style={{
                                width: "14px",
                                height: "14px",
                                borderRadius: "7px",
                                borderWidth: "1px",
                                borderColor: "#8a8988",
                                borderStyle: "solid",
                              }}
                            ></div>
                          )}

                          <div
                            style={{
                              color: "#575653",
                              fontSize: "18px",
                              fontWeight: "500",
                              marginLeft: "10px",
                              fontFamily: "Inter",
                            }}
                          >
                            {option}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </AccordionDetails>
              </Accordion> */}
                                </div>

                                {/* <Accordion
                // defaultExpanded={item.open}
                disableGutters
                sx={{
                  margin: 0,
                  width: 180,
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  boxShadow: "none",
                  border: "1px solid rgba(207,206,206,1)",
                  borderRadius:"4px",
                  borderBottomLeftRadius:"4px",
                  borderBottomRightRadius:"4px",
                  marginLeft:"10px"
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{ color: "#b02a23", fontSize: 18, fontWeight: "700" }}
                    />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div
                    style={{
                      fontSize: "18px",
                      color: "black",
                      fontWeight: "600",
                      fontFamily: "Inter",
                    }}
                  >
                    Type
                  </div>
                </AccordionSummary>
                <AccordionDetails style={{zIndex:100, position:"absolute", backgroundColor:"white", borderWidth:"1px", borderStyle:"solid", width:150, borderColor:"rgba(207,206,206,0.8)", marginRight:-20, borderRadius:4}}>
                  {["Single room", "Shared room", "Paying guest"].map((option, optionIndex) => {
                    return (
                      <div
                        onClick={() => {
                          onChange(index, optionIndex);
                        }}
                        style={{
                          flexDirection: "column",
                          marginTop: 5,
                          cursor: "pointer",
                        }}
                      >
                        <div
                          style={{
                            flexDirection: "row",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {option.selected ? (
                            <div
                              style={{
                                width: "16px",
                                height: "16px",
                                borderRadius: "8px",
                                backgroundColor: "rgba(186,15,23,1)",
                              }}
                            ></div>
                          ) : (
                            <div
                              style={{
                                width: "14px",
                                height: "14px",
                                borderRadius: "7px",
                                borderWidth: "1px",
                                borderColor: "#8a8988",
                                borderStyle: "solid",
                              }}
                            ></div>
                          )}

                          <div
                            style={{
                              color: "#575653",
                              fontSize: "18px",
                              fontWeight: "500",
                              marginLeft: "10px",
                              fontFamily: "Inter",
                            }}
                          >
                            {option}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </AccordionDetails>
              </Accordion> */}
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
                                            dl.changes.offeredroomFilter
                                        }
                                        onChange={(val) => {
                                            dl.functions.applyRoomFilter()
                                        }}
                                    />
                                    <div
                                        onClick={async () => {
                                            dl.changes.popupFilter =
                                                'wantedroomFilter'
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

                        <div
                            id="t18_995_559"
                            style={{
                                width: 1440,
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            {/* <MMFilter
  dataSource={dl.changes.offeredroomFilter}
  
  
            onChange={(val)=>{
                
                dl.functions.applyRoomFilter()
            }}
  
  /> */}

                            <div
                                id="t18_995_594"
                                style={{
                                    width: '95%',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingTop: 43,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,.8)',
                                    borderLeftWidth: 1,
                                    borderRightWidth: 1,
                                    borderStyle: 'solid',
                                    marginRight: 0,
                                }}
                            >
                                <div
                                    id="t18_995_595"
                                    style={{
                                        width: '100%',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                    }}
                                >
                                    {/* // for home and room switch */}

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
    
    
    
    
</div>*/}

                                    <div
                                        id="t18_995_596"
                                        style={{
                                            width: 958,
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 24,
                                        }}
                                    >
                                        <div
                                            id="t18_995_597"
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
                                                id="t18_995_598"
                                                style={{
                                                    height: 32,
                                                    width: 210,
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
                                                    marginLeft: 0,
                                                    marginRight: 21,
                                                }}
                                            >
                                                <span
                                                    id="t18_995_599"
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
                                                    Offered
                                                </span>
                                            </div>

                                            <span
                                                id="t18_995_600"
                                                onClick={() => {
                                                    dl.functions.modalsPlugin.closeModal(
                                                        'PostYourNeedRoomLg'
                                                    )
                                                    dl.functions.viewsPlugin.showView(
                                                        'ihavearoom'
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
                                                        serviceSelector[key] =
                                                            'rgba(186,15,23,1)'
                                                    }
                                                }}
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 20,
                                                    fontWeight: 500,
                                                    color: 'rgba(186,15,23,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '24.204544067382812px',
                                                    textAlign: 'center',
                                                    marginLeft: 21,
                                                    marginRight: 0,
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                Wanted
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_995_601"
                                        style={{
                                            width: '100%',
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            paddingTop: 10,
                                            paddingBottom: 10,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 24,
                                            marginBottom: 24,
                                        }}
                                    >
                                        <div
                                            id="t18_995_602"
                                            style={{
                                                width: '100%',
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
                                                style={{
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                {dl.changes.roomsList.map(
                                                    (item, index) => {
                                                        return (
                                                            <div>
                                                                <MmOfferedRoomCard
                                                                    {...item}
                                                                    {...dl
                                                                        .changes
                                                                        .roomsList}
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
                                                                                'rental'
                                                                            dl.changes.contactUSForm.serviceId =
                                                                                dl.changes.roomsList[
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
                                                                    onClickBookMark={(
                                                                        val
                                                                    ) => {
                                                                        val.stopPropagation()
                                                                        dl.functions.bookmarkAction(
                                                                            'roomsList',
                                                                            index,
                                                                            'rooms'
                                                                        )
                                                                    }}
                                                                    onClickRemoveBookMark={(
                                                                        val
                                                                    ) => {
                                                                        val.stopPropagation()
                                                                        dl.functions.bookmarkAction(
                                                                            'roomsList',
                                                                            index,
                                                                            'rooms'
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
                                                                                    .roomsList[
                                                                                    index
                                                                                ]
                                                                                    ._id
                                                                            dl.functions.common.relativeRedirect(
                                                                                `offeredhomedetails?homeId=${homeid}`,
                                                                                true
                                                                            )
                                                                        } else {
                                                                            var roomid =
                                                                                dl
                                                                                    .changes
                                                                                    .roomsList[
                                                                                    index
                                                                                ]
                                                                                    ._id
                                                                            dl.functions.common.relativeRedirect(
                                                                                `offeredroomdetails?roomId=${roomid}`,
                                                                                true
                                                                            )
                                                                        }

                                                                        // alert("here")
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
                                    id="t18_995_640"
                                    style={{
                                        height: 56,
                                        width: '100%',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        paddingLeft: 60,
                                        paddingRight: 10,
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
                                        active={
                                            dl.changes.paginationState.active
                                        }
                                        onChange={(val) => {
                                            dl.changes.paginationState.active =
                                                val
                                            if (
                                                dl.changes.roomSearchText
                                                    .length > 0
                                            ) {
                                                dl.functions.serachRooms(
                                                    dl.changes.roomSearchText,
                                                    val
                                                )
                                                return
                                            }
                                            dl.functions.applyRoomFilter(val)
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
export default Rooms_1
