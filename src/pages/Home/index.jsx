import axiosClients from "../../apis/axiosClients.js";
import { useEffect } from "react";

export  default  function HomePage () {
  const url = '/pokemon/ditto'

  const fetchData = async () => {
    return axiosClients.get(url)
  }
  const fetchData2 = async () => {
    return axiosClients.get(url)
  }

  useEffect(() => {
    fetchData().then(res => console.log(res))
    fetchData2().then(res => console.log(res))
  }, [])

  return (
    <div>
      <h1 className="w-2 text-xs">Home Page</h1>
    </div>
  )
}

