import { Component } from "react";
import {Link, withRouter} from 'react-router-dom'

const gkList=[
    {
      "question": "What is the capital of Canada?",
      "options": ["Toronto", "Vancouver", "Montreal", "Ottawa"],
      "correct_answer": "Ottawa"
    },
    {
      "question": "Who wrote the play 'Hamlet'?",
      "options": ["William Shakespeare", "Jane Austen", "Charles Dickens", "Leo Tolstoy"],
      "correct_answer": "William Shakespeare"
    },
    {
      "question": "In which year did the Titanic sink?",
      "options": ["1912", "1905", "1923", "1931"],
      "correct_answer": "1912"
    },
    {
      "question": "What is the capital of Brazil?",
      "options": ["Rio de Janeiro", "Sao Paulo", "Brasilia", "Buenos Aires"],
      "correct_answer": "Brasilia"
    },
    {
      "question": "Who is known as the 'Father of Modern Physics'?",
      "options": ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Galileo Galilei"],
      "correct_answer": "Albert Einstein"
    },
    {
      "question": "What is the currency of South Korea?",
      "options": ["Won", "Yen", "Baht", "Dong"],
      "correct_answer": "Won"
    },
    {
      "question": "Which planet is known as the 'Red Planet'?",
      "options": ["Mars", "Venus", "Jupiter", "Mercury"],
      "correct_answer": "Mars"
    },
    {
      "question": "Who painted the Mona Lisa?",
      "options": ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
      "correct_answer": "Leonardo da Vinci"
    },
    {
      "question": "What is the capital of Australia?",
      "options": ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      "correct_answer": "Canberra"
    },
    {
      "question": "Which river is the longest in the world?",
      "options": ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
      "correct_answer": "Nile River"
    },
    {
      "question": "Who wrote 'To Kill a Mockingbird'?",
      "options": ["Harper Lee", "J.K. Rowling", "George Orwell", "Ernest Hemingway"],
      "correct_answer": "Harper Lee"
    },
    {
      "question": "What is the chemical symbol for gold?",
      "options": ["Gd", "Au", "Ag", "Fe"],
      "correct_answer": "Au"
    },
    {
      "question": "What is the largest ocean on Earth?",
      "options": ["Indian Ocean", "Arctic Ocean", "Atlantic Ocean", "Pacific Ocean"],
      "correct_answer": "Pacific Ocean"
    },
    {
      "question": "Who is the author of '1984'?",
      "options": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.K. Rowling"],
      "correct_answer": "George Orwell"
    },
    {
      "question": "What is the capital of France?",
      "options": ["Berlin", "Madrid", "Paris", "Rome"],
      "correct_answer": "Paris"
    },
    {
      "question": "In which year did World War II end?",
      "options": ["1945", "1918", "1939", "1941"],
      "correct_answer": "1945"
    },
    {
      "question": "What is the largest planet in our solar system?",
      "options": ["Venus", "Jupiter", "Mars", "Saturn"],
      "correct_answer": "Jupiter"
    },
    {
      "question": "Who is known as the 'Father of Computer Science'?",
      "options": ["Alan Turing", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
      "correct_answer": "Alan Turing"
    },
    {
      "question": "What is the currency of Japan?",
      "options": ["Yen", "Won", "Yuan", "Ringgit"],
      "correct_answer": "Yen"
    },
    {
      "question": "Which continent is the driest inhabited continent on Earth?",
      "options": ["Africa", "Antarctica", "Australia", "Asia"],
      "correct_answer": "Australia"
    },
    {
      "question": "What is the currency of Brazil?",
      "options": ["Peso", "Real", "Baht", "Rupee"],
      "correct_answer": "Real"
    },
    {
      "question": "Who wrote 'The Great Gatsby'?",
      "options": ["F. Scott Fitzgerald", "Jane Austen", "Charles Dickens", "Leo Tolstoy"],
      "correct_answer": "F. Scott Fitzgerald"
    },
    {
      "question": "In which year did the Berlin Wall fall?",
      "options": ["1989", "1991", "1985", "1993"],
      "correct_answer": "1989"
    },
    {
      "question": "What is the capital of China?",
      "options": ["Beijing", "Shanghai", "Hong Kong", "Tokyo"],
      "correct_answer": "Beijing"
    },
    {
      "question": "Who wrote 'Pride and Prejudice'?",
      "options": ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "Charles Dickens"],
      "correct_answer": "Jane Austen"
    },
    {
      "question": "What is the capital of South Africa?",
      "options": ["Cape Town", "Johannesburg", "Pretoria", "Durban"],
      "correct_answer": "Pretoria"
    },
    {
      "question": "Which river runs through Cairo?",
      "options": ["Danube", "Thames", "Nile", "Amazon"],
      "correct_answer": "Nile"
    },
    {
      "question": "What is the smallest prime number?",
      "options": ["0", "1", "2", "3"],
      "correct_answer": "2"
    },
    {
      "question": "What is the largest lake in Africa?",
      "options": ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Chad"],
      "correct_answer": "Lake Victoria"
    },
    {
      "question": "Which is the smallest continent in the world?",
      "options": ["Europe", "Asia", "North America", "Australia"],
      "correct_answer": "Australia"
    },
    {
      "question": "Who developed the theory of relativity?",
      "options": ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Niels Bohr"],
      "correct_answer": "Albert Einstein"
    },
    {
      "question": "What is the capital of Italy?",
      "options": ["Berlin", "Madrid", "Rome", "Paris"],
      "correct_answer": "Rome"
    },
    {
      "question": "Which gas makes up the majority of Earth's atmosphere?",
      "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
      "correct_answer": "Nitrogen"
    },
    {
      "question": "In which country is Mount Everest located?",
      "options": ["Nepal", "India", "China", "Bhutan"],
      "correct_answer": "Nepal"
    },
    {
      "question": "What is the capital of Spain?",
      "options": ["Lisbon", "Barcelona", "Madrid", "Seville"],
      "correct_answer": "Madrid"
    },
    {
      "question": "Who wrote 'The Catcher in the Rye'?",
      "options": ["J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck"],
      "correct_answer": "J.D. Salinger"
    },
    {
      "question": "What is the capital of Russia?",
      "options": ["St. Petersburg", "Moscow", "Kiev", "Warsaw"],
      "correct_answer": "Moscow"
    },
    {
      "question": "Which river is known as the 'Cradle of Civilization'?",
      "options": ["Indus River", "Nile River", "Tigris-Euphrates", "Yangtze River"],
      "correct_answer": "Tigris-Euphrates"
    },
    {
      "question": "What is the currency of Mexico?",
      "options": ["Peso", "Dollar", "Euro", "Rupee"],
      "correct_answer": "Peso"
    },
    {
      "question": "Who wrote 'One Hundred Years of Solitude'?",
      "options": ["Gabriel Garcia Marquez", "Isabel Allende", "Mario Vargas Llosa", "Jorge Luis Borges"],
      "correct_answer": "Gabriel Garcia Marquez"
    },
    {
      "question": "What is the capital of South Korea?",
      "options": ["Seoul", "Busan", "Incheon", "Daegu"],
      "correct_answer": "Seoul"
    },
    {
      "question": "Which country is known as the 'Land of the Rising Sun'?",
      "options": ["China", "Japan", "South Korea", "Vietnam"],
      "correct_answer": "Japan"
    },
    {
      "question": "In which U.S. state is the Grand Canyon located?",
      "options": ["Arizona", "Utah", "Nevada", "Colorado"],
      "correct_answer": "Arizona"
    },
    {
      "question": "What is the highest mountain in North America?",
      "options": ["Denali (Mount McKinley)", "Mount St. Elias", "Mount Logan", "Pico de Orizaba"],
      "correct_answer": "Denali (Mount McKinley)"
    },
    {
        "question": "What is the largest planet in our solar system?",
        "options": ["Venus", "Jupiter", "Mars", "Saturn"],
        "correct_answer": "Jupiter"
      },
      {
        "question": "Who discovered penicillin?",
        "options": ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Jonas Salk"],
        "correct_answer": "Alexander Fleming"
      },
      {
        "question": "What is the capital of Turkey?",
        "options": ["Istanbul", "Ankara", "Izmir", "Antalya"],
        "correct_answer": "Ankara"
      },
      {
        "question": "In which continent is the Amazon Rainforest located?",
        "options": ["South America", "Africa", "Asia", "Australia"],
        "correct_answer": "South America"
      },
      {
        "question": "Who is known as the 'Father of Genetics'?",
        "options": ["Charles Darwin", "Gregor Mendel", "Watson and Crick", "Francis Galton"],
        "correct_answer": "Gregor Mendel"
      },
      {
        "question": "What is the capital of Saudi Arabia?",
        "options": ["Riyadh", "Mecca", "Jeddah", "Medina"],
        "correct_answer": "Riyadh"
      },
      {
        "question": "In which year did the United States declare independence?",
        "options": ["1776", "1789", "1801", "1812"],
        "correct_answer": "1776"
      },
      {
        "question": "What is the currency of Mexico?",
        "options": ["Peso", "Dollar", "Euro", "Rupee"],
        "correct_answer": "Peso"
      },
      {
        "question": "Which element has the chemical symbol 'H'?",
        "options": ["Helium", "Hydrogen", "Hassium", "Hafnium"],
        "correct_answer": "Hydrogen"
      },
      {
        "question": "What is the capital of South Korea?",
        "options": ["Seoul", "Busan", "Incheon", "Daegu"],
        "correct_answer": "Seoul"
      }
  ]
  
