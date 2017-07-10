# react-with-semantic
A Simple React Boilerplate with Semantic Ui to get started learning react

## Installation 

### Clone the repo
```bash
 git clone https://github.com/kennethmervin01/react-with-semantic.git 
```
### Install Dependencies 
React Semantic Theme set-up will show on your terminal. Watch the video on this link https://semantic-ui.com/introduction/getting-started.html for more help.

```bash
 npm install
```

### Build Semantic Ui wit GULP
Go to your semantic folder then build Semantic UI by using gulp(semantic-ui-react already install gulp). 

```bash
 cd semantic 
 ../node_modules/.bin/gulp build
```

### Import semantic-ui-react and semantic.min.css
Finally you can import semantic.min.css and use semantic Ui in your app

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
