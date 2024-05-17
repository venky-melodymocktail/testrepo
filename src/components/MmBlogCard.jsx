import './css/MmBlogCard.css'

import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmBlogCard = observer((mainprops) => {
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
                id="t18_660_45"
                className={' blogCard'}
                style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    paddingLeft: 15,
                    paddingRight: 15,
                    paddingBottom: 20,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginTop: 5,
                    marginBottom: 5,
                    cursor: 'pointer',
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                }}
                onClick={(e) => {
                    props.onClick && props.onClick(e)
                }}
            >
                <div
                    id="t18_706_180"
                    style={{
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
                        id="t18_706_181"
                        className={' image'}
                        style={{
                            height: 190,
                            width: 355,
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
                            id="t18_706_182"
                            style={{
                                width: 38,
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
                                    id="t18_706_183"
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
                                    id="t18_706_184"
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
                        id="t18_706_185"
                        style={{
                            height: 148,
                            width: 375,
                            borderBottomLeftRadius: 12,
                            borderBottomRightRadius: 12,
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            display: 'flex',
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            marginBottom: 0,
                        }}
                    >
                        <div
                            id="t18_706_186"
                            style={{
                                height: 104,
                                width: 359,
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
                            }}
                        >
                            <span
                                id="t18_706_187"
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
                                id="t18_2043_903"
                                style={{
                                    width: 342,
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
                                    id="t18_706_188"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 16,
                                        fontWeight: 600,
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
                                id="t18_706_189"
                                style={{
                                    height: 56,
                                    width: 342,
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
                                    id="t18_706_190"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 15,
                                        fontWeight: 400,
                                        color: 'rgba(0,0,0,1)',
                                        letterSpacing: 0,
                                        lineHeight: '28px',
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
        </div>
    )
})
export default MmBlogCard
