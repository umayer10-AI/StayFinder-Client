import { postPatch } from "../mutation"

const addHotel = async(v) => {
    return postPatch('/api/hotels',v,'POST')
}