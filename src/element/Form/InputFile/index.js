import React, { useRef } from 'react'
import propTypes from 'prop-types'

import './index.scss'

export default function File(props) {

    const {
        value,
        accept,
        placeholder,
        name,
        prepend,
        append,
        outerClassName,
        inputClassName,
    } = props

    const refInputfile = useRef(null)

    return (
        <div className={["input-text mbb-3", outerClassName].join(' ')}>
            <div className="input-group">
                {prepend && (
                    <div className="inpout-group-prepend bg-gray-900">
                        <span className="input-group-text">{prepend}</span>
                    </div>
                )}
                <input
                    accept={accept}
                    ref={refInputfile}
                    name={name}
                    type='file'
                    className='d-none'
                    value={value}
                    onChange={props.onchange}
                />
                <input
                    onClick={() => refInputfile.current.click()}
                    defaultValue={value}
                    placeholder={placeholder}
                    className={["form-control", inputClassName].join(' ')}
                />
                {
                    append && (
                        <div className="input-group-append bg-gray-900">
                            <span className="input-group-text">{append}</span>

                        </div>
                    )
                }
            </div>
        </div>
    )
}

File.defaultProps = {
    placeholder: 'Browse a file...',
}

File.propTypes = {
    name: propTypes.string.isRequired,
    accept: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
    append: propTypes.oneOfType([propTypes.number, propTypes.string]),
    placeholder: propTypes.string,
    outerclassName: propTypes.string,
    inputClassName: propTypes.string,
}