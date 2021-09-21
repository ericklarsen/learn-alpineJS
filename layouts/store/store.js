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
    Alpine.store('list2', {
        loading: false,
        error: "",
        data: [{
            id: 1,
            url: "cnbc-news",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/CNBC_logo.svg/2560px-CNBC_logo.svg.png"
        },
        {
            id: 2,
            url: "republika-news",
            image: "https://globalprestasi.sch.id/images/republika.png"
        },
        {
            id: 3,
            url: "okezone-news",
            image: "https://pngimage.net/wp-content/uploads/2018/06/okezone-png-5.png"
        },
        {
            id: 4,
            url: "kumparan-news",
            image: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_320/v1606836797/szedbshhhmsmebk6cs5y.png"
        },
        {
            id: 5,
            url: "tribun-news",
            image: "https://pbs.twimg.com/profile_images/1252799645610205189/PgLokJMF_400x400.png"
        }
        ],
    })

    Alpine.store('list', {
        data: [
            {
                id: 1,
                url: "cnbc-news",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/CNBC_logo.svg/2560px-CNBC_logo.svg.png"
            },
            {
                id: 2,
                url: "republika-news",
                image: "https://globalprestasi.sch.id/images/republika.png"
            },
            {
                id: 3,
                url: "okezone-news",
                image: "https://pngimage.net/wp-content/uploads/2018/06/okezone-png-5.png"
            },
            {
                id: 4,
                url: "kumparan-news",
                image: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_320/v1606836797/szedbshhhmsmebk6cs5y.png"
            },
            {
                id: 5,
                url: "tribun-news",
                image: "https://pbs.twimg.com/profile_images/1252799645610205189/PgLokJMF_400x400.png"
            },
        ]
    })

    Alpine.store('news', {
        loading: false,
        error: "",
        data: [{
            id: 1,
            title: "Test",
            contentSnippet: "hELOOO"
        }],
        async init() {
            this.onLoad('cnbc-news')
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