import { createGlobalStyle } from "styled-components";
import HarmattanRegularTTF from "./Harmattan-Regular.ttf";
import HarmattanBoldTTF from "./Harmattan-Bold.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Harmattan';
        src: local('Harmattan'), local('Harmattan-Bold'),
        url(${HarmattanRegularTTF}) format('truetype'),
        url(${HarmattanBoldTTF}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
`;
