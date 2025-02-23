import {useGetProductByIdQuery} from '../app/service/dummyData'

const SpecificProduct = () => {
    const {data, isError, isLoading} = useGetProductByIdQuery(10)
    if(isError){
        return <h1>Oops!Something went wrong.</h1>
    }
    if(isLoading){
        return <h1>Loading...</h1>
    }
  return (
    <div>
        <h1>{data?.brand}</h1>
        <h1>{data?.category}</h1>
        <p>{data?.description}</p>
    </div>
  )
}

export default SpecificProduct