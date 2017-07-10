# react-with-semantic
A Simple React Boilerplate with Semantic Ui to get started learning react

## Installation 

### Clone the repo
```bash
 git clone https://github.com/kennethmervin01/react-with-semantic.git 
```
### Install Dependencies 
Note: React Semantic Theme set-up will automatically show on your terminal after all node modules are intalled. Watch the video on this link https://semantic-ui.com/introduction/getting-started.html for more help.

```bash
 npm install
```

### Build Semantic Ui wit GULP
Go to your semantic folder then build Semantic UI by using gulp(semantic-ui-react already install gulp). 

```bash
 cd semantic 
 ../node_modules/.bin/gulp build
```

### Test
In your root directory of your app, run the server script(app will run in webpack-dev-server)

```bash
 npm run server
```
Then visit http://localhost:8081. You will see two button using semantic ui.


### Finally Check main.js in app folder to see how it works.
main.js

```jsx
import React from 'react'
import { render } from 'react-dom'
import { Segment, Button } from 'semantic-ui-react'
import '../semantic/dist/semantic.min.css'

const HelloWorld = () => (
	<Segment>
		<Button primary>Hello</Button>
		<Button secondary>World</Button>
	</Segment>
)

render(<HelloWorld />, document.getElementById('app'))

```
