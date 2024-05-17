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

const Contactus_3 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 620
            const element = document.getElementById('t18_902_8659')
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
                backgroundColor: '#fff',
            }}
        >
            <div
                id="t18_902_8659"
                style={{
                    width: 620,
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
                <div
                    id="t18_902_8660"
                    style={{
                        width: 620,
                        backgroundColor: 'rgba(255,255,255,1.00)',
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
                    <MmHeaderS
                        {...dl.changes.userDetail}
                        onChangeAddress={(val) => {
                            dl.functions.modalsPlugin.openModal('AddressPopupS')
                        }}
                        onClickMenu={(val) => {}}
                        onLogIn={(val) => {
                            dl.functions.viewsPlugin.showView('login')
                        }}
                        onClickProfile={(val) => {
                            dl.functions.viewsPlugin.showView('profile')
                            var currentPath = dl.functions.common.getLastPath()
                            dl.functions.onLoadFunctions[currentPath]()
                        }}
                    />

                    <div
                        id="t18_902_8524"
                        style={{
                            width: 470,
                            backgroundColor: 'rgba(248,246,246,1.00)',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingLeft: 75,
                            paddingRight: 75,
                            paddingTop: 25,
                            paddingBottom: 40,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_902_8525"
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
                                id="t18_902_8526"
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
                                id="t18_902_8527"
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
                            id="t18_902_8528"
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
                                id="t18_902_8529"
                                className={'hvr-grow'}
                                style={{
                                    height: 79,
                                    width: 208,
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
                                    marginRight: 10,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    dl.functions.common.callNumber(
                                        '+14694434605'
                                    )
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b95f8784c0fdf03d13bf3bb26d4b8c8a3249e50d.png' !=
                                '' ? (
                                    <img
                                        id="t18_902_8530"
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
                                    id="t18_902_8531"
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
                                id="t18_902_8532"
                                className={'hvr-grow'}
                                style={{
                                    height: 79,
                                    width: 208,
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
                                    marginLeft: 10,
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
                                        id="t18_902_8533"
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
                                    id="t18_902_8534"
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
                                    admin@melodymocktail.com
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        id="t18_902_8535"
                        style={{
                            height: 313,
                            width: 620,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingBottom: 147,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginBottom: 0,
                        }}
                    >
                        <div
                            id="t18_902_8536"
                            style={{
                                height: 10,
                                width: 620,
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
                                id="t18_902_8537"
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
                                id="t18_902_8538"
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
                            id="t18_902_8539"
                            style={{
                                width: 620,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: -30,
                                marginBottom: 0,
                            }}
                        >
                            <div
                                id="t18_902_8540"
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
                                    id="t18_902_8541"
                                    className={'hvr-grow'}
                                    style={{
                                        height: 128,
                                        width: 208,
                                        borderRadius: 10,
                                        backgroundColor:
                                            'rgba(248,246,246,1.00)',
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
                                        marginRight: 10,
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
                                            id="t18_902_8542"
                                            style={{
                                                height: 52,
                                                width: 52,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 15,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/aeab48983fe260f59868f4ceabd1a13e6d06938e.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <span
                                        id="t18_902_8543"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 14,
                                            fontWeight: 600,
                                            color: 'rgba(82,82,86,1)',
                                            letterSpacing: 0,
                                            lineHeight: '16.94318199157715px',
                                            textAlign: 'left',
                                            marginTop: 15,
                                            marginBottom: 0,
                                        }}
                                    >
                                        +1 4694434605
                                    </span>
                                </div>

                                <div
                                    id="t18_902_8544"
                                    className={'hvr-grow'}
                                    style={{
                                        height: 128,
                                        width: 208,
                                        borderRadius: 10,
                                        backgroundColor:
                                            'rgba(248,246,246,1.00)',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        boxShadow:
                                            '0px 10px 20px rgba(0,0,0,0.07100000232458115)',
                                        borderWidth: 0,
                                        marginLeft: 10,
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
                                            id="t18_902_8545"
                                            style={{
                                                height: 52,
                                                width: 52,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginTop: 0,
                                                marginBottom: 15,
                                            }}
                                            src={
                                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/254daf3266d78c805ac96b393d57ac2f20f9892c.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <span
                                        id="t18_902_8546"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 14,
                                            fontWeight: 600,
                                            color: 'rgba(82,82,86,1)',
                                            letterSpacing: 0,
                                            lineHeight: '16.94318199157715px',
                                            textAlign: 'left',
                                            marginTop: 15,
                                            marginBottom: 0,
                                        }}
                                    >
                                        admin@melodymocktail.com
                                    </span>
                                </div>
                            </div>

                            <div
                                id="t18_902_8547"
                                className={'hvr-grow'}
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
                                    dl.functions.common.startWAChat(
                                        '+14694434605'
                                    )
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/978075568f9c33788aba3c3da05049f4a168b3f8.png' !=
                                '' ? (
                                    <img
                                        id="t18_902_8548"
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
                                    id="t18_902_8549"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 15,
                                        fontWeight: 600,
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
                    </div>
                </div>

                <MmFooterS />
            </div>
        </div>
    )
})
export default Contactus_3
