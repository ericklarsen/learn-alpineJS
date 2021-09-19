async function requestData(url) {
    return await axios(url)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err
        })
}

document.addEventListener('alpine:init', () => {
    // console.log('alpine init')
    Alpine.store('news', {
        loading: false,
        error: "",
        data: [],
        async init() {
            this.onLoad('bbc-news')
        },
        async onLoad(type) {
            const store = Alpine.store('news')
            if (!store.loading) {
                store.loading = true;

                const fetch = await requestData('https://berita-indo-api.vercel.app/v1/' + type)
                store.loading = false;

                if (fetch instanceof Error) {
                    console.log('Error')
                    store.error = fetch
                } else {
                    console.log(fetch.data.data)
                    store.data = fetch.data.data
                }
            }
        }
    })
})