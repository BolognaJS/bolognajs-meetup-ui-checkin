import * as React from 'react'
import { Component } from 'react'

import Avatar from 'src/components/Avatar';
import Name from 'src/components/Name';

import styled from 'styled-components';

interface IProps {
    name: string,
    checkedIn: boolean,
    avatar: string,
    className?: string
}

class AttendeeCard extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }
    
    public render() {
        return (
            <div className={`attendee ${this.props.checkedIn ? 'checked_in' : ''} ${this.props.className}`} onClick={this.onClick}>
                <Avatar url={this.props.avatar} />
                <Name>{this.props.name}</Name>
                <button className="rippleContainer">
                    <div className="ripple" />                
                </button>
            </div>
        )
    }

    private onClick = () =>  {

        return;
    }
}

const StyledAttendeeCard = styled(AttendeeCard)`
    padding: 5px 5px 0;
    position: relative;
    border: 1px solid #ccc;
    display: flex;  
    flex-direction: column;
    align-items: center;
    margin: 0 10px 10px 0;
    overflow: hidden;
`

export default StyledAttendeeCard