import Card from './Card'

import Kind from '../enums/Kind'

import ObjectType from '../enums/ObjectType'

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
  type?: ObjectType
  attributes?: CardAttribute
}

export default CardToken
