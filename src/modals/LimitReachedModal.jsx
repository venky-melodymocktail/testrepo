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

const LimitReachedModal = observer(() => {
    const [anim, setAnim] = useState('')
    const [showModal, setShowModal] = useState(
        dl.modalsStatus['LimitReachedModal']
    )
    useEffect(() => {
        if (!dl.modalsStatus['LimitReachedModal']) {
            closeModal()
        } else {
            setShowModal(true)
        }
    }, [dl.modalsStatus['LimitReachedModal']])

    const closeModal = () => {
        setAnim('')
        setTimeout(() => {
            dl.modalsStatus['LimitReachedModal'] = false
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
            // onClose={() => {
            //     closeModal()
            // }}
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
                    id="t18_999_119"
                    style={{
                        height: 337,
                        width: 360,
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
                        id="t18_999_117"
                        style={{
                            height: 317,
                            width: 340,
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
                            style={{
                                // maxWidth:400,
                                paddingTop: 20,
                                paddingBottom: 10,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'white',
                                width: 300,
                                borderRadius: 10,
                                flexDirection: 'column',
                            }}
                        >
                            <Lottie
                                options={{
                                    loop: dl.changes.desclaimerConfig.loop,
                                    path: dl.changes.desclaimerConfig.source,
                                }}
                                height={100}
                                width={100}
                            />
                            <div
                                style={{
                                    fontSize: 16,
                                    color: 'grey',
                                    width: '80%',
                                    textAlign: 'center',
                                    fontWeight: '600',
                                    marginTop: -10,
                                }}
                            >
                                Oops! It looks like you've reached your posting
                                limit for this service
                            </div>
                            <div
                                onClick={() => {
                                    dl.functions.viewsPlugin.showView(
                                        dl.changes.limitReachedScreen
                                    )
                                    var currentPath =
                                        dl.functions.common.getLastPath()
                                    dl.functions.onLoadFunctions[currentPath]()
                                    dl.functions.modalsPlugin.closeModal(
                                        'limitReached'
                                    )
                                }}
                                style={{
                                    // width:"40%",
                                    paddingRight: 20,
                                    paddingLeft: 20,
                                    height: 30,
                                    backgroundColor: 'rgba(186,15,23,1.00)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 5,
                                    marginTop: 10,
                                    cursor: 'pointer',
                                }}
                            >
                                <div
                                    style={{
                                        color: 'white',
                                        fontSize: 15,
                                        fontWeight: 700,
                                    }}
                                >
                                    Ok
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
})
export default LimitReachedModal
