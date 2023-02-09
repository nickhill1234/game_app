<script> 

	let question = 'Play to earn with math'
    let page_url = 'what-percentage-of-20-is-5'
    let meta_description = "What percentage of 20 is 5? Learn how to calculate what percent 20 is of 5 and earn a money reward if you can solve this question correctly."

    let app_name = 'Math for Money'
    let about_url = 'https://www.mathformoney.app/about'
    let math_worksheets_url = 'https://www.mathformoney.app/math-worksheets'
    let resources_url = 'https://www.mathformoney.app/about'
    let social_impact_url = 'https://www.mathformoney.app/social-impact'
    let contact_url = 'https://www.mathformoney.app/contact'
	let year = '2023'

</script>

<svelte:head>
		<meta content="width=device-width,initial-scale=1.0,maximum-scale=5.0" name="viewport">		

		<!-- Primary Meta Tags -->
		<title>{question} | {app_name}</title>
		<meta name="title" content="{question} | {app_name}">
		<meta name="description" content="{question}? {meta_description}">

		<!-- Open Graph / Facebook -->
		<meta property="og:type" content="website">
		<meta property="og:url" content="https://earn.mathformoney.app/{page_url}">
		<meta property="og:title" content="{question} | {app_name}">
		<meta property="og:description" content="{question}? {meta_description}">
		<meta property="og:image" content="">
		<meta name="facebook-domain-verification" content="bl9tceepitxfclkm800cfxn63cfihm" />

		<!-- Twitter -->
		<meta property="twitter:card" content="summary_large_image">
		<meta property="twitter:url" content="https://earn.mathformoney.app/{page_url}">
		<meta property="twitter:title" content="{question} | {app_name}">
		<meta property="twitter:description" content="{question}? {meta_description}">
		<meta property="twitter:image" content="">

		<link rel="canonical" href="https://earn.mathformoney.app/{page_url}" />

