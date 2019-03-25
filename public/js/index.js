window.onload = function () {
	const queryParams = {
		page: 1,
		limit: 5
	};
	const wrapper = document.getElementById("wrapper");
	const container = document.querySelector('#publications-container');

	function renderPublications(publications) {
		publications.map((item) => {
			const {author_name, postdate, filename, likes_count, id, comments, likes_authors: likes} = item;
			const is_liked = (window.$uId && likes.includes(window.$uId));
			let commentsHTML = '';
			comments.map(i => commentsHTML += `<p><i>${i['author']}:</i> ${escapeText(i[['text']])}</p>`);
			container.innerHTML +=
				`<div class="container">
					<div class="row justify-content-md-center">
						<div class="card col-md-8 col-sm-11 col-xs-11 col-lg-8 post-container">
							<div class="post-meta">
								<div class="post-author">
								${author_name}
								</div>
								<span class="post-date">
									<small>
										${postdate}
									</small>
								</span>
							</div>
							<img src='${filename}'>
							<div class="container" style="margin: 10px 0">
							    <i class="far fa-comment comment-button" style="margin-right: 3px;cursor: pointer"></i>
							    <i class="fa${is_liked ? 's' : 'r'} fa-heart like-button" style="cursor: pointer" id="${id}"></i>
							    <span style="padding: 0 2px " class="likes-counter">${likes_count}</span>
							</div>
							<div class="comment-container hidden container" >
								<form action="/photos/comment" method="post" class="comment-form" onsubmit="submitCommentForm(event)">
									<textarea rows="4" style="min-height: 30px;" class="form-control" name="comment" placeholder="Comment..."></textarea>
									<input type="hidden" name="post-id" value="${id}">
									<button class="btn btn-sm btn-outline-primary" style="margin-top: 5px" type="submit" onclick="">Comment</button>
								</form>
							</div>
							<div class="comments-container container">${commentsHTML}</div>
						</div>
					</div>
				</div>`
		});
	}

	function fetchPublications() {
		const container = document.getElementsByClassName('post-container');

		if (container && container.length >= postsNum)
			return;
		fetch(`posts?page=${queryParams.page}`)
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

	if (!postsNum) {
		container.innerHTML = '<div class="container" style="margin-top: 20%"><div class="row justify-content-md-center">There are no photos yet :( <br><a href="/photos/new"> Be the first who posts!</a></div></div>';
	}
	else
		fetchPublications();

	window.onclick = function (event) {
		const target = event.target;
		const classList = target.classList;

		if (classList.contains('like-button'))
			handleLikePress(target, classList);
		if (!classList.contains("comment-button"))
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

function handleLikePress(target, classList) {
	const formData = new FormData();
	formData.append('id', target.id);
	fetch('/photos/like', {
		method: 'POST',
		body: formData,
	}).then((response) => {
		if (!response.ok) {
			throw "Response status was not ok: " + response.status;
		}
		else
			return response.json();
	}).then(function (response) {
		if (response['status'] && response['status'] === "redirect") {
			window.location.replace(response.message);
		}
		else if (response['status'] && response['status'] !== "success")
			alert(response.message);
		else {
			const likesCounter = target.parentNode.querySelector('.likes-counter');

			likesCounter.innerHTML = String(Number(likesCounter.innerText) + (classList.contains('far') ? 1 : -1));
			classList.toggle('fas');
			classList.toggle('far');
		}
	}).catch(err => {
		console.log('Fetch Error. ', err);
	});
}

function submitCommentForm(event) {
	const target = event.target;
	const {action, method} = target;
	event.preventDefault();

	fetch(action, {
		method: method,
		body: new FormData(target),
	}).then((response) => {
		if (!response.ok) {
			throw "Response status was not ok: " + response.status;
		}
		else
			return response.json();
	}).then(function (response) {
		if (response['status'] && response['status'] === "redirect")
			window.location.replace(response.message);
		else if (response['status'] && response['status'] !== "success")
			alert(response.message);
		else {
			const container = target.closest('.post-container');
			const formContainer = container.querySelector('.comment-container');
			const commentsContainer = container.querySelector('.comments-container');

			formContainer.classList.toggle('hidden');
			commentsContainer.innerHTML += `<p><i>${window.$uName}:</i> ${target[0].value}</p>`;
			target[0].value = '';
		}
	}).catch(function (err) {
		console.log('Fetch Error. ', err);
	});
}

function escapeText(text) {
	return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
