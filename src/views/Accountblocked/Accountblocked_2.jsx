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

const Accountblocked_2 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 900
            const element = document.getElementById('t18_906_9141')
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
                id="t18_906_9141"
                style={{
                    width: 900,
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
                <div
                    id="t18_906_9311"
                    style={{
                        width: 900,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        paddingTop: 60,
                        paddingBottom: 30,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginTop: 0,
                    }}
                >
                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/fd5caf42dbebee49231425cd58845a81dff9ef29.png' !=
                    '' ? (
                        <img
                            id="t18_906_9312"
                            style={{
                                height: 197,
                                width: 276,
                                display: 'flex',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 10,
                            }}
                            src={
                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/fd5caf42dbebee49231425cd58845a81dff9ef29.png'
                            }
                        ></img>
                    ) : (
                        <></>
                    )}

                    <div
                        id="t18_906_9313"
                        style={{
                            height: 40,
                            width: 315,
                            flexDirection: 'column',
                            alignItems: 'center',
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
                            id="t18_908_9377"
                            style={{
                                height: 21,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 0.5,
                            }}
                        >
                            <span
                                id="t18_906_9314"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 500,
                                    color: 'rgba(0,0,0,1)',
                                    letterSpacing: 0,
                                    lineHeight: '25px',
                                    textAlign: 'center',
                                }}
                            >
                                Your account has been blocked
                            </span>
                        </div>

                        <div
                            id="t18_908_9378"
                            style={{
                                height: 21,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0.5,
                                marginBottom: 0,
                            }}
                        >
                            <span
                                id="t18_906_9315"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 400,
                                    color: 'rgba(0,0,0,1)',
                                    letterSpacing: 0,
                                    lineHeight: '25px',
                                    textAlign: 'center',
                                }}
                            >
                                Please contact the admin for more details
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    id="t18_2195_17"
                    style={{
                        height: 309,
                        width: 850,
                        backgroundImage:
                            'url(https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/d8b32c62df0cf2799cf4194007082a569aafc565.png)',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        display: 'flex',
                        paddingRight: 50,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginBottom: 0,
                    }}
                >
                    <div
                        id="t18_2195_18"
                        style={{
                            height: 208,
                            width: 637,
                            backgroundColor: 'rgba(29,26,5,1.00)',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            display: 'flex',
                            paddingLeft: 70,
                            paddingRight: 70,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_2195_19"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 0,
                                marginRight: 5,
                            }}
                        >
                            <span
                                id="t18_2195_20"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 28,
                                    fontWeight: 700,
                                    color: 'rgba(255,255,255,1)',
                                    letterSpacing: 0,
                                    lineHeight: '33.8863639831543px',
                                    textAlign: 'left',
                                    marginTop: 0,
                                    marginBottom: 5,
                                }}
                            >
                                CONTACT US
                            </span>

                            <span
                                id="t18_2195_21"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 13,
                                    fontWeight: 400,
                                    color: 'rgba(255,255,255,1)',
                                    letterSpacing: 0,
                                    lineHeight: '15.732954025268555px',
                                    textAlign: 'left',
                                    marginTop: 5,
                                    marginBottom: 0,
                                }}
                            >
                                Feel free to get in touch with us
                            </span>
                        </div>

                        <div
                            id="t18_2195_22"
                            style={{
                                flexDirection: 'column',
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
                            <div
                                id="t18_2195_23"
                                style={{
                                    borderRadius: 10,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    boxShadow:
                                        '0px 10px 20px rgba(0,0,0,0.07100000232458115)',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 15,
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/aeab48983fe260f59868f4ceabd1a13e6d06938e.png' !=
                                '' ? (
                                    <img
                                        id="t18_2195_24"
                                        style={{
                                            height: 28,
                                            width: 28,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: 0,
                                            marginRight: 7.5,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/aeab48983fe260f59868f4ceabd1a13e6d06938e.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <span
                                    id="t18_2195_25"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 15,
                                        fontWeight: 600,
                                        color: 'rgba(248,246,246,1)',
                                        letterSpacing: 0,
                                        lineHeight: '18.15340805053711px',
                                        textAlign: 'left',
                                        marginLeft: 7.5,
                                        marginRight: 0,
                                    }}
                                >
                                    +1 4694434605
                                </span>
                            </div>

                            <div
                                id="t18_2195_26"
                                style={{
                                    borderRadius: 10,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    boxShadow:
                                        '0px 10px 20px rgba(0,0,0,0.07100000232458115)',
                                    borderWidth: 0,
                                    marginTop: 15,
                                    marginBottom: 15,
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/254daf3266d78c805ac96b393d57ac2f20f9892c.png' !=
                                '' ? (
                                    <img
                                        id="t18_2195_27"
                                        style={{
                                            height: 28,
                                            width: 28,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: 0,
                                            marginRight: 7.5,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/254daf3266d78c805ac96b393d57ac2f20f9892c.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <span
                                    id="t18_2195_28"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 15,
                                        fontWeight: 600,
                                        color: 'rgba(248,246,246,1)',
                                        letterSpacing: 0,
                                        lineHeight: '18.15340805053711px',
                                        textAlign: 'left',
                                        marginLeft: 7.5,
                                        marginRight: 0,
                                    }}
                                >
                                    admin@melodymocktail.com
                                </span>
                            </div>

                            <div
                                id="t18_2195_29"
                                style={{
                                    borderRadius: 10,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    boxShadow:
                                        '0px 10px 20px rgba(0,0,0,0.07100000232458115)',
                                    borderWidth: 0,
                                    marginTop: 15,
                                    marginBottom: 0,
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/978075568f9c33788aba3c3da05049f4a168b3f8.png' !=
                                '' ? (
                                    <img
                                        id="t18_2195_30"
                                        style={{
                                            height: 28,
                                            width: 28,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: 0,
                                            marginRight: 7.5,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/978075568f9c33788aba3c3da05049f4a168b3f8.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <span
                                    id="t18_2195_31"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 15,
                                        fontWeight: 600,
                                        color: 'rgba(248,246,246,1)',
                                        letterSpacing: 0,
                                        lineHeight: '18.15340805053711px',
                                        textAlign: 'left',
                                        marginLeft: 7.5,
                                        marginRight: 0,
                                    }}
                                >
                                    Chat with us
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Accountblocked_2
