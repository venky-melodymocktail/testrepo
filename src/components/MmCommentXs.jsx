import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmCommentXs = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = {
        name: '',
        comment: '',
        commentId: '',
        createdOn: '',
        deleteButtonVisible: 'none',
        reportButtonVisible: 'flex',
        userProfile:
            'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/CommentUserProfile.png',
    }
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_773_256"
                style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    display: 'flex',
                    itemSpacing: 10,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 20,
                    position: 'relative',
                    overflow: 'visible',
                    borderWidth: 0,
                    marginTop: 5,
                    marginBottom: 5,
                }}
            >
                <div
                    id="t18_756_192"
                    style={{
                        width: 350,
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
                    }}
                >
                    <div
                        id="t18_756_193"
                        style={{
                            height: 24,
                            width: 24,
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
                            marginRight: 5,
                        }}
                    >
                        {props.userProfile != '' ? (
                            <img
                                id="t18_756_194"
                                style={{
                                    height: 24,
                                    width: 24,
                                    display: 'flex',
                                    borderWidth: 0,
                                    borderRadius: '50%',
                                }}
                                src={props.userProfile}
                            ></img>
                        ) : (
                            <></>
                        )}
                    </div>

                    <div
                        id="t18_756_195"
                        style={{
                            width: 311,
                            flexDirection: 'column',
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
                            marginLeft: 5,
                            marginRight: 0,
                        }}
                    >
                        <span
                            id="t18_756_196"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 14,
                                fontWeight: 700,
                                color: 'rgba(0,0,0,1)',
                                letterSpacing: 0,
                                lineHeight: '16.94318199157715px',
                                textAlign: 'left',
                                marginTop: 0,
                                marginBottom: 3.5,
                            }}
                        >
                            {props.name}
                        </span>

                        <span
                            id="t18_756_197"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 11,
                                fontWeight: 400,
                                color: 'rgba(184,178,178,1)',
                                letterSpacing: 0,
                                lineHeight: '13.3125px',
                                textAlign: 'left',
                                marginTop: 3.5,
                                marginBottom: 3.5,
                            }}
                        >
                            {props.createdOn}
                        </span>

                        <span
                            id="t18_756_198"
                            style={{
                                fontFamily: 'Inter',
                                fontSize: 13,
                                fontWeight: 400,
                                color: 'rgba(0,0,0,1)',
                                letterSpacing: 0,
                                lineHeight: '17px',
                                textAlign: 'left',
                                marginTop: 3.5,
                                marginBottom: 3.5,
                            }}
                        >
                            {props.comment}
                        </span>

                        <div
                            id="t18_756_199"
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
                                marginTop: 3.5,
                                marginBottom: 0,
                            }}
                        >
                            <div
                                id="t18_756_200"
                                style={{
                                    height: 6,
                                    width: 67,
                                    borderRadius: 5,
                                    backgroundColor: 'rgba(186,15,23,1)',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    display: props.deleteButtonVisible,
                                    itemSpacing: 10,
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginTop: 0,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    props.onClickDelete &&
                                        props.onClickDelete(e)
                                }}
                            >
                                <span
                                    id="t18_756_201"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 13,
                                        fontWeight: 600,
                                        color: 'rgba(255,255,255,1)',
                                        letterSpacing: 0,
                                        lineHeight: '15.732954025268555px',
                                        textAlign: 'left',
                                    }}
                                >
                                    Delete
                                </span>
                            </div>

                            <div
                                id="t18_756_202"
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    display: props.reportButtonVisible,
                                    itemSpacing: 4,
                                    paddingLeft: 0,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    borderWidth: 0,
                                    marginBottom: 0,
                                    cursor: 'pointer',
                                }}
                                onClick={(e) => {
                                    props.onClickReport &&
                                        props.onClickReport(e)
                                }}
                            >
                                {'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/Report.png' !=
                                '' ? (
                                    <img
                                        id="t18_756_203"
                                        style={{
                                            height: 13,
                                            width: 14,
                                            display: 'flex',
                                            borderWidth: 0,
                                            marginLeft: 0,
                                            marginRight: 2,
                                        }}
                                        src={
                                            'https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/mmImages/mm/Report.png'
                                        }
                                    ></img>
                                ) : (
                                    <></>
                                )}

                                <span
                                    id="t18_756_204"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: 11,
                                        fontWeight: 400,
                                        color: 'rgba(113,113,113,1)',
                                        letterSpacing: 0,
                                        lineHeight: '13.3125px',
                                        textAlign: 'center',
                                        marginLeft: 2,
                                        marginRight: 0,
                                    }}
                                >
                                    Report
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default MmCommentXs
