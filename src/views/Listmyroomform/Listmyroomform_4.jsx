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
import MmTextArea from '../../components/MmTextArea.jsx'
import MmAutoComplete from '../../components/MmAutoComplete.jsx'
import MmDatePicker from '../../components/MmDatePicker.jsx'
import SampleInput from '../../components/SampleInput.jsx'
import MmMultiSelect from '../../components/MmMultiSelect.jsx'
import MmContactNumber from '../../components/MmContactNumber.jsx'
import MmPhotoUpload from '../../components/MmPhotoUpload.jsx'
import MmUploadedImage from '../../components/MmUploadedImage.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmSelectS from '../../components/MmSelectS.jsx'
import MmTextAreaS from '../../components/MmTextAreaS.jsx'
import MmAutoCompleteS from '../../components/MmAutoCompleteS.jsx'
import MmDatePickerS from '../../components/MmDatePickerS.jsx'
import MmInputS from '../../components/MmInputS.jsx'
import MmMultiSelectS from '../../components/MmMultiSelectS.jsx'
import MmContactNumberS from '../../components/MmContactNumberS.jsx'
import MmPhotoUploadS from '../../components/MmPhotoUploadS.jsx'
import MmUploadedPhotoS from '../../components/MmUploadedPhotoS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'

const Listmyroomform_4 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 400
            const element = document.getElementById('t18_1245_1796')
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
                id="t18_1245_1796"
                style={{
                    width: 400,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    paddingBottom: 5,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginLeft: 10,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <div
                    id="t18_1038_4539"
                    style={{
                        backgroundColor: 'rgba(255,255,255,1.00)',
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
                        id="t18_1038_4540"
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
                        <MmHeaderXs
                            {...dl.changes.userDetail}
                            onChangeAddress={(val) => {
                                dl.functions.modalsPlugin.openModal(
                                    'AddressPopupS'
                                )
                            }}
                            onLogIn={(val) => {
                                dl.functions.viewsPlugin.showView('login')
                            }}
                            onClickProfile={(val) => {
                                // dl.functions.viewsPlugin.showView("profile")
                                // var currentPath = dl.functions.common.getLastPath()
                                // dl.functions.onLoadFunctions[currentPath]()
                                // var screens = [
                                //     "rentallistings",
                                //     "ridelistings",
                                //     "travelcompanionlisting",
                                //     "questionlistings",
                                //     "studyabroadbookings",
                                //     "visabookings",
                                //     "rentalbookmarks",
                                //     "ridebookmarks",
                                //     "travelcompanionbookmarks",
                                //     "moviebookmarks",
                                //     "blogbookmarks",
                                //     "questionbookmarks",
                                // ]
                                // var currentPath = dl.functions.common.getLastPath()
                                // for(var i=0; i<screens.length; i++){
                                //     if(screens[i]==currentPath){
                                //     	val.stopPropagation();

                                //     }
                                // }

                                dl.functions.modalsPlugin.openModal(
                                    'navigationXs'
                                )
                            }}
                        />

                        <div
                            id="t18_1038_4543"
                            style={{
                                height: 25,
                                width: 360,
                                backgroundColor: 'rgba(248,246,246,1.00)',
                                flexDirection: 'row',
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
                                id="t18_1038_4544"
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
                                    id="t18_1038_4545"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 8,
                                        fontWeight: 500,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '9.681818008422852px',
                                        textAlign: 'left',
                                    }}
                                >
                                    {
                                        'Room/ Roommates >> I have a Room >> List my Room'
                                    }
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
                                    fontSize: 14,
                                    fontWeight: 600,
                                    margin: 0,
                                    marginTop: 20,
                                    textAlign: 'center',
                                    width: '85%',
                                }}
                            >
                                * Your Posting will be automatically expired
                                after 1 week
                            </p>
                            <p
                                style={{
                                    color: 'rgb(186, 15, 23)',
                                    fontSize: 14,
                                    fontWeight: 600,
                                    margin: 0,
                                    marginTop: 10,
                                    textAlign: 'center',
                                    width: '85%',
                                }}
                            >
                                * Caution: Beware of scam calls
                            </p>
                        </div>
                        <div
                            id="t18_1038_4546"
                            style={{
                                width: 380,
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
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_1038_4547"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    paddingTop: 10,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                }}
                            >
                                <div
                                    id="t18_1038_4548"
                                    style={{
                                        width: 344,
                                        borderRadius: 12,
                                        backgroundColor:
                                            'rgba(248,246,246,1.00)',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        paddingLeft: 8,
                                        paddingRight: 8,
                                        paddingTop: 30,
                                        paddingBottom: 30,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 1,
                                        borderColor: 'rgba(207,206,206,1)',
                                        borderStyle: 'solid',
                                        marginTop: 0,
                                        marginBottom: 14.5,
                                    }}
                                >
                                    <MmSelectS
                                        {...dl.changes.iHaveAroomForm.type}
                                        onChange={(val) => {
                                            dl.changes.iHaveAroomForm.type.value =
                                                val
                                            dl.changes.iHaveAroomForm.type.showErrorMessage =
                                                'none'
                                            dl.changes.iHaveAroomForm.type.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmTextAreaS
                                        {...dl.changes.iHaveAroomForm.address}
                                        onChange={(val) => {
                                            dl.changes.iHaveAroomForm.address.value =
                                                val
                                            dl.changes.iHaveAroomForm.address.showErrorMessage =
                                                'none'
                                            dl.changes.iHaveAroomForm.address.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmAutoCompleteS
                                        {...dl.changes.iHaveAroomForm.zipCode}
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
                                                dl.changes.iHaveAroomForm.zipCode.options =
                                                    zipcodeArr
                                            }
                                            run()
                                        }}
                                        onSelect={(val) => {
                                            var zipcode = val.split(',')
                                            dl.changes.iHaveAroomForm.zipCode.value =
                                                zipcode[2]
                                            dl.changes.iHaveAroomForm.zipCode.showErrorMessage =
                                                'none'
                                            dl.changes.iHaveAroomForm.zipCode.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmSelectS
                                        {...dl.changes.iHaveAroomForm.leaseType}
                                        onChange={(val) => {
                                            dl.changes.iHaveAroomForm.leaseType.value =
                                                val
                                            dl.changes.iHaveAroomForm.leaseType.showErrorMessage =
                                                'none'
                                            dl.changes.iHaveAroomForm.leaseType.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmDatePickerS
                                        {...dl.changes.iHaveAroomForm
                                            .availableFrom}
                                        onChange={(val) => {
                                            dl.changes.iHaveAroomForm.availableFrom.value =
                                                val
                                            dl.changes.iHaveAroomForm.availableFrom.showErrorMessage =
                                                'none'
                                            dl.changes.iHaveAroomForm.availableFrom.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmDatePickerS
                                        {...dl.changes.iHaveAroomForm
                                            .availableTo}
                                        onChange={(val) => {
                                            dl.changes.iHaveAroomForm.availableTo.value =
                                                val
                                            dl.changes.iHaveAroomForm.availableTo.showErrorMessage =
                                                'none'
                                            dl.changes.iHaveAroomForm.availableTo.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmSelectS
                                        {...dl.changes.iHaveAroomForm
                                            .noOfPeople}
                                        onChange={(val) => {
                                            dl.changes.iHaveAroomForm.noOfPeople.value =
                                                val
                                            dl.changes.iHaveAroomForm.noOfPeople.showErrorMessage =
                                                'none'
                                            dl.changes.iHaveAroomForm.noOfPeople.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmSelectS
                                        {...dl.changes.iHaveAroomForm
                                            .attatchedBath}
                                        onChange={(val) => {
                                            dl.changes.iHaveAroomForm.attatchedBath.value =
                                                val
                                            dl.changes.iHaveAroomForm.attatchedBath.showErrorMessage =
                                                'none'
                                            dl.changes.iHaveAroomForm.attatchedBath.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmSelectS
                                        {...dl.changes.iHaveAroomForm.gender}
                                        onChange={(val) => {
                                            dl.changes.iHaveAroomForm.gender.value =
                                                val
                                            dl.changes.iHaveAroomForm.gender.showErrorMessage =
                                                'none'
                                            dl.changes.iHaveAroomForm.gender.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <div
                                        id="t18_1038_4614"
                                        style={{
                                            width: 308,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 12.5,
                                            marginBottom: 12.5,
                                        }}
                                    >
                                        <MmInputS
                                            {...dl.changes.iHaveAroomForm.rent}
                                            onChange={(val) => {
                                                dl.changes.iHaveAroomForm.rent.value =
                                                    String(val)
                                                dl.changes.iHaveAroomForm.rent.showErrorMessage =
                                                    'none'
                                                dl.changes.iHaveAroomForm.rent.inputBorderColor =
                                                    'rgba(207,206,206,1)'
                                            }}
                                        />

                                        <div
                                            id="t18_1038_4621"
                                            style={{
                                                width: 86,
                                                flexDirection: 'row',
                                                alignItems: 'center',
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
                                                id="t18_1038_4622"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 8,
                                                    fontWeight: 500,
                                                    color: 'rgba(113,113,113,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '9.681818008422852px',
                                                    textAlign: 'left',
                                                    marginLeft: 0,
                                                    marginRight: 2,
                                                }}
                                            >
                                                Negotiable
                                            </span>

                                            <MaterialSwitch
                                                value={
                                                    dl.changes.iHaveAroomForm
                                                        .negotiable.value
                                                }
                                                backgroundColor={
                                                    'rgba(186,15,23,1.00)'
                                                }
                                                onChange={(val) => {
                                                    dl.changes.iHaveAroomForm.negotiable.value =
                                                        val
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <MmSelectS
                                        {...dl.changes.iHaveAroomForm.priceMode}
                                        onChange={(val) => {
                                            dl.changes.iHaveAroomForm.priceMode.value =
                                                val
                                            dl.changes.iHaveAroomForm.priceMode.showErrorMessage =
                                                'none'
                                            dl.changes.iHaveAroomForm.priceMode.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmMultiSelectS
                                        {...dl.changes.iHaveAroomForm.utilities}
                                        onChange={(val) => {
                                            dl.changes.iHaveAroomForm.utilities.value =
                                                val
                                            dl.changes.iHaveAroomForm.utilities.showErrorMessage =
                                                'none'
                                            dl.changes.iHaveAroomForm.utilities.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmSelectS
                                        {...dl.changes.iHaveAroomForm
                                            .furnishing}
                                        onChange={(val) => {
                                            dl.changes.iHaveAroomForm.furnishing.value =
                                                val
                                            dl.changes.iHaveAroomForm.furnishing.showErrorMessage =
                                                'none'
                                            dl.changes.iHaveAroomForm.furnishing.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmMultiSelectS
                                        {...dl.changes.iHaveAroomForm.amenities}
                                        onChange={(val) => {
                                            dl.changes.iHaveAroomForm.amenities.value =
                                                val
                                            dl.changes.iHaveAroomForm.amenities.showErrorMessage =
                                                'none'
                                            dl.changes.iHaveAroomForm.amenities.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <div
                                        id="t18_1038_4657"
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
                                        <MmSelectS
                                            {...dl.changes.iHaveAroomForm
                                                .vegPreference}
                                            onChange={(val) => {
                                                dl.changes.iHaveAroomForm.vegPreference.value =
                                                    val
                                                dl.changes.iHaveAroomForm.vegPreference.showErrorMessage =
                                                    'none'
                                                dl.changes.iHaveAroomForm.vegPreference.inputBorderColor =
                                                    'rgba(207,206,206,1)'
                                            }}
                                        />

                                        <MmSelectS
                                            {...dl.changes.iHaveAroomForm
                                                .smokingPolicy}
                                            onChange={(val) => {
                                                dl.changes.iHaveAroomForm.smokingPolicy.value =
                                                    val
                                                dl.changes.iHaveAroomForm.smokingPolicy.showErrorMessage =
                                                    'none'
                                                dl.changes.iHaveAroomForm.smokingPolicy.inputBorderColor =
                                                    'rgba(207,206,206,1)'
                                            }}
                                        />
                                    </div>

                                    <MmSelectS
                                        {...dl.changes.iHaveAroomForm
                                            .petFriendly}
                                        onChange={(val) => {
                                            dl.changes.iHaveAroomForm.petFriendly.value =
                                                val
                                            dl.changes.iHaveAroomForm.petFriendly.showErrorMessage =
                                                'none'
                                            dl.changes.iHaveAroomForm.petFriendly.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <div
                                        id="t18_1038_4679"
                                        style={{
                                            width: 324,
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
                                            id="t18_1038_4680"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 13,
                                                fontWeight: 500,
                                                color: 'rgba(28,167,139,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '15.732954025268555px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            About you (Optional)
                                        </span>
                                    </div>

                                    <div
                                        id="t18_1038_4681"
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
                                        <MmInputS
                                            {...dl.changes.iHaveAroomForm.age}
                                            onChange={(val) => {
                                                dl.changes.iHaveAroomForm.age.value =
                                                    val
                                                dl.changes.iHaveAroomForm.age.showErrorMessage =
                                                    'none'
                                                dl.changes.iHaveAroomForm.age.inputBorderColor =
                                                    'rgba(207,206,206,1)'
                                            }}
                                        />

                                        <MmInputS
                                            {...dl.changes.iHaveAroomForm
                                                .occupation}
                                            onChange={(val) => {
                                                dl.changes.iHaveAroomForm.occupation.value =
                                                    val
                                                dl.changes.iHaveAroomForm.occupation.showErrorMessage =
                                                    'none'
                                                dl.changes.iHaveAroomForm.occupation.inputBorderColor =
                                                    'rgba(207,206,206,1)'
                                            }}
                                        />
                                    </div>

                                    <MmMultiSelectS
                                        {...dl.changes.iHaveAroomForm.languages}
                                        onChange={(val) => {
                                            dl.changes.iHaveAroomForm.languages.value =
                                                val
                                            dl.changes.iHaveAroomForm.languages.showErrorMessage =
                                                'none'
                                            dl.changes.iHaveAroomForm.languages.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <div
                                        id="t18_1038_4699"
                                        style={{
                                            height: 6,
                                            width: 324,
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
                                            id="t18_1038_4700"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 13,
                                                fontWeight: 500,
                                                color: 'rgba(28,167,139,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '15.732954025268555px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            Description
                                        </span>
                                    </div>

                                    <MmTextAreaS
                                        {...dl.changes.iHaveAroomForm.title}
                                        onChange={(val) => {
                                            dl.changes.iHaveAroomForm.title.value =
                                                val
                                            dl.changes.iHaveAroomForm.title.showErrorMessage =
                                                'none'
                                            dl.changes.iHaveAroomForm.title.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmTextAreaS
                                        {...dl.changes.iHaveAroomForm
                                            .description}
                                        onChange={(val) => {
                                            dl.changes.iHaveAroomForm.description.value =
                                                val
                                            dl.changes.iHaveAroomForm.description.showErrorMessage =
                                                'none'
                                            dl.changes.iHaveAroomForm.description.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <div
                                        id="t18_1038_4719"
                                        style={{
                                            width: 324,
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
                                            id="t18_1038_4720"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 13,
                                                fontWeight: 500,
                                                color: 'rgba(28,167,139,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '15.732954025268555px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            Contact details
                                        </span>
                                    </div>

                                    <MmInputS
                                        {...dl.changes.iHaveAroomForm.name}
                                        onChange={(val) => {
                                            dl.changes.iHaveAroomForm.name.value =
                                                val
                                            dl.changes.iHaveAroomForm.name.showErrorMessage =
                                                'none'
                                            dl.changes.iHaveAroomForm.name.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmInputS
                                        {...dl.changes.iHaveAroomForm.email}
                                        onChange={(val) => {
                                            dl.changes.iHaveAroomForm.email.value =
                                                val
                                            dl.changes.iHaveAroomForm.email.showErrorMessage =
                                                'none'
                                            dl.changes.iHaveAroomForm.email.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmContactNumberS
                                        {...dl.changes.iHaveAroomForm.phone}
                                        onChange={(val) => {
                                            dl.changes.iHaveAroomForm.phone.value =
                                                val
                                            dl.changes.iHaveAroomForm.phone.showErrorMessage =
                                                'none'
                                            dl.changes.iHaveAroomForm.phone.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                        onChangeCountryCode={(val) => {
                                            dl.changes.iHaveAroomForm.phone.selectPlaceHolder =
                                                val
                                            dl.changes.iHaveAroomForm.phone.errorMessage =
                                                'none'
                                            dl.changes.iHaveAroomForm.phone.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <div
                                        id="t18_1245_1794"
                                        style={{
                                            width: 324,
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
                                            id="t18_1245_1795"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 13,
                                                fontWeight: 500,
                                                color: 'rgba(28,167,139,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '15.732954025268555px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            Attach photos
                                        </span>
                                    </div>

                                    <MmPhotoUploadS
                                        {...dl.changes.iHaveAroomForm.photos}
                                        onImageSelected={(val) => {
                                            let images =
                                                dl.changes.iHaveAroomForm.photos
                                                    .value

                                            if (images == '') {
                                                images = []
                                            }
                                            for (
                                                var i = 0;
                                                i < val.length;
                                                i++
                                            ) {
                                                var obj = {
                                                    file: val[i],
                                                    imgUrl: `url(${URL.createObjectURL(val[i])})`,
                                                }
                                                images.push(obj)
                                            }
                                            // alert(val.length)
                                            dl.changes.iHaveAroomForm.photos.value =
                                                images
                                        }}
                                    />

                                    <div
                                        id="t18_1038_4746"
                                        style={{
                                            width: 356,
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 12.5,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            {dl.changes.iHaveAroomForm.photos.value.map(
                                                (item, index) => {
                                                    return (
                                                        <div>
                                                            <MmUploadedPhotoS
                                                                {...item}
                                                                {...dl.changes
                                                                    .iHaveAroomForm
                                                                    .photos
                                                                    .value}
                                                                onDelete={(
                                                                    val
                                                                ) => {
                                                                    dl.changes.iHaveAroomForm.photos.value.splice(
                                                                        index,
                                                                        1
                                                                    )
                                                                }}
                                                            />
                                                        </div>
                                                    )
                                                }
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_1038_4757"
                                    style={{
                                        width: 93,
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
                                        marginTop: 14.5,
                                        marginBottom: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        dl.functions.submitListMyRoomForm()
                                    }}
                                >
                                    <span
                                        id="t18_1038_4758"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 14,
                                            fontWeight: 600,
                                            color: 'rgba(255,255,255,1)',
                                            letterSpacing: 0,
                                            lineHeight: '16.94318199157715px',
                                            textAlign: 'left',
                                        }}
                                    >
                                        Submit
                                    </span>
                                </div>
                            </div>
                        </div>

                        <MmFooterXs />
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Listmyroomform_4
