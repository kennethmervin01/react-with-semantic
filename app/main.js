import 'babel-polyfill'
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
