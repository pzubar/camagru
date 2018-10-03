<?php include('config/setup.php'); ?>
<?php include('functions.php'); ?>
<!DOCTYPE html>
<html>
<head>
	<title>Camagru</title>
	<style type="text/css">
        /*.drag { position: relative; }

         */
        .box {
            width: 50px;
            height: 50px;
            background-color: antiquewhite;
            z-index: 999;
        }
	</style>
</head>
<body>
<a href="login/login-form.php"><button class="headBtn">Sign in</button></a>
<a href="login/register-form.php"><button class="headBtn">Sign up for free</button></a>


<video id="video" width="640" height="480" autoplay>

</video>



<button id="snap">Snap Photo</button>
<div id="ft_list"   style="height:1000px;overflow:auto;"></div>



<div id="demo" class="drag">
	<h2>
		Let AJAX change this text
	</h2>
  	<button type="button" onclick="loadDoc()">
  		Change Content
      </button>
      </div>

<?php 

//var_dump($_SERVER);
?>

<
<script type="text/javascript">
    /*
    var _startX = 0;            // mouse starting positions
    var _startY = 0;
    var _offsetX = 0;           // current element offset
    var _offsetY = 0;
    var _dragElement;           // needs to be passed from OnMouseDown to OnMouseMove
    var _oldZIndex = 0;         // we temporarily increase the z-index during drag
    var _debug = $('debug');    // makes life easier


    InitDragDrop();

    function InitDragDrop()
    {
        document.onmousedown = OnMouseDown;
        document.onmouseup = OnMouseUp;
    }

    function OnMouseDown(e)
    {
        // IE is retarded and doesn't pass the event object
        if (e == null)
            e = window.event;

        // IE uses srcElement, others use target
        var target = e.target != null ? e.target : e.srcElement;

        _debug.innerHTML = target.className == 'drag'
            ? 'draggable element clicked'
            : 'NON-draggable element clicked';

        // for IE, left click == 1
        // for Firefox, left click == 0
        if ((e.button == 1 && window.event != null ||
            e.button == 0) &&
            target.className == 'drag')
        {
            // grab the mouse position
            _startX = e.clientX;
            _startY = e.clientY;

            // grab the clicked element's position
            _offsetX = ExtractNumber(target.style.left);
            _offsetY = ExtractNumber(target.style.top);

            // bring the clicked element to the front while it is being dragged
            _oldZIndex = target.style.zIndex;
            target.style.zIndex = 10000;

            // we need to access the element in OnMouseMove
            _dragElement = target;

            // tell our code to start moving the element with the mouse
            document.onmousemove = OnMouseMove;

            // cancel out any text selections
            document.body.focus();

            // prevent text selection in IE
            document.onselectstart = function () { return false; };
            // prevent IE from trying to drag an image
            target.ondragstart = function() { return false; };

            // prevent text selection (except IE)
            return false;
        }
    }

    function OnMouseMove(e)
    {
        if (e == null)
            var e = window.event;

        // this is the actual "drag code"
        _dragElement.style.left = (_offsetX + e.clientX - _startX) + 'px';
        _dragElement.style.top = (_offsetY + e.clientY - _startY) + 'px';

        _debug.innerHTML = '(' + _dragElement.style.left + ', ' +
            _dragElement.style.top + ')';
    }

    function OnMouseUp(e)
    {
        if (_dragElement != null)
        {
            _dragElement.style.zIndex = _oldZIndex;

            // we're done with these events until the next OnMouseDown
            document.onmousemove = null;
            document.onselectstart = null;
            _dragElement.ondragstart = null;

            // this is how we know we're not dragging
            _dragElement = null;

            _debug.innerHTML = 'mouse up';
        }
    }

    function ExtractNumber(value)
    {
        var n = parseInt(value);

        return n == null || isNaN(n) ? 0 : n;
    }
    */
// this is simply a shortcut for the eyes and fingers
function $(id)
{
    return document.getElementById(id);
}



//adding photo canvas nah
function ft_addtodo() {
	var block = document.createElement('canvas');
	block.setAttribute('id', no);
	block.setAttribute('width', 640);
	block.setAttribute('height', 480);
	block.setAttribute('class', "canvas");
	blocks.insertBefore(block, blocks.childNodes[0]);
	canvas = block; //document.getElementById('canvas');
	context = canvas.getContext('2d');// = canvas.getContext('2d');
	video = document.getElementById('video');//setCookie('cookie', encodeURIComponent(blocks.innerHTML), 1);
	context.drawImage(video, 0, 0, 640, 480);
	no++;
}



// Grab elements, create settings, etc.
var video = document.getElementById('video');

// Get access to the camera!
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
	// Not adding `{ audio: true }` since we only want video now
	navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
		video.src = window.URL.createObjectURL(stream);
		video.play();
	});
}



function convertCanvasToImage(canvas) {
	var image = new Image();
	image.src = canvas.toDataURL("image/png");
	return image;
}

var canvas;// = document.getElementById('canvas');
var context;// = canvas.getContext('2d');
var video;// = document.getElementById('video');

var button = document.getElementById("snap");
var blocks = document.getElementById("ft_list");
button.addEventListener("click", ft_addtodo);

var no = 0;
var ndList = blocks.childNodes;

// Trigger photo take
/*
document.getElementById("snap").addEventListener("click", function() {
	context.drawImage(video, 0, 0, 640, 480);
});
*/



//AJAX TRY
function loadDoc() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		 document.getElementById("demo").innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "ajax_info.txt?t=" + Math.random(), true);
	xhttp.send();
}

  </script>
</body>
</html>

