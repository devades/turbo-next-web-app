// "use client";
// import {
//   PostgrestSingleResponse,
//   Session,
//   User,
// } from "@supabase/supabase-js";
// import {
//   useContext,
//   useState,
//   useEffect,
//   createContext,
// } from "react";
// import { createClient } from "../_utils/supabase/client";
// import { Profile } from "../_interfaces/profile.interface";
// import { useRouter } from "next/navigation";
// import { AuthState } from "../_interfaces/auth.interface";

// // create a context for authentication
// const AuthContext = createContext<AuthState>({
//   session: null,
//   user: null,
//   profile: null,
//   loading: true,
//   signOut: () => {},
// });

// export const AuthProvider = ({ children }: any) => {
//   const [user, setUser] = useState<User>();
//   const [session, setSession] = useState<Session | null>();
//   const [loading, setLoading] = useState(true);
//   const [profile, setProfile] = useState<Profile | null>(
//     null,
//   );
//   const router = useRouter();

//   const signOut = async () => {
//     const supabase = await createClient();

//     const { error } = await supabase.auth.signOut();
//     if (error) throw error;

//     router.push("/");
//     getSession();
//   };

//   const getSession = async () => {
//     const supabase = await createClient();

//     const {
//       data: { session },
//       error,
//     } = await supabase.auth.getSession();
//     if (error) throw error;
//     setSession(session);
//     setUser(session?.user);
//     setLoading(false);

//     if (session?.user && !profile) {
//       const {
//         data: profiles,
//         error,
//       }: PostgrestSingleResponse<Profile[]> = await supabase
//         .from("profiles")
//         .select("*")
//         .eq("user_id", session?.user?.id);
//       //   .returns<Profile>();
//       if (error) throw error;

//       if (profiles?.length) setProfile(profiles[0]);
//       return profiles;
//     }

//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange(
//       (_event: any, session: { user: any; }) => {
//         setSession(session);
//         setUser(session?.user);
//         setLoading(false);
//       },
//     );
//     return () => subscription.unsubscribe();
//   };

//   useEffect(() => {
//     getSession();
//   }, []);

//   const value = {
//     session,
//     user,
//     profile,
//     loading,
//     signOut,
//   };

//   // use a provider to pass down the value
//   return (
//     <AuthContext.Provider value={value}>
//       {/* Do not add loading && ... here as it breaks SSR */}
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // export the useAuth hook
// export const useAuth = () => {
//   return useContext(AuthContext);
// };
