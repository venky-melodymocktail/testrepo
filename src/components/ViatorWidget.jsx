import { observer } from 'mobx-react'
import React, { useEffect } from 'react'

const ViatorWidget = observer(({ link, partnerId, wedgetref }) => {
    useEffect(() => {
        // Function to dynamically load the Viator widget script
        const loadViatorWidgetScript = () => {
            const script = document.createElement('script')
            script.src = 'https://www.viator.com/orion/partner/widget.js' // link //
            script.async = true
            document.body.appendChild(script)
        }

        // Load the Viator widget script when the component mounts
        loadViatorWidgetScript()

        // Clean up function (optional) to remove the script when the component unmounts
        // return () => {
        //     document.body.removeChild(script)
        // }
    }, []) // Empty dependency array ensures useEffect runs only once on component mount

    return (
        <div
        // data-vi-partner-id="P00146590" // {partnerId} //
        // data-vi-widget-ref="W-eeadd1b2-dc44-4950-bd01-d0fcc3114d1b" // {wedgetref} //"W-eeadd1b2-dc44-4950-bd01-d0fcc3114d1b"
        ></div>
    )
})

export default ViatorWidget
