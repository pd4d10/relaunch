
### Example

Badges scale to match the size of the immediate parent element.

```js
<>
  <h1>
    Example heading <Badge>New</Badge>
  </h1>
  <h2>
    Example heading <Badge>New</Badge>
  </h2>
  <h3>
    Example heading <Badge>New</Badge>
  </h3>
  <h4>
    Example heading <Badge>New</Badge>
  </h4>
  <h5>
    Example heading <Badge>New</Badge>
  </h5>
  <h6>
    Example heading <Badge>New</Badge>
  </h6>
</>
```

Badges can be used as part of links or buttons to provide a counter.

```js
<>
  <Button theme="primary">
    Notifications <Badge theme="light">4</Badge>
  </Button>{' '}
  <Button theme="primary">
    Profile <Badge theme="light">9</Badge>
  </Button>
</>
```

### Contextual variations

Specify `theme` to change the appearance of a badge.

```js
<>
  <Badge theme="primary">Primary</Badge>{' '}
  <Badge theme="secondary">Secondary</Badge>{' '}
  <Badge theme="success">Success</Badge> <Badge theme="danger">Danger</Badge>{' '}
  <Badge theme="warning">Warning</Badge> <Badge theme="info">Info</Badge>{' '}
  <Badge theme="light">Light</Badge> <Badge theme="dark">Dark</Badge>
</>
```

### Pill badges

Add `pill` to make badges more rounded.
```js
<>
  <Badge theme="primary" pill>
    Primary
  </Badge>{' '}
  <Badge theme="secondary" pill>
    Secondary
  </Badge>{' '}
  <Badge theme="success" pill>
    Success
  </Badge>{' '}
  <Badge theme="danger" pill>
    Danger
  </Badge>{' '}
  <Badge theme="warning" pill>
    Warning
  </Badge>{' '}
  <Badge theme="info" pill>
    Info
  </Badge>{' '}
  <Badge theme="light" pill>
    Light
  </Badge>{' '}
  <Badge theme="dark" pill>
    Dark
  </Badge>
</>
```

### Links

```js
<>
  <Badge
    theme="primary"
    render={props => (
      <a href="javascript:" {...props}>
        Primary
      </a>
    )}
  />{' '}
  <Badge
    theme="secondary"
    render={props => (
      <a href="javascript:" {...props}>
        Secondary
      </a>
    )}
  />{' '}
  <Badge
    theme="success"
    render={props => (
      <a href="javascript:" {...props}>
        Success
      </a>
    )}
  />{' '}
  <Badge
    theme="danger"
    render={props => (
      <a href="javascript:" {...props}>
        Danger
      </a>
    )}
  />{' '}
  <Badge
    theme="warning"
    render={props => (
      <a href="javascript:" {...props}>
        Warning
      </a>
    )}
  />{' '}
  <Badge
    theme="info"
    render={props => (
      <a href="javascript:" {...props}>
        Info
      </a>
    )}
  />{' '}
  <Badge
    theme="light"
    render={props => (
      <a href="javascript:" {...props}>
        Light
      </a>
    )}
  />{' '}
  <Badge
    theme="dark"
    render={props => (
      <a href="javascript:" {...props}>
        Dark
      </a>
    )}
  />
</>
```
