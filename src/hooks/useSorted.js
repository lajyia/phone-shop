import { useMemo } from "react"
import { useSelector } from "react-redux"



export const useSorted = (products, sort) =>{

    const exists = useSelector(state => state.exists.exists);

    const sortedProducts = useMemo(() =>{
        if (sort){
            if (sort == "price"){
                return [...products].sort((a, b) => a.price - b.price)
            }
            else{
                return products.filter(phone => exists[phone.name] > 0)
            }
        }
        return products;
    }, [products, sort, exists])

    return sortedProducts;
}