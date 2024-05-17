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
import MmOfferedHomeCard from '../../components/MmOfferedHomeCard.jsx'
import MmEmptyList from '../../components/MmEmptyList.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmServiceSelectorMd from '../../components/MmServiceSelectorMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmOfferedHomeCardMd from '../../components/MmOfferedHomeCardMd.jsx'
import MmFilterMd from '../../components/MmFilterMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmServiceSelectorS from '../../components/MmServiceSelectorS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmOfferedHomeCardS from '../../components/MmOfferedHomeCardS.jsx'
import MmEmptyListS from '../../components/MmEmptyListS.jsx'
import MmFilterS from '../../components/MmFilterS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmServiceSelectorXs from '../../components/MmServiceSelectorXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmOfferedHomeCardXs from '../../components/MmOfferedHomeCardXs.jsx'
import MmEmptyListXs from '../../components/MmEmptyListXs.jsx'
import MmFilterXs from '../../components/MmFilterXs.jsx'

const Homerentals_4 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 400
            const element = document.getElementById('t18_1212_4')
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
                id="t18_1212_4"
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
                    id="t18_1038_1868"
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
                        id="t18_1038_1869"
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
                            id="t18_1038_1874"
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
                                id="t18_1038_1875"
                                style={{
                                    height: 132,
                                    width: 300,
                                    borderRadius: 5,
                                    backgroundColor: 'rgba(248,246,246,1.00)',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 5.5,
                                }}
                            >
                                <div
                                    id="t18_1038_1876"
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
                                        id="t18_1038_1877"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 13,
                                            fontWeight: 600,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '15.732954025268555px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        Post your Need
                                    </span>
                                </div>

                                <div
                                    id="t18_1038_1878"
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
                                        id="t18_1038_1879"
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
                                                id="t18_1038_1880"
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
                                            id="t18_1038_1881"
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
                                                borderColor:
                                                    'rgba(186,15,23,1)',
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
                                                id="t18_1038_1882"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 12,
                                                    fontWeight: 600,
                                                    color: 'rgba(186,15,23,1)',
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
                                        id="t18_1038_1883"
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
                                                id="t18_1038_1884"
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
                                            id="t18_1038_1885"
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
                                                borderColor:
                                                    'rgba(186,15,23,1)',
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
                                                id="t18_1038_1886"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 12,
                                                    fontWeight: 600,
                                                    color: 'rgba(186,15,23,1)',
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
                                id="t18_1038_1887"
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
                                    id="t18_1038_1888"
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
                                            id="t18_1038_1889"
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

                                    <input
                                        id="t18_1038_1890"
                                        placeholder="Search by text"
                                        value={dl.changes.rentelHomeSearchText}
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

                                            dl.changes.rentelHomeSearchText =
                                                val
                                        }}
                                        type="text"
                                    ></input>
                                </div>

                                <div
                                    id="t18_1038_1892"
                                    style={{
                                        height: 8,
                                        width: 8,
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 4,
                                        marginRight: 4,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        dl.changes.rentelHomeSearchText = ''
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/69c17245ea33f76ff74faf996cf2ee0ffac5b0d8.png' !=
                                    '' ? (
                                        <img
                                            id="t18_1038_1893"
                                            style={{
                                                height: 8,
                                                width: 8,
                                                display: 'flex',
                                                borderWidth: 0,
                                                cursor: 'pointer',
                                            }}
                                            onClick={(e) => {
                                                dl.changes.rentelHomeSearchText =
                                                    ''
                                                dl.functions.getHomeRentels(
                                                    '9',
                                                    '1'
                                                )
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
                                    id="t18_1038_1894"
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
                                        dl.functions.searchHome(
                                            dl.changes.rentelHomeSearchText
                                        )
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b279de17ff8955703e5cd02ce3887e12f106db6a.png' !=
                                    '' ? (
                                        <img
                                            id="t18_1038_1895"
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
                            id="t18_1038_1896"
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
                                id="t18_1038_1897"
                                style={{
                                    height: 40,
                                    width: 276,
                                    borderRadius: 30,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingLeft: 5,
                                    paddingRight: 5,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 1,
                                    borderColor: 'rgba(186,15,23,1)',
                                    borderStyle: 'solid',
                                }}
                            >
                                <div
                                    id="t18_1038_1900"
                                    style={{
                                        height: 36,
                                        width: 138,
                                        borderRadius: 30,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
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
                                        id="t18_1038_1901"
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
                                        Roommates
                                    </span>
                                </div>

                                <div
                                    id="t18_1038_1898"
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
                                        marginRight: 0,
                                    }}
                                >
                                    <span
                                        id="t18_1038_1899"
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
                                        Home Rentals
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div
                            id="t18_1632_91"
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
                                id="t18_1632_92"
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
                                        id="t18_1632_93"
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
                                    id="t18_1632_94"
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
                                id="t18_1632_95"
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
                            id="t18_1038_1913"
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
                                {dl.changes.homeRentelsList.map(
                                    (item, index) => {
                                        return (
                                            <div>
                                                <MmOfferedHomeCardXs
                                                    {...item}
                                                    {...dl.changes
                                                        .homeRentelsList}
                                                    onClickEdit={(val) => {}}
                                                    onClickContact={(val) => {
                                                        val.stopPropagation()
                                                        var userToken =
                                                            dl.functions.common.getCookie(
                                                                'userToken'
                                                            )
                                                        if (userToken) {
                                                            dl.changes.contactUSForm.serviceType =
                                                                'home'
                                                            dl.changes.contactUSForm.serviceId =
                                                                dl.changes.homeRentelsList[
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
                                                                    .length > 12
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
                                                    onClickBookmark={(val) => {
                                                        val.stopPropagation()
                                                        dl.functions.bookmarkAction(
                                                            'homeRentelsList',
                                                            index,
                                                            'homes'
                                                        )
                                                    }}
                                                    onClickRemoveBookmark={(
                                                        val
                                                    ) => {
                                                        val.stopPropagation()
                                                        dl.functions.bookmarkAction(
                                                            'homeRentelsList',
                                                            index,
                                                            'homes'
                                                        )
                                                    }}
                                                    onClickPromote={(val) => {}}
                                                    onClick={(val) => {
                                                        var homeid =
                                                            dl.changes
                                                                .homeRentelsList[
                                                                index
                                                            ]._id
                                                        dl.functions.common.relativeRedirect(
                                                            `offeredhomedetails?homeId=${homeid}`,
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

                        <MmEmptyListXs {...dl.changes.rentelNodataVisible} />

                        <div
                            id="t18_1038_1958"
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
                                    dl.functions.applyOfferedHomeFilter(val)
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
export default Homerentals_4
