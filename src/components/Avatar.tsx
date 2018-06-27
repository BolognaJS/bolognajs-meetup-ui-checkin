import * as React from 'react';
import styled from 'src/theme';

interface IProps {
    url: string
}

const Img = ({url}: IProps) => <img src={url || 'http://www.bolognajs.com/img/logo.svg'} />

const AvatarImg = styled(Img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Avatar = ({url}: IProps) => (
    <div className="avatar">
        <AvatarImg url={url} />
    </div>
)

const StyledAvatar = styled(Avatar)`
    width: 200px;
    height: 200px;
    overflow: hidden;
`

export default StyledAvatar