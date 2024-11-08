const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch all properties
async function fetchProperties () {

  try {
    // handle case where domain is not available yet
    if (!apiDomain) {
      return []
    }

    const res = await fetch(`${apiDomain}/properties`)
    if(!res.ok) {
      throw new Error("failed to fetch properties data")
    }

    return res.json();
  } catch (error) {
    console.log(error)
    return [];
  }
}

// Fetch single property
async function fetchProperty (id) {

  try {
    // handle case where domain is not available yet
    if (!apiDomain) {
      return null
    }

    const res = await fetch(`${apiDomain}/properties/${id}`)
    if(!res.ok) {
      throw new Error("failed to fetch properties data")
    }

    return res.json();
  } catch (error) {
    console.log(error)
    return null;
  }
}

export {fetchProperties, fetchProperty};