import * as React from 'react'
import { ChangeEvent, Component } from 'react'

import styled from 'styled-components';

interface IProps {
    threshold?: number,
    onChange: (value: string | null) => void,
    className?: string
}
interface IState {
    threshold: number,
    value: string
}

class Search extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)

        this.state = {
            threshold: this.props.threshold || 3,
            value: ''
        }
    }

    public render() {
        return(
            <input onChange={this.onChange} className={this.props.className}/>
        )
    }

    private onChange = (ev: ChangeEvent<HTMLInputElement>) => {
        this.setState({value: ev.target.value})

        const searchValue = ev.target.value.length < this.state.threshold ? null : ev.target.value.toLowerCase()

        this.props.onChange( searchValue )
    }
}

const StyledSearch = styled(Search)`
    padding: 10px;
    margin-bottom: 20px;
`

export default StyledSearch
