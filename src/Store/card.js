const initialState = []

function cardReducer(state=initialState,action){
  if(action.type==="addItem"){
    let creatDate = [...state]
    if(creatDate.indexOf(action.piload)==-1 && action.piload !== undefined){
      creatDate.push(action.piload)
    }
    return state = creatDate
  };
  if(action.type==="del"){
    let creatDel = [...state]
    let son = action.piload
    creatDel.splice(son,1)
    return state = creatDel
  };
  if(action.type==="dec"){
    let creatDel = [...state]
    let son = action.piload
    creatDel.map((item)=>{
      if(item==son){
        if(item.count>1){
          item.count=item.count-1
        }
      }
    })
    return state = creatDel
  };
  if(action.type==="inc"){
    let creatDel = [...state]
    let son = action.piload
    creatDel.map((item)=>{
      if(item==son){
        item.count=item.count+1
      }
    })
    return state = creatDel
  };
  
return state
}
export {cardReducer}

