const BaseUrl = process.env.NEXT_PUBLIC_SERVER_API;

export const postPatch = async (
  path: string,
  v: unknown,
  methodData: string = "POST",
  t?: unknown
) => {

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    cache: 'no-store'
  };

  if (t) {
    headers.authorization = `Bearer ${t}`;
  }

  const res = await fetch(`${BaseUrl}${path}`, {
    method: methodData,
    headers,
    body: JSON.stringify(v),
  });

  const data = await res.json();
  return data;
};


export const getData = async (path: string) => {
    const res = await fetch(`${BaseUrl}${path}`,{
      cache: 'no-store'
    })
    return res.json()
}


export const deleteData = async (path: string, methodData: string = "DELETE",t: unknown) => {
    const res = await fetch(`${BaseUrl}${path}`,{
        method: methodData,
        headers: {
          authorization: `Bearer ${t}`,
          cache: 'no-store'
        }
    })
    return res.json()
}