import React, { useEffect } from 'react'
import { observer } from 'mobx-react'

const ViataBanner = observer(() => {
    useEffect(() => {
        // Function to dynamically load the Viator widget script
        const loadViatorWidgetScript = () => {
            const script = document.createElement('script')
            script.src =
                'https://partners.vtrcdn.com/static/scripts/banners/banners.js' // link //
            script.async = true
            document.body.appendChild(script)
        }

        // Load the Viator widget script when the component mounts
        loadViatorWidgetScript()

        // Clean up function (optional) to remove the script when the component unmounts
        // return () => {
        //     document.body.removeChild(script)
        // }
    }, [])
    return <div></div>
})

export default ViataBanner
