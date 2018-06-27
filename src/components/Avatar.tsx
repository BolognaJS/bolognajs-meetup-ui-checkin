import * as React from 'react'

interface IProps {
    url: string
}

const Avatar = ({url}: IProps) => (
    <img src={url} className="avatar" />
)

export default Avatar