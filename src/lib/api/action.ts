import { postPatch } from "../mutation"

export const addHotel = async(v: unknown, userId: string) => {
    return postPatch(`/api/hotels/${userId}`,v,'POST')
}