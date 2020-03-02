function solveBoggle(charArrayInput){
    //must ensure that charArray has exactly 16 elements
    var charArray = charArrayInput.split(", ")
    var arr = []
    for (i = 0; i < 4; i++){
        var arr_element = []
        for (j = 0; j < 4; j++){
            arr_element.push(charArray[4*i + j])
        }
        arr.push(arr_element)
    }
    console.log(arr)
}

solveBoggle("A, C, E, D, L, U, G, *, E, *, H, T, G, A, F, K")