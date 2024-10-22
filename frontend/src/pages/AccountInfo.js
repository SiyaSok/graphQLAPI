/** @format */
import { useLoaderData } from "react-router-dom";
// import { AuthContext } from "../Context/AuthContext";
// import { useContext } from "react";
import { GraphQLRequest } from "../components/util/GraphQLRequest";
import Loader from "../components/util/Loader";

function AccountInfo() {
  // const { onlogedIn } = useContext(AuthContext);

  // Pass the userId to the loader
  const AccountInfo = useLoaderData();

  return (
    <>
      {!AccountInfo && <Loader />}
      {AccountInfo && (
        <div className='max-w-lg mx-auto py-8 px-4 bg-white shadow-md rounded-lg text-center'>
          <img
            className='h-24 w-24 rounded-full border-2 border-gray-300 mx-auto'
            src={AccountInfo.userImage}
            alt='Profile'
          />
          <div className='mt-4'>
            <p className='text-2xl font-bold text-gray-900'>
              {AccountInfo.firstName} {AccountInfo.lastName}
            </p>
            <p className='text-sm text-gray-600'>{AccountInfo.company}</p>
          </div>
          <div className='mt-6 space-y-2'>
            <p className='text-sm text-gray-500'>
              <span className='font-medium'>Phone: </span>
              {AccountInfo.phoneNumber}
            </p>
            <p className='text-sm text-gray-500'>
              <span className='font-medium'>Email: </span>
              {AccountInfo.email}
            </p>
            <p className='text-sm text-gray-500'>
              <span className='font-medium'>Website: </span>
              <a
                href={AccountInfo.website}
                className='text-blue-500 hover:underline'>
                {AccountInfo.website}
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

// Update the profileLoader to accept userId
export const profileLoader = async ({ params }) => {
  const { userId } = params; // Assuming you're passing it via params
  const data = JSON.stringify({
    query: ` query {
    getUser(userID: "${userId}") {
      _id
      email
      firstName
      lastName
      password
      phoneNumber
      userImage
      website
      company
    }
  }`,
  });

  try {
    const response = await GraphQLRequest(data);
    return response.data.data.getUser;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default AccountInfo;
