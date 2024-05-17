import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmServiceSelectorS = observer((mainprops) => {
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
                id="t18_794_4601"
                style={{
                    width: 620,
                    backgroundColor: 'rgba(248,246,246,1)',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    itemSpacing: 15,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 10,
                    paddingBottom: 10,
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
                    id="t18_794_4602"
                    style={{
                        height: 15,
                        width: 15,
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
                        let id = '794:4604'
                        if (!document.getElementById(id)) {
                            id = 't18_794_4604'
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
                            id="t18_794_4603"
                            style={{
                                height: 17,
                                width: 9,
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
                    id="t18_794_4604"
                    style={{
                        width: 503,
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
                        id="t18_796_4900"
                        style={{
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            itemSpacing: 14,
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
                            id="t18_796_4901"
                            style={{
                                height: 33,
                                borderRadius: 10,
                                backgroundColor: 'rgba(255,255,255,1)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                itemSpacing: 8,
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
                                marginRight: 7,
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
                                id="t18_796_4902"
                                style={{
                                    height: 30,
                                    width: 30,
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
                                    marginRight: 4,
                                }}
                            >
                                {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/rentalsActive.png' !=
                                '' ? (
                                    <img
                                        id="t18_796_4903"
                                        style={{
                                            height: 30,
                                            width: 30,
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
                                id="t18_796_4904"
                                style={{
                                    width: 71,
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
                                    marginLeft: 4,
                                    marginRight: 0,
                                }}
                            >
                                <span
                                    id="t18_796_4905"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 14,
                                        fontWeight: 600,
                                        color: props.services.rentals.fontColor,
                                        letterSpacing: 0,
                                        lineHeight: '16px',
                                        textAlign: 'center',
                                    }}
                                >
                                    Rentals & Properties
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_796_4906"
                            style={{
                                height: 33,
                                borderRadius: 10,
                                backgroundColor: 'rgba(255,255,255,1)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                itemSpacing: 8,
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 10,
                                paddingBottom: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 1,
                                borderColor: props.services.rides.borderColor,
                                borderStyle: 'solid',
                                marginLeft: 7,
                                marginRight: 7,
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
                                id="t18_796_4907"
                                style={{
                                    height: 30,
                                    width: 30,
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
                                    marginRight: 4,
                                }}
                            >
                                {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/ridesActive.png' !=
                                '' ? (
                                    <img
                                        id="t18_796_4908"
                                        style={{
                                            height: 30,
                                            width: 30,
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
                                id="t18_796_4909"
                                style={{
                                    width: 51,
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
                                    marginLeft: 4,
                                    marginRight: 0,
                                }}
                            >
                                <span
                                    id="t18_796_4910"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 14,
                                        fontWeight: 600,
                                        color: props.services.rides.fontColor,
                                        letterSpacing: 0,
                                        lineHeight: '16px',
                                        textAlign: 'center',
                                    }}
                                >
                                    Ride sharing
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_796_4911"
                            style={{
                                height: 33,
                                borderRadius: 10,
                                backgroundColor: 'rgba(255,255,255,1)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                itemSpacing: 8,
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
                                marginLeft: 7,
                                marginRight: 7,
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
                                    dl.functions.onLoadFunctions.travelsuggestions()
                                }

                                // dl.functions.viewsPlugin.showView('travelsuggestions')
                                // var currentPath = dl.functions.common.getLastPath()
                                // dl.functions.onLoadFunctions[currentPath]()
                            }}
                        >
                            <div
                                id="t18_796_4912"
                                style={{
                                    height: 30,
                                    width: 30,
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
                                    marginRight: 4,
                                }}
                            >
                                {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/blogsActive.png' !=
                                '' ? (
                                    <img
                                        id="t18_796_4913"
                                        style={{
                                            height: 30,
                                            width: 30,
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
                                id="t18_796_4914"
                                style={{
                                    width: 85,
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
                                    marginLeft: 4,
                                    marginRight: 0,
                                }}
                            >
                                <span
                                    id="t18_796_4915"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 14,
                                        fontWeight: 600,
                                        color: props.services.travelSuggestions
                                            .fontColor,
                                        letterSpacing: 0,
                                        lineHeight: '16px',
                                        textAlign: 'center',
                                    }}
                                >
                                    {props.services.travelSuggestions.text}
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_796_4916"
                            style={{
                                height: 33,
                                borderRadius: 10,
                                backgroundColor: 'rgba(255,255,255,1)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                itemSpacing: 8,
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
                                marginLeft: 7,
                                marginRight: 7,
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
                                id="t18_796_4917"
                                style={{
                                    height: 30,
                                    width: 30,
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
                                    marginRight: 4,
                                }}
                            >
                                {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/moviesActive.png' !=
                                '' ? (
                                    <img
                                        id="t18_796_4918"
                                        style={{
                                            height: 30,
                                            width: 30,
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
                                id="t18_796_4919"
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
                                    marginLeft: 4,
                                    marginRight: 0,
                                }}
                            >
                                <span
                                    id="t18_796_4920"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 14,
                                        fontWeight: 600,
                                        color: props.services.movieSuggestions
                                            .fontColor,
                                        letterSpacing: 0,
                                        lineHeight: '16px',
                                        textAlign: 'center',
                                    }}
                                >
                                    Movie suggestions
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_796_4921"
                            style={{
                                height: 33,
                                borderRadius: 10,
                                backgroundColor: 'rgba(255,255,255,1)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: props.services.studyAbroad.display,
                                itemSpacing: 8,
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
                                marginLeft: 7,
                                marginRight: 7,
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
                            }}
                        >
                            <div
                                id="t18_796_4922"
                                style={{
                                    height: 30,
                                    width: 30,
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
                                    marginRight: 4,
                                }}
                            >
                                {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/studyAbroadActive.png' !=
                                '' ? (
                                    <img
                                        id="t18_796_4923"
                                        style={{
                                            height: 30,
                                            width: 30,
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
                                id="t18_796_4924"
                                style={{
                                    width: 48,
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
                                    marginLeft: 4,
                                    marginRight: 0,
                                }}
                            >
                                <span
                                    id="t18_796_4925"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 14,
                                        fontWeight: 600,
                                        color: props.services.studyAbroad
                                            .fontColor,
                                        letterSpacing: 0,
                                        lineHeight: '16px',
                                        textAlign: 'center',
                                    }}
                                >
                                    Study abroad
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_796_4926"
                            style={{
                                height: 33,
                                borderRadius: 7,
                                backgroundColor: 'rgba(255,255,255,1)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                itemSpacing: 8,
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 10,
                                paddingBottom: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 1,
                                borderColor: props.services.visaQna.borderColor,
                                borderStyle: 'solid',
                                marginLeft: 7,
                                marginRight: 7,
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
                                id="t18_796_4927"
                                style={{
                                    height: 30,
                                    width: 30,
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
                                    marginRight: 4,
                                }}
                            >
                                {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/visaActive.png' !=
                                '' ? (
                                    <img
                                        id="t18_796_4928"
                                        style={{
                                            height: 30,
                                            width: 30,
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
                                id="t18_796_4929"
                                style={{
                                    width: 81,
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
                                    marginLeft: 4,
                                    marginRight: 0,
                                }}
                            >
                                <span
                                    id="t18_796_4930"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 14,
                                        fontWeight: 600,
                                        color: props.services.visaQna.fontColor,
                                        letterSpacing: 0,
                                        lineHeight: '16px',
                                        textAlign: 'center',
                                    }}
                                >
                                    Visa & Immigration
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_796_4931"
                            style={{
                                height: 33,
                                borderRadius: 7,
                                backgroundColor: 'rgba(255,255,255,1)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                itemSpacing: 8,
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
                                marginLeft: 7,
                                marginRight: 7,
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
                                id="t18_796_4932"
                                style={{
                                    height: 30,
                                    width: 30,
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
                                    marginRight: 4,
                                }}
                            >
                                {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/travelCompanionActive.png' !=
                                '' ? (
                                    <img
                                        id="t18_796_4933"
                                        style={{
                                            height: 30,
                                            width: 30,
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
                                id="t18_796_4934"
                                style={{
                                    width: 76,
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
                                    marginLeft: 4,
                                    marginRight: 0,
                                }}
                            >
                                <span
                                    id="t18_796_4935"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 14,
                                        fontWeight: 600,
                                        color: props.services.travelCompanion
                                            .fontColor,
                                        letterSpacing: 0,
                                        lineHeight: '16px',
                                        textAlign: 'center',
                                    }}
                                >
                                    Travel companion
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_796_4936"
                            style={{
                                height: 33,
                                borderRadius: 7,
                                backgroundColor: 'rgba(255,255,255,1)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: props.services.taxServices.display,
                                itemSpacing: 8,
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
                                marginLeft: 7,
                                marginRight: 0,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                window.open('https://cleartaxfiler.com/')
                            }}
                        >
                            <div
                                id="t18_796_4937"
                                style={{
                                    height: 30,
                                    width: 30,
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
                                    marginRight: 4,
                                }}
                            >
                                {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/taxServices.png' !=
                                '' ? (
                                    <img
                                        id="t18_796_4938"
                                        style={{
                                            height: 30,
                                            width: 30,
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
                                id="t18_796_4939"
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
                                    marginLeft: 4,
                                    marginRight: 0,
                                }}
                            >
                                <span
                                    id="t18_796_4940"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 14,
                                        fontWeight: 600,
                                        color: props.services.taxServices
                                            .fontColor,
                                        letterSpacing: 0,
                                        lineHeight: '16px',
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
                    id="t18_794_4646"
                    style={{
                        height: 15,
                        width: 15,
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
                        let id = '794:4604'
                        if (!document.getElementById(id)) {
                            id = 't18_794_4604'
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
                            id="t18_794_4647"
                            style={{
                                height: 16,
                                width: 9,
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
export default MmServiceSelectorS
