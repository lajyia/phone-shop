import { useMemo } from "react"

export const useTotalPrice = (phones) =>{
    let total = 0;
    const result = useMemo(() =>{
        for (let i=0; i < phones.length; i++){
            total+=phones[i].price;
        }
        return total;
    }, [phones])
    return result
}