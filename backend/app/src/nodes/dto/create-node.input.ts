import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateNodeInput {
  @Field(() => String, { description: 'user id' })
  userId: string;

  @Field(() => String, { description: 'user name' })
  username: string;

}
