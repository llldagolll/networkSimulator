import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
@ObjectType()
export class Blog {
  @Field(() => String)
  _id: string;

  @Prop()
  @Field(() => String, { description: 'Blog Title' })
  title: string;

  @Prop()
  @Field(() => String, { description: 'Blog Description' })
  description: string;
}


export type BlogDocument = Blog & Document;

export const BlogSchema = SchemaFactory.createForClass(Blog);
