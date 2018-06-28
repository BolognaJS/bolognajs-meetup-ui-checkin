import * as React from 'react'
import { Component } from 'react'
import styled, { css } from 'styled-components'

import Avatar from 'src/components/Avatar'
import Name from 'src/components/Name'
import RippleEffect, { RippleColor } from 'src/components/RippleEffect'
import Attendee from '../models/Attendee'

interface IContainerProps {
    checkedIn: boolean
}

const AttendeeCardContainer = styled.div`
    padding: 5px 5px 0;
    position: relative;
    border: 1px solid #ccc;
    display: flex;  
    flex-direction: column;
    align-items: center;
    margin: 0 5px 10px;
    overflow: hidden;

    ${ 
        (props: IContainerProps) => props.checkedIn && css`
            border: 1px solid rgb(40, 167, 69);
            box-shadow: inset 2px 2px 0 rgb(40,167,69), inset -2px -2px 0 rgb(40,167,69);
        `
    }
`

interface IProps {
    data: Attendee,
    onClick: (attendee: Attendee) => void
}

class AttendeeCard extends Component<IProps> {
    public render() {
        const {name, photo, checkin} = this.props.data;

        return (
            <AttendeeCardContainer checkedIn={checkin} onClick={this.onClick}>
                <Avatar url={photo} />
                <Name>{name}</Name>
                <RippleEffect rippleColor={checkin ? RippleColor.Red : RippleColor.Green}/>
            </AttendeeCardContainer>
        )
    }

    private onClick = () => {
        setTimeout( () => this.props.onClick(this.props.data), 800 )        
    }
}

export default AttendeeCard