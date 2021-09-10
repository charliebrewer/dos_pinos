import { createContext } from 'react';
import Store from './Store';

const StoreContext = createContext<Store>();

export default StoreContext;
