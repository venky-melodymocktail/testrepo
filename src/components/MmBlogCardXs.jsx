import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmBlogCardXs = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {
        title: 'Sample title',
        description: 'Movies',
        date: '20 April 2023',
        bookmarkactive: 'flex',
        bookmarkinactive: 'flex',
        imageurl:
            'url(https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/blankImg.jpg)',
    }
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_651_714"
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
                    cursor: 'pointer',
                }}
                onClick={(e) => {
                    props.onClick && props.onClick(e)
                }}
            >
                <div
                    id="t18_706_201"
                    style={{
                        height: 302,
                        width: 344,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        position: 'relative',
                        overflow: 'visible',
                        borderWidth: 0,
                    }}
                >
                    <div
                        id="t18_706_202"
                        style={{
                            height: 157,
                            width: 324,
                            borderTopLeftRadius: 12,
                            borderTopRightRadius: 12,
                            backgroundImage: props.imageurl,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-end',
                            display: 'flex',
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
                            id="t18_706_203"
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
                            {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/bookmarkInactive.png' !=
                            '' ? (
                                <img
                                    id="t18_706_204"
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
                                    id="t18_706_205"
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
                        id="t18_706_207"
                        style={{
                            height: 81,
                            width: 328,
                            borderBottomLeftRadius: 12,
                            borderBottomRightRadius: 12,
                            backgroundColor: 'rgba(248,246,246,1.00)',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            paddingLeft: 16,
                            paddingTop: 14,
                            paddingBottom: 30,
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginBottom: 0,
                        }}
                    >
                        <span
                            id="t18_706_208"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 14,
                                fontWeight: 400,
                                color: 'rgba(113,113,113,1)',
                                letterSpacing: 0,
                                lineHeight: '16.94318199157715px',
                                textAlign: 'left',
                                marginTop: 0,
                                marginBottom: 5,
                            }}
                        >
                            {props.date}
                        </span>

                        <div
                            id="t18_2043_905"
                            style={{
                                height: 19,
                                width: 314,
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                display: 'flex',
                                position: 'relative',
                                overflow: 'visible',
                                borderWidth: 0,
                                marginTop: 5,
                                marginBottom: 5,
                            }}
                        >
                            <span
                                id="t18_706_209"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 16,
                                    fontWeight: 700,
                                    color: 'rgba(0,0,0,1)',
                                    letterSpacing: 0,
                                    lineHeight: '19.363636016845703px',
                                    textAlign: 'left',
                                }}
                            >
                                {props.title}
                            </span>
                        </div>

                        <div
                            id="t18_2043_906"
                            style={{
                                height: 40,
                                width: 302,
                                flexDirection: 'row',
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
                            <span
                                id="t18_706_210"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: 13,
                                    fontWeight: 400,
                                    color: 'rgba(0,0,0,1)',
                                    letterSpacing: 0,
                                    lineHeight: '20px',
                                    textAlign: 'left',
                                }}
                            >
                                {props.description}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default MmBlogCardXs
