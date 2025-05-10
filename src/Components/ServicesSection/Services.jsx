import React from 'react'

export const Services = () => {
    const allData = [
        {
            id: 1,
            title: "New here? Get your first-timer discount",
            bgColo: '#eee224'
        },
        {
            id: 2,
            title: 'Download our app for exclusive discount and the latest drops.',
            bgColo: '#96e5da'
        },
        {
            id: 3,
            title: "Worldwide Quick delivery any where ",
            bgColo: '#f485e7'
        },
        {
            id: 4,
            title: 'Easy returns & Easy Refunds',
            bgColo: '#3fef68'
        }
    ]
    
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mb-10'>
            {allData.map((item) => (
                <div key={item.id}>
                    <h2
                     className='px-6 py-9 shadow-md text-3xl text-center h-[190px] text-black font-bold font-sans' 
                    style={{backgroundColor: item.bgColo}}
                    >{item.title}</h2>
                </div>
            ))}
        </div>
    )
}