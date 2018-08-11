import Control from './Control'
import Preview from './Preview'

if (typeof window !== 'undefined') {
  window.RelationsControl = Control
  window.RelationsPreview = Preview
}

export {
  RelationsControl,
  RelationsPreview
}
