import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    div{
        background: var(--shape);
        -webkit-box-shadow: 0px 2px 15px 3px rgba(0,0,0,0.15);
        -moz-box-shadow: 0px 2px 15px 3px rgba(0,0,0,0.15);
        box-shadow: 0px 2px 15px 3px rgba(0,0,0,0.15); 
        color: var(--text-title);
        padding: 1.5rem 2.5rem;
        border-radius: 0.25rem;

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong{
            font-size: 2rem;
            margin-top: 1rem;
            font-weight: 500;
        }

        &:last-child {
            background: var(--green);
            color: var(--shape);
        }
    }
    

`