const quizData=[
    {
        question:'1. How old are you?',
        a:'10',
        b:'17',
        c:'26',
        d:'110',
        correct:'c'
    }
    ,
    {
        question:'2. What is ur favorite programming language?',
        a:'java',
        b:'c',
        c:'c++',
        d:'javascript',
        correct:'d'


    }
    ,
    {
        question:'3. Who is the prisident of us',
        a:'james',
        b:'donald',
        c:'marcus',
        d:'binny',
        correct:'b'

    }
    ,
    {
         question:'4. what is HTML',
         a:'hyper markup language',
         b:'josepj',
         c:'bargain',
         d:'jaideep',
         correct:'a'
    }
    ,
    {
        question:'5. What year java script is launched',
        a:'1996',
        b:'1995',
        c:'2018',
        d:'none of the above',
        correct:'d'
    }


]
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('sub');
const answerEls = document.querySelectorAll(".answer");


let currentQuiz = 0;
let score=0;
loadquiz();

function loadquiz(){
    deselected();
   const currentquizdata = quizData[currentQuiz];

   questionEl.innerText=currentquizdata.question;
   a_text.innerText = currentquizdata.a;
   b_text.innerText = currentquizdata.b;
   c_text.innerText = currentquizdata.c;
   d_text.innerText = currentquizdata.d;

}
function getselected()
{
    const answerEls = document.querySelectorAll(".answer");
    let answer  = undefined;
    answerEls.forEach((answerEl)=>{
        if (answerEl.checked){
            answer = answerEl.id;
        }
    })
    return answer;
}
function deselected(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
    })

}
submitBtn.addEventListener('click',()=>{

    const answer = getselected();
    if (answer)
    {
        if (answer === quizData[currentQuiz].correct)
            {
                score ++;

            }
        currentQuiz++ ;

    
        if(currentQuiz<quizData.length)
        {
            loadquiz();
        }
        else{

            quiz.innerHTML = `<h2>your answer is correct ${score}/${quizData.length} questions.</h2>`
        }
    }    
        
});



