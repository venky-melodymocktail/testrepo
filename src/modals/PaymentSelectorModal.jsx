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

const PaymentSelectorModal = observer(() => {
    const [anim, setAnim] = useState('')
    const [showModal, setShowModal] = useState(
        dl.modalsStatus['PaymentSelectorModal']
    )
    useEffect(() => {
        if (!dl.modalsStatus['PaymentSelectorModal']) {
            closeModal()
        } else {
            setShowModal(true)
        }
    }, [dl.modalsStatus['PaymentSelectorModal']])

    const closeModal = () => {
        setAnim('')
        setTimeout(() => {
            dl.modalsStatus['PaymentSelectorModal'] = false
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

                    backgroundColor: 'rgba(255,255,255,1.00)',

                    overflow: 'scroll',
                }}
            >
                <div
                    id="t18_1367_256"
                    style={{
                        height: 146,
                        width: 366,
                        borderRadius: 10,
                        backgroundColor: 'rgba(255,255,255,1.00)',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        paddingTop: 90,
                        paddingBottom: 20,
                        position: 'relative',
                        overflow: 'visible',
                        boxShadow: '0px 4px 20px rgba(0,0,0,0.25)',
                        borderWidth: 0,
                        marginTop: 0,
                    }}
                >
                    <div
                        id="t18_1377_312"
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
                        <div
                            id="t18_1367_257"
                            style={{
                                height: 53,
                                width: 293,
                                borderRadius: 7,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingLeft: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 1,
                                borderColor: 'rgba(186,15,23,1)',
                                borderStyle: 'solid',
                                marginTop: 0,
                                marginBottom: 15,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                dl.functions.paymentSelectorPopupUPI()
                            }}
                        >
                            <div
                                id="t18_1367_259"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/6243b66629bbb8f6d39207ed2aa09f972b8c04fd.png' !=
                                '' ? (
                                    <img
                                        id="t18_1367_260"
                                        style={{
                                            height: 15,
                                            width: 30,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: 0,
                                            marginRight: 2.5,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/6243b66629bbb8f6d39207ed2aa09f972b8c04fd.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <div
                                    id="t18_1367_261"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 2.5,
                                        marginRight: 0,
                                    }}
                                >
                                    <span
                                        id="t18_1367_262"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 14,
                                            fontWeight: 600,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '16.94318199157715px',
                                            textAlign: 'center',
                                            marginTop: 0,
                                            marginBottom: 2,
                                        }}
                                    >
                                        UPI
                                    </span>

                                    <span
                                        id="t18_1367_263"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 11,
                                            fontWeight: 500,
                                            color: 'rgba(149,152,153,1)',
                                            letterSpacing: 0,
                                            lineHeight: '13.3125px',
                                            textAlign: 'center',
                                            marginTop: 2,
                                            marginBottom: 0,
                                        }}
                                    >
                                        Only for Indian users
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div
                            id="t18_1367_264"
                            style={{
                                height: 53,
                                width: 293,
                                borderRadius: 7,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingLeft: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 1,
                                borderColor: 'rgba(186,15,23,1)',
                                borderStyle: 'solid',
                                marginTop: 15,
                                marginBottom: 0,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                dl.functions.paymentSelectorPopupCard()
                            }}
                        >
                            <div
                                id="t18_1367_266"
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
                                <div
                                    id="t18_1367_267"
                                    style={{
                                        width: 30,
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 0,
                                        marginRight: 2.5,
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/9a59bd6f14001bbf44dec0ffc51782fbd27b82b3.png' !=
                                    '' ? (
                                        <img
                                            id="t18_1367_268"
                                            style={{
                                                height: 19,
                                                width: 22,
                                                display: 'flex',
                                                borderWidth: 0,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/9a59bd6f14001bbf44dec0ffc51782fbd27b82b3.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}
                                </div>

                                <div
                                    id="t18_1367_269"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 2.5,
                                        marginRight: 0,
                                    }}
                                >
                                    <div
                                        id="t18_1367_270"
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
                                        <span
                                            id="t18_1367_271"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 14,
                                                fontWeight: 600,
                                                color: 'rgba(0,0,0,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '16.94318199157715px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            Card payment
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
})
export default PaymentSelectorModal
