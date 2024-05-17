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
import MmDatePicker from '../../components/MmDatePicker.jsx'
import MmSelect from '../../components/MmSelect.jsx'
import MmAutoComplete from '../../components/MmAutoComplete.jsx'
import SampleInput from '../../components/SampleInput.jsx'
import MmContactNumber from '../../components/MmContactNumber.jsx'
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

const Ineedaride_1 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_969_91')
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
                id="t18_969_91"
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
                    id="t18_893_7118"
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
                        id="t18_893_7119"
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
                            id="t18_893_7122"
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
                                id="t18_893_7123"
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
                                    id="t18_893_7124"
                                    style={{
                                        height: 64,
                                        width: 1380,
                                        backgroundColor:
                                            'rgba(248,246,246,1.00)',
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
                                        id="t18_893_7125"
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
                                            id="t18_893_7126"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 16,
                                                fontWeight: 500,
                                                color: 'rgba(113,113,113,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '19.363636016845703px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            {'Ride sharing >> I need a ride'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            id="t18_893_7127"
                            style={{
                                width: 1420,
                                flexDirection: 'row',
                                alignItems: 'flex-start',
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
                                id="t18_893_7128"
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
                                    id="t18_893_7129"
                                    style={{
                                        width: 749,
                                        borderRadius: 20,
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
                                        {...dl.changes.needARideForm.date}
                                        onChange={(val) => {
                                            dl.changes.needARideForm.date.value =
                                                val
                                            dl.changes.needARideForm.date.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                            dl.changes.needARideForm.date.showErrorMessage =
                                                'none'
                                        }}
                                    />

                                    <MmSelect
                                        {...dl.changes.needARideForm.time}
                                        onChange={(val) => {
                                            dl.changes.needARideForm.time.value =
                                                val
                                            dl.changes.needARideForm.time.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                            dl.changes.needARideForm.time.showErrorMessage =
                                                'none'
                                        }}
                                    />

                                    <MmAutoComplete
                                        {...dl.changes.needARideForm.from}
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
                                                dl.changes.needARideForm.from.options =
                                                    zipcodeArr
                                            }
                                            run()
                                            // alert(val)
                                        }}
                                        onSelect={(val) => {
                                            var zipcode = val.split(',')
                                            dl.changes.needARideForm.from.value =
                                                zipcode[2]
                                            dl.changes.needARideForm.from.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                            dl.changes.needARideForm.from.showErrorMessage =
                                                'none'
                                        }}
                                    />

                                    <MmAutoComplete
                                        {...dl.changes.needARideForm.to}
                                        onChange={(val) => {
                                            const run = async () => {
                                                var searchtext = val
                                                var zipcodeArr = []
                                                var res =
                                                    await dl.functions.searchZipCode(
                                                        val
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
                                                dl.changes.needARideForm.to.options =
                                                    zipcodeArr
                                            }
                                            run()
                                            // alert(val)
                                        }}
                                        onSelect={(val) => {
                                            var zipcode = val.split(',')
                                            dl.changes.needARideForm.to.value =
                                                zipcode[2]
                                            dl.changes.needARideForm.to.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                            dl.changes.needARideForm.to.showErrorMessage =
                                                'none'
                                        }}
                                    />

                                    <MmSelect
                                        {...dl.changes.needARideForm.noOfPeople}
                                        onChange={(val) => {
                                            dl.changes.needARideForm.noOfPeople.value =
                                                val
                                            dl.changes.needARideForm.noOfPeople.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                            dl.changes.needARideForm.noOfPeople.showErrorMessage =
                                                'none'
                                        }}
                                    />

                                    <SampleInput
                                        {...dl.changes.needARideForm.price}
                                        onChange={(val) => {
                                            dl.changes.needARideForm.price.value =
                                                val
                                            dl.changes.needARideForm.price.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                            dl.changes.needARideForm.price.showErrorMessage =
                                                'none'
                                        }}
                                    />

                                    <MmContactNumber
                                        {...dl.changes.needARideForm.phone}
                                        onChange={(val) => {
                                            dl.changes.needARideForm.phone.value =
                                                val
                                            dl.changes.needARideForm.phone.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                            dl.changes.needARideForm.phone.showErrorMessage =
                                                'none'
                                        }}
                                        onChangeCountryCode={(val) => {
                                            dl.changes.needARideForm.phone.selectPlaceHolder =
                                                val
                                            dl.changes.needARideForm.phone.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <SampleInput
                                        {...dl.changes.needARideForm.email}
                                        onChange={(val) => {
                                            dl.changes.needARideForm.email.value =
                                                val
                                            dl.changes.needARideForm.email.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                            dl.changes.needARideForm.email.showErrorMessage =
                                                'none'
                                        }}
                                    />
                                </div>

                                <div
                                    id="t18_893_7186"
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
                                        dl.functions.submitNeedARide()
                                    }}
                                >
                                    <span
                                        id="t18_893_7187"
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
        </div>
    )
})
export default Ineedaride_1
