export const handleHttp = async (url, options = {}) => {
    
    try {        
        const res = await fetch(url, options)
        if (!res.ok) throw new Error('No se pudo concretar la petición', res.status)
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }

}