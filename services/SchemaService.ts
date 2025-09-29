import Ajv from "ajv";

export class SchemaService {
  private readonly ajv: Ajv;

  constructor() {
    this.ajv = new Ajv();
  }

  validateSchema(schema: object, data: object): boolean {
    const validate = this.ajv.compile(schema);
    return validate(data);
  }
}
