<script>
    export let data;
    import Footer from "../../../lib/Footer.svelte";
    import SubmitAnswer from '$lib/SubmitAnswer.svelte';

    let app_name = "Money Math Games"
    let my_url = data.slug;
    let single_question = data.question;
    
</script>


<svelte:head>
		<meta content="width=device-width,initial-scale=1.0,maximum-scale=5.0" name="viewport">		

		<!-- Primary Meta Tags -->
		<title>{data.question} | $20 for weekly winner!</title>
		<meta name="title" content="{data.question} | $20 for weekly winner!">
		<meta name="description" content="{data.question}? {data.meta_description}">

		<link rel="canonical" href="https://www.moneymathgames.com/math-treasure-hunt/{data.slug}" />

</svelte:head>		


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
                    </div>
                </div>
            </div>
        </header>
        <!-- Header End -->

        <!-- Content -->
        <div class="content clearfix">

            <!-- Intro Title -->
            <div class="section-block" style="background-image:url(../header.webp)">
            <!-- <div class="section-block intro-title-2"> -->

                <div class="row">
                    <div class="column width-12 center">
                        <div class="title-container">
                            <div class="title-container-inner color-grey-ultralight">
                                <h1 class="title-large mb-30">
                                    {data.question}
                                </h1>
                                <img alt="{data.question}" src="../{data.nft_chest_pic}" />
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
                        <p class="lead weight-regular mb-70">Put your math word problem skills to solve this {data.type_of_question} question and find the answer to: <br> <b>{data.question}?</b>
                            <br><br> Stand a chance to win a weekly NFT worth $20 if you answer the question correctly! 
                            <br>Follow us on <a href="https://www.instagram.com/moneymathgames/" target=”_blank”>Instagram</a> or <a href="https://twitter.com/moneymathgames" target=”_blank”>Twitter</a> to see winners each Friday.
                            <br><br>
                            You need to download a <b><a href="https://metamask.io/download/" target=”_blank”>MetaMask Wallet</b>  before you can submit your answer. 
                        </p>
                    </div>
                    <div style="display: contents">
                        <SubmitAnswer page_url={my_url} single_question={single_question}/>
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
                                    <h2 class="mb-30"><u>Hints to help you solve "{data.question}"</u></h2>
                                    <div id="accordion-1-panel-1">
                                        <div class="accordion-content">
                                            <p class="lead mb-30">{data.hints_intro}
                                            <br><br>
                                            <b>{data.hint_1_title}</b> {data.hint_1}
                                            <br><br>
                                            <b>{data.hint_2_title}</b> {data.hint_2}
                                            <br><br>
                                            <b>{data.hint_3_title}</b> {data.hint_3}  
                                            <br><br>
                                            <b>Practice, practice, practice:</b> Solving {data.type_of_question} questions takes practice, so keep trying different questions to build your skills.
                                            </p>
                                        </div>
                                    </div>
                                    <h3 class="mb-30"><u>Need more help? Try this step by step guide to work through this {data.type_of_question} question.</u></h3>
                                        <div class="accordion-content">
                                            <p class="lead mb-30">{data.step_intro}
                                                <br><br>
                                                <b>Step 1:</b> {data.step_1}
                                                <br><br> 
                                                <b>Step 2:</b> {data.step_2}
                                                <br><br>
                                                <b>Step 3:</b> {data.step_3}
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

        <Footer/>
    </div>
</div>



