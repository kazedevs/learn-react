import React, { useEffect, useState } from 'react'

function Github() {
    const [apidata, setApiData] = useState({})

    useEffect(() => {
        fetch("https://api.github.com/users/kazedevs")
        .then((res) => res.json())
        .then((apiData) => {
            console.log(apiData)
            setApiData(apiData)
        })
    }, [])
  return (
    <div className='text-center bg-gray-600 text-white p-4 text-2xl'>Github Followers: {apidata.followers} 
    <img src={apidata.avatar_url} alt="Github pfp" width={100} height={100} className='rounded-full mx-auto block'/>
    </div>
    
  )
}

export default Github