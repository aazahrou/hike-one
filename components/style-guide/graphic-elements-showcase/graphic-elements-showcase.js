import React from 'react';

import Diamond from '../../shapes/diamond/diamond';
import DoubleDiamond from '../../shapes/double-diamond/double-diamond';
import Cube from '../../shapes/cube/cube';
import Circle from '../../shapes/circle/circle';

class GraphicElementsShowcase extends React.Component {
    render() {
        return (
            <div className="graphic-elements-showcase container">
                <h2 className="style-guide-title">Graphic elements</h2>

                <div className="graphic-elements-container">
                    <Diamond shadow="true" />
                    <DoubleDiamond shadow="true" />
                    <Cube shadow="true" />
                    <Circle shadow="true" />
                </div>
            </div>
        );
    }
}

export default GraphicElementsShowcase;