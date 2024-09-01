'use client'
import React, { useState } from 'react'

const UpdateProfileForm = ({ onClose }: { onClose: () => void }) => {
    const [formValue, setFormValues] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        bio: ''
    })
    const [error, setError] = useState<string | null>(null);

    const token = `Bearer ${process.env.NEXT_PUBLIC_TEST_TOKEN_UPDATE}`;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch('https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/', {
                method: "PATCH",
                body: JSON.stringify(formValue),
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                if (errorData.detail) {
                    setError(errorData.detail);
                } else if (errorData.errors) {
                    setError(Object.values(errorData.errors).join(' '));
                } else {
                    setError('An unexpected error occurred.');
                }
                return;
            }
            console.log(await response.json());
            onClose();

        } catch (error: any) {
            setError('An unexpected error occurred.');
            console.log(error.message);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>

            <form onSubmit={handleSubmit} className="relative z-10">
                <section className='flex flex-col w-[500px] h-[500px] rounded-md shadow-sm border bg-white p-5'>
                    <button 
                        type="button" 
                        onClick={onClose} 
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    >
                        &times; 
                    </button>
                    <div>
                        <label>First Name</label>
                        <input
                            type='text'
                            value={formValue.first_name}
                            onChange={(e) => setFormValues((prev) => ({ ...prev, first_name: e.target.value }))}
                            className="w-full border p-2 rounded-md"
                        />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input
                            type='text'
                            value={formValue.last_name}
                            onChange={(e) => setFormValues((prev) => ({ ...prev, last_name: e.target.value }))}
                            className="w-full border p-2 rounded-md"
                        />
                    </div>
                    <div>
                        <label>Email Address</label>
                        <input
                            type='email'
                            value={formValue.email}
                            onChange={(e) => setFormValues((prev) => ({ ...prev, email: e.target.value }))}
                            className="w-full border p-2 rounded-md"
                        />
                    </div>
                    <div>
                        <label>Phone</label>
                        <input
                            type='text'
                            value={formValue.phone}
                            onChange={(e) => setFormValues((prev) => ({ ...prev, phone: e.target.value }))}
                            className="w-full border p-2 rounded-md"
                        />
                    </div>
                    <div>
                        <label>Bio</label>
                        <input
                            type='text'
                            value={formValue.bio}
                            onChange={(e) => setFormValues((prev) => ({ ...prev, bio: e.target.value }))}
                            className="w-full border p-2 rounded-md"
                        />
                    </div>
                    <button type="submit" className="mt-4 bg-black text-white p-2 rounded-md">Save</button>
                    {error && <div className="mt-4 text-red-500">{error}</div>}
                </section>
            </form>
        </div>
    )
}

export default UpdateProfileForm
