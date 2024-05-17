import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmServiceSelector = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {
        services: {
            rentals: 'rgba(186,15,23,1)',
            rides: 'rgba(186,15,23,1)',
            travelSuggestions: 'rgba(186,15,23,1)',
            movieSuggestions: 'rgba(186,15,23,1)',
            studyAbroad: 'rgba(186,15,23,1)',
            visaQna: 'rgba(156,18,24,1)',
            travelCompanion: 'rgba(186,15,23,1)',
            taxServices: 'rgba(186,15,23,1)',
        },
    }
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_767_205"
                style={{
                    height: 191,
                    width: 1440,
                    backgroundColor: 'rgba(186,15,23,1.00)',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginTop: '0px',
                    marginBottom: '0px',
                }}
            >
                <div
                    id="t18_767_206"
                    className={'mm-service1'}
                    style={{
                        height: 120,
                        width: 140,
                        borderRadius: 12,
                        backgroundColor: props.services.rentals,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        paddingTop: 20,
                        paddingBottom: 20,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginLeft: 0,
                        marginRight: 15,
                        cursor: 'pointer',
                    }}
                    onClick={(e) => {
                        props.onRentalsClick && props.onRentalsClick(e)
                    }}
                >
                    {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/rentalServiceSelector.png' !=
                    '' ? (
                        <img
                            id="t18_767_207"
                            style={{
                                height: 64,
                                width: 64,
                                display: 'flex',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 5,
                            }}
                            src={
                                'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/rentalServiceSelector.png'
                            }
                        ></img>
                    ) : (
                        <></>
                    )}

                    <div
                        id="t18_767_208"
                        style={{
                            width: 116,
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-end',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 5,
                            marginBottom: 0,
                        }}
                    >
                        <span
                            id="t18_767_209"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 18,
                                fontWeight: 600,
                                color: 'rgba(255,255,255,1)',
                                letterSpacing: 0,
                                lineHeight: '24px',
                                textAlign: 'center',
                                marginLeft: 0,
                                marginRight: 4,
                            }}
                        >
                            Rentals & Properties
                        </span>

                        <div
                            id="t18_767_210"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingBottom: 5,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 4,
                                marginRight: 0,
                            }}
                        >
                            {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ServiceArrow.png' !=
                            '' ? (
                                <img
                                    id="t18_767_211"
                                    style={{
                                        height: 10.9833984375,
                                        width: 6,
                                        display: 'flex',
                                        borderWidth: 0,
                                    }}
                                    src={
                                        'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ServiceArrow.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </div>

                <div
                    id="t18_767_212"
                    className={'mm-service1'}
                    style={{
                        height: 120,
                        width: 140,
                        borderRadius: 12,
                        backgroundColor: props.services.rides,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        paddingTop: 20,
                        paddingBottom: 20,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginLeft: 15,
                        marginRight: 15,
                        cursor: 'pointer',
                    }}
                    onClick={(e) => {
                        props.onRidesClick && props.onRidesClick(e)
                    }}
                >
                    {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/rides-serviceselector.png' !=
                    '' ? (
                        <img
                            id="t18_767_213"
                            style={{
                                height: 64,
                                width: 64,
                                display: 'flex',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 5,
                            }}
                            src={
                                'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/rides-serviceselector.png'
                            }
                        ></img>
                    ) : (
                        <></>
                    )}

                    <div
                        id="t18_767_214"
                        style={{
                            width: 87,
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-end',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 5,
                            marginBottom: 0,
                        }}
                    >
                        <span
                            id="t18_767_215"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 18,
                                fontWeight: 600,
                                color: 'rgba(255,255,255,1)',
                                letterSpacing: 0,
                                lineHeight: '24px',
                                textAlign: 'center',
                                marginLeft: 0,
                                marginRight: 4,
                            }}
                        >
                            Ride Sharing
                        </span>

                        <div
                            id="t18_767_216"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingBottom: 5,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 4,
                                marginRight: 0,
                            }}
                        >
                            {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ServiceArrow.png' !=
                            '' ? (
                                <img
                                    id="t18_767_217"
                                    style={{
                                        height: 10.9833984375,
                                        width: 6,
                                        display: 'flex',
                                        borderWidth: 0,
                                    }}
                                    src={
                                        'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ServiceArrow.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </div>

                <div
                    id="t18_767_218"
                    className={'mm-service1'}
                    style={{
                        height: 120,
                        width: 140,
                        borderRadius: 12,
                        backgroundColor: props.services.travelSuggestions,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        paddingTop: 20,
                        paddingBottom: 20,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginLeft: 15,
                        marginRight: 15,
                        cursor: 'pointer',
                    }}
                    onClick={(e) => {
                        props.onTSClick && props.onTSClick(e)
                    }}
                >
                    {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/travelsuggestions-serviceselector.png' !=
                    '' ? (
                        <img
                            id="t18_767_219"
                            style={{
                                height: 64,
                                width: 64,
                                display: 'flex',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 5,
                            }}
                            src={
                                'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/travelsuggestions-serviceselector.png'
                            }
                        ></img>
                    ) : (
                        <></>
                    )}

                    <div
                        id="t18_767_220"
                        style={{
                            width: 123,
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-end',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 5,
                            marginBottom: 0,
                            cursor: 'pointer',
                        }}
                        onClick={(e) => {
                            var currentPath = dl.functions.common.getLastPath()
                            dl.functions.onLoadFunctions[currentPath]()
                        }}
                    >
                        <span
                            id="t18_767_221"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 18,
                                fontWeight: 600,
                                color: 'rgba(255,255,255,1)',
                                letterSpacing: 0,
                                lineHeight: '24px',
                                textAlign: 'center',
                                marginLeft: 0,
                                marginRight: 4,
                            }}
                        >
                            Travel Suggestions
                        </span>

                        <div
                            id="t18_767_222"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingBottom: 5,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 4,
                                marginRight: 0,
                            }}
                        >
                            {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ServiceArrow.png' !=
                            '' ? (
                                <img
                                    id="t18_767_223"
                                    style={{
                                        height: 10.9833984375,
                                        width: 6,
                                        display: 'flex',
                                        borderWidth: 0,
                                    }}
                                    src={
                                        'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ServiceArrow.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </div>

                <div
                    id="t18_767_224"
                    className={'mm-service1'}
                    style={{
                        height: 120,
                        width: 140,
                        borderRadius: 12,
                        backgroundColor: props.services.movieSuggestions,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        paddingTop: 20,
                        paddingBottom: 20,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginLeft: 15,
                        marginRight: 15,
                        cursor: 'pointer',
                    }}
                    onClick={(e) => {
                        props.onMSClick && props.onMSClick(e)
                    }}
                >
                    {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/moviesuggestions-serviceselector.png' !=
                    '' ? (
                        <img
                            id="t18_767_225"
                            style={{
                                height: 64,
                                width: 64,
                                display: 'flex',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 5,
                            }}
                            src={
                                'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/moviesuggestions-serviceselector.png'
                            }
                        ></img>
                    ) : (
                        <></>
                    )}

                    <div
                        id="t18_767_226"
                        style={{
                            height: 48,
                            width: 123,
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-end',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 5,
                            marginBottom: 0,
                        }}
                    >
                        <span
                            id="t18_767_227"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 18,
                                fontWeight: 600,
                                color: 'rgba(255,255,255,1)',
                                letterSpacing: 0,
                                lineHeight: '24px',
                                textAlign: 'center',
                                marginLeft: 0,
                                marginRight: 4,
                            }}
                        >
                            Movie Suggestions
                        </span>

                        <div
                            id="t18_767_228"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingBottom: 5,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 4,
                                marginRight: 0,
                            }}
                        >
                            {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ServiceArrow.png' !=
                            '' ? (
                                <img
                                    id="t18_767_229"
                                    style={{
                                        height: 10.9833984375,
                                        width: 6,
                                        display: 'flex',
                                        borderWidth: 0,
                                    }}
                                    src={
                                        'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ServiceArrow.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </div>

                <div
                    id="t18_767_230"
                    className={'mm-service1'}
                    style={{
                        height: 120,
                        width: 140,
                        borderRadius: 12,
                        backgroundColor: props.services.studyAbroad,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        paddingTop: 20,
                        paddingBottom: 20,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginLeft: 15,
                        marginRight: 15,
                        cursor: 'pointer',
                    }}
                    onClick={(e) => {
                        props.onStudyAbroadClick && props.onStudyAbroadClick(e)
                    }}
                >
                    {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/studyabroad-serviceselector.png' !=
                    '' ? (
                        <img
                            id="t18_767_231"
                            style={{
                                height: 64,
                                width: 64,
                                display: 'flex',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 5,
                            }}
                            src={
                                'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/studyabroad-serviceselector.png'
                            }
                        ></img>
                    ) : (
                        <></>
                    )}

                    <div
                        id="t18_767_232"
                        style={{
                            height: 48,
                            width: 82,
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-end',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 5,
                            marginBottom: 0,
                        }}
                    >
                        <span
                            id="t18_767_233"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 18,
                                fontWeight: 600,
                                color: 'rgba(255,255,255,1)',
                                letterSpacing: 0,
                                lineHeight: '24px',
                                textAlign: 'center',
                                marginLeft: 0,
                                marginRight: 4,
                            }}
                        >
                            Study Abroad
                        </span>

                        <div
                            id="t18_767_234"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingBottom: 5,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 4,
                                marginRight: 0,
                            }}
                        >
                            {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ServiceArrow.png' !=
                            '' ? (
                                <img
                                    id="t18_767_235"
                                    style={{
                                        height: 10.9833984375,
                                        width: 6,
                                        display: 'flex',
                                        borderWidth: 0,
                                    }}
                                    src={
                                        'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ServiceArrow.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </div>

                <div
                    id="t18_767_236"
                    className={'mm-service1'}
                    style={{
                        height: 120,
                        width: 140,
                        borderRadius: 12,
                        backgroundColor: props.services.visaQna,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        paddingTop: 20,
                        paddingBottom: 20,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginLeft: 15,
                        marginRight: 15,
                        cursor: 'pointer',
                    }}
                    onClick={(e) => {
                        props.onVisaClick && props.onVisaClick(e)
                    }}
                >
                    {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/visaQnA-serviceselector.png' !=
                    '' ? (
                        <img
                            id="t18_767_237"
                            style={{
                                height: 64,
                                width: 64,
                                display: 'flex',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 5,
                            }}
                            src={
                                'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/visaQnA-serviceselector.png'
                            }
                        ></img>
                    ) : (
                        <></>
                    )}

                    <div
                        id="t18_767_238"
                        style={{
                            height: 48,
                            width: 118,
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-end',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 5,
                            marginBottom: 0,
                        }}
                    >
                        <span
                            id="t18_767_239"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 18,
                                fontWeight: 600,
                                color: 'rgba(255,255,255,1)',
                                letterSpacing: 0,
                                lineHeight: '24px',
                                textAlign: 'center',
                                marginLeft: 0,
                                marginRight: 4,
                            }}
                        >
                            Visa & Immigration
                        </span>

                        <div
                            id="t18_767_240"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingBottom: 5,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 4,
                                marginRight: 0,
                            }}
                        >
                            {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ServiceArrow.png' !=
                            '' ? (
                                <img
                                    id="t18_767_241"
                                    style={{
                                        height: 10.9833984375,
                                        width: 6,
                                        display: 'flex',
                                        borderWidth: 0,
                                    }}
                                    src={
                                        'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ServiceArrow.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </div>

                <div
                    id="t18_767_242"
                    className={'mm-service1'}
                    style={{
                        height: 120,
                        width: 140,
                        borderRadius: 12,
                        backgroundColor: props.services.travelCompanion,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        paddingTop: 20,
                        paddingBottom: 20,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginLeft: 15,
                        marginRight: 15,
                        cursor: 'pointer',
                    }}
                    onClick={(e) => {
                        props.onTravelCompanionClick &&
                            props.onTravelCompanionClick(e)
                    }}
                >
                    {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/Travelcompanion-serviceselector.png' !=
                    '' ? (
                        <img
                            id="t18_767_243"
                            style={{
                                height: 64,
                                width: 64,
                                display: 'flex',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 5,
                            }}
                            src={
                                'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/Travelcompanion-serviceselector.png'
                            }
                        ></img>
                    ) : (
                        <></>
                    )}

                    <div
                        id="t18_767_244"
                        style={{
                            height: 48,
                            width: 122,
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-end',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 5,
                            marginBottom: 0,
                        }}
                    >
                        <span
                            id="t18_767_245"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 18,
                                fontWeight: 600,
                                color: 'rgba(255,255,255,1)',
                                letterSpacing: 0,
                                lineHeight: '24px',
                                textAlign: 'center',
                                marginLeft: 0,
                                marginRight: 4,
                            }}
                        >
                            Travel Companion
                        </span>

                        <div
                            id="t18_767_246"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingBottom: 5,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 4,
                                marginRight: 0,
                            }}
                        >
                            {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ServiceArrow.png' !=
                            '' ? (
                                <img
                                    id="t18_767_247"
                                    style={{
                                        height: 10.9833984375,
                                        width: 6,
                                        display: 'flex',
                                        borderWidth: 0,
                                    }}
                                    src={
                                        'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ServiceArrow.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </div>

                <div
                    id="t18_767_248"
                    className={'mm-service1'}
                    style={{
                        height: 120,
                        width: 140,
                        borderRadius: 12,
                        backgroundColor: 'rgba(186,15,23,1.00)',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        paddingTop: 20,
                        paddingBottom: 20,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginLeft: 15,
                        marginRight: 0,
                        cursor: 'pointer',
                    }}
                    onClick={(e) => {
                        window.open('https://cleartaxfiler.com/')
                    }}
                >
                    {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/taxservices-serviceselector.png' !=
                    '' ? (
                        <img
                            id="t18_767_249"
                            style={{
                                height: 64,
                                width: 64,
                                display: 'flex',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 5,
                            }}
                            src={
                                'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/taxservices-serviceselector.png'
                            }
                        ></img>
                    ) : (
                        <></>
                    )}

                    <div
                        id="t18_767_250"
                        style={{
                            height: 48,
                            width: 97,
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-end',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 5,
                            marginBottom: 0,
                        }}
                    >
                        <span
                            id="t18_767_251"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 18,
                                fontWeight: 600,
                                color: 'rgba(255,255,255,1)',
                                letterSpacing: 0,
                                lineHeight: '24px',
                                textAlign: 'center',
                                marginLeft: 0,
                                marginRight: 4,
                            }}
                        >
                            Tax Services
                        </span>

                        <div
                            id="t18_767_252"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingBottom: 5,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 4,
                                marginRight: 0,
                            }}
                        >
                            {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ServiceArrow.png' !=
                            '' ? (
                                <img
                                    id="t18_767_253"
                                    style={{
                                        height: 10.9833984375,
                                        width: 6,
                                        display: 'flex',
                                        borderWidth: 0,
                                    }}
                                    src={
                                        'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ServiceArrow.png'
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
    )
})
export default MmServiceSelector
