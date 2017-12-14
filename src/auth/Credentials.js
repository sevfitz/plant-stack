import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    text-align: center;
    label {
        display: block;
    }
    label, button {
        padding: 5px;
    }
`;

// login form

export default ({ submit, allowName = false }) => (
    <Form onSubmit={e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        };
        submit(data);
    }}>
        { allowName && <label>name: <input name="name" /></label>}
        <label>email: <input name="email" /></label>
        <label>password: <input type="password" name="password" /></label>
        <button>Log In</button>
    </Form>
);
