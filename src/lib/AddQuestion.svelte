<script>
    import {ethers} from 'ethers';
    export let web3Props = {provider: null, signer: null, account: null, chainId: null};
    $: question = '';
    $: answer = '';
    $: hashedAnswer = '';
    async function addQuestion(){
        hashedAnswer = ethers.utils.keccak256(
            ethers.utils.solidityPack(
                ['bytes32','string'],
                [ethers.utils.formatBytes32String('123123123'), answer]
            )
        );
        web3Props.contract.createQuiz(question, hashedAnswer);
    }
</script>

<div class="wrapper">
    <span class='input-label'>Add question:</span>
    <input bind:value={question}/>
    <span class='input-label'>Add answer:</span>
    <input bind:value={answer}/>
    <button on:click={addQuestion}>Add question</button>  
</div>