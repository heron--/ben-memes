import React, { Component } from 'react';
import styled from 'styled-components'

import Ben from './Ben';
import './App.css';

const BaseMessageComponent = styled.div`
    position: relative;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

const BaseBenComponent = styled.img`
    position: absolute;
`;

const InputLabel = styled.label`
    padding: 0.5rem 0;
    display: block;
    font-size: 1rem;
    color: #444;
`;

const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    font-family: 'Helvetica', 'Arial', sans-serif;
`;

const InputContainer = styled.div`
    margin: 0 1rem;
`;

const SelectInput = styled.select`
    font-size: 18px;
`;

const TextInput = styled.input`
    font-size: 18px;
`;

const BEN_CONFIG = [
    {
        id: '1',
        name: 'OH HO HO',
        imgSrc: require('./images/ben-01.png'),
        MessageComponent: styled(BaseMessageComponent)`
            max-width: 428px;
            min-height: 300px;
        `,
        BenComponent: styled(BaseBenComponent)`
            bottom: 0;
            right: 0;
        `,
    },
    {
        id: '2',
        name: 'I Made You This',
        imgSrc: require('./images/ben-02.png'),
        MessageComponent: styled(BaseMessageComponent)`
            max-width: 450px;
            background: #000;
            color: #fff;
            padding: 22px;
            box-sizing: border-box;
            top: 36px;
            min-height: 280px;
        `,
        BenComponent: styled(BaseBenComponent)`
            bottom: 0;
            right: 0;
        `,
    },
    {
        id:'3',
        name: 'Thaaaaat\'s Probably Okay',
        imgSrc: require('./images/ben-03.png'),
        MessageComponent: styled(BaseMessageComponent)`
            max-width: 463px;
            min-height: 240px;
            padding: 20px;
            background: #000;
            color: #fff;
            box-sizing: border-box;
        `,
        BenComponent: styled(BaseBenComponent)`
            bottom: 0;
            right: 0;
        `,
    },
    {
        id: '4',
        name: 'Waddup, Daaaawg',
        imgSrc: require('./images/ben-04.png'),
        MessageComponent: styled(BaseMessageComponent)`
            max-width: 463px;
            min-height: 240px;
            padding: 20px;
            background: #000;
            color: #fff;
            box-sizing: border-box;
        `,
        BenComponent: styled(BaseBenComponent)`
            bottom: 0;
            right: 0;
        `,
    },
    {
        id: '5',
        name: 'Technology! Am I Right?',
        imgSrc: require('./images/ben-05.png'),
        MessageComponent: styled(BaseMessageComponent)`
            width: 189px;
            height: 138px;
            top: 136px;
            left: 373px;
            z-index: 1;
            transform: rotate(4deg);
            font-size: 18px;
            color: #fff;
        `,
        BenComponent: styled(BaseBenComponent)`
            top: 0;
            width: 566px;
            left: 69px;
        `,
    },
    {
        id: '6',
        name: 'Ben Classic',
        imgSrc: require('./images/ben-06.png'),
        MessageComponent: styled(BaseMessageComponent)`
            background: #000;
            width: 311px;
            min-height: 391px;
            top: 109px;
            left: 44px;
            transform: rotate(-3deg);
            z-index: 1;
            color: #fff;
            padding: 1rem;
        `,
        BenComponent: styled(BaseBenComponent)`
            top: 0;
            left: 135px;
            width: 483px;
        `,
    },
    {
        id: '7',
        name: 'New Ben Hotness Classic',
        imgSrc: require('./images/ben-07.png'),
        MessageComponent: styled(BaseMessageComponent)`
            width: 345px;
            top: 34px;
            font-size: 36px;
        `,
        BenComponent: styled(BaseBenComponent)`
            bottom: 0;
            right: 21px;
            width: 440px;
        `,
    },
    {
        id: '8',
        name: 'You See This? This is The Problem.',
        imgSrc: require('./images/ben-08.png'),
        MessageComponent: styled(BaseMessageComponent)`
            color: #fff;
            background-color: #000;
            padding: 1rem;
            z-index: 1;
            width: 265px;
            top: 133px;
            min-height: 381px;
            overflow: auto;
        `,
        BenComponent: styled(BaseBenComponent)`
            bottom: 0;
        `,
    },
    {
        id: '9',
        name: '😬',
        imgSrc: require('./images/ben-09.png'),
        MessageComponent: styled(BaseMessageComponent)`
            max-width: 354px;
            top: 264px;
            left: -22px;
            font-size: 24px;
            background: black;
            color: white;
            padding: 18px;
            min-height: 139px;
        `,
        BenComponent: styled(BaseBenComponent)`
            position: absolute;
            bottom: 0;
            right: 0;
        `,
    },
    {
        id: '10',
        name: 'You\'re Supposed To Do That OUTSIDE',
        imgSrc: require('./images/ben-10.png'),
        MessageComponent: styled(BaseMessageComponent)`
            max-width: 234px;
            top: 151px;
            font-size: 24px;
            min-height: 140px;
        `,
        BenComponent: styled(BaseBenComponent)`
            top: 86px;
            right: 0;
            max-width: 500px;
            transform: rotate(-4deg);
        `,
    },
    {
        id: '11',
        name: 'ECHO-Echo-echo',
        imgSrc: require('./images/ben-11.png'),
        MessageComponent: styled(BaseMessageComponent)`
            left: 81px;
            top: 49px;
            font-family: cursive;
            max-width: 420px;
        `,
        BenComponent: styled(BaseBenComponent)`
            bottom: 0;
            right: 0;
            max-width: 420px;
        `,
    },
];

class App extends Component {
    state = {
        currentBen: '6',
        message: '',
    };

    handleDropdownChange = (e) => {
        this.setState({
            currentBen: e.target.value
        });
    };

    render() {
        return (
            <div className="App">
                <InputWrapper>
                    <InputContainer>
                        <InputLabel>Ben</InputLabel>
                        <SelectInput value={this.state.currentBen} onChange={this.handleDropdownChange}>
                            {
                                BEN_CONFIG.map(ben => (
                                    <option
                                        key={ben.id}
                                        value={ben.id}
                                    >
                                        {ben.name}
                                    </option>
                                ))
                            }
                        </SelectInput>
                    </InputContainer>
                    <InputContainer>
                        <InputLabel>Message</InputLabel>
                        <TextInput
                            type="text"
                            onChange={e => { this.setState({ message: e.target.value}); }}
                            value={this.state.message}
                            placeholder="Benerate a message"
                        />
                    </InputContainer>
                </InputWrapper>
                <Ben
                    {...BEN_CONFIG.find(ben => ben.id === this.state.currentBen)}
                    message={this.state.message}
                />
            </div>
        );
    }
}

export default App;
