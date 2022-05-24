import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./components/Button";
import { IoAdd } from "react-icons/io5";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { label: { type: "string" } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  variant: "filled",
};

export const Outline = Template.bind({});
Outline.args = {
  label: "Outline",
  variant: "outline",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  variant: "filled",
  disabled: true,
};

export const Success = Template.bind({});
Success.args = {
  label: "Positive",
  variant: "filled",
  semantic: "positive",
};

export const Error = Template.bind({});
Error.args = {
  label: "Negative",
  variant: "filled",
  semantic: "negative",
};

export const Icon = Template.bind({});
Icon.args = {
  label: (
    <>
      Add
      <IoAdd color="#f2f2fa" size={20} />
    </>
  ),
  variant: "filled",
};
