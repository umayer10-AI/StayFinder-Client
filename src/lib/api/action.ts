import { postPatch } from "../mutation"

export const addHotel = async(v: unknown) => {
    return postPatch('/api/hotels',v,'POST')
}