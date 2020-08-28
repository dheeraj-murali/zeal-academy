import React from 'react';

import { Home } from '../pages/Home';
import { AppProvider } from '../utils/context';

function App() {
	return (
		<AppProvider>
			<Home />
		</AppProvider>
	);
}

export default App;
