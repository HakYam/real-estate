import Link from 'next/link'
import React from 'react'

const InfoBox = ({ title, bgColor, textBox, btnInfo}) => {
    return (
        <>
            <div className={`${bgColor} p-6 rounded-lg shadow-md`}>
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="mt-2 mb-4">
                    {textBox}
                </p>
                <Link
                    href={btnInfo.link}
                    className={`inline-block ${btnInfo.bgColor} text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
                >
                    {btnInfo.text}
                </Link>
            </div>
        </>
    )
}

export default InfoBox