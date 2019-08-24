let lastRequest;
let api_key = '3631da5fba4115a4ce320e971a2fdadb';

const handleSearch = () => {
	let query = event.target.value;
	if (query.length >= 3 || (event.keyCode === 13 && query !== lastRequest)) {
		lastRequest = query;
		fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`)
			.then((res) => res.json())
			.then((res) => printQueryResults(res.results));
	}
};

const printQueryResults = (movies) => {
	const container = document.getElementById('search-results');
	container.innerHTML = '';

	movies.forEach((mov) => {
		let movie = document.createElement('a');
		let title = mov.title === mov.original_title ? mov.title : `${mov.title} (${mov.original_title})`;
		movie.innerText = title;
		movie.href = '#';
		movie.onclick = () => openModal(mov);
		container.appendChild(movie);
	});
};

// ejemplo de como pasar el dato de una peli al modal
const openModal = (mov) => {
	console.log(mov);
	const container = document.getElementById('modal-content');
};

const searchCategory = (category) => {
	fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${api_key}`)
		.then((res) => res.json())
		.then((res) => printCategoryResults(res.results));
};

const printCategoryResults = (movies) => {
	let container = document.getElementById('categories-results');
	container.innerHTML = '';

	movies.forEach((mov) => {
		let movie = document.createElement('a');
		movie.innerText = mov.title;
		movie.onclick = () => openModal(mov);
		container.appendChild(movie);
	});
};
