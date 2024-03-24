module.exports = function (nodecg) {
    nodecg.Replicant('best_of', {defaultValue: 3})
    nodecg.Replicant('playerinfo', {defaultValue:{
        p1: {
            name: "peiass",
            score: 0
        },
        p2: {
            name: "wixxer",
            score: 0
        }
    }
    })
    nodecg.Replicant('round', {defaultValue: "Pools"})
};
