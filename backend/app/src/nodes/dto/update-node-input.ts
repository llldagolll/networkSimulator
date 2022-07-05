import { Field, InputType, PartialType } from "@nestjs/graphql";
import { CreateNodeInput } from "./create-node.input";

@InputType()
export class UpdateNodeInput extends PartialType(CreateNodeInput) {
  @Field(() => String, { description: 'user id' })
  userId: string;
}
