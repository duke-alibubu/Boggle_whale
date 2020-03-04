const fs = require("fs")
const dictArray = fs.readFileSync("./static/dictionary.txt", "utf-8").split('\n')
const dictLength = dictArray.length

const AlgorithmSolver = class {
    to2Darr(charArrayInput){
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
        return arr
    }
    
    checkWordinBoard(word, board){
        if (word.length > 16)
            return false
        const arr = to2Darr(board)
        for (i = 0; i < 4; i++){
            for (j = 0; j < 4; j++)
                if (arr[i][j] == word[0] || arr[i][j] == "*"){
                    if (findMatch(arr, word, i, j, 0))
                        return true
                }
        }
        return false
    }
    
    findMatch(arr, word, i, j, level){
        if (level == word.length)
            return true
        if (i < 0 || j < 0 || j > 3 || i > 3)
            return false
        
        if (arr[i][j] == word[level] || arr[i][j] == "*"){
            //mark this cell as visited
            temp = arr[i][j]
            arr[i][j] = "#"
    
            //find next pattern in 8 directions
            res = findMatch(arr, word, i - 1, j, level + 1) ||
                findMatch(arr, word, i + 1, j, level + 1) ||
                findMatch(arr, word, i, j - 1, level + 1) ||
                findMatch(arr, word, i, j + 1, level + 1) ||
                findMatch(arr, word, i - 1, j + 1, level + 1) ||
                findMatch(arr, word, i + 1, j + 1, level + 1) ||
                findMatch(arr, word, i + 1, j - 1, level + 1) ||
                findMatch(arr, word, i - 1, j - 1, level + 1)
            
            //upon finishing return this cell
            arr[i][j] = temp
            return res
        }
        else 
            return false
    }
    
    binarySearchForWord(word, lower, upper){
        //binary search to search for word
        if (lower > upper)
            return false
        const mid = Math.floor((upper + lower) / 2)
        const check = dictArray[mid]
        if (check == word)
            return true
        else if (check > word)
            return binarySearchForWord(word, lower, mid - 1)
        else
            return binarySearchForWord(word, mid + 1, upper)
    }
    validateBoardString(board){
        const charArray = board.split(", ")
        if (charArray.length != 16)
            return false
        charArray.forEach(character => {
            if (!"ABCDEFGHIJKLMNOPQRSTUVWXYZ*".includes(character))
                return false
        })
        return true
    }
    loadDefaultBoard(){
        return fs.readFileSync("./static/test_board.txt", "utf-8")
    }
}

const algoSolver = new AlgorithmSolver()

module.exports = algoSolver

