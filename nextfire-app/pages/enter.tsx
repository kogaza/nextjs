import React, { useContext } from 'react'
import { UserContext } from '../lib/context';
import { auth, googleAuthProvider } from '../lib/firebase';

export default function EnterPage() {
    const { user, username } = useContext(UserContext)

    // 1. user signed out <SignInButton />
    // 2. user signed in, but missing username <UsernameForm />
    // 3. user signed in, has username <SignOutButton />
    return (
        <main>
            {user ?
                !username ? <UsernameForm /> : <SignOutButton />
                :
                <SignInButton />
            }

        </main>
    )
}

function SignInButton() {
    const signInWithGoogle = async () => {
        await auth.signInWithPopup(googleAuthProvider)
    }

    return (
        <button className="btn-google" onClick={signInWithGoogle}>
            <img src={'/google.png'} /> Sing in with Google
        </button>
    )
}

function SignOutButton() {
    return <button onClick={() => auth.signOut()}>Sing Out</button>
}

function UsernameForm() {
    return (
        <>
        </>
    )
}
