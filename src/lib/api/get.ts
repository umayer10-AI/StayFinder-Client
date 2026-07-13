import { getData } from "../mutation"

const BaseUrl = process.env.NEXT_PUBLIC_SERVER_API;

export const getuserHotelsData = async(userId: string, token: string) => {
    const res = await fetch(`${BaseUrl}/api/hotels/${userId}`,{
        headers: {
            authorization: `Bearer ${token}`,
            cache: 'no-store'
        }
    })
    return res.json()
}

export const allHotelsData = async() => {
    return getData(`/api/hotels`)
}

export const singleHotelData = async(id: string) => {
    return getData(`/api/hotels/single/${id}`)
}

export const userTransiction = async(id: string, t: unknown) => {
    const res = await fetch(`${BaseUrl}/api/hotels/customer/transiction/${id}`,{
        headers: {
            authorization: `Bearer ${t}`,
            cache: 'no-store'
        }
    })
    return res.json()
}

export const userBooking = async(id: string) => {
    return getData(`/api/hotels/customer/transiction/booking/${id}`)
}

export const adminTransictions = async(t: unknown) => {
    const res = await fetch(`${BaseUrl}/api/hotels/transiction/colection`,{
        headers: {
            authorization: `Bearer ${t}`,
            cache: 'no-store'
        }
    })
    return res.json()
}

export const adminBooking = async() => {
    return getData(`/api/hotels/admin/booking`)
}

export const manageUsers = async(t: unknown) => {
    const res = await fetch(`${BaseUrl}/api/users`,{
        headers: {
            authorization: `Bearer ${t}`,
            cache: 'no-store'
        }
    })
    return res.json()
}

export const manageHotels = async(t: unknown) => {
    const res = await fetch(`${BaseUrl}/api/admin/hotels`,{
        headers: {
            authorization: `Bearer ${t}`,
            cache: 'no-store'
        }
    })
    return res.json()
}

export const adminPlanPro = async() => {
    return getData(`/api/admin/hotels/plan`)
}

export const adminIsBlock = async() => {
    return getData(`/api/admin/block`)
}