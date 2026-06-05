









// =========================
// QUIZ QUESTIONS
// =========================
const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Paris", correct: true },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Earth", correct: false },
            { text: "Mars", correct: false }
        ]
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
            { text: "Harper Lee", correct: true },
            { text: "Mark Twain", correct: false },
            { text: "Ernest Hemingway", correct: false },
            { text: "F. Scott Fitzgerald", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Au", correct: true },
            { text: "Ag", correct: false },
            { text: "Fe", correct: false },
            { text: "Pb", correct: false }
        ]
    },
    {
        question: "What is the capital of Norway?",
        answers: [
            { text: "Oslo", correct: true },
            { text: "Stockholm", correct: false },
            { text: "Copenhagen", correct: false },
            { text: "Helsinki", correct: false }
        ]
    },
    {
        question: "Which ocean is the largest?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Arctic Ocean", correct: false }
        ]
    },
    {
        question: "How many continents are there?",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: false },
            { text: "7", correct: true },
            { text: "8", correct: false }
        ]
    },
    {
        question: "What gas do plants absorb from the atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "Which country invented pizza?",
        answers: [
            { text: "France", correct: false },
            { text: "Italy", correct: true },
            { text: "Spain", correct: false },
            { text: "Greece", correct: false }
        ]
    },
    {
        question: "What is the fastest land animal?",
        answers: [
            { text: "Lion", correct: false },
            { text: "Cheetah", correct: true },
            { text: "Horse", correct: false },
            { text: "Leopard", correct: false }
        ]
    },
    {
        question: "How many days are in a leap year?",
        answers: [
            { text: "364", correct: false },
            { text: "365", correct: false },
            { text: "366", correct: true },
            { text: "367", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Mercury", correct: false },
            { text: "Jupiter", correct: false }
        ]
    },
    {
        question: "What is the largest mammal?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Hippopotamus", correct: false }
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "Thailand", correct: false },
            { text: "South Korea", correct: false }
        ]
    },
    {
        question: "What is H2O commonly known as?",
        answers: [
            { text: "Salt", correct: false },
            { text: "Water", correct: true },
            { text: "Oxygen", correct: false },
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "Which instrument has keys, pedals, and strings?",
        answers: [
            { text: "Guitar", correct: false },
            { text: "Piano", correct: true },
            { text: "Violin", correct: false },
            { text: "Flute", correct: false }
        ]
    },
    {
        question: "What is the hardest natural substance?",
        answers: [
            { text: "Gold", correct: false },
            { text: "Iron", correct: false },
            { text: "Diamond", correct: true },
            { text: "Silver", correct: false }
        ]
    },
    {
        question: "Which animal is known as the King of the Jungle?",
        answers: [
            { text: "Tiger", correct: false },
            { text: "Lion", correct: true },
            { text: "Leopard", correct: false },
            { text: "Panther", correct: false }
        ]
    },
    {
        question: "How many legs does a spider have?",
        answers: [
            { text: "6", correct: false },
            { text: "8", correct: true },
            { text: "10", correct: false },
            { text: "12", correct: false }
        ]
    },
    {
        question: "Which planet is closest to the Sun?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mercury", correct: true },
            { text: "Earth", correct: false },
            { text: "Mars", correct: false }
        ]
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: [
            { text: "K2", correct: false },
            { text: "Mount Everest", correct: true },
            { text: "Kangchenjunga", correct: false },
            { text: "Makalu", correct: false }
        ]
    },
    {
        question: "Which continent is Egypt located in?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Africa", correct: true },
            { text: "Europe", correct: false },
            { text: "South America", correct: false }
        ]
    },
    {
        question: "What do bees produce?",
        answers: [
            { text: "Milk", correct: false },
            { text: "Honey", correct: true },
            { text: "Oil", correct: false },
            { text: "Juice", correct: false }
        ]
    },
    {
        question: "Which shape has three sides?",
        answers: [
            { text: "Square", correct: false },
            { text: "Triangle", correct: true },
            { text: "Circle", correct: false },
            { text: "Rectangle", correct: false }
        ]
    },
    {
        question: "What is the boiling point of water?",
        answers: [
            { text: "50°C", correct: false },
            { text: "75°C", correct: false },
            { text: "100°C", correct: true },
            { text: "150°C", correct: false }
        ]
    },
    // Copy these questions and paste them inside your questions array in javascript.js

    {
        question: "What is the capital of Germany?",
        answers: [
            { text: "Munich", correct: false },
            { text: "Hamburg", correct: false },
            { text: "Berlin", correct: true },
            { text: "Frankfurt", correct: false }
        ]
    },
    {
        question: "What is the capital of Japan?",
        answers: [
            { text: "Osaka", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Kyoto", correct: false },
            { text: "Hiroshima", correct: false }
        ]
    },
    {
        question: "How many sides does a hexagon have?",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: true },
            { text: "7", correct: false },
            { text: "8", correct: false }
        ]
    },
    {
        question: "What is the largest continent?",
        answers: [
            { text: "Africa", correct: false },
            { text: "America", correct: false },
            { text: "Asia", correct: true },
            { text: "Europe", correct: false }
        ]
    },
    {
        question: "What is the smallest planet in our solar system?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Mercury", correct: true },
            { text: "Venus", correct: false },
            { text: "Pluto", correct: false }
        ]
    },
    {
        question: "Which country has the largest population?",
        answers: [
            { text: "USA", correct: false },
            { text: "India", correct: true },
            { text: "China", correct: false },
            { text: "Brazil", correct: false }
        ]
    },
    {
        question: "What is the longest river in the world?",
        answers: [
            { text: "Amazon", correct: false },
            { text: "Yangtze", correct: false },
            { text: "Nile", correct: true },
            { text: "Mississippi", correct: false }
        ]
    },
    {
        question: "Which element has the symbol O?",
        answers: [
            { text: "Gold", correct: false },
            { text: "Oxygen", correct: true },
            { text: "Osmium", correct: false },
            { text: "Oganesson", correct: false }
        ]
    },
    {
        question: "How many bones are in the human body?",
        answers: [
            { text: "196", correct: false },
            { text: "206", correct: true },
            { text: "216", correct: false },
            { text: "226", correct: false }
        ]
    },
    {
        question: "What is the capital of Australia?",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Melbourne", correct: false },
            { text: "Canberra", correct: true },
            { text: "Brisbane", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Mars", correct: true },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            { text: "Gold", correct: false },
            { text: "Iron", correct: false },
            { text: "Diamond", correct: true },
            { text: "Platinum", correct: false }
        ]
    },
    {
        question: "How many legs does a spider have?",
        answers: [
            { text: "6", correct: false },
            { text: "8", correct: true },
            { text: "10", correct: false },
            { text: "12", correct: false }
        ]
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: [
            { text: "K2", correct: false },
            { text: "Mont Blanc", correct: false },
            { text: "Mount Everest", correct: true },
            { text: "Kilimanjaro", correct: false }
        ]
    },
    {
        question: "Which animal is known as the King of the Jungle?",
        answers: [
            { text: "Tiger", correct: false },
            { text: "Lion", correct: true },
            { text: "Elephant", correct: false },
            { text: "Gorilla", correct: false }
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic", correct: false },
            { text: "Indian", correct: false },
            { text: "Pacific", correct: true },
            { text: "Arctic", correct: false }
        ]
    },
    {
        question: "Which country is the largest in the world by area?",
        answers: [
            { text: "Canada", correct: false },
            { text: "China", correct: false },
            { text: "Russia", correct: true },
            { text: "USA", correct: false }
        ]
    },
    {
        question: "How many days are in a leap year?",
        answers: [
            { text: "364", correct: false },
            { text: "365", correct: false },
            { text: "366", correct: true },
            { text: "367", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "HO", correct: false },
            { text: "H2O", correct: true },
            { text: "CO2", correct: false },
            { text: "O2", correct: false }
        ]
    },
    {
        question: "Which country invented the telephone?",
        answers: [
            { text: "UK", correct: false },
            { text: "Germany", correct: false },
            { text: "USA", correct: true },
            { text: "France", correct: false }
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Hippopotamus", correct: false }
        ]
    },
    {
        question: "How many planets are in our solar system?",
        answers: [
            { text: "7", correct: false },
            { text: "8", correct: true },
            { text: "9", correct: false },
            { text: "10", correct: false }
        ]
    },
    {
        question: "What is the capital of Brazil?",
        answers: [
            { text: "Rio de Janeiro", correct: false },
            { text: "Sao Paulo", correct: false },
            { text: "Brasilia", correct: true },
            { text: "Salvador", correct: false }
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "South Korea", correct: false },
            { text: "Thailand", correct: false }
        ]
    },
    {
        question: "What is the boiling point of water in Celsius?",
        answers: [
            { text: "90°C", correct: false },
            { text: "95°C", correct: false },
            { text: "100°C", correct: true },
            { text: "110°C", correct: false }
        ]
    },
    {
        question: "Which instrument has 88 keys?",
        answers: [
            { text: "Guitar", correct: false },
            { text: "Piano", correct: true },
            { text: "Violin", correct: false },
            { text: "Harp", correct: false }
        ]
    },
    {
        question: "What is the capital of Canada?",
        answers: [
            { text: "Toronto", correct: false },
            { text: "Vancouver", correct: false },
            { text: "Ottawa", correct: true },
            { text: "Montreal", correct: false }
        ]
    },
    {
        question: "Which continent is Egypt in?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Europe", correct: false },
            { text: "Africa", correct: true },
            { text: "Middle East", correct: false }
        ]
    },
    {
        question: "What do bees produce?",
        answers: [
            { text: "Milk", correct: false },
            { text: "Honey", correct: true },
            { text: "Wax only", correct: false },
            { text: "Nectar", correct: false }
        ]
    },
    {
        question: "How many colors are in a rainbow?",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: false },
            { text: "7", correct: true },
            { text: "8", correct: false }
        ]
    },
    {
        question: "What is the capital of China?",
        answers: [
            { text: "Shanghai", correct: false },
            { text: "Beijing", correct: true },
            { text: "Hong Kong", correct: false },
            { text: "Shenzhen", correct: false }
        ]
    },
    {
        question: "Which shape has four equal sides?",
        answers: [
            { text: "Rectangle", correct: false },
            { text: "Rhombus", correct: false },
            { text: "Square", correct: true },
            { text: "Trapezoid", correct: false }
        ]
    },
    {
        question: "What is the speed of light?",
        answers: [
            { text: "200,000 km/s", correct: false },
            { text: "299,792 km/s", correct: true },
            { text: "350,000 km/s", correct: false },
            { text: "150,000 km/s", correct: false }
        ]
    },
    {
        question: "Which gas do plants release during photosynthesis?",
        answers: [
            { text: "Carbon Dioxide", correct: false },
            { text: "Nitrogen", correct: false },
            { text: "Oxygen", correct: true },
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "What is the capital of India?",
        answers: [
            { text: "Mumbai", correct: false },
            { text: "Kolkata", correct: false },
            { text: "New Delhi", correct: true },
            { text: "Chennai", correct: false }
        ]
    },
    {
        question: "Which country built the Great Wall?",
        answers: [
            { text: "Japan", correct: false },
            { text: "China", correct: true },
            { text: "Mongolia", correct: false },
            { text: "Korea", correct: false }
        ]
    },
    {
        question: "How many hours are in a day?",
        answers: [
            { text: "12", correct: false },
            { text: "20", correct: false },
            { text: "24", correct: true },
            { text: "48", correct: false }
        ]
    },
    {
        question: "What is the largest desert in the world?",
        answers: [
            { text: "Sahara", correct: false },
            { text: "Gobi", correct: false },
            { text: "Antarctic", correct: true },
            { text: "Arabian", correct: false }
        ]
    },
    {
        question: "Which blood type is the universal donor?",
        answers: [
            { text: "A", correct: false },
            { text: "B", correct: false },
            { text: "O negative", correct: true },
            { text: "AB", correct: false }
        ]
    },
    {
        question: "What is the capital of South Africa?",
        answers: [
            { text: "Johannesburg", correct: false },
            { text: "Cape Town", correct: false },
            { text: "Pretoria", correct: true },
            { text: "Durban", correct: false }
        ]
    },
    {
        question: "How many minutes are in an hour?",
        answers: [
            { text: "30", correct: false },
            { text: "45", correct: false },
            { text: "60", correct: true },
            { text: "90", correct: false }
        ]
    },
    {
        question: "Which country is the Eiffel Tower in?",
        answers: [
            { text: "Italy", correct: false },
            { text: "Spain", correct: false },
            { text: "France", correct: true },
            { text: "Belgium", correct: false }
        ]
    },
    {
        question: "What is the largest organ in the human body?",
        answers: [
            { text: "Heart", correct: false },
            { text: "Liver", correct: false },
            { text: "Skin", correct: true },
            { text: "Lungs", correct: false }
        ]
    },
    {
        question: "Which planet has rings around it?",
        answers: [
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: true },
            { text: "Uranus", correct: false },
            { text: "Neptune", correct: false }
        ]
    },
    {
        question: "What is the capital of Mexico?",
        answers: [
            { text: "Guadalajara", correct: false },
            { text: "Monterrey", correct: false },
            { text: "Mexico City", correct: true },
            { text: "Cancun", correct: false }
        ]
    },
    {
        question: "How many seconds are in a minute?",
        answers: [
            { text: "30", correct: false },
            { text: "60", correct: true },
            { text: "100", correct: false },
            { text: "120", correct: false }
        ]
    },
    {
        question: "Which ocean is the smallest?",
        answers: [
            { text: "Indian", correct: false },
            { text: "Southern", correct: false },
            { text: "Arctic", correct: true },
            { text: "Atlantic", correct: false }
        ]
    },
    {
        question: "What is the currency of Japan?",
        answers: [
            { text: "Yuan", correct: false },
            { text: "Won", correct: false },
            { text: "Yen", correct: true },
            { text: "Baht", correct: false }
        ]
    },
    {
        question: "Which planet is closest to the Sun?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Earth", correct: false },
            { text: "Mercury", correct: true },
            { text: "Mars", correct: false }
        ]
    },
    {
        question: "What is the capital of Egypt?",
        answers: [
            { text: "Alexandria", correct: false },
            { text: "Luxor", correct: false },
            { text: "Cairo", correct: true },
            { text: "Aswan", correct: false }
        ]
    },
    {
        question: "How many teeth does an adult human have?",
        answers: [
            { text: "28", correct: false },
            { text: "32", correct: true },
            { text: "36", correct: false },
            { text: "30", correct: false }
        ]
    },
    {
        question: "Which country is the Amazon rainforest mainly in?",
        answers: [
            { text: "Colombia", correct: false },
            { text: "Peru", correct: false },
            { text: "Brazil", correct: true },
            { text: "Venezuela", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for iron?",
        answers: [
            { text: "Ir", correct: false },
            { text: "In", correct: false },
            { text: "Fe", correct: true },
            { text: "Io", correct: false }
        ]
    },
    {
        question: "How many sides does a triangle have?",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        question: "What is the capital of Argentina?",
        answers: [
            { text: "Cordoba", correct: false },
            { text: "Rosario", correct: false },
            { text: "Buenos Aires", correct: true },
            { text: "Mendoza", correct: false }
        ]
    },
    {
        question: "Which country is home to the kangaroo?",
        answers: [
            { text: "New Zealand", correct: false },
            { text: "South Africa", correct: false },
            { text: "Australia", correct: true },
            { text: "Papua New Guinea", correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Saturn", correct: false },
            { text: "Neptune", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Uranus", correct: false }
        ]
    },
    {
        question: "What is the capital of Russia?",
        answers: [
            { text: "St. Petersburg", correct: false },
            { text: "Novosibirsk", correct: false },
            { text: "Moscow", correct: true },
            { text: "Vladivostok", correct: false }
        ]
    },
    {
        question: "How many sides does an octagon have?",
        answers: [
            { text: "6", correct: false },
            { text: "7", correct: false },
            { text: "8", correct: true },
            { text: "9", correct: false }
        ]
    },
    {
        question: "Which country is the Colosseum in?",
        answers: [
            { text: "Greece", correct: false },
            { text: "Spain", correct: false },
            { text: "Italy", correct: true },
            { text: "Turkey", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for silver?",
        answers: [
            { text: "Si", correct: false },
            { text: "Sv", correct: false },
            { text: "Ag", correct: true },
            { text: "Sr", correct: false }
        ]
    },
    {
        question: "Which country has the most natural lakes?",
        answers: [
            { text: "Russia", correct: false },
            { text: "USA", correct: false },
            { text: "Canada", correct: true },
            { text: "Finland", correct: false }
        ]
    },
    {
        question: "What is the capital of Spain?",
        answers: [
            { text: "Barcelona", correct: false },
            { text: "Seville", correct: false },
            { text: "Madrid", correct: true },
            { text: "Valencia", correct: false }
        ]
    },
    {
        question: "Which organ pumps blood in the human body?",
        answers: [
            { text: "Liver", correct: false },
            { text: "Kidney", correct: false },
            { text: "Heart", correct: true },
            { text: "Lungs", correct: false }
        ]
    },
    {
        question: "What is the currency of the UK?",
        answers: [
            { text: "Euro", correct: false },
            { text: "Dollar", correct: false },
            { text: "Pound", correct: true },
            { text: "Franc", correct: false }
        ]
    },
    {
        question: "How many weeks are in a year?",
        answers: [
            { text: "48", correct: false },
            { text: "50", correct: false },
            { text: "52", correct: true },
            { text: "54", correct: false }
        ]
    },
    {
        question: "What is the capital of Turkey?",
        answers: [
            { text: "Istanbul", correct: false },
            { text: "Izmir", correct: false },
            { text: "Ankara", correct: true },
            { text: "Bursa", correct: false }
        ]
    },
    {
        question: "Which animal is the fastest on land?",
        answers: [
            { text: "Lion", correct: false },
            { text: "Horse", correct: false },
            { text: "Cheetah", correct: true },
            { text: "Leopard", correct: false }
        ]
    },
    {
        question: "What is the capital of Saudi Arabia?",
        answers: [
            { text: "Jeddah", correct: false },
            { text: "Mecca", correct: false },
            { text: "Riyadh", correct: true },
            { text: "Medina", correct: false }
        ]
    },
    {
        question: "How many chambers does the human heart have?",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false }
        ]
    },
    {
        question: "What is the capital of South Korea?",
        answers: [
            { text: "Busan", correct: false },
            { text: "Incheon", correct: false },
            { text: "Seoul", correct: true },
            { text: "Daegu", correct: false }
        ]
    },
    {
        question: "Which planet is farthest from the Sun?",
        answers: [
            { text: "Uranus", correct: false },
            { text: "Saturn", correct: false },
            { text: "Neptune", correct: true },
            { text: "Jupiter", correct: false }
        ]
    },
    {
        question: "What is the capital of Italy?",
        answers: [
            { text: "Milan", correct: false },
            { text: "Venice", correct: false },
            { text: "Rome", correct: true },
            { text: "Naples", correct: false }
        ]
    },
    {
        question: "How many chromosomes do humans have?",
        answers: [
            { text: "23", correct: false },
            { text: "44", correct: false },
            { text: "46", correct: true },
            { text: "48", correct: false }
        ]
    },
    {
        question: "Which country is the Amazon river in?",
        answers: [
            { text: "Colombia", correct: false },
            { text: "Peru", correct: false },
            { text: "Brazil", correct: true },
            { text: "Bolivia", correct: false }
        ]
    },
    {
        question: "What is the capital of Greece?",
        answers: [
            { text: "Thessaloniki", correct: false },
            { text: "Patras", correct: false },
            { text: "Athens", correct: true },
            { text: "Heraklion", correct: false }
        ]
    },
    {
        question: "Which element is the most abundant in the Earth's atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Argon", correct: false }
        ]
    },
    {
        question: "What is the capital of Portugal?",
        answers: [
            { text: "Porto", correct: false },
            { text: "Braga", correct: false },
            { text: "Lisbon", correct: true },
            { text: "Faro", correct: false }
        ]
    },
    {
        question: "How many strings does a standard guitar have?",
        answers: [
            { text: "4", correct: false },
            { text: "5", correct: false },
            { text: "6", correct: true },
            { text: "7", correct: false }
        ]
    },
    {
        question: "What is the capital of the Netherlands?",
        answers: [
            { text: "Rotterdam", correct: false },
            { text: "The Hague", correct: false },
            { text: "Amsterdam", correct: true },
            { text: "Utrecht", correct: false }
        ]
    },
    {
        question: "Which country is the Statue of Liberty in?",
        answers: [
            { text: "France", correct: false },
            { text: "Canada", correct: false },
            { text: "USA", correct: true },
            { text: "UK", correct: false }
        ]
    },
    {
        question: "How many bytes are in a kilobyte?",
        answers: [
            { text: "100", correct: false },
            { text: "512", correct: false },
            { text: "1024", correct: true },
            { text: "2048", correct: false }
        ]
    },
    {
        question: "What is the capital of Sweden?",
        answers: [
            { text: "Gothenburg", correct: false },
            { text: "Malmo", correct: false },
            { text: "Stockholm", correct: true },
            { text: "Uppsala", correct: false }
        ]
    },
    {
        question: "Which country is home to the Great Barrier Reef?",
        answers: [
            { text: "New Zealand", correct: false },
            { text: "Indonesia", correct: false },
            { text: "Australia", correct: true },
            { text: "Philippines", correct: false }
        ]
    },
    {
        question: "What is the capital of Switzerland?",
        answers: [
            { text: "Zurich", correct: false },
            { text: "Geneva", correct: false },
            { text: "Bern", correct: true },
            { text: "Basel", correct: false }
        ]
    },
    {
        question: "How many players are on a football team?",
        answers: [
            { text: "9", correct: false },
            { text: "10", correct: false },
            { text: "11", correct: true },
            { text: "12", correct: false }
        ]
    },
    {
        question: "What is the capital of Pakistan?",
        answers: [
            { text: "Karachi", correct: false },
            { text: "Lahore", correct: false },
            { text: "Islamabad", correct: true },
            { text: "Peshawar", correct: false }
        ]
    },
    {
        question: "Which is the longest bone in the human body?",
        answers: [
            { text: "Spine", correct: false },
            { text: "Humerus", correct: false },
            { text: "Femur", correct: true },
            { text: "Tibia", correct: false }
        ]
    },
    {
        question: "What is the capital of Nigeria?",
        answers: [
            { text: "Lagos", correct: false },
            { text: "Kano", correct: false },
            { text: "Abuja", correct: true },
            { text: "Ibadan", correct: false }
        ]
    },
    {
        question: "How many faces does a cube have?",
        answers: [
            { text: "4", correct: false },
            { text: "5", correct: false },
            { text: "6", correct: true },
            { text: "8", correct: false }
        ]
    },
    {
        question: "What is the capital of Kenya?",
        answers: [
            { text: "Mombasa", correct: false },
            { text: "Kisumu", correct: false },
            { text: "Nairobi", correct: true },
            { text: "Nakuru", correct: false }
        ]
    },
    {
        question: "Which gas makes up most of the Sun?",
        answers: [
            { text: "Helium", correct: false },
            { text: "Oxygen", correct: false },
            { text: "Hydrogen", correct: true },
            { text: "Nitrogen", correct: false }
        ]
    },
    {
        question: "What is the capital of UAE?",
        answers: [
            { text: "Dubai", correct: false },
            { text: "Sharjah", correct: false },
            { text: "Abu Dhabi", correct: true },
            { text: "Ajman", correct: false }
        ]
    },
];

/// =========================
// DOM ELEMENTS
// =========================
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const statusText = document.getElementById("status");
const timerText = document.getElementById("timer");
 
const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start-btn");
const quizApp = document.getElementById("quiz-app");
 
// =========================
// VARIABLES
// =========================
let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];
let timeLeft = 10;
let timerInterval;
let answerSelected = false;
let totalTime = 2400; // 40 minutes in seconds
let totalTimerInterval;

 
// =========================
// SHUFFLE
// =========================
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}
 
