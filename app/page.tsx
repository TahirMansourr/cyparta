import AvatarAndNotification from "@/components/AvatarAndNotification";
import ProfileDetails from "@/components/ProfileDetails";
import ProfileHeaderComponent from "@/components/ProfileHeaderComponent";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = cookies();
  const access_token = cookieStore.get('access_token')?.value;
  const temp_token = `Bearer ${process.env.test_token}` 
  console.log("🚀 ~ Home ~ access_token:", access_token)
  
  const token =  `Bearer ${access_token} `
  const userProfileData = await fetch('https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/', {
    method: 'GET',
    headers: {
      'Authorization': temp_token
    }
  });

  if (!userProfileData.ok) {
    console.error("Failed to fetch user profile:", userProfileData.statusText);
    return (
      <div>Error fetching profile</div>
    );
  }

  const user = await userProfileData.json();
  console.log(user);

  return (
    <div className=" flex flex-col px-8 py-4 w-full">
        <AvatarAndNotification image = {user.image}/>
        <ProfileHeaderComponent user = {user}/>
        <ProfileDetails user = {user}/>
    </div>
  );
}
