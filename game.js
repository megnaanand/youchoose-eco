'use strict';
// ------------------------- for the script -------------------------

var x = 1;
$('.scene').hide();
$('#myBtn').hide();
$('.button').hide();
$('#opening').show();
function toggler() {
    $('.btn').hide();
    var sceneLength = $('.scene').length; 
    if (x < sceneLength) {
       $('#myBtn').show();
       $('.scene').hide();
       $('.scene').eq(x).show();
       x++;
    }

    if (x == sceneLength) {
        $('.btn').hide();
        $('#myBtn').hide();
        $('.button').show();
    }
}

// ------------------------- different approaches to button control (deprecated) -------------------------

// // reference to button
// var btn = document.querySelector('.js-button');

// // which message to display
// var index = 1;

// // total number of messages
// var numMessages = $('.scene').length;

// // hide 'm all
// $('.scene').hide();

// // and toggle the first
// toggler();

// // when user clicks button, toggle the next one
// btn.addEventListener('click', toggler);

// function toggler() {
//     $('.scene').hide();   
//     $('#page' + index).show();

// 	// go to 1 again when the end is reached
//     // index = (index + 1 <= numMessages) ? index + 1 : 1;

//     // increment index, end toggle when end is reached
//     index = (index + 1 <= numMessages) ? index + 1 : 0;
//     if (index === 0) {
//         btn.removeEventListener('click', toggler);
//     }

// }

// function proceed() {
//     // var list = [page1, page2, page3, page4, page5, page6, page7, page8];
//     const list = document.querySelectorAll('.page1');
//     for (const element of list) {
//         element.classList.toggle('toggled');
//     }
// }

// ------------------------- different approaches to button control (deprecated) -------------------------

// ------------------------- for the script -------------------------

// ------------------------- for the questions -------------------------

var env_score = 0;
var suc_score = 0;
var budget = 12;

const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn-opt')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText

    state = Object.assign(state, option.setState)
  
    showTextNode(nextTextNodeId)

    console.log(option)
    console.log(env_score)
    console.log(suc_score)
    console.log(budget)

    modal.style.display = "none";


    // scene 1
    if ((option.choice == 'coal')) {

        img14.style["visibility"] = "hidden";
        img5.style["visibility"] = "visible";
        img12.style["visibility"] = "visible";
        img13.style["visibility"] = "visible";

        env_score -= 3;
        suc_score += 0;
        budget -= 6;

    } else if (option.choice == 'solar') {

        img14.style["visibility"] = "hidden";
        img7.style["visibility"] = "visible";
        img12.style["visibility"] = "visible";
        img13.style["visibility"] = "visible";

        env_score += 2.5;
        suc_score -= 1;
        budget -= 3;

    } else if (option.choice == 'wind') {

        img14.style["visibility"] = "hidden";
        img8.style["visibility"] = "visible";
        img12.style["visibility"] = "visible";
        img13.style["visibility"] = "visible";

        env_score += 2.5;
        suc_score -= 1.5;
        budget -= 2;

    } else if (option.choice == 'nuclear') {

        img14.style["visibility"] = "hidden";
        img6.style["visibility"] = "visible";
        img12.style["visibility"] = "visible";
        img13.style["visibility"] = "visible";

        env_score += 1;
        suc_score += 1;
        budget -= 9;

    }

    // scene 2
    if ((option.choice == 'reservoir')) {

        img2.style["visibility"] = "visible";
        img12.style["visibility"] = "visible";
        img13.style["visibility"] = "hidden";

        env_score += 0;
        suc_score += 2;
        budget -= 1;

    } else if (option.choice == 'wells') {

        img19.style["visibility"] = "visible";
        img12.style["visibility"] = "visible";
        img13.style["visibility"] = "visible";

        env_score += 2;
        suc_score -= 2;
        budget -= 0.1;

    }

    // scene 3
    if ((option.choice == 'farm')) {

        img1.style["visibility"] = "visible";
        img12.style["visibility"] = "hidden";

        env_score -= 1;
        suc_score += 1;
        budget -= 0.0015;

    } else if (option.choice == 'outsource') {

        img21.style["visibility"] = "visible";
        img12.style["visibility"] = "hidden";

        env_score += 1;
        suc_score -= 1;
        budget -= 0;

    }

    // scene 4
    if ((option.choice == 'paved')) {

        img10.style["visibility"] = "visible";

        env_score += 0;
        suc_score += 0;
        budget -= 0.5;

    } else if (option.choice == 'unpaved') {

        img9.style["visibility"] = "visible";

        env_score += 0;
        suc_score += 0;
        budget -= 0.05;

    }

    // scene 5
    if ((option.choice == 'houses')) {

        img3.style["visibility"] = "visible";

        env_score += 0;
        suc_score += 0;
        budget -= 0.5;

    } else if (option.choice == 'apartments') {

        img4.style["visibility"] = "visible";

        env_score += 0;
        suc_score += 0;
        budget -= 1;

    }
    
    // scene 6
    if ((option.choice == 'bus')) {

        img17.style["visibility"] = "visible";

        env_score += 0;
        suc_score += 0;
        budget -= 0.5;

    } else if (option.choice == 'train') {

        img16.style["visibility"] = "visible";

        env_score += 0;
        suc_score += 0;
        budget -= 4;

    } else if (option.choice == 'subway') {

        img18.style["visibility"] = "visible";

        env_score += 0;
        suc_score += 0;
        budget -= 6;

    } else if (option.choice == 'none') {

        env_score += 0;
        suc_score += 0;
        budget -= 0;

    }

    if (nextTextNodeId <= 0) {
        modal.style.display = "none";
        $('#myBtn').hide();
    }

    $('#myBtn').hide();
    $('.btn').show();
    document.getElementById("env_score").innerHTML = env_score;
    document.getElementById("suc_score").innerHTML = suc_score;
    document.getElementById("budget").innerHTML = budget;
}

