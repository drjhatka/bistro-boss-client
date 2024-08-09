import { createContext, useState } from "react";
import useAxios from "../Axios/useAxios";
import { useQuery } from "@tanstack/react-query";

export const DataContext = createContext(null)

const DataProvider = ({children}) => {
    const axiosSecure = useAxios()
    const [menuData, setMenuData] = useState([])

    const {data, isLoading, refetch} = useQuery({
        queryKey:['menus'],
        queryFn:()=>{
            axiosSecure.get('/menus').then(data=>{
                setMenuData(data.data)
            })
            return data.data
        }
    })

    const dataInfo={
        menuData,
        setMenuData
    }

    return <DataContext.Provider value={dataInfo}>
            {children}
            </DataContext.Provider>
};

export default DataProvider;