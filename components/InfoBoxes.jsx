import React from 'react'
import InfoBox from './InfoBox'

const InfoBoxes = () => {
  return (
    <section>
    <div className="container-xl lg:container m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
      <InfoBox title={'For Renters'}
        bgColor={'bg-gray-100'} 
        textBox={'Find your dream rental property. Bookmark properties and contact owners directly on the Property Hub.'}
        btnInfo = {{
            text: 'Brows Properties',
            link: '/properties',
            bgColor : 'bg-black'
        }}
        />
        <InfoBox title={'For Property Owners'}
        bgColor={'bg-blue-100'} 
        textBox={'List your properties and reach potential tenants. Rent ans an airbnb or long term monthly and yearly.'}
        btnInfo = {{
            text: 'Add Properties',
            link: '/properties/add',
            bgColor : 'bg-blue-700'
        }}
        />
        </div>
      </div>
  </section>
  )
}

export default InfoBoxes