const textNodes = [
    {
        id: 1,
        text: 'Your town needs an energy source to keep it running! Select how you want to power your city.',
        options: [
            {
                text: 'Build a coal power plant / Cost: $6 billion',
                nextText: 2,
                choice: 'coal'
            },
            {
                text: 'Build solar panels / Cost: $3 billion',
                nextText: 2,
                choice: 'solar'
            },
            {
                text: 'Build wind turbines / Cost: $2 billion',
                nextText: 2,
                choice: 'wind'
            },
            {
                text: 'Build a nuclear power plant / Cost: $9 billion',
                nextText: 2,
                choice: 'nuclear'
            }
        ]
    },
    {
        id: 2,
        text: 'Your town doesn’t have a water source. How will your residents quench their thirst and perform their basic bodily functions?! Select how you would like to source your water.',
        options: [
            {
                text: 'Build a reservoir / Cost: $1 billion',
                nextText: 3,
                choice: 'reservoir'
            },
            {
                text: 'Build wells (groundwater) / Cost: $100 million',
                nextText: 3,
                choice: 'wells'
            }
        ]
    },
    {
        id: 3,
        text: 'Now that we’ve sourced all this water, all we need is some food to keep your citizens from going hungry. Select how you would like to source your food.',
        options: [
            {
                text: 'Build farms / Cost: $1.5 million',
                nextText: 4,
                choice: 'farm'
            },
            {
                text: 'Outsource the food / Cost: $0',
                nextText: 4,
                choice: 'outsource'
            }
        ]
    },
    {
        id: 4,
        text: 'Time to connect it all together! How are your residents going to travel from far and wide to your town without any roads? Select what kind of roads you would like to build.',
        options: [
            {
                text: 'Build paved roads / Cost: $500 million',
                nextText: 5,
                choice: 'paved'
            },
            {
                text: 'Build unpaved roads / Cost: $50 million',
                nextText: 5,
                choice: 'unpaved'
            }
        ]
    },
    {
        id: 5,
        text: 'Now that you’ve set up the infrastructure of your town, your residents are ready to move in! But they don’t have a place to live. Select the style of the residential homes you’d like to build.',
        options: [
            {
                text: 'Build houses / Cost: $500 million',
                nextText: 6,
                choice: 'houses'
            },
            {
                text: 'Build apartment complexes / Cost: $1 billion',
                nextText: 6,
                choice: 'apartments'
            }
        ]
    },
    {
        id: 6,
        text: 'Your residents would like to be able to get around without a car! Got room in your budget? If you do, select what type of public transportation you want to implement in your city.',
        options: [
            {
                text: 'Build a bus system / Cost: $500 million',
                nextText: 6,
                choice: 'bus'
            },
            {
                text: 'Build a train system / Cost: $4 billion',
                nextText: 6,
                choice: 'train'
            },
            {
                text: 'Build an underground subway system / Cost: $6 billion',
                nextText: 6,
                choice: 'subway'
            },
            {
                text: 'None, only travel using cars / Cost: $0',
                nextText: 6,
                choice: 'none'
            }
        ]
    },
]

startGame()

// ------------------------- for the questions -------------------------

// ------------------------- for the popup -------------------------

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// ------------------------- for the popup -------------------------
