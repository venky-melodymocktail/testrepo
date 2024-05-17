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
import MmQuestion from '../../components/MmQuestion.jsx'
import MmBlogCard from '../../components/MmBlogCard.jsx'
import MmFooter from '../../components/MmFooter.jsx'
import MmServiceSelector from '../../components/MmServiceSelector.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmBlogCardMd from '../../components/MmBlogCardMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmServiceSelectorMd from '../../components/MmServiceSelectorMd.jsx'
import MmFilterMd from '../../components/MmFilterMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmQuestionS from '../../components/MmQuestionS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmServiceSelectorS from '../../components/MmServiceSelectorS.jsx'
import MmFilterS from '../../components/MmFilterS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmQuestionXs from '../../components/MmQuestionXs.jsx'
import MmBlogCardXs from '../../components/MmBlogCardXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmServiceSelectorXs from '../../components/MmServiceSelectorXs.jsx'
import MmFilterXs from '../../components/MmFilterXs.jsx'
import { MenuItem } from '@mui/material'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'

import { outlinedInputClasses } from '@mui/material/OutlinedInput'
import Select, { selectClasses } from '@mui/material/Select'
import onLoad from '../../datalayer/onload.js'

const Visaquestions_1 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_203_1543')
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
                backgroundColor: 'rgba(255,255,255,1.00)',
            }}
        >
            <div
                id="t18_203_1543"
                style={{
                    width: 1440,
                    backgroundColor: 'rgba(255,255,255,1.00)',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <MmHeader
                    {...dl.changes.userDetail}
                    onChangeAddress={(val) => {
                        dl.functions.modalsPlugin.openModal('AddressPopupLg')
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
                        var currentPath = dl.functions.common.getLastPath()
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
                        var currentPath = dl.functions.common.getLastPath()
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
                        var currentPath = dl.functions.common.getLastPath()
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

                        dl.functions.viewsPlugin.showView('travelsuggestions')
                        var currentPath = dl.functions.common.getLastPath()
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

                        dl.functions.viewsPlugin.showView('moviesuggestions')
                        var currentPath = dl.functions.common.getLastPath()
                        dl.functions.onLoadFunctions[currentPath]()
                    }}
                    onStudyAbroadClick={(val) => {
                        // var serviceSelector=dl.changes.dataSource.services
                        var serviceSelector =
                            dl.changes.serviceSelector.services

                        for (var key in serviceSelector) {
                            serviceSelector[key] = 'rgba(186,15,23,1)'
                        }

                        serviceSelector['studyAbroad'] = 'rgba(156,18,24,1)'
                        dl.functions.viewsPlugin.showView('studyabroad')
                        var currentPath = dl.functions.common.getLastPath()
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
                        dl.functions.viewsPlugin.showView('visaquestions')
                        var currentPath = dl.functions.common.getLastPath()
                        dl.functions.onLoadFunctions[currentPath]()
                    }}
                    onTravelCompanionClick={(val) => {
                        // var serviceSelector=dl.changes.dataSource.services

                        // for(var key in serviceSelector){
                        //     serviceSelector[key]="rgba(186,15,23,1)"
                        // }

                        // serviceSelector["travelCompanion"]="rgba(156,18,24,1)"
                        dl.functions.viewsPlugin.showView('travelcompanion')
                        var currentPath = dl.functions.common.getLastPath()
                        dl.functions.onLoadFunctions[currentPath]()

                        var serviceSelector =
                            dl.changes.serviceSelector.services

                        for (var key in serviceSelector) {
                            serviceSelector[key] = 'rgba(186,15,23,1)'
                        }

                        serviceSelector['travelCompanion'] = 'rgba(156,18,24,1)'
                    }}
                />

                <div
                    id="t18_195_1041"
                    style={{
                        width: 1420,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 50,
                        paddingBottom: 50,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_195_1042"
                        style={{
                            height: 146,
                            width: 1091,
                            borderRadius: 10,
                            backgroundColor: 'rgba(248,246,246,1.00)',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <span
                            id="t18_195_1043"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 16,
                                fontWeight: 600,
                                color: 'rgba(113,113,113,1)',
                                letterSpacing: 0,
                                lineHeight: '19.363636016845703px',
                                textAlign: 'center',
                                marginTop: 0,
                                marginBottom: 8,
                            }}
                        >
                            Need an expert advice? Book a slot to Secure your
                            spot for personalized guidance – effortlessly book a
                            one-on-one session or a group session with our
                            experts for tailored advice and insights
                        </span>

                        <div
                            id="t18_2245_30"
                            style={{
                                height: 32,
                                width: 141,
                                borderRadius: 30,
                                backgroundColor: 'rgba(244,186,84,1.00)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 8,
                                marginBottom: 0,
                            }}
                        >
                            <span
                                id="t18_2245_31"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 15,
                                    fontWeight: 500,
                                    color: 'rgba(255,255,255,1)',
                                    letterSpacing: 0,
                                    lineHeight: '18.15340805053711px',
                                    textAlign: 'left',
                                }}
                            >
                                COMING SOON
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    id="t18_195_1046"
                    style={{
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
                    <div
                        id="t18_195_1047"
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
                            borderTopWidth: 1,
                            borderStyle: 'solid',
                        }}
                    >
                        <MMFilter
                            dataSource={dl.changes.visaFilter}
                            onChange={(val) => {
                                dl.changes.visaFilter = val
                                dl.functions.applyVisaQuestionFilters()
                            }}
                        />

                        <div
                            id="t18_195_1094"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingTop: 30,
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
                                id="t18_195_1095"
                                style={{
                                    width: 831,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingBottom: 40,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                }}
                            >
                                <div
                                    id="t18_195_1096"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 10,
                                        paddingRight: 10,
                                        paddingTop: 10,
                                        paddingBottom: 10,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 10,
                                    }}
                                >
                                    <div
                                        id="t18_195_1097"
                                        style={{
                                            height: 60,
                                            borderRadius: 30,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingLeft: 5,
                                            paddingRight: 5,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 2,
                                            borderColor: 'rgba(186,15,23,1)',
                                            borderStyle: 'solid',
                                        }}
                                    >
                                        <div
                                            id="t18_195_1168"
                                            style={{
                                                height: 52,
                                                width: 243,
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
                                                    'faq'
                                                )
                                                var currentPath =
                                                    dl.functions.common.getLastPath()
                                                dl.functions.onLoadFunctions[
                                                    currentPath
                                                ]()

                                                var serviceSelector =
                                                    dl.changes.serviceSelector
                                                        .services

                                                for (var key in serviceSelector) {
                                                    serviceSelector[key] =
                                                        'rgba(186,15,23,1)'
                                                }

                                                serviceSelector['faq'] =
                                                    'rgba(156,18,24,1)'
                                                var currentPath =
                                                    dl.functions.common.getLastPath()
                                                dl.functions.onLoadFunctions[
                                                    currentPath
                                                ]()
                                            }}
                                        >
                                            <span
                                                id="t18_195_1100"
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
                                                FAQ
                                            </span>
                                        </div>

                                        <div
                                            id="t18_195_1098"
                                            style={{
                                                height: 52,
                                                width: 243,
                                                borderRadius: 30,
                                                backgroundColor:
                                                    'rgba(186,15,23,1.00)',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginRight: 0,
                                            }}
                                        >
                                            <span
                                                id="t18_195_1099"
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
                                                Post/Answer A Question
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {dl.changes.showVisaQuestionCreatedSuccess ? (
                                    <div
                                        style={{
                                            width: 831,
                                            // height:287,
                                            borderRadius: 5,
                                            backgroundColor: '#BA0F1708',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            paddingTop: 30,
                                            paddingBottom: 20,
                                            borderStyle: 'solid',
                                            borderWidth: '2px',
                                            borderColor: '#3C06085E',
                                            paddingTop: 60,
                                        }}
                                    >
                                        <img
                                            style={{
                                                width: '220px',
                                                height: '150px',
                                            }}
                                            src="https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/5d758444-22d0-4461-b6e0-abde5e77a890.png"
                                        />
                                        <div
                                            style={{
                                                color: '#3C0608',
                                                fontSize: '40px',
                                                fontWeight: 500,
                                                marginLeft: 5,
                                            }}
                                        >
                                            Success!
                                        </div>
                                        <div
                                            style={{
                                                color: '#7F1D1D',
                                                fontSize: 18,
                                                fontWeight: 500,
                                                marginLeft: 5,
                                                maxWidth: 400,
                                                textAlign: 'center',
                                                // marginBottom:"80px"
                                            }}
                                        >
                                            Your question has successfully
                                            posted, you will be notified once
                                            you receive a comment.
                                        </div>
                                        <div
                                            onClick={() => {
                                                dl.changes.showVisaQuestionCreatedSuccess = false
                                                ;(dl.changes.visaQuestionInput.category =
                                                    ''),
                                                    (dl.changes.visaQuestionInput.question =
                                                        '')
                                            }}
                                            style={{
                                                width: 300,
                                                marginTop: 20,
                                                backgroundColor:
                                                    'rgba(186,15,23,1.00)',
                                                height: 45,
                                                borderRadius: 23,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginBottom: 30,
                                            }}
                                        >
                                            <span
                                                style={{
                                                    color: '#FFFFFF',
                                                    fontSize: 18,
                                                    fontWeight: 500,
                                                    marginLeft: 5,
                                                    textAlign: 'center',
                                                }}
                                            >
                                                Create a new Question
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        style={{
                                            width: 831,
                                            // height:287,
                                            borderRadius: 5,
                                            backgroundColor: '#BA0F1708',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            paddingTop: 30,
                                            paddingBottom: 20,
                                            borderStyle: 'solid',
                                            borderWidth: '2px',
                                            borderColor: '#3C06085E',
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: '90%',
                                                alignItems: 'flex-start',
                                                color: '#3C0608',
                                                fontWeight: 500,
                                                fontSize: '20px',
                                            }}
                                        >
                                            Post a question
                                        </div>
                                        <div
                                            style={{
                                                width: '90%',
                                                alignItems: 'flex-start',
                                                color: '#737373',
                                                fontWeight: 400,
                                                fontSize: '18px',
                                                marginTop: 10,
                                            }}
                                        >
                                            Be specific and imagine you are
                                            asking a question to another person.
                                        </div>
                                        <div
                                            style={{
                                                width: '90%',
                                                borderRadius: 4,
                                                borderStyle: 'solid',
                                                borderWidth: '1px',
                                                borderColor: '#3C060845',
                                                marginTop: 25,
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '100%',
                                                    borderWidth: 0,
                                                    borderBottomWidth: '1px',
                                                    borderColor: '#D0D7DE',
                                                    borderStyle: 'solid',
                                                    borderRadius: 0,
                                                    borderTopLeftRadius: 4,
                                                    borderTopRightRadius: 4,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <select
                                                    name="cars"
                                                    id="t18_195_1177"
                                                    style={{
                                                        height: 44,
                                                        width: 207,
                                                        borderRadius: 4,
                                                        backgroundColor:
                                                            'rgba(255,255,255,00)',
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 0,
                                                        marginRight: 155,
                                                        cursor: 'pointer',
                                                        color: '#7F1D1D',
                                                    }}
                                                    onChange={(val) => {
                                                        val = val.target.value

                                                        dl.changes.visaQuestionInput.category =
                                                            val
                                                    }}
                                                >
                                                    <option
                                                        value=""
                                                        disabled
                                                        selected
                                                    >
                                                        Select category
                                                    </option>
                                                    {Array.isArray(
                                                        dl.changes
                                                            .visaQandACategories
                                                    ) &&
                                                        dl.changes.visaQandACategories.map(
                                                            (item, index) => {
                                                                return (
                                                                    <option
                                                                        value={
                                                                            item
                                                                        }
                                                                        selected={
                                                                            item ==
                                                                            dl
                                                                                .changes
                                                                                .visaQuestionInput
                                                                                .category
                                                                        }
                                                                    >
                                                                        {item}
                                                                    </option>
                                                                )
                                                            }
                                                        )}
                                                </select>
                                            </div>
                                            <div
                                                style={
                                                    {
                                                        // width:"100%"
                                                    }
                                                }
                                            >
                                                <input
                                                    id="t18_195_1174"
                                                    placeholder="Type Your Question here"
                                                    value={
                                                        dl.changes
                                                            .visaQuestionInput
                                                            .question
                                                    }
                                                    style={{
                                                        height: 94,
                                                        width: '95%',
                                                        borderRadius: 4,
                                                        backgroundColor:
                                                            'rgba(255,255,255,1.00)',
                                                        flexDirection: 'column',
                                                        display: 'flex',
                                                        alignItems:
                                                            'flex-start',
                                                        justifyContent:
                                                            'flex-start',
                                                        paddingLeft: '4%',
                                                        paddingTop: 10,
                                                        paddingBottom: 10,
                                                        borderWidth: 0,
                                                        marginTop: 0,
                                                        marginBottom: 0,
                                                        cursor: 'pointer',
                                                        fontFamily: 'Inter',
                                                        fontSize: 16,
                                                        color: '#3C0608',
                                                        fontWeight: 400,
                                                        textAlign: 'left',
                                                    }}
                                                    onChange={(val) => {
                                                        val = val.target.value

                                                        var userToken =
                                                            dl.functions.common.getCookie(
                                                                'userToken'
                                                            )
                                                        if (userToken) {
                                                            dl.changes.visaQuestionInput.question =
                                                                val
                                                        } else {
                                                            dl.functions.modalsPlugin.openModal(
                                                                'loginLg'
                                                            )
                                                        }
                                                    }}
                                                    type="text"
                                                ></input>
                                            </div>
                                            {dl.changes.showAIoptions ? (
                                                <div
                                                    style={{
                                                        width: '100%',
                                                        height: '60px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        flexDirection: 'row',
                                                        // justifyContent:"center"
                                                    }}
                                                >
                                                    <img
                                                        style={{
                                                            width: '25px',
                                                            height: '25px',
                                                            objectFit:
                                                                'contain',
                                                            marginLeft: 20,
                                                        }}
                                                        src="https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/659b1bef-e439-487d-b8bd-4b9b549d7314.png"
                                                    />
                                                    {dl.changes.showAILoader ? (
                                                        <>loader</>
                                                    ) : null}
                                                    {dl.changes
                                                        .showvisaQuestionSuggestion ? (
                                                        <div
                                                            style={{
                                                                color: '#7F1D1D',
                                                                fontSize: 18,
                                                                fontWeight: 500,
                                                                marginLeft: 5,
                                                            }}
                                                        >
                                                            Melody Mockt
                                                            <a
                                                                style={{
                                                                    fontWeight: 700,
                                                                }}
                                                            >
                                                                AI
                                                            </a>
                                                            l
                                                        </div>
                                                    ) : null}
                                                </div>
                                            ) : null}

                                            {dl.changes
                                                .showvisaQuestionSuggestion ? (
                                                <div
                                                    style={{
                                                        width: '100%',
                                                        height: '58px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            color: '#3C0608',
                                                            fontSize: 18,
                                                            fontWeight: 400,
                                                            marginLeft: 14,
                                                        }}
                                                    >
                                                        {
                                                            dl.changes
                                                                .aiVisaQuestionSuggestionText
                                                        }
                                                    </div>
                                                </div>
                                            ) : null}
                                        </div>
                                        {dl.changes.showAIoptions == false ? (
                                            <div
                                                style={{
                                                    width: '90%',
                                                    display: 'flex',
                                                    alignItems: 'flex-end',
                                                    justifyContent: 'flex-end',
                                                    marginTop: 10,
                                                    marginBottom: 10,
                                                }}
                                            >
                                                <div
                                                    id="t18_195_1180"
                                                    className={' contact-btn'}
                                                    style={{
                                                        height: '46px',
                                                        width: 110,
                                                        borderRadius: '23px',
                                                        backgroundColor:
                                                            'rgba(186,15,23,1.00)',
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        display: 'flex',
                                                        paddingLeft: 0,
                                                        paddingRight: 0,

                                                        borderWidth: 0,
                                                        cursor: 'pointer',
                                                    }}
                                                    onClick={(e) => {
                                                        var userToken =
                                                            dl.functions.common.getCookie(
                                                                'userToken'
                                                            )
                                                        if (userToken) {
                                                            // old
                                                            if (
                                                                dl.changes
                                                                    .visaQuestionInput
                                                                    .question ==
                                                                    '' ||
                                                                dl.changes
                                                                    .visaQuestionInput
                                                                    .category ==
                                                                    ''
                                                            ) {
                                                                dl.functions.modalsPlugin.openModal(
                                                                    'errorGeneric'
                                                                )
                                                                dl.changes.errorGenericMessages =
                                                                    'Please Enter your Question and Visa Category'
                                                            } else {
                                                                dl.functions.getQuestionSuggestion()
                                                                // dl.functions.createVisaQuestion()
                                                            }
                                                        } else {
                                                            dl.functions.modalsPlugin.openModal(
                                                                'loginLg'
                                                            )
                                                        }
                                                    }}
                                                >
                                                    <span
                                                        id="t18_195_1179"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: '16px',
                                                            fontWeight: 500,
                                                            color: 'rgba(255,255,255,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '24.204544067382812px',
                                                            textAlign: 'left',
                                                        }}
                                                    >
                                                        Continue
                                                    </span>
                                                </div>
                                            </div>
                                        ) : null}
                                        {dl.changes
                                            .showvisaQuestionSuggestion ? (
                                            <div
                                                style={{
                                                    width: '90%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'flex-end',
                                                    marginTop: 10,
                                                    marginBottom: 10,
                                                    flexDirection: 'row',
                                                }}
                                            >
                                                <div
                                                    onClick={(e) => {
                                                        var userToken =
                                                            dl.functions.common.getCookie(
                                                                'userToken'
                                                            )
                                                        if (userToken) {
                                                            // old
                                                            if (
                                                                dl.changes
                                                                    .visaQuestionInput
                                                                    .question ==
                                                                    '' ||
                                                                dl.changes
                                                                    .visaQuestionInput
                                                                    .category ==
                                                                    ''
                                                            ) {
                                                                dl.functions.modalsPlugin.openModal(
                                                                    'errorGeneric'
                                                                )
                                                                dl.changes.errorGenericMessages =
                                                                    'Please Enter your Question and Visa Category'
                                                            } else {
                                                                // dl.functions.getQuestionSuggestion()
                                                                dl.functions.createVisaQuestion(
                                                                    false
                                                                )
                                                            }
                                                        } else {
                                                            dl.functions.modalsPlugin.openModal(
                                                                'loginLg'
                                                            )
                                                        }
                                                    }}
                                                    style={{
                                                        color: '#7F1D1D',
                                                        fontSize: 18,
                                                        fontWeight: 500,
                                                        marginRight: 15,
                                                        cursor: 'pointer',
                                                    }}
                                                >
                                                    Ask original question
                                                </div>
                                                <div
                                                    id="t18_195_1180"
                                                    className={' contact-btn'}
                                                    style={{
                                                        height: '46px',
                                                        minWidth: 200,
                                                        borderRadius: '23px',
                                                        backgroundColor:
                                                            'rgba(186,15,23,1.00)',
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',
                                                        display: 'flex',
                                                        paddingLeft: 0,
                                                        paddingRight: 0,

                                                        borderWidth: 0,
                                                        cursor: 'pointer',
                                                    }}
                                                    onClick={(e) => {
                                                        var userToken =
                                                            dl.functions.common.getCookie(
                                                                'userToken'
                                                            )
                                                        if (userToken) {
                                                            // old
                                                            if (
                                                                dl.changes
                                                                    .visaQuestionInput
                                                                    .question ==
                                                                    '' ||
                                                                dl.changes
                                                                    .visaQuestionInput
                                                                    .category ==
                                                                    ''
                                                            ) {
                                                                dl.functions.modalsPlugin.openModal(
                                                                    'errorGeneric'
                                                                )
                                                                dl.changes.errorGenericMessages =
                                                                    'Please Enter your Question and Visa Category'
                                                            } else {
                                                                // dl.functions.getQuestionSuggestion()
                                                                dl.functions.createVisaQuestion(
                                                                    true
                                                                )
                                                            }
                                                        } else {
                                                            dl.functions.modalsPlugin.openModal(
                                                                'loginLg'
                                                            )
                                                        }
                                                    }}
                                                >
                                                    <span
                                                        id="t18_195_1179"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: '16px',
                                                            fontWeight: 500,
                                                            color: 'rgba(255,255,255,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '24.204544067382812px',
                                                            textAlign: 'left',
                                                        }}
                                                    >
                                                        Submit suggestion
                                                    </span>
                                                </div>
                                            </div>
                                        ) : null}
                                    </div>
                                )}

                                {/* <div
                                    id="t18_195_1183"
                                    style={{
                                        height: 287,
                                        width: 831,
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
                                        marginTop: 10,
                                        marginBottom: 10,
                                    }}
                                >
                                    <span
                                        id="t18_195_1169"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 22,
                                            fontWeight: 700,
                                            color: 'rgba(186,15,23,1)',
                                            letterSpacing: 0,
                                            lineHeight: '26.625px',
                                            textAlign: 'left',
                                            marginTop: 0,
                                            marginBottom: 12,
                                        }}
                                    >
                                        Have a query?
                                    </span>

                                    <div
                                        id="t18_195_1182"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 12,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <input
                                            id="t18_195_1174"
                                            placeholder="Type Your Question here"
                                            value={
                                                dl.changes.visaQuestionInput
                                                    .question
                                            }
                                            style={{
                                                height: 75,
                                                width: 743,
                                                borderRadius: 4,
                                                backgroundColor:
                                                    'rgba(255,255,255,1.00)',
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingLeft: 20,
                                                paddingTop: 10,
                                                paddingBottom: 10,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 16,
                                                cursor: 'pointer',
                                                fontFamily: 'Inter',
                                                fontSize: 16,
                                                color: 'rgba(112,112,112,1)',
                                                fontWeight: 400,
                                                textAlign: 'left',
                                            }}
                                            onChange={(val) => {
                                                val = val.target.value

                                                var userToken =
                                                    dl.functions.common.getCookie(
                                                        'userToken'
                                                    )
                                                if (userToken) {
                                                    dl.changes.visaQuestionInput.question =
                                                        val
                                                } else {
                                                    dl.functions.modalsPlugin.openModal(
                                                        'loginLg'
                                                    )
                                                }
                                            }}
                                            type="text"
                                        ></input>

                                        <div
                                            id="t18_195_1181"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 16,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <select
                                                name="cars"
                                                id="t18_195_1177"
                                                style={{
                                                    height: 47,
                                                    width: 307,
                                                    borderRadius: 4,
                                                    backgroundColor:
                                                        'rgba(255,255,255,1.00)',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 155,
                                                    cursor: 'pointer',
                                                }}
                                                onChange={(val) => {
                                                    val = val.target.value

                                                    dl.changes.visaQuestionInput.category =
                                                        val
                                                }}
                                            >
                                                <option
                                                    value=""
                                                    disabled
                                                    selected
                                                >
                                                    Select your option
                                                </option>
                                                {Array.isArray(
                                                    dl.changes
                                                        .visaQandACategories
                                                ) &&
                                                    dl.changes.visaQandACategories.map(
                                                        (item, index) => {
                                                            return (
                                                                <option
                                                                    value={item}
                                                                    selected={
                                                                        item ==
                                                                        dl
                                                                            .changes
                                                                            .visaQuestionInput
                                                                            .category
                                                                    }
                                                                >
                                                                    {item}
                                                                </option>
                                                            )
                                                        }
                                                    )}
                                            </select>

                                            <div
                                                id="t18_195_1180"
                                                className={' contact-btn'}
                                                style={{
                                                    height: 27,
                                                    width: 129,
                                                    borderRadius: 4,
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
                                                    marginLeft: 155,
                                                    marginRight: 0,
                                                    cursor: 'pointer',
                                                }}
                                                onClick={(e) => {
                                                    var userToken =
                                                        dl.functions.common.getCookie(
                                                            'userToken'
                                                        )
                                                    if (userToken) {
                                                        if (
                                                            dl.changes
                                                                .visaQuestionInput
                                                                .question ==
                                                                '' ||
                                                            dl.changes
                                                                .visaQuestionInput
                                                                .category == ''
                                                        ) {
                                                            dl.functions.modalsPlugin.openModal(
                                                                'errorGeneric'
                                                            )
                                                            dl.changes.errorGenericMessages =
                                                                'Please Enter your Question and Visa Category'
                                                        } else {
                                                            dl.functions.createVisaQuestion()
                                                        }
                                                    } else {
                                                        dl.functions.modalsPlugin.openModal(
                                                            'loginLg'
                                                        )
                                                    }
                                                }}
                                            >
                                                <span
                                                    id="t18_195_1179"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 20,
                                                        fontWeight: 700,
                                                        color: 'rgba(255,255,255,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '24.204544067382812px',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    Submit
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                <div
                                    id="t18_793_4327"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingTop: 10,
                                        paddingBottom: 10,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 10,
                                        marginBottom: 0,
                                    }}
                                >
                                    <div
                                        id="t18_201_1361"
                                        style={{
                                            width: 831,
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
                                            style={{
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            {dl.changes.visaquestions.map(
                                                (item, index) => {
                                                    return (
                                                        <div>
                                                            <MmQuestion
                                                                {...item}
                                                                {...dl.changes
                                                                    .visaquestions}
                                                                onSave={(
                                                                    val
                                                                ) => {
                                                                    val.stopPropagation()
                                                                    dl.functions.bookmarkAction(
                                                                        'visaquestions',
                                                                        index,
                                                                        'visaqandas'
                                                                    )
                                                                }}
                                                                onUnsave={(
                                                                    val
                                                                ) => {
                                                                    val.stopPropagation()
                                                                    dl.functions.bookmarkAction(
                                                                        'visaquestions',
                                                                        index,
                                                                        'visaqandas'
                                                                    )
                                                                }}
                                                                onClickComments={(
                                                                    val
                                                                ) => {}}
                                                                onClickLink={(
                                                                    val
                                                                ) => {
                                                                    val.stopPropagation()
                                                                    var visaQuestionId =
                                                                        dl
                                                                            .changes
                                                                            .visaquestions[
                                                                            index
                                                                        ]._id
                                                                    var link = `https://melodymocktail.com/comments?visaQuestionId=${visaQuestionId}`
                                                                    dl.functions.common.copyToClipboard(
                                                                        link
                                                                    )
                                                                    window.toast(
                                                                        'Link Copied!'
                                                                    )
                                                                }}
                                                                onClickReport={(
                                                                    val
                                                                ) => {
                                                                    val.stopPropagation()
                                                                    // var userToken = dl.functions.common.getCookie("userToken")
                                                                    // if(userToken){
                                                                    //    dl.changes.reportForm.reportType= "visaquestions"
                                                                    //    dl.changes.reportForm.reportedId= dl.changes.visaquestions[index]._id
                                                                    //    dl.functions.modalsPlugin.openModal('reportacommentLg')

                                                                    // }
                                                                    // else{

                                                                    //     dl.functions.modalsPlugin.openModal('loginLg')
                                                                    // }
                                                                    dl.functions.onReport(
                                                                        dl
                                                                            .changes
                                                                            .visaquestions[
                                                                            index
                                                                        ]._id,
                                                                        'visaquestions',
                                                                        'large'
                                                                    )
                                                                }}
                                                                onClick={(
                                                                    val
                                                                ) => {
                                                                    var visaQuestionId =
                                                                        dl
                                                                            .changes
                                                                            .visaquestions[
                                                                            index
                                                                        ]._id
                                                                    dl.functions.common.relativeRedirect(
                                                                        `comments?visaQuestionId=${visaQuestionId}`,
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
                            </div>

                            <div
                                id="t18_1025_468"
                                style={{
                                    height: 397,
                                    width: 950,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display:
                                        dl.changes.visaQuestionNoDataVisible,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                }}
                            >
                                <div
                                    id="t18_1025_469"
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
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c00eabc0b50238a2e6d4f7f0b4efb517fdb34594.png' !=
                                    '' ? (
                                        <img
                                            id="t18_1025_470"
                                            style={{
                                                height: 236,
                                                width: 365,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 15,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c00eabc0b50238a2e6d4f7f0b4efb517fdb34594.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <div
                                        id="t18_1025_471"
                                        style={{
                                            height: 65,
                                            width: 254,
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
                                        <span
                                            id="t18_1025_472"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 18,
                                                fontWeight: 500,
                                                color: 'rgba(0,0,0,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '21.784090042114258px',
                                                textAlign: 'left',
                                                marginTop: 0,
                                                marginBottom: 2.5,
                                            }}
                                        >
                                            No records found
                                        </span>

                                        <div
                                            id="t18_1025_473"
                                            style={{
                                                height: 38,
                                                width: 254,
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 2.5,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <span
                                                id="t18_1025_474"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 16,
                                                    fontWeight: 400,
                                                    color: 'rgba(167,167,167,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '19.363636016845703px',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                We can’t find any item matching
                                                your search
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                id="t18_195_1155"
                                style={{
                                    height: 17,
                                    width: 890,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingLeft: 60,
                                    paddingTop: 30,
                                    paddingBottom: 30,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderTopWidth: 1,
                                    borderStyle: 'solid',
                                    marginBottom: 0,
                                }}
                            >
                                <MMPagination
                                    total={dl.changes.paginationState.total}
                                    active={dl.changes.paginationState.active}
                                    onChange={(val) => {
                                        dl.changes.paginationState.active = val
                                        var page = String(val)
                                        dl.functions.getvisaQuestions(
                                            '10',
                                            page
                                        )
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    id="t18_752_2"
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
                        id="t18_752_3"
                        style={{
                            width: 1440,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingTop: 45,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 0,
                            marginBottom: 29,
                        }}
                    >
                        <span
                            id="t18_752_4"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 40,
                                fontWeight: 700,
                                color: 'rgba(186,15,23,1)',
                                letterSpacing: 0,
                                lineHeight: '48.409088134765625px',
                                textAlign: 'left',
                                marginTop: 0,
                                marginBottom: 22,
                            }}
                        >
                            Visa Blogs
                        </span>

                        <div
                            id="t18_752_5"
                            className={' blogContainer'}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 22,
                                marginBottom: 0,
                            }}
                        >
                            <MmBlogCard
                                {...dl.changes.visaQandABlog.blog1}
                                onCreateBookmark={(val) => {
                                    val.stopPropagation()
                                    dl.functions.bookmarkAction(
                                        'visaQandABlog',
                                        'blog1',
                                        'blogs'
                                    )
                                }}
                                onRemoveBookmark={(val) => {
                                    val.stopPropagation()
                                    dl.functions.bookmarkAction(
                                        'visaQandABlog',
                                        'blog1',
                                        'blogs'
                                    )
                                }}
                                onClick={(val) => {
                                    var blogId =
                                        dl.changes.visaQandABlog.blog1._id
                                    dl.functions.common.relativeRedirect(
                                        `blogdetails?blogId=${blogId}`,
                                        true
                                    )
                                }}
                            />

                            <MmBlogCard
                                {...dl.changes.visaQandABlog.blog2}
                                onCreateBookmark={(val) => {
                                    val.stopPropagation()
                                    dl.functions.bookmarkAction(
                                        'visaQandABlog',
                                        'blog2',
                                        'blogs'
                                    )
                                }}
                                onRemoveBookmark={(val) => {
                                    val.stopPropagation()
                                    dl.functions.bookmarkAction(
                                        'visaQandABlog',
                                        'blog2',
                                        'blogs'
                                    )
                                }}
                                onClick={(val) => {
                                    var blogId =
                                        dl.changes.visaQandABlog.blog2._id
                                    dl.functions.common.relativeRedirect(
                                        `blogdetails?blogId=${blogId}`,
                                        true
                                    )
                                }}
                            />

                            <MmBlogCard
                                {...dl.changes.visaQandABlog.blog3}
                                onCreateBookmark={(val) => {
                                    val.stopPropagation()
                                    dl.functions.bookmarkAction(
                                        'visaQandABlog',
                                        'blog3',
                                        'blogs'
                                    )
                                }}
                                onRemoveBookmark={(val) => {
                                    val.stopPropagation()
                                    dl.functions.bookmarkAction(
                                        'visaQandABlog',
                                        'blog3',
                                        'blogs'
                                    )
                                }}
                                onClick={(val) => {
                                    var blogId =
                                        dl.changes.visaQandABlog.blog3._id
                                    dl.functions.common.relativeRedirect(
                                        `blogdetails?blogId=${blogId}`,
                                        true
                                    )
                                }}
                            />
                        </div>
                    </div>

                    <div
                        id="t18_752_33"
                        className={' hovereffectsignIn-btn'}
                        style={{
                            height: 37,
                            width: 168,
                            borderRadius: 10,
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
                            marginTop: 29,
                            marginBottom: 0,
                            cursor: 'pointer',
                        }}
                        onClick={(e) => {
                            dl.functions.viewsPlugin.showView('blogs')
                            // var currentPath = dl.functions.common.getLastPath()
                            // dl.functions.onLoadFunctions[currentPath]()
                            dl.changes.blogsFilter[0].options[0].selected = true
                            dl.functions.applyBlogFilter()
                        }}
                    >
                        <span
                            id="t18_752_34"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 22,
                                fontWeight: 700,
                                color: 'rgba(255,255,255,1)',
                                letterSpacing: 0,
                                lineHeight: '26.625px',
                                textAlign: 'left',
                            }}
                        >
                            View All
                        </span>
                    </div>
                </div>

                <MmFooter />
            </div>
        </div>
    )
})
export default Visaquestions_1
