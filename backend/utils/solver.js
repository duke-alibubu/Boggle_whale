const fs = require("fs")
const dictArray = fs.readFileSync("./static/dictionary.txt", "utf-8").split('\n')

const AlgorithmSolver = class {
    constructor(dictArray){
        this.dictArray = dictArray
        this.dictLength = this.dictArray.length
    }
    
    to2Darr(charArrayInput){
        //must ensure that charArray has exactly 16 elements
        var charArray = charArrayInput.split(", ")
        var arr = []
        for (let i = 0; i < 4; i++){
            var arr_element = []
            for (let j = 0; j < 4; j++){
                arr_element.push(charArray[4*i + j])
            }
            arr.push(arr_element)
        }
        return arr
    }
    
    checkWordinBoard(word, board){
        if (word.length > 16)
            return false
        const arr = this.to2Darr(board)
        for (let i = 0; i < 4; i++){
            for (let j = 0; j < 4; j++)
                if (arr[i][j] == word[0] || arr[i][j] == "*"){
                    if (this.findMatch(arr, word, i, j, 0))
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
            let temp = arr[i][j]
            arr[i][j] = "#"
    
            //find next pattern in 8 directions
            let res = this.findMatch(arr, word, i - 1, j, level + 1) ||
                this.findMatch(arr, word, i + 1, j, level + 1) ||
                this.findMatch(arr, word, i, j - 1, level + 1) ||
                this.findMatch(arr, word, i, j + 1, level + 1) ||
                this.findMatch(arr, word, i - 1, j + 1, level + 1) ||
                this.findMatch(arr, word, i + 1, j + 1, level + 1) ||
                this.findMatch(arr, word, i + 1, j - 1, level + 1) ||
                this.findMatch(arr, word, i - 1, j - 1, level + 1)
            
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
        const check = this.dictArray[mid]
        if (check === word)
            return true
        else if (check > word)
            return this.binarySearchForWord(word, lower, mid - 1)
        else
            return this.binarySearchForWord(word, mid + 1, upper)
    }
    validateBoardString(board){
        let res = true
        const charArray = board.split(", ")
        if (charArray.length != 16)
            return false
        charArray.forEach(character => {
            if (!"ABCDEFGHIJKLMNOPQRSTUVWXYZ*".includes(character))
                res =  false
        })
        return res
    }
    loadDefaultBoard(){
        return fs.readFileSync("./static/test_board.txt", "utf-8").slice(0, -1)
    }
    getPointForWord(word, board){
        if (!this.checkWordinBoard(word, board) || !this.binarySearchForWord(word.toLowerCase(), 0, this.dictLength - 1) || word.length <= 2)
            return 0
        else {
            if (word.length == 3 || word.length == 4)
                return 1
            else if (word.length == 5)
                return 2
            else if (word.length == 6)
                return 3
            else if (word.length == 7)
                return 5
            else 
                return 11
        }
    }
}

const algoSolver = new AlgorithmSolver(dictArray)

module.exports = algoSolver

