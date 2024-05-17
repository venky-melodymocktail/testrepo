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
import MmTextArea from '../../components/MmTextArea.jsx'
import MmTimeSlots from '../../components/MmTimeSlots.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmSelectS from '../../components/MmSelectS.jsx'
import MmDatePickerS from '../../components/MmDatePickerS.jsx'
import MmTextAreaS from '../../components/MmTextAreaS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'

const Visaslotbooking_1 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_809_5026')
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
                id="t18_809_5026"
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
                    id="t18_784_4060"
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
                        id="t18_784_4061"
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
                            id="t18_784_4064"
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
                                id="t18_784_4065"
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
                                Visa & Immigration
                            </span>

                            <span
                                id="t18_784_4068"
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
                            id="t18_784_4069"
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
                                id="t18_784_4070"
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
                                    id="t18_784_4071"
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
                                    id="t18_784_4072"
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
                                id="t18_784_4073"
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
                                    id="t18_784_4074"
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
                                    id="t18_784_4075"
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
                                id="t18_784_4076"
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
                                    id="t18_784_4077"
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
                                    id="t18_784_4078"
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
                            id="t18_784_4079"
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
                                id="t18_784_4080"
                                style={{
                                    height: 205,
                                    width: 1198,
                                    backgroundColor: 'rgba(248,246,246,1.00)',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                }}
                            >
                                <span
                                    id="t18_784_4081"
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
                                    id="t18_815_5081"
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
                                        id="t18_784_4082"
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
                            id="t18_784_4083"
                            style={{
                                width: 1440,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingBottom: 40,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_784_4084"
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
                                    id="t18_784_4085"
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
                                        paddingTop: 40,
                                        paddingBottom: 40,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 1,
                                        borderColor: 'rgba(207,206,206,1)',
                                        borderStyle: 'solid',
                                    }}
                                >
                                    <div
                                        id="t18_784_4086"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 20,
                                        }}
                                    >
                                        <MmSelect
                                            {...dl.changes
                                                .visaQuestionSlotBookingForm
                                                .session}
                                            onChange={(val) => {
                                                dl.functions.selectVisaBookingSessionType(
                                                    val
                                                )
                                            }}
                                        />

                                        <MmDatePicker
                                            {...dl.changes
                                                .visaQuestionSlotBookingForm
                                                .date}
                                            onChange={(val) => {
                                                let localDate = new Date(val)
                                                const utcDate = new Date(
                                                    localDate.getTime() -
                                                        localDate.getTimezoneOffset() *
                                                            60000
                                                )
                                                utcDate.setUTCHours(0, 0, 0, 0)
                                                dl.changes.visaQuestionSlotBookingForm.date.value =
                                                    utcDate

                                                dl.changes.visaQuestionSlotBookingForm.date.showErrorMessage =
                                                    'none'
                                                dl.changes.visaQuestionSlotBookingForm.date.inputBorderColor =
                                                    'rgba(207,206,206,1)'

                                                const run = async () => {
                                                    let options = []
                                                    if (
                                                        dl.changes
                                                            .visaQuestionSlotBookingForm
                                                            .date.value != '' &&
                                                        dl.changes
                                                            .visaQuestionSlotBookingForm
                                                            .session.value != ''
                                                    ) {
                                                        var res =
                                                            await dl.functions.getvisaQuestionTimeSlot()
                                                        if (res == 200) {
                                                            let slots =
                                                                dl.changes
                                                                    .availableSlots
                                                            for (
                                                                var i = 0;
                                                                i <
                                                                slots.length;
                                                                i++
                                                            ) {
                                                                let obj = {
                                                                    slot: slots[
                                                                        i
                                                                    ],
                                                                    showActive:
                                                                        'none',
                                                                    showInActive:
                                                                        'flex',
                                                                    value: dl.functions.getTimeRange(
                                                                        slots[i]
                                                                    ),
                                                                }
                                                                options.push(
                                                                    obj
                                                                )
                                                            }
                                                            dl.changes.visaQuestionSlotBookingForm.timeSlot.options =
                                                                options //dl.changes.availableSlots
                                                        }
                                                    }
                                                }

                                                run()
                                            }}
                                        />

                                        <div
                                            id="t18_1457_100"
                                            style={{
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
                                                id="t18_1457_101"
                                                style={{
                                                    width: 864,
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
                                                <div
                                                    id="t18_1457_102"
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
                                                        id="t18_1457_103"
                                                        style={{
                                                            width: 340,
                                                            flexDirection:
                                                                'row',
                                                            alignItems:
                                                                'center',
                                                            justifyContent:
                                                                'flex-start',
                                                            display:
                                                                dl.changes
                                                                    .visaQuestionSlotBookingForm
                                                                    .showSlotsRequired,
                                                            paddingRight: 5,
                                                            paddingTop: 2,
                                                            paddingBottom: 2,
                                                            position:
                                                                'relative',
                                                            overflow: 'visible',
                                                            borderWidth: 0,
                                                        }}
                                                    >
                                                        <span
                                                            id="t18_1457_104"
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
                                                            This field is
                                                            required
                                                        </span>
                                                    </div>
                                                </div>

                                                <div
                                                    id="t18_1457_105"
                                                    style={{
                                                        width: 864,
                                                        flexDirection: 'row',
                                                        alignItems:
                                                            'flex-start',
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
                                                        id="t18_1457_106"
                                                        style={{
                                                            width: 214,
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
                                                            marginRight: 8,
                                                        }}
                                                    >
                                                        <div
                                                            id="t18_1457_107"
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
                                                                overflow:
                                                                    'visible',
                                                                borderWidth: 0,
                                                                marginLeft: 0,
                                                            }}
                                                        >
                                                            <span
                                                                id="t18_1457_108"
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
                                                            id="t18_1457_109"
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
                                                                overflow:
                                                                    'visible',
                                                                borderWidth: 0,
                                                                marginRight: 0,
                                                            }}
                                                        >
                                                            <span
                                                                id="t18_1457_110"
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
                                                        id="t18_1457_111"
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
                                                            marginLeft: 8,
                                                            marginRight: 0,
                                                        }}
                                                    >
                                                        <div
                                                            id="t18_1457_112"
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
                                                                overflow:
                                                                    'visible',
                                                                borderWidth: 0,
                                                                marginTop: 0,
                                                            }}
                                                        >
                                                            <span
                                                                id="t18_1457_113"
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
                                                                No slots
                                                                available for
                                                                the selected
                                                                date
                                                            </span>
                                                        </div>

                                                        <div
                                                            id="t18_1457_114"
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
                                                                overflow:
                                                                    'visible',
                                                                borderWidth: 0,
                                                                marginBottom: 0,
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    display:
                                                                        'flex',
                                                                    flexWrap:
                                                                        'wrap',
                                                                    justifyContent:
                                                                        'center',
                                                                }}
                                                            >
                                                                {dl.changes.visaQuestionSlotBookingForm.timeSlot.options.map(
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
                                                                                        .visaQuestionSlotBookingForm
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
                                                                                                .visaQuestionSlotBookingForm
                                                                                                .timeSlot
                                                                                                .options
                                                                                        dl.changes.visaQuestionSlotBookingForm.timeSlot.value =
                                                                                            options[
                                                                                                idx
                                                                                            ].slot

                                                                                        for (
                                                                                            var i = 0;
                                                                                            i <
                                                                                            options.length;
                                                                                            i++
                                                                                        ) {
                                                                                            dl.changes.visaQuestionSlotBookingForm.timeSlot.options[
                                                                                                i
                                                                                            ][
                                                                                                'showActive'
                                                                                            ] =
                                                                                                'none'
                                                                                            dl.changes.visaQuestionSlotBookingForm.timeSlot.options[
                                                                                                i
                                                                                            ][
                                                                                                'showInActive'
                                                                                            ] =
                                                                                                'flex'
                                                                                        }
                                                                                        dl.changes.visaQuestionSlotBookingForm.timeSlot.options[
                                                                                            idx
                                                                                        ][
                                                                                            'showInActive'
                                                                                        ] =
                                                                                            'none'
                                                                                        dl.changes.visaQuestionSlotBookingForm.timeSlot.options[
                                                                                            idx
                                                                                        ][
                                                                                            'showActive'
                                                                                        ] =
                                                                                            'flex'
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

                                        <MmSelect
                                            {...dl.changes
                                                .visaQuestionSlotBookingForm
                                                .visaType}
                                            onChange={(val) => {
                                                dl.changes.visaQuestionSlotBookingForm.visaType.value =
                                                    val
                                                dl.changes.visaQuestionSlotBookingForm.visaType.showErrorMessage =
                                                    'none'
                                                dl.changes.visaQuestionSlotBookingForm.visaType.inputBorderColor =
                                                    'rgba(207,206,206,1)'
                                            }}
                                        />

                                        <MmTextArea
                                            {...dl.changes
                                                .visaQuestionSlotBookingForm
                                                .note}
                                            onChange={(val) => {
                                                dl.changes.visaQuestionSlotBookingForm.note.value =
                                                    val
                                                dl.changes.visaQuestionSlotBookingForm.note.showErrorMessage =
                                                    'none'
                                                dl.changes.visaQuestionSlotBookingForm.note.inputBorderColor =
                                                    'rgba(207,206,206,1)'
                                            }}
                                        />
                                    </div>

                                    <div
                                        id="t18_784_4118"
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
                                            id="t18_784_4119"
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
                                                id="t18_784_4120"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 40,
                                                    fontWeight: 700,
                                                    color: 'rgba(186,15,23,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '48.409088134765625px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                {dl.changes.visaBookingPricing}
                                            </span>
                                        </div>

                                        <div
                                            id="t18_784_4121"
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
                                                dl.functions.visaSlotProceedToPay()
                                            }}
                                        >
                                            <span
                                                id="t18_784_4122"
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

                            {dl.changes.addSpaces.VisaSlotBookingAd.lg
                                ?.slice(4, -1)
                                .trim() != '' ? (
                                <img
                                    id="t18_784_4123"
                                    style={{
                                        height: 488.41015625,
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
                                                'VisaSlotBookingAd'
                                            ].redirectURL
                                        ) {
                                            window.open(
                                                dl.changes.addSpaces[
                                                    'VisaSlotBookingAd'
                                                ].redirectURL,
                                                '_blank'
                                            )
                                        }
                                    }}
                                    src={dl.changes.addSpaces.VisaSlotBookingAd.lg
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
export default Visaslotbooking_1
