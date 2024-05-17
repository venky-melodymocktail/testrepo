import React, { useEffect } from 'react'
import dl from '../datalayer/state'
import Modal from '@mui/material/Modal'
import { observer } from 'mobx-react'
import OtpInput from 'react-otp-input'
import Lottie from 'react-lottie'
import ReCAPTCHA from 'react-google-recaptcha'

import { useState } from 'react'
import MaterialSwitch from '../components/main/MaterialSwitch.jsx'
import MaterialSelect from '../components/main/MaterialSelect.jsx'
import ReactDraft from '../components/main/ReactDraft.jsx'
import MaterialMenu from '../components/main/MaterialMenu.jsx'
import MMPagination from '../components/main/MMPagination.jsx'
import MMFilter from '../components/main/MMFilter.jsx'
import MaterialDate from '../components/main/MaterialDate.jsx'
import MaterialAutoComplete from '../components/main/MaterialAutoComplete.jsx'
import MaterialRating from '../components/main/MaterialRating.jsx'

const EditVisaQnaModal = observer(() => {
    const [anim, setAnim] = useState('')
    const [showModal, setShowModal] = useState(
        dl.modalsStatus['EditVisaQnaModal']
    )
    useEffect(() => {
        if (!dl.modalsStatus['EditVisaQnaModal']) {
            closeModal()
        } else {
            setShowModal(true)
        }
    }, [dl.modalsStatus['EditVisaQnaModal']])

    const closeModal = () => {
        setAnim('')
        setTimeout(() => {
            dl.modalsStatus['EditVisaQnaModal'] = false
            setAnim('')
            setShowModal(false)
        }, 0)
    }

    return (
        <Modal
            className={anim}
            open={showModal}
            disableAutoFocus={true}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            onClose={() => {
                closeModal()
            }}
        >
            <div
                className="popupModal"
                style={{
                    position: 'absolute',

                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',

                    overflow: 'scroll',
                }}
            >
                <div
                    id="t18_1456_75"
                    style={{
                        width: 807,
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        paddingBottom: 5,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_1456_25"
                        style={{
                            width: 807,
                            borderRadius: 10,
                            backgroundColor: 'rgba(248,246,246,1.00)',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingTop: 120,
                            paddingBottom: 30,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_1456_54"
                            style={{
                                height: 66,
                                width: 798,
                                backgroundImage:
                                    'url(https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/c4affc3aef2b9307173501055c97000404372749.png)',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                display: 'flex',
                                paddingRight: 15,
                                paddingBottom: 10,
                                position: 'absolute',
                                overflow: 'visible',
                                borderWidth: 0,
                                top: 29.1875,
                                left: -6.5,
                                marginTop: 0,
                                marginBottom: 12.5,
                            }}
                        >
                            <span
                                id="t18_1456_55"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 24,
                                    fontWeight: 700,
                                    color: 'rgba(248,246,246,1)',
                                    letterSpacing: 0,
                                    lineHeight: '29.045454025268555px',
                                    textAlign: 'center',
                                    marginLeft: 0,
                                    marginRight: 170,
                                }}
                            >
                                Edit
                            </span>

                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/35e1eb519c564e49bdd0f7a13d03a9f27535aa69.png' !=
                            '' ? (
                                <img
                                    id="t18_1456_56"
                                    style={{
                                        height: 13,
                                        width: 13,
                                        display: 'flex',
                                        borderWidth: 0,
                                        marginLeft: 170,
                                        marginRight: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        dl.functions.modalsPlugin.closeModal(
                                            'editVisaQna'
                                        )
                                    }}
                                    src={
                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/35e1eb519c564e49bdd0f7a13d03a9f27535aa69.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}
                        </div>

                        <input
                            id="t18_1456_74"
                            value={dl.changes.visaQuestionPopupDetail.question}
                            style={{
                                height: 130,
                                width: 743,
                                backgroundColor: 'rgba(255,255,255,1.00)',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
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
                                cursor: 'pointer',
                                fontFamily: 'Inter',
                                fontSize: 16,
                                color: 'rgba(112,112,112,1)',
                                fontWeight: 400,
                                textAlign: 'left',
                            }}
                            onChange={(val) => {
                                val = val.target.value

                                dl.changes.visaQuestionPopupDetail.question =
                                    val
                            }}
                            type="text"
                        ></input>

                        <div
                            id="t18_1456_62"
                            style={{
                                width: 763,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 12.5,
                                marginBottom: 0,
                            }}
                        >
                            <select
                                name="cars"
                                id="t18_1456_63"
                                style={{
                                    height: 47,
                                    width: 307,
                                    borderRadius: 4,
                                    backgroundColor: 'rgba(255,255,255,1.00)',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 155,
                                    cursor: 'pointer',
                                }}
                                onChange={(val) => {
                                    val = val.target.value

                                    dl.changes.visaQuestionPopupDetail.type =
                                        val
                                }}
                            >
                                <option value="" disabled selected>
                                    Select your option
                                </option>
                                {Array.isArray(
                                    dl.changes.visaQuestionSlotBookingForm
                                        .visaType.options
                                ) &&
                                    dl.changes.visaQuestionSlotBookingForm.visaType.options.map(
                                        (item, index) => {
                                            return (
                                                <option
                                                    value={item}
                                                    selected={
                                                        item ==
                                                        dl.changes
                                                            .visaQuestionPopupDetail
                                                            .type
                                                    }
                                                >
                                                    {item}
                                                </option>
                                            )
                                        }
                                    )}
                            </select>

                            <div
                                id="t18_1456_66"
                                className={' contact-btn'}
                                style={{
                                    height: 27,
                                    width: 129,
                                    borderRadius: 4,
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
                                    marginLeft: 155,
                                    marginRight: 0,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    const run = async () => {
                                        var body = {
                                            id: dl.changes
                                                .selectedVisaquestionsListing
                                                ._id,
                                            question:
                                                dl.changes
                                                    .visaQuestionPopupDetail
                                                    .question,
                                            category:
                                                dl.changes
                                                    .visaQuestionPopupDetail
                                                    .type,
                                        }
                                        var res =
                                            await dl.functions.updateVisaQandA(
                                                body
                                            )
                                        if (res == 200) {
                                            // dl.functions.viewsPlugin.showView("questionlistings")
                                            // var currentPath = dl.functions.common.getLastPath()
                                            dl.functions.onLoadFunctions[
                                                'questionlistings'
                                            ]()
                                            dl.functions.modalsPlugin.closeModal(
                                                'editVisaQna'
                                            )
                                        }
                                    }

                                    run()
                                }}
                            >
                                <span
                                    id="t18_1456_67"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 20,
                                        fontWeight: 700,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '24.204544067382812px',
                                        textAlign: 'left',
                                    }}
                                >
                                    Save
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
})
export default EditVisaQnaModal
