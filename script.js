var nums = {
    '18 x 2 / 4': '9',
    '76 / 4 + 18': '37',
    '9 x sqrt(9) / 3!': '9',
    '99 x 2 + 1': '199',
    '71 - 35 + 68': '104',
    'first 6 numbers of pi': '3.14159',
    '99 - 156 + 3': '-54',
    '45/5 - 7': '2',
    '87 x 4': '348',
    '61 - 45 x 3': '-74'
}

var nums2 = [
    '18 x 2 / 4',
    '76 / 4 + 18',
    '9 x sqrt(9) / 3!',
    '99 x 2 + 1',
    '71 - 35 + 68',
    'first 6 numbers of pi',
    '99 - 156 + 3',
    '45/5 - 7',
    '87 x 4',
    '61 - 45 x 3'
]

let index = Math.floor(Math.random() * 10)
let typingDiv = document.getElementById("typing")
let span = document.createElement('span');
span.innerText = nums2[index]
let answer = nums[nums2[index]]
typingDiv.appendChild(span);

document.addEventListener("keydown", ({key}) => {
    if (key === "Enter") {
        Check()
    }
})


function Check(){
    var useranswer = document.getElementById("answer").value;
    if (useranswer === answer){
        span.innerText = ""
        var answerspace = document.getElementById("answer")
        answerspace.value = ""
        index = Math.floor(Math.random() * 10)
        typingDiv = document.getElementById("typing")
        span = document.createElement('span');
        span.innerText = nums2[index]
        answer = nums[nums2[index]]
        typingDiv.appendChild(span);
    } 
}

