import React, { useEffect, useState } from 'react'
import dl from '../../datalayer/state'
import { observer } from 'mobx-react'
import Lottie from 'react-lottie'

import MaterialSwitch from '../../components/main/MaterialSwitch.jsx'
import MaterialSelect from '../../components/main/MaterialSelect.jsx'
import ReactDraft from '../../components/main/ReactDraft.jsx'
import MaterialMenu from '../../components/main/MaterialMenu.jsx'
import MMPagination from '../../components/main/MMPagination.jsx'
import MMFilter from '../../components/main/MMFilter.jsx'
import MaterialDate from '../../components/main/MaterialDate.jsx'
import MaterialAutoComplete from '../../components/main/MaterialAutoComplete.jsx'
import MaterialRating from '../../components/main/MaterialRating.jsx'

import MmFooter from '../../components/MmFooter.jsx'
import MmHeader from '../../components/MmHeader.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'

const Contactus_4 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 400
            const element = document.getElementById('t18_902_8701')
            if (element) {
                element.style.transform = 'scale(' + scale + ')'
                element.style.transformOrigin = 'center top'
            }
            if (scale < 1) {
                element.style.marginBottom =
                    -(1 - scale) * element.offsetHeight + 'px'
            }
        }

        window.addEventListener('resize', handleResize)
        handleResize() // Initial scale calculation

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <div
            style={{
                justifyContent: 'center',
                display: 'flex',
                width: '100%',
                backgroundColor: 'rgba(255,255,255,1.00)',
            }}
        >
            <div
                id="t18_902_8701"
                style={{
                    width: 400,
                    backgroundColor: 'rgba(255,255,255,1.00)',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    paddingBottom: 10,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <MmHeaderXs
                    {...dl.changes.userDetail}
                    onChangeAddress={(val) => {
                        dl.functions.modalsPlugin.openModal('AddressPopupS')
                    }}
                    onLogIn={(val) => {
                        dl.functions.viewsPlugin.showView('login')
                    }}
                    onClickProfile={(val) => {
                        // dl.functions.viewsPlugin.showView("profile")
                        // var currentPath = dl.functions.common.getLastPath()
                        // dl.functions.onLoadFunctions[currentPath]()
                        // var screens = [
                        //     "rentallistings",
                        //     "ridelistings",
                        //     "travelcompanionlisting",
                        //     "questionlistings",
                        //     "studyabroadbookings",
                        //     "visabookings",
                        //     "rentalbookmarks",
                        //     "ridebookmarks",
                        //     "travelcompanionbookmarks",
                        //     "moviebookmarks",
                        //     "blogbookmarks",
                        //     "questionbookmarks",
                        // ]
                        // var currentPath = dl.functions.common.getLastPath()
                        // for(var i=0; i<screens.length; i++){
                        //     if(screens[i]==currentPath){
                        //     	val.stopPropagation();

                        //     }
                        // }

                        dl.functions.modalsPlugin.openModal('navigationXs')
                    }}
                />

                <div
                    id="t18_902_8550"
                    style={{
                        width: 360,
                        backgroundColor: 'rgba(248,246,246,1.00)',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingTop: 25,
                        paddingBottom: 40,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_902_8551"
                        style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 0,
                            marginBottom: 10,
                        }}
                    >
                        <span
                            id="t18_902_8552"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 28,
                                fontWeight: 700,
                                color: 'rgba(0,0,0,1)',
                                letterSpacing: 0,
                                lineHeight: '35px',
                                textAlign: 'center',
                                marginTop: 0,
                                marginBottom: 5,
                            }}
                        >
                            Do you want to post an Ad?
                        </span>

                        <span
                            id="t18_902_8553"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 15,
                                fontWeight: 500,
                                color: 'rgba(113,113,113,1)',
                                letterSpacing: 0,
                                lineHeight: '18.15340805053711px',
                                textAlign: 'left',
                                marginTop: 5,
                                marginBottom: 0,
                            }}
                        >
                            Contact us here
                        </span>
                    </div>

                    <div
                        id="t18_902_8554"
                        style={{
                            flexDirection: 'row',
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
                            id="t18_902_8555"
                            style={{
                                height: 79,
                                width: 174,
                                borderRadius: 12,
                                backgroundColor: 'rgba(255,255,255,1.00)',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingTop: 15,
                                paddingBottom: 15,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 0,
                                marginRight: 5,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                dl.functions.common.callNumber('+14694434605')
                            }}
                        >
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b95f8784c0fdf03d13bf3bb26d4b8c8a3249e50d.png' !=
                            '' ? (
                                <img
                                    id="t18_902_8556"
                                    style={{
                                        height: 43,
                                        width: 42,
                                        display: 'flex',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 10,
                                    }}
                                    src={
                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b95f8784c0fdf03d13bf3bb26d4b8c8a3249e50d.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}

                            <span
                                id="t18_902_8557"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 13,
                                    fontWeight: 600,
                                    color: 'rgba(82,82,86,1)',
                                    letterSpacing: 0,
                                    lineHeight: '15.732954025268555px',
                                    textAlign: 'left',
                                    marginTop: 10,
                                    marginBottom: 0,
                                }}
                            >
                                +1 4694434605
                            </span>
                        </div>

                        <div
                            id="t18_902_8558"
                            style={{
                                height: 79,
                                width: 195,
                                borderRadius: 12,
                                backgroundColor: 'rgba(255,255,255,1.00)',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingTop: 15,
                                paddingBottom: 15,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 5,
                                marginRight: 0,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                dl.functions.common.sendEmail(
                                    'admin@melodymocktail.com'
                                )
                            }}
                        >
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/e2513dbd4a8460a472d4de84135c73a82a2555e5.png' !=
                            '' ? (
                                <img
                                    id="t18_902_8559"
                                    style={{
                                        height: 42,
                                        width: 42,
                                        display: 'flex',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 10,
                                    }}
                                    src={
                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/e2513dbd4a8460a472d4de84135c73a82a2555e5.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}

                            <span
                                id="t18_902_8560"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 13,
                                    fontWeight: 600,
                                    color: 'rgba(82,82,86,1)',
                                    letterSpacing: 0,
                                    lineHeight: '15.732954025268555px',
                                    textAlign: 'left',
                                    marginTop: 10,
                                    marginBottom: 0,
                                }}
                            >
                                admin@melodymocktail.com
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    id="t18_902_8561"
                    style={{
                        height: 296,
                        width: 400,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        paddingBottom: 147,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_902_8562"
                        style={{
                            height: 10,
                            width: 400,
                            backgroundColor: 'rgba(186,15,23,1.00)',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingTop: 40,
                            paddingBottom: 151,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 0,
                            marginBottom: -30,
                        }}
                    >
                        <span
                            id="t18_902_8563"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 30,
                                fontWeight: 700,
                                color: 'rgba(255,255,255,1)',
                                letterSpacing: 0,
                                lineHeight: '36.30681610107422px',
                                textAlign: 'left',
                                marginTop: 0,
                                marginBottom: 2.5,
                            }}
                        >
                            Contact Us
                        </span>

                        <span
                            id="t18_902_8564"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 15,
                                fontWeight: 400,
                                color: 'rgba(255,255,255,1)',
                                letterSpacing: 0,
                                lineHeight: '18.15340805053711px',
                                textAlign: 'left',
                                marginTop: 2.5,
                                marginBottom: 0,
                            }}
                        >
                            Feel free to get in touch with us
                        </span>
                    </div>

                    <div
                        id="t18_902_8565"
                        style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: -30,
                            marginBottom: -30,
                        }}
                    >
                        <div
                            id="t18_902_8566"
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
                                id="t18_902_8567"
                                style={{
                                    height: 128,
                                    width: 174,
                                    borderRadius: 10,
                                    backgroundColor: 'rgba(248,246,246,1.00)',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    boxShadow:
                                        '0px 10px 20px rgba(0,0,0,0.07100000232458115)',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 5,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    dl.functions.common.callNumber(
                                        '+14694434605'
                                    )
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/aeab48983fe260f59868f4ceabd1a13e6d06938e.png' !=
                                '' ? (
                                    <img
                                        id="t18_902_8568"
                                        style={{
                                            height: 52,
                                            width: 52,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 10,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/aeab48983fe260f59868f4ceabd1a13e6d06938e.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <span
                                    id="t18_902_8569"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 14,
                                        fontWeight: 600,
                                        color: 'rgba(82,82,86,1)',
                                        letterSpacing: 0,
                                        lineHeight: '16.94318199157715px',
                                        textAlign: 'left',
                                        marginTop: 10,
                                        marginBottom: 0,
                                    }}
                                >
                                    +1 4694434605
                                </span>
                            </div>

                            <div
                                id="t18_902_8570"
                                style={{
                                    height: 128,
                                    width: 195,
                                    borderRadius: 10,
                                    backgroundColor: 'rgba(248,246,246,1.00)',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    boxShadow:
                                        '0px 10px 20px rgba(0,0,0,0.07100000232458115)',
                                    borderWidth: 0,
                                    marginLeft: 5,
                                    marginRight: 0,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    dl.functions.common.sendEmail(
                                        'admin@melodymocktail.com'
                                    )
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/254daf3266d78c805ac96b393d57ac2f20f9892c.png' !=
                                '' ? (
                                    <img
                                        id="t18_902_8571"
                                        style={{
                                            height: 52,
                                            width: 52,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 10,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/254daf3266d78c805ac96b393d57ac2f20f9892c.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <span
                                    id="t18_902_8572"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 600,
                                        color: 'rgba(82,82,86,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
                                        textAlign: 'left',
                                        marginTop: 10,
                                        marginBottom: 0,
                                    }}
                                >
                                    admin@melodymocktail.com
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_902_8573"
                            style={{
                                height: 124,
                                width: 174,
                                borderRadius: 10,
                                backgroundColor: 'rgba(248,246,246,1.00)',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                boxShadow:
                                    '0px 10px 20px rgba(0,0,0,0.07100000232458115)',
                                borderWidth: 0,
                                marginTop: 10,
                                marginBottom: 0,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                dl.functions.common.startWAChat('+14694434605')
                            }}
                        >
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/978075568f9c33788aba3c3da05049f4a168b3f8.png' !=
                            '' ? (
                                <img
                                    id="t18_902_8574"
                                    style={{
                                        height: 52,
                                        width: 52,
                                        display: 'flex',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 15,
                                    }}
                                    src={
                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/978075568f9c33788aba3c3da05049f4a168b3f8.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}

                            <span
                                id="t18_902_8575"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 15,
                                    fontWeight: 700,
                                    color: 'rgba(82,82,86,1)',
                                    letterSpacing: 0,
                                    lineHeight: '18.15340805053711px',
                                    textAlign: 'left',
                                    marginTop: 15,
                                    marginBottom: 0,
                                }}
                            >
                                Chat with us
                            </span>
                        </div>
                    </div>

                    <div
                        id="t18_902_8576"
                        style={{
                            height: 81,
                            width: 400,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: 'flex',
                            position: 'relative',
                            borderWidth: 0,
                            marginTop: -30,
                            marginBottom: 0,
                        }}
                    ></div>
                </div>

                <MmFooterXs />
            </div>
        </div>
    )
})
export default Contactus_4
