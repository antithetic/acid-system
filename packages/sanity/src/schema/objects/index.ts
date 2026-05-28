import {schemaBlocks} from './blocks'
import blockContent from './block-content'
import {seo} from './seo'
import {link} from './link'

export const schemaObjects = [...schemaBlocks, blockContent, seo, link]
