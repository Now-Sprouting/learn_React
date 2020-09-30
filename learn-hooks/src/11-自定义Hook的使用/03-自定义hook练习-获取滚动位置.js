import React, { useEffect, useState } from 'react'

import usePositionHook from '../hooks/scroll-position-hook'

export default function CustromScrollPositionHook() {
    const num = usePositionHook();
    return (
        <div style={{ padding: '1000px 0px' }}>
            <h2 style={{ position: 'fixed', left: '0px', top: '0px' }}>{num}</h2>
        </div>
    )
}
