import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmCompanionWanS = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {
        city: 'New York',
        tip: '$50',
        from: 'Levvitown',
        to: 'Buffalo',
        ticketBooked: 'yes',
        postedBy: 'Praveen Singh',
        mmReferalVisible: 'flex',
        EditDeleteVisible: 'flex',
        contactVisible: 'none',
        promotionVisible: 'none',
        promotionDateVisible: 'none',
        promotionstartDate: 'Being promoted from 10 May’23',
        promotionDayleft: '9 days left',
        bookmarkactive: 'flex',
        bookmarkinactive: 'flex',
        dateString: '23rd Nov 23',
    }
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_1267_3852"
                style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingBottom: 20,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginTop: 5,
                    marginBottom: 5,
                }}
            >
                <div
                    id="t18_1267_3853"
                    style={{
                        width: 280,
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_1267_3854"
                        style={{
                            width: 280,
                            borderRadius: 8,
                            backgroundColor: 'rgba(248,246,246,1.00)',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 0,
                            marginBottom: 5,
                            cursor: 'pointer',
                        }}
                        onClick={(e) => {
                            props.onClick && props.onClick(e)
                        }}
                    >
                        <div
                            id="t18_1267_3855"
                            style={{
                                width: 260,
                                borderTopLeftRadius: 8,
                                borderTopRightRadius: 8,
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 24,
                                paddingBottom: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                borderColor: 'rgba(207,206,206,1)',
                                borderBottomWidth: 1,
                                borderStyle: 'solid',
                                marginTop: 0,
                            }}
                        >
                            <div
                                id="t18_2361_99"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 5,
                                }}
                            >
                                <div
                                    id="t18_1736_30"
                                    style={{
                                        width: 213,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 4,
                                    }}
                                >
                                    <div
                                        id="t18_1736_27"
                                        style={{
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_1736_28"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 13,
                                                fontWeight: 600,
                                                color: 'rgba(113,113,113,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '15.732954025268555px',
                                                textAlign: 'left',
                                                marginTop: 0,
                                            }}
                                        >
                                            Need a travel companion to
                                        </span>

                                        <span
                                            id="t18_1736_29"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 13,
                                                fontWeight: 700,
                                                color: 'rgba(0,0,0,1)',
                                                letterSpacing: 0,
                                                lineHeight:
                                                    '15.732954025268555px',
                                                textAlign: 'left',
                                                marginBottom: 0,
                                            }}
                                        >
                                            {props.city}
                                        </span>
                                    </div>
                                </div>

                                <div
                                    id="t18_2361_86"
                                    style={{
                                        width: 213,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 4,
                                        marginBottom: 0,
                                    }}
                                >
                                    <div
                                        id="t18_2361_93"
                                        style={{
                                            width: 213,
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                        }}
                                    >
                                        <span
                                            id="t18_2361_94"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 11,
                                                fontWeight: 500,
                                                color: 'rgba(113,113,113,1)',
                                                letterSpacing: 0,
                                                lineHeight: '13.3125px',
                                                textAlign: 'left',
                                                marginTop: 0,
                                                marginBottom: 1,
                                            }}
                                        >
                                            Date:
                                        </span>

                                        <span
                                            id="t18_2361_96"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 11,
                                                fontWeight: 500,
                                                color: 'rgba(0,0,0,1)',
                                                letterSpacing: 0,
                                                lineHeight: '13.3125px',
                                                textAlign: 'left',
                                                marginTop: 1,
                                                marginBottom: 0,
                                            }}
                                        >
                                            {props.dateString}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div
                                id="t18_1267_3859"
                                style={{
                                    width: 32,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 5,
                                    marginRight: 0,
                                }}
                            >
                                {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/bookmarkInactive.png' !=
                                '' ? (
                                    <img
                                        id="t18_1267_3860"
                                        style={{
                                            height: 32,
                                            width: 32,
                                            display: props.bookmarkinactive,
                                            borderWidth: 0,
                                            marginTop: 0,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            props.onClickBookmark &&
                                                props.onClickBookmark(e)
                                        }}
                                        src={
                                            'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/bookmarkInactive.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/bookmarkActive.png' !=
                                '' ? (
                                    <img
                                        id="t18_1267_3861"
                                        style={{
                                            height: 32,
                                            width: 32,
                                            display: props.bookmarkactive,
                                            borderWidth: 0,
                                            marginBottom: 0,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            props.onClickRemoveBookmark &&
                                                props.onClickRemoveBookmark(e)
                                        }}
                                        src={
                                            'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/bookmarkActive.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>

                        <div
                            id="t18_1267_3862"
                            // make display none or flex to make expected tip hide and visible
                            style={{
                                height: 37,
                                width: 270,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'none',
                                paddingLeft: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                borderColor: 'rgba(207,206,206,1)',
                                borderBottomWidth: 1,
                                borderStyle: 'solid',
                            }}
                        >
                            <span
                                id="t18_1267_3863"
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
                                Tip:
                            </span>

                            <span
                                id="t18_1267_3864"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 700,
                                    color: 'rgba(28,167,139,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                    marginLeft: 3.5,
                                    marginRight: 0,
                                }}
                            >
                                {props.tip}
                            </span>
                        </div>

                        <div
                            id="t18_1267_3865"
                            style={{
                                width: 271,
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                display: 'flex',
                                paddingLeft: 10,
                                paddingTop: 10,
                                paddingBottom: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                borderColor: 'rgba(207,206,206,1)',
                                borderBottomWidth: 1,
                                borderStyle: 'solid',
                            }}
                        >
                            <div
                                id="t18_1267_3866"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 4,
                                }}
                            >
                                <div
                                    id="t18_1267_3867"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 3.5,
                                    }}
                                >
                                    <span
                                        id="t18_1267_3868"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 11,
                                            fontWeight: 500,
                                            color: 'rgba(113,113,113,1)',
                                            letterSpacing: 0,
                                            lineHeight: '13.3125px',
                                            textAlign: 'left',
                                            marginLeft: 0,
                                            marginRight: 1.5,
                                        }}
                                    >
                                        From:
                                    </span>

                                    <span
                                        id="t18_1267_3869"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 11,
                                            fontWeight: 500,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '13.3125px',
                                            textAlign: 'left',
                                            marginLeft: 1.5,
                                            marginRight: 0,
                                        }}
                                    >
                                        {props.from}
                                    </span>
                                </div>

                                <div
                                    id="t18_1267_3870"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 3.5,
                                        marginBottom: 0,
                                    }}
                                >
                                    <span
                                        id="t18_1267_3871"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 11,
                                            fontWeight: 500,
                                            color: 'rgba(113,113,113,1)',
                                            letterSpacing: 0,
                                            lineHeight: '13.3125px',
                                            textAlign: 'left',
                                            marginLeft: 0,
                                            marginRight: 1.5,
                                        }}
                                    >
                                        To:
                                    </span>

                                    <span
                                        id="t18_1267_3872"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 11,
                                            fontWeight: 500,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '13.3125px',
                                            textAlign: 'left',
                                            marginLeft: 1.5,
                                            marginRight: 0,
                                        }}
                                    >
                                        {props.to}
                                    </span>
                                </div>
                            </div>

                            <div
                                id="t18_1267_3873"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 4,
                                    marginBottom: 0,
                                }}
                            >
                                <div
                                    id="t18_1267_3874"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 3.5,
                                    }}
                                >
                                    <span
                                        id="t18_1267_3875"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 11,
                                            fontWeight: 500,
                                            color: 'rgba(113,113,113,1)',
                                            letterSpacing: 0,
                                            lineHeight: '13.3125px',
                                            textAlign: 'left',
                                            marginLeft: 0,
                                            marginRight: 1.5,
                                        }}
                                    >
                                        Ticket:
                                    </span>

                                    <span
                                        id="t18_1267_3876"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 11,
                                            fontWeight: 500,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '13.3125px',
                                            textAlign: 'left',
                                            marginLeft: 1.5,
                                            marginRight: 0,
                                        }}
                                    >
                                        {props.ticketBooked}
                                    </span>
                                </div>

                                <div
                                    id="t18_1267_3877"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 3.5,
                                        marginBottom: 0,
                                    }}
                                >
                                    <span
                                        id="t18_1267_3878"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 11,
                                            fontWeight: 500,
                                            color: 'rgba(113,113,113,1)',
                                            letterSpacing: 0,
                                            lineHeight: '13.3125px',
                                            textAlign: 'left',
                                            marginLeft: 0,
                                            marginRight: 1.5,
                                        }}
                                    >
                                        Ad type:
                                    </span>

                                    <span
                                        id="t18_1267_3879"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 11,
                                            fontWeight: 500,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '13.3125px',
                                            textAlign: 'left',
                                            marginLeft: 1.5,
                                            marginRight: 0,
                                        }}
                                    >
                                        Wanted
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div
                            id="t18_1267_3880"
                            style={{
                                width: 270,
                                borderBottomLeftRadius: 8,
                                borderBottomRightRadius: 8,
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                display: 'flex',
                                paddingLeft: 10,
                                paddingTop: 10,
                                paddingBottom: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginBottom: 0,
                            }}
                        >
                            <div
                                id="t18_1267_3881"
                                style={{
                                    width: 258,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 5,
                                }}
                            >
                                <span
                                    id="t18_1267_3882"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 11,
                                        fontWeight: 500,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '13.3125px',
                                        textAlign: 'left',
                                        marginLeft: 0,
                                        marginRight: 1.5,
                                    }}
                                >
                                    Posted by:
                                </span>

                                <span
                                    id="t18_1267_3883"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 11,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '13.3125px',
                                        textAlign: 'left',
                                        marginLeft: 1.5,
                                        marginRight: 0,
                                    }}
                                >
                                    {props.postedBy}
                                </span>
                            </div>

                            <div
                                id="t18_1267_3884"
                                style={{
                                    flexDirection: 'column',
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
                                <div
                                    id="t18_1267_3885"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: props.EditDeleteVisible,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                    }}
                                >
                                    {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/delete.png' !=
                                    '' ? (
                                        <img
                                            id="t18_1267_3886"
                                            style={{
                                                height: 15.052734375,
                                                width: 13,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 4,
                                                cursor: 'pointer',
                                            }}
                                            onClick={(e) => {
                                                props.onClickDelete &&
                                                    props.onClickDelete(e)
                                            }}
                                            src={
                                                'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/delete.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <div
                                        id="t18_1267_3887"
                                        style={{
                                            height: 24,
                                            width: 53,
                                            borderRadius: 4,
                                            backgroundColor:
                                                'rgba(186,15,23,1.00)',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            display: 'flex',
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                            marginLeft: 4,
                                            marginRight: 0,
                                            cursor: 'pointer',
                                        }}
                                        onClick={(e) => {
                                            props.onClickEdit &&
                                                props.onClickEdit(e)
                                        }}
                                    >
                                        <span
                                            id="t18_1267_3888"
                                            style={{
                                                fontFamily: 'Inter',
                                                fontSize: 11,
                                                fontWeight: 500,
                                                color: 'rgba(255,255,255,1)',
                                                letterSpacing: 0,
                                                lineHeight: '13.3125px',
                                                textAlign: 'left',
                                            }}
                                        >
                                            Edit
                                        </span>
                                    </div>
                                </div>

                                <div
                                    id="t18_1267_3889"
                                    style={{
                                        height: 5,
                                        width: 56,
                                        borderRadius: 4,
                                        backgroundColor: 'rgba(186,15,23,1.00)',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: props.contactVisible,
                                        paddingLeft: 10,
                                        paddingRight: 10,
                                        paddingTop: 10,
                                        paddingBottom: 10,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginBottom: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        props.onClickContact &&
                                            props.onClickContact(e)
                                    }}
                                >
                                    <span
                                        id="t18_1267_3890"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 12,
                                            fontWeight: 500,
                                            color: 'rgba(255,255,255,1)',
                                            letterSpacing: 0,
                                            lineHeight: '14.522727012634277px',
                                            textAlign: 'left',
                                        }}
                                    >
                                        Contact
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        id="t18_1267_3891"
                        style={{
                            height: 25,
                            width: 174,
                            backgroundImage:
                                'url(https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/melodymocktailpreferred.png)',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: props.mmReferalVisible,
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 7,
                            paddingBottom: 7,
                            position: 'absolute',
                            overflow: 'visible',
                            borderWidth: 0,
                            top: -15.203125,
                            left: -3,
                            marginTop: 5,
                            marginBottom: 5,
                        }}
                    >
                        <span
                            id="t18_1267_3892"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 13,
                                fontWeight: 600,
                                color: 'rgba(255,255,255,1)',
                                letterSpacing: 0,
                                lineHeight: '15.732954025268555px',
                                textAlign: 'center',
                            }}
                        >
                            Melody Mocktail Preferred
                        </span>
                    </div>

                    <div
                        id="t18_1267_3893"
                        style={{
                            width: 280,
                            flexDirection: 'column',
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
                        <div
                            id="t18_1267_3894"
                            style={{
                                height: 30,
                                width: 111,
                                borderRadius: 5,
                                backgroundColor: 'rgba(244,186,84,1.00)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: props.promotionVisible,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                props.onClickPromote && props.onClickPromote(e)
                            }}
                        >
                            <span
                                id="t18_1267_3895"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 13,
                                    fontWeight: 700,
                                    color: 'rgba(255,255,255,1)',
                                    letterSpacing: 0,
                                    lineHeight: '15.732954025268555px',
                                    textAlign: 'left',
                                    marginLeft: 0,
                                    marginRight: 4.5,
                                }}
                            >
                                Promote it
                            </span>

                            {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/PromoteArrow.png' !=
                            '' ? (
                                <img
                                    id="t18_1267_3896"
                                    style={{
                                        height: 12,
                                        width: 12,
                                        display: 'flex',
                                        borderWidth: 0,
                                        marginLeft: 4.5,
                                        marginRight: 0,
                                    }}
                                    src={
                                        'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/PromoteArrow.png'
                                    }
                                ></img>
                            ) : (
                                <></>
                            )}
                        </div>

                        <div
                            id="t18_1267_3897"
                            style={{
                                height: 31,
                                width: 260,
                                borderRadius: 5,
                                backgroundColor: 'rgba(28,167,139,1.00)',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                display: props.promotionDateVisible,
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 5,
                                paddingBottom: 5,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginBottom: 0,
                            }}
                        >
                            <span
                                id="t18_1267_3898"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 12,
                                    fontWeight: 700,
                                    color: 'rgba(255,255,255,1)',
                                    letterSpacing: 0,
                                    lineHeight: '14.522727012634277px',
                                    textAlign: 'left',
                                    marginTop: 0,
                                    marginBottom: 2,
                                }}
                            >
                                {props.promotionstartDate}
                            </span>

                            <span
                                id="t18_1267_3899"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 12,
                                    fontWeight: 600,
                                    color: 'rgba(207,206,206,1)',
                                    letterSpacing: 0,
                                    lineHeight: '14.522727012634277px',
                                    textAlign: 'left',
                                    marginTop: 2,
                                    marginBottom: 0,
                                }}
                            >
                                {props.promotionDayleft}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default MmCompanionWanS
