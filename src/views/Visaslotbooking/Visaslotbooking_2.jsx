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

const Visaslotbooking_2 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 900
            const element = document.getElementById('t18_809_5027')
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
                id="t18_809_5027"
                style={{
                    width: 900,
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
                    id="t18_784_4126"
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
                        id="t18_784_4127"
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

                        <div
                            id="t18_784_4130"
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
                                id="t18_784_4131"
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
                                    id="t18_784_4132"
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
                                    {'Visa Q & A >> Book a slot'}
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_784_4133"
                            style={{
                                height: 115,
                                width: 900,
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
                                id="t18_784_4134"
                                style={{
                                    width: 200,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 50,
                                }}
                            >
                                <span
                                    id="t18_784_4135"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 24,
                                        fontWeight: 700,
                                        color: 'rgba(244,186,84,1)',
                                        letterSpacing: 0,
                                        lineHeight: '29.045454025268555px',
                                        textAlign: 'center',
                                        marginTop: 0,
                                    }}
                                >
                                    100+
                                </span>

                                <span
                                    id="t18_784_4136"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 18,
                                        fontWeight: 700,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '21.784090042114258px',
                                        textAlign: 'center',
                                        marginBottom: 0,
                                    }}
                                >
                                    Verified experts
                                </span>
                            </div>

                            <div
                                id="t18_784_4137"
                                style={{
                                    width: 200,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 50,
                                    marginRight: 50,
                                }}
                            >
                                <span
                                    id="t18_784_4138"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 24,
                                        fontWeight: 700,
                                        color: 'rgba(244,186,84,1)',
                                        letterSpacing: 0,
                                        lineHeight: '29.045454025268555px',
                                        textAlign: 'center',
                                        marginTop: 0,
                                    }}
                                >
                                    50+
                                </span>

                                <span
                                    id="t18_784_4139"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 18,
                                        fontWeight: 700,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '21.784090042114258px',
                                        textAlign: 'center',
                                        marginBottom: 0,
                                    }}
                                >
                                    Sessions Completed
                                </span>
                            </div>

                            <div
                                id="t18_784_4140"
                                style={{
                                    width: 200,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 50,
                                    marginRight: 0,
                                }}
                            >
                                <span
                                    id="t18_784_4141"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 24,
                                        fontWeight: 700,
                                        color: 'rgba(244,186,84,1)',
                                        letterSpacing: 0,
                                        lineHeight: '29.045454025268555px',
                                        textAlign: 'center',
                                        marginTop: 0,
                                    }}
                                >
                                    1000+
                                </span>

                                <span
                                    id="t18_784_4142"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 18,
                                        fontWeight: 700,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '21.784090042114258px',
                                        textAlign: 'center',
                                        marginBottom: 0,
                                    }}
                                >
                                    Customers Served
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_784_4143"
                            style={{
                                height: 291,
                                width: 880,
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
                                id="t18_784_4144"
                                style={{
                                    width: 840,
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
                                    id="t18_784_4145"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 22,
                                        fontWeight: 700,
                                        color: 'rgba(186,15,23,1)',
                                        letterSpacing: 0,
                                        lineHeight: '26.625px',
                                        textAlign: 'center',
                                        marginTop: 0,
                                        marginBottom: 5,
                                    }}
                                >
                                    What does Book a Slot do?
                                </span>

                                <div
                                    id="t18_814_5078"
                                    style={{
                                        width: 812,
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
                                        id="t18_784_4146"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 14,
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
                            id="t18_784_4147"
                            style={{
                                width: 852,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingLeft: 24,
                                paddingRight: 24,
                                paddingBottom: 50,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_784_4148"
                                style={{
                                    width: 860,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 15,
                                }}
                            >
                                <div
                                    id="t18_784_4149"
                                    style={{
                                        width: 860,
                                        borderBottomLeftRadius: 12,
                                        borderBottomRightRadius: 12,
                                        backgroundColor:
                                            'rgba(248,246,246,1.00)',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        paddingTop: 30,
                                        paddingBottom: 30,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 1,
                                        borderColor: 'rgba(207,206,206,1)',
                                        borderStyle: 'solid',
                                    }}
                                >
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
                                            // alert("working2")
                                            const run = async () => {
                                                // alert("working3")
                                                let options = []
                                                if (
                                                    dl.changes
                                                        .visaQuestionSlotBookingForm
                                                        .date.value != '' &&
                                                    dl.changes
                                                        .visaQuestionSlotBookingForm
                                                        .session.value != ''
                                                ) {
                                                    // alert("working4")
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
                                                // alert("working5")
                                            }

                                            run()
                                        }}
                                    />

                                    <div
                                        id="t18_1583_188"
                                        style={{
                                            width: 813,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 12.5,
                                            marginBottom: 12.5,
                                        }}
                                    >
                                        <div
                                            id="t18_1583_189"
                                            style={{
                                                width: 575,
                                                flexDirection: 'column',
                                                alignItems: 'flex-end',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 2,
                                            }}
                                        >
                                            <div
                                                id="t18_1583_190"
                                                style={{
                                                    width: 340,
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'none',
                                                    paddingRight: 5,
                                                    paddingTop: 2,
                                                    paddingBottom: 2,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_1583_191"
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
                                            id="t18_1583_192"
                                            style={{
                                                width: 729,
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 2,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <div
                                                id="t18_1583_193"
                                                style={{
                                                    width: 214,
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent: 'flex-end',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 8,
                                                }}
                                            >
                                                <div
                                                    id="t18_1583_194"
                                                    style={{
                                                        width: 208,
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
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1583_195"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 15,
                                                            fontWeight: 700,
                                                            color: 'rgba(113,113,113,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '18.15340805053711px',
                                                            textAlign: 'right',
                                                        }}
                                                    >
                                                        Time slot
                                                    </span>
                                                </div>

                                                <div
                                                    id="t18_1583_196"
                                                    style={{
                                                        width: 6,
                                                        flexDirection: 'column',
                                                        alignItems:
                                                            'flex-start',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        paddingBottom: 4,
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginRight: 0,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_1583_197"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 11,
                                                            fontWeight: 600,
                                                            color: 'rgba(255,130,75,1)',
                                                            letterSpacing: 0,
                                                            lineHeight:
                                                                '13.3125px',
                                                            textAlign: 'left',
                                                        }}
                                                    >
                                                        *
                                                    </span>
                                                </div>
                                            </div>

                                            <div
                                                id="t18_1583_198"
                                                style={{
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
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
                                                    id="t18_1583_199"
                                                    style={{
                                                        width: 494,
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
                                                        id="t18_1583_200"
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
                                                        No slots available for
                                                        the selected date
                                                    </span>
                                                </div>

                                                <div
                                                    id="t18_1583_201"
                                                    style={{
                                                        width: 583,
                                                        borderRadius: 4,
                                                        flexDirection: 'row',
                                                        alignItems:
                                                            'flex-start',
                                                        justifyContent:
                                                            'flex-start',
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

                                    <MmTextArea
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
                                        id="t18_784_4176"
                                        style={{
                                            width: 775,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            display: 'flex',
                                            paddingLeft: 30,
                                            paddingRight: 30,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 12.5,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_784_4177"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 125,
                                            }}
                                        >
                                            <span
                                                id="t18_784_4178"
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
                                            id="t18_784_4179"
                                            style={{
                                                height: 48,
                                                width: 187,
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
                                                marginLeft: 125,
                                                marginRight: 0,
                                                cursor: 'pointer',
                                            }}
                                            onClick={(e) => {
                                                // const run = async() => {
                                                //     if(dl.changes.visaQuestionSlotBookingForm.visaType.value==""){
                                                //     	dl.changes.visaQuestionSlotBookingForm.visaType.showErrorMessage = "flex"
                                                //     	dl.changes.visaQuestionSlotBookingForm.visaType.inputBorderColor = "rgba(207,206,206,1)"
                                                //     	return;
                                                //     }

                                                //     var type = dl.changes.visaQuestionSlotBookingForm.session.value
                                                //     var slot = Number(dl.changes.visaQuestionSlotBookingForm.timeSlot.value)
                                                //     var date = dl.changes.visaQuestionSlotBookingForm.date.value
                                                //     var category = dl.changes.visaQuestionSlotBookingForm.visaType.value

                                                //     var body = {
                                                //         "category":"Visa & Immigration",
                                                //         "type":type,
                                                //         "slot":slot,
                                                //         "date":date,
                                                //         "otherDetails":{
                                                //             "visatype" : category
                                                //         }
                                                //     }

                                                //     var res = await dl.functions.createBookings(body)
                                                //     dl.changes.createBookingsResponse = res
                                                //     if(res.message){
                                                //     //    dl.functions.viewsPlugin.showView("error")
                                                //     }
                                                //     else{
                                                //         dl.changes.payemtforService = "faq"
                                                //         dl.functions.modalsPlugin.openModal("paymentSelector")
                                                //     }

                                                // }

                                                // run()
                                                dl.functions.visaSlotProceedToPay()
                                            }}
                                        >
                                            <span
                                                id="t18_784_4180"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 18,
                                                    fontWeight: 500,
                                                    color: 'rgba(255,255,255,1)',
                                                    letterSpacing: 0,
                                                    lineHeight: '27px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Proceed to pay
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {dl.changes.addSpaces.VisaSlotBookingAd.md
                                ?.slice(4, -1)
                                .trim() != '' ? (
                                <img
                                    id="t18_1364_214"
                                    style={{
                                        height: 328,
                                        width: 750,
                                        display: 'flex',
                                        borderWidth: 0,
                                        marginTop: 15,
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
                                    src={dl.changes.addSpaces.VisaSlotBookingAd.md
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
        </div>
    )
})
export default Visaslotbooking_2
