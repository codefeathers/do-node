# do-node

**A lightweight promise based Node wrapper for DigitalOcean API v2**

Currently do-node only supports domain and domain records functions.

## Installation

`npm install --save do-node`

## Usage

- Get an API key from DigitalOcean.

- Add it to a `config.js` file in the same folder as your entry point like this:

```JavaScript
module.exports = {
	token: '241f24ac97abe3321b0c972d97579ace4ae38c34a709169289c6474d58d8f',
}
```

- Import it in your file:

```JavaScript
const digitalOcean = require('do-node');

digitalOcean.domain.Create({
		name: 'example.com',
		ip: '1.2.3.4',
	})
	.then(res => console.log(res))
	.catch(err => console.log(err.response.data.message));

digitalOcean.domain.Records.Update({
		name: 'example.com',
	}, 35459888)
	.then(res => console.log(res))
	.catch(err => console.log(err.response.data.message));
```

## In the browser

Use an unpkg script tag to use `do-node` from the browser.

```HTML
<script src = "https://unpkg.com/do-node">
```
