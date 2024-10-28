import { useForm } from "react-hook-form";

const DataModal = (props) => {
    const { onSubmit } = props;
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <div className="bg-white h-screen w-full fixed bg-opacity-90 top-0 flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 h-[300px] w-[350px] border-2 bg-white p-4">
                <div className="flex justify-between">
                    <p className="text-lg">Basic Modal</p>
                    <p>X</p>
                </div>
                
                <div className="flex justify-between gap-4">
                    <label>Name:</label>
                    <input type="text" {...register("Name", { required: true })} />
                    {errors.Name && <span>This field is required</span>}
                </div>
                
                <div className="flex justify-between gap-4">
                    <label>Email:</label>
                    <input type="text" {...register("Email", { required: true })} />
                    {errors.Email && <span>This field is required</span>}
                </div>
                
                <div className="flex justify-between gap-4">
                    <label>Phone:</label>
                    <input type="text" {...register("phone", { required: true })} />
                    {errors.phone && <span>This field is required</span>}
                </div>
                
                <div className="flex justify-between gap-4">
                    <label>Website:</label>
                    <input type="text" {...register("imageurl", { required: true })} />
                    {errors.imageurl && <span>This field is required</span>}
                </div>

                <button className="bg-blue-700 rounded-lg p-2 mt-4" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default DataModal;
