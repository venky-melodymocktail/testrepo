import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmServiceSelectorMd = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {
        services: {
            rentals: {
                borderColor: 'rgba(207,206,206,1)',
                fontColor: 'rgba(113,113,113,1)',
            },
            rides: {
                borderColor: 'rgba(207,206,206,1)',
                fontColor: 'rgba(113,113,113,1)',
            },
            travelSuggestions: {
                borderColor: 'rgba(186,15,23,1)',
                fontColor: 'rgba(186,15,23,1)',
                text: 'Travel Suggestions',
            },
            movieSuggestions: {
                borderColor: 'rgba(207,206,206,1)',
                fontColor: 'rgba(113,113,113,1)',
            },
            studyAbroad: {
                borderColor: 'rgba(207,206,206,1)',
                fontColor: 'rgba(113,113,113,1)',
                display: 'flex',
            },
            visaQna: {
                borderColor: 'rgba(207,206,206,1)',
                fontColor: 'rgba(113,113,113,1)',
            },
            travelCompanion: {
                borderColor: 'rgba(207,206,206,1)',
                fontColor: 'rgba(113,113,113,1)',
            },
            taxServices: {
                borderColor: 'rgba(207,206,206,1)',
                fontColor: 'rgba(113,113,113,1)',
                display: 'flex',
            },
        },
    }
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_794_4476"
                style={{
                    width: 900,
                    backgroundColor: 'rgba(248,246,246,1)',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    itemSpacing: 15,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 20,
                    paddingBottom: 20,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    borderColor: 'rgba(207,206,206,1)',
                    borderBottomWidth: 1,
                    borderStyle: 'solid',
                    marginTop: 5,
                    marginBottom: 5,
                }}
            >
                <div
                    id="t18_794_4472"
                    style={{
                        height: 25,
                        width: 25,
                        borderRadius: 100,
                        backgroundColor: 'rgba(255,255,255,1)',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        itemSpacing: 10,
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 10,
                        paddingBottom: 10,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginLeft: 0,
                        marginRight: 7.5,
                        cursor: 'pointer',
                    }}
                    onClick={(e) => {
                        let id = '794:4471'
                        if (!document.getElementById(id)) {
                            id = 't18_794_4471'
                        }

                        const container = document.getElementById(id)
                        container.scroll({
                            left: container.scrollLeft - 150, // Scroll by 100 pixels horizontally
                            behavior: 'smooth', // Smooth scrolling behavior
                        })
                    }}
                >
                    {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/arrowLeft.png' !=
                    '' ? (
                        <img
                            id="t18_794_4473"
                            style={{
                                height: 23,
                                width: 13,
                                display: 'flex',
                                borderWidth: 0,
                            }}
                            src={
                                'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/arrowLeft.png'
                            }
                        ></img>
                    ) : (
                        <></>
                    )}
                </div>

                <div
                    id="t18_794_4471"
                    style={{
                        width: 730,
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        itemSpacing: 10,
                        paddingLeft: 0,
                        paddingRight: 0,
                        paddingTop: 10,
                        paddingBottom: 10,
                        position: 'relative',
                        overflow: 'scroll',
                        borderWidth: 0,
                        marginLeft: 7.5,
                        marginRight: 7.5,
                    }}
                >
                    <div
                        id="t18_796_4818"
                        style={{
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            itemSpacing: 10,
                            paddingLeft: 0,
                            paddingRight: 0,
                            paddingTop: 0,
                            paddingBottom: 0,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                        }}
                    >
                        <div
                            id="t18_796_4819"
                            style={{
                                borderRadius: 10,
                                backgroundColor: 'rgba(255,255,255,1)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                itemSpacing: 16,
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 10,
                                paddingBottom: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 1,
                                borderColor: props.services.rentals.borderColor,
                                borderStyle: 'solid',
                                marginLeft: 0,
                                marginRight: 5,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                var serviceSelector =
                                    dl.changes.serviceSelectorMini.services

                                for (var key in serviceSelector) {
                                    serviceSelector[key]['borderColor'] =
                                        'rgba(207,206,206,1)'
                                    serviceSelector[key]['fontColor'] =
                                        'rgba(113,113,113,1)'
                                }

                                serviceSelector['rentals']['borderColor'] =
                                    'rgba(186,15,23,1)'
                                serviceSelector['rentals']['fontColor'] =
                                    'rgba(186,15,23,1)'

                                var currentPath =
                                    dl.functions.common.getLastPath()

                                if (currentPath.includes('bookmarks')) {
                                    dl.functions.viewsPlugin.showView(
                                        'rentalbookmarks'
                                    )
                                    dl.functions.onLoadFunctions.rentalbookmarks()
                                } else {
                                    dl.functions.viewsPlugin.showView('rooms')
                                    dl.functions.onLoadFunctions.rooms()
                                }

                                // dl.functions.viewsPlugin.showView('ridesharing')
                                // var currentPath = dl.functions.common.getLastPath()
                                // dl.functions.onLoadFunctions[currentPath]()
                            }}
                        >
                            <div
                                id="t18_796_4820"
                                style={{
                                    height: 47,
                                    width: 47,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 10,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 8,
                                }}
                            >
                                {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/rentalsActive.png' !=
                                '' ? (
                                    <img
                                        id="t18_796_4821"
                                        style={{
                                            height: 47,
                                            width: 47,
                                            display: 'flex',
                                            borderWidth: 0,
                                        }}
                                        src={
                                            'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/rentalsActive.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}
                            </div>

                            <div
                                id="t18_796_4822"
                                style={{
                                    width: 86,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 10,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 8,
                                    marginRight: 0,
                                }}
                            >
                                <span
                                    id="t18_796_4823"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 17,
                                        fontWeight: 600,
                                        color: props.services.rentals.fontColor,
                                        letterSpacing: 0,
                                        lineHeight: '20px',
                                        textAlign: 'center',
                                    }}
                                >
                                    Rentals & Properties
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_796_4824"
                            style={{
                                borderRadius: 10,
                                backgroundColor: 'rgba(255,255,255,1)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                itemSpacing: 16,
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 10,
                                paddingBottom: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 1,
                                borderColor: props.services.rides.borderColor,
                                borderStyle: 'solid',
                                marginLeft: 5,
                                marginRight: 5,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                var serviceSelector =
                                    dl.changes.serviceSelectorMini.services

                                for (var key in serviceSelector) {
                                    serviceSelector[key]['borderColor'] =
                                        'rgba(207,206,206,1)'
                                    serviceSelector[key]['fontColor'] =
                                        'rgba(113,113,113,1)'
                                }

                                serviceSelector['rides']['borderColor'] =
                                    'rgba(186,15,23,1)'
                                serviceSelector['rides']['fontColor'] =
                                    'rgba(186,15,23,1)'

                                var currentPath =
                                    dl.functions.common.getLastPath()

                                if (currentPath.includes('bookmarks')) {
                                    dl.functions.viewsPlugin.showView(
                                        'ridebookmarks'
                                    )
                                    dl.functions.onLoadFunctions.ridebookmarks()
                                } else {
                                    dl.functions.viewsPlugin.showView(
                                        'ridesharing'
                                    )
                                    dl.functions.onLoadFunctions.ridesharing()
                                }

                                // dl.functions.viewsPlugin.showView('ridesharing')
                                // var currentPath = dl.functions.common.getLastPath()
                                // dl.functions.onLoadFunctions[currentPath]()
                            }}
                        >
                            <div
                                id="t18_796_4825"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 10,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 8,
                                }}
                            >
                                {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ridesActive.png' !=
                                '' ? (
                                    <img
                                        id="t18_796_4826"
                                        style={{
                                            height: 47,
                                            width: 47,
                                            display: 'flex',
                                            borderWidth: 0,
                                        }}
                                        src={
                                            'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ridesActive.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}
                            </div>

                            <div
                                id="t18_796_4827"
                                style={{
                                    width: 62,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 10,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 8,
                                    marginRight: 0,
                                }}
                            >
                                <span
                                    id="t18_796_4828"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 17,
                                        fontWeight: 600,
                                        color: props.services.rides.fontColor,
                                        letterSpacing: 0,
                                        lineHeight: '20px',
                                        textAlign: 'center',
                                    }}
                                >
                                    Ride sharing
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_796_4829"
                            style={{
                                borderRadius: 10,
                                backgroundColor: 'rgba(255,255,255,1)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                itemSpacing: 16,
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 10,
                                paddingBottom: 10,
                                position: 'relative',
                                overflow: 'visible',
                                boxShadow:
                                    '0px 4px 10px rgba(0,0,0,0.11999999731779099)',
                                borderWidth: 1,
                                borderColor:
                                    props.services.travelSuggestions
                                        .borderColor,
                                borderStyle: 'solid',
                                marginLeft: 5,
                                marginRight: 5,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                var serviceSelector =
                                    dl.changes.serviceSelectorMini.services

                                for (var key in serviceSelector) {
                                    serviceSelector[key]['borderColor'] =
                                        'rgba(207,206,206,1)'
                                    serviceSelector[key]['fontColor'] =
                                        'rgba(113,113,113,1)'
                                }

                                serviceSelector['travelSuggestions'][
                                    'borderColor'
                                ] = 'rgba(186,15,23,1)'
                                serviceSelector['travelSuggestions'][
                                    'fontColor'
                                ] = 'rgba(186,15,23,1)'

                                var currentPath =
                                    dl.functions.common.getLastPath()

                                if (currentPath.includes('bookmarks')) {
                                    dl.functions.viewsPlugin.showView(
                                        'blogbookmarks'
                                    )
                                    dl.functions.onLoadFunctions.blogbookmarks()
                                } else {
                                    dl.functions.viewsPlugin.showView(
                                        'travelsuggestions'
                                    )
                                    dl.functions.onLoadFunctions.blogbookmarks()
                                }

                                // dl.functions.viewsPlugin.showView('travelsuggestions')
                                // var currentPath = dl.functions.common.getLastPath()
                            }}
                        >
                            <div
                                id="t18_796_4830"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 10,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 8,
                                }}
                            >
                                {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/blogsActive.png' !=
                                '' ? (
                                    <img
                                        id="t18_796_4831"
                                        style={{
                                            height: 47,
                                            width: 47,
                                            display: 'flex',
                                            borderWidth: 0,
                                        }}
                                        src={
                                            'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/blogsActive.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}
                            </div>

                            <div
                                id="t18_796_4832"
                                style={{
                                    width: 104,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 10,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 8,
                                    marginRight: 0,
                                }}
                            >
                                <span
                                    id="t18_796_4833"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 17,
                                        fontWeight: 600,
                                        color: props.services.travelSuggestions
                                            .fontColor,
                                        letterSpacing: 0,
                                        lineHeight: '20px',
                                        textAlign: 'center',
                                    }}
                                >
                                    {props.services.travelSuggestions.text}
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_796_4834"
                            style={{
                                borderRadius: 10,
                                backgroundColor: 'rgba(255,255,255,1)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                itemSpacing: 16,
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 10,
                                paddingBottom: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 1,
                                borderColor:
                                    props.services.movieSuggestions.borderColor,
                                borderStyle: 'solid',
                                marginLeft: 5,
                                marginRight: 5,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                var serviceSelector =
                                    dl.changes.serviceSelectorMini.services

                                for (var key in serviceSelector) {
                                    serviceSelector[key]['borderColor'] =
                                        'rgba(207,206,206,1)'
                                    serviceSelector[key]['fontColor'] =
                                        'rgba(113,113,113,1)'
                                }

                                serviceSelector['movieSuggestions'][
                                    'borderColor'
                                ] = 'rgba(186,15,23,1)'
                                serviceSelector['movieSuggestions'][
                                    'fontColor'
                                ] = 'rgba(186,15,23,1)'
                                var currentPath =
                                    dl.functions.common.getLastPath()

                                if (currentPath.includes('bookmarks')) {
                                    dl.functions.viewsPlugin.showView(
                                        'moviebookmarks'
                                    )
                                    dl.functions.onLoadFunctions.moviebookmarks()
                                } else {
                                    dl.functions.viewsPlugin.showView(
                                        'moviesuggestions'
                                    )
                                    dl.functions.onLoadFunctions.moviesuggestions()
                                }
                            }}
                        >
                            <div
                                id="t18_796_4835"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 10,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 8,
                                }}
                            >
                                {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/moviesActive.png' !=
                                '' ? (
                                    <img
                                        id="t18_796_4836"
                                        style={{
                                            height: 47,
                                            width: 47,
                                            display: 'flex',
                                            borderWidth: 0,
                                        }}
                                        src={
                                            'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/moviesActive.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}
                            </div>

                            <div
                                id="t18_796_4837"
                                style={{
                                    width: 104,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 10,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 8,
                                    marginRight: 0,
                                }}
                            >
                                <span
                                    id="t18_796_4838"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 17,
                                        fontWeight: 600,
                                        color: props.services.movieSuggestions
                                            .fontColor,
                                        letterSpacing: 0,
                                        lineHeight: '20px',
                                        textAlign: 'center',
                                    }}
                                >
                                    Movie suggestions
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_796_4839"
                            style={{
                                borderRadius: 10,
                                backgroundColor: 'rgba(255,255,255,1)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: props.services.studyAbroad.display,
                                itemSpacing: 16,
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 10,
                                paddingBottom: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 1,
                                borderColor:
                                    props.services.studyAbroad.borderColor,
                                borderStyle: 'solid',
                                marginLeft: 5,
                                marginRight: 5,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                var serviceSelector =
                                    dl.changes.serviceSelectorMini.services

                                for (var key in serviceSelector) {
                                    serviceSelector[key]['borderColor'] =
                                        'rgba(207,206,206,1)'
                                    serviceSelector[key]['fontColor'] =
                                        'rgba(113,113,113,1)'
                                }

                                serviceSelector['studyAbroad']['borderColor'] =
                                    'rgba(186,15,23,1)'
                                serviceSelector['studyAbroad']['fontColor'] =
                                    'rgba(186,15,23,1)'

                                var currentPath =
                                    dl.functions.common.getLastPath()

                                if (currentPath.includes('bookmarks')) {
                                } else {
                                    dl.functions.viewsPlugin.showView(
                                        'studyabroad'
                                    )
                                    dl.functions.onLoadFunctions.studyabroad()
                                }

                                // dl.functions.viewsPlugin.showView('studyabroad')
                                // var currentPath = dl.functions.common.getLastPath()
                                // dl.functions.onLoadFunctions[currentPath]()
                            }}
                        >
                            <div
                                id="t18_796_4840"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 10,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 8,
                                }}
                            >
                                {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/studyAbroadActive.png' !=
                                '' ? (
                                    <img
                                        id="t18_796_4841"
                                        style={{
                                            height: 47,
                                            width: 47,
                                            display: 'flex',
                                            borderWidth: 0,
                                        }}
                                        src={
                                            'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/studyAbroadActive.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}
                            </div>

                            <div
                                id="t18_796_4842"
                                style={{
                                    width: 58,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 10,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 8,
                                    marginRight: 0,
                                }}
                            >
                                <span
                                    id="t18_796_4843"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 17,
                                        fontWeight: 600,
                                        color: props.services.studyAbroad
                                            .fontColor,
                                        letterSpacing: 0,
                                        lineHeight: '20px',
                                        textAlign: 'center',
                                    }}
                                >
                                    Study abroad
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_796_4844"
                            style={{
                                borderRadius: 7,
                                backgroundColor: 'rgba(255,255,255,1)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                itemSpacing: 16,
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 10,
                                paddingBottom: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 1,
                                borderColor: props.services.visaQna.borderColor,
                                borderStyle: 'solid',
                                marginLeft: 5,
                                marginRight: 5,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                var serviceSelector =
                                    dl.changes.serviceSelectorMini.services

                                for (var key in serviceSelector) {
                                    serviceSelector[key]['borderColor'] =
                                        'rgba(207,206,206,1)'
                                    serviceSelector[key]['fontColor'] =
                                        'rgba(113,113,113,1)'
                                }

                                serviceSelector['visaQna']['borderColor'] =
                                    'rgba(186,15,23,1)'
                                serviceSelector['visaQna']['fontColor'] =
                                    'rgba(186,15,23,1)'

                                var currentPath =
                                    dl.functions.common.getLastPath()

                                if (currentPath.includes('bookmarks')) {
                                    dl.functions.viewsPlugin.showView(
                                        'questionbookmarks'
                                    )
                                    dl.functions.onLoadFunctions.questionbookmarks()
                                } else {
                                    dl.functions.viewsPlugin.showView(
                                        'visaquestions'
                                    )
                                    dl.functions.onLoadFunctions.visaquestions()
                                }

                                // dl.functions.viewsPlugin.showView('visaquestions')
                                // var currentPath = dl.functions.common.getLastPath()
                                // dl.functions.onLoadFunctions[currentPath]()
                            }}
                        >
                            <div
                                id="t18_796_4845"
                                style={{
                                    height: 47,
                                    width: 47,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 10,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 8,
                                }}
                            >
                                {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/visaActive.png' !=
                                '' ? (
                                    <img
                                        id="t18_796_4846"
                                        style={{
                                            height: 47,
                                            width: 47,
                                            display: 'flex',
                                            borderWidth: 0,
                                        }}
                                        src={
                                            'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/visaActive.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}
                            </div>

                            <div
                                id="t18_796_4847"
                                style={{
                                    height: 40,
                                    width: 99,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 10,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 8,
                                    marginRight: 0,
                                }}
                            >
                                <span
                                    id="t18_796_4848"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 17,
                                        fontWeight: 600,
                                        color: props.services.visaQna.fontColor,
                                        letterSpacing: 0,
                                        lineHeight: '20px',
                                        textAlign: 'center',
                                    }}
                                >
                                    Visa & Immigration
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_796_4849"
                            style={{
                                borderRadius: 7,
                                backgroundColor: 'rgba(255,255,255,1)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                itemSpacing: 16,
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 10,
                                paddingBottom: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 1,
                                borderColor:
                                    props.services.travelCompanion.borderColor,
                                borderStyle: 'solid',
                                marginLeft: 5,
                                marginRight: 5,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                var serviceSelector =
                                    dl.changes.serviceSelectorMini.services

                                for (var key in serviceSelector) {
                                    serviceSelector[key]['borderColor'] =
                                        'rgba(207,206,206,1)'
                                    serviceSelector[key]['fontColor'] =
                                        'rgba(113,113,113,1)'
                                }

                                serviceSelector['travelCompanion'][
                                    'borderColor'
                                ] = 'rgba(186,15,23,1)'
                                serviceSelector['travelCompanion'][
                                    'fontColor'
                                ] = 'rgba(186,15,23,1)'

                                var currentPath =
                                    dl.functions.common.getLastPath()

                                if (currentPath.includes('bookmarks')) {
                                    dl.functions.viewsPlugin.showView(
                                        'travelcompanionbookmarks'
                                    )
                                } else {
                                    dl.functions.viewsPlugin.showView(
                                        'travelcompanion'
                                    )
                                    dl.functions.onLoadFunctions.travelcompanion()
                                }

                                // dl.functions.viewsPlugin.showView('travelsuggestions')
                                // var currentPath = dl.functions.common.getLastPath()
                            }}
                        >
                            <div
                                id="t18_796_4850"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 10,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 8,
                                }}
                            >
                                {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/travelCompanionActive.png' !=
                                '' ? (
                                    <img
                                        id="t18_796_4851"
                                        style={{
                                            height: 47,
                                            width: 47,
                                            display: 'flex',
                                            borderWidth: 0,
                                        }}
                                        src={
                                            'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/travelCompanionActive.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}
                            </div>

                            <div
                                id="t18_796_4852"
                                style={{
                                    width: 92,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 10,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 8,
                                    marginRight: 0,
                                }}
                            >
                                <span
                                    id="t18_796_4853"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 17,
                                        fontWeight: 600,
                                        color: props.services.travelCompanion
                                            .fontColor,
                                        letterSpacing: 0,
                                        lineHeight: '20px',
                                        textAlign: 'center',
                                    }}
                                >
                                    Travel companion
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_796_4854"
                            style={{
                                borderRadius: 7,
                                backgroundColor: 'rgba(255,255,255,1)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: props.services.taxServices.display,
                                itemSpacing: 16,
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 10,
                                paddingBottom: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 1,
                                borderColor:
                                    props.services.taxServices.borderColor,
                                borderStyle: 'solid',
                                marginLeft: 5,
                                marginRight: 0,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                window.open('https://cleartaxfiler.com/')
                            }}
                        >
                            <div
                                id="t18_796_4855"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 10,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 8,
                                }}
                            >
                                {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/taxServices.png' !=
                                '' ? (
                                    <img
                                        id="t18_796_4856"
                                        style={{
                                            height: 47,
                                            width: 47,
                                            display: 'flex',
                                            borderWidth: 0,
                                        }}
                                        src={
                                            'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/taxServices.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}
                            </div>

                            <div
                                id="t18_796_4857"
                                style={{
                                    width: 70,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 10,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 8,
                                    marginRight: 0,
                                }}
                            >
                                <span
                                    id="t18_796_4858"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 17,
                                        fontWeight: 600,
                                        color: props.services.taxServices
                                            .fontColor,
                                        letterSpacing: 0,
                                        lineHeight: '20px',
                                        textAlign: 'center',
                                    }}
                                >
                                    Tax services
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    id="t18_794_4474"
                    style={{
                        height: 25,
                        width: 25,
                        borderRadius: 100,
                        backgroundColor: 'rgba(255,255,255,1)',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        itemSpacing: 10,
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 10,
                        paddingBottom: 10,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                        marginLeft: 7.5,
                        marginRight: 0,
                        cursor: 'pointer',
                    }}
                    onClick={(e) => {
                        let id = '794:4471'
                        if (!document.getElementById(id)) {
                            id = 't18_794_4471'
                        }
                        const container = document.getElementById(id)
                        container.scroll({
                            left: container.scrollLeft + 150, // Scroll by 100 pixels horizontally
                            behavior: 'smooth', // Smooth scrolling behavior
                        })
                    }}
                >
                    {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/arrowRight.png' !=
                    '' ? (
                        <img
                            id="t18_794_4475"
                            style={{
                                height: 22.75,
                                width: 13,
                                display: 'flex',
                                borderWidth: 0,
                            }}
                            src={
                                'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/arrowRight.png'
                            }
                        ></img>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    )
})
export default MmServiceSelectorMd