const geographyList=[
    {
      "question": "What is the capital of Brazil?",
      "options": ["Sao Paulo", "Rio de Janeiro", "Brasilia", "Salvador"],
      "correct_answer": "Brasilia"
    },
    {
      "question": "Which river is the longest in the world?",
      "options": ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
      "correct_answer": "Nile River"
    },
    {
      "question": "In which continent is the Sahara Desert located?",
      "options": ["Africa", "Asia", "South America", "North America"],
      "correct_answer": "Africa"
    },
    {
      "question": "What is the highest mountain in the world?",
      "options": ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
      "correct_answer": "Mount Everest"
    },
    {
      "question": "Which country is known as the 'Land of the Rising Sun'?",
      "options": ["China", "Japan", "South Korea", "Vietnam"],
      "correct_answer": "Japan"
    },
    {
      "question": "What is the smallest country in the world?",
      "options": ["San Marino", "Monaco", "Vatican City", "Nauru"],
      "correct_answer": "Vatican City"
    },
    {
      "question": "Which ocean is the largest?",
      "options": ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
      "correct_answer": "Pacific Ocean"
    },
    {
      "question": "Which European city is known as the 'City of Canals'?",
      "options": ["Amsterdam", "Venice", "Stockholm", "Prague"],
      "correct_answer": "Venice"
    },
    {
      "question": "What is the capital of Australia?",
      "options": ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      "correct_answer": "Canberra"
    },
    {
      "question": "Which river flows through Egypt?",
      "options": ["Nile River", "Tigris River", "Euphrates River", "Danube River"],
      "correct_answer": "Nile River"
    },
    {
      "question": "In which country would you find the ancient city of Machu Picchu?",
      "options": ["Peru", "Mexico", "Chile", "Argentina"],
      "correct_answer": "Peru"
    },
    {
      "question": "Which desert is the largest in the world?",
      "options": ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctica"],
      "correct_answer": "Antarctica"
    },
    {
      "question": "What is the capital of South Africa?",
      "options": ["Johannesburg", "Pretoria", "Cape Town", "Durban"],
      "correct_answer": "Pretoria"
    },
    {
      "question": "Which country is known as the 'Land of the Midnight Sun'?",
      "options": ["Norway", "Sweden", "Finland", "Iceland"],
      "correct_answer": "Norway"
    },
    {
      "question": "What is the largest island in the world?",
      "options": ["Greenland", "Australia", "Borneo", "Madagascar"],
      "correct_answer": "Greenland"
    },
    {
      "question": "Which two countries share the longest international border?",
      "options": ["USA and Canada", "Russia and China", "India and Pakistan", "Brazil and Argentina"],
      "correct_answer": "USA and Canada"
    },
    {
      "question": "What is the capital of Canada?",
      "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
      "correct_answer": "Ottawa"
    },
    {
      "question": "Which continent is known as the 'Land Down Under'?",
      "options": ["South America", "Africa", "Australia", "Antarctica"],
      "correct_answer": "Australia"
    },
    {
      "question": "In which country would you find the ancient city of Petra?",
      "options": ["Greece", "Jordan", "Italy", "Turkey"],
      "correct_answer": "Jordan"
    },
    {
      "question": "What is the largest lake in Africa?",
      "options": ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Chad"],
      "correct_answer": "Lake Victoria"
    },
    {
      "question": "Which mountain range separates Europe and Asia?",
      "options": ["The Alps", "The Himalayas", "The Ural Mountains", "The Andes"],
      "correct_answer": "The Ural Mountains"
    },
    {
      "question": "What is the capital of Argentina?",
      "options": ["Buenos Aires", "Rio de Janeiro", "Lima", "Bogota"],
      "correct_answer": "Buenos Aires"
    },
    {
      "question": "Which country is known as the 'Pearl of the Indian Ocean'?",
      "options": ["Maldives", "Sri Lanka", "Mauritius", "Seychelles"],
      "correct_answer": "Sri Lanka"
    },
    {
      "question": "What is the currency of Japan?",
      "options": ["Yen", "Won", "Yuan", "Ringgit"],
      "correct_answer": "Yen"
    },
    {
      "question": "Which river is the boundary between the USA and Mexico?",
      "options": ["Rio Grande", "Mississippi River", "Colorado River", "Columbia River"],
      "correct_answer": "Rio Grande"
    },
    {
      "question": "In which country is the Great Barrier Reef located?",
      "options": ["Australia", "Indonesia", "Maldives", "Philippines"],
      "correct_answer": "Australia"
    },
    {
      "question": "What is the largest city in India?",
      "options": ["Mumbai", "Delhi", "Kolkata", "Chennai"],
      "correct_answer": "Mumbai"
    },
    {
      "question": "Which strait separates Europe and Asia?",
      "options": ["Bosphorus Strait", "Strait of Gibraltar", "English Channel", "Hormuz Strait"],
      "correct_answer": "Bosphorus Strait"
    },{
        "question": "What is the capital of Japan?",
        "options": ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        "correct_answer": "Tokyo"
      },
      {
        "question": "Which river is the longest in the world?",
        "options": ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        "correct_answer": "Nile River"
      },
      {
        "question": "In which mountain range is Mount Everest located?",
        "options": ["Andes", "Himalayas", "Rocky Mountains", "Alps"],
        "correct_answer": "Himalayas"
      },
      {
        "question": "What is the largest lake in Africa?",
        "options": ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Chad"],
        "correct_answer": "Lake Victoria"
      },
      {
        "question": "Which desert is the largest hot desert in the world?",
        "options": ["Gobi Desert", "Karakum Desert", "Sahara Desert", "Great Victoria Desert"],
        "correct_answer": "Sahara Desert"
      },
      {
        "question": "What is the capital of Australia?",
        "options": ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        "correct_answer": "Canberra"
      },
      {
        "question": "Which continent is the driest inhabited continent?",
        "options": ["Africa", "Antarctica", "Australia", "Asia"],
        "correct_answer": "Australia"
      },
      {
        "question": "Which country is known as the 'Land of the Rising Sun'?",
        "options": ["China", "Japan", "South Korea", "Vietnam"],
        "correct_answer": "Japan"
      },
      {
        "question": "What is the capital of Canada?",
        "options": ["Ottawa", "Toronto", "Vancouver", "Montreal"],
        "correct_answer": "Ottawa"
      },
      {
        "question": "Which river runs through Cairo?",
        "options": ["Danube", "Thames", "Nile", "Amazon"],
        "correct_answer": "Nile"
      },
      {
        "question": "In which country is the Great Barrier Reef located?",
        "options": ["Australia", "Brazil", "Mexico", "Indonesia"],
        "correct_answer": "Australia"
      },
      {
        "question": "What is the smallest continent in the world?",
        "options": ["Europe", "Asia", "North America", "Australia"],
        "correct_answer": "Australia"
      },
      {
        "question": "Which country is known as the 'Land of a Thousand Lakes'?",
        "options": ["Finland", "Norway", "Canada", "Sweden"],
        "correct_answer": "Finland"
      },
      {
        "question": "In which ocean is the Bermuda Triangle located?",
        "options": ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Southern Ocean"],
        "correct_answer": "Atlantic Ocean"
      },
      {
        "question": "What is the capital of Brazil?",
        "options": ["Rio de Janeiro", "Sao Paulo", "Brasilia", "Buenos Aires"],
        "correct_answer": "Brasilia"
      },
      {
        "question": "Which African country is known as the 'Pearl of Africa'?",
        "options": ["Kenya", "Uganda", "Tanzania", "Rwanda"],
        "correct_answer": "Uganda"
      },
      {
        "question": "In which country is Mount Kilimanjaro located?",
        "options": ["Kenya", "Tanzania", "Uganda", "Rwanda"],
        "correct_answer": "Tanzania"
      },
      {
        "question": "Which river is the longest in South America?",
        "options": ["Amazon River", "Orinoco River", "Parana River", "Magdalena River"],
        "correct_answer": "Amazon River"
      },
      {
        "question": "What is the capital of South Africa?",
        "options": ["Cape Town", "Johannesburg", "Pretoria", "Durban"],
        "correct_answer": "Pretoria"
      },
      {
        "question": "Which strait separates Asia and Africa?",
        "options": ["Strait of Malacca", "Strait of Gibraltar", "Bering Strait", "Strait of Hormuz"],
        "correct_answer": "Strait of Gibraltar"
      },
      {
        "question": "In which country is the city of Marrakech located?",
        "options": ["Morocco", "Egypt", "Algeria", "Tunisia"],
        "correct_answer": "Morocco"
      },
      {
        "question": "What is the capital of Argentina?",
        "options": ["Buenos Aires", "Santiago", "Lima", "Brasilia"],
        "correct_answer": "Buenos Aires"
      },
      {
        "question": "Which mountain range runs along the border between Italy and Switzerland?",
        "options": ["Himalayas", "Alps", "Andes", "Rocky Mountains"],
        "correct_answer": "Alps"
      },
      {
        "question": "In which African country is the Victoria Falls located?",
        "options": ["Zambia", "Zimbabwe", "Namibia", "Botswana"],
        "correct_answer": "Zambia"
      },
      {
        "question": "What is the capital of Turkey?",
        "options": ["Istanbul", "Ankara", "Izmir", "Antalya"],
        "correct_answer": "Ankara"
      },
      {
        "question": "Which island country is known as the 'Land of the Rising Sun'?",
        "options": ["Maldives", "Sri Lanka", "Japan", "Indonesia"],
        "correct_answer": "Japan"
      },
      {
        "question": "In which U.S. state is the Grand Canyon located?",
        "options": ["Arizona", "Utah", "Nevada", "Colorado"],
        "correct_answer": "Arizona"
      },
      {
        "question": "Which river is the longest in Europe?",
        "options": ["Volga River", "Danube River", "Thames River", "Seine River"],
        "correct_answer": "Volga River"
      },
      {
        "question": "What is the highest mountain in North America?",
        "options": ["Denali (Mount McKinley)", "Mount St. Elias", "Mount Logan", "Pico de Orizaba"],
        "correct_answer": "Denali (Mount McKinley)"
      },
      {
        "question": "Which country is known as the 'Land of the Midnight Sun'?",
        "options": ["Norway", "Sweden", "Finland", "Canada"],
        "correct_answer": "Norway"
      },
      {
        "question": "In which ocean is the Great Barrier Reef located?",
        "options": ["Indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Southern Ocean"],
        "correct_answer": "Pacific Ocean"
      },
      {
        "question": "What is the capital of Peru?",
        "options": ["Lima", "Bogotá", "Quito", "La Paz"],
        "correct_answer": "Lima"
      },
      {
        "question": "Which country is known as the 'Land of the Pharaohs'?",
        "options": ["Greece", "Egypt", "Rome", "Iraq"],
        "correct_answer": "Egypt"
      },
      {
        "question": "In which country is the city of Casablanca located?",
        "options": ["Morocco", "Algeria", "Tunisia", "Libya"],
        "correct_answer": "Morocco"
      },
      {
        "question": "What is the capital of South Korea?",
        "options": ["Seoul", "Busan", "Incheon", "Daegu"],
        "correct_answer": "Seoul"
      },
      {
        "question": "Which country is known as the 'Land of a Thousand Lakes'?",
        "options": ["Finland", "Sweden", "Norway", "Denmark"],
        "correct_answer": "Finland"
      },
      {
        "question": "In which continent is the Amazon Rainforest located?",
        "options": ["South America", "Africa", "Asia", "Australia"],
        "correct_answer": "South America"
      },
      {
        "question": "What is the capital of Chile?",
        "options": ["Santiago", "Buenos Aires", "Lima", "Quito"],
        "correct_answer": "Santiago"
      }
  ]
  
