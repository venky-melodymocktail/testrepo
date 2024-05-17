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
import MmDatePicker from '../../components/MmDatePicker.jsx'
import MmSelect from '../../components/MmSelect.jsx'
import MmAutoComplete from '../../components/MmAutoComplete.jsx'
import MmContactNumber from '../../components/MmContactNumber.jsx'
import SampleInput from '../../components/SampleInput.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmDatePickerS from '../../components/MmDatePickerS.jsx'
import MmSelectS from '../../components/MmSelectS.jsx'
import MmAutoCompleteS from '../../components/MmAutoCompleteS.jsx'
import MmInputS from '../../components/MmInputS.jsx'
import MmContactNumberS from '../../components/MmContactNumberS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'

const Listmyride_2 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 900
            const element = document.getElementById('t18_969_96')
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
                id="t18_969_96"
                style={{
                    width: 900,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    paddingBottom: 6,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <div
                    id="t18_893_7472"
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
                        id="t18_893_7473"
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
                            id="t18_893_7476"
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
                                id="t18_893_7477"
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
                                    id="t18_893_7478"
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
                                        'Ride sharing >> I have a Ride >> List my Ride'
                                    }
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_893_7479"
                            style={{
                                width: 880,
                                flexDirection: 'row',
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
                                id="t18_893_7480"
                                style={{
                                    width: 752,
                                    borderRadius: 30,
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
                                    id="t18_893_7481"
                                    style={{
                                        width: 692,
                                        borderRadius: 15,
                                        backgroundColor:
                                            'rgba(248,246,246,1.00)',
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
                                        marginBottom: 20,
                                    }}
                                >
                                    <MmDatePicker
                                        {...dl.changes.listMyRideForm.date}
                                        onChange={(val) => {
                                            dl.changes.listMyRideForm.date.value =
                                                val
                                            dl.changes.listMyRideForm.date.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                            dl.changes.listMyRideForm.date.showErrorMessage =
                                                'none'
                                        }}
                                    />

                                    <MmSelect
                                        {...dl.changes.listMyRideForm.time}
                                        onChange={(val) => {
                                            dl.changes.listMyRideForm.time.value =
                                                val
                                            dl.changes.listMyRideForm.time.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                            dl.changes.listMyRideForm.time.showErrorMessage =
                                                'none'
                                        }}
                                    />

                                    <MmAutoComplete
                                        {...dl.changes.listMyRideForm.from}
                                        onChange={(val) => {
                                            const run = async () => {
                                                var searchtext = val
                                                var zipcodeArr = []
                                                var res =
                                                    await dl.functions.searchZipCode(
                                                        searchtext
                                                    )
                                                for (
                                                    var i = 0;
                                                    i < res.length;
                                                    i++
                                                ) {
                                                    var option =
                                                        res[i].city +
                                                        ',' +
                                                        res[i].state_name +
                                                        ',' +
                                                        res[i].zip
                                                    zipcodeArr.push(option)
                                                }
                                                // alert(zipcodeArr)
                                                dl.changes.listMyRideForm.from.options =
                                                    zipcodeArr
                                            }
                                            run()
                                        }}
                                        onSelect={(val) => {
                                            var zipcode = val.split(',')
                                            dl.changes.listMyRideForm.from.value =
                                                zipcode[2]
                                            dl.changes.listMyRideForm.from.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                            dl.changes.listMyRideForm.from.showErrorMessage =
                                                'none'
                                        }}
                                    />

                                    <MmAutoComplete
                                        {...dl.changes.listMyRideForm.to}
                                        onChange={(val) => {
                                            const run = async () => {
                                                var searchtext = val
                                                var zipcodeArr = []
                                                var res =
                                                    await dl.functions.searchZipCode(
                                                        searchtext
                                                    )
                                                for (
                                                    var i = 0;
                                                    i < res.length;
                                                    i++
                                                ) {
                                                    var option =
                                                        res[i].city +
                                                        ',' +
                                                        res[i].state_name +
                                                        ',' +
                                                        res[i].zip
                                                    zipcodeArr.push(option)
                                                }
                                                // alert(zipcodeArr)
                                                dl.changes.listMyRideForm.to.options =
                                                    zipcodeArr
                                            }
                                            run()
                                        }}
                                        onSelect={(val) => {
                                            var zipcode = val.split(',')
                                            dl.changes.listMyRideForm.to.value =
                                                zipcode[2]
                                            dl.changes.listMyRideForm.to.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                            dl.changes.listMyRideForm.to.showErrorMessage =
                                                'none'
                                        }}
                                    />

                                    <MmSelect
                                        {...dl.changes.listMyRideForm
                                            .noOfPeople}
                                        onChange={(val) => {
                                            dl.changes.listMyRideForm.noOfPeople.value =
                                                val
                                            dl.changes.listMyRideForm.noOfPeople.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                            dl.changes.listMyRideForm.noOfPeople.showErrorMessage =
                                                'none'
                                        }}
                                    />

                                    <SampleInput
                                        {...dl.changes.listMyRideForm.price}
                                        onChange={(val) => {
                                            dl.changes.listMyRideForm.price.value =
                                                val
                                            dl.changes.listMyRideForm.price.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                            dl.changes.listMyRideForm.price.showErrorMessage =
                                                'none'
                                        }}
                                    />

                                    <MmContactNumber
                                        {...dl.changes.listMyRideForm.phone}
                                        onChange={(val) => {
                                            dl.changes.listMyRideForm.phone.value =
                                                val
                                            dl.changes.listMyRideForm.phone.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                            dl.changes.listMyRideForm.phone.showErrorMessage =
                                                'none'
                                        }}
                                        onChangeCountryCode={(val) => {
                                            dl.changes.listMyRideForm.phone.selectPlaceHolder =
                                                val
                                            dl.changes.listMyRideForm.phone.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <SampleInput
                                        {...dl.changes.listMyRideForm.email}
                                        onChange={(val) => {
                                            dl.changes.listMyRideForm.email.value =
                                                val
                                            dl.changes.listMyRideForm.email.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                            dl.changes.listMyRideForm.email.showErrorMessage =
                                                'none'
                                        }}
                                    />
                                </div>

                                <div
                                    id="t18_893_7538"
                                    style={{
                                        height: 24,
                                        width: 152,
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
                                        marginTop: 20,
                                        marginBottom: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        var run = async () => {
                                            var body = {
                                                to: dl.changes.listMyRideForm.to
                                                    .value,
                                                from: dl.changes.listMyRideForm
                                                    .from.value,
                                                // "gender":dl.changes.listMyRideForm.gender.value,
                                                price: dl.changes.listMyRideForm
                                                    .price.value,
                                                dateOfJourney:
                                                    dl.changes.listMyRideForm
                                                        .date.value,
                                                adType: 'offered',
                                                spotAvailable:
                                                    dl.changes.listMyRideForm
                                                        .noOfPeople.value,
                                                time: dl.changes.listMyRideForm
                                                    .time.value,
                                                contactNumber:
                                                    dl.changes.listMyRideForm
                                                        .phone
                                                        .selectPlaceHolder +
                                                    dl.changes.listMyRideForm
                                                        .phone.value,
                                                email: dl.changes.listMyRideForm
                                                    .email.value,
                                            }

                                            if (body.dateOfJourney == '') {
                                                dl.changes.listMyRideForm.date.inputBorderColor =
                                                    'rgba(248,246,246,1)'
                                                dl.changes.listMyRideForm.date.showErrorMessage =
                                                    'flex'
                                                return
                                            }

                                            if (body.time == '') {
                                                dl.changes.listMyRideForm.time.inputBorderColor =
                                                    'rgba(248,246,246,1)'
                                                dl.changes.listMyRideForm.time.showErrorMessage =
                                                    'flex'
                                                return
                                            }

                                            if (body.from.length < 5) {
                                                dl.changes.listMyRideForm.from.inputBorderColor =
                                                    'rgba(248,246,246,1)'
                                                dl.changes.listMyRideForm.from.showErrorMessage =
                                                    'flex'
                                                return
                                            }

                                            if (body.to.length < 5) {
                                                dl.changes.listMyRideForm.to.inputBorderColor =
                                                    'rgba(248,246,246,1)'
                                                dl.changes.listMyRideForm.to.showErrorMessage =
                                                    'flex'
                                                return
                                            }

                                            if (body.spotAvailable == '') {
                                                dl.changes.listMyRideForm.noOfPeople.inputBorderColor =
                                                    'rgba(248,246,246,1)'
                                                dl.changes.listMyRideForm.noOfPeople.showErrorMessage =
                                                    'flex'
                                                return
                                            }

                                            if (body.price == '') {
                                                dl.changes.listMyRideForm.price.inputBorderColor =
                                                    'rgba(248,246,246,1)'
                                                dl.changes.listMyRideForm.price.showErrorMessage =
                                                    'flex'
                                                return
                                            }

                                            if (
                                                body.contactNumber.length <
                                                    12 ||
                                                body.contactNumber.length > 13
                                            ) {
                                                dl.changes.listMyRideForm.phone.inputBorderColor =
                                                    'rgba(248,246,246,1)'
                                                dl.changes.listMyRideForm.phone.showErrorMessage =
                                                    'flex'
                                                return
                                            }

                                            if (body.email.length < 10) {
                                                dl.changes.listMyRideForm.email.inputBorderColor =
                                                    'rgba(248,246,246,1)'
                                                dl.changes.listMyRideForm.email.showErrorMessage =
                                                    'flex'
                                                return
                                            }

                                            var params =
                                                dl.functions.common.getParams()
                                            var rideId = params.rideId
                                            var mode = params.mode

                                            if (rideId) {
                                                if (mode == 'edit') {
                                                    body['id'] = rideId
                                                    var res =
                                                        await dl.functions.updateRide(
                                                            body
                                                        )
                                                    if (res == 200) {
                                                        dl.functions.getRideListing(
                                                            'offered',
                                                            '6',
                                                            '1'
                                                        )
                                                        dl.functions.viewsPlugin.showView(
                                                            'ridelistings'
                                                        )
                                                    }
                                                }
                                            } else {
                                                var res =
                                                    await dl.functions.createListMyRide(
                                                        body
                                                    )
                                                if (res == 200) {
                                                    dl.changes.listMyRideForm =
                                                        {
                                                            date: {
                                                                fieldName:
                                                                    'Date',
                                                                showErrorMessage:
                                                                    'none',
                                                                errorMessage:
                                                                    'Required Field',
                                                                showStar:
                                                                    'flex',
                                                                inputBorderColor:
                                                                    'rgba(207,206,206,1)',
                                                                value: '',
                                                            },
                                                            time: {
                                                                fieldName:
                                                                    'Time',
                                                                showErrorMessage:
                                                                    'none',
                                                                errorMessage:
                                                                    'Required Field',
                                                                showStar:
                                                                    'flex',
                                                                inputBorderColor:
                                                                    'rgba(207,206,206,1)',
                                                                options: [
                                                                    '6AM - 7AM',
                                                                    '7AM - 8AM',
                                                                    '8AM - 9AM',
                                                                    '9AM - 10AM',
                                                                    '10AM - 11AM',
                                                                    '11AM - 12PM',
                                                                    '12PM - 1PM',
                                                                    '1PM - 2PM',
                                                                    '2PM - 3PM',
                                                                    '3PM - 4PM',
                                                                    '4PM - 5PM',
                                                                    '5PM - 6PM',
                                                                    '6PM - 7PM',
                                                                    '7PM - 8PM',
                                                                    '8PM - 9PM',
                                                                    '9PM - 10PM',
                                                                    '10PM - 11PM',
                                                                ],
                                                                value: '',
                                                            },
                                                            from: {
                                                                fieldName:
                                                                    'From',
                                                                showErrorMessage:
                                                                    'none',
                                                                errorMessage:
                                                                    'Required Field',
                                                                showStar:
                                                                    'flex',
                                                                inputBorderColor:
                                                                    'rgba(207,206,206,1)',
                                                                options: [
                                                                    '00601',
                                                                    '00602',
                                                                    '00603',
                                                                    '00606',
                                                                ],
                                                                value: '',
                                                            },
                                                            to: {
                                                                fieldName: 'To',
                                                                showErrorMessage:
                                                                    'none',
                                                                errorMessage:
                                                                    'Required Field',
                                                                showStar:
                                                                    'flex',
                                                                inputBorderColor:
                                                                    'rgba(207,206,206,1)',
                                                                options: [
                                                                    '00601',
                                                                    '00602',
                                                                    '00603',
                                                                    '00606',
                                                                ],
                                                                value: '',
                                                            },
                                                            noOfPeople: {
                                                                fieldName:
                                                                    'Spot available',
                                                                showErrorMessage:
                                                                    'none',
                                                                errorMessage:
                                                                    'Required Field',
                                                                showStar:
                                                                    'flex',
                                                                inputBorderColor:
                                                                    'rgba(207,206,206,1)',
                                                                options: [
                                                                    1, 2, 3, 4,
                                                                    5,
                                                                ],
                                                                value: '',
                                                            },
                                                            price: {
                                                                fieldName:
                                                                    'Expected fare',
                                                                showErrorMessage:
                                                                    'none',
                                                                errorMessage:
                                                                    'Required Field',
                                                                showStar:
                                                                    'flex',
                                                                inputBorderColor:
                                                                    'rgba(207,206,206,1)',
                                                                value: '',
                                                            },
                                                            phone: {
                                                                fieldName:
                                                                    'Contact Number',
                                                                showErrorMessage:
                                                                    'none',
                                                                errorMessage:
                                                                    'Required Field',
                                                                showStar:
                                                                    'flex',
                                                                inputBorderColor:
                                                                    'rgba(207,206,206,1)',
                                                                countryCodes: [
                                                                    '+1',
                                                                    '+91',
                                                                ],
                                                                selectPlaceHolder:
                                                                    '+91',
                                                                value: '',
                                                            },
                                                            email: {
                                                                fieldName:
                                                                    'Email',
                                                                showErrorMessage:
                                                                    'none',
                                                                errorMessage:
                                                                    'Required Field',
                                                                showStar:
                                                                    'flex',
                                                                inputBorderColor:
                                                                    'rgba(207,206,206,1)',
                                                                value: '',
                                                            },
                                                        }
                                                }
                                            }
                                        }

                                        run()
                                    }}
                                >
                                    <span
                                        id="t18_893_7539"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 15,
                                            fontWeight: 600,
                                            color: 'rgba(255,255,255,1)',
                                            letterSpacing: 0,
                                            lineHeight: '18.15340805053711px',
                                            textAlign: 'left',
                                        }}
                                    >
                                        SAVE
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
export default Listmyride_2
