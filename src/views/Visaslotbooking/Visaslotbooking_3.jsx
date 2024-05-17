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

const Visaslotbooking_3 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 620
            const element = document.getElementById('t18_809_5028')
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
                id="t18_809_5028"
                style={{
                    width: 620,
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
                    id="t18_784_4184"
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
                        id="t18_784_4185"
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

                        <div
                            id="t18_784_4188"
                            style={{
                                height: 35,
                                width: 570,
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
                                id="t18_784_4189"
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
                                    id="t18_784_4190"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        fontWeight: 500,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '14.522727012634277px',
                                        textAlign: 'left',
                                    }}
                                >
                                    {'Visa Q & A >> Book a slot'}
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_784_4191"
                            style={{
                                height: 79,
                                width: 620,
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
                                id="t18_784_4192"
                                style={{
                                    width: 150,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 25,
                                }}
                            >
                                <span
                                    id="t18_784_4193"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 18,
                                        fontWeight: 700,
                                        color: 'rgba(244,186,84,1)',
                                        letterSpacing: 0,
                                        lineHeight: '21.784090042114258px',
                                        textAlign: 'center',
                                        marginTop: 0,
                                    }}
                                >
                                    100+
                                </span>

                                <span
                                    id="t18_784_4194"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 14,
                                        fontWeight: 700,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '16.94318199157715px',
                                        textAlign: 'center',
                                        marginBottom: 0,
                                    }}
                                >
                                    Verified experts
                                </span>
                            </div>

                            <div
                                id="t18_784_4195"
                                style={{
                                    width: 150,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 25,
                                    marginRight: 25,
                                }}
                            >
                                <span
                                    id="t18_784_4196"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 18,
                                        fontWeight: 700,
                                        color: 'rgba(244,186,84,1)',
                                        letterSpacing: 0,
                                        lineHeight: '21.784090042114258px',
                                        textAlign: 'center',
                                        marginTop: 0,
                                    }}
                                >
                                    50+
                                </span>

                                <span
                                    id="t18_784_4197"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 14,
                                        fontWeight: 700,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '16.94318199157715px',
                                        textAlign: 'center',
                                        marginBottom: 0,
                                    }}
                                >
                                    Sessions Completed
                                </span>
                            </div>

                            <div
                                id="t18_784_4198"
                                style={{
                                    width: 150,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 25,
                                    marginRight: 0,
                                }}
                            >
                                <span
                                    id="t18_784_4199"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 18,
                                        fontWeight: 700,
                                        color: 'rgba(244,186,84,1)',
                                        letterSpacing: 0,
                                        lineHeight: '21.784090042114258px',
                                        textAlign: 'center',
                                        marginTop: 0,
                                    }}
                                >
                                    1000+
                                </span>

                                <span
                                    id="t18_784_4200"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 14,
                                        fontWeight: 700,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '16.94318199157715px',
                                        textAlign: 'center',
                                        marginBottom: 0,
                                    }}
                                >
                                    Customers Served
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_784_4201"
                            style={{
                                width: 600,
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
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_784_4202"
                                style={{
                                    width: 580,
                                    backgroundColor: 'rgba(248,246,246,1.00)',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingTop: 5,
                                    paddingBottom: 10,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                }}
                            >
                                <span
                                    id="t18_784_4203"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 18,
                                        fontWeight: 700,
                                        color: 'rgba(186,15,23,1)',
                                        letterSpacing: 0,
                                        lineHeight: '21.784090042114258px',
                                        textAlign: 'center',
                                        marginTop: 0,
                                        marginBottom: 2.5,
                                    }}
                                >
                                    What does Book a Slot do?
                                </span>

                                <div
                                    id="t18_814_5079"
                                    style={{
                                        width: 531,
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
                                        id="t18_784_4204"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 12,
                                            fontWeight: 400,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '18px',
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
                            id="t18_784_4205"
                            style={{
                                width: 580,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingLeft: 20,
                                paddingRight: 20,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_784_4206"
                                style={{
                                    width: 457,
                                    borderRadius: 12,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 5,
                                }}
                            >
                                <div
                                    id="t18_784_4207"
                                    style={{
                                        width: 437,
                                        borderRadius: 12,
                                        backgroundColor:
                                            'rgba(248,246,246,1.00)',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        paddingLeft: 10,
                                        paddingRight: 10,
                                        paddingTop: 20,
                                        paddingBottom: 20,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 1,
                                        borderColor: 'rgba(207,206,206,1)',
                                        borderStyle: 'solid',
                                    }}
                                >
                                    <MmSelectS
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

                                    <MmSelectS
                                        {...dl.changes
                                            .visaQuestionSlotBookingForm
                                            .session}
                                        onChange={(val) => {
                                            dl.functions.selectVisaBookingSessionType(
                                                val
                                            )
                                        }}
                                    />

                                    <MmDatePickerS
                                        {...dl.changes
                                            .visaQuestionSlotBookingForm.date}
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
                                                        dl.changes.visaQuestionSlotBookingForm.timeSlot.options =
                                                            options //dl.changes.availableSlots
                                                    }
                                                }
                                            }

                                            run()
                                        }}
                                    />

                                    <div
                                        id="t18_1583_177"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 10,
                                            marginBottom: 10,
                                        }}
                                    >
                                        <span
                                            id="t18_1583_178"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 13,
                                                fontWeight: 700,
                                                color: 'rgba(113,113,113,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '15.732954025268555px',
                                                textAlign: 'left',
                                                marginTop: 0,
                                                marginBottom: 2.5,
                                            }}
                                        >
                                            Time Slot:
                                        </span>

                                        <div
                                            id="t18_1583_179"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 2.5,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_1585_255"
                                                style={{
                                                    width: 314,
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'none',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 2.5,
                                                }}
                                            >
                                                <span
                                                    id="t18_1583_180"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 11,
                                                        fontWeight: 500,
                                                        color: 'rgba(186,15,23,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '13.3125px',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    This field is required
                                                </span>
                                            </div>

                                            <div
                                                id="t18_1583_181"
                                                style={{
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 2.5,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <div
                                                    id="t18_1583_182"
                                                    style={{
                                                        width: 309,
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'flex-start',
                                                        display:
                                                            dl.changes
                                                                .noSlotAvailableVisible,
                                                        paddingRight: 5,
                                                        paddingTop: 2,
                                                        paddingBottom: 2,
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginTop: 0,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1583_183"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 12,
                                                            fontWeight: 500,
                                                            color: 'rgba(186,15,23,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '14.522727012634277px',
                                                            textAlign: 'left',
                                                        }}
                                                    >
                                                        No slots available for
                                                        the selected date
                                                    </span>
                                                </div>

                                                <div
                                                    id="t18_1583_184"
                                                    style={{
                                                        width: 314,
                                                        flexDirection: 'column',
                                                        alignItems:
                                                            'flex-start',
                                                        justifyContent:
                                                            'center',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginBottom: 0,
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                            flexWrap: 'wrap',
                                                            justifyContent:
                                                                'center',
                                                        }}
                                                    >
                                                        {dl.changes.visaQuestionSlotBookingForm.timeSlot.options.map(
                                                            (item, index) => {
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

                                    <MmTextAreaS
                                        {...dl.changes
                                            .visaQuestionSlotBookingForm.note}
                                        onChange={(val) => {
                                            dl.changes.visaQuestionSlotBookingForm.note.value =
                                                val
                                            dl.changes.visaQuestionSlotBookingForm.note.showErrorMessage =
                                                'none'
                                            dl.changes.visaQuestionSlotBookingForm.note.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <div
                                        id="t18_784_4234"
                                        style={{
                                            width: 314,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 10,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_784_4235"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 77.5,
                                            }}
                                        >
                                            <span
                                                id="t18_784_4236"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 24,
                                                    fontWeight: 700,
                                                    color: 'rgba(186,15,23,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '29.045454025268555px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                {dl.changes.visaBookingPricing}
                                            </span>
                                        </div>

                                        <div
                                            id="t18_784_4237"
                                            style={{
                                                height: 38,
                                                width: 135,
                                                borderRadius: 5,
                                                backgroundColor:
                                                    'rgba(186,15,23,1.00)',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 77.5,
                                                marginRight: 0,
                                                cursor: 'pointer',
                                            }}
                                            onClick={(e) => {
                                                dl.functions.visaSlotProceedToPay()
                                            }}
                                        >
                                            <span
                                                id="t18_784_4238"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 14,
                                                    fontWeight: 500,
                                                    color: 'rgba(255,255,255,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '21px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Proceed to pay
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                id="t18_784_4299"
                                style={{
                                    width: 620,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingTop: 30,
                                    paddingBottom: 30,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 5,
                                    marginBottom: 0,
                                }}
                            >
                                {dl.changes.addSpaces.VisaSlotBookingAd.md
                                    ?.slice(4, -1)
                                    .trim() != '' ? (
                                    <img
                                        id="t18_784_4300"
                                        style={{
                                            height: 285,
                                            width: 550,
                                            display: 'flex',
                                            borderWidth: 0,
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
                                        src={dl.changes.addSpaces.VisaSlotBookingAd.md
                                            ?.slice(4, -1)
                                            .trim()}
                                    ></img>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>

                        <MmFooterS />
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Visaslotbooking_3
