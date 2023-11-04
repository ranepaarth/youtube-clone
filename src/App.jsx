import React from 'react'
import { createBrowserRouter,RouterProvider,Route,createRoutesFromElements } from 'react-router-dom'

import {RootLayout,Feed,VideoDetail,ChannelDetail,SearchFeed} from './components/routes'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index exact element={<Feed />}/>
      <Route path='/video/:id' exact element={<VideoDetail />}/>
      <Route path='/channel/:id' exact element={<ChannelDetail />}/>
      <Route path='/search/:searchTerm' exact element={<SearchFeed />}/>
    </Route>
  )
)
const App = () => {
  return (
    <RouterProvider router={router}>App</RouterProvider>
  )
}

export default App