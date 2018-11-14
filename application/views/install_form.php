<!DOCTYPE html>
<html>
<head>
    <title>Installing database</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>

<body>
<div class="form-container" style="display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;">
    <div class="form col-md-4 col-lg-4 col-sm-12 col-xs-12">
        <form action="../../index.php" method="post">
            <div id="top-bar">Database setup</div>
            <input class="form-control" type="text" name="DB_USER" value="" placeholder="mySQL Login" /><br />
            <input class="form-control" type="password" name="DB_PASSWORD" placeholder="mySQL Password" /><br />
            <input class="form-control" type="text" name="DB_NAME" value="" placeholder="Name of the new mySQL database" /><br />
            <input id="butt" type="submit" name="submit" class="btn" value="OK" />
        </form>
    </div>
</div>
</body>

</html>
