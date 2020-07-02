import React, { useState, useEffect } from "react";
import Collections from "../../components/Colection/Collections";
import "./homepage.scss";
import { getCollection, getcollections, token } from "../../api";

function Homepage(props) {
  console.log("props :>> ", props);
    const [collections, setCollections] = useState()

  useEffect(() => {
    getData();

  }, []);
  async function getData() {
    const {data} = await getCollection ();
    setCollections(data.playlists);
  }

  console.log('collections :>> ', collections);

  return (
    <div className="content">
      <div className="content-collection">
        {collections ? (
          collections.items.map((collection, i) => (
                <Collections key={i} collection={collection} >

                </Collections>
          ))
        ) : (
          <p>Loading ..</p>
        )}
      </div>
    </div>
  );
}

export default Homepage;
