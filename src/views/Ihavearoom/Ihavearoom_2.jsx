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
import MmServiceSelectorMd from '../../components/MmServiceSelectorMd.jsx'

const Ihavearoom_2 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 900
            const element = document.getElementById('t18_1210_407')
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
                id="t18_1210_407"
                style={{
                    width: 900,
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
                    id="t18_996_175"
                    style={{
                        backgroundColor: 'rgba(255,255,255,1.00)',
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
                        id="t18_996_176"
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
                            id="t18_996_177"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 33.5,
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
                                id="t18_995_192"
                                style={{
                                    height: 301,
                                    width: 900,
                                    backgroundImage:
                                        'url(https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/957aae04f849e1a91560079d6ef4d792de53f339.png)',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
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
                                    id="t18_995_193"
                                    style={{
                                        height: 204,
                                        width: 452,
                                        borderRadius: 10,
                                        backgroundColor:
                                            'rgba(248,246,246,0.2)',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 11.5,
                                        backdropFilter: "blur(10px)"
                                    }}
                                >
                                    <div
                                        id="t18_995_194"
                                        style={{
                                            width: 328,
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
                                            id="t18_995_195"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 18,
                                                fontWeight: 600,
                                                // color: 'rgba(0,0,0,1)',
                                                color:"white",
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '21.784090042114258px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            Post Your Need
                                        </span>
                                    </div>

                                    <div
                                        id="t18_995_196"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 3.5,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_995_197"
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
                                                    id="t18_995_198"
                                                    style={{
                                                        height: 58,
                                                        width: 58,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                        marginTop: 0,
                                                        marginBottom: 10.5,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/09c2e835c6bf5cfa535647c6fd30861fe38c8366.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}

                                            <div
                                                id="t18_995_199"
                                                style={{
                                                    height: 15,
                                                    width: 163,
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
                                                    borderWidth: 1,
                                                    // borderColor:
                                                    //     'rgba(186,15,23,1)',
                                                    borderColor:"white",
                                                    borderStyle: 'solid',
                                                    marginTop: 10.5,
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
                                                    id="t18_995_200"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 16,
                                                        fontWeight: 500,
                                                        // color: 'rgba(186,15,23,1)'
                                                        color:"white",
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '19.363636016845703px',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    Rooms/Roommates
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_995_201"
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
                                                    id="t18_995_202"
                                                    style={{
                                                        height: 58,
                                                        width: 58,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                        marginTop: 0,
                                                        marginBottom: 10.5,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/6f544722ca03a0dd19a08f6f59cd7f4ebfd3a15b.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}

                                            <div
                                                id="t18_995_203"
                                                style={{
                                                    height: 15,
                                                    width: 163,
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
                                                    borderWidth: 1,
                                                    // borderColor:
                                                    //     'rgba(186,15,23,1)',
                                                    borderColor:"white",
                                                    borderStyle: 'solid',
                                                    marginTop: 10.5,
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
                                                    id="t18_995_204"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 16,
                                                        fontWeight: 500,
                                                        // color: 'rgba(186,15,23,1)',
                                                        color:"white",
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '19.363636016845703px',
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
                                    id="t18_996_56"
                                    style={{
                                        height: 54,
                                        borderRadius: 50,
                                        backgroundColor:
                                            'rgba(255,255,255,1.00)',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 20,
                                        paddingRight: 5,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 2,
                                        borderColor: 'rgba(186,15,23,1)',
                                        borderStyle: 'solid',
                                        marginTop: 11.5,
                                        marginBottom: 0,
                                    }}
                                >
                                    <div
                                        id="t18_996_57"
                                        style={{
                                            flexDirection: 'row',
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
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/70f5b72a34765deae5b34e6ad476040b1c4bda4c.png' !=
                                        '' ? (
                                            <img
                                                id="t18_996_58"
                                                style={{
                                                    height: 21,
                                                    width: 21,
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
                                            id="t18_996_59"
                                            placeholder="Search by Title, City, State and Zipcode"
                                            value={
                                                dl.changes.needARoomSearchText
                                            }
                                            style={{
                                                height: 40,
                                                width: 559,
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
                                                fontSize: 17,
                                                color: 'rgba(113,113,113,1)',
                                                fontWeight: 400,
                                                textAlign: 'left',
                                            }}
                                            onChange={(val) => {
                                                val = val.target.value

                                                dl.changes.needARoomSearchText =
                                                    val
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
                                                height: 40,
                                                width: 559,
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
                                                fontSize: 17,
                                                color: 'rgba(113,113,113,1)',
                                                fontWeight: 400,
                                                textAlign: 'left',
                                            }}
                                            placeholder="Search by Title, City, State and Zipcode"
                                            value={dl.changes.needARoomSearchText}
                                        ></MaterialAutoComplete>
                                    </div>

                                    <div
                                        id="t18_996_61"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 5,
                                            marginRight: 5,
                                        }}
                                    >
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/69c17245ea33f76ff74faf996cf2ee0ffac5b0d8.png' !=
                                        '' ? (
                                            <img
                                                id="t18_996_62"
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
                                        id="t18_996_63"
                                        style={{
                                            height: 25,
                                            width: 25,
                                            borderRadius: 50,
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
                                            marginLeft: 5,
                                            marginRight: 0,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            dl.functions.applyNeedARoomFilter()
                                        }}
                                    >
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b279de17ff8955703e5cd02ce3887e12f106db6a.png' !=
                                        '' ? (
                                            <img
                                                id="t18_996_64"
                                                style={{
                                                    height: 23,
                                                    width: 23,
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
                                id="t18_996_180"
                                style={{
                                    height: 50,
                                    width: 830,
                                    backgroundColor: 'rgba(248,246,246,1.00)',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingLeft: 70,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderBottomWidth: 1,
                                    borderStyle: 'solid',
                                }}
                            >
                                <span
                                    id="t18_996_181"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 15,
                                        fontWeight: 500,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '18.15340805053711px',
                                        textAlign: 'left',
                                    }}
                                >
                                    {'Rooms/Roommates >> I have a room'}
                                </span>
                            </div>

                            <div
                                id="t18_1632_47"
                                style={{
                                    width: 900,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderTopWidth: 1,
                                    borderStyle: 'solid',
                                }}
                            >
                                <div
                                    id="t18_1632_48"
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
                                        id="t18_1632_49"
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
                                                id="t18_1632_50"
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
                                            id="t18_1632_51"
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
                                        id="t18_1632_52"
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
                                                        </div>
                                                    )
                                                }
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div
    id='t18_996_210'
    
    

    style={{width:880,flexDirection:"column",alignItems:"center",justifyContent:"center",display:"flex",paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10,position:"relative",overflow:"visible",borderWidth:0,}}
    
    


>

    
    
    <div
    id='t18_996_211'
    
    

    style={{height:55,width:224,borderRadius:30,backgroundColor:"rgba(186,15,23,1.00)",flexDirection:"row",alignItems:"center",justifyContent:"center",display:"flex",position:"relative",overflow:"visible",borderWidth:0,cursor:"pointer",}}
    
    
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
    id='t18_996_212'
    
    

    style={{height:27,width:27,display:"flex",borderWidth:0,marginLeft:0,marginRight:5.5,}}
    
    

    src={"https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/41a7227774b5b1086601e797a1f6691e1f551b82.png"}


>

    
</img>:<></>}
    
    
    
    
    <span
                   
    id='t18_996_213'
    
    

    

    style={{fontFamily:"Inter",fontSize:18,fontWeight:500,color:"rgba(255,255,255,1)",letterSpacing:0,lineHeight:"21.784090042114258px",textAlign:"center",marginLeft:5.5,marginRight:0,}}
                >
                    List my Room
                    
                </span>    
    
    
</div>
    
    
    
    
</div> */}

                            <div
                                id="t18_1038_1686"
                                style={{
                                    height: 98,
                                    width: 810,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    paddingLeft: 80,
                                    paddingRight: 10,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                }}
                            >
                                <div
                                    id="t18_1038_1687"
                                    style={{
                                        height: 42,
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
                                        borderColor: 'rgba(186,15,23,1)',
                                        borderStyle: 'solid',
                                    }}
                                >
                                    <div
                                        id="t18_1038_1688"
                                        style={{
                                            height: 22,
                                            width: 152,
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
                                            id="t18_1038_1689"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 18,
                                                fontWeight: 500,
                                                color: 'rgba(186,15,23,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '21.784090042114258px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            Offered
                                        </span>
                                    </div>

                                    <div
                                        id="t18_1038_1975"
                                        style={{
                                            width: 152,
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
                                            marginRight: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_1038_1690"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 18,
                                                fontWeight: 500,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '21.784090042114258px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            Wanted
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div
                                id="t18_996_214"
                                style={{
                                    width: 900,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    paddingTop: 30,
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
                                    {dl.changes.needARoomList.map(
                                        (item, index) => {
                                            return (
                                                <div>
                                                    <MmWantedRoomCardMd
                                                        {...item}
                                                        {...dl.changes
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
                                                            if (userToken) {
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
                                                                    dl.changes
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
                                                        onClick={(val) => {
                                                            if (
                                                                item.rentalType ==
                                                                'Home'
                                                            ) {
                                                                var homeid =
                                                                    dl.changes
                                                                        .needARoomList[
                                                                        index
                                                                    ]._id
                                                                dl.functions.common.relativeRedirect(
                                                                    `wantedhomedetails?homeId=${homeid}`,
                                                                    true
                                                                )
                                                            } else {
                                                                var roomid =
                                                                    dl.changes
                                                                        .needARoomList[
                                                                        index
                                                                    ]._id
                                                                dl.functions.common.relativeRedirect(
                                                                    `wantedroomdetails?roomId=${roomid}`,
                                                                    true
                                                                )
                                                            }
                                                        }}
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
                                                    />
                                                </div>
                                            )
                                        }
                                    )}
                                </div>
                            </div>

                            <MmEmptyList {...dl.changes.rentelNodataVisible} />

                            <div
                                id="t18_996_245"
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
                                        if (
                                            dl.changes.needARoomSearchText
                                                .length > 0
                                        ) {
                                            dl.functions.searchNeedAroom(
                                                dl.changes.needARoomSearchText,
                                                val
                                            )
                                            return
                                        }

                                        dl.functions.applyNeedARoomFilter(val)
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
export default Ihavearoom_2
