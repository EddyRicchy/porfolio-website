<?php include_once('./partials/_header.php') ?>
			<section id="page-title">
				<div class="page-title">
					<h1>Contact</h1>
					<h4>Get in Touch</h4>
				</div>
			</section>
			<section id="map" data-as="true" class="animate-start" data-as-animation="animate-end">
				<div id="google-maps">
					<div class="portrait">
						<a href="https://www.google.com/maps/place/Hilltop+Estate,+Abesan+estate+Extension/@6.6232862,3.2517724,14z/data=!4m9!1m2!2m1!1shilltop+estate+olayide+lagos!3m5!1s0x103b90ee60b2a19f:0x697af17d6011284c!8m2!3d6.6232862!4d3.2847314!15sChxoaWxsdG9wIGVzdGF0ZSBvbGF5aWRlIGxhZ29zWh4iHGhpbGx0b3AgZXN0YXRlIG9sYXlpZGUgbGFnb3OSAQ5wdWJsaWNfaG91c2luZ5oBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSeGNsQnRTMDFuRUFF">
							<img src="./assets/img/map-mobile.png" alt="map"/>
						</a>
					</div>
					<div class="landscape">
						<a href="https://www.google.com/maps/place/Hilltop+Estate,+Abesan+estate+Extension/@6.6232862,3.2517724,14z/data=!4m9!1m2!2m1!1shilltop+estate+olayide+lagos!3m5!1s0x103b90ee60b2a19f:0x697af17d6011284c!8m2!3d6.6232862!4d3.2847314!15sChxoaWxsdG9wIGVzdGF0ZSBvbGF5aWRlIGxhZ29zWh4iHGhpbGx0b3AgZXN0YXRlIG9sYXlpZGUgbGFnb3OSAQ5wdWJsaWNfaG91c2luZ5oBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSeGNsQnRTMDFuRUFF">
							<img src="./assets/img/map-desktop.png" alt="map"/>
						</a>
					</div>
				</div>
			</section>
			<section id="contact" style="transition: 1s" data-as="true" class="animate-start" data-as-animation="animate-end">
				<div class="flex">
					<div class="contact-information">
						<div class="info flex">
							<div class="icon">
								<span class="material-symbols-outlined">phone_iphone</span>
							</div>
							<div class="details">
								<h4>+234 816 835 7567</h4>
							</div>
						</div>
						<div class="info flex">
							<div class="icon">
								<span class="material-symbols-outlined">pin_drop</span>
							</div>
							<div class="details">
								<h4>Lagos, Nigeria</h4>
							</div>
						</div>
						<div class="info flex">
							<div class="icon">
								<span class="material-symbols-outlined">mail</span>
							</div>
							<div class="details">
								<h4>eddyricchy@gmail.com</h4>
							</div>
						</div>
					</div>
					<div class="contact-form">
						<div class="heading">
							<h2>How Can I Help You?</h2>
							<div class="line-style">
								<div class="inner-line-style"></div>
							</div>
						</div>
						<div class="form">
							<form action="validate.php" method="POST">
								<div class="flex">
									<div class="details">
										<div class="fullname">
											<div class="form-input-animate"></div>
											<input type="text" placeholder="Full Name" name="name" id="fullname"/>
										</div>
										<div class="email">
											<div class="form-input-animate"></div>
											<input type="text" placeholder="Email" name="email" id="email"/>
										</div>
										<div class="subject">
											<div class="form-input-animate"></div>
											<input type="text" placeholder="Subject" name="subject" id="subject"/>
										</div>
									</div>
									<div class="message">
										<div class="form-input-animate"></div>
										<textarea placeholder="Message" name="message" id="message"></textarea>
									</div>
								</div>
								<button id="send-message" type="submit">Send message</button>
							</form>
						</div>
					</div>
				</div>
			</section>
			<?php include_once('./partials/_footer.php') ?>
		</div>
		<script src="script.js" type="text/javascript"></script>
		<script src="./plugins/dctb-animate-scroll/js/animate-scroll.js" type="text/javascript"/></script>
	</body>
</html>