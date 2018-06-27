import * as React from 'react'
import { Component } from 'react'
import Avatar from 'src/components/Avatar';
import RoundButton, { ButtonType } from 'src/components/RoundButton';
import Name from 'src/components/Name';

interface IProps {
    name: string,
    avatar: string
}

class AttendeeCard extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
    
        this.checkIn = this.checkIn.bind(this);
        this.notPresent = this.notPresent.bind(this);
    }
    
    public render() {
        return (
            <div className="attendee">
                <Avatar url={this.props.avatar} />
                <div className="info">
                    <Name value={this.props.name} />
                    <RoundButton text="&#x2713;" onClick={this.checkIn} type={ButtonType.Success} />
                </div>
            </div>
        )
    }

    private checkIn() {
        return;
    }
    
    private notPresent() {
        return;
    }
}

export default AttendeeCard