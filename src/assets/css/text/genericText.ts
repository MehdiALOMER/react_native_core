import styled from 'styled-components/native';
import { GenericTextPropTypes } from './genericTextPropTypes';

export const GenericText = styled.Text<GenericTextPropTypes>`
    flex: ${(props: { flex: any; }) => props.flex || 0};
    color: ${(props: { color: any; }) => props.color || 'black'};
    font-weight: ${(props: { fontWeight: any; }) => props.fontWeight || 'normal'};
    font-family: ${(props: { fontFamily: any; }) => props.fontFamily || 'Arial'};
    font-size:  ${14}px;
    text-align: ${(props: { textAlign: any; }) => props.textAlign || 'left'};
    margin: ${(props: { margin: any; }) => props.margin || 0};
    margin-top: ${(props: { marginTop: any; }) => props.marginTop || 0};
    margin-bottom: ${(props: { marginBottom: any; }) => props.marginBottom || 0};
    margin-left: ${(props: { marginLeft: any; }) => props.marginLeft || 0};
    margin-right: ${(props: { marginRight: any; }) => props.marginRight || 0};
`;