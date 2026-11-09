
        const questions = {
            easy: [
                {
                    question: "Какая планета находится ближе всего к Солнцу?",
                    answers: ["Венера", "Меркурий", "Марс", "Земля"],
                    correct: 1
                },
                {
                    question: "Сколько дней в високосном году?",
                    answers: ["365", "364", "366", "360"],
                    correct: 2
                },
                {
                    question: "Столица Франции?",
                    answers: ["Лондон", "Берлин", "Париж", "Рим"],
                    correct: 2
                },
                {
                    question: "Сколько будет 12 × 8?",
                    answers: ["86", "96", "108", "92"],
                    correct: 1
                },
                {
                    question: "Какой океан самый большой?",
                    answers: ["Атлантический", "Индийский", "Северный Ледовитый", "Тихий"],
                    correct: 3
                },
                {
                    question: "Как называется спутник Земли?",
                    answers: ["Солнце", "Луна", "Марс", "Венера"],
                    correct: 1
                },
                {
                    question: "Сколько цветов в радуге?",
                    answers: ["5", "6", "7", "8"],
                    correct: 2
                },
                {
                    question: "Какое животное называют царём зверей?",
                    answers: ["Тигр", "Лев", "Волк", "Медведь"],
                    correct: 1
                },
                {
                    question: "Какой язык используется для создания веб-страниц?",
                    answers: ["HTML", "Python", "C++", "Java"],
                    correct: 0
                },
                {
                    question: "Сколько сторон у треугольника?",
                    answers: ["2", "3", "4", "5"],
                    correct: 1
                }
            ],

            medium: [
                {
                    question: "В каком году началась Вторая мировая война?",
                    answers: ["1939", "1941", "1938", "1945"],
                    correct: 0
                },
                {
                    question: "Какая самая большая планета Солнечной системы?",
                    answers: ["Земля", "Сатурн", "Юпитер", "Нептун"],
                    correct: 2
                },
                {
                    question: "Кто написал роман «Преступление и наказание»?",
                    answers: ["Толстой", "Достоевский", "Пушкин", "Чехов"],
                    correct: 1
                },
                {
                    question: "Какой химический символ у золота?",
                    answers: ["Ag", "Fe", "Au", "Cu"],
                    correct: 2
                },
                {
                    question: "Сколько костей примерно у взрослого человека?",
                    answers: ["106", "206", "306", "406"],
                    correct: 1
                },
                {
                    question: "Какая страна подарила миру бумагу?",
                    answers: ["Египет", "Греция", "Китай", "Индия"],
                    correct: 2
                },
                {
                    question: "Как называется процесс превращения воды в пар?",
                    answers: ["Замерзание", "Испарение", "Конденсация", "Плавление"],
                    correct: 1
                },
                {
                    question: "Кто создал язык программирования JavaScript?",
                    answers: ["Билл Гейтс", "Брендан Айк", "Джеймс Гослинг", "Тим Бернерс-Ли"],
                    correct: 1
                },
                {
                    question: "Какова столица Японии?",
                    answers: ["Киото", "Осака", "Токио", "Хиросима"],
                    correct: 2
                },
                {
                    question: "Какой газ преобладает в атмосфере Земли?",
                    answers: ["Кислород", "Углекислый газ", "Азот", "Водород"],
                    correct: 2
                }
            ],

            hard: [
                {
                    question: "Какой элемент имеет атомный номер 79?",
                    answers: ["Серебро", "Золото", "Платина", "Медь"],
                    correct: 1
                },
                {
                    question: "В каком году пала Западная Римская империя?",
                    answers: ["395", "410", "476", "500"],
                    correct: 2
                },
                {
                    question: "Кто сформулировал три закона движения?",
                    answers: ["Эйнштейн", "Ньютон", "Галилей", "Тесла"],
                    correct: 1
                },
                {
                    question: "Какой орган отвечает за выработку инсулина?",
                    answers: ["Печень", "Почки", "Поджелудочная железа", "Сердце"],
                    correct: 2
                },
                {
                    question: "Как называется самая глубокая океаническая впадина?",
                    answers: ["Тонга", "Марианская", "Кермадек", "Пуэрто-Рико"],
                    correct: 1
                },
                {
                    question: "Кто написал «Божественную комедию»?",
                    answers: ["Шекспир", "Данте Алигьери", "Гомер", "Вергилий"],
                    correct: 1
                },
                {
                    question: "Какой протокол используется для защищённой передачи веб-данных?",
                    answers: ["FTP", "HTTP", "HTTPS", "SMTP"],
                    correct: 2
                },
                {
                    question: "Как называется единица измерения электрического сопротивления?",
                    answers: ["Вольт", "Ампер", "Ом", "Ватт"],
                    correct: 2
                },
                {
                    question: "Какой учёный открыл пенициллин?",
                    answers: ["Луи Пастер", "Александр Флеминг", "Роберт Кох", "Мария Кюри"],
                    correct: 1
                },
                {
                    question: "Какой математик ввёл символ бесконечности?",
                    answers: ["Эйлер", "Ньютон", "Джон Уоллис", "Пифагор"],
                    correct: 2
                }
            ]
        };

        const startScreen = document.getElementById("startScreen");
        const quizScreen = document.getElementById("quizScreen");
        const resultScreen = document.getElementById("resultScreen");

        const questionElement = document.getElementById("question");
        const answersElement = document.getElementById("answers");
        const feedbackElement = document.getElementById("feedback");

        const nextButton = document.getElementById("nextButton");
        const timerElement = document.getElementById("timer");

        let selectedLevel = "easy";
        let quizQuestions = [];
        let currentQuestion = 0;
        let score = 0;
        let timeLeft = 20;
        let timerInterval = null;
        let answered = false;

        document.querySelectorAll(".difficulty button").forEach(button => {
            button.addEventListener("click", () => {
                document.querySelectorAll(".difficulty button")
                    .forEach(item => item.classList.remove("active"));

                button.classList.add("active");
                selectedLevel = button.dataset.level;
            });
        });

        function showScreen(screen) {
            document.querySelectorAll(".screen").forEach(item => {
                item.classList.remove("active");
            });

            screen.classList.add("active");
        }

        function startGame() {
            quizQuestions = [...questions[selectedLevel]];

            currentQuestion = 0;
            score = 0;

            showScreen(quizScreen);
            showQuestion();
        }

        function showQuestion() {
            clearInterval(timerInterval);

            answered = false;
            timeLeft = 20;

            const q = quizQuestions[currentQuestion];

            document.getElementById("questionNumber").textContent =
                `Вопрос ${currentQuestion + 1}/10`;

            document.getElementById("scoreDisplay").textContent =
                `⭐ ${score} очков`;

            document.getElementById("progressBar").style.width =
                `${currentQuestion * 10}%`;

            questionElement.textContent = q.question;

            answersElement.innerHTML = "";
            feedbackElement.textContent = "";
            nextButton.style.display = "none";

            q.answers.forEach((answer, index) => {
                const button = document.createElement("button");

                button.className = "answer";
                button.textContent = answer;

                button.addEventListener("click", () => {
                    checkAnswer(index, button);
                });

                answersElement.appendChild(button);
            });

            updateTimer();

            timerInterval = setInterval(() => {
                timeLeft--;
                updateTimer();

                if (timeLeft <= 0) {
                    checkAnswer(-1, null);
                }
            }, 1000);
        }

        function updateTimer() {
            timerElement.textContent = `⏱️ ${timeLeft}`;
        }

        function checkAnswer(selected, clickedButton) {
            if (answered) return;

            answered = true;
            clearInterval(timerInterval);

            const correct = quizQuestions[currentQuestion].correct;
            const answerButtons = answersElement.querySelectorAll(".answer");

            answerButtons.forEach((button, index) => {
                button.disabled = true;

                if (index === correct) {
                    button.classList.add("correct");
                }
            });

            if (selected === correct) {
                score++;
                feedbackElement.textContent = "✅ Правильно! Молодец!";
                feedbackElement.style.color = "#28a745";
            } else {
                if (clickedButton) {
                    clickedButton.classList.add("wrong");
                }

                feedbackElement.textContent = selected === -1
                    ? "⏰ Время вышло!"
                    : "❌ Неправильно!";

                feedbackElement.style.color = "#dc3545";
            }

            document.getElementById("scoreDisplay").textContent =
                `⭐ ${score} очков`;

            nextButton.style.display = "block";

            nextButton.textContent =
                currentQuestion === 9 ? "Результаты 🏆" : "Следующий вопрос →";
        }

        function nextQuestion() {
            currentQuestion++;

            if (currentQuestion < quizQuestions.length) {
                showQuestion();
            } else {
                finishGame();
            }
        }

        function finishGame() {
            clearInterval(timerInterval);

            showScreen(resultScreen);

            document.getElementById("progressBar").style.width = "100%";

            document.getElementById("finalScore").textContent =
                `${score}/10`;

            let icon;
            let message;

            if (score === 10) {
                icon = "🏆";
                message = "Идеальный результат! Ты ответил правильно на все вопросы!";
            } else if (score >= 7) {
                icon = "🥇";
                message = "Отличная работа! Ты очень хорошо знаешь эту тему!";
            } else if (score >= 5) {
                icon = "🥈";
                message = "Хороший результат! Продолжай тренироваться!";
            } else {
                icon = "📚";
                message = "Не сдавайся! Попробуй ещё раз и узнай больше нового!";
            }

            document.getElementById("resultIcon").textContent = icon;
            document.getElementById("resultMessage").textContent = message;
        }

        document.getElementById("startButton")
            .addEventListener("click", startGame);

        nextButton.addEventListener("click", nextQuestion);

        document.getElementById("restartButton")
            .addEventListener("click", () => {
                showScreen(startScreen);
            });

