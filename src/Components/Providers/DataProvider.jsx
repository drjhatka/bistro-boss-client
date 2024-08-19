import { createContext, useState } from "react";
import useAxios from "../Axios/useAxios";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const DataContext = createContext(null)

const DataProvider = ({ children }) => {
    const axiosSecure = useAxios()
    //console.log(axiosSecure.get('/menus').then(data =>console.log('secure ', data.data)))
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['menus'],
        queryFn: async () => {
            const result = await axios.get('http://localhost:5000/menus').then(data => {return data.data})
            return result

        }
    })
    console.log('data ', data)
    const dataInfo = {
        data,
        isLoading
    }

    return <DataContext.Provider value={dataInfo}>
        {children}
    </DataContext.Provider>
};

export default DataProvider;