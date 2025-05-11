import React from 'react'

export const Services = () => {
    const allData = [
        {
            id: 1,
            title: "New here? Get your first-timer discount",
            bgColor: '#eee224'
        },
        {
            id: 2,
            title: 'Download our app for exclusive discount and the latest drops.',
            bgColor: '#96e5da'
        },
        {
            id: 3,
            title: "Worldwide Quick delivery anywhere",
            bgColor: '#f485e7'
        },
        {
            id: 4,
            title: 'Easy returns & Easy Refunds',
            bgColor: '#3fef68'
        }
    ]
    
    return (
        <div className='container mx-auto px-4 mb-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
                {allData.map((item) => (
                    <div key={item.id} className='flex'>
                        <div
                            className='px-4 py-6 md:px-6 md:py-9 shadow-md rounded-lg text-xl sm:text-2xl lg:text-3xl text-center w-full flex items-center justify-center min-h-[150px] md:min-h-[190px] text-black font-bold font-sans transition-transform hover:scale-[1.02]'
                            style={{backgroundColor: item.bgColor}}
                        >
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}