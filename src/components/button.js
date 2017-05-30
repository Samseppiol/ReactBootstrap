import React from 'react'

export const Button = ({buttonType="primary", children}) => (
  <button className={`btn btn-${buttonType}`} role='button'>
    {children}
  </button>
)
