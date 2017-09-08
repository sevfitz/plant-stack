import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const SelectButton = styled.button`
    background-color: #ffed64;
    font-size: 20px;
    height: 40px;
    width: 100px;
    border: 2px solid #ffed64;
    border-radius: 25px;
`;

export function Selection(props) {
    const { card, choice } = props;
    const { _id, name, genus, species } = card;
    return(
        <div>
            <form>
                <p>I think {choice} is the {name}'s...</p>
                <SelectButton>Genus</SelectButton>
                <span> OR </span>
                <SelectButton>Species</SelectButton>
            </form>
        </div>
    );
}

// export default connect(
//     state => {
//         return({
//             name:
//         })
//     }
// )
