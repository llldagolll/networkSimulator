import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BlogService } from './blog.service';
import { CreateBlogInput } from './dto/create-blog.input';
import { UpdateBlogInput } from './dto/update-blog.input';
import { Blog } from './entities/blog.entity';

@Resolver(() => Blog)
export class BlogResolver {
  constructor(private readonly blogService: BlogService) { }

  @Mutation(() => Blog)
  createBlog(@Args('createBlogInput') createBlogInput: CreateBlogInput) {
    return this.blogService.create(createBlogInput)
  }

  @Query(() => [Blog], { name: 'blog' })
  findAll() {
    console.log('Hai');;
    return this.blogService.findAll();
  }

  @Query(() => Blog, { name: 'blog' })
  findOne(@Args('_id', { type: () => String }) id: string) {
    return this.blogService.findOne(id);
  }

  @Mutation(() => Blog)
  update(@Args('updateBlogInput') updateBlogInput: UpdateBlogInput) {
    return this.blogService.update(updateBlogInput._id, updateBlogInput);
  }

}
