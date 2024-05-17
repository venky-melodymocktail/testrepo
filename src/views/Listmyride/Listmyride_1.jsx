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

const Listmyride_1 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_969_95')
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
                id="t18_969_95"
                style={{
                    width: 1440,
                    flexDirection: 'column',
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
                    id="t18_893_7401"
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
                        id="t18_893_7404"
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
                            id="t18_893_7405"
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
                                id="t18_893_7406"
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
                                    id="t18_893_7407"
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
                                        id="t18_893_7408"
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
                                            'Ride sharing >> I have a ride >> List my ride'
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        id="t18_893_7409"
                        style={{
                            width: 1420,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 40,
                            paddingBottom: 40,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_893_7410"
                            style={{
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
                                id="t18_1024_136"
                                style={{
                                    width: 749,
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
                                        // alert(val)
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
                                    {...dl.changes.listMyRideForm.noOfPeople}
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
                                id="t18_893_7468"
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
                                    marginTop: 20,
                                    marginBottom: 0,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    dl.functions.submitListMyRide()
                                }}
                            >
                                <span
                                    id="t18_893_7469"
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
                                    SAVE
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
export default Listmyride_1
