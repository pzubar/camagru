const form = document.querySelector('#register-form');

form.onsubmit = function(e) {
    e.preventDefault();
    fetch(this.action, {
        method: this.method,
        body: new FormData(this),
    }).then(
        function(response) {
            debugger;
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }

            response.json().then(function(data) {

                console.log(data);
            });
        }
    )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
};
