import Card from './Card'

import Kind from '../enums/Kind'
import Type from '../enums/Type'

interface CardAttribute {
  card?: Card
  created?: number
  kind?: Kind
  livemode?: boolean
  updated?: number
  used?: boolean
}

interface CardToken {
  id?: string
  type?: Type
  attributes?: CardAttribute
}

export default CardToken
