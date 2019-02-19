<style>
	.remind-form {
		height: 100vh;
		display: flex;
		align-items: center;
		margin-top: -55px;
	}
</style>

<div class="container">
	<div class="row justify-content-md-center remind-form">
		<div class="col-md-auto">
			<h3>Remind password</h3>
			<p style="margin-bottom: 0">Enter e-mail and we'll send you a letter with instructions</p>
			<form action="/account/remind-password" method="post" id="register-form">
				<div class="form-group">
					<label for="email"></label>
					<input class="form-control" id="email" type="text" name="email" placeholder="E-mail" required>
				</div>
				<button class="btn btn-info" type="submit">Reset password</button>
			</form>
		</div>
	</div>
</div>