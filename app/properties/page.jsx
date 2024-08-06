import PropertyCard from '@/components/PropertyCard';
import connectDB from '@/config/database';

import Property from '@/models/Property';

const PropertiesPage = async () => {
  await connectDB();
  const properties = await Property.find().lean();
  
  return (
    <>
      <section className='px-4 py-6'>
        <div className='container m-auto px-4 py-6'>
          {properties.length === 0 ? (<p>No Properties </p>) : (
            <div className='grid grid-clos-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {
                properties.map ((property) => (
                  <PropertyCard key={property._id} property={property}/>
                ))
                }
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default PropertiesPage