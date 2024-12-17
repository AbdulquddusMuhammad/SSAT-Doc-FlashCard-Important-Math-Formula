const flashCard = document.querySelector(".flashcard-container")
const front_flash_card = document.querySelector(".front")
const back_flash_card = document.querySelector(".back")

const previous_button = document.querySelector(".previous_flashcard")
const next_button = document.querySelector(".next_flashcard")

const question = document.querySelector(".question")
const question_content = document.querySelector(".question-content")
const question_no = document.querySelector("#q-no")
const answer_no = document.querySelector("#a-no")
const answer_content = document.querySelector(".answer-content")


const explanation = document.createElement("span");
explanation.className = "explanation";
explanation.innerHTML = "<h1>hello</h1>"
back_flash_card.appendChild(explanation)

console.log(explanation);


console.log(back_flash_card.style.transform);

const flipCard = () => {
  flashCard.classList.toggle("to-back")
  const flashCardStat = window.getComputedStyle(front_flash_card).display;
  
  if (flashCardStat === "flex") {
      front_flash_card.style.display = "none";
      back_flash_card.style.display = "flex";    
  } else {
    front_flash_card.style.display = "flex";
    back_flash_card.style.display = "none";    
  }
 }

 const clickedButton = (button) => {
  button.classList.add("clicked"); 
  setTimeout(() => {
    button.classList.remove("clicked")
  }, 300)
 }

// Define MathJax configuration globally
window.MathJax = {
  tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$'], ['\\[', '\\]']]
  }
};

// Dynamically load the MathJax library
const script = document.createElement('script');
script.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.min.js";
script.async = true; // Ensure non-blocking
document.head.appendChild(script);


flashCard.addEventListener("click", flipCard)


