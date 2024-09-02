import AvatarAndNotification from "@/components/AvatarAndNotification";
import ProfileDetails from "@/components/ProfileDetails";
import ProfileHeaderComponent from "@/components/ProfileHeaderComponent";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = cookies();
  const access_token = cookieStore.get('access_token')?.value; 
  const token =  `Bearer ${access_token} `
  const userProfileData = await fetch('https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/', {
    method: 'GET',
    headers: {
      'Authorization': token
    }
  });

  if (!userProfileData.ok) {
    console.error("Failed to fetch user profile:", userProfileData.statusText);
    return (
      <div className=" w-full h-screen flex justify-center items-center text-lg font-bold">
        <div className=" flex flex-col">
            <p>Error fetching profile , try signing in again. </p>
            <p>  If you still keep getting the error after signing In, there are some issues sometimes with the API, please try agian later</p>
        </div>
        </div>
    );
  }

  const user = await userProfileData.json();
  return (
    <div className=" flex flex-col px-8 py-4 w-full">
        <AvatarAndNotification image = {user.image}/>
        <ProfileHeaderComponent refreshToken = {access_token} user = {user}/>
        <ProfileDetails user = {user}/>
    </div>
  );
}
