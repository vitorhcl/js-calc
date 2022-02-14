let clear = false
function calc() {
    try {
        result = math.evaluate(document.getElementById("num-input").value);
    } catch (error) {
        console.log('Error: ', error)
        clear = true
        return
    }
    if(result.toString() != document.getElementById("num-input").value){
        console.log(result.toString(), document.getElementById("num-input").value)
        document.getElementById("num-input").value = result;
    } else {
        clear = true;
    }
}
function add(string) {
    if(clear){
        clearInput();
    }
    document.getElementById("num-input").value += string;
    clear = false
}

function clearInput() {
    document.getElementById("num-input").value = '';
}