const animalsList=[
    {
      "question": "What is the largest land mammal?",
      "options": ["Elephant", "Giraffe", "Hippopotamus", "Rhinoceros"],
      "correct_answer": "Elephant"
    },
    {
      "question": "Which bird is known for its ability to mimic human speech?",
      "options": ["Parrot", "Crow", "Magpie", "Canary"],
      "correct_answer": "Parrot"
    },
    {
      "question": "What is the largest species of big cat?",
      "options": ["Lion", "Leopard", "Jaguar", "Tiger"],
      "correct_answer": "Tiger"
    },
    {
      "question": "Which animal is known as the 'King of the Jungle'?",
      "options": ["Lion", "Tiger", "Leopard", "Cheetah"],
      "correct_answer": "Lion"
    },
    {
      "question": "What is the only mammal capable of flight?",
      "options": ["Bat", "Bird", "Flying Squirrel", "Butterfly"],
      "correct_answer": "Bat"
    },
    {
      "question": "Which sea creature is known for its eight arms?",
      "options": ["Octopus", "Squid", "Cuttlefish", "Nautilus"],
      "correct_answer": "Octopus"
    },
    {
      "question": "What is the largest species of bear?",
      "options": ["Polar Bear", "Grizzly Bear", "Black Bear", "Kodiak Bear"],
      "correct_answer": "Polar Bear"
    },
    {
      "question": "Which animal is known for its ability to change color?",
      "options": ["Chameleon", "Gecko", "Lizard", "Iguana"],
      "correct_answer": "Chameleon"
    },
    {
      "question": "What is the fastest land animal?",
      "options": ["Cheetah", "Lion", "Gazelle", "Leopard"],
      "correct_answer": "Cheetah"
    },
    {
      "question": "Which marine mammal is known for its long tusk?",
      "options": ["Narwhal", "Beluga Whale", "Dolphin", "Orca"],
      "correct_answer": "Narwhal"
    },
    {
      "question": "What is the largest reptile on Earth?",
      "options": ["Crocodile", "Komodo Dragon", "Iguana", "Turtle"],
      "correct_answer": "Crocodile"
    },
    {
      "question": "Which animal is known for its ability to hibernate?",
      "options": ["Bear", "Bat", "Hedgehog", "Squirrel"],
      "correct_answer": "Bear"
    },
    {
      "question": "What is the largest species of shark?",
      "options": ["Great White Shark", "Hammerhead Shark", "Whale Shark", "Tiger Shark"],
      "correct_answer": "Whale Shark"
    },
    {
      "question": "Which insect is known for its light-producing organ?",
      "options": ["Firefly", "Butterfly", "Beetle", "Mosquito"],
      "correct_answer": "Firefly"
    },
    {
      "question": "What is the national bird of the United States?",
      "options": ["Bald Eagle", "American Robin", "Peregrine Falcon", "Wild Turkey"],
      "correct_answer": "Bald Eagle"
    },
    {
      "question": "Which animal is known for its long neck?",
      "options": ["Giraffe", "Elephant", "Kangaroo", "Ostrich"],
      "correct_answer": "Giraffe"
    },
    {
      "question": "What is the largest living primate?",
      "options": ["Gorilla", "Chimpanzee", "Orangutan", "Bonobo"],
      "correct_answer": "Gorilla"
    },
    {
      "question": "Which snake is the largest venomous snake in the world?",
      "options": ["King Cobra", "Black Mamba", "Inland Taipan", "Rattlesnake"],
      "correct_answer": "King Cobra"
    },
    {
      "question": "What is the smallest bird in the world?",
      "options": ["Hummingbird", "Finch", "Wren", "Sparrow"],
      "correct_answer": "Hummingbird"
    },
    {
      "question": "Which animal is known for its ability to regrow its tail?",
      "options": ["Lizard", "Frog", "Salamander", "Snake"],
      "correct_answer": "Lizard"
    },
    {
      "question": "What is the largest living bird?",
      "options": ["Ostrich", "Emu", "Cassowary", "Albatross"],
      "correct_answer": "Ostrich"
    },
    {
      "question": "Which animal is known for its ability to echolocate?",
      "options": ["Dolphin", "Bat", "Whale", "Shark"],
      "correct_answer": "Bat"
    },
    {
      "question": "What is the natural habitat of a koala?",
      "options": ["Jungle", "Desert", "Rainforest", "Eucalyptus Forest"],
      "correct_answer": "Eucalyptus Forest"
    },
    {
      "question": "Which big cat is known for its distinctive black mane?",
      "options": ["Lion", "Tiger", "Leopard", "Jaguar"],
      "correct_answer": "Lion"
    },
    {
      "question": "What is the largest living fish?",
      "options": ["Whale Shark", "Great White Shark", "Manta Ray", "Barracuda"],
      "correct_answer": "Whale Shark"
    },
    {
      "question": "Which animal is known for its incredible ability to camouflage?",
      "options": ["Cuttlefish", "Chameleon", "Octopus", "Lizard"],
      "correct_answer": "Cuttlefish"
    },
    {
      "question": "What is the primary diet of a panda?",
      "options": ["Bamboo", "Meat", "Fruits", "Grass"],
      "correct_answer": "Bamboo"
    },
    {
      "question": "Which animal is known for its long, sticky tongue?",
      "options": ["Frog", "Chameleon", "Anteater", "Giraffe"],
      "correct_answer": "Anteater"
    },
    {
      "question": "What is the largest species of penguin?",
      "options": ["Emperor Penguin", "King Penguin", "Adélie Penguin", "Chinstrap Penguin"],
      "correct_answer": "Emperor Penguin"
    },
    {
      "question": "Which animal is known for its ability to mimic the appearance of twigs?",
      "options": ["Chameleon", "Walking Stick Insect", "Leaf-Tailed Gecko", "Stick Bug"],
      "correct_answer": "Walking Stick Insect"
    },
    {
      "question": "What is the largest rodent in the world?",
      "options": ["Squirrel", "Beaver", "Porcupine", "Capybara"],
      "correct_answer": "Capybara"
    },
    {
      "question": "Which bird is known for its ability to imitate human speech?",
      "options": ["Parrot", "Mockingbird", "Starling", "Crow"],
      "correct_answer": "Parrot"
    },
    {
      "question": "What is the gestation period of an elephant?",
      "options": ["9 months", "12 months", "22 months", "18 months"],
      "correct_answer": "22 months"
    },
    {
      "question": "Which insect is known for its ability to produce light?",
      "options": ["Firefly", "Dragonfly", "Butterfly", "Beetle"],
      "correct_answer": "Firefly"
    },
    {
      "question": "What is the largest land predator?",
      "options": ["Lion", "Tiger", "Grizzly Bear", "Polar Bear"],
      "correct_answer": "Polar Bear"
    },
    {
      "question": "Which animal is known for its ability to regrow its limbs?",
      "options": ["Lizard", "Salamander", "Frog", "Starfish"],
      "correct_answer": "Salamander"
    },
    {
      "question": "What is the natural habitat of a penguin?",
      "options": ["Desert", "Arctic", "Rainforest", "Grassland"],
      "correct_answer": "Arctic"
    },
    {
      "question": "Which animal is known for its ability to produce venom?",
      "options": ["Snake", "Frog", "Jellyfish", "Scorpion"],
      "correct_answer": "Snake"
    },
    {
      "question": "What is the largest species of deer?",
      "options": ["Moose", "Reindeer", "Elk", "White-tailed Deer"],
      "correct_answer": "Moose"
    },
    {
      "question": "Which animal is known for its ability to camouflage by changing colors and patterns?",
      "options": ["Cuttlefish", "Chameleon", "Octopus", "Lizard"],
      "correct_answer": "Cuttlefish"
    },
    {
      "question": "What is the smallest species of monkey?",
      "options": ["Tamarin", "Marmoset", "Capuchin", "Howler Monkey"],
      "correct_answer": "Tamarin"
    },
    {
      "question": "Which mammal can lay eggs?",
      "options": ["Platypus", "Armadillo", "Kangaroo", "Dolphin"],
      "correct_answer": "Platypus"
    },
    {
      "question": "What is the largest species of big cat?",
      "options": ["Lion", "Leopard", "Jaguar", "Tiger"],
      "correct_answer": "Tiger"
    },
    {
      "question": "Which bird is known for its long migration journeys, often spanning thousands of miles?",
      "options": ["Albatross", "Swan", "Peregrine Falcon", "Stork"],
      "correct_answer": "Albatross"
    },
    {
      "question": "What is the lifespan of a typical house cat?",
      "options": ["8-12 years", "15-20 years", "3-5 years", "25-30 years"],
      "correct_answer": "15-20 years"
    },
    {
      "question": "Which mammal is capable of walking on ceilings?",
      "options": ["Sloth", "Bat", "Spider Monkey", "Gecko"],
      "correct_answer": "Sloth"
    },
    {
      "question": "What is the primary diet of a koala?",
      "options": ["Jungle", "Desert", "Rainforest", "Eucalyptus Forest"],
      "correct_answer": "Eucalyptus Forest"
    }
  ]
  
