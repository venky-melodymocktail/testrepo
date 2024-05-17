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

import MmFooter from '../../components/MmFooter.jsx'
import MmHeader from '../../components/MmHeader.jsx'
import MmTextArea from '../../components/MmTextArea.jsx'
import MmSelect from '../../components/MmSelect.jsx'
import MmDatePicker from '../../components/MmDatePicker.jsx'
import MmTimeSlots from '../../components/MmTimeSlots.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmSelectS from '../../components/MmSelectS.jsx'
import MmDatePickerS from '../../components/MmDatePickerS.jsx'
import MmTextAreaS from '../../components/MmTextAreaS.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'

const Studyabroadslotpayment_1 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_817_5094')
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
                id="t18_817_5094"
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
                    id="t18_784_3796"
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
                        id="t18_784_3797"
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

                        <div
                            id="t18_784_3800"
                            style={{
                                height: 76,
                                width: 1280,
                                backgroundColor: 'rgba(248,246,246,1.00)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingLeft: 80,
                                paddingRight: 80,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <span
                                id="t18_784_3801"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 500,
                                    color: 'rgba(113,113,113,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginLeft: 0,
                                    marginRight: 4.5,
                                }}
                            >
                                Study abroad
                            </span>

                            <span
                                id="t18_784_3804"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 500,
                                    color: 'rgba(113,113,113,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginLeft: 4.5,
                                    marginRight: 0,
                                }}
                            >
                                {'>> Book a Slot'}
                            </span>
                        </div>

                        <div
                            id="t18_784_3805"
                            style={{
                                height: 134,
                                width: 1440,
                                backgroundColor: 'rgba(186,15,23,1.00)',
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
                                id="t18_784_3806"
                                style={{
                                    width: 263,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 94,
                                }}
                            >
                                <span
                                    id="t18_784_3807"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 30,
                                        fontWeight: 700,
                                        color: 'rgba(244,186,84,1)',
                                        letterSpacing: 0,
                                        lineHeight: '36.30681610107422px',
                                        textAlign: 'center',
                                        marginTop: 0,
                                    }}
                                >
                                    100+
                                </span>

                                <span
                                    id="t18_784_3808"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 22,
                                        fontWeight: 700,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '26.625px',
                                        textAlign: 'center',
                                        marginBottom: 0,
                                    }}
                                >
                                    Verified experts
                                </span>
                            </div>

                            <div
                                id="t18_784_3809"
                                style={{
                                    width: 263,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 94,
                                    marginRight: 94,
                                }}
                            >
                                <span
                                    id="t18_784_3810"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 30,
                                        fontWeight: 700,
                                        color: 'rgba(244,186,84,1)',
                                        letterSpacing: 0,
                                        lineHeight: '36.30681610107422px',
                                        textAlign: 'center',
                                        marginTop: 0,
                                    }}
                                >
                                    50+
                                </span>

                                <span
                                    id="t18_784_3811"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 22,
                                        fontWeight: 700,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '26.625px',
                                        textAlign: 'center',
                                        marginBottom: 0,
                                    }}
                                >
                                    Sessions Completed
                                </span>
                            </div>

                            <div
                                id="t18_784_3812"
                                style={{
                                    width: 263,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 94,
                                    marginRight: 0,
                                }}
                            >
                                <span
                                    id="t18_784_3813"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 30,
                                        fontWeight: 700,
                                        color: 'rgba(244,186,84,1)',
                                        letterSpacing: 0,
                                        lineHeight: '36.30681610107422px',
                                        textAlign: 'center',
                                        marginTop: 0,
                                    }}
                                >
                                    1000+
                                </span>

                                <span
                                    id="t18_784_3814"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 22,
                                        fontWeight: 700,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '26.625px',
                                        textAlign: 'center',
                                        marginBottom: 0,
                                    }}
                                >
                                    Customers Served
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_784_3815"
                            style={{
                                height: 335,
                                width: 1420,
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
                                id="t18_784_3816"
                                style={{
                                    height: 205,
                                    width: 1198,
                                    backgroundColor: 'rgba(248,246,246,1.00)',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                }}
                            >
                                <span
                                    id="t18_784_3817"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 25,
                                        fontWeight: 700,
                                        color: 'rgba(186,15,23,1)',
                                        letterSpacing: 0,
                                        lineHeight: '30.25568199157715px',
                                        textAlign: 'center',
                                        marginTop: 0,
                                        marginBottom: 5,
                                    }}
                                >
                                    What does Book a Slot do?
                                </span>

                                <div
                                    id="t18_784_4059"
                                    style={{
                                        width: 1060,
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
                                    <span
                                        id="t18_784_3818"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 15,
                                            fontWeight: 500,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '24px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book. It has survived not only five
                                        centuries, but also the leap into
                                        electronic typesetting, remaining
                                        essentially unchanged. It was
                                        popularised in the 1960s with the
                                        release of Letraset sheets containing
                                        Lorem Ipsum passages, and more recently
                                        with desktop
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div
                            id="t18_784_3819"
                            style={{
                                width: 1440,
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
                                id="t18_784_3820"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 29.5,
                                }}
                            >
                                <div
                                    id="t18_784_3821"
                                    style={{
                                        width: 900,
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
                                        id="t18_784_3822"
                                        style={{
                                            height: 62,
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
                                            marginLeft: 0,
                                            marginRight: 3.5,
                                        }}
                                    >
                                        <div
                                            id="t18_784_3823"
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
                                                id="t18_784_3824"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 25,
                                                    fontWeight: 700,
                                                    color: 'rgba(231,229,228,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '30.25568199157715px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                1
                                            </span>
                                        </div>

                                        <span
                                            id="t18_784_3825"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 25,
                                                fontWeight: 700,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '30.25568199157715px',
                                                textAlign: 'left',
                                                marginLeft: 5.5,
                                                marginRight: 0,
                                            }}
                                        >
                                            Details
                                        </span>
                                    </div>

                                    <div
                                        id="t18_784_3826"
                                        style={{
                                            height: 62,
                                            width: 213,
                                            backgroundColor:
                                                'rgba(154,11,18,1.00)',
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
                                            id="t18_784_3827"
                                            style={{
                                                height: 34,
                                                width: 36,
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
                                                id="t18_784_3828"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 25,
                                                    fontWeight: 700,
                                                    color: 'rgba(154,11,18,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '30.25568199157715px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                2
                                            </span>
                                        </div>

                                        <span
                                            id="t18_784_3829"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 25,
                                                fontWeight: 700,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '30.25568199157715px',
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
                                    id="t18_784_3830"
                                    style={{
                                        width: 880,
                                        borderBottomLeftRadius: 12,
                                        borderBottomRightRadius: 12,
                                        backgroundColor:
                                            'rgba(248,246,246,1.00)',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        paddingLeft: 20,
                                        paddingTop: 20,
                                        paddingBottom: 20,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 1,
                                        borderColor: 'rgba(207,206,206,1)',
                                        borderStyle: 'solid',
                                        marginBottom: 0,
                                    }}
                                >
                                    <div
                                        id="t18_784_3831"
                                        style={{
                                            width: 488,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 20,
                                        }}
                                    >
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ec87c77c7a8b9af63bb6246efccc9e2ece2caa39.png' !=
                                        '' ? (
                                            <img
                                                id="t18_784_3832"
                                                style={{
                                                    height: 20,
                                                    width: 12,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 4,
                                                }}
                                                src={
                                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ec87c77c7a8b9af63bb6246efccc9e2ece2caa39.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

                                        <span
                                            id="t18_784_3833"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 18,
                                                fontWeight: 600,
                                                color: 'rgba(186,15,23,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '21.784090042114258px',
                                                textAlign: 'left',
                                                marginLeft: 4,
                                                marginRight: 0,
                                            }}
                                        >
                                            Go back and edit
                                        </span>
                                    </div>

                                    <MmSelect
                                        {...dl.changes.studyAbroadPaymentForm
                                            .session}
                                        onChange={(val) => {
                                            dl.functions.selectSaBookingType(
                                                val
                                            )
                                        }}
                                    />

                                    <MmDatePicker
                                        {...dl.changes.studyAbroadPaymentForm
                                            .date}
                                        onChange={(val) => {
                                            let localDate = new Date(val)
                                            const utcDate = new Date(
                                                localDate.getTime() -
                                                    localDate.getTimezoneOffset() *
                                                        60000
                                            )
                                            utcDate.setUTCHours(0, 0, 0, 0)
                                            dl.changes.studyAbroadPaymentForm.date.value =
                                                utcDate
                                            dl.changes.studyAbroadPaymentForm.date.showErrorMessage =
                                                'none'
                                            dl.changes.studyAbroadPaymentForm.date.inputBorderColor =
                                                'rgba(207,206,206,1)'

                                            const run = async () => {
                                                let options = []
                                                if (
                                                    dl.changes
                                                        .studyAbroadPaymentForm
                                                        .date.value != '' &&
                                                    dl.changes
                                                        .studyAbroadPaymentForm
                                                        .session.value != ''
                                                ) {
                                                    var res =
                                                        await dl.functions.getTimeSlot()
                                                    if (res == 200) {
                                                        let slots =
                                                            dl.changes
                                                                .availableSlots
                                                        for (
                                                            var i = 0;
                                                            i < slots.length;
                                                            i++
                                                        ) {
                                                            let obj = {
                                                                slot: slots[i],
                                                                showActive:
                                                                    'none',
                                                                showInActive:
                                                                    'flex',
                                                                value: dl.functions.getTimeRange(
                                                                    slots[i]
                                                                ),
                                                            }
                                                            options.push(obj)
                                                        }
                                                        dl.changes.studyAbroadPaymentForm.timeSlot.options =
                                                            options
                                                    }
                                                }
                                            }

                                            run()
                                        }}
                                    />

                                    <div
                                        id="t18_1438_35"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 20,
                                            marginBottom: 20,
                                        }}
                                    >
                                        <div
                                            id="t18_1438_36"
                                            style={{
                                                width: 864,
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
                                                id="t18_1438_37"
                                                style={{
                                                    width: 575,
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-end',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 2,
                                                }}
                                            >
                                                <div
                                                    id="t18_1438_38"
                                                    style={{
                                                        width: 340,
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'flex-start',
                                                        display:
                                                            dl.changes
                                                                .studyAbroadPaymentForm
                                                                .timeSlot
                                                                .showErrorMessage,
                                                        paddingRight: 5,
                                                        paddingTop: 2,
                                                        paddingBottom: 2,
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1438_39"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 14,
                                                            fontWeight: 500,
                                                            color: 'rgba(186,15,23,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '16.94318199157715px',
                                                            textAlign: 'left',
                                                        }}
                                                    >
                                                        This field is required
                                                    </span>
                                                </div>
                                            </div>

                                            <div
                                                id="t18_1438_40"
                                                style={{
                                                    width: 864,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 2,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <div
                                                    id="t18_1438_41"
                                                    style={{
                                                        width: 214,
                                                        flexDirection: 'row',
                                                        alignItems:
                                                            'flex-start',
                                                        justifyContent:
                                                            'flex-end',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginLeft: 0,
                                                        marginRight: 8,
                                                    }}
                                                >
                                                    <div
                                                        id="t18_1438_42"
                                                        style={{
                                                            width: 208,
                                                            flexDirection:
                                                                'row',
                                                            alignItems:
                                                                'flex-start',
                                                            justifyContent:
                                                                'flex-end',
                                                            display: 'flex',
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginLeft: 0,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1438_43"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 15,
                                                                fontWeight: 700,
                                                                color: 'rgba(113,113,113,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '18.15340805053711px',
                                                                textAlign:
                                                                    'right',
                                                            }}
                                                        >
                                                            Time slot
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1438_44"
                                                        style={{
                                                            width: 6,
                                                            flexDirection:
                                                                'column',
                                                            alignItems:
                                                                'flex-start',
                                                            justifyContent:
                                                                'flex-start',
                                                            display: 'flex',
                                                            paddingBottom: 4,
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginRight: 0,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1438_45"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 11,
                                                                fontWeight: 600,
                                                                color: 'rgba(255,130,75,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '13.3125px',
                                                                textAlign:
                                                                    'left',
                                                            }}
                                                        >
                                                            *
                                                        </span>
                                                    </div>
                                                </div>

                                                <div
                                                    id="t18_1438_51"
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
                                                        marginLeft: 8,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    <div
                                                        id="t18_1438_49"
                                                        style={{
                                                            width: 629,
                                                            flexDirection:
                                                                'row',
                                                            alignItems:
                                                                'center',
                                                            justifyContent:
                                                                'flex-start',
                                                            display:
                                                                dl.changes
                                                                    .noSlotAvailableVisible,
                                                            paddingRight: 5,
                                                            paddingTop: 2,
                                                            paddingBottom: 2,
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginTop: 0,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1438_50"
                                                            style={{
                                                                fontFamily:
                                                                    'Inter',
                                                                fontSize: 14,
                                                                fontWeight: 500,
                                                                color: 'rgba(186,15,23,1)',
                                                                letterSpacing: 0,
                                                                lineHeight:
                                                                    '16.94318199157715px',
                                                                textAlign:
                                                                    'left',
                                                            }}
                                                        >
                                                            No slots available
                                                            for the selected
                                                            date
                                                        </span>
                                                    </div>

                                                    <div
                                                        id="t18_1438_46"
                                                        style={{
                                                            width: 634,
                                                            borderRadius: 4,
                                                            flexDirection:
                                                                'row',
                                                            alignItems:
                                                                'flex-start',
                                                            justifyContent:
                                                                'flex-start',
                                                            display: 'flex',
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                            marginBottom: 0,
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: 'flex',
                                                                flexWrap:
                                                                    'wrap',
                                                                justifyContent:
                                                                    'center',
                                                            }}
                                                        >
                                                            {dl.changes.studyAbroadPaymentForm.timeSlot.options.map(
                                                                (
                                                                    item,
                                                                    index
                                                                ) => {
                                                                    return (
                                                                        <div>
                                                                            <MmTimeSlots
                                                                                {...item}
                                                                                {...dl
                                                                                    .changes
                                                                                    .studyAbroadPaymentForm
                                                                                    .timeSlot
                                                                                    .options}
                                                                                onActiveClick={(
                                                                                    val
                                                                                ) => {}}
                                                                                onInActiveClick={(
                                                                                    val
                                                                                ) => {
                                                                                    // alert("Here")
                                                                                    let idx =
                                                                                        index
                                                                                    // alert(index)
                                                                                    let options =
                                                                                        dl
                                                                                            .changes
                                                                                            .studyAbroadPaymentForm
                                                                                            .timeSlot
                                                                                            .options
                                                                                    dl.changes.studyAbroadPaymentForm.timeSlot.value =
                                                                                        options[
                                                                                            idx
                                                                                        ].slot

                                                                                    for (
                                                                                        var i = 0;
                                                                                        i <
                                                                                        options.length;
                                                                                        i++
                                                                                    ) {
                                                                                        dl.changes.studyAbroadPaymentForm.timeSlot.options[
                                                                                            i
                                                                                        ][
                                                                                            'showActive'
                                                                                        ] =
                                                                                            'none'
                                                                                        dl.changes.studyAbroadPaymentForm.timeSlot.options[
                                                                                            i
                                                                                        ][
                                                                                            'showInActive'
                                                                                        ] =
                                                                                            'flex'
                                                                                    }
                                                                                    dl.changes.studyAbroadPaymentForm.timeSlot.options[
                                                                                        idx
                                                                                    ][
                                                                                        'showInActive'
                                                                                    ] =
                                                                                        'none'
                                                                                    dl.changes.studyAbroadPaymentForm.timeSlot.options[
                                                                                        idx
                                                                                    ][
                                                                                        'showActive'
                                                                                    ] =
                                                                                        'flex'
                                                                                    // alert(idx)
                                                                                    // alert(options[idx].slot)
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
                                        </div>
                                    </div>

                                    <MmTextArea
                                        {...dl.changes.studyAbroadPaymentForm
                                            .note}
                                        onChange={(val) => {
                                            dl.changes.studyAbroadPaymentForm.note.value =
                                                val
                                            dl.changes.studyAbroadPaymentForm.note.showErrorMessage =
                                                'none'
                                            dl.changes.studyAbroadPaymentForm.note.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <div
                                        id="t18_784_3857"
                                        style={{
                                            width: 829,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 20,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_784_3858"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 260,
                                            }}
                                        >
                                            <span
                                                id="t18_784_3859"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 30,
                                                    fontWeight: 700,
                                                    color: 'rgba(186,15,23,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '36.30681610107422px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                {dl.changes.saBookingPricing}
                                            </span>
                                        </div>

                                        <div
                                            id="t18_784_3860"
                                            className={' contact-btn'}
                                            style={{
                                                height: 45,
                                                width: 231,
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
                                                marginLeft: 260,
                                                marginRight: 0,
                                                cursor: 'pointer',
                                            }}
                                            onClick={(e) => {
                                                const run = async () => {
                                                    // comments
                                                    if (
                                                        dl.changes
                                                            .studyAbroadPaymentForm
                                                            .session.value == ''
                                                    ) {
                                                        dl.changes.studyAbroadPaymentForm.session.showErrorMessage =
                                                            'flex'
                                                        return
                                                    }
                                                    // if(dl.changes.studyAbroadPaymentForm.slot.value==""){
                                                    //     dl.changes.studyAbroadPaymentForm.slot.showErrorMessage = "flex"
                                                    //     return;
                                                    // }
                                                    if (
                                                        dl.changes
                                                            .studyAbroadPaymentForm
                                                            .date.value == ''
                                                    ) {
                                                        dl.changes.studyAbroadPaymentForm.date.showErrorMessage =
                                                            'flex'
                                                        return
                                                    }
                                                    if (
                                                        dl.changes
                                                            .studyAbroadPaymentForm
                                                            .note.value == ''
                                                    ) {
                                                        dl.changes.studyAbroadPaymentForm.note.showErrorMessage =
                                                            'flex'
                                                        return
                                                    }

                                                    dl.changes.payemtforService =
                                                        'studyabroadbookings'
                                                    dl.functions.modalsPlugin.openModal(
                                                        'paymentSelector'
                                                    )
                                                    // var paymentStatus = false
                                                    // if(res.message){
                                                    //     //  dl.functions.viewsPlugin.showView("error")
                                                    // }
                                                    // else{

                                                    // }
                                                }

                                                run()
                                            }}
                                        >
                                            <span
                                                id="t18_784_3861"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 25,
                                                    fontWeight: 500,
                                                    color: 'rgba(255,255,255,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '37.5px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Proceed to pay
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {dl.changes.addSpaces.StudyAbroadPaymentAd.lg
                                ?.slice(4, -1)
                                .trim() != '' ? (
                                <img
                                    id="t18_784_3862"
                                    style={{
                                        height: 488,
                                        width: 900,
                                        display: 'flex',
                                        borderWidth: 0,
                                        marginTop: 29.5,
                                        marginBottom: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        if (
                                            dl.changes.addSpaces[
                                                'StudyAbroadPaymentAd'
                                            ].redirectURL
                                        ) {
                                            window.open(
                                                dl.changes.addSpaces[
                                                    'StudyAbroadPaymentAd'
                                                ].redirectURL,
                                                '_blank'
                                            )
                                        }
                                    }}
                                    src={dl.changes.addSpaces.StudyAbroadPaymentAd.lg
                                        ?.slice(4, -1)
                                        .trim()}
                                ></img>
                            ) : (
                                <></>
                            )}
                        </div>

                        <MmFooter />
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Studyabroadslotpayment_1
