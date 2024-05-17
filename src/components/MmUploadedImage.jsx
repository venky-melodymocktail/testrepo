import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmUploadedImage = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = { imgUrl: 'url(https://placehold.co/600x400/png)' }
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_1167_842"
                style={{
                    flexDirection: 'column',
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
                    marginTop: 5,
                    marginBottom: 0,
                    marginLeft: '10px',
                }}
            >
                {props.imgUrl?.slice(4, -1).trim() != '' ? (
                    <img
                        id="t18_1167_843"
                        style={{
                            height: 117,
                            width: 180,
                            display: 'flex',
                            borderWidth: 0,
                            marginTop: 0,
                            marginBottom: 5,
                        }}
                        src={props.imgUrl?.slice(4, -1).trim()}
                    ></img>
                ) : (
                    <></>
                )}

                <div
                    id="t18_1167_844"
                    style={{
                        height: 25,
                        width: 75,
                        borderRadius: 5,
                        backgroundColor: 'rgba(186,15,23,1)',
                        flexDirection: 'row',
                        alignItems: 'center',
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
                        marginTop: 5,
                        marginBottom: 0,
                        cursor: 'pointer',
                    }}
                    onClick={(e) => {
                        props.onDelete && props.onDelete(e)
                    }}
                >
                    {'https://s3-alpha-sig.figma.com/img/ec21/2b53/054b3602d743b10219fd3062fc8e723f?Expires=1685318400&Signature=W~AdQV29ofMQGBSOrIqJl99yR8lk7F2yAWJhm5mD~zbZlnFc3siGAe5JTwkCZ~ARYJqDtShWQsuubIAiHpERrNK96Nb3wxVW02I-u1zRwGjbnCkJAFN~lH9FNpOWehwA9DVHjkWE-sUjc55hHUklvZo2InKRgjiqxw~xgSzbff2VyAWYBcdeJ7VasVdeqHVne7gtSgBp213XFE82-0m2nydb4AcHVeK8uGyQwFZDHPI-G-8KdD97XRncTbsTxIoeXe3yES6FaV7KTY-s1UCFJyemb3dMJ9nuPrMGpKAjABlwwQj~97Y5RJMrYoiXx0ICuDOIUUzB9Ita48HNqSvU0g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' !=
                    '' ? (
                        <img
                            id="t18_1167_845"
                            style={{
                                height: 10,
                                width: 8,
                                display: 'flex',
                                borderWidth: 0,
                                marginLeft: 0,
                                marginRight: 3,
                            }}
                            src={
                                'https://s3-alpha-sig.figma.com/img/ec21/2b53/054b3602d743b10219fd3062fc8e723f?Expires=1685318400&Signature=W~AdQV29ofMQGBSOrIqJl99yR8lk7F2yAWJhm5mD~zbZlnFc3siGAe5JTwkCZ~ARYJqDtShWQsuubIAiHpERrNK96Nb3wxVW02I-u1zRwGjbnCkJAFN~lH9FNpOWehwA9DVHjkWE-sUjc55hHUklvZo2InKRgjiqxw~xgSzbff2VyAWYBcdeJ7VasVdeqHVne7gtSgBp213XFE82-0m2nydb4AcHVeK8uGyQwFZDHPI-G-8KdD97XRncTbsTxIoeXe3yES6FaV7KTY-s1UCFJyemb3dMJ9nuPrMGpKAjABlwwQj~97Y5RJMrYoiXx0ICuDOIUUzB9Ita48HNqSvU0g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                            }
                        ></img>
                    ) : (
                        <></>
                    )}

                    <span
                        id="t18_1167_846"
                        style={{
                            fontFamily: 'Inter',
                            fontSize: 13,
                            fontWeight: 600,
                            color: 'rgba(255,255,255,1)',
                            letterSpacing: 0,
                            lineHeight: '15.732954025268555px',
                            textAlign: 'left',
                            marginLeft: 3,
                            marginRight: 0,
                        }}
                    >
                        Delete
                    </span>
                </div>
            </div>
        </div>
    )
})
export default MmUploadedImage
