//try fullscreen
/*document.documentElement.requestFullscreen().catch((e) => {
    console.log(e);
 }); */

 var elem = document.documentElement;

/* View in fullscreen */
/*function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { // Safari 
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { // IE11
    elem.msRequestFullscreen();
  }
}

openFullscreen(); */

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
        question: "Berikut termasuk upaya penyelamatan lingkungan dari kerusakan, kecuali..",
        optionA: "a. Penenaman mangrove",
        optionB: "b. Pemanfaatan limbah tahu menjadi biogas",
        optionC: "c. Reboisasi",
        optionD: "d. Pembalakan liar",
        correctOption: "optionD"
    },

    {
        question: "Sampah / limbah yang termasuk limbah B3 adalah...",
        optionA: "a. Oli bekas",
        optionB: "b. Daun-daunan",
        optionC: "c. Botol air mineral",
        optionD: "d. Plastik bekas kemasan",
        correctOption: "optionA"
    },

    {
        question: "Dampak perubahan iklim yang sudah di rasakan menusia adalah...",
        optionA: "a. Rob",
        optionB: "b. Suhu udara meningkat",
        optionC: "c. Meningkatkan muka air laut",
        optionD: "d. Semua benar",
        correctOption: "optionD"
    },

    {
        question: "Gas berbahaya yang di hasilkan dari asap kendaraan bermotor adalah...",
        optionA: "a. Karbondioksida",
        optionB: "b. Karbonmonoksida",
        optionC: "c. Metan",
        optionD: "d. Oksigen",
        correctOption: "optionB"
    },

    {
        question: "Gerakan penghijauan terus di galakkan karena banyak manfaat dari pohon, yaitu menghasilkan...",
        optionA: "a. Karbondioksida",
        optionB: "b. Karbonmonoksida",
        optionC: "c. Metan",
        optionD: "d. Oksigen",
        correctOption: "optionD"
    },

    {
        question: "Terjadinya banjir dan tanah longsor diakibatkan perbuatan manusia yaitu...",
        optionA: "a. Pembalakan liar",
        optionB: "b. Pembakaran sampah",
        optionC: "c. Buang sampah sembarangan",
        optionD: "d. Buang limbah sembarangan",
        correctOption: "optionA"
    },

    {
        question: "Berikut merupakan upaya pelestarian lingkungan yaitu...",
        optionA: "a. Hemat dalam penggunaan air",
        optionB: "b. Mematikan peralatan listrik yang tidak di gunakan",
        optionC: "c. Hemat dalam pemakaian bahan bakar",
        optionD: "d. Semua benar",
        correctOption: "optionD"
    },

    {
        question: "Berikut yang merupakan sumber energi yang dapat di perbaharui...",
        optionA: "a. Matahari",
        optionB: "b. Bensin",
        optionC: "c. Solar",
        optionD: "d. Pertamax",
        correctOption: "optionA"
    },

  
    {
        question: "Upaya yang dapat di lakukan oleh pelajar untuk melestarikan lingkungan, kecuali...",
        optionA: "a. Buang sampah pada tempatnya",
        optionB: "b. Menyiram tanaman di rumah",
        optionC: "c. Pemilahan sampah",
        optionD: "d. Membakar sampah",
        correctOption: "optionD"
    },


    {
        question: "Peraturan daerah kota pekalongan yang mengatur tentang pengelolaan sampah adalah...",
        optionA: "a. Perda No.3 Tahun 2010",
        optionB: "b. Perda No.16 Tahun 2012",
        optionC: "c. Perda No.2 Tahun 2010",
        optionD: "d. Perda No.17 Tahun 2012",
        correctOption: "optionB"
    },

    {
        question: "Berikut merupakan cara untuk mengurangi dampak perubahan iklim...",
        optionA: "a. Menanam Pohon",
        optionB: "b. Bersepeda",
        optionC: "c. Mengelola limbah dengan benar",
        optionD: "d. Semua Benar",
        correctOption: "optionD"
    },

    {
        question: "Bagaimana cara mengelola limbah cair dari produksi batik...",
        optionA: "a. Mengalirkan ke sungai",
        optionB: "b. Mengolahnya di IPAL",
        optionC: "c. Digunakan untuk menyiram tanaman",
        optionD: "d. Di buang ke selokan",
        correctOption: "optionB"
    },

    {
        question: "Mengapa Kota Pekalongan terkena banjir rob?",
        optionA: "a. Penurunan muka tanah",
        optionB: "b. Permukaan air laut naik",
        optionC: "c. Perubahan iklim",
        optionD: "d. Semua benar",
        correctOption: "optionD"
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
        question: "Penghargaan untuk kota terbersih adalah...",
        optionA: "a. ADIPURA",
        optionB: "b. ADIWIYATA",
        optionC: "c. WANAWIYATA",
        optionD: "d. KALPATARU ",
        correctOption: "optionA"
    },

    {
        question: "Penghargaan sekolah berbudaya lingkungan adalah...",
        optionA: "a. Sekolah ADIWIYATA",
        optionB: "b. Sekolah ADIPURA",
        optionC: "c. Sekolah Wana Wiyata",
        optionD: "d. Sekolah KALPATARU",
        correctOption: "optionA"
    },

    {
        question: "Masalah lingkungan utama yang dihadapi oleh Kota Pekalongan adalah sebagai berikut...",
        optionA: "a. Limbah cair, gas dan padat",
        optionB: "b. Limbah cair, sampah rumah tangga dan rob",
        optionC: "c. Limbah B3, sampah dan banjir",
        optionD: "d. Sampah, banjir dan pencemaran udara",
        correctOption: "optionB"
    },

    {
        question: "Apa yang dimaksud dengan sampah?",
        optionA: "a. Sisa kegiatan manusia yang tidak berguna",
        optionB: "b. Sisa kegiatan sehari hari manusia dan /atau proses alam yang berbentuk padat",
        optionC: "c. Sisa kegiatan manusia dan / proses alam yang berbentuk padat dan tidak berguna",
        optionD: "d. Sisa kegiatan manusia yang berbau, tidak berguna dan dibuang ke TPA",
        correctOption: "optionB"
    },

    {
        question: "Nama Kementerian Republik Indonesia yang menangani lingkungan hidup...",
        optionA: "a. Kementerian Lingkungan Hidup Republik Indonesia",
        optionB: "b. Kementerian Lingkungan Hidup dan Pertanian Republik Indonesia",
        optionC: "c. Kementerian Lingkungan Hidup dan Kehutanan Republik Indonesia",
        optionD: "d. Kementerian Lingkungan Hidup dan Kelautan Republik Indonesia",
        correctOption: "optionC"
    },

    {
        question: "Apa kepanjangan dari limbah B3?",
        optionA: "a. Limbah Beracun dan Berbahaya",
        optionB: "b. Limbah Berbahaya dan Beracun",
        optionC: "c. Limbah Berbahaya dan Bereaktif",
        optionD: "d. limbah beracun dan Bereaktif",
        correctOption: "optionB"
    },

    {
        question: "Dibawah ini adalah sungai yang melintasi Kota Pekalongan , kecuali...",
        optionA: "a. Asem Binatur",
        optionB: "b. Meduri",
        optionC: "c. Bremi",
        optionD: "d. Pencongan",
        correctOption: "optionD"
    },

    {
        question: "Berikut ini adalah data monografi Kota Pekalongan yang benar...",
        optionA: "a. Luas : 45,25 km2, jumlah kelurahan : 47, jumlah kecamatan : 4",
        optionB: "b. Luas : 452,5 km2, jumlah kelurahan : 27, jumlah kecamatan : 4",
        optionC: "c. Luas : 45,25 km2, jumlah kelurahan : 27, jumlah kecamatan : 4",
        optionD: "d. Luas : 452,5 km2, jumlah kelurahan : 47, jumlah kecamatan : 4",
        correctOption: "optionC"
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
        question: "Dimana lokasi paling tepat untuk membuat lubang biopori?",
        optionA: "a. dekat dengan sungai",
        optionB: "b. di halaman",
        optionC: "c. ditempat yang tergenang dan dilalui air hujan",
        optionD: "d. dekat dengan sumur",
        correctOption: "optionC"
    },

    {
        question: "Didalam produksi kerajinan batik, dampak lingkungan yang paling utama apa?",
        optionA: "a. Limbah cair",
        optionB: "b. Sampah domestik",
        optionC: "c. Emisi udara",
        optionD: "d. Dampak sosial",
        correctOption: "optionA"
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
        question: "Tanaman pengganggu yang tumbuh subur pada air yang tercemar adalah...",
        optionA: "a. Teratai",
        optionB: "b. Kangkung",
        optionC: "c. Enceng gondok",
        optionD: "d. Talas",
        correctOption: "optionC"
    },

    {
        question: "Mengolah limbah cair produksi batik merupakan kewajiban...",
        optionA: "a. Pengusaha batik",
        optionB: "b. Karang taruna",
        optionC: "c. Pelajar sekolah",
        optionD: "d. Tentara",
        correctOption: "optionA"
    },

    {
        question: "Berikut adalah manfaat sampah kecuali...",
        optionA: "a. Dapat di olah menjadi kompos",
        optionB: "b. Dapat di olah menjadi barang yang lebih bernilai",
        optionC: "c. Menimbulkan bau dan penyakit",
        optionD: "d. Dapat di olah menjadi kerajinan",
        correctOption: "optionC"
    },

    {
        question: "Berikut adalah contoh sampah organik yaitu...",
        optionA: "a. Kardus",
        optionB: "b. Kulit buah",
        optionC: "c. Plastik",
        optionD: "d. Kertas",
        correctOption: "optionB"
    },

    {
        question: "Fungsi taman kota adalah sebagai berikut...",
        optionA: "a. Penghasil O²",
        optionB: "b. Ruang publik untuk aktivitas positif warga",
        optionC: "c. Paru-paru kota",
        optionD: "d. Semua benar",
        correctOption: "optionD"
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
    },

    {
        question: "Undang-undang tentang Perlindungan dan Pengelolaan Lingkungan hidup adalah...",
        optionA: "a. UU Nomor 23 tahun 2004",
        optionB: "b. UU Nomor 22 tahun 2007",
        optionC: "c. UU Nomor 40 tahun 2007",
        optionD: "d. UU Nomor 32 tahun 2009",
        correctOption: "optionD"
    },

    {
        question: "Limbah dibawah ini adalah yang termasuk limbah B3, kecuali :",
        optionA: "a. Limbah dari cair dari rumah makan",
        optionB: "b. Accu bekas",
        optionC: "c. Sisa pembakaran batu bara",
        optionD: "d. Baterai bekas",
        correctOption: "optionA"
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