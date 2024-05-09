export async function fetcher(url) {
    try {
        const res = await fetch(url, {
            headers: {
                'Authorization': process.env.PEXELS_API_KEY,
            }
        });
        return await res.json();
    } catch (err) {
        console.error(err);
    }
}

export async function fetchCuratedPhotos(page, perPage) {
    const queryParams = `page=${page || 1}&per_page=${perPage || 10}`
    return await fetcher(`${process.env.PEXELS_API_URL}/curated?${queryParams}`);
}

export async function fetchPhoto(id) {
    return await fetcher(`${process.env.PEXELS_API_URL}/photos/${id}`);
}
