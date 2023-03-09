<script>
	import Footer from "$lib/Footer.svelte";

    export let data;

    let year = '2023'

</script>


<svelte:head>
		<meta content="width=device-width,initial-scale=1.0,maximum-scale=5.0" name="viewport">		

		<!-- Primary Meta Tags -->
		<title>Solve Doubts And Earn Money | Money Math Games</title>
		<meta name="title" content="Solve Doubts And Earn Money | Money Math Games">
		<meta name="description" content="Solve these doubts and unlock money rewards! Solve these math problems and earn money by answering math questions.">

		<link rel="canonical" href="https://www.moneymathgames.com/solve-doubts-and-earn-money" />

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
                                    <a href="https://www.moneymathgames.com"><img src ="../logo-dark.webp" alt="Money Math Games Logo" /></a>
                                    <a href="https://www.moneymathgames.com"><img src ="../logo.webp" alt="Money Math Games Logo" /></a>
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
				<div class="section-block" style="background-image:url(./treasure-background.webp)">
					<div class="row flex">
						<div class="column width-10 offset-1 center">
							<div class="title-container">
								<div class="title-container-inner color-grey-ultralight">
									<h1 class="title-xlarge mb-150" style="padding-bottom: 10rem;">Solve Doubts And Earn Money</h1>
									<a href="#treasure_hunt" class="button large bkg-pink-treasure bkg-hover-theme color-grey-ultralight color-hover-blue-light left mb-20"  >Click here to play</a>
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
							Solve Math Problems And Earn Money With A Math Treasure Hunt!
						</h2>
						<p>
							Do you enjoy solving math problems and to earn money while you do it? Play this Math Treasure Hunt game where you can solve math questions and stand a chance to win an NFT if you answer the question correctly. The more questions you answer, the greater your chances of winning!  
							<br><br><b>How does it work?</b>
							<br> Simply create a MetaMask wallet by following the link below. Link your wallet to the page and then submit your answer to the question. We then give away an NFT worth $20 to a lucky winner each week. Follow us on <a href="https://www.instagram.com/moneymathgames/" target=”_blank”>Instagram</a> or <a href="https://twitter.com/moneymathgames" target=”_blank”>Twitter</a> to see the announcement of winners each week.  
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

								<h3 class="title-medium mb-10"><a id="treasure_hunt">An NFT worth $20 is hidden in one of the questions below!</a></h3>
									<h4 class="title-small mb-30">Make sure you submit as many answers as possible to stand a chance of winning the NFT.</h4>
									<p>Attach your wallet and submit your answer to each question below and stand a chance to win. 
									<br>We announce the winners weekly on our <a href="https://www.instagram.com/moneymathgames" target=”_blank”>Instagram</a> every Friday. Follow us to see the unlock each week!
								</p>

								<a href="https://metamask.io/download/" target=”_blank” class="button large bkg-pink-treasure bkg-hover-theme color-grey-ultralight color-hover-blue-light left mb-20">Download MetaMask To Start</a>
								</div>
								</div>


                            {#each data.posts as post (post.slug)}
         
								<div class="grid-item grid-sizer">
									<article class="post">
										<div class="post-media">
											<div class="thumbnail img-scale-in">
												<a class="overlay-link" href={`/math-treasure-hunt/${post.slug}`}>
													<img src={post.page_thumbnail} alt=""/>
													<span class="overlay-info">
														<span>
															<span>
                                                                <a href={`/math-treasure-hunt/${post.slug}`}>{post.question}</a>

															</span>
														</span>
													</span>
												</a>
											</div>
										</div>
										<div class="post-content with-background">
											<h2 class="post-title center"><a href={`/math-treasure-hunt/${post.slug}`}>{post.question}</a></h2>
										</div>
									</article>
								</div>
                                {/each}


							</div>
						</div>
					</div>
				</div>
				<!-- Content Inner End -->

			</div>
			<!-- Content End -->
			
            <Footer/>

		</div>
	</div>
