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

const Studyabroadslotpayment_3 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 620
            const element = document.getElementById('t18_817_5096')
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
                id="t18_817_5096"
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
                    id="t18_784_3928"
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
                        id="t18_784_3929"
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
                            id="t18_784_3932"
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
                                id="t18_784_3933"
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
                                    id="t18_784_3934"
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
                                    {'Study abroad >> Book a slot'}
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_784_3935"
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
                                id="t18_784_3936"
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
                                    id="t18_784_3937"
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
                                    id="t18_784_3938"
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
                                id="t18_784_3939"
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
                                    id="t18_784_3940"
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
                                    id="t18_784_3941"
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
                                id="t18_784_3942"
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
                                    id="t18_784_3943"
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
                                    id="t18_784_3944"
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
                            id="t18_784_3945"
                            style={{
                                height: 236,
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
                                id="t18_784_3946"
                                style={{
                                    height: 164,
                                    width: 580,
                                    backgroundColor: 'rgba(248,246,246,1.00)',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingTop: 5,
                                    paddingBottom: 5,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                }}
                            >
                                <span
                                    id="t18_784_3947"
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
                                    id="t18_784_4057"
                                    style={{
                                        width: 519,
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
                                        id="t18_784_3948"
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
                            id="t18_784_3949"
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
                                id="t18_784_3950"
                                style={{
                                    width: 457,
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
                                    id="t18_784_3951"
                                    style={{
                                        height: 40,
                                        width: 457,
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
                                        id="t18_784_3952"
                                        style={{
                                            height: 40,
                                            width: 127,
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
                                            id="t18_784_3953"
                                            style={{
                                                height: 22,
                                                width: 22,
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
                                                id="t18_784_3954"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 16,
                                                    fontWeight: 700,
                                                    color: 'rgba(231,229,228,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '19.363636016845703px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                1
                                            </span>
                                        </div>

                                        <span
                                            id="t18_784_3955"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 16,
                                                fontWeight: 700,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '19.363636016845703px',
                                                textAlign: 'left',
                                                marginLeft: 2.5,
                                                marginRight: 0,
                                            }}
                                        >
                                            Details
                                        </span>
                                    </div>

                                    <div
                                        id="t18_784_3956"
                                        style={{
                                            height: 40,
                                            width: 127,
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
                                            id="t18_784_3957"
                                            style={{
                                                height: 22,
                                                width: 22,
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
                                                id="t18_784_3958"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 16,
                                                    fontWeight: 700,
                                                    color: 'rgba(154,11,18,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '19.363636016845703px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                2
                                            </span>
                                        </div>

                                        <span
                                            id="t18_784_3959"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 16,
                                                fontWeight: 700,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '19.363636016845703px',
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
                                    id="t18_784_3960"
                                    style={{
                                        width: 437,
                                        borderBottomLeftRadius: 9,
                                        borderBottomRightRadius: 9,
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
                                        marginBottom: 0,
                                    }}
                                >
                                    <div
                                        id="t18_784_3961"
                                        style={{
                                            width: 349,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 10,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            window.history.back()
                                        }}
                                    >
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ec87c77c7a8b9af63bb6246efccc9e2ece2caa39.png' !=
                                        '' ? (
                                            <img
                                                id="t18_784_3962"
                                                style={{
                                                    height: 11.66650390625,
                                                    width: 7,
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
                                            id="t18_784_3963"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 14,
                                                fontWeight: 600,
                                                color: 'rgba(186,15,23,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '16.94318199157715px',
                                                textAlign: 'left',
                                                marginLeft: 4,
                                                marginRight: 0,
                                            }}
                                        >
                                            Go back and edit
                                        </span>
                                    </div>

                                    <MmSelectS
                                        {...dl.changes.studyAbroadPaymentForm
                                            .session}
                                        onChange={(val) => {
                                            dl.functions.selectSaBookingType(
                                                val
                                            )
                                        }}
                                    />

                                    <MmDatePickerS
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
                                                // var res = await dl.functions.getTimeSlot()
                                                // // if(dl.changes.availableSlots.length==0){
                                                // //     return
                                                // // }
                                                // dl.changes.studyAbroadPaymentForm.timeSlot.options = dl.changes.availableSlots
                                                // dl.changes.studyAbroadPaymentForm.timeSlot.value = val
                                                // dl.changes.studyAbroadPaymentForm.timeSlot.showErrorMessage = "none"
                                                // dl.changes.studyAbroadPaymentForm.timeSlot.inputBorderColor = "rgba(207,206,206,1)"
                                            }

                                            run()
                                        }}
                                    />

                                    <div
                                        id="t18_1583_214"
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
                                            id="t18_1583_215"
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
                                            id="t18_1583_216"
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
                                                id="t18_1596_324"
                                                style={{
                                                    width: 314,
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display:
                                                        dl.changes
                                                            .studyAbroadPaymentForm
                                                            .timeSlot
                                                            .showErrorMessage,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 0,
                                                    marginBottom: 2.5,
                                                }}
                                            >
                                                <span
                                                    id="t18_1583_217"
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
                                                id="t18_1583_218"
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
                                                    id="t18_1583_219"
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
                                                        id="t18_1583_220"
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
                                                    id="t18_1583_221"
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
                                                        {dl.changes.studyAbroadPaymentForm.timeSlot.options.map(
                                                            (item, index) => {
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

                                    <MmTextAreaS
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
                                        id="t18_784_3983"
                                        style={{
                                            width: 317,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingLeft: 10,
                                            paddingRight: 10,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 10,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_784_3984"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 70,
                                            }}
                                        >
                                            <span
                                                id="t18_784_3985"
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
                                                {dl.changes.saBookingPricing}
                                            </span>
                                        </div>

                                        <div
                                            id="t18_784_3986"
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
                                                marginLeft: 70,
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
                                                id="t18_784_3987"
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
                                id="t18_784_4054"
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
                                {dl.changes.addSpaces.StudyAbroadPaymentAd.sm
                                    ?.slice(4, -1)
                                    .trim() != '' ? (
                                    <img
                                        id="t18_784_4055"
                                        style={{
                                            height: 244,
                                            width: 537,
                                            display: 'flex',
                                            borderWidth: 0,
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
                                        src={dl.changes.addSpaces.StudyAbroadPaymentAd.sm
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
export default Studyabroadslotpayment_3
