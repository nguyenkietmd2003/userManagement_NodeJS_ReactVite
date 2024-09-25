import React from "react";
import { Button, Checkbox, Form, Input, notification } from "antd";
import { createUserAPI } from "../util/api";
import { useNavigate } from "react-router-dom";
const RegisterPage = () => {
  const navigate = useNavigate();
  // fetch api
  const onFinish = async (values) => {
    const { name, email, password } = values;
    const res = await createUserAPI(name, email, password);
    if (res) {
      notification.success({
        message: "Successfully registered user",
        description: "Success",
      });
      navigate("/login");
    } else
      notification.error({
        message: "Failed to register user",
        description: "Error",
      });
    console.log(">> Successfully registered", res);
  };

  return (
    <div className="m-12">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterPage;
