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
import MmMultiSelect from '../../components/MmMultiSelect.jsx'
import SampleInput from '../../components/SampleInput.jsx'
import MmContactNumber from '../../components/MmContactNumber.jsx'
import MmPhotoUpload from '../../components/MmPhotoUpload.jsx'
import MmUploadedImage from '../../components/MmUploadedImage.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmSelectS from '../../components/MmSelectS.jsx'
import MmTextAreaS from '../../components/MmTextAreaS.jsx'
import MmAutoCompleteS from '../../components/MmAutoCompleteS.jsx'
import MmDatePickerS from '../../components/MmDatePickerS.jsx'
import MmMultiSelectS from '../../components/MmMultiSelectS.jsx'
import MmInputS from '../../components/MmInputS.jsx'
import MmContactNumberS from '../../components/MmContactNumberS.jsx'
import MmPhotoUploadS from '../../components/MmPhotoUploadS.jsx'
import MmUploadedPhotoS from '../../components/MmUploadedPhotoS.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'

const Listmyhomeform_2 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 900
            const element = document.getElementById('t18_1279_29')
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
                id="t18_1279_29"
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
                    id="t18_1279_30"
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
                        id="t18_1279_33"
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
                            id="t18_1279_34"
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
                                id="t18_1279_35"
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
                                    'Rooms/Roommates >> I have a home >> List my home'
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
                        id="t18_1279_36"
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
                            id="t18_1279_37"
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
                                id="t18_1279_38"
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
                                <MmSelect
                                    {...dl.changes.iHaveAhomeForm.type}
                                    onChange={(val) => {
                                        dl.changes.iHaveAhomeForm.type.value =
                                            val
                                        dl.changes.iHaveAhomeForm.type.showErrorMessage =
                                            'none'
                                        dl.changes.iHaveAhomeForm.type.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <MmTextArea
                                    {...dl.changes.iHaveAhomeForm.address}
                                    onChange={(val) => {
                                        dl.changes.iHaveAhomeForm.address.value =
                                            val
                                        dl.changes.iHaveAhomeForm.address.showErrorMessage =
                                            'none'
                                        dl.changes.iHaveAhomeForm.address.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <MmAutoComplete
                                    {...dl.changes.iHaveAhomeForm.zipCode}
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
                                            dl.changes.iHaveAhomeForm.zipCode.options =
                                                zipcodeArr
                                        }
                                        run()
                                    }}
                                    onSelect={(val) => {
                                        var zipcode = val.split(',')
                                        dl.changes.iHaveAhomeForm.zipCode.value =
                                            zipcode[2]
                                        dl.changes.iHaveAhomeForm.zipCode.showErrorMessage =
                                            'none'
                                        dl.changes.iHaveAhomeForm.zipCode.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <MmSelect
                                    {...dl.changes.iHaveAhomeForm.leaseType}
                                    onChange={(val) => {
                                        dl.changes.iHaveAhomeForm.leaseType.value =
                                            val
                                        dl.changes.iHaveAhomeForm.leaseType.showErrorMessage =
                                            'none'
                                        dl.changes.iHaveAhomeForm.leaseType.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <MmDatePicker
                                    {...dl.changes.iHaveAhomeForm.availableFrom}
                                    onChange={(val) => {
                                        dl.changes.iHaveAhomeForm.availableFrom.value =
                                            val
                                        dl.changes.iHaveAhomeForm.availableFrom.showErrorMessage =
                                            'none'
                                        dl.changes.iHaveAhomeForm.availableFrom.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <MmDatePicker
                                    {...dl.changes.iHaveAhomeForm.availableTo}
                                    onChange={(val) => {
                                        dl.changes.iHaveAhomeForm.availableTo.value =
                                            val
                                        dl.changes.iHaveAhomeForm.availableTo.showErrorMessage =
                                            'none'
                                        dl.changes.iHaveAhomeForm.availableTo.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <SampleInput
                                    {...dl.changes.iHaveAhomeForm.preferredRent}
                                    onChange={(val) => {
                                        dl.changes.iHaveAhomeForm.preferredRent.value =
                                            String(val)
                                        dl.changes.iHaveAhomeForm.preferredRent.showErrorMessage =
                                            'none'
                                        dl.changes.iHaveAhomeForm.preferredRent.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <MmSelect
                                    {...dl.changes.iHaveAhomeForm.priceMode}
                                    onChange={(val) => {
                                        dl.changes.iHaveAhomeForm.priceMode.value =
                                            val
                                        dl.changes.iHaveAhomeForm.priceMode.showErrorMessage =
                                            'none'
                                        dl.changes.iHaveAhomeForm.priceMode.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <MmMultiSelect
                                    {...dl.changes.iHaveAhomeForm.utilities}
                                    onChange={(val) => {
                                        dl.changes.iHaveAhomeForm.utilities.value =
                                            val
                                        dl.changes.iHaveAhomeForm.utilities.showErrorMessage =
                                            'none'
                                        dl.changes.iHaveAhomeForm.utilities.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <MmSelect
                                    {...dl.changes.iHaveAhomeForm.furnishing}
                                    onChange={(val) => {
                                        dl.changes.iHaveAhomeForm.furnishing.value =
                                            val
                                        dl.changes.iHaveAhomeForm.furnishing.showErrorMessage =
                                            'none'
                                        dl.changes.iHaveAhomeForm.furnishing.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <MmMultiSelect
                                    {...dl.changes.iHaveAhomeForm.amenities}
                                    onChange={(val) => {
                                        dl.changes.iHaveAhomeForm.amenities.value =
                                            val
                                        dl.changes.iHaveAhomeForm.amenities.showErrorMessage =
                                            'none'
                                        dl.changes.iHaveAhomeForm.amenities.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <MmSelect
                                    {...dl.changes.iHaveAhomeForm.smokingPolicy}
                                    onChange={(val) => {
                                        dl.changes.iHaveAhomeForm.smokingPolicy.value =
                                            val
                                        dl.changes.iHaveAhomeForm.smokingPolicy.showErrorMessage =
                                            'none'
                                        dl.changes.iHaveAhomeForm.smokingPolicy.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <MmSelect
                                    {...dl.changes.iHaveAhomeForm.petFriendly}
                                    onChange={(val) => {
                                        dl.changes.iHaveAhomeForm.petFriendly.value =
                                            val
                                        dl.changes.iHaveAhomeForm.petFriendly.showErrorMessage =
                                            'none'
                                        dl.changes.iHaveAhomeForm.petFriendly.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <div
                                    id="t18_1279_171"
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
                                        id="t18_1279_172"
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
                                        About you (Optional)
                                    </span>
                                </div>

                                <SampleInput
                                    {...dl.changes.iHaveAhomeForm.age}
                                    onChange={(val) => {
                                        dl.changes.iHaveAhomeForm.age.value =
                                            val
                                        dl.changes.iHaveAhomeForm.age.showErrorMessage =
                                            'none'
                                        dl.changes.iHaveAhomeForm.age.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <SampleInput
                                    {...dl.changes.iHaveAhomeForm.occupation}
                                    onChange={(val) => {
                                        dl.changes.iHaveAhomeForm.occupation.value =
                                            val
                                        dl.changes.iHaveAhomeForm.occupation.showErrorMessage =
                                            'none'
                                        dl.changes.iHaveAhomeForm.occupation.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <div
                                    id="t18_1279_190"
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
                                        marginTop: 12.5,
                                        marginBottom: 12.5,
                                    }}
                                >
                                    <span
                                        id="t18_1279_191"
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
                                    {...dl.changes.iHaveAhomeForm.title}
                                    onChange={(val) => {
                                        dl.changes.iHaveAhomeForm.title.value =
                                            val
                                        dl.changes.iHaveAhomeForm.title.showErrorMessage =
                                            'none'
                                        dl.changes.iHaveAhomeForm.title.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <MmTextArea
                                    {...dl.changes.iHaveAhomeForm.description}
                                    onChange={(val) => {
                                        dl.changes.iHaveAhomeForm.description.value =
                                            val
                                        dl.changes.iHaveAhomeForm.description.showErrorMessage =
                                            'none'
                                        dl.changes.iHaveAhomeForm.description.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <div
                                    id="t18_1279_210"
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
                                        id="t18_1279_211"
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
                                    {...dl.changes.iHaveAhomeForm.name}
                                    onChange={(val) => {
                                        dl.changes.iHaveAhomeForm.name.value =
                                            val
                                        dl.changes.iHaveAhomeForm.name.showErrorMessage =
                                            'none'
                                        dl.changes.iHaveAhomeForm.name.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <SampleInput
                                    {...dl.changes.iHaveAhomeForm.email}
                                    onChange={(val) => {
                                        dl.changes.iHaveAhomeForm.email.value =
                                            val
                                        dl.changes.iHaveAhomeForm.email.showErrorMessage =
                                            'none'
                                        dl.changes.iHaveAhomeForm.email.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <MmContactNumber
                                    {...dl.changes.iHaveAhomeForm.phone}
                                    onChange={(val) => {
                                        dl.changes.iHaveAhomeForm.phone.value =
                                            val
                                        dl.changes.iHaveAhomeForm.phone.showErrorMessage =
                                            'none'
                                        dl.changes.iHaveAhomeForm.phone.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                    onChangeCountryCode={(val) => {
                                        dl.changes.iHaveAhomeForm.phone.selectPlaceHolder =
                                            val
                                        dl.changes.iHaveAhomeForm.phone.showErrorMessage =
                                            'none'
                                        dl.changes.iHaveAhomeForm.phone.inputBorderColor =
                                            'rgba(207,206,206,1)'
                                    }}
                                />

                                <div
                                    id="t18_1279_232"
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
                                        id="t18_1279_233"
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
                                        Attach photos
                                    </span>
                                </div>

                                <MmPhotoUpload
                                    {...dl.changes.iHaveAhomeForm.photos}
                                    onImageSelected={(val) => {
                                        let images =
                                            dl.changes.iHaveAhomeForm.photos
                                                .value

                                        if (images == '') {
                                            images = []
                                        }
                                        for (var i = 0; i < val.length; i++) {
                                            var obj = {
                                                file: val[i],
                                                imgUrl: `url(${URL.createObjectURL(val[i])})`,
                                            }
                                            images.push(obj)
                                        }
                                        // alert(val.length)
                                        dl.changes.iHaveAhomeForm.photos.value =
                                            images
                                    }}
                                />

                                <div
                                    id="t18_1279_245"
                                    style={{
                                        width: 614,
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 230,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 12.5,
                                        marginBottom: 0,
                                    }}
                                >
                                    <div
                                        id="t18_1279_246"
                                        style={{
                                            width: 614,
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
                                            style={{
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            {dl.changes.iHaveAhomeForm.photos.value.map(
                                                (item, index) => {
                                                    return (
                                                        <div>
                                                            <MmUploadedImage
                                                                {...item}
                                                                {...dl.changes
                                                                    .iHaveAhomeForm
                                                                    .photos
                                                                    .value}
                                                                onDelete={(
                                                                    val
                                                                ) => {
                                                                    dl.changes.iHaveAhomeForm.photos.value.splice(
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
                            </div>

                            <div
                                id="t18_1279_252"
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
                                    id="t18_1279_253"
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
                                        dl.functions.submitHomeForm()
                                        // var run = async() => {
                                        //     var res = dl.functions.validateHomeForm()
                                        //     if(res==true){

                                        //         var body = {
                                        //         "type":dl.changes.iHaveAhomeForm.type.value,
                                        //         "exactAddress":dl.changes.iHaveAhomeForm.address.value,
                                        //         "zipCode":dl.changes.iHaveAhomeForm.zipCode.value,
                                        //         "stayLeaseType":dl.changes.iHaveAhomeForm.leaseType.value,
                                        //         "availabilityFrom":dl.changes.iHaveAhomeForm.availableFrom.value,
                                        //         "availabilityTo":dl.changes.iHaveAhomeForm.availableTo.value,
                                        //         "noOfPeople":dl.changes.iHaveAhomeForm.type.value,
                                        //         "utilities":dl.changes.iHaveAhomeForm.utilities.value,
                                        //         "roomFurnishingRequired":dl.changes.iHaveAhomeForm.furnishing.value,
                                        //         "amenities":dl.changes.iHaveAhomeForm.amenities.value,
                                        //         // "vegPreference":dl.changes.iHaveAhomeForm.type.value,
                                        //         "smokingPolicy":dl.changes.iHaveAhomeForm.smokingPolicy.value,
                                        //         "petFriendly":dl.changes.iHaveAhomeForm.petFriendly.value,
                                        //         "occupation":dl.changes.iHaveAhomeForm.occupation.value,
                                        //         "title":dl.changes.iHaveAhomeForm.title.value,
                                        //         "description":dl.changes.iHaveAhomeForm.description.value,
                                        //         "name":dl.changes.iHaveAhomeForm.name.value,
                                        //         "email":dl.changes.iHaveAhomeForm.email.value,
                                        //         "contactNumber":dl.changes.iHaveAhomeForm.phone.selectPlaceHolder+dl.changes.iHaveAhomeForm.phone.value,

                                        //     }

                                        //     var params= dl.functions.common.getParams()
                                        //     var homeId = params.homeId
                                        //     var mode = params.mode
                                        //     if(homeId){
                                        //         if(mode=="edit"){
                                        //             body["id"] = homeId
                                        //             body["files"] = dl.changes.iHaveAhomeForm.photos.value
                                        //             var res = await dl.functions.updateHomeRental(body)
                                        //             if(res==200){
                                        //                 dl.functions.viewsPlugin.showView("rentallistings")
                                        //                 dl.functions.getHomeListing("6", "1")
                                        //             }
                                        //         }
                                        //     }
                                        //     else{
                                        //         var images = []
                                        //         var imagevalue = dl.changes.iHaveAhomeForm.photos.value
                                        //         for(var i=0; i<imagevalue.length; i++){
                                        //             var uploadedimage =  await dl.functions.common.neutrodev.generateAndUpload(imagevalue[i].file,false,"OdocRewT1nf/GhB3RCq1Xg==")
                                        //             images.push(uploadedimage)
                                        //         }
                                        //         body["files"]=images
                                        //         body["Age"]=Number(dl.changes.iHaveAhomeForm.age.value)

                                        //         var res2  = await dl.functions.createHomeRental(body)
                                        //     }

                                        //     }

                                        // }

                                        // run()
                                    }}
                                >
                                    <span
                                        id="t18_1279_254"
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
export default Listmyhomeform_2