const questions_bank = [
{
id: 1,
question: "What is the formula for the slope of a line?",
answer: "$m = \\frac{y_2 - y_1}{x_2 - x_1}$",
explanation: "m = slope<br>y1 and y2 = y-coordinates of two points<br>x1 and x2 = x-coordinates of two points"
},
{
id: 2,
question: "What is the Quadratic Formula?",
answer: "$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$",
explanation: "x = solution of the quadratic equation<br>a = coefficient of x²<br>b = coefficient of x<br>c = constant term"
},
{
id: 3,
question: "What is the formula for the area of a triangle?",
answer: "$A = \\frac{1}{2} b h$",
explanation: "A = area<br>b = base<br>h = height"
},
{
id: 4,
question: "What is the formula for the circumference of a circle?",
answer: "$C = 2 \\pi r$",
explanation: "C = circumference<br>r = radius"
},
{
id: 5,
question: "What is the formula for the area of a rectangle?",
answer: "$A = l w$",
explanation: "A = area<br>l = length<br>w = width"
},
{
id: 6,
question: "What is the formula for the volume of a rectangular prism?",
answer: "$V = l w h$",
explanation: "V = volume<br>l = length<br>w = width<br>h = height"
},
{
id: 7,
question: "What is the formula for the Pythagorean Theorem?",
answer: "$a^2 + b^2 = c^2$",
explanation: "a and b = lengths of the legs of a right triangle<br>c = length of the hypotenuse"
},
{
id: 8,
question: "What is the formula for the area of a circle?",
answer: "$A = \\pi r^2$",
explanation: "A = area<br>r = radius"
},
{
id: 9,
question: "What is the formula for the average of a set of numbers?",
answer: "$\\text{Average} = \\frac{\\text{Sum of numbers}}{\\text{Number of numbers}}$",
explanation: "Average = mean value<br>Sum of numbers = total of all numbers<br>Number of numbers = count of numbers in the set"
},
{
id: 10,
question: "What is the formula for distance given rate and time?",
answer: "$d = r t$",
explanation: "d = distance<br>r = rate<br>t = time"
},
{
id: 11,
question: "What is the formula for the perimeter of a rectangle?",
answer: "$P = 2(l + w)$",
explanation: "P = perimeter<br>l = length<br>w = width"
},
{
id: 12,
question: "What is the formula for the volume of a cylinder?",
answer: "$V = \\pi r^2 h$",
explanation: "V = volume<br>r = radius of the base<br>h = height"
},
{
id: 13,
question: "What is the formula for the surface area of a sphere?",
answer: "$A = 4 \\pi r^2$",
explanation: "A = surface area<br>r = radius"
},
{
id: 14,
question: "What is the formula for the area of a parallelogram?",
answer: "$A = b h$",
explanation: "A = area<br>b = base<br>h = height"
},
{
id: 15,
question: "What is the formula for the total cost given unit price and quantity?",
answer: "$\\text{Total Cost} = \\text{Unit Price} \\times \\text{Quantity}$",
explanation: "Total Cost = total price<br>Unit Price = cost per item<br>Quantity = number of items"
},
{
id: 16,
question: "What is the formula for the area of a trapezoid?",
answer: "$A = \\frac{1}{2} (b_1 + b_2) h$",
explanation: "A = area<br>b₁ and b₂ = lengths of the two bases<br>h = height"
},
{
id: 17,
question: "What is the formula for simple interest?",
answer: "$I = P r t$",
explanation: "I = interest<br>P = principal amount<br>r = rate of interest (decimal form)<br>t = time in years"
},
{
id: 18,
question: "What is the formula for the surface area of a rectangular prism?",
answer: "$A = 2(lw + lh + wh)$",
explanation: "A = surface area<br>l = length<br>w = width<br>h = height"
},
{
id: 19,
question: "What is the formula for the volume of a cone?",
answer: "$V = \\frac{1}{3} \\pi r^2 h$",
explanation: "V = volume<br>r = radius of the base<br>h = height"
},
{
id: 20,
question: "What is the formula for the midpoint of a line segment?",
answer: "$M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$",
explanation: "M = midpoint<br>(x₁, y₁) and (x₂, y₂) = coordinates of two endpoints"
},
{
id: 21,
question: "What is the formula for the surface area of a cylinder?",
answer: "$A = 2\\pi r^2 + 2\\pi r h$",
explanation: "A = surface area<br>r = radius of the base<br>h = height"
},
{
id: 22,
question: "What is the formula for the slope-intercept form of a line?",
answer: "$y = mx + b$",
explanation: "y = y-coordinate<br>m = slope<br>x = x-coordinate<br>b = y-intercept"
},
{
id: 23,
question: "What is the formula for the area of a sector of a circle?",
answer: "$A = \\pi r^2 \\frac{\\theta}{360}$",
explanation: "A = area<br>r = radius<br>θ = central angle in degrees"
},
{
id: 24,
question: "What is the formula for the diagonal of a rectangle?",
answer: "$d = \\sqrt{l^2 + w^2}$",
explanation: "d = diagonal length<br>l = length<br>w = width"
},
{
id: 25,
question: "What is the formula for the circumference of a semicircle?",
answer: "$C = \\pi r + 2r$",
explanation: "C = circumference<br>r = radius"
},
{
id: 26,
question: "What is the formula for the area of an equilateral triangle?",
answer: "$A = \\frac{\\sqrt{3}}{4} s^2$",
explanation: "A = area<br>s = length of a side"
},
{
id: 27,
question: "What is the formula for the volume of a sphere?",
answer: "$V = \\frac{4}{3} \\pi r^3$",
explanation: "V = volume<br>r = radius"
},
{
id: 28,
question: "What is the formula for the total measure of interior angles of a polygon?",
answer: "$\\text{Sum} = (n - 2) \\times 180$",
explanation: "Sum = total measure of angles<br>n = number of sides of the polygon"
},
{
id: 29,
question: "What is the formula for the surface area of a cone?",
answer: "$A = \\pi r^2 + \\pi r l$",
explanation: "A = surface area<br>r = radius<br>l = slant height"
},
{
id: 30,
question: "What is the formula for the distance between two points?",
answer: "$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$",
explanation: "d = distance<br>(x₁, y₁) and (x₂, y₂) = coordinates of two points"
},
{
id: 31,
question: "What is the formula for the perimeter of a square?",
answer: "$P = 4s$",
explanation: "P = perimeter<br>s = length of a side"
},
{
id: 32,
question: "What is the formula for the area of a square?",
answer: "$A = s^2$",
explanation: "A = area<br>s = length of a side"
},
{
id: 33,
question: "What is the formula for the volume of a cube?",
answer: "$V = s^3$",
explanation: "V = volume<br>s = length of a side"
},
{
id: 34,
question: "What is the formula for the rate of speed?",
answer: "$r = \\frac{d}{t}$",
explanation: "r = rate (speed)<br>d = distance<br>t = time"
},
{
id: 35,
question: "What is the formula for time given distance and rate?",
answer: "$t = \\frac{d}{r}$",
explanation: "t = time<br>d = distance<br>r = rate (speed)"
},
{
id: 36,
question: "What is the formula for the surface area of a cube?",
answer: "$A = 6s^2$",
explanation: "A = surface area<br>s = length of a side"
},
{
id: 37,
question: "What is the formula for the area of a rhombus?",
answer: "$A = \\frac{1}{2} d_1 d_2$",
explanation: "A = area<br>d₁ and d₂ = lengths of the diagonals"
},
{
id: 38,
question: "What is the formula for the volume of a pyramid?",
answer: "$V = \\frac{1}{3} B h$",
explanation: "V = volume<br>B = area of the base<br>h = height"
},
{
id: 39,
question: "What is the formula for the lateral surface area of a cylinder?",
answer: "$A = 2 \\pi r h$",
explanation: "A = lateral surface area<br>r = radius<br>h = height"
},
{
id: 40,
question: "What is the formula for the percentage of a number?",
answer: "$\\text{Percentage} = \\frac{\\text{Part}}{\\text{Whole}} \\times 100$",
explanation: "Percentage = percent value<br>Part = portion of the total<br>Whole = total amount"
},
{
  id: 41,
  question: "What is the formula for the area of a kite?",
  answer: "$A = \\frac{1}{2} d_1 d_2$",
  explanation: "A = area<br>d₁ and d₂ = lengths of the diagonals"
  },
  {
  id: 42,
  question: "What is the formula for the surface area of a pyramid?",
  answer: "$A = B + \\frac{1}{2} P l$",
  explanation: "A = surface area<br>B = area of the base<br>P = perimeter of the base<br>l = slant height"
  },
  {
  id: 43,
  question: "What is the formula for the circumference of a circle using diameter?",
  answer: "$C = \\pi d$",
  explanation: "C = circumference<br>d = diameter"
  },
  {
  id: 44,
  question: "What is the formula for the total exterior angles of a polygon?",
  answer: "$\\text{Sum} = 360$",
  explanation: "Sum = total exterior angle measure<br>360 = constant for all polygons"
  },
  {
  id: 45,
  question: "What is the formula for the length of an arc in a circle?",
  answer: "$L = \\frac{\\theta}{360} \\times 2\\pi r$",
  explanation: "L = arc length<br>θ = central angle in degrees<br>r = radius"
  },
  {
  id: 46,
  question: "What is the formula for the surface area of a cone's lateral face?",
  answer: "$A = \\pi r l$",
  explanation: "A = lateral surface area<br>r = radius<br>l = slant height"
  },
  {
  id: 47,
  question: "What is the formula for compound interest?",
  answer: "$A = P \\left(1 + \\frac{r}{n}\\right)^{n t}$",
  explanation: "A = final amount<br>P = principal amount<br>r = rate of interest (decimal form)<br>n = number of times interest is applied per year<br>t = time in years"
  },
  {
  id: 48,
  question: "What is the formula for the volume of a hemisphere?",
  answer: "$V = \\frac{2}{3} \\pi r^3$",
  explanation: "V = volume<br>r = radius"
  },
  {
  id: 49,
  question: "What is the formula for probability?",
  answer: "$P = \\frac{\\text{Number of favorable outcomes}}{\\text{Total number of outcomes}}$",
  explanation: "P = probability<br>Number of favorable outcomes = desired outcomes<br>Total number of outcomes = all possible outcomes"
  },
  {
  id: 50,
  question: "What is the formula for the sum of an arithmetic sequence?",
  answer: "$S_n = \\frac{n}{2} (a_1 + a_n)$",
  explanation: "Sₙ = sum of the first n terms<br>n = number of terms<br>a₁ = first term<br>aₙ = last term"
  }    
];



