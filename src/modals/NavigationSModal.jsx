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

const NavigationSModal = observer(() => {
    const [anim, setAnim] = useState('revealModalLeft')
    const [showModal, setShowModal] = useState(
        dl.modalsStatus['NavigationSModal']
    )
    useEffect(() => {
        if (!dl.modalsStatus['NavigationSModal']) {
            closeModal()
        } else {
            setShowModal(true)
        }
    }, [dl.modalsStatus['NavigationSModal']])

    const closeModal = () => {
        setAnim('exitModalLeft')
        setTimeout(() => {
            dl.modalsStatus['NavigationSModal'] = false
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
                    id="t18_1785_76"
                    style={{
                        width: 620,
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
                        id="t18_1785_77"
                        style={{
                            width: 620,
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
                            id="t18_1803_170"
                            style={{
                                height: 494,
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
                                id="t18_1803_171"
                                style={{
                                    width: 424,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    display: 'flex',
                                    paddingLeft: 50,
                                    paddingRight: 50,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 15,
                                }}
                            >
                                <span
                                    id="t18_1803_172"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 24,
                                        fontWeight: 600,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '29.045454025268555px',
                                        textAlign: 'left',
                                        marginLeft: 0,
                                        marginRight: 155,
                                    }}
                                >
                                    Account
                                </span>

                                {'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d0e2088-9ddc-4882-ad5d-e2efa1e34146' !=
                                '' ? (
                                    <img
                                        id="t18_1803_173"
                                        style={{
                                            height: 22,
                                            width: 19,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: 155,
                                            marginRight: 0,
                                            cursor: 'pointer',
                                            minWidth: '19px',
                                        }}
                                        onClick={(e) => {
                                            dl.functions.modalsPlugin.closeModal(
                                                'navigationS'
                                            )
                                        }}
                                        src={
                                            'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d0e2088-9ddc-4882-ad5d-e2efa1e34146'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}
                            </div>

                            <div
                                id="t18_1803_174"
                                style={{
                                    height: 87,
                                    width: 424,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingLeft: 50,
                                    paddingRight: 50,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderBottomWidth: 1,
                                    borderStyle: 'solid',
                                    marginTop: 15,
                                    marginBottom: 15,
                                }}
                            >
                                <div
                                    id="t18_1803_175"
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
                                            id="t18_1803_176"
                                            style={{
                                                height: 57,
                                                width: 57,
                                                display: 'flex',
                                                borderWidth: 0,
                                                borderRadius: '57px',
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
                                    id="t18_1810_251"
                                    style={{
                                        width: 353,
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
                                        id="t18_1803_177"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 18,
                                            fontWeight: 600,
                                            color: 'rgba(113,113,113,1)',
                                            letterSpacing: 0,
                                            lineHeight: '21.784090042114258px',
                                            textAlign: 'left',
                                        }}
                                    >
                                        {dl.changes.userDetail.name}
                                    </span>
                                </div>
                            </div>

                            <div
                                id="t18_1803_178"
                                style={{
                                    width: 424,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingLeft: 50,
                                    paddingRight: 50,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 15,
                                    marginBottom: 0,
                                }}
                            >
                                <div
                                    id="t18_1803_179"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 20,
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
                                            'navigationS'
                                        )
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ec5d1131ed32e02cccbb08db36526a74db3cc7a5.png' !=
                                    '' ? (
                                        <img
                                            id="t18_1803_242"
                                            style={{
                                                height: 21,
                                                width: 24,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 10,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ec5d1131ed32e02cccbb08db36526a74db3cc7a5.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <div
                                        id="t18_1803_186"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 10,
                                            marginRight: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_1803_187"
                                            style={{
                                                fontFamily: 'Poppins',
                                                fontSize: 20,
                                                fontWeight: 500,
                                                color: 'rgba(186,15,23,1)',
                                                letterSpacing: 0,
                                                lineHeight: '26px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            My listings
                                        </span>
                                    </div>
                                </div>

                                <div
                                    id="t18_1803_188"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 20,
                                        marginBottom: 20,
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
                                            'navigationS'
                                        )
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b645e18a5057aff36503d9e4f15e5c9b91817e3c.png' !=
                                    '' ? (
                                        <img
                                            id="t18_1803_244"
                                            style={{
                                                height: 22,
                                                width: 24,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 10,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b645e18a5057aff36503d9e4f15e5c9b91817e3c.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <div
                                        id="t18_1803_190"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 10,
                                            marginRight: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_1803_191"
                                            style={{
                                                fontFamily: 'Poppins',
                                                fontSize: 20,
                                                fontWeight: 500,
                                                color: 'rgba(186,15,23,1)',
                                                letterSpacing: 0,
                                                lineHeight: '26px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            My bookings
                                        </span>
                                    </div>
                                </div>

                                <div
                                    id="t18_1803_192"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 20,
                                        marginBottom: 20,
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
                                            'navigationS'
                                        )
                                    }}
                                >
                                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/781974136c19024e636d0a39249f62526c90eea4.png' !=
                                    '' ? (
                                        <img
                                            id="t18_1803_245"
                                            style={{
                                                height: 25,
                                                width: 22,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 10,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/781974136c19024e636d0a39249f62526c90eea4.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <div
                                        id="t18_1803_194"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 10,
                                            marginRight: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_1803_195"
                                            style={{
                                                fontFamily: 'Poppins',
                                                fontSize: 20,
                                                fontWeight: 500,
                                                color: 'rgba(186,15,23,1)',
                                                letterSpacing: 0,
                                                lineHeight: '26px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            Bookmarks
                                        </span>
                                    </div>
                                </div>

                                <div
                                    id="t18_1803_192"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 20,
                                        marginBottom: 0,
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
                                        //     'navigationS'
                                        // )
                                        dl.functions.modalsPlugin.openModal(
                                            'logOutPopup'
                                        )
                                        dl.functions.modalsPlugin.closeModal(
                                            'navigationS'
                                        )
                                    }}
                                >
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
                                    {/* {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/781974136c19024e636d0a39249f62526c90eea4.png' !=
                                    '' ? (
                                        <img
                                            id="t18_1803_245"
                                            style={{
                                                height: 25,
                                                width: 22,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 10,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/781974136c19024e636d0a39249f62526c90eea4.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )} */}

                                    <div
                                        id="t18_1803_194"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 10,
                                            marginRight: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_1803_195"
                                            style={{
                                                fontFamily: 'Poppins',
                                                fontSize: 20,
                                                fontWeight: 500,
                                                color: 'rgba(186,15,23,1)',
                                                letterSpacing: 0,
                                                lineHeight: '26px',
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
export default NavigationSModal
