import * as React from 'react'
import { Component } from 'react'
import Avatar from 'src/components/Avatar';
import RoundButton, { ButtonType } from 'src/components/RoundButton';
import Name from 'src/components/Name';

interface IProps {
    name: string,
    checkedIn: boolean
    avatar: string
}

class AttendeeCard extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }
    
    public render() {
        return (
            <div className="attendee">
                <Avatar url={this.props.avatar} />
                <div className="info">
                    <Name>{this.props.name}</Name>
                    <RoundButton text="&#x2713;" onClick={this.checkIn} type={ButtonType.Success} />
                </div>
            </div>
        )
    }

    private checkIn = () =>  {
        

        return;
    }
}

export default AttendeeCard