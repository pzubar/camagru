window.onload = function () {
    const queryParams = {
        page: 1,
        limit: 10
    };
    const wrapper = document.getElementById("wrapper");
    const container = document.querySelector('#publications-container');

    function renderPublications(publications) {
        publications.map((i) => {
            console.log(i);
            container.innerHTML +=
                `<div class="container">
					<div class="row justify-content-md-center">
						<div class="card col-md-10 post-container">
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
							<span style="padding: 5px">
							    <i class="far fa-comment comment-button" style="margin-right: 3px;cursor: pointer"></i>
							    <i class="fa${i.is_liked ? 's' : 'r'} fa-heart like-button" style="cursor: pointer"></i>
							    <span style="padding: 0 2px ">${i.likes_count}</span>
							</span>
							<div class="comment-container hidden"  style="margin: 3px;">
                                <form action="/post/comment" class="comment-form">
                                    <textarea rows="4" class="form-control" name="comment" placeholder="Comment..."></textarea>
                                <button class="btn btn-xs btn-outline-primary" type="submit">Comment</button>
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

