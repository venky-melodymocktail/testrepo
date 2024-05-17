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

const AddressPopupLgModal = observer(() => {
    const [anim, setAnim] = useState('')
    const [showModal, setShowModal] = useState(
        dl.modalsStatus['AddressPopupLgModal']
    )
    useEffect(() => {
        if (!dl.modalsStatus['AddressPopupLgModal']) {
            closeModal()
        } else {
            setShowModal(true)
        }
    }, [dl.modalsStatus['AddressPopupLgModal']])

    const closeModal = () => {
        setAnim('')
        setTimeout(() => {
            dl.modalsStatus['AddressPopupLgModal'] = false
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
                    id="t18_714_312"
                    style={{
                        height: 350,
                        width: 469,
                        borderRadius: 20,
                        backgroundColor: 'rgba(248,246,246,1.00)',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        display: 'flex',
                        paddingLeft: 74,
                        paddingTop: 60,
                        paddingBottom: 60,
                        position: 'relative',
                        overflow: 'visible',
                        boxShadow:
                            '0px 4px 20px rgba(0,0,0,0.15000000596046448)',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_714_313"
                        style={{
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
                            id="t18_714_314"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 0,
                                marginRight: 10,
                            }}
                        >
                            <div
                                id="t18_714_315"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 10,
                                }}
                            >
                                <div
                                    id="t18_714_316"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 3.5,
                                    }}
                                >
                                    <span
                                        id="t18_714_317"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 22,
                                            fontWeight: 700,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '26.625px',
                                            textAlign: 'left',
                                        }}
                                    >
                                        Address
                                    </span>
                                </div>

                                <div
                                    id="t18_714_318"
                                    style={{
                                        borderRadius: 3,
                                        backgroundColor:
                                            'rgba(255,255,255,1.00)',
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        borderWidth: 1,
                                        borderColor: 'rgba(112,112,112,1)',
                                        borderStyle: 'solid',
                                        marginTop: 3.5,
                                        marginBottom: 0,
                                    }}
                                ></div>
                            </div>

                            <div
                                id="t18_714_319"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 10,
                                    marginBottom: 0,
                                }}
                            >
                                <div
                                    id="t18_714_320"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 18.5,
                                    }}
                                >
                                    <div
                                        id="t18_714_321"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 11.5,
                                        }}
                                    >
                                        <span
                                            id="t18_714_322"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 22,
                                                fontWeight: 700,
                                                color: 'rgba(113,113,113,1)',
                                                letterSpacing: 0,
                                                lineHeight: '26.625px',
                                                textAlign: 'left',
                                                marginTop: 0,
                                                marginBottom: 6,
                                            }}
                                        >
                                            Help us serve you better
                                        </span>

                                        <span
                                            id="t18_714_323"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 15,
                                                fontWeight: 500,
                                                color: 'rgba(140,146,152,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '18.15340805053711px',
                                                textAlign: 'left',
                                                marginTop: 6,
                                                marginBottom: 0,
                                            }}
                                        >
                                            Please select your address
                                        </span>
                                    </div>

                                    <div
                                        id="t18_714_324"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 11.5,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <input
                                            id="t18_714_329"
                                            placeholder="Enter zip code"
                                            style={{
                                                height: 47,
                                                width: 367,
                                                borderRadius: 5,
                                                backgroundColor:
                                                    'rgba(255,255,255,1.00)',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingLeft: 15,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 1,
                                                borderColor:
                                                    'rgba(207,206,206,1)',
                                                borderStyle: 'solid',
                                                cursor: 'pointer',
                                            }}
                                            onChange={(val) => {
                                                val = val.target.value

                                                dl.changes.userAddress.address.zipCode =
                                                    val
                                                dl.functions.getAddress(val)
                                            }}
                                            type="text"
                                        ></input>
                                    </div>
                                </div>

                                <div
                                    id="t18_714_343"
                                    style={{
                                        width: 382,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 18.5,
                                        marginBottom: 18.5,
                                    }}
                                >
                                    <span
                                        id="t18_714_344"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 14,
                                            fontWeight: 500,
                                            color: 'rgba(186,15,23,1)',
                                            letterSpacing: 0,
                                            lineHeight: '16.94318199157715px',
                                            textAlign: 'left',
                                            marginTop: 0,
                                            marginBottom: 5,
                                        }}
                                    >
                                        Your address
                                    </span>

                                    <div
                                        id="t18_714_345"
                                        style={{
                                            width: 382,
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 5,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_714_346"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 15,
                                                fontWeight: 500,
                                                color: 'rgba(167,167,167,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '18.15340805053711px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            {dl.changes.addressString}
                                        </span>
                                    </div>
                                </div>

                                <div
                                    id="t18_714_340"
                                    className={' contact-btn'}
                                    style={{
                                        height: 27,
                                        width: 142,
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
                                        marginTop: 18.5,
                                        marginBottom: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        const run = async () => {
                                            if (
                                                dl.changes.addressString ==
                                                'No addresss Found'
                                            ) {
                                                return
                                            } else {
                                                var res =
                                                    await dl.functions.changeAddress(
                                                        dl.changes.userAddress
                                                    )
                                                // alert(JSON.stringify(res))
                                            }
                                            // var res = await dl.functions.changeAddress(dl.changes.userAddress)
                                            // alert(JSON.stringify(res))
                                            if (res.status == 200) {
                                                dl.functions.getUserDetail()
                                            }
                                            // dl.functions.getUserDetail
                                            dl.functions.modalsPlugin.closeModal(
                                                'AddressPopupLg'
                                            )
                                        }

                                        run()
                                    }}
                                >
                                    <span
                                        id="t18_714_341"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 18,
                                            fontWeight: 700,
                                            color: 'rgba(255,255,255,1)',
                                            letterSpacing: 0,
                                            lineHeight: '21.784090042114258px',
                                            textAlign: 'left',
                                        }}
                                    >
                                        Continue
                                    </span>
                                </div>
                            </div>
                        </div>

                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/69c17245ea33f76ff74faf996cf2ee0ffac5b0d8.png' !=
                        '' ? (
                            <img
                                id="t18_714_342"
                                style={{
                                    height: 13,
                                    width: 13,
                                    display: 'flex',
                                    borderWidth: 0,
                                    marginLeft: 10,
                                    marginRight: 0,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    dl.functions.modalsPlugin.closeModal(
                                        'AddressPopupLg'
                                    )
                                }}
                                src={
                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/69c17245ea33f76ff74faf996cf2ee0ffac5b0d8.png'
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
export default AddressPopupLgModal
