import { createContext, useContext } from "react";
import { ApiClient } from "./ApiClient";


const apiKey = '7c51ce5f51b2a0e2bb3bf45b2afaa9ae';
const apiClient = new ApiClient(apiKey);
const apiClientContext = createContext<ApiClient>(apiClient);


export function ApiClientProvider({children} : {children: React.ReactNode})
{
    return (
        <apiClientContext.Provider value={apiClient}>
            {children}
        </apiClientContext.Provider>
    )
}

export default function useApiClient() {
    return useContext(apiClientContext);
}