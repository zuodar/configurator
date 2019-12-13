import React from 'react'

const Wrapper = ({children, color}) => {
    return (
        <div style={{
            border: '1px solid #e6e6e6',
            width: '33%', 
            minWidth: '320px', 
            height: 'calc(100% - 40px)', 
            borderRadius: '8px', 
            padding: 20, 
             backgroundColor: color,
             marginLeft: 10,
             marginRight: 10,
             overflow: 'auto'
            }}
        >
            {children}
        </div>
    )
}

export default Wrapper