// @flow
import React from 'react'

type Props = {
  children: Children,
}

const Button = ({ children, ...rest }: Props) => (
  <button {...rest}>
    {children}
  </button>
)

export default Button
