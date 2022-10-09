# Stock-Price-Chart-API
This project provides a Stock Price Chart along with an Express.js API which can serve the price chart in either a HTML5 canvas object or Base64 jpeg to be used in other projects or applications. 

The chart can be customised with each request by passing theming options and simple toggles for common charting tools. 

Price data is fetched from Yahoo Finance using Cheerio WebScraping but can be adapted to use any price data provider by passing data into the chart generation object in a standardised format. 

# Folder Structure
```
api
│   The Express.js API with endpoints to generate a price chart

price-chart-core
│   Typescript code for drawing the price chart canvas

test-application
│   An example & test application to conusme the API and provide simple I/O with visual demonstration
```


# API Documentation
API documentation can be found [here](https://)

# Setup & Install
- ``cd`` into ``api`` & run ```npm i```
- Copy .env.example into .env and setup relevant variables
- TODO: Finish this

# Disclaimer
This project is provided publicly for purely educational purposes to demonstrate core concepts (API canvas generation, basic 2d geometry to draw charts etc.).

<br />

### Created by [Charlie](https://github.com/Charlie-Hill) for [LondonMarket](https://github.com/LondonMarket)