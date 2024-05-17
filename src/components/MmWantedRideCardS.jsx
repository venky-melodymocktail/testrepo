import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmWantedRideCardS = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {
        from: '',
        to: '',
        price: '',
        spotAvailable: 0,
        adType: '',
        title: '',
        offeredBy: '',
        dateOfJourney: '',
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
                id="t18_873_6138"
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
                    id="t18_873_6139"
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
                        id="t18_873_6140"
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
                            id="t18_873_6141"
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
                                id="t18_873_6142"
                                style={{
                                    width: 223,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-end',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 7.5,
                                }}
                            >
                                <div
                                    id="t18_873_6143"
                                    style={{
                                        width: 223,
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
                                        id="t18_873_6144"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 13,
                                            fontWeight: 700,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '35px',
                                            textAlign: 'left',
                                        }}
                                    >
                                        {props.title}
                                    </span>
                                </div>

                                <div
                                    id="t18_873_6145"
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
                                        id="t18_873_6146"
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
                                id="t18_873_6147"
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
                                    id="t18_873_6148"
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
                                            id="t18_873_6149"
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
                                    id="t18_873_6150"
                                    style={{
                                        height: 28,
                                        width: 28,
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: props.bookmarkactive,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginBottom: 0,
                                    }}
                                >
                                    {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/bookmarkActive.png' !=
                                    '' ? (
                                        <img
                                            id="t18_873_6151"
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
                            id="t18_873_6152"
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
                                id="t18_873_6153"
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
                                id="t18_873_6154"
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
                            id="t18_873_6155"
                            style={{
                                width: 271,
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                display: 'flex',
                                paddingLeft: 10,
                                paddingTop: 5,
                                paddingBottom: 8,
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
                                id="t18_873_6156"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    marginBottom: 2.5,
                                }}
                            >
                                <div
                                    id="t18_873_6157"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 2.5,
                                    }}
                                >
                                    <span
                                        id="t18_873_6158"
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
                                        id="t18_873_6159"
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
                                    id="t18_873_6160"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 2.5,
                                        marginBottom: 0,
                                    }}
                                >
                                    <span
                                        id="t18_873_6161"
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
                                        id="t18_873_6162"
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
                                id="t18_873_6163"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 2.5,
                                    marginBottom: 0,
                                }}
                            >
                                <div
                                    id="t18_873_6164"
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
                                        id="t18_873_6165"
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
                                        No. of people:
                                    </span>

                                    <span
                                        id="t18_873_6166"
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
                                    id="t18_873_6167"
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
                                        id="t18_873_6168"
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
                                        id="t18_873_6169"
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
                            id="t18_873_6170"
                            style={{
                                height: 43,
                                width: 260,
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
                                id="t18_873_6171"
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
                                    id="t18_873_6172"
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
                                    id="t18_873_6173"
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
                                id="t18_873_6174"
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
                                    id="t18_873_6175"
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
                        id="t18_873_6176"
                        style={{
                            height: 28,
                            width: 162,
                            backgroundImage:
                                'url(https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/melodymocktailpreferred.png)',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            display: props.mmReferalVisible,
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingBottom: 10,
                            position: 'absolute',
                            overflow: 'visible',
                            borderWidth: 0,
                            top: -13.5380859375,
                            left: -4,
                            marginTop: 4,
                            marginBottom: 0,
                        }}
                    >
                        <span
                            id="t18_873_6177"
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
export default MmWantedRideCardS
