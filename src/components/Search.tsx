import * as React from 'react'
import { ChangeEvent, Component } from 'react'

import styled from 'styled-components';

const SearchInput = styled.input`
    padding: 10px;
    margin: 0 5px 20px;
`

interface IProps {
    threshold?: number,
    placeholder?: string,
    onChange: (value: string | null) => void
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
            <SearchInput onChange={this.onChange} placeholder={this.props.placeholder}/>
        )
    }

    private onChange = (ev: ChangeEvent<HTMLInputElement>) => {
        this.setState({value: ev.target.value})

        const searchValue = ev.target.value.length < this.state.threshold ? null : ev.target.value.toLowerCase()

        this.props.onChange( searchValue )
    }
}

const StyledSearch = styled(Search)`
`

export default StyledSearch
