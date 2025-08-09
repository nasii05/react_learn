import React from 'react'

const ProfileCard = () => {
    const styles = {
        backgroundColor: 'lightgray',
        padding: '15px',
        borderRadius: '10px'
    }

    return (
        <div style={styles} >
            <h1>Profile Card</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nec mollis orci, sit amet porta nisi.
                Donec condimentum neque vitae urna dignissim,
                ac ornare justo lacinia. Aliquam et erat eget.
            </p>
        </div>
    )
}
export default ProfileCard
