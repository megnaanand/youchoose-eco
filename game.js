const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(0)
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
      button.classList.add('btn')
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
  if (nextTextNodeId < 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
     {
        id: 0,
        text: 'Congratulations! The federal government has recently acquired a new piece of land and you have been tasked with building a new town on it. You have a budget of ______ dollars to create the best town possible. While planning your town, you must make 6 important decisions that will dictate its future success and impact on the environment. Make wise decisions to put your small town on the map and make it stand the test of time and climate change!\n\n',
        options: [
            {
                text: 'Continue',
                nextText: 1
            }
        ]
    },
    {
        id: 1,
        text: 'Your town needs an energy source to keep it running! Select how you want to power your city.\n\n',
        options: [
            {
                text: 'Build a coal power plant',
                nextText: 2
            },
            {
                text: 'Build solar panels',
                nextText: 2
            },
            {
                text: 'Build wind turbines',
                nextText: 2
            },
            {
                text: 'Build a nuclear power plant',
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'Your town doesn’t have a water source. How will your residents quench their thirst and perform their basic bodily functions?! Select how you would like to source your water.\n\n',
        options: [
            {
                text: 'Build a reservoir',
                nextText: 3
            },
            {
                text: 'Build wells (groundwater)',
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: 'Now that we’ve sourced all this water, all we need is some food to keep your citizens from going hungry. Select how you would like to source your food.\n\n',
        options: [
            {
                text: 'Outsource the food',
                nextText: 4
            },
            {
                text: 'Build a farm',
                nextText: 4
            }
        ]
    },
    {
        id: 4,
        text: 'Time to connect it all together! How are your residents going to travel from far and wide to your town without any roads? Select what kind of roads you would like to build.\n\n',
        options: [
            {
                text: 'Build paved roads',
                nextText: 5
            },
            {
                text: 'Build unpaved roads',
                nextText: 5
            }
        ]
    },
    {
        id: 5,
        text: 'Now that you’ve set up the infrastructure of your town, your residents are ready to move in! But they don’t have a place to live. Select the style of the residential homes you’d like to build.\n\n',
        options: [
            {
                text: 'Build houses',
                nextText: 6
            },
            {
                text: 'Build apartment complexes',
                nextText: 6
            }
        ]
    },
    {
        id: 6,
        text: 'Your residents would like to be able to get around without a car! Got room in your budget? If you do, select what type of public transportation you want to implement in your city.\n\n',
        options: [
            {
                text: 'Build a bus system',
                nextText: 7
            },
            {
                text: 'Build a train system',
                nextText: 7
            },
            {
                text: 'Build an underground subway system',
                nextText: 7
            },
            {
                text: 'No room in budget',
                nextText: 7
            }
        ]
    },
    {
        id: 7,
        text: 'Congratulations on building your city! The number displayed on the side is how well your city scored, both environmentally and productively. A poor score ranges from __ to __, a productive but non-environmentally conscious score ranges from __ to __, and a productive and environmentally friendly score ranges from __ to __.\n \nHow do you think you did? How difficult was it to make some of these choices? What sacrifices did you make and do you regret prioritizing some decisions over others? Do you think your residents are happy? By playing YouChoose, we hope you get the chance to reflect on the hard decisions you had to make and the things one must sacrifice to be environmentally friendly. Although they may be the harder and more costly decision to make, they will ultimately keep us and our earth happy.\n\n',
        options: [
            {
                text: 'Restart',
                nextText: 0
            },
        ]
    },
]

startGame()