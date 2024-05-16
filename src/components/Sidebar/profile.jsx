import { ProfileContainer } from "./style";
import noImg from "../../assets/images/noUser.webp";

export const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileContainer.Image src={noImg} />
      <div>
        <ProfileContainer.Name>Nurmamatov Nodirbek</ProfileContainer.Name>
        <ProfileContainer.Email>nodirjon0927@gmail.com</ProfileContainer.Email>
      </div>
    </ProfileContainer>
  );
};

export default Profile;
