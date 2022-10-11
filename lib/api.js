export async function fetchAPI(url) {
  const res = await fetch(url);

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json;
}