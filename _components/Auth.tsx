import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";

const Auth = () => {
    return (
        <div>
            <SignedOut>
                <SignInButton mode="modal">
                    <Button color="primary">
                        Sign In
                    </Button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    );
}

export default Auth;
