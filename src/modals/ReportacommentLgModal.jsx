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

const ReportacommentLgModal = observer(() => {
    const [anim, setAnim] = useState('')
    const [showModal, setShowModal] = useState(
        dl.modalsStatus['ReportacommentLgModal']
    )
    useEffect(() => {
        if (!dl.modalsStatus['ReportacommentLgModal']) {
            closeModal()
        } else {
            setShowModal(true)
        }
    }, [dl.modalsStatus['ReportacommentLgModal']])

    const closeModal = () => {
        setAnim('')
        setTimeout(() => {
            dl.modalsStatus['ReportacommentLgModal'] = false
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
                    id="t18_1003_143"
                    style={{
                        height: 449,
                        width: 589,
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
                        id="t18_994_88"
                        style={{
                            height: 449,
                            width: 589,
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_994_89"
                            style={{
                                height: 389,
                                width: 589,
                                borderRadius: 10,
                                backgroundColor: 'rgba(255,255,255,1.00)',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                paddingTop: 60,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                            }}
                        >
                            <div
                                id="t18_994_90"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 17.5,
                                }}
                            >
                                <div
                                    id="t18_994_91"
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
                                    }}
                                >
                                    <div
                                        id="t18_994_92"
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
                                            id="t18_994_93"
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
                                            id="t18_994_94"
                                            value={
                                                dl.changes.reportForm.firstName
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

                                                dl.changes.reportForm.firstName =
                                                    val
                                            }}
                                            type="text"
                                        ></input>
                                    </div>

                                    <div
                                        id="t18_994_95"
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
                                            id="t18_994_96"
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
                                            id="t18_994_97"
                                            value={
                                                dl.changes.reportForm.lastName
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

                                                dl.changes.reportForm.lastName =
                                                    val
                                            }}
                                            type="text"
                                        ></input>
                                    </div>
                                </div>

                                <div
                                    id="t18_994_98"
                                    style={{
                                        flexDirection: 'row',
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
                                        id="t18_994_99"
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
                                            id="t18_994_100"
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
                                            id="t18_994_101"
                                            value={dl.changes.reportForm.email}
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

                                                dl.changes.reportForm.email =
                                                    val
                                            }}
                                            type="text"
                                        ></input>
                                    </div>

                                    <div
                                        id="t18_994_102"
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
                                            id="t18_994_103"
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
                                            id="t18_994_104"
                                            style={{
                                                height: 40,
                                                width: 216,
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
                                                id="t18_1926_91"
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

                                                    dl.changes.reportForm.countryCode =
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
                                                    dl.changes
                                                        .reportCountryCodeSelector
                                                ) &&
                                                    dl.changes.reportCountryCodeSelector.map(
                                                        (item, index) => {
                                                            return (
                                                                <option
                                                                    value={item}
                                                                    selected={
                                                                        item ==
                                                                        dl
                                                                            .changes
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
                                                id="t18_1928_129"
                                                value={
                                                    dl.changes.reportForm.phone
                                                }
                                                style={{
                                                    height: 33,
                                                    width: 178,
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

                                                    dl.changes.reportForm.phone =
                                                        val
                                                }}
                                                type="text"
                                            ></input>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_994_107"
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
                                        id="t18_994_108"
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
                                        id="t18_994_109"
                                        style={{
                                            height: '40px',
                                            width: 457,
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

                            <div
                                id="t18_994_115"
                                className={' contact-btn'}
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
                                    marginTop: 17.5,
                                    marginBottom: 0,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    dl.functions.submitReport()
                                }}
                            >
                                <span
                                    id="t18_994_116"
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
                        </div>

                        <div
                            id="t18_994_117"
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
                                id="t18_994_118"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 20,
                                    fontWeight: 700,
                                    color: 'rgba(248,246,246,1)',
                                    letterSpacing: 0,
                                    lineHeight: '24.204544067382812px',
                                    textAlign: 'left',
                                    marginLeft: 0,
                                    marginRight: 115,
                                }}
                            >
                                Report
                            </span>

                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/35e1eb519c564e49bdd0f7a13d03a9f27535aa69.png' !=
                            '' ? (
                                <img
                                    id="t18_994_119"
                                    style={{
                                        height: 13,
                                        width: 13,
                                        display: 'flex',
                                        borderWidth: 0,
                                        marginLeft: 115,
                                        marginRight: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        dl.functions.modalsPlugin.closeModal(
                                            'reportacommentLg'
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
export default ReportacommentLgModal