// =========================
// UPDATE STATUS
// =========================
function updateStatus() {
    statusText.innerHTML = `Question ${currentQuestionIndex + 1}/25 — Score: ${score}`;
}
 
// =========================
// SAVE & RESTORE STATE
// =========================
function saveState() {
    localStorage.setItem("quizIndex", currentQuestionIndex);
    localStorage.setItem("quizScore", score);
    localStorage.setItem("quizQuestions", JSON.stringify(selectedQuestions));
}
 
function clearState() {
    localStorage.removeItem("quizIndex");
    localStorage.removeItem("quizScore");
    localStorage.removeItem("quizQuestions");
}
 

function startTotalTimer() {
    totalTimerInterval = setInterval(() => {
        totalTime--;

        if (totalTime <= 0) {
            clearInterval(totalTimerInterval);
            clearInterval(timerInterval);

            alert("Time is up! The quiz has closed.");

            quizApp.style.display = "none";
            authScreen.style.display = "block";
        }
    }, 1000);
}



// =========================
// TIMER
// =========================
function startTimer() {
    timeLeft = 20;
    answerSelected = false;
    timerText.innerHTML = `Time: ${timeLeft}s`;
    timerText.style.color = "green";
 
    timerInterval = setInterval(() => {
        timeLeft--;
        timerText.innerHTML = `Time: ${timeLeft}s`;
 
        if (timeLeft <= 5) {
            timerText.style.color = "red";
        } else {
            timerText.style.color = "green";
        }
 
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            if (!answerSelected) {
                lockAnswers();
                nextButton.style.display = "block";
            }
        }
    }, 1000);
}
 
