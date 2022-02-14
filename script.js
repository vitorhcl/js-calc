function calc() {
    try {
        result = math.evaluate(document.getElementById("num-input").value);
    } catch (error) {
        console.log('Error: ', error)
        return
    }
    document.getElementById("num-input").value = result;
}
function add(string) {
    document.getElementById("num-input").value += string;
}

function clearInput() {
    document.getElementById("num-input").value = '';
}
