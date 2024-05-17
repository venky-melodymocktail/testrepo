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
import MmServiceSelectorS from '../../components/MmServiceSelectorS.jsx'

const Ihavearoom_3 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 620
            const element = document.getElementById('t18_1210_408')
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
                id="t18_1210_408"
                style={{
                    width: 620,
                    flexDirection: 'column',
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
                    id="t18_996_262"
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
                        id="t18_996_263"
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
                            id="t18_996_264"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 24,
                            }}
                        >
                            <MmHeaderS
                                {...dl.changes.userDetail}
                                onChangeAddress={(val) => {
                                    dl.functions.modalsPlugin.openModal(
                                        'AddressPopupS'
                                    )
                                }}
                                onClickMenu={(val) => {}}
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

                            <MmServiceSelectorS
                                {...dl.changes.serviceSelectorMini}
                            />

                            <div
                                id="t18_995_300"
                                style={{
                                    height: 216,
                                    width: 620,
                                    backgroundImage:
                                        'url(https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/957aae04f849e1a91560079d6ef4d792de53f339.png)',
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
                                    id="t18_995_301"
                                    style={{
                                        height: 155,
                                        width: 376,
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
                                        marginBottom: 5.5,
                                        backdropFilter:"blur(10px)"
                                    }}
                                >
                                    <div
                                        id="t18_995_302"
                                        style={{
                                            width: 268,
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
                                            marginBottom: 4,
                                        }}
                                    >
                                        <span
                                            id="t18_995_303"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 16,
                                                fontWeight: 600,
                                                // color: 'rgba(0,0,0,1)',
                                                color:"white",
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '19.363636016845703px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            Post Your Need
                                        </span>
                                    </div>

                                    <div
                                        id="t18_995_304"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
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
                                            id="t18_995_305"
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
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/09c2e835c6bf5cfa535647c6fd30861fe38c8366.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_995_306"
                                                    style={{
                                                        height: 48,
                                                        width: 48,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                        marginTop: 0,
                                                        marginBottom: 8,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/09c2e835c6bf5cfa535647c6fd30861fe38c8366.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}

                                            <div
                                                id="t18_995_307"
                                                style={{
                                                    height: 10,
                                                    width: 140,
                                                    borderRadius: 20,
                                                    // backgroundColor:
                                                    //     'rgba(248,246,246,1.00)',
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
                                                    marginTop: 8,
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
                                                    id="t18_995_308"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 14,
                                                        fontWeight: 600,
                                                        // color: 'rgba(186,15,23,1)',
                                                        color:"white",
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '16.94318199157715px',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    Rooms/Roommates
                                                </span>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_995_309"
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
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/6f544722ca03a0dd19a08f6f59cd7f4ebfd3a15b.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_995_310"
                                                    style={{
                                                        height: 48,
                                                        width: 48,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                        marginTop: 0,
                                                        marginBottom: 8,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/6f544722ca03a0dd19a08f6f59cd7f4ebfd3a15b.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}

                                            <div
                                                id="t18_995_311"
                                                style={{
                                                    height: 10,
                                                    width: 140,
                                                    borderRadius: 20,
                                                    // backgroundColor:
                                                    //     'rgba(248,246,246,1.00)',
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
                                                    marginTop: 8,
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
                                                    id="t18_995_312"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 14,
                                                        fontWeight: 600,
                                                        // color: 'rgba(186,15,23,1)',
                                                        color:"white",
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '16.94318199157715px',
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
                                    id="t18_996_47"
                                    style={{
                                        height: 42,
                                        width: 438,
                                        borderRadius: 50,
                                        backgroundColor:
                                            'rgba(255,255,255,1.00)',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 15,
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
                                        id="t18_996_48"
                                        style={{
                                            width: 372,
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
                                                id="t18_996_49"
                                                style={{
                                                    height: 16,
                                                    width: 16,
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
                                            id="t18_996_50"
                                            placeholder="Search by Title, City, State and Zipcode"
                                            value={
                                                dl.changes.needARoomSearchText
                                            }
                                            style={{
                                                height: 36,
                                                width: 413,
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
                                                fontSize: 13,
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
                                                height: 36,
                                                width: 400,
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
                                                fontSize: 13,
                                                color: 'rgba(113,113,113,1)',
                                                fontWeight: 400,
                                                textAlign: 'left',
                                            }}
                                            placeholder="Search by Title, City, State and Zipcode"
                                            value={dl.changes.needARoomSearchText}
                                        ></MaterialAutoComplete>
                                    </div>

                                    <div
                                        id="t18_996_52"
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
                                                id="t18_996_53"
                                                style={{
                                                    height: 12,
                                                    width: 12,
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
                                        id="t18_996_54"
                                        style={{
                                            height: 14,
                                            width: 14,
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
                                                id="t18_996_55"
                                                style={{
                                                    height: 15,
                                                    width: 15,
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
                                id="t18_996_267"
                                style={{
                                    height: 40,
                                    width: 599,
                                    backgroundColor: 'rgba(248,246,246,1.00)',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingLeft: 21,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderBottomWidth: 1,
                                    borderStyle: 'solid',
                                }}
                            >
                                <span
                                    id="t18_996_268"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 500,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
                                        textAlign: 'left',
                                        marginLeft: 0,
                                        marginRight: 7,
                                    }}
                                >
                                    Rooms/Roommates
                                </span>

                                <div
                                    id="t18_996_269"
                                    style={{
                                        height: 10,
                                        width: 11,
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
                                            id="t18_996_270"
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
                                            id="t18_996_271"
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
                                    id="t18_996_272"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 500,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
                                        textAlign: 'left',
                                        marginLeft: 7,
                                        marginRight: 0,
                                    }}
                                >
                                    I have a Room
                                </span>
                            </div>

                            <div
                                id="t18_1632_56"
                                style={{
                                    height: 72,
                                    width: 620,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
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
                                    id="t18_1632_57"
                                    style={{
                                        width: 549,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 21,
                                        paddingRight: 50,
                                        paddingTop: 20,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                    }}
                                >
                                    <div
                                        id="t18_1632_58"
                                        style={{
                                            height: 15,
                                            width: 126,
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
                                                id="t18_1632_59"
                                                style={{
                                                    height: 10.58984375,
                                                    width: 15,
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
                                            id="t18_1632_60"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 16,
                                                fontWeight: 600,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '19.363636016845703px',
                                                textAlign: 'center',
                                                marginLeft: 5,
                                                marginRight: 0,
                                            }}
                                        >
                                            Filters
                                        </span>
                                    </div>

                                    <div
                                        id="t18_1632_61"
                                        style={{
                                            width: 449,
                                            flexDirection: 'row',
                                            alignItems: 'center',
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
                                                            <MmFilterS
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

                            <div
                                id="t18_996_284"
                                style={{
                                    height: 60,
                                    width: 600,
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
                                {/* <div
    id='t18_996_285'
    
    

    style={{height:40,width:170,borderRadius:30,backgroundColor:"rgba(186,15,23,1.00)",flexDirection:"row",alignItems:"center",justifyContent:"center",display:"flex",position:"relative",overflow:"visible",borderWidth:0,cursor:"pointer",}}
    
    
                    onClick={(e)=>{
                    
                    
                      var userToken = dl.functions.common.getCookie("userToken")

if(userToken){
    dl.functions.viewsPlugin.showView("listmyroomform")
    var currentPath = dl.functions.common.getLastPath()
    dl.functions.onLoadFunctions[currentPath]()
}
else{
    dl.functions.modalsPlugin.openModal('loginS')
}
        }
    } 


>

    
    
   {"https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/41a7227774b5b1086601e797a1f6691e1f551b82.png"!=""? <img
    id='t18_996_286'
    
    

    style={{height:20,width:20,display:"flex",borderWidth:0,marginLeft:0,marginRight:5.5,}}
    
    

    src={"https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/41a7227774b5b1086601e797a1f6691e1f551b82.png"}


>

    
</img>:<></>}
    
    
    
    
    <span
                   
    id='t18_996_287'
    
    

    

    style={{fontFamily:"Inter",fontSize:14,fontWeight:500,color:"rgba(255,255,255,1)",letterSpacing:0,lineHeight:"16.94318199157715px",textAlign:"center",marginLeft:5.5,marginRight:0,}}
                >
                    List my Room
                    
                </span>    
    
    
</div> */}

                                <div
                                    id="t18_1038_1800"
                                    style={{
                                        height: 80,
                                        width: 600,
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
                                        id="t18_1038_1801"
                                        style={{
                                            height: 34,
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
                                            id="t18_1038_1976"
                                            style={{
                                                width: 152,
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
                                                id="t18_1038_1804"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 16,
                                                    fontWeight: 500,
                                                    color: 'rgba(186,15,23,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '19.363636016845703px',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                Offered
                                            </span>
                                        </div>

                                        <div
                                            id="t18_1038_1802"
                                            style={{
                                                height: 14,
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
                                                id="t18_1038_1803"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 16,
                                                    fontWeight: 500,
                                                    color: 'rgba(255,255,255,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '19.363636016845703px',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                Wanted
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                id="t18_996_288"
                                style={{
                                    width: 600,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
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
                                    {dl.changes.needARoomList.map(
                                        (item, index) => {
                                            return (
                                                <div>
                                                    <MmWantedRoomCardS
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
                                                                    'contactAdvertiserS'
                                                                )
                                                            } else {
                                                                dl.functions.modalsPlugin.openModal(
                                                                    'loginS'
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

                            <MmEmptyListS {...dl.changes.rentelNodataVisible} />

                            <div
                                id="t18_996_320"
                                style={{
                                    height: 40,
                                    width: 610,
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

                        <MmFooterS />
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Ihavearoom_3
