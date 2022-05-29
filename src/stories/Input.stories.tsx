import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./components/Input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    icon: { options: ["user", "password"], control: { type: "radio" } },
    feedback: {
      options: ["error", "success", null],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "input1",
  placeholder: "username",
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "input2",
  placeholder: "password",
  icon: "password",
  disabled: true,
};

export const Label = Template.bind({});
Label.args = {
  id: "input3",
  label: "name",
  placeholder: "nickname",
  focus: true,
};

export const Feedback = Template.bind({});
Feedback.args = {
  id: "input3",
  placeholder: "nickname",
  feedback: "success",
};

export const Icon = Template.bind({});
Icon.args = {
  id: "input4",
  placeholder: "nome completo",
  icon: "user",
};
