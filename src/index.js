import freesewing from '@freesewing/core'
import plugins from '@freesewing/plugin-bundle'
import config from '../config'
import draftWaistband from './waistband'
import draftPanel from './panel'

// Create new design
const Pattern = new freesewing.Design(config, plugins)

// Attach the draft methods to the prototype
Pattern.prototype.draftWaistband = draftWaistband
Pattern.prototype.draftPanel = draftPanel

export default Pattern
