import Link from 'next/link'
import React from 'react'

const notFound = () => {
    return (
        <>
            <div class="bg-gray-100 flex h-[83.5vh] items-center justify-center ">
                <div class="bg-white p-8 rounded-lg shadow-lg max-w-md mx-6">
                    <h1 class="text-4xl font-bold text-gray-800 mb-8">404 - Page Not Found</h1>
                    <p class="text-gray-600 mb-6">The page you are looking for might have been removed, had its name changed or is
                        temporarily unavailable.</p>
                    <Link href="/" class="inline-block py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold">Go
                        back to homepage</Link>
                </div>
            </div>
        </>
    )
}

export default notFound