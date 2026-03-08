const mainData = () => {
    fetch(`https://anime-52248-default-rtdb.firebaseio.com/anime.json`)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.dir(json);
        });
};

mainData();