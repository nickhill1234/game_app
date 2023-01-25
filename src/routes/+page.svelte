<script> 
    import WalletConnect from '$lib/WalletConnect.svelte';
    import AddQuestion from '$lib/AddQuestion.svelte';
    import AllQuestions from '$lib/AllQuestions.svelte';
    import contractAbi from '../contracts/QuizFactory.json';
    const contractAddr = '0x989C0BFE382B645e79Ab9716C28C6d71e85C6802';

    export let web3Props ={
        provider: null,
        signer: null,
        account: null,
        chainId: null,
    };
</script>

{#if !web3Props.account}
    <WalletConnect bind:web3Props {contractAddr} {contractAbi}/>
{:else}
    <AllQuestions bind:web3Props/>
{/if}