function stopTimer() {
    clearInterval(timerInterval);
}
 
// =========================
// LOCK ANSWERS
// =========================
function lockAnswers() {
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
    });
}
 
// =========================
// START QUIZ
// =========================
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    selectedQuestions = shuffle([...questions]).slice(0, 24);
    saveState();
    showQuestion();
}
 
// =========================
// SHOW QUESTION
// =========================
function showQuestion() {
    resetState();
    updateStatus();
    saveState();
    startTimer();
 
    let currentQuestion = selectedQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
 
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.setAttribute("tabindex", "0");
 
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
 
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}
 
// =========================
// RESET STATE
// =========================
function resetState() {
    stopTimer();
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
 
// =========================
// SELECT ANSWER
// =========================
function selectAnswer(e) {
    stopTimer();
    answerSelected = true;
 
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
 
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        updateStatus();
    } else {
        selectedBtn.classList.add("incorrect");
    }
 
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
 
    nextButton.style.display = "block";
    saveState();
}
 
// =========================
// NEXT BUTTON
// =========================
function handleNextButton() {
    currentQuestionIndex++;
    saveState();
 
    if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
 
// =========================
// SHOW SCORE
// =========================
function showScore() {
    clearInterval(totalTimerInterval);

    clearState();
    resetState();
 
    let resultMessage = score >= 18 ? "🎉 You passed!" : "❌ You failed!";
 
    questionElement.innerHTML = `
        You scored ${score} out of ${selectedQuestions.length}!<br><br>
        <strong>${resultMessage}</strong>
    `;
 
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
 
// =========================
// BUTTON EVENTS
// =========================
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < selectedQuestions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});
 
