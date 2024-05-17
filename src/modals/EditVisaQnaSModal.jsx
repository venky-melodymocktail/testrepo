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

const EditVisaQnaSModal = observer(() => {
    const [anim, setAnim] = useState('')
    const [showModal, setShowModal] = useState(
        dl.modalsStatus['EditVisaQnaSModal']
    )
    useEffect(() => {
        if (!dl.modalsStatus['EditVisaQnaSModal']) {
            closeModal()
        } else {
            setShowModal(true)
        }
    }, [dl.modalsStatus['EditVisaQnaSModal']])

    const closeModal = () => {
        setAnim('')
        setTimeout(() => {
            dl.modalsStatus['EditVisaQnaSModal'] = false
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

                    backgroundColor: 'rgba(248,246,246,1.00)',

                    overflow: 'scroll',
                }}
            >
                <div
                    id="t18_1790_102"
                    style={{
                        width: 360,
                        backgroundColor: 'rgba(248,246,246,1.00)',
                        flexDirection: 'row',
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
                        id="t18_1790_103"
                        style={{
                            width: 340,
                            borderRadius: 10,
                            backgroundColor: 'rgba(248,246,246,1.00)',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            display: 'flex',
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 80,
                            paddingBottom: 20,
                            position: 'relative',
                            overflow: 'visible',
                            boxShadow: '0px 4px 20px rgba(0,0,0,0.25)',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_1790_104"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 15,
                            }}
                        >
                            <div
                                id="t18_1790_105"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 5,
                                }}
                            >
                                <input
                                    id="t18_1790_107"
                                    value={
                                        dl.changes.visaQuestionPopupDetail
                                            .question
                                    }
                                    style={{
                                        height: 117,
                                        width: 287,
                                        borderRadius: 5,
                                        backgroundColor:
                                            'rgba(255,255,255,1.00)',
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 10,
                                        paddingRight: 10,
                                        paddingTop: 10,
                                        paddingBottom: 10,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 1,
                                        borderColor: 'rgba(207,206,206,1)',
                                        borderStyle: 'solid',
                                        cursor: 'pointer',
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        color: 'rgba(113,113,113,1)',
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
                            </div>

                            <select
                                name="cars"
                                id="t18_1791_4"
                                style={{
                                    height: 47,
                                    width: 287,
                                    borderRadius: 5,
                                    backgroundColor: 'rgba(255,255,255,1.00)',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 1,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderStyle: 'solid',
                                    marginTop: 5,
                                    marginBottom: 0,
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
                        </div>

                        <div
                            id="t18_1790_129"
                            style={{
                                height: 16,
                                width: 133,
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
                                marginTop: 15,
                                marginBottom: 15,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                const run = async () => {
                                    var body = {
                                        id: dl.changes
                                            .selectedVisaquestionsListing._id,
                                        question:
                                            dl.changes.visaQuestionPopupDetail
                                                .question,
                                        category:
                                            dl.changes.visaQuestionPopupDetail
                                                .type,
                                    }
                                    var res =
                                        await dl.functions.updateVisaQandA(body)
                                    if (res == 200) {
                                        // dl.functions.viewsPlugin.showView("questionlistings")
                                        // var currentPath = dl.functions.common.getLastPath()
                                        dl.functions.onLoadFunctions[
                                            'questionlistings'
                                        ]()
                                        dl.functions.modalsPlugin.closeModal(
                                            'editVisaQnaS'
                                        )
                                    }
                                }

                                run()
                            }}
                        >
                            <span
                                id="t18_1790_130"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 600,
                                    color: 'rgba(255,255,255,1)',
                                    letterSpacing: 0,
                                    lineHeight: '22px',
                                    textAlign: 'left',
                                }}
                            >
                                Submit
                            </span>
                        </div>

                        <div
                            id="t18_1790_131"
                            style={{
                                height: 22,
                                width: 349,
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
                                paddingTop: 4,
                                paddingBottom: 10,
                                position: 'absolute',
                                overflow: 'visible',
                                borderWidth: 0,
                                top: 27,
                                left: -4,
                                marginTop: 15,
                                marginBottom: 0,
                            }}
                        >
                            <div
                                id="t18_1790_132"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                }}
                            >
                                <span
                                    id="t18_1790_133"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 16,
                                        fontWeight: 700,
                                        color: 'rgba(248,246,246,1)',
                                        letterSpacing: 0,
                                        lineHeight: '19.363636016845703px',
                                        textAlign: 'left',
                                        marginLeft: 0,
                                        marginRight: 70,
                                    }}
                                >
                                    Edit
                                </span>

                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/35e1eb519c564e49bdd0f7a13d03a9f27535aa69.png' !=
                                '' ? (
                                    <img
                                        id="t18_1790_134"
                                        style={{
                                            height: 12,
                                            width: 12,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: 70,
                                            marginRight: 0,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            dl.functions.modalsPlugin.closeModal(
                                                'editVisaQnaS'
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
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
})
export default EditVisaQnaSModal
