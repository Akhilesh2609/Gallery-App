import React, { useState } from 'react';
import { IconButton, Input, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody, Button } from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';

const UserLoginAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    console.log('Login button clicked');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <IconButton color="blue.200" icon={<FaUser/>} aria-label="Login" variant="ghost" />
      </PopoverTrigger>
      <PopoverContent  w="6cm" h="6cm">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <h2>User Login Account</h2>
          <form>
            <div>
              <label>Email:</label>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label>Password:</label>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button colorScheme="blue" mt={4} onClick={handleLogin}>
              Login
            </Button>
          </form>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default UserLoginAccount;
