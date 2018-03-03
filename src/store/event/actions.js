export default {
    eventdone: ({commit}, param) => commit('EVENTDONE', {items: param}),
    addSchool: ({commit}, param) => commit('ADDSCHOOL', {rankList: param})
}