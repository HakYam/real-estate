import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBed, FaBath, FaMoneyBill, } from 'react-icons/fa';
import { BiSolidArea } from 'react-icons/bi';
import { IoMdPin } from "react-icons/io";


const PropertyCard = ({ property }) => {

    const getRateDisplay = () => {
        const { rates } = property;
        const rateDisplay = [];
    
        if (rates.monthly) {
          rateDisplay.push(`$${rates.monthly.toLocaleString()}/mo`);
        }
        if (rates.weekly) {
          rateDisplay.push(`$${rates.weekly.toLocaleString()}/week`);
        }
        if (rates.nightly) {
          rateDisplay.push(`$${rates.nightly.toLocaleString()}/night`);
        }
    
        return rateDisplay.join(' | ');
      };

    return (
        <>
            <div className="rounded-xl shadow-md relative">
                <Image
                    src={`/images/properties/${property.images[0]}`}
                    alt=""
                    className="w-full h-auto rounded-t-xl"
                    width={0}
                    height={0}
                    sizes='100vw'
                />
                <div className="p-4">
                    <div className="text-left md:text-center lg:text-left mb-6">
                        <div className="text-gray-500">{property.type}</div>
                        <h3 className="text-xl font-bold text-gray-600">{property.name}</h3>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div
                            className="absolute top-[10px] right-[10px] bg-black bg-opacity-60 px-4 py-2 rounded-lg text-white lg:text-sm text-sm font-bold text-right md:text-center lg:text-right"
                        >
                            {getRateDisplay()}
                        </div>

                        
                    </div>
                    {/* Simplified the repetitive structure for icons */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pb-4">
                        <div className="text-center">
                            <div className="flex  items-center">
                                <span className="font-bold mt-3 text-lg text-gray-500">{property.beds}</span>
                                <FaBed className="inline ml-1 mt-1 text-gray-500" />
                            </div>
                            <p className="text-gray-400">Beds</p>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center">
                                <span className="font-bold mt-3 text-lg text-gray-500">{property.baths}</span>
                                <FaBath className="inline ml-1 mt-1 text-gray-500" />
                            </div>
                            <p className="text-gray-400">Baths</p>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center">
                                <span className="font-bold mt-3 text-lg text-gray-500">{property.square_feet}</span>
                                <BiSolidArea className="inline ml-1 mt-1 text-gray-500" />
                            </div>
                            <p className="text-gray-400">sqft</p>
                        </div>
                    </div>

                    <div
                        className="flex justify-center gap-4 text-green-900 text-sm mb-4"
                    >
                        <p><FaMoneyBill className='inline' /> Weekly</p>
                        <p><FaMoneyBill className='inline' /> Monthly</p>
                    </div>

                    <div className="border border-gray-100 mb-5"></div>

                    <div className="flex flex-col lg:flex-row justify-between mb-4">
                        <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                            <IoMdPin className='text-orange-700' />
                            <span className="text-orange-700"> {property.location.city} {property.location.state} </span>
                        </div>
                        <Link
                            href={`/properties/${property._id}`}
                            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 pt-2 rounded-lg text-center text-sm"
                        >
                            Details
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PropertyCard;