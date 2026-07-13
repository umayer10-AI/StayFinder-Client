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

// export const allHotelsData = async() => {
//     return getData(`/api/hotels`)
// }

export const allHotelsData = async (
  search = "",
  category = ""
) => {
  const params = new URLSearchParams();

  if (search) {
    params.append("search", search);
  }

  if (category) {
    params.append("category", category);
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/hotels?${params.toString()}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
};

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
