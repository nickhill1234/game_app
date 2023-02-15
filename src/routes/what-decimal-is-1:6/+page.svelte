<script> 
    import WalletConnect from '../../lib/WalletConnect.svelte';
	import SubmitAnswer from '$lib/SubmitAnswer.svelte';

    let question = 'What decimal is 1/6'
    let page_url = 'what-decimal-is-1:6'
    let type_of_question = 'decimal'
    let meta_description = "What decimal is 1/6? Learn how to convert 1/6 into a decimal and earn a money reward if you can solve this question correctly."
    let page_thumbnail = "#"
	
	let answer_tip = "Limit your answer to four decimal places, for example 0.3333"
	let hints_intro = "Here are some hints and tips to help convert fractions into decimals:"
	let hint_1_title = "Divide the numerator by the denominator:"
	let hint_1 = "To convert a fraction into a decimal, simply divide the numerator by the denominator. This gives you the value of the fraction as a decimal."
	let hint_2_title = "Write down the decimal places:"
	let hint_2 = "When dividing the numerator by the denominator, keep writing down the decimal places until you get a repeating pattern or the division terminates (reaches a finite answer)."
	let hint_3_title = "Use a calculator:"
	let hint_3 = "If you're having trouble dividing the numerator by the denominator, you can use a calculator to do it for you. Just be sure to keep track of the decimal places, as you may need to round the answer to the appropriate number of decimal places."


	let step_intro = "A decimal is a way to represent numbers that are not whole numbers, such as fractions or parts of a whole. Decimals use a decimal point to show the value of the fraction in relation to a whole."
	let step_1 = "To convert 1/6 into a decimal, we need to divide the numerator (1) by the denominator (6)."
	let step_2 = "To divide 1 by 6, we start by writing 0.1 as the first digit after the decimal point. This is because 10 divided by 6 equals 1 with a remainder of 4."
	let step_3 = "Next, we multiply 6 by the first digit after the decimal point (0.1) to see what the next digit will be. 6 x 0.1 = 0.6. Now we write the second digit after the decimal point (0.6) and our decimal is 0.16 so far."

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
								<br> {answer_tip}
							</p>
						</div>
						<div class="column width-10 offset-1 center">
                                <p>Step 1: Download a <a href="https://metamask.io/download/">MetaMask </a> wallet to collect the reward.
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
										<h2 class="mb-30"><u>Hints to help you solve this {type_of_question} problem</u></h2>
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
												<b>Practice, practice, practice:</b> Solving {type_of_question} questions takes practice, so keep trying different questions to build your skills.
												</p>
											</div>
										</div>
										<h3 class="mb-30"><u>Need more help? Try this step by step guide to work through this {type_of_question} question.</u></h3>
											<div class="accordion-content">
												<p class="lead mb-30">{step_intro}
													<br><br>
													<b>Step 1:</b> {step_1}
													<br><br> 
													<b>Step 2:</b> {step_2}
													<br><br>
													<b>Step 3:</b> {step_3}
													<br><br>
													<b>Step 4:</b> You should be getting the hang of solving the problem. Try submit the answer above and see if you are correct!											
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
