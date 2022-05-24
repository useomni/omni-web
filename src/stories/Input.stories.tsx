import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./components/Input";

export default {
  title: "Components/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "input1",
  placeholder: "username",
};

export const Label = Template.bind({});
Label.args = {
  id: "input2",
  label: "name",
  placeholder: "nickname",
  focus: true,
};

export const Error = Template.bind({});
Error.args = {
  id: "input2",
  placeholder: "nickname",
  error: true,
};
