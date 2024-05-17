import React, { useEffect, useState } from 'react'
import dl from '../datalayer/state'
import Modal from '@mui/material/Modal'
import { observer } from 'mobx-react'
import Poster from '../assets/webinarBanner.jpeg'

const WebinarPopup = observer(() => {

    const [anim, setAnim] = useState('')
    const [showModal, setShowModal] = useState(dl.modalsStatus['WebinarAdBannerPopup'])
    useEffect(() => {
        if (!dl.modalsStatus['WebinarAdBannerPopup']) {
            closeModal()
        } else {
            setShowModal(true)
        }
    }, [dl.modalsStatus['WebinarAdBannerPopup']])

    const closeModal = () => {
        setAnim('')
        setTimeout(() => {
            dl.modalsStatus['WebinarAdBannerPopup'] = false
            setAnim('')
            setShowModal(false)
        }, 0)
    }


  return (
    <Modal
            className={anim}
            open={showModal}
            disableAutoFocus={true}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            onClose={() => {
                closeModal()
                dl.changes.webinarPopupClosed = true
            }}
        >
            <div
                className="popupModal topwebinarBanner"
                style={{
                    position: 'absolute',

                    
                    left: '50%',
                    transform: 'translate(-50%, -50%)',

                    overflow: 'scroll',
                    backgroundColor: 'rgba(255,255,255,.5) !important',
                }}
            >
                <div
                        id="t18_1940_2"
                        style={{
                           
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            display: 'flex',
                            
                            position: 'relative',
                            overflow: 'visible',
                            borderWidth: 0,
                            borderColor: 'rgba(207,206,206,1)',
                            borderBottomWidth: '0px',
                            borderStyle: 'solid',
                            marginTop: 0,
                            // marginBottom: 5,
                            padding:5,
                            paddingLeft: 10,
                            borderTopLeftRadius: '4px',
                            borderTopRightRadius: '4px',
                            
                            backgroundColor: 'rgba(255,255,255,0.9)',
                            backdropFilter: blur('40px'),
                        }}
                    >
                        {'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/3cccb82d2cbb5fa69dab2222e2b71e9eafc593e2.png' !=
                        '' ? (
                            <img
                                id="t18_1940_4"
                                style={{
                                    height: '15px',
                                    width: '15px',
                                    display: 'flex',
                                    borderWidth: 0,
                                    cursor: 'pointer',
                                    minWidth: '15px',
                                }}
                                onClick={(e) => {
                                    dl.functions.modalsPlugin.closeModal(
                                        'WebinarAdBannerPopup'
                                    )
                                    dl.changes.webinarPopupClosed = true
                                }}
                                src={
                                    'https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/3cccb82d2cbb5fa69dab2222e2b71e9eafc593e2.png'
                                }
                            ></img>
                        ) : (
                            <></>
                        )}
                    </div>
                <div className='WebinarBanner' style={{ padding:4, backgroundColor:"white", display:"flex", alignItems:"center", justifyContent:"center", borderBottomLeftRadius:2, borderBottomRightRadius:2}}>
                    
                    <img className='WebinarBanner' style={{ height:"auto"}} src={Poster}/>
                    <div onClick={()=>{window.open('https://webinars.melodymocktail.com/', '_blank');}} className='webinarButton contact-btn' style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                        Join Webinar
                    </div>
                </div>
            </div>


    </Modal>
  )
})

export default WebinarPopup