import * as React from 'react'
import { Component } from 'react'
import Avatar from 'src/components/Avatar';
import RoundButton, { ButtonType } from 'src/components/RoundButton';

interface IProps {
    name: string,
    avatar: string
}

class Attendee extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
    
        this.onClick = this.onClick.bind(this);
      }
    
    public render() {
        return (
            <div className="row attendee">
                <div className="col-sm-5">
                    <Avatar url={this.props.avatar} />
                </div>
                <div className="col-sm-7">
                    <div className="row">
                        <div className="col-sm-12">
                            {this.props.name}
                        </div>
                    </div>
                    <div className="row actions">
                        <div className="col-sm-6 text-center">
                            <RoundButton text="&#x2713;" onClick={this.onClick} type={ButtonType.Success} />
                        </div>
                        <div className="col-sm-6 text-center">
                            <RoundButton text="X" onClick={this.onClick} type={ButtonType.Danger} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    private onClick() {
        return;
      }
    
}

export default Attendee