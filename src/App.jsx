import { useEffect } from "react"
import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"
import List from "./components/list/List"
import Login from "./components/Login/Login"
import Notification from "./components/notification/Notification"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./components/lib/firebase"
import { useUserStore } from "./components/lib/userStore"
import { useChatStore } from "./components/lib/chatStore"

const App = () => {

  const {currentUser, isLoading, fetchUserInfo } = useUserStore()
  const { chatId } = useChatStore()
  

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, user => {
      fetchUserInfo(user?.uid)
    })

    return () => {
      unSub()
    }
  }, [fetchUserInfo])

  if (isLoading) return <div className="loading">Loading...</div>

  return (
    <div className='container'>
      {
        currentUser ? (
          <>
          <List />
          {chatId && <Chat />}
          {chatId && <Detail />}
          </>
        ): (
        <Login />
      )
      }
      <Notification />
    </div>
  )
}

export default App