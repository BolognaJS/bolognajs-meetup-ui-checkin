import * as React from 'react';

interface IProps {
    url: string
}

//  style={{backgroundImage: url}}

const Avatar = ({url}: IProps) => (
    <div className="avatar">
        <img src={url} />
    </div>
)

export default Avatar