const sandNatureList=[
    {
      "question": "What is the chemical symbol for the element gold?",
      "options": ["Au", "Ag", "Fe", "Cu"],
      "correct_answer": "Au"
    },
    {
      "question": "Which planet is known as the 'Red Planet'?",
      "options": ["Mars", "Venus", "Jupiter", "Mercury"],
      "correct_answer": "Mars"
    },
    {
      "question": "What is the process by which plants make their own food using sunlight?",
      "options": ["Photosynthesis", "Respiration", "Transpiration", "Fermentation"],
      "correct_answer": "Photosynthesis"
    },
    {
      "question": "What is the smallest unit of life?",
      "options": ["Cell", "Molecule", "Atom", "Organism"],
      "correct_answer": "Cell"
    },
    {
      "question": "Who developed the theory of general relativity?",
      "options": ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Niels Bohr"],
      "correct_answer": "Albert Einstein"
    },
    {
      "question": "What is the powerhouse of the cell?",
      "options": ["Nucleus", "Mitochondria", "Endoplasmic Reticulum", "Golgi Apparatus"],
      "correct_answer": "Mitochondria"
    },
    {
      "question": "What is the chemical symbol for water?",
      "options": ["H2O", "CO2", "O2", "N2"],
      "correct_answer": "H2O"
    },
    {
      "question": "Which gas is essential for photosynthesis?",
      "options": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Methane"],
      "correct_answer": "Carbon Dioxide"
    },
    {
      "question": "What is the largest organ in the human body?",
      "options": ["Heart", "Liver", "Brain", "Skin"],
      "correct_answer": "Skin"
    },
    {
      "question": "What is the chemical symbol for the element oxygen?",
      "options": ["O", "O2", "Os", "Om"],
      "correct_answer": "O"
    },
    {
      "question": "What is the primary function of the human respiratory system?",
      "options": ["Circulation", "Digestion", "Breathing", "Excretion"],
      "correct_answer": "Breathing"
    },
    {
      "question": "Which gas makes up the majority of Earth's atmosphere?",
      "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
      "correct_answer": "Nitrogen"
    },
    {
      "question": "What is the chemical symbol for the element carbon?",
      "options": ["Ca", "Co", "C", "Cu"],
      "correct_answer": "C"
    },
    {
      "question": "What is the process by which water changes from a liquid to a gas?",
      "options": ["Condensation", "Evaporation", "Sublimation", "Freezing"],
      "correct_answer": "Evaporation"
    },
    {
      "question": "Which gas do plants release during photosynthesis?",
      "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      "correct_answer": "Oxygen"
    },
    {
      "question": "What is the largest planet in our solar system?",
      "options": ["Venus", "Jupiter", "Mars", "Saturn"],
      "correct_answer": "Jupiter"
    },
    {
      "question": "What is the chemical symbol for the element iron?",
      "options": ["I", "Fe", "Ir", "In"],
      "correct_answer": "Fe"
    },
    {
      "question": "Which layer of the Earth's atmosphere contains the ozone layer?",
      "options": ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
      "correct_answer": "Stratosphere"
    },
    {
      "question": "What is the process by which rocks are broken down into smaller particles?",
      "options": ["Erosion", "Deposition", "Weathering", "Sedimentation"],
      "correct_answer": "Weathering"
    },
    {
      "question": "Which force holds protons and neutrons together in an atomic nucleus?",
      "options": ["Electromagnetic force", "Gravitational force", "Nuclear force", "Centrifugal force"],
      "correct_answer": "Nuclear force"
    },
    {
      "question": "What is the chemical symbol for the element hydrogen?",
      "options": ["H2", "He", "Ho", "H"],
      "correct_answer": "H"
    },
    {
      "question": "Which gas is responsible for the greenhouse effect on Earth?",
      "options": ["Ozone", "Carbon Dioxide", "Methane", "Water Vapor"],
      "correct_answer": "Carbon Dioxide"
    },
    {
      "question": "What is the chemical symbol for the element sodium?",
      "options": ["So", "S", "Na", "N"],
      "correct_answer": "Na"
    },
    {
      "question": "What is the speed of light in a vacuum?",
      "options": ["300,000 kilometers per second", "150,000 kilometers per second", "500,000 kilometers per second", "200,000 kilometers per second"],
      "correct_answer": "300,000 kilometers per second"
    },
    {
      "question": "Which element is essential for the process of respiration in living organisms?",
      "options": ["Oxygen", "Carbon", "Nitrogen", "Hydrogen"],
      "correct_answer": "Oxygen"
    },
    {
      "question": "What is the chemical symbol for the element nitrogen?",
      "options": ["Ni", "N", "Ne", "Na"],
      "correct_answer": "N"
    },
    {
      "question": "Which gas do humans exhale during respiration?",
      "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
      "correct_answer": "Carbon Dioxide"
    },
    {
      "question": "What is the largest moon in our solar system?",
      "options": ["Titan", "Ganymede", "Europa", "Io"],
      "correct_answer": "Ganymede"
    },
    {
      "question": "What is the chemical symbol for the element calcium?",
      "options": ["Ca", "Co", "C", "Cu"],
      "correct_answer": "Ca"
    },
    {
      "question": "Which gas is known as laughing gas?",
      "options": ["Oxygen", "Nitrogen", "Hydrogen", "Nitrous Oxide"],
      "correct_answer": "Nitrous Oxide"
    },
    {
      "question": "What is the chemical symbol for the element silver?",
      "options": ["Si", "Sr", "Ag", "Au"],
      "correct_answer": "Ag"
    },
    {
      "question": "What is the SI unit of electric current?",
      "options": ["Volt", "Ampere", "Ohm", "Watt"],
      "correct_answer": "Ampere"
    },
    {
      "question": "Which planet is known as the 'Blue Planet'?",
      "options": ["Earth", "Uranus", "Neptune", "Mercury"],
      "correct_answer": "Earth"
    },
    {
      "question": "What is the chemical symbol for the element helium?",
      "options": ["He", "H", "Hu", "Hy"],
      "correct_answer": "He"
    },
    {
      "question": "What is the process by which an organism develops from an egg to an adult?",
      "options": ["Metamorphosis", "Photosynthesis", "Fermentation", "Germination"],
      "correct_answer": "Metamorphosis"
    },
    {
      "question": "Which gas is produced during the process of respiration in living organisms?",
      "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
      "correct_answer": "Carbon Dioxide"
    },
    {
      "question": "What is the chemical symbol for the element potassium?",
      "options": ["K", "P", "Pt", "Ka"],
      "correct_answer": "K"
    },
    {
      "question": "Which scientist proposed the laws of motion and universal gravitation?",
      "options": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
      "correct_answer": "Isaac Newton"
    },
    {
      "question": "What is the process by which plants lose water to the atmosphere?",
      "options": ["Photosynthesis", "Respiration", "Transpiration", "Evaporation"],
      "correct_answer": "Transpiration"
    },
    {
      "question": "Which gas is responsible for the ozone layer in the Earth's atmosphere?",
      "options": ["Oxygen", "Carbon Dioxide", "Methane", "Ozone"],
      "correct_answer": "Ozone"
    },
    {
      "question": "What is the chemical symbol for the element copper?",
      "options": ["Co", "Cu", "Ca", "Cr"],
      "correct_answer": "Cu"
    },
    {
      "question": "Which force is responsible for the acceleration of an object due to gravity?",
      "options": ["Frictional Force", "Gravitational Force", "Electromagnetic Force", "Centrifugal Force"],
      "correct_answer": "Gravitational Force"
    },
    {
      "question": "What is the chemical symbol for the element uranium?",
      "options": ["Un", "Ur", "U", "Ul"],
      "correct_answer": "U"
    },
    {
      "question": "Which gas is the most abundant in the Earth's atmosphere?",
      "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
      "correct_answer": "Nitrogen"
    },
    {
      "question": "What is the chemical symbol for the element neon?",
      "options": ["Ne", "Na", "No", "Nu"],
      "correct_answer": "Ne"
    },
    {
        "question": "What is the process by which plants convert light energy into chemical energy?",
        "options": ["Photosynthesis", "Respiration", "Transpiration", "Fermentation"],
        "correct_answer": "Photosynthesis"
      },
      {
        "question": "Which gas is known as the 'silent killer' due to its colorless and odorless nature?",
        "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Carbon Monoxide"],
        "correct_answer": "Carbon Monoxide"
      },
      {
        "question": "What is the study of fossils called?",
        "options": ["Paleontology", "Geology", "Archaeology", "Anthropology"],
        "correct_answer": "Paleontology"
      },
      {
        "question": "Which planet is known as the 'Morning Star' or 'Evening Star'?",
        "options": ["Venus", "Mars", "Jupiter", "Saturn"],
        "correct_answer": "Venus"
      },
      {
        "question": "What is the process by which plants release water vapor into the atmosphere?",
        "options": ["Photosynthesis", "Respiration", "Transpiration", "Condensation"],
        "correct_answer": "Transpiration"
      },
      {
        "question": "Which gas is responsible for the greenhouse effect on Venus?",
        "options": ["Oxygen", "Carbon Dioxide", "Methane", "Sulfur Hexafluoride"],
        "correct_answer": "Carbon Dioxide"
      },
      {
        "question": "What is the chemical symbol for the element phosphorus?",
        "options": ["Pa", "Ph", "Po", "P"],
        "correct_answer": "P"
      },
      {
        "question": "Which force opposes the motion of objects through a fluid (liquid or gas)?",
        "options": ["Frictional Force", "Gravitational Force", "Electromagnetic Force", "Centrifugal Force"],
        "correct_answer": "Frictional Force"
      },
      {
        "question": "What is the process by which rocks, minerals, and organic material are moved from one place to another?",
        "options": ["Erosion", "Deposition", "Weathering", "Sedimentation"],
        "correct_answer": "Erosion"
      },
      {
        "question": "Which gas is known as 'laughing gas' and is used as an anesthetic?",
        "options": ["Oxygen", "Nitrogen", "Hydrogen", "Nitrous Oxide"],
        "correct_answer": "Nitrous Oxide"
      },
      {
        "question": "What is the largest organ inside the human body?",
        "options": ["Heart", "Liver", "Lung", "Stomach"],
        "correct_answer": "Liver"
      },
      {
        "question": "Which scientist formulated the laws of classical mechanics and the law of universal gravitation?",
        "options": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        "correct_answer": "Isaac Newton"
      },
      {
        "question": "What is the chemical symbol for the element sulfur?",
        "options": ["Su", "Sf", "S", "Sr"],
        "correct_answer": "S"
      },
      {
        "question": "What is the SI unit of force?",
        "options": ["Newton", "Joule", "Watt", "Volt"],
        "correct_answer": "Newton"
      },
      {
        "question": "Which gas is responsible for the color of the Earth's sky?",
        "options": ["Oxygen", "Nitrogen", "Helium", "Argon"],
        "correct_answer": "Nitrogen"
      },
      {
        "question": "What is the chemical symbol for the element chlorine?",
        "options": ["Ch", "Cl", "Cn", "Ce"],
        "correct_answer": "Cl"
      },
      {
        "question": "Which planet is known as the 'Ice Giant'?",
        "options": ["Neptune", "Uranus", "Saturn", "Pluto"],
        "correct_answer": "Uranus"
      },
      {
        "question": "What is the process by which an organism transforms from a larva to an adult?",
        "options": ["Metamorphosis", "Photosynthesis", "Fermentation", "Germination"],
        "correct_answer": "Metamorphosis"
      },
      {
        "question": "Which gas is responsible for the sweet smell of rotten eggs?",
        "options": ["Oxygen", "Hydrogen", "Methane", "Hydrogen Sulfide"],
        "correct_answer": "Hydrogen Sulfide"
      }
  ]
  
