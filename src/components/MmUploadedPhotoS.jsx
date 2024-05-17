import React from 'react'
import dl from '../datalayer/state'
import _ from 'lodash'
import { observer } from 'mobx-react'

import MaterialMenu from './main/MaterialMenu.jsx'
import MaterialDate from './main/MaterialDate.jsx'
import MaterialAutoComplete from './main/MaterialAutoComplete.jsx'
import MaterialRating from './main/MaterialRating.jsx'

import MaterialSelect from './main/MaterialSelect.jsx'

const MmUploadedPhotoS = observer((mainprops) => {
    // if(_.isEmpty(props)){
    var props = { imgUrl: 'url(https://placehold.co/600x400/png)' }
    for (var key in mainprops) {
        props[key] = mainprops[key]
    }
    // }

    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <div
                id="t18_1239_1786"
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
                }}
            >
                {props.imgUrl?.slice(4, -1).trim() != '' ? (
                    <img
                        id="t18_1239_1787"
                        style={{
                            height: 98,
                            width: 151,
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
                    id="t18_1239_1788"
                    style={{
                        height: 20,
                        width: 70,
                        borderRadius: 4,
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
                    {'https://s3-alpha-sig.figma.com/img/ec21/2b53/054b3602d743b10219fd3062fc8e723f?Expires=1685923200&Signature=g~yoUaWf3lCj4CTzPFdW8tPfkLQ0GuDEPaYAcJY-xF6PMe7YkUClocncQM3Vlf5cwuDHILQQdtZUgOJ1issG6ffM68ZYU0XsYLoJ2fayTDja4A6p56pKH5eRwELRp0mBNkN9iXwmFgdlGtPBEp0H5h6-zQgz68x--BtNpl~V40xkCktVxyrKcWOUIkAX7se6W7jei2y7DdcD3Q3g95WJSCw1~KQNhR40713u34F~TxhhUyuFKgsgPm~J3vJHDpeaQ-B5pInYe6eMlE4JAI1o4271r3ns2ee5QZ~~6l70BghH~hs~jknz6xdW8YCSVBnHdEzg-x~sLa8~XzDFJi0PWA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' !=
                    '' ? (
                        <img
                            id="t18_1239_1789"
                            style={{
                                height: 7.5,
                                width: 6,
                                display: 'flex',
                                borderWidth: 0,
                                marginLeft: 0,
                                marginRight: 3,
                            }}
                            src={
                                'https://s3-alpha-sig.figma.com/img/ec21/2b53/054b3602d743b10219fd3062fc8e723f?Expires=1685923200&Signature=g~yoUaWf3lCj4CTzPFdW8tPfkLQ0GuDEPaYAcJY-xF6PMe7YkUClocncQM3Vlf5cwuDHILQQdtZUgOJ1issG6ffM68ZYU0XsYLoJ2fayTDja4A6p56pKH5eRwELRp0mBNkN9iXwmFgdlGtPBEp0H5h6-zQgz68x--BtNpl~V40xkCktVxyrKcWOUIkAX7se6W7jei2y7DdcD3Q3g95WJSCw1~KQNhR40713u34F~TxhhUyuFKgsgPm~J3vJHDpeaQ-B5pInYe6eMlE4JAI1o4271r3ns2ee5QZ~~6l70BghH~hs~jknz6xdW8YCSVBnHdEzg-x~sLa8~XzDFJi0PWA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                            }
                        ></img>
                    ) : (
                        <></>
                    )}

                    <span
                        id="t18_1239_1790"
                        style={{
                            fontFamily: 'Inter',
                            fontSize: 11,
                            fontWeight: 600,
                            color: 'rgba(255,255,255,1)',
                            letterSpacing: 0,
                            lineHeight: '13.3125px',
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
export default MmUploadedPhotoS