startBtn.addEventListener("click", () => {
    startScreen.style.display = "none";
    quizApp.style.display = "block";

    totalTime = 2400;
    startTotalTimer();   // ❗ Halkan ayuu ka maqnaa

    startQuiz();
});

function startTotalTimer() {
    const totalTimerDisplay = document.getElementById("total-timer");

    totalTimerInterval = setInterval(() => {
        totalTime--;

        let minutes = Math.floor(totalTime / 60);
        let seconds = totalTime % 60;

        if (seconds < 10) seconds = "0" + seconds;

        totalTimerDisplay.innerHTML = `Total Time: ${minutes}:${seconds}`;

        if (totalTime <= 0) {
            clearInterval(totalTimerInterval);
            clearInterval(timerInterval);

            alert("Time is up! The quiz has closed.");

            quizApp.style.display = "none";
            authScreen.style.display = "block";
        }
    }, 1000);
}

 
// =========================
// LOGOUT
// =========================
document.getElementById("logout-btn").addEventListener("click", () => {
    stopTimer();
    clearState();
    localStorage.removeItem("loggedIn");
    quizApp.style.display = "none";
    authScreen.style.display = "block";
    currentQuestionIndex = 0;
    score = 0;
    showLoginView();
});
 
// =========================
// KEYBOARD CONTROLS
// =========================
document.addEventListener("keydown", function(e) {
    if (e.key === "Enter" && startScreen.style.display !== "none") {
        startBtn.click();
        return;
    }
    if (e.key === "Enter" && nextButton.style.display === "block") {
        nextButton.click();
        return;
    }
});
 
