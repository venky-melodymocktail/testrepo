import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmOfferedRideCardS = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {
        from: '',
        to: '',
        price: '',
        dateOfJourney: '',
        spotAvailable: 0,
        adType: '',
        title: '',
        offeredBy: '',
        bookmarkactive: 'flex',
        bookmarkinactive: 'flex',
        mmReferalVisible: 'flex',
    }
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_822_5590"
                style={{
                    flexDirection: 'column',
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
                    id="t18_822_5501"
                    style={{
                        width: 281,
                        borderRadius: 12,
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
                        id="t18_822_5502"
                        style={{
                            width: 281,
                            borderRadius: 12,
                            backgroundColor: 'rgba(248,246,246,1.00)',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 0,
                            marginBottom: 4,
                            cursor: 'pointer',
                        }}
                        onClick={(e) => {
                            props.onClick && props.onClick(e)
                        }}
                    >
                        <div
                            id="t18_822_5503"
                            style={{
                                width: 271,
                                borderTopLeftRadius: 12,
                                borderTopRightRadius: 12,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingLeft: 10,
                                paddingTop: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0,
                                marginBottom: 0.5,
                            }}
                        >
                            <div
                                id="t18_822_5504"
                                style={{
                                    width: 223,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 7.5,
                                }}
                            >
                                <div
                                    id="t18_822_5505"
                                    style={{
                                        width: 210,
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 3,
                                    }}
                                >
                                    <span
                                        id="t18_822_5506"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 13,
                                            fontWeight: 700,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '40px',
                                            textAlign: 'left',
                                        }}
                                    >
                                        {props.title}
                                    </span>
                                </div>

                                <div
                                    id="t18_822_5507"
                                    style={{
                                        width: 102,
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 3,
                                        marginBottom: 0,
                                    }}
                                >
                                    <span
                                        id="t18_822_5508"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 11,
                                            fontWeight: 500,
                                            color: 'rgba(113,113,113,1)',
                                            letterSpacing: 0,
                                            lineHeight: '13.3125px',
                                            textAlign: 'left',
                                        }}
                                    >
                                        {props.dateOfJourney}
                                    </span>
                                </div>
                            </div>

                            <div
                                id="t18_822_5580"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 7.5,
                                    marginRight: 0,
                                }}
                            >
                                <div
                                    id="t18_822_5578"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                    }}
                                >
                                    {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/bookmarkInactive.png' !=
                                    '' ? (
                                        <img
                                            id="t18_822_5579"
                                            style={{
                                                height: 28,
                                                width: 28,
                                                display: props.bookmarkinactive,
                                                borderWidth: 0,
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
                                </div>

                                <div
                                    id="t18_822_5509"
                                    style={{
                                        height: 28,
                                        width: 28,
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginBottom: 0,
                                    }}
                                >
                                    {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/bookmarkActive.png' !=
                                    '' ? (
                                        <img
                                            id="t18_822_5510"
                                            style={{
                                                height: 28,
                                                width: 28,
                                                display: props.bookmarkactive,
                                                borderWidth: 0,
                                                cursor: 'pointer',
                                            }}
                                            onClick={(e) => {
                                                props.onClickRemoveBookmark &&
                                                    props.onClickRemoveBookmark(
                                                        e
                                                    )
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
                        </div>

                        <div
                            id="t18_822_5511"
                            style={{
                                height: 37,
                                width: 271,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingLeft: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                borderColor: 'rgba(207,206,206,1)',
                                borderTopWidth: 1,
                                borderBottomWidth: 1,
                                borderStyle: 'solid',
                                marginTop: 0.5,
                                marginBottom: 0.5,
                            }}
                        >
                            <span
                                id="t18_822_5512"
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
                                id="t18_822_5513"
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
                                {props.price}
                            </span>
                        </div>

                        <div
                            id="t18_822_5514"
                            style={{
                                height: 54,
                                width: 271,
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                display: 'flex',
                                paddingLeft: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                borderColor: 'rgba(207,206,206,1)',
                                borderBottomWidth: 1,
                                borderStyle: 'solid',
                                marginTop: 0.5,
                                marginBottom: 0.5,
                            }}
                        >
                            <div
                                id="t18_822_5515"
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
                                <div
                                    id="t18_822_5516"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 0,
                                        marginRight: 25,
                                    }}
                                >
                                    <span
                                        id="t18_822_5517"
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
                                        From:
                                    </span>

                                    <span
                                        id="t18_822_5518"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 11,
                                            fontWeight: 500,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '13.3125px',
                                            textAlign: 'left',
                                            marginLeft: 3.5,
                                            marginRight: 0,
                                        }}
                                    >
                                        {props.from}
                                    </span>
                                </div>

                                <div
                                    id="t18_822_5519"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 25,
                                        marginRight: 0,
                                    }}
                                >
                                    <span
                                        id="t18_822_5520"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 11,
                                            fontWeight: 500,
                                            color: 'rgba(113,113,113,1)',
                                            letterSpacing: 0,
                                            lineHeight: '13.3125px',
                                            textAlign: 'left',
                                            marginLeft: 0,
                                            marginRight: 3,
                                        }}
                                    >
                                        To:
                                    </span>

                                    <span
                                        id="t18_822_5521"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 11,
                                            fontWeight: 500,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '13.3125px',
                                            textAlign: 'left',
                                            marginLeft: 3,
                                            marginRight: 0,
                                        }}
                                    >
                                        {props.to}
                                    </span>
                                </div>
                            </div>

                            <div
                                id="t18_822_5522"
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
                                <div
                                    id="t18_822_5523"
                                    style={{
                                        width: 91,
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 0,
                                        marginRight: 25,
                                    }}
                                >
                                    <span
                                        id="t18_822_5524"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 11,
                                            fontWeight: 500,
                                            color: 'rgba(113,113,113,1)',
                                            letterSpacing: 0,
                                            lineHeight: '13.3125px',
                                            textAlign: 'left',
                                            marginLeft: 0,
                                            marginRight: 2.5,
                                        }}
                                    >
                                        Available spots:
                                    </span>

                                    <span
                                        id="t18_822_5525"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 11,
                                            fontWeight: 500,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '13.3125px',
                                            textAlign: 'left',
                                            marginLeft: 2.5,
                                            marginRight: 0,
                                        }}
                                    >
                                        {props.spotAvailable}
                                    </span>
                                </div>

                                <div
                                    id="t18_822_5526"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginLeft: 25,
                                        marginRight: 0,
                                    }}
                                >
                                    <span
                                        id="t18_822_5527"
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
                                        id="t18_822_5528"
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
                                        {props.adType}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div
                            id="t18_822_5529"
                            style={{
                                height: 43,
                                width: 266,
                                borderBottomLeftRadius: 8,
                                borderBottomRightRadius: 8,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                display: 'flex',
                                paddingLeft: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 0.5,
                                marginBottom: 0,
                            }}
                        >
                            <div
                                id="t18_822_5530"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 22.5,
                                }}
                            >
                                <span
                                    id="t18_822_5531"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 11,
                                        fontWeight: 500,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '13.3125px',
                                        textAlign: 'left',
                                        marginTop: 0,
                                        marginBottom: 1.5,
                                    }}
                                >
                                    Posted by:
                                </span>

                                <span
                                    id="t18_822_5532"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 11,
                                        fontWeight: 500,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '13.3125px',
                                        textAlign: 'left',
                                        marginTop: 1.5,
                                        marginBottom: 0,
                                    }}
                                >
                                    {props.offeredBy}
                                </span>
                            </div>

                            <div
                                id="t18_822_5533"
                                style={{
                                    height: 5,
                                    width: 56,
                                    borderRadius: 4,
                                    backgroundColor: 'rgba(186,15,23,1.00)',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 22.5,
                                    marginRight: 0,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    props.onClickContact &&
                                        props.onClickContact(e)
                                }}
                            >
                                <span
                                    id="t18_822_5534"
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

                    <div
                        id="t18_822_5535"
                        style={{
                            height: 24,
                            width: 162,
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
                            top: -15.5380859375,
                            left: 0,
                            marginTop: 4,
                            marginBottom: 0,
                        }}
                    >
                        <span
                            id="t18_822_5536"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 11,
                                fontWeight: 600,
                                color: 'rgba(255,255,255,1)',
                                letterSpacing: 0,
                                lineHeight: '13.3125px',
                                textAlign: 'center',
                            }}
                        >
                            Melody Mocktail Preferred
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default MmOfferedRideCardS
