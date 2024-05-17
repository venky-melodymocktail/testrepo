import './css/MmFooterXs.css'

import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmFooterXs = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {}
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_338_232"
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
                    id="t18_338_233"
                    style={{
                        width: 360,
                        backgroundColor: 'rgba(248,246,246,1.00)',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        display: 'flex',
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingTop: 20,
                        paddingBottom: 20,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_338_235"
                        style={{
                            width: 359,
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
                            marginTop: 0,
                            marginBottom: 7.5,
                        }}
                    >
                        <div
                            id="t18_338_236"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                            }}
                        >
                            {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/insta1.png' !=
                            '' ? (
                                <img
                                    id="t18_338_237"
                                    className={'hvr-grow-rotate'}
                                    style={{
                                        height: 20,
                                        width: 20,
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
                                    id="t18_338_238"
                                    className={'hvr-grow-rotate'}
                                    style={{
                                        height: 20,
                                        width: 20,
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
                                    id="t18_338_239"
                                    className={'hvr-grow-rotate'}
                                    style={{
                                        height: 20,
                                        width: 20,
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
                                    id="t18_338_239"
                                    className={'hvr-grow-rotate'}
                                    style={{
                                        height: 20,
                                        width: 20,
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
                                    id="t18_338_239"
                                    className={'hvr-grow-rotate'}
                                    style={{
                                        height: 20,
                                        width: 20,
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

                    <div
                        id="t18_2032_899"
                        style={{
                            width: 372,
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 7.5,
                            marginBottom: 7.5,
                        }}
                    >
                        {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/MmNewLogo.png' !=
                        '' ? (
                            <img
                                id="t18_2032_900"
                                style={{
                                    height: 23,
                                    width: 49,
                                    display: 'flex',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 5,
                                }}
                                src={
                                    'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/MmNewLogo.png'
                                }
                            ></img>
                        ) : (
                            <></>
                        )}

                        <div
                            id="t18_2032_901"
                            style={{
                                width: 297,
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
                                id="t18_2032_902"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 10,
                                    fontWeight: 400,
                                    color: 'rgba(113,113,113,1)',
                                    letterSpacing: 0,
                                    lineHeight: '14px',
                                    textAlign: 'left',
                                }}
                            >
                                “Melody Mocktail is designed to make this
                                process seamless, reliable, and efficient,
                                ensuring you can easily access the services you
                                need, all while supporting your local
                                community.”
                            </span>
                        </div>
                    </div>

                    <div
                        id="t18_2032_898"
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
                            id="t18_338_242"
                            style={{
                                width: 359,
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 4.5,
                            }}
                        >
                            <div
                                id="t18_2082_1268"
                                style={{
                                    width: 359,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingBottom: 6,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderBottomWidth: 0.5,
                                    borderStyle: 'solid',
                                    marginTop: 0,
                                    marginBottom: 4,
                                }}
                            >
                                <span
                                    id="t18_338_243"
                                    className={' footer'}
                                    onClick={() => {
                                        dl.functions.viewsPlugin.showView(
                                            'contactus'
                                        )
                                    }}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 11,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '13.3125px',
                                        textAlign: 'left',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Contact Us
                                </span>
                            </div>

                            <div
                                id="t18_2082_1269"
                                style={{
                                    width: 359,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingBottom: 6,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderBottomWidth: 0.5,
                                    borderStyle: 'solid',
                                    marginTop: 4,
                                    marginBottom: 4,
                                }}
                            >
                                <span
                                    id="t18_338_244"
                                    onClick={() => {
                                        dl.functions.viewsPlugin.showView(
                                            'aboutus'
                                        )
                                    }}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 11,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '13.3125px',
                                        textAlign: 'left',
                                        cursor: 'pointer',
                                    }}
                                >
                                    About Us
                                </span>
                            </div>

                            <div
                                id="t18_2082_1270"
                                style={{
                                    width: 359,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingBottom: 6,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderBottomWidth: 0.5,
                                    borderStyle: 'solid',
                                    marginTop: 4,
                                    marginBottom: 4,
                                }}
                            >
                                <span
                                    id="t18_338_245"
                                    onClick={() => {
                                        dl.functions.viewsPlugin.showView(
                                            'contactus'
                                        )
                                    }}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 11,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '13.3125px',
                                        textAlign: 'left',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Post an Ad
                                </span>
                            </div>

                            <div
                                id="t18_2082_1271"
                                style={{
                                    width: 359,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingBottom: 6,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderBottomWidth: 0.5,
                                    borderStyle: 'solid',
                                    marginTop: 4,
                                    marginBottom: 0,
                                }}
                            >
                                <span
                                    id="t18_338_246"
                                    onClick={() => {
                                        dl.functions.viewsPlugin.showView(
                                            'rooms'
                                        )
                                    }}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 11,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '13.3125px',
                                        textAlign: 'left',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Services
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_2032_890"
                            style={{
                                width: 359,
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 4.5,
                                marginBottom: 4.5,
                            }}
                        >
                            <div
                                id="t18_2082_1272"
                                style={{
                                    width: 359,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingBottom: 6,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderBottomWidth: 0.5,
                                    borderStyle: 'solid',
                                    marginTop: 0,
                                    marginBottom: 4,
                                }}
                            >
                                <span
                                    id="t18_2032_886"
                                    onClick={() => {
                                        dl.functions.viewsPlugin.showView(
                                            'rooms'
                                        )
                                    }}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 11,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '13.3125px',
                                        textAlign: 'left',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Rentals & Properties
                                </span>
                            </div>

                            <div
                                id="t18_2082_1273"
                                style={{
                                    width: 359,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingBottom: 6,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderBottomWidth: 0.5,
                                    borderStyle: 'solid',
                                    marginTop: 4,
                                    marginBottom: 4,
                                }}
                            >
                                <span
                                    id="t18_2032_887"
                                    onClick={() => {
                                        dl.functions.viewsPlugin.showView(
                                            'ridesharing'
                                        )
                                    }}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 11,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '13.3125px',
                                        textAlign: 'left',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Ride sharing
                                </span>
                            </div>

                            <div
                                id="t18_2082_1274"
                                style={{
                                    width: 359,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingBottom: 6,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderBottomWidth: 0.5,
                                    borderStyle: 'solid',
                                    marginTop: 4,
                                    marginBottom: 4,
                                }}
                            >
                                <span
                                    id="t18_2032_888"
                                    onClick={() => {
                                        dl.functions.viewsPlugin.showView(
                                            'travelsuggestions'
                                        )
                                    }}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 11,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '13.3125px',
                                        textAlign: 'left',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Travel suggestions
                                </span>
                            </div>

                            <div
                                id="t18_2082_1275"
                                style={{
                                    width: 359,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingBottom: 6,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderBottomWidth: 0.5,
                                    borderStyle: 'solid',
                                    marginTop: 4,
                                    marginBottom: 4,
                                }}
                            >
                                <span
                                    id="t18_2032_891"
                                    onClick={() => {
                                        dl.functions.viewsPlugin.showView(
                                            'moviesuggestions'
                                        )
                                    }}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 11,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '13.3125px',
                                        textAlign: 'left',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Movie suggestions
                                </span>
                            </div>

                            <div
                                id="t18_2082_1276"
                                style={{
                                    width: 359,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingBottom: 6,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderBottomWidth: 0.5,
                                    borderStyle: 'solid',
                                    marginTop: 4,
                                    marginBottom: 0,
                                }}
                            >
                                <span
                                    id="t18_2032_889"
                                    onClick={() => {
                                        dl.functions.viewsPlugin.showView(
                                            'travelcompanion'
                                        )
                                    }}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 11,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '13.3125px',
                                        textAlign: 'left',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Travel companion
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_2032_892"
                            style={{
                                width: 359,
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 4.5,
                                marginBottom: 0,
                            }}
                        >
                            <div
                                id="t18_2082_1277"
                                style={{
                                    width: 359,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingBottom: 6,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderBottomWidth: 0.5,
                                    borderStyle: 'solid',
                                    marginTop: 0,
                                    marginBottom: 4,
                                }}
                            >
                                <span
                                    id="t18_2032_893"
                                    onClick={() => {
                                        dl.functions.viewsPlugin.showView('faq')
                                    }}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 11,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '13.3125px',
                                        textAlign: 'left',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Visa & immigration
                                </span>
                            </div>

                            <div
                                id="t18_2082_1278"
                                style={{
                                    width: 359,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingBottom: 6,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderBottomWidth: 0.5,
                                    borderStyle: 'solid',
                                    marginTop: 4,
                                    marginBottom: 4,
                                }}
                            >
                                <span
                                    id="t18_2032_894"
                                    onClick={() => {
                                        dl.functions.viewsPlugin.showView(
                                            'studyabroad'
                                        )
                                    }}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 11,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '13.3125px',
                                        textAlign: 'left',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Study abroad
                                </span>
                            </div>

                            <div
                                id="t18_2082_1279"
                                style={{
                                    width: 359,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingBottom: 6,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderBottomWidth: 0.5,
                                    borderStyle: 'solid',
                                    marginTop: 4,
                                    marginBottom: 4,
                                }}
                            >
                                <span
                                    id="t18_2032_895"
                                    onClick={() => {
                                        window.open(
                                            'https://cleartaxfiler.com/'
                                        )
                                    }}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 11,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '13.3125px',
                                        textAlign: 'left',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Tax services
                                </span>
                            </div>

                            <div
                                id="t18_2263_71"
                                style={{
                                    width: 359,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingBottom: 6,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderColor: 'rgba(207,206,206,1)',
                                    borderBottomWidth: 0.5,
                                    borderStyle: 'solid',
                                    marginTop: 4,
                                    marginBottom: 4,
                                }}
                            >
                                <span
                                    id="t18_2263_72"
                                    onClick={() => {
                                        window.open(
                                            'http://launch.melodymocktail.com/tnc'
                                        )
                                    }}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 11,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '13.3125px',
                                        textAlign: 'left',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Terms & Conditions
                                </span>
                            </div>

                            <div
                                id="t18_2263_70"
                                style={{
                                    width: 359,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    paddingBottom: 6,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    borderBottomWidth: 0.5,
                                    marginTop: 4,
                                    marginBottom: 0,
                                }}
                            >
                                <span
                                    id="t18_2263_69"
                                    onClick={() => {
                                        window.open(
                                            'http://launch.melodymocktail.com/PP'
                                        )
                                    }}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 11,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '13.3125px',
                                        textAlign: 'left',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Privacy Policy
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        id="t18_338_255"
                        style={{
                            height: 14,
                            width: 320,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: 'flex',
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 6,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            borderColor: 'rgba(207,206,206,1)',
                            borderTopWidth: 1,
                            borderStyle: 'solid',
                            marginTop: 7.5,
                            marginBottom: 0,
                        }}
                    >
                        <span
                            id="t18_338_256"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 8,
                                fontWeight: 400,
                                color: 'rgba(149,152,153,1)',
                                letterSpacing: 0,
                                lineHeight: '9.681818008422852px',
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
export default MmFooterXs
