// You can access the NodeCG api anytime from the `window.nodecg` object
// Or just `nodecg` for short. Like this!:
const best_of = nodecg.Replicant('best_of');
const round = nodecg.Replicant('round');
const playerinfo = nodecg.Replicant('playerinfo');
NodeCG.waitForReplicants(best_of, playerinfo, round).then(() =>{
    best_of.on('change', (value) => {
        for (x = 0;x < document.getElementById('dv_p1score').children.length; x++){
            document.getElementById('dv_p1score').children[x].style = "display: none;"
        }
        for (i = 0; i < Math.trunc(value / 2) + 1; i++){
            document.getElementById('dv_p1score').children[i].style = "display: inline;"
        }
        for (x = 0;x < document.getElementById('dv_p2score').children.length; x++){
            document.getElementById('dv_p2score').children[x].style = "display: none;"
        }
        for (i = 0; i < Math.trunc(value / 2) + 1; i++){
            document.getElementById('dv_p2score').children[i].style = "display: inline;"
        }
    })
    
    playerinfo.on('change', (value) => {
        for (x = 0;x < document.getElementById('dv_p2score').children.length; x++){
            document.getElementById('dv_p1score').children[x].style.background = "black"
            document.getElementById('dv_p2score').children[x].style.background = "black"
        }
        for (i = 0; i < value.p1.score; i++) {
            document.getElementById('dv_p1score').children[i].style.background = "white"
        }
        for (i = 0; i < value.p2.score; i++) {
            document.getElementById('dv_p2score').children[i].style.background = "white"
        }
        document.getElementById('spn_p1').innerHTML = value.p1.name;
        document.getElementById('spn_p2').innerHTML = value.p2.name;
    })
    round.on('change', (value) => {
        document.getElementById('spn_round').innerHTML = value
    })
})

