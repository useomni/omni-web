import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "./components/Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "checkbox1",
  label: "Label",
};
