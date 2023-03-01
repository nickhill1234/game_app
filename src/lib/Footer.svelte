<script>
      import foot_image from '$lib/assets/footer.webp';

</script>
<footer id="footer" style="background-image: url({foot_image})">
    <div class="footer-top">
        <div class="row-flex">
            <div class="column width-6 offset-3 center">
                <div class="widget">
                    <h3>Designed by <a href="https://funtownstudio.com/" target=”_blank” class="a">Funtown Studios</a> inc.</h3>
                    <p class="copyright"> &copy; MoneyMathGames.com is a product of Funtown Limited. All Rights Reserved.</p>    
                    <ul class="social-list list-horizontal center mb-5">
                        <li><a href="https://www.instagram.com/mathformoneyapp/"><span class="icon-instagram-with-circle large"></span></a></li>
                      </ul>
                </div>
            </div>
        </div>
    </div>   
</footer>

<style>
    footer{
        width: 100%;
        height: 30em;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-image: url(%sveltekit.assets%/rectangle.webp);
    }

    .footer-top { 
        padding-top: 9rem;
        padding-bottom: 0;
    }

    .row-flex {
        height: auto;
        display: flex;
        flex-wrap: wrap;
        align-items: initial;
    }

    .width-6 {
        width: 50%;
    }

    .offset-3 {
        margin-left: 25%;
    }

	h3 {
        margin-top: 0;
        font-size: 1.862rem;
	    letter-spacing: 0;
	    color: #fff
	}

    a {
        margin-top: 0;
        font-size: 1.862rem;
	    letter-spacing: 0;
	    color: #fff
	}

    p {
        margin-bottom: 0;
	    font-size: 1.1rem;
	    float: none;
        padding-bottom: 2%;
    }

</style>
