import { Route, Routes } from 'react-router-dom'
import { Homepage } from '../pages/homepage'
import React from 'react'

export const AppRouter: React.FC = () => {
	return (
		<Routes>
			<Route path="/" Component={Homepage}/>
		</Routes>
	)
}