</svelte:head>	

	<!-- Overlay Navigation Menu -->
	<div class="overlay-navigation-wrapper" data-no-scrollbar data-animation="scale-in">
		<div class="overlay-navigation-scroll-pane">
			<div class="overlay-navigation-inner">
				<div class="v-align-middle">
					<div class="overlay-navigation-header row collapse full-width">
						<div class="column width-12">
							<div class="navigation-hide overlay-nav-hide">
								<a href="#">
									<span class="icon-cancel"></span>
								</a>
							</div>
						</div>
					</div>
					<div class="row collapse full-width">
						<div class="column width-12">
							<nav class="overlay-navigation nav-block center">
								<ul>
									<li >
										<a href="{about_url}">About</a>
									</li>
									
									<li class="current"><a href="{math_worksheets_url}">Math Worksheets</a></li>
									<li>
										<a href="{resources_url}">Resources</a>
									</li>
									<li>
										<a href="{social_impact_url}">Social Impact</a>
									</li>
									<li>
										<a href="{contact_url}">Contact</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
					<div class="overlay-navigation-footer row full-width center">
						<div class="column width-12 no-padding">
							<p class="copyright">&copy; {year} Math for Money. All Rights Reserved.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Overlay Navigation Menu End -->
	<div class="wrapper reveal-side-navigation">
		<div class="wrapper-inner">


			<!-- Header -->
			<header class="header header-fixed header-fixed-on-mobile header-transparent" data-bkg-threshold="100" data-compact-threshold="100">
				<div class="header-inner">
					<div class="row nav-bar">
						<div class="column width-12 nav-bar-inner">
							<div class="logo">
								<div class="logo-inner">
									<a href="index.html"><img src="logo-dark.webp" alt="Pocketjam Logo" /></a>
									<a href="index.html"><img src="logo.webp" alt="Pocketjam logo Logo" /></a>
								</div>
							</div>
							<nav class="navigation nav-block secondary-navigation nav-right">
								<ul>
									<li>
			<!-- Dropdown Login -->
			<div class="v-align-middle">
				<a href="https://app.mathformoney.app/accounts/signup/?next=/dashboard" class="button no-page-fade no-label-on-mobile small no-margin-bottom">
				<span class="icon-lock left"></span>
				<span>My Account</span>
				</a>
			</div>
			</li>
			<li class="aux-navigation hide">
										
			<!-- Aux Navigation -->
										<a href="#" class="navigation-show overlay-nav-show nav-icon">
											<span class="icon-menu"></span>
										</a>
									</li>
								</ul>
							</nav>
							<nav class="navigation nav-block primary-navigation nav-right">
								<ul>
									<li>
										<a href="about.html">About</a></li>
										
									<li class="current"><a href="solve-questions-and-earn-money.html">Solve Questions and Earn Money</a></li>
									<li><a href="resources.html">Resources</a></li>
									<li><a href="social-impact.html">Social Impact</a></li>
									<li><a href="contact.html">Contact</a></li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</header>
			<!-- Header End -->

			<!-- Content -->
			<div class="content clearfix">

				<!-- Intro Title -->
				<div class="section-block" style="background-image:url(./slide-1-fs.webp)">
					<div class="row">
						<div class="column width-10 offset-1 center">
							<div class="title-container">
								<div class="title-container-inner color-grey-ultralight">
									<h1 class="title-large mb-30">{question}</h1>
									<p>Click one of the questions below and answer it correctly to unlock the reward! The first person to answer the question correctly, collect the reward! 
									The questions are all math questions are aim to improve problem solving ability. <br><br>
									Rewards are released weekly so keep checking each week to see if a new question is funded!<br><br>
									Make sure you connect your wallet first before you answer the question in order to collect the reward. We recommend connecting with MetaMask. </p>
									<a href="https://metamask.io/download/" class="button large bkg-orange-light bkg-hover-theme color-theme color-hover-blue-light left mb-20">Download MetaMask</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- Intro Title End -->


				<!-- Content Inner -->
				<div class="section-block content-inner blog-masonry grid-container full-width pt-30" data-layout-mode="masonry" data-grid-ratio="1.5" data-animate-resize data-animate-resize-duration="0">
					<div class="row">
						<div class="column width-12">
							<div class="row grid content-grid-4 clearfix">
								
								<div class="grid-item grid-sizer">
									<article class="post">
										<div class="post-media">
											<div class="thumbnail img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#ffffff" data-hover-bkg-opacity="0.9">
												<a class="overlay-link" href="what-are-the-factors-of-100.html">
													<img src="grade-1.svg" alt=""/>
													<span class="overlay-info">
														<span>
															<span>
																What are the factors of 100
															</span>
														</span>
													</span>
												</a>
											</div>
										</div>
										<div class="post-content with-background">
											<h2 class="post-title"><a href="what-are-the-factors-of-100.html">What are the factors of 100</a></h2>
											<p>This is a factorisation question that tests your ability to break down a number into its factor pairs in order to solve the question. This question is great for kids 9 years and older.</p>
										</div>
									</article>
								</div>

								<div class="grid-item">
									<article class="post">
										<div class="post-media">
											<div class="thumbnail img-scale-in" data-hover-easing="easeInOut" data-hover-speed="700" data-hover-bkg-color="#ffffff" data-hover-bkg-opacity="0.9">
												<a class="overlay-link" href="what-are-the-factors-of-33.html">
													<img src="grade-2.svg" alt=""/>
													<span class="overlay-info">
														<span>
															<span>
																What are the factors of 33
															</span>
														</span>
													</span>
												</a>
											</div>
										</div>
										<div class="post-content with-background">
											<h2 class="post-title"><a href="math-worksheets-for-2nd-grade.html">What are the factors of 33</a></h2>
											<p>This is a factorisation question that tests your ability to break down a number into its factor pairs in order to solve the question. This question is great for kids 10 and older.</p>
										</div>
									</article>
								</div>
								
							</div>
						</div>
					</div>
				</div>
				<!-- Content Inner End -->

			</div>
			<!-- Content End -->

			<!-- Footer -->
				      <footer id="footer" class="footer-light">
					<div class="footer-top">
					  <div class="row flex">
					    <div class="column width-6 offset-3 center">
					      <div class="widget">
						<h3 class="widget-title color-white">Get Started By Downloading the App!</h3>
						<p class="color-white">Math for Money is available both the AppStore and Google Play Store.</p>
						<a href="https://apps.apple.com/za/app/math-for-money/id1551651156" class="button large bkg-white bkg-hover-theme color-theme color-hover-white left mb-20"><span class="icon-app-store left"></span>Download in AppStore</a>
						<a href="https://play.google.com/store/apps/details?id=com.mathformoney.application" class="button large bkg-white bkg-hover-theme color-theme color-hover-white left mb-20"><span class="icon-google-play left"></span>Download in Play Store</a>
						<ul class="social-list list-horizontal center mb-10">
						  <li><a href="https://www.facebook.com/MathforMoneyApp"><span class="icon-facebook-with-circle small"></span></a></li>
						  <li><a href="https://www.instagram.com/mathformoneyapp/"><span class="icon-instagram-with-circle small"></span></a></li>
						  <li><a href="https://www.linkedin.com/company/mathformoney/"><span class="icon-linkedin-with-circle small"></span></a></li>
						  <li><a href="https://www.youtube.com/channel/UChdDuSGXmsd93kjqDfHIXbA"><span class="icon-youtube-with-circle small"></span></a></li>
						</ul>
						<p class="copyright"> &copy; MathforMoney is a product of Pocketjam (Pty) Ltd. All Rights Reserved.</p>
						<p class="copyright">Visit our <a href="https://www.mathformoney.app/privacy-policy.html">Privacy Policy</a> or <a href="https://www.mathformoney.app/terms-and-conditions.html">Terms and Conditions</a>.</p>
					      </div>
					    </div>
					  </div>
					</div>
				      </footer>
      				<!-- Footer End -->

		</div>
	</div>