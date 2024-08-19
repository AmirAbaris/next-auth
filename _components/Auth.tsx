import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

const Auth = () => {
    return (
        <div>
            <SignedOut>
                <SignInButton mode="modal">
                    <button>
                        Sign In
                    </button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    );
}

export default Auth;
