const UserProfile = ({ params }: any) => {
  return <div className="text-4xl">UserProfile 
    <span className="p-2 rounded bg-orange-500 text-black">{params.id}</span>
  </div>;
};

export default UserProfile;
