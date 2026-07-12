import { getData } from "../mutation"

export const getuserHotelsData = async(userId: string) => {
    return getData(`/api/hotels/${userId}`)
}

export const allHotelsData = async() => {
    return getData(`/api/hotels`)
}