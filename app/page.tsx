import AvatarAndNotification from "@/components/AvatarAndNotification";
import ProfileDetails from "@/components/ProfileDetails";
import ProfileHeaderComponent from "@/components/ProfileHeaderComponent";


export default async function Home() {
  const token =  `Bearer ${process.env.test_token} `
  const userProfileData = await fetch('https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/', {
    method: 'GET',
    headers: {
      'Authorization': token
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
    <div className=" flex flex-col p-8 w-full">
      <AvatarAndNotification image = {user.image}/>
      <ProfileHeaderComponent user = {user}/>
      <ProfileDetails user = {user}/>
    </div>
  );
}
