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

const Studyabroadslotpayment_2 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 900
            const element = document.getElementById('t18_817_5095')
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
                id="t18_817_5095"
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
                    id="t18_784_3865"
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
                        id="t18_784_3866"
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
                            id="t18_784_3869"
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
                                id="t18_784_3870"
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
                                    id="t18_784_3871"
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
                            id="t18_784_3872"
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
                                id="t18_784_3873"
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
                                    id="t18_784_3874"
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
                                    id="t18_784_3875"
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
                                id="t18_784_3876"
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
                                    id="t18_784_3877"
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
                                    id="t18_784_3878"
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
                                id="t18_784_3879"
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
                                    id="t18_784_3880"
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
                                    id="t18_784_3881"
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
                            id="t18_784_3882"
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
                                id="t18_784_3883"
                                style={{
                                    height: 187,
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
                                    id="t18_784_3884"
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
                                    id="t18_784_4058"
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
                                        id="t18_784_3885"
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
                            id="t18_1583_152"
                            style={{
                                width: 900,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingTop: 30,
                                paddingBottom: 30,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_1583_98"
                                style={{
                                    width: 860,
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
                                    id="t18_1583_99"
                                    style={{
                                        width: 860,
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
                                        id="t18_1583_100"
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
                                            id="t18_1583_101"
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
                                                id="t18_1583_102"
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
                                            id="t18_1583_103"
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
                                        id="t18_1583_104"
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
                                            id="t18_1583_105"
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
                                                id="t18_1583_106"
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
                                            id="t18_1583_107"
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
                                    id="t18_1583_108"
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
                                        id="t18_1583_109"
                                        style={{
                                            width: 468,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingLeft: 20,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 20,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            window.history.back()
                                        }}
                                    >
                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ec87c77c7a8b9af63bb6246efccc9e2ece2caa39.png' !=
                                        '' ? (
                                            <img
                                                id="t18_1583_110"
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
                                            id="t18_1583_111"
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
                                        id="t18_1583_118"
                                        style={{
                                            width: 802,
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
                                            id="t18_1583_119"
                                            style={{
                                                width: 802,
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
                                                id="t18_1583_120"
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
                                                    id="t18_1583_121"
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
                                                        id="t18_1583_122"
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
                                                id="t18_1583_123"
                                                style={{
                                                    width: 802,
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
                                                    id="t18_1583_124"
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
                                                        id="t18_1583_125"
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
                                                            id="t18_1583_126"
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
                                                        id="t18_1583_127"
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
                                                            id="t18_1583_128"
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
                                                    id="t18_1583_129"
                                                    style={{
                                                        width: 572,
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
                                                        id="t18_1583_130"
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
                                                            id="t18_1583_131"
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
                                                        id="t18_1583_132"
                                                        style={{
                                                            width: 572,
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
                                        id="t18_1583_146"
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
                                            marginTop: 20,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_1583_147"
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 240,
                                            }}
                                        >
                                            <span
                                                id="t18_1583_148"
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
                                            id="t18_1583_149"
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
                                                marginLeft: 240,
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
                                                id="t18_1583_150"
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
                        </div>

                        <div
                            id="t18_1583_153"
                            style={{
                                width: 900,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingBottom: 20,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            {dl.changes.addSpaces.StudyAbroadPaymentAd.md
                                ?.slice(4, -1)
                                .trim() != '' ? (
                                <img
                                    id="t18_1583_151"
                                    style={{
                                        height: 328,
                                        width: 750,
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
                                    src={dl.changes.addSpaces.StudyAbroadPaymentAd.md
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
export default Studyabroadslotpayment_2
