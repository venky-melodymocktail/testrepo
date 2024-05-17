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

const Accountblocked_1 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_906_9077')
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
                id="t18_906_9077"
                style={{
                    width: 1440,
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
                    id="t18_906_9138"
                    style={{
                        width: 1440,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        paddingTop: 60,
                        paddingBottom: 60,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginTop: 0,
                    }}
                >
                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/fd5caf42dbebee49231425cd58845a81dff9ef29.png' !=
                    '' ? (
                        <img
                            id="t18_906_9076"
                            style={{
                                height: 235,
                                width: 330,
                                display: 'flex',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 15,
                            }}
                            src={
                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/fd5caf42dbebee49231425cd58845a81dff9ef29.png'
                            }
                        ></img>
                    ) : (
                        <></>
                    )}

                    <div
                        id="t18_906_9140"
                        style={{
                            height: 55,
                            width: 315,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 15,
                            marginBottom: 0,
                        }}
                    >
                        <span
                            id="t18_906_9137"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 18,
                                fontWeight: 500,
                                color: 'rgba(0,0,0,1)',
                                letterSpacing: 0,
                                lineHeight: '25px',
                                textAlign: 'center',
                                marginTop: 0,
                                marginBottom: 1,
                            }}
                        >
                            Your account has been blocked
                        </span>

                        <span
                            id="t18_906_9139"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 15,
                                fontWeight: 400,
                                color: 'rgba(0,0,0,1)',
                                letterSpacing: 0,
                                lineHeight: '25px',
                                textAlign: 'center',
                                marginTop: 1,
                                marginBottom: 0,
                            }}
                        >
                            Please contact the admin for more details
                        </span>
                    </div>
                </div>

                <div
                    id="t18_2195_2"
                    style={{
                        height: 452,
                        width: 1380,
                        backgroundImage:
                            'url(https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/0da4373f790bb7bf8e643203680333c3b924cf99.png)',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-end',
                        display: 'flex',
                        paddingRight: 60,
                        paddingBottom: 100,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginBottom: 0,
                    }}
                >
                    <div
                        id="t18_2195_3"
                        style={{
                            height: 272,
                            width: 812,
                            backgroundColor: 'rgba(29,26,5,1.00)',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            display: 'flex',
                            paddingLeft: 100,
                            paddingRight: 100,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_2195_4"
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
                                id="t18_2195_5"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 40,
                                    fontWeight: 700,
                                    color: 'rgba(255,255,255,1)',
                                    letterSpacing: 0,
                                    lineHeight: '48.409088134765625px',
                                    textAlign: 'left',
                                    marginTop: 0,
                                    marginBottom: 5,
                                }}
                            >
                                CONTACT US
                            </span>

                            <span
                                id="t18_2195_6"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 400,
                                    color: 'rgba(255,255,255,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginTop: 5,
                                    marginBottom: 0,
                                }}
                            >
                                Feel free to get in touch with us
                            </span>
                        </div>

                        <div
                            id="t18_2195_7"
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
                                id="t18_2195_8"
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
                                        id="t18_2195_9"
                                        style={{
                                            height: 30,
                                            width: 30,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: 0,
                                            marginRight: 5,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/aeab48983fe260f59868f4ceabd1a13e6d06938e.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <span
                                    id="t18_2195_10"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 18,
                                        fontWeight: 600,
                                        color: 'rgba(248,246,246,1)',
                                        letterSpacing: 0,
                                        lineHeight: '21.784090042114258px',
                                        textAlign: 'left',
                                        marginLeft: 5,
                                        marginRight: 0,
                                    }}
                                >
                                    +1 4694434605
                                </span>
                            </div>

                            <div
                                id="t18_2195_11"
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
                                        id="t18_2195_12"
                                        style={{
                                            height: 30,
                                            width: 30,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: 0,
                                            marginRight: 5,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/254daf3266d78c805ac96b393d57ac2f20f9892c.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <span
                                    id="t18_2195_13"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 18,
                                        fontWeight: 600,
                                        color: 'rgba(248,246,246,1)',
                                        letterSpacing: 0,
                                        lineHeight: '21.784090042114258px',
                                        textAlign: 'left',
                                        marginLeft: 5,
                                        marginRight: 0,
                                    }}
                                >
                                    admin@melodymocktail.com
                                </span>
                            </div>

                            <div
                                id="t18_2195_14"
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
                                        id="t18_2195_15"
                                        style={{
                                            height: 30,
                                            width: 30,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: 0,
                                            marginRight: 5,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/978075568f9c33788aba3c3da05049f4a168b3f8.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <span
                                    id="t18_2195_16"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 18,
                                        fontWeight: 600,
                                        color: 'rgba(248,246,246,1)',
                                        letterSpacing: 0,
                                        lineHeight: '21.784090042114258px',
                                        textAlign: 'left',
                                        marginLeft: 5,
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
export default Accountblocked_1
