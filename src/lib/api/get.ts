import { getData } from "../mutation"

export const getuserHotelsData = async(userId: string) => {
    return getData(`/api/hotels/${userId}`)
}

export const allHotelsData = async() => {
    return getData(`/api/hotels`)
}

export const singleHotelData = async(id: string) => {
    return getData(`/api/hotels/single/${id}`)
}

export const userTransiction = async(id: string) => {
    return getData(`/api/hotels/customer/transiction/${id}`)
}

export const userBooking = async(id: string) => {
    return getData(`/api/hotels/customer/transiction/booking/${id}`)
}

export const adminTransictions = async() => {
    return getData(`/api/hotels/transiction/colection`)
}

export const adminBooking = async() => {
    return getData(`/api/hotels/admin/booking`)
}

export const manageUsers = async() => {
    return getData(`/api/users`)
}

export const manageHotels = async() => {
    return getData(`/api/admin/hotels`)
}

export const adminPlanPro = async() => {
    return getData(`/api/admin/hotels/plan`)
}

export const adminIsBlock = async() => {
    return getData(`/api/admin/block`)
}