

export const getApiResourse = async (url) => {

    try {
        const res = await fetch(url);

        if (!res.ok) {
            console.error('Could not fetch: ', res.status);
            return false;
        }

        return await res.json();

    } catch (error) {
        console.error('Could not fetch: ', error.massege);
        return false;
    }

}

export const makeConcurrentRequest = async (url) => {
    const res = await Promise.all(url.map(res => {
        return fetch(res)
            .then(res => res.json())
    }));

    return res;
}