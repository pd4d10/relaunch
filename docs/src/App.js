import React, { Component } from 'react'
import {
  Alert,
  Button,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavbarBrand,
  NavItem,
  NavLink,
  Breadcrumb,
  BreadcrumbItem,
} from './relaunch'
import './App.css'

const alertTypes = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
]
const ButtonTypes = [...alertTypes, 'link']
const twoTypes = ['primary', 'secondary']

class App extends Component {
  render() {
    return (
      <div>
        <Navbar theme="light">
          <NavbarBrand href="/">Relaunch</NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink href="/">Link</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <Container fluid>
          <div>
            <Breadcrumb>
              <BreadcrumbItem active>Home</BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="#">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>Library</BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="#">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a href="#">Library</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>Data</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <Container>
            <Row>
              <Col>First, but unordered</Col>
              <Col order={12}>Second, but last</Col>
              <Col order={1}>Third, but first</Col>
            </Row>
            <Row>
              <Col>First, but unordered</Col>
              <Col order="last">Second, but last</Col>
              <Col order="first">Third, but first</Col>
            </Row>
          </Container>
          <div>
            {ButtonTypes.map(type => <Button type={type}>{type}</Button>)}
          </div>
          <div>
            {alertTypes.map(type => (
              <Button outline type={type}>
                {type}
              </Button>
            ))}
          </div>
          <div>
            {twoTypes.map(type => (
              <Button type={type} size="lg">
                Large button
              </Button>
            ))}
          </div>
          <div>
            {twoTypes.map(type => (
              <Button type={type} size="sm">
                Small button
              </Button>
            ))}
          </div>
          <div>
            {twoTypes.map(type => (
              <Button type={type} size="lg" block>
                Block level button
              </Button>
            ))}
          </div>
          <div>
            <Button type="primary" size="lg" active>
              Primary link
            </Button>
            <Button type="secondary" size="lg" active>
              Link
            </Button>
          </div>
          <div>
            <Button type="primary" size="lg" disabled>
              Primary button
            </Button>
            <Button type="secondary" size="lg" disabled>
              Button
            </Button>
          </div>
          <div>
            {alertTypes.map(type => (
              <Alert type={type}>A simple {type} alert—check it out!</Alert>
            ))}
          </div>
        </Container>
      </div>
    )
  }
}

export default App
