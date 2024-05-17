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

const PromoteSModal = observer(() => {
    const [anim, setAnim] = useState('')
    const [showModal, setShowModal] = useState(dl.modalsStatus['PromoteSModal'])
    useEffect(() => {
        if (!dl.modalsStatus['PromoteSModal']) {
            closeModal()
        } else {
            setShowModal(true)
        }
    }, [dl.modalsStatus['PromoteSModal']])

    const closeModal = () => {
        setAnim('')
        setTimeout(() => {
            dl.modalsStatus['PromoteSModal'] = false
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
                    id="t18_1641_332"
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
                    }}
                >
                    <div
                        id="t18_1641_200"
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
                            id="t18_1641_269"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 15,
                            }}
                        >
                            <div
                                id="t18_1641_263"
                                style={{
                                    width: 325,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 7.5,
                                }}
                            >
                                <span
                                    id="t18_1641_265"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 14,
                                        fontWeight: 600,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '16.94318199157715px',
                                        textAlign: 'left',
                                    }}
                                >
                                    {dl.changes.promoteDetail.navigationdetail}
                                </span>
                            </div>

                            <div
                                id="t18_1641_201"
                                style={{
                                    width: 325,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 7.5,
                                    marginBottom: 7.5,
                                }}
                            >
                                <span
                                    id="t18_1641_202"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 16,
                                        fontWeight: 700,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '19.363636016845703px',
                                        textAlign: 'left',
                                    }}
                                >
                                    {dl.changes.promoteDetail.title}
                                </span>
                            </div>

                            <div
                                id="t18_1777_2"
                                style={{
                                    width: 325,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 7.5,
                                    marginBottom: 0,
                                }}
                            >
                                <div
                                    id="t18_1777_3"
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
                                        id="t18_1777_4"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 15,
                                            fontWeight: 500,
                                            color: 'rgba(186,15,23,1)',
                                            letterSpacing: 0,
                                            lineHeight: '18.15340805053711px',
                                            textAlign: 'left',
                                        }}
                                    >
                                        {dl.changes.promoteErroeMsg}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div
                            id="t18_1641_203"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 15,
                                marginBottom: 15,
                            }}
                        >
                            <div
                                id="t18_1641_204"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 13,
                                }}
                            >
                                <span
                                    id="t18_1641_205"
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
                                    From date
                                </span>

                                <MaterialDate
                                    value={dl.changes.promoteDetail.fromDate}
                                    minDate={dl.changes.todaysDate}
                                    style={{
                                        height: 20,
                                        width: 287,
                                        borderRadius: 5,
                                        backgroundColor:
                                            'rgba(248,246,246,1.00)',
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
                                        dl.changes.promoteDetail.fromDate = val
                                        dl.changes.promoteErroeMsg = ''
                                    }}
                                />
                            </div>

                            <div
                                id="t18_1641_208"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 13,
                                    marginBottom: 0,
                                }}
                            >
                                <span
                                    id="t18_1641_209"
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
                                    To date
                                </span>

                                <MaterialDate
                                    value={dl.changes.promoteDetail.toDate}
                                    minDate={dl.changes.todaysDate}
                                    style={{
                                        height: 20,
                                        width: 287,
                                        borderRadius: 5,
                                        backgroundColor:
                                            'rgba(248,246,246,1.00)',
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
                                        dl.changes.promoteDetail.toDate = val
                                        dl.changes.promoteErroeMsg = ''
                                    }}
                                />
                            </div>
                        </div>

                        <div
                            id="t18_1641_212"
                            style={{
                                width: 309,
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 15,
                                marginBottom: 15,
                            }}
                        >
                            <span
                                id="t18_1641_213"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 13,
                                    fontWeight: 500,
                                    color: 'rgba(113,113,113,1)',
                                    letterSpacing: 0,
                                    lineHeight: '15.732954025268555px',
                                    textAlign: 'left',
                                    marginTop: 0,
                                    marginBottom: 2.5,
                                }}
                            >
                                Expected price
                            </span>

                            <span
                                id="t18_1641_214"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 18,
                                    fontWeight: 700,
                                    color: 'rgba(197,18,29,1)',
                                    letterSpacing: 0,
                                    lineHeight: '21.784090042114258px',
                                    textAlign: 'left',
                                    marginTop: 2.5,
                                    marginBottom: 0,
                                }}
                            >
                                $10/day
                            </span>
                        </div>

                        <div
                            id="t18_1641_215"
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
                                const run = async () => {
                                    // dl.changes.promotionMode = false
                                    var fromdate = new Date(
                                        dl.changes.promoteDetail.fromDate
                                    )
                                    var todate = new Date(
                                        dl.changes.promoteDetail.toDate
                                    )
                                    var today = new Date()
                                    today.setHours(0, 0, 0, 0)

                                    dl.changes.promoteErroeMsg =
                                        'Enter Correct Dates!'

                                    if (
                                        fromdate >= today &&
                                        fromdate < todate &&
                                        todate > today
                                    ) {
                                        // dl.changes.promotionMode = true
                                        var currentPath =
                                            dl.functions.common.getLastPath()
                                        dl.changes.payemtforService =
                                            currentPath
                                        dl.functions.modalsPlugin.closeModal(
                                            'promoteS'
                                        )
                                        dl.functions.modalsPlugin.openModal(
                                            'paymentSelector'
                                        )
                                    } else {
                                        dl.changes.promoteErroeMsg =
                                            'Enter Correct Dates!'
                                    }

                                    // if(todate<=today || todate=fromDate){
                                    //     alert("enter correct date")
                                    //     return
                                    // }

                                    // }
                                }

                                run()
                            }}
                        >
                            <span
                                id="t18_1641_216"
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
                                Proceed to pay
                            </span>
                        </div>

                        <div
                            id="t18_1641_217"
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
                                id="t18_1641_218"
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
                                    id="t18_1641_219"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 16,
                                        fontWeight: 700,
                                        color: 'rgba(248,246,246,1)',
                                        letterSpacing: 0,
                                        lineHeight: '19.363636016845703px',
                                        textAlign: 'left',
                                        marginLeft: 0,
                                        marginRight: 60,
                                    }}
                                >
                                    Promote
                                </span>

                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/35e1eb519c564e49bdd0f7a13d03a9f27535aa69.png' !=
                                '' ? (
                                    <img
                                        id="t18_1641_220"
                                        style={{
                                            height: 12,
                                            width: 12,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: 60,
                                            marginRight: 0,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            dl.functions.modalsPlugin.closeModal(
                                                'promoteS'
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
export default PromoteSModal
