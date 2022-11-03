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
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: 'Question 1',
        options: [
            {
                text: 'Option 1',
                setState: { blueGoo: true },
                nextText: 2
            },
            {
                text: 'Option 2',
                nextText: 2
            },
            {
                text: 'Option 3',
                nextText: 2
            },
            {
                text: 'Option 4',
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'Question 2',
        options: [
            {
                text: 'Option 1',
                setState: { success: success += 0, cost: cost += 0, environment: environment += 0 },
                nextText: 3
            },
            {
                text: 'Option 2',
                setState: { success: success += 0, cost: cost += 0, environment: environment += 0 },
                nextText: 3
            },
            {
                text: 'Option 3',
                setState: { success: success += 0, cost: cost += 0, environment: environment += 0 },
                nextText: 3
            },
            {
                text: 'Option 4',
                setState: { success: success += 0, cost: cost += 0, environment: environment += 0 },
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: 'Question 3',
        options: [
            {
                text: 'Option 1',
                setState: { success: success += 0, cost: cost += 0, environment: environment += 0 },
                nextText: 4
            },
            {
                text: 'Option 2',
                setState: { success: success += 0, cost: cost += 0, environment: environment += 0 },
                nextText: 4
            },
            {
                text: 'Option 3',
                setState: { success: success += 0, cost: cost += 0, environment: environment += 0 },
                nextText: 4
            },
            {
                text: 'Option 4',
                setState: { success: success += 0, cost: cost += 0, environment: environment += 0 },
                nextText: 4
            }
        ]
    },
    {
        id: 4,
        text: 'Question 4',
        options: [
            {
                text: 'Option 1',
                setState: { success: success += 0, cost: cost += 0, environment: environment += 0 },
                nextText: 5
            },
            {
                text: 'Option 2',
                setState: { success: success += 0, cost: cost += 0, environment: environment += 0 },
                nextText: 5
            },
            {
                text: 'Option 3',
                setState: { success: success += 0, cost: cost += 0, environment: environment += 0 },
                nextText: 5
            },
            {
                text: 'Option 4',
                setState: { success: success += 0, cost: cost += 0, environment: environment += 0 },
                nextText: 5
            }
        ]
    },
    {
        id: 5,
        text: 'Question 5',
        options: [
            {
                text: 'Option 1',
                setState: { success: success += 0, cost: cost += 0, environment: environment += 0 },
                nextText: 6
            },
            {
                text: 'Option 2',
                setState: { success: success += 0, cost: cost += 0, environment: environment += 0 },
                nextText: 6
            },
            {
                text: 'Option 3',
                setState: { success: success += 0, cost: cost += 0, environment: environment += 0 },
                nextText: 6
            },
            {
                text: 'Option 4',
                setState: { success: success += 0, cost: cost += 0, environment: environment += 0 },
                nextText: 6
            }
        ]
    },
    {
        id: 6,
        text: 'Question 6',
        options: [
            {
                text: 'Option 1',
                setState: { success: success += 0, cost: cost += 0, environment: environment += 0 },
                nextText: -1
            },
            {
                text: 'Option 2',
                setState: { success: success += 0, cost: cost += 0, environment: environment += 0 },
                nextText: -1
            },
            {
                text: 'Option 3',
                setState: { success: success += 0, cost: cost += 0, environment: environment += 0 },
                nextText: -1
            },
            {
                text: 'Option 4',
                setState: { success: success += 0, cost: cost += 0, environment: environment += 0 },
                nextText: -1
            }
        ]
    },
]

startGame()