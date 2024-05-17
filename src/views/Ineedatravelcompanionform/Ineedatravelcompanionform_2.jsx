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
import SampleInput from '../../components/SampleInput.jsx'
import MmSelect from '../../components/MmSelect.jsx'
import MmAutoComplete from '../../components/MmAutoComplete.jsx'
import MmDatePicker from '../../components/MmDatePicker.jsx'
import MmMultiSelect from '../../components/MmMultiSelect.jsx'
import MmContactNumber from '../../components/MmContactNumber.jsx'
import MmFooter from '../../components/MmFooter.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmInputS from '../../components/MmInputS.jsx'
import MmSelectS from '../../components/MmSelectS.jsx'
import MmAutoCompleteS from '../../components/MmAutoCompleteS.jsx'
import MmDatePickerS from '../../components/MmDatePickerS.jsx'
import MmMultiSelectS from '../../components/MmMultiSelectS.jsx'
import MmContactNumberS from '../../components/MmContactNumberS.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'

const Ineedatravelcompanionform_2 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 900
            const element = document.getElementById('t18_1621_443')
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
                id="t18_1621_443"
                style={{
                    width: 900,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    paddingBottom: 5,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginLeft: 0,
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <div
                    id="t18_1621_2"
                    style={{
                        width: 900,
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
                        id="t18_1621_3"
                        style={{
                            width: 900,
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
                            id="t18_1621_6"
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
                                id="t18_1621_7"
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
                                    id="t18_1621_8"
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
                                    {
                                        'Travel companion >> I need a travel companion'
                                    }
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_1621_9"
                            style={{
                                width: 880,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 40,
                                paddingBottom: 20,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_1621_10"
                                style={{
                                    width: 840,
                                    borderRadius: 30,
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
                                    id="t18_1621_11"
                                    style={{
                                        width: 840,
                                        borderRadius: 20,
                                        backgroundColor:
                                            'rgba(248,246,246,1.00)',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingTop: 30,
                                        paddingBottom: 30,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 1,
                                        borderColor: 'rgba(207,206,206,1)',
                                        borderStyle: 'solid',
                                        marginTop: 0,
                                        marginBottom: 35,
                                    }}
                                >
                                    <SampleInput
                                        {...dl.changes.ineedatcform.firstName}
                                        onChange={(val) => {
                                            dl.changes.ineedatcform.firstName.value =
                                                val
                                            dl.changes.ineedatcform.firstName.showErrorMessage =
                                                'none'
                                            dl.changes.ineedatcform.firstName.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <SampleInput
                                        {...dl.changes.ineedatcform.lastName}
                                        onChange={(val) => {
                                            dl.changes.ineedatcform.lastName.value =
                                                val
                                            dl.changes.ineedatcform.lastName.showErrorMessage =
                                                'none'
                                            dl.changes.ineedatcform.lastName.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmSelect
                                        {...dl.changes.ineedatcform
                                            .bookedTicket}
                                        onChange={(val) => {
                                            dl.changes.ineedatcform.bookedTicket.value =
                                                val
                                            dl.changes.ineedatcform.bookedTicket.showErrorMessage =
                                                'none'
                                            dl.changes.ineedatcform.bookedTicket.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                            if (val == 'no') {
                                                dl.changes.ticketNotBooked =
                                                    'flex'
                                                dl.changes.ticketBooked = 'none'
                                            } else {
                                                dl.changes.ticketNotBooked =
                                                    'none'
                                                dl.changes.ticketBooked = 'flex'
                                            }
                                        }}
                                    />

                                    <div
                                        id="t18_1621_32"
                                        style={{
                                            width: 578,
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
                                        <MmAutoComplete
                                            {...dl.changes.ineedatcform.from}
                                            onChange={(val) => {
                                                var serachString = val
                                                const run = async () => {
                                                    var res =
                                                        await dl.functions.getAirports(
                                                            serachString
                                                        )
                                                    dl.changes.ineedatcform.from.options =
                                                        res.airports
                                                    dl.changes.airportslist =
                                                        res.airportdetails
                                                }

                                                run()
                                            }}
                                            onSelect={(val) => {
                                                dl.changes.ineedatcform.from.value =
                                                    val
                                                var airportName = val.split(',')
                                                var airport = airportName[0]
                                                for (
                                                    let i = 0;
                                                    i <
                                                    dl.changes.airportslist
                                                        .length;
                                                    i++
                                                ) {
                                                    if (
                                                        dl.changes.airportslist[
                                                            i
                                                        ].name == airport
                                                    ) {
                                                        dl.changes.ineedatcform.from.selectedAirport =
                                                            dl.changes.airportslist[
                                                                i
                                                            ]
                                                    }
                                                }
                                                dl.changes.ineedatcform.from.showErrorMessage =
                                                    'none'
                                                dl.changes.ineedatcform.from.inputBorderColor =
                                                    'rgba(207,206,206,1)'
                                            }}
                                        />

                                        <MmAutoComplete
                                            {...dl.changes.ineedatcform.to}
                                            onChange={(val) => {
                                                var serachString = val
                                                const run = async () => {
                                                    var res =
                                                        await dl.functions.getAirports(
                                                            serachString
                                                        )
                                                    dl.changes.ineedatcform.to.options =
                                                        res.airports
                                                    dl.changes.airportslist =
                                                        res.airportdetails
                                                }

                                                run()
                                            }}
                                            onSelect={(val) => {
                                                dl.changes.ineedatcform.to.value =
                                                    val
                                                var airportName = val.split(',')
                                                var airport = airportName[0]
                                                for (
                                                    let i = 0;
                                                    i <
                                                    dl.changes.airportslist
                                                        .length;
                                                    i++
                                                ) {
                                                    if (
                                                        dl.changes.airportslist[
                                                            i
                                                        ].name == airport
                                                    ) {
                                                        dl.changes.ineedatcform.to.selectedAirport =
                                                            dl.changes.airportslist[
                                                                i
                                                            ]
                                                    }
                                                }
                                                dl.changes.ineedatcform.to.showErrorMessage =
                                                    'none'
                                                dl.changes.ineedatcform.to.inputBorderColor =
                                                    'rgba(207,206,206,1)'
                                            }}
                                        />
                                    </div>

                                    <div
                                        id="t18_1621_378"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: dl.changes.ticketBooked,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 12.5,
                                            marginBottom: 12.5,
                                        }}
                                    >
                                        <div
                                            style={{
                                                alignItems: 'flex-end',
                                                display: 'flex',
                                                justifyContent: 'flex-end',
                                                flexDirection: 'row',
                                            }}
                                        >
                                            <span
                                                id="t18_1027_701"
                                                style={{
                                                    width: 200,
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
                                                Add stops
                                            </span>
                                        </div>

                                        {/* ///// remove this div rapped around MmAutoComplete complete to make stop1 AND stop2 visible and hidden and we can also use display property in the div itself */}
                                        <div
                                            style={{
                                                display:
                                                    dl.changes.iNeedATCstops
                                                        .stop1,
                                            }}
                                        >
                                            <MmAutoComplete
                                                {...dl.changes.ineedatcform
                                                    .addStop}
                                                onChange={(val) => {
                                                    var serachString = val
                                                    const run = async () => {
                                                        var res =
                                                            await dl.functions.getAirports(
                                                                serachString
                                                            )
                                                        dl.changes.ineedatcform.addStop.options =
                                                            res.airports
                                                        // dl.changes.airportslist = res.airportdetails
                                                    }

                                                    run()
                                                }}
                                                onSelect={(val) => {
                                                    dl.changes.ineedatcform.addStop.value =
                                                        val
                                                    dl.changes.ineedatcform.addStop.showErrorMessage =
                                                        'none'
                                                    dl.changes.ineedatcform.addStop.inputBorderColor =
                                                        'rgba(207,206,206,1)'
                                                    console.log('stop1 working')
                                                }}
                                            />
                                        </div>

                                        <div
                                            style={{
                                                display:
                                                    dl.changes.iNeedATCstops
                                                        .stop2,
                                            }}
                                        >
                                            <MmAutoComplete
                                                {...dl.changes.ineedatcform
                                                    .addStop2}
                                                onChange={(val) => {
                                                    var serachString = val
                                                    const run = async () => {
                                                        var res =
                                                            await dl.functions.getAirports(
                                                                serachString
                                                            )
                                                        dl.changes.ineedatcform.addStop2.options =
                                                            res.airports
                                                        // dl.changes.airportslist = res.airportdetails
                                                    }

                                                    run()
                                                }}
                                                onSelect={(val) => {
                                                    dl.changes.ineedatcform.addStop2.value =
                                                        val
                                                    dl.changes.ineedatcform.addStop2.showErrorMessage =
                                                        'none'
                                                    dl.changes.ineedatcform.addStop2.inputBorderColor =
                                                        'rgba(207,206,206,1)'
                                                }}
                                            />
                                        </div>
                                        <img
                                            id="t18_1038_2628"
                                            onClick={() => {
                                                var stopCount =
                                                    dl.changes.iNeedATCstops
                                                        .stopCount
                                                dl.changes.iNeedATCstops.stopCount =
                                                    dl.changes.iNeedATCstops
                                                        .stopCount + 1
                                                if (stopCount == 1) {
                                                    ;(dl.changes.iNeedATCstops.stop1 =
                                                        'flex'),
                                                        (dl.changes.iNeedATCstops.stop2 =
                                                            'none'),
                                                        (dl.changes.iNeedATCstops.addbutton =
                                                            'flex')
                                                }

                                                if (stopCount == 2) {
                                                    ;(dl.changes.iNeedATCstops.stop1 =
                                                        'flex'),
                                                        (dl.changes.iNeedATCstops.stop2 =
                                                            'flex'),
                                                        (dl.changes.iNeedATCstops.addbutton =
                                                            'none')
                                                }
                                            }}
                                            style={{
                                                height: 27,
                                                width: 27,
                                                display:
                                                    dl.changes.iNeedATCstops
                                                        .addbutton,
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 5.5,
                                                backgroundColor: 'black',
                                                borderRadius: 15,
                                                marginLeft: 250,
                                                cursor: 'pointer',
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/41a7227774b5b1086601e797a1f6691e1f551b82.png'
                                            }
                                        ></img>
                                    </div>

                                    <div
                                        id="t18_1621_57"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: dl.changes.ticketNotBooked,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 12.5,
                                            marginBottom: 12.5,
                                        }}
                                    >
                                        <MmDatePicker
                                            {...dl.changes.ineedatcform
                                                .fromDate}
                                            onChange={(val) => {
                                                dl.changes.ineedatcform.fromDate.value =
                                                    val
                                                dl.changes.ineedatcform.fromDate.showErrorMessage =
                                                    'none'
                                                dl.changes.ineedatcform.fromDate.inputBorderColor =
                                                    'rgba(207,206,206,1)'
                                            }}
                                        />

                                        <MmDatePicker
                                            {...dl.changes.ineedatcform.toDate}
                                            onChange={(val) => {
                                                dl.changes.ineedatcform.toDate.value =
                                                    val
                                                dl.changes.ineedatcform.toDate.showErrorMessage =
                                                    'none'
                                                dl.changes.ineedatcform.toDate.inputBorderColor =
                                                    'rgba(207,206,206,1)'
                                            }}
                                        />
                                    </div>

                                    <div
                                        id="t18_1621_379"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: dl.changes.ticketBooked,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 12.5,
                                            marginBottom: 12.5,
                                        }}
                                    >
                                        <MmDatePicker
                                            {...dl.changes.ineedatcform.date}
                                            onChange={(val) => {
                                                dl.changes.ineedatcform.date.value =
                                                    val
                                                dl.changes.ineedatcform.date.showErrorMessage =
                                                    'none'
                                                dl.changes.ineedatcform.date.inputBorderColor =
                                                    'rgba(207,206,206,1)'
                                            }}
                                        />

                                        <MmSelect
                                            {...dl.changes.ineedatcform.time}
                                            onChange={(val) => {
                                                dl.changes.ineedatcform.time.value =
                                                    val
                                                dl.changes.ineedatcform.time.showErrorMessage =
                                                    'none'
                                                dl.changes.ineedatcform.time.inputBorderColor =
                                                    'rgba(207,206,206,1)'
                                            }}
                                        />
                                    </div>

                                    <div
                                        id="t18_1700_2"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: dl.changes.ticketBooked,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 12.5,
                                            marginBottom: 12.5,
                                        }}
                                    >
                                        <div
                                            id="t18_1641_194"
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
                                            <MmSelect
                                                {...dl.changes.ineedatcform
                                                    .airline}
                                                onChange={(val) => {
                                                    dl.changes.ineedatcform.airline.value =
                                                        val
                                                    dl.changes.ineedatcform.airline.showErrorMessage =
                                                        'none'
                                                    dl.changes.ineedatcform.airline.inputBorderColor =
                                                        'rgba(207,206,206,1)'
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1950_5"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            paddingBottom: 5,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 12.5,
                                            marginBottom: 12.5,
                                        }}
                                    >
                                        <div
                                            id="t18_1641_193"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display:
                                                    dl.changes.ticketNotBooked,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                            }}
                                        >
                                            <MmMultiSelect
                                                {...dl.changes.ineedatcform
                                                    .preferredAirline}
                                                onChange={(val) => {}}
                                            />
                                        </div>
                                    </div>

                                    <div
                                        id="t18_1621_82"
                                        style={{
                                            width: 787,
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
                                            marginTop: 12.5,
                                            marginBottom: 12.5,
                                        }}
                                    >
                                        <span
                                            id="t18_1621_83"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 18,
                                                fontWeight: 500,
                                                color: 'rgba(28,167,139,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '21.784090042114258px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            Contact information
                                        </span>
                                    </div>

                                    <SampleInput
                                        {...dl.changes.ineedatcform.email}
                                        onChange={(val) => {
                                            dl.changes.ineedatcform.email.value =
                                                val
                                            dl.changes.ineedatcform.email.showErrorMessage =
                                                'none'
                                            dl.changes.ineedatcform.email.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmContactNumber
                                        {...dl.changes.ineedatcform.phone}
                                        onChange={(val) => {
                                            dl.changes.ineedatcform.phone.value =
                                                val
                                            dl.changes.ineedatcform.phone.showErrorMessage =
                                                'none'
                                            dl.changes.ineedatcform.phone.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                        onChangeCountryCode={(val) => {
                                            dl.changes.ineedatcform.phone.selectPlaceHolder =
                                                val
                                            dl.changes.ineedatcform.phone.showErrorMessage =
                                                'none'
                                            dl.changes.ineedatcform.phone.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmMultiSelect
                                        {...dl.changes.ineedatcform.languages}
                                        onChange={(val) => {
                                            dl.changes.ineedatcform.languages.value =
                                                val
                                            dl.changes.ineedatcform.languages.showErrorMessage =
                                                'none'
                                            dl.changes.ineedatcform.languages.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmSelect
                                        {...dl.changes.ineedatcform.vaccinated}
                                        onChange={(val) => {
                                            dl.changes.ineedatcform.vaccinated.value =
                                                val
                                            dl.changes.ineedatcform.vaccinated.showErrorMessage =
                                                'none'
                                            dl.changes.ineedatcform.vaccinated.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    {/* <SampleInput
    
     {...dl.changes.ineedatcform.tip}
    
            onChange={(val)=>{
                dl.changes.ineedatcform.tip.value = val
dl.changes.ineedatcform.tip.showErrorMessage = "none"
dl.changes.ineedatcform.tip.inputBorderColor = "rgba(207,206,206,1)"
            }}
            
    
    /> */}
                                </div>

                                <div
                                    id="t18_1621_121"
                                    style={{
                                        height: 24,
                                        width: 172,
                                        borderRadius: 5,
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
                                        marginTop: 35,
                                        marginBottom: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        const run = async () => {
                                            var stops = []
                                            if (
                                                dl.changes.ineedatcform.addStop
                                                    .value != ''
                                            ) {
                                                stops.push(
                                                    dl.changes.ineedatcform
                                                        .addStop.value
                                                )
                                            }

                                            if (
                                                dl.changes.ineedatcform.addStop2
                                                    .value != ''
                                            ) {
                                                stops.push(
                                                    dl.changes.ineedatcform
                                                        .addStop2.value
                                                )
                                            }

                                            var body = {
                                                firstName:
                                                    dl.changes.ineedatcform
                                                        .firstName.value,
                                                lastName:
                                                    dl.changes.ineedatcform
                                                        .lastName.value,
                                                ticketBooked:
                                                    dl.changes.ineedatcform
                                                        .bookedTicket.value,
                                                from: dl.changes.ineedatcform
                                                    .from.selectedAirport,
                                                to: dl.changes.ineedatcform.to
                                                    .selectedAirport,
                                                stops: stops,
                                                dateOfJourrney:
                                                    dl.changes.ineedatcform.date
                                                        .value,
                                                fromDate:
                                                    dl.changes.ineedatcform
                                                        .fromDate.value,
                                                toDate: dl.changes.ineedatcform
                                                    .toDate.value,
                                                timeOfJourney:
                                                    dl.changes.ineedatcform.time
                                                        .value,
                                                airline:
                                                    dl.changes.ineedatcform
                                                        .airline.value,
                                                preferredAirline:
                                                    dl.changes.ineedatcform
                                                        .preferredAirline.value,
                                                email: dl.changes.ineedatcform
                                                    .email.value,
                                                phone:
                                                    dl.changes.ineedatcform
                                                        .phone
                                                        .selectPlaceHolder +
                                                    dl.changes.ineedatcform
                                                        .phone.value,
                                                languageKnown:
                                                    dl.changes.ineedatcform
                                                        .languages.value,
                                                vaccinated:
                                                    dl.changes.ineedatcform
                                                        .vaccinated.value,
                                                // "tip":dl.changes.ineedatcform.tip.value
                                            }
                                            // alert(JSON.stringify(body))
                                            var params =
                                                dl.functions.common.getParams()
                                            // alert(JSON.stringify(body))
                                            if (params.tcId) {
                                                if (params.mode == 'edit') {
                                                    body['id'] = params.tcId
                                                    // alert(JSON.stringify(params.tcId))
                                                    var res =
                                                        await dl.functions.updateTC(
                                                            body
                                                        )
                                                    // alert(JSON.stringify(res))
                                                    if (res == 200) {
                                                        dl.functions.viewsPlugin.showView(
                                                            'travelcompanionlisting'
                                                        )
                                                        var currentPath =
                                                            dl.functions.common.getLastPath()
                                                        dl.functions.onLoadFunctions[
                                                            currentPath
                                                        ]()
                                                    }
                                                }
                                                // alert(JSON.stringify(body))
                                            } else {
                                                var res =
                                                    await dl.functions.createNeedATC(
                                                        body
                                                    )
                                                if (res) {
                                                    dl.functions.viewsPlugin.showView(
                                                        'travelcompanion'
                                                    )
                                                    var currentPath =
                                                        dl.functions.common.getLastPath()
                                                    dl.functions.onLoadFunctions[
                                                        currentPath
                                                    ]()
                                                }
                                            }
                                        }

                                        run()
                                    }}
                                >
                                    <span
                                        id="t18_1621_122"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 16,
                                            fontWeight: 600,
                                            color: 'rgba(255,255,255,1)',
                                            letterSpacing: 0,
                                            lineHeight: '19.363636016845703px',
                                            textAlign: 'left',
                                        }}
                                    >
                                        Submit
                                    </span>
                                </div>
                            </div>
                        </div>

                        <MmFooterMd />
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Ineedatravelcompanionform_2
