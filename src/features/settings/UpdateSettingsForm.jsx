import styled from "styled-components";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useSetting } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSetting();

  const { isUpdateing, updateSetting } = useUpdateSetting();
  function handleSubmit(e, field) {
    const { value } = e.target;
    if (!value) return;
    updateSetting({ [field]: value });
  }
  if (isLoading) return <Spinner />;
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Label htmlFor="min-nights">Minimum nights/booking</Label>
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          disabled={isUpdateing}
          onBlur={(e) => handleSubmit(e, "minBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Label htmlFor="max-nights">Maximum nights/booking</Label>
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          disabled={isUpdateing}
          onBlur={(e) => handleSubmit(e, "maxBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Label htmlFor="max-guests">Maximum guests/booking</Label>
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
          disabled={isUpdateing}
          onBlur={(e) => handleSubmit(e, "maxGuestsPerBooking")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Label htmlFor="breakfast-price">Breakfast price</Label>
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          disabled={isUpdateing}
          onBlur={(e) => handleSubmit(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
