import _ from 'lodash'

function component () {
  const element = document.createElement('div')

  // lodash is used here for bundling demonstration purposes
  element.innerHTML = _.join(['Great', 'success,', 'Gradle!'], ' ')

  return element
}

document.body.appendChild(component())