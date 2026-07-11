const BaseUrl = process.env.PUBLIC_SERVER_API

export const postPatch = async(path,v,method='POST') => {
    const res = await fetch(`${BaseUrl}${path}`,{
        method: method,
        headers: {
            'content-type' : 'application.json'
        },
        body: JSON.stringify(v)
    })
    const data = await res.json()
    return data
}