import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmMovieCardMd = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {
        title: 'Sample title',
        genre: 'Drama',
        rating: '5',
        availableOn_1:
            'url(https://loodibee.com/wp-content/uploads/Netflix-N-Symbol-logo.png)',
        availableOn_2:
            'url(https://play-lh.googleusercontent.com/Uyk7DkQElC-0OfJCOHZLIgnQ0ulHoEC06d9ENRklNh-0t6nrFc6mqmpRMajoVU3Yt9w)',
        availableOn_3:
            'url(https://www.thewebfactory.us/blogs/wp-content/uploads/2022/12/HBO-Logo-Design-1975-1980.png)',
        availableOn_4:
            'url(https://pixlok.com/wp-content/uploads/2022/04/Apple_TV_Plus_Logo-09uh-300x300.jpg)',
        availableOn_5:
            'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToQX9aZ45qsb-KrsfN0FSVXMHXpMwlFe1-A&usqp=CAU)',
        availableOn_6:
            'url(https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Zee5_Official_logo.svg/1200px-Zee5_Official_logo.svg.png)',
        bookmarkactive: 'flex',
        bookmarkinactive: 'flex',
        imageurl:
            'url(https://images.unsplash.com/photo-1682832919420-b2aca69e6ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)',
        ratingProps: {
            readOnly: true,
            color: 'rgba(186,15,23,1)',
            size: 10,
            rating: 2,
            max: 4,
        },
        trailerURL: 'https://agoodmovietowatch.com/a-tale-of-two-sisters-2003/',
    }
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_650_691"
                style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    itemSpacing: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 0,
                    paddingBottom: 20,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginTop: 5,
                    marginBottom: 5,
                    cursor: 'pointer',
                }}
                onClick={(e) => {
                    props.onClick && props.onClick(e)
                }}
            >
                <div
                    id="t18_711_239"
                    style={{
                        width: 256,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        display: 'flex',
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
                        id="t18_711_240"
                        style={{
                            height: 310,
                            width: 236,
                            borderTopLeftRadius: 15,
                            borderTopRightRadius: 15,
                            backgroundImage: props.imageurl,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-end',
                            display: 'flex',
                            itemSpacing: 10,
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 10,
                            paddingBottom: 10,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginTop: 0,
                        }}
                    >
                        <div
                            id="t18_711_241"
                            style={{
                                width: 38,
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
                            }}
                        >
                            {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/bookmarkInactive.png' !=
                            '' ? (
                                <img
                                    id="t18_711_242"
                                    style={{
                                        height: 38,
                                        width: 38,
                                        display: props.bookmarkinactive,
                                        borderWidth: 0,
                                        marginTop: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        props.onCreateBookmark &&
                                            props.onCreateBookmark(e)
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
                                    id="t18_711_243"
                                    style={{
                                        height: 38,
                                        width: 38,
                                        display: props.bookmarkactive,
                                        borderWidth: 0,
                                        marginBottom: 0,
                                        cursor: 'pointer',
                                    }}
                                    onClick={(e) => {
                                        props.onRemoveBookmark &&
                                            props.onRemoveBookmark(e)
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
                        id="t18_711_244"
                        style={{
                            width: 241,
                            borderBottomLeftRadius: 15,
                            borderBottomRightRadius: 15,
                            backgroundColor: 'rgba(248,246,246,1)',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            itemSpacing: 15,
                            paddingLeft: 15,
                            paddingRight: 0,
                            paddingTop: 20,
                            paddingBottom: 11,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginBottom: 0,
                        }}
                    >
                        <span
                            id="t18_711_245"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 18,
                                fontWeight: 600,
                                color: 'rgba(0,0,0,1)',
                                letterSpacing: 0,
                                lineHeight: '21.784090042114258px',
                                textAlign: 'center',
                                marginTop: 0,
                                marginBottom: 7.5,
                            }}
                        >
                            {props.title}
                        </span>

                        <div
                            id="t18_711_246"
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                itemSpacing: 19,
                                paddingLeft: 0,
                                paddingRight: 0,
                                paddingTop: 0,
                                paddingBottom: 0,
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 7.5,
                                marginBottom: 7.5,
                            }}
                        >
                            <span
                                id="t18_711_247"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 13,
                                    fontWeight: 500,
                                    color: 'rgba(113,113,113,1)',
                                    letterSpacing: 0,
                                    lineHeight: '15.732954025268555px',
                                    textAlign: 'center',
                                    marginLeft: 0,
                                    marginRight: 9.5,
                                }}
                            >
                                {props.genre}
                            </span>

                            <MaterialRating dataSource={props.ratingProps} />
                        </div>

                        <div
                            id="t18_711_253"
                            style={{
                                width: 238,
                                flexDirection: 'row',
                                alignItems: 'center',
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
                                marginTop: 7.5,
                                marginBottom: 7.5,
                            }}
                        >
                            <span
                                id="t18_711_254"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 13,
                                    fontWeight: 500,
                                    color: 'rgba(113,113,113,1)',
                                    letterSpacing: 0,
                                    lineHeight: '15.732954025268555px',
                                    textAlign: 'center',
                                    marginLeft: 0,
                                    marginRight: 5,
                                }}
                            >
                                Available on
                            </span>

                            <div
                                id="t18_711_255"
                                style={{
                                    width: 149,
                                    flexDirection: 'row',
                                    alignItems: 'center',
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
                                    marginLeft: 5,
                                    marginRight: 0,
                                }}
                            >
                                <div
                                    id="t18_711_256"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'flex-end',
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
                                        marginLeft: 0,
                                        marginRight: 2.5,
                                    }}
                                >
                                    {props.availableOn_1?.slice(4, -1).trim() !=
                                    '' ? (
                                        <img
                                            id="t18_711_257"
                                            style={{
                                                height: 21,
                                                width: 21,
                                                display: 'flex',
                                                borderWidth: 0,
                                            }}
                                            src={props.availableOn_1
                                                ?.slice(4, -1)
                                                .trim()}
                                        ></img>
                                    ) : (
                                        <></>
                                    )}
                                </div>

                                <div
                                    id="t18_711_258"
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'flex-end',
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
                                        marginLeft: 2.5,
                                        marginRight: 2.5,
                                    }}
                                >
                                    {props.availableOn_2?.slice(4, -1).trim() !=
                                    '' ? (
                                        <img
                                            id="t18_711_259"
                                            style={{
                                                height: 21,
                                                width: 21,
                                                display: 'flex',
                                                borderWidth: 0,
                                            }}
                                            src={props.availableOn_2
                                                ?.slice(4, -1)
                                                .trim()}
                                        ></img>
                                    ) : (
                                        <></>
                                    )}
                                </div>

                                {props.availableOn_3?.slice(4, -1).trim() !=
                                '' ? (
                                    <img
                                        id="t18_711_260"
                                        style={{
                                            height: 20,
                                            width: 20,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: 2.5,
                                            marginRight: 2.5,
                                        }}
                                        src={props.availableOn_3
                                            ?.slice(4, -1)
                                            .trim()}
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                {props.availableOn_4?.slice(4, -1).trim() !=
                                '' ? (
                                    <img
                                        id="t18_711_261"
                                        style={{
                                            height: 20,
                                            width: 20,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: 2.5,
                                            marginRight: 2.5,
                                        }}
                                        src={props.availableOn_4
                                            ?.slice(4, -1)
                                            .trim()}
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                {props.availableOn_5?.slice(4, -1).trim() !=
                                '' ? (
                                    <img
                                        id="t18_711_262"
                                        style={{
                                            height: 21,
                                            width: 21,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: 2.5,
                                            marginRight: 2.5,
                                        }}
                                        src={props.availableOn_5
                                            ?.slice(4, -1)
                                            .trim()}
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                {props.availableOn_6?.slice(4, -1).trim() !=
                                '' ? (
                                    <img
                                        id="t18_711_263"
                                        style={{
                                            height: 21,
                                            width: 21,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: 2.5,
                                            marginRight: 0,
                                        }}
                                        src={props.availableOn_6
                                            ?.slice(4, -1)
                                            .trim()}
                                    ></img>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>

                        <div
                            id="t18_711_264"
                            className={' trailerButton'}
                            style={{
                                height: 20,
                                width: 208,
                                borderRadius: 7,
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
                                marginTop: 7.5,
                                marginBottom: 0,
                                cursor: 'pointer',
                            }}
                            onClick={(e) => {
                                props.onClickTrailer && props.onClickTrailer(e)
                            }}
                        >
                            <span
                                id="t18_711_265"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 15,
                                    fontWeight: 700,
                                    color: 'rgba(186,15,23,1)',
                                    letterSpacing: 0,
                                    lineHeight: '18.15340805053711px',
                                    textAlign: 'center',
                                }}
                            >
                                Watch Trailer
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default MmMovieCardMd
