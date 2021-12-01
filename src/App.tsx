import * as React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState, Dispatch } from "./store";
import { PlayerModel } from "./models/players";
import { Card, Spin, Pagination } from "antd";

const App = () => {
  const loadingState = useSelector((state: RootState) => state.loading);
  const dispatch = useDispatch<Dispatch>();
  const playersState = useSelector((state: RootState) => state.players);

  React.useEffect(() => {
    dispatch.players.getPlayers();
  }, []);

  return (
    <div className="App">
      {loadingState.models.players ? (
        <Spin className="loading" tip="Loading..." />
      ) : (
        <>
          <div className="card">
            {playersState.players.map((player: PlayerModel) => (
              <div className="site-card-border-less-wrapper">
                <Card key={player.id} style={{ width: 300 }}>
                  <h1>
                    {player.first_name} {player.last_name}
                  </h1>
                  <div>
                    <p>
                      <b>Position: </b>
                      {player.position}
                    </p>
                    <p>
                      <b>Team: </b>
                      {player.team.full_name}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          <div>
            <Pagination className='pagination' onChange={(page: number, pageSize: number) => {
              console.log(page);
              dispatch.players.getPlayers(page);
            }} defaultCurrent={1} total={50} />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
