<script>
	import Footer from "../lib/Footer.svelte";

	let page_title = 'Money Math Games'
    let page_url = 'index'
    let meta_description = "Cool money math games that you can play to earn money! Play math games to win weekly prizes."

    let app_name = 'Money Math Games'
	let year = '2023'

</script>

<svelte:head>
		<meta content="width=device-width,initial-scale=1.0,maximum-scale=5.0" name="viewport">		

		<!-- Primary Meta Tags -->
		<title>Earn Money With Cool Money Math Games! | {app_name}</title>
		<meta name="title" content="{page_title} | {app_name}">
		<meta name="description" content="{meta_description}">

		<link rel="canonical" href="https://www.moneymathgames.com" />

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
									<a href="https://www.moneymathgames.com"><img src ="logo-dark.webp" alt="Money Math Games Logo" /></a>
									<a href="https://www.moneymathgames.com"><img src ="logo.webp" alt="Money Math Games Logo" /></a>
								</div>
							</div>
							<nav class="navigation nav-block secondary-navigation nav-right">

							</nav>
							<nav class="navigation nav-block primary-navigation nav-right">

							</nav>
						</div>
					</div>
				</div>
			</header>
			<!-- Header End -->

			<!-- Content -->
			<div class="content clearfix">

				<!-- Intro Title -->
				<div class="section-block" style="background-image:url(./header.webp)">
					<div class="row flex">
						<div class="column width-10 offset-1 center">
							<div class="title-container">
								<div class="title-container-inner color-grey-ultralight">
									<h1 class="title-xlarge mb-150">{page_title}</h1>
									<a href="#treasure_hunt" class="button large bkg-pink-treasure bkg-hover-theme color-grey-ultralight color-hover-blue-light left mb-20">Click here to play</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- Intro Title End -->
				<!-- Feature Section 2 -->

				<section class="section-block bkg-grey-ultralight">
				<div class="row flex">
					<div class="column width-6">
					<div class="feature-image">
						<div
						class="feature-image-inner center-on-mobile center"						>
						<img src="treasure-chest.webp" alt="" />
						</div>
					</div>
					</div>
					<div class="column width-5 offset-1">
					<div class="feature-content">
						<div
						class="feature-content-inner left "
						>
						<h2 class="mb-30">
							Play to earn with cool math games!
						</h2>
						<p>
							Do you enjoy solving math problems? Want to earn money while you do it? We're a game where you can solve math problems and get rewarded by doing so! 
							<br><br><b>How does it work?</b>
							<br> Simply create a wallet by following the link below and then submit your answers to the questions below. We then give away an NFT worth $20 to a lucky winner each week. Follow us on <a href="https://www.instagram.com/moneymathgames/" target=”_blank”>Instagram</a> or <a href="https://twitter.com/moneymathgames" target=”_blank”>Twitter</a> to see the announcement of winners each week.  
						</p>
						</div>
					</div>
					</div>
				</div>
				</section>
				<!-- Feature Section 2 End -->

				<!-- Content Inner -->
				<div class="section-block content-inner blog-masonry full-width pt-30">
					<div class="row">
						<div class="column width-12">
							<div class="row grid content-grid-4 clearfix">
								<div class="column width-10 offset-1 center">
								<div class="title-container">

								<h3 class="title-medium mb-10"><a id="treasure_hunt" href="math-treasure-hunt">Math Treasure Hunt!</a></h3>
									<h4 class="title-small mb-30">Solve these math problems and stand a chance to win a weekly NFT worth $20!</h4>
									<p>Simply attach your wallet and submit your answer to each question below and stand a chance to win. A NFT is hidden in one of the questions below.
									<br>Submit your answer then follow us on <a href="https://www.instagram.com/moneymathgames" target=”_blank”>Instagram</a> or <a href="https://twitter.com/moneymathgames" target=”_blank”>Twitter</a>  to see winners which are announced each Friday.
								</p>

								<a href="https://metamask.io/download/" target=”_blank” class="button large bkg-pink-treasure bkg-hover-theme color-grey-ultralight color-hover-blue-light left mb-20">Download MetaMask To Start</a>
								</div>
								</div>
								<div class="grid-item grid-sizer">
									<article class="post">
										<div class="post-media">
											<div class="thumbnail img-scale-in">
												<a class="overlay-link" href="math-treasure-hunt/what-are-the-factors-of-100">
													<img src="1.webp" alt=""/>
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
											<h2 class="post-title"><a href="math-treasure-hunt/what-are-the-factors-of-100">What are the factors of 100</a></h2>
											<p>This factorisation question that tests your ability to break down a number into its factor pairs. </p>
										</div>
									</article>
								</div>

								<div class="grid-item">
									<article class="post">
										<div class="post-media">
											<div class="thumbnail img-scale-in" >
												<a class="overlay-link" href="math-treasure-hunt/factors-of-75">
													<img src="2.webp" alt=""/>
													<span class="overlay-info">
														<span>
															<span>
																Factors of 75
															</span>
														</span>
													</span>
												</a>
											</div>
										</div>
										<div class="post-content with-background">
											<h2 class="post-title"><a href="math-treasure-hunt/factors-of-75">What are the factors of 75</a></h2>
											<p>This factorisation question that tests your ability to break down a number into its factor pairs. </p>
										</div>
									</article>
								</div>

								<div class="grid-item">
									<article class="post">
										<div class="post-media">
											<div class="thumbnail img-scale-in" >
												<a class="overlay-link" href="math-treasure-hunt/1.5-as-a-fraction">
													<img src="3.webp" alt=""/>
													<span class="overlay-info">
														<span>
															<span>
																1.5 as a fraction
															</span>
														</span>
													</span>
												</a>
											</div>
										</div>
										<div class="post-content with-background">
											<h2 class="post-title"><a href="math-treasure-hunt/1.5-as-a-fraction">1.5 as a fraction</a></h2>
											<p>This is a fraction question that tests your ability to break down a number into its factor pairs in order to solve the question. </p>
										</div>
									</article>
								</div>

								<div class="grid-item">
									<article class="post">
										<div class="post-media">
											<div class="thumbnail img-scale-in" >
												<a class="overlay-link" href="math-treasure-hunt/0.125-as-a-fraction">
													<img src="4.webp" alt=""/>
													<span class="overlay-info">
														<span>
															<span>
																0.125 as a fraction
															</span>
														</span>
													</span>
												</a>
											</div>
										</div>
										<div class="post-content with-background">
											<h2 class="post-title"><a href="math-treasure-hunt/0.125-as-a-fraction">0.125 as a fraction</a></h2>
											<p>This is a fraction question that tests your ability to break down a number into its factor pairs in order to solve the question. </p>
										</div>
									</article>
								</div>

								<div class="grid-item">
									<article class="post">
										<div class="post-media">
											<div class="thumbnail img-scale-in" >
												<a class="overlay-link" href="math-treasure-hunt/3-fifteens">
													<img src="2.webp" alt=""/>
													<span class="overlay-info">
														<span>
															<span>
																3 fifteens
															</span>
														</span>
													</span>
												</a>
											</div>
										</div>
										<div class="post-content with-background">
											<h2 class="post-title"><a href="math-treasure-hunt/3-fifteens">3 fifteens</a></h2>
											<p>This multipication question tests your ability to break down numbers factor pairs in order to solve the question. </p>
										</div>
									</article>
								</div>

								<div class="grid-item">
									<article class="post">
										<div class="post-media">
											<div class="thumbnail img-scale-in" >
												<a class="overlay-link" href="math-treasure-hunt/5-1:2-as-a-decimal">
													<img src="3.webp" alt=""/>
													<span class="overlay-info">
														<span>
															<span>
																5 1/2 as a decimal
															</span>
														</span>
													</span>
												</a>
											</div>
										</div>
										<div class="post-content with-background">
											<h2 class="post-title"><a href="math-treasure-hunt/5-1:2-as-a-decimal">5 1/2 as a decimal</a></h2>
											<p>This decimal question tests your ability to break down a number into its factor pairs in order to solve the question. </p>
										</div>
									</article>
								</div>

								<div class="grid-item">
									<article class="post">
										<div class="post-media">
											<div class="thumbnail img-scale-in" >
												<a class="overlay-link" href="math-treasure-hunt/5-is-what-percent-of-2">
													<img src="1.webp" alt=""/>
													<span class="overlay-info">
														<span>
															<span>
																5 is what percent of 2
															</span>
														</span>
													</span>
												</a>
											</div>
										</div>
										<div class="post-content with-background">
											<h2 class="post-title"><a href="math-treasure-hunt/5-is-what-percent-of-2">5 is what percent of 2</a></h2>
											<p>This percent question tests your ability to break down a number into its factor pairs in order to solve the question. </p>
										</div>
									</article>
								</div>

								<div class="grid-item">
									<article class="post">
										<div class="post-media">
											<div class="thumbnail img-scale-in" >
												<a class="overlay-link" href="math-treasure-hunt/5-is-what-percent-of-20">
													<img src="2.webp" alt=""/>
													<span class="overlay-info">
														<span>
															<span>
																5 is what percent of 20
															</span>
														</span>
													</span>
												</a>
											</div>
										</div>
										<div class="post-content with-background">
											<h2 class="post-title"><a href="math-treasure-hunt/5-is-what-percent-of-20">5 is what percent of 20</a></h2>
											<p>This percent question tests your ability to break down a number into its factor pairs in order to solve the question. </p>
										</div>
									</article>
								</div>

							</div>
						</div>
					</div>
				</div>
				<!-- Content Inner End -->
								<!-- NFT Grid -->
								<div class="section-block replicable-content bkg-grey-ultralight">
									<div class="row">
										<div class="column center width-12">
											<h3 class="mb-50">See our past NFT winners!</h3>
											<h4 class="mb-50">Check out our <a href="https://opensea.io/collection/math-treasure-hunt" target=”_blank”> NFT page</a> to view our collection.</h4>
										</div>
										<div class="column width-12">
											<div class="row content-grid-3 center">
												<div class="grid-item"  >
													<div class="thumbnail no-margin-bottom" >
														<a href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/45467654088607569510196568564608339478309866350944487180964186461026683715585"><img src ="0.75-as-a-fraction.webp" alt="0.75 As A Fraction NFT" target=”_blank” class="mb-10"/></a>
													</div>
													<div class="team-2 team-content-info center">
														<h4 class="mb-10"><a href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/45467654088607569510196568564608339478309866350944487180964186461026683715585" target=”_blank”>0.75 As A Fraction</a></h4>
														<h4 class="occupation">Won by: <a href="https://opensea.io/edbailey" target=”_blank”>edbailey</a></h4>
														<p>This is one of our first and rarest NFTs! The question tests converting decimals into fractions. The original question can be seen by clicking the open treasure chest below. </p>
														<!-- <ul class="social-list list-horizontal small">
															<li><a href="https://www.moneymathgames.com/math-treasure-hunt/0.75-as-a-fraction" target=”_blank”><img src ="treasure-chest.webp" alt="Money Math Games Logo" /></a></li>
														</ul> -->
													</div>
												</div>

												<div class="grid-item" >
													<div class="thumbnail no-margin-bottom" >
														<img src="mystery.webp" class="mb-10" alt=""/>
													</div>
													<div class="team-2 team-content-info center">
														<h4 class="mb-10">???</h4>
														<h4 class="occupation">Solve one of the math questions above to stand a chance to be one of our winners!</h4>
														<p>We award a new NFT worth $20 to a person who answers one of the above questions correctly each week. Answer the questions above to stand a chance to be a winner!</p>
														<!-- <ul class="social-list list-horizontal">
															<li><a href="#"><span class="icon-linkedin-with-circle small"></span></a></li>
														</ul> -->
													</div>
												</div>

												<div class="grid-item"  >
													<div class="thumbnail no-margin-bottom" >
														<a href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/45467654088607569510196568564608339478309866350944487180964186462126195343361"><img src ="factors-of-33.webp" alt="Factors of 33 NFT" target=”_blank” class="mb-10"/></a>
													</div>
													<div class="team-2 team-content-info center">
														<h4 class="mb-10"><a href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/45467654088607569510196568564608339478309866350944487180964186461026683715585" target=”_blank”>What are the factors of 33</a></h4>
														<h4 class="occupation">Won by: <a href="https://opensea.io/JoshuAntona" target=”_blank”>JoshuAntona</a></h4>
														<p>The second NFT in the collection, this question tests factorization and helps students find the factors of an odd number!</p>
														<!-- <ul class="social-list list-horizontal">
															<li><a href="#"><span class="icon-linkedin-with-circle small"></span></a></li>
														</ul> -->
													</div>
												</div>

											</div>
										</div>
									</div>
								</div>
								<!-- NFT Grid End -->

				</div>
			<!-- Content End -->
			
			<Footer/>


		</div>
	</div>
