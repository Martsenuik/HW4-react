import { Statistics } from "./components/Statistics";
import data from "../data.json";
import { FriendList } from "./components/FriendList";
import friends from "../friend.json";

function App() {
  return (
    <>
      <Statistics data={data} />
      <FriendList friends={friends} />
    </>
  );
}

export default App;
