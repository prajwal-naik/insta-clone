// import { getProviders, signIn as signIntoProvider } from "next-auth/react";

// function signIn({ providers }) {

//     console.log("Providers: ", providers);

//     return (
//         <>
//             {
                
//                 Object.values(providers).map((provider) => (
//                     <div key={provider.name}>
//                         <button onClick={() => signIntoProvider(provider.id)}>
//                             Sign in with {provider.name}
//                         </button>
//                     </div>
//                 ))
//             }
//         </>
//     )
// }

// export async function getServerSideProps(){
//     const providers = await getProviders();

//     return {
//         props: {
//             providers
//         },
//     };
// }



import React from "react";
import { providers as getProviders, signIn } from "next-auth/react";

function signin({ providers }) {

    

  return (
    <>
      {
      Object.values(providers).map((provider) => (
          
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
};

export async function getInitalProps(context) {
  return {
    providers: await getProviders(context),
  };
}

export default signin;
