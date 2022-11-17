import React from 'react';

export { HomePage } from './home';


export const LoginPage = React.lazy(()=> import('./login'))

export const CharacterPage = React.lazy(()=> import('./character'))