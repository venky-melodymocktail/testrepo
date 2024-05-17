import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MyBookingsVisaS = observer((mainprops) => {
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
                id="t18_1471_818"
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
                    id="t18_1471_786"
                    style={{
                        width: 469,
                        borderRadius: 12,
                        backgroundColor: 'rgba(248,246,246,1)',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        itemSpacing: 7,
                        paddingLeft: 0,
                        paddingRight: 0,
                        paddingTop: 15,
                        paddingBottom: 10,
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_1471_787"
                        style={{
                            width: 439,
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
                            marginBottom: 3.5,
                        }}
                    >
                        <div
                            id="t18_1471_788"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                display: 'flex',
                                itemSpacing: 6,
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
                                id="t18_1471_789"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 18,
                                    fontWeight: 700,
                                    color: 'rgba(0,0,0,1)',
                                    letterSpacing: 0,
                                    lineHeight: '21.784090042114258px',
                                    textAlign: 'left',
                                    marginTop: 0,
                                    marginBottom: 3,
                                }}
                            >
                                {props.date}
                            </span>

                            <span
                                id="t18_1471_790"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 600,
                                    color: 'rgba(28,167,139,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginTop: 3,
                                    marginBottom: 0,
                                }}
                            >
                                {props.timeslot}
                            </span>
                        </div>

                        <div
                            id="t18_1471_815"
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
                                id="t18_1471_816"
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
                                    id="t18_1471_791"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 500,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
                                        textAlign: 'left',
                                        display: props.upcomingVisible,
                                    }}
                                >
                                    Upcoming
                                </span>
                            </div>

                            <div
                                id="t18_1471_817"
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
                                    id="t18_1471_814"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 500,
                                        color: 'rgba(28,167,139,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
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
                        id="t18_1471_792"
                        style={{
                            height: 38,
                            width: 438,
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
                            marginTop: 3.5,
                            marginBottom: 3.5,
                        }}
                    >
                        <span
                            id="t18_1471_793"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 13,
                                fontWeight: 500,
                                color: 'rgba(113,113,113,1)',
                                letterSpacing: 0,
                                lineHeight: '15.732954025268555px',
                                textAlign: 'left',
                                marginLeft: 0,
                                marginRight: 3.5,
                            }}
                        >
                            Price:
                        </span>

                        <span
                            id="t18_1471_794"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 18,
                                fontWeight: 700,
                                color: 'rgba(28,167,139,1)',
                                letterSpacing: 0,
                                lineHeight: '21.784090042114258px',
                                textAlign: 'left',
                                marginLeft: 3.5,
                                marginRight: 0,
                            }}
                        >
                            {props.price}
                        </span>
                    </div>

                    <div
                        id="t18_1471_795"
                        style={{
                            width: 438,
                            backgroundColor: 'rgba(248,246,246,1)',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: 'flex',
                            itemSpacing: 8,
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
                            marginTop: 3.5,
                            marginBottom: 3.5,
                        }}
                    >
                        <div
                            id="t18_1471_796"
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
                                id="t18_1471_797"
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
                                    id="t18_1471_798"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 500,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
                                        textAlign: 'left',
                                        marginLeft: 0,
                                        marginRight: 3.5,
                                    }}
                                >
                                    Visa type:
                                </span>

                                <span
                                    id="t18_1471_799"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
                                        textAlign: 'left',
                                        marginLeft: 3.5,
                                        marginRight: 0,
                                    }}
                                >
                                    {props.appliedfor}
                                </span>
                            </div>

                            <div
                                id="t18_1471_800"
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
                                    id="t18_1471_801"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 500,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
                                        textAlign: 'left',
                                        marginLeft: 0,
                                        marginRight: 3,
                                    }}
                                >
                                    Session type:
                                </span>

                                <span
                                    id="t18_1471_802"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
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
                            id="t18_1471_803"
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
                                id="t18_1471_804"
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
                                    id="t18_1471_805"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 500,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
                                        textAlign: 'left',
                                        marginLeft: 0,
                                        marginRight: 2.5,
                                    }}
                                >
                                    Expert name:
                                </span>

                                <span
                                    id="t18_1471_806"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
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
                        id="t18_1471_807"
                        style={{
                            height: 38,
                            width: 438,
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
                            marginTop: 3.5,
                            marginBottom: 0,
                        }}
                    >
                        <div
                            id="t18_1471_808"
                            style={{
                                width: 306,
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
                                id="t18_1471_809"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 13,
                                    fontWeight: 500,
                                    color: 'rgba(113,113,113,1)',
                                    letterSpacing: 0,
                                    lineHeight: '15.732954025268555px',
                                    textAlign: 'left',
                                    marginLeft: 0,
                                    marginRight: 1.5,
                                }}
                            >
                                Booked on:
                            </span>

                            <span
                                id="t18_1471_810"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 13,
                                    fontWeight: 500,
                                    color: 'rgba(0,0,0,1)',
                                    letterSpacing: 0,
                                    lineHeight: '15.732954025268555px',
                                    textAlign: 'left',
                                    marginLeft: 1.5,
                                    marginRight: 0,
                                }}
                            >
                                {props.bookedOn}
                            </span>
                        </div>

                        <div
                            id="t18_1471_811"
                            style={{
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
                                id="t18_1471_812"
                                style={{
                                    height: 12,
                                    width: 110,
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
                                    id="t18_1471_813"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 15,
                                        fontWeight: 500,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '18.15340805053711px',
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
export default MyBookingsVisaS
