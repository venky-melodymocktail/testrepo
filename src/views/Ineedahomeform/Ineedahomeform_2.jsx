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
import MmTextArea from '../../components/MmTextArea.jsx'
import MmSelect from '../../components/MmSelect.jsx'
import MmAutoComplete from '../../components/MmAutoComplete.jsx'
import MmMultiSelect from '../../components/MmMultiSelect.jsx'
import SampleInput from '../../components/SampleInput.jsx'
import MmContactNumber from '../../components/MmContactNumber.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmTextAreaS from '../../components/MmTextAreaS.jsx'
import MmSelectS from '../../components/MmSelectS.jsx'
import MmAutoCompleteS from '../../components/MmAutoCompleteS.jsx'
import MmMultiSelectS from '../../components/MmMultiSelectS.jsx'
import MmInputS from '../../components/MmInputS.jsx'
import MmContactNumberS from '../../components/MmContactNumberS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'

const Ineedahomeform_2 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 900
            const element = document.getElementById('t18_1281_896')
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
                id="t18_1281_896"
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
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <div
                    id="t18_1281_897"
                    style={{
                        width: 900,
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
                    <MmHeaderMd
                        {...dl.changes.userDetail}
                        onChangeAddress={(val) => {
                            dl.functions.modalsPlugin.openModal(
                                'AddressPopupLg'
                            )
                        }}
                        onClickMenu={(val) => {
                            dl.functions.modalsPlugin.openModal('navigationMd')
                        }}
                        onLogIn={(val) => {
                            dl.functions.viewsPlugin.showView('login')
                        }}
                        onClickProfile={(val) => {
                            dl.functions.viewsPlugin.showView('profile')
                            var currentPath = dl.functions.common.getLastPath()
                            dl.functions.onLoadFunctions[currentPath]()
                        }}
                    />

                    <div
                        id="t18_1281_900"
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
                            id="t18_1281_901"
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
                                id="t18_1281_902"
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
                                {'Rooms/Roommates >> I need a home'}
                            </span>
                        </div>
                    </div>
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <p
                            style={{
                                color: 'rgb(186, 15, 23)',
                                fontSize: 22,
                                fontWeight: 600,
                                margin: 0,
                                marginTop: 20,
                            }}
                        >
                            * Your Posting will be automatically expired after 1
                            week
                        </p>
                        <p
                            style={{
                                color: 'rgb(186, 15, 23)',
                                fontSize: 22,
                                fontWeight: 600,
                                margin: 0,
                                marginTop: 10,
                            }}
                        >
                            * Caution: Beware of scam calls
                        </p>
                    </div>
                    <div
                        id="t18_1281_903"
                        style={{
                            width: 880,
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
                        }}
                    >
                        <div
                            id="t18_1281_904"
                            style={{
                                width: 870,
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingTop: 40,
                                paddingBottom: 30,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_1281_905"
                                style={{
                                    width: 850,
                                    borderRadius: 20,
                                    backgroundColor: 'rgba(248,246,246,1.00)',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    paddingLeft: 10,
                                    paddingRight: 10,
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
                                <div
                                    id="t18_1281_1036"
                                    style={{
                                        width: 763,
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
                                        marginTop: 0,
                                        marginBottom: 12.5,
                                    }}
                                >
                                    <span
                                        id="t18_1281_1037"
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
                                        Description
                                    </span>
                                </div>

                                <MmTextArea
                                    {...dl.changes.iNeedAhomeForm.title}
                                    onChange={(val) => {
                                        dl.changes.iNeedAhomeForm.title.value =
                                            val
                                        dl.changes.iNeedAhomeForm.title.showErrorMessage =
                                            'none'
                                        dl.changes.iNeedAhomeForm.title.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <MmTextArea
                                    {...dl.changes.iNeedAhomeForm.description}
                                    onChange={(val) => {
                                        dl.changes.iNeedAhomeForm.description.value =
                                            val
                                        dl.changes.iNeedAhomeForm.description.showErrorMessage =
                                            'none'
                                        dl.changes.iNeedAhomeForm.description.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <MmSelect
                                    {...dl.changes.iNeedAhomeForm.type}
                                    onChange={(val) => {
                                        dl.changes.iNeedAhomeForm.type.value =
                                            val
                                        dl.changes.iNeedAhomeForm.type.showErrorMessage =
                                            'none'
                                        dl.changes.iNeedAhomeForm.type.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <MmTextArea
                                    {...dl.changes.iNeedAhomeForm.address}
                                    onChange={(val) => {
                                        dl.changes.iNeedAhomeForm.address.value =
                                            val
                                        dl.changes.iNeedAhomeForm.address.showErrorMessage =
                                            'none'
                                        dl.changes.iNeedAhomeForm.address.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <MmAutoComplete
                                    {...dl.changes.iNeedAhomeForm.zipCode}
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
                                            dl.changes.iNeedAhomeForm.zipCode.options =
                                                zipcodeArr
                                        }
                                        run()
                                    }}
                                    onSelect={(val) => {
                                        var zipcode = val.split(',')
                                        dl.changes.iNeedAhomeForm.zipCode.value =
                                            zipcode[2]
                                        dl.changes.iNeedAhomeForm.zipCode.showErrorMessage =
                                            'none'
                                        dl.changes.iNeedAhomeForm.zipCode.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <MmSelect
                                    {...dl.changes.iNeedAhomeForm.leaseType}
                                    onChange={(val) => {
                                        dl.changes.iNeedAhomeForm.leaseType.value =
                                            val
                                        dl.changes.iNeedAhomeForm.leaseType.showErrorMessage =
                                            'none'
                                        dl.changes.iNeedAhomeForm.leaseType.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <MmSelect
                                    {...dl.changes.iNeedAhomeForm.neededBy}
                                    onChange={(val) => {
                                        dl.changes.iNeedAhomeForm.neededBy.value =
                                            val
                                        dl.changes.iNeedAhomeForm.neededBy.showErrorMessage =
                                            'none'
                                        dl.changes.iNeedAhomeForm.neededBy.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <MmSelect
                                    {...dl.changes.iNeedAhomeForm.noOfPeople}
                                    onChange={(val) => {
                                        dl.changes.iNeedAhomeForm.noOfPeople.value =
                                            val
                                        dl.changes.iNeedAhomeForm.noOfPeople.showErrorMessage =
                                            'none'
                                        dl.changes.iNeedAhomeForm.noOfPeople.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <MmMultiSelect
                                    {...dl.changes.iNeedAhomeForm.utilities}
                                    onChange={(val) => {
                                        dl.changes.iNeedAhomeForm.utilities.value =
                                            val
                                        dl.changes.iNeedAhomeForm.utilities.showErrorMessage =
                                            'none'
                                        dl.changes.iNeedAhomeForm.utilities.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <MmSelect
                                    {...dl.changes.iNeedAhomeForm.furnishing}
                                    onChange={(val) => {
                                        dl.changes.iNeedAhomeForm.furnishing.value =
                                            val
                                        dl.changes.iNeedAhomeForm.furnishing.showErrorMessage =
                                            'none'
                                        dl.changes.iNeedAhomeForm.furnishing.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <MmMultiSelect
                                    {...dl.changes.iNeedAhomeForm.amenities}
                                    onChange={(val) => {
                                        dl.changes.iNeedAhomeForm.amenities.value =
                                            val
                                        dl.changes.iNeedAhomeForm.amenities.showErrorMessage =
                                            'none'
                                        dl.changes.iNeedAhomeForm.amenities.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <MmSelect
                                    {...dl.changes.iNeedAhomeForm.smokingPolicy}
                                    onChange={(val) => {
                                        dl.changes.iNeedAhomeForm.smokingPolicy.value =
                                            val
                                        dl.changes.iNeedAhomeForm.smokingPolicy.showErrorMessage =
                                            'none'
                                        dl.changes.iNeedAhomeForm.smokingPolicy.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <MmSelect
                                    {...dl.changes.iNeedAhomeForm.petFriendly}
                                    onChange={(val) => {
                                        dl.changes.iNeedAhomeForm.petFriendly.value =
                                            val
                                        dl.changes.iNeedAhomeForm.petFriendly.showErrorMessage =
                                            'none'
                                        dl.changes.iNeedAhomeForm.petFriendly.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <div
                                    id="t18_1281_1056"
                                    style={{
                                        width: 840,
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
                                        id="t18_1281_1057"
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
                                        Contact details
                                    </span>
                                </div>

                                <SampleInput
                                    {...dl.changes.iNeedAhomeForm.name}
                                    onChange={(val) => {
                                        dl.changes.iNeedAhomeForm.name.value =
                                            val
                                        dl.changes.iNeedAhomeForm.name.showErrorMessage =
                                            'none'
                                        dl.changes.iNeedAhomeForm.name.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <SampleInput
                                    {...dl.changes.iNeedAhomeForm.email}
                                    onChange={(val) => {
                                        dl.changes.iNeedAhomeForm.email.value =
                                            val
                                        dl.changes.iNeedAhomeForm.email.showErrorMessage =
                                            'none'
                                        dl.changes.iNeedAhomeForm.email.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <MmContactNumber
                                    {...dl.changes.iNeedAhomeForm.phone}
                                    onChange={(val) => {
                                        dl.changes.iNeedAhomeForm.phone.value =
                                            val
                                        dl.changes.iNeedAhomeForm.phone.showErrorMessage =
                                            'none'
                                        dl.changes.iNeedAhomeForm.phone.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                    onChangeCountryCode={(val) => {
                                        dl.changes.iNeedAhomeForm.phone.selectPlaceHolder =
                                            val
                                        dl.changes.iNeedAhomeForm.phone.showErrorMessage =
                                            'none'
                                        dl.changes.iNeedAhomeForm.phone.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />
                            </div>

                            <div
                                id="t18_1281_1078"
                                style={{
                                    width: 850,
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
                                    marginTop: 20,
                                    marginBottom: 0,
                                }}
                            >
                                <div
                                    id="t18_1281_1079"
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
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        var run = async () => {
                                            var res =
                                                dl.functions.validateNeedAHomeForm()
                                            if (res == true) {
                                                dl.functions.modalsPlugin.openModal(
                                                    'loading'
                                                )
                                                var body = {
                                                    rentalType: 'Home',
                                                    title: dl.changes
                                                        .iNeedAhomeForm.title
                                                        .value,
                                                    description:
                                                        dl.changes
                                                            .iNeedAhomeForm
                                                            .description.value,
                                                    type: dl.changes
                                                        .iNeedAhomeForm.type
                                                        .value,
                                                    exactAddress:
                                                        dl.changes
                                                            .iNeedAhomeForm
                                                            .address.value,
                                                    zipCode:
                                                        dl.changes
                                                            .iNeedAhomeForm
                                                            .zipCode.value,
                                                    stayLeaseType:
                                                        dl.changes
                                                            .iNeedAhomeForm
                                                            .leaseType.value,
                                                    neededBy:
                                                        dl.changes
                                                            .iNeedAhomeForm
                                                            .neededBy.value,
                                                    utilities:
                                                        dl.changes
                                                            .iNeedAhomeForm
                                                            .utilities.value,
                                                    roomFurnishingRequired:
                                                        dl.changes
                                                            .iNeedAhomeForm
                                                            .furnishing.value,
                                                    amenities:
                                                        dl.changes
                                                            .iNeedAhomeForm
                                                            .amenities.value,
                                                    smokingPolicy:
                                                        dl.changes
                                                            .iNeedAhomeForm
                                                            .smokingPolicy
                                                            .value,
                                                    petFriendly:
                                                        dl.changes
                                                            .iNeedAhomeForm
                                                            .petFriendly.value,
                                                    name: dl.changes
                                                        .iNeedAhomeForm.name
                                                        .value,
                                                    email: dl.changes
                                                        .iNeedAhomeForm.email
                                                        .value,
                                                    contactNumber:
                                                        dl.changes
                                                            .iNeedAhomeForm
                                                            .phone
                                                            .selectPlaceHolder +
                                                        dl.changes
                                                            .iNeedAhomeForm
                                                            .phone.value,
                                                    noOfPeople:
                                                        dl.changes
                                                            .iNeedAhomeForm
                                                            .noOfPeople.value,
                                                }
                                                var params =
                                                    dl.functions.common.getParams()
                                                var homeId = params.homeId
                                                var mode = params.mode
                                                if (homeId) {
                                                    if (mode == 'edit') {
                                                        body['id'] = homeId
                                                        var res =
                                                            await dl.functions.updateNeedAHome(
                                                                body
                                                            )
                                                        if (res == 200) {
                                                            dl.functions.getneedAHomeListing(
                                                                '6',
                                                                '1'
                                                            )
                                                            dl.functions.viewsPlugin.showView(
                                                                'rentallistings'
                                                            )
                                                            // dl.changes.selectedListingrentelType="Home rentals"
                                                            dl.changes.selectedListingType =
                                                                'Wanted'
                                                            dl.functions.modalsPlugin.closeModal(
                                                                'loading'
                                                            )
                                                            window.toast(
                                                                'You have sucessfully Edited Your Listing'
                                                            )
                                                        }
                                                    }
                                                } else {
                                                    var res2 =
                                                        await dl.functions.createNeedAHome(
                                                            body
                                                        )
                                                    if (res2.status == 200) {
                                                        dl.functions.modalsPlugin.closeModal(
                                                            'loading'
                                                        )
                                                        window.toast(
                                                            'Your need for a Home has been Posted'
                                                        )
                                                    }
                                                }
                                            }
                                        }

                                        run()
                                    }}
                                >
                                    <span
                                        id="t18_1281_1080"
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
                    </div>

                    <MmFooterMd />
                </div>
            </div>
        </div>
    )
})
export default Ineedahomeform_2