let flashCard_no = 0;

next_button.addEventListener("click", function() {

  clickedButton(this)

  // this code hamdle the reflection effect
  flashCard.classList.add("flashcard-reflect")
  setTimeout(() => {
    flashCard.classList.remove("flashcard-reflect")
  }, 1000)

  if (flashCard_no < questions_bank.length - 1) {
    flashCard_no = flashCard_no + 1;
    question_no.innerHTML = questions_bank[flashCard_no].id;
    question_content.innerHTML = questions_bank[flashCard_no].question;
    answer_no.innerHTML = questions_bank[flashCard_no].id;
    answer_content.innerHTML = questions_bank[flashCard_no].answer;
    explanation.innerHTML = questions_bank[flashCard_no].explanation;
    

    MathJax.typeset();


    if (flashCard.classList.contains("to-back")) {
      // front_flash_card.style.display = "none";
      flipCard()
    }
  }
})

previous_button.addEventListener("click", function() {
  clickedButton(this)

  // this code hamdle the reflection effect
  flashCard.classList.add("flashcard-reflect")
  setTimeout(() => {
    flashCard.classList.remove("flashcard-reflect")
  }, 1000)

  if (flashCard_no >= 1) {
    console.log(flashCard_no);
    flashCard_no = flashCard_no - 1;
    // alert(questions_bank[flashCard_no].answer)
    question_no.innerHTML = questions_bank[flashCard_no].id;
    question_content.innerHTML = questions_bank[flashCard_no].question;
    answer_no.innerHTML = questions_bank[flashCard_no].id;
    answer_content.innerHTML = questions_bank[flashCard_no].answer;
    explanation.innerHTML = questions_bank[flashCard_no].explanation;


    front_flash_card.style.display = "flex";


    MathJax.typeset();

  }
    
  if (flashCard.classList.contains("to-back")) {
    front_flash_card.style.display = "none";
    flipCard()
  }
})

console.log(question_no.innerHTML);
console.log(question_content.innerHTML);

question_no.innerHTML = questions_bank[0].id;
question_content.innerHTML = questions_bank[0].question;
answer_no.innerHTML = questions_bank[0].id;
answer_content.innerHTML = questions_bank[0].answer;
explanation.innerHTML = questions_bank[0].explanation;


if (typeof MathJax !== 'undefined') {
  console.log("MathJax is loaded successfully!");
} else {
  console.error("MathJax failed to load.");
}


