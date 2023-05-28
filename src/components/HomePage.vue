<script lang="ts">
export default {
    data() {
        return {
            variant: 'info'
        }
    }
}
</script>

<template>
    <div class="top-navbar">
        <a href="#tech" class="underline">tech</a>
        <a href="#work" class="underline">work</a>
    </div>

    <div class="side-panel">
        <img src="../assets/image2.jpeg" id="display-pic" />
        <div class="summary">
            <h2>Rosette Tienzo</h2>
            <p>
                a full-stack Javascript developer based in Auckland, New Zealand.
            </p>
            <p>
                currently working at <a href="https://roamdigital.com/">Roam Digital</a>
            </p>
        </div>

        <div class="socials">
            <a href="https://www.linkedin.com/in/rosette-tienzo-m/" target="_blank" class="underline">linkedin</a>
            <a href="https://www.instagram.com/tienzochi/" target="_blank" class="underline">instagram</a>
            <a href="https://github.com/tienzochi" target="_blank" class="underline">github</a>
        </div>
    </div>


    <div class="content">
        <h1>tech.</h1>
        <br>

        <p>
            6 years of web application development experience with Javascript stack, backend tools, different platforms, and
            databases.
        </p>
        <br>

        <b-container class="bv-example-row bv-example-row-flex-cols">
            <h5>Programming languages</h5>
            <br>
            <b-row align-v="start">
                <b-col>
                    Node.js
                    <b-progress :value=90 :variant="variant" class="m-25 progressbar"></b-progress>
                </b-col>
                <b-col>
                    ReactJS
                    <b-progress :value=70 :variant="variant" class="m-25"></b-progress>
                </b-col>
                <b-col>
                    VanillaJS
                    <b-progress :value=70 :variant="variant" class="m-25"></b-progress>
                </b-col>
            </b-row>
            <b-row align-v="start">
                <b-col>
                    Vue
                    <b-progress :value=20 :variant="variant" class="m-25"></b-progress>
                </b-col>
                <b-col>
                    Rust
                    <b-progress :value=5 :variant="variant" class="m-25"></b-progress>
                </b-col>
                <b-col>
                    Java
                    <b-progress :value=40 :variant="variant" class="m-25"></b-progress>
                </b-col>
            </b-row>
            <b-row align-v="start">
                <b-col></b-col>
                <b-col>
                    Angular
                    <b-progress :value=30 :variant="variant" class="m-25"></b-progress>
                </b-col>
                <b-col>
                    Python
                    <b-progress :value=40 :variant="variant" class="m-25"></b-progress>
                </b-col>
                <b-col></b-col>
            </b-row>

            <br>
            <br>
            <br>

            <h5>Platform and Tools</h5>
            <br>
            <b-row align-v="start">
                <b-col>
                    AWS
                    <b-progress :value=70 :variant="variant" class="m-25"></b-progress>
                </b-col>
                <b-col>
                    Jira
                    <b-progress :value=60 :variant="variant" class="m-25"></b-progress>
                </b-col>
                <b-col>
                    Trello
                    <b-progress :value=70 :variant="variant" class="m-25"></b-progress>
                </b-col>
            </b-row>
            <b-row align-v="start">
                <b-col>
                    Git
                    <b-progress :value=70 :variant="variant" class="m-25"></b-progress>
                </b-col>
                <b-col>
                    Yarn
                    <b-progress :value=70 :variant="variant" class="m-25"></b-progress>
                </b-col>
                <b-col>
                    NPM
                    <b-progress :value=60 :variant="variant" class="m-25"></b-progress>
                </b-col>
            </b-row>
            <b-row align-v="start">
                <b-col></b-col>
                <b-col>
                    GraphQL
                    <b-progress :value=70 :variant="variant" class="m-25"></b-progress>
                </b-col>
                <b-col>
                    Rest API
                    <b-progress :value=70 :variant="variant" class="m-25"></b-progress>
                </b-col>
                <b-col></b-col>
            </b-row>

            <br>
            <br>
            <br>

            <h5>Databases</h5>
            <br>
            <b-row align-v="start">
                <b-col>
                    PostgreSQL
                    <b-progress :value=70 :variant="variant" class="m-25"></b-progress>
                </b-col>
                <b-col>
                    MySQL
                    <b-progress :value=50 :variant="variant" class="m-25"></b-progress>
                </b-col>
                <b-col>
                    MongoDB
                    <b-progress :value=70 :variant="variant" class="m-25"></b-progress>
                </b-col>
            </b-row>
            <b-row align-v="start">
                <b-col>
                    DynamoDB
                    <b-progress :value=70 :variant="variant" class="m-25"></b-progress>
                </b-col>
                <b-col>
                    Couchbase
                    <b-progress :value=40 :variant="variant" class="m-25"></b-progress>
                </b-col>
                <b-col>
                    Elasticsearch
                    <b-progress :value=50 :variant="variant" class="m-25"></b-progress>
                </b-col>
            </b-row>
        </b-container>

        <br>
        <br>
        <br>
        <br>

        <h1>upskilling.</h1>
        <br>

        <p>I finished a degree of Bachelor of Science in Computer Science from the University of Santo Tomas, Philippines
        </p>
        <p>and from there, I continued learning by getting myself certified on some certifications:</p>
        <br>
        <b-container>
            <b-row class="certifications">
                <b-col>
                    <a href="https://odyssey.apollographql.com/certifications/c4dc14fb-c5d0-4af9-b357-1e24757d460d"
                        class="underline">GraphQL Developer Associate</a>
                </b-col>
                <b-col>
                    <a href="https://www.credly.com/badges/6c411c6e-5dc7-4369-8c4e-eca5710149c2?source=linked_in_profiled"
                        class="underline">AWS Cerified Solutions Architect</a>
                </b-col>
                <b-col>
                    <a href="https://www.credly.com/badges/f02ec245-9436-4403-b2a6-555e3f7485cb?source=linked_in_profile"
                        class="underline">AWS Certified Cloud Practicioner</a>

                </b-col>
            </b-row>
        </b-container>

    </div>
