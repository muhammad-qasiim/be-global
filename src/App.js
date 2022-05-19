
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./Pages/Home";
import UserAuth from "./Pages/UserAuth";
import Explore from "./Pages/Explore";
import Create from "./Pages/Create";
import CreateItem from "./Pages/CreateItem";
import Transfer from "./Pages/Transfer";
import Collection from "./Pages/Collection";
import SingleNFT from "./Pages/SingleNFT";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/user-authentication" element={<UserAuth />} />
          <Route path="explore" element={<Explore />} />
          <Route path="create" element={<Create />} />
          <Route path="create_item" element={<CreateItem />} />
          <Route path="collection" element={<Collection />} />
          <Route path="single_nft" element={<SingleNFT />} />
          <Route path="transfer_nft" element={<Transfer />} />
        </Route>
      </Routes>


    </>
  );
}

export default App;
