import { deleteData, postPatch } from "../mutation"

export const addHotel = async(v: unknown) => {
    return postPatch(`/api/hotels`,v,'POST')
}

export const hotelEdit = async(v: unknown, hotelId: string) => {
    return postPatch(`/api/hotels/edit/${hotelId}`,v,'PATCH')
}

export const hotelDeleteBtn = async(hotelId: string) => {
    return deleteData(`/api/hotels/delete/${hotelId}`, 'DELETE')
}