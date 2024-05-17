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

const Address_2 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 900
            const element = document.getElementById('t18_689_163')
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
                id="t18_689_163"
                style={{
                    height: 675,
                    width: 900,
                    backgroundColor: 'rgba(248,246,246,1.00)',
                    flexDirection: 'row',
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
                {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/535fa33ebb93db11832dd12081938b2a0056dbac.png' !=
                '' ? (
                    <img
                        id="t18_689_164"
                        style={{
                            height: 443.0625,
                            width: 299.4599609375,
                            display: 'flex',
                            borderWidth: 0,
                            marginLeft: 0,
                            marginRight: 25,
                        }}
                        src={
                            'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/535fa33ebb93db11832dd12081938b2a0056dbac.png'
                        }
                    ></img>
                ) : (
                    <></>
                )}

                <div
                    id="t18_689_165"
                    style={{
                        width: 411,
                        borderRadius: 20,
                        backgroundColor: 'rgba(255,255,255,1.00)',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        display: 'flex',
                        paddingLeft: 30,
                        paddingTop: 50,
                        paddingBottom: 50,
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
                        id="t18_689_166"
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
                            id="t18_689_167"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 3.5,
                            }}
                        >
                            <span
                                id="t18_689_168"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 22,
                                    fontWeight: 700,
                                    color: 'rgba(0,0,0,1)',
                                    letterSpacing: 0,
                                    lineHeight: '26.625px',
                                    textAlign: 'left',
                                }}
                            >
                                Address
                            </span>
                        </div>

                        <div
                            id="t18_689_169"
                            style={{
                                borderRadius: 3,
                                backgroundColor: 'rgba(255,255,255,1.00)',
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                borderWidth: 1,
                                borderColor: 'rgba(112,112,112,1)',
                                borderStyle: 'solid',
                                marginTop: 3.5,
                                marginBottom: 0,
                            }}
                        ></div>
                    </div>

                    <div
                        id="t18_689_170"
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
                            id="t18_689_171"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 18.5,
                            }}
                        >
                            <div
                                id="t18_689_172"
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
                                    id="t18_689_173"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 22,
                                        fontWeight: 700,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '26.625px',
                                        textAlign: 'left',
                                        marginTop: 0,
                                        marginBottom: 6,
                                    }}
                                >
                                    Help us serve you better
                                </span>

                                <span
                                    id="t18_689_174"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 15,
                                        fontWeight: 500,
                                        color: 'rgba(140,146,152,1)',
                                        letterSpacing: 0,
                                        lineHeight: '18.15340805053711px',
                                        textAlign: 'left',
                                        marginTop: 6,
                                        marginBottom: 0,
                                    }}
                                >
                                    Please select your address
                                </span>
                            </div>

                            <div
                                id="t18_689_175"
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
                                    id="t18_689_180"
                                    placeholder="Enter zip code"
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
                                        borderColor: 'rgba(207,206,206,1)',
                                        borderStyle: 'solid',
                                        cursor: 'pointer',
                                        itemSpacing: 13,
                                        paddingRight: 0,
                                        paddingTop: 0,
                                        paddingBottom: 0,
                                    }}
                                    onChange={(val) => {
                                        val = val.target.value

                                        dl.changes.userAddress.address.zipCode =
                                            val
                                        dl.functions.getAddress(val)
                                    }}
                                    type="text"
                                ></input>
                            </div>
                        </div>

                        <div
                            id="t18_713_300"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 18.5,
                                marginBottom: 18.5,
                            }}
                        >
                            <span
                                id="t18_713_301"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: 'rgba(186,15,23,1)',
                                    letterSpacing: 0,
                                    lineHeight: '16.94318199157715px',
                                    textAlign: 'left',
                                    marginTop: 0,
                                    marginBottom: 5,
                                }}
                            >
                                Your address
                            </span>

                            <div
                                id="t18_713_302"
                                style={{
                                    width: 360,
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
                                <span
                                    id="t18_713_303"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 15,
                                        fontWeight: 500,
                                        color: 'rgba(167,167,167,1)',
                                        letterSpacing: 0,
                                        lineHeight: '18.15340805053711px',
                                        textAlign: 'left',
                                    }}
                                >
                                    {dl.changes.addressString}
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_689_191"
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
                                marginTop: 18.5,
                                marginBottom: 0,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                const run = async () => {
                                    if (
                                        dl.changes.addressString ==
                                        'No addresss Found'
                                    ) {
                                        return
                                    } else {
                                        var res =
                                            await dl.functions.changeAddress(
                                                dl.changes.userAddress
                                            )
                                        // alert(JSON.stringify(res))
                                    }
                                    // var res = await dl.functions.changeAddress(dl.changes.userAddress)
                                    // alert(JSON.stringify(res))
                                    if (res.status == 200) {
                                        // dl.functions.getUserDetail()
                                        dl.functions.viewsPlugin.showView(
                                            'home'
                                        )
                                        // dl.functions.checkUser()
                                        var currentPath =
                                            dl.functions.common.getLastPath()
                                        dl.functions.onLoadFunctions[
                                            currentPath
                                        ]()
                                    }
                                    // dl.functions.getUserDetail
                                }

                                run()
                            }}
                        >
                            <span
                                id="t18_689_192"
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
    )
})
export default Address_2
