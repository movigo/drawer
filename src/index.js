import { addPlugin } from '@movigo/core'

/**
 * Prepare animation parameters to create a drawer animation.
 * @param {Element[] | NodeList} elements
 * @param {object} parameters
 * @param {object} options
 */
function drawer ([element], parameters, options) {
  options = {
    leftSide: true,
    open: true,
    width: 200,
    ...options
  }

  if (options.leftSide) {
    element.style.left = '0'
    element.style.right = 'inherit'
  } else if (options.position === 'right') {
    element.style.left = 'inherit'
    element.style.right = '0'
  }

  parameters.easing = 'ease-in-out'

  if (options.open) {
    parameters.duration = .3
    parameters.to = { width: `${options.width}px` }
  } else {
    parameters.duration = .25
    parameters.to = { width: '0px' }
  }
}

addPlugin(drawer)