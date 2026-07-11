const BaseUrl = process.env.NEXT_PUBLIC_SERVER_API;

export const postPatch = async (
  path: string,
  v: unknown,
  methodData: string = "POST"
) => {

  const res = await fetch(`${BaseUrl}${path}`, {
    method: methodData,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(v),
  });

  const data = await res.json();
  return data;
};


export const getData = async(path: string) => {
    const res = await fetch(`${BaseUrl}${path}`)
    return res.json()
}