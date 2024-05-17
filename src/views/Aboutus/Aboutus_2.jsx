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

import MmHeader from '../../components/MmHeader.jsx'
import MmFooter from '../../components/MmFooter.jsx'
import MmHeaderMd from '../../components/MmHeaderMd.jsx'
import MmFooterMd from '../../components/MmFooterMd.jsx'
import MmHeaderS from '../../components/MmHeaderS.jsx'
import MmFooterS from '../../components/MmFooterS.jsx'
import MmHeaderXs from '../../components/MmHeaderXs.jsx'
import MmFooterXs from '../../components/MmFooterXs.jsx'

const Aboutus_2 = observer(() => {
    useEffect(() => {
        const handleResize = () => {
            const bodyWidth = document.body.clientWidth
            const scale = bodyWidth / 900
            const element = document.getElementById('t18_902_8028')
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
                id="t18_902_8028"
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
                    id="t18_902_8126"
                    style={{
                        width: 750,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        display: 'flex',
                        paddingLeft: 75,
                        paddingRight: 75,
                        paddingTop: 70,
                        paddingBottom: 81,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_902_8127"
                        style={{
                            width: 362,
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
                        <div
                            id="t18_902_8128"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 19,
                            }}
                        >
                            <span
                                id="t18_902_8129"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 35,
                                    fontWeight: 700,
                                    color: 'rgba(186,15,23,1)',
                                    letterSpacing: 0,
                                    lineHeight: '42.35795211791992px',
                                    textAlign: 'left',
                                    marginTop: 0,
                                    marginBottom: 4.5,
                                }}
                            >
                                About Us
                            </span>

                            <span
                                id="t18_902_8130"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 17,
                                    fontWeight: 400,
                                    color: 'rgba(0,0,0,1)',
                                    letterSpacing: 0,
                                    lineHeight: '20.573863983154297px',
                                    textAlign: 'left',
                                    marginTop: 4.5,
                                    marginBottom: 0,
                                }}
                            >
                                Welcome to our Expert company
                            </span>
                        </div>

                        <span
                            id="t18_902_8131"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 16,
                                fontWeight: 400,
                                color: 'rgba(0,0,0,1)',
                                letterSpacing: 0,
                                lineHeight: '24px',
                                textAlign: 'left',
                                marginTop: 19,
                                marginBottom: 0,
                            }}
                        >
                            Melody Mocktail is a content producer and an
                            emerging digital platform serving over half a
                            million community. Our content got over 400 million
                            hits with more than 25 million unique viewers. We
                            primarily operate as a bridge between India and USA.
                            MM services include career guidance, job postings,
                            housing, immigration, real estate, travel
                            recommendations, business advisory and many more
                            features that eases the life of South Asian
                            community.
                        </span>
                    </div>

                    {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ee9af55177e369e4d0347768ed81b56a525e3f31.png' !=
                    '' ? (
                        <img
                            id="t18_902_8132"
                            style={{
                                height: 138,
                                width: 290,
                                display: 'flex',
                                borderWidth: 0,
                                marginRight: 0,
                            }}
                            src={
                                'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ee9af55177e369e4d0347768ed81b56a525e3f31.png'
                            }
                        ></img>
                    ) : (
                        <></>
                    )}
                </div>

                <MmFooterMd />
            </div>
        </div>
    )
})
export default Aboutus_2
