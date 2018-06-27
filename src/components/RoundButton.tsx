import * as React from 'react'

export enum ButtonType {
    Success = "btn-outline-success",
    Danger = "btn-outline-danger"
}

interface IProps {
  text: string,
  type: ButtonType,
  onClick: () => void
}

const RoundButton = ({text, type, onClick}: IProps) => (
  <button className={`btn btn-rounded ${type}`} onClick={onClick}> 
      {text}
  </button>
)

export default RoundButton