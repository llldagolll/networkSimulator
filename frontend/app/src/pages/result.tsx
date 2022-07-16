import { Center, Container } from '@mantine/core'
import type { NextPage } from 'next'

const result: NextPage = () => {
  return (
    <Center style={{ width: "100vw" }}>
      <Container >
        <h1>Welcome to nginx!</h1>
        <p>If you see this page, the nginx web server is successfully installed and
          working. Further configuration is required.</p>

        <p>For online documentation and support please refer to
          <a href="http://nginx.org/">nginx.org</a>.<br />
          Commercial support is available at
          <a href="http://nginx.com/">nginx.com</a>.</p>

        <p><em>Thank you for using nginx.</em></p>

      </Container>
    </Center>
  )
}


export default result
