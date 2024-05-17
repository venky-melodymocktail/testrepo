import './css/MmFooter.css'

import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmFooter = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {}
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_183_1343"
                style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    paddingTop: 80,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginTop: 5,
                    marginBottom: 5,
                }}
            >
                <div
                    id="t18_183_1344"
                    style={{
                        height: 266,
                        width: 1440,
                        backgroundColor: 'rgba(248,246,246,1.00)',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        paddingTop: 50,
                        paddingBottom: 20,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_2018_56"
                        style={{
                            width: 1235,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'space-between',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 0,
                            marginBottom: 18,
                        }}
                    >
                        <div
                            id="t18_2018_35"
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
                            {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/MmNewLogo.png' !=
                            '' ? (
                                <img
                                    id="t18_2018_36"
                                    style={{
                                        height: 66,
                                        width: 139,
                                        display: 'flex',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 12.5,
                                    }}
                                    src={
                                        'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/MmNewLogo.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}

                            <div
                                id="t18_2018_88"
                                style={{
                                    height: 68,
                                    width: 337,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 12.5,
                                    marginBottom: 0,
                                }}
                            >
                                <span
                                    id="t18_2018_37"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 400,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
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
                            id="t18_2018_43"
                            style={{
                                width: 87,
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
                                id="t18_2018_44"
                                className={' footer'}
                                onClick={() => {
                                    dl.functions.viewsPlugin.showView(
                                        'contactus'
                                    )
                                }}
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 400,
                                    color: 'rgba(0,0,0,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginTop: 0,
                                    marginBottom: 10,
                                    cursor: 'pointer',
                                }}
                            >
                                Contact Us
                            </span>

                            <span
                                id="t18_2018_45"
                                className={' footer'}
                                onClick={() => {
                                    dl.functions.viewsPlugin.showView('aboutus')
                                }}
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 400,
                                    color: 'rgba(0,0,0,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginTop: 10,
                                    marginBottom: 10,
                                    cursor: 'pointer',
                                }}
                            >
                                About Us
                            </span>

                            <span
                                id="t18_2018_46"
                                className={' footer'}
                                onClick={() => {
                                    dl.functions.viewsPlugin.showView(
                                        'contactus'
                                    )
                                }}
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 400,
                                    color: 'rgba(0,0,0,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginTop: 10,
                                    marginBottom: 10,
                                    cursor: 'pointer',
                                }}
                            >
                                Post an Ad
                            </span>

                            <span
                                id="t18_2018_47"
                                className={' footer'}
                                onClick={() => {
                                    dl.functions.viewsPlugin.showView('blogs')
                                }}
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 400,
                                    color: 'rgba(0,0,0,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginTop: 10,
                                    marginBottom: 10,
                                    cursor: 'pointer',
                                }}
                            >
                                Blogs
                            </span>

                            <span
                                id="t18_2018_48"
                                className={' footer'}
                                onClick={() => {
                                    dl.functions.viewsPlugin.showView('rooms')
                                }}
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 400,
                                    color: 'rgba(0,0,0,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginTop: 10,
                                    marginBottom: 0,
                                    cursor: 'pointer',
                                }}
                            >
                                Services
                            </span>
                        </div>

                        <div
                            id="t18_2018_49"
                            style={{
                                width: 155,
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
                                id="t18_2018_50"
                                className={' footer'}
                                onClick={() => {
                                    dl.functions.viewsPlugin.showView('rooms')
                                }}
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 400,
                                    color: 'rgba(0,0,0,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginTop: 0,
                                    marginBottom: 10,
                                    cursor: 'pointer',
                                }}
                            >
                                Rentals & properties
                            </span>

                            <span
                                id="t18_2018_51"
                                className={' footer'}
                                onClick={() => {
                                    dl.functions.viewsPlugin.showView(
                                        'ridesharing'
                                    )
                                }}
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 400,
                                    color: 'rgba(0,0,0,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginTop: 10,
                                    marginBottom: 10,
                                    cursor: 'pointer',
                                }}
                            >
                                Ride sharing
                            </span>

                            <span
                                id="t18_2018_52"
                                className={' footer'}
                                onClick={() => {
                                    dl.functions.viewsPlugin.showView(
                                        'travelsuggestions'
                                    )
                                }}
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 400,
                                    color: 'rgba(0,0,0,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginTop: 10,
                                    marginBottom: 10,
                                    cursor: 'pointer',
                                }}
                            >
                                Travel suggestions
                            </span>

                            <span
                                id="t18_2018_53"
                                className={' footer'}
                                onClick={() => {
                                    dl.functions.viewsPlugin.showView(
                                        'moviesuggestions'
                                    )
                                }}
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 400,
                                    color: 'rgba(0,0,0,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginTop: 10,
                                    marginBottom: 10,
                                    cursor: 'pointer',
                                }}
                            >
                                Movie suggestions
                            </span>

                            <span
                                id="t18_2018_54"
                                className={' footer'}
                                onClick={() => {
                                    dl.functions.viewsPlugin.showView(
                                        'travelcompanion'
                                    )
                                }}
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 400,
                                    color: 'rgba(0,0,0,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginTop: 10,
                                    marginBottom: 0,
                                    cursor: 'pointer',
                                }}
                            >
                                Travel companion
                            </span>
                        </div>

                        <div
                            id="t18_183_1353"
                            style={{
                                width: 152,
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
                                id="t18_183_1354"
                                className={' footer'}
                                onClick={() => {
                                    dl.functions.viewsPlugin.showView('faq')
                                }}
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 400,
                                    color: 'rgba(0,0,0,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginTop: 0,
                                    marginBottom: 10,
                                    cursor: 'pointer',
                                }}
                            >
                                Visa & immigration
                            </span>

                            <span
                                id="t18_183_1355"
                                className={' footer'}
                                onClick={() => {
                                    dl.functions.viewsPlugin.showView(
                                        'studyabroad'
                                    )
                                }}
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 400,
                                    color: 'rgba(0,0,0,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginTop: 10,
                                    marginBottom: 10,
                                    cursor: 'pointer',
                                }}
                            >
                                Study abroad
                            </span>

                            <span
                                id="t18_183_1356"
                                className={' footer'}
                                onClick={() => {
                                    window.open('https://cleartaxfiler.com/')
                                }}
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 400,
                                    color: 'rgba(0,0,0,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginTop: 10,
                                    marginBottom: 10,
                                    cursor: 'pointer',
                                }}
                            >
                                Tax services
                            </span>

                            <span
                                id="t18_2263_64"
                                className={' footer'}
                                onClick={() => {
                                    window.open(
                                        'http://launch.melodymocktail.com/tnc'
                                    )
                                }}
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 400,
                                    color: 'rgba(0,0,0,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginTop: 10,
                                    marginBottom: 10,
                                    cursor: 'pointer',
                                }}
                            >
                                Terms & Conditions
                            </span>

                            <span
                                id="t18_2263_63"
                                className={' footer'}
                                onClick={() => {
                                    window.open(
                                        'http://launch.melodymocktail.com/PP'
                                    )
                                }}
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 400,
                                    color: 'rgba(0,0,0,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginTop: 10,
                                    marginBottom: 0,
                                    cursor: 'pointer',
                                }}
                            >
                                Privacy Policy
                            </span>
                        </div>

                        <div
                            id="t18_183_1346"
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
                                id="t18_183_1351"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 500,
                                    color: 'rgba(113,113,113,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginTop: 0,
                                    marginBottom: 5,
                                }}
                            >
                                Follow Us
                            </span>

                            <div
                                id="t18_183_1347"
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
                                        id="t18_183_1348"
                                        className={'hvr-grow-rotate'}
                                        style={{
                                            height: 28,
                                            width: 28,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: 0,
                                            marginRight: 10,
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
                                        id="t18_183_1349"
                                        className={'hvr-grow-rotate'}
                                        style={{
                                            height: 28,
                                            width: 28,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: 10,
                                            marginRight: 10,
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
                                        id="t18_183_1350"
                                        className={'hvr-grow-rotate'}
                                        style={{
                                            height: 28,
                                            width: 28,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: 10,
                                            marginRight: 10,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            // https://twitter.com/
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
                                        id="t18_183_1350"
                                        className={'hvr-grow-rotate'}
                                        style={{
                                            height: 28,
                                            width: 28,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: 10,
                                            marginRight: 10,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            // https://twitter.com/
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
                                        id="t18_183_1350"
                                        className={'hvr-grow-rotate'}
                                        style={{
                                            height: 28,
                                            width: 28,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: 10,
                                            marginRight: 0,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            // https://twitter.com/
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

                    <div
                        id="t18_183_1365"
                        style={{
                            width: 1300,
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: 'flex',
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 28,
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
                            id="t18_183_1366"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 14,
                                fontWeight: 400,
                                color: 'rgba(149,152,153,1)',
                                letterSpacing: 0,
                                lineHeight: '16.94318199157715px',
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
export default MmFooter
