
// $(document).ready(function() {
//     $('form').submit(function(event) {
//         var json;
//         event.preventDefault();
//         $.ajax({
//             type: $(this).attr('method'),
//             url: $(this).attr('action'),
//             data: new FormData(this),
//             contentType: false,
//             cache: false,
//             processData: false,
//             success: function(result) {
//                 json = jQuery.parseJSON(result);
//                 if (json.url) {
//                     window.location.href = json.url;
//                 } else {
//                     alert(json.status + ' - ' + json.message);
//                 }
//             },
//         });
//     });
// });
//
// let forms = document.getElementsByTagName('form');
//
// for (let i in forms)
// {

let a = document.querySelector('#login-page-form');

a.onsubmit = function(e) {
    e.preventDefault();
    //
    // let action = this.action;
    // let method = this.method;
    // let formData = new FormData(this);
    // let xhr = new XMLHttpRequest();
    // xhr.open(this.method, this.action, true);
    // xhr.send(formData);
    // xhr.onreadystatechange = function() {
    //     if (xhr.readyState === XMLHttpRequest.DONE) {
    //         // alert(xhr.responseText);
    //         let json = JSON.parse(xhr.responseText);
    //         window.location.replace(json.url);
    //         debugger;
    //     }
    // };

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

            // Examine the text in the response
            response.json().then(function(data) {

                console.log(data);
            });
        }
    )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
};

