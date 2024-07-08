import { Route, Routes } from 'react-router-dom'
import { Homepage } from '../pages/homepage'
import React from 'react'
import { About } from '../pages/about'

export const AppRouter: React.FC = () => {
	return (
		<Routes>
			<Route path="/" Component={Homepage}/>
			<Route path='/about' Component={About}/>
		</Routes>
	)
}