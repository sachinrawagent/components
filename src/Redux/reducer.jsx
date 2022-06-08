const initstate={
    product:""
}

export const reducer=(state=initstate,{type,payload})=>{

    switch (type){
        case "ADD_DATA":

            return {
                ...state,
                product:payload
            }

            default:
                return state;
    }
}