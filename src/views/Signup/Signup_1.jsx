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

const Signup_1 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 1440
            const element = document.getElementById('t18_541_314')
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
                id="t18_541_314"
                style={{
                    height: 900,
                    width: 1440,
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
                    id="t18_541_315"
                    style={{
                        width: 1343,
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
                        id="t18_881_6252"
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
                                id="t18_541_316"
                                style={{
                                    height: 17,
                                    width: 10,
                                    display: 'flex',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 7,
                                }}
                                src={
                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/03ef37ca13a3790de0511eb479373b3bc99b1f5b.png'
                                }
                            ></img>
                        ) : (
                            <></>
                        )}

                        <span
                            id="t18_541_317"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 18,
                                fontWeight: 600,
                                color: 'rgba(186,15,23,1)',
                                letterSpacing: 0,
                                lineHeight: '21.784090042114258px',
                                textAlign: 'left',
                                marginLeft: 7,
                                marginRight: 0,
                            }}
                        >
                            Back to home
                        </span>
                    </div>
                </div>

                <div
                    id="t18_541_318"
                    style={{
                        height: 538,
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
                            id="t18_541_319"
                            style={{
                                height: 500,
                                width: 500,
                                display: 'flex',
                                borderWidth: 0,
                                marginLeft: 0,
                                marginRight: 55.5,
                            }}
                            src={
                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/0e63659978c275de9e89f65ca33cc1a2105345ac.png'
                            }
                        ></img>
                    ) : (
                        <></>
                    )}

                    <div
                        id="t18_541_320"
                        style={{
                            height: 576,
                            width: 469,
                            borderRadius: 20,
                            backgroundColor: 'rgba(255,255,255,1.00)',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: 'flex',
                            paddingLeft: 74,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 1,
                            borderColor: 'rgba(186,15,23,1)',
                            borderStyle: 'solid',
                            marginLeft: 55.5,
                            marginRight: 0,
                        }}
                    >
                        <div
                            id="t18_541_321"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingBottom: 5,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                borderColor: 'rgba(207,206,206,1)',
                                borderBottomWidth: 1,
                                borderStyle: 'solid',
                                marginTop: 0,
                                marginBottom: 10,
                            }}
                        >
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ee9af55177e369e4d0347768ed81b56a525e3f31.png' !=
                            '' ? (
                                <img
                                    id="t18_541_323"
                                    style={{
                                        height: 59,
                                        width: 123,
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

                            <div
                                id="t18_1507_373"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 6,
                                    marginBottom: 0,
                                }}
                            >
                                <span
                                    id="t18_541_324"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 18,
                                        fontWeight: 700,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '21.784090042114258px',
                                        textAlign: 'left',
                                        marginLeft: 0,
                                        marginRight: 4,
                                    }}
                                >
                                    Sign Up
                                </span>

                                <div
                                    id="t18_541_451"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 4,
                                        marginRight: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        dl.functions.viewsPlugin.showView(
                                            'login'
                                        )
                                    }}
                                >
                                    <span
                                        id="t18_541_452"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 13,
                                            fontWeight: 700,
                                            color: 'rgba(140,146,152,1)',
                                            letterSpacing: 0,
                                            lineHeight: '15.732954025268555px',
                                            textAlign: 'left',
                                            marginLeft: 0,
                                            marginRight: 2,
                                        }}
                                    >
                                        Or
                                    </span>

                                    <span
                                        id="t18_541_453"
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
                                        Login to your account
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div
                            id="t18_541_326"
                            style={{
                                flexDirection: 'column',
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
                                id="t18_2266_76"
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
                                <div
                                    id="t18_541_327"
                                    style={{
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
                                    <div
                                        id="t18_541_328"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 11.5,
                                        }}
                                    >
                                        <span
                                            id="t18_541_329"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 22,
                                                fontWeight: 600,
                                                color: 'rgba(113,113,113,1)',
                                                letterSpacing: 0,
                                                lineHeight: '26.625px',
                                                textAlign: 'left',
                                                marginTop: 0,
                                                marginBottom: 3,
                                            }}
                                        >
                                            Welcome to Melody Mocktail
                                        </span>

                                        <div
                                            id="t18_541_330"
                                            style={{
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginTop: 3,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <span
                                                id="t18_541_331"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 15,
                                                    fontWeight: 500,
                                                    color: 'rgba(140,146,152,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '18.15340805053711px',
                                                    textAlign: 'left',
                                                    marginTop: 0,
                                                    marginBottom: 6,
                                                }}
                                            >
                                                Please enter your details
                                            </span>

                                            <div
                                                id="t18_541_332"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 6,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_541_333"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 15,
                                                        fontWeight: 500,
                                                        color: 'rgba(186,15,23,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '18.15340805053711px',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    {dl.changes.errormessage}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        id="t18_541_334"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginTop: 11.5,
                                            marginBottom: 0,
                                        }}
                                    >
                                        <input
                                            id="t18_541_335"
                                            placeholder="First name"
                                            style={{
                                                height: 47,
                                                width: 367,
                                                borderRadius: 5,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingLeft: 15,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 1,
                                                borderColor:
                                                    'rgba(207,206,206,1)',
                                                borderStyle: 'solid',
                                                marginTop: 0,
                                                marginBottom: 5,
                                                cursor: 'pointer',
                                            }}
                                            onChange={(val) => {
                                                val = val.target.value

                                                dl.changes.userDetails.firstName =
                                                    val
                                                dl.changes.errormessage = ''
                                            }}
                                            type="text"
                                        ></input>

                                        <input
                                            id="t18_1507_374"
                                            placeholder="Last Name"
                                            style={{
                                                height: 47,
                                                width: 367,
                                                borderRadius: 5,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingLeft: 15,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 1,
                                                borderColor:
                                                    'rgba(207,206,206,1)',
                                                borderStyle: 'solid',
                                                marginTop: 5,
                                                marginBottom: 5,
                                                cursor: 'pointer',
                                            }}
                                            onChange={(val) => {
                                                val = val.target.value

                                                dl.changes.userDetails.lastName =
                                                    val
                                                dl.changes.errormessage = ''
                                            }}
                                            type="text"
                                        ></input>

                                        <input
                                            id="t18_541_338"
                                            placeholder="Email"
                                            style={{
                                                height: 47,
                                                width: 367,
                                                borderRadius: 5,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingLeft: 15,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 1,
                                                borderColor:
                                                    'rgba(207,206,206,1)',
                                                borderStyle: 'solid',
                                                marginTop: 5,
                                                marginBottom: 5,
                                                cursor: 'pointer',
                                            }}
                                            onChange={(val) => {
                                                val = val.target.value

                                                dl.changes.userDetails.email =
                                                    val
                                                dl.changes.errormessage = ''
                                            }}
                                            type="text"
                                        ></input>

                                        <div
                                            id="t18_541_341"
                                            style={{
                                                height: 47,
                                                width: 372,
                                                borderRadius: 5,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                paddingLeft: 10,
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 1,
                                                borderColor:
                                                    'rgba(207,206,206,1)',
                                                borderStyle: 'solid',
                                                marginTop: 5,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <select
                                                name="cars"
                                                id="t18_541_342"
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    paddingRight: 8,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    borderColor:
                                                        'rgba(207,206,206,1)',
                                                    borderRightWidth: 1,
                                                    borderStyle: 'solid',
                                                    marginLeft: 0,
                                                    marginRight: 6.5,
                                                    cursor: 'pointer',
                                                    width: 50,
                                                }}
                                                onChange={(val) => {
                                                    val = val.target.value

                                                    dl.changes.userDetails.countryCode =
                                                        val
                                                    dl.changes.errormessage = ''
                                                }}
                                            >
                                                <option
                                                    value=""
                                                    disabled
                                                    selected
                                                >
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
                                                                        item ==
                                                                        undefined
                                                                    }
                                                                >
                                                                    {item}
                                                                </option>
                                                            )
                                                        }
                                                    )}
                                            </select>

                                            <input
                                                id="t18_541_345"
                                                placeholder="Phone"
                                                style={{
                                                    width: 250,
                                                    backgroundColor:
                                                        'rgba(255,255,255,1.00)',
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 6.5,
                                                    marginRight: 0,
                                                    cursor: 'pointer',
                                                    fontFamily: 'Inter',
                                                    fontSize: 15,
                                                    color: 'rgba(113,113,113,1)',
                                                    fontWeight: 400,
                                                    textAlign: 'left',
                                                }}
                                                onChange={(val) => {
                                                    val = val.target.value

                                                    dl.changes.userDetails.phone =
                                                        val
                                                    dl.changes.errormessage = ''
                                                }}
                                                type="text"
                                            ></input>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    id="t18_2271_43"
                                    style={{
                                        flexDirection: 'column',
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
                                    <div
                                        id="t18_2271_44"
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
                                            id="t18_2271_45"
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
                                                id="t18_2271_46"
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
                                                By continuing, you agree to
                                                Melody Mocktail's
                                            </span>

                                            <span
                                                id="t18_2271_47"
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
                                            id="t18_2271_48"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 13,
                                                fontWeight: 500,
                                                color: 'rgba(177,177,177,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '15.732954025268555px',
                                                textAlign: 'left',
                                                marginLeft: 5,
                                                marginRight: 0,
                                            }}
                                        >
                                            and
                                        </span>
                                    </div>

                                    <span
                                        id="t18_2271_49"
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
                            </div>

                            <div
                                id="t18_541_347"
                                className={' hovereffectsignIn-btn'}
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
                                    marginTop: 10,
                                    marginBottom: 0,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    dl.functions.validateAndSignup('EnterOtpLg')
                                }}
                            >
                                <span
                                    id="t18_541_348"
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
                                    Continue
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Signup_1
