import './css/MmFooterMd.css'

import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmFooterMd = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {}
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_338_257"
                style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    paddingTop: 30,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginTop: 5,
                    marginBottom: 5,
                }}
            >
                <div
                    id="t18_338_258"
                    style={{
                        height: 239,
                        width: 900,
                        backgroundColor: 'rgba(248,246,246,1.00)',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        paddingTop: 10,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_2032_867"
                        style={{
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 0,
                            marginBottom: 18,
                        }}
                    >
                        <div
                            id="t18_2032_850"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 0,
                                marginRight: 23,
                            }}
                        >
                            {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/MmNewLogo.png' !=
                            '' ? (
                                <img
                                    id="t18_2032_851"
                                    style={{
                                        height: 49,
                                        width: 103,
                                        display: 'flex',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 7.5,
                                    }}
                                    src={
                                        'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/MmNewLogo.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}

                            <div
                                id="t18_2032_852"
                                style={{
                                    width: 201,
                                    flexDirection: 'row',
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
                                <span
                                    id="t18_2032_853"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 11,
                                        fontWeight: 400,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '13.3125px',
                                        textAlign: 'left',
                                    }}
                                >
                                    “Melody Mocktail is designed to make this
                                    process seamless, reliable, and efficient,
                                    ensuring you can easily access the services
                                    you need, all while supporting your local
                                    community.”
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_2032_868"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 23,
                                marginRight: 0,
                            }}
                        >
                            <div
                                id="t18_2032_866"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                }}
                            >
                                <div
                                    id="t18_2032_854"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 0,
                                        marginRight: 18,
                                    }}
                                >
                                    <span
                                        id="t18_2032_855"
                                        className={' footer'}
                                        onClick={() => {
                                            dl.functions.viewsPlugin.showView(
                                                'contactus'
                                            )
                                        }}
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 14,
                                            fontWeight: 400,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '16.94318199157715px',
                                            textAlign: 'left',
                                            marginTop: 0,
                                            marginBottom: 7.5,
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Contact Us
                                    </span>

                                    <span
                                        id="t18_2032_856"
                                        className={' footer'}
                                        onClick={() => {
                                            dl.functions.viewsPlugin.showView(
                                                'aboutus'
                                            )
                                        }}
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 14,
                                            fontWeight: 400,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '16.94318199157715px',
                                            textAlign: 'left',
                                            marginTop: 7.5,
                                            marginBottom: 7.5,
                                            cursor: 'pointer',
                                        }}
                                    >
                                        About Us
                                    </span>

                                    <span
                                        id="t18_2032_857"
                                        className={' footer'}
                                        onClick={() => {
                                            dl.functions.viewsPlugin.showView(
                                                'contactus'
                                            )
                                        }}
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 14,
                                            fontWeight: 400,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '16.94318199157715px',
                                            textAlign: 'left',
                                            marginTop: 7.5,
                                            marginBottom: 7.5,
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Post an Ad
                                    </span>

                                    <span
                                        id="t18_2032_858"
                                        className={' footer'}
                                        onClick={() => {
                                            dl.functions.viewsPlugin.showView(
                                                'rooms'
                                            )
                                        }}
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 14,
                                            fontWeight: 400,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '16.94318199157715px',
                                            textAlign: 'left',
                                            marginTop: 7.5,
                                            marginBottom: 0,
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Services
                                    </span>
                                </div>

                                <div
                                    id="t18_2032_860"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 18,
                                        marginRight: 18,
                                    }}
                                >
                                    <span
                                        id="t18_2032_861"
                                        className={' footer'}
                                        onClick={() => {
                                            dl.functions.viewsPlugin.showView(
                                                'rooms'
                                            )
                                        }}
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 14,
                                            fontWeight: 400,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '16.94318199157715px',
                                            textAlign: 'left',
                                            marginTop: 0,
                                            marginBottom: 7.5,
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Rentals & Properties
                                    </span>

                                    <span
                                        id="t18_2032_862"
                                        className={' footer'}
                                        onClick={() => {
                                            dl.functions.viewsPlugin.showView(
                                                'ridesharing'
                                            )
                                        }}
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 14,
                                            fontWeight: 400,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '16.94318199157715px',
                                            textAlign: 'left',
                                            marginTop: 7.5,
                                            marginBottom: 7.5,
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Ride sharing
                                    </span>

                                    <span
                                        id="t18_2032_863"
                                        className={' footer'}
                                        onClick={() => {
                                            dl.functions.viewsPlugin.showView(
                                                'travelsuggestions'
                                            )
                                        }}
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 14,
                                            fontWeight: 400,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '16.94318199157715px',
                                            textAlign: 'left',
                                            marginTop: 7.5,
                                            marginBottom: 7.5,
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Travel suggestions
                                    </span>

                                    <span
                                        id="t18_2032_864"
                                        className={' footer'}
                                        onClick={() => {
                                            dl.functions.viewsPlugin.showView(
                                                'moviesuggestions'
                                            )
                                        }}
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 14,
                                            fontWeight: 400,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '16.94318199157715px',
                                            textAlign: 'left',
                                            marginTop: 7.5,
                                            marginBottom: 7.5,
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Movie suggestions
                                    </span>

                                    <span
                                        id="t18_2032_865"
                                        className={' footer'}
                                        onClick={() => {
                                            dl.functions.viewsPlugin.showView(
                                                'travelcompanion'
                                            )
                                        }}
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 14,
                                            fontWeight: 400,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '16.94318199157715px',
                                            textAlign: 'left',
                                            marginTop: 7.5,
                                            marginBottom: 0,
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Travel companion
                                    </span>
                                </div>

                                <div
                                    id="t18_338_267"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 18,
                                        marginRight: 18,
                                    }}
                                >
                                    <span
                                        id="t18_338_268"
                                        className={' footer'}
                                        onClick={() => {
                                            dl.functions.viewsPlugin.showView(
                                                'faq'
                                            )
                                        }}
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 14,
                                            fontWeight: 400,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '16.94318199157715px',
                                            textAlign: 'left',
                                            marginTop: 0,
                                            marginBottom: 7.5,
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Visa & Immigration
                                    </span>

                                    <span
                                        id="t18_338_269"
                                        className={' footer'}
                                        onClick={() => {
                                            dl.functions.viewsPlugin.showView(
                                                'studyabroad'
                                            )
                                        }}
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 14,
                                            fontWeight: 400,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '16.94318199157715px',
                                            textAlign: 'left',
                                            marginTop: 7.5,
                                            marginBottom: 7.5,
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Study abroad
                                    </span>

                                    <span
                                        id="t18_338_270"
                                        className={' footer'}
                                        onClick={() => {
                                            window.open(
                                                'https://cleartaxfiler.com/'
                                            )
                                        }}
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 14,
                                            fontWeight: 400,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '16.94318199157715px',
                                            textAlign: 'left',
                                            marginTop: 7.5,
                                            marginBottom: 7.5,
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Tax services
                                    </span>

                                    <span
                                        id="t18_2263_66"
                                        onClick={() => {
                                            window.open(
                                                'http://launch.melodymocktail.com/tnc'
                                            )
                                        }}
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 14,
                                            fontWeight: 400,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '16.94318199157715px',
                                            textAlign: 'left',
                                            marginTop: 7.5,
                                            marginBottom: 7.5,
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Terms & Conditions
                                    </span>

                                    <span
                                        id="t18_2263_65"
                                        onClick={() => {
                                            window.open(
                                                'http://launch.melodymocktail.com/PP'
                                            )
                                        }}
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 14,
                                            fontWeight: 400,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '16.94318199157715px',
                                            textAlign: 'left',
                                            marginTop: 7.5,
                                            marginBottom: 0,
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Privacy Policy
                                    </span>
                                </div>

                                <div
                                    id="t18_338_260"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 18,
                                        marginRight: 0,
                                    }}
                                >
                                    <span
                                        id="t18_338_265"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 14,
                                            fontWeight: 500,
                                            color: 'rgba(113,113,113,1)',
                                            letterSpacing: 0,
                                            lineHeight: '16.94318199157715px',
                                            textAlign: 'left',
                                            marginTop: 0,
                                            marginBottom: 5,
                                        }}
                                    >
                                        Follow Us
                                    </span>

                                    <div
                                        id="t18_338_261"
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
                                        {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/insta1.png' !=
                                        '' ? (
                                            <img
                                                id="t18_338_262"
                                                className={'hvr-grow-rotate'}
                                                style={{
                                                    height: 24,
                                                    width: 24,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginLeft: 0,
                                                    marginRight: 7.5,
                                                    cursor: 'pointer',
                                                }}
                                                onClick={(e) => {
                                                    window.open(
                                                        'https://www.instagram.com/melody_mocktail/'
                                                    )
                                                }}
                                                src={
                                                    'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/insta1.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

                                        {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/facebook1.png' !=
                                        '' ? (
                                            <img
                                                id="t18_338_263"
                                                className={'hvr-grow-rotate'}
                                                style={{
                                                    height: 24,
                                                    width: 24,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginLeft: 7.5,
                                                    marginRight: 7.5,
                                                    cursor: 'pointer',
                                                }}
                                                onClick={(e) => {
                                                    window.open(
                                                        'https://www.facebook.com/melodymocktail/'
                                                    )
                                                }}
                                                src={
                                                    'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/facebook1.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

                                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/bf49237a2552bcfd51cf7fac523d51326f0c5f89.png' !=
                                        '' ? (
                                            <img
                                                id="t18_338_264"
                                                className={'hvr-grow-rotate'}
                                                style={{
                                                    height: 24,
                                                    width: 24,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginLeft: 7.5,
                                                    marginRight: 7.5,
                                                    cursor: 'pointer',
                                                }}
                                                onClick={(e) => {
                                                    window.open(
                                                        'https://x.com/melodymocktail'
                                                    )
                                                }}
                                                src={
                                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/bf49237a2552bcfd51cf7fac523d51326f0c5f89.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

                                        {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/8a52207e-ba54-4c29-b8f8-47ba7da302a6.png' !=
                                        '' ? (
                                            <img
                                                id="t18_338_264"
                                                className={'hvr-grow-rotate'}
                                                style={{
                                                    height: 24,
                                                    width: 24,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginLeft: 7.5,
                                                    marginRight: 7.5,
                                                    cursor: 'pointer',
                                                }}
                                                onClick={(e) => {
                                                    window.open("https://www.youtube.com/@melodymocktail", "_blank");
                                                }}
                                                src={
                                                    'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/8a52207e-ba54-4c29-b8f8-47ba7da302a6.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}

                                        {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/a147a81d-1482-4929-ada1-b4ee596de5ec.png' !=
                                        '' ? (
                                            <img
                                                id="t18_338_264"
                                                className={'hvr-grow-rotate'}
                                                style={{
                                                    height: 24,
                                                    width: 24,
                                                    display: 'flex',
                                                    borderWidth: 0,
                                                    marginLeft: 7.5,
                                                    marginRight: 0,
                                                    cursor: 'pointer',
                                                }}
                                                onClick={(e) => {
                                                    window.open(" https://www.linkedin.com/company/melody-mocktail", "_blank");
                                                }}
                                                src={
                                                    'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/a147a81d-1482-4929-ada1-b4ee596de5ec.png'
                                                }
                                            ></img>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        id="t18_338_280"
                        style={{
                            height: 17,
                            width: 805,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: 'flex',
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 15,
                            paddingBottom: 10,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            borderColor: 'rgba(207,206,206,1)',
                            borderTopWidth: 1,
                            borderStyle: 'solid',
                            marginTop: 18,
                            marginBottom: 0,
                        }}
                    >
                        <span
                            id="t18_338_281"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 12,
                                fontWeight: 400,
                                color: 'rgba(149,152,153,1)',
                                letterSpacing: 0,
                                lineHeight: '14.522727012634277px',
                                textAlign: 'left',
                            }}
                        >
                            Melody Mocktail@2023. All Rights Reserved
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default MmFooterMd
