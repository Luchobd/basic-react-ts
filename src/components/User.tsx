import { useState } from "react";

interface UserInfo {
  uid: string;
  name: string;
}

export const User = () => {
  const [user, setUser] = useState<UserInfo>();

  const login = () => {
    setUser({
      uid: "ABC123",
      name: "Luis Blanco",
    });
  };

  return (
    <div className="mt-5">
      <h3>Usuario:</h3>
      <button className="btn btn-outline-primary" onClick={login}>
        Login
      </button>

      {!user ? <pre>Not Found Users</pre> : <pre>{JSON.stringify(user)}</pre>}

      {/* Se utiliza JSON.stringify para al darle click me aparezca el texto abajo. */}
    </div>
  );
};
