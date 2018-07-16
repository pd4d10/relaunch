import React from 'react'
import { Jumbotron, Button } from '../relaunch'

export default () => (
  <Jumbotron>
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">
      This is a simple hero unit, a simple jumbotron-style component for calling
      extra attention to featured content or information.
    </p>
    <hr class="my-4" />
    <p>
      It uses utility classes for typography and spacing to space content out
      within the larger container.
    </p>
    <Button theme="primary" size="lg">
      Learn more
    </Button>
  </Jumbotron>
)
