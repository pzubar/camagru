<style>
	.login-form {
		height: 100vh;
		display: flex;
		align-items: center;
		margin-top: -55px;
	}
</style>

<div class="container">
	<div class="row justify-content-md-center login-form">
		<div class="col-md-auto">
			<h3>Sign up</h3>
			<form action="/account/register" method="post" id="register-form">
				<div class="form-group">
					<label for="email"></label>
					<input class="form-control" id="email" type="text" name="email" placeholder="E-mail" required>
				</div>
				<div class="form-group">
					<input class="form-control" id="login" type="text" name="login" placeholder="User Name" required>
				</div>
				<div class="form-group">
					<input class="form-control" id="password" name="password" placeholder="Password" type="password"
						   required>
				</div>
				<button class="btn btn-info" type="submit">Sign up</button>
			</form>
		</div>
	</div>
</div>

<!--<script src="/public/js/register_page.js"></script>-->