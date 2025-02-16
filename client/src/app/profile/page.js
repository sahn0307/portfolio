'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth,  } from '../context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Profile() {
  const { user, logout, fetchUserData } = useAuth();
  const [collectionValue, setCollectionValue] = useState(0);
  const [profitLoss, setProfitLoss] = useState(0);
  const router = useRouter();

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  
  useEffect(() => {
    if (user) {
      fetchCollectionValue(user.id);
      fetchProfitLoss(user.id);
    }
  }, [user]);

  const fetchCollectionValue = async (userId) => {
    try {
      const response = await fetch(`/api/v1/user-cards/value?user_id=${userId}`);
      const data = await response.json();
      setCollectionValue(data.value);
    } catch (error) {
      toast.error('Error fetching collection value:', error);
    }
  };

  const fetchProfitLoss = async (userId) => {
    try {
      const response = await fetch(`/api/v1/transactions/value?user_id=${userId}`);
      const data = await response.json();
      setProfitLoss(data.profitLoss);
    } catch (error) {
      toast.error('Error fetching profit/loss:', error);
    }
  };

  const handleEditProfile = () => {
    // Navigate to the edit profile page
    router.push('/profile/edit');
  };

  const handleDeleteProfile = async () => {
    try {
      await fetch(`/api/v1/users/${user.id}`, {
        headers: {
          'X-CSRF-TOKEN': getCookie('csrf_access_token'),
        },
        method: 'DELETE',
      });
      logout();
      router.push('/');
    } catch (error) {
      toast.error('Error deleting profile:', error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg leading-6 font-medium text-gray-900">Profile Details</h2>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Username</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.username}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.email}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Collection Value</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${collectionValue.toFixed(2)}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Lifetime Profit/Loss</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${profitLoss.toFixed(2)}</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="mt-8">
        <button onClick={handleEditProfile} className="px-4 py-2 bg-blue-500 text-white rounded mr-4">
          Edit Profile
        </button>
        <button onClick={handleDeleteProfile} className="px-4 py-2 bg-red-500 text-white rounded">
          Delete Profile
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}