import React from 'react'
import VideoList from './VideoList'
import { useBoolean } from 'react-use'
import Footer from './Footer'
const FrontPage = () => {
    const [newVideoUploadedToggler, setNewVideoUploadedToggler] = useBoolean(false)
    return (
        <>
            <main class="h-full">
                <VideoList
                    newVideoUploadedToggler={newVideoUploadedToggler}
                />
                <div style={{ height: 60 }} />
            </main>
            <Footer
                setNewVideoUploadedToggler={setNewVideoUploadedToggler}
            />
        </>
    )

}

export default FrontPage