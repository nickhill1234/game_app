<script> 
    import WalletConnect from '../../lib/WalletConnect.svelte';
    import AllQuestions from '../../lib/AllQuestions.svelte';
    import contractAbi from '../../contracts/QuizFactory.json';
    const contractAddr = '0x989C0BFE382B645e79Ab9716C28C6d71e85C6802';

    let question = '3 fifteens'
    let page_url = '3-fifteens'
    let type_of_question = 'multiplication'
    let meta_description = "3 fifteens can also be written as a multiplication question as 3 x 15. Convert the words fifteens into numbers to answer. Earn a money reward if you can solve this question correctly!"
    let page_thumbnail = "#"

    let answer_tip = ""
    let hints_intro = ""
    let hint_1_title = "Convert words to numbers:"
    let hint_1 = "To make the problem easier, convert fifteen into 15 so that you are working with two numbers."
    let hint_2_title = "Use visual aids:"
    let hint_2 = "Visual aids, like drawings or manipulatives, can help you understand and solve the problem. For example, you can draw three blocks and label each one with the number 15."
    let hint_3_title = "Use mental math:"
    let hint_3 = "Try to solve the problem mentally, without writing it down as this can help your mental math and speed up the process of solving multiplication problems."


    let step_intro = "To solve 3 fifteens, we need to understand what multiplication is and how to multiply numbers. Multiplication is simply a way of adding the same number multiple times."
    let step_1 = "Convert fifteen into the number 15 to make it easier to solve the question."
    let step_2 = "You can also think of adding 15 three times"
    let step_3 = "Now that we have both numbers, we can combine them to solve the problem. We're going to add 15 three times, so we write 3 x 15"
	
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
								<div class="title-container-inner color-grey-ultralight">
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
								<br> There is a random reward attached for those who answer the question correctly. 
								<br>Follow the steps below to connect your wallet first to see if there is a reward. The question is highlighted green if there is a reward available.
								<br>You will only be able to submit an answer if you've answered correctly.
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
                            <WalletConnect bind:web3Props {contractAddr} {contractAbi}/>
                            {:else}
                            <AllQuestions bind:web3Props/>
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