const computerList=[
    {
      "question": "What does CPU stand for?",
      "options": ["Central Processing Unit", "Computer Personal Unit", "Central Processor Unit", "Central Process Unit"],
      "correct_answer": "Central Processing Unit"
    },
    {
      "question": "Which programming language shares its name with an island in Indonesia?",
      "options": ["Java", "Python", "C", "Java"],
      "correct_answer": "Java"
    },
    {
      "question": "What is the full form of HTML?",
      "options": ["Hypertext Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language", "Hypertext and Text Markup Language"],
      "correct_answer": "Hypertext Markup Language"
    },
    {
      "question": "Which company developed the first computer mouse?",
      "options": ["Apple", "Microsoft", "Xerox", "IBM"],
      "correct_answer": "Xerox"
    },
    {
      "question": "What does the acronym URL stand for?",
      "options": ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Retrieval Locator", "Universal Retrieval Locator"],
      "correct_answer": "Uniform Resource Locator"
    },
    {
      "question": "In computing, what does MIDI stand for?",
      "options": ["Musical Instrument Digital Interface", "Modular Interface of Digital Instruments", "Musical Interface of Digital Instruments", "Modular Instrument Data Interface"],
      "correct_answer": "Musical Instrument Digital Interface"
    },
    {
      "question": "What is the purpose of an operating system?",
      "options": ["Manage hardware and software resources", "Provide internet connectivity", "Run computer games", "Create documents and spreadsheets"],
      "correct_answer": "Manage hardware and software resources"
    },
    {
      "question": "Which programming language is known as the 'mother of all languages'?",
      "options": ["C", "Fortran", "Assembly", "COBOL"],
      "correct_answer": "C"
    },
    {
      "question": "What does the acronym VPN stand for?",
      "options": ["Virtual Private Network", "Very Private Network", "Virtual Personal Network", "Very Personal Network"],
      "correct_answer": "Virtual Private Network"
    },
    {
      "question": "Who is often called the 'Father of the Computer'?",
      "options": ["Charles Babbage", "Alan Turing", "John von Neumann", "Ada Lovelace"],
      "correct_answer": "Charles Babbage"
    },
    {
      "question": "Which computer hardware device is used to store data permanently?",
      "options": ["Hard Disk Drive", "Random Access Memory", "Central Processing Unit", "Solid State Drive"],
      "correct_answer": "Hard Disk Drive"
    },
    {
      "question": "What is the primary function of RAM in a computer?",
      "options": ["Temporary storage of data and program code", "Permanent storage of data", "Running the operating system", "Managing the CPU"],
      "correct_answer": "Temporary storage of data and program code"
    },
    {
      "question": "Which programming language is widely used for web development and design?",
      "options": ["Java", "C++", "HTML", "Python"],
      "correct_answer": "HTML"
    },
    {
      "question": "What is the purpose of a firewall in computer security?",
      "options": ["Monitor and control incoming and outgoing network traffic", "Block access to websites", "Provide internet connectivity", "Encrypt files on the hard drive"],
      "correct_answer": "Monitor and control incoming and outgoing network traffic"
    },
    {
      "question": "Which computer scientist is known for creating the World Wide Web?",
      "options": ["Tim Berners-Lee", "Bill Gates", "Mark Zuckerberg", "Larry Page"],
      "correct_answer": "Tim Berners-Lee"
    },
    {
      "question": "What is the term for a malicious software that spreads and infects other computers?",
      "options": ["Virus", "Spyware", "Trojan Horse", "Worm"],
      "correct_answer": "Worm"
    },
    {
      "question": "Which company developed the first graphical user interface (GUI) for personal computers?",
      "options": ["Microsoft", "Apple", "IBM", "Xerox"],
      "correct_answer": "Xerox"
    },
    {
      "question": "In the context of programming, what does API stand for?",
      "options": ["Application Programming Interface", "Advanced Programming Interface", "Application Processing Interface", "Automated Programming Interface"],
      "correct_answer": "Application Programming Interface"
    },
    {
      "question": "What is the purpose of an SSD in a computer?",
      "options": ["Fast storage with no moving parts", "Optical disk drive", "Enhanced graphics processing", "External data transfer"],
      "correct_answer": "Fast storage with no moving parts"
    },
    {
      "question": "Which computer scientist is known for developing the C programming language?",
      "options": ["Dennis Ritchie", "Bjarne Stroustrup", "Tim Berners-Lee", "Grace Hopper"],
      "correct_answer": "Dennis Ritchie"
    },
    {
      "question": "What does the acronym HTTP stand for?",
      "options": ["Hypertext Transfer Protocol", "Hyperlink Text Transfer Protocol", "Hypertext Transmission Protocol", "Hyperlink Transfer Text Protocol"],
      "correct_answer": "Hypertext Transfer Protocol"
    },
    {
      "question": "Which programming language is often used for artificial intelligence and machine learning?",
      "options": ["Python", "Java", "C#", "Ruby"],
      "correct_answer": "Python"
    },
    {
      "question": "What is the main function of a GPU in a computer?",
      "options": ["Graphics processing", "Memory management", "Central processing", "Network communication"],
      "correct_answer": "Graphics processing"
    },
    {
      "question": "In computer networking, what does LAN stand for?",
      "options": ["Local Area Network", "Large Area Network", "Longitudinal Access Network", "Logical Area Network"],
      "correct_answer": "Local Area Network"
    },
    {
      "question": "What is the purpose of the 'Ctrl + Alt + Del' keyboard shortcut in Windows?",
      "options": ["Access Task Manager", "Open Control Panel", "Lock the computer", "Create a new folder"],
      "correct_answer": "Access Task Manager"
    },
    {
      "question": "Which programming language is known for its use in data analysis and statistics?",
      "options": ["R", "Java", "C++", "Swift"],
      "correct_answer": "R"
    },
    {
      "question": "What is the term for a software program that replicates itself and spreads to other computers?",
      "options": ["Virus", "Spyware", "Trojan Horse", "Worm"],
      "correct_answer": "Virus"
    },
    {
      "question": "Which computer scientist is known for developing the Python programming language?",
      "options": ["Guido van Rossum", "Linus Torvalds", "Larry Wall", "Bjarne Stroustrup"],
      "correct_answer": "Guido van Rossum"
    },
    {
      "question": "What is the purpose of an Ethernet cable in computer networking?",
      "options": ["Connect devices in a local network", "Charge the laptop battery", "Improve graphics performance", "Wireless communication"],
      "correct_answer": "Connect devices in a local network"
    },
    {
      "question": "Which computer hardware component is responsible for storing data in a permanent form?",
      "options": ["Hard Disk Drive", "Random Access Memory", "Central Processing Unit", "Graphics Processing Unit"],
      "correct_answer": "Hard Disk Drive"
    },
    {
      "question": "What does the acronym DNS stand for in the context of computer networking?",
      "options": ["Domain Name System", "Data Network Service", "Dynamic Naming System", "Digital Network Security"],
      "correct_answer": "Domain Name System"
    },
    {
      "question": "Which programming language is commonly used for web development and server-side scripting?",
      "options": ["JavaScript", "Python", "C#", "Swift"],
      "correct_answer": "JavaScript"
    },
    {
      "question": "In the context of computer graphics, what does GPU stand for?",
      "options": ["Graphics Processing Unit", "General Processing Unit", "Graphical Performance Unit", "Gaming Processing Unit"],
      "correct_answer": "Graphics Processing Unit"
    },
    {
      "question": "What is the purpose of the 'Ctrl + C' keyboard shortcut in Windows?",
      "options": ["Copy", "Cut", "Paste", "Undo"],
      "correct_answer": "Copy"
    },
    {
      "question": "Which programming language is often used for developing mobile applications?",
      "options": ["Swift", "Java", "C#", "Ruby"],
      "correct_answer": "Swift"
    },
    {
      "question": "What is the term for a program that appears legitimate but performs malicious actions when executed?",
      "options": ["Trojan Horse", "Spyware", "Worm", "Adware"],
      "correct_answer": "Trojan Horse"
    },
    {
      "question": "What is the purpose of the 'Ctrl + Z' keyboard shortcut in Windows?",
      "options": ["Undo", "Redo", "Cut", "Paste"],
      "correct_answer": "Undo"
    },
    {
      "question": "Which programming language is commonly used for system-level programming and operating systems?",
      "options": ["C", "Java", "Python", "JavaScript"],
      "correct_answer": "C"
    },
    {
      "question": "What does the acronym SQL stand for?",
      "options": ["Structured Query Language", "System Query Language", "Sequential Query Language", "Simple Query Language"],
      "correct_answer": "Structured Query Language"
    },
    {
      "question": "Which company developed the first commercially successful personal computer?",
      "options": ["IBM", "Microsoft", "Apple", "Commodore"],
      "correct_answer": "IBM"
    },
    {
      "question": "What is the purpose of the 'Ctrl + V' keyboard shortcut in Windows?",
      "options": ["Paste", "Copy", "Cut", "Undo"],
      "correct_answer": "Paste"
    },
    
        {
          "question": "What does the acronym SQL stand for?",
          "options": ["Structured Query Language", "System Query Language", "Sequential Query Language", "Simplified Query Language"],
          "correct_answer": "Structured Query Language"
        },
        {
          "question": "Which programming language is often used for developing mobile applications?",
          "options": ["Swift", "Java", "C#", "Objective-C"],
          "correct_answer": "Swift"
        },
        {
          "question": "What is the purpose of the command 'chmod' in Unix-based operating systems?",
          "options": ["Change file permissions", "Change file ownership", "Change file location", "Change file content"],
          "correct_answer": "Change file permissions"
        },
        {
          "question": "What does the acronym API stand for in the context of web development?",
          "options": ["Application Programming Interface", "Automated Programming Interface", "Advanced Programming Interface", "Application Process Interface"],
          "correct_answer": "Application Programming Interface"
        },
        {
          "question": "Which computer scientist is known for developing the Linux operating system kernel?",
          "options": ["Linus Torvalds", "Richard Stallman", "Andrew Tanenbaum", "Ken Thompson"],
          "correct_answer": "Linus Torvalds"
        },
        {
          "question": "What is the purpose of the command 'grep' in Unix-based operating systems?",
          "options": ["Search for patterns in text files", "Copy files", "Rename files", "Delete files"],
          "correct_answer": "Search for patterns in text files"
        },
        {
          "question": "Which programming language is often used for building dynamic web pages?",
          "options": ["JavaScript", "HTML", "CSS", "Java"],
          "correct_answer": "JavaScript"
        },
        {
          "question": "What is the term for a malicious software that disguises itself as legitimate and spreads by tricking users?",
          "options": ["Spyware", "Trojan Horse", "Worm", "Ransomware"],
          "correct_answer": "Trojan Horse"
        },
        {
          "question": "What is the purpose of a DNS (Domain Name System) in computer networks?",
          "options": ["Translate domain names to IP addresses", "Encrypt internet traffic", "Manage network security", "Create websites"],
          "correct_answer": "Translate domain names to IP addresses"
        },
        {
          "question": "In programming, what is an 'if statement' used for?",
          "options": ["Conditional execution of code", "Looping", "Declaring variables", "Function definition"],
          "correct_answer": "Conditional execution of code"
        },
        {
          "question": "Which web browser is known for its open-source nature and privacy features?",
          "options": ["Mozilla Firefox", "Google Chrome", "Microsoft Edge", "Safari"],
          "correct_answer": "Mozilla Firefox"
        },
        {
          "question": "What is the purpose of the command 'git clone' in version control systems?",
          "options": ["Copy a repository to the local machine", "Create a new repository", "Delete a repository", "Merge branches"],
          "correct_answer": "Copy a repository to the local machine"
        },
        {
          "question": "Which programming language is commonly used for building databases?",
          "options": ["SQL", "Java", "Python", "C++"],
          "correct_answer": "SQL"
        },
        {
          "question": "What does the acronym HTTPS stand for in the context of web browsing?",
          "options": ["Hypertext Transfer Protocol Secure", "Hypertext Transfer Protocol Standard", "Hypertext Transmission Protocol Secure", "Hypertext Transfer Process Standard"],
          "correct_answer": "Hypertext Transfer Protocol Secure"
        },
        {
          "question": "In computer networking, what is the purpose of a router?",
          "options": ["Forward data between networks", "Connect devices within a network", "Filter spam emails", "Run web servers"],
          "correct_answer": "Forward data between networks"
        },
        {
          "question": "What is the purpose of the 'Ctrl + C' keyboard shortcut in command-line interfaces?",
          "options": ["Interrupt or stop a process", "Copy selected text", "Create a new file", "Open the control panel"],
          "correct_answer": "Interrupt or stop a process"
        },
        {
          "question": "Which programming language is often used for developing mobile applications on the Android platform?",
          "options": ["Java", "Swift", "Objective-C", "Kotlin"],
          "correct_answer": "Java"
        },
        {
          "question": "What is the purpose of the command 'chmod +x' in Unix-based operating systems?",
          "options": ["Make a file executable", "Change file ownership", "Remove file permissions", "Rename a file"],
          "correct_answer": "Make a file executable"
        },
        {
          "question": "Which computer scientist is known for creating the C++ programming language?",
          "options": ["Bjarne Stroustrup", "Dennis Ritchie", "Guido van Rossum", "Linus Torvalds"],
          "correct_answer": "Bjarne Stroustrup"
        }
      
      
  ]
  
