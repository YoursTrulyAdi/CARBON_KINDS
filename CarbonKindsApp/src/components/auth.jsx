import { useState } from "react"
import { auth, googleProvider } from "../config/firebase"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"

export function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(auth?.currentUser?.email);

    const signin = async () => {
        await createUserWithEmailAndPassword(auth, email, password);
    }
    const signinGoogle = async () => {
        await signInWithPopup(auth, googleProvider);
    }

    const logout = async () => {
        await signOut(auth);
    }

    return (
        <div>
            <h1>Enter you login details...</h1>
            <input placeholder="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)
                }></input>
            <input placeholder="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)
                }></input>
            <button onClick={signin}>Sign In</button>

            <button onClick={signinGoogle}>Sign In with Google</button>

            <button onClick={logout}>Logout</button>


            {/* fetching the profile pic in google account of the user */}
            {/* <div>
                <img src={auth?.currentUser?.photoURL} alt="" />
            </div> */}
        </div>
    )
}