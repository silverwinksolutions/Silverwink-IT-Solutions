import React from 'react';
import { useForm } from 'react-hook-form';

const AddEmployee = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = (data) => {
    console.log('Employee Added:', data);
    reset();
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1605902711622-cfb43c4437d5')` }} // optional bg image
    >
      <div className="w-full max-w-xl p-6 backdrop-blur-md bg-white/10 border border-white/30 rounded-2xl shadow-2xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-white drop-shadow">Add New Employee</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="block mb-1 font-medium text-white">Full Name <span className='text-red-500'>*</span></label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 bg-white/80 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Employee Name"
            />
            {errors.name && (
              <p className="text-sm text-red-300 font-semibold mt-1 animate-pulse">
                ⚠ {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-white">Email<span className='text-red-500'>*</span></label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-2 bg-white/80 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Employee Email"
            />
            {errors.email && (
              <p className="text-sm text-red-300 font-semibold mt-1 animate-pulse">
                ⚠ {errors.email.message}
              </p>
            )}
          </div>

          {/* Position */}
          <div>
            <label className="block mb-1 font-medium text-white">Position <span className='text-red-500'>*</span></label>
            <input
              type="text"
              {...register("position", { required: "Position is required" })}
              className="w-full px-4 py-2 bg-white/80 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Role in Company"
            />
            {errors.position && (
              <p className="text-sm text-red-300 font-semibold mt-1 animate-pulse">
                ⚠ {errors.position.message}
              </p>
            )}
          </div>

          {/* Department */}
          <div>
            <label className="block mb-1 font-medium text-white">Department<span className='text-red-500'>*</span></label>
            <select
              {...register("department", { required: "Select a department" })}
              className="w-full px-4 py-2 bg-white/80 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select</option>
              <option value="Tech">Tech</option>
              <option value="HR">HR</option>
              <option value="Sales">Sales</option>
              <option value="Finance">Finance</option>
            </select>
            {errors.department && (
              <p className="text-sm text-red-300 font-semibold mt-1 animate-pulse">
                ⚠ {errors.department.message}
              </p>
            )}
          </div>

          {/* Joining Date */}
          <div>
            <label className="block mb-1 font-medium text-white">Joining Date<span className='text-red-500'>*</span></label>
            <input
              type="date"
              {...register("joiningDate", { required: "Joining date is required" })}
              className="w-full px-4 py-2 bg-white/80 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.joiningDate && (
              <p className="text-sm text-red-300 font-semibold mt-1 animate-pulse">
                ⚠ {errors.joiningDate.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            disabled={isSubmitting}
            className="w-full bg-zinc-700 hover:cursor-pointer disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded-lg hover:bg-black transition-all duration-300"
          >
            {isSubmitting ? 'Adding...' : 'Add Employee'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
