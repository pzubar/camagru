window.onload = function () {
	const queryParams = {
		page: 1,
		limit: 10
	};
	const wrapper = document.getElementById("wrapper");
	const container = document.querySelector('#publications-container');


	function renderPublications(publications) {
		publications.map((i) => {
			const {username, postdate, filename, is_liked, likes_count, id} = i;
			container.innerHTML +=
				`<div class="container">
					<div class="row justify-content-md-center">
						<div class="card col-md-8 col-sm-11 col-xs-11 col-lg-8 post-container">
							<div class="post-meta">
								<div class="post-author">
								${username}
								</div>
								<span class="post-date">
									<small>
										${postdate}
									</small>
								</span>
							</div>
							<img src='${filename}'>
							<span style="padding: 5px">
							    <i class="far fa-comment comment-button" style="margin-right: 3px;cursor: pointer"></i>
							    <i class="fa${is_liked ? 's' : 'r'} fa-heart like-button" style="cursor: pointer"></i>
							    <span style="padding: 0 2px ">${likes_count}</span>
							</span>
							<div class="comment-container hidden"  style="margin: 3px;">
								<form action="/photos/comment" method="post" class="comment-form" onsubmit="submitCommentForm(event)">
									<textarea rows="4" style="min-height: 30px;" class="form-control" name="comment" placeholder="Comment..."></textarea>
									<input type="hidden" name="post-id" value="${id}">
									<button class="btn btn-sm btn-outline-primary" style="margin-top: 5px" type="submit" onclick="">Comment</button>
								</form>
							</div>
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
		if (wrapper.scrollTop + wrapper.offsetHeight + 1000 >= container.offsetHeight)
			fetchPublications();
	}

	wrapper.addEventListener("scroll", scrollHandler);

	fetchPublications();

	window.onclick = function (event) {
		const target = event.target;

		if (!target.classList.contains("comment-button"))
			return;
		const container = target.closest('.post-container');
		if (!container)
			return;
		const commentBox = container.querySelector('.comment-container');
		if (!commentBox)
			return;
		commentBox.classList.toggle('hidden');
		const textarea = commentBox.querySelector('textarea');

		if (!commentBox.classList.contains("hidden"))
			textarea.focus();
		else
			textarea.blur()
	};
};


function submitCommentForm(event) {
	debugger;
	const target = event.target;
	event.preventDefault();

	const {action, method} = target;
	fetch(action, {
		method: method,
		body: new FormData(target),
		// redirect: "follow"
	})
		.then((response) => {
			debugger;
			if (!response.ok) {
				throw "Response status was not ok: " + response.status;
			}
			else
				return response.json();
		})

		.then(function (response) {
			debugger;
			if (response['status'] && response['status'] === "redirect")
				window.location = response['url'];
			if (response.status && response.status !== "success")
				alert(response.message)
		})
		.catch(function (err) {
			console.log('Fetch Error. ', err);
		});
}
