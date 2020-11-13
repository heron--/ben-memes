import React from 'react';
import styled from 'styled-components'

const Frame = styled.div`
    position: relative;
    width: 720px;
    height: 666px;
    margin: 2rem auto 0;
`;

const Ben = ({
    id,
    imgSrc,
    MessageComponent,
    BenComponent,
    message
}) => (
    id ?
        (
            <Frame>
                <MessageComponent dangerouslySetInnerHTML={{ __html: message }} />
                <BenComponent src={imgSrc} />
            </Frame>
        ) :
        null
);

export default Ben;
