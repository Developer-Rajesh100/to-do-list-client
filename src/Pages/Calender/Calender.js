import React, { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { useForm } from "react-hook-form";

const Calender = () => {
    const [task, setTask] = useState();

    let footer = <p>Please pick a day.</p>;
    if (task) {
        footer = <p>You picked {format(task, "PP")}.</p>;
    }
    // REACT HOOK FORM
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div>
            {/* <DayPicker
                mode="single"
                selected={task}
                onSelect={setTask}
                footer={footer}
            /> */}
            <form
                className="flex justify-center h-screen items-center"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="text-center">
                    <input
                        className="mb-2 px-5 py-2 rounded-lg drop-shadow-md"
                        type="text"
                        placeholder="Title"
                        {...register("title")}
                    />{" "}
                    <br />
                    <input
                        className="mb-2 px-5 rounded-lg drop-shadow-md"
                        type="date"
                        {...register("date")}
                    />{" "}
                    <br />
                    <textarea
                        className="mb-2 px-5 py-2 rounded-lg drop-shadow-md"
                        type="text"
                        placeholder="Details"
                        {...register("details")}
                    />{" "}
                    <br />
                    <input
                        className=" bg-green-400 py-1 px-5 rounded-lg drop-shadow-md hover:text-white hover:bg-green-600 hover:font-semibold"
                        type="submit"
                        value="Submit"
                    />
                </div>
            </form>
        </div>
    );
};

export default Calender;
