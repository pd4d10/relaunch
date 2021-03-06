### Example

```js
<>
  <Card style={{ width: '18rem' }}>
    <CardImage position="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_166a5819530%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_166a5819530%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.6%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap" />
    <CardBody>
      <CardTitle>Card title</CardTitle>
      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
      <Button theme="primary" render={props => <a href="javascript:" {...props}>Go somewhere</a>} />
    </CardBody>
  </Card>
</>
```

### Card styles

```js
<>
  <Card bsStyle={{ text: 'white', bg: 'primary', mb: 3 }} style={{ width: '18rem' }}>
    <CardHeader>Header</CardHeader>
    <CardBody>
      <CardTitle>Primary card title</CardTitle>
      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
    </CardBody>
  </Card>
</>

<>
  <Card bsStyle={{ border: 'primary', mb: 3 }} style={{ width: '18rem' }}>
    <CardHeader>Header</CardHeader>
    <CardBody bsStyle={{ text: 'primary' }}>
      <CardTitle>Primary card title</CardTitle>
      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
    </CardBody>
  </Card>
</>

<>
  <Card bsStyle={{ text: 'center' }}>
    <CardHeader>Header</CardHeader>
    <CardBody>
      <CardTitle>Special title treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button theme="primary" render={props => <a href="javascript:" {...props}>Go somewhere</a>} />
    </CardBody>
    <CardFooter bsStyle={{ text: 'muted' }}>
      2 days ago
    </CardFooter>
  </Card>
</>
```
