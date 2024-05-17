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

const Rooms_4 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 400
            const element = document.getElementById('t18_1200_322')
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
                id="t18_1200_322"
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
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <div
                    id="t18_995_388"
                    style={{
                        backgroundColor: 'rgba(255,255,255,1.00)',
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
                        id="t18_995_389"
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
                            id="t18_995_394"
                            style={{
                                height: 214,
                                width: 400,
                                backgroundImage:
                                    'url(https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/1d5a0f634bc9a61525a4e5df957c09c57037b9b0.png)',
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
                                id="t18_995_395"
                                style={{
                                    height: 132,
                                    width: 300,
                                    borderRadius: 5,
                                    backgroundColor: 'rgba(248,246,246,0.2)',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 5.5,
                                    backdropFilter: "blur(10px)"
                                }}
                            >
                                <div
                                    id="t18_995_396"
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
                                        marginBottom: 5,
                                    }}
                                >
                                    <span
                                        id="t18_995_397"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 13,
                                            fontWeight: 600,
                                            // color: 'rgba(0,0,0,1)'
                                            color:"white",
                                            letterSpacing: 0,
                                            lineHeight: '15.732954025268555px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        Post Your Need
                                    </span>
                                </div>

                                <div
                                    id="t18_995_398"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 5,
                                        marginBottom: 0,
                                    }}
                                >
                                    <div
                                        id="t18_995_399"
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
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/177344c18e495fe8cef2b7aa8019607a288ced6f.png' !=
                                        '' ? (
                                            <img
                                                id="t18_995_400"
                                                style={{
                                                    height: 37,
                                                    width: 37,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 3.5,
                                                }}
                                                src={
                                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/177344c18e495fe8cef2b7aa8019607a288ced6f.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

                                        <div
                                            id="t18_995_401"
                                            style={{
                                                height: 10,
                                                width: 113,
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
                                                borderWidth: 1,
                                                // borderColor:
                                                //     'rgba(186,15,23,1)',
                                                borderColor:"white",
                                                borderStyle: 'solid',
                                                marginTop: 3.5,
                                                marginBottom: 0,
                                                cursor: 'pointer',
                                            }}
                                            onClick={(e) => {
                                                dl.functions.modalsPlugin.openModal(
                                                    'PostYourNeedRoomS'
                                                )
                                            }}
                                        >
                                            <span
                                                id="t18_995_402"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 12,
                                                    fontWeight: 600,
                                                    // color: 'rgba(186,15,23,1)',
                                                    color:"white",
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '14.522727012634277px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Rooms/Roommates
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_995_403"
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
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/80ff49c7ace7eae8611f8f5e896e72e6f491ded7.png' !=
                                        '' ? (
                                            <img
                                                id="t18_995_404"
                                                style={{
                                                    height: 37,
                                                    width: 37,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 3.5,
                                                }}
                                                src={
                                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/80ff49c7ace7eae8611f8f5e896e72e6f491ded7.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

                                        <div
                                            id="t18_995_405"
                                            style={{
                                                height: 10,
                                                width: 113,
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
                                                borderWidth: 1,
                                                // borderColor:
                                                //     'rgba(186,15,23,1)',
                                                borderColor:"white",
                                                borderStyle: 'solid',
                                                marginTop: 3.5,
                                                marginBottom: 0,
                                                cursor: 'pointer',
                                            }}
                                            onClick={(e) => {
                                                dl.functions.modalsPlugin.openModal(
                                                    'PostYourNeedHomeS'
                                                )
                                            }}
                                        >
                                            <span
                                                id="t18_995_406"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 12,
                                                    fontWeight: 600,
                                                    // color: 'rgba(186,15,23,1)',
                                                    color:"white",
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '14.522727012634277px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Home rentals
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                id="t18_996_38"
                                style={{
                                    height: 34,
                                    width: 321,
                                    borderRadius: 50,
                                    backgroundColor: 'rgba(248,246,246,1.00)',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingLeft: 14,
                                    paddingRight: 5,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 2,
                                    borderColor: 'rgba(186,15,23,1)',
                                    borderStyle: 'solid',
                                    marginTop: 5.5,
                                    marginBottom: 0,
                                }}
                            >
                                <div
                                    id="t18_996_39"
                                    style={{
                                        width: 273,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 0,
                                        marginRight: 4,
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/70f5b72a34765deae5b34e6ad476040b1c4bda4c.png' !=
                                    '' ? (
                                        <img
                                            id="t18_996_40"
                                            style={{
                                                height: 13,
                                                width: 13,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 4,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/70f5b72a34765deae5b34e6ad476040b1c4bda4c.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    {/* <input
                                        id="t18_996_41"
                                        placeholder="Search by Title, City, State and Zipcode"
                                        value={dl.changes.roomSearchText}
                                        style={{
                                            height: 26,
                                            width: 252,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 4,
                                            marginRight: 0,
                                            cursor: 'pointer',
                                            fontFamily: 'Inter',
                                            fontSize: 8,
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
                                            height: 24,
                                            width: 252,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 4,
                                            marginRight: 0,
                                            cursor: 'pointer',
                                            fontFamily: 'Inter',
                                            fontSize: 15,
                                            color: 'rgba(113,113,113,1)',
                                            fontWeight: 400,
                                            textAlign: 'left',
                                        }}
                                        placeholder="Search here..."
                                        value={dl.changes.roomSearchText}
                                    ></MaterialAutoComplete>
                                </div>

                                <div
                                    id="t18_996_43"
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
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/69c17245ea33f76ff74faf996cf2ee0ffac5b0d8.png' !=
                                    '' ? (
                                        <img
                                            id="t18_996_44"
                                            style={{
                                                height: 8,
                                                width: 8,
                                                display: 'flex',
                                                borderWidth: 0,
                                                cursor: 'pointer',
                                            }}
                                            onClick={(e) => {
                                                dl.changes.roomSearchText = ''
                                                dl.changes.RentalsearchZipcode = ''
                                                dl.functions.applyRoomFilter()
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
                                    id="t18_996_45"
                                    style={{
                                        height: 5,
                                        width: 5,
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
                                        marginLeft: 4,
                                        marginRight: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        dl.changes.roomSearchText = dl.changes.roomSearchText
                                        dl.functions.applyRoomFilter()
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b279de17ff8955703e5cd02ce3887e12f106db6a.png' !=
                                    '' ? (
                                        <img
                                            id="t18_996_46"
                                            style={{
                                                height: 14,
                                                width: 14,
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
                        </div>

                        <div
                            id="t18_995_410"
                            style={{
                                width: 380,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 10,
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
                                id="t18_995_411"
                                style={{
                                    height: 40,
                                    width: 270,
                                    borderRadius: 30,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingLeft: 5,
                                    paddingRight: 14,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 1,
                                    borderColor: 'rgba(186,15,23,1)',
                                    borderStyle: 'solid',
                                }}
                            >
                                <div
                                    id="t18_995_412"
                                    style={{
                                        height: 13,
                                        width: 118,
                                        borderRadius: 30,
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
                                        marginLeft: 0,
                                    }}
                                >
                                    <span
                                        id="t18_995_413"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 12,
                                            fontWeight: 500,
                                            color: 'rgba(255,255,255,1)',
                                            letterSpacing: 0,
                                            lineHeight: '14.522727012634277px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        Offered
                                    </span>
                                </div>

                                <div
                                    id="t18_995_414"
                                    style={{
                                        height: 36,
                                        width: 134,
                                        borderRadius: 30,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginRight: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
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
                                            dl.changes.serviceSelector.services

                                        for (var key in serviceSelector) {
                                            serviceSelector[key] =
                                                'rgba(186,15,23,1)'
                                        }
                                    }}
                                >
                                    <span
                                        id="t18_995_415"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 12,
                                            fontWeight: 500,
                                            color: 'rgba(186,15,23,1)',
                                            letterSpacing: 0,
                                            lineHeight: '14.522727012634277px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        Wanted
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div
                            id="t18_995_416"
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
                                id="t18_995_417"
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
                                        id="t18_995_418"
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
                                    id="t18_995_419"
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
                                id="t18_995_420"
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
                                                            ].selected = false
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
                            id="t18_995_427"
                            style={{
                                width: 380,
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
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: 'center',
                                }}
                            >
                                {dl.changes.roomsList.map((item, index) => {
                                    return (
                                        <div>
                                            <MmOfferedRoomCardXs
                                                {...item}
                                                {...dl.changes.roomsList}
                                                onClickEdit={(val) => {}}
                                                onClickContact={(val) => {
                                                    val.stopPropagation()
                                                    var userToken =
                                                        dl.functions.common.getCookie(
                                                            'userToken'
                                                        )
                                                    if (userToken) {
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
                                                            dl.changes
                                                                .userDetail
                                                                .phone.length >
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
                                                            'contactAdvertiserS'
                                                        )
                                                    } else {
                                                        dl.functions.modalsPlugin.openModal(
                                                            'loginS'
                                                        )
                                                    }
                                                }}
                                                onClickDelete={(val) => {}}
                                                onClick={(val) => {
                                                    if (
                                                        item.rentalType ==
                                                        'Home'
                                                    ) {
                                                        var homeid =
                                                            dl.changes
                                                                .roomsList[
                                                                index
                                                            ]._id
                                                        dl.functions.common.relativeRedirect(
                                                            `offeredhomedetails?homeId=${homeid}`,
                                                            true
                                                        )
                                                    } else {
                                                        var roomid =
                                                            dl.changes
                                                                .roomsList[
                                                                index
                                                            ]._id
                                                        dl.functions.common.relativeRedirect(
                                                            `offeredroomdetails?roomId=${roomid}`,
                                                            true
                                                        )
                                                    }
                                                }}
                                                onClickBookMark={(val) => {
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
                                                onClickPromote={(val) => {}}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <MmEmptyListXs {...dl.changes.rentelNodataVisible} />

                        <div
                            id="t18_995_472"
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
                            }}
                        >
                            <MMPagination
                                total={dl.changes.paginationState.total}
                                active={dl.changes.paginationState.active}
                                onChange={(val) => {
                                    dl.changes.paginationState.active = val
                                    if (dl.changes.roomSearchText.length > 0) {
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

                        <MmFooterXs />
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Rooms_4
