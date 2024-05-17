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

const Signup_3 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 620
            const element = document.getElementById('t18_541_382')
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
                id="t18_541_382"
                style={{
                    height: 795,
                    width: 620,
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
                    id="t18_541_383"
                    style={{
                        width: 560,
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
                        id="t18_881_6254"
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
                                id="t18_541_384"
                                style={{
                                    height: 10,
                                    width: 6,
                                    display: 'flex',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 4,
                                }}
                                src={
                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/03ef37ca13a3790de0511eb479373b3bc99b1f5b.png'
                                }
                            ></img>
                        ) : (
                            <></>
                        )}

                        <span
                            id="t18_541_385"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 13,
                                fontWeight: 600,
                                color: 'rgba(186,15,23,1)',
                                letterSpacing: 0,
                                lineHeight: '15.732954025268555px',
                                textAlign: 'left',
                                marginLeft: 4,
                                marginRight: 0,
                            }}
                        >
                            Back to home
                        </span>
                    </div>
                </div>

                <div
                    id="t18_541_386"
                    style={{
                        flexDirection: 'column',
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
                            id="t18_541_387"
                            style={{
                                height: 222,
                                width: 222,
                                display: 'flex',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 15,
                            }}
                            src={
                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/0e63659978c275de9e89f65ca33cc1a2105345ac.png'
                            }
                        ></img>
                    ) : (
                        <></>
                    )}

                    <div
                        id="t18_541_388"
                        style={{
                            width: 304,
                            borderRadius: 20,
                            backgroundColor: 'rgba(255,255,255,1.00)',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingLeft: 30,
                            paddingTop: 10,
                            paddingBottom: 20,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 1,
                            borderColor: 'rgba(186,15,23,1)',
                            borderStyle: 'solid',
                            marginTop: 15,
                            marginBottom: 0,
                        }}
                    >
                        <div
                            id="t18_541_389"
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
                                marginBottom: 5,
                            }}
                        >
                            <div
                                id="t18_541_390"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 2.5,
                                }}
                            >
                                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ee9af55177e369e4d0347768ed81b56a525e3f31.png' !=
                                '' ? (
                                    <img
                                        id="t18_541_391"
                                        style={{
                                            height: 37,
                                            width: 79,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginTop: 0,
                                            marginBottom: 4,
                                        }}
                                        src={
                                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ee9af55177e369e4d0347768ed81b56a525e3f31.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <span
                                    id="t18_541_392"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 18,
                                        fontWeight: 700,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '21.784090042114258px',
                                        textAlign: 'left',
                                        marginTop: 4,
                                        marginBottom: 0,
                                    }}
                                >
                                    Sign up
                                </span>
                            </div>

                            <div
                                id="t18_541_457"
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
                                    dl.functions.viewsPlugin.showView('login')
                                }}
                            >
                                <span
                                    id="t18_541_458"
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
                                    id="t18_541_459"
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
                                    Login to your account
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_541_394"
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
                                id="t18_2271_42"
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
                                    id="t18_2266_83"
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
                                        id="t18_541_395"
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
                                        <div
                                            id="t18_541_396"
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
                                            <span
                                                id="t18_541_397"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 16,
                                                    fontWeight: 600,
                                                    color: 'rgba(113,113,113,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '19.363636016845703px',
                                                    textAlign: 'left',
                                                    marginTop: 0,
                                                    marginBottom: 1,
                                                }}
                                            >
                                                Welcome to Melody Mocktail
                                            </span>

                                            <div
                                                id="t18_541_398"
                                                style={{
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginTop: 1,
                                                    marginBottom: 0,
                                                }}
                                            >
                                                <span
                                                    id="t18_541_399"
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
                                                    Please enter your details
                                                </span>

                                                <span
                                                    id="t18_541_400"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontSize: 10,
                                                        fontWeight: 500,
                                                        color: 'rgba(186,15,23,1)',
                                                        letterSpacing: 0,
                                                        lineHeight:
                                                            '12.102272033691406px',
                                                        textAlign: 'left',
                                                        marginTop: 5,
                                                        marginBottom: 0,
                                                    }}
                                                >
                                                    {dl.changes.errormessage}
                                                </span>
                                            </div>
                                        </div>

                                        <input
                                            id="t18_541_401"
                                            placeholder="Full Name"
                                            style={{
                                                height: 38,
                                                width: 270,
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
                                                marginTop: 7.5,
                                                marginBottom: 7.5,
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
                                            id="t18_1507_380"
                                            placeholder="Last Name"
                                            style={{
                                                height: 38,
                                                width: 270,
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
                                                marginTop: 7.5,
                                                marginBottom: 7.5,
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
                                            id="t18_541_404"
                                            placeholder="Email"
                                            style={{
                                                height: 38,
                                                width: 270,
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
                                                marginTop: 7.5,
                                                marginBottom: 7.5,
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
                                            id="t18_541_407"
                                            style={{
                                                height: 38,
                                                width: 270,
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
                                                marginTop: 7.5,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <select
                                                name="cars"
                                                id="t18_541_408"
                                                style={{
                                                    height: 22,
                                                    width: 51,
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
                                                id="t18_541_411"
                                                placeholder="Phone"
                                                style={{
                                                    width: 166,
                                                    backgroundColor:
                                                        'rgba(255,255,255,1.00)',
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent:
                                                        'flex-start',
                                                    display: 'flex',
                                                    paddingRight: 27,
                                                    position: 'relative',
                                                    overflow: 'visible',
                                                    borderWidth: 0,
                                                    marginLeft: 6.5,
                                                    marginRight: 0,
                                                    cursor: 'pointer',
                                                    fontFamily: 'Inter',
                                                    fontSize: 13,
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
                                    id="t18_2271_35"
                                    style={{
                                        width: 290,
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
                                        id="t18_2271_36"
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
                                            id="t18_2271_37"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 12,
                                                fontWeight: 500,
                                                color: 'rgba(177,177,177,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '14.522727012634277px',
                                                textAlign: 'left',
                                                marginTop: 0,
                                                marginBottom: 1,
                                            }}
                                        >
                                            By continuing, you agree to Melody
                                            Mocktail's
                                        </span>

                                        <div
                                            id="t18_2271_38"
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
                                                id="t18_2271_39"
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
                                                    lineHeight:
                                                        '14.522727012634277px',
                                                    textAlign: 'left',
                                                    marginLeft: 0,
                                                    marginRight: 2.5,
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                T & C
                                            </span>

                                            <span
                                                id="t18_2271_40"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontSize: 12,
                                                    fontWeight: 500,
                                                    color: 'rgba(177,177,177,1)',
                                                    letterSpacing: 0,
                                                    lineHeight:
                                                        '14.522727012634277px',
                                                    textAlign: 'left',
                                                    marginLeft: 2.5,
                                                    marginRight: 2.5,
                                                }}
                                            >
                                                and
                                            </span>

                                            <span
                                                id="t18_2271_41"
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
                                                    lineHeight:
                                                        '14.522727012634277px',
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
                            </div>

                            <div
                                id="t18_541_413"
                                style={{
                                    height: 11,
                                    width: 97,
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
                                    dl.functions.validateAndSignup('EnterOtpS')
                                }}
                            >
                                <span
                                    id="t18_541_414"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 700,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
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
export default Signup_3
