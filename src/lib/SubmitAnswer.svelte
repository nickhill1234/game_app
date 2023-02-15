<script>
    export let web3Props = {provider: null, signer: null, account: null, chainId: null};
	let time = new Date();

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

</script>

<div class="column width-10 offset-1 center">
        <h3>Your wallet address is:</h3>
        <p>{web3Props.account}</p>
</div>
<div class="column width-10 offset-1 center">
  {#if submissionStatus === 'submitting'}
    <p>Submitting...</p>
  {:else if submissionStatus === 'failed'}
    <p>Submission failed.</p>
  {:else if submissionStatus === 'success'}
    <p>Submission success.</p>
  {:else}
    <form on:submit|preventDefault={handleSubmit}>
      <label for="name">
      </label>
      <input
        type="hidden"
        name="name"
        aria-label="name"
        placeholder=""
        value={web3Props.account}
      />
      <label for="answer">
        <span>Enter your answer in the block below then click submit</span>
      </label>
      <input
        name="answer"
        aria-label="name"
        placeholder="Type your answer"
        required
      />
      <label for="time">
      </label>
      <input
        type="hidden"
        name="time"
        aria-label="name"
        value={time}
        required
      />
      <input type="submit" />
    </form>
  {/if}
</div>
