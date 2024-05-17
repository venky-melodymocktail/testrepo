import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MyBookingsVisaXs = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {
        date: 'Sunday, 22 Apr, 2023',
        upcomingVisible: 'flex',
        completeVisible: 'none',
        price: '$1000',
        appliedfor: 'Masters',
        sessiontype: 'single',
        expertName: 'sam smith',
        bookedOn: '15 April 2023',
        timeslot: '7am to 8am',
    }
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_1471_885"
                style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    itemSpacing: 10,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 15,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginTop: 5,
                    marginBottom: 5,
                }}
            >
                <div
                    id="t18_1471_852"
                    style={{
                        width: 360,
                        borderRadius: 12,
                        backgroundColor: 'rgba(248,246,246,1)',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        itemSpacing: 2,
                        paddingLeft: 0,
                        paddingRight: 0,
                        paddingTop: 10,
                        paddingBottom: 10,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_1471_853"
                        style={{
                            width: 330,
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            itemSpacing: 5,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 0,
                            paddingBottom: 10,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            borderColor: 'rgba(207,206,206,1)',
                            borderBottomWidth: 1,
                            borderStyle: 'solid',
                            marginTop: 0,
                            marginBottom: 1,
                        }}
                    >
                        <div
                            id="t18_1471_854"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                display: 'flex',
                                itemSpacing: 5,
                                paddingLeft: 0,
                                paddingRight: 0,
                                paddingTop: 0,
                                paddingBottom: 0,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 2.5,
                            }}
                        >
                            <span
                                id="t18_1471_855"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 700,
                                    color: 'rgba(0,0,0,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginTop: 0,
                                    marginBottom: 2.5,
                                }}
                            >
                                {props.date}
                            </span>

                            <span
                                id="t18_1471_856"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 14,
                                    fontWeight: 600,
                                    color: 'rgba(28,167,139,1)',
                                    letterSpacing: 0,
                                    lineHeight: '16.94318199157715px',
                                    textAlign: 'left',
                                    marginTop: 2.5,
                                    marginBottom: 0,
                                }}
                            >
                                {props.timeslot}
                            </span>
                        </div>

                        <div
                            id="t18_1471_884"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingLeft: 0,
                                paddingRight: 0,
                                paddingTop: 0,
                                paddingBottom: 0,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 2.5,
                                marginBottom: 0,
                            }}
                        >
                            <div
                                id="t18_1471_881"
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
                                    marginTop: 0,
                                }}
                            >
                                <span
                                    id="t18_1471_857"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        fontWeight: 500,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '14.522727012634277px',
                                        textAlign: 'left',
                                        display: props.upcomingVisible,
                                    }}
                                >
                                    Upcoming
                                </span>
                            </div>

                            <div
                                id="t18_1471_882"
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
                                    marginBottom: 0,
                                }}
                            >
                                <span
                                    id="t18_1471_883"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        fontWeight: 500,
                                        color: 'rgba(28,167,139,1)',
                                        letterSpacing: 0,
                                        lineHeight: '14.522727012634277px',
                                        textAlign: 'left',
                                        display: props.completeVisible,
                                    }}
                                >
                                    Completed
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        id="t18_1471_858"
                        style={{
                            height: 38,
                            width: 330,
                            backgroundColor: 'rgba(248,246,246,1)',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            itemSpacing: 7,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 0,
                            paddingBottom: 0,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            borderColor: 'rgba(207,206,206,1)',
                            borderBottomWidth: 1,
                            borderStyle: 'solid',
                            marginTop: 1,
                            marginBottom: 1,
                        }}
                    >
                        <span
                            id="t18_1471_859"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 11,
                                fontWeight: 500,
                                color: 'rgba(113,113,113,1)',
                                letterSpacing: 0,
                                lineHeight: '13.3125px',
                                textAlign: 'left',
                                marginLeft: 0,
                                marginRight: 3.5,
                            }}
                        >
                            Price:
                        </span>

                        <span
                            id="t18_1471_860"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 15,
                                fontWeight: 700,
                                color: 'rgba(28,167,139,1)',
                                letterSpacing: 0,
                                lineHeight: '18.15340805053711px',
                                textAlign: 'left',
                                marginLeft: 3.5,
                                marginRight: 0,
                            }}
                        >
                            {props.price}
                        </span>
                    </div>

                    <div
                        id="t18_1471_861"
                        style={{
                            width: 330,
                            backgroundColor: 'rgba(248,246,246,1)',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: 'flex',
                            itemSpacing: 8,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 6,
                            paddingBottom: 10,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            borderColor: 'rgba(207,206,206,1)',
                            borderBottomWidth: 1,
                            borderStyle: 'solid',
                            marginTop: 1,
                            marginBottom: 1,
                        }}
                    >
                        <div
                            id="t18_1471_862"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                itemSpacing: 8,
                                paddingLeft: 0,
                                paddingRight: 0,
                                paddingTop: 0,
                                paddingBottom: 0,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 4,
                            }}
                        >
                            <div
                                id="t18_1471_863"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 7,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 4,
                                }}
                            >
                                <span
                                    id="t18_1471_864"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 10,
                                        fontWeight: 500,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '12.102272033691406px',
                                        textAlign: 'left',
                                        marginLeft: 0,
                                        marginRight: 3.5,
                                    }}
                                >
                                    Visa type:
                                </span>

                                <span
                                    id="t18_1471_865"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '14.522727012634277px',
                                        textAlign: 'left',
                                        marginLeft: 3.5,
                                        marginRight: 0,
                                    }}
                                >
                                    {props.appliedfor}
                                </span>
                            </div>

                            <div
                                id="t18_1471_866"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 6,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 4,
                                    marginBottom: 0,
                                }}
                            >
                                <span
                                    id="t18_1471_867"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 10,
                                        fontWeight: 500,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '12.102272033691406px',
                                        textAlign: 'left',
                                        marginLeft: 0,
                                        marginRight: 3,
                                    }}
                                >
                                    Session type:
                                </span>

                                <span
                                    id="t18_1471_868"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '14.522727012634277px',
                                        textAlign: 'left',
                                        marginLeft: 3,
                                        marginRight: 0,
                                    }}
                                >
                                    {props.sessiontype}
                                </span>
                            </div>
                        </div>

                        <div
                            id="t18_1471_869"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                itemSpacing: 124,
                                paddingLeft: 0,
                                paddingRight: 0,
                                paddingTop: 0,
                                paddingBottom: 0,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 4,
                                marginBottom: 0,
                            }}
                        >
                            <div
                                id="t18_1471_870"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    itemSpacing: 5,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                }}
                            >
                                <span
                                    id="t18_1471_871"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 10,
                                        fontWeight: 500,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '12.102272033691406px',
                                        textAlign: 'left',
                                        marginLeft: 0,
                                        marginRight: 2.5,
                                    }}
                                >
                                    Expert name:
                                </span>

                                <span
                                    id="t18_1471_872"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 12,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '14.522727012634277px',
                                        textAlign: 'left',
                                        marginLeft: 2.5,
                                        marginRight: 0,
                                    }}
                                >
                                    {props.expertName}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        id="t18_1471_873"
                        style={{
                            height: 38,
                            width: 330,
                            borderBottomLeftRadius: 12,
                            borderBottomRightRadius: 12,
                            backgroundColor: 'rgba(248,246,246,1)',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            itemSpacing: 10,
                            paddingLeft: 15,
                            paddingRight: 15,
                            paddingTop: 0,
                            paddingBottom: 0,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            borderTopWidth: 1,
                            marginTop: 1,
                            marginBottom: 0,
                        }}
                    >
                        <div
                            id="t18_1471_874"
                            style={{
                                width: 220,
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                itemSpacing: 3,
                                paddingLeft: 0,
                                paddingRight: 0,
                                paddingTop: 0,
                                paddingBottom: 0,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 0,
                                marginRight: 5,
                            }}
                        >
                            <span
                                id="t18_1471_875"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 10,
                                    fontWeight: 500,
                                    color: 'rgba(113,113,113,1)',
                                    letterSpacing: 0,
                                    lineHeight: '12.102272033691406px',
                                    textAlign: 'left',
                                    marginLeft: 0,
                                    marginRight: 1.5,
                                }}
                            >
                                Booked on:
                            </span>

                            <span
                                id="t18_1471_876"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 12,
                                    fontWeight: 500,
                                    color: 'rgba(0,0,0,1)',
                                    letterSpacing: 0,
                                    lineHeight: '14.522727012634277px',
                                    textAlign: 'left',
                                    marginLeft: 1.5,
                                    marginRight: 0,
                                }}
                            >
                                {props.bookedOn}
                            </span>
                        </div>

                        <div
                            id="t18_1471_877"
                            style={{
                                width: 108,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                itemSpacing: 20,
                                paddingLeft: 0,
                                paddingRight: 0,
                                paddingTop: 0,
                                paddingBottom: 0,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginLeft: 5,
                                marginRight: 0,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                props.onClickJoinHere &&
                                    props.onClickJoinHere(e)
                            }}
                        >
                            <div
                                id="t18_1471_878"
                                style={{
                                    height: 12,
                                    width: 88,
                                    borderRadius: 4,
                                    backgroundColor: 'rgba(186,15,23,1)',
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
                                }}
                            >
                                <span
                                    id="t18_1471_879"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 14,
                                        fontWeight: 500,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '16.94318199157715px',
                                        textAlign: 'left',
                                    }}
                                >
                                    Join here
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default MyBookingsVisaXs
