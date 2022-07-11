import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";
import { XYPosition, Data, Position } from "src/nodes/model/type";

@InputType()
export class UpdateNodeInput {
  @Field()
  @IsNotEmpty()
  userId: string;

  @Field(() => String, { description: 'node id', nullable: true })
  id: string;

  @Field(() => String, { description: 'position', nullable: true })
  position: XYPosition;

  @Field(() => String, { description: 'label', nullable: true })
  data: Data;

  @Field(() => String, { description: 'node type', nullable: true })
  type: string

  @Field(() => String, { description: 'request port', nullable: true })
  requestPort?: string

  @Field(() => String, { description: 'response port', nullable: true })
  responsePort?: string

  @Field(() => String, { description: 'inbound port', nullable: true })
  inboundPort?: string



  @Field(() => String, { description: 'outbound port', nullable: true })
  outboundPort?: string



  @Field(() => String, { description: 'parentNode ', nullable: true })
  parentNode?: string;



  @Field(() => String, { description: 'expand parent', nullable: true })
  expandParent?: boolean;



  @Field(() => String, { description: 'target position', nullable: true })
  targetPosition?: Position;



  @Field(() => String, { description: 'source position', nullable: true })
  sourcePosition?: Position;

}
