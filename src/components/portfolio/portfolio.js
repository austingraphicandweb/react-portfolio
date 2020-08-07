import React, { Component } from 'react';
import Design from '../design/design.js';
import Dev from '../dev/dev.js';

function Portfolio() {
        return (
            <div class="row">
              <div class="col-10">
                <h1>My Portfolio</h1>
                <Design />
                <Dev />
            </div>
            </div>
        );
}

export default Portfolio;