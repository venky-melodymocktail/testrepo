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

const ReportacommentSModal = observer(() => {
    const [anim, setAnim] = useState('')
    const [showModal, setShowModal] = useState(
        dl.modalsStatus['ReportacommentSModal']
    )
    useEffect(() => {
        if (!dl.modalsStatus['ReportacommentSModal']) {
            closeModal()
        } else {
            setShowModal(true)
        }
    }, [dl.modalsStatus['ReportacommentSModal']])

    const closeModal = () => {
        setAnim('')
        setTimeout(() => {
            dl.modalsStatus['ReportacommentSModal'] = false
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
                    id="t18_1927_92"
                    style={{
                        width: 360,
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        paddingBottom: 5,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginBottom: 0,
                    }}
                >
                    <div
                        id="t18_1927_93"
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
                            id="t18_1927_94"
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
                                id="t18_1927_95"
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
                                    id="t18_1927_96"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 400,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '22px',
                                        textAlign: 'left',
                                        marginTop: 0,
                                        marginBottom: 3,
                                    }}
                                >
                                    First name
                                </span>

                                <input
                                    id="t18_1927_97"
                                    value={dl.changes.reportForm.firstName}
                                    style={{
                                        height: 20,
                                        width: 287,
                                        borderRadius: 5,
                                        backgroundColor:
                                            'rgba(255,255,255,1.00)',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-end',
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
                                        marginTop: 3,
                                        marginBottom: 0,
                                        cursor: 'pointer',
                                    }}
                                    onChange={(val) => {
                                        val = val.target.value

                                        dl.changes.reportForm.firstName = val
                                    }}
                                    type="text"
                                ></input>
                            </div>

                            <div
                                id="t18_1927_98"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 5,
                                    marginBottom: 5,
                                }}
                            >
                                <span
                                    id="t18_1927_99"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 400,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '22px',
                                        textAlign: 'left',
                                        marginTop: 0,
                                        marginBottom: 3,
                                    }}
                                >
                                    Last name
                                </span>

                                <input
                                    id="t18_1927_100"
                                    value={dl.changes.reportForm.lastName}
                                    style={{
                                        height: 20,
                                        width: 287,
                                        borderRadius: 5,
                                        backgroundColor:
                                            'rgba(255,255,255,1.00)',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-end',
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
                                        marginTop: 3,
                                        marginBottom: 0,
                                        cursor: 'pointer',
                                    }}
                                    onChange={(val) => {
                                        val = val.target.value

                                        dl.changes.reportForm.lastName = val
                                    }}
                                    type="text"
                                ></input>
                            </div>

                            <div
                                id="t18_1927_101"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 5,
                                    marginBottom: 5,
                                }}
                            >
                                <span
                                    id="t18_1927_102"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 400,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '22px',
                                        textAlign: 'left',
                                        marginTop: 0,
                                        marginBottom: 3,
                                    }}
                                >
                                    Email
                                </span>

                                <input
                                    id="t18_1927_103"
                                    value={dl.changes.reportForm.email}
                                    style={{
                                        height: 20,
                                        width: 287,
                                        borderRadius: 5,
                                        backgroundColor:
                                            'rgba(255,255,255,1.00)',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-end',
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
                                        marginTop: 3,
                                        marginBottom: 0,
                                        cursor: 'pointer',
                                    }}
                                    onChange={(val) => {
                                        val = val.target.value

                                        dl.changes.reportForm.email = val
                                    }}
                                    type="text"
                                ></input>
                            </div>

                            <div
                                id="t18_1927_104"
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
                                    id="t18_1927_105"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 400,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '22px',
                                        textAlign: 'left',
                                        marginTop: 0,
                                        marginBottom: 5,
                                    }}
                                >
                                    Phone
                                </span>

                                <div
                                    id="t18_1927_106"
                                    style={{
                                        height: 20,
                                        width: 287,
                                        borderRadius: 5,
                                        backgroundColor:
                                            'rgba(255,255,255,1.00)',
                                        flexDirection: 'row',
                                        alignItems: 'center',
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
                                        marginTop: 5,
                                        marginBottom: 5,
                                    }}
                                >
                                    <select
                                        name="cars"
                                        id="t18_1927_107"
                                        style={{
                                            width: 36,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 0,
                                            marginRight: 5,
                                            cursor: 'pointer',
                                        }}
                                        onChange={(val) => {
                                            val = val.target.value

                                            dl.changes.reportForm.countryCode =
                                                val
                                        }}
                                    >
                                        <option value="" disabled selected>
                                            Select your option
                                        </option>
                                        {Array.isArray(
                                            dl.changes.reportCountryCodeSelector
                                        ) &&
                                            dl.changes.reportCountryCodeSelector.map(
                                                (item, index) => {
                                                    return (
                                                        <option
                                                            value={item}
                                                            selected={
                                                                item ==
                                                                dl.changes
                                                                    .reportForm
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
                                        id="t18_1927_110"
                                        value={dl.changes.reportForm.phone}
                                        style={{
                                            height: 31,
                                            width: 249,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 5,
                                            marginRight: 0,
                                            cursor: 'pointer',
                                        }}
                                        onChange={(val) => {
                                            val = val.target.value

                                            dl.changes.reportForm.phone = val
                                        }}
                                        type="text"
                                    ></input>
                                </div>

                                <div
                                    id="t18_1927_125"
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
                                        id="t18_1927_126"
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
                                        Select a reason to report the question
                                    </span>

                                    <select
                                        name="cars"
                                        id="t18_1927_127"
                                        style={{
                                            height: '40px',
                                            width: 287,
                                            borderRadius: 5,
                                            backgroundColor:
                                                'rgba(255,255,255,1.00)',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-end',
                                            display: 'flex',
                                            paddingLeft: 10,
                                            paddingRight: 10,
                                            paddingTop: '0px',
                                            paddingBottom: '0px',
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

                                            dl.changes.reportForm.resonOfReporting =
                                                val
                                        }}
                                    >
                                        <option value="" disabled selected>
                                            Select your option
                                        </option>
                                        {Array.isArray(
                                            dl.changes.reportReasons
                                        ) &&
                                            dl.changes.reportReasons.map(
                                                (item, index) => {
                                                    return (
                                                        <option
                                                            value={item}
                                                            selected={
                                                                item ==
                                                                dl.changes
                                                                    .reportForm
                                                                    .resonOfReporting
                                                            }
                                                        >
                                                            {item}
                                                        </option>
                                                    )
                                                }
                                            )}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div
                            id="t18_1927_119"
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
                                dl.functions.submitReport()
                            }}
                        >
                            <span
                                id="t18_1927_120"
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
                                Report
                            </span>
                        </div>

                        <div
                            id="t18_1927_121"
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
                                id="t18_1927_122"
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
                                    id="t18_1927_123"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 16,
                                        fontWeight: 700,
                                        color: 'rgba(248,246,246,1)',
                                        letterSpacing: 0,
                                        lineHeight: '19.363636016845703px',
                                        textAlign: 'left',
                                        marginLeft: 0,
                                        marginRight: 65,
                                    }}
                                >
                                    Report
                                </span>

                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/35e1eb519c564e49bdd0f7a13d03a9f27535aa69.png' !=
                                '' ? (
                                    <img
                                        id="t18_1927_124"
                                        style={{
                                            height: 12,
                                            width: 12,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: 65,
                                            marginRight: 0,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            dl.functions.modalsPlugin.closeModal(
                                                'reportacommentS'
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
export default ReportacommentSModal