// =========================
// AUTH — DOM REFERENCES
// =========================
const authScreen    = document.getElementById("auth-screen");
const authMessage   = document.getElementById("auth-message");
const registerBtn   = document.getElementById("register-btn");
const loginBtn      = document.getElementById("login-btn");
const authTitle     = authScreen.querySelector("h1");
const hr            = authScreen.querySelector("hr");
 
const regHeading    = document.getElementById("reg-heading");
const loginHeading  = document.getElementById("login-heading");
const regUsername   = document.getElementById("register-username");
const regPassword   = document.getElementById("register-password");
const loginUsername = document.getElementById("login-username");
const loginPassword = document.getElementById("login-password");
 
const registerElements = [regHeading, regUsername, regPassword, registerBtn];
const loginElements    = [loginHeading, loginUsername, loginPassword, loginBtn];
 
// Inject "No account?" link
const toggleLink = document.createElement("p");
toggleLink.style.cssText = "text-align:center;margin-top:10px;font-size:14px;";
toggleLink.innerHTML = `No account? <a href="#" id="show-register" style="color:#001e4d;font-weight:600;">Register here</a>`;
authScreen.appendChild(toggleLink);
 
// Inject "Back to login" link
const backLink = document.createElement("p");
backLink.style.cssText = "text-align:center;margin-top:10px;font-size:14px;";
backLink.innerHTML = `Already have an account? <a href="#" id="show-login" style="color:#001e4d;font-weight:600;">Login here</a>`;
authScreen.appendChild(backLink);
 