const mathList=[
    {
      "question": "What is the value of π (pi) to two decimal places?",
      "options": ["3.14", "3.16", "3.18", "3.12"],
      "correct_answer": "3.14"
    },
    {
      "question": "What is the sum of the angles in a triangle?",
      "options": ["180 degrees", "90 degrees", "360 degrees", "120 degrees"],
      "correct_answer": "180 degrees"
    },
    {
      "question": "What is the square root of 64?",
      "options": ["8", "6", "10", "12"],
      "correct_answer": "8"
    },
    {
      "question": "In a right-angled triangle, what is the side opposite the right angle called?",
      "options": ["Hypotenuse", "Adjacent side", "Opposite side", "Adjacent hypotenuse"],
      "correct_answer": "Hypotenuse"
    },
    {
      "question": "What is the area of a rectangle with length 10 units and width 5 units?",
      "options": ["50 square units", "30 square units", "25 square units", "15 square units"],
      "correct_answer": "50 square units"
    },
    {
      "question": "What is the product of 8 multiplied by 7?",
      "options": ["56", "64", "49", "42"],
      "correct_answer": "56"
    },
    {
      "question": "If a = 5 and b = 3, what is the value of a + b?",
      "options": ["8", "15", "18", "12"],
      "correct_answer": "8"
    },
    {
      "question": "What is the volume of a cube with side length 3 units?",
      "options": ["27 cubic units", "18 cubic units", "9 cubic units", "36 cubic units"],
      "correct_answer": "27 cubic units"
    },
    {
      "question": "What is the perimeter of a square with side length 4 units?",
      "options": ["16 units", "12 units", "8 units", "20 units"],
      "correct_answer": "16 units"
    },
    {
      "question": "If x = 3 and y = 7, what is the value of x² + y²?",
      "options": ["58", "52", "68", "74"],
      "correct_answer": "58"
    },
    {
      "question": "What is the value of 5 factorial (5!)?",
      "options": ["120", "60", "240", "180"],
      "correct_answer": "120"
    },
    {
      "question": "What is the perimeter of a triangle with sides 8, 15, and 17 units?",
      "options": ["40 units", "30 units", "45 units", "32 units"],
      "correct_answer": "40 units"
    },
    {
      "question": "What is the value of 2 to the power of 6 (2⁶)?",
      "options": ["64", "128", "32", "256"],
      "correct_answer": "64"
    },
    {
      "question": "What is the area of a circle with radius 6 units? (Use π = 3.14)",
      "options": ["113.04 square units", "37.68 square units", "75.36 square units", "56.52 square units"],
      "correct_answer": "113.04 square units"
    },
    {
      "question": "If a = 4 and b = 9, what is the value of a² - b²?",
      "options": ["-65", "-49", "-105", "-81"],
      "correct_answer": "-65"
    },
    {
      "question": "What is the value of the square root of 100?",
      "options": ["10", "8", "12", "14"],
      "correct_answer": "10"
    },
    {
      "question": "If the sum of two angles is 90 degrees, what is the term used to describe those angles?",
      "options": ["Complementary", "Supplementary", "Adjacent", "Vertical"],
      "correct_answer": "Complementary"
    },
    {
      "question": "What is the value of 3 cubed (3³)?",
      "options": ["27", "81", "9", "36"],
      "correct_answer": "27"
    },
    {
      "question": "If x = 8 and y = 2, what is the value of x - y?",
      "options": ["6", "4", "10", "12"],
      "correct_answer": "6"
    },
    {
      "question": "What is the area of a triangle with base 12 units and height 8 units?",
      "options": ["48 square units", "64 square units", "96 square units", "24 square units"],
      "correct_answer": "48 square units"
    },
    {
      "question": "If a = 6 and b = 2, what is the value of a ÷ b?",
      "options": ["3", "4", "2", "5"],
      "correct_answer": "3"
    },
    {
      "question": "What is the circumference of a circle with diameter 10 units? (Use π = 3.14)",
      "options": ["31.4 units", "15.7 units", "21.2 units", "37.7 units"],
      "correct_answer": "31.4 units"
    },
    {
      "question": "If the base of a rectangle is 9 units and the height is 6 units, what is the area?",
      "options": ["54 square units", "45 square units", "36 square units", "27 square units"],
      "correct_answer": "54 square units"
    },
    {
      "question": "What is the value of 4 factorial (4!)?",
      "options": ["24", "120", "48", "72"],
      "correct_answer": "24"
    },
    {
      "question": "If x = 10 and y = 3, what is the value of x + 2y?",
      "options": ["16", "20", "26", "13"],
      "correct_answer": "16"
    },
    {
      "question": "What is the volume of a cylinder with radius 4 units and height 10 units? (Use π = 3.14)",
      "options": ["502.4 cubic units", "251.2 cubic units", "125.6 cubic units", "628 cubic units"],
      "correct_answer": "502.4 cubic units"
    },
    {
      "question": "If a = 7 and b = 5, what is the value of a² + 2ab + b²?",
      "options": ["144", "196", "121", "169"],
      "correct_answer": "196"
    },
    {
      "question": "What is the value of 5 to the power of 3 (5³)?",
      "options": ["125", "250", "100", "75"],
      "correct_answer": "125"
    },
    {
      "question": "If the sum of two angles is 180 degrees, what is the term used to describe those angles?",
      "options": ["Supplementary", "Complementary", "Adjacent", "Vertical"],
      "correct_answer": "Supplementary"
    },
    {
      "question": "What is the value of 9 squared (9²)?",
      "options": ["81", "18", "72", "27"],
      "correct_answer": "81"
    },
    {
      "question": "If x = 6 and y = 4, what is the value of x² - 2xy + y²?",
      "options": ["16", "4", "36", "64"],
      "correct_answer": "16"
    },
    {
      "question": "What is the value of 6 factorial (6!)?",
      "options": ["720", "360", "144", "5040"],
      "correct_answer": "720"
    },
    {
      "question": "If the base of a triangle is 10 units and the height is 12 units, what is the area?",
      "options": ["60 square units", "70 square units", "120 square units", "80 square units"],
      "correct_answer": "60 square units"
    },
    {
      "question": "What is the value of 2 to the power of 8 (2⁸)?",
      "options": ["256", "128", "512", "64"],
      "correct_answer": "256"
    },
    {
      "question": "If a = 4 and b = 7, what is the value of a² + b²?",
      "options": ["65", "57", "41", "33"],
      "correct_answer": "65"
    },
    {
      "question": "What is the value of 11 multiplied by 9?",
      "options": ["99", "110", "90", "121"],
      "correct_answer": "99"
    },
    {
      "question": "If x = 5 and y = 3, what is the value of 2x + 3y?",
      "options": ["19", "16", "13", "15"],
      "correct_answer": "19"
    },
    {
      "question": "What is the volume of a sphere with radius 5 units? (Use π = 3.14)",
      "options": ["523.33 cubic units", "314.16 cubic units", "418.6 cubic units", "628.32 cubic units"],
      "correct_answer": "523.33 cubic units"
    },
    {
      "question": "If a = 8 and b = 4, what is the value of a² - b²?",
      "options": ["48", "64", "32", "72"],
      "correct_answer": "48"
    },
    {
      "question": "What is the value of the cube root of 27?",
      "options": ["3", "4", "5", "6"],
      "correct_answer": "3"
    },
    {
      "question": "If the perimeter of a square is 24 units, what is the length of each side?",
      "options": ["6 units", "4 units", "8 units", "12 units"],
      "correct_answer": "6 units"
    },
    {
      "question": "What is the value of 10 divided by 2 plus 5?",
      "options": ["10", "15", "8", "7"],
      "correct_answer": "10"
    },
    {
      "question": "If x = 7 and y = 2, what is the value of x - 2y?",
      "options": ["3", "5", "9", "11"],
      "correct_answer": "3"
    },
    {
      "question": "What is the area of a circle with radius 8 units? (Use π = 3.14)",
      "options": ["200.96 square units", "1256 square units", "128 square units", "201.6 square units"],
      "correct_answer": "200.96 square units"
    },
    {
      "question": "If a = 6 and b = 3, what is the value of a ÷ (a - b)?",
      "options": ["2", "3", "1", "4"],
      "correct_answer": "2"
    },
    {
      "question": "What is the value of 15 squared (15²)?",
      "options": ["225", "150", "300", "100"],
      "correct_answer": "225"
    },
    {
      "question": "If the sum of three angles in a triangle is 180 degrees, and two angles are 45 and 60 degrees, what is the measure of the third angle?",
      "options": ["75 degrees", "80 degrees", "90 degrees", "105 degrees"],
      "correct_answer": "75 degrees"
    },
    {
      "question": "What is the value of 4 cubed (4³)?",
      "options": ["64", "32", "16", "256"],
      "correct_answer": "64"
    },
    
        {
          "question": "If a rectangle has a length of 15 units and a width of 8 units, what is its perimeter?",
          "options": ["46 units", "46 square units", "60 units", "30 units"],
          "correct_answer": "46 units"
        },
        {
          "question": "What is the value of 3 to the power of 4 (3⁴)?",
          "options": ["81", "27", "9", "64"],
          "correct_answer": "81"
        },
        {
          "question": "If a right-angled triangle has legs of length 5 units and 12 units, what is the length of the hypotenuse?",
          "options": ["13 units", "17 units", "10 units", "15 units"],
          "correct_answer": "13 units"
        },
        {
          "question": "What is the value of the square root of 144?",
          "options": ["12", "14", "16", "18"],
          "correct_answer": "12"
        },
        {
          "question": "If x = 6 and y = 9, what is the value of 2x - y?",
          "options": ["3", "12", "15", "9"],
          "correct_answer": "3"
        },
        {
          "question": "What is the perimeter of an equilateral triangle with sides of length 9 units?",
          "options": ["27 units", "18 units", "24 units", "36 units"],
          "correct_answer": "27 units"
        },
        {
          "question": "If the sum of two angles is 90 degrees, what is the term used to describe those angles?",
          "options": ["Complementary", "Supplementary", "Vertical", "Parallel"],
          "correct_answer": "Complementary"
        },
        {
          "question": "What is the value of 7 multiplied by 6, divided by 2?",
          "options": ["21", "18", "24", "14"],
          "correct_answer": "21"
        },
        {
          "question": "If a cone has a radius of 4 units and a height of 10 units, what is its volume? (Use π = 3.14)",
          "options": ["167.47 cubic units", "125.6 cubic units", "251.2 cubic units", "334.93 cubic units"],
          "correct_answer": "167.47 cubic units"
        },
        {
          "question": "What is the value of 5 factorial (5!)?",
          "options": ["120", "60", "240", "180"],
          "correct_answer": "120"
        },
        {
          "question": "If the base of a triangle is 6 units and the height is 8 units, what is the area?",
          "options": ["24 square units", "32 square units", "40 square units", "48 square units"],
          "correct_answer": "24 square units"
        },
        {
          "question": "What is the value of 2 to the power of 10 (2¹⁰)?",
          "options": ["1024", "512", "2048", "256"],
          "correct_answer": "1024"
        },
        {
          "question": "If a = 3 and b = 7, what is the value of a² + b²?",
          "options": ["58", "52", "68", "74"],
          "correct_answer": "58"
        },
        {
          "question": "What is the value of 11 multiplied by 5, minus 3?",
          "options": ["52", "48", "49", "50"],
          "correct_answer": "52"
        },
        {
          "question": "If the sum of the angles in a hexagon is 720 degrees, what is the measure of each interior angle?",
          "options": ["120 degrees", "140 degrees", "160 degrees", "180 degrees"],
          "correct_answer": "120 degrees"
        },
        {
          "question": "What is the value of 9 squared (9²)?",
          "options": ["81", "18", "72", "27"],
          "correct_answer": "81"
        },
        {
          "question": "If x = 5 and y = 2, what is the value of x² - y²?",
          "options": ["21", "23", "25", "27"],
          "correct_answer": "21"
        },
        {
          "question": "What is the area of a trapezoid with bases of length 7 units and 9 units, and a height of 4 units?",
          "options": ["32 square units", "40 square units", "48 square units", "56 square units"],
          "correct_answer": "32 square units"
        },
        {
          "question": "If a = 8 and b = 2, what is the value of a - 2b?",
          "options": ["4", "12", "16", "8"],
          "correct_answer": "4"
        }

  ]
  
