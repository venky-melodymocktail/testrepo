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
import SampleInput from '../../components/SampleInput.jsx'
import MmSelect from '../../components/MmSelect.jsx'
import MmAutoComplete from '../../components/MmAutoComplete.jsx'
import MmDatePicker from '../../components/MmDatePicker.jsx'
import MmMultiSelect from '../../components/MmMultiSelect.jsx'
import MmContactNumber from '../../components/MmContactNumber.jsx'
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

const Iwanttobetcform_1 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_1513_1561')
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
                id="t18_1513_1561"
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
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <div
                    id="t18_1513_1311"
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
                            var currentPath = dl.functions.common.getLastPath()
                            dl.functions.onLoadFunctions[currentPath]()
                        }}
                    />

                    <div
                        id="t18_1513_1314"
                        style={{
                            width: 1440,
                            backgroundColor: 'rgba(255,255,255,1.00)',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingBottom: 20,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_1513_1315"
                            style={{
                                height: 34,
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingBottom: 30,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_1513_1316"
                                style={{
                                    height: 64,
                                    width: 1380,
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
                                    id="t18_1513_1317"
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
                                        id="t18_1513_1318"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 16,
                                            fontWeight: 500,
                                            color: 'rgba(113,113,113,1)',
                                            letterSpacing: 0,
                                            lineHeight: '19.363636016845703px',
                                            textAlign: 'left',
                                        }}
                                    >
                                        {
                                            'Travel companion >> I will be a travel companion'
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        id="t18_1513_1319"
                        style={{
                            width: 1420,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: 'flex',
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 60,
                            paddingBottom: 60,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_1513_1320"
                            style={{
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
                                id="t18_1513_1321"
                                style={{
                                    width: 940,
                                    borderRadius: 20,
                                    backgroundColor: 'rgba(248,246,246,1.00)',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingLeft: 40,
                                    paddingRight: 20,
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
                                    {...dl.changes.iwanttobetcform.firstName}
                                    onChange={(val) => {
                                        dl.changes.iwanttobetcform.firstName.value =
                                            val
                                        dl.changes.iwanttobetcform.firstName.showErrorMessage =
                                            'none'
                                        dl.changes.iwanttobetcform.firstName.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <SampleInput
                                    {...dl.changes.iwanttobetcform.lastName}
                                    onChange={(val) => {
                                        dl.changes.iwanttobetcform.lastName.value =
                                            val
                                        dl.changes.iwanttobetcform.lastName.showErrorMessage =
                                            'none'
                                        dl.changes.iwanttobetcform.lastName.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <MmSelect
                                    {...dl.changes.iwanttobetcform.bookedTicket}
                                    onChange={(val) => {
                                        dl.changes.iwanttobetcform.bookedTicket.value =
                                            val
                                        dl.changes.iwanttobetcform.bookedTicket.showErrorMessage =
                                            'none'
                                        dl.changes.iwanttobetcform.bookedTicket.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                        if (val == 'no') {
                                            dl.changes.ticketNotBooked = 'flex'
                                            dl.changes.ticketBooked = 'none'
                                        } else {
                                            dl.changes.ticketNotBooked = 'none'
                                            dl.changes.ticketBooked = 'flex'
                                        }
                                    }}
                                />

                                <MmAutoComplete
                                    {...dl.changes.iwanttobetcform.from}
                                    onChange={(val) => {
                                        var serachString = val
                                        const run = async () => {
                                            var res =
                                                await dl.functions.getAirports(
                                                    serachString
                                                )
                                            dl.changes.iwanttobetcform.from.options =
                                                res.airports
                                            dl.changes.airportslist =
                                                res.airportdetails
                                        }

                                        run()
                                    }}
                                    onSelect={(val) => {
                                        dl.changes.iwanttobetcform.from.value =
                                            val
                                        var airportName = val.split(',')
                                        var airport = airportName[0]
                                        for (
                                            let i = 0;
                                            i < dl.changes.airportslist.length;
                                            i++
                                        ) {
                                            // var airportname =
                                            if (
                                                dl.changes.airportslist[i]
                                                    .name == airport
                                            ) {
                                                dl.changes.iwanttobetcform.from.selectedAirport =
                                                    dl.changes.airportslist[i]
                                                // alert(airport)
                                                // {
                                                //     "city_code": airportslist[i].city_code,
                                                //     "country_code": airportslist[i].country_code,
                                                //     "name": airportslist[i].name,
                                                //     "lat": airportslist[i].lat,
                                                //     "lng": airportslist[i].lng,
                                                // }
                                            }
                                        }
                                        dl.changes.iwanttobetcform.from.showErrorMessage =
                                            'none'
                                        dl.changes.iwanttobetcform.from.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <MmAutoComplete
                                    {...dl.changes.iwanttobetcform.to}
                                    onChange={(val) => {
                                        var serachString = val
                                        const run = async () => {
                                            var res =
                                                await dl.functions.getAirports(
                                                    serachString
                                                )
                                            dl.changes.iwanttobetcform.to.options =
                                                res.airports
                                            dl.changes.airportslist =
                                                res.airportdetails
                                        }

                                        run()
                                    }}
                                    onSelect={(val) => {
                                        dl.changes.iwanttobetcform.to.value =
                                            val
                                        var airportName = val.split(',')
                                        var airport = airportName[0]
                                        for (
                                            let i = 0;
                                            i < dl.changes.airportslist.length;
                                            i++
                                        ) {
                                            if (
                                                dl.changes.airportslist[i]
                                                    .name == airport
                                            ) {
                                                dl.changes.iwanttobetcform.to.selectedAirport =
                                                    dl.changes.airportslist[i]
                                            }
                                        }
                                        dl.changes.iwanttobetcform.to.showErrorMessage =
                                            'none'
                                        dl.changes.iwanttobetcform.to.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <div
                                    id="t18_1531_8"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: dl.changes.ticketBooked,
                                        paddingTop: 5,
                                        paddingBottom: 5,
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
                                                dl.changes.willBeATCstops.stop1,
                                        }}
                                    >
                                        <MmAutoComplete
                                            {...dl.changes.iwanttobetcform
                                                .addStop}
                                            onChange={(val) => {
                                                var serachString = val
                                                const run = async () => {
                                                    var res =
                                                        await dl.functions.getAirports(
                                                            serachString
                                                        )
                                                    dl.changes.iwanttobetcform.addStop.options =
                                                        res.airports
                                                    // dl.changes.airportslist = res.airportdetails
                                                }

                                                run()
                                            }}
                                            onSelect={(val) => {
                                                dl.changes.iwanttobetcform.addStop.value =
                                                    val
                                                dl.changes.iwanttobetcform.addStop.showErrorMessage =
                                                    'none'
                                                dl.changes.iwanttobetcform.addStop.inputBorderColor =
                                                    'rgba(207,206,206,1)'
                                            }}
                                        />
                                    </div>

                                    {/* ///// remove this div rapped around MmAutoComplete complete to make stop1 AND stop2 visible and hidden and we can also use display property in the div itself */}
                                    <div
                                        style={{
                                            display:
                                                dl.changes.willBeATCstops.stop2,
                                        }}
                                    >
                                        <MmAutoComplete
                                            {...dl.changes.iwanttobetcform
                                                .addStop2}
                                            onChange={(val) => {
                                                var serachString = val
                                                const run = async () => {
                                                    var res =
                                                        await dl.functions.getAirports(
                                                            serachString
                                                        )
                                                    dl.changes.iwanttobetcform.addStop2.options =
                                                        res.airports
                                                    // dl.changes.airportslist = res.airportdetails
                                                }

                                                run()
                                            }}
                                            onSelect={(val) => {
                                                dl.changes.iwanttobetcform.addStop2.value =
                                                    val
                                                dl.changes.iwanttobetcform.addStop2.showErrorMessage =
                                                    'none'
                                                dl.changes.iwanttobetcform.addStop2.inputBorderColor =
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
                                                ;(dl.changes.willBeATCstops.stop1 =
                                                    'flex'),
                                                    (dl.changes.willBeATCstops.stop2 =
                                                        'none'),
                                                    (dl.changes.willBeATCstops.addbutton =
                                                        'flex')
                                            }

                                            if (stopCount == 2) {
                                                ;(dl.changes.willBeATCstops.stop1 =
                                                    'flex'),
                                                    (dl.changes.willBeATCstops.stop2 =
                                                        'flex'),
                                                    (dl.changes.willBeATCstops.addbutton =
                                                        'none')
                                            }
                                        }}
                                        style={{
                                            height: 27,
                                            width: 27,
                                            display:
                                                dl.changes.willBeATCstops
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
                                    id="t18_1513_1366"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
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
                                        {...dl.changes.iwanttobetcform.fromDate}
                                        onChange={(val) => {
                                            dl.changes.iwanttobetcform.fromDate.value =
                                                val
                                            dl.changes.iwanttobetcform.fromDate.showErrorMessage =
                                                'none'
                                            dl.changes.iwanttobetcform.fromDate.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmDatePicker
                                        {...dl.changes.iwanttobetcform.toDate}
                                        onChange={(val) => {
                                            dl.changes.iwanttobetcform.toDate.value =
                                                val
                                            dl.changes.iwanttobetcform.toDate.showErrorMessage =
                                                'none'
                                            dl.changes.iwanttobetcform.toDate.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />
                                </div>

                                <div
                                    id="t18_1513_1383"
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
                                    <MmDatePicker
                                        {...dl.changes.iwanttobetcform.date}
                                        onChange={(val) => {
                                            dl.changes.iwanttobetcform.date.value =
                                                val
                                            dl.changes.iwanttobetcform.date.showErrorMessage =
                                                'none'
                                            dl.changes.iwanttobetcform.date.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmSelect
                                        {...dl.changes.iwanttobetcform.time}
                                        onChange={(val) => {
                                            dl.changes.iwanttobetcform.time.value =
                                                val
                                            dl.changes.iwanttobetcform.time.showErrorMessage =
                                                'none'
                                            dl.changes.iwanttobetcform.time.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />
                                </div>

                                <div
                                    id="t18_1513_1400"
                                    style={{
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
                                        id="t18_1531_6"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: dl.changes.ticketBooked,
                                            paddingTop: 5,
                                            paddingBottom: 5,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 12.5,
                                        }}
                                    >
                                        <MmSelect
                                            {...dl.changes.iwanttobetcform
                                                .airline}
                                            onChange={(val) => {
                                                dl.changes.iwanttobetcform.airline.value =
                                                    val
                                                dl.changes.iwanttobetcform.airline.showErrorMessage =
                                                    'none'
                                                dl.changes.iwanttobetcform.airline.inputBorderColor =
                                                    'rgba(207,206,206,1)'
                                            }}
                                        />
                                    </div>

                                    <div
                                        id="t18_1531_7"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: dl.changes.ticketNotBooked,
                                            paddingTop: 5,
                                            paddingBottom: 5,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 12.5,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <MmMultiSelect
                                            {...dl.changes.iwanttobetcform
                                                .preferredAirline}
                                            onChange={(val) => {
                                                dl.changes.iwanttobetcform.preferredAirline.value =
                                                    val
                                                dl.changes.iwanttobetcform.preferredAirline.showErrorMessage =
                                                    'none'
                                                dl.changes.iwanttobetcform.preferredAirline.inputBorderColor =
                                                    'rgba(207,206,206,1)'
                                            }}
                                        />
                                    </div>
                                </div>

                                <div
                                    id="t18_1513_1417"
                                    style={{
                                        width: 906,
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
                                        id="t18_1513_1418"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 20,
                                            fontWeight: 500,
                                            color: 'rgba(28,167,139,1)',
                                            letterSpacing: 0,
                                            lineHeight: '24.204544067382812px',
                                            textAlign: 'left',
                                        }}
                                    >
                                        Contact information
                                    </span>
                                </div>

                                <SampleInput
                                    {...dl.changes.iwanttobetcform.email}
                                    onChange={(val) => {
                                        dl.changes.iwanttobetcform.email.value =
                                            val
                                        dl.changes.iwanttobetcform.email.showErrorMessage =
                                            'none'
                                        dl.changes.iwanttobetcform.email.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <MmContactNumber
                                    {...dl.changes.iwanttobetcform.phone}
                                    onChange={(val) => {
                                        dl.changes.iwanttobetcform.phone.value =
                                            val
                                        dl.changes.iwanttobetcform.phone.showErrorMessage =
                                            'none'
                                        dl.changes.iwanttobetcform.phone.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                    onChangeCountryCode={(val) => {
                                        dl.changes.iwanttobetcform.phone.countryCodes =
                                            val
                                        dl.changes.iwanttobetcform.phone.showErrorMessage =
                                            'none'
                                        dl.changes.iwanttobetcform.phone.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <MmMultiSelect
                                    {...dl.changes.iwanttobetcform.languages}
                                    onChange={(val) => {
                                        dl.changes.iwanttobetcform.languages.value =
                                            val
                                        dl.changes.iwanttobetcform.languages.showErrorMessage =
                                            'none'
                                        dl.changes.iwanttobetcform.languages.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <MmSelect
                                    {...dl.changes.iwanttobetcform.vaccinated}
                                    onChange={(val) => {
                                        dl.changes.iwanttobetcform.vaccinated.value =
                                            val
                                        dl.changes.iwanttobetcform.vaccinated.showErrorMessage =
                                            'none'
                                        dl.changes.iwanttobetcform.vaccinated.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                {/* <SampleInput
    
     {...dl.changes.iwanttobetcform.tip}
    
            onChange={(val)=>{
                var amount = Number(val)
                if(amount>50){
                    dl.changes.iwanttobetcform.tip.value = val
                    dl.changes.iwanttobetcform.tip.showErrorMessage = "flex"
                    dl.changes.iwanttobetcform.tip.errorMessage = "amount must be less then $50"
                    return
                }
                dl.changes.iwanttobetcform.tip.value = val
dl.changes.iwanttobetcform.tip.showErrorMessage = "none"
dl.changes.iwanttobetcform.tip.inputBorderColor = "rgba(207,206,206,1)"
            }}
            
    
    /> */}
                            </div>

                            <div
                                id="t18_1513_1456"
                                className={' contact-btn'}
                                style={{
                                    height: 28,
                                    width: 185,
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
                                            dl.changes.iwanttobetcform.addStop
                                                .value != ''
                                        ) {
                                            stops.push(
                                                dl.changes.iwanttobetcform
                                                    .addStop.value
                                            )
                                        }
                                        if (
                                            dl.changes.iwanttobetcform.addStop2
                                                .value != ''
                                        ) {
                                            stops.push(
                                                dl.changes.iwanttobetcform
                                                    .addStop2.value
                                            )
                                        }

                                        var body = {
                                            firstName:
                                                dl.changes.iwanttobetcform
                                                    .firstName.value,
                                            lastName:
                                                dl.changes.iwanttobetcform
                                                    .lastName.value,
                                            ticketBooked:
                                                dl.changes.iwanttobetcform
                                                    .bookedTicket.value,
                                            from: dl.changes.iwanttobetcform
                                                .from.selectedAirport,
                                            to: dl.changes.iwanttobetcform.to
                                                .selectedAirport,
                                            stops: stops,
                                            dateOfJourrney:
                                                dl.changes.iwanttobetcform.date
                                                    .value,
                                            fromDate:
                                                dl.changes.iwanttobetcform
                                                    .fromDate.value,
                                            toDate: dl.changes.iwanttobetcform
                                                .toDate.value,
                                            timeOfJourney:
                                                dl.changes.iwanttobetcform.time
                                                    .value,
                                            airline:
                                                dl.changes.iwanttobetcform
                                                    .airline.value,
                                            preferredAirline:
                                                dl.changes.iwanttobetcform
                                                    .preferredAirline.value,
                                            email: dl.changes.iwanttobetcform
                                                .email.value,
                                            phone:
                                                dl.changes.iwanttobetcform.phone
                                                    .selectPlaceHolder +
                                                dl.changes.iwanttobetcform.phone
                                                    .value,
                                            languageKnown:
                                                dl.changes.iwanttobetcform
                                                    .languages.value,
                                            vaccinated:
                                                dl.changes.iwanttobetcform
                                                    .vaccinated.value,
                                            // "tip":dl.changes.iwanttobetcform.tip.value
                                        }
                                        var params =
                                            dl.functions.common.getParams()
                                        if (params.tcId) {
                                            if (params.mode == 'edit') {
                                                body['id'] = params.tcId
                                                var res =
                                                    await dl.functions.updateWillBeATc(
                                                        body
                                                    )
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
                                        } else {
                                            var res =
                                                await dl.functions.createWantToBeTC(
                                                    body
                                                )
                                            if (res) {
                                                dl.functions.viewsPlugin.showView(
                                                    'iwanttobetravelcompanion'
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
                                    id="t18_1513_1457"
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

                    <MmFooter />
                </div>
            </div>
        </div>
    )
})
export default Iwanttobetcform_1
