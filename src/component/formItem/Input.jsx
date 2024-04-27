import React from 'react'

export default function Input({ type, name, value, id, placeholder, onChange }) {
    return (
        <>
            <div className="form-group py-1" >
                <input
                // style={{boxSizing: "border-box "}}
                    type={type}
                    className="form-control"
                    name={name}
                    value={value}
                    id={id}
                    aria-describedby="helpId"
                    onChange={onChange}
                    required
                    placeholder={placeholder} />
            </div>
        </>
    )
}
