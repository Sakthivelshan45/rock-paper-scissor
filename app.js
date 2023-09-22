const computerchoicedisplay = document.getElementById('computer-choice');
const yourchoicedisplay = document.getElementById('your-choice');
const resultdisplay = document.getElementById('result');
const possiblechoices = document.querySelectorAll('button');
let userchoice
let computerchoice
let result

possiblechoices.forEach(possiblechoices => possiblechoices.addEventListener('click',(e)=>
{
userchoice = e.target.id
yourchoicedisplay.innerHTML = userchoice
genaratecomputerchoice()
getResult()
}))

function genaratecomputerchoice()
{
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if (randomNumber === 1)
    {
     computerchoice = 'rock'   
    }

    if (randomNumber === 2)
    {
        computerchoice = 'paper'
    }

    if(randomNumber === 3)
    {
       computerchoice = 'scissors'
    }
    computerchoicedisplay.innerHTML = computerchoice

}

function getResult()
{
    if (computerchoice === userchoice)
    {
        result = 'oops its draw!'
    }

    if (computerchoice === 'rock' && userchoice === 'paper')
    {
        result = 'you lose!'
    }

    if (computerchoice === 'rock' && userchoice === 'scissors')
    {
        result = 'you lost!'
    }

    if (computerchoice === 'paper' && userchoice === 'scissors')
    {
        result = 'yeah ! you win my boy'
    }

    if (computerchoice === 'paper' && userchoice === 'rock')
    {
        result = 'yeah my you got it and you win!'
    }

    if (computerchoice === 'scissors' && userchoice === 'rock')
    {
        result = 'im sorry! you lose'
    }

    if (computerchoice === 'scissors' && userchoice === 'paper')
    {
        result = 'you lost my boy! try again...!'
    }

    resultdisplay.innerHTML = result
}



