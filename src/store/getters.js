/*包含多个基于state的getter计算属性的对象 */
export default{
    totalCount(state){
        return state.cartFoods.reduce((preTotal,food)=>preTotal+food.count,0)
    },
    totalPrice(state){
        return state.cartFoods.reduce((preTotal,food)=>preTotal+food.count*food.price,0)
    },
    positiveSize(state){
        let num = 0;
        state.ratings.forEach((item,index)=>{
            if(item.rateType === 0){
                num ++
            }
        })
        return num
    }
}