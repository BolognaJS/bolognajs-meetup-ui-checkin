import * as React from 'react';
import styled from 'src/theme';

interface IProps {
    url: string,
    className?: string
}

const Img = ({url, className}: IProps) => <img src={url || 'http://www.bolognajs.com/img/logo.svg'} className={className} />

const AvatarImg = styled(Img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Avatar = ({url, className}: IProps) => (
    <div className={`avatar ${className}`}>
        <AvatarImg url={url} />
    </div>
)

const StyledAvatar = styled(Avatar)`
    width: 200px;
    height: 200px;
    overflow: hidden;
`

export default StyledAvatar