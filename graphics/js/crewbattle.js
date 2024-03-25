// You can access the NodeCG api anytime from the `window.nodecg` object
// Or just `nodecg` for short. Like this!:
const round = nodecg.Replicant('round');
const playerinfo = nodecg.Replicant('playerinfo');
NodeCG.waitForReplicants(playerinfo, round).then(() =>{
        
    playerinfo.on('change', (value) => {
        document.getElementById('stocks_p1').innerHTML = value.p1.score;
        document.getElementById('stocks_p2').innerHTML = value.p2.score;
        document.getElementById('spn_p1').innerHTML = value.p1.name;
        document.getElementById('spn_p2').innerHTML = value.p2.name;
    })
    round.on('change', (value) => {
        document.getElementById('spn_round').innerHTML = value
    })
})

