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

const Login_4 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 400
            const element = document.getElementById('t18_521_553')
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
                backgroundColor: 'rgba(248,246,246,1.00)',
            }}
        >
            <div
                id="t18_521_553"
                style={{
                    height: 770,
                    width: 400,
                    backgroundColor: 'rgba(248,246,246,1.00)',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    paddingTop: 30,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <div
                    id="t18_521_554"
                    style={{
                        flexDirection: 'column',
                        alignItems: 'center',
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
                        id="t18_521_555"
                        style={{
                            width: 317,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 0,
                            marginBottom: 5,
                        }}
                    >
                        <div
                            id="t18_881_6251"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                dl.functions.viewsPlugin.showView('home')
                            }}
                        >
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/03ef37ca13a3790de0511eb479373b3bc99b1f5b.png' !=
                            '' ? (
                                <img
                                    id="t18_521_556"
                                    style={{
                                        height: 10,
                                        width: 6,
                                        display: 'flex',
                                        borderWidth: 0,
                                        marginLeft: 0,
                                        marginRight: 3,
                                    }}
                                    src={
                                        'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/03ef37ca13a3790de0511eb479373b3bc99b1f5b.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}

                            <span
                                id="t18_521_557"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 12,
                                    fontWeight: 600,
                                    color: 'rgba(186,15,23,1)',
                                    letterSpacing: 0,
                                    lineHeight: '14.522727012634277px',
                                    textAlign: 'left',
                                    marginLeft: 3,
                                    marginRight: 0,
                                }}
                            >
                                Back to home
                            </span>
                        </div>
                    </div>

                    <div
                        id="t18_521_558"
                        style={{
                            flexDirection: 'row',
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
                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/0e63659978c275de9e89f65ca33cc1a2105345ac.png' !=
                        '' ? (
                            <img
                                id="t18_521_559"
                                style={{
                                    height: 167,
                                    width: 167,
                                    display: 'flex',
                                    borderWidth: 0,
                                }}
                                src={
                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/0e63659978c275de9e89f65ca33cc1a2105345ac.png'
                                }
                            ></img>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>

                <div
                    id="t18_521_560"
                    style={{
                        height: 538,
                        width: 400,
                        backgroundColor: 'rgba(255,255,255,1.00)',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        paddingTop: 10,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginTop: 15,
                        marginBottom: 0,
                    }}
                >
                    <div
                        id="t18_521_561"
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
                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ee9af55177e369e4d0347768ed81b56a525e3f31.png' !=
                        '' ? (
                            <img
                                id="t18_521_562"
                                style={{
                                    height: 46,
                                    width: 97,
                                    display: 'flex',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 15,
                                }}
                                src={
                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ee9af55177e369e4d0347768ed81b56a525e3f31.png'
                                }
                            ></img>
                        ) : (
                            <></>
                        )}

                        <div
                            id="t18_521_563"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingBottom: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                borderColor: 'rgba(207,206,206,1)',
                                borderBottomWidth: 1,
                                borderStyle: 'solid',
                                marginTop: 15,
                                marginBottom: 0,
                            }}
                        >
                            <span
                                id="t18_521_564"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 700,
                                    color: 'rgba(0,0,0,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginTop: 0,
                                    marginBottom: 2.5,
                                }}
                            >
                                Login
                            </span>

                            <div
                                id="t18_521_586"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 2.5,
                                    marginBottom: 0,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    dl.functions.viewsPlugin.showView('signup')
                                }}
                            >
                                <span
                                    id="t18_521_587"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        fontWeight: 700,
                                        color: 'rgba(140,146,152,1)',
                                        letterSpacing: 0,
                                        lineHeight: '14.522727012634277px',
                                        textAlign: 'left',
                                        marginLeft: 0,
                                        marginRight: 2,
                                    }}
                                >
                                    Or
                                </span>

                                <span
                                    id="t18_521_588"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        fontWeight: 700,
                                        color: 'rgba(186,15,23,1)',
                                        letterSpacing: 0,
                                        lineHeight: '14.522727012634277px',
                                        textAlign: 'left',
                                        marginLeft: 2,
                                        marginRight: 0,
                                    }}
                                >
                                    Create an account
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        id="t18_521_566"
                        style={{
                            flexDirection: 'column',
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
                            id="t18_521_567"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 8.5,
                            }}
                        >
                            <span
                                id="t18_521_568"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 600,
                                    color: 'rgba(113,113,113,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginTop: 0,
                                    marginBottom: 2.5,
                                }}
                            >
                                Welcome back
                            </span>

                            <div
                                id="t18_521_569"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 2.5,
                                    marginBottom: 0,
                                }}
                            >
                                <span
                                    id="t18_521_570"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 11,
                                        fontWeight: 500,
                                        color: 'rgba(140,146,152,1)',
                                        letterSpacing: 0,
                                        lineHeight: '13.3125px',
                                        textAlign: 'left',
                                        marginTop: 0,
                                        marginBottom: 5,
                                    }}
                                >
                                    Please enter your phone number
                                </span>

                                <span
                                    id="t18_521_571"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 10,
                                        fontWeight: 500,
                                        color: 'rgba(186,15,23,1)',
                                        letterSpacing: 0,
                                        lineHeight: '12.102272033691406px',
                                        textAlign: 'left',
                                        marginTop: 5,
                                        marginBottom: 0,
                                    }}
                                >
                                    {dl.changes.logInErrMessage}
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_521_578"
                            style={{
                                height: 44,
                                width: 281,
                                borderRadius: 5,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingLeft: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 1,
                                borderColor: 'rgba(207,206,206,1)',
                                borderStyle: 'solid',
                                marginTop: 8.5,
                                marginBottom: 0,
                            }}
                        >
                            <select
                                name="cars"
                                id="t18_521_579"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    paddingRight: 8,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderRightWidth: 1,
                                    borderStyle: 'solid',
                                    marginLeft: 0,
                                    marginRight: 6.5,
                                    cursor: 'pointer',
                                    width:50
                                }}
                                onChange={(val) => {
                                    val = val.target.value

                                    dl.changes.logInDeatil.countryCode = val
                                }}
                            >
                                <option value="" disabled selected>
                                    Select your option
                                </option>
                                {Array.isArray(dl.changes.countryCodes) &&
                                    dl.changes.countryCodes.map(
                                        (item, index) => {
                                            return (
                                                <option
                                                    value={item}
                                                    selected={item == 91}
                                                >
                                                    {item}
                                                </option>
                                            )
                                        }
                                    )}
                            </select>

                            <input
                                id="t18_521_582"
                                style={{
                                    width: 183,
                                    backgroundColor: 'rgba(255,255,255,1)',
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingRight: 27,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 6.5,
                                    marginRight: 0,
                                    cursor: 'pointer',
                                    itemSpacing: 10,
                                    paddingLeft: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    fontFamily: 'Inter',
                                    fontSize: 13,
                                    color: 'rgba(113,113,113,1)',
                                    fontWeight: 400,
                                    textAlign: 'left',
                                }}
                                onChange={(val) => {
                                    val = val.target.value

                                    dl.changes.logInDeatil.phone = val
                                    dl.changes.logInErrMessage = ''
                                }}
                                type="text"
                            ></input>
                        </div>
                    </div>

                    <div
                        id="t18_2271_27"
                        style={{
                            width: 290,
                            flexDirection: 'column',
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
                            id="t18_2271_21"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            <span
                                id="t18_2271_22"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 12,
                                    fontWeight: 500,
                                    color: 'rgba(177,177,177,1)',
                                    letterSpacing: 0,
                                    lineHeight: '14.522727012634277px',
                                    textAlign: 'left',
                                    marginTop: 0,
                                    marginBottom: 1,
                                }}
                            >
                                By continuing, you agree to Melody Mocktail's
                            </span>

                            <div
                                id="t18_2271_23"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 1,
                                    marginBottom: 0,
                                }}
                            >
                                <span
                                    id="t18_2271_24"
                                    onClick={() => {
                                        window.open(
                                            'http://launch.melodymocktail.com/tnc'
                                        )
                                    }}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        fontWeight: 500,
                                        color: 'rgba(186,15,23,1)',
                                        letterSpacing: 0,
                                        lineHeight: '14.522727012634277px',
                                        textAlign: 'left',
                                        marginLeft: 0,
                                        marginRight: 2.5,
                                        cursor: 'pointer',
                                    }}
                                >
                                    T & C
                                </span>

                                <span
                                    id="t18_2271_25"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        fontWeight: 500,
                                        color: 'rgba(177,177,177,1)',
                                        letterSpacing: 0,
                                        lineHeight: '14.522727012634277px',
                                        textAlign: 'left',
                                        marginLeft: 2.5,
                                        marginRight: 2.5,
                                    }}
                                >
                                    and
                                </span>

                                <span
                                    id="t18_2271_26"
                                    onClick={() => {
                                        window.open(
                                            'http://launch.melodymocktail.com/PP'
                                        )
                                    }}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        fontWeight: 500,
                                        color: 'rgba(186,15,23,1)',
                                        letterSpacing: 0,
                                        lineHeight: '14.522727012634277px',
                                        textAlign: 'left',
                                        marginLeft: 2.5,
                                        marginRight: 0,
                                        cursor: 'pointer',
                                    }}
                                >
                                    Privacy Policy
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        id="t18_521_584"
                        style={{
                            height: 16,
                            width: 130,
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
                            marginTop: 10,
                            marginBottom: 0,
                            cursor: 'pointer',
                        }}
                        onClick={(e) => {
                            var run = async () => {
                                if (dl.changes.logInDeatil.phone.length != 10) {
                                    dl.changes.logInErrMessage =
                                        'Enter valid Phone number'
                                    return
                                }

                                var body = {
                                    phonenumber:
                                        dl.changes.logInDeatil.countryCode +
                                        dl.changes.logInDeatil.phone,
                                    // validationType: 'phone',
                                }

                                var res = await dl.functions.getOtpLogin(
                                    body,
                                    'EnterOtpS'
                                )
                                // alert(JSON.stringify(res))
                            }
                            run()
                        }}
                    >
                        <span
                            id="t18_521_585"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 15,
                                fontWeight: 700,
                                color: 'rgba(255,255,255,1)',
                                letterSpacing: 0,
                                lineHeight: '18.15340805053711px',
                                textAlign: 'left',
                            }}
                        >
                            Request OTP
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Login_4
