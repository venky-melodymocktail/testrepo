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

const Login_2 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 900
            const element = document.getElementById('t18_521_411')
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
                id="t18_521_411"
                style={{
                    height: 675,
                    width: 900,
                    backgroundColor: 'rgba(248,246,246,1.00)',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginTop: 0,
                    marginBottom: 0,
                }}
            >
                <div
                    id="t18_521_412"
                    style={{
                        width: 800,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginTop: 0,
                    }}
                >
                    <div
                        id="t18_881_6249"
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
                                id="t18_521_413"
                                style={{
                                    height: 14,
                                    width: 8,
                                    display: 'flex',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 5,
                                }}
                                src={
                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/03ef37ca13a3790de0511eb479373b3bc99b1f5b.png'
                                }
                            ></img>
                        ) : (
                            <></>
                        )}

                        <span
                            id="t18_521_414"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 16,
                                fontWeight: 600,
                                color: 'rgba(186,15,23,1)',
                                letterSpacing: 0,
                                lineHeight: '19.363636016845703px',
                                textAlign: 'left',
                                marginLeft: 5,
                                marginRight: 0,
                            }}
                        >
                            Back to home
                        </span>
                    </div>
                </div>

                <div
                    id="t18_521_415"
                    style={{
                        height: 468,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginBottom: 0,
                    }}
                >
                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/0e63659978c275de9e89f65ca33cc1a2105345ac.png' !=
                    '' ? (
                        <img
                            id="t18_521_416"
                            style={{
                                height: 349,
                                width: 349,
                                display: 'flex',
                                borderWidth: 0,
                                marginLeft: 0,
                                marginRight: 25,
                            }}
                            src={
                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/0e63659978c275de9e89f65ca33cc1a2105345ac.png'
                            }
                        ></img>
                    ) : (
                        <></>
                    )}

                    <div
                        id="t18_521_417"
                        style={{
                            height: 498,
                            width: 389,
                            borderRadius: 20,
                            backgroundColor: 'rgba(255,255,255,1.00)',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: 'flex',
                            paddingLeft: 30,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 1,
                            borderColor: 'rgba(186,15,23,1)',
                            borderStyle: 'solid',
                            marginLeft: 25,
                            marginRight: 0,
                        }}
                    >
                        <div
                            id="t18_521_418"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingBottom: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                borderColor: 'rgba(207,206,206,1)',
                                borderBottomWidth: 1,
                                borderStyle: 'solid',
                                marginTop: 0,
                                marginBottom: 7.5,
                            }}
                        >
                            <div
                                id="t18_521_419"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 4,
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ee9af55177e369e4d0347768ed81b56a525e3f31.png' !=
                                '' ? (
                                    <img
                                        id="t18_521_420"
                                        style={{
                                            height: 49,
                                            width: 102,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 6,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ee9af55177e369e4d0347768ed81b56a525e3f31.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <span
                                    id="t18_521_421"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 22,
                                        fontWeight: 700,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '26.625px',
                                        textAlign: 'left',
                                        marginTop: 6,
                                        marginBottom: 0,
                                    }}
                                >
                                    Login
                                </span>
                            </div>

                            <div
                                id="t18_521_444"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 4,
                                    marginBottom: 0,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    dl.functions.viewsPlugin.showView('signup')
                                }}
                            >
                                <span
                                    id="t18_521_445"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 14,
                                        fontWeight: 700,
                                        color: 'rgba(140,146,152,1)',
                                        letterSpacing: 0,
                                        lineHeight: '16.94318199157715px',
                                        textAlign: 'left',
                                        marginLeft: 0,
                                        marginRight: 2,
                                    }}
                                >
                                    Or
                                </span>

                                <span
                                    id="t18_521_446"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 14,
                                        fontWeight: 700,
                                        color: 'rgba(186,15,23,1)',
                                        letterSpacing: 0,
                                        lineHeight: '16.94318199157715px',
                                        textAlign: 'left',
                                        marginLeft: 2,
                                        marginRight: 0,
                                    }}
                                >
                                    Create an account
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_521_423"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 7.5,
                                marginBottom: 0,
                            }}
                        >
                            <div
                                id="t18_521_424"
                                style={{
                                    flexDirection: 'column',
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
                                <div
                                    id="t18_521_425"
                                    style={{
                                        flexDirection: 'column',
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
                                    <span
                                        id="t18_521_426"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 20,
                                            fontWeight: 600,
                                            color: 'rgba(113,113,113,1)',
                                            letterSpacing: 0,
                                            lineHeight: '24.204544067382812px',
                                            textAlign: 'left',
                                            marginTop: 0,
                                            marginBottom: 0.5,
                                        }}
                                    >
                                        Welcome back
                                    </span>

                                    <div
                                        id="t18_521_427"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
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
                                            id="t18_521_428"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 14,
                                                fontWeight: 500,
                                                color: 'rgba(140,146,152,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '16.94318199157715px',
                                                textAlign: 'left',
                                                marginTop: 0,
                                                marginBottom: 5,
                                            }}
                                        >
                                            Please enter your phone number
                                        </span>

                                        <span
                                            id="t18_521_429"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 14,
                                                fontWeight: 500,
                                                color: 'rgba(186,15,23,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '16.94318199157715px',
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
                                    id="t18_521_436"
                                    style={{
                                        height: 47,
                                        width: 337,
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
                                        marginTop: 10,
                                        marginBottom: 0,
                                    }}
                                >
                                    <select
                                        name="cars"
                                        id="t18_521_437"
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

                                            dl.changes.logInDeatil.countryCode =
                                                val
                                        }}
                                    >
                                        <option value="" disabled selected>
                                            Select your option
                                        </option>
                                        {Array.isArray(
                                            dl.changes.countryCodes
                                        ) &&
                                            dl.changes.countryCodes.map(
                                                (item, index) => {
                                                    return (
                                                        <option
                                                            value={item}
                                                            selected={
                                                                item == 91
                                                            }
                                                        >
                                                            {item}
                                                        </option>
                                                    )
                                                }
                                            )}
                                    </select>

                                    <input
                                        id="t18_521_440"
                                        style={{
                                            width: 250,
                                            backgroundColor:
                                                'rgba(255,255,255,1)',
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 6.5,
                                            marginRight: 0,
                                            cursor: 'pointer',
                                            itemSpacing: 10,
                                            paddingLeft: 0,
                                            paddingRight: 0,
                                            paddingTop: 0,
                                            paddingBottom: 0,
                                            fontFamily: 'Inter',
                                            fontSize: 15,
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
                                id="t18_2271_6"
                                style={{
                                    flexDirection: 'column',
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
                                <div
                                    id="t18_2271_7"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 1,
                                    }}
                                >
                                    <div
                                        id="t18_2271_8"
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'flex-start',
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
                                            id="t18_2271_9"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 13,
                                                fontWeight: 500,
                                                color: 'rgba(177,177,177,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '15.732954025268555px',
                                                textAlign: 'left',
                                                marginLeft: 0,
                                                marginRight: 5,
                                            }}
                                        >
                                            By continuing, you agree to Melody
                                            Mocktail's
                                        </span>

                                        <span
                                            id="t18_2271_10"
                                            onClick={() => {
                                                window.open(
                                                    'http://launch.melodymocktail.com/tnc'
                                                )
                                            }}
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 13,
                                                fontWeight: 500,
                                                color: 'rgba(186,15,23,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '15.732954025268555px',
                                                textAlign: 'left',
                                                marginLeft: 5,
                                                marginRight: 0,
                                                cursor: 'pointer',
                                            }}
                                        >
                                            T & C
                                        </span>
                                    </div>

                                    <span
                                        id="t18_2271_11"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 13,
                                            fontWeight: 500,
                                            color: 'rgba(177,177,177,1)',
                                            letterSpacing: 0,
                                            lineHeight: '15.732954025268555px',
                                            textAlign: 'left',
                                            marginLeft: 5,
                                            marginRight: 0,
                                        }}
                                    >
                                        and
                                    </span>
                                </div>

                                <span
                                    id="t18_2271_12"
                                    onClick={() => {
                                        window.open(
                                            'http://launch.melodymocktail.com/PP'
                                        )
                                    }}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 500,
                                        color: 'rgba(186,15,23,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
                                        textAlign: 'left',
                                        marginTop: 1,
                                        marginBottom: 0,
                                        cursor: 'pointer',
                                    }}
                                >
                                    Privacy Policy
                                </span>
                            </div>

                            <div
                                id="t18_521_442"
                                style={{
                                    height: 27,
                                    width: 142,
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
                                    marginTop: 7.5,
                                    marginBottom: 0,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    var run = async () => {
                                        if (
                                            dl.changes.logInDeatil.phone
                                                .length != 10
                                        ) {
                                            dl.changes.logInErrMessage =
                                                'Enter valid Phone number'
                                            return
                                        }

                                        var body = {
                                            phonenumber:
                                                dl.changes.logInDeatil
                                                    .countryCode +
                                                dl.changes.logInDeatil.phone,
                                            // validationType: 'phone',
                                        }

                                        var res =
                                            await dl.functions.getOtpLogin(
                                                body,
                                                'EnterOtpLg'
                                            )
                                        // alert(JSON.stringify(res))
                                    }
                                    run()
                                }}
                            >
                                <span
                                    id="t18_521_443"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 18,
                                        fontWeight: 700,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '21.784090042114258px',
                                        textAlign: 'left',
                                    }}
                                >
                                    Request OTP
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Login_2
