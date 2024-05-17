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

const FilterModal = observer(() => {
    const [anim, setAnim] = useState('revealModalLeft')
    const [showModal, setShowModal] = useState(dl.modalsStatus['FilterModal'])
    useEffect(() => {
        if (!dl.modalsStatus['FilterModal']) {
            closeModal()
        } else {
            setShowModal(true)
        }
    }, [dl.modalsStatus['FilterModal']])

    const closeModal = () => {
        setAnim('exitModalLeft')
        setTimeout(() => {
            dl.modalsStatus['FilterModal'] = false
            setAnim('revealModalLeft')
            setShowModal(false)
        }, 750)
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

                    top: '0%',
                    left: '0%',

                    height: '100vh',

                    backgroundColor: 'rgba(255,255,255,1.00)',

                    overflow: 'scroll',
                }}
            >
                <div
                    id="t18_1641_199"
                    style={{
                        backgroundColor: 'rgba(255,255,255,1.00)',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        display: 'flex',
                        paddingBottom: 10,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginLeft: 0,
                        marginTop: '0px',
                    }}
                >
                    <div
                        id="t18_1940_2"
                        style={{
                            height: '40px',
                            width: '370px',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                            display: 'flex',
                            paddingRight: 30,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            borderColor: 'rgba(207,206,206,1)',
                            borderBottomWidth: '0px',
                            borderStyle: 'solid',
                            marginTop: 0,
                            marginBottom: 5,
                        }}
                    >
                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/3cccb82d2cbb5fa69dab2222e2b71e9eafc593e2.png' !=
                        '' ? (
                            <img
                                id="t18_1940_4"
                                style={{
                                    height: '15px',
                                    width: '15px',
                                    display: 'flex',
                                    borderWidth: 0,
                                    cursor: 'pointer',
                                    minWidth: '15px',
                                }}
                                onClick={(e) => {
                                    dl.functions.modalsPlugin.closeModal(
                                        'filter'
                                    )
                                }}
                                src={
                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/3cccb82d2cbb5fa69dab2222e2b71e9eafc593e2.png'
                                }
                            ></img>
                        ) : (
                            <></>
                        )}
                    </div>

                    <MMFilter
                        dataSource={dl.changes.universalFilter}
                        onChange={(val) => {
                            dl.functions.applyUniversalFilter()
                        }}
                    />
                </div>
            </div>
        </Modal>
    )
})
export default FilterModal
