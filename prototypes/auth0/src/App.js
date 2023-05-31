import LoginButton from "./components/LoginButton"
import LogoutButton from "./components/LogoutButton"
import { useAuth0 } from '@auth0/auth0-react'


function App() {
  const { user } = useAuth0();
  console.log(user)
  return (
    <main className="column">
      <h1>Auth0 Login</h1>
      <div>
        
        {user?.nickname && <h3>{user.nickname}</h3>}
      </div>
      <LoginButton />
      <LogoutButton />
    </main>

  )
}

export default App;
