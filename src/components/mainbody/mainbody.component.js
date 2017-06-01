'use strict';

import React from 'react';
import Container from '../container/container.component';
import './mainbody.style.scss';

class MainBody extends React.Component {
    render() {
        return (
            <div className="main-body">
                <h1>Main Body</h1>
                <Container header="Test content">
                    <p>
                        Bacon ipsum dolor amet short loin bacon cupim fatback kevin, doner frankfurter tenderloin.
                        Turducken pork belly cupim doner rump sirloin, landjaeger pork chop bacon kielbasa bresaola
                        short loin tri-tip ribeye alcatra. Hamburger strip steak pork turducken short loin, corned beef
                        doner. Short ribs beef strip steak, pork belly jowl meatball swine brisket andouille leberkas
                        chuck ham hock cupim.
                    </p>
                </Container>
            </div>
        );
    }
}

export default MainBody;