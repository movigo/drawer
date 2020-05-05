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
    easing: 'ease-in-out',
    backdropBrightness: 70,
    ...options
  }

  element.style.top = '0'

  if (options.leftSide) {
    element.style.left = '0'
    element.style.right = 'inherit'
  } else {
    element.style.left = 'inherit'
    element.style.right = '0'
  }

  parameters.easing = options.easing

  if (options.open) {
    parameters.duration = options.duration || .3
    parameters.to = [
      { width: `${options.width}px` },
      { backdropFilter: `brightness(${options.backdropBrightness}%)` }
    ]
  } else {
    parameters.duration = options.duration || .25
    parameters.to = [
      { width: '0px' },
      { backdropFilter: 'brightness(100%)' }
    ]
  }
}

addPlugin(drawer)