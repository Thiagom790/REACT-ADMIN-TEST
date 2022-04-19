import { Box, Card, Typography } from "@material-ui/core";
import { CreateProps } from "react-admin";
// import { TextField } from "@material-ui/core";
import { Form, Field } from "react-final-form";
import { Mutator } from "final-form";

// interface TextInputProps extends FieldProps<string, any> {}

// function TextInput(props: TextInputProps) {
//   console.log(props);
//   return (
//     <Field name="Sheet">
//       <TextField variant="outlined" />;
//     </Field>
//   );
// }

export function CreateSheet(props: CreateProps) {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const cepMutator: Mutator<{ sheet: string; message: string }> = (
    _,
    state,
    tools
  ) => {
    console.log("Cep");
    const value = (state.formState.values as { sheet: string; message: string })
      ?.sheet;
    if (value === "cep") {
      tools.changeValue(state, "message", () => "Isso é um teste");
    }
  };

  return (
    <Card>
      <Typography variant="body1">Final Form Sheet</Typography>
      <Form
        onSubmit={handleSubmit}
        // debug={(props) => console.log(props)}
        mutators={{
          cepMutator,
          // testMutator,
        }}
      >
        {({ handleSubmit, hasValidationErrors, form }) => (
          <form onSubmit={handleSubmit}>
            <Box>
              <Field
                name="sheet"
                render={({ input }) => (
                  <input
                    {...input}
                    onBlur={form.mutators.cepMutator}
                    // onChange={() => form.mutators.v()}
                  />
                )}
                validate={(value) => !value}
              />
            </Box>
            <Box>
              <Field
                name="message"
                component="input"
                validate={(value) => !value}
              />
            </Box>
            <button type="submit" disabled={hasValidationErrors}>
              Enviar
            </button>
          </form>
        )}
      </Form>
    </Card>
  );
}
