import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class CreateNodeInput {
  @Field()
  @IsNotEmpty()
  username: string;
}
