<script>
	import Footer from "$lib/Footer.svelte";

    export let data;

    let year = '2023'

</script>


<svelte:head>
		<meta content="width=device-width,initial-scale=1.0,maximum-scale=5.0" name="viewport">		

		<!-- Primary Meta Tags -->
		<title>Earn Money With A Math Treasure Hunt! | Money Math Games</title>
		<meta name="title" content="Treasure Hunt | Money Math Games">
		<meta name="description" content="Play this math treasure hunt game where you search for the math question that has money hidden in it!">

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
				<div class="section-block" style="background-image:url(./rectangle.webp)">
					<div class="row flex">
						<div class="column width-10 offset-1 center">
							<div class="title-container">
								<div class="title-container-inner color-grey-ultralight">
									<h1 class="title-xlarge mb-150">Math Treasure Hunt!</h1>
									<a href="#treasure_hunt" class="button large bkg-orange-light bkg-hover-theme color-grey-ultralight color-hover-blue-light left mb-20">Click here to play</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- Intro Title End -->
		

				<!-- Content Inner -->
				<div class="section-block content-inner blog-masonry full-width pt-30">
					<div class="row">
						<div class="column width-12">
							<div class="row grid content-grid-4 clearfix">
								<div class="column width-10 offset-1 center">
								<div class="title-container">

								<h3 class="title-medium mb-10"><a id="treasure_hunt">We've hidden an NFT worth $20 in one of the questions below!</a></h3>
									<h4 class="title-small mb-30">Submit your answers to the math problems below and stand a chance to unlock the hidden NFT.</h4>
									<p>Simply attach your wallet and submit your answer to each question below and stand a chance to win. 
									<br>We announce the winners weekly on our <a href="https://www.instagram.com/mathformoneyapp/" target=”_blank”>Instagram</a> every Friday. Follow us to see the unlock each week!
								</p>

								<a href="https://metamask.io/download/" target=”_blank” class="button large bkg-orange-light bkg-hover-theme color-grey-ultralight color-hover-blue-light left mb-20">Download MetaMask To Start</a>
								</div>
								</div>


                            {#each data.posts as post (post.slug)}
         
								<div class="grid-item grid-sizer">
									<article class="post">
										<div class="post-media">
											<div class="thumbnail img-scale-in">
												<a class="overlay-link" href={`/treasure-hunt/${post.slug}`}>
													<img src={post.page_thumbnail} alt=""/>
													<span class="overlay-info">
														<span>
															<span>
                                                                <a href={`/treasure-hunt/${post.slug}`}>{post.question}</a>

															</span>
														</span>
													</span>
												</a>
											</div>
										</div>
										<div class="post-content with-background">
											<h2 class="post-title center"><a href={`/treasure-hunt/${post.slug}`}>{post.question}</a></h2>
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
