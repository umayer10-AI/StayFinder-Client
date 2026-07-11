import { getData } from "../mutation"

export const userHotelsData = async() => {
    return getData('/api/hotels')
}