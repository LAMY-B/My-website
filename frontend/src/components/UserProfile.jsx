import { useParams } from "react-router-dom";

function UserProfile() {
  const { name } = useParams();

  return <h1>Welcome to Mobile Legends, LORD{name}</h1>;
}

export default UserProfile;