const gadgetList=[
    {
      "question": "Which company developed the iPhone?",
      "options": ["Samsung", "Apple", "Google", "Sony"],
      "correct_answer": "Apple"
    },
    {
      "question": "What does the term 'GPS' stand for in the context of gadgets?",
      "options": ["Global Product System", "General Positioning System", "Geographic Positioning System", "General Product Service"],
      "correct_answer": "Geographic Positioning System"
    },
    {
      "question": "Which smartwatch is known for its health and fitness features, including an ECG app?",
      "options": ["Samsung Galaxy Watch", "Fitbit Versa", "Apple Watch", "Garmin Forerunner"],
      "correct_answer": "Apple Watch"
    },
    {
      "question": "What is the purpose of a fitness tracker gadget?",
      "options": ["Measure heart rate", "Play music", "Send emails", "Edit documents"],
      "correct_answer": "Measure heart rate"
    },
    {
      "question": "Which company is famous for its noise-canceling headphones, including the 'QuietComfort' series?",
      "options": ["Sony", "Bose", "Sennheiser", "JBL"],
      "correct_answer": "Bose"
    },
    {
      "question": "What is the primary function of a virtual reality (VR) headset?",
      "options": ["Play video games", "Simulate real-world environments", "Make phone calls", "Take photos"],
      "correct_answer": "Simulate real-world environments"
    },
    {
      "question": "Which popular gadget is used to measure the number of steps taken and distance traveled throughout the day?",
      "options": ["Fitness tracker", "Smartwatch", "E-reader", "Action camera"],
      "correct_answer": "Fitness tracker"
    },
    {
      "question": "What is the main purpose of a drone?",
      "options": ["Cooking", "Photography and videography", "Listening to music", "Fitness tracking"],
      "correct_answer": "Photography and videography"
    },
    {
      "question": "Which gaming console is developed by Microsoft?",
      "options": ["PlayStation", "Nintendo Switch", "Xbox", "Wii"],
      "correct_answer": "Xbox"
    },
    {
      "question": "What is the key feature of a smart thermostat?",
      "options": ["Play music", "Control home temperature remotely", "Measure heart rate", "Browse the internet"],
      "correct_answer": "Control home temperature remotely"
    },
    {
      "question": "Which e-reader is known for its E Ink display and popularized electronic books?",
      "options": ["Kindle", "Nook", "Kobo", "Sony Reader"],
      "correct_answer": "Kindle"
    },
    {
      "question": "What is the primary function of a 3D printer?",
      "options": ["Print photos", "Print documents", "Print three-dimensional objects", "Play video games"],
      "correct_answer": "Print three-dimensional objects"
    },
    {
      "question": "Which company is famous for its gaming peripherals, including mice, keyboards, and headsets?",
      "options": ["Logitech", "Razer", "Corsair", "SteelSeries"],
      "correct_answer": "Razer"
    },
    {
      "question": "What is the purpose of a dash cam in a car?",
      "options": ["Record videos while driving", "Play music", "Measure speed", "Provide GPS navigation"],
      "correct_answer": "Record videos while driving"
    },
    {
      "question": "Which smartphone feature allows users to make secure payments using their device?",
      "options": ["NFC (Near Field Communication)", "Bluetooth", "Infrared", "Wi-Fi"],
      "correct_answer": "NFC (Near Field Communication)"
    },
    {
      "question": "Which company is known for its action cameras, including the 'HERO' series?",
      "options": ["Sony", "Canon", "GoPro", "DJI"],
      "correct_answer": "GoPro"
    },
    {
      "question": "What is the primary function of a smart home assistant device, such as Amazon Echo or Google Home?",
      "options": ["Cooking", "Answering phone calls", "Controlling smart home devices", "Playing video games"],
      "correct_answer": "Controlling smart home devices"
    },
    {
      "question": "Which popular gadget is used for capturing and streaming live video content?",
      "options": ["Digital camera", "Webcam", "Drone", "Smartwatch"],
      "correct_answer": "Webcam"
    },
    {
      "question": "What is the primary function of a portable Bluetooth speaker?",
      "options": ["Measure heart rate", "Play music", "Take photos", "Control home temperature"],
      "correct_answer": "Play music"
    },
    {
      "question": "Which company is known for its high-performance graphics processing units (GPUs) used in gaming and professional applications?",
      "options": ["AMD", "NVIDIA", "Intel", "Qualcomm"],
      "correct_answer": "NVIDIA"
    },
    {
      "question": "What is the key feature of a digital camera with 'image stabilization'?",
      "options": ["Capture 3D photos", "Enhance colors in photos", "Reduce blurriness in photos", "Print photos instantly"],
      "correct_answer": "Reduce blurriness in photos"
    },
    {
      "question": "Which popular gadget is designed for immersive audio experiences, often used in virtual reality applications?",
      "options": ["Soundbar", "Headphones", "VR headset", "Smart speaker"],
      "correct_answer": "VR headset"
    },
    {
      "question": "What is the primary function of a power bank?",
      "options": ["Play music", "Control home temperature", "Charge electronic devices on the go", "Measure heart rate"],
      "correct_answer": "Charge electronic devices on the go"
    },
    {
      "question": "Which company is known for its gaming laptops, including the 'ROG' series?",
      "options": ["Dell", "HP", "Acer", "ASUS"],
      "correct_answer": "ASUS"
    },
    {
      "question": "What is the purpose of a digital voice recorder?",
      "options": ["Play music", "Record audio", "Measure heart rate", "Browse the internet"],
      "correct_answer": "Record audio"
    },
    {
      "question": "Which company is famous for its noise-canceling earphones, including the 'AirPods Pro'?",
      "options": ["Sony", "Bose", "Apple", "Sennheiser"],
      "correct_answer": "Apple"
    },
    {
      "question": "What is the primary function of a robotic vacuum cleaner?",
      "options": ["Cooking", "Play music", "Clean floors autonomously", "Measure heart rate"],
      "correct_answer": "Clean floors autonomously"
    },
    {
      "question": "Which gadget is designed to monitor and track sleep patterns?",
      "options": ["Fitness tracker", "Smartwatch", "E-reader", "Sleep tracker"],
      "correct_answer": "Sleep tracker"
    },
    {
      "question": "What is the purpose of a thermal imaging camera?",
      "options": ["Take colorful photos", "Detect heat signatures", "Play music", "Record videos"],
      "correct_answer": "Detect heat signatures"
    },
    {
      "question": "Which company is known for its gaming monitors, including the 'Predator' series?",
      "options": ["LG", "Samsung", "AOC", "Acer"],
      "correct_answer": "Acer"
    },
    {
      "question": "What is the primary function of a smart doorbell?",
      "options": ["Control home temperature", "Measure heart rate", "Answer phone calls", "Monitor and secure entryways"],
      "correct_answer": "Monitor and secure entryways"
    },
    {
      "question": "Which gadget is commonly used for capturing and sharing gameplay footage?",
      "options": ["Digital camera", "Smartphone", "Action camera", "Game capture card"],
      "correct_answer": "Game capture card"
    },
    {
      "question": "What is the primary function of a barcode scanner?",
      "options": ["Play music", "Control home temperature", "Record videos", "Scan and decode barcodes"],
      "correct_answer": "Scan and decode barcodes"
    },
    {
      "question": "Which company is known for its high-end gaming keyboards, mice, and other peripherals?",
      "options": ["Logitech", "Razer", "Corsair", "SteelSeries"],
      "correct_answer": "Corsair"
    },
    {
      "question": "What is the key feature of a smart mirror?",
      "options": ["Display weather information", "Measure heart rate", "Play music", "Display customizable information"],
      "correct_answer": "Display customizable information"
    },
    {
      "question": "Which company is famous for its portable gaming console, the 'Switch'?",
      "options": ["Microsoft", "Sony", "Nintendo", "Xbox"],
      "correct_answer": "Nintendo"
    },
    {
      "question": "What is the primary function of a Bluetooth tracker, such as 'Tile'?",
      "options": ["Play music", "Measure heart rate", "Track and find lost items", "Control home temperature"],
      "correct_answer": "Track and find lost items"
    },
    {
      "question": "Which gadget is designed to monitor and analyze air quality in indoor spaces?",
      "options": ["Thermostat", "Air purifier", "Smartwatch", "Air quality monitor"],
      "correct_answer": "Air quality monitor"
    },
    {
      "question": "What is the purpose of a handheld game console, such as the 'PlayStation Portable (PSP)'?",
      "options": ["Play music", "Record videos", "Browse the internet", "Play video games on the go"],
      "correct_answer": "Play video games on the go"
    },
    {
      "question": "Which company is known for its rugged smartphones, designed to withstand tough conditions?",
      "options": ["Apple", "Samsung", "CAT (Caterpillar)", "Google"],
      "correct_answer": "CAT (Caterpillar)"
    },
    {
      "question": "What is the primary function of a streaming media player, like 'Roku' or 'Amazon Fire Stick'?",
      "options": ["Measure heart rate", "Play music", "Stream video content to a TV", "Control home temperature"],
      "correct_answer": "Stream video content to a TV"
    },
    {
      "question": "Which company is known for its gaming graphics cards, including the 'GeForce' series?",
      "options": ["AMD", "NVIDIA", "Intel", "Qualcomm"],
      "correct_answer": "NVIDIA"
    },
    {
      "question": "What is the key feature of a smart refrigerator?",
      "options": ["Play music", "Control home temperature", "Dispense ice and water", "Display grocery lists and recipes"],
      "correct_answer": "Display grocery lists and recipes"
    },
    {
      "question": "Which gadget is designed for immersive sound experiences and is worn over the ears?",
      "options": ["Smart speaker", "Earbuds", "Over-ear headphones", "Fitness tracker"],
      "correct_answer": "Over-ear headphones"
    },
    {
      "question": "What is the purpose of a digital photo frame?",
      "options": ["Play music", "Display rotating photos", "Record videos", "Measure heart rate"],
      "correct_answer": "Display rotating photos"
    }
  ]
  

