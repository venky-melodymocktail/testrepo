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

const EnterOtpLgModal = observer(() => {
    const [anim, setAnim] = useState('')
    const [showModal, setShowModal] = useState(
        dl.modalsStatus['EnterOtpLgModal']
    )
    useEffect(() => {
        if (!dl.modalsStatus['EnterOtpLgModal']) {
            closeModal()
        } else {
            setShowModal(true)
        }
    }, [dl.modalsStatus['EnterOtpLgModal']])

    const closeModal = () => {
        setAnim('')
        setTimeout(() => {
            dl.modalsStatus['EnterOtpLgModal'] = false
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
                    id="t18_689_251"
                    style={{
                        height: 530,
                        width: 543,
                        flexDirection: 'column',
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
                        id="t18_689_226"
                        style={{
                            height: 480,
                            width: 488,
                            borderRadius: 20,
                            backgroundColor: 'rgba(248,246,246,1.00)',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingLeft: 55,
                            paddingTop: 50,
                            position: 'relative',
                            overflow: 'visible',
                            boxShadow:
                                '0px 4px 20px rgba(0,0,0,0.15000000596046448)',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_689_227"
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
                                id="t18_689_228"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 19,
                                }}
                            >
                                <div
                                    id="t18_689_229"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 12.5,
                                    }}
                                >
                                    <div
                                        id="t18_1539_6"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 16,
                                        }}
                                    >
                                        <div
                                            id="t18_689_230"
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
                                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ee9af55177e369e4d0347768ed81b56a525e3f31.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_689_231"
                                                    style={{
                                                        height: 68,
                                                        width: 141,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                        marginTop: 0,
                                                        marginBottom: 12.5,
                                                    }}
                                                    src={
                                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ee9af55177e369e4d0347768ed81b56a525e3f31.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}

                                            <div
                                                id="t18_689_232"
                                                style={{
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 12.5,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_689_233"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 22,
                                                        fontWeight: 700,
                                                        color: 'rgba(113,113,113,1)',
                                                        letterSpacing: 0,
                                                        lineHeight: '26.625px',
                                                        textAlign: 'left',
                                                        marginTop: 0,
                                                        marginBottom: 12.5,
                                                    }}
                                                >
                                                    Enter code
                                                </span>

                                                <div
                                                    id="t18_689_234"
                                                    style={{
                                                        height: 48,
                                                        width: 411,
                                                        flexDirection: 'row',
                                                        alignItems:
                                                            'flex-start',
                                                        justifyContent:
                                                            'flex-start',
                                                        display: 'flex',
                                                        position: 'relative',
                                                        overflow: 'visible',
                                                        borderWidth: 0,
                                                        marginTop: 12.5,
                                                        marginBottom: 0,
                                                    }}
                                                >
                                                    <span
                                                        id="t18_689_235"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontSize: 14,
                                                            fontWeight: 500,
                                                            color: 'rgba(140,146,152,1)',
                                                            letterSpacing: 0,
                                                            lineHeight: '24px',
                                                            textAlign: 'left',
                                                        }}
                                                    >
                                                        {
                                                            dl.changes
                                                                .otpPopupMessage
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            id="t18_1539_4"
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
                                                id="t18_1539_5"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 15,
                                                    fontWeight: 500,
                                                    color: 'rgba(186,15,23,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '18.15340805053711px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                {dl.changes.validOtp}
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_689_236"
                                        style={{
                                            height: 60,
                                            width: 245,
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 16,
                                            marginBottom: 0,
                                            cursor: 'pointer',
                                            itemSpacing: 15,
                                            paddingLeft: '',
                                            paddingRight: 100,
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
                                                        <div
                                                            style={{ width: 5 }}
                                                        ></div>
                                                    }
                                                    renderInput={(props) => (
                                                        <input {...props} />
                                                    )}
                                                />
                                            )
                                        })()}
                                    </div>
                                </div>

                                <div
                                    id="t18_1539_9"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 12.5,
                                        marginBottom: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {}}
                                >
                                    <div
                                        id="t18_689_245"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: dl.changes.showTimer,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_689_246"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 15,
                                                fontWeight: 600,
                                                color: 'rgba(188,184,182,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '18.15340805053711px',
                                                textAlign: 'left',
                                                marginLeft: 0,
                                                marginRight: 2,
                                            }}
                                        >
                                            Resend OTP in
                                        </span>

                                        <span
                                            id="t18_689_247"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 15,
                                                fontWeight: 600,
                                                color: 'rgba(186,15,23,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '18.15340805053711px',
                                                textAlign: 'left',
                                                marginLeft: 2,
                                                marginRight: 0,
                                            }}
                                        >
                                            {dl.changes.countDown}
                                        </span>
                                    </div>

                                    <div
                                        id="t18_1541_2"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_1539_7"
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
                                                id="t18_1539_8"
                                                onClick={() => {
                                                    var run = async () => {
                                                        var body = {
                                                            phonenumber:
                                                                dl.changes
                                                                    .logInDeatil
                                                                    .countryCode +
                                                                dl.changes
                                                                    .logInDeatil
                                                                    .phone,
                                                            // validationType:
                                                            //     'phone',
                                                        }

                                                        if(dl.changes.validationId == "singin"){
                                                            var res =
                                                            await dl.functions.getOtpLogin(
                                                                body,
                                                                'EnterOtpLg'
                                                            )
                                                        }
                                                        else{
                                                            dl.functions.validateAndSignup('EnterOtpLg')
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
                                                    lineHeight:
                                                        '16.94318199157715px',
                                                    textAlign: 'left',
                                                    cursor: 'pointer',
                                                    display:
                                                        dl.changes.showResend,
                                                }}
                                            >
                                                Resend OTP
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                id="t18_689_248"
                                className={' hovereffectsignIn-btn'}
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
                                    marginTop: 19,
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

                                        var userData = {
                                            firstName : dl.changes.userDetails.firstName,
                                            lastName : dl.changes.userDetails.lastName,
                                            email : dl.changes.userDetails.email,
                                            phone : dl.changes.userDetails.countryCode + dl.changes.userDetails.phone,
                                            name : dl.changes.userDetails.firstName+ " " + dl.changes.userDetails.lastName
                                        }

                                        var token = {
                                            token : res.data.token
                                        }
                                        dl.functions.common.setCookie(
                                            'userToken',
                                            res.data.token,
                                            10080
                                        )
                                        var res2 =
                                            await dl.functions.registerUser(
                                                token, userData
                                            )

                                        var lastnameFistnamebody = {
                                            firstName:
                                                dl.changes.userDetails
                                                    .firstName,
                                            lastName:
                                                dl.changes.userDetails.lastName,
                                        }
                                        var res3 =
                                            await dl.functions.updateFirstLastName(
                                                lastnameFistnamebody
                                            )
                                        // dl.functions.common.getCookie(name)
                                        // alert(res2)
                                        // dl.functions.viewsPlugin.showView("home")
                                        // alert("Registered Successfully!")
                                        dl.functions.modalsPlugin.closeModal(
                                            'EnterOtpLg'
                                        )
                                        dl.functions.getUserDetail()

                                        dl.functions.viewsPlugin.showView(
                                            'home'
                                        )
                                        dl.functions.modalsPlugin.openModal('AddressPopupLg')
                                        var currentPath = dl.functions.common.getLastPath()
                                        await dl.functions.onLoadFunctions[currentPath]()

                                        

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
                                                'EnterOtpLg'
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
                                    id="t18_689_249"
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

                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/69c17245ea33f76ff74faf996cf2ee0ffac5b0d8.png' !=
                        '' ? (
                            <img
                                id="t18_689_250"
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
                                        'EnterOtpLg'
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
export default EnterOtpLgModal
