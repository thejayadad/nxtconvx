

##CREATE APP
- clean up the app
- update the pacakge.json

##DATABASE AND AUTHENICATION
- convex vdocs
- clerk docs
- providers.tsx

```
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

export function Providers({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return(
        <ClerkProvider publishableKey="pk_test_...">
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
         {children}
        </ConvexProviderWithClerk>
      </ClerkProvider>
    )
}
```

- setup convex object
```
const convex = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL as string
);

import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";


const convex = new ConvexReactClient(
    process.env.NEXT_PUBLIC_CONVEX_URL as string
  );
export function Providers({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return(
        <ClerkProvider publishableKey="pk_test_...">
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
         {children}
        </ConvexProviderWithClerk>
      </ClerkProvider>
    )
}
```
- add publishable key test it out
