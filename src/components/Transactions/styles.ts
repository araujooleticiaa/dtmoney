import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 1rem;

    table{
        width: 100%;
        border-spacing: 0 0.5rem;

        th{
            padding: 1rem 2rem;
            color: var(--text-title);
            text-align: left;
            line-height: 0.5rem;
            font-weight: 400;
        }
        td{
            padding: 1rem 2rem;
            border:0;
            background: var(--shape);
            color:var(--text-text);
            border-radius: 0.25rem;

            &:first-child{
                color:var(--text-title);
            }
            &.withdraw{
                color:var(--red);
                }
            &.deposity{
                color:var(--green);
            }
        }
    }

    
`