// =========================
// AUTH — SHOW/HIDE HELPERS
// =========================
function showLoginView() {
    authTitle.innerHTML = "Quiz Login";
    loginElements.forEach(el => el.style.display = "block");
    toggleLink.style.display = "block";
    registerElements.forEach(el => el.style.display = "none");
    backLink.style.display = "none";
    hr.style.display = "none";
    authMessage.innerHTML = "";
}
 
function showRegisterView() {
    authTitle.innerHTML = "Create Account";
    registerElements.forEach(el => el.style.display = "block");
    backLink.style.display = "block";
    loginElements.forEach(el => el.style.display = "none");
    toggleLink.style.display = "none";
    hr.style.display = "none";
    authMessage.innerHTML = "";
}
 
// Init
showLoginView();
 
// =========================
// AUTH — TOGGLE EVENTS
// =========================
document.addEventListener("click", function(e) {
    if (e.target.id === "show-register") {
        e.preventDefault();
        showRegisterView();
    }
    if (e.target.id === "show-login") {
        e.preventDefault();
        showLoginView();
    }
});
 
// =========================
// AUTH — REGISTER
// =========================
registerBtn.addEventListener("click", () => {
    const username = regUsername.value.trim();
    const password = regPassword.value.trim();
 
    if (!username || !password) {
        authMessage.innerHTML = "Please fill in all fields.";
        return;
    }
 
    localStorage.setItem("quizUsername", username);
    localStorage.setItem("quizPassword", password);
 
    authMessage.innerHTML = "Registration successful! Please log in.";
    regUsername.value = "";
    regPassword.value = "";
    setTimeout(() => showLoginView(), 1200);
});
 
