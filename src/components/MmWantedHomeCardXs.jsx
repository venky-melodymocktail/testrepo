import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmWantedHomeCardXs = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {
        title: '',
        location: '',
        type: '',
        neededBy: '',
        AdType: '',
        postedBy: '',
        bookmarkactive: 'flex',
        bookmarkinactive: 'flex',
        promotionVisible: 'flex',
        promotionDateVisible: 'none',
        mmReferalVisible: 'flex',
        EditDeleteVisible: 'flex',
        contactVisible: 'flex',
        promotionstartDate: '',
        promotionDayleft: '',
    }
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_1216_320"
                style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    paddingBottom: 20,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginTop: 5,
                    marginBottom: 5,
                }}
            >
                <div
                    id="t18_1216_321"
                    style={{
                        width: 360,
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
                        id="t18_1216_322"
                        style={{
                            width: 360,
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
                            id="t18_1216_323"
                            style={{
                                height: 64,
                                width: 345,
                                borderTopLeftRadius: 8,
                                borderTopRightRadius: 8,
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                paddingLeft: 15,
                                paddingTop: 20,
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
                                id="t18_1216_324"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 10,
                                }}
                            >
                                <div
                                    id="t18_1216_325"
                                    style={{
                                        height: '38px',
                                        width: 279,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: '-webkit-box',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        borderWidth: 0,
                                        marginTop: 0,
                                        marginBottom: 2.5,
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 2,
                                        textOverflow: 'ellipsis',
                                    }}
                                >
                                    <span
                                        id="t18_1216_326"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 12,
                                            fontWeight: 700,
                                            color: 'rgba(0,0,0,1)',
                                            letterSpacing: 0,
                                            lineHeight: '12.522727012634277px',
                                            textAlign: 'left',
                                        }}
                                    >
                                        {props.title}
                                    </span>
                                </div>

                                <div
                                    id="t18_1216_327"
                                    style={{
                                        height: 19,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 2.5,
                                        marginBottom: 0,
                                    }}
                                >
                                    {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/locationicon-listingcard.png' !=
                                    '' ? (
                                        <img
                                            id="t18_1216_328"
                                            style={{
                                                height: 11,
                                                width: 9,
                                                display: 'flex',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 2,
                                            }}
                                            src={
                                                'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/locationicon-listingcard.png'
                                            }
                                        ></img>
                                    ) : (
                                        <></>
                                    )}

                                    <span
                                        id="t18_1216_329"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontSize: 11,
                                            fontWeight: 500,
                                            color: 'rgba(113,113,113,1)',
                                            letterSpacing: 0,
                                            lineHeight: '13.3125px',
                                            textAlign: 'left',
                                            marginLeft: 2,
                                            marginRight: 0,
                                        }}
                                    >
                                        {props.location}
                                    </span>
                                </div>
                            </div>

                            <div
                                id="t18_1216_330"
                                style={{
                                    width: 32,
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 10,
                                    marginRight: 0,
                                }}
                            >
                                {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/bookmarkInactive.png' !=
                                '' ? (
                                    <img
                                        id="t18_1216_331"
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
                                        id="t18_1216_332"
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
                            id="t18_1216_333"
                            style={{
                                height: 27,
                                width: 179,
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
                                top: -16,
                                left: -4,
                            }}
                        >
                            <span
                                id="t18_1216_334"
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
                            id="t18_1216_392"
                            style={{
                                height: 82,
                                width: 345,
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                display: 'flex',
                                paddingLeft: 15,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                borderColor: 'rgba(207,206,206,1)',
                                borderBottomWidth: 1,
                                borderStyle: 'solid',
                            }}
                        >
                            <div
                                id="t18_1216_393"
                                style={{
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
                                    id="t18_1216_394"
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
                                        id="t18_1216_395"
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
                                        Type:
                                    </span>

                                    <span
                                        id="t18_1216_396"
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
                                        {props.type}
                                    </span>
                                </div>

                                <div
                                    id="t18_1216_400"
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: 'flex',
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 3.5,
                                        marginBottom: 3.5,
                                    }}
                                >
                                    <div
                                        id="t18_1216_401"
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
                                        <span
                                            id="t18_1216_402"
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
                                            Needed by:
                                        </span>

                                        <span
                                            id="t18_1216_403"
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
                                            {props.neededBy}
                                        </span>
                                    </div>
                                </div>

                                <div
                                    id="t18_1216_397"
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
                                        id="t18_1216_398"
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
                                        id="t18_1216_399"
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
                                        {props.AdType}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div
                            id="t18_1216_350"
                            style={{
                                width: 335,
                                borderBottomLeftRadius: 8,
                                borderBottomRightRadius: 8,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                display: 'flex',
                                paddingLeft: 15,
                                paddingRight: 10,
                                paddingTop: 10,
                                paddingBottom: 10,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginBottom: 0,
                            }}
                        >
                            <div
                                id="t18_1216_351"
                                style={{
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 0,
                                    marginRight: 37.5,
                                }}
                            >
                                <span
                                    id="t18_1216_352"
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
                                    id="t18_1216_353"
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
                                    {props.postedBy}
                                </span>
                            </div>

                            <div
                                id="t18_1216_354"
                                style={{
                                    width: 87,
                                    flexDirection: 'column',
                                    alignItems: 'flex-end',
                                    justifyContent: 'flex-start',
                                    display: 'flex',
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginLeft: 57.5,
                                    marginRight: 0,
                                }}
                            >
                                <div
                                    id="t18_2355_2"
                                    style={{
                                        width: 85,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        display: props.EditDeleteVisible,
                                        paddingBottom: 3,
                                        position: 'relative',
                                        overflow: 'visible',
                                        borderWidth: 0,
                                        marginTop: 0,
                                    }}
                                >
                                    <div
                                        id="t18_1216_355"
                                        style={{
                                            width: 85,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            display: props.none,
                                            position: 'relative',
                                            overflow: 'visible',
                                            borderWidth: 0,
                                        }}
                                    >
                                        <div
                                            id="t18_2356_3"
                                            style={{
                                                height: 16,
                                                width: 13,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start',
                                                display: 'flex',
                                                position: 'relative',
                                                overflow: 'visible',
                                                borderWidth: 0,
                                                marginLeft: 0,
                                                marginRight: 4,
                                            }}
                                        >
                                            {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/delete.png' !=
                                            '' ? (
                                                <img
                                                    id="t18_1216_356"
                                                    style={{
                                                        height: 16,
                                                        width: 13,
                                                        display: 'flex',
                                                        borderWidth: 0,
                                                        cursor: 'pointer',
                                                    }}
                                                    onClick={(e) => {
                                                        props.onClickDelete &&
                                                            props.onClickDelete(
                                                                e
                                                            )
                                                    }}
                                                    src={
                                                        'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/delete.png'
                                                    }
                                                ></img>
                                            ) : (
                                                <></>
                                            )}
                                        </div>

                                        <div
                                            id="t18_1216_358"
                                            style={{
                                                height: 24,
                                                width: 64,
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
                                                id="t18_1216_359"
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
                                </div>

                                <div
                                    id="t18_1216_360"
                                    style={{
                                        height: 25,
                                        width: 87,
                                        borderRadius: 4,
                                        backgroundColor: 'rgba(186,15,23,1.00)',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        display: props.contactVisible,
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
                                        id="t18_1216_361"
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
                        id="t18_1216_362"
                        style={{
                            width: 360,
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
                            id="t18_1216_363"
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
                                id="t18_1216_364"
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
                                    id="t18_1216_365"
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
                            id="t18_1216_366"
                            style={{
                                height: 20,
                                width: 340,
                                borderRadius: 5,
                                backgroundColor: 'rgba(28,167,139,1.00)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
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
                                id="t18_1216_367"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 12,
                                    fontWeight: 700,
                                    color: 'rgba(255,255,255,1)',
                                    letterSpacing: 0,
                                    lineHeight: '14.522727012634277px',
                                    textAlign: 'left',
                                    marginLeft: 0,
                                    marginRight: 40,
                                }}
                            >
                                {props.promotionstartDate}
                            </span>

                            <span
                                id="t18_1216_368"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 12,
                                    fontWeight: 600,
                                    color: 'rgba(207,206,206,1)',
                                    letterSpacing: 0,
                                    lineHeight: '14.522727012634277px',
                                    textAlign: 'left',
                                    marginLeft: 40,
                                    marginRight: 0,
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
export default MmWantedHomeCardXs
