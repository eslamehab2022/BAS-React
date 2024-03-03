import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCheckbox, useInput, useSelect } from "@/hooks";
import { Checkbox, Input, Progress } from "@/components";
import { Select } from "@/components";
const Test = () => {

    const [submitted, setSubmitted] = useState(false);
    const fullName = useInput('', "", true);
    const phoneNumber = useInput('', "number", true);
    const age = useInput('+2', "", true);
    const password = useInput('', "password", true);
    const regaxInput = /^[ء-ي]+$/
    // const fullNameVaildation=regaxInput.test(fullName)

    const [price, setPrice] = useState(100)

    const roles = [
        {
            value: 1,
            label: "test 1"
        },
        {
            value: 2,
            label: "test 2"
        }
    ]
    const roleId = useSelect('', "select");

    const isAdmin = useCheckbox(false, 'agreement', 'checked', false);


    useEffect(() => {
        fullName.changeValue("fullName");
        phoneNumber.changeValue("01019084872");
        password.changeValue("123456Ab@");
        roleId.changeValue({ value: "_id", label: "title" });
    }, []);




    // handel Add
    const handelSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true)
        const data = {
            fullName: fullName.value,
            phoneNumber: phoneNumber.value,
            password: password.value,
            roleId: roleId.value?.value || null,
            role: isAdmin?.checked ? "admin" : "employee",
        }
        setTimeout(() => {
            setSubmitted(false)

        }, 2000);
        // console.log(data);
    };

    return (
        <>


            <Form
                className="row"
                onSubmit={handelSubmit}
            >

                <div className="mb-4 col-md-6">
                    <Input label={"Full Name"} {...fullName.bind} mandatory />
                </div>
                <div className="mb-4 col-md-6">
                    <Input label={"Phone Number"} {...phoneNumber.bind} />
                </div>
                <div className="mb-4 col-md-6">
                    <Input label={"Age"} {...age.bind} mandatory />
                </div>
                <div className="mb-4 col-md-6">
                    <Input label={"Password"}  {...password.bind} mandatory />
                </div>
                <div className="mb-4 col-md-6">
                    <Input label={"Price"}
                        mandatory
                        submitted={submitted}
                        value={price}
                        onChange={(e) => {
                            setPrice(+e.target.value)
                        }}
                        validator={{ valid: price >= 150 && price <= 100 && !isNaN(price), message: "value is invalid" }}

                    />

                </div>


                <div className="mb-4 col-md-6">
                    <Select
                        mandatory
                        label={"Role"}
                        {...roleId.bind}
                        options={roles}
                    />
                </div>

                <div className="mb-4 col-md-6">
                    <div className="form-group">
                        <Checkbox
                            label={"Is Admin"}
                            {...isAdmin.bind}
                        />
                    </div>
                </div>


                <div className="col-12 text-end">
                    <Button
                        className="px-5"
                        disabled={!fullName.value || !+phoneNumber?.value || !password.value || !roleId.value?.value}
                        variant="outline-primary"
                        type={"submit"}
                    >
                        <span>save</span>
                        <span> {submitted ? <Progress /> : ""} </span>
                    </Button>
                </div>
            </Form>

        </>
    );
};

export default Test;