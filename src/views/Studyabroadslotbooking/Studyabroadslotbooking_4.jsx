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
import MmSelect from '../../components/MmSelect.jsx'
import MmDatePicker from '../../components/MmDatePicker.jsx'
import SampleInput from '../../components/SampleInput.jsx'
import MmTextArea from '../../components/MmTextArea.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmSelectS from '../../components/MmSelectS.jsx'
import MmDatePickerS from '../../components/MmDatePickerS.jsx'
import MmInputS from '../../components/MmInputS.jsx'
import MmTextAreaS from '../../components/MmTextAreaS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'

const Studyabroadslotbooking_4 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 400
            const element = document.getElementById('t18_816_5093')
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
                id="t18_816_5093"
                style={{
                    width: 400,
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
                    id="t18_777_2262"
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
                        id="t18_777_2263"
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

                        <div
                            id="t18_777_2266"
                            style={{
                                height: 25,
                                width: 350,
                                backgroundColor: 'rgba(248,246,246,1.00)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingLeft: 20,
                                paddingRight: 30,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_777_2267"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                }}
                            >
                                <span
                                    id="t18_777_2268"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 8,
                                        fontWeight: 500,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '9.681818008422852px',
                                        textAlign: 'left',
                                    }}
                                >
                                    {'Study abroad >> Book a slot'}
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_777_2547"
                            style={{
                                width: 400,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingTop: 10,
                                paddingBottom: 15,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            {dl.changes.addSpaces.StudyAbroadSlotBookingAd1.xs
                                ?.slice(4, -1)
                                .trim() != '' ? (
                                <img
                                    id="t18_777_2548"
                                    style={{
                                        height: 197,
                                        width: 360,
                                        display: 'flex',
                                        borderWidth: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        if (
                                            dl.changes.addSpaces[
                                                'StudyAbroadSlotBookingAd1'
                                            ].redirectURL
                                        ) {
                                            window.open(
                                                dl.changes.addSpaces[
                                                    'StudyAbroadSlotBookingAd1'
                                                ].redirectURL,
                                                '_blank'
                                            )
                                        }
                                    }}
                                    src={dl.changes.addSpaces.StudyAbroadSlotBookingAd1.xs
                                        ?.slice(4, -1)
                                        .trim()}
                                ></img>
                            ) : (
                                <></>
                            )}
                        </div>

                        <div
                            id="t18_777_2269"
                            style={{
                                height: 49,
                                width: 360,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                paddingLeft: 20,
                                paddingRight: 20,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_777_2270"
                                style={{
                                    height: 25,
                                    borderRadius: 30,
                                    backgroundColor: 'rgba(248,246,246,1.00)',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingLeft: 2,
                                    paddingRight: 2,
                                    paddingTop: 2,
                                    paddingBottom: 2,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 1,
                                    borderColor: 'rgba(186,15,23,1)',
                                    borderStyle: 'solid',
                                }}
                            >
                                <div
                                    id="t18_777_2271"
                                    style={{
                                        height: 5,
                                        width: 75,
                                        borderRadius: 30,
                                        backgroundColor:
                                            dl.changes.mastersFormButton,
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
                                        dl.changes.completedBatchlor = 'flex'
                                        dl.changes.completedBatchlordetail =
                                            'none'
                                        dl.changes.backlogDetail = 'none'
                                        dl.changes.currentlyWorking = 'flex'
                                        dl.changes.currentlyWorkingDetail =
                                            'none'
                                        dl.changes.explanation = 'none'
                                        dl.changes.greScore = 'none'
                                        dl.changes.ieltsScore = 'none'
                                        dl.changes.toeflScore = 'none'
                                        ;(dl.changes.heighestDegree = 'none'),
                                            // dl.changes.highestDegreeDetails = "none",
                                            // dl.changes.gmatScore = "none"
                                            (dl.changes.gpa12 = 'none')
                                        dl.changes.requiredStudyAbrodFields = [
                                            'intake',
                                            'year',
                                            'bachelors',
                                            'working',
                                            'backupPlan',
                                            'sponsor',
                                            'gre',
                                            'ielts',
                                            'toefl',
                                            'resumeWriting',
                                            'sopWriting',
                                        ]
                                        dl.changes.formType = 'Masters'

                                        dl.changes.mastersFormButton =
                                            'rgba(186,15,23,1)'
                                        dl.changes.mastersformButtonText =
                                            'rgba(248,246,246,1)'
                                        dl.changes.bachelorFormButton =
                                            'rgba(248,246,246,1)'
                                        dl.changes.bachelorformButtonText =
                                            'rgba(186,15,23,1)'
                                        dl.changes.OthersFormButton =
                                            'rgba(248,246,246,1)'
                                        dl.changes.OthersFormButtonText =
                                            'rgba(186,15,23,1)'
                                    }}
                                >
                                    <span
                                        id="t18_777_2272"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 12,
                                            fontWeight: 500,
                                            color: dl.changes
                                                .mastersformButtonText,
                                            letterSpacing: 0,
                                            lineHeight: '14.522727012634277px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        Masters
                                    </span>
                                </div>

                                <div
                                    id="t18_1850_10"
                                    style={{
                                        height: 25,
                                        width: 95,
                                        borderRadius: 30,
                                        backgroundColor:
                                            dl.changes.bachelorFormButton,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        dl.changes.completedBatchlor = 'none'
                                        dl.changes.completedBatchlordetail =
                                            'none'
                                        dl.changes.backlogDetail = 'none'
                                        dl.changes.currentlyWorking = 'none'
                                        dl.changes.currentlyWorkingDetail =
                                            'none'
                                        dl.changes.explanation = 'none'
                                        dl.changes.greScore = 'none'
                                        dl.changes.ieltsScore = 'none'
                                        dl.changes.toeflScore = 'none'
                                        ;(dl.changes.heighestDegree = 'none'),
                                            // dl.changes.highestDegreeDetails = "none",
                                            // dl.changes.gmatScore = "none"
                                            (dl.changes.gpa12 = 'flex')
                                        dl.changes.requiredStudyAbrodFields = [
                                            'intake',
                                            'year',
                                            'backupPlan',
                                            'sponsor',
                                            'gre',
                                            'ielts',
                                            'toefl',
                                            'gpa',
                                            'resumeWriting',
                                            'sopWriting',
                                        ]
                                        dl.changes.formType = 'Bachelors'
                                        // alert(dl.changes.formType)
                                        dl.changes.mastersFormButton =
                                            'rgba(248,246,246,1)'
                                        dl.changes.mastersformButtonText =
                                            'rgba(186,15,23,1)'
                                        dl.changes.bachelorFormButton =
                                            'rgba(186,15,23,1)'
                                        dl.changes.bachelorformButtonText =
                                            'rgba(248,246,246,1)'
                                        dl.changes.OthersFormButton =
                                            'rgba(248,246,246,1)'
                                        dl.changes.OthersFormButtonText =
                                            'rgba(186,15,23,1)'
                                    }}
                                >
                                    <span
                                        id="t18_777_2273"
                                        onClick={() => {
                                            dl.changes.completedBatchlor =
                                                'none'
                                            dl.changes.completedBatchlordetail =
                                                'none'
                                            dl.changes.backlogDetail = 'none'
                                            dl.changes.currentlyWorking = 'none'
                                            dl.changes.currentlyWorkingDetail =
                                                'none'
                                            dl.changes.explanation = 'none'
                                            dl.changes.greScore = 'none'
                                            dl.changes.ieltsScore = 'none'
                                            dl.changes.toeflScore = 'none'
                                            ;(dl.changes.heighestDegree =
                                                'none'),
                                                // dl.changes.highestDegreeDetails = "none",
                                                // dl.changes.gmatScore = "none"
                                                (dl.changes.gpa12 = 'flex')
                                            dl.changes.requiredStudyAbrodFields =
                                                [
                                                    'intake',
                                                    'year',
                                                    'backupPlan',
                                                    'sponsor',
                                                    'gre',
                                                    'ielts',
                                                    'toefl',
                                                    'gpa',
                                                    'resumeWriting',
                                                    'sopWriting',
                                                ]
                                            dl.changes.formType = 'Bachelors'
                                            // alert(dl.changes.formType)
                                            dl.changes.mastersFormButton =
                                                'rgba(248,246,246,1)'
                                            dl.changes.mastersformButtonText =
                                                'rgba(186,15,23,1)'
                                            dl.changes.bachelorFormButton =
                                                'rgba(186,15,23,1)'
                                            dl.changes.bachelorformButtonText =
                                                'rgba(248,246,246,1)'
                                            dl.changes.OthersFormButton =
                                                'rgba(248,246,246,1)'
                                            dl.changes.OthersFormButtonText =
                                                'rgba(186,15,23,1)'
                                        }}
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 12,
                                            fontWeight: 500,
                                            color: dl.changes
                                                .bachelorformButtonText,
                                            letterSpacing: 0,
                                            lineHeight: '14.522727012634277px',
                                            textAlign: 'center',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Bachelors
                                    </span>
                                </div>

                                <div
                                    id="t18_1850_11"
                                    style={{
                                        height: 25,
                                        width: 95,
                                        borderRadius: 30,
                                        backgroundColor:
                                            dl.changes.OthersFormButton,
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
                                        dl.changes.completedBatchlor = 'none'
                                        dl.changes.completedBatchlordetail =
                                            'none'
                                        dl.changes.backlogDetail = 'none'
                                        dl.changes.currentlyWorking = 'none'
                                        dl.changes.currentlyWorkingDetail =
                                            'none'
                                        dl.changes.explanation = 'none'
                                        dl.changes.greScore = 'none'
                                        dl.changes.ieltsScore = 'none'
                                        dl.changes.toeflScore = 'none'
                                        ;(dl.changes.heighestDegree = 'flex'),
                                            // dl.changes.highestDegreeDetails = "flex",
                                            // dl.changes.gmatScore = "flex"
                                            (dl.changes.gpa12 = 'none')
                                        dl.changes.requiredStudyAbrodFields = [
                                            'intake',
                                            'year',
                                            'backupPlan',
                                            'sponsor',
                                            'gre',
                                            'ielts',
                                            'toefl',
                                            'gmatScore',
                                            'resumeWriting',
                                            'sopWriting',
                                            'highestDegree',
                                            'degreeStartDate',
                                            'degreeEndDate',
                                        ]
                                        dl.changes.formType = 'Others'
                                        // alert(dl.changes.formType)
                                        dl.changes.mastersFormButton =
                                            'rgba(248,246,246,1)'
                                        dl.changes.mastersformButtonText =
                                            'rgba(186,15,23,1)'
                                        dl.changes.bachelorFormButton =
                                            'rgba(248,246,246,1)'
                                        dl.changes.bachelorformButtonText =
                                            'rgba(186,15,23,1)'
                                        dl.changes.OthersFormButton =
                                            'rgba(186,15,23,1)'
                                        dl.changes.OthersFormButtonText =
                                            'rgba(248,246,246,1)'
                                    }}
                                >
                                    <span
                                        id="t18_777_2274"
                                        onClick={() => {
                                            dl.changes.completedBatchlor =
                                                'none'
                                            dl.changes.completedBatchlordetail =
                                                'none'
                                            dl.changes.backlogDetail = 'none'
                                            dl.changes.currentlyWorking = 'none'
                                            dl.changes.currentlyWorkingDetail =
                                                'none'
                                            dl.changes.explanation = 'none'
                                            dl.changes.greScore = 'none'
                                            dl.changes.ieltsScore = 'none'
                                            dl.changes.toeflScore = 'none'
                                            ;(dl.changes.heighestDegree =
                                                'flex'),
                                                // dl.changes.highestDegreeDetails = "flex",
                                                // dl.changes.gmatScore = "flex"
                                                (dl.changes.gpa12 = 'none')
                                            dl.changes.requiredStudyAbrodFields =
                                                [
                                                    'intake',
                                                    'year',
                                                    'backupPlan',
                                                    'sponsor',
                                                    'gre',
                                                    'ielts',
                                                    'toefl',
                                                    'gmatScore',
                                                    'resumeWriting',
                                                    'sopWriting',
                                                    'highestDegree',
                                                    'degreeStartDate',
                                                    'degreeEndDate',
                                                ]
                                            dl.changes.formType = 'Others'
                                            // alert(dl.changes.formType)
                                            dl.changes.mastersFormButton =
                                                'rgba(248,246,246,1)'
                                            dl.changes.mastersformButtonText =
                                                'rgba(186,15,23,1)'
                                            dl.changes.bachelorFormButton =
                                                'rgba(248,246,246,1)'
                                            dl.changes.bachelorformButtonText =
                                                'rgba(186,15,23,1)'
                                            dl.changes.OthersFormButton =
                                                'rgba(186,15,23,1)'
                                            dl.changes.OthersFormButtonText =
                                                'rgba(248,246,246,1)'
                                        }}
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 12,
                                            fontWeight: 500,
                                            color: dl.changes
                                                .OthersFormButtonText,
                                            letterSpacing: 0,
                                            lineHeight: '14.522727012634277px',
                                            textAlign: 'center',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Others
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div
                            id="t18_777_2275"
                            style={{
                                width: 360,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                paddingLeft: 20,
                                paddingRight: 20,
                                paddingTop: 30,
                                paddingBottom: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_777_2276"
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
                                    id="t18_777_2277"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 7.5,
                                    }}
                                >
                                    <div
                                        id="t18_777_2278"
                                        style={{
                                            height: 30,
                                            width: 360,
                                            backgroundColor:
                                                'rgba(186,15,23,1.00)',
                                            flexDirection: 'row',
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
                                            id="t18_777_2279"
                                            style={{
                                                height: 30,
                                                width: 92,
                                                backgroundColor:
                                                    'rgba(154,11,18,1.00)',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 3.5,
                                            }}
                                        >
                                            <div
                                                id="t18_777_2280"
                                                style={{
                                                    height: 16,
                                                    width: 16,
                                                    borderRadius: 30,
                                                    backgroundColor:
                                                        'rgba(255,255,255,1.00)',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 2.5,
                                                }}
                                            >
                                                <span
                                                    id="t18_777_2281"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 12,
                                                        fontWeight: 700,
                                                        color: 'rgba(154,11,18,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '14.522727012634277px',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    1
                                                </span>
                                            </div>

                                            <span
                                                id="t18_777_2282"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 12,
                                                    fontWeight: 700,
                                                    color: 'rgba(255,255,255,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '14.522727012634277px',
                                                    textAlign: 'left',
                                                    marginLeft: 2.5,
                                                    marginRight: 0,
                                                }}
                                            >
                                                Details
                                            </span>
                                        </div>

                                        <div
                                            id="t18_777_2283"
                                            style={{
                                                height: 30,
                                                width: 92,
                                                backgroundColor:
                                                    'rgba(231,229,228,1.00)',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 3.5,
                                                marginRight: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_777_2284"
                                                style={{
                                                    height: 16,
                                                    width: 16,
                                                    borderRadius: 30,
                                                    backgroundColor:
                                                        'rgba(255,255,255,1.00)',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 2.5,
                                                }}
                                            >
                                                <span
                                                    id="t18_777_2285"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 12,
                                                        fontWeight: 700,
                                                        color: 'rgba(231,229,228,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '14.522727012634277px',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    2
                                                </span>
                                            </div>

                                            <span
                                                id="t18_777_2286"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 12,
                                                    fontWeight: 700,
                                                    color: 'rgba(255,255,255,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '14.522727012634277px',
                                                    textAlign: 'left',
                                                    marginLeft: 2.5,
                                                    marginRight: 0,
                                                }}
                                            >
                                                Payment
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_780_2815"
                                        style={{
                                            width: 340,
                                            borderBottomLeftRadius: 10,
                                            borderBottomRightRadius: 10,
                                            backgroundColor:
                                                'rgba(248,246,246,1.00)',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            paddingLeft: 10,
                                            paddingRight: 10,
                                            paddingTop: 30,
                                            paddingBottom: 30,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 1,
                                            borderColor: 'rgba(207,206,206,1)',
                                            borderStyle: 'solid',
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_780_2816"
                                            style={{
                                                width: 236,
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
                                                marginTop: 0,
                                                marginBottom: 7.5,
                                            }}
                                        >
                                            <span
                                                id="t18_780_2817"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 12,
                                                    fontWeight: 600,
                                                    color: 'rgba(0,0,0,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '14.522727012634277px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Fill in your details here
                                            </span>
                                        </div>

                                        <div
                                            id="t18_780_2818"
                                            style={{
                                                width: 308,
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 7.5,
                                                marginBottom: 7.5,
                                            }}
                                        >
                                            <MmSelectS
                                                {...dl.changes.studyAbroadForm
                                                    .intake}
                                                onChange={(val) => {
                                                    dl.changes.studyAbroadForm.intake.value =
                                                        val
                                                    dl.changes.studyAbroadForm.intake.showErrorMessage =
                                                        'none'
                                                    dl.changes.studyAbroadForm.intake.inputBorderColor =
                                                        'rgba(207,206,206,1)'
                                                }}
                                            />

                                            <MmSelectS
                                                {...dl.changes.studyAbroadForm
                                                    .year}
                                                onChange={(val) => {
                                                    dl.changes.studyAbroadForm.year.value =
                                                        val
                                                    dl.changes.studyAbroadForm.year.showErrorMessage =
                                                        'none'
                                                    dl.changes.studyAbroadForm.year.inputBorderColor =
                                                        'rgba(207,206,206,1)'
                                                }}
                                            />
                                        </div>

                                        <div
                                            id="t18_1770_85"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                display:
                                                    dl.changes
                                                        .completedBatchlor,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 7.5,
                                                marginBottom: 7.5,
                                            }}
                                        >
                                            <MmSelectS
                                                {...dl.changes.studyAbroadForm
                                                    .bachelors}
                                                onChange={(val) => {
                                                    dl.changes.studyAbroadForm.bachelors.value =
                                                        val
                                                    dl.changes.studyAbroadForm.bachelors.showErrorMessage =
                                                        'none'
                                                    dl.changes.studyAbroadForm.bachelors.inputBorderColor =
                                                        'rgba(207,206,206,1)'
                                                    if (val == 'Yes') {
                                                        dl.changes.completedBatchlordetail =
                                                            'flex'
                                                        dl.changes.backlogDetail =
                                                            'none'
                                                        // dl.changes.requiredStudyAbrodFields.push('startDate','endDate','backlogs')
                                                    }
                                                    if (val == 'No') {
                                                        dl.changes.backlogDetail =
                                                            'flex'
                                                        dl.changes.completedBatchlordetail =
                                                            'none'
                                                        // dl.changes.requiredStudyAbrodFields.push('backlogStartDate','backlogEndDate','semester')
                                                    }
                                                }}
                                            />
                                        </div>

                                        <div
                                            id="t18_780_3587"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display:
                                                    dl.changes
                                                        .completedBatchlordetail,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 7.5,
                                                marginBottom: 7.5,
                                            }}
                                        >
                                            <div
                                                id="t18_780_2838"
                                                style={{
                                                    width: 308,
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 7.5,
                                                }}
                                            >
                                                <MmDatePickerS
                                                    {...dl.changes
                                                        .studyAbroadForm
                                                        .startDate}
                                                    onChange={(val) => {
                                                        dl.changes.studyAbroadForm.startDate.value =
                                                            val
                                                        dl.changes.studyAbroadForm.startDate.showErrorMessage =
                                                            'none'
                                                        dl.changes.studyAbroadForm.startDate.inputBorderColor =
                                                            'rgba(207,206,206,1)'
                                                    }}
                                                />

                                                <MmDatePickerS
                                                    {...dl.changes
                                                        .studyAbroadForm
                                                        .endDate}
                                                    onChange={(val) => {
                                                        dl.changes.studyAbroadForm.endDate.value =
                                                            val
                                                        dl.changes.studyAbroadForm.endDate.showErrorMessage =
                                                            'none'
                                                        dl.changes.studyAbroadForm.endDate.inputBorderColor =
                                                            'rgba(207,206,206,1)'
                                                    }}
                                                />
                                            </div>

                                            <MmSelectS
                                                {...dl.changes.studyAbroadForm
                                                    .backlogs}
                                                onChange={(val) => {
                                                    dl.changes.studyAbroadForm.backlogs.value =
                                                        val
                                                    dl.changes.studyAbroadForm.backlogs.showErrorMessage =
                                                        'none'
                                                    dl.changes.studyAbroadForm.backlogs.inputBorderColor =
                                                        'rgba(207,206,206,1)'
                                                }}
                                            />
                                        </div>

                                        <div
                                            id="t18_780_3588"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display:
                                                    dl.changes.backlogDetail,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 7.5,
                                                marginBottom: 7.5,
                                            }}
                                        >
                                            <div
                                                id="t18_780_2860"
                                                style={{
                                                    width: 308,
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 7.5,
                                                }}
                                            >
                                                <MmDatePickerS
                                                    {...dl.changes
                                                        .studyAbroadForm
                                                        .backlogStartDate}
                                                    onChange={(val) => {
                                                        dl.changes.studyAbroadForm.backlogStartDate.value =
                                                            val
                                                        dl.changes.studyAbroadForm.backlogStartDate.showErrorMessage =
                                                            'none'
                                                        dl.changes.studyAbroadForm.backlogStartDate.inputBorderColor =
                                                            'rgba(207,206,206,1)'
                                                    }}
                                                />

                                                <MmDatePickerS
                                                    {...dl.changes
                                                        .studyAbroadForm
                                                        .backlogEndDate}
                                                    onChange={(val) => {
                                                        dl.changes.studyAbroadForm.backlogEndDate.value =
                                                            val
                                                        dl.changes.studyAbroadForm.backlogEndDate.showErrorMessage =
                                                            'none'
                                                        dl.changes.studyAbroadForm.backlogEndDate.inputBorderColor =
                                                            'rgba(207,206,206,1)'
                                                    }}
                                                />
                                            </div>

                                            <MmSelectS
                                                {...dl.changes.studyAbroadForm
                                                    .semester}
                                                onChange={(val) => {
                                                    dl.changes.studyAbroadForm.semester.value =
                                                        val
                                                    dl.changes.studyAbroadForm.semester.showErrorMessage =
                                                        'none'
                                                    dl.changes.studyAbroadForm.semester.inputBorderColor =
                                                        'rgba(207,206,206,1)'
                                                }}
                                            />
                                        </div>

                                        <div
                                            id="t18_1770_86"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                display:
                                                    dl.changes.currentlyWorking,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 7.5,
                                                marginBottom: 7.5,
                                            }}
                                        >
                                            <MmSelectS
                                                {...dl.changes.studyAbroadForm
                                                    .working}
                                                onChange={(val) => {
                                                    dl.changes.studyAbroadForm.working.value =
                                                        val
                                                    dl.changes.studyAbroadForm.working.showErrorMessage =
                                                        'none'
                                                    dl.changes.studyAbroadForm.working.inputBorderColor =
                                                        'rgba(207,206,206,1)'
                                                    if (val == 'Yes') {
                                                        dl.changes.currentlyWorkingDetail =
                                                            'flex'
                                                        dl.changes.explanation =
                                                            'none'
                                                        // dl.changes.requiredStudyAbrodFields.push('experience','expertise','skills')
                                                    }
                                                    if (val == 'No') {
                                                        dl.changes.explanation =
                                                            'flex'
                                                        dl.changes.currentlyWorkingDetail =
                                                            'none'
                                                        // dl.changes.requiredStudyAbrodFields.push('explain')
                                                    }
                                                }}
                                            />
                                        </div>

                                        <div
                                            id="t18_780_3589"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display:
                                                    dl.changes
                                                        .currentlyWorkingDetail,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 7.5,
                                                marginBottom: 7.5,
                                            }}
                                        >
                                            <MmInputS
                                                {...dl.changes.studyAbroadForm
                                                    .experience}
                                                onChange={(val) => {
                                                    dl.changes.studyAbroadForm.experience.value =
                                                        val
                                                    dl.changes.studyAbroadForm.experience.showErrorMessage =
                                                        'none'
                                                    dl.changes.studyAbroadForm.experience.inputBorderColor =
                                                        'rgba(207,206,206,1)'
                                                }}
                                            />

                                            <MmInputS
                                                {...dl.changes.studyAbroadForm
                                                    .expertise}
                                                onChange={(val) => {
                                                    dl.changes.studyAbroadForm.expertise.value =
                                                        val
                                                    dl.changes.studyAbroadForm.expertise.showErrorMessage =
                                                        'none'
                                                    dl.changes.studyAbroadForm.expertise.inputBorderColor =
                                                        'rgba(207,206,206,1)'
                                                }}
                                            />

                                            <MmTextAreaS
                                                {...dl.changes.studyAbroadForm
                                                    .skills}
                                                onChange={(val) => {
                                                    dl.changes.studyAbroadForm.skills.value =
                                                        val
                                                    dl.changes.studyAbroadForm.skills.showErrorMessage =
                                                        'none'
                                                    dl.changes.studyAbroadForm.skills.inputBorderColor =
                                                        'rgba(207,206,206,1)'
                                                }}
                                            />
                                        </div>

                                        <div
                                            id="t18_1770_87"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                display: dl.changes.explanation,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 7.5,
                                                marginBottom: 7.5,
                                            }}
                                        >
                                            <MmTextAreaS
                                                {...dl.changes.studyAbroadForm
                                                    .explain}
                                                onChange={(val) => {
                                                    dl.changes.studyAbroadForm.explain.value =
                                                        val
                                                    dl.changes.studyAbroadForm.explain.showErrorMessage =
                                                        'none'
                                                    dl.changes.studyAbroadForm.explain.inputBorderColor =
                                                        'rgba(207,206,206,1)'
                                                }}
                                            />
                                        </div>

                                        <MmTextAreaS
                                            {...dl.changes.studyAbroadForm
                                                .backupPlan}
                                            onChange={(val) => {
                                                dl.changes.studyAbroadForm.backupPlan.value =
                                                    val
                                                dl.changes.studyAbroadForm.backupPlan.showErrorMessage =
                                                    'none'
                                                dl.changes.studyAbroadForm.backupPlan.inputBorderColor =
                                                    'rgba(207,206,206,1)'
                                            }}
                                        />

                                        <MmSelectS
                                            {...dl.changes.studyAbroadForm
                                                .sponsor}
                                            onChange={(val) => {
                                                dl.changes.studyAbroadForm.sponsor.value =
                                                    val
                                                dl.changes.studyAbroadForm.sponsor.showErrorMessage =
                                                    'none'
                                                dl.changes.studyAbroadForm.sponsor.inputBorderColor =
                                                    'rgba(207,206,206,1)'
                                            }}
                                        />

                                        <div
                                            id="t18_780_2932"
                                            style={{
                                                width: 308,
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 7.5,
                                                marginBottom: 7.5,
                                            }}
                                        >
                                            <div
                                                id="t18_780_2934"
                                                style={{
                                                    width: 308,
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                }}
                                            >
                                                <div
                                                    id="t18_780_2935"
                                                    style={{
                                                        width: 308,
                                                        flexDirection: 'column',
                                                        alignItems:
                                                            'flex-start',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginTop: 0,
                                                        marginBottom: 7.5,
                                                    }}
                                                >
                                                    <div
                                                        id="t18_1759_5"
                                                        style={{
                                                            flexDirection:
                                                                'column',
                                                            alignItems:
                                                                'flex-start',
                                                            justifyContent:
                                                                'flex-start',
                                                            display: 'flex',
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginTop: 0,
                                                            marginBottom: 7.5,
                                                        }}
                                                    >
                                                        <MmSelectS
                                                            {...dl.changes
                                                                .studyAbroadForm
                                                                .gre}
                                                            onChange={(val) => {
                                                                dl.changes.studyAbroadForm.gre.value =
                                                                    val
                                                                dl.changes.studyAbroadForm.gre.showErrorMessage =
                                                                    'none'
                                                                dl.changes.studyAbroadForm.gre.inputBorderColor =
                                                                    'rgba(207,206,206,1)'
                                                                if (
                                                                    val == 'Yes'
                                                                ) {
                                                                    dl.changes.greScore =
                                                                        'flex'
                                                                    // dl.changes.explanation = "none"
                                                                    // dl.changes.requiredStudyAbrodFields.push('verbal', 'quantitative', 'analytical')
                                                                }
                                                                if (
                                                                    val == 'No'
                                                                ) {
                                                                    dl.changes.greScore =
                                                                        'none'
                                                                    // dl.changes.currentlyWorkingDetail = "none"
                                                                }
                                                            }}
                                                        />
                                                    </div>

                                                    <div
                                                        id="t18_1759_6"
                                                        style={{
                                                            flexDirection:
                                                                'column',
                                                            alignItems:
                                                                'flex-start',
                                                            justifyContent:
                                                                'flex-start',
                                                            display:
                                                                dl.changes
                                                                    .greScore,
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginTop: 7.5,
                                                            marginBottom: 7.5,
                                                        }}
                                                    >
                                                        <MmInputS
                                                            {...dl.changes
                                                                .studyAbroadForm
                                                                .verbal}
                                                            onChange={(val) => {
                                                                dl.changes.studyAbroadForm.verbal.value =
                                                                    val
                                                                dl.changes.studyAbroadForm.verbal.showErrorMessage =
                                                                    'none'
                                                                dl.changes.studyAbroadForm.verbal.inputBorderColor =
                                                                    'rgba(207,206,206,1)'
                                                            }}
                                                        />
                                                    </div>

                                                    <div
                                                        id="t18_1759_7"
                                                        style={{
                                                            flexDirection:
                                                                'column',
                                                            alignItems:
                                                                'flex-start',
                                                            justifyContent:
                                                                'flex-start',
                                                            display:
                                                                dl.changes
                                                                    .greScore,
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginTop: 7.5,
                                                            marginBottom: 0,
                                                        }}
                                                    >
                                                        <MmInputS
                                                            {...dl.changes
                                                                .studyAbroadForm
                                                                .quantitative}
                                                            onChange={(val) => {
                                                                dl.changes.studyAbroadForm.quantitative.value =
                                                                    val
                                                                dl.changes.studyAbroadForm.quantitative.showErrorMessage =
                                                                    'none'
                                                                dl.changes.studyAbroadForm.quantitative.inputBorderColor =
                                                                    'rgba(207,206,206,1)'
                                                            }}
                                                        />
                                                    </div>
                                                </div>

                                                <div
                                                    id="t18_1759_8"
                                                    style={{
                                                        flexDirection: 'column',
                                                        alignItems:
                                                            'flex-start',
                                                        justifyContent:
                                                            'center',
                                                        display:
                                                            dl.changes.greScore,
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginTop: 7.5,
                                                        marginBottom: 0,
                                                    }}
                                                >
                                                    <MmInputS
                                                        {...dl.changes
                                                            .studyAbroadForm
                                                            .analytical}
                                                        onChange={(val) => {
                                                            dl.changes.studyAbroadForm.analytical.value =
                                                                val
                                                            dl.changes.studyAbroadForm.analytical.showErrorMessage =
                                                                'none'
                                                            dl.changes.studyAbroadForm.analytical.inputBorderColor =
                                                                'rgba(207,206,206,1)'
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_780_2958"
                                            style={{
                                                width: 308,
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 7.5,
                                                marginBottom: 7.5,
                                            }}
                                        >
                                            <div
                                                id="t18_780_2959"
                                                style={{
                                                    width: 308,
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                }}
                                            >
                                                <MmSelectS
                                                    {...dl.changes
                                                        .studyAbroadForm.ielts}
                                                    onChange={(val) => {
                                                        dl.changes.studyAbroadForm.ielts.value =
                                                            val
                                                        dl.changes.studyAbroadForm.ielts.showErrorMessage =
                                                            'none'
                                                        dl.changes.studyAbroadForm.ielts.inputBorderColor =
                                                            'rgba(207,206,206,1)'
                                                        if (val == 'Yes') {
                                                            dl.changes.ieltsScore =
                                                                'flex'
                                                            // dl.changes.explanation = "none"
                                                        }
                                                        if (val == 'No') {
                                                            dl.changes.ieltsScore =
                                                                'none'
                                                            // dl.changes.currentlyWorkingDetail = "none"
                                                        }
                                                    }}
                                                />

                                                <div
                                                    id="t18_780_2961"
                                                    style={{
                                                        flexDirection: 'column',
                                                        alignItems:
                                                            'flex-start',
                                                        justifyContent:
                                                            'center',
                                                        display:
                                                            dl.changes
                                                                .ieltsScore,
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginTop: 7.5,
                                                        marginBottom: 0,
                                                    }}
                                                >
                                                    <div
                                                        id="t18_780_2962"
                                                        style={{
                                                            flexDirection:
                                                                'column',
                                                            alignItems:
                                                                'flex-start',
                                                            justifyContent:
                                                                'flex-start',
                                                            display: 'flex',
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginTop: 0,
                                                            marginBottom: 7.5,
                                                        }}
                                                    >
                                                        <MmInputS
                                                            {...dl.changes
                                                                .studyAbroadForm
                                                                .ieltsReading}
                                                            onChange={(val) => {
                                                                dl.changes.studyAbroadForm.ieltsReading.value =
                                                                    val
                                                                dl.changes.studyAbroadForm.ieltsReading.showErrorMessage =
                                                                    'none'
                                                                dl.changes.studyAbroadForm.ieltsReading.inputBorderColor =
                                                                    'rgba(207,206,206,1)'
                                                            }}
                                                        />

                                                        <MmInputS
                                                            {...dl.changes
                                                                .studyAbroadForm
                                                                .ieltsListening}
                                                            onChange={(val) => {
                                                                dl.changes.studyAbroadForm.ieltsListening.value =
                                                                    val
                                                                dl.changes.studyAbroadForm.ieltsListening.showErrorMessage =
                                                                    'none'
                                                                dl.changes.studyAbroadForm.ieltsListening.inputBorderColor =
                                                                    'rgba(207,206,206,1)'
                                                            }}
                                                        />
                                                    </div>

                                                    <div
                                                        id="t18_780_2973"
                                                        style={{
                                                            flexDirection:
                                                                'column',
                                                            alignItems:
                                                                'flex-start',
                                                            justifyContent:
                                                                'flex-start',
                                                            display: 'flex',
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginTop: 7.5,
                                                            marginBottom: 0,
                                                        }}
                                                    >
                                                        <MmInputS
                                                            {...dl.changes
                                                                .studyAbroadForm
                                                                .ieltsWriting}
                                                            onChange={(val) => {
                                                                dl.changes.studyAbroadForm.ieltsWriting.value =
                                                                    val
                                                                dl.changes.studyAbroadForm.ieltsWriting.showErrorMessage =
                                                                    'none'
                                                                dl.changes.studyAbroadForm.ieltsWriting.inputBorderColor =
                                                                    'rgba(207,206,206,1)'
                                                            }}
                                                        />

                                                        <MmInputS
                                                            {...dl.changes
                                                                .studyAbroadForm
                                                                .ieltsSpeaking}
                                                            onChange={(val) => {
                                                                dl.changes.studyAbroadForm.ieltsSpeaking.value =
                                                                    val
                                                                dl.changes.studyAbroadForm.ieltsSpeaking.showErrorMessage =
                                                                    'none'
                                                                dl.changes.studyAbroadForm.ieltsSpeaking.inputBorderColor =
                                                                    'rgba(207,206,206,1)'
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_780_2991"
                                            style={{
                                                width: 308,
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 7.5,
                                                marginBottom: 7.5,
                                            }}
                                        >
                                            <MmSelectS
                                                {...dl.changes.studyAbroadForm
                                                    .toefl}
                                                onChange={(val) => {
                                                    dl.changes.studyAbroadForm.toefl.value =
                                                        val
                                                    dl.changes.studyAbroadForm.toefl.showErrorMessage =
                                                        'none'
                                                    dl.changes.studyAbroadForm.toefl.inputBorderColor =
                                                        'rgba(207,206,206,1)'
                                                    if (val == 'Yes') {
                                                        dl.changes.toeflScore =
                                                            'flex'
                                                        // dl.changes.explanation = "none"
                                                    }
                                                    if (val == 'No') {
                                                        dl.changes.toeflScore =
                                                            'none'
                                                        // dl.changes.currentlyWorkingDetail = "none"
                                                    }
                                                }}
                                            />

                                            <div
                                                id="t18_780_2993"
                                                style={{
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    justifyContent: 'center',
                                                    display:
                                                        dl.changes.toeflScore,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 7.5,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <div
                                                    id="t18_780_2994"
                                                    style={{
                                                        flexDirection: 'column',
                                                        alignItems:
                                                            'flex-start',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginTop: 0,
                                                        marginBottom: 7.5,
                                                    }}
                                                >
                                                    <MmInputS
                                                        {...dl.changes
                                                            .studyAbroadForm
                                                            .toeflReading}
                                                        onChange={(val) => {
                                                            dl.changes.studyAbroadForm.toeflReading.value =
                                                                val
                                                            dl.changes.studyAbroadForm.toeflReading.showErrorMessage =
                                                                'none'
                                                            dl.changes.studyAbroadForm.toeflReading.inputBorderColor =
                                                                'rgba(207,206,206,1)'
                                                        }}
                                                    />

                                                    <MmInputS
                                                        {...dl.changes
                                                            .studyAbroadForm
                                                            .toeflListening}
                                                        onChange={(val) => {
                                                            dl.changes.studyAbroadForm.toeflListening.value =
                                                                val
                                                            dl.changes.studyAbroadForm.toeflListening.showErrorMessage =
                                                                'none'
                                                            dl.changes.studyAbroadForm.toeflListening.inputBorderColor =
                                                                'rgba(207,206,206,1)'
                                                        }}
                                                    />
                                                </div>

                                                <div
                                                    id="t18_780_3005"
                                                    style={{
                                                        flexDirection: 'column',
                                                        alignItems:
                                                            'flex-start',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginTop: 7.5,
                                                        marginBottom: 0,
                                                    }}
                                                >
                                                    <MmInputS
                                                        {...dl.changes
                                                            .studyAbroadForm
                                                            .toeflWriting}
                                                        onChange={(val) => {
                                                            dl.changes.studyAbroadForm.toeflWriting.value =
                                                                val
                                                            dl.changes.studyAbroadForm.toeflWriting.showErrorMessage =
                                                                'none'
                                                            dl.changes.studyAbroadForm.toeflWriting.inputBorderColor =
                                                                'rgba(207,206,206,1)'
                                                        }}
                                                    />

                                                    <MmInputS
                                                        {...dl.changes
                                                            .studyAbroadForm
                                                            .toeflSpeaking}
                                                        onChange={(val) => {
                                                            dl.changes.studyAbroadForm.toeflSpeaking.value =
                                                                val
                                                            dl.changes.studyAbroadForm.toeflSpeaking.showErrorMessage =
                                                                'none'
                                                            dl.changes.studyAbroadForm.toeflSpeaking.inputBorderColor =
                                                                'rgba(207,206,206,1)'
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1770_88"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                display: dl.changes.gpa12,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 7.5,
                                                marginBottom: 7.5,
                                            }}
                                        >
                                            <MmInputS
                                                {...dl.changes.studyAbroadForm
                                                    .gpa}
                                                onChange={(val) => {
                                                    dl.changes.studyAbroadForm.gpa.value =
                                                        val
                                                    dl.changes.studyAbroadForm.gpa.showErrorMessage =
                                                        'none'
                                                    dl.changes.studyAbroadForm.gpa.inputBorderColor =
                                                        'rgba(207,206,206,1)'
                                                }}
                                            />
                                        </div>

                                        <div
                                            id="t18_780_3590"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display:
                                                    dl.changes.heighestDegree,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 7.5,
                                                marginBottom: 7.5,
                                            }}
                                        >
                                            <MmInputS
                                                {...dl.changes.studyAbroadForm
                                                    .highestDegree}
                                                onChange={(val) => {
                                                    dl.changes.studyAbroadForm.highestDegree.value =
                                                        val
                                                    dl.changes.studyAbroadForm.highestDegree.showErrorMessage =
                                                        'none'
                                                    dl.changes.studyAbroadForm.highestDegree.inputBorderColor =
                                                        'rgba(207,206,206,1)'
                                                }}
                                            />

                                            <MmDatePickerS
                                                {...dl.changes.studyAbroadForm
                                                    .degreeStartDate}
                                                onChange={(val) => {
                                                    dl.changes.studyAbroadForm.degreeStartDate.value =
                                                        val
                                                    dl.changes.studyAbroadForm.degreeStartDate.showErrorMessage =
                                                        'none'
                                                    dl.changes.studyAbroadForm.degreeStartDate.inputBorderColor =
                                                        'rgba(207,206,206,1)'
                                                }}
                                            />

                                            <div
                                                id="t18_780_3037"
                                                style={{
                                                    width: 308,
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 7.5,
                                                    marginBottom: 7.5,
                                                }}
                                            >
                                                <MmDatePickerS
                                                    {...dl.changes
                                                        .studyAbroadForm
                                                        .degreeEndDate}
                                                    onChange={(val) => {
                                                        dl.changes.studyAbroadForm.degreeEndDate.value =
                                                            val
                                                        dl.changes.studyAbroadForm.degreeEndDate.showErrorMessage =
                                                            'none'
                                                        dl.changes.studyAbroadForm.degreeEndDate.inputBorderColor =
                                                            'rgba(207,206,206,1)'
                                                    }}
                                                />
                                            </div>

                                            <MmInputS
                                                {...dl.changes.studyAbroadForm
                                                    .gmatScore}
                                                onChange={(val) => {
                                                    dl.changes.studyAbroadForm.gmatScore.value =
                                                        val
                                                    dl.changes.studyAbroadForm.gmatScore.showErrorMessage =
                                                        'none'
                                                    dl.changes.studyAbroadForm.gmatScore.inputBorderColor =
                                                        'rgba(207,206,206,1)'
                                                }}
                                            />
                                        </div>

                                        <MmSelectS
                                            {...dl.changes.studyAbroadForm
                                                .resumeWriting}
                                            onChange={(val) => {
                                                dl.changes.studyAbroadForm.resumeWriting.value =
                                                    val
                                                dl.changes.studyAbroadForm.resumeWriting.showErrorMessage =
                                                    'none'
                                                dl.changes.studyAbroadForm.resumeWriting.inputBorderColor =
                                                    'rgba(207,206,206,1)'
                                            }}
                                        />

                                        <MmSelectS
                                            {...dl.changes.studyAbroadForm
                                                .sopWriting}
                                            onChange={(val) => {
                                                dl.changes.studyAbroadForm.sopWriting.value =
                                                    val
                                                dl.changes.studyAbroadForm.sopWriting.showErrorMessage =
                                                    'none'
                                                dl.changes.studyAbroadForm.sopWriting.inputBorderColor =
                                                    'rgba(207,206,206,1)'
                                            }}
                                        />
                                    </div>
                                </div>

                                <div
                                    id="t18_777_2538"
                                    style={{
                                        width: 340,
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
                                        marginTop: 7.5,
                                        marginBottom: 0,
                                    }}
                                >
                                    <div
                                        id="t18_777_2539"
                                        style={{
                                            height: 10,
                                            width: 75,
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
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            var isvalid =
                                                dl.functions.validateStudyAbroadForm()
                                            if (isvalid == true) {
                                                dl.functions.viewsPlugin.showView(
                                                    'studyabroadslotpayment'
                                                )
                                                var date = new Date()
                                                dl.changes.studyAbroadPaymentForm.date.minDate =
                                                    date
                                            }
                                        }}
                                    >
                                        <span
                                            id="t18_777_2540"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 12,
                                                fontWeight: 600,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '14.522727012634277px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            Submit
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            id="t18_777_2549"
                            style={{
                                width: 400,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingTop: 10,
                                paddingBottom: 15,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            {dl.changes.addSpaces.StudyAbroadSlotBookingAd2.xs
                                ?.slice(4, -1)
                                .trim() != '' ? (
                                <img
                                    id="t18_777_2550"
                                    style={{
                                        height: 197,
                                        width: 360,
                                        display: 'flex',
                                        borderWidth: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        if (
                                            dl.changes.addSpaces[
                                                'StudyAbroadSlotBookingAd2'
                                            ].redirectURL
                                        ) {
                                            window.open(
                                                dl.changes.addSpaces[
                                                    'StudyAbroadSlotBookingAd2'
                                                ].redirectURL,
                                                '_blank'
                                            )
                                        }
                                    }}
                                    src={dl.changes.addSpaces.StudyAbroadSlotBookingAd2.xs
                                        ?.slice(4, -1)
                                        .trim()}
                                ></img>
                            ) : (
                                <></>
                            )}
                        </div>

                        <MmFooterXs />
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Studyabroadslotbooking_4
