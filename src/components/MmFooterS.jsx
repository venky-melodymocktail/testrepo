import './css/MmFooterS.css'

import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmFooterS = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {}
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_338_282"
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
                    id="t18_338_283"
                    style={{
                        height: 360,
                        width: 620,
                        backgroundColor: 'rgba(248,246,246,1.00)',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_338_285"
                        style={{
                            width: 512,
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
                            marginBottom: 10,
                        }}
                    >
                        <div
                            id="t18_338_286"
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
                                    id="t18_338_287"
                                    className={'hvr-grow-rotate'}
                                    style={{
                                        height: 22,
                                        width: 22,
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
                                    id="t18_338_288"
                                    className={'hvr-grow-rotate'}
                                    style={{
                                        height: 22,
                                        width: 22,
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
                                    id="t18_338_289"
                                    className={'hvr-grow-rotate'}
                                    style={{
                                        height: 22,
                                        width: 22,
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
                                    id="t18_338_289"
                                    className={'hvr-grow-rotate'}
                                    style={{
                                        height: 22,
                                        width: 22,
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
                                    id="t18_338_289"
                                    className={'hvr-grow-rotate'}
                                    style={{
                                        height: 22,
                                        width: 22,
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
                        id="t18_2082_1280"
                        style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 10,
                            marginBottom: 10,
                        }}
                    >
                        <div
                            id="t18_2032_882"
                            style={{
                                width: 503,
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
                            {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/MmNewLogo.png' !=
                            '' ? (
                                <img
                                    id="t18_2032_883"
                                    style={{
                                        height: 31,
                                        width: 66,
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
                                id="t18_2032_884"
                                style={{
                                    width: 442,
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
                                    id="t18_2032_885"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 11,
                                        fontWeight: 400,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15px',
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
                            id="t18_2032_881"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 10,
                                marginBottom: 0,
                            }}
                        >
                            <div
                                id="t18_338_292"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 55,
                                }}
                            >
                                <span
                                    id="t18_338_293"
                                    className={' footer'}
                                    onClick={() => {
                                        dl.functions.viewsPlugin.showView(
                                            'contactus'
                                        )
                                    }}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        fontWeight: 400,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '14.522727012634277px',
                                        textAlign: 'left',
                                        marginTop: 0,
                                        marginBottom: 6,
                                        cursor: 'pointer',
                                    }}
                                >
                                    Contact Us
                                </span>

                                <span
                                    id="t18_338_294"
                                    className={' footer'}
                                    onClick={() => {
                                        dl.functions.viewsPlugin.showView(
                                            'aboutus'
                                        )
                                    }}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        fontWeight: 400,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '14.522727012634277px',
                                        textAlign: 'left',
                                        marginTop: 6,
                                        marginBottom: 6,
                                        cursor: 'pointer',
                                    }}
                                >
                                    About Us
                                </span>

                                <span
                                    id="t18_338_295"
                                    className={' footer'}
                                    onClick={() => {
                                        dl.functions.viewsPlugin.showView(
                                            'contactus'
                                        )
                                    }}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        fontWeight: 400,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '14.522727012634277px',
                                        textAlign: 'left',
                                        marginTop: 6,
                                        marginBottom: 6,
                                        cursor: 'pointer',
                                    }}
                                >
                                    Post an Ad
                                </span>

                                <span
                                    id="t18_338_296"
                                    className={' footer'}
                                    onClick={() => {
                                        dl.functions.viewsPlugin.showView(
                                            'rooms'
                                        )
                                    }}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        fontWeight: 400,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '14.522727012634277px',
                                        textAlign: 'left',
                                        marginTop: 6,
                                        marginBottom: 0,
                                        cursor: 'pointer',
                                    }}
                                >
                                    Services
                                </span>
                            </div>

                            <div
                                id="t18_2032_875"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 55,
                                    marginRight: 55,
                                }}
                            >
                                <span
                                    id="t18_2032_876"
                                    className={' footer'}
                                    onClick={() => {
                                        dl.functions.viewsPlugin.showView(
                                            'rooms'
                                        )
                                    }}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        fontWeight: 400,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '14.522727012634277px',
                                        textAlign: 'left',
                                        marginTop: 0,
                                        marginBottom: 6,
                                        cursor: 'pointer',
                                    }}
                                >
                                    Rentals & Properties
                                </span>

                                <span
                                    id="t18_2032_877"
                                    className={' footer'}
                                    onClick={() => {
                                        dl.functions.viewsPlugin.showView(
                                            'ridesharing'
                                        )
                                    }}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        fontWeight: 400,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '14.522727012634277px',
                                        textAlign: 'left',
                                        marginTop: 6,
                                        marginBottom: 6,
                                        cursor: 'pointer',
                                    }}
                                >
                                    Ride sharing
                                </span>

                                <span
                                    id="t18_2032_878"
                                    className={' footer'}
                                    onClick={() => {
                                        dl.functions.viewsPlugin.showView(
                                            'travelsuggestions'
                                        )
                                    }}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        fontWeight: 400,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '14.522727012634277px',
                                        textAlign: 'left',
                                        marginTop: 6,
                                        marginBottom: 6,
                                        cursor: 'pointer',
                                    }}
                                >
                                    Travel suggestions
                                </span>

                                <span
                                    id="t18_2032_879"
                                    className={' footer'}
                                    onClick={() => {
                                        dl.functions.viewsPlugin.showView(
                                            'moviesuggestions'
                                        )
                                    }}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        fontWeight: 400,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '14.522727012634277px',
                                        textAlign: 'left',
                                        marginTop: 6,
                                        marginBottom: 6,
                                        cursor: 'pointer',
                                    }}
                                >
                                    Movie suggestions
                                </span>

                                <span
                                    id="t18_2032_880"
                                    className={' footer'}
                                    onClick={() => {
                                        dl.functions.viewsPlugin.showView(
                                            'travelcompanion'
                                        )
                                    }}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        fontWeight: 400,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '14.522727012634277px',
                                        textAlign: 'left',
                                        marginTop: 6,
                                        marginBottom: 0,
                                        cursor: 'pointer',
                                    }}
                                >
                                    Travel companion
                                </span>
                            </div>

                            <div
                                id="t18_2032_869"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 55,
                                    marginRight: 0,
                                }}
                            >
                                <span
                                    id="t18_2032_870"
                                    className={' footer'}
                                    onClick={() => {
                                        dl.functions.viewsPlugin.showView('faq')
                                    }}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        fontWeight: 400,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '14.522727012634277px',
                                        textAlign: 'left',
                                        marginTop: 0,
                                        marginBottom: 6,
                                        cursor: 'pointer',
                                    }}
                                >
                                    Visa & Immigration
                                </span>

                                <span
                                    id="t18_2032_871"
                                    className={' footer'}
                                    onClick={() => {
                                        dl.functions.viewsPlugin.showView(
                                            'studyabroad'
                                        )
                                    }}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        fontWeight: 400,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '14.522727012634277px',
                                        textAlign: 'left',
                                        marginTop: 6,
                                        marginBottom: 6,
                                        cursor: 'pointer',
                                    }}
                                >
                                    Study abroad
                                </span>

                                <span
                                    id="t18_2032_872"
                                    className={' footer'}
                                    onClick={() => {
                                        window.open(
                                            'https://cleartaxfiler.com/'
                                        )
                                    }}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        fontWeight: 400,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '14.522727012634277px',
                                        textAlign: 'left',
                                        marginTop: 6,
                                        marginBottom: 6,
                                        cursor: 'pointer',
                                    }}
                                >
                                    Tax services
                                </span>

                                <span
                                    id="t18_2263_68"
                                    onClick={() => {
                                        window.open(
                                            'http://launch.melodymocktail.com/tnc'
                                        )
                                    }}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        fontWeight: 400,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '14.522727012634277px',
                                        textAlign: 'left',
                                        marginTop: 6,
                                        marginBottom: 6,
                                        cursor: 'pointer',
                                    }}
                                >
                                    Terms & Conditions
                                </span>

                                <span
                                    id="t18_2263_67"
                                    onClick={() => {
                                        window.open(
                                            'http://launch.melodymocktail.com/PP'
                                        )
                                    }}
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        fontWeight: 400,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '14.522727012634277px',
                                        textAlign: 'left',
                                        marginTop: 6,
                                        marginBottom: 0,
                                        cursor: 'pointer',
                                    }}
                                >
                                    Privacy Policy
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        id="t18_338_305"
                        style={{
                            height: 12,
                            width: 530,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: 'flex',
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 10,
                            paddingBottom: 10,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            borderColor: 'rgba(207,206,206,1)',
                            borderTopWidth: 1,
                            borderStyle: 'solid',
                            marginTop: 10,
                            marginBottom: 0,
                        }}
                    >
                        <span
                            id="t18_338_306"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 11,
                                fontWeight: 400,
                                color: 'rgba(149,152,153,1)',
                                letterSpacing: 0,
                                lineHeight: '13.3125px',
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
export default MmFooterS
