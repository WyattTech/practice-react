import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import UserProfile from "./components/UserProfile";
import Test from "./components/Test";

const App = () => {
  const [counter, setCounter] = useState(0); //[state, setState(designed to update the fixed state)]

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("effective code in progress!");
    document.title = `You have clicked ${counter} times`;
  }, [counter]);
  useEffect(() => {
    console.log(`Search database for ${email}`);
  }, [email]);

  // const liOne = <li key='1'>One</li>
  // const liTwo = <li key='2'>Two</li>
  // const liThree = <li key='3'>Three</li>
  // const liFour = <li key='4'>Four</li>

  const myList = [
    { id: 1, msg: "hello" },
    {
      id: 2,
      msg: "hi",
    },
    {
      id: 3,
      msg: "shalom",
    },
  ];

  // const myFancyList =
  // });

  /*useEffect(() =>{
   fetch()
   .then()
   .then
  }, [ ]);//used for fetching APIs when you need a one and done job */

  /*useEffect(() =>{
      chatApi.subscribe();
    return () => {
      chatApi.unsubscribe();
    }
  }); // A clean up function used in advance programming like example above */

  return (
    <main className="container mt-5">
      <section className="ro justify-content-center">
        <UserProfile
          name="April"
          favoriteShow="The King of Queens"
          admin={true}
        />
        <UserProfile name="Josie" favoriteShow="The Resident" admin={false} />
        <br />
        <br />
        <Test
          stringTest="April"
          numberTest={counter}
          booleanTest={true}
          undefinedTest={undefined}
          nullTest={null}
          nanTest={NaN}
          arrayTest={[" a ", " b ", " c "]}
          objectTest={{ name: "Josie", age: 42 }}
          sayHello={() =>
            setTimeout(() => {
              console.log("It never rains in Southern California!");
            }, 4500)
          }
        />
        <br />
        <br />
        <h1>State in React is: {counter} </h1>
        <button onClick={() => setCounter(counter + 1)}>
          Click me to Increment!
        </button>
        <br />
        <br />

        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <br />

        <br />
        <br />

        <h2>You have clicked {counter} times</h2>

        <br />
        <br />
        <div className="col-md-4">
          <ul className="list-group">
            {myList.map((val) => (
              <li
                className="col-md list-group-item"
                key={`my-fancy-item-${val.id}`}
              >
                <span className="text-primary">{val.msg}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <br />
      <br />
    </main>
  );
};

export default App;
