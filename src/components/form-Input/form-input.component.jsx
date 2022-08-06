import { FormGroupLabel, FormGroup, Forminputbox } from "./form-input.styles";

const Forminput = (props) => {
  const { label, inputOptions } = props;
  return (
    <FormGroup>
      <Forminputbox {...inputOptions} />
      {label && (
        <FormGroupLabel shrink={inputOptions.value.length}>
          {label}
        </FormGroupLabel>
      )}
    </FormGroup>
  );
};
export default Forminput;
