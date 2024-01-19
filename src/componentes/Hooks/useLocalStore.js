import { useState } from "react";
export function useLocalStorage(key, inicial) {
    
    const [storedValue, setStorageValue] = useState(() => {
        try {
            const item = localStorage.getItem(key)
            return item? JSON.parse(item) : inicial
        }
        catch(error) {
            return inicial
        }
    })

    const setValue = value => {
        try {
            setStorageValue(value)
            localStorage.setItem(key, JSON.stringify(value))
        }
        catch(error) {
            throw new Error(error)
        }
    }
    return [storedValue, setValue]
}