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
import LogoutIcon from '@mui/icons-material/Logout'

const NavigationXsModal = observer(() => {
    const [anim, setAnim] = useState('revealModalLeft')
    const [showModal, setShowModal] = useState(
        dl.modalsStatus['NavigationXsModal']
    )
    useEffect(() => {
        if (!dl.modalsStatus['NavigationXsModal']) {
            closeModal()
        } else {
            setShowModal(true)
        }
    }, [dl.modalsStatus['NavigationXsModal']])

    const closeModal = () => {
        setAnim('exitModalLeft')
        setTimeout(() => {
            dl.modalsStatus['NavigationXsModal'] = false
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

                    backgroundImage:
                        'linear-gradient(90deg, rgba(186,15,23,1.00) 100%,rgba(173,16,23,1.00) 88%,rgba(106,11,15,1.00) 0%)',

                    overflow: 'scroll',
                }}
            >
                <div
                    id="t18_1785_63"
                    style={{
                        width: 400,
                        backgroundImage:
                            'linear-gradient(90deg, rgba(186,15,23,1.00) 100%,rgba(173,16,23,1.00) 88%,rgba(106,11,15,1.00) 0%)',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        paddingBottom: 5,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_1785_64"
                        style={{
                            width: 400,
                            backgroundImage:
                                'linear-gradient(90deg, rgba(186,15,23,1.00) 100%,rgba(173,16,23,1.00) 88%,rgba(106,11,15,1.00) 0%)',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            paddingTop: 40,
                            paddingBottom: 40,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_1803_196"
                            style={{
                                height: 370,
                                borderRadius: 20,
                                backgroundColor: 'rgba(255,255,255,1.00)',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <div
                                id="t18_1810_248"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 15,
                                }}
                            >
                                <div
                                    id="t18_1803_197"
                                    style={{
                                        width: 280,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-end',
                                        display: 'flex',
                                        paddingLeft: 50,
                                        paddingRight: 30,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 5,
                                    }}
                                >
                                    <span
                                        id="t18_1803_198"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 18,
                                            fontWeight: 600,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '21.784090042114258px',
                                            textAlign: 'left',
                                            marginLeft: 0,
                                            marginRight: 100,
                                        }}
                                    >
                                        Account
                                    </span>

                                    {'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cdce05a7-d1d8-4d32-93b2-51f2168da480' !=
                                    '' ? (
                                        <img
                                            id="t18_1803_199"
                                            style={{
                                                height: 20,
                                                width: 15,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginLeft: 100,
                                                marginRight: 0,
                                                cursor: 'pointer',
                                                minWidth: '15px',
                                            }}
                                            onClick={(e) => {
                                                dl.functions.modalsPlugin.closeModal(
                                                    'navigationXs'
                                                )
                                            }}
                                            src={
                                                'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cdce05a7-d1d8-4d32-93b2-51f2168da480'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}
                                </div>

                                <div
                                    id="t18_1803_200"
                                    style={{
                                        height: 74,
                                        width: 270,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        paddingLeft: 40,
                                        paddingRight: 50,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        borderColor: 'rgba(207,206,206,1)',
                                        borderBottomWidth: 1,
                                        borderStyle: 'solid',
                                        marginTop: 5,
                                        marginBottom: 0,
                                    }}
                                >
                                    <div
                                        id="t18_1803_201"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 0,
                                            marginRight: 7.5,
                                        }}
                                    >
                                        {dl.changes.userDetail.profilePic
                                            ?.slice(4, -1)
                                            .trim() != '' ? (
                                            <img
                                                id="t18_1803_202"
                                                style={{
                                                    height: 48,
                                                    width: 48,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    borderRadius: '48px',
                                                }}
                                                src={dl.changes.userDetail.profilePic
                                                    ?.slice(4, -1)
                                                    .trim()}
                                            ></img>
                                        ) : (
                                            <></>
                                        )}
                                    </div>

                                    <div
                                        id="t18_1810_250"
                                        style={{
                                            width: 228,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 7.5,
                                            marginRight: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_1803_203"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 16,
                                                fontWeight: 600,
                                                color: 'rgba(113,113,113,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '19.363636016845703px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            {dl.changes.userDetail.name}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div
                                id="t18_1803_204"
                                style={{
                                    width: 280,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingLeft: 40,
                                    paddingRight: 40,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 15,
                                    marginBottom: 0,
                                }}
                            >
                                <div
                                    id="t18_1803_234"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 15,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        dl.functions.viewsPlugin.showView(
                                            'profile'
                                        )
                                        var currentPath =
                                            dl.functions.common.getLastPath()
                                        dl.functions.onLoadFunctions[
                                            currentPath
                                        ]()
                                        dl.functions.modalsPlugin.closeModal(
                                            'navigationXs'
                                        )
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/a253ca33a593b89d405c069911f5f3b48cef65ab.png' !=
                                    '' ? (
                                        <img
                                            id="t18_1803_230"
                                            style={{
                                                height: 20,
                                                width: 20,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 5,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/a253ca33a593b89d405c069911f5f3b48cef65ab.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <div
                                        id="t18_1803_205"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 5,
                                            marginRight: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_1803_212"
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
                                                id="t18_1803_213"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 16,
                                                    fontWeight: 500,
                                                    color: 'rgba(186,15,23,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '20.799999237060547px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                Profile
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_1803_237"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 15,
                                        marginBottom: 15,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        dl.functions.viewsPlugin.showView(
                                            'rentallistings'
                                        )
                                        var currentPath =
                                            dl.functions.common.getLastPath()
                                        dl.functions.onLoadFunctions[
                                            currentPath
                                        ]()
                                        dl.functions.modalsPlugin.closeModal(
                                            'navigationXs'
                                        )
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ec5d1131ed32e02cccbb08db36526a74db3cc7a5.png' !=
                                    '' ? (
                                        <img
                                            id="t18_1803_238"
                                            style={{
                                                height: 19,
                                                width: 22,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 5,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ec5d1131ed32e02cccbb08db36526a74db3cc7a5.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <div
                                        id="t18_1803_239"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 5,
                                            marginRight: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_1803_240"
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
                                                id="t18_1803_241"
                                                style={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: 16,
                                                    fontWeight: 500,
                                                    color: 'rgba(186,15,23,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '20.799999237060547px',
                                                    textAlign: 'left',
                                                }}
                                            >
                                                My listings
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_1803_235"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 15,
                                        marginBottom: 15,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        dl.functions.viewsPlugin.showView(
                                            'studyabroadbookings'
                                        )
                                        var currentPath =
                                            dl.functions.common.getLastPath()
                                        dl.functions.onLoadFunctions[
                                            currentPath
                                        ]()
                                        dl.functions.modalsPlugin.closeModal(
                                            'navigationXs'
                                        )
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b645e18a5057aff36503d9e4f15e5c9b91817e3c.png' !=
                                    '' ? (
                                        <img
                                            id="t18_1803_233"
                                            style={{
                                                height: 18,
                                                width: 20,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 5,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b645e18a5057aff36503d9e4f15e5c9b91817e3c.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <div
                                        id="t18_1803_216"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 5,
                                            marginRight: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_1803_217"
                                            style={{
                                                fontFamily: 'Poppins',
                                                fontSize: 16,
                                                fontWeight: 500,
                                                color: 'rgba(186,15,23,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '20.799999237060547px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            My bookings
                                        </span>
                                    </div>
                                </div>

                                <div
                                    id="t18_1803_236"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 15,
                                        marginBottom: 15,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        dl.functions.viewsPlugin.showView(
                                            'rentalbookmarks'
                                        )
                                        var currentPath =
                                            dl.functions.common.getLastPath()
                                        dl.functions.onLoadFunctions[
                                            currentPath
                                        ]()
                                        dl.functions.modalsPlugin.closeModal(
                                            'navigationXs'
                                        )
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/781974136c19024e636d0a39249f62526c90eea4.png' !=
                                    '' ? (
                                        <img
                                            id="t18_1803_232"
                                            style={{
                                                height: 20,
                                                width: 18,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 5,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/781974136c19024e636d0a39249f62526c90eea4.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <div
                                        id="t18_1803_220"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 5,
                                            marginRight: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_1803_221"
                                            style={{
                                                fontFamily: 'Poppins',
                                                fontSize: 16,
                                                fontWeight: 500,
                                                color: 'rgba(186,15,23,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '20.799999237060547px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            Bookmarks
                                        </span>
                                    </div>
                                </div>

                                <div
                                    id="t18_1803_236"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 15,
                                        marginBottom: 15,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        // dl.functions.viewsPlugin.showView(
                                        //     'rentalbookmarks'
                                        // )
                                        // var currentPath =
                                        //     dl.functions.common.getLastPath()
                                        // dl.functions.onLoadFunctions[
                                        //     currentPath
                                        // ]()
                                        // dl.functions.modalsPlugin.closeModal(
                                        //     'navigationXs'
                                        // )
                                        dl.functions.modalsPlugin.openModal(
                                            'logOutPopup'
                                        )
                                        dl.functions.modalsPlugin.closeModal(
                                            'navigationXs'
                                        )
                                    }}
                                >
                                    {/* {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/781974136c19024e636d0a39249f62526c90eea4.png' !=
                                    '' ? (
                                        <img
                                            id="t18_1803_232"
                                            style={{
                                                height: 20,
                                                width: 18,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 5,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/781974136c19024e636d0a39249f62526c90eea4.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )} */}

                                    <LogoutIcon
                                        style={{
                                            height: 25,
                                            width: 22,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: 0,
                                            marginRight: 10,
                                            color: 'rgba(186,15,23,1)',
                                        }}
                                        color="rgba(186,15,23,1)"
                                    />

                                    <div
                                        id="t18_1803_220"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 5,
                                            marginRight: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_1803_221"
                                            style={{
                                                fontFamily: 'Poppins',
                                                fontSize: 16,
                                                fontWeight: 500,
                                                color: 'rgba(186,15,23,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '20.799999237060547px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            Logout
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
})
export default NavigationXsModal
