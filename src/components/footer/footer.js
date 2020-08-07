import React, { Component } from 'react';
import './footer.css';

function footer() {
        return (
          <footer class="navbar navbar-dark bg-dark footer cfoot">
          <div class="row">
          <div class="fbrand">
          Austin Graphic and Web 2020 copyright &copy;
        </div>
          <div class="fimages">
          <a href="https://github.com/austingraphicandweb" target="_blank"><img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="Github" width="30px" height="25px" class="footerimg octocat"></img></a>
          <a href="https://www.linkedin.com/in/austin-keener" target="_blank"><img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="LinkedIn" width="35px" height="25px" class="footerimg"></img></a>
          <a href="https://www.instagram.com/austingraphicandweb" target="_blank"><img src="http://pngimg.com/uploads/instagram/instagram_PNG12.png" alt="Instagram" width="30px" height="25px" class="footerimg"></img></a>
        </div>
        </div>
        </footer>
        );
}

export default footer;