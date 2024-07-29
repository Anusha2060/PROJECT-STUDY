import React, { useEffect } from 'react'
import Banner from "../Components/UI/banner";
import { LuLamp } from "react-icons/lu";
function Services() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const servicedata=[
    {
      title:'Reduce costs to a minimum',
      description:'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      image: <LuLamp/>
    },
    {
      title:'Reduce costs to a minimum',
      description:'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      image: <LuLamp/>
    },
    {
      title:'Reduce costs to a minimum',
      description:'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      image: <LuLamp/>
    },
    {
      title:'Reduce costs to a minimum',
      description:'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      image: <LuLamp/>
    },
    {
      title:'Reduce costs to a minimum',
      description:'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      image: <LuLamp/>
    },
    {
      title:'Reduce costs to a minimum',
      description:'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      image: <LuLamp/>
    },
    {
      title:'Reduce costs to a minimum',
      description:'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      image: <LuLamp/>
    },
    {
      title:'Reduce costs to a minimum',
      description:'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      image: <LuLamp/>
    }
  ]
  return (
  
    <div>
      <Banner>
        <div className="h-full w-full flex flex-col justify-center items-center gap-3 text-white">
          <div className="capitalize text-5xl font-bold playflair">Services</div>
          <div className="w-5/12 text-md text-center">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </div>
        </div>
      </Banner>
      <div className='w-10/12 mx-auto pt-14 flex flex-col gap-10'>
        <div className='py-8 text-center text-5xl font-bold capitalize playflair'>Our services includes...</div>
        <div className='grid grid-cols-4 gap-14'>
          {
            servicedata.map((val,i)=>{
              return(
                <div className="flex flex-col gap-6 justify-center items-center">
                  <div className='h-20 w-20 rounded-full bg-orange-100 text-orange-500 text-3xl flex justify-center items-center'>{val.image}</div>
                  <div className='flex flex-col gap-2'>
                    <div className='text-center font-semibold text-xl playflair'>{val.title}</div>
                    <div className='text-center text-gray-600 text-sm'>{val.description}</div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>

  )
}

export default Services