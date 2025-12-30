import Header from "../Header"
import Footer from "../Footer"
import { Outlet } from "react-router-dom"
import { useSelector , useDispatch } from "react-redux"
import { useEffect } from "react"
import { getBusinessToClient } from "../../redux/actions/businessActions"
import { getAllPagesByBusinessId } from "../../redux/actions/PageActions"
const Layout = () => {
  const dispatch = useDispatch()
  const { business, loading, error } = useSelector((state) => state.businessReducer)
  const { pagesByBusinessId, loading: pagesLoading, error: pagesError } = useSelector((state) => state.pageReducer)
  useEffect(() => {
    dispatch(getBusinessToClient())
  }, [dispatch])

  useEffect(() => {
    if(business?._id){
      dispatch(getAllPagesByBusinessId(business._id))
    }
  }, [business?._id, dispatch])

  if(loading || pagesLoading) return <div>Loading...</div>
  if(error || pagesError) return <div>Error: {error || pagesError}</div>
  if(!business) return <div>No business found</div>
  if(!pagesByBusinessId) return <div>No pages found</div>

  console.log(pagesByBusinessId)
  
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
