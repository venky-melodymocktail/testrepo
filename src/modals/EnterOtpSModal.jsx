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

const EnterOtpSModal = observer(() => {
    const [anim, setAnim] = useState('')
    const [showModal, setShowModal] = useState(
        dl.modalsStatus['EnterOtpSModal']
    )
    useEffect(() => {
        if (!dl.modalsStatus['EnterOtpSModal']) {
            closeModal()
        } else {
            setShowModal(true)
        }
    }, [dl.modalsStatus['EnterOtpSModal']])

    const closeModal = () => {
        setAnim('')
        setTimeout(() => {
            dl.modalsStatus['EnterOtpSModal'] = false
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
                    id="t18_521_622"
                    style={{
                        height: 449,
                        width: 361,
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        paddingBottom: 10,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_521_589"
                        style={{
                            height: 429,
                            width: 341,
                            borderRadius: 20,
                            backgroundColor: 'rgba(248,246,246,1.00)',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingLeft: 20,
                            paddingTop: 20,
                            position: 'relative',
                            overflow: 'visible',
                            boxShadow:
                                '0px 4px 20px rgba(0,0,0,0.15000000596046448)',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_521_590"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 0,
                            }}
                        >
                            <div
                                id="t18_521_591"
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
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ee9af55177e369e4d0347768ed81b56a525e3f31.png' !=
                                '' ? (
                                    <img
                                        id="t18_521_592"
                                        style={{
                                            height: 68,
                                            width: 141,
                                            display: 'flex',
                                            borderWidth: 0,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ee9af55177e369e4d0347768ed81b56a525e3f31.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}
                            </div>

                            <div
                                id="t18_521_593"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 10,
                                    marginBottom: 10,
                                }}
                            >
                                <div
                                    id="t18_521_594"
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
                                    <span
                                        id="t18_521_595"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 22,
                                            fontWeight: 700,
                                            color: 'rgba(113,113,113,1)',
                                            letterSpacing: 0,
                                            lineHeight: '26.625px',
                                            textAlign: 'left',
                                            marginTop: 0,
                                            marginBottom: 5,
                                        }}
                                    >
                                        Enter code
                                    </span>

                                    <div
                                        id="t18_521_596"
                                        style={{
                                            height: 48,
                                            width: 279,
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
                                            id="t18_521_597"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 12,
                                                fontWeight: 500,
                                                color: 'rgba(140,146,152,1)',
                                                letterSpacing: 0,
                                                lineHeight: '20px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            {dl.changes.otpPopupMessage}
                                        </span>
                                    </div>
                                </div>

                                <div
                                    id="t18_521_598"
                                    style={{
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
                                        id="t18_521_599"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 12,
                                            fontWeight: 500,
                                            color: 'rgba(186,15,23,1)',
                                            letterSpacing: 0,
                                            lineHeight: '14.522727012634277px',
                                            textAlign: 'left',
                                        }}
                                    >
                                        {dl.changes.validOtp}
                                    </span>
                                </div>
                            </div>

                            <div
                                id="t18_521_600"
                                style={{
                                    height: 44,
                                    width: 314,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 10,
                                    marginBottom: 10,
                                    cursor: 'pointer',
                                }}
                            >
                                {(() => {
                                    const [otp, setotp] = useState('')

                                    return (
                                        <OtpInput
                                            onChange={(val) => {
                                                setotp(val)

                                                dl.changes.otp = val
                                                dl.changes.validOtp = ''
                                            }}
                                            value={otp}
                                            isDisabled={false}
                                            isInputSecure={false}
                                            inputStyle={{
                                                width: 30,
                                                height: 30,
                                                fontSize: 20,
                                            }}
                                            numInputs={
                                                dl.changes.otpProps
                                                    .numberOfInput
                                            }
                                            renderSeparator={
                                                <div style={{ width: 5 }}></div>
                                            }
                                            renderInput={(props) => (
                                                <input {...props} />
                                            )}
                                        />
                                    )
                                })()}
                            </div>

                            <div
                                id="t18_521_609"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 10,
                                    marginBottom: 10,
                                }}
                            >
                                <div
                                    id="t18_521_610"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: dl.changes.showTimer,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 2,
                                    }}
                                >
                                    <div
                                        id="t18_521_611"
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
                                        <span
                                            id="t18_521_612"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 14,
                                                fontWeight: 600,
                                                color: 'rgba(188,184,182,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '16.94318199157715px',
                                                textAlign: 'left',
                                                marginLeft: 0,
                                                marginRight: 2,
                                            }}
                                        >
                                            Resend OTP in
                                        </span>

                                        <span
                                            id="t18_521_613"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 14,
                                                fontWeight: 600,
                                                color: 'rgba(186,15,23,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '16.94318199157715px',
                                                textAlign: 'left',
                                                marginLeft: 2,
                                                marginRight: 0,
                                            }}
                                        >
                                            {dl.changes.countDown}
                                        </span>
                                    </div>
                                </div>

                                <div
                                    id="t18_521_614"
                                    style={{
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
                                        id="t18_521_615"
                                        onClick={() => {
                                            var run = async () => {
                                                var body = {
                                                    phonenumber:
                                                        dl.changes.logInDeatil
                                                            .countryCode +
                                                        dl.changes.logInDeatil
                                                            .phone,
                                                    // validationType: 'phone',
                                                }

                                                if(dl.changes.validationId == "singin"){
                                                    var res =
                                                    await dl.functions.getOtpLogin(
                                                        body,
                                                        'EnterOtpS'
                                                    )
                                                }
                                                else{
                                                    dl.functions.validateAndSignup('EnterOtpS')
                                                }
                                                
                                            }
                                            run()
                                        }}
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 14,
                                            fontWeight: 600,
                                            color: 'rgba(186,15,23,1)',
                                            letterSpacing: 0,
                                            lineHeight: '16.94318199157715px',
                                            textAlign: 'left',
                                            cursor: 'pointer',
                                            display: dl.changes.showResend,
                                        }}
                                    >
                                        Resend OTP
                                    </span>
                                </div>
                            </div>

                            <div
                                id="t18_521_616"
                                style={{
                                    height: 20,
                                    width: 107,
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
                                    marginTop: 10,
                                    marginBottom: 0,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    const run = async () => {
                                        var otpDetail = {
                                            "code":dl.changes.otp,
                                            "phonenumber":dl.changes.userDetails.countryCode + dl.changes.userDetails.phone,
                                            "mode": dl.changes.validationId,
                                            "firstname": dl.changes.userDetails.firstName,
                                            "lastname": dl.changes.userDetails.lastName,
                                            "email": dl.changes.userDetails.email
                                        }

                                        if (dl.changes.otp.length == 6) {
                                            dl.changes.validOtp = ''
                                        } else {
                                            dl.changes.validOtp = 'invalid otp!'
                                        }

                                        // alert(JSON.stringify(otpDetail))
                                        var res =
                                            await dl.functions.otpVerify(
                                                otpDetail
                                            )
                                        // alert(JSON.stringify(res))

                                        // registerUser()
                                        if (res == false) {
                                            dl.changes.validOtp =
                                                'Please enter a correct otp!'
                                            // alert("Error validating otp")
                                            return
                                        }

                                        var token = {
                                            token : res.data.token
                                        }

                                        var userData = {
                                            firstName : dl.changes.userDetails.firstName,
                                            lastName : dl.changes.userDetails.lastName,
                                            email : dl.changes.userDetails.email,
                                            phone : dl.changes.userDetails.countryCode + dl.changes.userDetails.phone,
                                            name : dl.changes.userDetails.firstName+ " " + dl.changes.userDetails.lastName
                                        }
                                        dl.functions.common.setCookie(
                                            'userToken',
                                            res.token,
                                            10080
                                        )
                                        var res2 =
                                            await dl.functions.registerUser(
                                                token, userData
                                            )
                                        // dl.functions.common.getCookie(name)
                                        // alert(res2)
                                        // dl.functions.viewsPlugin.showView("home")
                                        // alert("Registered Successfully!")
                                        dl.functions.modalsPlugin.closeModal(
                                            'EnterOtpS'
                                        )
                                        dl.functions.getUserDetail()
                                        dl.functions.viewsPlugin.showView(
                                            'home'
                                        )
                                        dl.functions.modalsPlugin.openModal('AddressPopupS')
                                        var currentPath = dl.functions.common.getLastPath()
                                        dl.functions.onLoadFunctions[currentPath]()

                                        
                                    }

                                    const login = async () => {
                                        if (dl.changes.otp.length == 6) {
                                            dl.changes.validOtp = ''
                                            dl.changes.logInOtpDetail.otp =
                                                dl.changes.otp
                                        } else {
                                            dl.changes.validOtp = 'invalid otp!'
                                        }

                                        var otpDetail = {
                                            "code":dl.changes.otp,
                                            "phonenumber":dl.changes.logInDeatil.countryCode + dl.changes.logInDeatil.phone,
                                            "mode": dl.changes.validationId,
                                            "firstname": dl.changes.userDetails.firstName,
                                            "lastname": dl.changes.userDetails.lastName,
                                            "email": dl.changes.userDetails.email
                                        }

                                        var res = await dl.functions.loginUser(
                                            otpDetail
                                        )
                                        if (res.result.data.token) {
                                            var token = res.result.data.token
                                            dl.functions.common.setCookie(
                                                'userToken',
                                                token,
                                                43200
                                            )
                                            dl.functions.modalsPlugin.closeModal(
                                                'EnterOtpS'
                                            )
                                            dl.functions.getUserDetail()

                                            if (dl.changes.currentUrl != '') {
                                                window.location.href =
                                                    dl.changes.currentUrl
                                                dl.changes.currentUrl = ''
                                            } else {
                                                dl.functions.viewsPlugin.showView(
                                                    'home'
                                                )
                                                var currentPath =
                                                    dl.functions.common.getLastPath()
                                                dl.functions.onLoadFunctions[
                                                    currentPath
                                                ]()
                                            }
                                            // dl.functions.viewsPlugin.showView("home")
                                        } else {
                                            dl.changes.validOtp =
                                                'Please enter a correct otp!'
                                            return
                                        }
                                    }

                                    if (dl.changes.loginFlow == true) {
                                        login()
                                    } else {
                                        run()
                                    }
                                }}
                            >
                                <span
                                    id="t18_521_617"
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
                                    Verify
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_521_618"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingTop: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginRight: 0,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                dl.functions.modalsPlugin.closeModal(
                                    'EnterOtpLg'
                                )
                            }}
                        >
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/69c17245ea33f76ff74faf996cf2ee0ffac5b0d8.png' !=
                            '' ? (
                                <img
                                    id="t18_521_619"
                                    style={{
                                        height: 13,
                                        width: 13,
                                        display: 'flex',
                                        borderWidth: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        dl.functions.modalsPlugin.closeModal(
                                            'EnterOtpS'
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
            </div>
        </Modal>
    )
})
export default EnterOtpSModal
