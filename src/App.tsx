
import { UserListProvider } from "app/UserListProvider"
import { ThemeProvider } from "app/theme/ThemeProvider"


function App() {

  return (
    <UserListProvider>
      <ThemeProvider>

        <Main />
      </ThemeProvider>
    </UserListProvider>
  )
}

export default App
