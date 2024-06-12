import { FormEditor } from '@bpmn-io/form-js';

const formEditor = new FormEditor({
  container: document.querySelector('#form-editor'),
});

await formEditor.importSchema(schema);