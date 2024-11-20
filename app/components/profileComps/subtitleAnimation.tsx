"use client";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const SubtitleAnimation = () => {
    return (
        <>
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed once, initially
                    'Programador web',
                    2000,
                    'Freeelancer',
                    2000,
                    'Front-end',
                    2000,
                    'Back-end',
                    2000,
                ]}
                speed={30}
                style={{ fontSize: '1em', fontWeight: "bolder" }}
                repeat={Infinity}
            />
        </>
    )
}

export default SubtitleAnimation
