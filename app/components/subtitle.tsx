"use client"

import { TypeAnimation } from 'react-type-animation';

export default function Subtitle() {
    return (
        <>
            <TypeAnimation sequence={[
                    'Programador Web',
                    5000,
                    'Front-end',
                    5000,
                    'Back-end',
                    5000,
                    'Freelancer',
                    5000
                ]}
                wrapper="span"
                speed={5}
                repeat={Infinity}
            />
        </>
    )
}