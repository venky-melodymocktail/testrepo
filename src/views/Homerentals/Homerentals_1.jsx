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

const Homerentals_1 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_1189_4')
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
                id="t18_1189_4"
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
                }}
            >
                <div
                    id="t18_1036_1358"
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
                        id="t18_1036_1359"
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
                            id="t18_1036_1412"
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
                                id="t18_1036_1413"
                                style={{
                                    height: 253,
                                    width: 628,
                                    borderRadius: 10,
                                    backgroundColor: 'rgba(248,246,246,1.00)',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    paddingTop: 20,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 17,
                                }}
                            >
                                <div
                                    id="t18_1036_1414"
                                    style={{
                                        width: 527,
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
                                        marginBottom: 18,
                                    }}
                                >
                                    <span
                                        id="t18_1036_1415"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 20,
                                            fontWeight: 600,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '24.204544067382812px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        Post your Need
                                    </span>
                                </div>

                                <div
                                    id="t18_1036_1416"
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
                                        id="t18_1036_1417"
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
                                                id="t18_1036_1418"
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
                                            id="t18_1036_1419"
                                            className={' hoverEffect2-button'}
                                            style={{
                                                height: 28,
                                                width: 239,
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
                                                borderColor:
                                                    'rgba(186,15,23,1)',
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
                                                id="t18_1036_1420"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 18,
                                                    fontWeight: 600,
                                                    color: 'rgba(186,15,23,1)',
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
                                        id="t18_1036_1421"
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
                                                id="t18_1036_1422"
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
                                            id="t18_1036_1423"
                                            className={' hoverEffect2-button'}
                                            style={{
                                                height: 28,
                                                width: 239,
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
                                                borderColor:
                                                    'rgba(186,15,23,1)',
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
                                                id="t18_1036_1424"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 18,
                                                    fontWeight: 600,
                                                    color: 'rgba(186,15,23,1)',
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

                            <div
                                id="t18_1036_1425"
                                style={{
                                    height: 50,
                                    width: 805,
                                    borderRadius: 50,
                                    backgroundColor: 'rgba(255,255,255,1.00)',
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
                                    marginTop: 17,
                                    marginBottom: 0,
                                }}
                            >
                                <div
                                    id="t18_1036_1426"
                                    style={{
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
                                            id="t18_1036_1427"
                                            style={{
                                                height: 19,
                                                width: 19,
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

                                    <input
                                        id="t18_1036_1428"
                                        placeholder="Search by title"
                                        value={dl.changes.rentelHomeSearchText}
                                        style={{
                                            height: '48px',
                                            width: '683px',
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

                                            dl.changes.rentelHomeSearchText =
                                                val
                                        }}
                                        type="text"
                                    ></input>
                                </div>

                                <div
                                    id="t18_1036_1430"
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
                                            id="t18_1036_1431"
                                            style={{
                                                height: 15,
                                                width: 15,
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
                                    id="t18_1036_1432"
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
                                        dl.functions.searchHome(
                                            dl.changes.rentelHomeSearchText
                                        )
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b279de17ff8955703e5cd02ce3887e12f106db6a.png' !=
                                    '' ? (
                                        <img
                                            id="t18_1036_1433"
                                            style={{
                                                height: 21,
                                                width: 20,
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
                            id="t18_1036_1434"
                            style={{
                                width: 1440,
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <MMFilter
                                dataSource={dl.changes.offeredHomeFilter}
                                onChange={(val) => {
                                    dl.functions.applyOfferedHomeFilter()
                                }}
                            />

                            <div
                                id="t18_1036_1469"
                                style={{
                                    width: 1093,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingTop: 43,
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
                                    id="t18_1036_1470"
                                    style={{
                                        width: 1093,
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
                                                id="t18_1036_1473"
                                                style={{
                                                    height: 32,
                                                    width: 204,
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
                                                    Roommates
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
                                                    justifyContent: 'center',
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
                                                    Home Rentals
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* /// for offered and wantted toggle button */}
                                    <div
                                        id="t18_995_596"
                                        style={{
                                            width: 868,
                                            paddingLeft: 80,
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
                                                        'PostYourNeedHomeLg'
                                                    )
                                                    dl.functions.viewsPlugin.showView(
                                                        'ihaveahomerental'
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
                                        id="t18_1036_1476"
                                        style={{
                                            width: 1090,
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
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
                                            id="t18_1036_1477"
                                            style={{
                                                width: 1085,
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
                                                {dl.changes.homeRentelsList.map(
                                                    (item, index) => {
                                                        return (
                                                            <div>
                                                                <MmOfferedHomeCard
                                                                    {...item}
                                                                    {...dl
                                                                        .changes
                                                                        .homeRentelsList}
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
                                                                    onClickPromote={(
                                                                        val
                                                                    ) => {}}
                                                                    onClick={(
                                                                        val
                                                                    ) => {
                                                                        var homeid =
                                                                            dl
                                                                                .changes
                                                                                .homeRentelsList[
                                                                                index
                                                                            ]
                                                                                ._id
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
                                    </div>

                                    <MmEmptyList
                                        {...dl.changes.rentelNodataVisible}
                                    />
                                </div>

                                <div
                                    id="t18_1036_1515"
                                    style={{
                                        height: 56,
                                        width: 973,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        paddingLeft: 60,
                                        paddingRight: 60,
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
                                            dl.functions.applyOfferedHomeFilter(
                                                val
                                            )
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
export default Homerentals_1
