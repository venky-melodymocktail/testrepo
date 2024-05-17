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

const Studyabroadslotbooking_2 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 900
            const element = document.getElementById('t18_816_5091')
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
                id="t18_816_5091"
                style={{
                    width: 900,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
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
                    id="t18_777_1706"
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
                    <MmHeaderMd
                        {...dl.changes.userDetail}
                        onChangeAddress={(val) => {
                            dl.functions.modalsPlugin.openModal(
                                'AddressPopupLg'
                            )
                        }}
                        onClickMenu={(val) => {
                            dl.functions.modalsPlugin.openModal('navigationMd')
                        }}
                        onLogIn={(val) => {
                            dl.functions.viewsPlugin.showView('login')
                        }}
                        onClickProfile={(val) => {
                            dl.functions.viewsPlugin.showView('profile')
                            var currentPath = dl.functions.common.getLastPath()
                            dl.functions.onLoadFunctions[currentPath]()
                        }}
                    />

                    <div
                        id="t18_777_1709"
                        style={{
                            height: 52,
                            width: 840,
                            backgroundColor: 'rgba(248,246,246,1.00)',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingLeft: 30,
                            paddingRight: 30,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_777_1710"
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
                                id="t18_777_1711"
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
                                {'Study abroad >> Book a slot'}
                            </span>
                        </div>
                    </div>

                    <div
                        id="t18_1989_13"
                        style={{
                            height: 375,
                            width: 900,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        {dl.changes.addSpaces.StudyAbroadSlotBookingAd1.md
                            ?.slice(4, -1)
                            .trim() != '' ? (
                            <img
                                id="t18_1989_12"
                                style={{
                                    height: 318,
                                    width: 750,
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
                                src={dl.changes.addSpaces.StudyAbroadSlotBookingAd1.md
                                    ?.slice(4, -1)
                                    .trim()}
                            ></img>
                        ) : (
                            <></>
                        )}
                    </div>

                    <div
                        id="t18_777_1712"
                        style={{
                            width: 660,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            paddingLeft: 120,
                            paddingRight: 120,
                            paddingTop: 20,
                            paddingBottom: 40,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_777_1713"
                            style={{
                                height: 44,
                                borderRadius: 30,
                                backgroundColor: 'rgba(248,246,246,1.00)',
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
                                id="t18_777_1714"
                                style={{
                                    height: 25,
                                    width: 145,
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
                                    dl.changes.completedBatchlordetail = 'none'
                                    dl.changes.backlogDetail = 'none'
                                    dl.changes.currentlyWorking = 'flex'
                                    dl.changes.currentlyWorkingDetail = 'none'
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
                                    id="t18_777_1715"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 18,
                                        fontWeight: 500,
                                        color: dl.changes.mastersformButtonText,
                                        letterSpacing: 0,
                                        lineHeight: '21.784090042114258px',
                                        textAlign: 'center',
                                    }}
                                >
                                    Masters
                                </span>
                            </div>

                            <div
                                id="t18_1850_6"
                                style={{
                                    height: 45,
                                    width: 165,
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
                                    dl.changes.completedBatchlordetail = 'none'
                                    dl.changes.backlogDetail = 'none'
                                    dl.changes.currentlyWorking = 'none'
                                    dl.changes.currentlyWorkingDetail = 'none'
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
                                    id="t18_777_1716"
                                    onClick={() => {}}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 18,
                                        fontWeight: 500,
                                        color: dl.changes
                                            .bachelorformButtonText,
                                        letterSpacing: 0,
                                        lineHeight: '21.784090042114258px',
                                        textAlign: 'center',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Bachelors
                                </span>
                            </div>

                            <div
                                id="t18_1850_7"
                                style={{
                                    height: 45,
                                    width: 165,
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
                                    dl.changes.completedBatchlordetail = 'none'
                                    dl.changes.backlogDetail = 'none'
                                    dl.changes.currentlyWorking = 'none'
                                    dl.changes.currentlyWorkingDetail = 'none'
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
                                    id="t18_777_1717"
                                    onClick={() => {}}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 18,
                                        fontWeight: 500,
                                        color: dl.changes.OthersFormButtonText,
                                        letterSpacing: 0,
                                        lineHeight: '21.784090042114258px',
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
                        id="t18_777_1719"
                        style={{
                            width: 875,
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
                            id="t18_777_1720"
                            style={{
                                width: 875,
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingBottom: 30,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 10,
                            }}
                        >
                            <div
                                id="t18_777_1721"
                                style={{
                                    height: 53,
                                    width: 875,
                                    backgroundColor: 'rgba(186,15,23,1.00)',
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
                                    id="t18_777_1722"
                                    style={{
                                        height: 53,
                                        width: 213,
                                        backgroundColor: 'rgba(154,11,18,1.00)',
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
                                        id="t18_777_1723"
                                        style={{
                                            height: 34,
                                            width: 34,
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
                                            marginRight: 5.5,
                                        }}
                                    >
                                        <span
                                            id="t18_777_1724"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 20,
                                                fontWeight: 700,
                                                color: 'rgba(154,11,18,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '24.204544067382812px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            1
                                        </span>
                                    </div>

                                    <span
                                        id="t18_777_1725"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 20,
                                            fontWeight: 700,
                                            color: 'rgba(255,255,255,1)',
                                            letterSpacing: 0,
                                            lineHeight: '24.204544067382812px',
                                            textAlign: 'left',
                                            marginLeft: 5.5,
                                            marginRight: 0,
                                        }}
                                    >
                                        Details
                                    </span>
                                </div>

                                <div
                                    id="t18_777_1726"
                                    style={{
                                        height: 53,
                                        width: 213,
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
                                        id="t18_777_1727"
                                        style={{
                                            height: 34,
                                            width: 33,
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
                                            marginRight: 5,
                                        }}
                                    >
                                        <span
                                            id="t18_777_1728"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 20,
                                                fontWeight: 700,
                                                color: 'rgba(231,229,228,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '24.204544067382812px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            2
                                        </span>
                                    </div>

                                    <span
                                        id="t18_777_1729"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 20,
                                            fontWeight: 700,
                                            color: 'rgba(255,255,255,1)',
                                            letterSpacing: 0,
                                            lineHeight: '24.204544067382812px',
                                            textAlign: 'left',
                                            marginLeft: 5,
                                            marginRight: 0,
                                        }}
                                    >
                                        Payment
                                    </span>
                                </div>
                            </div>

                            <div
                                id="t18_780_3066"
                                style={{
                                    width: 855,
                                    borderBottomLeftRadius: 15,
                                    borderBottomRightRadius: 15,
                                    backgroundColor: 'rgba(248,246,246,1.00)',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    paddingTop: 40,
                                    paddingBottom: 40,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 1,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderStyle: 'solid',
                                    marginBottom: 0,
                                }}
                            >
                                <div
                                    id="t18_780_3067"
                                    style={{
                                        width: 510,
                                        flexDirection: 'row',
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
                                        marginBottom: 15,
                                    }}
                                >
                                    <span
                                        id="t18_780_3068"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 18,
                                            fontWeight: 600,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '21.784090042114258px',
                                            textAlign: 'left',
                                        }}
                                    >
                                        Fill in your details here
                                    </span>
                                </div>

                                <div
                                    id="t18_780_3069"
                                    style={{
                                        width: 502,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 15,
                                        marginBottom: 15,
                                    }}
                                >
                                    <MmSelect
                                        {...dl.changes.studyAbroadForm.intake}
                                        onChange={(val) => {
                                            dl.changes.studyAbroadForm.intake.value =
                                                val
                                            dl.changes.studyAbroadForm.intake.showErrorMessage =
                                                'none'
                                            dl.changes.studyAbroadForm.intake.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmSelect
                                        {...dl.changes.studyAbroadForm.year}
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
                                    id="t18_1770_77"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'center',
                                        display: dl.changes.completedBatchlor,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 15,
                                        marginBottom: 15,
                                    }}
                                >
                                    <MmSelect
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
                                    id="t18_780_3578"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display:
                                            dl.changes.completedBatchlordetail,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 15,
                                        marginBottom: 15,
                                    }}
                                >
                                    <MmDatePicker
                                        {...dl.changes.studyAbroadForm
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

                                    <MmDatePicker
                                        {...dl.changes.studyAbroadForm.endDate}
                                        onChange={(val) => {
                                            dl.changes.studyAbroadForm.endDate.value =
                                                val
                                            dl.changes.studyAbroadForm.endDate.showErrorMessage =
                                                'none'
                                            dl.changes.studyAbroadForm.endDate.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmSelect
                                        {...dl.changes.studyAbroadForm.backlogs}
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
                                    id="t18_780_3579"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: dl.changes.backlogDetail,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 15,
                                        marginBottom: 15,
                                    }}
                                >
                                    <MmDatePicker
                                        {...dl.changes.studyAbroadForm
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

                                    <MmDatePicker
                                        {...dl.changes.studyAbroadForm
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

                                    <MmSelect
                                        {...dl.changes.studyAbroadForm.semester}
                                        onChange={(val) => {}}
                                    />
                                </div>

                                <div
                                    id="t18_1770_78"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'center',
                                        display: dl.changes.currentlyWorking,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 15,
                                        marginBottom: 15,
                                    }}
                                >
                                    <MmSelect
                                        {...dl.changes.studyAbroadForm.working}
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
                                                dl.changes.explanation = 'none'
                                                // dl.changes.requiredStudyAbrodFields.push('experience','expertise','skills')
                                            }
                                            if (val == 'No') {
                                                dl.changes.explanation = 'flex'
                                                dl.changes.currentlyWorkingDetail =
                                                    'none'
                                                // dl.changes.requiredStudyAbrodFields.push('explain')
                                            }
                                        }}
                                    />
                                </div>

                                <div
                                    id="t18_780_3580"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display:
                                            dl.changes.currentlyWorkingDetail,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 15,
                                        marginBottom: 15,
                                    }}
                                >
                                    <SampleInput
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

                                    <SampleInput
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

                                    <MmTextArea
                                        {...dl.changes.studyAbroadForm.skills}
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
                                    id="t18_1770_79"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'center',
                                        display: dl.changes.explanation,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 15,
                                        marginBottom: 15,
                                    }}
                                >
                                    <MmTextArea
                                        {...dl.changes.studyAbroadForm.explain}
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

                                <MmTextArea
                                    {...dl.changes.studyAbroadForm.backupPlan}
                                    onChange={(val) => {
                                        dl.changes.studyAbroadForm.backupPlan.value =
                                            val
                                        dl.changes.studyAbroadForm.backupPlan.showErrorMessage =
                                            'none'
                                        dl.changes.studyAbroadForm.backupPlan.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <MmSelect
                                    {...dl.changes.studyAbroadForm.sponsor}
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
                                    id="t18_1705_11"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 15,
                                        marginBottom: 15,
                                    }}
                                >
                                    <MmSelect
                                        {...dl.changes.studyAbroadForm.gre}
                                        onChange={(val) => {
                                            dl.changes.studyAbroadForm.gre.value =
                                                val
                                            dl.changes.studyAbroadForm.gre.showErrorMessage =
                                                'none'
                                            dl.changes.studyAbroadForm.gre.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                            if (val == 'Yes') {
                                                dl.changes.greScore = 'flex'
                                                // dl.changes.explanation = "none"
                                                // dl.changes.requiredStudyAbrodFields.push('verbal', 'quantitative', 'analytical')
                                            }
                                            if (val == 'No') {
                                                dl.changes.greScore = 'none'
                                                // dl.changes.currentlyWorkingDetail = "none"
                                            }
                                        }}
                                    />

                                    <div
                                        id="t18_780_3182"
                                        style={{
                                            width: 502,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: dl.changes.greScore,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 15,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_780_3185"
                                            style={{
                                                width: 502,
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
                                                id="t18_780_3186"
                                                style={{
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 13,
                                                }}
                                            >
                                                <SampleInput
                                                    {...dl.changes
                                                        .studyAbroadForm.verbal}
                                                    onChange={(val) => {
                                                        dl.changes.studyAbroadForm.verbal.value =
                                                            val
                                                        dl.changes.studyAbroadForm.verbal.showErrorMessage =
                                                            'none'
                                                        dl.changes.studyAbroadForm.verbal.inputBorderColor =
                                                            'rgba(207,206,206,1)'
                                                    }}
                                                />

                                                <SampleInput
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

                                            <SampleInput
                                                {...dl.changes.studyAbroadForm
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
                                    id="t18_780_3210"
                                    style={{
                                        width: 502,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 15,
                                        marginBottom: 15,
                                    }}
                                >
                                    <div
                                        id="t18_780_3213"
                                        style={{
                                            width: 502,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                        }}
                                    >
                                        <MmSelect
                                            {...dl.changes.studyAbroadForm
                                                .ielts}
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
                                            id="t18_780_3214"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: dl.changes.ieltsScore,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 13,
                                                marginBottom: 13,
                                            }}
                                        >
                                            <SampleInput
                                                {...dl.changes.studyAbroadForm
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

                                            <SampleInput
                                                {...dl.changes.studyAbroadForm
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
                                            id="t18_780_3225"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: dl.changes.ieltsScore,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 13,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <SampleInput
                                                {...dl.changes.studyAbroadForm
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

                                            <SampleInput
                                                {...dl.changes.studyAbroadForm
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

                                <div
                                    id="t18_1705_10"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 15,
                                        marginBottom: 15,
                                    }}
                                >
                                    <MmSelect
                                        {...dl.changes.studyAbroadForm.toefl}
                                        onChange={(val) => {
                                            dl.changes.studyAbroadForm.toefl.value =
                                                val
                                            dl.changes.studyAbroadForm.toefl.showErrorMessage =
                                                'none'
                                            dl.changes.studyAbroadForm.toefl.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                            if (val == 'Yes') {
                                                dl.changes.toeflScore = 'flex'
                                                // dl.changes.explanation = "none"
                                            }
                                            if (val == 'No') {
                                                dl.changes.toeflScore = 'none'
                                                // dl.changes.currentlyWorkingDetail = "none"
                                            }
                                        }}
                                    />

                                    <div
                                        id="t18_780_3243"
                                        style={{
                                            width: 502,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: dl.changes.toeflScore,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 15,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_780_3246"
                                            style={{
                                                width: 502,
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
                                                id="t18_780_3247"
                                                style={{
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 13,
                                                }}
                                            >
                                                <SampleInput
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

                                                <SampleInput
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
                                                id="t18_780_3258"
                                                style={{
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 13,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <SampleInput
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

                                                <SampleInput
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
                                </div>

                                <div
                                    id="t18_1770_80"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'center',
                                        display: dl.changes.gpa12,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 15,
                                        marginBottom: 15,
                                    }}
                                >
                                    <SampleInput
                                        {...dl.changes.studyAbroadForm.gpa}
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
                                    id="t18_780_3581"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: dl.changes.heighestDegree,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 15,
                                        marginBottom: 15,
                                    }}
                                >
                                    <SampleInput
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

                                    <MmDatePicker
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

                                    <MmDatePicker
                                        {...dl.changes.studyAbroadForm
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

                                    <SampleInput
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

                                <MmSelect
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

                                <MmSelect
                                    {...dl.changes.studyAbroadForm.sopWriting}
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
                            id="t18_777_1982"
                            style={{
                                height: 54,
                                width: 187,
                                borderRadius: 5,
                                backgroundColor: 'rgba(186,15,23,1.00)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 10,
                                marginBottom: 0,
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
                                id="t18_777_1983"
                                style={{
                                    fontFamily: 'Poppins',
                                    fontSize: 16,
                                    fontWeight: 500,
                                    color: 'rgba(255,255,255,1)',
                                    letterSpacing: 0,
                                    lineHeight: '24px',
                                    textAlign: 'left',
                                }}
                            >
                                Submit
                            </span>
                        </div>
                    </div>

                    <div
                        id="t18_1989_11"
                        style={{
                            height: 372,
                            width: 900,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        {dl.changes.addSpaces.StudyAbroadSlotBookingAd2.md
                            ?.slice(4, -1)
                            .trim() != '' ? (
                            <img
                                id="t18_1989_10"
                                style={{
                                    height: 318,
                                    width: 750,
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
                                src={dl.changes.addSpaces.StudyAbroadSlotBookingAd2.md
                                    ?.slice(4, -1)
                                    .trim()}
                            ></img>
                        ) : (
                            <></>
                        )}
                    </div>

                    <MmFooterMd />
                </div>
            </div>
        </div>
    )
})
export default Studyabroadslotbooking_2
