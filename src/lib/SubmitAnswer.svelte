<script>
  import {ethers} from 'ethers';
	import TwitterShare from '$lib/TwitterShare.svelte';

  export let web3Props = {provider: null, signer: null, account: null, chainId: null};
  
  export let page_url;
  export let single_question;

  let localUrl = page_url;
  let localQuestion = single_question;

  let time = new Date();
  let answer = '';


  let submissionStatus = ''
  const handleSubmit = async data => {
    submissionStatus = 'submitting'
    const formData = new FormData(data.currentTarget)
    const res = await fetch('/contact-form.json', {
      method: 'POST',
      body: formData,
    })
    const { message } = await res.json()
    submissionStatus = message
  } 

  async function connectWallet() {
        let provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
        await provider.send('eth_requestAccounts',[]);
        const signer = provider.getSigner();
        const account = await signer.getAddress();
        const chainId = await signer.getChainId();
        web3Props = {provider, signer, account, chainId};
        wallet_load = false;
    }

  let wallet_load = true;
  

</script>

<div class="column width-10 offset-1 center mb-70">
{#if !web3Props.account}
  <button on:click={connectWallet}>Attach Wallet</button>
  <p class="stuck">Not working? Make sure you have a Metamask wallet downloaded before you try attach a wallet</p>
{:else}
  <p> Your wallet address is:</p>
  <p>{web3Props.account}</p>
{/if}
</div>

<div class="column width-10 offset-1 center">
  {#if submissionStatus === 'submitting'}
    <p>Submitting...</p>
  {:else if submissionStatus === 'failed'}
    <p>Submission failed.</p>
  {:else if submissionStatus === 'success'}
    <p>Submission success! Your answer has been recorded.
      <br>Solve the remaining <a href="https://www.moneymathgames.com/math-treasure-hunt" target=”_blank”>Math Treasure Hunt</a> questions to find the mystery $20 NFT!
    </p>
    <TwitterShare
    text="I solved {localQuestion} to win a $20 NFT at "
    url="https://www.moneymathgames.com/math-treasure-hunt/{localUrl}   "
    hashtags="nft"
  />
  {:else}
    <form on:submit|preventDefault={handleSubmit}>
      <label for="answer">
        <span>Enter your answer in the block below</span>
      </label>
        <input 
          name="answer"
          aria-label="name"
          placeholder="Type your answer"
          bind:value = {answer}
          required
        />
      <label for="name">
          </label>
          <input
            type="hidden"
            name="name"
            aria-label="name"
            placeholder=""
            value={web3Props.account}
          />
        <label for="insta">
            <span>(Optional) Enter your Instagram handle so we can message you if you win! 
              <br>Make sure you follow our Instagram  <a href="https://www.instagram.com/moneymathgames/" target=”_blank”>Math Money Games</a> to receive the DM.</span>
          </label>
          <input
            name="insta"
            aria-label="insta"
            placeholder="@example_handle"
          />
        <label for="time">
          </label>
          <input
            type="hidden"
            name="time"
            aria-label="name"
            value={time}
          />
        <input type="submit" disabled="{wallet_load}"/>
      </form>
  {/if}
</div>

<style>
  .stuck{
    font-size: 1.25rem;
	  line-height: 1.2;
	  font-weight: 100;
	  font-style: normal;
  }
 
</style>