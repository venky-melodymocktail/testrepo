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

const PostYourNeedHomeLgModal = observer(() => {
    const [anim, setAnim] = useState('')
    const [showModal, setShowModal] = useState(
        dl.modalsStatus['PostYourNeedHomeLgModal']
    )
    useEffect(() => {
        if (!dl.modalsStatus['PostYourNeedHomeLgModal']) {
            closeModal()
        } else {
            setShowModal(true)
        }
    }, [dl.modalsStatus['PostYourNeedHomeLgModal']])

    const closeModal = () => {
        setAnim('')
        setTimeout(() => {
            dl.modalsStatus['PostYourNeedHomeLgModal'] = false
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
                    id="t18_1313_65"
                    style={{
                        width: 710,
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        paddingBottom: 5,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginLeft: 0,
                    }}
                >
                    <div
                        id="t18_1313_32"
                        style={{
                            height: 318,
                            width: 710,
                            borderRadius: 12,
                            backgroundColor: 'rgba(248,246,246,1.00)',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 1,
                            borderColor: 'rgba(207,206,206,1)',
                            borderStyle: 'solid',
                        }}
                    >
                        <div
                            id="t18_1313_33"
                            style={{
                                width: 670,
                                flexDirection: 'column',
                                alignItems: 'center',
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
                                id="t18_1313_34"
                                style={{
                                    width: 663,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 5,
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/d84713b272920278e13443da941134ff6ae973b8.png' !=
                                '' ? (
                                    <img
                                        id="t18_1313_35"
                                        style={{
                                            height: 13,
                                            width: 13,
                                            display: 'flex',
                                            borderWidth: 0,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            dl.functions.modalsPlugin.closeModal(
                                                'PostYourNeedHomeLg'
                                            )
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/d84713b272920278e13443da941134ff6ae973b8.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}
                            </div>

                            <div
                                id="t18_1313_36"
                                style={{
                                    width: 573,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 5,
                                    marginBottom: 0,
                                }}
                            >
                                <span
                                    id="t18_1313_37"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 24,
                                        fontWeight: 600,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '29.045454025268555px',
                                        textAlign: 'center',
                                    }}
                                >
                                    Post your Need
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_1313_38"
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
                                id="t18_1313_39"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 14.5,
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/7c254faa2cae5af751c912a7443528d39e5d9d3f.png' !=
                                '' ? (
                                    <img
                                        id="t18_1313_40"
                                        style={{
                                            height: 89,
                                            width: 89,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 17,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/7c254faa2cae5af751c912a7443528d39e5d9d3f.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <div
                                    id="t18_1313_41"
                                    className={' hoverEffect2-button'}
                                    style={{
                                        height: 23,
                                        width: 239,
                                        borderRadius: 20,
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
                                        borderWidth: 2,
                                        borderColor: 'rgba(186,15,23,1)',
                                        borderStyle: 'solid',
                                        marginTop: 17,
                                        marginBottom: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        var userToken =
                                            dl.functions.common.getCookie(
                                                'userToken'
                                            )

                                        if (userToken) {
                                            dl.functions.modalsPlugin.closeModal(
                                                'PostYourNeedHomeLg'
                                            )
                                            dl.functions.viewsPlugin.showView(
                                                'ineedahomeform'
                                            )
                                            var currentPath =
                                                dl.functions.common.getLastPath()
                                            dl.functions.onLoadFunctions[
                                                currentPath
                                            ]()
                                            dl.functions.modalsPlugin.closeModal(
                                                'PostYourNeedHomeLg'
                                            )
                                        } else {
                                            dl.functions.modalsPlugin.openModal(
                                                'loginLg'
                                            )
                                        }
                                    }}
                                >
                                    <span
                                        id="t18_1313_42"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 19,
                                            fontWeight: 600,
                                            color: 'rgba(186,15,23,1)',
                                            letterSpacing: 0,
                                            lineHeight: '22.99431800842285px',
                                            textAlign: 'left',
                                        }}
                                    >
                                        I need a home rental
                                    </span>
                                </div>
                            </div>

                            <div
                                id="t18_1313_43"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 14.5,
                                    marginRight: 0,
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/89c1fde3e8b53d3716b6fc0974c3dea8a16c0581.png' !=
                                '' ? (
                                    <img
                                        id="t18_1313_44"
                                        style={{
                                            height: 89,
                                            width: 89,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 17,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/89c1fde3e8b53d3716b6fc0974c3dea8a16c0581.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <div
                                    id="t18_1313_45"
                                    className={' hoverEffect2-button'}
                                    style={{
                                        height: 23,
                                        width: 257,
                                        borderRadius: 20,
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
                                        borderWidth: 2,
                                        borderColor: 'rgba(186,15,23,1)',
                                        borderStyle: 'solid',
                                        marginTop: 17,
                                        marginBottom: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        var userToken =
                                            dl.functions.common.getCookie(
                                                'userToken'
                                            )

                                        if (userToken) {
                                            dl.functions.viewsPlugin.showView(
                                                'listmyhomeform'
                                            )
                                            var currentPath =
                                                dl.functions.common.getLastPath()
                                            dl.functions.onLoadFunctions[
                                                currentPath
                                            ]()
                                            dl.functions.modalsPlugin.closeModal(
                                                'PostYourNeedHomeLg'
                                            )
                                        } else {
                                            dl.functions.modalsPlugin.openModal(
                                                'loginLg'
                                            )
                                        }
                                        dl.functions.modalsPlugin.closeModal(
                                            'PostYourNeedHomeLg'
                                        )

                                        //                       dl.functions.modalsPlugin.closeModal('PostYourNeedHomeLg')
                                        // dl.functions.viewsPlugin.showView("ihaveahomerental")
                                        // var currentPath = dl.functions.common.getLastPath()
                                        // dl.functions.onLoadFunctions[currentPath]()

                                        // var serviceSelector=dl.changes.serviceSelector.services

                                        // for(var key in serviceSelector){
                                        //     serviceSelector[key]="rgba(186,15,23,1)"
                                        // }

                                        // serviceSelector["travelSuggestions"]="rgba(156,18,24,1)"
                                    }}
                                >
                                    <span
                                        id="t18_1313_46"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 20,
                                            fontWeight: 600,
                                            color: 'rgba(186,15,23,1)',
                                            letterSpacing: 0,
                                            lineHeight: '24.204544067382812px',
                                            textAlign: 'left',
                                        }}
                                    >
                                        I have a home rental
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
})
export default PostYourNeedHomeLgModal
