import { Button, Center, Container, Heading, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import Arweave from 'arweave';
import { FcAnswers, FcBbc, FcGoogle } from 'react-icons/fc';
import Navbar from '../common/Navbar';
import { useAuth } from '../lib/auth';

const arweave = Arweave.init({
  host: '127.0.0.1',
  port: 1984,
  protocol: 'http'
});

const signin = () => {
  const { auth, siginWithGoogle, } = useAuth();
  const router = useRouter();

  if (auth) {
    router.push((router.query.next as string) || '/');
  }

  return (
    <>
    <Navbar />
    <Container>
      <Center mt={10}>
        <VStack spacing="4">
          <Heading fontSize="3xl" mb={2}>
            Hello, Welcome to the iMock App!!
          </Heading>
          <Heading>
   
    <title>Hello world</title>
    <script src="https://unpkg.com/arweave/bundles/web.bundle.js"></script>
    <script>
    const arweave = Arweave.init();
    arweave.network.getInfo().then(console.log);
    </script>
    </Heading>
          <Button leftIcon={<FcGoogle />} onClick={() => siginWithGoogle()}>
            Sign In with Google
          </Button>
          <Button leftIcon={<FcBbc />} onClick={() => window.open("https://arconnect.io")}>
            Download Arconnect
          </Button>
        </VStack>
      </Center>
    </Container>
  </>
  );
};

export default signin;
