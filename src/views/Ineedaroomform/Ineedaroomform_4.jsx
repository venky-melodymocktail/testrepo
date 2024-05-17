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

import MmSelect from '../../components/MmSelect.jsx'
import MmAutoComplete from '../../components/MmAutoComplete.jsx'
import MmDatePicker from '../../components/MmDatePicker.jsx'
import MmMultiSelect from '../../components/MmMultiSelect.jsx'
import SampleInput from '../../components/SampleInput.jsx'
import MmTextArea from '../../components/MmTextArea.jsx'
import MmContactNumber from '../../components/MmContactNumber.jsx'
import MmHeader from '../../components/MmHeader.jsx'
import MmFooter from '../../components/MmFooter.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmInputS from '../../components/MmInputS.jsx'
import MmAutoCompleteS from '../../components/MmAutoCompleteS.jsx'
import MmSelectS from '../../components/MmSelectS.jsx'
import MmDatePickerS from '../../components/MmDatePickerS.jsx'
import MmMultiSelectS from '../../components/MmMultiSelectS.jsx'
import MmTextAreaS from '../../components/MmTextAreaS.jsx'
import MmContactNumberS from '../../components/MmContactNumberS.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'

const Ineedaroomform_4 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 400
            const element = document.getElementById('t18_1257_2274')
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
                id="t18_1257_2274"
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
                    id="t18_1257_2275"
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
                        id="t18_1257_2276"
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
                            id="t18_1257_2279"
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
                                id="t18_1257_2280"
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
                                    id="t18_1257_2281"
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
                                        'Room/ Roommates >> I need a Room/Roommate'
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
                            id="t18_1257_2282"
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
                                id="t18_1257_2283"
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
                                    id="t18_1257_2284"
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
                                        {...dl.changes.iNeedAroomForm.type}
                                        onChange={(val) => {
                                            dl.changes.iNeedAroomForm.type.value =
                                                val
                                            dl.changes.iNeedAroomForm.type.showErrorMessage =
                                                'none'
                                            dl.changes.iNeedAroomForm.type.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmAutoCompleteS
                                        {...dl.changes.iNeedAroomForm.zipCode}
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
                                                    // zipcodeArr.push(res[i].zip)
                                                    var option =
                                                        res[i].city +
                                                        ',' +
                                                        res[i].state_name +
                                                        ',' +
                                                        res[i].zip
                                                    zipcodeArr.push(option)
                                                }
                                                // alert(zipcodeArr)
                                                dl.changes.iNeedAroomForm.zipCode.options =
                                                    zipcodeArr
                                            }
                                            run()
                                        }}
                                        onSelect={(val) => {
                                            var zipcode = val.split(',')
                                            dl.changes.iNeedAroomForm.zipCode.value =
                                                zipcode[2]
                                            dl.changes.iNeedAroomForm.zipCode.showErrorMessage =
                                                'none'
                                            dl.changes.iNeedAroomForm.zipCode.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmSelectS
                                        {...dl.changes.iNeedAroomForm.leaseType}
                                        onChange={(val) => {
                                            dl.changes.iNeedAroomForm.leaseType.value =
                                                val
                                            dl.changes.iNeedAroomForm.leaseType.showErrorMessage =
                                                'none'
                                            dl.changes.iNeedAroomForm.leaseType.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmDatePickerS
                                        {...dl.changes.iNeedAroomForm
                                            .neededFrom}
                                        onChange={(val) => {
                                            dl.changes.iNeedAroomForm.neededFrom.value =
                                                val
                                            dl.changes.iNeedAroomForm.neededFrom.showErrorMessage =
                                                'none'
                                            dl.changes.iNeedAroomForm.neededFrom.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmDatePickerS
                                        {...dl.changes.iNeedAroomForm.neededTo}
                                        onChange={(val) => {
                                            dl.changes.iNeedAroomForm.neededTo.value =
                                                val
                                            dl.changes.iNeedAroomForm.neededTo.showErrorMessage =
                                                'none'
                                            dl.changes.iNeedAroomForm.neededTo.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmSelectS
                                        {...dl.changes.iNeedAroomForm
                                            .noOfPeople}
                                        onChange={(val) => {
                                            dl.changes.iNeedAroomForm.noOfPeople.value =
                                                val
                                            dl.changes.iNeedAroomForm.noOfPeople.showErrorMessage =
                                                'none'
                                            dl.changes.iNeedAroomForm.noOfPeople.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmSelectS
                                        {...dl.changes.iNeedAroomForm
                                            .attatchedBath}
                                        onChange={(val) => {
                                            dl.changes.iNeedAroomForm.attatchedBath.value =
                                                val
                                            dl.changes.iNeedAroomForm.attatchedBath.showErrorMessage =
                                                'none'
                                            dl.changes.iNeedAroomForm.attatchedBath.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmSelectS
                                        {...dl.changes.iNeedAroomForm.priceMode}
                                        onChange={(val) => {
                                            dl.changes.iNeedAroomForm.priceMode.value =
                                                val
                                            dl.changes.iNeedAroomForm.priceMode.showErrorMessage =
                                                'none'
                                            dl.changes.iNeedAroomForm.priceMode.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmMultiSelectS
                                        {...dl.changes.iNeedAroomForm.utilities}
                                        onChange={(val) => {
                                            dl.changes.iNeedAroomForm.utilities.value =
                                                val
                                            dl.changes.iNeedAroomForm.utilities.showErrorMessage =
                                                'none'
                                            dl.changes.iNeedAroomForm.utilities.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmSelectS
                                        {...dl.changes.iNeedAroomForm
                                            .furnishing}
                                        onChange={(val) => {
                                            dl.changes.iNeedAroomForm.furnishing.value =
                                                val
                                            dl.changes.iNeedAroomForm.furnishing.showErrorMessage =
                                                'none'
                                            dl.changes.iNeedAroomForm.furnishing.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmMultiSelectS
                                        {...dl.changes.iNeedAroomForm.amenities}
                                        onChange={(val) => {
                                            dl.changes.iNeedAroomForm.amenities.value =
                                                val
                                            dl.changes.iNeedAroomForm.amenities.showErrorMessage =
                                                'none'
                                            dl.changes.iNeedAroomForm.amenities.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <div
                                        id="t18_1257_2394"
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
                                            {...dl.changes.iNeedAroomForm
                                                .vegPreference}
                                            onChange={(val) => {
                                                dl.changes.iNeedAroomForm.vegPreference.value =
                                                    val
                                                dl.changes.iNeedAroomForm.vegPreference.showErrorMessage =
                                                    'none'
                                                dl.changes.iNeedAroomForm.vegPreference.inputBorderColor =
                                                    'rgba(207,206,206,1)'
                                            }}
                                        />

                                        <MmSelectS
                                            {...dl.changes.iNeedAroomForm
                                                .smoking}
                                            onChange={(val) => {
                                                dl.changes.iNeedAroomForm.smoking.value =
                                                    val
                                                dl.changes.iNeedAroomForm.smoking.showErrorMessage =
                                                    'none'
                                                dl.changes.iNeedAroomForm.smoking.inputBorderColor =
                                                    'rgba(207,206,206,1)'
                                            }}
                                        />
                                    </div>

                                    <MmSelectS
                                        {...dl.changes.iNeedAroomForm.pets}
                                        onChange={(val) => {
                                            dl.changes.iNeedAroomForm.pets.value =
                                                val
                                            dl.changes.iNeedAroomForm.pets.showErrorMessage =
                                                'none'
                                            dl.changes.iNeedAroomForm.pets.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <div
                                        id="t18_1257_2416"
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
                                            id="t18_1257_2417"
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
                                        id="t18_1257_2418"
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
                                            {...dl.changes.iNeedAroomForm.age}
                                            onChange={(val) => {
                                                dl.changes.iNeedAroomForm.age.value =
                                                    val
                                                dl.changes.iNeedAroomForm.age.showErrorMessage =
                                                    'none'
                                                dl.changes.iNeedAroomForm.age.inputBorderColor =
                                                    'rgba(207,206,206,1)'
                                            }}
                                        />

                                        <MmInputS
                                            {...dl.changes.iNeedAroomForm
                                                .occupation}
                                            onChange={(val) => {
                                                dl.changes.iNeedAroomForm.occupation.value =
                                                    val
                                                dl.changes.iNeedAroomForm.occupation.showErrorMessage =
                                                    'none'
                                                dl.changes.iNeedAroomForm.occupation.inputBorderColor =
                                                    'rgba(207,206,206,1)'
                                            }}
                                        />
                                    </div>

                                    <MmSelectS
                                        {...dl.changes.iNeedAroomForm.gender}
                                        onChange={(val) => {
                                            dl.changes.iNeedAroomForm.gender.value =
                                                val
                                            dl.changes.iNeedAroomForm.gender.showErrorMessage =
                                                'none'
                                            dl.changes.iNeedAroomForm.gender.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmMultiSelectS
                                        {...dl.changes.iNeedAroomForm.languages}
                                        onChange={(val) => {
                                            dl.changes.iNeedAroomForm.languages.value =
                                                val
                                            dl.changes.iNeedAroomForm.languages.showErrorMessage =
                                                'none'
                                            dl.changes.iNeedAroomForm.languages.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <div
                                        id="t18_1257_2436"
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
                                            id="t18_1257_2437"
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

                                    <div
                                        id="t18_1257_2438"
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
                                        <MmTextAreaS
                                            {...dl.changes.iNeedAroomForm.title}
                                            onChange={(val) => {
                                                dl.changes.iNeedAroomForm.title.value =
                                                    val
                                                dl.changes.iNeedAroomForm.title.showErrorMessage =
                                                    'none'
                                                dl.changes.iNeedAroomForm.title.inputBorderColor =
                                                    'rgba(207,206,206,1)'
                                            }}
                                        />

                                        <div
                                            id="t18_1257_2445"
                                            style={{
                                                width: 133,
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 2,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <span
                                                id="t18_1257_2446"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 8,
                                                    fontWeight: 400,
                                                    color: 'rgba(113,113,113,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '9.681818008422852px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                0/100 words
                                            </span>
                                        </div>
                                    </div>

                                    <MmTextAreaS
                                        {...dl.changes.iNeedAroomForm
                                            .description}
                                        onChange={(val) => {
                                            dl.changes.iNeedAroomForm.description.value =
                                                val
                                            dl.changes.iNeedAroomForm.description.showErrorMessage =
                                                'none'
                                            dl.changes.iNeedAroomForm.description.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <div
                                        id="t18_1257_2456"
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
                                            id="t18_1257_2457"
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
                                        {...dl.changes.iNeedAroomForm.name}
                                        onChange={(val) => {
                                            dl.changes.iNeedAroomForm.name.value =
                                                val
                                            dl.changes.iNeedAroomForm.name.showErrorMessage =
                                                'none'
                                            dl.changes.iNeedAroomForm.name.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmInputS
                                        {...dl.changes.iNeedAroomForm.email}
                                        onChange={(val) => {
                                            dl.changes.iNeedAroomForm.email.value =
                                                val
                                            dl.changes.iNeedAroomForm.email.showErrorMessage =
                                                'none'
                                            dl.changes.iNeedAroomForm.email.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />

                                    <MmContactNumberS
                                        {...dl.changes.iNeedAroomForm.phone}
                                        onChange={(val) => {
                                            dl.changes.iNeedAroomForm.phone.value =
                                                val
                                            dl.changes.iNeedAroomForm.phone.showErrorMessage =
                                                'none'
                                            dl.changes.iNeedAroomForm.phone.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                        onChangeCountryCode={(val) => {
                                            dl.changes.iNeedAroomForm.phone.selectPlaceHolder =
                                                val
                                            dl.changes.iNeedAroomForm.phone.showErrorMessage =
                                                'none'
                                            dl.changes.iNeedAroomForm.phone.inputBorderColor =
                                                'rgba(207,206,206,1)'
                                        }}
                                    />
                                </div>

                                <div
                                    id="t18_1257_2491"
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
                                        var run = async () => {
                                            var res =
                                                dl.functions.validateNeedARoomForm()
                                            // alert(res)
                                            if (res == true) {
                                                dl.functions.modalsPlugin.openModal(
                                                    'loading'
                                                )
                                                var body = {
                                                    rentalType: 'Room',
                                                    type: dl.changes
                                                        .iNeedAroomForm.type
                                                        .value,
                                                    // "exactAddress":dl.changes.iNeedAroomForm.address.value,
                                                    zipCode:
                                                        dl.changes
                                                            .iNeedAroomForm
                                                            .zipCode.value,
                                                    stayLeaseType:
                                                        dl.changes
                                                            .iNeedAroomForm
                                                            .leaseType.value,
                                                    availabilityFrom:
                                                        dl.changes
                                                            .iNeedAroomForm
                                                            .neededFrom.value,
                                                    availabilityTo:
                                                        dl.changes
                                                            .iNeedAroomForm
                                                            .neededTo.value,
                                                    noOfPeople:
                                                        dl.changes
                                                            .iNeedAroomForm
                                                            .noOfPeople.value,
                                                    attachedBath:
                                                        dl.changes
                                                            .iNeedAroomForm
                                                            .attatchedBath
                                                            .value == 'Yes'
                                                            ? true
                                                            : false,
                                                    pricemode:
                                                        dl.changes
                                                            .iNeedAroomForm
                                                            .priceMode.value,
                                                    preferedGender:
                                                        dl.changes
                                                            .iNeedAroomForm
                                                            .gender.value,
                                                    // "preferedRent":dl.changes.iNeedAroomForm.rent.value,
                                                    // "negotiable":dl.changes.iNeedAroomForm.type.value,
                                                    utilityRequired: true,
                                                    utilities:
                                                        dl.changes
                                                            .iNeedAroomForm
                                                            .utilities.value,
                                                    roomFurnishingRequired:
                                                        dl.changes
                                                            .iNeedAroomForm
                                                            .furnishing.value,
                                                    amenities:
                                                        dl.changes
                                                            .iNeedAroomForm
                                                            .amenities.value,
                                                    vegPreference:
                                                        dl.changes
                                                            .iNeedAroomForm
                                                            .vegPreference
                                                            .value,
                                                    smokingPolicy:
                                                        dl.changes
                                                            .iNeedAroomForm
                                                            .smoking.value,
                                                    petFriendly:
                                                        dl.changes
                                                            .iNeedAroomForm.pets
                                                            .value,
                                                    occupation:
                                                        dl.changes
                                                            .iNeedAroomForm
                                                            .occupation.value,
                                                    languages:
                                                        dl.changes
                                                            .iNeedAroomForm
                                                            .languages.value,
                                                    title: dl.changes
                                                        .iNeedAroomForm.title
                                                        .value,
                                                    description:
                                                        dl.changes
                                                            .iNeedAroomForm
                                                            .description.value,
                                                    name: dl.changes
                                                        .iNeedAroomForm.name
                                                        .value,
                                                    email: dl.changes
                                                        .iNeedAroomForm.email
                                                        .value,
                                                    contactNumber:
                                                        dl.changes
                                                            .iNeedAroomForm
                                                            .phone
                                                            .selectPlaceHolder +
                                                        dl.changes
                                                            .iNeedAroomForm
                                                            .phone.value,
                                                }
                                                var params =
                                                    dl.functions.common.getParams()
                                                var roomId = params.roomId
                                                var mode = params.mode
                                                if (roomId) {
                                                    if (mode == 'edit') {
                                                        body['id'] = roomId
                                                        var res =
                                                            await dl.functions.updateNeedARoom(
                                                                body
                                                            )
                                                        if (res == 200) {
                                                            dl.functions.viewsPlugin.showView(
                                                                'rentallistings'
                                                            )
                                                            dl.functions.getneedARoomListing(
                                                                '6',
                                                                '1'
                                                            )
                                                            dl.changes.selectedListingType =
                                                                'Wanted'
                                                            window.toast(
                                                                'You have sucessfully Edited Your Listing'
                                                            )
                                                            dl.functions.modalsPlugin.closeModal(
                                                                'loading'
                                                            )
                                                        }
                                                    }
                                                } else {
                                                    body['Age'] = Number(
                                                        dl.changes
                                                            .iNeedAroomForm.age
                                                            .value
                                                    )
                                                    var res2 =
                                                        await dl.functions.createNeedARoom(
                                                            body
                                                        )
                                                    if (res2.status == 200) {
                                                        window.toast(
                                                            'Your Need for a Room has been Posted'
                                                        )
                                                        dl.functions.modalsPlugin.closeModal(
                                                            'loading'
                                                        )
                                                    }
                                                }
                                            }
                                        }

                                        run()
                                    }}
                                >
                                    <span
                                        id="t18_1257_2492"
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
export default Ineedaroomform_4
