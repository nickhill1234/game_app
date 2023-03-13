<script>

import SubmitScore from "$lib/SubmitScore.svelte"

</script>

<div id="game-div" class="column width-10 offset-1 center">
    <h1>Jump Math!</h1>
    <p>Each time you chose the correct answer you earn points. 
        <br>If you select the wrong answer your loose points</p>
    <div style="display: contents">
        <SubmitScore/>
    </div>
</div>