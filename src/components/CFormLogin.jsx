import React from "react";
import { Badge, Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
function CFormLogin({ onSubmit }) {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <Badge color="info"><h3>Demo user</h3> username: "mor_2314"<br/> password: "83r5^_"</Badge>
        <div className="mb-2 block">
          <Label htmlFor="username" value="Username" />
        </div>
        <TextInput
          {...register("username", { required: true, maxLength: 20 })}
          id="username"
          type="username"
          placeholder="Username"
          required={true}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput
          {...register("password")}
          id="password1"
          type="password"
          placeholder="Password"
          required={true}
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox {...register("remember")} id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit">Login</Button>
    </form>
  );
}

export default React.memo(CFormLogin);
