import  React from 'react';

import { StyledGrid, StyledGridContent } from '../styles/StyledGrid';
import Header from './Header';
import { StyledSpinner } from '../styles/StyledSpinner';


const Grid = ({ header, children }) => (

<StyledGrid>
<h1>{header}</h1>
<StyledGridContent>{children}</StyledGridContent>

</StyledGrid>

)

export default Grid;