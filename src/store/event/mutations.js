export default{
	EVENTDONE(states,obj){
		/*console.log(states.count)*/
		console.log(obj)
	},
	ADDSCHOOL(states,rankList){
		console.log(rankList)
		states.rankList = rankList;
		console.log(states.rankList)
	}
}