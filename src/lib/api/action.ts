import { postPatch } from "../mutation"

export const addHotel = async(v: unknown) => {
    return postPatch(`/api/hotels`,v,'POST')
}

export const hotelEdit = async(v: unknown, hotelId: string) => {
    console.log(v,hotelId)
    return postPatch(`/api/hotels/edit/${hotelId}`,v,'PATCH')
}