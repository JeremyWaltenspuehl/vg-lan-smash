const best_of = nodecg.Replicant('best_of');
const playerinfo = nodecg.Replicant('playerinfo');
const round = nodecg.Replicant('round');
const reset_switch = document.getElementById('chk_sure');
NodeCG.waitForReplicants(best_of, playerinfo, round).then(() =>{

reset_switch.addEventListener('change', () => {
  if (reset_switch.checked === true) {
    document.getElementById('reset_button').disabled = false;
  }
  else if (reset_switch.checked === false) {
    document.getElementById('reset_button').disabled = true;
  }
})


playerinfo.on('change', (value) => {
  document.getElementById('spn_score_p1').innerHTML = value.p1.score
  document.getElementById('spn_score_p2').innerHTML = value.p2.score
  document.getElementById('in_p1name').value = value.p1.name
  document.getElementById('in_p2name').value = value.p2.name
})

})
function p1_up_score() {
  playerinfo.value.p1.score = playerinfo.value.p1.score + 1
}
function p1_down_score() {
  playerinfo.value.p1.score = playerinfo.value.p1.score - 1
}
function p2_up_score() {
  playerinfo.value.p2.score = playerinfo.value.p2.score + 1
}
function p2_down_score() {
  playerinfo.value.p2.score = playerinfo.value.p2.score - 1
}
function reset_score() {
  playerinfo.value.p1.score = 0
  playerinfo.value.p2.score = 0
  reset_switch.checked = false;
  document.getElementById('reset_button').disabled = true;
}
function update_playernames(){
  playerinfo.value.p1.name = document.getElementById('in_p1name').value
  playerinfo.value.p2.name = document.getElementById('in_p2name').value
}
function update_round() {
  round.value = document.getElementById('sel_round').value;
}
function swap_players() {
  let temp_playerinfo = playerinfo.value

  playerinfo.value.p1.score = temp_playerinfo.p2.score
  playerinfo.value.p2.score = temp_playerinfo.p1.score
  playerinfo.value.p1.name = temp_playerinfo.p2.name
  playerinfo.value.p2.name = temp_playerinfo.p1.name
}