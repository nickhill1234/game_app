<script> 
    import WalletConnect from '../../lib/WalletConnect.svelte';
	import SubmitAnswer from '$lib/SubmitAnswer.svelte';


    let question = 'What are the factors of 100'
    let page_url = 'what-are-the-factors-of-100'
    let type_of_question = 'factorization'
    let meta_description = "What are the factors of 100? Learn how to find the factors of 100 using prime factors. Earn a money reward if you can solve this question correctly!"
    let page_thumbnail = "#"

	let answer_tip = ""
	let hints_intro = "Factoring numbers is like taking apart a puzzle to find the smaller parts that make up the bigger number. Here's how you can do it:"
	let hint_1_title = "Divide the number:"
	let hint_1 = "Start with the smallest number, which is 1, and see if the bigger number can be divided by it. If it can, write it down as a factor. Then move on to the next number and keep dividing until you can't divide anymore."
	let hint_2_title = "Look for common factors:"
	let hint_2 = "f you have a sum or a product of numbers, look for parts that are the same and divide them out. This makes it easier to find the rest of the factors."
	let hint_3_title = "Use a factor tree: "
	let hint_3 = "A factor tree is a diagram that helps you organize the factors of a number. Start with the big number and divide it by the smallest prime factor. Then divide each of the smaller numbers until you reach a prime factor. Prime factors are the building blocks of the big number and are unique to it."


	let step_intro = ""
	let step_1 = ""
	let step_2 = ""
	let step_3 = ""


    let app_name = 'Math for Money'
    let about_url = 'https://www.mathformoney.app/about'
    let math_worksheets_url = 'https://www.mathformoney.app/math-worksheets'
    let resources_url = 'https://www.mathformoney.app/about'
    let social_impact_url = 'https://www.mathformoney.app/social-impact'
    let contact_url = 'https://www.mathformoney.app/contact'
	let year = '2023'

    export let web3Props ={
        provider: null,
        signer: null,
        account: null,
        chainId: null,
    };

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
									<a href="https://www.mathformoney.app"><img src ="./logo-dark.webp" alt="Math For Money Logo" /></a>
									<a href="https://www.mathformoney.app"><img src ="./logo.webp" alt="Math For Money Logo" /></a>
								</div>
							</div>
							<nav class="navigation nav-block secondary-navigation nav-right">
								<ul>
									<li>
										<!-- Dropdown Login -->
										<div class="v-align-middle">
											<a href="https://app.mathformoney.app/dashboard" class="button no-page-fade no-label-on-mobile small no-margin-bottom"><span class="icon-lock left"></span><span>My Account</span></a>
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
									<li >
										<a href="{about_url}">About</a></li>
									<li class="current"><a href="{math_worksheets_url}">Math Worksheets</a></li>
									<li><a href="{resources_url}">Resources</a></li>
									<li><a href="{social_impact_url}">Social Impact</a></li>
									<li><a href="{contact_url}">Contact</a></li>
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
				<div class="section-block" style="background-image:url(./slide-2-page-intro.webp)">
				<!-- <div class="section-block intro-title-2"> -->

					<div class="row">
						<div class="column width-12 center">
							<div class="title-container">
								<div class="title-container-inner color-white">
									<h1 class="title-large mb-30">
                                        {question}
                                    </h1>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- Intro Title End -->

				<!-- Intro -->
				<div class="section-block pb-0">
					<div class="row">
						<div class="column width-10 offset-1 center">
							<p class="lead weight-regular mb-70">Put your math word problem skills to solve this {type_of_question} question and find the answer to: <br> <b>{question}?</b>
								<br><br> Stand a chance to win a weekly NFT worth $20 if you answer the question correctly! 
								<br>Follow us on <a href="https://www.instagram.com/mathformoneyapp/" target=”_blank”>Instagram</a> to see winners each Friday. 
								<br>{answer_tip}
							</p>
						</div>
						<div class="column width-10 offset-1 center">
                                <p>Step 1: Download a <a href="https://metamask.io/download/" target=”_blank”>MetaMask </a> wallet to collect the reward.
									<br>
									Step 2: Attach your MetaMask wallet using the link below to start answering the question.
								</p>
							</div>
						<div style="display: contents">
							{#if !web3Props.account}
                            	<WalletConnect bind:web3Props/>
                            {:else}
                            	<SubmitAnswer bind:web3Props/>
                            {/if}
                        </div>
						<div class="column width-12" style="padding-top: 50px;">
							<hr class="mb-70">
						</div>
					</div>
				</div>
				<!-- Intro End -->


				<!-- Question 1 -->
				<div class="section-block pt-0 pb-0">
					<div class="row">
						<div class="column width-12">
							<div class="mb-50">
										<h2 class="mb-30"><u>Hints to help you find solve this {type_of_question} question</u></h2>
										<div id="accordion-1-panel-1">
											<div class="accordion-content">
												<p class="lead mb-30">{hints_intro}
												<br><br>
												<b>{hint_1_title}</b> {hint_1}
												<br><br>
												<b>{hint_2_title}</b> {hint_2}
												<br><br>
												<b>{hint_3_title}</b> {hint_3}	
												<br><br>
												<b>Practice, practice, practice:</b> Factoring numbers takes practice, so keep trying different numbers to build your skills.
												</p>
											</div>
										</div>
										<h3 class="mb-30"><u>Need more help? Try this step by step guide</u></h3>
											<div class="accordion-content">
												<p class="lead mb-30">We are going to go through the first few steps of finding the factors of 100. To factorize the number 100, we first need to understand what it means to "break a number down into smaller parts." Think of it like taking apart a puzzle. This is mean to be a guide but not give you the final answer! The first step in breaking down 100 is to find two numbers that multiply together to make 100. These two numbers are called "factors" of 100.
													<br><br>
													<b>Step 1:</b> One way to find the factors of 100 is to start with the number 1 and see if it divides evenly into 100. To divide, we can use the symbol ÷. When we divide 100 by 1, we get 100 with no remainder. So 1 is a factor of 100.
													<br><br> 
													<b>Step 2:</b> Now we will move on to the number 2 and see if it divides evenly into 100. When we divide 100 by 2, we get 50 with no remainder. So 2 is a factor of 100.
													<br><br>
													<b>Step 3:</b> You should be getting the hang of it right now! See if you can complete the rest of the factors of 100. When you feel like you are complete, head up back to the top of the page and submit your answer.
												</p>
											</div>
							</div>
						</div>
					</div>
				</div>
			<!-- Question 1 End -->




			</div>
			<!-- Content End -->

					<!-- Footer -->
				    <footer id="footer" class="footer-light" style ="background-image: url(./footer.webp)">
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
