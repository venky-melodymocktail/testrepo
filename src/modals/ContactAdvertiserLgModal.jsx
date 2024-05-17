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

const ContactAdvertiserLgModal = observer(() => {
    const [anim, setAnim] = useState('')
    const [showModal, setShowModal] = useState(
        dl.modalsStatus['ContactAdvertiserLgModal']
    )
    useEffect(() => {
        if (!dl.modalsStatus['ContactAdvertiserLgModal']) {
            closeModal()
        } else {
            setShowModal(true)
        }
    }, [dl.modalsStatus['ContactAdvertiserLgModal']])

    const closeModal = () => {
        setAnim('')
        setTimeout(() => {
            dl.modalsStatus['ContactAdvertiserLgModal'] = false
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
                    id="t18_1367_311"
                    style={{
                        width: 589,
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
                        id="t18_1367_279"
                        style={{
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            boxShadow: '0px 4px 20px rgba(0,0,0,0.25)',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_1367_280"
                            style={{
                                height: 659,
                                borderRadius: 10,
                                backgroundColor: 'rgba(255,255,255,1.00)',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                display: 'flex',
                                paddingBottom: 32,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                paddingLeft: 35,
                            }}
                        >
                            <div
                                id="t18_1367_281"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: -27.5,
                                }}
                            >
                                <div
                                    id="t18_1367_282"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 10,
                                        marginTop: 150,
                                    }}
                                >
                                    <div
                                        id="t18_1367_283"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 0,
                                            marginRight: 12.5,
                                        }}
                                    >
                                        <span
                                            id="t18_1367_284"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 13,
                                                fontWeight: 400,
                                                color: 'rgba(113,113,113,1)',
                                                letterSpacing: 0,
                                                lineHeight: '22px',
                                                textAlign: 'left',
                                                marginTop: 0,
                                                marginBottom: 2.5,
                                            }}
                                        >
                                            First Name
                                        </span>

                                        <input
                                            id="t18_1367_285"
                                            value={
                                                dl.changes.contactUSForm
                                                    .firstname
                                            }
                                            style={{
                                                height: 20,
                                                width: 206,
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
                                                borderColor:
                                                    'rgba(207,206,206,1)',
                                                borderStyle: 'solid',
                                                marginTop: 2.5,
                                                marginBottom: 0,
                                                cursor: 'pointer',
                                            }}
                                            onChange={(val) => {
                                                val = val.target.value

                                                dl.changes.contactUSForm.firstname =
                                                    val
                                            }}
                                            type="text"
                                        ></input>
                                    </div>

                                    <div
                                        id="t18_1367_286"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 12.5,
                                            marginRight: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_1367_287"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 13,
                                                fontWeight: 400,
                                                color: 'rgba(113,113,113,1)',
                                                letterSpacing: 0,
                                                lineHeight: '22px',
                                                textAlign: 'left',
                                                marginTop: 0,
                                                marginBottom: 2.5,
                                            }}
                                        >
                                            Last Name
                                        </span>

                                        <input
                                            id="t18_1367_288"
                                            value={
                                                dl.changes.contactUSForm
                                                    .lastname
                                            }
                                            style={{
                                                height: 20,
                                                width: 206,
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
                                                borderColor:
                                                    'rgba(207,206,206,1)',
                                                borderStyle: 'solid',
                                                marginTop: 2.5,
                                                marginBottom: 0,
                                                cursor: 'pointer',
                                            }}
                                            onChange={(val) => {
                                                val = val.target.value

                                                dl.changes.contactUSForm.lastname =
                                                    val
                                            }}
                                            type="text"
                                        ></input>
                                    </div>
                                </div>

                                <div
                                    id="t18_1367_289"
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
                                        id="t18_1367_290"
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
                                            id="t18_1367_291"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 13,
                                                fontWeight: 400,
                                                color: 'rgba(113,113,113,1)',
                                                letterSpacing: 0,
                                                lineHeight: '22px',
                                                textAlign: 'left',
                                                marginTop: 0,
                                                marginBottom: 2.5,
                                            }}
                                        >
                                            Email address
                                        </span>

                                        <input
                                            id="t18_1367_292"
                                            value={
                                                dl.changes.contactUSForm.email
                                            }
                                            style={{
                                                height: 20,
                                                width: 457,
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
                                                borderColor:
                                                    'rgba(207,206,206,1)',
                                                borderStyle: 'solid',
                                                marginTop: 2.5,
                                                marginBottom: 0,
                                                cursor: 'pointer',
                                            }}
                                            onChange={(val) => {
                                                val = val.target.value

                                                dl.changes.contactUSForm.email =
                                                    val
                                            }}
                                            type="text"
                                        ></input>
                                    </div>

                                    <div
                                        id="t18_1367_293"
                                        style={{
                                            flexDirection: 'column',
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
                                            id="t18_1367_294"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 13,
                                                fontWeight: 400,
                                                color: 'rgba(113,113,113,1)',
                                                letterSpacing: 0,
                                                lineHeight: '22px',
                                                textAlign: 'left',
                                                marginTop: 0,
                                                marginBottom: 2.5,
                                            }}
                                        >
                                            Phone
                                        </span>

                                        <div
                                            id="t18_1367_295"
                                            style={{
                                                height: 40,
                                                width: 467,
                                                borderRadius: 5,
                                                backgroundColor:
                                                    'rgba(255,255,255,1.00)',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingLeft: 10,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 1,
                                                borderColor:
                                                    'rgba(207,206,206,1)',
                                                borderStyle: 'solid',
                                                marginTop: 2.5,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <select
                                                name="cars"
                                                id="t18_1454_2"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 2,
                                                    cursor: 'pointer',
                                                }}
                                                onChange={(val) => {
                                                    val = val.target.value

                                                    dl.changes.contactUSForm.countryCode =
                                                        val
                                                }}
                                            >
                                                <option
                                                    value=""
                                                    disabled
                                                    selected
                                                >
                                                    Select your option
                                                </option>
                                                {Array.isArray(
                                                    dl.changes.countryCodes
                                                ) &&
                                                    dl.changes.countryCodes.map(
                                                        (item, index) => {
                                                            return (
                                                                <option
                                                                    value={item}
                                                                    selected={
                                                                        item ==
                                                                        dl
                                                                            .changes
                                                                            .contactUSForm
                                                                            .countryCode
                                                                    }
                                                                >
                                                                    {item}
                                                                </option>
                                                            )
                                                        }
                                                    )}
                                            </select>

                                            <input
                                                id="t18_1454_3"
                                                value={
                                                    dl.changes.contactUSForm
                                                        .phone
                                                }
                                                style={{
                                                    height: 31,
                                                    width: 424,
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 2,
                                                    marginRight: 0,
                                                    cursor: 'pointer',
                                                }}
                                                onChange={(val) => {
                                                    val = val.target.value

                                                    dl.changes.contactUSForm.phone =
                                                        val
                                                }}
                                                type="text"
                                            ></input>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_1367_298"
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
                                    <span
                                        id="t18_1367_299"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 13,
                                            fontWeight: 400,
                                            color: 'rgba(113,113,113,1)',
                                            letterSpacing: 0,
                                            lineHeight: '22px',
                                            textAlign: 'left',
                                            marginTop: 0,
                                            marginBottom: 2.5,
                                        }}
                                    >
                                        Message
                                    </span>

                                    <input
                                        id="t18_1367_300"
                                        value={dl.changes.contactUSForm.message}
                                        style={{
                                            height: 63,
                                            width: 457,
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
                                            marginTop: 2.5,
                                            marginBottom: 0,
                                            cursor: 'pointer',
                                        }}
                                        onChange={(val) => {
                                            val = val.target.value

                                            dl.changes.contactUSForm.message =
                                                val
                                        }}
                                        type="text"
                                    ></input>
                                </div>

                                <div
                                    id="t18_1367_301"
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
                                    <span
                                        id="t18_1367_302"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 13,
                                            fontWeight: 400,
                                            color: 'rgba(113,113,113,1)',
                                            letterSpacing: 0,
                                            lineHeight: '22px',
                                            textAlign: 'left',
                                            marginTop: 0,
                                            marginBottom: 2.5,
                                        }}
                                    >
                                        Enter captcha
                                    </span>

                                    <ReCAPTCHA
                                        sitekey={
                                            dl.changes.recaptchaSettings
                                                .clientKey
                                        }
                                        onChange={(val) => {
                                            dl.changes.contactUSForm.validated = true
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    fontSize: 15,
                                    color: 'black',
                                    width: '90%',
                                    // marginBottom: 100,
                                }}
                            >
                                <p
                                    style={{
                                        fontSize: 15,
                                        color: 'black',
                                        fontWeight: '600',
                                        marginBottom: -5,
                                        marginTop: 35,
                                        // marginBottom: 100,
                                    }}
                                >
                                    ⚠️ Beware of scams! Protect yourself by
                                    being cautious of unsolicited messages or
                                    requests for personal information
                                </p>
                            </div>

                            <div
                                id="t18_1367_306"
                                className={' contact-btn'}
                                style={{
                                    height: 16,
                                    width: 207,
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
                                    marginTop: 17.5,
                                    marginBottom: 0,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    dl.functions.submitContactRequest()
                                }}
                            >
                                <span
                                    id="t18_1367_307"
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
                                    Submit Request
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_1367_308"
                            style={{
                                height: 49,
                                width: 579,
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
                                top: 28,
                                left: -5,
                                marginBottom: 0,
                            }}
                        >
                            <span
                                id="t18_1367_309"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 24,
                                    fontWeight: 700,
                                    color: 'rgba(248,246,246,1)',
                                    letterSpacing: 0,
                                    lineHeight: '29.045454025268555px',
                                    textAlign: 'left',
                                    marginLeft: 0,
                                    marginRight: 75,
                                }}
                            >
                                Contact Advertiser
                            </span>

                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/35e1eb519c564e49bdd0f7a13d03a9f27535aa69.png' !=
                            '' ? (
                                <img
                                    id="t18_1367_310"
                                    style={{
                                        height: 13,
                                        width: 13,
                                        display: 'flex',
                                        borderWidth: 0,
                                        marginLeft: 75,
                                        marginRight: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        dl.functions.modalsPlugin.closeModal(
                                            'contactAdvertiserLg'
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
        </Modal>
    )
})
export default ContactAdvertiserLgModal