// =========================
// AUTH — LOGIN
// =========================
loginBtn.addEventListener("click", () => {
    const username = loginUsername.value.trim();
    const password = loginPassword.value.trim();
 
    const savedUsername = localStorage.getItem("quizUsername");
    const savedPassword = localStorage.getItem("quizPassword");
 
    if (username === savedUsername && password === savedPassword) {
        localStorage.setItem("loggedIn", "true");
        authScreen.style.display = "none";
        startScreen.style.display = "block";
    } else {
        authMessage.innerHTML = "Invalid username or password.";
    }
});
 
// =========================
// AUTO LOGIN & RESUME
// =========================
if (localStorage.getItem("loggedIn") === "true") {
    authScreen.style.display = "none";
 
    const savedQuestions = localStorage.getItem("quizQuestions");
    const savedIndex     = localStorage.getItem("quizIndex");
    const savedScore     = localStorage.getItem("quizScore");
 
    if (savedQuestions && savedIndex !== null) {
        selectedQuestions = JSON.parse(savedQuestions);
        currentQuestionIndex = parseInt(savedIndex);
        score = parseInt(savedScore);
        startScreen.style.display = "none";
        quizApp.style.display = "block";
        nextButton.innerHTML = "Next";
        showQuestion();
    } else {
        startScreen.style.display = "block";
    }
}