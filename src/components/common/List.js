import React from 'react'
import { arrayOf, any, node, func } from 'prop-types'

export const List = ({ data = [], empty = null, iteratee }) => {
  const isEmpty = Array.isArray(data) && data.length === 0

  return isEmpty ? empty : <ul>{data.map(iteratee)}</ul>
}

const Item = ({ children, ...props }) => {
  return <li {...props}>{children}</li>
}

Item.propTypes = {
  children: node,
}

List.Item = Item

List.propTypes = {
  data: arrayOf(any),
  empty: node,
  iteratee: func,
}
