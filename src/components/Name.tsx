import * as React from 'react'

interface IProps {
    children?: string
}

// const Name = styled.span`
//     font-size: 14px;
// `

const Name = ({children}: IProps) => (
    <span className="name">{children}</span>
)

export default Name