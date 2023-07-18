//inisiasi soal dalam quiz
const questions = [
    {
        question: "Pengelolaan Sampah yang benar yang dapat di lakukan di rumah adalah...",
        optionA: "a. Pembakaran",
        optionB: "b. Pemilahan",
        optionC: "c. Pengangkutan",
        optionD: "d. Pengolahan Akhir",
        correctOption: "optionB"
    },

    {
        question: "Satuan karya (Saka) Pramuka binaan lingkungan hidup dinamakan apa?",
        optionA: "a. Saka Bayangkara",
        optionB: "b. Saka Bakti Husada",
        optionC: "c. Saka Kalpataru",
        optionD: "d. Saka Wanabakti",
        correctOption: "optionC"
    },

    {
        question: "Bagaimana cara yang paling tepat  merubah sungai di Kota Pekalongan menjadi sungai yang bebas dari pencemaran?",
        optionA: "a. Melakukan pengawasan terhadap industri yang menghasilkan air limbah",
        optionB: "b. Memberikan bantuan IPAL kepada pelaku industri",
        optionC: "c. Melakukan sosialisasi kepada pelaku industri",
        optionD: "d. Membangun IPAL Komunal untuk mengolah semua air limbah yang dihasilkan industri di Kota Pekalongan",
        correctOption: "optionA"
    },

    {
        question: "Apa nama Undang Undang yang mengatur tentang perlindungan dan pengelolaan lingkungan hidup?",
        optionA: "a. Undang Undang Nomor 32 tahun 2008 tentang Perlindungan dan Pengelolaan Lingkungan Hidup",
        optionB: "b. Undang Undang Nomor 32 tahun 2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup",
        optionC: "c. Undang Undang Nomor 32 tahun 2010 tentang Perlindungan dan Pengelolaan Lingkungan Hidup",
        optionD: "d. Undang Undang Nomor 32 tahun 2011 tentang Perlindungan dan Pengelolaan Lingkungan Hidup",
        correctOption: "optionB"
    },

    {
        question: "Apa yang dimaksud dengan Lubang Resapan Biopori?",
        optionA: "a. Lubang untuk sampah rumah tangga",
        optionB: "b. Lubang dengan bor pada tanah pekarangan untuk mengolah sampah rumah tangga",
        optionC: "c. Lubang dengan kedalaman + 1m diisi dengan sampah organik dimanfaatkan sebagai resapan air hujan",
        optionD: "d. Lubang yang berisi pompa untuk menyedot air dan disalurkan pada sungai terdekat",
        correctOption: "optionC"
    },

    {
        question: "Berbagai manfaat dari Lubang resapan biopori kecuali...",
        optionA: "a. mencegah penyakit diare",
        optionB: "b. mengurangi resiko banjir",
        optionC: "c. mengurangi sampah organik",
        optionD: "d. menghasilkan kompos",
        correctOption: "optionA"
    },

    {
        question: "Berikut ini adalah salah satu unit pengolahan limbah cair, kecuali...",
        optionA: "a. Bak equalisasi",
        optionB: "b. Bak pengendapan",
        optionC: "c. Bak pendinginan",
        optionD: "d. Bak anaerob",
        correctOption: "optionC"
    },

    {
        question: "Menteri Lingkungan Hidup dan Kehutanan RI masa Kabinet Kerja Pemerintahan Presiden Ir. Joko Widodo saat ini adalah...",
        optionA: "a. Prof. Dr. Gusti Muhammad Hatta",
        optionB: "b. Prof. Dr. Emil Salim",
        optionC: "c. Dr. Ir. Siti Nurbaya Bakar, M.Sc",
        optionD: "d. Dr. Baltasar Kambuaya",
        correctOption: "optionC"
    },

    {
        question: "Kesatuan ruang dengan semua benda, daya, keadaan, dan makhluk hidup, termasuk manusia dan perilakunya, yang mempengaruhi alam itu sendiri, kelangsungan perikehidupan, dan kesejahteraan manusia serta makhluk hidup lain disebut dengan...",
        optionA: "a. Ekosistem",
        optionB: "b. Ekologi",
        optionC: "c. Lingkungan hidup",
        optionD: "d. Tata lingkungan",
        correctOption: "optionC"
    },

    {
        question: "Sisa suatu usaha dan/atau kegiatan adalah...",
        optionA: "a. Sampah",
        optionB: "b. Limbah",
        optionC: "c. Polusi",
        optionD: "d. Polutan",
        correctOption: "optionB"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    /* let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    } */

    //grade color only
    let gradeColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        gradeColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        gradeColor = "orange"
    }
    else if (playerScore >= 7) {
        gradeColor = "green"
    }

    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    /* document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor */
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('grade-percentage').style.color = gradeColor
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}