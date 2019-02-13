window.onload = function () {
	const queryParams = {
		page: 1,
		limit: 10
	};
	const wrapper = document.getElementById("wrapper");
	const container = document.querySelector('#publications-container');

	function renderPublications(publications) {
		publications.map((i) => {
			container.innerHTML +=
				`<div class="container">
					<div class="row justify-content-md-center">
						<div class="card col-md-12 post-container">
							<div class="post-meta">
								<div class="post-author">
								${i.username}
								</div>
								<span class="post-date">
									<small>
										${i.postdate}
									</small>
								</span>
							</div>
							<img src='${i.filename}'>
						</div>
					</div>
				</div>`
		});
	}

	function fetchPublications() {
		fetch(`posts?page=${queryParams.page}`,)
			.then(response => {
				if (!response.ok)
					throw new Error("Error!");
				return response.json();
			})
			.then(response => {
				// debugger;
				const {message} = response;
				const publications = JSON.parse(message);

				renderPublications(publications);
			})
			.catch(error => {
				console.log("Error ", error);
			});
		queryParams.page++;
	}


	function scrollHandler() {
		// console.log(wrapper.scrollTop + wrapper.offsetHeight + 00, container.offsetHeight);
		if (wrapper.scrollTop + wrapper.offsetHeight + 1000 >= container.offsetHeight)
			fetchPublications();
	}

	wrapper.addEventListener("scroll", scrollHandler);

	// hook the scroll handler to scroll event
	// addEvent(wrapper,"scroll", scroller);

	fetchPublications();
};