class Quiz extends Component{
    state={Category:"",test:false,choosenClass:"",questions:[],currentQuestionIndex:0, showCorrectAnswer:false,score:0,choosenAnswer:""}

    componentDidMount=()=>{
        this.getBlogItemData()
    }

    shuffleAndTakeUnique=(array, count)=>{
      const shuffledArray = array.slice().sort(() => Math.random() - 0.5);
      return [...new Set(shuffledArray)].slice(0, count);
  }

    getBlogItemData = async () => {
        const { match } = this.props
        const { params } = match
        const { category } = params
        let List=[]
        switch (category) {
            case "GeneralKnowledge":
              this.setState({Category:category})
              List=gkList
              break;
            case "Geography":
                this.setState({Category:category})
                List=geographyList
                break;
            case "Animals":
                this.setState({Category:category})
                List=animalsList
                break;
            case "Science&Nature":
                this.setState({Category:category})
                List=sandNatureList
                break;
            case "Computers":
                this.setState({Category:category})
                List=computerList
                break;
            case "Mathematics":
                this.setState({Category:category})
                List=mathList
                break;
            case "Gadgets":
                this.setState({Category:category})
                List=gadgetList
                break;
            // Additional cases as needed
            default:
                this.setState({Category:""})
          }
          const randomObjects = this.shuffleAndTakeUnique(List, 10);
          this.setState({questions:randomObjects})
          console.log(randomObjects)
        
      }

      handleOptionClick = (selectedOption) => {
        this.setState({ choosenAnswer:selectedOption,choosenClass:"bg-sky-400"});
      };
    
      handleSubmit = () => {
        const { currentQuestionIndex, questions,choosenAnswer } = this.state;
        if (questions[currentQuestionIndex].correct_answer === choosenAnswer){
            console.log("Correct")
            this.setState(prevState=>({score:prevState.score+1}));
        }
        else{
          console.log("InCorrect")
        }
        this.setState({ showCorrectAnswer: true });
      };
    
      handleNextQuestion = () => {
        const { currentQuestionIndex, questions, showCorrectAnswer } = this.state;
      
        if (currentQuestionIndex < questions.length - 1) {
          this.setState((prevState) => ({
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
            showCorrectAnswer: false,
          }));
        } else {
          // Handle end of quiz, e.g., display a summary or redirect to another page.
          this.setState({test:false})
          console.log("End of quiz");
        }
      };

      onClickPlayAgain=(props)=>{
        const {history} = props
        history.push('/play')
      }
      

    render(){
        const {questions,test,currentQuestionIndex,showCorrectAnswer,score,choosenClass,choosenAnswer}=this.state
        console.log(questions)
        console.log(score)
        const currentQuestion = questions[currentQuestionIndex];

       
        return(
          <>
          {test?
          <>
          {questions.length ===0?<p>Loading</p>:
          <div className="font-[Poppins] w-screen h-screen">
            <div className="bg-black w-full p-3 text-white flex justify-between">
              <h1 className="font-[Titan One] font-semibold text-xl ml-5">TechTrivia</h1>
              <h1>{`Score :  ${score} / 10`}</h1>
            </div>
            <div className="p-4 pl-8 ">
              <h2 className="font-semibold ttext-slate-600">Question {currentQuestionIndex + 1}</h2>
              <p className="mt-4 font-semibold text-xl">{currentQuestion.question}</p>
              <div className="flex flex-row w-80 mt-4 flex-wrap">
                {currentQuestion.options.map((option, index) => (
                  <>
                  {choosenAnswer===option?<div key={index} className=" min-w-full bg-white m-1 rounded-lg">
                  <div
                    onClick={() => this.handleOptionClick(option)}
                    disabled={showCorrectAnswer}
                    className={`bg-black hover:bg-sky-700 hover:transition-all ${choosenClass} w-full text-white cursor-pointer p-3 rounded-lg`}
                  >
                    {option}
                  </div>
                </div>:<div key={index} className=" min-w-full bg-white m-1 rounded-lg">
                <div
                  onClick={() => this.handleOptionClick(option)}
                  disabled={showCorrectAnswer}
                  className={`bg-black hover:bg-sky-700 hover:transition-all w-full text-white cursor-pointer p-3 rounded-lg`}
                >
                  {option}
                </div>
              </div>}
              </>
                ))}
              </div>
              {showCorrectAnswer ?
                <p className="mt-2 mb-2">Correct Answer: {currentQuestion.correct_answer}</p>
              :<p>{test}</p>}
      
              {currentQuestionIndex <= questions.length - 1 ?
                <button className="bg-sky-400 px-4 text-white py-1 mt-2 rounded" onClick={this.handleSubmit} disabled={showCorrectAnswer}>
                Submit
              </button>
                :<p>{}</p>
              }
      
              {showCorrectAnswer && (
                <button onClick={this.handleNextQuestion} className="bg-sky-400 mt-2 ml-2 px-4 text-white py-1 rounded">
                  Next Question
                </button>
              )}
          </div>
        </div>}
        </>:<div className="w-screen h-screen flex flex-row justify-center bg-black items-center">
          <div className="bg-white rounded-lg p-10 font-[Poppins] text-center">
              <h1>{`Score :  ${score} / 10`}</h1>
              <button onClick={this.onClickPlayAgain} className="bg-sky-400 mt-2 px-4 text-white py-1 rounded mt-8">Play Again !</button>
          </div>
        </div>}</>
        )
    }
}

export default withRouter(Quiz)