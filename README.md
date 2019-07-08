<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better please fork the repo and create a pull request or simple open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->





<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for build-url, contributors-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Build Status][build-shield]][build-url]
[![Contributors][contributors-shield]][contributors-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/cybertec-postgresql/rjsf-material-ui">
    <img src="material-ui-logo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">rjsf-material-ui</h3>

  <p align="center">
    Material-ui theme, fields and widgets for `react-jsonschema-form`.
    <br />
    <a href="https://github.com/cybertec-postgresql/rjsf-material-ui"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://cybertec-postgresql.github.io/rjsf-material-ui/">View Playground</a>
    ·
    <a href="https://github.com/cybertec-postgresql/rjsf-material-ui/issues">Report Bug</a>
    ·
    <a href="https://github.com/cybertec-postgresql/rjsf-material-ui/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project

[![rjsf-material-ui Screen Shot][product-screenshot]](https://cybertec-postgresql.github.io/rjsf-material-ui)

Export `material-ui` theme, fields and widgets for `react-jsonschema-form`.

### Built With
* [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form/)
* [Material-ui](https://material-ui.com/)
* [Typescript](https://www.typescriptlang.org/)



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
You have to add as dependency `@material-ui/core`, `@material-ui/icons` and `@material-ui/lab`.
```sh
yarn add @material-ui/core @material-ui/icons @material-ui/lab
```

### Installation
```sh
yarn add rjsf-material-ui
```



<!-- USAGE EXAMPLES -->
## Usage

```javascript
import { withTheme } from "react-jsonschema-form";
import { Theme as MuiTheme } from "rjsf-material-ui";

const Form = withTheme(MuiTheme);
```
or
```javascript
import MuiForm from "rjsf-material-ui";
```


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://cybertec-postgresql.github.io/rjsf-material-ui/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Cybertec TEAM - [@postgressupport](https://twitter.com/postgressupport) - office@cybertec.at

Project Link: [https://cybertec-postgresql.github.io/rjsf-material-ui](https://cybertec-postgresql.github.io/rjsf-material-ui)




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[build-shield]: https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square
[build-url]: #
[contributors-shield]: https://img.shields.io/badge/contributors-1-orange.svg?style=flat-square
[contributors-url]: https://github.com/cybertec-postgresql/rjsf-material-ui/graphs/contributors
[license-shield]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: https://choosealicense.com/licenses/mit
[product-screenshot]: https://raw.githubusercontent.com/cybertec-postgresql/rjsf-material-ui/master/screenshot.png
