import React from 'react'

function Card({price="not set"}) {
  return (
    <div className="w-full sm:w-72 md:w-80 lg:w-96 flex flex-col rounded-xl bg-black min-h-[19rem] transition-all duration-300 hover:shadow-xl">
      <div className="w-full">
        <img
          src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
          alt="test"
          className="w-full h-48 sm:h-56 md:h-64 object-cover object-center rounded-t-xl"
        />
      </div>
      <div className="flex flex-col p-4 sm:p-5 md:p-6 pb-10">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-sm sm:text-base md:text-lg truncate max-w-[60%]">Bored ape nft accidental</h2>
          <h3 className="text-sm sm:text-base md:text-lg">Price</h3>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-sm sm:text-base text-gray-300">#345</p>
          <p className="text-sm sm:text-base text-gray-300">{price}</p>
        </div>
      </div>
    </div>
  )
}

export default Card

