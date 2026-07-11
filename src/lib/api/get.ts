import { getData } from "../mutation"

export const getuserHotelsData = async(userId: string) => {
    return getData(`/api/hotels/${userId}`)
}