const mainData = () => {

    const renderAnimeList = (array, ganres) => {

    };

    const renderTopAnime = (array) => {
        const wrapper = document.querySelector('.filter__gallery');

        wrapper.innerHTML = '';
        array.forEach(elem => {
            // wrapper.insertAdjacentHTML('afterbegin', `
            //     <div class="product__sidebar__view__item set-bg mix" data-setbg="${elem.image}" style="backgroundImage: url(${elem.image})">
            //         <div class="ep">${elem.rating} / 10</div>
            //         <div class="view"><i class="fa fa-eye"></i> ${elem.views}</div>
            //         <h5><a href="/anime-details.html">${elem.title}</a></h5>
            //     </div>
            // `);
            wrapper.insertAdjacentHTML('afterbegin', `
                <div class="product__sidebar__view__item set-bg mix" data-setbg="${elem.image}">
                    <div class="ep">${elem.rating} / 10</div>
                    <div class="view"><i class="fa fa-eye"></i> ${elem.views}</div>
                    <h5><a href="/anime-details.html">${elem.title}</a></h5>
                </div>
            `);
        });

        wrapper.querySelectorAll('.set-bg').forEach(elem => {
            elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
        });
    };

    fetch(`https://anime-52248-default-rtdb.firebaseio.com/anime.json`)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            const ganres = new Set();
            renderTopAnime(json.sort((a, b) => b.views - a.views).slice(0, 5));
            json.forEach(item => {
                ganres.add(item.ganres);
            })
            renderAnimeList(json, ganres);
        });
};

mainData();