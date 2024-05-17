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

const ConfirmationGenericModal = observer(() => {
    const [anim, setAnim] = useState('')
    const [showModal, setShowModal] = useState(
        dl.modalsStatus['ConfirmationGenericModal']
    )
    useEffect(() => {
        if (!dl.modalsStatus['ConfirmationGenericModal']) {
            closeModal()
        } else {
            setShowModal(true)
        }
    }, [dl.modalsStatus['ConfirmationGenericModal']])

    const closeModal = () => {
        setAnim('')
        setTimeout(() => {
            dl.modalsStatus['ConfirmationGenericModal'] = false
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
                    id="t18_1457_88"
                    style={{
                        width: 389,
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        paddingBottom: 5,
                        position: 'relative',
                        overflow: 'visible',
                        boxShadow: '0px 4px 20px rgba(0,0,0,0.25)',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_1457_89"
                        style={{
                            width: 389,
                            borderRadius: 10,
                            backgroundColor: 'rgba(248,246,246,1.00)',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            paddingTop: 80,
                            paddingBottom: 32,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 0,
                        }}
                    >
                        <div
                            id="t18_1457_90"
                            style={{
                                width: 363,
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
                                marginTop: 0,
                                marginBottom: 17.5,
                            }}
                        >
                            <span
                                id="t18_1457_91"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 400,
                                    color: 'rgba(113,113,113,1)',
                                    letterSpacing: 0,
                                    lineHeight: '22px',
                                    textAlign: 'center',
                                }}
                            >
                                Are you sure you want to delete the listing?
                            </span>
                        </div>

                        <div
                            id="t18_1457_92"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 17.5,
                                marginBottom: 0,
                            }}
                        >
                            <div
                                id="t18_1457_93"
                                style={{
                                    height: 16,
                                    width: 100,
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
                                    marginLeft: 0,
                                    marginRight: 60,
                                }}
                            >
                                <span
                                    id="t18_1457_94"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 16,
                                        fontWeight: 600,
                                        color: 'rgba(197,18,29,1)',
                                        letterSpacing: 0,
                                        lineHeight: '22px',
                                        textAlign: 'left',
                                    }}
                                >
                                    No
                                </span>
                            </div>

                            <div
                                id="t18_1457_95"
                                className={' contact-btn'}
                                style={{
                                    height: 16,
                                    width: 100,
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
                                    marginLeft: 60,
                                    marginRight: 0,
                                }}
                            >
                                <span
                                    id="t18_1457_96"
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
                                    Yes
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        id="t18_1457_97"
                        style={{
                            height: 29,
                            width: 377,
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
                            top: 23,
                            left: -3,
                            marginBottom: 0,
                        }}
                    >
                        <span
                            id="t18_1457_98"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 16,
                                fontWeight: 700,
                                color: 'rgba(248,246,246,1)',
                                letterSpacing: 0,
                                lineHeight: '19.363636016845703px',
                                textAlign: 'center',
                                marginLeft: 0,
                                marginRight: 60,
                            }}
                        >
                            Are you sure?
                        </span>

                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/35e1eb519c564e49bdd0f7a13d03a9f27535aa69.png' !=
                        '' ? (
                            <img
                                id="t18_1457_99"
                                style={{
                                    height: 13,
                                    width: 13,
                                    display: 'flex',
                                    borderWidth: 0,
                                    marginLeft: 60,
                                    marginRight: 0,
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
        </Modal>
    )
})
export default ConfirmationGenericModal
