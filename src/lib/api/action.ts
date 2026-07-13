import { deleteData, postPatch } from "../mutation"

export const addHotel = async(v: unknown, t:unknown) => {
    // console.log(t)
    return postPatch(`/api/hotels`,v,'POST',t)
}

export const hotelEdit = async(v: unknown, hotelId: string, t:unknown) => {
    return postPatch(`/api/hotels/edit/${hotelId}`,v,'PATCH',t)
}

export const hotelDeleteBtn = async(hotelId: string, t:unknown) => {
    return deleteData(`/api/hotels/delete/${hotelId}`, 'DELETE', t)
}

export const bookingDeleteBtn = async(id: string, t:unknown) => {
    return deleteData(`/api/hotels/customer/transiction/booking/delete/${id}`,'DELETE',t)
}

export const subscriptionWork = async(v: unknown) => {
    return postPatch(`/api/subscription`,v,'POST')
}

export const payment = async(v: unknown) => {
    return postPatch(`/api/payment`,v,'POST')
}