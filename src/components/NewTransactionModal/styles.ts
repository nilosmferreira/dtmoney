import styled from 'styled-components';

export const Container = styled.form`
    h2 {
        color: var(--text-title1);
        font-weight: 600;
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
    }
    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1 solid var(--border-input);
        background: var(--background-input);

        font-weight: 500;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }
    button[type='submit'] {
        width: 100%;
        height: 4rem;
        padding: 0 1.5rem;

        background: var(--green);
        color: var(--shape);

        font-weight: 600;

        border: 0;
        border-radius: 0.25rem;
        margin-top: 1.5rem;
    }
`;
