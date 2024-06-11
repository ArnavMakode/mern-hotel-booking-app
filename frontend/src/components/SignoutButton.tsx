import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { FiLogOut } from "react-icons/fi";

const SignoutButton = () => {
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();

  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      showToast({ message: "Signed Out!", type: "SUCCESS" });
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };

  return (
    <div className="bg-white hover:bg-gray-100 rounded-2xl flex px-3 items-center text-blue-600 font-bold">
      <FiLogOut className="mr-2" />
      <button onClick={handleClick}>Sign Out</button>
    </div>
  );
};
export default SignoutButton;
