import React from 'react'
import { node } from 'prop-types'

export const Section = ({ title, content, children, ...props }) => {
  return (
    <section {...props}>
      {title ? <h2>{title}</h2> : null}
      {content ? <p>{content}</p> : null}
      {children}
    </section>
  )
}

Section.propTypes = {
  title: node,
  content: node,
  children: node,
}
