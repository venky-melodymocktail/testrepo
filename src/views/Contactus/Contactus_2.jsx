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

const Contactus_2 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 900
            const element = document.getElementById('t18_902_8618')
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
                id="t18_902_8618"
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
                <MmHeaderMd
                    {...dl.changes.userDetail}
                    onChangeAddress={(val) => {
                        dl.functions.modalsPlugin.openModal('AddressPopupLg')
                    }}
                    onClickMenu={(val) => {
                        dl.functions.modalsPlugin.openModal('navigationMd')
                    }}
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
                    id="t18_902_8499"
                    style={{
                        height: 223,
                        width: 750,
                        backgroundColor: 'rgba(248,246,246,1.00)',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        display: 'flex',
                        paddingLeft: 75,
                        paddingRight: 75,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_902_8500"
                        style={{
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginLeft: 0,
                        }}
                    >
                        <span
                            id="t18_902_8501"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 28,
                                fontWeight: 700,
                                color: 'rgba(0,0,0,1)',
                                letterSpacing: 0,
                                lineHeight: '40px',
                                textAlign: 'left',
                                marginTop: 0,
                                marginBottom: 5,
                            }}
                        >
                            Do you want to post an Ad?
                        </span>

                        <span
                            id="t18_902_8502"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 16,
                                fontWeight: 500,
                                color: 'rgba(113,113,113,1)',
                                letterSpacing: 0,
                                lineHeight: '19.363636016845703px',
                                textAlign: 'left',
                                marginTop: 5,
                                marginBottom: 0,
                            }}
                        >
                            Contact us here
                        </span>
                    </div>

                    <div
                        id="t18_902_8503"
                        style={{
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginRight: 0,
                        }}
                    >
                        <div
                            id="t18_902_8504"
                            className={'hvr-grow'}
                            style={{
                                height: 101,
                                width: 178,
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
                                dl.functions.common.callNumber('+14694434605')
                            }}
                        >
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/b95f8784c0fdf03d13bf3bb26d4b8c8a3249e50d.png' !=
                            '' ? (
                                <img
                                    id="t18_902_8505"
                                    style={{
                                        height: 53,
                                        width: 52,
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
                                id="t18_902_8506"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 600,
                                    color: 'rgba(82,82,86,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginTop: 10,
                                    marginBottom: 0,
                                }}
                            >
                                +1 4694434605
                            </span>
                        </div>

                        <div
                            id="t18_902_8507"
                            className={'hvr-grow'}
                            style={{
                                height: 101,
                                width: 237,
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
                                    id="t18_902_8508"
                                    style={{
                                        height: 52,
                                        width: 52,
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
                                id="t18_902_8509"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 600,
                                    color: 'rgba(82,82,86,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
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
                    id="t18_902_8510"
                    style={{
                        height: 238,
                        width: 900,
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        paddingBottom: 147,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_902_8511"
                        style={{
                            height: 22,
                            width: 900,
                            backgroundColor: 'rgba(186,15,23,1.00)',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingTop: 57,
                            paddingBottom: 151,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 0,
                            marginBottom: -30,
                        }}
                    >
                        <span
                            id="t18_902_8512"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 35,
                                fontWeight: 700,
                                color: 'rgba(255,255,255,1)',
                                letterSpacing: 0,
                                lineHeight: '42.35795211791992px',
                                textAlign: 'left',
                                marginTop: 0,
                                marginBottom: 5,
                            }}
                        >
                            Contact Us
                        </span>

                        <span
                            id="t18_902_8513"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 17,
                                fontWeight: 400,
                                color: 'rgba(255,255,255,1)',
                                letterSpacing: 0,
                                lineHeight: '20.573863983154297px',
                                textAlign: 'left',
                                marginTop: 5,
                                marginBottom: 0,
                            }}
                        >
                            Feel free to get in touch with us
                        </span>
                    </div>

                    <div
                        id="t18_902_8514"
                        style={{
                            height: 228,
                            width: 900,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: -30,
                            marginBottom: 0,
                        }}
                    >
                        <div
                            id="t18_902_8515"
                            className={'hvr-grow'}
                            style={{
                                height: 167,
                                width: 220,
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
                                marginRight: 17.5,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                dl.functions.common.callNumber('+14694434605')
                            }}
                        >
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/aeab48983fe260f59868f4ceabd1a13e6d06938e.png' !=
                            '' ? (
                                <img
                                    id="t18_902_8516"
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
                                id="t18_902_8517"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 700,
                                    color: 'rgba(82,82,86,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginTop: 15,
                                    marginBottom: 0,
                                }}
                            >
                                +1 4694434605
                            </span>
                        </div>

                        <div
                            id="t18_902_8518"
                            className={'hvr-grow'}
                            style={{
                                height: 167,
                                width: 253,
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
                                marginLeft: 17.5,
                                marginRight: 17.5,
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
                                    id="t18_902_8519"
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
                                id="t18_902_8520"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 700,
                                    color: 'rgba(82,82,86,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginTop: 15,
                                    marginBottom: 0,
                                }}
                            >
                                admin@melodymocktail.com
                            </span>
                        </div>

                        <div
                            id="t18_902_8521"
                            className={'hvr-grow'}
                            style={{
                                height: 167,
                                width: 220,
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
                                marginLeft: 17.5,
                                marginRight: 0,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                dl.functions.common.startWAChat('+14694434605')
                            }}
                        >
                            {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/978075568f9c33788aba3c3da05049f4a168b3f8.png' !=
                            '' ? (
                                <img
                                    id="t18_902_8522"
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
                                id="t18_902_8523"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 700,
                                    color: 'rgba(82,82,86,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
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

                <MmFooterMd />
            </div>
        </div>
    )
})
export default Contactus_2
