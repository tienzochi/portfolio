<template>
    <div class="container">

        
        <div class="navbar">
            <a href="#tech" class="underline">tech</a>
            <a href="#work" class="underline">work</a>
        </div>

        <div class="sidenav">
            <img src="../assets/image2.jpeg" id="display-pic"/>

            <h2>Rosette Tienzo</h2>
            <p> 
                a full-stack Javascript developer based in Auckland, New Zealand.
            </p>

            <div class="socials">
                <a href="https://www.linkedin.com/in/rosette-tienzo-m/" target="_blank">linkedin</a>
                <a href="https://www.instagram.com/tienzochi/" target="_blank">instagram</a>
            </div>
        </div>


        <div class="content">
            <span id="portfolio-span">tech.</span>
            <br/>

            <!-- TODO: progress bar of tech you've been into -->
        </div>
        
    </div>
</template>

<style scoped>
    .container {
        margin-left: 340px; /* Same as the width of the sidenav */
        padding: 40px;
    }

    /* The sidebar menu */
    .sidenav {
        height: 100%; /* Full-height: remove this if you want "auto" height */
        width: 340px; /* Set the width of the sidebar */
        position: fixed; /* Fixed Sidebar (stay in place on scroll) */
        z-index: 1; /* Stay on top */
        top: 0; /* Stay at the top */
        left: 0;
        background-color: #F9FBFF;
        overflow-x: hidden; /* Disable horizontal scroll */

        text-align: center;
    }

    #display-pic {
        max-height: 460px;
        max-width: 360px;
    }

    .socials {
        padding: 10px;
        text-align: center;
    }

    .socials a{
        text-decoration: none;
        padding: 10px;
    }

    .content {
        text-align: left;
        color: #F9FBFF;
        text-align: center;
    }

    /* The navigation bar */
    .navbar {
        overflow: hidden;
        position: fixed; /* Set the navbar to fixed position */
        top: 0; /* Position the navbar at the top of the page */
        width: 100%; /* Full width */
    }

    .underline {
        overflow: hidden;
        color: #F9FBFF;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        position:relative;
        text-decoration:none;
        display:inline-block;
    }

    .underline:after {
        display:block;
        content: '';
        border-bottom: solid 3px #F9FBFF;  
        transform: scaleX(0);  
        transition: transform 250ms ease-in-out;
        transform-origin:100% 50%
    }
    .underline:hover:after { 
        transform: scaleX(1);
        transform-origin:100% 0;
    }

    #portfolio-span {
        font-size: 5em;
    }
</style>