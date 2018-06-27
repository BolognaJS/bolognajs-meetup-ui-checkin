import * as React from 'react'

interface IProps {
    value: string
}

const Name = ({value}: IProps) => (
    <span className="name">{value}</span>
)

export default Name