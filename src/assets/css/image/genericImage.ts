import styled from 'styled-components/native';
import { GenericImagePropTypes } from './genericImagePropTypes';

export const GenericImage = styled.Image<GenericImagePropTypes>`
    flex: ${(props: { flex: any; }) => props.flex || 0};
    width: ${(props: { width: any; }) => props.width || 0};
    height: ${(props: { height: any; }) => props.height || 0};
    margin: ${(props: { margin: any; }) => props.margin || 0};
    padding: ${(props: { padding: any; }) => props.padding || 0};
    background-color: ${(props: { backgroundColor: any; }) => props.backgroundColor || 'transparent'};
    justify-content: ${(props: { justifyContent: any; }) => props.justifyContent || 'flex-start'};
    align-items: ${(props: { alignItems: any; }) => props.alignItems || 'flex-start'};
    border-radius: ${(props: { borderRadius: any; }) => props.borderRadius || 0};
    border-width: ${(props: { borderWidth: any; }) => props.borderWidth || 0};
    border-color: ${(props: { borderColor: any; }) => props.borderColor || 'transparent'};
    top: ${(props: { top: any; }) => props.top || 0};
    bottom: ${(props: { bottom: any; }) => props.bottom || 0};
    left: ${(props: { left: any; }) => props.left || 0};
    right: ${(props: { right: any; }) => props.right || 0};
    opacity: ${(props: { opacity: any; }) => props.opacity || 1};
    resizeMode: ${(props: { resizeMode: any; }) => props.resizeMode || 'cover'};
`;