</template>

<style scoped>

/* The sidebar menu */
.side-panel {
    height: 100%;
    /* Full-height: remove this if you want "auto" height */
    width: 340px;
    /* Set the width of the sidebar */
    position: fixed;
    /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1;
    /* Stay on top */
    top: 0;
    /* Stay at the top */
    left: 0;
    background-color: #F9FBFF;
    overflow-x: hidden;
    /* Disable horizontal scroll */

    text-align: center;
}

#display-pic {
    max-height: 460px;
    max-width: 360px;
}

.summary {
    margin-top: 3vh;
    flex-direction: column;
    justify-content: space-between;
}

.socials {
    padding: 10px;
    text-align: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: inherit;
}

.socials a {
    text-decoration: none;
    padding: 10px;
    color: #213547;
}

.content {
    margin-left: 340px;
    text-align: left;
    color: #F9FBFF;
    text-align: center;
    padding: 10px;
}

/* The navigation bar */
.top-navbar {
    margin-left: 340px;
    padding: 20px;
    top: 0;
    /* Position the navbar at the top of the page */
}

/** top-nav animation */

.underline {
    overflow: hidden;
    color: #F9FBFF;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    position: relative;
    text-decoration: none;
    display: inline-block;
}

.underline:after {
    display: block;
    content: '';
    border-bottom: solid 3px #F9FBFF;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    transform-origin: 100% 50%
}

.underline:hover:after {
    transform: scaleX(1);
    transform-origin: 100% 0;
}

.socials .underline:after {
    border-bottom: solid 3px #213547;
}

.certifications .underline:after {
    border-bottom:  solid 3px #F9FBFF;
}

a {
    text-decoration: none;
    color: inherit
}</style>